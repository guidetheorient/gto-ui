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
import { inject, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createTextVNode, toDisplayString, nextTick, toRefs, provide } from "vue";
const radioGroupContextKey = Symbol("radioGroupContextKey");
var GRadio_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["disabled", "checked"];
const __default__$1 = {
  name: "GRadio"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
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
          }, null, 42, _hoisted_1)
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
const __default__ = {
  name: "GRadioGroup"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
var index = {
  install(app) {
    app.component(_sfc_main$1.name, _sfc_main$1);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
