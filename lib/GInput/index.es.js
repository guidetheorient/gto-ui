import { inject, ref, watch, openBlock, createElementBlock, normalizeClass, createElementVNode } from "vue";
const formItemContextKey = Symbol("formItemContextKey");
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["value"];
const __default__ = {
  name: "GInput"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
        }, null, 42, _hoisted_1)
      ], 2);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
