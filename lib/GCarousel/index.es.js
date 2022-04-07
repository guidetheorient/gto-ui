import { defineComponent, openBlock, createElementBlock, createElementVNode, computed, normalizeStyle, unref, renderSlot, ref, watch, provide, onMounted, nextTick, onBeforeUnmount, normalizeClass, createVNode, withCtx, Fragment, renderList, withModifiers, getCurrentInstance, inject, onUnmounted } from "vue";
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [_hoisted_2$1];
var LeftOutlined = defineComponent({
  name: "LeftOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
  }
});
const _hoisted_1$1 = {
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
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
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
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
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
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
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
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const toString = Object.prototype.toString;
const isNumber = (v) => toString.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__$2 = {
  name: "GIcon"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    size: {
      type: [String, Number],
      validator: (v) => isNumber(v) || isValidCssSize(v)
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
        style2.fontSize = isValidCssSize(size) ? size : isNumber(size) ? size + "px" : "";
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
const carouselContextKey = Symbol("carouselContextKey");
var GCarousel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["onMouseenter", "onClick"];
const __default__$1 = {
  name: "GCarousel"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    height: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "hover",
      validator: (v) => ["hover", "click"].includes(v)
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3e3
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const ns = "g-carousel";
    let activeIndex = ref(-1);
    const rootRef = ref(null);
    let timer = null;
    const items = ref([]);
    function addItem(item) {
      items.value.push(item);
    }
    function removeItem(uid) {
      const i = items.value.findIndex((item) => item.uid === uid);
      if (i > -1) {
        items.value.splice(i, 1);
      }
    }
    function translateItems(oldIndex) {
      items.value.forEach((item, index2) => item.translateItem(index2, activeIndex.value, oldIndex));
    }
    function startTimer() {
      if (!props.autoplay || timer)
        return;
      timer = setInterval(() => {
        playSlides();
      }, props.interval);
    }
    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }
    function playSlides() {
      activeIndex.value = activeIndex.value + 1 >= items.value.length ? props.loop ? 0 : activeIndex.value : activeIndex.value + 1;
      console.log(activeIndex.value);
    }
    function prev() {
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      setActiveItem(activeIndex.value + 1);
    }
    function setActiveItem(index2) {
      const length = items.value.length;
      activeIndex.value;
      if (index2 < 0) {
        activeIndex.value = props.loop ? length - 1 : 0;
      } else if (index2 > length - 1) {
        activeIndex.value = props.loop ? 0 : length - 1;
      } else {
        activeIndex.value = index2;
      }
    }
    function onDotClick(i) {
      if (props.trigger === "click" && i !== activeIndex.value) {
        activeIndex.value = i;
      }
    }
    function onDotMouseEnter(i) {
      if (props.trigger === "hover" && i !== activeIndex.value) {
        activeIndex.value = i;
      }
    }
    const throttledOnDotMouseEnter = throttle(onDotMouseEnter, 300);
    watch(activeIndex, (val, oldVal) => {
      translateItems(oldVal);
    });
    const context = {
      items,
      activeIndex: activeIndex.value,
      rootRef,
      addItem,
      removeItem
    };
    provide(carouselContextKey, context);
    onMounted(() => {
      nextTick(() => {
        if (props.initialIndex >= 0 && props.initialIndex < items.value.length) {
          activeIndex.value = props.initialIndex;
        }
        startTimer();
      });
    });
    onBeforeUnmount(() => {
      pauseTimer();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns]),
        ref_key: "rootRef",
        ref: rootRef
      }, [
        createElementVNode("div", {
          class: normalizeClass([ns + "__container"]),
          style: normalizeStyle({ height: __props.height })
        }, [
          renderSlot(_ctx.$slots, "default"),
          createElementVNode("div", {
            class: normalizeClass([ns + "__arrow-group"])
          }, [
            createElementVNode("button", {
              class: normalizeClass([ns + "__arrow"]),
              onClick: prev
            }, [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode(unref(LeftOutlined))
                ]),
                _: 1
              })
            ], 2),
            createElementVNode("button", {
              class: normalizeClass([ns + "__arrow"]),
              onClick: next
            }, [
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  createVNode(unref(RightOutlined))
                ]),
                _: 1
              })
            ], 2)
          ], 2)
        ], 6),
        createElementVNode("ul", {
          class: normalizeClass([ns + "__dots"])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, i) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass([ns + "__dot", { "is-active": activeIndex.value === i }]),
              key: i,
              onMouseenter: ($event) => unref(throttledOnDotMouseEnter)(i),
              onClick: withModifiers(($event) => onDotClick(i), ["stop"])
            }, null, 42, _hoisted_1);
          }), 128))
        ], 2)
      ], 2);
    };
  }
});
var GCarouselItem_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "GCarouselItem"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const ns = "g-carousel__item";
    const instance = getCurrentInstance();
    const carouselContext = inject(carouselContextKey);
    let translate = ref(0);
    let animating = ref(false);
    const style = computed(() => {
      const style2 = {
        transform: `translateX(${translate.value}px)`
      };
      return style2;
    });
    function calcTranslate(offsetIndex) {
      var _a;
      return offsetIndex * ((_a = carouselContext.rootRef.value) == null ? void 0 : _a.offsetWidth);
    }
    function processIndex(index2, activeIndex, length) {
      console.log(index2, activeIndex, length);
      if (activeIndex === 0 && index2 === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index2 === 0) {
        return 1;
      }
      return index2 - activeIndex;
    }
    function translateItem(index2, activeIndex, oldIndex) {
      animating.value = index2 === activeIndex || index2 === oldIndex;
      const length = carouselContext.items.value.length;
      if (length > 2) {
        let i = processIndex(index2, activeIndex, length);
        translate.value = calcTranslate(i);
      } else {
        translate.value = calcTranslate(index2 - activeIndex);
      }
    }
    onMounted(() => {
      carouselContext.addItem({
        uid: instance.uid,
        translate: translate.value,
        animating: animating.value,
        translateItem
      });
    });
    onUnmounted(() => {
      carouselContext.removeItem(instance.uid);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns, { "is-animating": animating.value }]),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main$1.name, _sfc_main$1);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
