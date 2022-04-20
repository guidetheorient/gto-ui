var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, inject, normalizeClass, createVNode, withCtx, createBlock, createCommentVNode, createTextVNode, toDisplayString, nextTick, Fragment, renderList, ref, watch, provide, withDirectives, Teleport, Transition, vShow } from "vue";
const toString = Object.prototype.toString;
const isNumber$1 = (v) => toString.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang$1 = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__$4 = {
  name: "GIcon"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    size: {
      type: [String, Number],
      validator: (v) => isNumber$1(v) || isValidCssSize(v)
    },
    color: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      let style2 = {};
      const { size, color } = props;
      if (size) {
        style2.fontSize = isValidCssSize(size) ? size : isNumber$1(size) ? size + "px" : "";
      }
      if (color) {
        style2.color = color;
      }
      return style2;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: "g-icon",
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const cascaderContextKey = Symbol("cascaderContextKey");
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5L207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [_hoisted_2$2];
var CheckOutlined = defineComponent({
  name: "CheckOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [_hoisted_2$1];
var MinusOutlined = defineComponent({
  name: "MinusOutlined",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2];
var RightOutlined = defineComponent({
  name: "RightOutlined",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3);
  }
});
var GCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["disabled"];
const __default__$3 = {
  name: "GCheckbox"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    modelValue: {
      type: Boolean
    },
    label: {},
    value: {},
    disabled: {
      type: Boolean
    },
    indeterminate: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-checkbox";
    const checkboxGroupContext = inject(checkboxGroupContextKey, null);
    const _modelValue = computed(() => {
      return props.modelValue;
    });
    const isGroup = computed(() => {
      return !!checkboxGroupContext;
    });
    const isChecked = computed(() => {
      var _a;
      if (isGroup.value) {
        return (_a = checkboxGroupContext.modelValue.value) == null ? void 0 : _a.includes(props.value);
      }
      return !!_modelValue.value;
    });
    const isDisabled = computed(() => {
      var _a, _b;
      if (isGroup.value) {
        const { modelValue, min, max } = checkboxGroupContext;
        if (isNumber(min.value) && ((_a = modelValue.value) == null ? void 0 : _a.length) <= min.value) {
          return isChecked.value;
        } else if (isNumber(max.value) && ((_b = modelValue.value) == null ? void 0 : _b.length) >= max.value) {
          return !isChecked.value;
        }
      }
      return props.disabled;
    });
    const isIndeterminate = computed(() => props.indeterminate);
    function onChange(e) {
      if (isGroup.value) {
        checkboxGroupContext.updateModelValue(props.value);
      } else {
        emit("update:modelValue", !props.modelValue);
        nextTick(() => {
          emit("change", !props.modelValue);
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          ns,
          {
            "is-disabled": unref(isDisabled),
            "is-checked": unref(isChecked),
            "is-indeterminate": unref(isIndeterminate)
          }
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([ns + "__input-wrapper"])
        }, [
          createElementVNode("span", {
            class: normalizeClass([ns + "__input-border"])
          }, [
            createVNode(_sfc_main$4, {
              class: normalizeClass([ns + "__icon"])
            }, {
              default: withCtx(() => [
                unref(isChecked) ? (openBlock(), createBlock(unref(CheckOutlined), { key: 0 })) : unref(isIndeterminate) ? (openBlock(), createBlock(unref(MinusOutlined), { key: 1 })) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2),
          createElementVNode("input", {
            type: "checkbox",
            class: normalizeClass([ns + "__input"]),
            disabled: unref(isDisabled),
            onChange
          }, null, 42, _hoisted_1$1)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass([ns + "__label"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label || __props.value), 1)
          ])
        ], 2)
      ], 2);
    };
  }
});
const defaultConfig = {
  multiple: false,
  checkStrictly: false,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled"
};
const useConfig = ({ config }) => {
  return computed(() => {
    return __spreadValues(__spreadValues({}, defaultConfig), config);
  });
};
const calcPathNodes = (node) => {
  const nodes = [node];
  let { parent } = node;
  while (parent) {
    nodes.unshift(parent);
    parent = parent.parent;
  }
  return nodes;
};
let uid = 0;
class Node {
  constructor(data, config, parent, root2 = false) {
    __publicField(this, "uid", uid++);
    const { value: valueKey, label: labelKey, children: childrenKey } = config;
    this.config = config;
    const childrenData = data[childrenKey];
    this.parent = parent;
    const pathNodes = calcPathNodes(this);
    this.level = root2 ? 0 : parent ? parent.level + 1 : 1;
    this.value = data[valueKey];
    this.label = data[labelKey];
    this.childrenData = childrenData;
    this.children = (childrenData || []).map((child) => new Node(child, config, this));
    this.pathNodes = pathNodes;
    this.pathLabels = pathNodes.map((v) => v.label);
    this.pathValues = pathNodes.map((v) => v.value);
    this.isLeaf = !(Array.isArray(childrenData) && childrenData.length);
  }
  broadcast(eventName, ...args) {
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(eventName, ...args);
        child[eventName] && child[eventName](...args);
      }
    });
  }
  parentCheck(checked) {
    this.checked = checked;
    this.indeterminate = false;
  }
  emit(eventName, ...args) {
    const { parent } = this;
    if (parent) {
      parent[eventName] && parent[eventName](...args);
      parent.emit(eventName, ...args);
    }
  }
  childCheck(checked) {
    const { children } = this;
    let childrenLen = children.length;
    let checkedLen = children.reduce((acc, v) => {
      acc = acc + (v.checked ? 1 : v.indeterminate ? 0.5 : 0);
      return acc;
    }, 0);
    this.checked = childrenLen === checkedLen;
    this.indeterminate = checkedLen > 0 && childrenLen !== checkedLen;
  }
  doCheck(checked) {
    const { multiple } = this.config;
    if (multiple) {
      this.checked = checked;
      this.broadcast("parentCheck", checked);
      this.emit("childCheck", checked);
    }
  }
}
function flatNodes(nodes, leafOnly) {
  return nodes.reduce((acc, node) => {
    if (node.isLeaf) {
      acc.push(node);
    } else {
      !leafOnly && acc.push(node);
      acc = acc.concat(flatNodes(node.children, leafOnly));
    }
    return acc;
  }, []);
}
class Store {
  constructor(data, config) {
    const nodes = data.map((v) => new Node(v, config));
    this.nodes = nodes;
    this.allNodes = flatNodes(nodes, false);
    this.leafNodes = flatNodes(nodes, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes;
  }
}
var node_vue_vue_type_style_index_0_lang = "";
const __default__$2 = {
  name: "GCascaderMenuNode"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    node: {
      type: Node
    }
  },
  setup(__props) {
    const props = __props;
    const ns = "g-cascader";
    const cascaderContext = inject(cascaderContextKey, {});
    const { config, checkedNodes, expandingNodes } = cascaderContext;
    const isInPath = computed(() => {
      const expandingNodesVal = expandingNodes.value;
      if (Array.isArray(expandingNodesVal)) {
        return expandingNodesVal.some((v) => v.uid === props.node.uid);
      }
      return false;
    });
    const isChecked = computed(() => {
      const checkedNodesVal = checkedNodes.value;
      if (Array.isArray(checkedNodesVal)) {
        return checkedNodesVal.some((v) => v.uid === props.node.uid);
      }
      return false;
    });
    const isMultiple = computed(() => {
      return config.value.multiple;
    });
    function onOptionClick(node, i) {
      node.active = true;
      cascaderContext.expandMenu(node);
    }
    function onCheckboxChange(v) {
      cascaderContext.checkNodes(props.node, v);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([ns + "__option", { active: unref(isInPath), checked: unref(isChecked) }]),
        onClick: _cache[0] || (_cache[0] = ($event) => onOptionClick(__props.node, _ctx.i))
      }, [
        createElementVNode("div", {
          class: normalizeClass([ns + "__option-left"])
        }, [
          unref(isMultiple) ? (openBlock(), createBlock(_sfc_main$3, {
            key: 0,
            class: normalizeClass([ns + "__checkbox"]),
            modelValue: __props.node.checked,
            indeterminate: __props.node.indeterminate,
            "onUpdate:modelValue": onCheckboxChange
          }, null, 8, ["class", "modelValue", "indeterminate"])) : createCommentVNode("", true),
          createElementVNode("span", {
            class: normalizeClass([ns + "__label"])
          }, toDisplayString(__props.node.label), 3)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass([ns + "__option-right"])
        }, [
          !__props.node.isLeaf ? (openBlock(), createBlock(_sfc_main$4, {
            key: 0,
            class: "g-icon-right"
          }, {
            default: withCtx(() => [
              createVNode(unref(RightOutlined))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isChecked) ? (openBlock(), createBlock(_sfc_main$4, { key: 1 }, {
            default: withCtx(() => [
              createVNode(unref(CheckOutlined))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
var menu_vue_vue_type_style_index_0_lang = "";
const __default__$1 = {
  name: "GCascaderMenu"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    nodes: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const ns = "g-cascader";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass([ns + "__menu"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nodes, (item, i) => {
          return openBlock(), createBlock(_sfc_main$2, {
            key: i,
            node: item
          }, null, 8, ["node"]);
        }), 128))
      ], 2);
    };
  }
});
const isElement = (v) => v instanceof Element;
const nodeList = /* @__PURE__ */ new Map();
let startClick;
document.addEventListener("mousedown", (e) => {
  startClick = e;
});
document.addEventListener("mouseup", (e) => {
  for (const handlers of nodeList.values()) {
    for (const { documentHandler } of handlers) {
      documentHandler(e, startClick);
    }
  }
});
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["value"];
const __default__ = {
  name: "GCascader"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = "g-cascader";
    const visible = ref(false);
    const menus = ref([]);
    const expandingNodes = ref(null);
    const inputValue = ref("");
    const checkedNodes = ref(null);
    const menusStyle = ref({});
    const menusRef = ref(null);
    const cascaderInputRef = ref(null);
    const config = useConfig(props);
    const isMultiple = computed(() => {
      return config.value.multiple;
    });
    let store;
    function toggleShowOptions() {
      visible.value = !visible.value;
    }
    watch(() => props.options, () => {
      initStore();
    }, {
      deep: true,
      immediate: true
    });
    watch(checkedNodes, () => {
      var _a, _b;
      let modelValue;
      if (isMultiple.value) {
        modelValue = checkedNodes.value.map((v) => v.pathValues);
        inputValue.value = checkedNodes.value.map((v) => v.pathLabels.join(" / "));
      } else {
        modelValue = (_a = checkedNodes.value) == null ? void 0 : _a[0].pathValues;
        inputValue.value = (_b = checkedNodes.value) == null ? void 0 : _b[0].pathLabels.join(" / ");
      }
      emit("update:modelValue", modelValue);
      emit("change", modelValue);
    });
    watch(visible, (val) => {
      if (val && props.appendToBody) {
        menusStyle.value = useOptionsPosition(cascaderInputRef);
      }
    });
    function initStore() {
      store = new Store(props.options, config.value);
      menus.value = [store.getNodes()];
    }
    function expandMenu(node) {
      const { level, isLeaf } = node;
      let newMenus = menus.value.slice(0, level);
      if (isLeaf) {
        if (!isMultiple.value) {
          checkedNodes.value = [node];
          visible.value = false;
        }
      } else {
        newMenus.push(node.children);
      }
      expandingNodes.value = node.pathNodes;
      menus.value = newMenus;
    }
    function checkNodes(node, checked) {
      if (isMultiple.value) {
        node.doCheck(checked);
        calcCheckedNodes();
        checked && expandMenu(node);
      }
    }
    function calcCheckedNodes() {
      if (isMultiple.value) {
        checkedNodes.value = store.getFlattedNodes(true).filter((v) => v.checked);
      }
    }
    function onClose(e) {
      console.log("----", e.target);
      visible.value = false;
    }
    function useOptionsPosition(relativeElRef) {
      const scrollY = window.scrollY || document.body.scrollTop;
      const scrollX = window.scrollX || document.body.scrollLeft;
      const { width, left, bottom } = relativeElRef.value.getBoundingClientRect();
      return {
        position: "fixed",
        width: width + "px",
        left: left + scrollX + "px",
        top: bottom + scrollY + "px"
      };
    }
    function getCheckedNodes(leafOnly) {
      return store.getFlattedNodes(leafOnly).filter((v) => v.checked);
    }
    expose({
      getCheckedNodes
    });
    const context = {
      expandMenu,
      checkNodes,
      config,
      expandingNodes,
      checkedNodes
    };
    provide(cascaderContextKey, context);
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, [
        createElementVNode("div", {
          class: normalizeClass([ns + "__input-wrapper"]),
          ref_key: "cascaderInputRef",
          ref: cascaderInputRef,
          onClick: toggleShowOptions
        }, [
          createElementVNode("input", {
            type: "text",
            class: normalizeClass([ns + "__input"]),
            placeholder: "cascader select",
            value: inputValue.value
          }, null, 10, _hoisted_1)
        ], 2),
        (openBlock(), createBlock(Teleport, {
          to: "body",
          disabled: !__props.appendToBody
        }, [
          createVNode(Transition, { name: "cascader-menus" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass([ns + "__menus"]),
                ref_key: "menusRef",
                ref: menusRef,
                style: normalizeStyle(menusStyle.value)
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(menus.value, (menu, i) => {
                  return openBlock(), createBlock(_sfc_main$1, {
                    nodes: menu,
                    key: i
                  }, null, 8, ["nodes"]);
                }), 128))
              ], 6), [
                [vShow, visible.value]
              ])
            ]),
            _: 1
          })
        ], 8, ["disabled"]))
      ], 2)), [
        [unref(ClickOutside), onClose, menusRef.value]
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
