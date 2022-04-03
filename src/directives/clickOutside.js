const isElement = (v) => v instanceof Element
const nodeList = new Map()

let startClick
document.addEventListener('mousedown', (e) => {
  startClick = e
})
document.addEventListener('mouseup', (e) => {
  for (const handlers of nodeList.values()) {
    for (const { documentHandler } of handlers) {
      documentHandler(e, startClick)
    }
  }
})

function createDocumentHandler(el, binding) {
  let excludes = []
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg
  } else if (isElement(binding.arg)) {
    // due to current implementation on binding type is wrong the type casting is necessary here
    excludes.push(binding.arg)
  }
  return function (mouseup, mousedown) {
    const popperRef = binding.instance.popperRef
    const mouseUpTarget = mouseup.target
    // eslint-disable-next-line no-void
    const mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target
    const isBound = !binding || !binding.instance
    const isTargetExists = !mouseUpTarget || !mouseDownTarget
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget)
    const isSelf = el === mouseUpTarget
    const isTargetExcluded =
      (excludes.length &&
        // eslint-disable-next-line no-void
        excludes.some((item) => (item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget)))) ||
      (excludes.length && excludes.includes(mouseDownTarget))
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget))
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return
    }
    binding.value(mouseup, mousedown)
  }
}

const ClickOutside = {
  beforeMount(el, binding) {
    // there could be multiple handlers on the element
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    })
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, [])
    }
    const handlers = nodeList.get(el)
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue)
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    }
    if (oldHandlerIndex >= 0) {
      // replace the old handler to the new handler
      handlers.splice(oldHandlerIndex, 1, newHandler)
    } else {
      handlers.push(newHandler)
    }
  },
  unmounted(el) {
    // remove all listeners when a component unmounted
    nodeList.delete(el)
  }
}
export default ClickOutside
