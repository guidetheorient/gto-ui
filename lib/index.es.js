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
import { openBlock, createElementBlock, normalizeClass, renderSlot, computed, provide, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, inject, ref, onMounted, nextTick, Transition, unref, createElementVNode, toDisplayString, createCommentVNode, createApp, watch, onBeforeUnmount, createVNode, withDirectives, createTextVNode, vShow, reactive, toRefs, defineComponent, resolveDirective, Fragment, renderList, withModifiers, getCurrentInstance, onUnmounted, vModelText, Teleport } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$k = {
  name: "GButton",
  props: {
    size: {
      type: String,
      validator: (v) => ["large", "default", "small"].includes(v),
      default: "default"
    },
    type: {
      type: String,
      validator: (v) => ["primary", "success", "warning", "danger", "text"].includes(v)
    },
    round: {
      type: Boolean
    },
    circle: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const ElPrefix = "g-button";
    const classes = [
      ElPrefix + `--${props.size}`,
      ElPrefix + `--${props.type}`,
      {
        "is-round": props.round,
        "is-circle": props.circle,
        disabled: props.disabled
      }
    ];
    return {
      classes
    };
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["g-button", $setup.classes])
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
var GButton$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$2], ["__scopeId", "data-v-3136dae6"]]);
var GButton = {
  install(app) {
    app.component(GButton$1.name, GButton$1);
  }
};
const rowContextKey = Symbol("rowContextKey");
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const carouselContextKey = Symbol("carouselContextKey");
const radioGroupContextKey = Symbol("radioGroupContextKey");
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const selectContextKey = Symbol("selectContextKey");
var GRow_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
  name: "GRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed(() => {
      const gutterVal = gutter.value;
      const style2 = {
        marginLeft: 0,
        marginRight: 0
      };
      if (gutterVal) {
        style2.marginLeft = -gutterVal / 2 + "px";
        style2.marginRight = style2.marginLeft;
      }
      return style2;
    });
    return {
      style
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: "g-row",
    style: normalizeStyle($setup.style)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["style"]);
}
var GRow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$1]]);
var GCol_vue_vue_type_style_index_0_lang = "";
const _sfc_main$i = {
  name: "GCol",
  props: {
    span: {
      type: Number,
      validator: (v) => v >= 0 && v <= 24,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    },
    lg: {
      type: Number
    },
    xl: {
      type: Number
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const ns = "g-col";
    const { gutter } = inject(rowContextKey);
    const style = computed(() => {
      const gutterVal = gutter.value;
      const style2 = {
        paddingLeft: 0,
        paddingRight: 0
      };
      if (typeof gutterVal === "number") {
        style2.paddingLeft = style2.paddingRight = gutterVal / 2 + "px";
      }
      return style2;
    });
    const classes = computed(() => {
      const classes2 = [];
      const pos = ["span", "offset", "push", "pull"];
      pos.forEach((key) => {
        let value = props[key];
        if (typeof value === "number") {
          if (key === "span") {
            classes2.push(`${ns}-${value}`);
          } else {
            classes2.push(`${ns}-${key}-${value}`);
          }
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((key) => {
        const value = props[key];
        if (typeof value === "number") {
          classes2.push(`${ns}-${key}-${value}`);
        }
      });
      return classes2;
    });
    return {
      style,
      classes
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass(["g-col", $setup.classes]),
    style: normalizeStyle($setup.style)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
var GCol = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render]]);
var GLayout = {
  install(app) {
    app.component(GRow.name, GRow);
    app.component(GCol.name, GCol);
  }
};
var index_vue_vue_type_style_index_0_lang$6 = "";
const _hoisted_1$h = { class: "g-message__content" };
const _sfc_main$h = {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "success", "warning", "danger"].includes(v)
    },
    message: {
      type: String,
      default: ""
    },
    duartion: {
      type: Number,
      default: 3e3
    },
    placement: {
      type: String,
      default: "top-center",
      validator: (v) => ["top-center", "bottom-center", "top-left", "bottom-left", "top-right", "bottom-right"].includes(v)
    },
    onClick: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    function useTransition({ placement }, calcPosition2) {
      function beforeEnter2(el) {
        el.style.opacity = 0;
      }
      function enter2(el, done) {
        el.style.opacity = 1;
        done();
      }
      function leave2(el, done) {
        el.style.opacity = 0;
        let translateX = 0;
        let translateY = 0;
        const hasCenter = placement.includes("center");
        const hasLeft = placement.includes("left");
        const hasTop = placement.includes("top");
        if (hasCenter) {
          translateY = hasTop ? "-100%" : "100%";
        } else {
          translateX = hasLeft ? "-100%" : "100%";
        }
        el.style.transform = el.style.transform + ` translate3d(${translateX}, ${translateY}, 0)`;
        setTimeout(() => {
          done();
          calcPosition2();
        }, 150);
      }
      return {
        beforeEnter: beforeEnter2,
        enter: enter2,
        leave: leave2
      };
    }
    function usePosition(props2) {
      const position2 = ref({
        left: null,
        right: null,
        top: null,
        bottom: null
      });
      const transform2 = ref({
        translateX: 0
      });
      const isNegativeVerticalStart2 = ref(false);
      props2.placement.split("-").forEach((key) => {
        const positionVal = position2.value;
        const transformVal = transform2.value;
        if (key in positionVal)
          positionVal[key] = "0px";
        if (key === "center") {
          positionVal.left = "50%";
          transformVal.translateX = "-50%";
        }
        if (key === "bottom")
          isNegativeVerticalStart2.value = true;
      });
      return {
        position: position2,
        transform: transform2,
        isNegativeVerticalStart: isNegativeVerticalStart2
      };
    }
    const ns = "g-message";
    let visible = ref(true);
    const classes = computed(() => {
      const classes2 = [`${ns}-${props.placement}`];
      if (props.type) {
        classes2.push(`${ns}--${props.type}`);
      }
      return classes2;
    });
    const { position, transform, isNegativeVerticalStart } = usePosition(props);
    const calcPosition = () => {
      const messageEls = document.querySelectorAll(".g-message-" + props.placement);
      for (let i = 0; i < messageEls.length; i++) {
        let verticalStart = 10;
        for (let j = 0; j < i; j++) {
          verticalStart += messageEls[j].clientHeight + 6;
        }
        for (let key in position.value) {
          if (position.value[key] !== null) {
            messageEls[i].style[key] = position.value[key];
          }
        }
        messageEls[i].style.transform = `translate3d(
      ${transform.value.translateX},
      ${(isNegativeVerticalStart.value ? "-" : "") + verticalStart}px,
        0
      )`;
      }
    };
    const { beforeEnter, enter, leave } = useTransition(props, calcPosition);
    const close = () => {
      visible.value = false;
    };
    expose({ close });
    onMounted(async () => {
      await nextTick();
      calcPosition();
      if (props.duartion) {
        setTimeout(() => {
          close();
        }, props.duartion);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "message",
        onBeforeEnter: unref(beforeEnter),
        onEnter: unref(enter),
        onLeave: unref(leave)
      }, {
        default: withCtx(() => [
          visible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["g-message", unref(classes)]),
            onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args))
          }, [
            createElementVNode("div", _hoisted_1$h, toDisplayString(__props.message), 1)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
    };
  }
};
const message = (options = {}) => {
  const messageApp = createApp(_sfc_main$h, options);
  const instance = messageApp.mount(document.createElement("div"));
  document.body.insertBefore(instance.$el, document.body.firstChild);
  return instance.close;
};
var GMessage = {
  install(app) {
    app.config.globalProperties.$message = message;
  }
};
const toString$1 = Object.prototype.toString;
const isNumber$1 = (v) => toString$1.call(v) === "[object Number]";
const insertAsFirstChildOfBody = (el) => {
  document.body.insertBefore(el, document.body.firstChild);
};
function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}
function removeClass(el, className) {
  el.classList.remove(className);
}
var index_vue_vue_type_style_index_0_lang$5 = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__$g = {
  name: "GIcon"
};
const _sfc_main$g = /* @__PURE__ */ Object.assign(__default__$g, {
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
var GIcon = {
  install(app) {
    app.component(_sfc_main$g.name, _sfc_main$g);
  }
};
var index_vue_vue_type_style_index_0_lang$4 = "";
const __default__$f = {
  name: "GTooltip"
};
const _sfc_main$f = /* @__PURE__ */ Object.assign(__default__$f, {
  props: {
    visible: {
      type: Boolean,
      default: null
    },
    placement: {
      type: String,
      default: "bottom",
      validator: (v) => ["left", "top", "right", "bottom"].includes(v)
    },
    content: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const ns = "g-tooltip";
    const tooltipRef = ref(null);
    const triggerRef = ref(null);
    const pos = ref({
      left: 0,
      top: 0,
      width: "auto"
    });
    const _visible = ref(false);
    let hasAppendToBody = ref(false);
    const controlled = computed(() => props.visible !== null);
    const style = computed(() => {
      return pos.value;
    });
    watch(() => props.visible, (v) => {
      _visible.value = v;
      if (v) {
        show();
      }
    });
    function onMouseEnter(e) {
      if (controlled.value)
        return;
      show();
    }
    function show() {
      if (!props.disabled) {
        _visible.value = true;
        nextTick(() => {
          insertAsFirstChildOfBody(tooltipRef.value);
          changePosition(triggerRef, tooltipRef);
          hasAppendToBody.value = true;
        });
      }
    }
    function onMouseLeave(e) {
      if (controlled.value)
        return;
      hide();
    }
    function hide() {
      _visible.value = false;
    }
    onBeforeUnmount(() => {
      if (hasAppendToBody.value) {
        document.body.removeChild(tooltipRef.value);
      }
    });
    function changePosition(triggerRef2, tooltipRef2) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      let { left, top, width, height, bottom, right } = triggerRef2.value.getBoundingClientRect();
      const { width: tooltipWidth, height: tooltipHeight } = tooltipRef2.value.getBoundingClientRect();
      const offset = 8;
      if (props.placement === "bottom") {
        left = left + width / 2 - tooltipWidth / 2;
        top = scrollTop + bottom + offset;
      } else if (props.placement === "top") {
        left = left + width / 2 - tooltipWidth / 2;
        top = scrollTop + top - tooltipHeight - offset;
      } else if (props.placement === "left") {
        top = scrollTop + top + height / 2 - tooltipHeight / 2;
        left = left - tooltipWidth - offset;
      } else if (props.placement === "right") {
        top = scrollTop + top + height / 2 - tooltipHeight / 2;
        left = right + offset;
      }
      pos.value = {
        left: left + "px",
        top: top + "px"
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns + "__trigger"]),
        ref_key: "triggerRef",
        ref: triggerRef,
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        createVNode(Transition, { name: "g-tooltip-fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass([ns, `${ns}--${__props.placement}`]),
              ref_key: "tooltipRef",
              ref: tooltipRef,
              style: normalizeStyle(unref(style))
            }, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(__props.content), 1)
              ])
            ], 6), [
              [vShow, _visible.value]
            ])
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
var GTooltip = {
  install(app) {
    app.component(_sfc_main$f.name, _sfc_main$f);
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module2, exports2) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE2 = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT2 = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG2 = 1, CLONE_FLAT_FLAG2 = 2, CLONE_SYMBOLS_FLAG2 = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY2 = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN2 = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar2.source);
    var reTrimStart2 = /^\s+/;
    var reWhitespace2 = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags2 = /\w*$/;
    var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary2 = /^0b[01]+$/i;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsOctal2 = /^0o[0-7]+$/i;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
    typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
    var cloneableTags2 = {};
    cloneableTags2[argsTag2] = cloneableTags2[arrayTag2] = cloneableTags2[arrayBufferTag2] = cloneableTags2[dataViewTag2] = cloneableTags2[boolTag2] = cloneableTags2[dateTag2] = cloneableTags2[float32Tag2] = cloneableTags2[float64Tag2] = cloneableTags2[int8Tag2] = cloneableTags2[int16Tag2] = cloneableTags2[int32Tag2] = cloneableTags2[mapTag2] = cloneableTags2[numberTag2] = cloneableTags2[objectTag2] = cloneableTags2[regexpTag2] = cloneableTags2[setTag2] = cloneableTags2[stringTag2] = cloneableTags2[symbolTag2] = cloneableTags2[uint8Tag2] = cloneableTags2[uint8ClampedTag2] = cloneableTags2[uint16Tag2] = cloneableTags2[uint32Tag2] = true;
    cloneableTags2[errorTag2] = cloneableTags2[funcTag2] = cloneableTags2[weakMapTag2] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt2 = parseInt;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports2 = exports2 && !exports2.nodeType && exports2;
    var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
    var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    var freeProcess2 = moduleExports2 && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types2 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types2) {
          return types2;
        }
        return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap2 = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet2 = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array4, setter, iteratee, accumulator) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      while (++index2 < length) {
        var value = array4[index2];
        setter(accumulator, value, iteratee(value), array4);
      }
      return accumulator;
    }
    function arrayEach2(array4, iteratee) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      while (++index2 < length) {
        if (iteratee(array4[index2], index2, array4) === false) {
          break;
        }
      }
      return array4;
    }
    function arrayEachRight(array4, iteratee) {
      var length = array4 == null ? 0 : array4.length;
      while (length--) {
        if (iteratee(array4[length], length, array4) === false) {
          break;
        }
      }
      return array4;
    }
    function arrayEvery(array4, predicate) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      while (++index2 < length) {
        if (!predicate(array4[index2], index2, array4)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter2(array4, predicate) {
      var index2 = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array4[index2];
        if (predicate(value, index2, array4)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array4, value) {
      var length = array4 == null ? 0 : array4.length;
      return !!length && baseIndexOf(array4, value, 0) > -1;
    }
    function arrayIncludesWith(array4, value, comparator) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      while (++index2 < length) {
        if (comparator(value, array4[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap2(array4, iteratee) {
      var index2 = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array4[index2], index2, array4);
      }
      return result;
    }
    function arrayPush2(array4, values) {
      var index2 = -1, length = values.length, offset = array4.length;
      while (++index2 < length) {
        array4[offset + index2] = values[index2];
      }
      return array4;
    }
    function arrayReduce(array4, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      if (initAccum && length) {
        accumulator = array4[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array4[index2], index2, array4);
      }
      return accumulator;
    }
    function arrayReduceRight(array4, iteratee, accumulator, initAccum) {
      var length = array4 == null ? 0 : array4.length;
      if (initAccum && length) {
        accumulator = array4[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array4[length], length, array4);
      }
      return accumulator;
    }
    function arraySome(array4, predicate) {
      var index2 = -1, length = array4 == null ? 0 : array4.length;
      while (++index2 < length) {
        if (predicate(array4[index2], index2, array4)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string3) {
      return string3.split("");
    }
    function asciiWords(string3) {
      return string3.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array4, predicate, fromIndex, fromRight) {
      var length = array4.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array4[index2], index2, array4)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array4, value, fromIndex) {
      return value === value ? strictIndexOf(array4, value, fromIndex) : baseFindIndex(array4, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array4, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array4.length;
      while (++index2 < length) {
        if (comparator(array4[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array4, iteratee) {
      var length = array4 == null ? 0 : array4.length;
      return length ? baseSum(array4, iteratee) / length : NAN2;
    }
    function baseProperty(key) {
      return function(object4) {
        return object4 == null ? undefined$1 : object4[key];
      };
    }
    function basePropertyOf(object4) {
      return function(key) {
        return object4 == null ? undefined$1 : object4[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array4, comparer) {
      var length = array4.length;
      array4.sort(comparer);
      while (length--) {
        array4[length] = array4[length].value;
      }
      return array4;
    }
    function baseSum(array4, iteratee) {
      var result, index2 = -1, length = array4.length;
      while (++index2 < length) {
        var current = iteratee(array4[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes2(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object4, props) {
      return arrayMap2(props, function(key) {
        return [key, object4[key]];
      });
    }
    function baseTrim2(string3) {
      return string3 ? string3.slice(0, trimmedEndIndex2(string3) + 1).replace(reTrimStart2, "") : string3;
    }
    function baseUnary2(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object4, props) {
      return arrayMap2(props, function(key) {
        return object4[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array4, placeholder) {
      var length = array4.length, result = 0;
      while (length--) {
        if (array4[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue2(object4, key) {
      return object4 == null ? undefined$1 : object4[key];
    }
    function hasUnicode(string3) {
      return reHasUnicode.test(string3);
    }
    function hasUnicodeWord(string3) {
      return reHasUnicodeWord.test(string3);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array4, placeholder) {
      var index2 = -1, length = array4.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array4[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array4[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array4, value, fromIndex) {
      var index2 = fromIndex - 1, length = array4.length;
      while (++index2 < length) {
        if (array4[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array4, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array4[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string3) {
      return hasUnicode(string3) ? unicodeSize(string3) : asciiSize(string3);
    }
    function stringToArray(string3) {
      return hasUnicode(string3) ? unicodeToArray(string3) : asciiToArray(string3);
    }
    function trimmedEndIndex2(string3) {
      var index2 = string3.length;
      while (index2-- && reWhitespace2.test(string3.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string3) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string3)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string3) {
      return string3.match(reUnicode) || [];
    }
    function unicodeWords(string3) {
      return string3.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto2 = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
      var coreJsData2 = context["__core-js_shared__"];
      var funcToString2 = funcProto2.toString;
      var hasOwnProperty2 = objectProto2.hasOwnProperty;
      var idCounter2 = 0;
      var maskSrcKey2 = function() {
        var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString2 = objectProto2.toString;
      var objectCtorString = funcToString2.call(Object2);
      var oldDash = root2._;
      var reIsNative2 = RegExp2("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer3 = moduleExports2 ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array3 = context.Uint8Array, allocUnsafe2 = Buffer3 ? Buffer3.allocUnsafe : undefined$1, getPrototype2 = overArg2(Object2.getPrototypeOf, Object2), objectCreate2 = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty2 = function() {
        try {
          var func = getNative2(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols2 = Object2.getOwnPropertySymbols, nativeIsBuffer2 = Buffer3 ? Buffer3.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto2.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax2 = Math2.max, nativeMin2 = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto2.reverse;
      var DataView2 = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap2 = getNative2(context, "WeakMap"), nativeCreate2 = getNative2(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
      var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : undefined$1, symbolToString2 = symbolProto2 ? symbolProto2.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate2 = function() {
        function object4() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate2) {
            return objectCreate2(proto);
          }
          object4.prototype = proto;
          var result2 = new object4();
          object4.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate2(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray2(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray2(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray2(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array4 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array4), isRight = dir < 0, arrLength = isArr ? array4.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin2(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array4, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array4[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type4 = data.type, computed2 = iteratee2(value);
              if (type4 == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type4 == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate2(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear2() {
        this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
        this.size = 0;
      }
      function hashDelete2(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet2(key) {
        var data = this.__data__;
        if (nativeCreate2) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED2 ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas2(key) {
        var data = this.__data__;
        return nativeCreate2 ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet2(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate2 && value === undefined$1 ? HASH_UNDEFINED2 : value;
        return this;
      }
      Hash2.prototype.clear = hashClear2;
      Hash2.prototype["delete"] = hashDelete2;
      Hash2.prototype.get = hashGet2;
      Hash2.prototype.has = hashHas2;
      Hash2.prototype.set = hashSet2;
      function ListCache2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear2() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete2(key) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice2.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet2(key) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas2(key) {
        return assocIndexOf2(this.__data__, key) > -1;
      }
      function listCacheSet2(key, value) {
        var data = this.__data__, index2 = assocIndexOf2(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache2.prototype.clear = listCacheClear2;
      ListCache2.prototype["delete"] = listCacheDelete2;
      ListCache2.prototype.get = listCacheGet2;
      ListCache2.prototype.has = listCacheHas2;
      ListCache2.prototype.set = listCacheSet2;
      function MapCache2(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear2() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash2(),
          "map": new (Map2 || ListCache2)(),
          "string": new Hash2()
        };
      }
      function mapCacheDelete2(key) {
        var result2 = getMapData2(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet2(key) {
        return getMapData2(this, key).get(key);
      }
      function mapCacheHas2(key) {
        return getMapData2(this, key).has(key);
      }
      function mapCacheSet2(key, value) {
        var data = getMapData2(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache2.prototype.clear = mapCacheClear2;
      MapCache2.prototype["delete"] = mapCacheDelete2;
      MapCache2.prototype.get = mapCacheGet2;
      MapCache2.prototype.has = mapCacheHas2;
      MapCache2.prototype.set = mapCacheSet2;
      function SetCache(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache2();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED2);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack2(entries) {
        var data = this.__data__ = new ListCache2(entries);
        this.size = data.size;
      }
      function stackClear2() {
        this.__data__ = new ListCache2();
        this.size = 0;
      }
      function stackDelete2(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet2(key) {
        return this.__data__.get(key);
      }
      function stackHas2(key) {
        return this.__data__.has(key);
      }
      function stackSet2(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache2) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache2(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack2.prototype.clear = stackClear2;
      Stack2.prototype["delete"] = stackDelete2;
      Stack2.prototype.get = stackGet2;
      Stack2.prototype.has = stackHas2;
      Stack2.prototype.set = stackSet2;
      function arrayLikeKeys2(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex2(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array4) {
        var length = array4.length;
        return length ? array4[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array4, n) {
        return shuffleSelf(copyArray2(array4), baseClamp(n, 0, array4.length));
      }
      function arrayShuffle(array4) {
        return shuffleSelf(copyArray2(array4));
      }
      function assignMergeValue(object4, key, value) {
        if (value !== undefined$1 && !eq2(object4[key], value) || value === undefined$1 && !(key in object4)) {
          baseAssignValue2(object4, key, value);
        }
      }
      function assignValue2(object4, key, value) {
        var objValue = object4[key];
        if (!(hasOwnProperty2.call(object4, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object4)) {
          baseAssignValue2(object4, key, value);
        }
      }
      function assocIndexOf2(array4, key) {
        var length = array4.length;
        while (length--) {
          if (eq2(array4[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign2(object4, source) {
        return object4 && copyObject2(source, keys2(source), object4);
      }
      function baseAssignIn2(object4, source) {
        return object4 && copyObject2(source, keysIn2(source), object4);
      }
      function baseAssignValue2(object4, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object4, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object4[key] = value;
        }
      }
      function baseAt(object4, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object4 == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get(object4, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number4, lower, upper) {
        if (number4 === number4) {
          if (upper !== undefined$1) {
            number4 = number4 <= upper ? number4 : upper;
          }
          if (lower !== undefined$1) {
            number4 = number4 >= lower ? number4 : lower;
          }
        }
        return number4;
      }
      function baseClone2(value, bitmask, customizer, key, object4, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG2, isFlat = bitmask & CLONE_FLAT_FLAG2, isFull = bitmask & CLONE_SYMBOLS_FLAG2;
        if (customizer) {
          result2 = object4 ? customizer(value, key, object4, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result2 = initCloneArray2(value);
          if (!isDeep) {
            return copyArray2(value, result2);
          }
        } else {
          var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
          if (isBuffer2(value)) {
            return cloneBuffer2(value, isDeep);
          }
          if (tag == objectTag2 || tag == argsTag2 || isFunc && !object4) {
            result2 = isFlat || isFunc ? {} : initCloneObject2(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn2(value, baseAssignIn2(result2, value)) : copySymbols2(value, baseAssign2(result2, value));
            }
          } else {
            if (!cloneableTags2[tag]) {
              return object4 ? value : {};
            }
            result2 = initCloneByTag2(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack2());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet2(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone2(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap2(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn2 : getAllKeys2 : isFlat ? keysIn2 : keys2;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach2(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue2(result2, key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys2(source);
        return function(object4) {
          return baseConformsTo(object4, source, props);
        };
      }
      function baseConformsTo(object4, source, props) {
        var length = props.length;
        if (object4 == null) {
          return !length;
        }
        object4 = Object2(object4);
        while (length--) {
          var key = props[length], predicate = source[key], value = object4[key];
          if (value === undefined$1 && !(key in object4) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array4, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array4.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap2(values2, baseUnary2(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE2) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array4[index2], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array4, iteratee2, comparator) {
        var index2 = -1, length = array4.length;
        while (++index2 < length) {
          var value = array4[index2], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array4, value, start, end) {
        var length = array4.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array4[start++] = value;
        }
        return array4;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array4, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array4.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array4[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush2(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object4, iteratee2) {
        return object4 && baseFor(object4, iteratee2, keys2);
      }
      function baseForOwnRight(object4, iteratee2) {
        return object4 && baseForRight(object4, iteratee2, keys2);
      }
      function baseFunctions(object4, props) {
        return arrayFilter2(props, function(key) {
          return isFunction2(object4[key]);
        });
      }
      function baseGet(object4, path) {
        path = castPath(path, object4);
        var index2 = 0, length = path.length;
        while (object4 != null && index2 < length) {
          object4 = object4[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object4 : undefined$1;
      }
      function baseGetAllKeys2(object4, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object4);
        return isArray2(object4) ? result2 : arrayPush2(result2, symbolsFunc(object4));
      }
      function baseGetTag2(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag2 : nullTag2;
        }
        return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object4, key) {
        return object4 != null && hasOwnProperty2.call(object4, key);
      }
      function baseHasIn(object4, key) {
        return object4 != null && key in Object2(object4);
      }
      function baseInRange(number4, start, end) {
        return number4 >= nativeMin2(start, end) && number4 < nativeMax2(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array4 = arrays[othIndex];
          if (othIndex && iteratee2) {
            array4 = arrayMap2(array4, baseUnary2(iteratee2));
          }
          maxLength = nativeMin2(array4.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array4.length >= 120) ? new SetCache(othIndex && array4) : undefined$1;
        }
        array4 = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array4[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object4, setter, iteratee2, accumulator) {
        baseForOwn(object4, function(value, key, object5) {
          setter(accumulator, iteratee2(value), key, object5);
        });
        return accumulator;
      }
      function baseInvoke(object4, path, args) {
        path = castPath(path, object4);
        object4 = parent(object4, path);
        var func = object4 == null ? object4 : object4[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object4, args);
      }
      function baseIsArguments2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
      }
      function baseIsDate(value) {
        return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object4), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag2(object4), othTag = othIsArr ? arrayTag2 : getTag2(other);
        objTag = objTag == argsTag2 ? objectTag2 : objTag;
        othTag = othTag == argsTag2 ? objectTag2 : othTag;
        var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object4)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack2());
          return objIsArr || isTypedArray2(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack2());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack2());
        return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap2(value) {
        return isObjectLike2(value) && getTag2(value) == mapTag2;
      }
      function baseIsMatch(object4, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object4 == null) {
          return !length;
        }
        object4 = Object2(object4);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object4[data[0]] : !(data[0] in object4)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object4[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object4)) {
              return false;
            }
          } else {
            var stack = new Stack2();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object4, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative2(value) {
        if (!isObject2(value) || isMasked2(value)) {
          return false;
        }
        var pattern4 = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
        return pattern4.test(toSource2(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
      }
      function baseIsSet2(value) {
        return isObjectLike2(value) && getTag2(value) == setTag2;
      }
      function baseIsTypedArray2(value) {
        return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys2(object4) {
        if (!isPrototype2(object4)) {
          return nativeKeys2(object4);
        }
        var result2 = [];
        for (var key in Object2(object4)) {
          if (hasOwnProperty2.call(object4, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn2(object4) {
        if (!isObject2(object4)) {
          return nativeKeysIn2(object4);
        }
        var isProto = isPrototype2(object4), result2 = [];
        for (var key in object4) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object4, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object4) {
          return object4 === source || baseIsMatch(object4, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object4) {
          var objValue = get(object4, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object4, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object4, source, srcIndex, customizer, stack) {
        if (object4 === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack2());
          if (isObject2(srcValue)) {
            baseMergeDeep(object4, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object4, key), srcValue, key + "", object4, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object4, key, newValue);
          }
        }, keysIn2);
      }
      function baseMergeDeep(object4, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object4, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object4, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object4, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray2(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer2(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray2(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments2(srcValue)) {
            newValue = objValue;
            if (isArguments2(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject2(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object4, key, newValue);
      }
      function baseNth(array4, n) {
        var length = array4.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex2(n, length) ? array4[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap2(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index2 = -1;
        iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap2(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object4, other) {
          return compareMultiple(object4, other, orders);
        });
      }
      function basePick(object4, paths) {
        return basePickBy(object4, paths, function(value, path) {
          return hasIn(object4, path);
        });
      }
      function basePickBy(object4, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet(object4, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object4), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object4) {
          return baseGet(object4, path);
        };
      }
      function basePullAll(array4, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array4;
        if (array4 === values2) {
          values2 = copyArray2(values2);
        }
        if (iteratee2) {
          seen = arrayMap2(array4, baseUnary2(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array4) {
              splice2.call(seen, fromIndex, 1);
            }
            splice2.call(array4, fromIndex, 1);
          }
        }
        return array4;
      }
      function basePullAt(array4, indexes) {
        var length = array4 ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex2(index2)) {
              splice2.call(array4, index2, 1);
            } else {
              baseUnset(array4, index2);
            }
          }
        }
        return array4;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax2(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string3, n) {
        var result2 = "";
        if (!string3 || n < 1 || n > MAX_SAFE_INTEGER2) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string3;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string3 += string3;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array4 = values(collection);
        return shuffleSelf(array4, baseClamp(n, 0, array4.length));
      }
      function baseSet(object4, path, value, customizer) {
        if (!isObject2(object4)) {
          return object4;
        }
        path = castPath(path, object4);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object4;
        while (nested != null && ++index2 < length) {
          var key = toKey(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object4;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex2(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue2(nested, key, newValue);
          nested = nested[key];
        }
        return object4;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty2 ? identity : function(func, string3) {
        return defineProperty2(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string3),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array4, start, end) {
        var index2 = -1, length = array4.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array4[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array4, value, retHighest) {
        var low = 0, high = array4 == null ? low : array4.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array4[mid];
            if (computed2 !== null && !isSymbol2(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array4, value, identity, retHighest);
      }
      function baseSortedIndexBy(array4, value, iteratee2, retHighest) {
        var low = 0, high = array4 == null ? 0 : array4.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array4[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol2(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin2(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array4, iteratee2) {
        var index2 = -1, length = array4.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array4[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq2(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        return +value;
      }
      function baseToString2(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap2(value, baseToString2) + "";
        }
        if (isSymbol2(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function baseUniq(array4, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array4.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE2) {
          var set2 = iteratee2 ? null : createSet(array4);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array4[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object4, path) {
        path = castPath(path, object4);
        object4 = parent(object4, path);
        return object4 == null || delete object4[toKey(last(path))];
      }
      function baseUpdate(object4, path, updater, customizer) {
        return baseSet(object4, path, updater(baseGet(object4, path)), customizer);
      }
      function baseWhile(array4, predicate, isDrop, fromRight) {
        var length = array4.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array4[index2], index2, array4)) {
        }
        return isDrop ? baseSlice(array4, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array4, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush2([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array4 = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array4, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object4) {
        if (isArray2(value)) {
          return value;
        }
        return isKey(value, object4) ? [value] : stringToPath(toString2(value));
      }
      var castRest = baseRest;
      function castSlice(array4, start, end) {
        var length = array4.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array4 : baseSlice(array4, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root2.clearTimeout(id);
      };
      function cloneBuffer2(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer2(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array3(result2).set(new Uint8Array3(arrayBuffer));
        return result2;
      }
      function cloneDataView2(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp2(regexp4) {
        var result2 = new regexp4.constructor(regexp4.source, reFlags2.exec(regexp4));
        result2.lastIndex = regexp4.lastIndex;
        return result2;
      }
      function cloneSymbol2(symbol) {
        return symbolValueOf2 ? Object2(symbolValueOf2.call(symbol)) : {};
      }
      function cloneTypedArray2(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object4, other, orders) {
        var index2 = -1, objCriteria = object4.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object4.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray2(source, array4) {
        var index2 = -1, length = source.length;
        array4 || (array4 = Array2(length));
        while (++index2 < length) {
          array4[index2] = source[index2];
        }
        return array4;
      }
      function copyObject2(source, props, object4, customizer) {
        var isNew = !object4;
        object4 || (object4 = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue2(object4, key, newValue);
          } else {
            assignValue2(object4, key, newValue);
          }
        }
        return object4;
      }
      function copySymbols2(source, object4) {
        return copyObject2(source, getSymbols2(source), object4);
      }
      function copySymbolsIn2(source, object4) {
        return copyObject2(source, getSymbolsIn2(source), object4);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object4, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object4 = Object2(object4);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object4, source, index2, customizer);
            }
          }
          return object4;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike2(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object4, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object4), props = keysFunc(object4), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object4;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string3) {
          string3 = toString2(string3);
          var strSymbols = hasUnicode(string3) ? stringToArray(string3) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string3.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string3.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string3) {
          return arrayReduce(words(deburr(string3).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate2(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike2(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys2(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT2);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray2(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object4, iteratee2) {
          return baseInverter(object4, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString2(value);
              other = baseToString2(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString2(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber2(value);
            other = toNumber2(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number4, precision) {
          number4 = toNumber2(number4);
          precision = precision == null ? 0 : nativeMin2(toInteger(precision), 292);
          if (precision && nativeIsFinite(number4)) {
            var pair = (toString2(number4) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString2(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number4);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY2) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object4) {
          var tag = getTag2(object4);
          if (tag == mapTag2) {
            return mapToArray(object4);
          }
          if (tag == setTag2) {
            return setToPairs(object4);
          }
          return baseToPairs(object4, keysFunc(object4));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax2(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax2(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object4) {
        if (objValue === undefined$1 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object4, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object4, source, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array4.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array4);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array4;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array4, other);
        stack.set(other, array4);
        while (++index2 < arrLength) {
          var arrValue = array4[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array4, stack) : customizer(arrValue, othValue, index2, array4, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array4);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag2:
            if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
              return false;
            }
            object4 = object4.buffer;
            other = other.buffer;
          case arrayBufferTag2:
            if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array3(object4), new Uint8Array3(other))) {
              return false;
            }
            return true;
          case boolTag2:
          case dateTag2:
          case numberTag2:
            return eq2(+object4, +other);
          case errorTag2:
            return object4.name == other.name && object4.message == other.message;
          case regexpTag2:
          case stringTag2:
            return object4 == other + "";
          case mapTag2:
            var convert = mapToArray;
          case setTag2:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object4.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object4);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object4, other);
            var result2 = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object4);
            return result2;
          case symbolTag2:
            if (symbolValueOf2) {
              return symbolValueOf2.call(object4) == symbolValueOf2.call(other);
            }
        }
        return false;
      }
      function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys2(object4), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object4);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object4;
        }
        var result2 = true;
        stack.set(object4, other);
        stack.set(other, object4);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object4[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object4.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object4);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys2(object4) {
        return baseGetAllKeys2(object4, keys2, getSymbols2);
      }
      function getAllKeysIn2(object4) {
        return baseGetAllKeys2(object4, keysIn2, getSymbolsIn2);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array4 = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array4.length : 0;
        while (length--) {
          var data = array4[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object4 = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object4.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData2(map2, key) {
        var data = map2.__data__;
        return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object4) {
        var result2 = keys2(object4), length = result2.length;
        while (length--) {
          var key = result2[length], value = object4[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative2(object4, key) {
        var value = getValue2(object4, key);
        return baseIsNative2(value) ? value : undefined$1;
      }
      function getRawTag2(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
        try {
          value[symToStringTag2] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString2.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag2] = tag;
          } else {
            delete value[symToStringTag2];
          }
        }
        return result2;
      }
      var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object4) {
        if (object4 == null) {
          return [];
        }
        object4 = Object2(object4);
        return arrayFilter2(nativeGetSymbols2(object4), function(symbol) {
          return propertyIsEnumerable2.call(object4, symbol);
        });
      };
      var getSymbolsIn2 = !nativeGetSymbols2 ? stubArray2 : function(object4) {
        var result2 = [];
        while (object4) {
          arrayPush2(result2, getSymbols2(object4));
          object4 = getPrototype2(object4);
        }
        return result2;
      };
      var getTag2 = baseGetTag2;
      if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
        getTag2 = function(value) {
          var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined$1, ctorString = Ctor ? toSource2(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString2:
                return dataViewTag2;
              case mapCtorString2:
                return mapTag2;
              case promiseCtorString2:
                return promiseTag2;
              case setCtorString2:
                return setTag2;
              case weakMapCtorString2:
                return weakMapTag2;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin2(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax2(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object4, path, hasFunc) {
        path = castPath(path, object4);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey(path[index2]);
          if (!(result2 = object4 != null && hasFunc(object4, key))) {
            break;
          }
          object4 = object4[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object4 == null ? 0 : object4.length;
        return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object4) || isArguments2(object4));
      }
      function initCloneArray2(array4) {
        var length = array4.length, result2 = new array4.constructor(length);
        if (length && typeof array4[0] == "string" && hasOwnProperty2.call(array4, "index")) {
          result2.index = array4.index;
          result2.input = array4.input;
        }
        return result2;
      }
      function initCloneObject2(object4) {
        return typeof object4.constructor == "function" && !isPrototype2(object4) ? baseCreate2(getPrototype2(object4)) : {};
      }
      function initCloneByTag2(object4, tag, isDeep) {
        var Ctor = object4.constructor;
        switch (tag) {
          case arrayBufferTag2:
            return cloneArrayBuffer2(object4);
          case boolTag2:
          case dateTag2:
            return new Ctor(+object4);
          case dataViewTag2:
            return cloneDataView2(object4, isDeep);
          case float32Tag2:
          case float64Tag2:
          case int8Tag2:
          case int16Tag2:
          case int32Tag2:
          case uint8Tag2:
          case uint8ClampedTag2:
          case uint16Tag2:
          case uint32Tag2:
            return cloneTypedArray2(object4, isDeep);
          case mapTag2:
            return new Ctor();
          case numberTag2:
          case stringTag2:
            return new Ctor(object4);
          case regexpTag2:
            return cloneRegExp2(object4);
          case setTag2:
            return new Ctor();
          case symbolTag2:
            return cloneSymbol2(object4);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex2(value, length) {
        var type4 = typeof value;
        length = length == null ? MAX_SAFE_INTEGER2 : length;
        return !!length && (type4 == "number" || type4 != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object4) {
        if (!isObject2(object4)) {
          return false;
        }
        var type4 = typeof index2;
        if (type4 == "number" ? isArrayLike2(object4) && isIndex2(index2, object4.length) : type4 == "string" && index2 in object4) {
          return eq2(object4[index2], value);
        }
        return false;
      }
      function isKey(value, object4) {
        if (isArray2(value)) {
          return false;
        }
        var type4 = typeof value;
        if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol2(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object2(object4);
      }
      function isKeyable2(value) {
        var type4 = typeof value;
        return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked2(func) {
        return !!maskSrcKey2 && maskSrcKey2 in func;
      }
      var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
      function isPrototype2(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject2(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object4) {
          if (object4 == null) {
            return false;
          }
          return object4[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object4));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin2(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn2(object4) {
        var result2 = [];
        if (object4 != null) {
          for (var key in Object2(object4)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString2(value) {
        return nativeObjectToString2.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax2(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax2(args.length - start, 0), array4 = Array2(length);
          while (++index2 < length) {
            array4[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array4);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object4, path) {
        return path.length < 2 ? object4 : baseGet(object4, baseSlice(path, 0, -1));
      }
      function reorder(array4, indexes) {
        var arrLength = array4.length, length = nativeMin2(indexes.length, arrLength), oldArray = copyArray2(array4);
        while (length--) {
          var index2 = indexes[length];
          array4[length] = isIndex2(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array4;
      }
      function safeGet(object4, key) {
        if (key === "constructor" && typeof object4[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object4[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array4, size2) {
        var index2 = -1, length = array4.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index2 < size2) {
          var rand = baseRandom(index2, lastIndex), value = array4[rand];
          array4[rand] = array4[index2];
          array4[index2] = value;
        }
        array4.length = size2;
        return array4;
      }
      var stringToPath = memoizeCapped(function(string3) {
        var result2 = [];
        if (string3.charCodeAt(0) === 46) {
          result2.push("");
        }
        string3.replace(rePropName, function(match, number4, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol2(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY2 ? "-0" : result2;
      }
      function toSource2(func) {
        if (func != null) {
          try {
            return funcToString2.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach2(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray2(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array4, size2, guard) {
        if (guard ? isIterateeCall(array4, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax2(toInteger(size2), 0);
        }
        var length = array4 == null ? 0 : array4.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index2 < length) {
          result2[resIndex++] = baseSlice(array4, index2, index2 += size2);
        }
        return result2;
      }
      function compact(array4) {
        var index2 = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array4[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array4 = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush2(isArray2(array4) ? copyArray2(array4) : [array4], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array4, values2) {
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array4, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array4, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array4) ? baseDifference(array4, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array4, n < 0 ? 0 : n, length);
      }
      function dropRight(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array4, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), true) : [];
      }
      function fill(array4, value, start, end) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array4, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array4, value, start, end);
      }
      function findIndex(array4, predicate, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax2(length + index2, 0);
        }
        return baseFindIndex(array4, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array4, predicate, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = fromIndex < 0 ? nativeMax2(length + index2, 0) : nativeMin2(index2, length - 1);
        }
        return baseFindIndex(array4, getIteratee(predicate, 3), index2, true);
      }
      function flatten(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseFlatten(array4, 1) : [];
      }
      function flattenDeep(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseFlatten(array4, INFINITY2) : [];
      }
      function flattenDepth(array4, depth) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array4, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array4) {
        return array4 && array4.length ? array4[0] : undefined$1;
      }
      function indexOf(array4, value, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax2(length + index2, 0);
        }
        return baseIndexOf(array4, value, index2);
      }
      function initial(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseSlice(array4, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap2(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array4, separator) {
        return array4 == null ? "" : nativeJoin.call(array4, separator);
      }
      function last(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? array4[length - 1] : undefined$1;
      }
      function lastIndexOf(array4, value, fromIndex) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = index2 < 0 ? nativeMax2(length + index2, 0) : nativeMin2(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array4, value, index2) : baseFindIndex(array4, baseIsNaN, index2, true);
      }
      function nth(array4, n) {
        return array4 && array4.length ? baseNth(array4, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array4, values2) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2) : array4;
      }
      function pullAllBy(array4, values2, iteratee2) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2, getIteratee(iteratee2, 2)) : array4;
      }
      function pullAllWith(array4, values2, comparator) {
        return array4 && array4.length && values2 && values2.length ? basePullAll(array4, values2, undefined$1, comparator) : array4;
      }
      var pullAt = flatRest(function(array4, indexes) {
        var length = array4 == null ? 0 : array4.length, result2 = baseAt(array4, indexes);
        basePullAt(array4, arrayMap2(indexes, function(index2) {
          return isIndex2(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove2(array4, predicate) {
        var result2 = [];
        if (!(array4 && array4.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array4.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array4[index2];
          if (predicate(value, index2, array4)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array4, indexes);
        return result2;
      }
      function reverse(array4) {
        return array4 == null ? array4 : nativeReverse.call(array4);
      }
      function slice(array4, start, end) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array4, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array4, start, end);
      }
      function sortedIndex(array4, value) {
        return baseSortedIndex(array4, value);
      }
      function sortedIndexBy(array4, value, iteratee2) {
        return baseSortedIndexBy(array4, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array4, value) {
        var length = array4 == null ? 0 : array4.length;
        if (length) {
          var index2 = baseSortedIndex(array4, value);
          if (index2 < length && eq2(array4[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array4, value) {
        return baseSortedIndex(array4, value, true);
      }
      function sortedLastIndexBy(array4, value, iteratee2) {
        return baseSortedIndexBy(array4, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array4, value) {
        var length = array4 == null ? 0 : array4.length;
        if (length) {
          var index2 = baseSortedIndex(array4, value, true) - 1;
          if (eq2(array4[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array4) {
        return array4 && array4.length ? baseSortedUniq(array4) : [];
      }
      function sortedUniqBy(array4, iteratee2) {
        return array4 && array4.length ? baseSortedUniq(array4, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array4) {
        var length = array4 == null ? 0 : array4.length;
        return length ? baseSlice(array4, 1, length) : [];
      }
      function take(array4, n, guard) {
        if (!(array4 && array4.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array4, 0, n < 0 ? 0 : n);
      }
      function takeRight(array4, n, guard) {
        var length = array4 == null ? 0 : array4.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array4, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array4, predicate) {
        return array4 && array4.length ? baseWhile(array4, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array4) {
        return array4 && array4.length ? baseUniq(array4) : [];
      }
      function uniqBy(array4, iteratee2) {
        return array4 && array4.length ? baseUniq(array4, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array4, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array4 && array4.length ? baseUniq(array4, undefined$1, comparator) : [];
      }
      function unzip(array4) {
        if (!(array4 && array4.length)) {
          return [];
        }
        var length = 0;
        array4 = arrayFilter2(array4, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax2(group.length, length);
            return true;
          }
        });
        return baseTimes2(length, function(index2) {
          return arrayMap2(array4, baseProperty(index2));
        });
      }
      function unzipWith(array4, iteratee2) {
        if (!(array4 && array4.length)) {
          return [];
        }
        var result2 = unzip(array4);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap2(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array4, values2) {
        return isArrayLikeObject(array4) ? baseDifference(array4, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter2(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue2);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object4) {
          return baseAt(object4, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array4) {
          if (length && !array4.length) {
            array4.push(undefined$1);
          }
          return array4;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue2(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY2);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach2 : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue2(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike2(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax2(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue2(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap2 : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter2 : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike2(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag2(collection);
        if (tag == mapTag2 || tag == setTag2) {
          return collection.size;
        }
        return baseKeys2(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now2 = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object4, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object4, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        wait = toNumber2(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin2(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now2();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now2());
        }
        function debounced() {
          var time = now2(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber2(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache2)();
        return memoized;
      }
      memoize.Cache = MapCache2;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap2(transforms[0], baseUnary2(getIteratee())) : arrayMap2(baseFlatten(transforms, 1), baseUnary2(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin2(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        start = start == null ? 0 : nativeMax2(toInteger(start), 0);
        return baseRest(function(args) {
          var array4 = args[start], otherArgs = castSlice(args, 0, start);
          if (array4) {
            arrayPush2(otherArgs, array4);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT2);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray2() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray2(value) ? value : [value];
      }
      function clone(value) {
        return baseClone2(value, CLONE_SYMBOLS_FLAG2);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_SYMBOLS_FLAG2, customizer);
      }
      function cloneDeep2(value) {
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone2(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2, customizer);
      }
      function conformsTo(object4, source) {
        return source == null || baseConformsTo(object4, source, keys2(source));
      }
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments2 = baseIsArguments2(function() {
        return arguments;
      }()) ? baseIsArguments2 : function(value) {
        return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike2(value) {
        return value != null && isLength2(value.length) && !isFunction2(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike2(value) && isArrayLike2(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
      }
      var isBuffer2 = nativeIsBuffer2 || stubFalse2;
      var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
      function isElement2(value) {
        return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
          return !value.length;
        }
        var tag = getTag2(value);
        if (tag == mapTag2 || tag == setTag2) {
          return !value.size;
        }
        if (isPrototype2(value)) {
          return !baseKeys2(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction2(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
      }
      function isObject2(value) {
        var type4 = typeof value;
        return value != null && (type4 == "object" || type4 == "function");
      }
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      var isMap2 = nodeIsMap2 ? baseUnary2(nodeIsMap2) : baseIsMap2;
      function isMatch(object4, source) {
        return object4 === source || baseIsMatch(object4, source, getMatchData(source));
      }
      function isMatchWith(object4, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object4, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber2(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative2(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber2(value) {
        return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
      }
      function isPlainObject(value) {
        if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
          return false;
        }
        var proto = getPrototype2(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary2(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
      }
      var isSet2 = nodeIsSet2 ? baseUnary2(nodeIsSet2) : baseIsSet2;
      function isString(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
      }
      function isSymbol2(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
      }
      var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike2(value) && getTag2(value) == weakMapTag2;
      }
      function isWeakSet(value) {
        return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike2(value)) {
          return isString(value) ? stringToArray(value) : copyArray2(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag2(value), func = tag == mapTag2 ? mapToArray : tag == setTag2 ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber2(value);
        if (value === INFINITY2 || value === -INFINITY2) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber2(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol2(value)) {
          return NAN2;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim2(value);
        var isBinary = reIsBinary2.test(value);
        return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
      }
      function toPlainObject(value) {
        return copyObject2(value, keysIn2(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
      }
      function toString2(value) {
        return value == null ? "" : baseToString2(value);
      }
      var assign = createAssigner(function(object4, source) {
        if (isPrototype2(source) || isArrayLike2(source)) {
          copyObject2(source, keys2(source), object4);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            assignValue2(object4, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object4, source) {
        copyObject2(source, keysIn2(source), object4);
      });
      var assignInWith = createAssigner(function(object4, source, srcIndex, customizer) {
        copyObject2(source, keysIn2(source), object4, customizer);
      });
      var assignWith = createAssigner(function(object4, source, srcIndex, customizer) {
        copyObject2(source, keys2(source), object4, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate2(prototype);
        return properties == null ? result2 : baseAssign2(result2, properties);
      }
      var defaults = baseRest(function(object4, sources) {
        object4 = Object2(object4);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn2(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object4[key];
            if (value === undefined$1 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object4, key)) {
              object4[key] = source[key];
            }
          }
        }
        return object4;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object4, predicate) {
        return baseFindKey(object4, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object4, predicate) {
        return baseFindKey(object4, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object4, iteratee2) {
        return object4 == null ? object4 : baseFor(object4, getIteratee(iteratee2, 3), keysIn2);
      }
      function forInRight(object4, iteratee2) {
        return object4 == null ? object4 : baseForRight(object4, getIteratee(iteratee2, 3), keysIn2);
      }
      function forOwn(object4, iteratee2) {
        return object4 && baseForOwn(object4, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object4, iteratee2) {
        return object4 && baseForOwnRight(object4, getIteratee(iteratee2, 3));
      }
      function functions(object4) {
        return object4 == null ? [] : baseFunctions(object4, keys2(object4));
      }
      function functionsIn(object4) {
        return object4 == null ? [] : baseFunctions(object4, keysIn2(object4));
      }
      function get(object4, path, defaultValue) {
        var result2 = object4 == null ? undefined$1 : baseGet(object4, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object4, path) {
        return object4 != null && hasPath(object4, path, baseHas);
      }
      function hasIn(object4, path) {
        return object4 != null && hasPath(object4, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString2.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys2(object4) {
        return isArrayLike2(object4) ? arrayLikeKeys2(object4) : baseKeys2(object4);
      }
      function keysIn2(object4) {
        return isArrayLike2(object4) ? arrayLikeKeys2(object4, true) : baseKeysIn2(object4);
      }
      function mapKeys(object4, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object4, function(value, key, object5) {
          baseAssignValue2(result2, iteratee2(value, key, object5), value);
        });
        return result2;
      }
      function mapValues(object4, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object4, function(value, key, object5) {
          baseAssignValue2(result2, key, iteratee2(value, key, object5));
        });
        return result2;
      }
      var merge = createAssigner(function(object4, source, srcIndex) {
        baseMerge(object4, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object4, source, srcIndex, customizer) {
        baseMerge(object4, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object4, paths) {
        var result2 = {};
        if (object4 == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap2(paths, function(path) {
          path = castPath(path, object4);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject2(object4, getAllKeysIn2(object4), result2);
        if (isDeep) {
          result2 = baseClone2(result2, CLONE_DEEP_FLAG2 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG2, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object4, predicate) {
        return pickBy(object4, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object4, paths) {
        return object4 == null ? {} : basePick(object4, paths);
      });
      function pickBy(object4, predicate) {
        if (object4 == null) {
          return {};
        }
        var props = arrayMap2(getAllKeysIn2(object4), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object4, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object4, path, defaultValue) {
        path = castPath(path, object4);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object4 = undefined$1;
        }
        while (++index2 < length) {
          var value = object4 == null ? undefined$1 : object4[toKey(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object4 = isFunction2(value) ? value.call(object4) : value;
        }
        return object4;
      }
      function set(object4, path, value) {
        return object4 == null ? object4 : baseSet(object4, path, value);
      }
      function setWith(object4, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object4 == null ? object4 : baseSet(object4, path, value, customizer);
      }
      var toPairs = createToPairs(keys2);
      var toPairsIn = createToPairs(keysIn2);
      function transform(object4, iteratee2, accumulator) {
        var isArr = isArray2(object4), isArrLike = isArr || isBuffer2(object4) || isTypedArray2(object4);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object4 && object4.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object4)) {
            accumulator = isFunction2(Ctor) ? baseCreate2(getPrototype2(object4)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach2 : baseForOwn)(object4, function(value, index2, object5) {
          return iteratee2(accumulator, value, index2, object5);
        });
        return accumulator;
      }
      function unset(object4, path) {
        return object4 == null ? true : baseUnset(object4, path);
      }
      function update(object4, path, updater) {
        return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater));
      }
      function updateWith(object4, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object4 == null ? object4 : baseUpdate(object4, path, castFunction(updater), customizer);
      }
      function values(object4) {
        return object4 == null ? [] : baseValues(object4, keys2(object4));
      }
      function valuesIn(object4) {
        return object4 == null ? [] : baseValues(object4, keysIn2(object4));
      }
      function clamp(number4, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber2(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber2(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber2(number4), lower, upper);
      }
      function inRange(number4, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number4 = toNumber2(number4);
        return baseInRange(number4, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin2(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string3) {
        return upperFirst(toString2(string3).toLowerCase());
      }
      function deburr(string3) {
        string3 = toString2(string3);
        return string3 && string3.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string3, target, position) {
        string3 = toString2(string3);
        target = baseToString2(target);
        var length = string3.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string3.slice(position, end) == target;
      }
      function escape(string3) {
        string3 = toString2(string3);
        return string3 && reHasUnescapedHtml.test(string3) ? string3.replace(reUnescapedHtml, escapeHtmlChar) : string3;
      }
      function escapeRegExp(string3) {
        string3 = toString2(string3);
        return string3 && reHasRegExpChar.test(string3) ? string3.replace(reRegExpChar2, "\\$&") : string3;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        if (!length || strLength >= length) {
          return string3;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string3 + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        return length && strLength < length ? string3 + createPadding(length - strLength, chars) : string3;
      }
      function padStart(string3, length, chars) {
        string3 = toString2(string3);
        length = toInteger(length);
        var strLength = length ? stringSize(string3) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string3 : string3;
      }
      function parseInt2(string3, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString2(string3).replace(reTrimStart2, ""), radix || 0);
      }
      function repeat(string3, n, guard) {
        if (guard ? isIterateeCall(string3, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString2(string3), n);
      }
      function replace() {
        var args = arguments, string3 = toString2(args[0]);
        return args.length < 3 ? string3 : string3.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string3, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string3, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string3 = toString2(string3);
        if (string3 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString2(separator);
          if (!separator && hasUnicode(string3)) {
            return castSlice(stringToArray(string3), 0, limit);
          }
        }
        return string3.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string3, target, position) {
        string3 = toString2(string3);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string3.length);
        target = baseToString2(target);
        return string3.slice(position, position + target.length) == target;
      }
      function template(string3, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string3, options, guard)) {
          options = undefined$1;
        }
        string3 = toString2(string3);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string3.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string3.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty2.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString2(value).toLowerCase();
      }
      function toUpper(value) {
        return toString2(value).toUpperCase();
      }
      function trim(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return baseTrim2(string3);
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return string3.slice(0, trimmedEndIndex2(string3) + 1);
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string3, chars, guard) {
        string3 = toString2(string3);
        if (string3 && (guard || chars === undefined$1)) {
          return string3.replace(reTrimStart2, "");
        }
        if (!string3 || !(chars = baseToString2(chars))) {
          return string3;
        }
        var strSymbols = stringToArray(string3), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string3, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString2(options.omission) : omission;
        }
        string3 = toString2(string3);
        var strLength = string3.length;
        if (hasUnicode(string3)) {
          var strSymbols = stringToArray(string3);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string3;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string3.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string3.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString2(reFlags2.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string3.indexOf(baseToString2(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape(string3) {
        string3 = toString2(string3);
        return string3 && reHasEscapedHtml.test(string3) ? string3.replace(reEscapedHtml, unescapeHtmlChar) : string3;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string3, pattern4, guard) {
        string3 = toString2(string3);
        pattern4 = guard ? undefined$1 : pattern4;
        if (pattern4 === undefined$1) {
          return hasUnicodeWord(string3) ? unicodeWords(string3) : asciiWords(string3);
        }
        return string3.match(pattern4) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object4, methodNames) {
        arrayEach2(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue2(object4, key, bind(object4[key], object4));
        });
        return object4;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap2(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone2(func, CLONE_DEEP_FLAG2));
      }
      function matches(source) {
        return baseMatches(baseClone2(source, CLONE_DEEP_FLAG2));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone2(srcValue, CLONE_DEEP_FLAG2));
      }
      var method4 = baseRest(function(path, args) {
        return function(object4) {
          return baseInvoke(object4, path, args);
        };
      });
      var methodOf = baseRest(function(object4, args) {
        return function(path) {
          return baseInvoke(object4, path, args);
        };
      });
      function mixin(object4, source, options) {
        var props = keys2(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object4;
          object4 = this;
          methodNames = baseFunctions(source, keys2(source));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object4);
        arrayEach2(methodNames, function(methodName) {
          var func = source[methodName];
          object4[methodName] = func;
          if (isFunc) {
            object4.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object4(this.__wrapped__), actions = result2.__actions__ = copyArray2(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object4 });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object4, arrayPush2([this.value()], arguments));
            };
          }
        });
        return object4;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap2);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object4) {
        return function(path) {
          return object4 == null ? undefined$1 : baseGet(object4, path);
        };
      }
      var range3 = createRange();
      var rangeRight = createRange(true);
      function stubArray2() {
        return [];
      }
      function stubFalse2() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER2) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin2(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes2(length, iteratee2);
        while (++index2 < n) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray2(value)) {
          return arrayMap2(value, toKey);
        }
        return isSymbol2(value) ? [value] : copyArray2(stringToPath(toString2(value)));
      }
      function uniqueId2(prefix) {
        var id = ++idCounter2;
        return toString2(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array4) {
        return array4 && array4.length ? baseExtremum(array4, identity, baseGt) : undefined$1;
      }
      function maxBy(array4, iteratee2) {
        return array4 && array4.length ? baseExtremum(array4, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array4) {
        return baseMean(array4, identity);
      }
      function meanBy(array4, iteratee2) {
        return baseMean(array4, getIteratee(iteratee2, 2));
      }
      function min(array4) {
        return array4 && array4.length ? baseExtremum(array4, identity, baseLt) : undefined$1;
      }
      function minBy(array4, iteratee2) {
        return array4 && array4.length ? baseExtremum(array4, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array4) {
        return array4 && array4.length ? baseSum(array4, identity) : 0;
      }
      function sumBy(array4, iteratee2) {
        return array4 && array4.length ? baseSum(array4, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray2;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce2;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys2;
      lodash2.keysIn = keysIn2;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method4;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range3;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove2;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle2;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep2;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq2;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments2;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike2;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer2;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement2;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength2;
      lodash2.isMap = isMap2;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike2;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet2;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol2;
      lodash2.isTypedArray = isTypedArray2;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray2;
      lodash2.stubFalse = stubFalse2;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now2;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber2;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString2;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId2;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach2(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax2(toInteger(n), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin2(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin2(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach2(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type4 = index2 + 1, isFilter = type4 == LAZY_FILTER_FLAG || type4 == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type4
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach2(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach2(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush2([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach2(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto2[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray2(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray2(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule2) {
      (freeModule2.exports = _)._ = _;
      freeExports2._ = _;
    } else {
      root2._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
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
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
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
var symbolTag$2 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
}
function arrayMap(array4, iteratee) {
  var index2 = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array4[index2], index2, array4);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
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
function trimmedEndIndex(string3) {
  var index2 = string3.length;
  while (index2-- && reWhitespace.test(string3.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}
function isObject(value) {
  var type4 = typeof value;
  return value != null && (type4 == "object" || type4 == "function");
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
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern4 = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern4.test(toSource(value));
}
function getValue$1(object4, key) {
  return object4 == null ? void 0 : object4[key];
}
function getNative(object4, key) {
  var value = getValue$1(object4, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object4() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object4.prototype = proto;
    var result = new object4();
    object4.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function copyArray(source, array4) {
  var index2 = -1, length = source.length;
  array4 || (array4 = Array(length));
  while (++index2 < length) {
    array4[index2] = source[index2];
  }
  return array4;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
function arrayEach(array4, iteratee) {
  var index2 = -1, length = array4 == null ? 0 : array4.length;
  while (++index2 < length) {
    if (iteratee(array4[index2], index2, array4) === false) {
      break;
    }
  }
  return array4;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type4 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object4, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object4, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object4[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function assignValue(object4, key, value) {
  var objValue = object4[key];
  if (!(hasOwnProperty$7.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
    baseAssignValue(object4, key, value);
  }
}
function copyObject(source, props, object4, customizer) {
  var isNew = !object4;
  object4 || (object4 = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object4, key, newValue);
    } else {
      assignValue(object4, key, newValue);
    }
  }
  return object4;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$8 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$3 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeys(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys$1(object4);
  }
  var result = [];
  for (var key in Object(object4)) {
    if (hasOwnProperty$4.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}
function nativeKeysIn(object4) {
  var result = [];
  if (object4 != null) {
    for (var key in Object(object4)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeysIn(object4) {
  if (!isObject(object4)) {
    return nativeKeysIn(object4);
  }
  var isProto = isPrototype(object4), result = [];
  for (var key in object4) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object4, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array4, key) {
  var length = array4.length;
  while (length--) {
    if (eq(array4[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type4 = typeof value;
  return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function arrayPush(array4, values) {
  var index2 = -1, length = values.length, offset = array4.length;
  while (++index2 < length) {
    array4[offset + index2] = values[index2];
  }
  return array4;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray$1(value) ? value : [value];
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object4, source) {
  return object4 && copyObject(source, keys(source), object4);
}
function baseAssignIn(object4, source) {
  return object4 && copyObject(source, keysIn(source), object4);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array4, predicate) {
  var index2 = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array4[index2];
    if (predicate(value, index2, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object4) {
  if (object4 == null) {
    return [];
  }
  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols$1(object4), function(symbol) {
    return propertyIsEnumerable.call(object4, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object4) {
  return copyObject(source, getSymbols$1(source), object4);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object4) {
  var result = [];
  while (object4) {
    arrayPush(result, getSymbols$1(object4));
    object4 = getPrototype$1(object4);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object4) {
  return copyObject(source, getSymbolsIn$1(source), object4);
}
function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray$1(object4) ? result : arrayPush(result, symbolsFunc(object4));
}
function getAllKeys(object4) {
  return baseGetAllKeys(object4, keys, getSymbols$1);
}
function getAllKeysIn(object4) {
  return baseGetAllKeys(object4, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set = getNative(root$1, "Set");
var Set$1 = Set;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$2 && getTag(new Map$2()) != mapTag$3 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array4) {
  var length = array4.length, result = new array4.constructor(length);
  if (length && typeof array4[0] == "string" && hasOwnProperty.call(array4, "index")) {
    result.index = array4.index;
    result.input = array4.input;
  }
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp4) {
  var result = new regexp4.constructor(regexp4.source, reFlags.exec(regexp4));
  result.lastIndex = regexp4.lastIndex;
  return result;
}
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object4, tag, isDeep) {
  var Ctor = object4.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object4);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object4);
    case dataViewTag$1:
      return cloneDataView(object4, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object4, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$2:
    case stringTag$1:
      return new Ctor(object4);
    case regexpTag$1:
      return cloneRegExp(object4);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object4);
  }
}
function initCloneObject(object4) {
  return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate$1(getPrototype$1(object4)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag$1 = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag$1] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object4, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object4 ? customizer(value, key, object4, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object4) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object4 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
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
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
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
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}
function filterFields(fields, props) {
  const normalized = castArray(props);
  return normalized.length ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
}
var GForm_vue_vue_type_style_index_0_lang = "";
const __default__$e = {
  name: "GForm"
};
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$e, {
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const ns = "g-form";
    const fields = [];
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop)
        fields.splice(fields.indexOf(field), 1);
    };
    function validate(callback) {
      return validateField(void 0, callback);
    }
    function validateField(properties = [], callback) {
      return new Promise((resolve, reject) => {
        let valid = true;
        let count = 0;
        let invalidFields = {};
        let fiteredFields = filterFields(fields, properties);
        fiteredFields.forEach((field) => {
          field.validate("", (errors) => {
            if (!lodash.exports.isBoolean(errors)) {
              Object.assign(invalidFields, errors);
              valid = false;
            }
            if (++count === fiteredFields.length) {
              if (lodash.exports.isFunction(callback)) {
                callback(valid, invalidFields);
              }
              valid ? resolve(valid) : reject(invalidFields);
            }
          });
        });
      });
    }
    function resetFields(properties = []) {
      filterFields(fields, properties).forEach((field) => field.resetField());
    }
    function clearValidate() {
    }
    const context = reactive(__spreadProps(__spreadValues({}, toRefs(props)), {
      addField,
      removeField
    }));
    provide(formContextKey, context);
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass([ns])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var pattern$2 = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(pattern$2.url);
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
var GFormItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$g = {
  key: 0,
  class: "g-form-item__message"
};
const __default__$d = {
  name: "GFormItem"
};
const _sfc_main$d = /* @__PURE__ */ Object.assign(__default__$d, {
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    },
    rules: {
      type: [Array, Object]
    },
    required: {
      type: Boolean,
      default: void 0
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const ns = "g-form-item";
    const formContext = inject(formContextKey);
    const validateState = ref("");
    const validateMessage = ref("");
    let initialValue;
    const isRequired = computed(() => {
      return rules2.value.some((rule) => rule.required === true);
    });
    const formItemRef = ref(null);
    const rules2 = computed(() => {
      let rules3 = props.rules ? castArray(props.rules) : [];
      const formRules = formContext.rules;
      if (formRules && props.prop) {
        const _rules = formRules[props.prop];
        if (_rules) {
          rules3.push(...castArray(_rules));
        }
      }
      if (props.required !== void 0) {
        rules3.push({ required: !!props.required });
      }
      return rules3;
    });
    const fieldValue = computed({
      get() {
        const model = formContext.model;
        if (!model || !props.prop)
          return;
        return model[props.prop];
      },
      set(v) {
        const model = formContext.model;
        model[props.prop] = v;
      }
    });
    function getFilteredRules(trigger) {
      const rulesVal = rules2.value;
      return rulesVal.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      });
    }
    function validate(trigger, callback = () => {
    }) {
      const rules3 = getFilteredRules(trigger);
      if (!rules3 || !rules3.length)
        return true;
      validateState.value = "validating";
      let descriptor = {};
      descriptor[props.prop] = rules3;
      const validator = new Schema(descriptor);
      let model = {
        [props.prop]: fieldValue.value
      };
      return validator.validate(model, { firstFields: true }).then(() => {
        callback(true);
      }).catch((e) => {
        validateState.value = "error";
        validateMessage.value = e.errors[0].message;
        callback(e.fields);
        return Promise.reject(e.fields);
      });
    }
    function resetField() {
      const model = formContext.model;
      if (!model || !props.prop)
        return;
      fieldValue.value = initialValue;
      nextTick(() => clearValidate());
    }
    function clearValidate() {
      validateState.value = "";
      validateMessage.value = "";
    }
    const context = reactive(__spreadProps(__spreadValues({}, toRefs(props)), {
      $el: formItemRef,
      validateState,
      validate,
      resetField,
      clearValidate
    }));
    provide(formItemContextKey, context);
    onMounted(() => {
      if (props.prop) {
        initialValue = cloneDeep(fieldValue.value);
        formContext.addField(context);
      }
    });
    onBeforeUnmount(() => {
      formContext.removeField(context);
    });
    expose({
      validateMessage,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns]),
        ref_key: "formItemRef",
        ref: formItemRef
      }, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass([ns + "__label", { "g-form-item__label-required": unref(isRequired) }])
        }, toDisplayString(__props.label), 3)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass([ns + "__content"])
        }, [
          renderSlot(_ctx.$slots, "default"),
          validateState.value === "error" ? (openBlock(), createElementBlock("div", _hoisted_1$g, toDisplayString(validateMessage.value), 1)) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
var GForm = {
  install(app) {
    app.component(_sfc_main$e.name, _sfc_main$e);
    app.component(_sfc_main$d.name, _sfc_main$d);
  }
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const _hoisted_1$f = ["value"];
const __default__$c = {
  name: "GInput"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$c, {
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-input";
    const formItemContext = inject(formItemContextKey, void 0);
    const value = ref(props.modelValue);
    function onInput(e) {
      const v = e.target.value;
      value.value = v;
      emit("update:modelValue", v);
    }
    function onChange(e) {
      emit("change", e.target.value);
    }
    function onBlur(e) {
      emit("blur", e);
      formItemContext == null ? void 0 : formItemContext.validate("blur").catch(console.log);
    }
    watch(() => props.modelValue, () => {
      formItemContext == null ? void 0 : formItemContext.validate("change").catch(console.log);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, [
        createElementVNode("input", {
          class: normalizeClass([ns + "__inner"]),
          value: value.value,
          onInput,
          onBlur,
          onChange,
          type: "text"
        }, null, 42, _hoisted_1$f)
      ], 2);
    };
  }
});
var GInput = {
  install(app) {
    app.component(_sfc_main$c.name, _sfc_main$c);
  }
};
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5L207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$7 = [_hoisted_2$8];
var CheckOutlined = defineComponent({
  name: "CheckOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$7);
  }
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$6 = [_hoisted_2$7];
var CloseOutlined = defineComponent({
  name: "CloseOutlined",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$6);
  }
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2L227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$5 = [_hoisted_2$6];
var DownOutlined = defineComponent({
  name: "DownOutlined",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$5);
  }
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$4 = [_hoisted_2$5];
var LeftOutlined = defineComponent({
  name: "LeftOutlined",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$4);
  }
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$3 = [_hoisted_2$4];
var LoadingOutlined = defineComponent({
  name: "LoadingOutlined",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$3);
  }
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [_hoisted_2$3];
var MinusOutlined = defineComponent({
  name: "MinusOutlined",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$2);
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("defs", null, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5 = [_hoisted_2$2, _hoisted_3$1, _hoisted_4];
var PlusOutlined = defineComponent({
  name: "PlusOutlined",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_5);
  }
});
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2$1];
var RightOutlined = defineComponent({
  name: "RightOutlined",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3);
  }
});
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$6 = ["value", "disabled"];
const __default__$b = {
  name: "GInputNumber",
  inheritAttrs: false,
  directives: {
    longMouseDown: {
      mounted(el, binding, vnode) {
        let timer;
        function action(e) {
          if (e.button !== 0)
            return;
          timer = setInterval(() => {
            binding.value();
          }, 100);
        }
        function stopAction() {
          clearInterval(timer);
          timer = null;
        }
        el.addEventListener("mouseup", stopAction);
        el.addEventListener("mouseleave", stopAction);
        el.addEventListener("mousedown", action, false);
      }
    }
  }
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$b, {
  props: {
    modelValue: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    precision: {
      type: Number
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-input-number";
    const inputRef = ref(null);
    function onChange(e) {
      emit("update:modelValue", calcLimitedValue(e.target.value));
    }
    function minus() {
      let newVal = calcLimitedValue(fixPrecision(Number(props.modelValue) - props.step));
      emit("update:modelValue", newVal);
    }
    function plus() {
      let newVal = calcLimitedValue(fixPrecision(Number(props.modelValue) + props.step));
      emit("update:modelValue", newVal);
    }
    function calcLimitedValue(n) {
      let newVal = Number.isFinite(props.min) ? Math.max(props.min, n) : n;
      newVal = Number.isFinite(props.max) ? Math.min(props.max, n) : n;
      return newVal;
    }
    function fixPrecision(n) {
      const precision = String(props.precision || props.step).split(".")[1];
      return parseFloat(n.toFixed(precision ? precision.length : 0), 10);
    }
    return (_ctx, _cache) => {
      const _directive_long_mouse_down = resolveDirective("long-mouse-down");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns, { "is-disabled": __props.disabled }])
      }, [
        withDirectives((openBlock(), createElementBlock("button", {
          class: normalizeClass([ns + "__minus", { "is-disabled": __props.min >= __props.modelValue || __props.disabled }])
        }, [
          createVNode(_sfc_main$g, null, {
            default: withCtx(() => [
              createVNode(unref(MinusOutlined))
            ]),
            _: 1
          })
        ], 2)), [
          [_directive_long_mouse_down, minus]
        ]),
        createElementVNode("input", {
          type: "number",
          class: normalizeClass([ns + "__inner"]),
          value: __props.modelValue,
          ref_key: "inputRef",
          ref: inputRef,
          disabled: __props.disabled,
          onChange
        }, null, 42, _hoisted_1$6),
        withDirectives((openBlock(), createElementBlock("button", {
          class: normalizeClass([ns + "__plus", , { "is-disabled": __props.max <= __props.modelValue || __props.disabled }])
        }, [
          createVNode(_sfc_main$g, null, {
            default: withCtx(() => [
              createVNode(unref(PlusOutlined))
            ]),
            _: 1
          })
        ], 2)), [
          [_directive_long_mouse_down, plus]
        ])
      ], 2);
    };
  }
});
var GInputNumber = {
  install(app) {
    app.component(_sfc_main$b.name, _sfc_main$b);
  }
};
var GCarousel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = ["onMouseenter", "onClick"];
const __default__$a = {
  name: "GCarousel"
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$a, {
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
              createVNode(_sfc_main$g, null, {
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
              createVNode(_sfc_main$g, null, {
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
            }, null, 42, _hoisted_1$5);
          }), 128))
        ], 2)
      ], 2);
    };
  }
});
var GCarouselItem_vue_vue_type_style_index_0_lang = "";
const __default__$9 = {
  name: "GCarouselItem"
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$9, {
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
var GCarousel = {
  install(app) {
    app.component(_sfc_main$a.name, _sfc_main$a);
    app.component(_sfc_main$9.name, _sfc_main$9);
  }
};
var GRadio_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = ["disabled", "checked"];
const __default__$8 = {
  name: "GRadio"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$8, {
  props: {
    modelValue: {},
    label: {},
    disabled: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-radio";
    const radioGroupContext = inject(radioGroupContextKey, null);
    const isRadioGroup = computed(() => !!radioGroupContext);
    const _modelValue = computed(() => {
      return isRadioGroup.value ? radioGroupContext.modelValue.value : props.modelValue;
    });
    const _disabled = computed(() => {
      return isRadioGroup.value ? radioGroupContext.disabled.value : props.disabled;
    });
    function onChange(e) {
      if (isRadioGroup.value) {
        radioGroupContext.updateModelValue(props.label);
      } else {
        emit("update:modelValue", props.label);
        nextTick(() => {
          emit("change", props.label);
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          ns,
          {
            "is-disabled": unref(_disabled),
            "is-checked": unref(_modelValue) === __props.label
          }
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([ns + "__input-wrapper"])
        }, [
          createElementVNode("span", {
            class: normalizeClass([ns + "__input-border"])
          }, null, 2),
          createElementVNode("span", {
            class: normalizeClass([ns + "__input-circle"])
          }, null, 2),
          createElementVNode("input", {
            type: "radio",
            class: normalizeClass([ns + "__input"]),
            disabled: unref(_disabled),
            checked: unref(_modelValue) === __props.label,
            onChange
          }, null, 42, _hoisted_1$4)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass([ns + "__label"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ])
        ], 2)
      ], 2);
    };
  }
});
var GRadioGroup_vue_vue_type_style_index_0_lang = "";
const __default__$7 = {
  name: "GRadioGroup"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$7, {
  props: {
    modelValue: {
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-radio-group";
    function updateModelValue(v) {
      emit("update:modelValue", v);
      nextTick(() => {
        emit("change", v);
      });
    }
    const context = __spreadProps(__spreadValues({}, toRefs(props)), {
      updateModelValue
    });
    provide(radioGroupContextKey, context);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var GRadio = {
  install(app) {
    app.component(_sfc_main$8.name, _sfc_main$8);
    app.component(_sfc_main$7.name, _sfc_main$7);
  }
};
var GCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = ["disabled"];
const __default__$6 = {
  name: "GCheckbox"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$6, {
  props: {
    modelValue: {
      type: Boolean
    },
    label: {},
    value: {},
    disabled: {
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
            "is-checked": unref(isChecked)
          }
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([ns + "__input-wrapper"])
        }, [
          createElementVNode("span", {
            class: normalizeClass([ns + "__input-border"])
          }, [
            createVNode(_sfc_main$g, {
              class: normalizeClass([ns + "__icon"])
            }, {
              default: withCtx(() => [
                createVNode(unref(CheckOutlined))
              ]),
              _: 1
            }, 8, ["class"])
          ], 2),
          createElementVNode("input", {
            type: "checkbox",
            class: normalizeClass([ns + "__input"]),
            disabled: unref(isDisabled),
            onChange
          }, null, 42, _hoisted_1$3)
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
var GCheckbox = {
  install(app) {
    app.component(_sfc_main$6.name, _sfc_main$6);
    app.component(_sfc_main$5.name, _sfc_main$5);
  }
};
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
var GSelect_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = ["value", "readonly", "disabled"];
const _hoisted_2 = { key: 0 };
const __default__$4 = {
  name: "GSelect"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$4, {
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
                createVNode(_sfc_main$g, {
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
          createVNode(_sfc_main$g, {
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
const __default__$3 = {
  name: "GOptionGroup"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  setup(__props) {
    const ns = "g-option-group";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns])
      }, null, 2);
    };
  }
});
var GOption_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["onClick"];
const __default__$2 = {
  name: "GOption"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
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
        unref(multiple) ? (openBlock(), createBlock(_sfc_main$6, {
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
      ], 10, _hoisted_1$1)), [
        [vShow, visible.value]
      ]);
    };
  }
});
var GSelect = {
  install(app) {
    app.component(_sfc_main$4.name, _sfc_main$4);
    app.component(_sfc_main$3.name, _sfc_main$3);
    app.component(_sfc_main$2.name, _sfc_main$2);
  }
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const __default__$1 = {
  name: "GLoading"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  setup(__props, { expose }) {
    const visible = ref(true);
    const title = ref("");
    const background = ref(null);
    const fullscreen = ref(null);
    const rootRef = ref(null);
    const ns = "g-loading";
    const rootStyle = computed(() => {
      const style = {};
      if (background.value) {
        style.background = background.value;
      }
      if (fullscreen.value) {
        style.position = "fixed";
      }
      return style;
    });
    const close = () => {
      visible.value = false;
    };
    expose({ visible, title, background, fullscreen, close });
    return (_ctx, _cache) => {
      return visible.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([ns]),
        ref_key: "rootRef",
        ref: rootRef,
        style: normalizeStyle(unref(rootStyle))
      }, [
        createElementVNode("div", {
          class: normalizeClass([ns + "__content"])
        }, [
          createVNode(_sfc_main$g, {
            class: normalizeClass([ns + "__icon"])
          }, {
            default: withCtx(() => [
              createVNode(unref(LoadingOutlined))
            ]),
            _: 1
          }, 8, ["class"]),
          title.value ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass([ns + "__desc"])
          }, toDisplayString(title.value), 3)) : createCommentVNode("", true)
        ], 2)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
const relativeCls$1 = "g-relative";
var loadingDirective = {
  mounted(el, binding) {
    const app = createApp(_sfc_main$1);
    const instance = app.mount(document.createElement("div"));
    const name = _sfc_main$1.name;
    if (!el[name]) {
      el[name] = {};
    }
    el[name].instance = instance;
    if (binding.value) {
      append(el);
    }
    instance.background = el.getAttribute("g-loading-background");
    instance.title = el.getAttribute("g-loading-text");
    instance._fullscreen = !!binding.modifiers.fullscreen;
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el);
    }
  }
};
function append(el) {
  const style = getComputedStyle(el);
  if (!["relative", "absolute", "fixed"].includes(style.position)) {
    addClass(el, relativeCls$1);
  }
  const $el = el[_sfc_main$1.name].instance.$el;
  if (el[_sfc_main$1.name].instance._fullscreen) {
    document.body.appendChild($el);
  } else {
    el.appendChild($el);
  }
}
function remove(el) {
  removeClass(el, relativeCls$1);
  const $el = el[_sfc_main$1.name].instance.$el;
  if (el[_sfc_main$1.name].instance._fullscreen) {
    document.body.removeChild($el);
  } else {
    el.removeChild($el);
  }
}
const relativeCls = "g-relative";
const loading = (options = {}) => {
  const loadingApp = createApp(_sfc_main$1, options);
  const instance = loadingApp.mount(document.createElement("div"));
  Object.assign(instance, options);
  let el = options.target instanceof Element ? options.target : document.querySelector(options.target) || document.body;
  const style = getComputedStyle(el);
  if (!["relative", "absolute", "fixed"].includes(style.position)) {
    addClass(el, relativeCls);
  }
  el.appendChild(instance.$el);
  return () => {
    instance.close();
    removeClass(el, relativeCls);
  };
};
var GLoading = {
  install(app) {
    app.directive("loading", loadingDirective);
    app.config.globalProperties.$loading = loading;
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["checked", "disabled"];
const __default__ = {
  name: "GSwitch"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    modelValue: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    activeIcon: {
      type: Object
    },
    inactiveIcon: {
      type: Object
    },
    activeText: {
      type: [String, Object]
    },
    inactiveText: {
      type: [String, Object]
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = "g-switch";
    const isActiveTextComp = computed(() => {
      var _a;
      return isFunction((_a = props.activeText) == null ? void 0 : _a.render);
    });
    const isInactiveTextComp = computed(() => {
      var _a;
      return isFunction((_a = props.inactiveText) == null ? void 0 : _a.render);
    });
    function onUpdateModelValue(e) {
      emit("update:modelValue", e.target.checked);
    }
    watch(() => props.modelValue, (val) => {
      console.log(val);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns, { disabled: __props.disabled }]),
        style: normalizeStyle({ background: __props.inactiveColor })
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: __props.modelValue,
          class: normalizeClass([ns + "__input"]),
          disabled: __props.disabled,
          onChange: onUpdateModelValue
        }, null, 42, _hoisted_1),
        createElementVNode("div", {
          class: normalizeClass([ns + "__circle"])
        }, [
          renderSlot(_ctx.$slots, "circle", {}, () => [
            __props.loading ? (openBlock(), createBlock(_sfc_main$g, {
              key: 0,
              class: normalizeClass([ns + "__loading"])
            }, {
              default: withCtx(() => [
                createVNode(unref(LoadingOutlined))
              ]),
              _: 1
            }, 8, ["class"])) : (openBlock(), createBlock(_sfc_main$g, { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(__props.modelValue ? __props.activeIcon : __props.inactiveIcon)))
              ]),
              _: 1
            }))
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass([ns + "__active-text"])
        }, [
          renderSlot(_ctx.$slots, "on", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(isActiveTextComp) ? __props.activeText : "span"), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.activeText), 1)
              ]),
              _: 1
            }))
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass([ns + "__inactive-text"])
        }, [
          renderSlot(_ctx.$slots, "off", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(isInactiveTextComp) ? __props.inactiveText : "span"), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.inactiveText), 1)
              ]),
              _: 1
            }))
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass([ns + "__background"]),
          style: normalizeStyle({
            background: __props.activeColor
          })
        }, null, 6)
      ], 6);
    };
  }
});
var GSwitch = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
var index$1 = "";
const comps = [
  GButton,
  GLayout,
  GMessage,
  GIcon,
  GTooltip,
  GForm,
  GInput,
  GInputNumber,
  GCarousel,
  GRadio,
  GCheckbox,
  GSelect,
  GLoading,
  GSwitch
];
var index = {
  install(app) {
    comps.forEach((comp) => {
      app.use(comp);
    });
  }
};
export { index as default };
