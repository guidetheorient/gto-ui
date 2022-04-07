import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, ref, resolveDirective, normalizeClass, withDirectives, createVNode, withCtx } from "vue";
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
const _hoisted_1$2 = {
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
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("defs", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
var PlusOutlined = defineComponent({
  name: "PlusOutlined",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5);
  }
});
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["value", "disabled"];
const __default__ = {
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
          createVNode(_sfc_main$1, null, {
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
        }, null, 42, _hoisted_1),
        withDirectives((openBlock(), createElementBlock("button", {
          class: normalizeClass([ns + "__plus", , { "is-disabled": __props.max <= __props.modelValue || __props.disabled }])
        }, [
          createVNode(_sfc_main$1, null, {
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
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
