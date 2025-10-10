import * as vr from "react";
import Vr, { useState as Se, useRef as Lr, useCallback as Pe, useEffect as ut } from "react";
import { useForm as Fr, Controller as Wr } from "react-hook-form";
import { keyframes as Ur, Box as $t, TextField as Yr, Button as zr, Typography as jt, Alert as ft, Fade as Bt, Stack as Gr, CircularProgress as qr } from "@mui/material";
import Kr from "@emotion/styled";
import "@emotion/react";
function Hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Xr() {
  if (Vt) return Fe;
  Vt = 1;
  var e = Symbol.for("react.fragment");
  return Fe.Fragment = e, Fe.jsxDEV = void 0, Fe;
}
var We = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Jr() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === Y ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case x:
          return "Fragment";
        case M:
          return "Profiler";
        case B:
          return "StrictMode";
        case R:
          return "Suspense";
        case W:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case l:
            return "Portal";
          case A:
            return u.displayName || "Context";
          case V:
            return (u._context.displayName || "Context") + ".Consumer";
          case v:
            var O = u.render;
            return u = u.displayName, u || (u = O.displayName || O.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case J:
            return O = u.displayName || null, O !== null ? O : e(u.type) || "Memo";
          case F:
            O = u._payload, u = u._init;
            try {
              return e(u(O));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var N = O.error, b = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return N.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), t(u);
      }
    }
    function n(u) {
      if (u === x) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === F)
        return "<...>";
      try {
        var O = e(u);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = i.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(u) {
      if (_.call(u, "key")) {
        var O = Object.getOwnPropertyDescriptor(u, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, O) {
      function N() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: N,
        configurable: !0
      });
    }
    function f() {
      var u = e(this.type);
      return Q[u] || (Q[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function p(u, O, N, b, w, P) {
      var C = N.ref;
      return u = {
        $$typeof: h,
        type: u,
        key: O,
        props: N,
        _owner: b
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function m(u, O, N, b, w, P) {
      var C = O.children;
      if (C !== void 0)
        if (b)
          if (E(C)) {
            for (b = 0; b < C.length; b++)
              g(C[b]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(C);
      if (_.call(O, "key")) {
        C = e(u);
        var k = Object.keys(O).filter(function(L) {
          return L !== "key";
        });
        b = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", S[C + b] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          C,
          k,
          C
        ), S[C + b] = !0);
      }
      if (C = null, N !== void 0 && (r(N), C = "" + N), s(O) && (r(O.key), C = "" + O.key), "key" in O) {
        N = {};
        for (var D in O)
          D !== "key" && (N[D] = O[D]);
      } else N = O;
      return C && c(
        N,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), p(
        u,
        C,
        N,
        o(),
        w,
        P
      );
    }
    function g(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === F && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === h;
    }
    var T = Vr, h = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), A = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), i = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, E = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var j, Q = {}, ne = T.react_stack_bottom_frame.bind(
      T,
      a
    )(), ue = I(n(a)), S = {};
    We.Fragment = x, We.jsxDEV = function(u, O, N, b) {
      var w = 1e4 > i.recentlyCreatedOwnerStacks++;
      return m(
        u,
        O,
        N,
        b,
        w ? Error("react-stack-top-frame") : ne,
        w ? I(n(u)) : ue
      );
    };
  }()), We;
}
process.env.NODE_ENV === "production" ? Tt.exports = Xr() : Tt.exports = Jr();
var oe = Tt.exports;
function ye(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Qr = "$$material";
function Zr(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var en = {
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
function tn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var rn = !0, Ft = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, nn = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", on = /[A-Z]|^ms/g, Sr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, At = function(t) {
  return t.charCodeAt(1) === 45;
}, Wt = function(t) {
  return t != null && typeof t != "boolean";
}, dt = /* @__PURE__ */ tn(function(e) {
  return At(e) ? e : e.replace(on, "-$&").toLowerCase();
}), Ge = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Sr, function(n, o, a) {
          return he = {
            name: o,
            styles: a,
            next: he
          }, o;
        });
  }
  return en[t] !== 1 && !At(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
{
  var an = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, sn = ["normal", "none", "initial", "inherit", "unset"], cn = Ge, ln = /^-ms-/, un = /-(.)/g, Ut = {};
  Ge = function(t, r) {
    if (t === "content" && (typeof r != "string" || sn.indexOf(r) === -1 && !an.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = cn(t, r);
    return n !== "" && !At(t) && t.indexOf("-") !== -1 && Ut[t] === void 0 && (Ut[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(ln, "ms-").replace(un, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Er = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function qe(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0) {
    if (String(n) === "NO_COMPONENT_SELECTOR")
      throw new Error(Er);
    return n;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return he = {
          name: o.name,
          styles: o.styles,
          next: he
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            he = {
              name: s.name,
              styles: s.styles,
              next: he
            }, s = s.next;
        var c = a.styles + ";";
        return c;
      }
      return fn(e, t, r);
    }
    case "function": {
      console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var f = [], p = r.replace(Sr, function(g, y, T) {
          var h = "animation" + f.length;
          return f.push("const " + h + " = keyframes`" + T.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + h + "}";
        });
        f.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(f, ["`" + p + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + p + "`");
      }
      break;
  }
  var m = r;
  return m;
}
function fn(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += qe(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var c = s;
        Wt(c) && (n += dt(a) + ":" + Ge(a, c) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && rn)
          throw new Error(Er);
        if (Array.isArray(s) && typeof s[0] == "string" && t == null)
          for (var f = 0; f < s.length; f++)
            Wt(s[f]) && (n += dt(a) + ":" + Ge(a, s[f]) + ";");
        else {
          var p = qe(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              n += dt(a) + ":" + p + ";";
              break;
            }
            default:
              a === "undefined" && console.error(nn), n += a + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var Yt = /label:\s*([^\s;{]+)\s*(;|$)/g, he;
function dn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  he = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += qe(r, t, a);
  else {
    var s = a;
    s[0] === void 0 && console.error(Ft), o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += qe(r, t, e[c]), n) {
      var f = a;
      f[c] === void 0 && console.error(Ft), o += f[c];
    }
  Yt.lastIndex = 0;
  for (var p = "", m; (m = Yt.exec(o)) !== null; )
    p += "-" + m[1];
  var g = Zr(o) + p;
  {
    var y = {
      name: g,
      styles: o,
      next: he,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return y;
  }
}
var xt = { exports: {} }, Ue = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function pn() {
  if (zt) return z;
  zt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function V(v) {
    if (typeof v == "object" && v !== null) {
      var R = v.$$typeof;
      switch (R) {
        case t:
          switch (v = v.type, v) {
            case f:
            case p:
            case n:
            case a:
            case o:
            case g:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case m:
                case h:
                case T:
                case s:
                  return v;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function A(v) {
    return V(v) === p;
  }
  return z.AsyncMode = f, z.ConcurrentMode = p, z.ContextConsumer = c, z.ContextProvider = s, z.Element = t, z.ForwardRef = m, z.Fragment = n, z.Lazy = h, z.Memo = T, z.Portal = r, z.Profiler = a, z.StrictMode = o, z.Suspense = g, z.isAsyncMode = function(v) {
    return A(v) || V(v) === f;
  }, z.isConcurrentMode = A, z.isContextConsumer = function(v) {
    return V(v) === c;
  }, z.isContextProvider = function(v) {
    return V(v) === s;
  }, z.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, z.isForwardRef = function(v) {
    return V(v) === m;
  }, z.isFragment = function(v) {
    return V(v) === n;
  }, z.isLazy = function(v) {
    return V(v) === h;
  }, z.isMemo = function(v) {
    return V(v) === T;
  }, z.isPortal = function(v) {
    return V(v) === r;
  }, z.isProfiler = function(v) {
    return V(v) === a;
  }, z.isStrictMode = function(v) {
    return V(v) === o;
  }, z.isSuspense = function(v) {
    return V(v) === g;
  }, z.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === p || v === a || v === o || v === g || v === y || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === T || v.$$typeof === s || v.$$typeof === c || v.$$typeof === m || v.$$typeof === x || v.$$typeof === B || v.$$typeof === M || v.$$typeof === l);
  }, z.typeOf = V, z;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function mn() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function V($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === p || $ === a || $ === o || $ === g || $ === y || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === T || $.$$typeof === s || $.$$typeof === c || $.$$typeof === m || $.$$typeof === x || $.$$typeof === B || $.$$typeof === M || $.$$typeof === l);
    }
    function A($) {
      if (typeof $ == "object" && $ !== null) {
        var fe = $.$$typeof;
        switch (fe) {
          case t:
            var Le = $.type;
            switch (Le) {
              case f:
              case p:
              case n:
              case a:
              case o:
              case g:
                return Le;
              default:
                var Mt = Le && Le.$$typeof;
                switch (Mt) {
                  case c:
                  case m:
                  case h:
                  case T:
                  case s:
                    return Mt;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var v = f, R = p, W = c, J = s, F = t, ie = m, Y = n, i = h, _ = T, E = r, I = a, j = o, Q = g, ne = !1;
    function ue($) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S($) || A($) === f;
    }
    function S($) {
      return A($) === p;
    }
    function u($) {
      return A($) === c;
    }
    function O($) {
      return A($) === s;
    }
    function N($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function b($) {
      return A($) === m;
    }
    function w($) {
      return A($) === n;
    }
    function P($) {
      return A($) === h;
    }
    function C($) {
      return A($) === T;
    }
    function k($) {
      return A($) === r;
    }
    function D($) {
      return A($) === a;
    }
    function L($) {
      return A($) === o;
    }
    function U($) {
      return A($) === g;
    }
    G.AsyncMode = v, G.ConcurrentMode = R, G.ContextConsumer = W, G.ContextProvider = J, G.Element = F, G.ForwardRef = ie, G.Fragment = Y, G.Lazy = i, G.Memo = _, G.Portal = E, G.Profiler = I, G.StrictMode = j, G.Suspense = Q, G.isAsyncMode = ue, G.isConcurrentMode = S, G.isContextConsumer = u, G.isContextProvider = O, G.isElement = N, G.isForwardRef = b, G.isFragment = w, G.isLazy = P, G.isMemo = C, G.isPortal = k, G.isProfiler = D, G.isStrictMode = L, G.isSuspense = U, G.isValidElementType = V, G.typeOf = A;
  }()), G;
}
var qt;
function Tr() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? Ue.exports = pn() : Ue.exports = mn()), Ue.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pt, Kt;
function gn() {
  if (Kt) return pt;
  Kt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pt = o() ? Object.assign : function(a, s) {
    for (var c, f = n(a), p, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var g in c)
        t.call(c, g) && (f[g] = c[g]);
      if (e) {
        p = e(c);
        for (var y = 0; y < p.length; y++)
          r.call(c, p[y]) && (f[p[y]] = c[p[y]]);
      }
    }
    return f;
  }, pt;
}
var mt, Ht;
function Rt() {
  if (Ht) return mt;
  Ht = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mt = e, mt;
}
var gt, Xt;
function xr() {
  return Xt || (Xt = 1, gt = Function.call.bind(Object.prototype.hasOwnProperty)), gt;
}
var ht, Jt;
function hn() {
  if (Jt) return ht;
  Jt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Rt(), r = {}, n = xr();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (n(a, m)) {
          var g;
          try {
            if (typeof a[m] != "function") {
              var y = Error(
                (f || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            g = a[m](s, m, f, c, null, t);
          } catch (h) {
            g = h;
          }
          if (g && !(g instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var T = p ? p() : "";
            e(
              "Failed " + c + " type: " + g.message + (T ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ht = o, ht;
}
var yt, Qt;
function yn() {
  if (Qt) return yt;
  Qt = 1;
  var e = Tr(), t = gn(), r = Rt(), n = xr(), o = hn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return yt = function(c, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(S) {
      var u = S && (p && S[p] || S[m]);
      if (typeof u == "function")
        return u;
    }
    var y = "<<anonymous>>", T = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: M(),
      arrayOf: V,
      element: A(),
      elementType: v(),
      instanceOf: R,
      node: ie(),
      objectOf: J,
      oneOf: W,
      oneOfType: F,
      shape: i,
      exact: _
    };
    function h(S, u) {
      return S === u ? S !== 0 || 1 / S === 1 / u : S !== S && u !== u;
    }
    function l(S, u) {
      this.message = S, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function x(S) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, O = 0;
      function N(w, P, C, k, D, L, U) {
        if (k = k || y, L = L || C, U !== r) {
          if (f) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = k + ":" + C;
            !u[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[fe] = !0, O++);
          }
        }
        return P[C] == null ? w ? P[C] === null ? new l("The " + D + " `" + L + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new l("The " + D + " `" + L + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : S(P, C, k, D, L);
      }
      var b = N.bind(null, !1);
      return b.isRequired = N.bind(null, !0), b;
    }
    function B(S) {
      function u(O, N, b, w, P, C) {
        var k = O[N], D = j(k);
        if (D !== S) {
          var L = Q(k);
          return new l(
            "Invalid " + w + " `" + P + "` of type " + ("`" + L + "` supplied to `" + b + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return x(u);
    }
    function M() {
      return x(s);
    }
    function V(S) {
      function u(O, N, b, w, P) {
        if (typeof S != "function")
          return new l("Property `" + P + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var C = O[N];
        if (!Array.isArray(C)) {
          var k = j(C);
          return new l("Invalid " + w + " `" + P + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected an array."));
        }
        for (var D = 0; D < C.length; D++) {
          var L = S(C, D, b, w, P + "[" + D + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return x(u);
    }
    function A() {
      function S(u, O, N, b, w) {
        var P = u[O];
        if (!c(P)) {
          var C = j(P);
          return new l("Invalid " + b + " `" + w + "` of type " + ("`" + C + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(S);
    }
    function v() {
      function S(u, O, N, b, w) {
        var P = u[O];
        if (!e.isValidElementType(P)) {
          var C = j(P);
          return new l("Invalid " + b + " `" + w + "` of type " + ("`" + C + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(S);
    }
    function R(S) {
      function u(O, N, b, w, P) {
        if (!(O[N] instanceof S)) {
          var C = S.name || y, k = ue(O[N]);
          return new l("Invalid " + w + " `" + P + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return x(u);
    }
    function W(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function u(O, N, b, w, P) {
        for (var C = O[N], k = 0; k < S.length; k++)
          if (h(C, S[k]))
            return null;
        var D = JSON.stringify(S, function(U, $) {
          var fe = Q($);
          return fe === "symbol" ? String($) : $;
        });
        return new l("Invalid " + w + " `" + P + "` of value `" + String(C) + "` " + ("supplied to `" + b + "`, expected one of " + D + "."));
      }
      return x(u);
    }
    function J(S) {
      function u(O, N, b, w, P) {
        if (typeof S != "function")
          return new l("Property `" + P + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var C = O[N], k = j(C);
        if (k !== "object")
          return new l("Invalid " + w + " `" + P + "` of type " + ("`" + k + "` supplied to `" + b + "`, expected an object."));
        for (var D in C)
          if (n(C, D)) {
            var L = S(C, D, b, w, P + "." + D, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return x(u);
    }
    function F(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var u = 0; u < S.length; u++) {
        var O = S[u];
        if (typeof O != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(O) + " at index " + u + "."
          ), s;
      }
      function N(b, w, P, C, k) {
        for (var D = [], L = 0; L < S.length; L++) {
          var U = S[L], $ = U(b, w, P, C, k, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && D.push($.data.expectedType);
        }
        var fe = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new l("Invalid " + C + " `" + k + "` supplied to " + ("`" + P + "`" + fe + "."));
      }
      return x(N);
    }
    function ie() {
      function S(u, O, N, b, w) {
        return E(u[O]) ? null : new l("Invalid " + b + " `" + w + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return x(S);
    }
    function Y(S, u, O, N, b) {
      return new l(
        (S || "React class") + ": " + u + " type `" + O + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function i(S) {
      function u(O, N, b, w, P) {
        var C = O[N], k = j(C);
        if (k !== "object")
          return new l("Invalid " + w + " `" + P + "` of type `" + k + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var D in S) {
          var L = S[D];
          if (typeof L != "function")
            return Y(b, w, P, D, Q(L));
          var U = L(C, D, b, w, P + "." + D, r);
          if (U)
            return U;
        }
        return null;
      }
      return x(u);
    }
    function _(S) {
      function u(O, N, b, w, P) {
        var C = O[N], k = j(C);
        if (k !== "object")
          return new l("Invalid " + w + " `" + P + "` of type `" + k + "` " + ("supplied to `" + b + "`, expected `object`."));
        var D = t({}, O[N], S);
        for (var L in D) {
          var U = S[L];
          if (n(S, L) && typeof U != "function")
            return Y(b, w, P, L, Q(U));
          if (!U)
            return new l(
              "Invalid " + w + " `" + P + "` key `" + L + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(O[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var $ = U(C, L, b, w, P + "." + L, r);
          if ($)
            return $;
        }
        return null;
      }
      return x(u);
    }
    function E(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(E);
          if (S === null || c(S))
            return !0;
          var u = g(S);
          if (u) {
            var O = u.call(S), N;
            if (u !== S.entries) {
              for (; !(N = O.next()).done; )
                if (!E(N.value))
                  return !1;
            } else
              for (; !(N = O.next()).done; ) {
                var b = N.value;
                if (b && !E(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(S, u) {
      return S === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function j(S) {
      var u = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : I(u, S) ? "symbol" : u;
    }
    function Q(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var u = j(S);
      if (u === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ne(S) {
      var u = Q(S);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function ue(S) {
      return !S.constructor || !S.constructor.name ? y : S.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, yt;
}
var bt, Zt;
function bn() {
  if (Zt) return bt;
  Zt = 1;
  var e = Rt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bt = function() {
    function n(s, c, f, p, m, g) {
      if (g !== e) {
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
    var a = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, bt;
}
if (process.env.NODE_ENV !== "production") {
  var vn = Tr(), Sn = !0;
  xt.exports = yn()(vn.isElement, Sn);
} else
  xt.exports = bn()();
var En = xt.exports;
const ke = /* @__PURE__ */ Hr(En);
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Tn(e, t) {
  const r = Kr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function xn(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const er = [];
function xe(e) {
  return er[0] = e, dn(er);
}
var Ct = { exports: {} }, H = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Cn() {
  if (tr) return H;
  tr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
  function h(l) {
    if (typeof l == "object" && l !== null) {
      var x = l.$$typeof;
      switch (x) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case f:
            case p:
            case y:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case s:
                case c:
                case g:
                case m:
                  return l;
                case a:
                  return l;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return H.ContextConsumer = a, H.ContextProvider = s, H.Element = e, H.ForwardRef = c, H.Fragment = r, H.Lazy = g, H.Memo = m, H.Portal = t, H.Profiler = o, H.StrictMode = n, H.Suspense = f, H.SuspenseList = p, H.isContextConsumer = function(l) {
    return h(l) === a;
  }, H.isContextProvider = function(l) {
    return h(l) === s;
  }, H.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, H.isForwardRef = function(l) {
    return h(l) === c;
  }, H.isFragment = function(l) {
    return h(l) === r;
  }, H.isLazy = function(l) {
    return h(l) === g;
  }, H.isMemo = function(l) {
    return h(l) === m;
  }, H.isPortal = function(l) {
    return h(l) === t;
  }, H.isProfiler = function(l) {
    return h(l) === o;
  }, H.isStrictMode = function(l) {
    return h(l) === n;
  }, H.isSuspense = function(l) {
    return h(l) === f;
  }, H.isSuspenseList = function(l) {
    return h(l) === p;
  }, H.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === f || l === p || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === m || l.$$typeof === s || l.$$typeof === a || l.$$typeof === c || l.$$typeof === T || l.getModuleId !== void 0);
  }, H.typeOf = h, H;
}
var X = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function wn() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var x = l.$$typeof;
        switch (x) {
          case t:
            switch (l = l.type, l) {
              case n:
              case a:
              case o:
              case p:
              case m:
              case T:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case f:
                  case y:
                  case g:
                    return l;
                  case s:
                    return l;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), T = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    X.ContextConsumer = s, X.ContextProvider = c, X.Element = t, X.ForwardRef = f, X.Fragment = n, X.Lazy = y, X.Memo = g, X.Portal = r, X.Profiler = a, X.StrictMode = o, X.Suspense = p, X.SuspenseList = m, X.isContextConsumer = function(l) {
      return e(l) === s;
    }, X.isContextProvider = function(l) {
      return e(l) === c;
    }, X.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, X.isForwardRef = function(l) {
      return e(l) === f;
    }, X.isFragment = function(l) {
      return e(l) === n;
    }, X.isLazy = function(l) {
      return e(l) === y;
    }, X.isMemo = function(l) {
      return e(l) === g;
    }, X.isPortal = function(l) {
      return e(l) === r;
    }, X.isProfiler = function(l) {
      return e(l) === a;
    }, X.isStrictMode = function(l) {
      return e(l) === o;
    }, X.isSuspense = function(l) {
      return e(l) === p;
    }, X.isSuspenseList = function(l) {
      return e(l) === m;
    }, X.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === a || l === o || l === p || l === m || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === g || l.$$typeof === c || l.$$typeof === s || l.$$typeof === f || l.$$typeof === h || l.getModuleId !== void 0);
    }, X.typeOf = e;
  }()), X;
}
process.env.NODE_ENV === "production" ? Ct.exports = Cn() : Ct.exports = wn();
var Ke = Ct.exports;
function me(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Cr(e) {
  if (/* @__PURE__ */ vr.isValidElement(e) || Ke.isValidElementType(e) || !me(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Cr(e[r]);
  }), t;
}
function se(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return me(e) && me(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ vr.isValidElement(t[o]) || Ke.isValidElementType(t[o]) ? n[o] = t[o] : me(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && me(e[o]) ? n[o] = se(e[o], t[o], r) : r.clone ? n[o] = me(t[o]) ? Cr(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const _n = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function On(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, a = _n(t), s = Object.keys(a);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function f(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function p(y, T) {
    const h = s.indexOf(T);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : T) - n / 100}${r})`;
  }
  function m(y) {
    return s.indexOf(y) + 1 < s.length ? p(y, s[s.indexOf(y) + 1]) : c(y);
  }
  function g(y) {
    const T = s.indexOf(y);
    return T === 0 ? c(s[1]) : T === s.length - 1 ? f(s[T]) : p(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: c,
    down: f,
    between: p,
    only: m,
    not: g,
    unit: r,
    ...o
  };
}
function nr(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, c;
    const a = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(a)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(a)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const a = t[o];
    return delete n[o], n[o] = a, n;
  }, {
    ...t
  }) : t;
}
function $n(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function An(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ye(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function Rn(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...c) => t(e.breakpoints.up(...c), s), a.down = (...c) => t(e.breakpoints.down(...c), s), a.between = (...c) => t(e.breakpoints.between(...c), s), a.only = (...c) => t(e.breakpoints.only(...c), s), a.not = (...c) => {
      const f = t(e.breakpoints.not(...c), s);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Pn = {
  borderRadius: 4
}, ve = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.number, ke.string, ke.object, ke.array]) : {};
function Me(e, t) {
  return t ? se(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xe = {
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
}, or = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xe[e]}px)`
}, kn = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Xe[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ge(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || or;
    return t.reduce((s, c, f) => (s[a.up(a.keys[f])] = r(t[f]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || or;
    return Object.keys(t).reduce((s, c) => {
      if ($n(a.keys, c)) {
        const f = An(n.containerQueries ? n : kn, c);
        f && (s[f] = r(t[c], c));
      } else if (Object.keys(a.values || Xe).includes(c)) {
        const f = a.up(c);
        s[f] = r(t[c], c);
      } else {
        const f = c;
        s[f] = t[f];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Nn(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function ir(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Pt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Je(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function He(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Je(e, r) || n, t && (o = t(o, n, e)), o;
}
function re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], f = s.theme, p = Je(f, n) || {};
    return ge(s, c, (g) => {
      let y = He(p, o, g);
      return g === y && typeof g == "string" && (y = He(p, o, `${t}${g === "default" ? "" : Pt(g)}`, g)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ve
  } : {}, a.filterProps = [t], a;
}
function In(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Dn = {
  m: "margin",
  p: "padding"
}, Mn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ar = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jn = In((e) => {
  if (e.length > 2)
    if (ar[e])
      e = ar[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Dn[t], o = Mn[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Qe = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ze = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Bn = [...Qe, ...Ze];
function Be(e, t, r, n) {
  const o = Je(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? o.startsWith("var(") && a === 0 ? 0 : o.startsWith("var(") && a === 1 ? o : `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return a >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function kt(e) {
  return Be(e, "spacing", 8, "spacing");
}
function Ve(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Vn(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ve(t, r), n), {});
}
function Ln(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = jn(r), a = Vn(o, n), s = e[r];
  return ge(e, s, a);
}
function wr(e, t) {
  const r = kt(e.theme);
  return Object.keys(e).map((n) => Ln(e, t, n, r)).reduce(Me, {});
}
function ee(e) {
  return wr(e, Qe);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Qe.reduce((e, t) => (e[t] = ve, e), {}) : {};
ee.filterProps = Qe;
function te(e) {
  return wr(e, Ze);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Ze.reduce((e, t) => (e[t] = ve, e), {}) : {};
te.filterProps = Ze;
process.env.NODE_ENV !== "production" && Bn.reduce((e, t) => (e[t] = ve, e), {});
function _r(e = 8, t = kt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function et(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? Me(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ce(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function le(e, t) {
  return re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Fn = le("border", ce), Wn = le("borderTop", ce), Un = le("borderRight", ce), Yn = le("borderBottom", ce), zn = le("borderLeft", ce), Gn = le("borderColor"), qn = le("borderTopColor"), Kn = le("borderRightColor"), Hn = le("borderBottomColor"), Xn = le("borderLeftColor"), Jn = le("outline", ce), Qn = le("outlineColor"), tt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Be(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ve(t, n)
    });
    return ge(e, e.borderRadius, r);
  }
  return null;
};
tt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ve
} : {};
tt.filterProps = ["borderRadius"];
et(Fn, Wn, Un, Yn, zn, Gn, qn, Kn, Hn, Xn, tt, Jn, Qn);
const rt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Be(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ve(t, n)
    });
    return ge(e, e.gap, r);
  }
  return null;
};
rt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ve
} : {};
rt.filterProps = ["gap"];
const nt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Be(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ve(t, n)
    });
    return ge(e, e.columnGap, r);
  }
  return null;
};
nt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ve
} : {};
nt.filterProps = ["columnGap"];
const ot = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Be(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ve(t, n)
    });
    return ge(e, e.rowGap, r);
  }
  return null;
};
ot.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ve
} : {};
ot.filterProps = ["rowGap"];
const Zn = re({
  prop: "gridColumn"
}), eo = re({
  prop: "gridRow"
}), to = re({
  prop: "gridAutoFlow"
}), ro = re({
  prop: "gridAutoColumns"
}), no = re({
  prop: "gridAutoRows"
}), oo = re({
  prop: "gridTemplateColumns"
}), io = re({
  prop: "gridTemplateRows"
}), ao = re({
  prop: "gridTemplateAreas"
}), so = re({
  prop: "gridArea"
});
et(rt, nt, ot, Zn, eo, to, ro, no, oo, io, ao, so);
function Ae(e, t) {
  return t === "grey" ? t : e;
}
const co = re({
  prop: "color",
  themeKey: "palette",
  transform: Ae
}), lo = re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ae
}), uo = re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ae
});
et(co, lo, uo);
function ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fo = re({
  prop: "width",
  transform: ae
}), Nt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, c, f;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || Xe[r];
      return n ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ae(r)
      };
    };
    return ge(e, e.maxWidth, t);
  }
  return null;
};
Nt.filterProps = ["maxWidth"];
const po = re({
  prop: "minWidth",
  transform: ae
}), mo = re({
  prop: "height",
  transform: ae
}), go = re({
  prop: "maxHeight",
  transform: ae
}), ho = re({
  prop: "minHeight",
  transform: ae
});
re({
  prop: "size",
  cssProperty: "width",
  transform: ae
});
re({
  prop: "size",
  cssProperty: "height",
  transform: ae
});
const yo = re({
  prop: "boxSizing"
});
et(fo, Nt, po, mo, go, ho, yo);
const it = {
  // borders
  border: {
    themeKey: "borders",
    transform: ce
  },
  borderTop: {
    themeKey: "borders",
    transform: ce
  },
  borderRight: {
    themeKey: "borders",
    transform: ce
  },
  borderBottom: {
    themeKey: "borders",
    transform: ce
  },
  borderLeft: {
    themeKey: "borders",
    transform: ce
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
    transform: ce
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: tt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ae
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ae
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ae
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
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
    style: rt
  },
  rowGap: {
    style: ot
  },
  columnGap: {
    style: nt
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
    transform: ae
  },
  maxWidth: {
    style: Nt
  },
  minWidth: {
    transform: ae
  },
  height: {
    transform: ae
  },
  maxHeight: {
    transform: ae
  },
  minHeight: {
    transform: ae
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
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
function bo(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function vo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function So() {
  function e(r, n, o, a) {
    const s = {
      [r]: n,
      theme: o
    }, c = a[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: p,
      transform: m,
      style: g
    } = c;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = Je(o, p) || {};
    return g ? g(s) : ge(s, n, (h) => {
      let l = He(y, m, h);
      return h === l && typeof h == "string" && (l = He(y, m, `${r}${h === "default" ? "" : Pt(h)}`, h)), f === !1 ? l : {
        [f]: l
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: a
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? it;
    function c(f) {
      let p = f;
      if (typeof f == "function")
        p = f(o);
      else if (typeof f != "object")
        return f;
      if (!p)
        return null;
      const m = Nn(o.breakpoints), g = Object.keys(m);
      let y = m;
      return Object.keys(p).forEach((T) => {
        const h = vo(p[T], o);
        if (h != null)
          if (typeof h == "object")
            if (s[T])
              y = Me(y, e(T, h, o, s));
            else {
              const l = ge({
                theme: o
              }, h, (x) => ({
                [T]: x
              }));
              bo(l, h) ? y[T] = t({
                sx: h,
                theme: o,
                nested: !0
              }) : y = Me(y, l);
            }
          else
            y = Me(y, e(T, h, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": nr(o, ir(g, y))
      } : nr(o, ir(g, y));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const Re = So();
Re.filterProps = ["sx"];
function Eo(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Or(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, c = On(r), f = _r(o);
  let p = se({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Pn,
      ...a
    }
  }, s);
  return p = Rn(p), p.applyStyles = Eo, p = t.reduce((m, g) => se(m, g), p), p.unstable_sxConfig = {
    ...it,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, p.unstable_sx = function(g) {
    return Re({
      sx: g,
      theme: this
    });
  }, p;
}
const sr = (e) => e, To = () => {
  let e = sr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = sr;
    }
  };
}, xo = To(), Co = {
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
function wo(e, t, r = "Mui") {
  const n = Co[t];
  return n ? `${r}-${n}` : `${xo.generate(e)}-${t}`;
}
function $r(e, t = "") {
  return e.displayName || e.name || t;
}
function cr(e, t, r) {
  const n = $r(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function _o(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $r(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ke.ForwardRef:
          return cr(e, e.render, "ForwardRef");
        case Ke.Memo:
          return cr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Oo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: xe(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = xe(o.style));
  }), n;
}
const $o = Or();
function vt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Te(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Ao(e) {
  return e ? (t, r) => r[e] : null;
}
function Ro(e, t, r) {
  e.theme = Io(e.theme) ? r : e.theme[t] || e.theme;
}
function ze(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => ze(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Te(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? Te(xe(s), r) : s;
    }
    return Ar(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? Te(xe(n.style), r) : n.style : r ? Te(xe(n), r) : n;
}
function Ar(e, t, r = [], n = void 0) {
  var a;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const c = t[s];
    if (typeof c.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !c.props(o))
        continue;
    } else
      for (const f in c.props)
        if (e[f] !== c.props[f] && ((a = e.ownerState) == null ? void 0 : a[f]) !== c.props[f])
          continue e;
    typeof c.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? Te(xe(c.style(o)), n) : c.style(o))) : r.push(n ? Te(xe(c.style), n) : c.style);
  }
  return r;
}
function Po(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = $o,
    rootShouldForwardProp: n = vt,
    slotShouldForwardProp: o = vt
  } = e;
  function a(c) {
    Ro(c, t, r);
  }
  return (c, f = {}) => {
    xn(c, (R) => R.filter((W) => W !== Re));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: g,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: T = Ao(Rr(m)),
      ...h
    } = f, l = p && p.startsWith("Mui") || m ? "components" : "custom", x = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), B = y || !1;
    let M = vt;
    m === "Root" || m === "root" ? M = n : m ? M = o : Do(c) && (M = void 0);
    const V = Tn(c, {
      shouldForwardProp: M,
      label: No(p, m),
      ...h
    }), A = (R) => {
      if (R.__emotion_real === R)
        return R;
      if (typeof R == "function")
        return function(J) {
          return ze(J, R, J.theme.modularCssLayers ? l : void 0);
        };
      if (me(R)) {
        const W = Oo(R);
        return function(F) {
          return W.variants ? ze(F, W, F.theme.modularCssLayers ? l : void 0) : F.theme.modularCssLayers ? Te(W.style, l) : W.style;
        };
      }
      return R;
    }, v = (...R) => {
      const W = [], J = R.map(A), F = [];
      if (W.push(a), p && T && F.push(function(_) {
        var Q, ne;
        const I = (ne = (Q = _.theme.components) == null ? void 0 : Q[p]) == null ? void 0 : ne.styleOverrides;
        if (!I)
          return null;
        const j = {};
        for (const ue in I)
          j[ue] = ze(_, I[ue], _.theme.modularCssLayers ? "theme" : void 0);
        return T(_, j);
      }), p && !x && F.push(function(_) {
        var j, Q;
        const E = _.theme, I = (Q = (j = E == null ? void 0 : E.components) == null ? void 0 : j[p]) == null ? void 0 : Q.variants;
        return I ? Ar(_, I, [], _.theme.modularCssLayers ? "theme" : void 0) : null;
      }), B || F.push(Re), Array.isArray(J[0])) {
        const i = J.shift(), _ = new Array(W.length).fill(""), E = new Array(F.length).fill("");
        let I;
        I = [..._, ...i, ...E], I.raw = [..._, ...i.raw, ...E], W.unshift(I);
      }
      const ie = [...W, ...J, ...F], Y = V(...ie);
      return c.muiName && (Y.muiName = c.muiName), process.env.NODE_ENV !== "production" && (Y.displayName = ko(p, m, c)), Y;
    };
    return V.withConfig && (v.withConfig = V.withConfig), v;
  };
}
function ko(e, t, r) {
  return e ? `${e}${Pt(t || "")}` : `Styled(${_o(r)})`;
}
function No(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Rr(t || "Root")}`), r;
}
function Io(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Do(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Rr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Mo(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function It(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Mo(e, t, r);
}
function jo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function be(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return be(jo(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ye(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ye(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Bo = (e) => {
  const t = be(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ie = (e, t) => {
  try {
    return Bo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function at(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Pr(e) {
  e = be(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (p, m = (p + r / 30) % 12) => o - a * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(t[3])), at({
    type: c,
    values: f
  });
}
function wt(e) {
  e = be(e);
  let t = e.type === "hsl" || e.type === "hsla" ? be(Pr(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function lr(e, t) {
  const r = wt(e), n = wt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function kr(e, t) {
  return e = be(e), t = It(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, at(e);
}
function Ee(e, t, r) {
  try {
    return kr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function st(e, t) {
  if (e = be(e), t = It(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return at(e);
}
function q(e, t, r) {
  try {
    return st(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ct(e, t) {
  if (e = be(e), t = It(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return at(e);
}
function K(e, t, r) {
  try {
    return ct(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Vo(e, t = 0.15) {
  return wt(e) > 0.5 ? st(e, t) : ct(e, t);
}
function Ye(e, t, r) {
  try {
    return Vo(e, t);
  } catch {
    return e;
  }
}
function Lo(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ur = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, Fo = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!r || r && !r([...a, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...a, c], Array.isArray(f) ? [...s, c] : s) : t([...a, c], f, s));
    });
  }
  n(e);
}, Wo = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function St(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return Fo(
    e,
    (c, f, p) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(c, f))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, g = Wo(c, f);
        Object.assign(o, {
          [m]: g
        }), ur(a, c, `var(${m})`, p), ur(s, c, `var(${m}, ${g})`, p);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: s
  };
}
function Uo(e, t = {}) {
  const {
    getSelector: r = B,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: f = "light",
    ...p
  } = e, {
    vars: m,
    css: g,
    varsWithDefaults: y
  } = St(p, t);
  let T = y;
  const h = {}, {
    [f]: l,
    ...x
  } = s;
  if (Object.entries(x || {}).forEach(([A, v]) => {
    const {
      vars: R,
      css: W,
      varsWithDefaults: J
    } = St(v, t);
    T = se(T, J), h[A] = {
      css: W,
      vars: R
    };
  }), l) {
    const {
      css: A,
      vars: v,
      varsWithDefaults: R
    } = St(l, t);
    T = se(T, R), h[f] = {
      css: A,
      vars: v
    };
  }
  function B(A, v) {
    var W, J;
    let R = o;
    if (o === "class" && (R = ".%s"), o === "data" && (R = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (R = `[${o}="%s"]`), A) {
      if (R === "media")
        return e.defaultColorScheme === A ? ":root" : {
          [`@media (prefers-color-scheme: ${((J = (W = s[A]) == null ? void 0 : W.palette) == null ? void 0 : J.mode) || A})`]: {
            ":root": v
          }
        };
      if (R)
        return e.defaultColorScheme === A ? `:root, ${R.replace("%s", String(A))}` : R.replace("%s", String(A));
    }
    return ":root";
  }
  return {
    vars: T,
    generateThemeVars: () => {
      let A = {
        ...m
      };
      return Object.entries(h).forEach(([, {
        vars: v
      }]) => {
        A = se(A, v);
      }), A;
    },
    generateStyleSheets: () => {
      var F, ie;
      const A = [], v = e.defaultColorScheme || "light";
      function R(Y, i) {
        Object.keys(i).length && A.push(typeof Y == "string" ? {
          [Y]: {
            ...i
          }
        } : Y);
      }
      R(r(void 0, {
        ...g
      }), g);
      const {
        [v]: W,
        ...J
      } = h;
      if (W) {
        const {
          css: Y
        } = W, i = (ie = (F = s[v]) == null ? void 0 : F.palette) == null ? void 0 : ie.mode, _ = !n && i ? {
          colorScheme: i,
          ...Y
        } : {
          ...Y
        };
        R(r(v, {
          ..._
        }), _);
      }
      return Object.entries(J).forEach(([Y, {
        css: i
      }]) => {
        var I, j;
        const _ = (j = (I = s[Y]) == null ? void 0 : I.palette) == null ? void 0 : j.mode, E = !n && _ ? {
          colorScheme: _,
          ...i
        } : {
          ...i
        };
        R(r(Y, {
          ...E
        }), E);
      }), a && A.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), A;
    }
  };
}
function Yo(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const je = {
  black: "#000",
  white: "#fff"
}, zo = {
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
}, Ce = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, we = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ne = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, _e = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Oe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, $e = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Nr() {
  return {
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
      paper: je.white,
      default: je.white
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
  };
}
const Ir = Nr();
function Dr() {
  return {
    text: {
      primary: je.white,
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
      active: je.white,
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
}
const _t = Dr();
function fr(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ct(e.main, o) : t === "dark" && (e.dark = st(e.main, a)));
}
function dr(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Go(e = "light") {
  return e === "dark" ? {
    main: _e[200],
    light: _e[50],
    dark: _e[400]
  } : {
    main: _e[700],
    light: _e[400],
    dark: _e[800]
  };
}
function qo(e = "light") {
  return e === "dark" ? {
    main: Ce[200],
    light: Ce[50],
    dark: Ce[400]
  } : {
    main: Ce[500],
    light: Ce[300],
    dark: Ce[700]
  };
}
function Ko(e = "light") {
  return e === "dark" ? {
    main: we[500],
    light: we[300],
    dark: we[700]
  } : {
    main: we[700],
    light: we[400],
    dark: we[800]
  };
}
function Ho(e = "light") {
  return e === "dark" ? {
    main: Oe[400],
    light: Oe[300],
    dark: Oe[700]
  } : {
    main: Oe[700],
    light: Oe[500],
    dark: Oe[900]
  };
}
function Xo(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[800],
    light: $e[500],
    dark: $e[900]
  };
}
function Jo(e = "light") {
  return e === "dark" ? {
    main: Ne[400],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ne[500],
    dark: Ne[900]
  };
}
function Qo(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Dt(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Go(t), c = e.secondary || qo(t), f = e.error || Ko(t), p = e.info || Ho(t), m = e.success || Xo(t), g = e.warning || Jo(t);
  function y(x) {
    if (o)
      return Qo(x);
    const B = lr(x, _t.text.primary) >= r ? _t.text.primary : Ir.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const M = lr(x, B);
      M < 3 && console.error([`MUI: The contrast ratio of ${M}:1 for ${B} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return B;
  }
  const T = ({
    color: x,
    name: B,
    mainShade: M = 500,
    lightShade: V = 300,
    darkShade: A = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[M] && (x.main = x[M]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${B ? ` (${B})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${M}\` property.` : ye(11, B ? ` (${B})` : "", M));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${B ? ` (${B})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ye(12, B ? ` (${B})` : "", JSON.stringify(x.main)));
    return o ? (dr(o, x, "light", V, n), dr(o, x, "dark", A, n)) : (fr(x, "light", V, n), fr(x, "dark", A, n)), x.contrastText || (x.contrastText = y(x.main)), x;
  };
  let h;
  return t === "light" ? h = Nr() : t === "dark" && (h = Dr()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), se({
    // A collection of common colors.
    common: {
      ...je
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: T({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: T({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: T({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: T({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: T({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: T({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: zo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: T,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...h
  }, a);
}
function Zo(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function ei(e, t) {
  return {
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
    },
    ...t
  };
}
function ti(e) {
  return Math.round(e * 1e5) / 1e5;
}
const pr = {
  textTransform: "uppercase"
}, mr = '"Roboto", "Helvetica", "Arial", sans-serif';
function ri(e, t) {
  const {
    fontFamily: r = mr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: m,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, T = m || ((x) => `${x / f * y}rem`), h = (x, B, M, V, A) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: T(B),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === mr ? {
      letterSpacing: `${ti(V / B)}em`
    } : {},
    ...A,
    ...p
  }), l = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(a, 48, 1.167, 0),
    h4: h(a, 34, 1.235, 0.25),
    h5: h(a, 24, 1.334, 0),
    h6: h(s, 20, 1.6, 0.15),
    subtitle1: h(a, 16, 1.75, 0.15),
    subtitle2: h(s, 14, 1.57, 0.1),
    body1: h(a, 16, 1.5, 0.15),
    body2: h(a, 14, 1.43, 0.15),
    button: h(s, 14, 1.75, 0.4, pr),
    caption: h(a, 12, 1.66, 0.4),
    overline: h(a, 12, 2.66, 1, pr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return se({
    htmlFontSize: f,
    pxToRem: T,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...l
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const ni = 0.2, oi = 0.14, ii = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ni})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oi})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ii})`].join(",");
}
const ai = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], si = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ci = {
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
function gr(e) {
  return `${Math.round(e)}ms`;
}
function li(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ui(e) {
  const t = {
    ...si,
    ...e.easing
  }, r = {
    ...ci,
    ...e.duration
  };
  return {
    getAutoHeightDuration: li,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: f = 0,
        ...p
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", g = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !g(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : gr(s)} ${c} ${typeof f == "string" ? f : gr(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const fi = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function di(e) {
  return me(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Mr(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, c] = o[a];
      !di(c) || s.startsWith("unstable_") ? delete n[s] : me(c) && (n[s] = {
        ...c
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function hr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const pi = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function mi(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : kr(t, pi(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${hr(r)})` : ct(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${hr(r)})` : st(t, r);
    }
  });
}
function Ot(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: c = {},
    shape: f,
    colorSpace: p,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ye(20));
  const g = Dt({
    ...a,
    colorSpace: p
  }), y = Or(e);
  let T = se(y, {
    mixins: ei(y.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ai.slice(),
    typography: ri(g, c),
    transitions: ui(s),
    zIndex: {
      ...fi
    }
  });
  if (T = se(T, m), T = t.reduce((h, l) => se(h, l), T), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (x, B) => {
      let M;
      for (M in x) {
        const V = x[M];
        if (h.includes(M) && Object.keys(V).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const A = wo("", M);
            console.error([`MUI: The \`${B}\` component increases the CSS specificity of the \`${M}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${A}' syntax:`, JSON.stringify({
              root: {
                [`&.${A}`]: V
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[M] = {};
        }
      }
    };
    Object.keys(T.components).forEach((x) => {
      const B = T.components[x].styleOverrides;
      B && x.startsWith("Mui") && l(B, x);
    });
  }
  return T.unstable_sxConfig = {
    ...it,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, T.unstable_sx = function(l) {
    return Re({
      sx: l,
      theme: this
    });
  }, T.toRuntimeSource = Mr, mi(T), T;
}
function gi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hi = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = gi(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function jr(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Br(e) {
  return e === "dark" ? hi : [];
}
function yi(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = Dt({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...jr(s.mode),
      ...r
    },
    overlays: n || Br(s.mode),
    ...a
  };
}
function bi(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const vi = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Si = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return vi(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
      }), a === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${n}, ${a.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${n}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return n;
};
function Ei(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function d(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function De(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Pr(e);
}
function pe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ie(De(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ti(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const de = (e) => {
  try {
    return e();
  } catch {
  }
}, xi = (e = "mui") => Lo(e);
function Et(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = yi({
      ...r,
      palette: {
        mode: a,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...c
  } = Ot({
    ...n,
    palette: {
      mode: a,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...jr(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Br(a)
  }, c;
}
function Ci(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = bi,
    colorSchemeSelector: f = r.light && r.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...m
  } = e, g = Object.keys(r)[0], y = n || (r.light && g !== "light" ? "light" : g), T = xi(a), {
    [y]: h,
    light: l,
    dark: x,
    ...B
  } = r, M = {
    ...B
  };
  let V = h;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (V = !0), !V)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : ye(21, y));
  let A;
  s && (A = "oklch");
  const v = Et(A, M, V, m, y);
  l && !M.light && Et(A, M, l, void 0, "light"), x && !M.dark && Et(A, M, x, void 0, "dark");
  let R = {
    defaultColorScheme: y,
    ...v,
    cssVarPrefix: a,
    colorSchemeSelector: f,
    rootSelector: p,
    getCssVar: T,
    colorSchemes: M,
    font: {
      ...Zo(v.typography),
      ...v.font
    },
    spacing: Ti(m.spacing)
  };
  Object.keys(R.colorSchemes).forEach((Y) => {
    const i = R.colorSchemes[Y].palette, _ = (I) => {
      const j = I.split("-"), Q = j[1], ne = j[2];
      return T(I, i[Q][ne]);
    };
    i.mode === "light" && (d(i.common, "background", "#fff"), d(i.common, "onBackground", "#000")), i.mode === "dark" && (d(i.common, "background", "#000"), d(i.common, "onBackground", "#fff"));
    function E(I, j, Q) {
      if (A) {
        let ne;
        return I === Ee && (ne = `transparent ${((1 - Q) * 100).toFixed(0)}%`), I === q && (ne = `#000 ${(Q * 100).toFixed(0)}%`), I === K && (ne = `#fff ${(Q * 100).toFixed(0)}%`), `color-mix(in ${A}, ${j}, ${ne})`;
      }
      return I(j, Q);
    }
    if (Ei(i, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), i.mode === "light") {
      d(i.Alert, "errorColor", E(q, i.error.light, 0.6)), d(i.Alert, "infoColor", E(q, i.info.light, 0.6)), d(i.Alert, "successColor", E(q, i.success.light, 0.6)), d(i.Alert, "warningColor", E(q, i.warning.light, 0.6)), d(i.Alert, "errorFilledBg", _("palette-error-main")), d(i.Alert, "infoFilledBg", _("palette-info-main")), d(i.Alert, "successFilledBg", _("palette-success-main")), d(i.Alert, "warningFilledBg", _("palette-warning-main")), d(i.Alert, "errorFilledColor", de(() => i.getContrastText(i.error.main))), d(i.Alert, "infoFilledColor", de(() => i.getContrastText(i.info.main))), d(i.Alert, "successFilledColor", de(() => i.getContrastText(i.success.main))), d(i.Alert, "warningFilledColor", de(() => i.getContrastText(i.warning.main))), d(i.Alert, "errorStandardBg", E(K, i.error.light, 0.9)), d(i.Alert, "infoStandardBg", E(K, i.info.light, 0.9)), d(i.Alert, "successStandardBg", E(K, i.success.light, 0.9)), d(i.Alert, "warningStandardBg", E(K, i.warning.light, 0.9)), d(i.Alert, "errorIconColor", _("palette-error-main")), d(i.Alert, "infoIconColor", _("palette-info-main")), d(i.Alert, "successIconColor", _("palette-success-main")), d(i.Alert, "warningIconColor", _("palette-warning-main")), d(i.AppBar, "defaultBg", _("palette-grey-100")), d(i.Avatar, "defaultBg", _("palette-grey-400")), d(i.Button, "inheritContainedBg", _("palette-grey-300")), d(i.Button, "inheritContainedHoverBg", _("palette-grey-A100")), d(i.Chip, "defaultBorder", _("palette-grey-400")), d(i.Chip, "defaultAvatarColor", _("palette-grey-700")), d(i.Chip, "defaultIconColor", _("palette-grey-700")), d(i.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), d(i.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), d(i.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), d(i.LinearProgress, "primaryBg", E(K, i.primary.main, 0.62)), d(i.LinearProgress, "secondaryBg", E(K, i.secondary.main, 0.62)), d(i.LinearProgress, "errorBg", E(K, i.error.main, 0.62)), d(i.LinearProgress, "infoBg", E(K, i.info.main, 0.62)), d(i.LinearProgress, "successBg", E(K, i.success.main, 0.62)), d(i.LinearProgress, "warningBg", E(K, i.warning.main, 0.62)), d(i.Skeleton, "bg", A ? E(Ee, i.text.primary, 0.11) : `rgba(${_("palette-text-primaryChannel")} / 0.11)`), d(i.Slider, "primaryTrack", E(K, i.primary.main, 0.62)), d(i.Slider, "secondaryTrack", E(K, i.secondary.main, 0.62)), d(i.Slider, "errorTrack", E(K, i.error.main, 0.62)), d(i.Slider, "infoTrack", E(K, i.info.main, 0.62)), d(i.Slider, "successTrack", E(K, i.success.main, 0.62)), d(i.Slider, "warningTrack", E(K, i.warning.main, 0.62));
      const I = A ? E(q, i.background.default, 0.6825) : Ye(i.background.default, 0.8);
      d(i.SnackbarContent, "bg", I), d(i.SnackbarContent, "color", de(() => A ? _t.text.primary : i.getContrastText(I))), d(i.SpeedDialAction, "fabHoverBg", Ye(i.background.paper, 0.15)), d(i.StepConnector, "border", _("palette-grey-400")), d(i.StepContent, "border", _("palette-grey-400")), d(i.Switch, "defaultColor", _("palette-common-white")), d(i.Switch, "defaultDisabledColor", _("palette-grey-100")), d(i.Switch, "primaryDisabledColor", E(K, i.primary.main, 0.62)), d(i.Switch, "secondaryDisabledColor", E(K, i.secondary.main, 0.62)), d(i.Switch, "errorDisabledColor", E(K, i.error.main, 0.62)), d(i.Switch, "infoDisabledColor", E(K, i.info.main, 0.62)), d(i.Switch, "successDisabledColor", E(K, i.success.main, 0.62)), d(i.Switch, "warningDisabledColor", E(K, i.warning.main, 0.62)), d(i.TableCell, "border", E(K, E(Ee, i.divider, 1), 0.88)), d(i.Tooltip, "bg", E(Ee, i.grey[700], 0.92));
    }
    if (i.mode === "dark") {
      d(i.Alert, "errorColor", E(K, i.error.light, 0.6)), d(i.Alert, "infoColor", E(K, i.info.light, 0.6)), d(i.Alert, "successColor", E(K, i.success.light, 0.6)), d(i.Alert, "warningColor", E(K, i.warning.light, 0.6)), d(i.Alert, "errorFilledBg", _("palette-error-dark")), d(i.Alert, "infoFilledBg", _("palette-info-dark")), d(i.Alert, "successFilledBg", _("palette-success-dark")), d(i.Alert, "warningFilledBg", _("palette-warning-dark")), d(i.Alert, "errorFilledColor", de(() => i.getContrastText(i.error.dark))), d(i.Alert, "infoFilledColor", de(() => i.getContrastText(i.info.dark))), d(i.Alert, "successFilledColor", de(() => i.getContrastText(i.success.dark))), d(i.Alert, "warningFilledColor", de(() => i.getContrastText(i.warning.dark))), d(i.Alert, "errorStandardBg", E(q, i.error.light, 0.9)), d(i.Alert, "infoStandardBg", E(q, i.info.light, 0.9)), d(i.Alert, "successStandardBg", E(q, i.success.light, 0.9)), d(i.Alert, "warningStandardBg", E(q, i.warning.light, 0.9)), d(i.Alert, "errorIconColor", _("palette-error-main")), d(i.Alert, "infoIconColor", _("palette-info-main")), d(i.Alert, "successIconColor", _("palette-success-main")), d(i.Alert, "warningIconColor", _("palette-warning-main")), d(i.AppBar, "defaultBg", _("palette-grey-900")), d(i.AppBar, "darkBg", _("palette-background-paper")), d(i.AppBar, "darkColor", _("palette-text-primary")), d(i.Avatar, "defaultBg", _("palette-grey-600")), d(i.Button, "inheritContainedBg", _("palette-grey-800")), d(i.Button, "inheritContainedHoverBg", _("palette-grey-700")), d(i.Chip, "defaultBorder", _("palette-grey-700")), d(i.Chip, "defaultAvatarColor", _("palette-grey-300")), d(i.Chip, "defaultIconColor", _("palette-grey-300")), d(i.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), d(i.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), d(i.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), d(i.LinearProgress, "primaryBg", E(q, i.primary.main, 0.5)), d(i.LinearProgress, "secondaryBg", E(q, i.secondary.main, 0.5)), d(i.LinearProgress, "errorBg", E(q, i.error.main, 0.5)), d(i.LinearProgress, "infoBg", E(q, i.info.main, 0.5)), d(i.LinearProgress, "successBg", E(q, i.success.main, 0.5)), d(i.LinearProgress, "warningBg", E(q, i.warning.main, 0.5)), d(i.Skeleton, "bg", A ? E(Ee, i.text.primary, 0.13) : `rgba(${_("palette-text-primaryChannel")} / 0.13)`), d(i.Slider, "primaryTrack", E(q, i.primary.main, 0.5)), d(i.Slider, "secondaryTrack", E(q, i.secondary.main, 0.5)), d(i.Slider, "errorTrack", E(q, i.error.main, 0.5)), d(i.Slider, "infoTrack", E(q, i.info.main, 0.5)), d(i.Slider, "successTrack", E(q, i.success.main, 0.5)), d(i.Slider, "warningTrack", E(q, i.warning.main, 0.5));
      const I = A ? E(K, i.background.default, 0.985) : Ye(i.background.default, 0.98);
      d(i.SnackbarContent, "bg", I), d(i.SnackbarContent, "color", de(() => A ? Ir.text.primary : i.getContrastText(I))), d(i.SpeedDialAction, "fabHoverBg", Ye(i.background.paper, 0.15)), d(i.StepConnector, "border", _("palette-grey-600")), d(i.StepContent, "border", _("palette-grey-600")), d(i.Switch, "defaultColor", _("palette-grey-300")), d(i.Switch, "defaultDisabledColor", _("palette-grey-600")), d(i.Switch, "primaryDisabledColor", E(q, i.primary.main, 0.55)), d(i.Switch, "secondaryDisabledColor", E(q, i.secondary.main, 0.55)), d(i.Switch, "errorDisabledColor", E(q, i.error.main, 0.55)), d(i.Switch, "infoDisabledColor", E(q, i.info.main, 0.55)), d(i.Switch, "successDisabledColor", E(q, i.success.main, 0.55)), d(i.Switch, "warningDisabledColor", E(q, i.warning.main, 0.55)), d(i.TableCell, "border", E(q, E(Ee, i.divider, 1), 0.68)), d(i.Tooltip, "bg", E(Ee, i.grey[700], 0.92));
    }
    pe(i.background, "default"), pe(i.background, "paper"), pe(i.common, "background"), pe(i.common, "onBackground"), pe(i, "divider"), Object.keys(i).forEach((I) => {
      const j = i[I];
      I !== "tonalOffset" && j && typeof j == "object" && (j.main && d(i[I], "mainChannel", Ie(De(j.main))), j.light && d(i[I], "lightChannel", Ie(De(j.light))), j.dark && d(i[I], "darkChannel", Ie(De(j.dark))), j.contrastText && d(i[I], "contrastTextChannel", Ie(De(j.contrastText))), I === "text" && (pe(i[I], "primary"), pe(i[I], "secondary")), I === "action" && (j.active && pe(i[I], "active"), j.selected && pe(i[I], "selected")));
    });
  }), R = t.reduce((Y, i) => se(Y, i), R);
  const W = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: Si(R),
    enableContrastVars: s
  }, {
    vars: J,
    generateThemeVars: F,
    generateStyleSheets: ie
  } = Uo(R, W);
  return R.vars = J, Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([Y, i]) => {
    R[Y] = i;
  }), R.generateThemeVars = F, R.generateStyleSheets = ie, R.generateSpacing = function() {
    return _r(m.spacing, kt(this));
  }, R.getColorSchemeSelector = Yo(f), R.spacing = R.generateSpacing(), R.shouldSkipGeneratingVar = c, R.unstable_sxConfig = {
    ...it,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, R.unstable_sx = function(i) {
    return Re({
      sx: i,
      theme: this
    });
  }, R.toRuntimeSource = Mr, R;
}
function yr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Dt({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function wi(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, c = a || "light", f = o == null ? void 0 : o[c], p = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Ot(e, ...t);
    let m = r;
    "palette" in e || p[c] && (p[c] !== !0 ? m = p[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const g = Ot({
      ...e,
      palette: m
    }, ...t);
    return g.defaultColorScheme = c, g.colorSchemes = p, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: g.palette
    }, yr(g, "dark", p.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: g.palette
    }, yr(g, "light", p.light)), g;
  }
  return !r && !("light" in p) && c === "light" && (p.light = !0), Ci({
    ...s,
    colorSchemes: p,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const _i = wi();
function Oi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $i = (e) => Oi(e) && e !== "classes", lt = Po({
  themeId: Qr,
  defaultTheme: _i,
  rootShouldForwardProp: $i
}), Ai = Ur`
	0%, 100% { transform: translateX(0); }
	10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
	20%, 40%, 60%, 80% { transform: translateX(2px); }
`, Ri = lt($t)(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(3),
  padding: e.spacing(3),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "&.shake": {
    animation: `${Ai} 0.5s ease-in-out`
  },
  [e.breakpoints.down("sm")]: {
    padding: e.spacing(2),
    gap: e.spacing(2)
  },
  [e.breakpoints.down("xs")]: {
    padding: e.spacing(1),
    gap: e.spacing(1.5)
  }
})), Pi = lt($t)(({ theme: e }) => ({
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
})), ki = lt(Yr)(({ theme: e }) => ({
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
})), br = lt(zr)(({ theme: e }) => ({
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
})), Bi = ({
  digitCount: e = 6,
  onVerify: t,
  onVerifySuccess: r,
  onVerifyError: n,
  showResend: o = !0,
  onResend: a,
  resendCooldown: s = 60,
  expirationTime: c = 300,
  instructionText: f = "Enter the code sent to your email",
  placeholder: p = "0",
  showExpirationTimer: m = !0
}) => {
  const [g, y] = Se(!1), [T, h] = Se(null), [l, x] = Se(null), [B, M] = Se(!1), [V, A] = Se(0), [v, R] = Se(c), [W, J] = Se(!1), F = Lr([]), { control: ie, handleSubmit: Y, setValue: i, getValues: _, clearErrors: E, reset: I } = Fr({
    defaultValues: {
      otp: ""
    }
  }), j = Pe(async () => {
    try {
      if (!navigator.clipboard) {
        h("Clipboard access not supported in this browser");
        return;
      }
      const w = (await navigator.clipboard.readText()).replace(/\D/g, "");
      if (w.length === 0) {
        h("No valid OTP found in clipboard");
        return;
      }
      if (w.length < e) {
        h(
          `OTP in clipboard is too short. Expected ${e} digits, got ${w.length}`
        );
        return;
      }
      const C = (_("otp") || "").split("");
      for (let U = 0; U < Math.min(w.length, e); U++)
        C[U] = w[U], F.current[U] && (F.current[U].value = w[U]);
      const k = C.join("");
      i("otp", k), E("otp"), h(null), x(null);
      const D = Math.min(w.length, e - 1), L = F.current[D];
      L && L.focus(), x("OTP pasted successfully!"), setTimeout(() => x(null), 2e3);
    } catch (b) {
      const w = b instanceof Error ? b.message : "Failed to read from clipboard";
      h(w), M(!0), setTimeout(() => M(!1), 500);
    }
  }, [e, _, i, E]);
  ut(() => {
    const b = (w) => {
      const C = w.target.closest("[data-otp-component]") !== null, k = document.activeElement, D = k && k.tagName === "INPUT";
      (C || !D) && (w.preventDefault(), j());
    };
    return document.addEventListener("paste", b), () => document.removeEventListener("paste", b);
  }, [j]), ut(() => {
    let b;
    return V > 0 && (b = window.setInterval(() => {
      A((w) => w - 1);
    }, 1e3)), () => clearInterval(b);
  }, [V]), ut(() => {
    let b;
    return v > 0 && m && (b = window.setInterval(() => {
      R((w) => w <= 1 ? (J(!0), 0) : w - 1);
    }, 1e3)), () => clearInterval(b);
  }, [v, m]);
  const Q = (b) => {
    const w = Math.floor(b / 60), P = b % 60;
    return `${w}:${P.toString().padStart(2, "0")}`;
  }, ne = Pe(
    (b, w) => {
      const C = (_("otp") || "").split("");
      for (let U = 0; U < b.length && U < e; U++)
        C[U] = b[U], F.current[U] && (F.current[U].value = b[U]);
      const k = C.join("");
      i("otp", k), w(k);
      const D = Math.min(b.length, e - 1), L = F.current[D];
      L && L.focus();
    },
    [e, _, i]
  ), ue = Pe(
    (b, w, P) => {
      const k = (_("otp") || "").split("");
      k[b] = w;
      const D = k.join("");
      if (i("otp", D), P(D), w && b < e - 1) {
        const L = F.current[b + 1];
        L && L.focus();
      }
    },
    [e, _, i]
  ), S = Pe(
    (b, w, P) => {
      const C = w.replace(/\D/g, "");
      if (C.length > 1) {
        const k = C.slice(0, e);
        ne(k, P);
      } else
        ue(b, C, P);
      E("otp"), h(null), x(null);
    },
    [e, E, ne, ue]
  ), u = Pe(
    (b, w) => {
      if (w.key === "Backspace") {
        const C = (_("otp") || "").split("");
        if (C[b])
          C[b] = "";
        else if (b > 0) {
          C[b - 1] = "";
          const D = F.current[b - 1];
          D && D.focus();
        }
        const k = C.join("");
        i("otp", k);
      }
    },
    [_, i]
  ), O = async (b) => {
    if (W) {
      h("OTP has expired. Please request a new one.");
      return;
    }
    const w = b.otp || "";
    if (w.length !== e) {
      h(`Please enter all ${e} digits.`), M(!0), setTimeout(() => M(!1), 500);
      return;
    }
    y(!0), h(null), x(null);
    try {
      const P = await t(w);
      x("Verification successful!"), h(null), setTimeout(() => {
        r(P);
      }, 2e3);
    } catch (P) {
      const C = P instanceof Error ? P.message : "Verification failed. Please try again.";
      h(C), x(null), M(!0), setTimeout(() => M(!1), 500), n(P instanceof Error ? P : new Error(C));
    } finally {
      y(!1);
    }
  }, N = () => {
    if (V > 0) return;
    A(s), R(c), J(!1), I(), h(null), x(null), E(), a && a();
    const b = F.current[0];
    b && b.focus();
  };
  return /* @__PURE__ */ oe.jsxDEV(Ri, { className: B ? "shake" : "", "data-otp-component": !0, children: [
    /* @__PURE__ */ oe.jsxDEV(
      jt,
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
        lineNumber: 472,
        columnNumber: 4
      },
      void 0
    ),
    m && v > 0 && /* @__PURE__ */ oe.jsxDEV(jt, { variant: "body2", color: "text.secondary", children: [
      "Code expires in: ",
      Q(v)
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 482,
      columnNumber: 5
    }, void 0),
    W && /* @__PURE__ */ oe.jsxDEV(ft, { severity: "warning", sx: { width: "100%" }, children: "OTP has expired. Please request a new one." }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 488,
      columnNumber: 5
    }, void 0),
    T && /* @__PURE__ */ oe.jsxDEV(Bt, { in: !!T, children: /* @__PURE__ */ oe.jsxDEV(ft, { severity: "error", sx: { width: "100%" }, children: T }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 495,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 494,
      columnNumber: 5
    }, void 0),
    l && /* @__PURE__ */ oe.jsxDEV(Bt, { in: !!l, children: /* @__PURE__ */ oe.jsxDEV(ft, { severity: "success", sx: { width: "100%" }, children: l }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 503,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 502,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ oe.jsxDEV(
      $t,
      {
        component: "form",
        onSubmit: Y(O),
        sx: { width: "100%" },
        children: [
          /* @__PURE__ */ oe.jsxDEV(Pi, { children: Array.from({ length: e }, (b, w) => /* @__PURE__ */ oe.jsxDEV(
            Wr,
            {
              name: "otp",
              control: ie,
              render: ({ field: { onChange: P, value: C } }) => /* @__PURE__ */ oe.jsxDEV(
                ki,
                {
                  inputRef: (k) => F.current[w] = k,
                  variant: "outlined",
                  placeholder: p,
                  inputProps: {
                    maxLength: 1,
                    style: { textAlign: "center" }
                  },
                  value: (C || "").charAt(w) || "",
                  onChange: (k) => S(
                    w,
                    k.target.value,
                    P
                  ),
                  onKeyDown: (k) => u(
                    w,
                    k
                  ),
                  disabled: g || W,
                  error: !1,
                  autoComplete: "off"
                },
                void 0,
                !1,
                {
                  fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                  lineNumber: 521,
                  columnNumber: 9
                },
                void 0
              )
            },
            w,
            !1,
            {
              fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
              lineNumber: 516,
              columnNumber: 7
            },
            void 0
          )) }, void 0, !1, {
            fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
            lineNumber: 514,
            columnNumber: 5
          }, void 0),
          /* @__PURE__ */ oe.jsxDEV(
            Gr,
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
                /* @__PURE__ */ oe.jsxDEV(
                  br,
                  {
                    type: "submit",
                    variant: "contained",
                    disabled: g || W,
                    startIcon: g ? /* @__PURE__ */ oe.jsxDEV(qr, { size: 18, color: "inherit" }, void 0, !1, {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                      lineNumber: 573,
                      columnNumber: 9
                    }, void 0) : null,
                    children: g ? "Verifying..." : "Verify"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                    lineNumber: 567,
                    columnNumber: 6
                  },
                  void 0
                ),
                o && /* @__PURE__ */ oe.jsxDEV(
                  br,
                  {
                    variant: "outlined",
                    onClick: N,
                    disabled: V > 0 || g,
                    children: V > 0 ? `Resend in ${V}s` : "Resend Otp"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                    lineNumber: 581,
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
              lineNumber: 554,
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
        lineNumber: 509,
        columnNumber: 4
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
    lineNumber: 471,
    columnNumber: 3
  }, void 0);
};
export {
  Bi as LumoraOTP
};
