import { ref, computed, onMounted, nextTick, openBlock, createBlock, Transition, unref, withCtx, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, createApp } from "vue";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "g-message__content" };
const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "success", "warning", "danger"].includes(v)
    },
    message: {
      type: String,
      default: ""
    },
    duartion: {
      type: Number,
      default: 3e3
    },
    placement: {
      type: String,
      default: "top-center",
      validator: (v) => ["top-center", "bottom-center", "top-left", "bottom-left", "top-right", "bottom-right"].includes(v)
    },
    onClick: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    function useTransition({ placement }, calcPosition2) {
      function beforeEnter2(el) {
        el.style.opacity = 0;
      }
      function enter2(el, done) {
        el.style.opacity = 1;
        done();
      }
      function leave2(el, done) {
        el.style.opacity = 0;
        let translateX = 0;
        let translateY = 0;
        const hasCenter = placement.includes("center");
        const hasLeft = placement.includes("left");
        const hasTop = placement.includes("top");
        if (hasCenter) {
          translateY = hasTop ? "-100%" : "100%";
        } else {
          translateX = hasLeft ? "-100%" : "100%";
        }
        el.style.transform = el.style.transform + ` translate3d(${translateX}, ${translateY}, 0)`;
        setTimeout(() => {
          done();
          calcPosition2();
        }, 150);
      }
      return {
        beforeEnter: beforeEnter2,
        enter: enter2,
        leave: leave2
      };
    }
    function usePosition(props2) {
      const position2 = ref({
        left: null,
        right: null,
        top: null,
        bottom: null
      });
      const transform2 = ref({
        translateX: 0
      });
      const isNegativeVerticalStart2 = ref(false);
      props2.placement.split("-").forEach((key) => {
        const positionVal = position2.value;
        const transformVal = transform2.value;
        if (key in positionVal)
          positionVal[key] = "0px";
        if (key === "center") {
          positionVal.left = "50%";
          transformVal.translateX = "-50%";
        }
        if (key === "bottom")
          isNegativeVerticalStart2.value = true;
      });
      return {
        position: position2,
        transform: transform2,
        isNegativeVerticalStart: isNegativeVerticalStart2
      };
    }
    const ns = "g-message";
    let visible = ref(true);
    const classes = computed(() => {
      const classes2 = [`${ns}-${props.placement}`];
      if (props.type) {
        classes2.push(`${ns}--${props.type}`);
      }
      return classes2;
    });
    const { position, transform, isNegativeVerticalStart } = usePosition(props);
    const calcPosition = () => {
      const messageEls = document.querySelectorAll(".g-message-" + props.placement);
      for (let i = 0; i < messageEls.length; i++) {
        let verticalStart = 10;
        for (let j = 0; j < i; j++) {
          verticalStart += messageEls[j].clientHeight + 6;
        }
        for (let key in position.value) {
          if (position.value[key] !== null) {
            messageEls[i].style[key] = position.value[key];
          }
        }
        messageEls[i].style.transform = `translate3d(
      ${transform.value.translateX},
      ${(isNegativeVerticalStart.value ? "-" : "") + verticalStart}px,
        0
      )`;
      }
    };
    const { beforeEnter, enter, leave } = useTransition(props, calcPosition);
    const close = () => {
      visible.value = false;
    };
    expose({ close });
    onMounted(async () => {
      await nextTick();
      calcPosition();
      if (props.duartion) {
        setTimeout(() => {
          close();
        }, props.duartion);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "message",
        onBeforeEnter: unref(beforeEnter),
        onEnter: unref(enter),
        onLeave: unref(leave)
      }, {
        default: withCtx(() => [
          visible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["g-message", unref(classes)]),
            onClick: _cache[0] || (_cache[0] = (...args) => __props.onClick && __props.onClick(...args))
          }, [
            createElementVNode("div", _hoisted_1, toDisplayString(__props.message), 1)
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
    };
  }
};
const message = (options = {}) => {
  const messageApp = createApp(_sfc_main, options);
  const instance = messageApp.mount(document.createElement("div"));
  document.body.insertBefore(instance.$el, document.body.firstChild);
  return instance.close;
};
var index = {
  install(app) {
    app.config.globalProperties.$message = message;
  }
};
export { message as GMessage, index as default };
