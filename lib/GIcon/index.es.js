import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot } from "vue";
const toString = Object.prototype.toString;
const isNumber = (v) => toString.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__ = {
  name: "GIcon"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
