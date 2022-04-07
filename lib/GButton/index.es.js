import { openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["g-button", $setup.classes])
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
var GButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3136dae6"]]);
var index = {
  install(app) {
    app.component(GButton.name, GButton);
  }
};
export { index as default };
