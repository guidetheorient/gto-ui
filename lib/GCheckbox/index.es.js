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
import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, inject, normalizeClass, createVNode, withCtx, createTextVNode, toDisplayString, nextTick, toRefs, provide } from "vue";
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
function isNumber$1(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
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
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5L207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2];
var CheckOutlined = defineComponent({
  name: "CheckOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
  }
});
var GCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["disabled"];
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
        if (isNumber$1(min.value) && ((_a = modelValue.value) == null ? void 0 : _a.length) <= min.value) {
          return isChecked.value;
        } else if (isNumber$1(max.value) && ((_b = modelValue.value) == null ? void 0 : _b.length) >= max.value) {
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
            createVNode(_sfc_main$2, {
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
          }, null, 42, _hoisted_1)
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
const __default__ = {
  name: "GCheckboxGroup"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
var index = {
  install(app) {
    app.component(_sfc_main$1.name, _sfc_main$1);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
