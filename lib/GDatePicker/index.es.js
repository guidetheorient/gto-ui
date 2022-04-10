import { openBlock, createElementBlock, normalizeClass, renderSlot, computed, normalizeStyle, unref, defineComponent, createElementVNode, inject, ref, watch, createVNode, shallowRef, withDirectives, Fragment, createTextVNode, Transition, mergeProps } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
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
var GButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-3136dae6"]]);
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
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$4 = [_hoisted_2$4];
var CloseCircleFilled = defineComponent({
  name: "CloseCircleFilled",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$4);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$3 = [_hoisted_2$3];
var DoubleLeftOutlined = defineComponent({
  name: "DoubleLeftOutlined",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$3);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512L181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512L485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = [_hoisted_2$2];
var DoubleRightOutlined = defineComponent({
  name: "DoubleRightOutlined",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$2);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$1 = [_hoisted_2$1];
var LeftOutlined = defineComponent({
  name: "LeftOutlined",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = [_hoisted_2];
var RightOutlined = defineComponent({
  name: "RightOutlined",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
  }
});
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
    const ns2 = "g-input";
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
    watch(() => props.modelValue, (val) => {
      value.value = val;
      formItemContext == null ? void 0 : formItemContext.validate("change").catch(console.log);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([ns2])
      }, [
        createElementVNode("input", {
          class: normalizeClass([ns2 + "__inner"]),
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
function wrapperGIcon(comp, onClick) {
  return createVNode(_sfc_main$1, {
    "class": [ns + "__icon"],
    "onClick": onClick
  }, {
    default: () => [createVNode(comp, null, null)]
  });
}
var Actions = {
  props: {
    date: Object
  },
  render() {
    const {
      date,
      $emit
    } = this;
    return createVNode("div", {
      "class": [ns + "__actions"]
    }, [createVNode("div", {
      "class": ns + "__actions-left"
    }, [wrapperGIcon(DoubleLeftOutlined, () => $emit("doubleLeftClick")), wrapperGIcon(LeftOutlined, () => $emit("leftClick"))]), createVNode("div", {
      "class": ns + "__actions-text"
    }, [date.value.format("YYYY/MM/DD")]), createVNode("div", {
      "class": ns + "__actions-right"
    }, [wrapperGIcon(RightOutlined, () => $emit("rightClick")), wrapperGIcon(DoubleRightOutlined, () => $emit("doubleRightClick"))])]);
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, g = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return t2 === void 0;
    } }, v = "en", D = {};
    D[v] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return v;
      if (typeof e2 == "string") {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (v = i2), i2 || !r2 && v;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = typeof e2 == "object" ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = g;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (e2 === null)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if (typeof e2 == "string" && !/Z$/i.test(e2)) {
            var r2 = e2.match(l);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === $);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, l2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h2) {
          case c:
            return r2 ? $2(1, 0) : $2(31, 11);
          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);
          case o:
            var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return l2(g2 + "Hours", 0);
          case u:
            return l2(g2 + "Minutes", 1);
          case s:
            return l2(g2 + "Seconds", 2);
          case i:
            return l2(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h2) {
        var d2, $2 = this;
        r2 = Number(r2);
        var l2 = O.p(h2), y2 = function(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };
        if (l2 === f)
          return this.set(f, this.$M + r2);
        if (l2 === c)
          return this.set(c, this.$y + r2);
        if (l2 === a)
          return y2(1);
        if (l2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || $;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].substr(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || l2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, $2) {
        var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
        return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), b = _.prototype;
    return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      b[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[v], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var isBetween$1 = { exports: {} };
(function(module, exports) {
  !function(e, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    return function(e, i, t) {
      i.prototype.isBetween = function(e2, i2, s, f) {
        var n = t(e2), o = t(i2), r = (f = f || "()")[0] === "(", u = f[1] === ")";
        return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(isBetween$1);
var isBetween = isBetween$1.exports;
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
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
dayjs.extend(isBetween);
var Month = {
  props: {
    date: Object,
    modelValue: {},
    rangeStartDate: {},
    rangeEndDate: {},
    isStartSelect: {
      type: Boolean
    }
  },
  emits: ["dayClick"],
  setup(props, {
    emit
  }) {
    const days = computed(() => {
      const dateVal = props.date.value;
      let rangeStartDate = dateVal.startOf("month");
      let rangeEndDate = dateVal.endOf("month");
      let ret = [];
      for (let i = 0; i < rangeEndDate.date(); i++) {
        ret.push({
          date: rangeStartDate.add(i, "day")
        });
      }
      let startDay = rangeStartDate.day();
      let endDay = rangeEndDate.day();
      if (startDay) {
        for (let i = 1; i <= startDay; i++) {
          ret.unshift({
            date: rangeStartDate.subtract(i, "day"),
            type: "disabled"
          });
        }
      }
      if (endDay !== 6) {
        for (let i = endDay; i < 6; i++) {
          ret.push({
            date: rangeEndDate.add(i, "day"),
            type: "disabled"
          });
        }
      }
      return ret;
    });
    function genDay({
      date,
      type
    }, i) {
      const dayClass = getDayClass(date);
      return createVNode("div", {
        "data-date": date.format(props.format),
        "onClick": ($event) => emit("dayClick", date, $event),
        "class": [ns + "__day", {
          disabled: type === "disabled"
        }, dayClass]
      }, [createVNode("span", null, [date.format("D")])]);
    }
    function getDayClass(date, i) {
      let classes = {};
      if (date.isSame(dayjs(), "day")) {
        classes.today = true;
      }
      let value = isArray$1(props.modelValue) ? props.modelValue : [props.modelValue];
      if (value.some((_date) => _date && date.isSame(_date, "day"))) {
        classes.active = true;
      }
      let {
        isStartSelect,
        rangeStartDate,
        rangeEndDate
      } = props;
      if (rangeEndDate.value) {
        let start = rangeStartDate.value;
        let end = rangeEndDate.value;
        if (start.isAfter(end)) {
          start = rangeEndDate.value;
          end = rangeStartDate.value;
        }
        if (date.isBetween(start, end, null, "[]")) {
          classes.covered = true;
        }
        if (date.isSame(start, "day")) {
          classes["start-date"] = true;
        }
        if (date.isSame(end, "day")) {
          classes["end-date"] = true;
        }
      }
      return classes;
    }
    function genDays() {
      return createVNode("div", {
        "ref": "days",
        "class": ns + "__days"
      }, [days.value.map(genDay)]);
    }
    return {
      genDay,
      genDays,
      days
    };
  },
  render() {
    return createVNode("div", {
      "class": ns + "__month"
    }, [this.genDays()]);
  }
};
const weekdays = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
var Weekdays = {
  render() {
    return createVNode("div", {
      "class": [ns + "__weekdays"]
    }, [weekdays.map((day) => {
      return createVNode("div", {
        "class": ns + "__weekday"
      }, [day]);
    })]);
  }
};
const isElement = (v) => v instanceof Element;
const nodeList = /* @__PURE__ */ new Map();
let startClick;
document.addEventListener("mousedown", (e) => {
  startClick = e;
});
document.addEventListener("mouseup", (e) => {
  for (const handlers of nodeList.values()) {
    for (const { documentHandler } of handlers) {
      documentHandler(e, startClick);
    }
  }
});
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
var index$1 = "";
function useTransition() {
  function beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = "scale(0)";
  }
  function enter(el, done) {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "scale(1)";
      el.style.transformOrigin = "top left";
      el.style.transition = "all .3s ease";
      el.style.transition = "all .3s ease";
      el.addEventListener("transitionend", next);
      function next() {
        el.removeEventListener("transitionend", next);
        done();
      }
    });
  }
  function afterEnter(el) {
    el.style.opacity = "";
    el.style.transform = "";
    el.style.transition = "";
    el.style.transition = "";
  }
  function leave(el, done) {
    el.style.opacity = 0;
    el.style.transform = "scale(0)";
    el.style.transition = "all .3s ease";
    el.style.transition = "all .3s ease";
    el.addEventListener("transitionend", next);
    function next() {
      el.removeEventListener("transitionend", next);
      done();
    }
  }
  function afterLeave(el) {
    el.style.opacity = "";
    el.style.transform = "";
  }
  return {
    beforeEnter,
    enter,
    afterEnter,
    leave,
    afterLeave
  };
}
const ns = "g-date-picker";
var GDatePicker = defineComponent({
  name: "GDatePicker",
  props: {
    modelValue: {
      type: [String, Date, Array]
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    },
    type: {
      type: String,
      validator: (v) => ["daterange"].includes(v)
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const startDate = shallowRef(dayjs());
    const endDate = shallowRef(dayjs().add(1, "month"));
    const visible = ref(false);
    const inputRef = ref(null);
    let rangeStartDate = shallowRef(null);
    let rangeEndDate = shallowRef(null);
    const isTypeDateRange = computed(() => props.type === "daterange");
    watch(() => props.modelValue, (val) => {
      if (isTypeDateRange.value) {
        if (val[0])
          rangeStartDate.value = dayjs(val[0]);
        if (val[1])
          rangeEndDate.value = dayjs(val[1]);
      } else {
        rangeStartDate.value = val ? dayjs(val) : null;
      }
    });
    function toggleShowCalendar() {
      visible.value = !visible.value;
      if (!visible.value)
        onClose();
    }
    function onClose() {
      visible.value = false;
      if (isStartSelect) {
        isStartSelect = false;
        emit("update:modelValue", []);
      }
    }
    let isStartSelect = false;
    function onDayClick(date, e) {
      if (isTypeDateRange.value) {
        if (isStartSelect) {
          isStartSelect = false;
          dayjs(date).isBefore(props.modelValue[0]) ? emit("update:modelValue", [date.toDate(), props.modelValue[0]]) : emit("update:modelValue", [props.modelValue[0], date.toDate()]);
          onClose();
        } else {
          isStartSelect = true;
          emit("update:modelValue", [date.toDate()]);
        }
      } else {
        emit("update:modelValue", date.toDate());
        onClose();
      }
    }
    const {
      beforeEnter,
      enter,
      afterEnter,
      leave,
      afterLeave
    } = useTransition();
    function clearDate() {
      emit("update:modelValue", isTypeDateRange.value ? [] : "");
      rangeStartDate.value = null;
      rangeEndDate.value = null;
      onClose();
    }
    function setDateToCurrentDate() {
      emit("update:modelValue", new Date());
      onClose();
    }
    function genSingleCalendar(date) {
      function onDoubleLeftClick() {
        date.value = date.value.subtract(1, "year");
      }
      function onLeftClick() {
        date.value = date.value.subtract(1, "month");
      }
      function onDoubleRightClick() {
        date.value = date.value.add(1, "year");
      }
      function onRightClick() {
        date.value = date.value.add(1, "month");
      }
      function genMonth(date2, i) {
        return createVNode(Month, mergeProps({
          "date": date2,
          "key": i,
          "onDayClick": onDayClick
        }, props, {
          "rangeStartDate": rangeStartDate,
          "rangeEndDate": rangeEndDate,
          "isStartSelect": isStartSelect
        }), null);
      }
      return createVNode("div", null, [createVNode(Actions, {
        "date": date,
        "onLeftClick": onLeftClick,
        "onRightClick": onRightClick,
        "onDoubleLeftClick": onDoubleLeftClick,
        "onDoubleRightClick": onDoubleRightClick
      }, null), createVNode(Weekdays, null, null), createVNode("div", {
        "class": [ns + "__body"]
      }, [genMonth(date)])]);
    }
    const calendarWrapperRef = ref(null);
    function onMousemove(e) {
      if (isStartSelect) {
        const isDayTarget = e.target.classList.contains("g-date-picker__day") || e.target.parentElement.classList.contains("g-date-picker__day");
        if (isDayTarget) {
          rangeEndDate.value = dayjs(e.target.dataset.date || e.target.parentElement.dataset.date);
        }
      }
    }
    const throttledMousemove = throttle(onMousemove, 10);
    function getCalendar() {
      return createVNode(Transition, {
        "onBeforeEnter": beforeEnter,
        "onEnter": enter,
        "onAfterEnter": afterEnter,
        "onLeave": leave,
        "onAfterLeave": afterLeave
      }, {
        default: () => [visible.value ? createVNode("div", {
          "class": [ns]
        }, [createVNode("div", {
          "ref": calendarWrapperRef,
          "class": [ns + "__calendar-wrapper", {
            divider: isTypeDateRange.value
          }],
          "onMousemove": throttledMousemove
        }, [genSingleCalendar(startDate), isTypeDateRange.value && genSingleCalendar(endDate)]), createVNode("div", {
          "class": [ns + "__footer"]
        }, [createVNode(GButton, {
          "size": "small",
          "onClick": clearDate
        }, {
          default: () => [createTextVNode("\u6E05\u9664")]
        }), isTypeDateRange.value ? null : createVNode(GButton, {
          "size": "small",
          "onClick": setDateToCurrentDate
        }, {
          default: () => [createTextVNode("\u6B64\u523B")]
        }), createVNode(GButton, {
          "size": "small",
          "type": "primary",
          "onClick": onClose
        }, {
          default: () => [createTextVNode("\u786E\u8BA4")]
        })])]) : null]
      });
    }
    return {
      getCalendar,
      startDate,
      toggleShowCalendar,
      onClose,
      inputRef,
      isTypeDateRange,
      clearDate
    };
  },
  render() {
    const {
      modelValue,
      format,
      inputRef,
      onClose,
      type,
      isTypeDateRange,
      clearDate
    } = this;
    const startDateText = type === "daterange" ? modelValue[0] ? dayjs(modelValue[0]).format(format) : "" : modelValue ? dayjs(modelValue).format(format) : "";
    const endDateText = type === "daterange" ? modelValue[1] ? dayjs(modelValue[1]).format(format) : "" : "";
    const clearIconShow = computed(() => {
      if (isTypeDateRange) {
        return modelValue.length ? modelValue == null ? void 0 : modelValue.every((v) => !!v) : false;
      } else {
        return !!modelValue;
      }
    });
    return withDirectives(createVNode("div", {
      "class": [ns + "__wrapper"]
    }, [createVNode("div", {
      "class": [ns + "__input-wrapper"]
    }, [createVNode(_sfc_main, {
      "class": [ns + "__input"],
      "onClick": this.toggleShowCalendar,
      "modelValue": startDateText
    }, null), isTypeDateRange ? createVNode(Fragment, null, [createVNode("span", null, [createTextVNode("\u81F3")]), createVNode(_sfc_main, {
      "class": [ns + "__input"],
      "onClick": this.toggleShowCalendar,
      "modelValue": endDateText
    }, null)]) : null, clearIconShow.value && createVNode(_sfc_main$1, {
      "class": ns + "__clear-icon",
      "onClick": clearDate
    }, {
      default: () => [createVNode(CloseCircleFilled, null, null)]
    })]), this.getCalendar()]), [[ClickOutside, onClose]]);
  }
});
var index = {
  install(app) {
    app.component(GDatePicker.name, GDatePicker);
  }
};
export { index as default };
