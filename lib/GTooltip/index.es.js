import { ref, computed, watch, nextTick, onBeforeUnmount, openBlock, createElementBlock, normalizeClass, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, unref, renderSlot, createTextVNode, toDisplayString, vShow } from "vue";
const insertAsFirstChildOfBody = (el) => {
  document.body.insertBefore(el, document.body.firstChild);
};
var index_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "GTooltip"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    visible: {
      type: Boolean,
      default: null
    },
    placement: {
      type: String,
      default: "bottom",
      validator: (v) => ["left", "top", "right", "bottom"].includes(v)
    },
    content: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const ns = "g-tooltip";
    const tooltipRef = ref(null);
    const triggerRef = ref(null);
    const pos = ref({
      left: 0,
      top: 0,
      width: "auto"
    });
    const _visible = ref(false);
    let hasAppendToBody = ref(false);
    const controlled = computed(() => props.visible !== null);
    const style = computed(() => {
      return pos.value;
    });
    watch(() => props.visible, (v) => {
      _visible.value = v;
      if (v) {
        show();
      }
    });
    function onMouseEnter(e) {
      if (controlled.value)
        return;
      show();
    }
    function show() {
      if (!props.disabled) {
        _visible.value = true;
        nextTick(() => {
          insertAsFirstChildOfBody(tooltipRef.value);
          changePosition(triggerRef, tooltipRef);
          hasAppendToBody.value = true;
        });
      }
    }
    function onMouseLeave(e) {
      if (controlled.value)
        return;
      hide();
    }
    function hide() {
      _visible.value = false;
    }
    onBeforeUnmount(() => {
      if (hasAppendToBody.value) {
        document.body.removeChild(tooltipRef.value);
      }
    });
    function changePosition(triggerRef2, tooltipRef2) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      let { left, top, width, height, bottom, right } = triggerRef2.value.getBoundingClientRect();
      const { width: tooltipWidth, height: tooltipHeight } = tooltipRef2.value.getBoundingClientRect();
      const offset = 8;
      if (props.placement === "bottom") {
        left = left + width / 2 - tooltipWidth / 2;
        top = scrollTop + bottom + offset;
      } else if (props.placement === "top") {
        left = left + width / 2 - tooltipWidth / 2;
        top = scrollTop + top - tooltipHeight - offset;
      } else if (props.placement === "left") {
        top = scrollTop + top + height / 2 - tooltipHeight / 2;
        left = left - tooltipWidth - offset;
      } else if (props.placement === "right") {
        top = scrollTop + top + height / 2 - tooltipHeight / 2;
        left = right + offset;
      }
      pos.value = {
        left: left + "px",
        top: top + "px"
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns + "__trigger"]),
        ref_key: "triggerRef",
        ref: triggerRef,
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        createVNode(Transition, { name: "g-tooltip-fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass([ns, `${ns}--${__props.placement}`]),
              ref_key: "tooltipRef",
              ref: tooltipRef,
              style: normalizeStyle(unref(style))
            }, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(__props.content), 1)
              ])
            ], 6), [
              [vShow, _visible.value]
            ])
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
var index = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export { index as default };
