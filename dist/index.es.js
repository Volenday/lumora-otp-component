import * as Qr from "react";
import on, { useState as Pe, useRef as Ln, useCallback as Fe, useEffect as Ar } from "react";
import { useForm as Yn, Controller as Wn } from "react-hook-form";
import { keyframes as Fn, Box as et, TextField as Un, Button as Vn, Typography as mt, Alert as Nr, Fade as ht, Stack as zn, CircularProgress as qn } from "@mui/material";
import Bn from "@emotion/styled";
import { CacheProvider as Gn, Global as Kn, ThemeContext as Hn, css as Xn, keyframes as Jn } from "@emotion/react";
function Zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function we(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var qr = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Qn() {
  if (yt) return nr;
  yt = 1;
  var e = Symbol.for("react.fragment");
  return nr.Fragment = e, nr.jsxDEV = void 0, nr;
}
var or = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function eo() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ie ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case O:
          return "Fragment";
        case N:
          return "Profiler";
        case P:
          return "StrictMode";
        case I:
          return "Suspense";
        case $:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case i:
            return "Portal";
          case j:
            return a.displayName || "Context";
          case k:
            return (a._context.displayName || "Context") + ".Consumer";
          case E:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case re:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case V:
            m = a._payload, a = a._init;
            try {
              return e(a(m));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function t(a) {
      try {
        r(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var x = m.error, p = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return x.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), r(a);
      }
    }
    function n(a) {
      if (a === O) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === V)
        return "<...>";
      try {
        var m = e(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = M.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(a) {
      if (W.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, m) {
      function x() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: x,
        configurable: !0
      });
    }
    function f() {
      var a = e(this.type);
      return ne[a] || (ne[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function l(a, m, x, p, _, R) {
      var g = x.ref;
      return a = {
        $$typeof: b,
        type: a,
        key: m,
        props: x,
        _owner: p
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, m, x, p, _, R) {
      var g = m.children;
      if (g !== void 0)
        if (p)
          if (G(g)) {
            for (p = 0; p < g.length; p++)
              h(g[p]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(g);
      if (W.call(m, "key")) {
        g = e(a);
        var w = Object.keys(m).filter(function(A) {
          return A !== "key";
        });
        p = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", v[g + p] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          g,
          w,
          g
        ), v[g + p] = !0);
      }
      if (g = null, x !== void 0 && (t(x), g = "" + x), c(m) && (t(m.key), g = "" + m.key), "key" in m) {
        x = {};
        for (var C in m)
          C !== "key" && (x[C] = m[C]);
      } else x = m;
      return g && u(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), l(
        a,
        g,
        x,
        o(),
        _,
        R
      );
    }
    function h(a) {
      y(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === V && (a._payload.status === "fulfilled" ? y(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function y(a) {
      return typeof a == "object" && a !== null && a.$$typeof === b;
    }
    var T = on, b = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), j = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), M = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, G = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var J, ne = {}, pe = T.react_stack_bottom_frame.bind(
      T,
      s
    )(), be = te(n(s)), v = {};
    or.Fragment = O, or.jsxDEV = function(a, m, x, p) {
      var _ = 1e4 > M.recentlyCreatedOwnerStacks++;
      return d(
        a,
        m,
        x,
        p,
        _ ? Error("react-stack-top-frame") : pe,
        _ ? te(n(a)) : be
      );
    };
  }()), or;
}
process.env.NODE_ENV === "production" ? qr.exports = Qn() : qr.exports = eo();
var ae = qr.exports;
function Ge(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), to = "$$material";
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, X.apply(null, arguments);
}
function Ce(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function no(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var oo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ao(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var so = !0, bt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, io = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", co = /[A-Z]|^ms/g, an = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rt = function(r) {
  return r.charCodeAt(1) === 45;
}, vt = function(r) {
  return r != null && typeof r != "boolean";
}, Ir = /* @__PURE__ */ ao(function(e) {
  return rt(e) ? e : e.replace(co, "-$&").toLowerCase();
}), pr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(an, function(n, o, s) {
          return Se = {
            name: o,
            styles: s,
            next: Se
          }, o;
        });
  }
  return oo[r] !== 1 && !rt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
{
  var uo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, lo = ["normal", "none", "initial", "inherit", "unset"], fo = pr, po = /^-ms-/, mo = /-(.)/g, Et = {};
  pr = function(r, t) {
    if (r === "content" && (typeof t != "string" || lo.indexOf(t) === -1 && !uo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = fo(r, t);
    return n !== "" && !rt(r) && r.indexOf("-") !== -1 && Et[r] === void 0 && (Et[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(po, "ms-").replace(mo, function(o, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var sn = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function mr(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0) {
    if (String(n) === "NO_COMPONENT_SELECTOR")
      throw new Error(sn);
    return n;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Se = {
          name: o.name,
          styles: o.styles,
          next: Se
        }, o.name;
      var s = t;
      if (s.styles !== void 0) {
        var c = s.next;
        if (c !== void 0)
          for (; c !== void 0; )
            Se = {
              name: c.name,
              styles: c.styles,
              next: Se
            }, c = c.next;
        var u = s.styles + ";";
        return u;
      }
      return ho(e, r, t);
    }
    case "function": {
      console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var f = [], l = t.replace(an, function(h, y, T) {
          var b = "animation" + f.length;
          return f.push("const " + b + " = keyframes`" + T.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        f.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(f, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + l + "`");
      }
      break;
  }
  var d = t;
  return d;
}
function ho(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += mr(e, r, t[o]) + ";";
  else
    for (var s in t) {
      var c = t[s];
      if (typeof c != "object") {
        var u = c;
        vt(u) && (n += Ir(s) + ":" + pr(s, u) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && so)
          throw new Error(sn);
        if (Array.isArray(c) && typeof c[0] == "string" && r == null)
          for (var f = 0; f < c.length; f++)
            vt(c[f]) && (n += Ir(s) + ":" + pr(s, c[f]) + ";");
        else {
          var l = mr(e, r, c);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Ir(s) + ":" + l + ";";
              break;
            }
            default:
              s === "undefined" && console.error(io), n += s + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var _t = /label:\s*([^\s;{]+)\s*(;|$)/g, Se;
function yo(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Se = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, o += mr(t, r, s);
  else {
    var c = s;
    c[0] === void 0 && console.error(bt), o += c[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += mr(t, r, e[u]), n) {
      var f = s;
      f[u] === void 0 && console.error(bt), o += f[u];
    }
  _t.lastIndex = 0;
  for (var l = "", d; (d = _t.exec(o)) !== null; )
    l += "-" + d[1];
  var h = no(o) + l;
  {
    var y = {
      name: h,
      styles: o,
      next: Se,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return y;
  }
}
var Br = { exports: {} }, ar = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function go() {
  if (xt) return F;
  xt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, i = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function k(E) {
    if (typeof E == "object" && E !== null) {
      var I = E.$$typeof;
      switch (I) {
        case r:
          switch (E = E.type, E) {
            case f:
            case l:
            case n:
            case s:
            case o:
            case h:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case u:
                case d:
                case b:
                case T:
                case c:
                  return E;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function j(E) {
    return k(E) === l;
  }
  return F.AsyncMode = f, F.ConcurrentMode = l, F.ContextConsumer = u, F.ContextProvider = c, F.Element = r, F.ForwardRef = d, F.Fragment = n, F.Lazy = b, F.Memo = T, F.Portal = t, F.Profiler = s, F.StrictMode = o, F.Suspense = h, F.isAsyncMode = function(E) {
    return j(E) || k(E) === f;
  }, F.isConcurrentMode = j, F.isContextConsumer = function(E) {
    return k(E) === u;
  }, F.isContextProvider = function(E) {
    return k(E) === c;
  }, F.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }, F.isForwardRef = function(E) {
    return k(E) === d;
  }, F.isFragment = function(E) {
    return k(E) === n;
  }, F.isLazy = function(E) {
    return k(E) === b;
  }, F.isMemo = function(E) {
    return k(E) === T;
  }, F.isPortal = function(E) {
    return k(E) === t;
  }, F.isProfiler = function(E) {
    return k(E) === s;
  }, F.isStrictMode = function(E) {
    return k(E) === o;
  }, F.isSuspense = function(E) {
    return k(E) === h;
  }, F.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === l || E === s || E === o || E === h || E === y || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === T || E.$$typeof === c || E.$$typeof === u || E.$$typeof === d || E.$$typeof === O || E.$$typeof === P || E.$$typeof === N || E.$$typeof === i);
  }, F.typeOf = k, F;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function bo() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, i = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function k(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === l || S === s || S === o || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === T || S.$$typeof === c || S.$$typeof === u || S.$$typeof === d || S.$$typeof === O || S.$$typeof === P || S.$$typeof === N || S.$$typeof === i);
    }
    function j(S) {
      if (typeof S == "object" && S !== null) {
        var ve = S.$$typeof;
        switch (ve) {
          case r:
            var tr = S.type;
            switch (tr) {
              case f:
              case l:
              case n:
              case s:
              case o:
              case h:
                return tr;
              default:
                var pt = tr && tr.$$typeof;
                switch (pt) {
                  case u:
                  case d:
                  case b:
                  case T:
                  case c:
                    return pt;
                  default:
                    return ve;
                }
            }
          case t:
            return ve;
        }
      }
    }
    var E = f, I = l, $ = u, re = c, V = r, de = d, ie = n, M = b, W = T, G = t, te = s, J = o, ne = h, pe = !1;
    function be(S) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(S) || j(S) === f;
    }
    function v(S) {
      return j(S) === l;
    }
    function a(S) {
      return j(S) === u;
    }
    function m(S) {
      return j(S) === c;
    }
    function x(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function p(S) {
      return j(S) === d;
    }
    function _(S) {
      return j(S) === n;
    }
    function R(S) {
      return j(S) === b;
    }
    function g(S) {
      return j(S) === T;
    }
    function w(S) {
      return j(S) === t;
    }
    function C(S) {
      return j(S) === s;
    }
    function A(S) {
      return j(S) === o;
    }
    function D(S) {
      return j(S) === h;
    }
    U.AsyncMode = E, U.ConcurrentMode = I, U.ContextConsumer = $, U.ContextProvider = re, U.Element = V, U.ForwardRef = de, U.Fragment = ie, U.Lazy = M, U.Memo = W, U.Portal = G, U.Profiler = te, U.StrictMode = J, U.Suspense = ne, U.isAsyncMode = be, U.isConcurrentMode = v, U.isContextConsumer = a, U.isContextProvider = m, U.isElement = x, U.isForwardRef = p, U.isFragment = _, U.isLazy = R, U.isMemo = g, U.isPortal = w, U.isProfiler = C, U.isStrictMode = A, U.isSuspense = D, U.isValidElementType = k, U.typeOf = j;
  }()), U;
}
var Ot;
function cn() {
  return Ot || (Ot = 1, process.env.NODE_ENV === "production" ? ar.exports = go() : ar.exports = bo()), ar.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jr, St;
function vo() {
  if (St) return jr;
  St = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var c = {}, u = 0; u < 10; u++)
        c["_" + String.fromCharCode(u)] = u;
      var f = Object.getOwnPropertyNames(c).map(function(d) {
        return c[d];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jr = o() ? Object.assign : function(s, c) {
    for (var u, f = n(s), l, d = 1; d < arguments.length; d++) {
      u = Object(arguments[d]);
      for (var h in u)
        r.call(u, h) && (f[h] = u[h]);
      if (e) {
        l = e(u);
        for (var y = 0; y < l.length; y++)
          t.call(u, l[y]) && (f[l[y]] = u[l[y]]);
      }
    }
    return f;
  }, jr;
}
var Mr, wt;
function tt() {
  if (wt) return Mr;
  wt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mr = e, Mr;
}
var Dr, Rt;
function un() {
  return Rt || (Rt = 1, Dr = Function.call.bind(Object.prototype.hasOwnProperty)), Dr;
}
var Lr, Pt;
function Eo() {
  if (Pt) return Lr;
  Pt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = tt(), t = {}, n = un();
    e = function(s) {
      var c = "Warning: " + s;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(s, c, u, f, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var h;
          try {
            if (typeof s[d] != "function") {
              var y = Error(
                (f || "React class") + ": " + u + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = s[d](c, d, f, u, null, r);
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + u + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var T = l ? l() : "";
            e(
              "Failed " + u + " type: " + h.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Lr = o, Lr;
}
var Yr, Ct;
function _o() {
  if (Ct) return Yr;
  Ct = 1;
  var e = cn(), r = vo(), t = tt(), n = un(), o = Eo(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(u) {
    var f = "Warning: " + u;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Yr = function(u, f) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(v) {
      var a = v && (l && v[l] || v[d]);
      if (typeof a == "function")
        return a;
    }
    var y = "<<anonymous>>", T = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: N(),
      arrayOf: k,
      element: j(),
      elementType: E(),
      instanceOf: I,
      node: de(),
      objectOf: re,
      oneOf: $,
      oneOfType: V,
      shape: M,
      exact: W
    };
    function b(v, a) {
      return v === a ? v !== 0 || 1 / v === 1 / a : v !== v && a !== a;
    }
    function i(v, a) {
      this.message = v, this.data = a && typeof a == "object" ? a : {}, this.stack = "";
    }
    i.prototype = Error.prototype;
    function O(v) {
      if (process.env.NODE_ENV !== "production")
        var a = {}, m = 0;
      function x(_, R, g, w, C, A, D) {
        if (w = w || y, A = A || g, D !== t) {
          if (f) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = w + ":" + g;
            !a[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), a[ve] = !0, m++);
          }
        }
        return R[g] == null ? _ ? R[g] === null ? new i("The " + C + " `" + A + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new i("The " + C + " `" + A + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : v(R, g, w, C, A);
      }
      var p = x.bind(null, !1);
      return p.isRequired = x.bind(null, !0), p;
    }
    function P(v) {
      function a(m, x, p, _, R, g) {
        var w = m[x], C = J(w);
        if (C !== v) {
          var A = ne(w);
          return new i(
            "Invalid " + _ + " `" + R + "` of type " + ("`" + A + "` supplied to `" + p + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return O(a);
    }
    function N() {
      return O(c);
    }
    function k(v) {
      function a(m, x, p, _, R) {
        if (typeof v != "function")
          return new i("Property `" + R + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var g = m[x];
        if (!Array.isArray(g)) {
          var w = J(g);
          return new i("Invalid " + _ + " `" + R + "` of type " + ("`" + w + "` supplied to `" + p + "`, expected an array."));
        }
        for (var C = 0; C < g.length; C++) {
          var A = v(g, C, p, _, R + "[" + C + "]", t);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return O(a);
    }
    function j() {
      function v(a, m, x, p, _) {
        var R = a[m];
        if (!u(R)) {
          var g = J(R);
          return new i("Invalid " + p + " `" + _ + "` of type " + ("`" + g + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(v);
    }
    function E() {
      function v(a, m, x, p, _) {
        var R = a[m];
        if (!e.isValidElementType(R)) {
          var g = J(R);
          return new i("Invalid " + p + " `" + _ + "` of type " + ("`" + g + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(v);
    }
    function I(v) {
      function a(m, x, p, _, R) {
        if (!(m[x] instanceof v)) {
          var g = v.name || y, w = be(m[x]);
          return new i("Invalid " + _ + " `" + R + "` of type " + ("`" + w + "` supplied to `" + p + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return O(a);
    }
    function $(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), c;
      function a(m, x, p, _, R) {
        for (var g = m[x], w = 0; w < v.length; w++)
          if (b(g, v[w]))
            return null;
        var C = JSON.stringify(v, function(D, S) {
          var ve = ne(S);
          return ve === "symbol" ? String(S) : S;
        });
        return new i("Invalid " + _ + " `" + R + "` of value `" + String(g) + "` " + ("supplied to `" + p + "`, expected one of " + C + "."));
      }
      return O(a);
    }
    function re(v) {
      function a(m, x, p, _, R) {
        if (typeof v != "function")
          return new i("Property `" + R + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var g = m[x], w = J(g);
        if (w !== "object")
          return new i("Invalid " + _ + " `" + R + "` of type " + ("`" + w + "` supplied to `" + p + "`, expected an object."));
        for (var C in g)
          if (n(g, C)) {
            var A = v(g, C, p, _, R + "." + C, t);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return O(a);
    }
    function V(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var a = 0; a < v.length; a++) {
        var m = v[a];
        if (typeof m != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(m) + " at index " + a + "."
          ), c;
      }
      function x(p, _, R, g, w) {
        for (var C = [], A = 0; A < v.length; A++) {
          var D = v[A], S = D(p, _, R, g, w, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && C.push(S.data.expectedType);
        }
        var ve = C.length > 0 ? ", expected one of type [" + C.join(", ") + "]" : "";
        return new i("Invalid " + g + " `" + w + "` supplied to " + ("`" + R + "`" + ve + "."));
      }
      return O(x);
    }
    function de() {
      function v(a, m, x, p, _) {
        return G(a[m]) ? null : new i("Invalid " + p + " `" + _ + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return O(v);
    }
    function ie(v, a, m, x, p) {
      return new i(
        (v || "React class") + ": " + a + " type `" + m + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function M(v) {
      function a(m, x, p, _, R) {
        var g = m[x], w = J(g);
        if (w !== "object")
          return new i("Invalid " + _ + " `" + R + "` of type `" + w + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var C in v) {
          var A = v[C];
          if (typeof A != "function")
            return ie(p, _, R, C, ne(A));
          var D = A(g, C, p, _, R + "." + C, t);
          if (D)
            return D;
        }
        return null;
      }
      return O(a);
    }
    function W(v) {
      function a(m, x, p, _, R) {
        var g = m[x], w = J(g);
        if (w !== "object")
          return new i("Invalid " + _ + " `" + R + "` of type `" + w + "` " + ("supplied to `" + p + "`, expected `object`."));
        var C = r({}, m[x], v);
        for (var A in C) {
          var D = v[A];
          if (n(v, A) && typeof D != "function")
            return ie(p, _, R, A, ne(D));
          if (!D)
            return new i(
              "Invalid " + _ + " `" + R + "` key `" + A + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(m[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var S = D(g, A, p, _, R + "." + A, t);
          if (S)
            return S;
        }
        return null;
      }
      return O(a);
    }
    function G(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(G);
          if (v === null || u(v))
            return !0;
          var a = h(v);
          if (a) {
            var m = a.call(v), x;
            if (a !== v.entries) {
              for (; !(x = m.next()).done; )
                if (!G(x.value))
                  return !1;
            } else
              for (; !(x = m.next()).done; ) {
                var p = x.value;
                if (p && !G(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(v, a) {
      return v === "symbol" ? !0 : a ? a["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && a instanceof Symbol : !1;
    }
    function J(v) {
      var a = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : te(a, v) ? "symbol" : a;
    }
    function ne(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var a = J(v);
      if (a === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return a;
    }
    function pe(v) {
      var a = ne(v);
      switch (a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    function be(v) {
      return !v.constructor || !v.constructor.name ? y : v.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, Yr;
}
var Wr, $t;
function xo() {
  if ($t) return Wr;
  $t = 1;
  var e = tt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Wr = function() {
    function n(c, u, f, l, d, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Wr;
}
if (process.env.NODE_ENV !== "production") {
  var To = cn(), Oo = !0;
  Br.exports = _o()(To.isElement, Oo);
} else
  Br.exports = xo()();
var So = Br.exports;
const ce = /* @__PURE__ */ Zn(So);
function wo(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Ro(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Po = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, s), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !1 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ro(this));
    var o = this.tags[this.tags.length - 1];
    {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var c = wo(o);
      try {
        c.insertRule(n, c.cssRules.length);
      } catch (u) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) || console.error('There was a problem inserting the following rule: "' + n + '"', u);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, e;
}(), se = "-ms-", hr = "-moz-", L = "-webkit-", nt = "comm", ot = "rule", at = "decl", Co = "@import", ln = "@keyframes", $o = "@layer", ko = Math.abs, vr = String.fromCharCode, Ao = Object.assign;
function No(e, r) {
  return oe(e, 0) ^ 45 ? (((r << 2 ^ oe(e, 0)) << 2 ^ oe(e, 1)) << 2 ^ oe(e, 2)) << 2 ^ oe(e, 3) : 0;
}
function fn(e) {
  return e.trim();
}
function Io(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Y(e, r, t) {
  return e.replace(r, t);
}
function Gr(e, r) {
  return e.indexOf(r);
}
function oe(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ke(e, r, t) {
  return e.slice(r, t);
}
function Ee(e) {
  return e.length;
}
function st(e) {
  return e.length;
}
function sr(e, r) {
  return r.push(e), e;
}
function jo(e, r) {
  return e.map(r).join("");
}
var Er = 1, De = 1, dn = 0, ue = 0, ee = 0, Le = "";
function _r(e, r, t, n, o, s, c) {
  return { value: e, root: r, parent: t, type: n, props: o, children: s, line: Er, column: De, length: c, return: "" };
}
function Ue(e, r) {
  return Ao(_r("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Mo() {
  return ee;
}
function Do() {
  return ee = ue > 0 ? oe(Le, --ue) : 0, De--, ee === 10 && (De = 1, Er--), ee;
}
function fe() {
  return ee = ue < dn ? oe(Le, ue++) : 0, De++, ee === 10 && (De = 1, Er++), ee;
}
function _e() {
  return oe(Le, ue);
}
function cr() {
  return ue;
}
function Je(e, r) {
  return Ke(Le, e, r);
}
function He(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function pn(e) {
  return Er = De = 1, dn = Ee(Le = e), ue = 0, [];
}
function mn(e) {
  return Le = "", e;
}
function ur(e) {
  return fn(Je(ue - 1, Kr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lo(e) {
  for (; (ee = _e()) && ee < 33; )
    fe();
  return He(e) > 2 || He(ee) > 3 ? "" : " ";
}
function Yo(e, r) {
  for (; --r && fe() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Je(e, cr() + (r < 6 && _e() == 32 && fe() == 32));
}
function Kr(e) {
  for (; fe(); )
    switch (ee) {
      case e:
        return ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kr(ee);
        break;
      case 40:
        e === 41 && Kr(e);
        break;
      case 92:
        fe();
        break;
    }
  return ue;
}
function Wo(e, r) {
  for (; fe() && e + ee !== 57; )
    if (e + ee === 84 && _e() === 47)
      break;
  return "/*" + Je(r, ue - 1) + "*" + vr(e === 47 ? e : fe());
}
function Fo(e) {
  for (; !He(_e()); )
    fe();
  return Je(e, ue);
}
function Uo(e) {
  return mn(lr("", null, null, null, [""], e = pn(e), 0, [0], e));
}
function lr(e, r, t, n, o, s, c, u, f) {
  for (var l = 0, d = 0, h = c, y = 0, T = 0, b = 0, i = 1, O = 1, P = 1, N = 0, k = "", j = o, E = s, I = n, $ = k; O; )
    switch (b = N, N = fe()) {
      case 40:
        if (b != 108 && oe($, h - 1) == 58) {
          Gr($ += Y(ur(N), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += ur(N);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Lo(b);
        break;
      case 92:
        $ += Yo(cr() - 1, 7);
        continue;
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            sr(Vo(Wo(fe(), cr()), r, t), f);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * i:
        u[l++] = Ee($) * P;
      case 125 * i:
      case 59:
      case 0:
        switch (N) {
          case 0:
          case 125:
            O = 0;
          case 59 + d:
            P == -1 && ($ = Y($, /\f/g, "")), T > 0 && Ee($) - h && sr(T > 32 ? At($ + ";", n, t, h - 1) : At(Y($, " ", "") + ";", n, t, h - 2), f);
            break;
          case 59:
            $ += ";";
          default:
            if (sr(I = kt($, r, t, l, d, o, u, k, j = [], E = [], h), s), N === 123)
              if (d === 0)
                lr($, r, I, I, j, s, h, u, E);
              else
                switch (y === 99 && oe($, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lr(e, I, I, n && sr(kt(e, I, I, 0, 0, o, u, k, o, j = [], h), E), o, E, h, u, n ? j : E);
                    break;
                  default:
                    lr($, I, I, I, [""], E, 0, u, E);
                }
        }
        l = d = T = 0, i = P = 1, k = $ = "", h = c;
        break;
      case 58:
        h = 1 + Ee($), T = b;
      default:
        if (i < 1) {
          if (N == 123)
            --i;
          else if (N == 125 && i++ == 0 && Do() == 125)
            continue;
        }
        switch ($ += vr(N), N * i) {
          case 38:
            P = d > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            u[l++] = (Ee($) - 1) * P, P = 1;
            break;
          case 64:
            _e() === 45 && ($ += ur(fe())), y = _e(), d = h = Ee(k = $ += Fo(cr())), N++;
            break;
          case 45:
            b === 45 && Ee($) == 2 && (i = 0);
        }
    }
  return s;
}
function kt(e, r, t, n, o, s, c, u, f, l, d) {
  for (var h = o - 1, y = o === 0 ? s : [""], T = st(y), b = 0, i = 0, O = 0; b < n; ++b)
    for (var P = 0, N = Ke(e, h + 1, h = ko(i = c[b])), k = e; P < T; ++P)
      (k = fn(i > 0 ? y[P] + " " + N : Y(N, /&\f/g, y[P]))) && (f[O++] = k);
  return _r(e, r, t, o === 0 ? ot : u, f, l, d);
}
function Vo(e, r, t) {
  return _r(e, r, t, nt, vr(Mo()), Ke(e, 2, -2), 0);
}
function At(e, r, t, n) {
  return _r(e, r, t, at, Ke(e, 0, n), Ke(e, n + 1, -1), n);
}
function je(e, r) {
  for (var t = "", n = st(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function zo(e, r, t, n) {
  switch (e.type) {
    case $o:
      if (e.children.length) break;
    case Co:
    case at:
      return e.return = e.return || e.value;
    case nt:
      return "";
    case ln:
      return e.return = e.value + "{" + je(e.children, n) + "}";
    case ot:
      e.value = e.props.join(",");
  }
  return Ee(t = je(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function qo(e) {
  var r = st(e);
  return function(t, n, o, s) {
    for (var c = "", u = 0; u < r; u++)
      c += e[u](t, n, o, s) || "";
    return c;
  };
}
var Bo = function(r, t, n) {
  for (var o = 0, s = 0; o = s, s = _e(), o === 38 && s === 12 && (t[n] = 1), !He(s); )
    fe();
  return Je(r, ue);
}, Go = function(r, t) {
  var n = -1, o = 44;
  do
    switch (He(o)) {
      case 0:
        o === 38 && _e() === 12 && (t[n] = 1), r[n] += Bo(ue - 1, t, n);
        break;
      case 2:
        r[n] += ur(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = _e() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += vr(o);
    }
  while (o = fe());
  return r;
}, Ko = function(r, t) {
  return mn(Go(pn(r), t));
}, Nt = /* @__PURE__ */ new WeakMap(), Ho = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Nt.get(n)) && !o) {
      Nt.set(r, !0);
      for (var s = [], c = Ko(t, s), u = n.props, f = 0, l = 0; f < c.length; f++)
        for (var d = 0; d < u.length; d++, l++)
          r.props[l] = s[f] ? c[f].replace(/&\f/g, u[d]) : u[d] + " " + c[f];
    }
  }
}, Xo = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Jo = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Zo = function(r) {
  return r.type === "comm" && r.children.indexOf(Jo) > -1;
}, Qo = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var s = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var c = !!t.parent, u = c ? t.parent.children : (
          // global rule at the root level
          o
        ), f = u.length - 1; f >= 0; f--) {
          var l = u[f];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (Zo(l))
              return;
            break;
          }
        }
        s.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, hn = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, ea = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!hn(t[n]))
      return !0;
  return !1;
}, It = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, ra = function(r, t, n) {
  hn(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), It(r)) : ea(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), It(r)));
};
function yn(e, r) {
  switch (No(e, r)) {
    case 5103:
      return L + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return L + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return L + e + hr + e + se + e + e;
    case 6828:
    case 4268:
      return L + e + se + e + e;
    case 6165:
      return L + e + se + "flex-" + e + e;
    case 5187:
      return L + e + Y(e, /(\w+).+(:[^]+)/, L + "box-$1$2" + se + "flex-$1$2") + e;
    case 5443:
      return L + e + se + "flex-item-" + Y(e, /flex-|-self/, "") + e;
    case 4675:
      return L + e + se + "flex-line-pack" + Y(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return L + e + se + Y(e, "shrink", "negative") + e;
    case 5292:
      return L + e + se + Y(e, "basis", "preferred-size") + e;
    case 6060:
      return L + "box-" + Y(e, "-grow", "") + L + e + se + Y(e, "grow", "positive") + e;
    case 4554:
      return L + Y(e, /([^-])(transform)/g, "$1" + L + "$2") + e;
    case 6187:
      return Y(Y(Y(e, /(zoom-|grab)/, L + "$1"), /(image-set)/, L + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, L + "$1$`$1");
    case 4968:
      return Y(Y(e, /(.+:)(flex-)?(.*)/, L + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + L + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, L + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ee(e) - 1 - r > 6) switch (oe(e, r + 1)) {
        case 109:
          if (oe(e, r + 4) !== 45) break;
        case 102:
          return Y(e, /(.+:)(.+)-([^]+)/, "$1" + L + "$2-$3$1" + hr + (oe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Gr(e, "stretch") ? yn(Y(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (oe(e, r + 1) !== 115) break;
    case 6444:
      switch (oe(e, Ee(e) - 3 - (~Gr(e, "!important") && 10))) {
        case 107:
          return Y(e, ":", ":" + L) + e;
        case 101:
          return Y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + L + (oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + L + "$2$3$1" + se + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (oe(e, r + 11)) {
        case 114:
          return L + e + se + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return L + e + se + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return L + e + se + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return L + e + se + e + e;
  }
  return e;
}
var ta = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case at:
      r.return = yn(r.value, r.length);
      break;
    case ln:
      return je([Ue(r, {
        value: Y(r.value, "@", "@" + L)
      })], o);
    case ot:
      if (r.length) return jo(r.props, function(s) {
        switch (Io(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return je([Ue(r, {
              props: [Y(s, /:(read-\w+)/, ":" + hr + "$1")]
            })], o);
          case "::placeholder":
            return je([Ue(r, {
              props: [Y(s, /:(plac\w+)/, ":" + L + "input-$1")]
            }), Ue(r, {
              props: [Y(s, /:(plac\w+)/, ":" + hr + "$1")]
            }), Ue(r, {
              props: [Y(s, /:(plac\w+)/, se + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, na = [ta], Hr;
{
  var oa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  Hr = function(r) {
    var t = r.match(oa);
    if (t)
      return t[t.length - 1];
  };
}
var aa = function(r) {
  var t = r.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(i) {
      var O = i.getAttribute("data-emotion");
      O.indexOf(" ") !== -1 && (document.head.appendChild(i), i.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || na;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var s = {}, c, u = [];
  c = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(i) {
      for (var O = i.getAttribute("data-emotion").split(" "), P = 1; P < O.length; P++)
        s[O[P]] = !0;
      u.push(i);
    }
  );
  var f, l = [Ho, Xo];
  l.push(Qo({
    get compat() {
      return b.compat;
    }
  }), ra);
  {
    var d, h = [zo, function(i) {
      i.root || (i.return ? d.insert(i.return) : i.value && i.type !== nt && d.insert(i.value + "{}"));
    }], y = qo(l.concat(o, h)), T = function(O) {
      return je(Uo(O), y);
    };
    f = function(O, P, N, k) {
      if (d = N, Hr) {
        var j = Hr(P.styles);
        j && (d = {
          insert: function(I) {
            N.insert(I + j);
          }
        });
      }
      T(O ? O + "{" + P.styles + "}" : P.styles), k && (b.inserted[P.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Po({
      key: t,
      container: c,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: s,
    registered: {},
    insert: f
  };
  return b.sheet.hydrate(u), b;
}, Xr = { exports: {} }, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function sa() {
  if (jt) return Ve;
  jt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, o, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), o.key !== void 0 && (c = "" + o.key), "key" in o) {
      s = {};
      for (var u in o)
        u !== "key" && (s[u] = o[u]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: c,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Ve.Fragment = r, Ve.jsx = t, Ve.jsxs = t, Ve;
}
var ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function ia() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ie ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case O:
          return "Fragment";
        case N:
          return "Profiler";
        case P:
          return "StrictMode";
        case I:
          return "Suspense";
        case $:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case i:
            return "Portal";
          case j:
            return a.displayName || "Context";
          case k:
            return (a._context.displayName || "Context") + ".Consumer";
          case E:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case re:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case V:
            m = a._payload, a = a._init;
            try {
              return e(a(m));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function t(a) {
      try {
        r(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var x = m.error, p = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return x.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), r(a);
      }
    }
    function n(a) {
      if (a === O) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === V)
        return "<...>";
      try {
        var m = e(a);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = M.A;
      return a === null ? null : a.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(a) {
      if (W.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, m) {
      function x() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: x,
        configurable: !0
      });
    }
    function f() {
      var a = e(this.type);
      return ne[a] || (ne[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function l(a, m, x, p, _, R) {
      var g = x.ref;
      return a = {
        $$typeof: b,
        type: a,
        key: m,
        props: x,
        _owner: p
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function d(a, m, x, p, _, R) {
      var g = m.children;
      if (g !== void 0)
        if (p)
          if (G(g)) {
            for (p = 0; p < g.length; p++)
              h(g[p]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(g);
      if (W.call(m, "key")) {
        g = e(a);
        var w = Object.keys(m).filter(function(A) {
          return A !== "key";
        });
        p = 0 < w.length ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}", v[g + p] || (w = 0 < w.length ? "{" + w.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          g,
          w,
          g
        ), v[g + p] = !0);
      }
      if (g = null, x !== void 0 && (t(x), g = "" + x), c(m) && (t(m.key), g = "" + m.key), "key" in m) {
        x = {};
        for (var C in m)
          C !== "key" && (x[C] = m[C]);
      } else x = m;
      return g && u(
        x,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), l(
        a,
        g,
        x,
        o(),
        _,
        R
      );
    }
    function h(a) {
      y(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === V && (a._payload.status === "fulfilled" ? y(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function y(a) {
      return typeof a == "object" && a !== null && a.$$typeof === b;
    }
    var T = on, b = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), j = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), M = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, G = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var J, ne = {}, pe = T.react_stack_bottom_frame.bind(
      T,
      s
    )(), be = te(n(s)), v = {};
    ze.Fragment = O, ze.jsx = function(a, m, x) {
      var p = 1e4 > M.recentlyCreatedOwnerStacks++;
      return d(
        a,
        m,
        x,
        !1,
        p ? Error("react-stack-top-frame") : pe,
        p ? te(n(a)) : be
      );
    }, ze.jsxs = function(a, m, x) {
      var p = 1e4 > M.recentlyCreatedOwnerStacks++;
      return d(
        a,
        m,
        x,
        !0,
        p ? Error("react-stack-top-frame") : pe,
        p ? te(n(a)) : be
      );
    };
  }()), ze;
}
process.env.NODE_ENV === "production" ? Xr.exports = sa() : Xr.exports = ia();
var gn = Xr.exports;
function ca(e, r) {
  const t = aa({
    key: "css",
    prepend: e
  });
  if (r) {
    const n = t.insert;
    t.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), n(...o));
  }
  return t;
}
const Fr = /* @__PURE__ */ new Map();
function bn(e) {
  const {
    injectFirst: r,
    enableCssLayer: t,
    children: n
  } = e, o = Qr.useMemo(() => {
    const s = `${r}-${t}`;
    if (typeof document == "object" && Fr.has(s))
      return Fr.get(s);
    const c = ca(r, t);
    return Fr.set(s, c), c;
  }, [r, t]);
  return r || t ? /* @__PURE__ */ gn.jsx(Gn, {
    value: o,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  /**
   * Your component tree.
   */
  children: ce.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: ce.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: ce.bool
});
function ua(e) {
  return e == null || Object.keys(e).length === 0;
}
function vn(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e, n = typeof r == "function" ? (o) => r(ua(o) ? t : o) : r;
  return /* @__PURE__ */ gn.jsx(Kn, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (vn.propTypes = {
  defaultTheme: ce.object,
  styles: ce.oneOfType([ce.array, ce.string, ce.object, ce.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function la(e, r) {
  const t = Bn(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const fa = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Dt = [];
function da(e) {
  return Dt[0] = e, yo(Dt);
}
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: vn,
  StyledEngineProvider: bn,
  ThemeContext: Hn,
  css: Xn,
  default: la,
  internal_processStyles: fa,
  internal_serializeStyles: da,
  keyframes: Jn
}, Symbol.toStringTag, { value: "Module" }));
function Oe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function En(e) {
  if (/* @__PURE__ */ Qr.isValidElement(e) || !Oe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = En(e[t]);
  }), r;
}
function xe(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? X({}, e) : e;
  return Oe(e) && Oe(r) && Object.keys(r).forEach((o) => {
    /* @__PURE__ */ Qr.isValidElement(r[o]) ? n[o] = r[o] : Oe(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Oe(e[o]) ? n[o] = xe(e[o], r[o], t) : t.clone ? n[o] = Oe(r[o]) ? En(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe,
  isPlainObject: Oe
}, Symbol.toStringTag, { value: "Module" })), ha = ["values", "unit", "step"], ya = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => X({}, t, {
    [n.key]: n.val
  }), {});
};
function _n(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Ce(e, ha), s = ya(r), c = Object.keys(s);
  function u(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function f(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function l(y, T) {
    const b = c.indexOf(T);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(b !== -1 && typeof r[c[b]] == "number" ? r[c[b]] : T) - n / 100}${t})`;
  }
  function d(y) {
    return c.indexOf(y) + 1 < c.length ? l(y, c[c.indexOf(y) + 1]) : u(y);
  }
  function h(y) {
    const T = c.indexOf(y);
    return T === 0 ? u(c[1]) : T === c.length - 1 ? f(c[T]) : l(y, c[c.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return X({
    keys: c,
    values: s,
    up: u,
    down: f,
    between: l,
    only: d,
    not: h,
    unit: t
  }, o);
}
const ga = {
  borderRadius: 4
}, Re = process.env.NODE_ENV !== "production" ? ce.oneOfType([ce.number, ce.string, ce.object, ce.array]) : {};
function Be(e, r) {
  return r ? xe(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const it = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Lt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${it[e]}px)`
};
function Te(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const s = n.breakpoints || Lt;
    return r.reduce((c, u, f) => (c[s.up(s.keys[f])] = t(r[f]), c), {});
  }
  if (typeof r == "object") {
    const s = n.breakpoints || Lt;
    return Object.keys(r).reduce((c, u) => {
      if (Object.keys(s.values || it).indexOf(u) !== -1) {
        const f = s.up(u);
        c[f] = t(r[u], u);
      } else {
        const f = u;
        c[f] = r[f];
      }
      return c;
    }, {});
  }
  return t(r);
}
function ba(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function Yt(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ct(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ge(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ct
}, Symbol.toStringTag, { value: "Module" }));
function xr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function yr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = xr(e, t) || n, r && (o = r(o, n, e)), o;
}
function Z(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (c) => {
    if (c[r] == null)
      return null;
    const u = c[r], f = c.theme, l = xr(f, n) || {};
    return Te(c, u, (h) => {
      let y = yr(l, o, h);
      return h === y && typeof h == "string" && (y = yr(l, o, `${r}${h === "default" ? "" : ct(h)}`, h)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Re
  } : {}, s.filterProps = [r], s;
}
function Ea(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const _a = {
  m: "margin",
  p: "padding"
}, xa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ta = Ea((e) => {
  if (e.length > 2)
    if (Wt[e])
      e = Wt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = _a[r], o = xa[t] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Tr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Or = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Oa = [...Tr, ...Or];
function Ze(e, r, t, n) {
  var o;
  const s = (o = xr(e, r, !1)) != null ? o : t;
  return typeof s == "number" ? (c) => typeof c == "string" ? c : (process.env.NODE_ENV !== "production" && typeof c != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${c}.`), s * c) : Array.isArray(s) ? (c) => typeof c == "string" ? c : (process.env.NODE_ENV !== "production" && (Number.isInteger(c) ? c > s.length - 1 && console.error([`MUI: The value provided (${c}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${c} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), s[c]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xn(e) {
  return Ze(e, "spacing", 8, "spacing");
}
function Qe(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Sa(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Qe(r, t), n), {});
}
function wa(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Ta(t), s = Sa(o, n), c = e[t];
  return Te(e, c, s);
}
function Tn(e, r) {
  const t = xn(e.theme);
  return Object.keys(e).map((n) => wa(e, r, n, t)).reduce(Be, {});
}
function K(e) {
  return Tn(e, Tr);
}
K.propTypes = process.env.NODE_ENV !== "production" ? Tr.reduce((e, r) => (e[r] = Re, e), {}) : {};
K.filterProps = Tr;
function H(e) {
  return Tn(e, Or);
}
H.propTypes = process.env.NODE_ENV !== "production" ? Or.reduce((e, r) => (e[r] = Re, e), {}) : {};
H.filterProps = Or;
process.env.NODE_ENV !== "production" && Oa.reduce((e, r) => (e[r] = Re, e), {});
function Ra(e = 8) {
  if (e.mui)
    return e;
  const r = xn({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const c = r(s);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" "));
  return t.mui = !0, t;
}
function Sr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, s) => r[s] ? Be(o, r[s](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ge(e, r) {
  return Z({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Pa = ge("border", he), Ca = ge("borderTop", he), $a = ge("borderRight", he), ka = ge("borderBottom", he), Aa = ge("borderLeft", he), Na = ge("borderColor"), Ia = ge("borderTopColor"), ja = ge("borderRightColor"), Ma = ge("borderBottomColor"), Da = ge("borderLeftColor"), La = ge("outline", he), Ya = ge("outlineColor"), wr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Ze(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Qe(r, n)
    });
    return Te(e, e.borderRadius, t);
  }
  return null;
};
wr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Re
} : {};
wr.filterProps = ["borderRadius"];
Sr(Pa, Ca, $a, ka, Aa, Na, Ia, ja, Ma, Da, wr, La, Ya);
const Rr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Ze(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Qe(r, n)
    });
    return Te(e, e.gap, t);
  }
  return null;
};
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Re
} : {};
Rr.filterProps = ["gap"];
const Pr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Ze(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Qe(r, n)
    });
    return Te(e, e.columnGap, t);
  }
  return null;
};
Pr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Re
} : {};
Pr.filterProps = ["columnGap"];
const Cr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Ze(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Qe(r, n)
    });
    return Te(e, e.rowGap, t);
  }
  return null;
};
Cr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Re
} : {};
Cr.filterProps = ["rowGap"];
const Wa = Z({
  prop: "gridColumn"
}), Fa = Z({
  prop: "gridRow"
}), Ua = Z({
  prop: "gridAutoFlow"
}), Va = Z({
  prop: "gridAutoColumns"
}), za = Z({
  prop: "gridAutoRows"
}), qa = Z({
  prop: "gridTemplateColumns"
}), Ba = Z({
  prop: "gridTemplateRows"
}), Ga = Z({
  prop: "gridTemplateAreas"
}), Ka = Z({
  prop: "gridArea"
});
Sr(Rr, Pr, Cr, Wa, Fa, Ua, Va, za, qa, Ba, Ga, Ka);
function Me(e, r) {
  return r === "grey" ? r : e;
}
const Ha = Z({
  prop: "color",
  themeKey: "palette",
  transform: Me
}), Xa = Z({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Me
}), Ja = Z({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Me
});
Sr(Ha, Xa, Ja);
function le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Za = Z({
  prop: "width",
  transform: le
}), ut = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || it[t];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: le(t)
      };
    };
    return Te(e, e.maxWidth, r);
  }
  return null;
};
ut.filterProps = ["maxWidth"];
const Qa = Z({
  prop: "minWidth",
  transform: le
}), es = Z({
  prop: "height",
  transform: le
}), rs = Z({
  prop: "maxHeight",
  transform: le
}), ts = Z({
  prop: "minHeight",
  transform: le
});
Z({
  prop: "size",
  cssProperty: "width",
  transform: le
});
Z({
  prop: "size",
  cssProperty: "height",
  transform: le
});
const ns = Z({
  prop: "boxSizing"
});
Sr(Za, ut, Qa, es, rs, ts, ns);
const er = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Me
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Me
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Me
  },
  // spacing
  p: {
    style: H
  },
  pt: {
    style: H
  },
  pr: {
    style: H
  },
  pb: {
    style: H
  },
  pl: {
    style: H
  },
  px: {
    style: H
  },
  py: {
    style: H
  },
  padding: {
    style: H
  },
  paddingTop: {
    style: H
  },
  paddingRight: {
    style: H
  },
  paddingBottom: {
    style: H
  },
  paddingLeft: {
    style: H
  },
  paddingX: {
    style: H
  },
  paddingY: {
    style: H
  },
  paddingInline: {
    style: H
  },
  paddingInlineStart: {
    style: H
  },
  paddingInlineEnd: {
    style: H
  },
  paddingBlock: {
    style: H
  },
  paddingBlockStart: {
    style: H
  },
  paddingBlockEnd: {
    style: H
  },
  m: {
    style: K
  },
  mt: {
    style: K
  },
  mr: {
    style: K
  },
  mb: {
    style: K
  },
  ml: {
    style: K
  },
  mx: {
    style: K
  },
  my: {
    style: K
  },
  margin: {
    style: K
  },
  marginTop: {
    style: K
  },
  marginRight: {
    style: K
  },
  marginBottom: {
    style: K
  },
  marginLeft: {
    style: K
  },
  marginX: {
    style: K
  },
  marginY: {
    style: K
  },
  marginInline: {
    style: K
  },
  marginInlineStart: {
    style: K
  },
  marginInlineEnd: {
    style: K
  },
  marginBlock: {
    style: K
  },
  marginBlockStart: {
    style: K
  },
  marginBlockEnd: {
    style: K
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Rr
  },
  rowGap: {
    style: Cr
  },
  columnGap: {
    style: Pr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: le
  },
  maxWidth: {
    style: ut
  },
  minWidth: {
    transform: le
  },
  height: {
    transform: le
  },
  maxHeight: {
    transform: le
  },
  minHeight: {
    transform: le
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function os(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function as(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function On() {
  function e(t, n, o, s) {
    const c = {
      [t]: n,
      theme: o
    }, u = s[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: f = t,
      themeKey: l,
      transform: d,
      style: h
    } = u;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = xr(o, l) || {};
    return h ? h(c) : Te(c, n, (b) => {
      let i = yr(y, d, b);
      return b === i && typeof b == "string" && (i = yr(y, d, `${t}${b === "default" ? "" : ct(b)}`, b)), f === !1 ? i : {
        [f]: i
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: s = {},
      nested: c
    } = t || {};
    if (!o)
      return null;
    const u = (n = s.unstable_sxConfig) != null ? n : er;
    function f(l) {
      let d = l;
      if (typeof l == "function")
        d = l(s);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const h = ba(s.breakpoints), y = Object.keys(h);
      let T = h;
      return Object.keys(d).forEach((b) => {
        const i = as(d[b], s);
        if (i != null)
          if (typeof i == "object")
            if (u[b])
              T = Be(T, e(b, i, s, u));
            else {
              const O = Te({
                theme: s
              }, i, (P) => ({
                [b]: P
              }));
              os(O, i) ? T[b] = r({
                sx: i,
                theme: s,
                nested: !0
              }) : T = Be(T, O);
            }
          else
            T = Be(T, e(b, i, s, u));
      }), !c && s.modularCssLayers ? {
        "@layer sx": Yt(y, T)
      } : Yt(y, T);
    }
    return Array.isArray(o) ? o.map(f) : f(o);
  }
  return r;
}
const $r = On();
$r.filterProps = ["sx"];
function Sn(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const ss = ["breakpoints", "palette", "spacing", "shape"];
function wn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, c = Ce(e, ss), u = _n(t), f = Ra(o);
  let l = xe({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: X({
      mode: "light"
    }, n),
    spacing: f,
    shape: X({}, ga, s)
  }, c);
  return l.applyStyles = Sn, l = r.reduce((d, h) => xe(d, h), l), l.unstable_sxConfig = X({}, er, c == null ? void 0 : c.unstable_sxConfig), l.unstable_sx = function(h) {
    return $r({
      sx: h,
      theme: this
    });
  }, l;
}
const is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn,
  private_createBreakpoints: _n,
  unstable_applyStyles: Sn
}, Symbol.toStringTag, { value: "Module" })), cs = ["sx"], us = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : er;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function ls(e) {
  const {
    sx: r
  } = e, t = Ce(e, cs), {
    systemProps: n,
    otherProps: o
  } = us(t);
  let s;
  return Array.isArray(r) ? s = [n, ...r] : typeof r == "function" ? s = (...c) => {
    const u = r(...c);
    return Oe(u) ? X({}, n, u) : n;
  } : s = X({}, n, r), X({}, o, {
    sx: s
  });
}
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r,
  extendSxProp: ls,
  unstable_createStyleFunctionSx: On,
  unstable_defaultSxConfig: er
}, Symbol.toStringTag, { value: "Module" })), Ft = (e) => e, ds = () => {
  let e = Ft;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Ft;
    }
  };
}, ps = ds(), ms = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function hs(e, r, t = "Mui") {
  const n = ms[r];
  return n ? `${t}-${n}` : `${ps.generate(e)}-${r}`;
}
var Jr = { exports: {} }, z = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function ys() {
  if (Ut) return z;
  Ut = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
  function b(i) {
    if (typeof i == "object" && i !== null) {
      var O = i.$$typeof;
      switch (O) {
        case e:
          switch (i = i.type, i) {
            case t:
            case o:
            case n:
            case f:
            case l:
            case y:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case u:
                case h:
                case d:
                  return i;
                case s:
                  return i;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return z.ContextConsumer = s, z.ContextProvider = c, z.Element = e, z.ForwardRef = u, z.Fragment = t, z.Lazy = h, z.Memo = d, z.Portal = r, z.Profiler = o, z.StrictMode = n, z.Suspense = f, z.SuspenseList = l, z.isContextConsumer = function(i) {
    return b(i) === s;
  }, z.isContextProvider = function(i) {
    return b(i) === c;
  }, z.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }, z.isForwardRef = function(i) {
    return b(i) === u;
  }, z.isFragment = function(i) {
    return b(i) === t;
  }, z.isLazy = function(i) {
    return b(i) === h;
  }, z.isMemo = function(i) {
    return b(i) === d;
  }, z.isPortal = function(i) {
    return b(i) === r;
  }, z.isProfiler = function(i) {
    return b(i) === o;
  }, z.isStrictMode = function(i) {
    return b(i) === n;
  }, z.isSuspense = function(i) {
    return b(i) === f;
  }, z.isSuspenseList = function(i) {
    return b(i) === l;
  }, z.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === t || i === o || i === n || i === f || i === l || typeof i == "object" && i !== null && (i.$$typeof === h || i.$$typeof === d || i.$$typeof === c || i.$$typeof === s || i.$$typeof === u || i.$$typeof === T || i.getModuleId !== void 0);
  }, z.typeOf = b, z;
}
var q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function gs() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (typeof i == "object" && i !== null) {
        var O = i.$$typeof;
        switch (O) {
          case r:
            switch (i = i.type, i) {
              case n:
              case s:
              case o:
              case l:
              case d:
              case T:
                return i;
              default:
                switch (i = i && i.$$typeof, i) {
                  case u:
                  case f:
                  case y:
                  case h:
                    return i;
                  case c:
                    return i;
                  default:
                    return O;
                }
            }
          case t:
            return O;
        }
      }
    }
    var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), T = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    q.ContextConsumer = c, q.ContextProvider = u, q.Element = r, q.ForwardRef = f, q.Fragment = n, q.Lazy = y, q.Memo = h, q.Portal = t, q.Profiler = s, q.StrictMode = o, q.Suspense = l, q.SuspenseList = d, q.isContextConsumer = function(i) {
      return e(i) === c;
    }, q.isContextProvider = function(i) {
      return e(i) === u;
    }, q.isElement = function(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }, q.isForwardRef = function(i) {
      return e(i) === f;
    }, q.isFragment = function(i) {
      return e(i) === n;
    }, q.isLazy = function(i) {
      return e(i) === y;
    }, q.isMemo = function(i) {
      return e(i) === h;
    }, q.isPortal = function(i) {
      return e(i) === t;
    }, q.isProfiler = function(i) {
      return e(i) === s;
    }, q.isStrictMode = function(i) {
      return e(i) === o;
    }, q.isSuspense = function(i) {
      return e(i) === l;
    }, q.isSuspenseList = function(i) {
      return e(i) === d;
    }, q.isValidElementType = function(i) {
      return typeof i == "string" || typeof i == "function" || i === n || i === s || i === o || i === l || i === d || typeof i == "object" && i !== null && (i.$$typeof === y || i.$$typeof === h || i.$$typeof === u || i.$$typeof === c || i.$$typeof === f || i.$$typeof === b || i.getModuleId !== void 0);
    }, q.typeOf = e;
  }()), q;
}
process.env.NODE_ENV === "production" ? Jr.exports = ys() : Jr.exports = gs();
var zt = Jr.exports;
const bs = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Rn(e) {
  const r = `${e}`.match(bs);
  return r && r[1] || "";
}
function Pn(e, r = "") {
  return e.displayName || e.name || Rn(e) || r;
}
function qt(e, r, t) {
  const n = Pn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function vs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Pn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zt.ForwardRef:
          return qt(e, e.render, "ForwardRef");
        case zt.Memo:
          return qt(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs,
  getFunctionName: Rn
}, Symbol.toStringTag, { value: "Module" }));
function _s(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _s
}, Symbol.toStringTag, { value: "Module" }));
function Ts(e, r) {
  return X({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var Q = {}, Cn = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Cn);
var $n = Cn.exports;
const Os = /* @__PURE__ */ we(ro), Ss = /* @__PURE__ */ we(xs);
var kn = $n;
Object.defineProperty(Q, "__esModule", {
  value: !0
});
Q.alpha = jn;
Q.blend = Ds;
Q.colorChannel = void 0;
var ws = Q.darken = ft;
Q.decomposeColor = ye;
Q.emphasize = Mn;
var Bt = Q.getContrastRatio = As;
Q.getLuminance = gr;
Q.hexToRgb = An;
Q.hslToRgb = In;
var Rs = Q.lighten = dt;
Q.private_safeAlpha = Ns;
Q.private_safeColorChannel = void 0;
Q.private_safeDarken = Is;
Q.private_safeEmphasize = Ms;
Q.private_safeLighten = js;
Q.recomposeColor = Ye;
Q.rgbToHex = ks;
var Gt = kn(Os), Ps = kn(Ss);
function lt(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Ps.default)(e, r, t);
}
function An(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Cs(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function ye(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ye(An(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Gt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Gt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Nn = (e) => {
  const r = ye(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
Q.colorChannel = Nn;
const $s = (e, r) => {
  try {
    return Nn(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
Q.private_safeColorChannel = $s;
function Ye(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function ks(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = ye(e);
  return `#${r.map((t, n) => Cs(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function In(e) {
  e = ye(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, s = n * Math.min(o, 1 - o), c = (l, d = (l + t / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let u = "rgb";
  const f = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (u += "a", f.push(r[3])), Ye({
    type: u,
    values: f
  });
}
function gr(e) {
  e = ye(e);
  let r = e.type === "hsl" || e.type === "hsla" ? ye(In(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function As(e, r) {
  const t = gr(e), n = gr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function jn(e, r) {
  return e = ye(e), r = lt(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ye(e);
}
function Ns(e, r, t) {
  try {
    return jn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function ft(e, r) {
  if (e = ye(e), r = lt(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ye(e);
}
function Is(e, r, t) {
  try {
    return ft(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function dt(e, r) {
  if (e = ye(e), r = lt(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ye(e);
}
function js(e, r, t) {
  try {
    return dt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Mn(e, r = 0.15) {
  return gr(e) > 0.5 ? ft(e, r) : dt(e, r);
}
function Ms(e, r, t) {
  try {
    return Mn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Ds(e, r, t, n = 1) {
  const o = (f, l) => Math.round((f ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n), s = ye(e), c = ye(r), u = [o(s.values[0], c.values[0]), o(s.values[1], c.values[1]), o(s.values[2], c.values[2])];
  return Ye({
    type: "rgb",
    values: u
  });
}
const Xe = {
  black: "#000",
  white: "#fff"
}, Ls = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, $e = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ke = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, qe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ae = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ne = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ie = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ys = ["mode", "contrastThreshold", "tonalOffset"], Kt = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Xe.white,
    default: Xe.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ur = {
  text: {
    primary: Xe.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Xe.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ht(e, r, t, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Rs(e.main, o) : r === "dark" && (e.dark = ws(e.main, s)));
}
function Ws(e = "light") {
  return e === "dark" ? {
    main: Ae[200],
    light: Ae[50],
    dark: Ae[400]
  } : {
    main: Ae[700],
    light: Ae[400],
    dark: Ae[800]
  };
}
function Fs(e = "light") {
  return e === "dark" ? {
    main: $e[200],
    light: $e[50],
    dark: $e[400]
  } : {
    main: $e[500],
    light: $e[300],
    dark: $e[700]
  };
}
function Us(e = "light") {
  return e === "dark" ? {
    main: ke[500],
    light: ke[300],
    dark: ke[700]
  } : {
    main: ke[700],
    light: ke[400],
    dark: ke[800]
  };
}
function Vs(e = "light") {
  return e === "dark" ? {
    main: Ne[400],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: Ne[700],
    light: Ne[500],
    dark: Ne[900]
  };
}
function zs(e = "light") {
  return e === "dark" ? {
    main: Ie[400],
    light: Ie[300],
    dark: Ie[700]
  } : {
    main: Ie[800],
    light: Ie[500],
    dark: Ie[900]
  };
}
function qs(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qe[500],
    dark: qe[900]
  };
}
function Bs(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Ce(e, Ys), s = e.primary || Ws(r), c = e.secondary || Fs(r), u = e.error || Us(r), f = e.info || Vs(r), l = e.success || zs(r), d = e.warning || qs(r);
  function h(i) {
    const O = Bt(i, Ur.text.primary) >= t ? Ur.text.primary : Kt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = Bt(i, O);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${O} on ${i}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const y = ({
    color: i,
    name: O,
    mainShade: P = 500,
    lightShade: N = 300,
    darkShade: k = 700
  }) => {
    if (i = X({}, i), !i.main && i[P] && (i.main = i[P]), !i.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : Ge(11, O ? ` (${O})` : "", P));
    if (typeof i.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(i.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ge(12, O ? ` (${O})` : "", JSON.stringify(i.main)));
    return Ht(i, "light", N, n), Ht(i, "dark", k, n), i.contrastText || (i.contrastText = h(i.main)), i;
  }, T = {
    dark: Ur,
    light: Kt
  };
  return process.env.NODE_ENV !== "production" && (T[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), xe(X({
    // A collection of common colors.
    common: X({}, Xe),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: Ls,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, T[r]), o);
}
const Gs = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ks(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xt = {
  textTransform: "uppercase"
}, Jt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hs(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Jt,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: c = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: f = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = t, y = Ce(t, Gs);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = o / 14, b = h || ((P) => `${P / l * T}rem`), i = (P, N, k, j, E) => X({
    fontFamily: n,
    fontWeight: P,
    fontSize: b(N),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k
  }, n === Jt ? {
    letterSpacing: `${Ks(j / N)}em`
  } : {}, E, d), O = {
    h1: i(s, 96, 1.167, -1.5),
    h2: i(s, 60, 1.2, -0.5),
    h3: i(c, 48, 1.167, 0),
    h4: i(c, 34, 1.235, 0.25),
    h5: i(c, 24, 1.334, 0),
    h6: i(u, 20, 1.6, 0.15),
    subtitle1: i(c, 16, 1.75, 0.15),
    subtitle2: i(u, 14, 1.57, 0.1),
    body1: i(c, 16, 1.5, 0.15),
    body2: i(c, 14, 1.43, 0.15),
    button: i(u, 14, 1.75, 0.4, Xt),
    caption: i(c, 12, 1.66, 0.4),
    overline: i(c, 12, 2.66, 1, Xt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return xe(X({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: c,
    fontWeightMedium: u,
    fontWeightBold: f
  }, O), y, {
    clone: !1
    // No need to clone deep
  });
}
const Xs = 0.2, Js = 0.14, Zs = 0.12;
function B(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Js})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zs})`].join(",");
}
const Qs = ["none", B(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), B(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), B(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), B(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), B(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), B(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), B(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), B(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), B(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), B(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), B(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), B(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), B(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), B(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), B(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), B(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), B(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), B(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), B(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), B(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), B(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), B(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), B(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), B(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ei = ["duration", "easing", "delay"], ri = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ti = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Zt(e) {
  return `${Math.round(e)}ms`;
}
function ni(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function oi(e) {
  const r = X({}, ri, e.easing), t = X({}, ti, e.duration);
  return X({
    getAutoHeightDuration: ni,
    create: (o = ["all"], s = {}) => {
      const {
        duration: c = t.standard,
        easing: u = r.easeInOut,
        delay: f = 0
      } = s, l = Ce(s, ei);
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", h = (y) => !isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(c) && !d(c) && console.error(`MUI: Argument "duration" must be a number or a string but found ${c}.`), d(u) || console.error('MUI: Argument "easing" must be a string.'), !h(f) && !d(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof c == "string" ? c : Zt(c)} ${u} ${typeof f == "string" ? f : Zt(f)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const ai = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, si = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ii(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, c = Ce(e, si);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ge(18));
  const u = Bs(n), f = wn(e);
  let l = xe(f, {
    mixins: Ts(f.breakpoints, t),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Qs.slice(),
    typography: Hs(u, s),
    transitions: oi(o),
    zIndex: X({}, ai)
  });
  if (l = xe(l, c), l = r.reduce((d, h) => xe(d, h), l), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (y, T) => {
      let b;
      for (b in y) {
        const i = y[b];
        if (d.indexOf(b) !== -1 && Object.keys(i).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = hs("", b);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: i
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((y) => {
      const T = l.components[y].styleOverrides;
      T && y.indexOf("Mui") === 0 && h(T, y);
    });
  }
  return l.unstable_sxConfig = X({}, er, c == null ? void 0 : c.unstable_sxConfig), l.unstable_sx = function(h) {
    return $r({
      sx: h,
      theme: this
    });
  }, l;
}
const ci = ii();
var rr = {}, Vr = { exports: {} }, Qt;
function ui() {
  return Qt || (Qt = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var s in o) ({}).hasOwnProperty.call(o, s) && (t[s] = o[s]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(null, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vr)), Vr.exports;
}
var zr = { exports: {} }, en;
function li() {
  return en || (en = 1, function(e) {
    function r(t, n) {
      if (t == null) return {};
      var o = {};
      for (var s in t) if ({}.hasOwnProperty.call(t, s)) {
        if (n.indexOf(s) !== -1) continue;
        o[s] = t[s];
      }
      return o;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zr)), zr.exports;
}
const fi = /* @__PURE__ */ we(pa), di = /* @__PURE__ */ we(ma), pi = /* @__PURE__ */ we(va), mi = /* @__PURE__ */ we(Es), hi = /* @__PURE__ */ we(is), yi = /* @__PURE__ */ we(fs);
var We = $n;
Object.defineProperty(rr, "__esModule", {
  value: !0
});
var gi = rr.default = ki;
rr.shouldForwardProp = fr;
rr.systemDefaultTheme = void 0;
var me = We(ui()), Zr = We(li()), br = wi(fi), bi = di, vi = We(pi), Ei = We(mi), _i = We(hi), xi = We(yi);
const Ti = ["ownerState"], Oi = ["variants"], Si = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Dn(e) {
  if (typeof WeakMap != "function") return null;
  var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (Dn = function(n) {
    return n ? t : r;
  })(e);
}
function wi(e, r) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var t = Dn(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e) if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
    var c = o ? Object.getOwnPropertyDescriptor(e, s) : null;
    c && (c.get || c.set) ? Object.defineProperty(n, s, c) : n[s] = e[s];
  }
  return n.default = e, t && t.set(e, n), n;
}
function Ri(e) {
  return Object.keys(e).length === 0;
}
function Pi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function fr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function rn(e, r) {
  return r && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${r}{${String(e.styles)}}`), e;
}
const Ci = rr.systemDefaultTheme = (0, _i.default)(), tn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ir({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Ri(r) ? e : r[t] || r;
}
function $i(e) {
  return e ? (r, t) => t[e] : null;
}
function dr(e, r, t) {
  let {
    ownerState: n
  } = r, o = (0, Zr.default)(r, Ti);
  const s = typeof e == "function" ? e((0, me.default)({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(s))
    return s.flatMap((c) => dr(c, (0, me.default)({
      ownerState: n
    }, o), t));
  if (s && typeof s == "object" && Array.isArray(s.variants)) {
    const {
      variants: c = []
    } = s;
    let f = (0, Zr.default)(s, Oi);
    return c.forEach((l) => {
      let d = !0;
      if (typeof l.props == "function" ? d = l.props((0, me.default)({
        ownerState: n
      }, o, n)) : Object.keys(l.props).forEach((h) => {
        (n == null ? void 0 : n[h]) !== l.props[h] && o[h] !== l.props[h] && (d = !1);
      }), d) {
        Array.isArray(f) || (f = [f]);
        const h = typeof l.style == "function" ? l.style((0, me.default)({
          ownerState: n
        }, o, n)) : l.style;
        f.push(t ? rn((0, br.internal_serializeStyles)(h), t) : h);
      }
    }), f;
  }
  return t ? rn((0, br.internal_serializeStyles)(s), t) : s;
}
function ki(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Ci,
    rootShouldForwardProp: n = fr,
    slotShouldForwardProp: o = fr
  } = e, s = (c) => (0, xi.default)((0, me.default)({}, c, {
    theme: ir((0, me.default)({}, c, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return s.__mui_systemSx = !0, (c, u = {}) => {
    (0, br.internal_processStyles)(c, (I) => I.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: f,
      slot: l,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = $i(tn(l))
    } = u, T = (0, Zr.default)(u, Si), b = f && f.startsWith("Mui") || l ? "components" : "custom", i = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), O = h || !1;
    let P;
    process.env.NODE_ENV !== "production" && f && (P = `${f}-${tn(l || "Root")}`);
    let N = fr;
    l === "Root" || l === "root" ? N = n : l ? N = o : Pi(c) && (N = void 0);
    const k = (0, br.default)(c, (0, me.default)({
      shouldForwardProp: N,
      label: P
    }, T)), j = (I) => typeof I == "function" && I.__emotion_real !== I || (0, bi.isPlainObject)(I) ? ($) => {
      const re = ir({
        theme: $.theme,
        defaultTheme: t,
        themeId: r
      });
      return dr(I, (0, me.default)({}, $, {
        theme: re
      }), re.modularCssLayers ? b : void 0);
    } : I, E = (I, ...$) => {
      let re = j(I);
      const V = $ ? $.map(j) : [];
      f && y && V.push((M) => {
        const W = ir((0, me.default)({}, M, {
          defaultTheme: t,
          themeId: r
        }));
        if (!W.components || !W.components[f] || !W.components[f].styleOverrides)
          return null;
        const G = W.components[f].styleOverrides, te = {};
        return Object.entries(G).forEach(([J, ne]) => {
          te[J] = dr(ne, (0, me.default)({}, M, {
            theme: W
          }), W.modularCssLayers ? "theme" : void 0);
        }), y(M, te);
      }), f && !i && V.push((M) => {
        var W;
        const G = ir((0, me.default)({}, M, {
          defaultTheme: t,
          themeId: r
        })), te = G == null || (W = G.components) == null || (W = W[f]) == null ? void 0 : W.variants;
        return dr({
          variants: te
        }, (0, me.default)({}, M, {
          theme: G
        }), G.modularCssLayers ? "theme" : void 0);
      }), O || V.push(s);
      const de = V.length - $.length;
      if (Array.isArray(I) && de > 0) {
        const M = new Array(de).fill("");
        re = [...I, ...M], re.raw = [...I.raw, ...M];
      }
      const ie = k(re, ...V);
      if (process.env.NODE_ENV !== "production") {
        let M;
        f && (M = `${f}${(0, vi.default)(l || "")}`), M === void 0 && (M = `Styled(${(0, Ei.default)(c)})`), ie.displayName = M;
      }
      return c.muiName && (ie.muiName = c.muiName), ie;
    };
    return k.withConfig && (E.withConfig = k.withConfig), E;
  };
}
function Ai(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ni = (e) => Ai(e) && e !== "classes", kr = gi({
  themeId: to,
  defaultTheme: ci,
  rootShouldForwardProp: Ni
}), Ii = Fn`
	0%, 100% { transform: translateX(0); }
	10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
	20%, 40%, 60%, 80% { transform: translateX(2px); }
`, ji = kr(et)(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(3),
  padding: e.spacing(3),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "&.shake": {
    animation: `${Ii} 0.5s ease-in-out`
  },
  [e.breakpoints.down("sm")]: {
    padding: e.spacing(2),
    gap: e.spacing(2)
  },
  [e.breakpoints.down("xs")]: {
    padding: e.spacing(1),
    gap: e.spacing(1.5)
  }
})), Mi = kr(et)(({ theme: e }) => ({
  display: "flex",
  gap: e.spacing(1),
  justifyContent: "center",
  flexWrap: "nowrap",
  width: "100%",
  maxWidth: "100%",
  padding: e.spacing(0, 1),
  [e.breakpoints.down("sm")]: {
    gap: e.spacing(0.5),
    padding: e.spacing(0, 0.5)
  },
  [e.breakpoints.down("xs")]: {
    gap: e.spacing(0.25),
    padding: e.spacing(0, 0.25)
  }
})), Di = kr(Un)(({ theme: e }) => ({
  flex: "1 1 0",
  minWidth: "32px",
  maxWidth: "48px",
  height: "56px",
  "& .MuiOutlinedInput-root": {
    height: "56px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
    "& input": {
      padding: e.spacing(1),
      textAlign: "center"
    }
  },
  [e.breakpoints.down("sm")]: {
    minWidth: "28px",
    maxWidth: "36px",
    height: "44px",
    "& .MuiOutlinedInput-root": {
      height: "44px",
      fontSize: "1.1rem",
      "& input": {
        padding: e.spacing(0.5)
      }
    }
  },
  [e.breakpoints.down("xs")]: {
    minWidth: "24px",
    maxWidth: "32px",
    height: "40px",
    "& .MuiOutlinedInput-root": {
      height: "40px",
      fontSize: "1rem",
      "& input": {
        padding: e.spacing(0.25)
      }
    }
  }
})), nn = kr(Vn)(({ theme: e }) => ({
  width: "100%",
  maxWidth: "140px",
  height: "44px",
  // Increased height to accommodate circular progress
  whiteSpace: "nowrap",
  // Prevent text wrapping
  overflow: "visible",
  // Allow circular progress to be visible
  textOverflow: "ellipsis",
  // Show ellipsis if text is too long
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  // Override Material-UI's default uppercase transform
  "& .MuiButton-startIcon": {
    marginRight: e.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible"
    // Ensure the icon container doesn't clip content
  },
  "& .MuiCircularProgress-root": {
    overflow: "visible"
    // Ensure circular progress is not clipped
  },
  [e.breakpoints.down("sm")]: {
    maxWidth: "120px",
    fontSize: "0.875rem",
    padding: e.spacing(1, 1.5),
    height: "40px"
    // Increased height for mobile too
  },
  [e.breakpoints.down("xs")]: {
    maxWidth: "100%",
    fontSize: "0.8rem",
    padding: e.spacing(0.75, 1),
    height: "36px"
    // Increased height for extra small screens
  }
})), Vi = ({
  digitCount: e = 6,
  onVerify: r,
  onVerifySuccess: t,
  onVerifyError: n,
  showResend: o = !0,
  onResend: s,
  resendCooldown: c = 60,
  expirationTime: u = 300,
  instructionText: f = "Enter the code sent to your email",
  placeholder: l = "0",
  showExpirationTimer: d = !0
}) => {
  const [h, y] = Pe(!1), [T, b] = Pe(null), [i, O] = Pe(null), [P, N] = Pe(!1), [k, j] = Pe(0), [E, I] = Pe(u), [$, re] = Pe(!1), V = Ln([]), { control: de, handleSubmit: ie, setValue: M, getValues: W, clearErrors: G, reset: te } = Yn({
    defaultValues: {
      otp: ""
    }
  }), J = Fe(async () => {
    try {
      if (!navigator.clipboard) {
        b("Clipboard access not supported in this browser");
        return;
      }
      const _ = (await navigator.clipboard.readText()).replace(/\D/g, "");
      if (_.length === 0) {
        b("No valid OTP found in clipboard");
        return;
      }
      if (_.length < e) {
        b(
          `OTP in clipboard is too short. Expected ${e} digits, got ${_.length}`
        );
        return;
      }
      const g = (W("otp") || "").split("");
      for (let D = 0; D < Math.min(_.length, e); D++)
        g[D] = _[D], V.current[D] && (V.current[D].value = _[D]);
      const w = g.join("");
      M("otp", w), G("otp"), b(null), O(null);
      const C = Math.min(_.length, e - 1), A = V.current[C];
      A && A.focus(), O("OTP pasted successfully!"), setTimeout(() => O(null), 2e3);
    } catch (p) {
      const _ = p instanceof Error ? p.message : "Failed to read from clipboard";
      b(_), N(!0), setTimeout(() => N(!1), 500);
    }
  }, [e, W, M, G]);
  Ar(() => {
    const p = (_) => {
      const g = _.target.closest("[data-otp-component]") !== null, w = document.activeElement, C = w && w.tagName === "INPUT";
      (g || !C) && (_.preventDefault(), J());
    };
    return document.addEventListener("paste", p), () => document.removeEventListener("paste", p);
  }, [J]), Ar(() => {
    let p;
    return k > 0 && (p = window.setInterval(() => {
      j((_) => _ - 1);
    }, 1e3)), () => clearInterval(p);
  }, [k]), Ar(() => {
    let p;
    return E > 0 && d && (p = window.setInterval(() => {
      I((_) => _ <= 1 ? (re(!0), 0) : _ - 1);
    }, 1e3)), () => clearInterval(p);
  }, [E, d]);
  const ne = (p) => {
    const _ = Math.floor(p / 60), R = p % 60;
    return `${_}:${R.toString().padStart(2, "0")}`;
  }, pe = Fe(
    (p, _) => {
      const g = (W("otp") || "").split("");
      for (let D = 0; D < p.length && D < e; D++)
        g[D] = p[D], V.current[D] && (V.current[D].value = p[D]);
      const w = g.join("");
      M("otp", w), _(w);
      const C = Math.min(p.length, e - 1), A = V.current[C];
      A && A.focus();
    },
    [e, W, M]
  ), be = Fe(
    (p, _, R) => {
      const w = (W("otp") || "").split("");
      w[p] = _;
      const C = w.join("");
      if (M("otp", C), R(C), _ && p < e - 1) {
        const A = V.current[p + 1];
        A && A.focus();
      }
    },
    [e, W, M]
  ), v = Fe(
    (p, _, R) => {
      const g = _.replace(/\D/g, "");
      if (g.length > 1) {
        const w = g.slice(0, e);
        pe(w, R);
      } else
        be(p, g, R);
      G("otp"), b(null), O(null);
    },
    [e, G, pe, be]
  ), a = Fe(
    (p, _) => {
      if (_.key === "Backspace") {
        const g = (W("otp") || "").split("");
        if (g[p])
          g[p] = "";
        else if (p > 0) {
          g[p - 1] = "";
          const C = V.current[p - 1];
          C && C.focus();
        }
        const w = g.join("");
        M("otp", w);
      }
    },
    [W, M]
  ), m = async (p) => {
    if ($) {
      b("OTP has expired. Please request a new one.");
      return;
    }
    const _ = p.otp || "";
    if (_.length !== e) {
      b(`Please enter all ${e} digits.`), N(!0), setTimeout(() => N(!1), 500);
      return;
    }
    y(!0), b(null), O(null);
    try {
      const R = await r(_);
      O("Verification successful!"), b(null), setTimeout(() => {
        t(R);
      }, 2e3);
    } catch (R) {
      const g = R instanceof Error ? R.message : "Verification failed. Please try again.";
      b(g), O(null), N(!0), setTimeout(() => N(!1), 500), n(R instanceof Error ? R : new Error(g));
    } finally {
      y(!1);
    }
  }, x = () => {
    if (k > 0) return;
    j(c), I(u), re(!1), te(), b(null), O(null), G(), s && s();
    const p = V.current[0];
    p && p.focus();
  };
  return /* @__PURE__ */ ae.jsxDEV(ji, { className: P ? "shake" : "", "data-otp-component": !0, children: [
    /* @__PURE__ */ ae.jsxDEV(
      mt,
      {
        variant: "h6",
        component: "h2",
        textAlign: "center",
        gutterBottom: !0,
        children: f
      },
      void 0,
      !1,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
        lineNumber: 512,
        columnNumber: 4
      },
      void 0
    ),
    d && E > 0 && /* @__PURE__ */ ae.jsxDEV(mt, { variant: "body2", color: "text.secondary", children: [
      "Code expires in: ",
      ne(E)
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 522,
      columnNumber: 5
    }, void 0),
    $ && /* @__PURE__ */ ae.jsxDEV(Nr, { severity: "warning", sx: { width: "100%" }, children: "OTP has expired. Please request a new one." }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 528,
      columnNumber: 5
    }, void 0),
    T && /* @__PURE__ */ ae.jsxDEV(ht, { in: !!T, children: /* @__PURE__ */ ae.jsxDEV(Nr, { severity: "error", sx: { width: "100%" }, children: T }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 535,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 534,
      columnNumber: 5
    }, void 0),
    i && /* @__PURE__ */ ae.jsxDEV(ht, { in: !!i, children: /* @__PURE__ */ ae.jsxDEV(Nr, { severity: "success", sx: { width: "100%" }, children: i }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 543,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 542,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ ae.jsxDEV(
      et,
      {
        component: "form",
        onSubmit: ie(m),
        sx: { width: "100%" },
        children: [
          /* @__PURE__ */ ae.jsxDEV(Mi, { children: Array.from({ length: e }, (p, _) => /* @__PURE__ */ ae.jsxDEV(
            Wn,
            {
              name: "otp",
              control: de,
              render: ({ field: { onChange: R, value: g } }) => /* @__PURE__ */ ae.jsxDEV(
                Di,
                {
                  inputRef: (w) => V.current[_] = w,
                  variant: "outlined",
                  placeholder: l,
                  inputProps: {
                    maxLength: 1,
                    style: { textAlign: "center" }
                  },
                  value: (g || "").charAt(_) || "",
                  onChange: (w) => v(
                    _,
                    w.target.value,
                    R
                  ),
                  onKeyDown: (w) => a(
                    _,
                    w
                  ),
                  disabled: h || $,
                  error: !1,
                  autoComplete: "off"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                  lineNumber: 561,
                  columnNumber: 9
                },
                void 0
              )
            },
            _,
            !1,
            {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
              lineNumber: 556,
              columnNumber: 7
            },
            void 0
          )) }, void 0, !1, {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
            lineNumber: 554,
            columnNumber: 5
          }, void 0),
          /* @__PURE__ */ ae.jsxDEV(
            zn,
            {
              direction: { xs: "column", sm: "row" },
              spacing: { xs: 1, sm: 2 },
              sx: {
                mt: 3,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "100%",
                padding: { xs: 0.5, sm: 1 },
                boxSizing: "border-box"
              },
              children: [
                /* @__PURE__ */ ae.jsxDEV(
                  nn,
                  {
                    type: "submit",
                    variant: "contained",
                    disabled: h || $,
                    startIcon: h ? /* @__PURE__ */ ae.jsxDEV(qn, { size: 18, color: "inherit" }, void 0, !1, {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                      lineNumber: 613,
                      columnNumber: 9
                    }, void 0) : null,
                    children: h ? "Verifying..." : "Verify"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                    lineNumber: 607,
                    columnNumber: 6
                  },
                  void 0
                ),
                o && /* @__PURE__ */ ae.jsxDEV(
                  nn,
                  {
                    variant: "outlined",
                    onClick: x,
                    disabled: k > 0 || h,
                    children: k > 0 ? `Resend in ${k}s` : "Resend Otp"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                    lineNumber: 621,
                    columnNumber: 7
                  },
                  void 0
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
              lineNumber: 594,
              columnNumber: 5
            },
            void 0
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
        lineNumber: 549,
        columnNumber: 4
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
    lineNumber: 511,
    columnNumber: 3
  }, void 0);
};
export {
  Vi as LumoraOTP
};
