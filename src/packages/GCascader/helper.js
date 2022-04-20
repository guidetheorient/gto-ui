import { computed } from 'vue'

const defaultConfig = {
  multiple: false,
  // 设为 true，则父节点也可选，false 则只有叶子节点可选
  checkStrictly: false,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled'
}

export const useConfig = ({ config }) => {
  return computed(() => {
    return {
      ...defaultConfig,
      ...config
    }
  })
}

const calcPathNodes = (node) => {
  const nodes = [node]
  let { parent } = node

  while (parent) {
    nodes.unshift(parent)
    parent = parent.parent
  }

  return nodes
}

let uid = 0

class Node {
  uid = uid++
  // eslint-disable-next-line max-params
  constructor(data, config, parent, root = false) {
    const { value: valueKey, label: labelKey, children: childrenKey } = config

    this.config = config
    const childrenData = data[childrenKey]
    this.parent = parent
    const pathNodes = calcPathNodes(this)

    this.level = root ? 0 : parent ? parent.level + 1 : 1
    this.value = data[valueKey]
    this.label = data[labelKey]
    this.childrenData = childrenData
    this.children = (childrenData || []).map((child) => new Node(child, config, this))
    this.pathNodes = pathNodes
    this.pathLabels = pathNodes.map((v) => v.label)
    this.pathValues = pathNodes.map((v) => v.value)
    this.isLeaf = !(Array.isArray(childrenData) && childrenData.length)
  }

  // 父节点 check 变化，子节点的响应事件
  broadcast(eventName, ...args) {
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(eventName, ...args)
        child[eventName] && child[eventName](...args)
      }
    })
  }
  parentCheck(checked) {
    this.checked = checked
    this.indeterminate = false
  }

  // 子节点 check 变化，父节点响应事件
  emit(eventName, ...args) {
    const { parent } = this
    if (parent) {
      parent[eventName] && parent[eventName](...args)
      parent.emit(eventName, ...args)
    }
  }
  childCheck(checked) {
    const { children } = this
    let childrenLen = children.length
    let checkedLen = children.reduce((acc, v) => {
      // 保证上上级也可以显示 indeterminate，如果直接看 v.checked 就 +1 的话，上级可以显示 indeterminate 状态，
      // 但上上级因为子层级没有 checked 状态而始终为 checked: false，indeterminate: false 的状态
      acc = acc + (v.checked ? 1 : v.indeterminate ? 0.5 : 0)
      return acc
    }, 0)

    this.checked = childrenLen === checkedLen
    this.indeterminate = checkedLen > 0 && childrenLen !== checkedLen
  }

  doCheck(checked) {
    const { multiple } = this.config
    if (multiple) {
      this.checked = checked
      this.broadcast('parentCheck', checked)
      this.emit('childCheck', checked)
    }
  }
}

function flatNodes(nodes, leafOnly) {
  return nodes.reduce((acc, node) => {
    if (node.isLeaf) {
      acc.push(node)
    } else {
      !leafOnly && acc.push(node)
      acc = acc.concat(flatNodes(node.children, leafOnly))
    }
    return acc
  }, [])
}
function mapNodes(nodes) {}

class Store {
  constructor(data, config) {
    const nodes = data.map((v) => new Node(v, config))
    this.nodes = nodes
    this.allNodes = flatNodes(nodes, false)
    this.leafNodes = flatNodes(nodes, true)
  }
  getNodes() {
    return this.nodes
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes
  }
}

export { Store, Node }
