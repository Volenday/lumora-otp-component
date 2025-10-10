import { jsxDEV as oe } from "react/jsx-dev-runtime";
import * as mr from "react";
import { useState as Se, useRef as Ir, useCallback as ke, useEffect as ct } from "react";
import { useForm as Dr, Controller as Mr } from "react-hook-form";
import { keyframes as Br, Box as wt, TextField as Lr, Button as jr, Typography as It, Alert as lt, Fade as Dt, Stack as Fr, CircularProgress as Vr } from "@mui/material";
import Wr from "@emotion/styled";
import "@emotion/react";
function ye(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Ur = "$$material";
function Yr(e) {
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
var zr = {
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
function Gr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qr = !0, Mt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Kr = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Hr = /[A-Z]|^ms/g, gr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ot = function(t) {
  return t.charCodeAt(1) === 45;
}, Bt = function(t) {
  return t != null && typeof t != "boolean";
}, ut = /* @__PURE__ */ Gr(function(e) {
  return Ot(e) ? e : e.replace(Hr, "-$&").toLowerCase();
}), Ye = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(gr, function(n, o, a) {
          return he = {
            name: o,
            styles: a,
            next: he
          }, o;
        });
  }
  return zr[t] !== 1 && !Ot(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
{
  var Xr = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Jr = ["normal", "none", "initial", "inherit", "unset"], Qr = Ye, Zr = /^-ms-/, en = /-(.)/g, Lt = {};
  Ye = function(t, r) {
    if (t === "content" && (typeof r != "string" || Jr.indexOf(r) === -1 && !Xr.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Qr(t, r);
    return n !== "" && !Ot(t) && t.indexOf("-") !== -1 && Lt[t] === void 0 && (Lt[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Zr, "ms-").replace(en, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var hr = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ze(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0) {
    if (String(n) === "NO_COMPONENT_SELECTOR")
      throw new Error(hr);
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
      return tn(e, t, r);
    }
    case "function": {
      console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var u = [], d = r.replace(gr, function(m, h, S) {
          var g = "animation" + u.length;
          return u.push("const " + g + " = keyframes`" + S.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + d + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + d + "`");
      }
      break;
  }
  var p = r;
  return p;
}
function tn(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ze(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var c = s;
        Bt(c) && (n += ut(a) + ":" + Ye(a, c) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && qr)
          throw new Error(hr);
        if (Array.isArray(s) && typeof s[0] == "string" && t == null)
          for (var u = 0; u < s.length; u++)
            Bt(s[u]) && (n += ut(a) + ":" + Ye(a, s[u]) + ";");
        else {
          var d = ze(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              n += ut(a) + ":" + d + ";";
              break;
            }
            default:
              a === "undefined" && console.error(Kr), n += a + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var jt = /label:\s*([^\s;{]+)\s*(;|$)/g, he;
function rn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  he = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += ze(r, t, a);
  else {
    var s = a;
    s[0] === void 0 && console.error(Mt), o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += ze(r, t, e[c]), n) {
      var u = a;
      u[c] === void 0 && console.error(Mt), o += u[c];
    }
  jt.lastIndex = 0;
  for (var d = "", p; (p = jt.exec(o)) !== null; )
    d += "-" + p[1];
  var m = Yr(o) + d;
  {
    var h = {
      name: m,
      styles: o,
      next: he,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return h;
  }
}
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var St = { exports: {} }, Ve = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function on() {
  if (Ft) return Y;
  Ft = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function D(y) {
    if (typeof y == "object" && y !== null) {
      var _ = y.$$typeof;
      switch (_) {
        case t:
          switch (y = y.type, y) {
            case u:
            case d:
            case n:
            case a:
            case o:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case p:
                case g:
                case S:
                case s:
                  return y;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function O(y) {
    return D(y) === d;
  }
  return Y.AsyncMode = u, Y.ConcurrentMode = d, Y.ContextConsumer = c, Y.ContextProvider = s, Y.Element = t, Y.ForwardRef = p, Y.Fragment = n, Y.Lazy = g, Y.Memo = S, Y.Portal = r, Y.Profiler = a, Y.StrictMode = o, Y.Suspense = m, Y.isAsyncMode = function(y) {
    return O(y) || D(y) === u;
  }, Y.isConcurrentMode = O, Y.isContextConsumer = function(y) {
    return D(y) === c;
  }, Y.isContextProvider = function(y) {
    return D(y) === s;
  }, Y.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Y.isForwardRef = function(y) {
    return D(y) === p;
  }, Y.isFragment = function(y) {
    return D(y) === n;
  }, Y.isLazy = function(y) {
    return D(y) === g;
  }, Y.isMemo = function(y) {
    return D(y) === S;
  }, Y.isPortal = function(y) {
    return D(y) === r;
  }, Y.isProfiler = function(y) {
    return D(y) === a;
  }, Y.isStrictMode = function(y) {
    return D(y) === o;
  }, Y.isSuspense = function(y) {
    return D(y) === m;
  }, Y.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === d || y === a || y === o || y === m || y === h || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === S || y.$$typeof === s || y.$$typeof === c || y.$$typeof === p || y.$$typeof === E || y.$$typeof === I || y.$$typeof === N || y.$$typeof === l);
  }, Y.typeOf = D, Y;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function an() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function D(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === d || w === a || w === o || w === m || w === h || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === S || w.$$typeof === s || w.$$typeof === c || w.$$typeof === p || w.$$typeof === E || w.$$typeof === I || w.$$typeof === N || w.$$typeof === l);
    }
    function O(w) {
      if (typeof w == "object" && w !== null) {
        var ue = w.$$typeof;
        switch (ue) {
          case t:
            var Fe = w.type;
            switch (Fe) {
              case u:
              case d:
              case n:
              case a:
              case o:
              case m:
                return Fe;
              default:
                var Nt = Fe && Fe.$$typeof;
                switch (Nt) {
                  case c:
                  case p:
                  case g:
                  case S:
                  case s:
                    return Nt;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var y = u, _ = d, V = c, Q = s, U = t, se = p, K = n, i = g, C = S, v = r, R = a, M = o, Z = m, ne = !1;
    function de(w) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(w) || O(w) === u;
    }
    function b(w) {
      return O(w) === d;
    }
    function $(w) {
      return O(w) === c;
    }
    function F(w) {
      return O(w) === s;
    }
    function j(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function T(w) {
      return O(w) === p;
    }
    function x(w) {
      return O(w) === n;
    }
    function P(w) {
      return O(w) === g;
    }
    function A(w) {
      return O(w) === S;
    }
    function k(w) {
      return O(w) === r;
    }
    function B(w) {
      return O(w) === a;
    }
    function L(w) {
      return O(w) === o;
    }
    function W(w) {
      return O(w) === m;
    }
    z.AsyncMode = y, z.ConcurrentMode = _, z.ContextConsumer = V, z.ContextProvider = Q, z.Element = U, z.ForwardRef = se, z.Fragment = K, z.Lazy = i, z.Memo = C, z.Portal = v, z.Profiler = R, z.StrictMode = M, z.Suspense = Z, z.isAsyncMode = de, z.isConcurrentMode = b, z.isContextConsumer = $, z.isContextProvider = F, z.isElement = j, z.isForwardRef = T, z.isFragment = x, z.isLazy = P, z.isMemo = A, z.isPortal = k, z.isProfiler = B, z.isStrictMode = L, z.isSuspense = W, z.isValidElementType = D, z.typeOf = O;
  }()), z;
}
var Wt;
function yr() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ve.exports = on() : Ve.exports = an()), Ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ft, Ut;
function sn() {
  if (Ut) return ft;
  Ut = 1;
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
      var u = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ft = o() ? Object.assign : function(a, s) {
    for (var c, u = n(a), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        t.call(c, m) && (u[m] = c[m]);
      if (e) {
        d = e(c);
        for (var h = 0; h < d.length; h++)
          r.call(c, d[h]) && (u[d[h]] = c[d[h]]);
      }
    }
    return u;
  }, ft;
}
var dt, Yt;
function $t() {
  if (Yt) return dt;
  Yt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dt = e, dt;
}
var pt, zt;
function br() {
  return zt || (zt = 1, pt = Function.call.bind(Object.prototype.hasOwnProperty)), pt;
}
var mt, Gt;
function cn() {
  if (Gt) return mt;
  Gt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $t(), r = {}, n = br();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var h = Error(
                (u || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = a[p](s, p, u, c, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var S = d ? d() : "";
            e(
              "Failed " + c + " type: " + m.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, mt = o, mt;
}
var gt, qt;
function ln() {
  if (qt) return gt;
  qt = 1;
  var e = yr(), t = sn(), r = $t(), n = br(), o = cn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return gt = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(b) {
      var $ = b && (d && b[d] || b[p]);
      if (typeof $ == "function")
        return $;
    }
    var h = "<<anonymous>>", S = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: N(),
      arrayOf: D,
      element: O(),
      elementType: y(),
      instanceOf: _,
      node: se(),
      objectOf: Q,
      oneOf: V,
      oneOfType: U,
      shape: i,
      exact: C
    };
    function g(b, $) {
      return b === $ ? b !== 0 || 1 / b === 1 / $ : b !== b && $ !== $;
    }
    function l(b, $) {
      this.message = b, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function E(b) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, F = 0;
      function j(x, P, A, k, B, L, W) {
        if (k = k || h, L = L || A, W !== r) {
          if (u) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = k + ":" + A;
            !$[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[ue] = !0, F++);
          }
        }
        return P[A] == null ? x ? P[A] === null ? new l("The " + B + " `" + L + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new l("The " + B + " `" + L + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : b(P, A, k, B, L);
      }
      var T = j.bind(null, !1);
      return T.isRequired = j.bind(null, !0), T;
    }
    function I(b) {
      function $(F, j, T, x, P, A) {
        var k = F[j], B = M(k);
        if (B !== b) {
          var L = Z(k);
          return new l(
            "Invalid " + x + " `" + P + "` of type " + ("`" + L + "` supplied to `" + T + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return E($);
    }
    function N() {
      return E(s);
    }
    function D(b) {
      function $(F, j, T, x, P) {
        if (typeof b != "function")
          return new l("Property `" + P + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var A = F[j];
        if (!Array.isArray(A)) {
          var k = M(A);
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected an array."));
        }
        for (var B = 0; B < A.length; B++) {
          var L = b(A, B, T, x, P + "[" + B + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return E($);
    }
    function O() {
      function b($, F, j, T, x) {
        var P = $[F];
        if (!c(P)) {
          var A = M(P);
          return new l("Invalid " + T + " `" + x + "` of type " + ("`" + A + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(b);
    }
    function y() {
      function b($, F, j, T, x) {
        var P = $[F];
        if (!e.isValidElementType(P)) {
          var A = M(P);
          return new l("Invalid " + T + " `" + x + "` of type " + ("`" + A + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(b);
    }
    function _(b) {
      function $(F, j, T, x, P) {
        if (!(F[j] instanceof b)) {
          var A = b.name || h, k = de(F[j]);
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return E($);
    }
    function V(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(F, j, T, x, P) {
        for (var A = F[j], k = 0; k < b.length; k++)
          if (g(A, b[k]))
            return null;
        var B = JSON.stringify(b, function(W, w) {
          var ue = Z(w);
          return ue === "symbol" ? String(w) : w;
        });
        return new l("Invalid " + x + " `" + P + "` of value `" + String(A) + "` " + ("supplied to `" + T + "`, expected one of " + B + "."));
      }
      return E($);
    }
    function Q(b) {
      function $(F, j, T, x, P) {
        if (typeof b != "function")
          return new l("Property `" + P + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var A = F[j], k = M(A);
        if (k !== "object")
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + k + "` supplied to `" + T + "`, expected an object."));
        for (var B in A)
          if (n(A, B)) {
            var L = b(A, B, T, x, P + "." + B, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return E($);
    }
    function U(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < b.length; $++) {
        var F = b[$];
        if (typeof F != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(F) + " at index " + $ + "."
          ), s;
      }
      function j(T, x, P, A, k) {
        for (var B = [], L = 0; L < b.length; L++) {
          var W = b[L], w = W(T, x, P, A, k, r);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && B.push(w.data.expectedType);
        }
        var ue = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new l("Invalid " + A + " `" + k + "` supplied to " + ("`" + P + "`" + ue + "."));
      }
      return E(j);
    }
    function se() {
      function b($, F, j, T, x) {
        return v($[F]) ? null : new l("Invalid " + T + " `" + x + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return E(b);
    }
    function K(b, $, F, j, T) {
      return new l(
        (b || "React class") + ": " + $ + " type `" + F + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function i(b) {
      function $(F, j, T, x, P) {
        var A = F[j], k = M(A);
        if (k !== "object")
          return new l("Invalid " + x + " `" + P + "` of type `" + k + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var B in b) {
          var L = b[B];
          if (typeof L != "function")
            return K(T, x, P, B, Z(L));
          var W = L(A, B, T, x, P + "." + B, r);
          if (W)
            return W;
        }
        return null;
      }
      return E($);
    }
    function C(b) {
      function $(F, j, T, x, P) {
        var A = F[j], k = M(A);
        if (k !== "object")
          return new l("Invalid " + x + " `" + P + "` of type `" + k + "` " + ("supplied to `" + T + "`, expected `object`."));
        var B = t({}, F[j], b);
        for (var L in B) {
          var W = b[L];
          if (n(b, L) && typeof W != "function")
            return K(T, x, P, L, Z(W));
          if (!W)
            return new l(
              "Invalid " + x + " `" + P + "` key `" + L + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(F[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var w = W(A, L, T, x, P + "." + L, r);
          if (w)
            return w;
        }
        return null;
      }
      return E($);
    }
    function v(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(v);
          if (b === null || c(b))
            return !0;
          var $ = m(b);
          if ($) {
            var F = $.call(b), j;
            if ($ !== b.entries) {
              for (; !(j = F.next()).done; )
                if (!v(j.value))
                  return !1;
            } else
              for (; !(j = F.next()).done; ) {
                var T = j.value;
                if (T && !v(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function R(b, $) {
      return b === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function M(b) {
      var $ = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : R($, b) ? "symbol" : $;
    }
    function Z(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var $ = M(b);
      if ($ === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ne(b) {
      var $ = Z(b);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function de(b) {
      return !b.constructor || !b.constructor.name ? h : b.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, gt;
}
var ht, Kt;
function un() {
  if (Kt) return ht;
  Kt = 1;
  var e = $t();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ht = function() {
    function n(s, c, u, d, p, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, ht;
}
if (process.env.NODE_ENV !== "production") {
  var fn = yr(), dn = !0;
  St.exports = ln()(fn.isElement, dn);
} else
  St.exports = un()();
var pn = St.exports;
const Re = /* @__PURE__ */ nn(pn);
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function mn(e, t) {
  const r = Wr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function gn(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ht = [];
function Ce(e) {
  return Ht[0] = e, rn(Ht);
}
var Et = { exports: {} }, H = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function hn() {
  if (Xt) return H;
  Xt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function g(l) {
    if (typeof l == "object" && l !== null) {
      var E = l.$$typeof;
      switch (E) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case u:
            case d:
            case h:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case s:
                case c:
                case m:
                case p:
                  return l;
                case a:
                  return l;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return H.ContextConsumer = a, H.ContextProvider = s, H.Element = e, H.ForwardRef = c, H.Fragment = r, H.Lazy = m, H.Memo = p, H.Portal = t, H.Profiler = o, H.StrictMode = n, H.Suspense = u, H.SuspenseList = d, H.isContextConsumer = function(l) {
    return g(l) === a;
  }, H.isContextProvider = function(l) {
    return g(l) === s;
  }, H.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, H.isForwardRef = function(l) {
    return g(l) === c;
  }, H.isFragment = function(l) {
    return g(l) === r;
  }, H.isLazy = function(l) {
    return g(l) === m;
  }, H.isMemo = function(l) {
    return g(l) === p;
  }, H.isPortal = function(l) {
    return g(l) === t;
  }, H.isProfiler = function(l) {
    return g(l) === o;
  }, H.isStrictMode = function(l) {
    return g(l) === n;
  }, H.isSuspense = function(l) {
    return g(l) === u;
  }, H.isSuspenseList = function(l) {
    return g(l) === d;
  }, H.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === u || l === d || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === p || l.$$typeof === s || l.$$typeof === a || l.$$typeof === c || l.$$typeof === S || l.getModuleId !== void 0);
  }, H.typeOf = g, H;
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
var Jt;
function yn() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var E = l.$$typeof;
        switch (E) {
          case t:
            switch (l = l.type, l) {
              case n:
              case a:
              case o:
              case d:
              case p:
              case S:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case u:
                  case h:
                  case m:
                    return l;
                  case s:
                    return l;
                  default:
                    return E;
                }
            }
          case r:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    X.ContextConsumer = s, X.ContextProvider = c, X.Element = t, X.ForwardRef = u, X.Fragment = n, X.Lazy = h, X.Memo = m, X.Portal = r, X.Profiler = a, X.StrictMode = o, X.Suspense = d, X.SuspenseList = p, X.isContextConsumer = function(l) {
      return e(l) === s;
    }, X.isContextProvider = function(l) {
      return e(l) === c;
    }, X.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, X.isForwardRef = function(l) {
      return e(l) === u;
    }, X.isFragment = function(l) {
      return e(l) === n;
    }, X.isLazy = function(l) {
      return e(l) === h;
    }, X.isMemo = function(l) {
      return e(l) === m;
    }, X.isPortal = function(l) {
      return e(l) === r;
    }, X.isProfiler = function(l) {
      return e(l) === a;
    }, X.isStrictMode = function(l) {
      return e(l) === o;
    }, X.isSuspense = function(l) {
      return e(l) === d;
    }, X.isSuspenseList = function(l) {
      return e(l) === p;
    }, X.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === a || l === o || l === d || l === p || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === m || l.$$typeof === c || l.$$typeof === s || l.$$typeof === u || l.$$typeof === g || l.getModuleId !== void 0);
    }, X.typeOf = e;
  }()), X;
}
process.env.NODE_ENV === "production" ? Et.exports = hn() : Et.exports = yn();
var Ge = Et.exports;
function me(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vr(e) {
  if (/* @__PURE__ */ mr.isValidElement(e) || Ge.isValidElementType(e) || !me(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = vr(e[r]);
  }), t;
}
function ae(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return me(e) && me(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ mr.isValidElement(t[o]) || Ge.isValidElementType(t[o]) ? n[o] = t[o] : me(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && me(e[o]) ? n[o] = ae(e[o], t[o], r) : r.clone ? n[o] = me(t[o]) ? vr(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const bn = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function vn(e) {
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
  } = e, a = bn(t), s = Object.keys(a);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function u(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, S) {
    const g = s.indexOf(S);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : S) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const S = s.indexOf(h);
    return S === 0 ? c(s[1]) : S === s.length - 1 ? u(s[S]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: c,
    down: u,
    between: d,
    only: p,
    not: m,
    unit: r,
    ...o
  };
}
function Qt(e, t) {
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
function Sn(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function En(e, t) {
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
function Tn(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...c) => t(e.breakpoints.up(...c), s), a.down = (...c) => t(e.breakpoints.down(...c), s), a.between = (...c) => t(e.breakpoints.between(...c), s), a.only = (...c) => t(e.breakpoints.only(...c), s), a.not = (...c) => {
      const u = t(e.breakpoints.not(...c), s);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Cn = {
  borderRadius: 4
}, ve = process.env.NODE_ENV !== "production" ? Re.oneOfType([Re.number, Re.string, Re.object, Re.array]) : {};
function Me(e, t) {
  return t ? ae(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ke = {
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
}, Zt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ke[e]}px)`
}, xn = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Ke[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ge(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || Zt;
    return t.reduce((s, c, u) => (s[a.up(a.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Zt;
    return Object.keys(t).reduce((s, c) => {
      if (Sn(a.keys, c)) {
        const u = En(n.containerQueries ? n : xn, c);
        u && (s[u] = r(t[c], c));
      } else if (Object.keys(a.values || Ke).includes(c)) {
        const u = a.up(c);
        s[u] = r(t[c], c);
      } else {
        const u = c;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function wn(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function er(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function _t(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function He(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function qe(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = He(e, r) || n, t && (o = t(o, n, e)), o;
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
    const c = s[t], u = s.theme, d = He(u, n) || {};
    return ge(s, c, (m) => {
      let h = qe(d, o, m);
      return m === h && typeof m == "string" && (h = qe(d, o, `${t}${m === "default" ? "" : _t(m)}`, m)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ve
  } : {}, a.filterProps = [t], a;
}
function On(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const $n = {
  m: "margin",
  p: "padding"
}, _n = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, tr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, An = On((e) => {
  if (e.length > 2)
    if (tr[e])
      e = tr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = $n[t], o = _n[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Xe = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Je = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pn = [...Xe, ...Je];
function Le(e, t, r, n) {
  const o = He(e, t, !0) ?? r;
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
function At(e) {
  return Le(e, "spacing", 8, "spacing");
}
function je(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function kn(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = je(t, r), n), {});
}
function Rn(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = An(r), a = kn(o, n), s = e[r];
  return ge(e, s, a);
}
function Sr(e, t) {
  const r = At(e.theme);
  return Object.keys(e).map((n) => Rn(e, t, n, r)).reduce(Me, {});
}
function ee(e) {
  return Sr(e, Xe);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Xe.reduce((e, t) => (e[t] = ve, e), {}) : {};
ee.filterProps = Xe;
function te(e) {
  return Sr(e, Je);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Je.reduce((e, t) => (e[t] = ve, e), {}) : {};
te.filterProps = Je;
process.env.NODE_ENV !== "production" && Pn.reduce((e, t) => (e[t] = ve, e), {});
function Er(e = 8, t = At({
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
function Qe(...e) {
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
const Nn = le("border", ce), In = le("borderTop", ce), Dn = le("borderRight", ce), Mn = le("borderBottom", ce), Bn = le("borderLeft", ce), Ln = le("borderColor"), jn = le("borderTopColor"), Fn = le("borderRightColor"), Vn = le("borderBottomColor"), Wn = le("borderLeftColor"), Un = le("outline", ce), Yn = le("outlineColor"), Ze = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Le(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: je(t, n)
    });
    return ge(e, e.borderRadius, r);
  }
  return null;
};
Ze.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ve
} : {};
Ze.filterProps = ["borderRadius"];
Qe(Nn, In, Dn, Mn, Bn, Ln, jn, Fn, Vn, Wn, Ze, Un, Yn);
const et = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Le(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: je(t, n)
    });
    return ge(e, e.gap, r);
  }
  return null;
};
et.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ve
} : {};
et.filterProps = ["gap"];
const tt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Le(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: je(t, n)
    });
    return ge(e, e.columnGap, r);
  }
  return null;
};
tt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ve
} : {};
tt.filterProps = ["columnGap"];
const rt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Le(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: je(t, n)
    });
    return ge(e, e.rowGap, r);
  }
  return null;
};
rt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ve
} : {};
rt.filterProps = ["rowGap"];
const zn = re({
  prop: "gridColumn"
}), Gn = re({
  prop: "gridRow"
}), qn = re({
  prop: "gridAutoFlow"
}), Kn = re({
  prop: "gridAutoColumns"
}), Hn = re({
  prop: "gridAutoRows"
}), Xn = re({
  prop: "gridTemplateColumns"
}), Jn = re({
  prop: "gridTemplateRows"
}), Qn = re({
  prop: "gridTemplateAreas"
}), Zn = re({
  prop: "gridArea"
});
Qe(et, tt, rt, zn, Gn, qn, Kn, Hn, Xn, Jn, Qn, Zn);
function Ae(e, t) {
  return t === "grey" ? t : e;
}
const eo = re({
  prop: "color",
  themeKey: "palette",
  transform: Ae
}), to = re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ae
}), ro = re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ae
});
Qe(eo, to, ro);
function ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const no = re({
  prop: "width",
  transform: ie
}), Pt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, c, u;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || Ke[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ie(r)
      };
    };
    return ge(e, e.maxWidth, t);
  }
  return null;
};
Pt.filterProps = ["maxWidth"];
const oo = re({
  prop: "minWidth",
  transform: ie
}), io = re({
  prop: "height",
  transform: ie
}), ao = re({
  prop: "maxHeight",
  transform: ie
}), so = re({
  prop: "minHeight",
  transform: ie
});
re({
  prop: "size",
  cssProperty: "width",
  transform: ie
});
re({
  prop: "size",
  cssProperty: "height",
  transform: ie
});
const co = re({
  prop: "boxSizing"
});
Qe(no, Pt, oo, io, ao, so, co);
const nt = {
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
    style: Ze
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
    style: et
  },
  rowGap: {
    style: rt
  },
  columnGap: {
    style: tt
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
    transform: ie
  },
  maxWidth: {
    style: Pt
  },
  minWidth: {
    transform: ie
  },
  height: {
    transform: ie
  },
  maxHeight: {
    transform: ie
  },
  minHeight: {
    transform: ie
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
function lo(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function uo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fo() {
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
      cssProperty: u = r,
      themeKey: d,
      transform: p,
      style: m
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = He(o, d) || {};
    return m ? m(s) : ge(s, n, (g) => {
      let l = qe(h, p, g);
      return g === l && typeof g == "string" && (l = qe(h, p, `${r}${g === "default" ? "" : _t(g)}`, g)), u === !1 ? l : {
        [u]: l
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
    const s = o.unstable_sxConfig ?? nt;
    function c(u) {
      let d = u;
      if (typeof u == "function")
        d = u(o);
      else if (typeof u != "object")
        return u;
      if (!d)
        return null;
      const p = wn(o.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(d).forEach((S) => {
        const g = uo(d[S], o);
        if (g != null)
          if (typeof g == "object")
            if (s[S])
              h = Me(h, e(S, g, o, s));
            else {
              const l = ge({
                theme: o
              }, g, (E) => ({
                [S]: E
              }));
              lo(l, g) ? h[S] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : h = Me(h, l);
            }
          else
            h = Me(h, e(S, g, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": Qt(o, er(m, h))
      } : Qt(o, er(m, h));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const Pe = fo();
Pe.filterProps = ["sx"];
function po(e, t) {
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
function Tr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, c = vn(r), u = Er(o);
  let d = ae({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Cn,
      ...a
    }
  }, s);
  return d = Tn(d), d.applyStyles = po, d = t.reduce((p, m) => ae(p, m), d), d.unstable_sxConfig = {
    ...nt,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return Pe({
      sx: m,
      theme: this
    });
  }, d;
}
const rr = (e) => e, mo = () => {
  let e = rr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = rr;
    }
  };
}, go = mo(), ho = {
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
function yo(e, t, r = "Mui") {
  const n = ho[t];
  return n ? `${r}-${n}` : `${go.generate(e)}-${t}`;
}
function Cr(e, t = "") {
  return e.displayName || e.name || t;
}
function nr(e, t, r) {
  const n = Cr(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function bo(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Cr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ge.ForwardRef:
          return nr(e, e.render, "ForwardRef");
        case Ge.Memo:
          return nr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function vo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ce(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ce(o.style));
  }), n;
}
const So = Tr();
function yt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Te(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Eo(e) {
  return e ? (t, r) => r[e] : null;
}
function To(e, t, r) {
  e.theme = Oo(e.theme) ? r : e.theme[t] || e.theme;
}
function Ue(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Ue(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Te(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? Te(Ce(s), r) : s;
    }
    return xr(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? Te(Ce(n.style), r) : n.style : r ? Te(Ce(n), r) : n;
}
function xr(e, t, r = [], n = void 0) {
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
      for (const u in c.props)
        if (e[u] !== c.props[u] && ((a = e.ownerState) == null ? void 0 : a[u]) !== c.props[u])
          continue e;
    typeof c.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? Te(Ce(c.style(o)), n) : c.style(o))) : r.push(n ? Te(Ce(c.style), n) : c.style);
  }
  return r;
}
function Co(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = So,
    rootShouldForwardProp: n = yt,
    slotShouldForwardProp: o = yt
  } = e;
  function a(c) {
    To(c, t, r);
  }
  return (c, u = {}) => {
    gn(c, (_) => _.filter((V) => V !== Pe));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = Eo(wr(p)),
      ...g
    } = u, l = d && d.startsWith("Mui") || p ? "components" : "custom", E = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), I = h || !1;
    let N = yt;
    p === "Root" || p === "root" ? N = n : p ? N = o : $o(c) && (N = void 0);
    const D = mn(c, {
      shouldForwardProp: N,
      label: wo(d, p),
      ...g
    }), O = (_) => {
      if (_.__emotion_real === _)
        return _;
      if (typeof _ == "function")
        return function(Q) {
          return Ue(Q, _, Q.theme.modularCssLayers ? l : void 0);
        };
      if (me(_)) {
        const V = vo(_);
        return function(U) {
          return V.variants ? Ue(U, V, U.theme.modularCssLayers ? l : void 0) : U.theme.modularCssLayers ? Te(V.style, l) : V.style;
        };
      }
      return _;
    }, y = (..._) => {
      const V = [], Q = _.map(O), U = [];
      if (V.push(a), d && S && U.push(function(C) {
        var Z, ne;
        const R = (ne = (Z = C.theme.components) == null ? void 0 : Z[d]) == null ? void 0 : ne.styleOverrides;
        if (!R)
          return null;
        const M = {};
        for (const de in R)
          M[de] = Ue(C, R[de], C.theme.modularCssLayers ? "theme" : void 0);
        return S(C, M);
      }), d && !E && U.push(function(C) {
        var M, Z;
        const v = C.theme, R = (Z = (M = v == null ? void 0 : v.components) == null ? void 0 : M[d]) == null ? void 0 : Z.variants;
        return R ? xr(C, R, [], C.theme.modularCssLayers ? "theme" : void 0) : null;
      }), I || U.push(Pe), Array.isArray(Q[0])) {
        const i = Q.shift(), C = new Array(V.length).fill(""), v = new Array(U.length).fill("");
        let R;
        R = [...C, ...i, ...v], R.raw = [...C, ...i.raw, ...v], V.unshift(R);
      }
      const se = [...V, ...Q, ...U], K = D(...se);
      return c.muiName && (K.muiName = c.muiName), process.env.NODE_ENV !== "production" && (K.displayName = xo(d, p, c)), K;
    };
    return D.withConfig && (y.withConfig = D.withConfig), y;
  };
}
function xo(e, t, r) {
  return e ? `${e}${_t(t || "")}` : `Styled(${bo(r)})`;
}
function wo(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${wr(t || "Root")}`), r;
}
function Oo(e) {
  for (const t in e)
    return !1;
  return !0;
}
function $o(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function wr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function _o(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function kt(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), _o(e, t, r);
}
function Ao(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function be(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return be(Ao(e));
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
const Po = (e) => {
  const t = be(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ie = (e, t) => {
  try {
    return Po(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ot(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Or(e) {
  e = be(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (d, p = (d + r / 30) % 12) => o - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), ot({
    type: c,
    values: u
  });
}
function Tt(e) {
  e = be(e);
  let t = e.type === "hsl" || e.type === "hsla" ? be(Or(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function or(e, t) {
  const r = Tt(e), n = Tt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function $r(e, t) {
  return e = be(e), t = kt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ot(e);
}
function Ee(e, t, r) {
  try {
    return $r(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function it(e, t) {
  if (e = be(e), t = kt(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return ot(e);
}
function G(e, t, r) {
  try {
    return it(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function at(e, t) {
  if (e = be(e), t = kt(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return ot(e);
}
function q(e, t, r) {
  try {
    return at(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ko(e, t = 0.15) {
  return Tt(e) > 0.5 ? it(e, t) : at(e, t);
}
function We(e, t, r) {
  try {
    return ko(e, t);
  } catch {
    return e;
  }
}
function Ro(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ir = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, No = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...a, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...a, c], Array.isArray(u) ? [...s, c] : s) : t([...a, c], u, s));
    });
  }
  n(e);
}, Io = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return No(
    e,
    (c, u, d) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, m = Io(c, u);
        Object.assign(o, {
          [p]: m
        }), ir(a, c, `var(${p})`, d), ir(s, c, `var(${p}, ${m})`, d);
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
function Do(e, t = {}) {
  const {
    getSelector: r = I,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: u = "light",
    ...d
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: h
  } = bt(d, t);
  let S = h;
  const g = {}, {
    [u]: l,
    ...E
  } = s;
  if (Object.entries(E || {}).forEach(([O, y]) => {
    const {
      vars: _,
      css: V,
      varsWithDefaults: Q
    } = bt(y, t);
    S = ae(S, Q), g[O] = {
      css: V,
      vars: _
    };
  }), l) {
    const {
      css: O,
      vars: y,
      varsWithDefaults: _
    } = bt(l, t);
    S = ae(S, _), g[u] = {
      css: O,
      vars: y
    };
  }
  function I(O, y) {
    var V, Q;
    let _ = o;
    if (o === "class" && (_ = ".%s"), o === "data" && (_ = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (_ = `[${o}="%s"]`), O) {
      if (_ === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((Q = (V = s[O]) == null ? void 0 : V.palette) == null ? void 0 : Q.mode) || O})`]: {
            ":root": y
          }
        };
      if (_)
        return e.defaultColorScheme === O ? `:root, ${_.replace("%s", String(O))}` : _.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: S,
    generateThemeVars: () => {
      let O = {
        ...p
      };
      return Object.entries(g).forEach(([, {
        vars: y
      }]) => {
        O = ae(O, y);
      }), O;
    },
    generateStyleSheets: () => {
      var U, se;
      const O = [], y = e.defaultColorScheme || "light";
      function _(K, i) {
        Object.keys(i).length && O.push(typeof K == "string" ? {
          [K]: {
            ...i
          }
        } : K);
      }
      _(r(void 0, {
        ...m
      }), m);
      const {
        [y]: V,
        ...Q
      } = g;
      if (V) {
        const {
          css: K
        } = V, i = (se = (U = s[y]) == null ? void 0 : U.palette) == null ? void 0 : se.mode, C = !n && i ? {
          colorScheme: i,
          ...K
        } : {
          ...K
        };
        _(r(y, {
          ...C
        }), C);
      }
      return Object.entries(Q).forEach(([K, {
        css: i
      }]) => {
        var R, M;
        const C = (M = (R = s[K]) == null ? void 0 : R.palette) == null ? void 0 : M.mode, v = !n && C ? {
          colorScheme: C,
          ...i
        } : {
          ...i
        };
        _(r(K, {
          ...v
        }), v);
      }), a && O.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), O;
    }
  };
}
function Mo(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Be = {
  black: "#000",
  white: "#fff"
}, Bo = {
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
}, xe = {
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
}, Oe = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, $e = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, _e = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function _r() {
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
      paper: Be.white,
      default: Be.white
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
const Ar = _r();
function Pr() {
  return {
    text: {
      primary: Be.white,
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
      active: Be.white,
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
const Ct = Pr();
function ar(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = at(e.main, o) : t === "dark" && (e.dark = it(e.main, a)));
}
function sr(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Lo(e = "light") {
  return e === "dark" ? {
    main: Oe[200],
    light: Oe[50],
    dark: Oe[400]
  } : {
    main: Oe[700],
    light: Oe[400],
    dark: Oe[800]
  };
}
function jo(e = "light") {
  return e === "dark" ? {
    main: xe[200],
    light: xe[50],
    dark: xe[400]
  } : {
    main: xe[500],
    light: xe[300],
    dark: xe[700]
  };
}
function Fo(e = "light") {
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
function Vo(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[700],
    light: $e[500],
    dark: $e[900]
  };
}
function Wo(e = "light") {
  return e === "dark" ? {
    main: _e[400],
    light: _e[300],
    dark: _e[700]
  } : {
    main: _e[800],
    light: _e[500],
    dark: _e[900]
  };
}
function Uo(e = "light") {
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
function Yo(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Rt(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Lo(t), c = e.secondary || jo(t), u = e.error || Fo(t), d = e.info || Vo(t), p = e.success || Wo(t), m = e.warning || Uo(t);
  function h(E) {
    if (o)
      return Yo(E);
    const I = or(E, Ct.text.primary) >= r ? Ct.text.primary : Ar.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const N = or(E, I);
      N < 3 && console.error([`MUI: The contrast ratio of ${N}:1 for ${I} on ${E}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return I;
  }
  const S = ({
    color: E,
    name: I,
    mainShade: N = 500,
    lightShade: D = 300,
    darkShade: O = 700
  }) => {
    if (E = {
      ...E
    }, !E.main && E[N] && (E.main = E[N]), !E.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${I ? ` (${I})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${N}\` property.` : ye(11, I ? ` (${I})` : "", N));
    if (typeof E.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${I ? ` (${I})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(E.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ye(12, I ? ` (${I})` : "", JSON.stringify(E.main)));
    return o ? (sr(o, E, "light", D, n), sr(o, E, "dark", O, n)) : (ar(E, "light", D, n), ar(E, "dark", O, n)), E.contrastText || (E.contrastText = h(E.main)), E;
  };
  let g;
  return t === "light" ? g = _r() : t === "dark" && (g = Pr()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ae({
    // A collection of common colors.
    common: {
      ...Be
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: S({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: S({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: S({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: S({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: S({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: S({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Bo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: S,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...g
  }, a);
}
function zo(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Go(e, t) {
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
function qo(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cr = {
  textTransform: "uppercase"
}, lr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ko(e, t) {
  const {
    fontFamily: r = lr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, S = p || ((E) => `${E / u * h}rem`), g = (E, I, N, D, O) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: S(I),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === lr ? {
      letterSpacing: `${qo(D / I)}em`
    } : {},
    ...O,
    ...d
  }), l = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, cr),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, cr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ae({
    htmlFontSize: u,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Ho = 0.2, Xo = 0.14, Jo = 0.12;
function J(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ho})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xo})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jo})`].join(",");
}
const Qo = ["none", J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Zo = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ei = {
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
function ur(e) {
  return `${Math.round(e)}ms`;
}
function ti(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ri(e) {
  const t = {
    ...Zo,
    ...e.easing
  }, r = {
    ...ei,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ti,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : ur(s)} ${c} ${typeof u == "string" ? u : ur(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ni = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function oi(e) {
  return me(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function kr(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, c] = o[a];
      !oi(c) || s.startsWith("unstable_") ? delete n[s] : me(c) && (n[s] = {
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
function fr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const ii = (e) => {
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
function ai(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : $r(t, ii(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${fr(r)})` : at(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${fr(r)})` : it(t, r);
    }
  });
}
function xt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: c = {},
    shape: u,
    colorSpace: d,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ye(20));
  const m = Rt({
    ...a,
    colorSpace: d
  }), h = Tr(e);
  let S = ae(h, {
    mixins: Go(h.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Qo.slice(),
    typography: Ko(m, c),
    transitions: ri(s),
    zIndex: {
      ...ni
    }
  });
  if (S = ae(S, p), S = t.reduce((g, l) => ae(g, l), S), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (E, I) => {
      let N;
      for (N in E) {
        const D = E[N];
        if (g.includes(N) && Object.keys(D).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = yo("", N);
            console.error([`MUI: The \`${I}\` component increases the CSS specificity of the \`${N}\` internal state.`, "You can not override it like this: ", JSON.stringify(E, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: D
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          E[N] = {};
        }
      }
    };
    Object.keys(S.components).forEach((E) => {
      const I = S.components[E].styleOverrides;
      I && E.startsWith("Mui") && l(I, E);
    });
  }
  return S.unstable_sxConfig = {
    ...nt,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, S.unstable_sx = function(l) {
    return Pe({
      sx: l,
      theme: this
    });
  }, S.toRuntimeSource = kr, ai(S), S;
}
function si(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ci = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = si(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Rr(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Nr(e) {
  return e === "dark" ? ci : [];
}
function li(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = Rt({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Rr(s.mode),
      ...r
    },
    overlays: n || Nr(s.mode),
    ...a
  };
}
function ui(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const fi = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], di = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return fi(e.cssVarPrefix).forEach((c) => {
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
function pi(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function f(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function De(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Or(e);
}
function pe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ie(De(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function mi(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const fe = (e) => {
  try {
    return e();
  } catch {
  }
}, gi = (e = "mui") => Ro(e);
function vt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = li({
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
  } = xt({
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
      ...Rr(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Nr(a)
  }, c;
}
function hi(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = ui,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, m = Object.keys(r)[0], h = n || (r.light && m !== "light" ? "light" : m), S = gi(a), {
    [h]: g,
    light: l,
    dark: E,
    ...I
  } = r, N = {
    ...I
  };
  let D = g;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (D = !0), !D)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ye(21, h));
  let O;
  s && (O = "oklch");
  const y = vt(O, N, D, p, h);
  l && !N.light && vt(O, N, l, void 0, "light"), E && !N.dark && vt(O, N, E, void 0, "dark");
  let _ = {
    defaultColorScheme: h,
    ...y,
    cssVarPrefix: a,
    colorSchemeSelector: u,
    rootSelector: d,
    getCssVar: S,
    colorSchemes: N,
    font: {
      ...zo(y.typography),
      ...y.font
    },
    spacing: mi(p.spacing)
  };
  Object.keys(_.colorSchemes).forEach((K) => {
    const i = _.colorSchemes[K].palette, C = (R) => {
      const M = R.split("-"), Z = M[1], ne = M[2];
      return S(R, i[Z][ne]);
    };
    i.mode === "light" && (f(i.common, "background", "#fff"), f(i.common, "onBackground", "#000")), i.mode === "dark" && (f(i.common, "background", "#000"), f(i.common, "onBackground", "#fff"));
    function v(R, M, Z) {
      if (O) {
        let ne;
        return R === Ee && (ne = `transparent ${((1 - Z) * 100).toFixed(0)}%`), R === G && (ne = `#000 ${(Z * 100).toFixed(0)}%`), R === q && (ne = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${O}, ${M}, ${ne})`;
      }
      return R(M, Z);
    }
    if (pi(i, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), i.mode === "light") {
      f(i.Alert, "errorColor", v(G, i.error.light, 0.6)), f(i.Alert, "infoColor", v(G, i.info.light, 0.6)), f(i.Alert, "successColor", v(G, i.success.light, 0.6)), f(i.Alert, "warningColor", v(G, i.warning.light, 0.6)), f(i.Alert, "errorFilledBg", C("palette-error-main")), f(i.Alert, "infoFilledBg", C("palette-info-main")), f(i.Alert, "successFilledBg", C("palette-success-main")), f(i.Alert, "warningFilledBg", C("palette-warning-main")), f(i.Alert, "errorFilledColor", fe(() => i.getContrastText(i.error.main))), f(i.Alert, "infoFilledColor", fe(() => i.getContrastText(i.info.main))), f(i.Alert, "successFilledColor", fe(() => i.getContrastText(i.success.main))), f(i.Alert, "warningFilledColor", fe(() => i.getContrastText(i.warning.main))), f(i.Alert, "errorStandardBg", v(q, i.error.light, 0.9)), f(i.Alert, "infoStandardBg", v(q, i.info.light, 0.9)), f(i.Alert, "successStandardBg", v(q, i.success.light, 0.9)), f(i.Alert, "warningStandardBg", v(q, i.warning.light, 0.9)), f(i.Alert, "errorIconColor", C("palette-error-main")), f(i.Alert, "infoIconColor", C("palette-info-main")), f(i.Alert, "successIconColor", C("palette-success-main")), f(i.Alert, "warningIconColor", C("palette-warning-main")), f(i.AppBar, "defaultBg", C("palette-grey-100")), f(i.Avatar, "defaultBg", C("palette-grey-400")), f(i.Button, "inheritContainedBg", C("palette-grey-300")), f(i.Button, "inheritContainedHoverBg", C("palette-grey-A100")), f(i.Chip, "defaultBorder", C("palette-grey-400")), f(i.Chip, "defaultAvatarColor", C("palette-grey-700")), f(i.Chip, "defaultIconColor", C("palette-grey-700")), f(i.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), f(i.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), f(i.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), f(i.LinearProgress, "primaryBg", v(q, i.primary.main, 0.62)), f(i.LinearProgress, "secondaryBg", v(q, i.secondary.main, 0.62)), f(i.LinearProgress, "errorBg", v(q, i.error.main, 0.62)), f(i.LinearProgress, "infoBg", v(q, i.info.main, 0.62)), f(i.LinearProgress, "successBg", v(q, i.success.main, 0.62)), f(i.LinearProgress, "warningBg", v(q, i.warning.main, 0.62)), f(i.Skeleton, "bg", O ? v(Ee, i.text.primary, 0.11) : `rgba(${C("palette-text-primaryChannel")} / 0.11)`), f(i.Slider, "primaryTrack", v(q, i.primary.main, 0.62)), f(i.Slider, "secondaryTrack", v(q, i.secondary.main, 0.62)), f(i.Slider, "errorTrack", v(q, i.error.main, 0.62)), f(i.Slider, "infoTrack", v(q, i.info.main, 0.62)), f(i.Slider, "successTrack", v(q, i.success.main, 0.62)), f(i.Slider, "warningTrack", v(q, i.warning.main, 0.62));
      const R = O ? v(G, i.background.default, 0.6825) : We(i.background.default, 0.8);
      f(i.SnackbarContent, "bg", R), f(i.SnackbarContent, "color", fe(() => O ? Ct.text.primary : i.getContrastText(R))), f(i.SpeedDialAction, "fabHoverBg", We(i.background.paper, 0.15)), f(i.StepConnector, "border", C("palette-grey-400")), f(i.StepContent, "border", C("palette-grey-400")), f(i.Switch, "defaultColor", C("palette-common-white")), f(i.Switch, "defaultDisabledColor", C("palette-grey-100")), f(i.Switch, "primaryDisabledColor", v(q, i.primary.main, 0.62)), f(i.Switch, "secondaryDisabledColor", v(q, i.secondary.main, 0.62)), f(i.Switch, "errorDisabledColor", v(q, i.error.main, 0.62)), f(i.Switch, "infoDisabledColor", v(q, i.info.main, 0.62)), f(i.Switch, "successDisabledColor", v(q, i.success.main, 0.62)), f(i.Switch, "warningDisabledColor", v(q, i.warning.main, 0.62)), f(i.TableCell, "border", v(q, v(Ee, i.divider, 1), 0.88)), f(i.Tooltip, "bg", v(Ee, i.grey[700], 0.92));
    }
    if (i.mode === "dark") {
      f(i.Alert, "errorColor", v(q, i.error.light, 0.6)), f(i.Alert, "infoColor", v(q, i.info.light, 0.6)), f(i.Alert, "successColor", v(q, i.success.light, 0.6)), f(i.Alert, "warningColor", v(q, i.warning.light, 0.6)), f(i.Alert, "errorFilledBg", C("palette-error-dark")), f(i.Alert, "infoFilledBg", C("palette-info-dark")), f(i.Alert, "successFilledBg", C("palette-success-dark")), f(i.Alert, "warningFilledBg", C("palette-warning-dark")), f(i.Alert, "errorFilledColor", fe(() => i.getContrastText(i.error.dark))), f(i.Alert, "infoFilledColor", fe(() => i.getContrastText(i.info.dark))), f(i.Alert, "successFilledColor", fe(() => i.getContrastText(i.success.dark))), f(i.Alert, "warningFilledColor", fe(() => i.getContrastText(i.warning.dark))), f(i.Alert, "errorStandardBg", v(G, i.error.light, 0.9)), f(i.Alert, "infoStandardBg", v(G, i.info.light, 0.9)), f(i.Alert, "successStandardBg", v(G, i.success.light, 0.9)), f(i.Alert, "warningStandardBg", v(G, i.warning.light, 0.9)), f(i.Alert, "errorIconColor", C("palette-error-main")), f(i.Alert, "infoIconColor", C("palette-info-main")), f(i.Alert, "successIconColor", C("palette-success-main")), f(i.Alert, "warningIconColor", C("palette-warning-main")), f(i.AppBar, "defaultBg", C("palette-grey-900")), f(i.AppBar, "darkBg", C("palette-background-paper")), f(i.AppBar, "darkColor", C("palette-text-primary")), f(i.Avatar, "defaultBg", C("palette-grey-600")), f(i.Button, "inheritContainedBg", C("palette-grey-800")), f(i.Button, "inheritContainedHoverBg", C("palette-grey-700")), f(i.Chip, "defaultBorder", C("palette-grey-700")), f(i.Chip, "defaultAvatarColor", C("palette-grey-300")), f(i.Chip, "defaultIconColor", C("palette-grey-300")), f(i.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), f(i.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), f(i.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), f(i.LinearProgress, "primaryBg", v(G, i.primary.main, 0.5)), f(i.LinearProgress, "secondaryBg", v(G, i.secondary.main, 0.5)), f(i.LinearProgress, "errorBg", v(G, i.error.main, 0.5)), f(i.LinearProgress, "infoBg", v(G, i.info.main, 0.5)), f(i.LinearProgress, "successBg", v(G, i.success.main, 0.5)), f(i.LinearProgress, "warningBg", v(G, i.warning.main, 0.5)), f(i.Skeleton, "bg", O ? v(Ee, i.text.primary, 0.13) : `rgba(${C("palette-text-primaryChannel")} / 0.13)`), f(i.Slider, "primaryTrack", v(G, i.primary.main, 0.5)), f(i.Slider, "secondaryTrack", v(G, i.secondary.main, 0.5)), f(i.Slider, "errorTrack", v(G, i.error.main, 0.5)), f(i.Slider, "infoTrack", v(G, i.info.main, 0.5)), f(i.Slider, "successTrack", v(G, i.success.main, 0.5)), f(i.Slider, "warningTrack", v(G, i.warning.main, 0.5));
      const R = O ? v(q, i.background.default, 0.985) : We(i.background.default, 0.98);
      f(i.SnackbarContent, "bg", R), f(i.SnackbarContent, "color", fe(() => O ? Ar.text.primary : i.getContrastText(R))), f(i.SpeedDialAction, "fabHoverBg", We(i.background.paper, 0.15)), f(i.StepConnector, "border", C("palette-grey-600")), f(i.StepContent, "border", C("palette-grey-600")), f(i.Switch, "defaultColor", C("palette-grey-300")), f(i.Switch, "defaultDisabledColor", C("palette-grey-600")), f(i.Switch, "primaryDisabledColor", v(G, i.primary.main, 0.55)), f(i.Switch, "secondaryDisabledColor", v(G, i.secondary.main, 0.55)), f(i.Switch, "errorDisabledColor", v(G, i.error.main, 0.55)), f(i.Switch, "infoDisabledColor", v(G, i.info.main, 0.55)), f(i.Switch, "successDisabledColor", v(G, i.success.main, 0.55)), f(i.Switch, "warningDisabledColor", v(G, i.warning.main, 0.55)), f(i.TableCell, "border", v(G, v(Ee, i.divider, 1), 0.68)), f(i.Tooltip, "bg", v(Ee, i.grey[700], 0.92));
    }
    pe(i.background, "default"), pe(i.background, "paper"), pe(i.common, "background"), pe(i.common, "onBackground"), pe(i, "divider"), Object.keys(i).forEach((R) => {
      const M = i[R];
      R !== "tonalOffset" && M && typeof M == "object" && (M.main && f(i[R], "mainChannel", Ie(De(M.main))), M.light && f(i[R], "lightChannel", Ie(De(M.light))), M.dark && f(i[R], "darkChannel", Ie(De(M.dark))), M.contrastText && f(i[R], "contrastTextChannel", Ie(De(M.contrastText))), R === "text" && (pe(i[R], "primary"), pe(i[R], "secondary")), R === "action" && (M.active && pe(i[R], "active"), M.selected && pe(i[R], "selected")));
    });
  }), _ = t.reduce((K, i) => ae(K, i), _);
  const V = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: di(_),
    enableContrastVars: s
  }, {
    vars: Q,
    generateThemeVars: U,
    generateStyleSheets: se
  } = Do(_, V);
  return _.vars = Q, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([K, i]) => {
    _[K] = i;
  }), _.generateThemeVars = U, _.generateStyleSheets = se, _.generateSpacing = function() {
    return Er(p.spacing, At(this));
  }, _.getColorSchemeSelector = Mo(u), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = c, _.unstable_sxConfig = {
    ...nt,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, _.unstable_sx = function(i) {
    return Pe({
      sx: i,
      theme: this
    });
  }, _.toRuntimeSource = kr, _;
}
function dr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Rt({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function yi(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, c = a || "light", u = o == null ? void 0 : o[c], d = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return xt(e, ...t);
    let p = r;
    "palette" in e || d[c] && (d[c] !== !0 ? p = d[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const m = xt({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, dr(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, dr(m, "light", d.light)), m;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), hi({
    ...s,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const bi = yi();
function vi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Si = (e) => vi(e) && e !== "classes", st = Co({
  themeId: Ur,
  defaultTheme: bi,
  rootShouldForwardProp: Si
}), Ei = Br`
	0%, 100% { transform: translateX(0); }
	10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
	20%, 40%, 60%, 80% { transform: translateX(2px); }
`, Ti = st(wt)(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(3),
  padding: e.spacing(3),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "&.shake": {
    animation: `${Ei} 0.5s ease-in-out`
  },
  [e.breakpoints.down("sm")]: {
    padding: e.spacing(2),
    gap: e.spacing(2)
  },
  [e.breakpoints.down("xs")]: {
    padding: e.spacing(1),
    gap: e.spacing(1.5)
  }
})), Ci = st(wt)(({ theme: e }) => ({
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
})), xi = st(Lr)(({ theme: e }) => ({
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
})), pr = st(jr)(({ theme: e }) => ({
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
})), ki = ({
  digitCount: e = 6,
  onVerify: t,
  onVerifySuccess: r,
  onVerifyError: n,
  showResend: o = !0,
  onResend: a,
  resendCooldown: s = 60,
  expirationTime: c = 300,
  instructionText: u = "Enter the code sent to your email",
  placeholder: d = "0",
  showExpirationTimer: p = !0
}) => {
  const [m, h] = Se(!1), [S, g] = Se(null), [l, E] = Se(null), [I, N] = Se(!1), [D, O] = Se(0), [y, _] = Se(c), [V, Q] = Se(!1), U = Ir([]), { control: se, handleSubmit: K, setValue: i, getValues: C, clearErrors: v, reset: R } = Dr({
    defaultValues: {
      otp: ""
    }
  }), M = ke(async () => {
    try {
      if (!navigator.clipboard) {
        g("Clipboard access not supported in this browser");
        return;
      }
      const x = (await navigator.clipboard.readText()).replace(/\D/g, "");
      if (x.length === 0) {
        g("No valid OTP found in clipboard");
        return;
      }
      if (x.length < e) {
        g(
          `OTP in clipboard is too short. Expected ${e} digits, got ${x.length}`
        );
        return;
      }
      const A = (C("otp") || "").split("");
      for (let W = 0; W < Math.min(x.length, e); W++)
        A[W] = x[W], U.current[W] && (U.current[W].value = x[W]);
      const k = A.join("");
      i("otp", k), v("otp"), g(null), E(null);
      const B = Math.min(x.length, e - 1), L = U.current[B];
      L && L.focus(), E("OTP pasted successfully!"), setTimeout(() => E(null), 2e3);
    } catch (T) {
      const x = T instanceof Error ? T.message : "Failed to read from clipboard";
      g(x), N(!0), setTimeout(() => N(!1), 500);
    }
  }, [e, C, i, v]);
  ct(() => {
    const T = (x) => {
      const A = x.target.closest("[data-otp-component]") !== null, k = document.activeElement, B = k && k.tagName === "INPUT";
      (A || !B) && (x.preventDefault(), M());
    };
    return document.addEventListener("paste", T), () => document.removeEventListener("paste", T);
  }, [M]), ct(() => {
    let T;
    return D > 0 && (T = window.setInterval(() => {
      O((x) => x - 1);
    }, 1e3)), () => clearInterval(T);
  }, [D]), ct(() => {
    let T;
    return y > 0 && p && (T = window.setInterval(() => {
      _((x) => x <= 1 ? (Q(!0), 0) : x - 1);
    }, 1e3)), () => clearInterval(T);
  }, [y, p]);
  const Z = (T) => {
    const x = Math.floor(T / 60), P = T % 60;
    return `${x}:${P.toString().padStart(2, "0")}`;
  }, ne = ke(
    (T, x) => {
      const A = (C("otp") || "").split("");
      for (let W = 0; W < T.length && W < e; W++)
        A[W] = T[W], U.current[W] && (U.current[W].value = T[W]);
      const k = A.join("");
      i("otp", k), x(k);
      const B = Math.min(T.length, e - 1), L = U.current[B];
      L && L.focus();
    },
    [e, C, i]
  ), de = ke(
    (T, x, P) => {
      const k = (C("otp") || "").split("");
      k[T] = x;
      const B = k.join("");
      if (i("otp", B), P(B), x && T < e - 1) {
        const L = U.current[T + 1];
        L && L.focus();
      }
    },
    [e, C, i]
  ), b = ke(
    (T, x, P) => {
      const A = x.replace(/\D/g, "");
      if (A.length > 1) {
        const k = A.slice(0, e);
        ne(k, P);
      } else
        de(T, A, P);
      v("otp"), g(null), E(null);
    },
    [e, v, ne, de]
  ), $ = ke(
    (T, x) => {
      if (x.key === "Backspace") {
        const A = (C("otp") || "").split("");
        if (A[T])
          A[T] = "";
        else if (T > 0) {
          A[T - 1] = "";
          const B = U.current[T - 1];
          B && B.focus();
        }
        const k = A.join("");
        i("otp", k);
      }
    },
    [C, i]
  ), F = async (T) => {
    if (V) {
      g("OTP has expired. Please request a new one.");
      return;
    }
    const x = T.otp || "";
    if (x.length !== e) {
      g(`Please enter all ${e} digits.`), N(!0), setTimeout(() => N(!1), 500);
      return;
    }
    h(!0), g(null), E(null);
    try {
      const P = await t(x);
      E("Verification successful!"), g(null), setTimeout(() => {
        r(P);
      }, 2e3);
    } catch (P) {
      const A = P instanceof Error ? P.message : "Verification failed. Please try again.";
      g(A), E(null), N(!0), setTimeout(() => N(!1), 500), n(P instanceof Error ? P : new Error(A));
    } finally {
      h(!1);
    }
  }, j = () => {
    if (D > 0) return;
    O(s), _(c), Q(!1), R(), g(null), E(null), v(), a && a();
    const T = U.current[0];
    T && T.focus();
  };
  return /* @__PURE__ */ oe(Ti, { className: I ? "shake" : "", "data-otp-component": !0, children: [
    /* @__PURE__ */ oe(
      It,
      {
        variant: "h6",
        component: "h2",
        textAlign: "center",
        gutterBottom: !0,
        children: u
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
    p && y > 0 && /* @__PURE__ */ oe(It, { variant: "body2", color: "text.secondary", children: [
      "Code expires in: ",
      Z(y)
    ] }, void 0, !0, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 482,
      columnNumber: 5
    }, void 0),
    V && /* @__PURE__ */ oe(lt, { severity: "warning", sx: { width: "100%" }, children: "OTP has expired. Please request a new one." }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 488,
      columnNumber: 5
    }, void 0),
    S && /* @__PURE__ */ oe(Dt, { in: !!S, children: /* @__PURE__ */ oe(lt, { severity: "error", sx: { width: "100%" }, children: S }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 495,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 494,
      columnNumber: 5
    }, void 0),
    l && /* @__PURE__ */ oe(Dt, { in: !!l, children: /* @__PURE__ */ oe(lt, { severity: "success", sx: { width: "100%" }, children: l }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 503,
      columnNumber: 6
    }, void 0) }, void 0, !1, {
      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
      lineNumber: 502,
      columnNumber: 5
    }, void 0),
    /* @__PURE__ */ oe(
      wt,
      {
        component: "form",
        onSubmit: K(F),
        sx: { width: "100%" },
        children: [
          /* @__PURE__ */ oe(Ci, { children: Array.from({ length: e }, (T, x) => /* @__PURE__ */ oe(
            Mr,
            {
              name: "otp",
              control: se,
              render: ({ field: { onChange: P, value: A } }) => /* @__PURE__ */ oe(
                xi,
                {
                  inputRef: (k) => U.current[x] = k,
                  variant: "outlined",
                  placeholder: d,
                  inputProps: {
                    maxLength: 1,
                    style: { textAlign: "center" }
                  },
                  value: (A || "").charAt(x) || "",
                  onChange: (k) => b(
                    x,
                    k.target.value,
                    P
                  ),
                  onKeyDown: (k) => $(
                    x,
                    k
                  ),
                  disabled: m || V,
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
            x,
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
          /* @__PURE__ */ oe(
            Fr,
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
                /* @__PURE__ */ oe(
                  pr,
                  {
                    type: "submit",
                    variant: "contained",
                    disabled: m || V,
                    startIcon: m ? /* @__PURE__ */ oe(Vr, { size: 18, color: "inherit" }, void 0, !1, {
                      fileName: "/Users/koddiangeloevangelista/Desktop/Nova/lumora-otp-component/src/components/LumoraOTP.tsx",
                      lineNumber: 573,
                      columnNumber: 9
                    }, void 0) : null,
                    children: m ? "Verifying..." : "Verify"
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
                o && /* @__PURE__ */ oe(
                  pr,
                  {
                    variant: "outlined",
                    onClick: j,
                    disabled: D > 0 || m,
                    children: D > 0 ? `Resend in ${D}s` : "Resend Otp"
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
  ki as LumoraOTP
};
