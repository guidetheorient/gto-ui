import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, defineComponent, createElementVNode, ref, watch, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, normalizeClass, withModifiers, toDisplayString, createCommentVNode, vShow } from "vue";
const toString = Object.prototype.toString;
const isNumber$1 = (v) => toString.call(v) === "[object Number]";
var index_vue_vue_type_style_index_0_lang$1 = "";
const isValidCssSize = (v) => ["px", "em", "rem"].some((unit) => String(v).endsWith(unit));
const __default__$1 = {
  name: "GIcon"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
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
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2];
var CloseOutlined = defineComponent({
  name: "CloseOutlined",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
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
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
var index_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "GDialog"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    modelValue: {
      type: Boolean
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: "50%"
    },
    title: {
      type: String
    },
    showClose: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = "g-dialog";
    const width = computed(() => {
      return isNumber(props.width) ? props.width + "px" : props.width;
    });
    const contentRef = ref(null);
    watch(() => props.modelValue, (val) => {
      console.log(val);
    });
    function open() {
      emit("update:modelValue", true);
    }
    function close() {
      emit("update:modelValue", false);
    }
    function onModalClick() {
      if (props.closeOnClickModal) {
        close();
      }
    }
    function beforeEnter(el) {
      el.style.opacity = 0;
      contentRef.value.style.transform = "scale(0)";
    }
    function enter(el, done) {
      setTimeout(() => {
        el.style.opacity = 1;
        contentRef.value.style.transform = "scale(1)";
        el.style.transition = "all .3s ease";
        contentRef.value.style.transition = "all .3s ease";
        contentRef.value.addEventListener("transitionend", next);
        function next() {
          contentRef.value.removeEventListener("transitionend", next);
          done();
        }
      });
    }
    function afterEnter(el) {
      el.style.opacity = "";
      contentRef.value.style.transform = "";
      el.style.transition = "";
      contentRef.value.style.transition = "";
    }
    function leave(el, done) {
      el.style.opacity = 0;
      contentRef.value.style.transform = "scale(0)";
      el.style.transition = "all .3s ease";
      contentRef.value.style.transition = "all .3s ease";
      contentRef.value.addEventListener("transitionend", next);
      function next() {
        contentRef.value.removeEventListener("transitionend", next);
        done();
      }
    }
    function afterLeave(el) {
      el.style.opacity = "";
      contentRef.value.style.transform = "";
    }
    expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !__props.appendToBody
      }, [
        createVNode(Transition, {
          onBeforeEnter: beforeEnter,
          onEnter: enter,
          onAfterEnter: afterEnter,
          onLeave: leave,
          onAfterLeave: afterLeave
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass([ns + "__wrapper"])
            }, [
              createElementVNode("div", {
                class: normalizeClass([ns + "__mask"]),
                onClick: onModalClick
              }, null, 2),
              createElementVNode("div", {
                class: normalizeClass([ns]),
                style: normalizeStyle({ width: unref(width) }),
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"])),
                ref_key: "contentRef",
                ref: contentRef
              }, [
                _ctx.$slots.header || __props.title || __props.showClose ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([ns + "__header"])
                }, [
                  createElementVNode("span", {
                    class: normalizeClass([ns + "__title"])
                  }, toDisplayString(__props.title), 3),
                  renderSlot(_ctx.$slots, "header"),
                  createVNode(_sfc_main$1, {
                    class: normalizeClass([ns + "__close"]),
                    onClick: close
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CloseOutlined))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ], 2)) : createCommentVNode("", true),
                createElementVNode("div", {
                  class: normalizeClass([ns + "__content"])
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2),
                _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass([ns + "__footer"])
                }, [
                  renderSlot(_ctx.$slots, "footer")
                ], 2)) : createCommentVNode("", true)
              ], 6)
            ], 2), [
              [vShow, __props.modelValue]
            ])
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
