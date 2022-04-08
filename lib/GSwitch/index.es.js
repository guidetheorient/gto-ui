import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, watch, normalizeClass, createBlock, withCtx, createVNode, resolveDynamicComponent, createTextVNode, toDisplayString } from "vue";
const toString = Object.prototype.toString;
const isNumber = (v) => toString.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang$1 = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__$1 = {
  name: "GIcon"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
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
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2];
var LoadingOutlined = defineComponent({
  name: "LoadingOutlined",
  render: function render(_ctx, _cache) {
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
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
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
            __props.loading ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              class: normalizeClass([ns + "__loading"])
            }, {
              default: withCtx(() => [
                createVNode(unref(LoadingOutlined))
              ]),
              _: 1
            }, 8, ["class"])) : (openBlock(), createBlock(_sfc_main$1, { key: 1 }, {
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
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
