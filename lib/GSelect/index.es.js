var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { toRefs, provide, openBlock, createElementBlock, normalizeClass, renderSlot, nextTick, computed, normalizeStyle, unref, defineComponent, createElementVNode, ref, watch, onMounted, withDirectives, Fragment, renderList, createTextVNode, toDisplayString, createVNode, withModifiers, withCtx, vModelText, createCommentVNode, createBlock, Teleport, Transition, vShow, inject, onBeforeUnmount } from "vue";
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const selectContextKey = Symbol("selectContextKey");
var GCheckboxGroup_vue_vue_type_style_index_0_lang = "";
const __default__$5 = {
  name: "GCheckboxGroup"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$5, {
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-checkbox-group";
    function updateModelValue(item) {
      let v = props.modelValue;
      if (props.modelValue.includes(item)) {
        let i = props.modelValue.findIndex((v2) => v2 === item);
        v.splice(i, 1);
      } else {
        v.push(item);
      }
      emit("update:modelValue", v);
      nextTick(() => {
        emit("change", v);
      });
    }
    const context = __spreadProps(__spreadValues({}, toRefs(props)), {
      updateModelValue
    });
    provide(checkboxGroupContextKey, context);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const toString$1 = Object.prototype.toString;
const isNumber$1 = (v) => toString$1.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang = "";
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
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5L207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$3 = [_hoisted_2$4];
var CheckOutlined = defineComponent({
  name: "CheckOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [_hoisted_2$3];
var CloseOutlined = defineComponent({
  name: "CloseOutlined",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [_hoisted_2$2];
var DownOutlined = defineComponent({
  name: "DownOutlined",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$1);
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
const _hoisted_3 = [_hoisted_2$1];
var MinusOutlined = defineComponent({
  name: "MinusOutlined",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3);
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
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}
var GSelect_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = ["value", "readonly", "disabled"];
const _hoisted_2 = { key: 0 };
const __default__$3 = {
  name: "GSelect"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    modelValue: {
      required: true
    },
    width: {
      type: String,
      default: "200px"
    },
    disabled: {
      type: Boolean
    },
    filterable: {
      type: Boolean
    },
    filterMethod: {
      type: Function
    },
    multiple: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-select";
    const optionsStyle = ref(null);
    const visible = ref(false);
    const options = ref([]);
    const selected = ref(null);
    const initialInputHeight = ref(0);
    const isOnComposition = ref(false);
    const filterInputWidth = ref(50);
    const query = ref("");
    const selectRootRef = ref(null);
    const inputRef = ref(null);
    const optionsRef = ref(null);
    const tagsRef = ref(null);
    const filterInputRef = ref(null);
    const _width = computed(() => {
      return props.width || "200px";
    });
    const valueLabel = computed({
      get() {
        return getValueLabel();
      },
      set(v) {
        console.log(v);
      }
    });
    const inputReadonly = computed(() => {
      return !props.filterable;
    });
    const debounceTime = computed(() => props.remote ? 300 : 0);
    const allOptionInVisible = computed(() => {
      return options.value.every((option) => {
        return !option.visible;
      });
    });
    watch(visible, (val) => {
      if (val) {
        setPosition();
      }
    });
    watch(() => props.modelValue, () => {
      nextTick(() => {
        calcSelected();
        calcFilterInputWidth();
      });
      if (props.multiple) {
        setInputHeight();
        if (props.filterable) {
          query.value = "";
        }
      }
    }, { deep: true, immediate: true });
    const debouncedQueryChange = debounce((e) => {
      onQueryChange(e.target.value);
    }, debounceTime.value);
    function onQueryChange(val) {
      console.log(val);
      if (isOnComposition.value)
        return;
      if (props.filterMethod) {
        props.filterMethod(val);
      } else {
        options.value.forEach((option) => {
          var _a;
          option.visible = (_a = option.label) == null ? void 0 : _a.includes(val);
        });
      }
      calcFilterInputWidth();
    }
    function calcFilterInputWidth() {
      nextTick(() => {
        if (!props.filterable)
          return;
        let rect = selectRootRef.value.getBoundingClientRect();
        filterInputWidth.value = query.value.length ? Math.min(rect.width - 35, Math.max(50, filterInputRef.value.scrollWidth)) : selected.value.length === 0 ? rect.width - 35 : 50;
      });
      if (visible.value) {
        setPosition();
      }
    }
    function onBlur() {
      query.value = "";
      options.value.forEach((option) => {
        option.visible = true;
      });
    }
    function onComposition(e) {
      if (e.type === "compositionend") {
        isOnComposition.value = false;
      } else {
        isOnComposition.value = true;
      }
    }
    function calcSelected() {
      console.log("calclSelected");
      if (props.multiple) {
        if (Array.isArray(props.modelValue)) {
          selected.value = props.modelValue.reduce((acc, value) => {
            let option = getOption(value);
            if (option)
              acc.push(option);
            return acc;
          }, []);
        }
      } else {
        selected.value = getOption(props.modelValue);
      }
    }
    function getOption(value) {
      let option = options.value.find((option2) => {
        return option2.value === value;
      });
      return option;
    }
    function setInputHeight() {
      nextTick(() => {
        if (!props.multiple)
          return;
        const initialInputHeightVal = initialInputHeight.value;
        const tagsRefVal = tagsRef.value;
        inputRef.value.style.height = selected.value.length ? Math.max(initialInputHeightVal, tagsRefVal ? tagsRefVal.clientHeight + (tagsRefVal.clientHeight > initialInputHeightVal ? 6 : 0) : 0) + "px" : initialInputHeightVal + "px";
        if (visible.value) {
          setPosition();
        }
      });
    }
    function deleteTag({ value }) {
      let _modelValue = props.modelValue.slice();
      let i = _modelValue.indexOf(value);
      if (i > -1)
        _modelValue.splice(i, 1);
      emit("update:modelValue", _modelValue);
      emit("change", _modelValue);
    }
    function addOption(option) {
      options.value.push(option);
    }
    function removeOption(uid) {
      let i = options.value.findIndex((option) => option.uid === uid);
      if (i > -1) {
        options.value.splice(i, 1);
      }
    }
    function onOptionClick({ value }) {
      if (props.multiple) {
        return;
      }
      const valueVal = value.value;
      emit("update:modelValue", valueVal);
      emit("change", valueVal);
      visible.value = false;
    }
    function onCheckboxGroupModelValueUpdate(value) {
      emit("update:modelValue", value);
      emit("change", value);
    }
    function getValueLabel() {
      var _a, _b;
      if (props.multiple) {
        return (_a = selected.value) == null ? void 0 : _a.map((option) => option.label).join(",");
      }
      console.log(selected);
      return (_b = selected.value) == null ? void 0 : _b.label;
    }
    function toggleShowOptions() {
      if (props.disabled)
        return;
      visible.value = !visible.value;
    }
    function setPosition() {
      const scrollY = window.scrollY || document.body.scrollTop;
      const scrollX = window.scrollX || document.body.scrollLeft;
      const { left, height, bottom } = inputRef.value.getBoundingClientRect();
      const width = selectRootRef.value.clientWidth;
      optionsStyle.value = {
        width: width + "px",
        top: bottom + scrollY + "px",
        left: left + scrollX + "px"
      };
    }
    function onClose() {
      visible.value = false;
    }
    if (props.multiple && !Array.isArray(props.modelValue)) {
      emit("update:modelValue", []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      emit("update:modelValue", "");
    }
    onMounted(() => {
      var _a;
      initialInputHeight.value = (_a = inputRef.value) == null ? void 0 : _a.clientHeight;
      if (props.filterable) {
        calcFilterInputWidth();
      }
    });
    const context = __spreadProps(__spreadValues({}, toRefs(props)), {
      addOption,
      removeOption,
      onOptionClick
    });
    provide(selectContextKey, context);
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([ns, { active: visible.value, disabled: __props.disabled }]),
        style: normalizeStyle({ width: unref(_width) }),
        ref_key: "selectRootRef",
        ref: selectRootRef
      }, [
        createElementVNode("div", {
          class: normalizeClass([ns + "__input-wrapper"]),
          onClick: toggleShowOptions
        }, [
          __props.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([ns + "__tags"]),
            ref_key: "tagsRef",
            ref: tagsRef
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(selected.value, (option) => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass([ns + "__tag"]),
                key: option.value
              }, [
                createTextVNode(toDisplayString(option.label) + " ", 1),
                createVNode(_sfc_main$4, {
                  class: normalizeClass([ns + "__icon-close"]),
                  onClick: withModifiers(($event) => deleteTag(option), ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(CloseOutlined))
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])
              ], 2);
            }), 128)),
            __props.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              ref_key: "filterInputRef",
              ref: filterInputRef,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
              class: normalizeClass([ns + "__filter-input"]),
              type: "text",
              style: normalizeStyle({ width: filterInputWidth.value + "px" }),
              onInput: _cache[1] || (_cache[1] = (...args) => unref(debouncedQueryChange) && unref(debouncedQueryChange)(...args)),
              onCompositionstart: onComposition,
              onCompositionupdate: onComposition,
              onCompositionend: onComposition,
              onBlur
            }, null, 38)), [
              [vModelText, query.value]
            ]) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true),
          createElementVNode("input", {
            class: normalizeClass([ns + "__input", { multiple: __props.multiple }]),
            ref_key: "inputRef",
            ref: inputRef,
            value: unref(valueLabel),
            readonly: unref(inputReadonly),
            disabled: __props.disabled
          }, null, 10, _hoisted_1$2),
          createVNode(_sfc_main$4, {
            class: normalizeClass([ns + "__icon-select", { active: visible.value }])
          }, {
            default: withCtx(() => [
              createVNode(unref(DownOutlined))
            ]),
            _: 1
          }, 8, ["class"])
        ], 2),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "select-options" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("div", {
                class: normalizeClass([ns + "__options"]),
                style: normalizeStyle(optionsStyle.value),
                ref_key: "optionsRef",
                ref: optionsRef
              }, [
                createElementVNode("div", {
                  class: normalizeClass([ns + "__options-content"])
                }, [
                  unref(allOptionInVisible) ? (openBlock(), createElementBlock("span", _hoisted_2, "no data available")) : createCommentVNode("", true),
                  __props.multiple ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 1,
                    modelValue: __props.modelValue,
                    "onUpdate:modelValue": onCheckboxGroupModelValueUpdate
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["modelValue"])) : renderSlot(_ctx.$slots, "default", { key: 2 })
                ], 2)
              ], 6), [
                [vShow, visible.value]
              ])
            ]),
            _: 3
          })
        ]))
      ], 6)), [
        [unref(ClickOutside), onClose, optionsRef.value]
      ]);
    };
  }
});
var GOptionGroup_vue_vue_type_style_index_0_lang = "";
const __default__$2 = {
  name: "GOptionGroup"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  setup(__props) {
    const ns = "g-option-group";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, null, 2);
    };
  }
});
var GCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["disabled"];
const __default__$1 = {
  name: "GCheckbox"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
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
var GOption_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["onClick"];
const __default__ = {
  name: "GOption"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    label: {
      type: [String, Number]
    },
    value: {},
    disabled: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const ns = "g-option";
    const selectContext = inject(selectContextKey, null);
    const visible = ref(true);
    const multiple = computed(() => selectContext.multiple.value);
    const active = computed(() => {
      var _a, _b;
      return multiple.value ? (_a = selectContext.modelValue) == null ? void 0 : _a.value.includes(props.value) : ((_b = selectContext.modelValue) == null ? void 0 : _b.value) === props.value;
    });
    function onOptionClick() {
      if (props.disabled)
        return;
      selectContext.onOptionClick(context);
    }
    const context = __spreadValues({
      uid: uniqueId(ns),
      visible
    }, toRefs(props));
    onMounted(() => {
      selectContext.addOption(context);
    });
    onBeforeUnmount(() => {
      selectContext.removeOption(context.uid);
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([ns, { active: unref(active), disabled: __props.disabled }]),
        onClick: withModifiers(onOptionClick, ["stop"])
      }, [
        unref(multiple) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          value: __props.value,
          disabled: __props.disabled
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.label), 1)
          ]),
          _: 1
        }, 8, ["value", "disabled"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(__props.label || __props.value), 1)
        ], 64))
      ], 10, _hoisted_1)), [
        [vShow, visible.value]
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main$3.name, _sfc_main$3);
    app.component(_sfc_main$2.name, _sfc_main$2);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
