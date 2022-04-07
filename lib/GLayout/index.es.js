import { computed, provide, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, renderSlot, inject, normalizeClass } from "vue";
const rowContextKey = Symbol("rowContextKey");
var GRow_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
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
var GRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var GCol_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
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
var GCol = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = {
  install(app) {
    app.component(GRow.name, GRow);
    app.component(GCol.name, GCol);
  }
};
export { index as default };
