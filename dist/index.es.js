import { jsxs as Le, jsx as se } from "react/jsx-runtime";
import * as dr from "react";
import { useState as Se, useRef as Rr, useCallback as Re, useEffect as ct } from "react";
import { useForm as kr, Controller as Ir } from "react-hook-form";
import { keyframes as Mr, Box as wt, TextField as Nr, Button as Dr, Typography as It, Alert as lt, Fade as Mt, Stack as Br, CircularProgress as jr } from "@mui/material";
import Fr from "@emotion/styled";
import "@emotion/react";
function ye(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Vr = "$$material";
function Lr(e) {
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
var Wr = {
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
function Yr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ur = /[A-Z]|^ms/g, zr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pr = function(t) {
  return t.charCodeAt(1) === 45;
}, Nt = function(t) {
  return t != null && typeof t != "boolean";
}, ut = /* @__PURE__ */ Yr(function(e) {
  return pr(e) ? e : e.replace(Ur, "-$&").toLowerCase();
}), Dt = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(zr, function(n, o, a) {
          return he = {
            name: o,
            styles: a,
            next: he
          }, o;
        });
  }
  return Wr[t] !== 1 && !pr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ze(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
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
      return Gr(e, t, r);
    }
  }
  var f = r;
  return f;
}
function Gr(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ze(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var c = s;
        Nt(c) && (n += ut(a) + ":" + Dt(a, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          Nt(s[f]) && (n += ut(a) + ":" + Dt(a, s[f]) + ";");
      else {
        var d = ze(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += ut(a) + ":" + d + ";";
            break;
          }
          default:
            n += a + "{" + d + "}";
        }
      }
    }
  return n;
}
var Bt = /label:\s*([^\s;{]+)\s*(;|$)/g, he;
function qr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  he = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += ze(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += ze(r, t, e[c]), n) {
      var f = a;
      o += f[c];
    }
  Bt.lastIndex = 0;
  for (var d = "", p; (p = Bt.exec(o)) !== null; )
    d += "-" + p[1];
  var m = Lr(o) + d;
  return {
    name: m,
    styles: o,
    next: he
  };
}
function Kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var St = { exports: {} }, We = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Hr() {
  if (jt) return U;
  jt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function N(y) {
    if (typeof y == "object" && y !== null) {
      var _ = y.$$typeof;
      switch (_) {
        case t:
          switch (y = y.type, y) {
            case f:
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
                case C:
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
  function $(y) {
    return N(y) === d;
  }
  return U.AsyncMode = f, U.ConcurrentMode = d, U.ContextConsumer = c, U.ContextProvider = s, U.Element = t, U.ForwardRef = p, U.Fragment = n, U.Lazy = g, U.Memo = C, U.Portal = r, U.Profiler = a, U.StrictMode = o, U.Suspense = m, U.isAsyncMode = function(y) {
    return $(y) || N(y) === f;
  }, U.isConcurrentMode = $, U.isContextConsumer = function(y) {
    return N(y) === c;
  }, U.isContextProvider = function(y) {
    return N(y) === s;
  }, U.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, U.isForwardRef = function(y) {
    return N(y) === p;
  }, U.isFragment = function(y) {
    return N(y) === n;
  }, U.isLazy = function(y) {
    return N(y) === g;
  }, U.isMemo = function(y) {
    return N(y) === C;
  }, U.isPortal = function(y) {
    return N(y) === r;
  }, U.isProfiler = function(y) {
    return N(y) === a;
  }, U.isStrictMode = function(y) {
    return N(y) === o;
  }, U.isSuspense = function(y) {
    return N(y) === m;
  }, U.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === d || y === a || y === o || y === m || y === h || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === C || y.$$typeof === s || y.$$typeof === c || y.$$typeof === p || y.$$typeof === S || y.$$typeof === M || y.$$typeof === I || y.$$typeof === l);
  }, U.typeOf = N, U;
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
var Ft;
function Xr() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function N(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === d || w === a || w === o || w === m || w === h || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === C || w.$$typeof === s || w.$$typeof === c || w.$$typeof === p || w.$$typeof === S || w.$$typeof === M || w.$$typeof === I || w.$$typeof === l);
    }
    function $(w) {
      if (typeof w == "object" && w !== null) {
        var ue = w.$$typeof;
        switch (ue) {
          case t:
            var Ve = w.type;
            switch (Ve) {
              case f:
              case d:
              case n:
              case a:
              case o:
              case m:
                return Ve;
              default:
                var kt = Ve && Ve.$$typeof;
                switch (kt) {
                  case c:
                  case p:
                  case g:
                  case C:
                  case s:
                    return kt;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var y = f, _ = d, L = c, J = s, Y = t, ae = p, K = n, i = g, T = C, v = r, k = a, D = o, Z = m, ne = !1;
    function de(w) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(w) || $(w) === f;
    }
    function b(w) {
      return $(w) === d;
    }
    function O(w) {
      return $(w) === c;
    }
    function V(w) {
      return $(w) === s;
    }
    function F(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function E(w) {
      return $(w) === p;
    }
    function x(w) {
      return $(w) === n;
    }
    function P(w) {
      return $(w) === g;
    }
    function A(w) {
      return $(w) === C;
    }
    function R(w) {
      return $(w) === r;
    }
    function B(w) {
      return $(w) === a;
    }
    function j(w) {
      return $(w) === o;
    }
    function W(w) {
      return $(w) === m;
    }
    z.AsyncMode = y, z.ConcurrentMode = _, z.ContextConsumer = L, z.ContextProvider = J, z.Element = Y, z.ForwardRef = ae, z.Fragment = K, z.Lazy = i, z.Memo = T, z.Portal = v, z.Profiler = k, z.StrictMode = D, z.Suspense = Z, z.isAsyncMode = de, z.isConcurrentMode = b, z.isContextConsumer = O, z.isContextProvider = V, z.isElement = F, z.isForwardRef = E, z.isFragment = x, z.isLazy = P, z.isMemo = A, z.isPortal = R, z.isProfiler = B, z.isStrictMode = j, z.isSuspense = W, z.isValidElementType = N, z.typeOf = $;
  }()), z;
}
var Vt;
function mr() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? We.exports = Hr() : We.exports = Xr()), We.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ft, Lt;
function Qr() {
  if (Lt) return ft;
  Lt = 1;
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
      var f = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (f.join("") !== "0123456789")
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
    for (var c, f = n(a), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        t.call(c, m) && (f[m] = c[m]);
      if (e) {
        d = e(c);
        for (var h = 0; h < d.length; h++)
          r.call(c, d[h]) && (f[d[h]] = c[d[h]]);
      }
    }
    return f;
  }, ft;
}
var dt, Wt;
function $t() {
  if (Wt) return dt;
  Wt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dt = e, dt;
}
var pt, Yt;
function gr() {
  return Yt || (Yt = 1, pt = Function.call.bind(Object.prototype.hasOwnProperty)), pt;
}
var mt, Ut;
function Jr() {
  if (Ut) return mt;
  Ut = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $t(), r = {}, n = gr();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var h = Error(
                (f || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = a[p](s, p, f, c, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + c + " type: " + m.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, mt = o, mt;
}
var gt, zt;
function Zr() {
  if (zt) return gt;
  zt = 1;
  var e = mr(), t = Qr(), r = $t(), n = gr(), o = Jr(), a = function() {
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
  return gt = function(c, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(b) {
      var O = b && (d && b[d] || b[p]);
      if (typeof O == "function")
        return O;
    }
    var h = "<<anonymous>>", C = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: I(),
      arrayOf: N,
      element: $(),
      elementType: y(),
      instanceOf: _,
      node: ae(),
      objectOf: J,
      oneOf: L,
      oneOfType: Y,
      shape: i,
      exact: T
    };
    function g(b, O) {
      return b === O ? b !== 0 || 1 / b === 1 / O : b !== b && O !== O;
    }
    function l(b, O) {
      this.message = b, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function S(b) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, V = 0;
      function F(x, P, A, R, B, j, W) {
        if (R = R || h, j = j || A, W !== r) {
          if (f) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = R + ":" + A;
            !O[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ue] = !0, V++);
          }
        }
        return P[A] == null ? x ? P[A] === null ? new l("The " + B + " `" + j + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new l("The " + B + " `" + j + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : b(P, A, R, B, j);
      }
      var E = F.bind(null, !1);
      return E.isRequired = F.bind(null, !0), E;
    }
    function M(b) {
      function O(V, F, E, x, P, A) {
        var R = V[F], B = D(R);
        if (B !== b) {
          var j = Z(R);
          return new l(
            "Invalid " + x + " `" + P + "` of type " + ("`" + j + "` supplied to `" + E + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return S(O);
    }
    function I() {
      return S(s);
    }
    function N(b) {
      function O(V, F, E, x, P) {
        if (typeof b != "function")
          return new l("Property `" + P + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var A = V[F];
        if (!Array.isArray(A)) {
          var R = D(A);
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected an array."));
        }
        for (var B = 0; B < A.length; B++) {
          var j = b(A, B, E, x, P + "[" + B + "]", r);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return S(O);
    }
    function $() {
      function b(O, V, F, E, x) {
        var P = O[V];
        if (!c(P)) {
          var A = D(P);
          return new l("Invalid " + E + " `" + x + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(b);
    }
    function y() {
      function b(O, V, F, E, x) {
        var P = O[V];
        if (!e.isValidElementType(P)) {
          var A = D(P);
          return new l("Invalid " + E + " `" + x + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(b);
    }
    function _(b) {
      function O(V, F, E, x, P) {
        if (!(V[F] instanceof b)) {
          var A = b.name || h, R = de(V[F]);
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return S(O);
    }
    function L(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function O(V, F, E, x, P) {
        for (var A = V[F], R = 0; R < b.length; R++)
          if (g(A, b[R]))
            return null;
        var B = JSON.stringify(b, function(W, w) {
          var ue = Z(w);
          return ue === "symbol" ? String(w) : w;
        });
        return new l("Invalid " + x + " `" + P + "` of value `" + String(A) + "` " + ("supplied to `" + E + "`, expected one of " + B + "."));
      }
      return S(O);
    }
    function J(b) {
      function O(V, F, E, x, P) {
        if (typeof b != "function")
          return new l("Property `" + P + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var A = V[F], R = D(A);
        if (R !== "object")
          return new l("Invalid " + x + " `" + P + "` of type " + ("`" + R + "` supplied to `" + E + "`, expected an object."));
        for (var B in A)
          if (n(A, B)) {
            var j = b(A, B, E, x, P + "." + B, r);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return S(O);
    }
    function Y(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var O = 0; O < b.length; O++) {
        var V = b[O];
        if (typeof V != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(V) + " at index " + O + "."
          ), s;
      }
      function F(E, x, P, A, R) {
        for (var B = [], j = 0; j < b.length; j++) {
          var W = b[j], w = W(E, x, P, A, R, r);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && B.push(w.data.expectedType);
        }
        var ue = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new l("Invalid " + A + " `" + R + "` supplied to " + ("`" + P + "`" + ue + "."));
      }
      return S(F);
    }
    function ae() {
      function b(O, V, F, E, x) {
        return v(O[V]) ? null : new l("Invalid " + E + " `" + x + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return S(b);
    }
    function K(b, O, V, F, E) {
      return new l(
        (b || "React class") + ": " + O + " type `" + V + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function i(b) {
      function O(V, F, E, x, P) {
        var A = V[F], R = D(A);
        if (R !== "object")
          return new l("Invalid " + x + " `" + P + "` of type `" + R + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var B in b) {
          var j = b[B];
          if (typeof j != "function")
            return K(E, x, P, B, Z(j));
          var W = j(A, B, E, x, P + "." + B, r);
          if (W)
            return W;
        }
        return null;
      }
      return S(O);
    }
    function T(b) {
      function O(V, F, E, x, P) {
        var A = V[F], R = D(A);
        if (R !== "object")
          return new l("Invalid " + x + " `" + P + "` of type `" + R + "` " + ("supplied to `" + E + "`, expected `object`."));
        var B = t({}, V[F], b);
        for (var j in B) {
          var W = b[j];
          if (n(b, j) && typeof W != "function")
            return K(E, x, P, j, Z(W));
          if (!W)
            return new l(
              "Invalid " + x + " `" + P + "` key `" + j + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(V[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var w = W(A, j, E, x, P + "." + j, r);
          if (w)
            return w;
        }
        return null;
      }
      return S(O);
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
          var O = m(b);
          if (O) {
            var V = O.call(b), F;
            if (O !== b.entries) {
              for (; !(F = V.next()).done; )
                if (!v(F.value))
                  return !1;
            } else
              for (; !(F = V.next()).done; ) {
                var E = F.value;
                if (E && !v(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(b, O) {
      return b === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function D(b) {
      var O = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : k(O, b) ? "symbol" : O;
    }
    function Z(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var O = D(b);
      if (O === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function ne(b) {
      var O = Z(b);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function de(b) {
      return !b.constructor || !b.constructor.name ? h : b.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, gt;
}
var ht, Gt;
function en() {
  if (Gt) return ht;
  Gt = 1;
  var e = $t();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ht = function() {
    function n(s, c, f, d, p, m) {
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
  var tn = mr(), rn = !0;
  St.exports = Zr()(tn.isElement, rn);
} else
  St.exports = en()();
var nn = St.exports;
const ke = /* @__PURE__ */ Kr(nn);
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function on(e, t) {
  const r = Fr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function an(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const qt = [];
function Te(e) {
  return qt[0] = e, qr(qt);
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
var Kt;
function sn() {
  if (Kt) return H;
  Kt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), C = Symbol.for("react.client.reference");
  function g(l) {
    if (typeof l == "object" && l !== null) {
      var S = l.$$typeof;
      switch (S) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case f:
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
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return H.ContextConsumer = a, H.ContextProvider = s, H.Element = e, H.ForwardRef = c, H.Fragment = r, H.Lazy = m, H.Memo = p, H.Portal = t, H.Profiler = o, H.StrictMode = n, H.Suspense = f, H.SuspenseList = d, H.isContextConsumer = function(l) {
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
    return g(l) === f;
  }, H.isSuspenseList = function(l) {
    return g(l) === d;
  }, H.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === f || l === d || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === p || l.$$typeof === s || l.$$typeof === a || l.$$typeof === c || l.$$typeof === C || l.getModuleId !== void 0);
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
var Ht;
function cn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var S = l.$$typeof;
        switch (S) {
          case t:
            switch (l = l.type, l) {
              case n:
              case a:
              case o:
              case d:
              case p:
              case C:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case f:
                  case h:
                  case m:
                    return l;
                  case s:
                    return l;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    X.ContextConsumer = s, X.ContextProvider = c, X.Element = t, X.ForwardRef = f, X.Fragment = n, X.Lazy = h, X.Memo = m, X.Portal = r, X.Profiler = a, X.StrictMode = o, X.Suspense = d, X.SuspenseList = p, X.isContextConsumer = function(l) {
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
      return typeof l == "string" || typeof l == "function" || l === n || l === a || l === o || l === d || l === p || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === m || l.$$typeof === c || l.$$typeof === s || l.$$typeof === f || l.$$typeof === g || l.getModuleId !== void 0);
    }, X.typeOf = e;
  }()), X;
}
process.env.NODE_ENV === "production" ? Et.exports = sn() : Et.exports = cn();
var Ge = Et.exports;
function me(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function hr(e) {
  if (/* @__PURE__ */ dr.isValidElement(e) || Ge.isValidElementType(e) || !me(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = hr(e[r]);
  }), t;
}
function ie(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return me(e) && me(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ dr.isValidElement(t[o]) || Ge.isValidElementType(t[o]) ? n[o] = t[o] : me(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && me(e[o]) ? n[o] = ie(e[o], t[o], r) : r.clone ? n[o] = me(t[o]) ? hr(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const ln = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function un(e) {
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
  } = e, a = ln(t), s = Object.keys(a);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function f(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, C) {
    const g = s.indexOf(C);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : C) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const C = s.indexOf(h);
    return C === 0 ? c(s[1]) : C === s.length - 1 ? f(s[C]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: c,
    down: f,
    between: d,
    only: p,
    not: m,
    unit: r,
    ...o
  };
}
function Xt(e, t) {
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
function fn(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function dn(e, t) {
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
function pn(e) {
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
const mn = {
  borderRadius: 4
}, ve = process.env.NODE_ENV !== "production" ? ke.oneOfType([ke.number, ke.string, ke.object, ke.array]) : {};
function De(e, t) {
  return t ? ie(e, t, {
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
}, Qt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ke[e]}px)`
}, gn = {
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
    const a = n.breakpoints || Qt;
    return t.reduce((s, c, f) => (s[a.up(a.keys[f])] = r(t[f]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Qt;
    return Object.keys(t).reduce((s, c) => {
      if (fn(a.keys, c)) {
        const f = dn(n.containerQueries ? n : gn, c);
        f && (s[f] = r(t[c], c));
      } else if (Object.keys(a.values || Ke).includes(c)) {
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
function hn(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function Jt(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Ot(e) {
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
    const c = s[t], f = s.theme, d = He(f, n) || {};
    return ge(s, c, (m) => {
      let h = qe(d, o, m);
      return m === h && typeof m == "string" && (h = qe(d, o, `${t}${m === "default" ? "" : Ot(m)}`, m)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ve
  } : {}, a.filterProps = [t], a;
}
function yn(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const bn = {
  m: "margin",
  p: "padding"
}, vn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Sn = yn((e) => {
  if (e.length > 2)
    if (Zt[e])
      e = Zt[e];
    else
      return [e];
  const [t, r] = e.split(""), n = bn[t], o = vn[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Xe = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Qe = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], En = [...Xe, ...Qe];
function je(e, t, r, n) {
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
function _t(e) {
  return je(e, "spacing", 8, "spacing");
}
function Fe(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Cn(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Fe(t, r), n), {});
}
function Tn(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Sn(r), a = Cn(o, n), s = e[r];
  return ge(e, s, a);
}
function yr(e, t) {
  const r = _t(e.theme);
  return Object.keys(e).map((n) => Tn(e, t, n, r)).reduce(De, {});
}
function ee(e) {
  return yr(e, Xe);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Xe.reduce((e, t) => (e[t] = ve, e), {}) : {};
ee.filterProps = Xe;
function te(e) {
  return yr(e, Qe);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Qe.reduce((e, t) => (e[t] = ve, e), {}) : {};
te.filterProps = Qe;
process.env.NODE_ENV !== "production" && En.reduce((e, t) => (e[t] = ve, e), {});
function br(e = 8, t = _t({
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
function Je(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? De(o, t[a](n)) : o, {});
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
const xn = le("border", ce), wn = le("borderTop", ce), $n = le("borderRight", ce), On = le("borderBottom", ce), _n = le("borderLeft", ce), An = le("borderColor"), Pn = le("borderTopColor"), Rn = le("borderRightColor"), kn = le("borderBottomColor"), In = le("borderLeftColor"), Mn = le("outline", ce), Nn = le("outlineColor"), Ze = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = je(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Fe(t, n)
    });
    return ge(e, e.borderRadius, r);
  }
  return null;
};
Ze.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ve
} : {};
Ze.filterProps = ["borderRadius"];
Je(xn, wn, $n, On, _n, An, Pn, Rn, kn, In, Ze, Mn, Nn);
const et = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = je(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Fe(t, n)
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
    const t = je(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Fe(t, n)
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
    const t = je(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Fe(t, n)
    });
    return ge(e, e.rowGap, r);
  }
  return null;
};
rt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ve
} : {};
rt.filterProps = ["rowGap"];
const Dn = re({
  prop: "gridColumn"
}), Bn = re({
  prop: "gridRow"
}), jn = re({
  prop: "gridAutoFlow"
}), Fn = re({
  prop: "gridAutoColumns"
}), Vn = re({
  prop: "gridAutoRows"
}), Ln = re({
  prop: "gridTemplateColumns"
}), Wn = re({
  prop: "gridTemplateRows"
}), Yn = re({
  prop: "gridTemplateAreas"
}), Un = re({
  prop: "gridArea"
});
Je(et, tt, rt, Dn, Bn, jn, Fn, Vn, Ln, Wn, Yn, Un);
function Ae(e, t) {
  return t === "grey" ? t : e;
}
const zn = re({
  prop: "color",
  themeKey: "palette",
  transform: Ae
}), Gn = re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ae
}), qn = re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ae
});
Je(zn, Gn, qn);
function oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Kn = re({
  prop: "width",
  transform: oe
}), At = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, c, f;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || Ke[r];
      return n ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: oe(r)
      };
    };
    return ge(e, e.maxWidth, t);
  }
  return null;
};
At.filterProps = ["maxWidth"];
const Hn = re({
  prop: "minWidth",
  transform: oe
}), Xn = re({
  prop: "height",
  transform: oe
}), Qn = re({
  prop: "maxHeight",
  transform: oe
}), Jn = re({
  prop: "minHeight",
  transform: oe
});
re({
  prop: "size",
  cssProperty: "width",
  transform: oe
});
re({
  prop: "size",
  cssProperty: "height",
  transform: oe
});
const Zn = re({
  prop: "boxSizing"
});
Je(Kn, At, Hn, Xn, Qn, Jn, Zn);
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
    transform: oe
  },
  maxWidth: {
    style: At
  },
  minWidth: {
    transform: oe
  },
  height: {
    transform: oe
  },
  maxHeight: {
    transform: oe
  },
  minHeight: {
    transform: oe
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
function eo(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function to(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ro() {
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
      return g === l && typeof g == "string" && (l = qe(h, p, `${r}${g === "default" ? "" : Ot(g)}`, g)), f === !1 ? l : {
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
    const s = o.unstable_sxConfig ?? nt;
    function c(f) {
      let d = f;
      if (typeof f == "function")
        d = f(o);
      else if (typeof f != "object")
        return f;
      if (!d)
        return null;
      const p = hn(o.breakpoints), m = Object.keys(p);
      let h = p;
      return Object.keys(d).forEach((C) => {
        const g = to(d[C], o);
        if (g != null)
          if (typeof g == "object")
            if (s[C])
              h = De(h, e(C, g, o, s));
            else {
              const l = ge({
                theme: o
              }, g, (S) => ({
                [C]: S
              }));
              eo(l, g) ? h[C] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : h = De(h, l);
            }
          else
            h = De(h, e(C, g, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": Xt(o, Jt(m, h))
      } : Xt(o, Jt(m, h));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const Pe = ro();
Pe.filterProps = ["sx"];
function no(e, t) {
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
function vr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, c = un(r), f = br(o);
  let d = ie({
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
      ...mn,
      ...a
    }
  }, s);
  return d = pn(d), d.applyStyles = no, d = t.reduce((p, m) => ie(p, m), d), d.unstable_sxConfig = {
    ...nt,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return Pe({
      sx: m,
      theme: this
    });
  }, d;
}
const er = (e) => e, oo = () => {
  let e = er;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = er;
    }
  };
}, io = oo(), ao = {
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
function so(e, t, r = "Mui") {
  const n = ao[t];
  return n ? `${r}-${n}` : `${io.generate(e)}-${t}`;
}
function Sr(e, t = "") {
  return e.displayName || e.name || t;
}
function tr(e, t, r) {
  const n = Sr(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function co(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Sr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ge.ForwardRef:
          return tr(e, e.render, "ForwardRef");
        case Ge.Memo:
          return tr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function lo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Te(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Te(o.style));
  }), n;
}
const uo = vr();
function yt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ce(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function fo(e) {
  return e ? (t, r) => r[e] : null;
}
function po(e, t, r) {
  e.theme = yo(e.theme) ? r : e.theme[t] || e.theme;
}
function Ue(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Ue(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Ce(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? Ce(Te(s), r) : s;
    }
    return Er(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? Ce(Te(n.style), r) : n.style : r ? Ce(Te(n), r) : n;
}
function Er(e, t, r = [], n = void 0) {
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
    }), r.push(n ? Ce(Te(c.style(o)), n) : c.style(o))) : r.push(n ? Ce(Te(c.style), n) : c.style);
  }
  return r;
}
function mo(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = uo,
    rootShouldForwardProp: n = yt,
    slotShouldForwardProp: o = yt
  } = e;
  function a(c) {
    po(c, t, r);
  }
  return (c, f = {}) => {
    an(c, (_) => _.filter((L) => L !== Pe));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = fo(Cr(p)),
      ...g
    } = f, l = d && d.startsWith("Mui") || p ? "components" : "custom", S = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), M = h || !1;
    let I = yt;
    p === "Root" || p === "root" ? I = n : p ? I = o : bo(c) && (I = void 0);
    const N = on(c, {
      shouldForwardProp: I,
      label: ho(d, p),
      ...g
    }), $ = (_) => {
      if (_.__emotion_real === _)
        return _;
      if (typeof _ == "function")
        return function(J) {
          return Ue(J, _, J.theme.modularCssLayers ? l : void 0);
        };
      if (me(_)) {
        const L = lo(_);
        return function(Y) {
          return L.variants ? Ue(Y, L, Y.theme.modularCssLayers ? l : void 0) : Y.theme.modularCssLayers ? Ce(L.style, l) : L.style;
        };
      }
      return _;
    }, y = (..._) => {
      const L = [], J = _.map($), Y = [];
      if (L.push(a), d && C && Y.push(function(T) {
        var Z, ne;
        const k = (ne = (Z = T.theme.components) == null ? void 0 : Z[d]) == null ? void 0 : ne.styleOverrides;
        if (!k)
          return null;
        const D = {};
        for (const de in k)
          D[de] = Ue(T, k[de], T.theme.modularCssLayers ? "theme" : void 0);
        return C(T, D);
      }), d && !S && Y.push(function(T) {
        var D, Z;
        const v = T.theme, k = (Z = (D = v == null ? void 0 : v.components) == null ? void 0 : D[d]) == null ? void 0 : Z.variants;
        return k ? Er(T, k, [], T.theme.modularCssLayers ? "theme" : void 0) : null;
      }), M || Y.push(Pe), Array.isArray(J[0])) {
        const i = J.shift(), T = new Array(L.length).fill(""), v = new Array(Y.length).fill("");
        let k;
        k = [...T, ...i, ...v], k.raw = [...T, ...i.raw, ...v], L.unshift(k);
      }
      const ae = [...L, ...J, ...Y], K = N(...ae);
      return c.muiName && (K.muiName = c.muiName), process.env.NODE_ENV !== "production" && (K.displayName = go(d, p, c)), K;
    };
    return N.withConfig && (y.withConfig = N.withConfig), y;
  };
}
function go(e, t, r) {
  return e ? `${e}${Ot(t || "")}` : `Styled(${co(r)})`;
}
function ho(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Cr(t || "Root")}`), r;
}
function yo(e) {
  for (const t in e)
    return !1;
  return !0;
}
function bo(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Cr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function vo(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Pt(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), vo(e, t, r);
}
function So(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function be(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return be(So(e));
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
const Eo = (e) => {
  const t = be(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Me = (e, t) => {
  try {
    return Eo(e);
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
function Tr(e) {
  e = be(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (d, p = (d + r / 30) % 12) => o - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(t[3])), ot({
    type: c,
    values: f
  });
}
function Ct(e) {
  e = be(e);
  let t = e.type === "hsl" || e.type === "hsla" ? be(Tr(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function rr(e, t) {
  const r = Ct(e), n = Ct(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function xr(e, t) {
  return e = be(e), t = Pt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ot(e);
}
function Ee(e, t, r) {
  try {
    return xr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function it(e, t) {
  if (e = be(e), t = Pt(t), e.type.includes("hsl"))
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
  if (e = be(e), t = Pt(t), e.type.includes("hsl"))
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
function Co(e, t = 0.15) {
  return Ct(e) > 0.5 ? it(e, t) : at(e, t);
}
function Ye(e, t, r) {
  try {
    return Co(e, t);
  } catch {
    return e;
  }
}
function To(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const nr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, xo = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!r || r && !r([...a, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...a, c], Array.isArray(f) ? [...s, c] : s) : t([...a, c], f, s));
    });
  }
  n(e);
}, wo = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return xo(
    e,
    (c, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(c, f))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, m = wo(c, f);
        Object.assign(o, {
          [p]: m
        }), nr(a, c, `var(${p})`, d), nr(s, c, `var(${p}, ${m})`, d);
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
function $o(e, t = {}) {
  const {
    getSelector: r = M,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: f = "light",
    ...d
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: h
  } = bt(d, t);
  let C = h;
  const g = {}, {
    [f]: l,
    ...S
  } = s;
  if (Object.entries(S || {}).forEach(([$, y]) => {
    const {
      vars: _,
      css: L,
      varsWithDefaults: J
    } = bt(y, t);
    C = ie(C, J), g[$] = {
      css: L,
      vars: _
    };
  }), l) {
    const {
      css: $,
      vars: y,
      varsWithDefaults: _
    } = bt(l, t);
    C = ie(C, _), g[f] = {
      css: $,
      vars: y
    };
  }
  function M($, y) {
    var L, J;
    let _ = o;
    if (o === "class" && (_ = ".%s"), o === "data" && (_ = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (_ = `[${o}="%s"]`), $) {
      if (_ === "media")
        return e.defaultColorScheme === $ ? ":root" : {
          [`@media (prefers-color-scheme: ${((J = (L = s[$]) == null ? void 0 : L.palette) == null ? void 0 : J.mode) || $})`]: {
            ":root": y
          }
        };
      if (_)
        return e.defaultColorScheme === $ ? `:root, ${_.replace("%s", String($))}` : _.replace("%s", String($));
    }
    return ":root";
  }
  return {
    vars: C,
    generateThemeVars: () => {
      let $ = {
        ...p
      };
      return Object.entries(g).forEach(([, {
        vars: y
      }]) => {
        $ = ie($, y);
      }), $;
    },
    generateStyleSheets: () => {
      var Y, ae;
      const $ = [], y = e.defaultColorScheme || "light";
      function _(K, i) {
        Object.keys(i).length && $.push(typeof K == "string" ? {
          [K]: {
            ...i
          }
        } : K);
      }
      _(r(void 0, {
        ...m
      }), m);
      const {
        [y]: L,
        ...J
      } = g;
      if (L) {
        const {
          css: K
        } = L, i = (ae = (Y = s[y]) == null ? void 0 : Y.palette) == null ? void 0 : ae.mode, T = !n && i ? {
          colorScheme: i,
          ...K
        } : {
          ...K
        };
        _(r(y, {
          ...T
        }), T);
      }
      return Object.entries(J).forEach(([K, {
        css: i
      }]) => {
        var k, D;
        const T = (D = (k = s[K]) == null ? void 0 : k.palette) == null ? void 0 : D.mode, v = !n && T ? {
          colorScheme: T,
          ...i
        } : {
          ...i
        };
        _(r(K, {
          ...v
        }), v);
      }), a && $.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), $;
    }
  };
}
function Oo(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Be = {
  black: "#000",
  white: "#fff"
}, _o = {
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
}, Ie = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, $e = {
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
}, _e = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function wr() {
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
const $r = wr();
function Or() {
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
const Tt = Or();
function or(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = at(e.main, o) : t === "dark" && (e.dark = it(e.main, a)));
}
function ir(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ao(e = "light") {
  return e === "dark" ? {
    main: $e[200],
    light: $e[50],
    dark: $e[400]
  } : {
    main: $e[700],
    light: $e[400],
    dark: $e[800]
  };
}
function Po(e = "light") {
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
function Ro(e = "light") {
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
function ko(e = "light") {
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
function Io(e = "light") {
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
function Mo(e = "light") {
  return e === "dark" ? {
    main: Ie[400],
    light: Ie[300],
    dark: Ie[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ie[500],
    dark: Ie[900]
  };
}
function No(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Rt(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Ao(t), c = e.secondary || Po(t), f = e.error || Ro(t), d = e.info || ko(t), p = e.success || Io(t), m = e.warning || Mo(t);
  function h(S) {
    if (o)
      return No(S);
    const M = rr(S, Tt.text.primary) >= r ? Tt.text.primary : $r.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = rr(S, M);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${M} on ${S}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return M;
  }
  const C = ({
    color: S,
    name: M,
    mainShade: I = 500,
    lightShade: N = 300,
    darkShade: $ = 700
  }) => {
    if (S = {
      ...S
    }, !S.main && S[I] && (S.main = S[I]), !S.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : ye(11, M ? ` (${M})` : "", I));
    if (typeof S.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(S.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ye(12, M ? ` (${M})` : "", JSON.stringify(S.main)));
    return o ? (ir(o, S, "light", N, n), ir(o, S, "dark", $, n)) : (or(S, "light", N, n), or(S, "dark", $, n)), S.contrastText || (S.contrastText = h(S.main)), S;
  };
  let g;
  return t === "light" ? g = wr() : t === "dark" && (g = Or()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ie({
    // A collection of common colors.
    common: {
      ...Be
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: C({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: C({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: C({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: C({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: C({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: C({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: _o,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: C,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...g
  }, a);
}
function Do(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Bo(e, t) {
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
function jo(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ar = {
  textTransform: "uppercase"
}, sr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Fo(e, t) {
  const {
    fontFamily: r = sr,
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
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, C = p || ((S) => `${S / f * h}rem`), g = (S, M, I, N, $) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: C(M),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === sr ? {
      letterSpacing: `${jo(N / M)}em`
    } : {},
    ...$,
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
    button: g(s, 14, 1.75, 0.4, ar),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, ar),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ie({
    htmlFontSize: f,
    pxToRem: C,
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
const Vo = 0.2, Lo = 0.14, Wo = 0.12;
function Q(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Vo})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lo})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Wo})`].join(",");
}
const Yo = ["none", Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Uo = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zo = {
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
function cr(e) {
  return `${Math.round(e)}ms`;
}
function Go(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function qo(e) {
  const t = {
    ...Uo,
    ...e.easing
  }, r = {
    ...zo,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Go,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: f = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : cr(s)} ${c} ${typeof f == "string" ? f : cr(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ko = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ho(e) {
  return me(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function _r(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, c] = o[a];
      !Ho(c) || s.startsWith("unstable_") ? delete n[s] : me(c) && (n[s] = {
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
function lr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Xo = (e) => {
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
function Qo(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : xr(t, Xo(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${lr(r)})` : at(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${lr(r)})` : it(t, r);
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
    shape: f,
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
  }), h = vr(e);
  let C = ie(h, {
    mixins: Bo(h.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Yo.slice(),
    typography: Fo(m, c),
    transitions: qo(s),
    zIndex: {
      ...Ko
    }
  });
  if (C = ie(C, p), C = t.reduce((g, l) => ie(g, l), C), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (S, M) => {
      let I;
      for (I in S) {
        const N = S[I];
        if (g.includes(I) && Object.keys(N).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const $ = so("", I);
            console.error([`MUI: The \`${M}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(S, null, 2), "", `Instead, you need to use the '&.${$}' syntax:`, JSON.stringify({
              root: {
                [`&.${$}`]: N
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          S[I] = {};
        }
      }
    };
    Object.keys(C.components).forEach((S) => {
      const M = C.components[S].styleOverrides;
      M && S.startsWith("Mui") && l(M, S);
    });
  }
  return C.unstable_sxConfig = {
    ...nt,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, C.unstable_sx = function(l) {
    return Pe({
      sx: l,
      theme: this
    });
  }, C.toRuntimeSource = _r, Qo(C), C;
}
function Jo(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Zo = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Jo(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ar(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Pr(e) {
  return e === "dark" ? Zo : [];
}
function ei(e) {
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
      ...Ar(s.mode),
      ...r
    },
    overlays: n || Pr(s.mode),
    ...a
  };
}
function ti(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ri = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ni = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return ri(e.cssVarPrefix).forEach((c) => {
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
function oi(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function u(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ne(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Tr(e);
}
function pe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Me(Ne(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ii(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const fe = (e) => {
  try {
    return e();
  } catch {
  }
}, ai = (e = "mui") => To(e);
function vt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = ei({
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
      ...Ar(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Pr(a)
  }, c;
}
function si(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = ti,
    colorSchemeSelector: f = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, m = Object.keys(r)[0], h = n || (r.light && m !== "light" ? "light" : m), C = ai(a), {
    [h]: g,
    light: l,
    dark: S,
    ...M
  } = r, I = {
    ...M
  };
  let N = g;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (N = !0), !N)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : ye(21, h));
  let $;
  s && ($ = "oklch");
  const y = vt($, I, N, p, h);
  l && !I.light && vt($, I, l, void 0, "light"), S && !I.dark && vt($, I, S, void 0, "dark");
  let _ = {
    defaultColorScheme: h,
    ...y,
    cssVarPrefix: a,
    colorSchemeSelector: f,
    rootSelector: d,
    getCssVar: C,
    colorSchemes: I,
    font: {
      ...Do(y.typography),
      ...y.font
    },
    spacing: ii(p.spacing)
  };
  Object.keys(_.colorSchemes).forEach((K) => {
    const i = _.colorSchemes[K].palette, T = (k) => {
      const D = k.split("-"), Z = D[1], ne = D[2];
      return C(k, i[Z][ne]);
    };
    i.mode === "light" && (u(i.common, "background", "#fff"), u(i.common, "onBackground", "#000")), i.mode === "dark" && (u(i.common, "background", "#000"), u(i.common, "onBackground", "#fff"));
    function v(k, D, Z) {
      if ($) {
        let ne;
        return k === Ee && (ne = `transparent ${((1 - Z) * 100).toFixed(0)}%`), k === G && (ne = `#000 ${(Z * 100).toFixed(0)}%`), k === q && (ne = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${$}, ${D}, ${ne})`;
      }
      return k(D, Z);
    }
    if (oi(i, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), i.mode === "light") {
      u(i.Alert, "errorColor", v(G, i.error.light, 0.6)), u(i.Alert, "infoColor", v(G, i.info.light, 0.6)), u(i.Alert, "successColor", v(G, i.success.light, 0.6)), u(i.Alert, "warningColor", v(G, i.warning.light, 0.6)), u(i.Alert, "errorFilledBg", T("palette-error-main")), u(i.Alert, "infoFilledBg", T("palette-info-main")), u(i.Alert, "successFilledBg", T("palette-success-main")), u(i.Alert, "warningFilledBg", T("palette-warning-main")), u(i.Alert, "errorFilledColor", fe(() => i.getContrastText(i.error.main))), u(i.Alert, "infoFilledColor", fe(() => i.getContrastText(i.info.main))), u(i.Alert, "successFilledColor", fe(() => i.getContrastText(i.success.main))), u(i.Alert, "warningFilledColor", fe(() => i.getContrastText(i.warning.main))), u(i.Alert, "errorStandardBg", v(q, i.error.light, 0.9)), u(i.Alert, "infoStandardBg", v(q, i.info.light, 0.9)), u(i.Alert, "successStandardBg", v(q, i.success.light, 0.9)), u(i.Alert, "warningStandardBg", v(q, i.warning.light, 0.9)), u(i.Alert, "errorIconColor", T("palette-error-main")), u(i.Alert, "infoIconColor", T("palette-info-main")), u(i.Alert, "successIconColor", T("palette-success-main")), u(i.Alert, "warningIconColor", T("palette-warning-main")), u(i.AppBar, "defaultBg", T("palette-grey-100")), u(i.Avatar, "defaultBg", T("palette-grey-400")), u(i.Button, "inheritContainedBg", T("palette-grey-300")), u(i.Button, "inheritContainedHoverBg", T("palette-grey-A100")), u(i.Chip, "defaultBorder", T("palette-grey-400")), u(i.Chip, "defaultAvatarColor", T("palette-grey-700")), u(i.Chip, "defaultIconColor", T("palette-grey-700")), u(i.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), u(i.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), u(i.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), u(i.LinearProgress, "primaryBg", v(q, i.primary.main, 0.62)), u(i.LinearProgress, "secondaryBg", v(q, i.secondary.main, 0.62)), u(i.LinearProgress, "errorBg", v(q, i.error.main, 0.62)), u(i.LinearProgress, "infoBg", v(q, i.info.main, 0.62)), u(i.LinearProgress, "successBg", v(q, i.success.main, 0.62)), u(i.LinearProgress, "warningBg", v(q, i.warning.main, 0.62)), u(i.Skeleton, "bg", $ ? v(Ee, i.text.primary, 0.11) : `rgba(${T("palette-text-primaryChannel")} / 0.11)`), u(i.Slider, "primaryTrack", v(q, i.primary.main, 0.62)), u(i.Slider, "secondaryTrack", v(q, i.secondary.main, 0.62)), u(i.Slider, "errorTrack", v(q, i.error.main, 0.62)), u(i.Slider, "infoTrack", v(q, i.info.main, 0.62)), u(i.Slider, "successTrack", v(q, i.success.main, 0.62)), u(i.Slider, "warningTrack", v(q, i.warning.main, 0.62));
      const k = $ ? v(G, i.background.default, 0.6825) : Ye(i.background.default, 0.8);
      u(i.SnackbarContent, "bg", k), u(i.SnackbarContent, "color", fe(() => $ ? Tt.text.primary : i.getContrastText(k))), u(i.SpeedDialAction, "fabHoverBg", Ye(i.background.paper, 0.15)), u(i.StepConnector, "border", T("palette-grey-400")), u(i.StepContent, "border", T("palette-grey-400")), u(i.Switch, "defaultColor", T("palette-common-white")), u(i.Switch, "defaultDisabledColor", T("palette-grey-100")), u(i.Switch, "primaryDisabledColor", v(q, i.primary.main, 0.62)), u(i.Switch, "secondaryDisabledColor", v(q, i.secondary.main, 0.62)), u(i.Switch, "errorDisabledColor", v(q, i.error.main, 0.62)), u(i.Switch, "infoDisabledColor", v(q, i.info.main, 0.62)), u(i.Switch, "successDisabledColor", v(q, i.success.main, 0.62)), u(i.Switch, "warningDisabledColor", v(q, i.warning.main, 0.62)), u(i.TableCell, "border", v(q, v(Ee, i.divider, 1), 0.88)), u(i.Tooltip, "bg", v(Ee, i.grey[700], 0.92));
    }
    if (i.mode === "dark") {
      u(i.Alert, "errorColor", v(q, i.error.light, 0.6)), u(i.Alert, "infoColor", v(q, i.info.light, 0.6)), u(i.Alert, "successColor", v(q, i.success.light, 0.6)), u(i.Alert, "warningColor", v(q, i.warning.light, 0.6)), u(i.Alert, "errorFilledBg", T("palette-error-dark")), u(i.Alert, "infoFilledBg", T("palette-info-dark")), u(i.Alert, "successFilledBg", T("palette-success-dark")), u(i.Alert, "warningFilledBg", T("palette-warning-dark")), u(i.Alert, "errorFilledColor", fe(() => i.getContrastText(i.error.dark))), u(i.Alert, "infoFilledColor", fe(() => i.getContrastText(i.info.dark))), u(i.Alert, "successFilledColor", fe(() => i.getContrastText(i.success.dark))), u(i.Alert, "warningFilledColor", fe(() => i.getContrastText(i.warning.dark))), u(i.Alert, "errorStandardBg", v(G, i.error.light, 0.9)), u(i.Alert, "infoStandardBg", v(G, i.info.light, 0.9)), u(i.Alert, "successStandardBg", v(G, i.success.light, 0.9)), u(i.Alert, "warningStandardBg", v(G, i.warning.light, 0.9)), u(i.Alert, "errorIconColor", T("palette-error-main")), u(i.Alert, "infoIconColor", T("palette-info-main")), u(i.Alert, "successIconColor", T("palette-success-main")), u(i.Alert, "warningIconColor", T("palette-warning-main")), u(i.AppBar, "defaultBg", T("palette-grey-900")), u(i.AppBar, "darkBg", T("palette-background-paper")), u(i.AppBar, "darkColor", T("palette-text-primary")), u(i.Avatar, "defaultBg", T("palette-grey-600")), u(i.Button, "inheritContainedBg", T("palette-grey-800")), u(i.Button, "inheritContainedHoverBg", T("palette-grey-700")), u(i.Chip, "defaultBorder", T("palette-grey-700")), u(i.Chip, "defaultAvatarColor", T("palette-grey-300")), u(i.Chip, "defaultIconColor", T("palette-grey-300")), u(i.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), u(i.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), u(i.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), u(i.LinearProgress, "primaryBg", v(G, i.primary.main, 0.5)), u(i.LinearProgress, "secondaryBg", v(G, i.secondary.main, 0.5)), u(i.LinearProgress, "errorBg", v(G, i.error.main, 0.5)), u(i.LinearProgress, "infoBg", v(G, i.info.main, 0.5)), u(i.LinearProgress, "successBg", v(G, i.success.main, 0.5)), u(i.LinearProgress, "warningBg", v(G, i.warning.main, 0.5)), u(i.Skeleton, "bg", $ ? v(Ee, i.text.primary, 0.13) : `rgba(${T("palette-text-primaryChannel")} / 0.13)`), u(i.Slider, "primaryTrack", v(G, i.primary.main, 0.5)), u(i.Slider, "secondaryTrack", v(G, i.secondary.main, 0.5)), u(i.Slider, "errorTrack", v(G, i.error.main, 0.5)), u(i.Slider, "infoTrack", v(G, i.info.main, 0.5)), u(i.Slider, "successTrack", v(G, i.success.main, 0.5)), u(i.Slider, "warningTrack", v(G, i.warning.main, 0.5));
      const k = $ ? v(q, i.background.default, 0.985) : Ye(i.background.default, 0.98);
      u(i.SnackbarContent, "bg", k), u(i.SnackbarContent, "color", fe(() => $ ? $r.text.primary : i.getContrastText(k))), u(i.SpeedDialAction, "fabHoverBg", Ye(i.background.paper, 0.15)), u(i.StepConnector, "border", T("palette-grey-600")), u(i.StepContent, "border", T("palette-grey-600")), u(i.Switch, "defaultColor", T("palette-grey-300")), u(i.Switch, "defaultDisabledColor", T("palette-grey-600")), u(i.Switch, "primaryDisabledColor", v(G, i.primary.main, 0.55)), u(i.Switch, "secondaryDisabledColor", v(G, i.secondary.main, 0.55)), u(i.Switch, "errorDisabledColor", v(G, i.error.main, 0.55)), u(i.Switch, "infoDisabledColor", v(G, i.info.main, 0.55)), u(i.Switch, "successDisabledColor", v(G, i.success.main, 0.55)), u(i.Switch, "warningDisabledColor", v(G, i.warning.main, 0.55)), u(i.TableCell, "border", v(G, v(Ee, i.divider, 1), 0.68)), u(i.Tooltip, "bg", v(Ee, i.grey[700], 0.92));
    }
    pe(i.background, "default"), pe(i.background, "paper"), pe(i.common, "background"), pe(i.common, "onBackground"), pe(i, "divider"), Object.keys(i).forEach((k) => {
      const D = i[k];
      k !== "tonalOffset" && D && typeof D == "object" && (D.main && u(i[k], "mainChannel", Me(Ne(D.main))), D.light && u(i[k], "lightChannel", Me(Ne(D.light))), D.dark && u(i[k], "darkChannel", Me(Ne(D.dark))), D.contrastText && u(i[k], "contrastTextChannel", Me(Ne(D.contrastText))), k === "text" && (pe(i[k], "primary"), pe(i[k], "secondary")), k === "action" && (D.active && pe(i[k], "active"), D.selected && pe(i[k], "selected")));
    });
  }), _ = t.reduce((K, i) => ie(K, i), _);
  const L = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: ni(_),
    enableContrastVars: s
  }, {
    vars: J,
    generateThemeVars: Y,
    generateStyleSheets: ae
  } = $o(_, L);
  return _.vars = J, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([K, i]) => {
    _[K] = i;
  }), _.generateThemeVars = Y, _.generateStyleSheets = ae, _.generateSpacing = function() {
    return br(p.spacing, _t(this));
  }, _.getColorSchemeSelector = Oo(f), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = c, _.unstable_sxConfig = {
    ...nt,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, _.unstable_sx = function(i) {
    return Pe({
      sx: i,
      theme: this
    });
  }, _.toRuntimeSource = _r, _;
}
function ur(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Rt({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ci(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, c = a || "light", f = o == null ? void 0 : o[c], d = {
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
    }, ur(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, ur(m, "light", d.light)), m;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), si({
    ...s,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const li = ci();
function ui(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fi = (e) => ui(e) && e !== "classes", st = mo({
  themeId: Vr,
  defaultTheme: li,
  rootShouldForwardProp: fi
}), di = Mr`
	0%, 100% { transform: translateX(0); }
	10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
	20%, 40%, 60%, 80% { transform: translateX(2px); }
`, pi = st(wt)(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(3),
  padding: e.spacing(3),
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  "&.shake": {
    animation: `${di} 0.5s ease-in-out`
  },
  [e.breakpoints.down("sm")]: {
    padding: e.spacing(2),
    gap: e.spacing(2)
  },
  [e.breakpoints.down("xs")]: {
    padding: e.spacing(1),
    gap: e.spacing(1.5)
  }
})), mi = st(wt)(({ theme: e }) => ({
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
})), gi = st(Nr)(({ theme: e }) => ({
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
})), fr = st(Dr)(({ theme: e }) => ({
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
})), Ci = ({
  digitCount: e = 6,
  onVerify: t,
  onVerifySuccess: r,
  onVerifyError: n,
  showResend: o = !0,
  onResend: a,
  resendCooldown: s = 60,
  expirationTime: c = 300,
  instructionText: f = "Enter the code sent to your email",
  placeholder: d = "0",
  showExpirationTimer: p = !0
}) => {
  const [m, h] = Se(!1), [C, g] = Se(null), [l, S] = Se(null), [M, I] = Se(!1), [N, $] = Se(0), [y, _] = Se(c), [L, J] = Se(!1), Y = Rr([]), { control: ae, handleSubmit: K, setValue: i, getValues: T, clearErrors: v, reset: k } = kr({
    defaultValues: {
      otp: ""
    }
  }), D = Re(async () => {
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
      const A = (T("otp") || "").split("");
      for (let W = 0; W < Math.min(x.length, e); W++)
        A[W] = x[W], Y.current[W] && (Y.current[W].value = x[W]);
      const R = A.join("");
      i("otp", R), v("otp"), g(null), S(null);
      const B = Math.min(x.length, e - 1), j = Y.current[B];
      j && j.focus(), S("OTP pasted successfully!"), setTimeout(() => S(null), 2e3);
    } catch (E) {
      const x = E instanceof Error ? E.message : "Failed to read from clipboard";
      g(x), I(!0), setTimeout(() => I(!1), 500);
    }
  }, [e, T, i, v]);
  ct(() => {
    const E = (x) => {
      const A = x.target.closest("[data-otp-component]") !== null, R = document.activeElement, B = R && R.tagName === "INPUT";
      (A || !B) && (x.preventDefault(), D());
    };
    return document.addEventListener("paste", E), () => document.removeEventListener("paste", E);
  }, [D]), ct(() => {
    let E;
    return N > 0 && (E = window.setInterval(() => {
      $((x) => x - 1);
    }, 1e3)), () => clearInterval(E);
  }, [N]), ct(() => {
    let E;
    return y > 0 && p && (E = window.setInterval(() => {
      _((x) => x <= 1 ? (J(!0), 0) : x - 1);
    }, 1e3)), () => clearInterval(E);
  }, [y, p]);
  const Z = (E) => {
    const x = Math.floor(E / 60), P = E % 60;
    return `${x}:${P.toString().padStart(2, "0")}`;
  }, ne = Re(
    (E, x) => {
      const A = (T("otp") || "").split("");
      for (let W = 0; W < E.length && W < e; W++)
        A[W] = E[W], Y.current[W] && (Y.current[W].value = E[W]);
      const R = A.join("");
      i("otp", R), x(R);
      const B = Math.min(E.length, e - 1), j = Y.current[B];
      j && j.focus();
    },
    [e, T, i]
  ), de = Re(
    (E, x, P) => {
      const R = (T("otp") || "").split("");
      R[E] = x;
      const B = R.join("");
      if (i("otp", B), P(B), x && E < e - 1) {
        const j = Y.current[E + 1];
        j && j.focus();
      }
    },
    [e, T, i]
  ), b = Re(
    (E, x, P) => {
      const A = x.replace(/\D/g, "");
      if (A.length > 1) {
        const R = A.slice(0, e);
        ne(R, P);
      } else
        de(E, A, P);
      v("otp"), g(null), S(null);
    },
    [e, v, ne, de]
  ), O = Re(
    (E, x) => {
      if (x.key === "Backspace") {
        const A = (T("otp") || "").split("");
        if (A[E])
          A[E] = "";
        else if (E > 0) {
          A[E - 1] = "";
          const B = Y.current[E - 1];
          B && B.focus();
        }
        const R = A.join("");
        i("otp", R);
      }
    },
    [T, i]
  ), V = async (E) => {
    if (L) {
      g("OTP has expired. Please request a new one.");
      return;
    }
    const x = E.otp || "";
    if (x.length !== e) {
      g(`Please enter all ${e} digits.`), I(!0), setTimeout(() => I(!1), 500);
      return;
    }
    h(!0), g(null), S(null);
    try {
      const P = await t(x);
      S("Verification successful!"), g(null), setTimeout(() => {
        r(P);
      }, 2e3);
    } catch (P) {
      const A = P instanceof Error ? P.message : "Verification failed. Please try again.";
      g(A), S(null), I(!0), setTimeout(() => I(!1), 500), n(P instanceof Error ? P : new Error(A));
    } finally {
      h(!1);
    }
  }, F = () => {
    if (N > 0) return;
    $(s), _(c), J(!1), k(), g(null), S(null), v(), a && a();
    const E = Y.current[0];
    E && E.focus();
  };
  return /* @__PURE__ */ Le(pi, { className: M ? "shake" : "", "data-otp-component": !0, children: [
    /* @__PURE__ */ se(
      It,
      {
        variant: "h6",
        component: "h2",
        textAlign: "center",
        gutterBottom: !0,
        children: f
      }
    ),
    p && y > 0 && /* @__PURE__ */ Le(It, { variant: "body2", color: "text.secondary", children: [
      "Code expires in: ",
      Z(y)
    ] }),
    L && /* @__PURE__ */ se(lt, { severity: "warning", sx: { width: "100%" }, children: "OTP has expired. Please request a new one." }),
    C && /* @__PURE__ */ se(Mt, { in: !!C, children: /* @__PURE__ */ se(lt, { severity: "error", sx: { width: "100%" }, children: C }) }),
    l && /* @__PURE__ */ se(Mt, { in: !!l, children: /* @__PURE__ */ se(lt, { severity: "success", sx: { width: "100%" }, children: l }) }),
    /* @__PURE__ */ Le(
      wt,
      {
        component: "form",
        onSubmit: K(V),
        sx: { width: "100%" },
        children: [
          /* @__PURE__ */ se(mi, { children: Array.from({ length: e }, (E, x) => /* @__PURE__ */ se(
            Ir,
            {
              name: "otp",
              control: ae,
              render: ({ field: { onChange: P, value: A } }) => /* @__PURE__ */ se(
                gi,
                {
                  inputRef: (R) => Y.current[x] = R,
                  variant: "outlined",
                  placeholder: d,
                  inputProps: {
                    maxLength: 1,
                    style: { textAlign: "center" }
                  },
                  value: (A || "").charAt(x) || "",
                  onChange: (R) => b(
                    x,
                    R.target.value,
                    P
                  ),
                  onKeyDown: (R) => O(
                    x,
                    R
                  ),
                  disabled: m || L,
                  error: !1,
                  autoComplete: "off"
                }
              )
            },
            x
          )) }),
          /* @__PURE__ */ Le(
            Br,
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
                /* @__PURE__ */ se(
                  fr,
                  {
                    type: "submit",
                    variant: "contained",
                    disabled: m || L,
                    startIcon: m ? /* @__PURE__ */ se(jr, { size: 18, color: "inherit" }) : null,
                    children: m ? "Verifying..." : "Verify"
                  }
                ),
                o && /* @__PURE__ */ se(
                  fr,
                  {
                    variant: "outlined",
                    onClick: F,
                    disabled: N > 0 || m,
                    children: N > 0 ? `Resend in ${N}s` : "Resend Otp"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
export {
  Ci as LumoraOTP
};
