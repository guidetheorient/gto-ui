import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, ref, normalizeClass, createVNode, withCtx, toDisplayString, createCommentVNode, createApp } from "vue";
const toString = Object.prototype.toString;
const isNumber = (v) => toString.call(v) === "[object Number]";
function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}
function removeClass(el, className) {
  el.classList.remove(className);
}
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
const _hoisted_1 = {
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
    return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
});
var index_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "GLoading"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
          createVNode(_sfc_main$1, {
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
    const app = createApp(_sfc_main);
    const instance = app.mount(document.createElement("div"));
    const name = _sfc_main.name;
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
  const $el = el[_sfc_main.name].instance.$el;
  if (el[_sfc_main.name].instance._fullscreen) {
    document.body.appendChild($el);
  } else {
    el.appendChild($el);
  }
}
function remove(el) {
  removeClass(el, relativeCls$1);
  const $el = el[_sfc_main.name].instance.$el;
  if (el[_sfc_main.name].instance._fullscreen) {
    document.body.removeChild($el);
  } else {
    el.removeChild($el);
  }
}
const relativeCls = "g-relative";
const loading = (options = {}) => {
  const loadingApp = createApp(_sfc_main, options);
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
var index = {
  install(app) {
    app.directive("loading", loadingDirective);
    app.config.globalProperties.$loading = loading;
  }
};
export { loading as GLoading, index as default, relativeCls };
