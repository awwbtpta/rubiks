(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var ya =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function _a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mo = { exports: {} },
  kl = {},
  ze = { exports: {} },
  Q = {};
var Or = Symbol.for("react.element"),
  Lc = Symbol.for("react.portal"),
  Uc = Symbol.for("react.fragment"),
  Dc = Symbol.for("react.strict_mode"),
  Tc = Symbol.for("react.profiler"),
  Ac = Symbol.for("react.provider"),
  Ic = Symbol.for("react.context"),
  Bc = Symbol.for("react.forward_ref"),
  zc = Symbol.for("react.suspense"),
  jc = Symbol.for("react.memo"),
  $c = Symbol.for("react.lazy"),
  us = Symbol.iterator;
function Wc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wa = Object.assign,
  Ca = {};
function Bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ca),
    (this.updater = n || Pa);
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Na() {}
Na.prototype = Bn.prototype;
function po(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ca),
    (this.updater = n || Pa);
}
var ho = (po.prototype = new Na());
ho.constructor = po;
wa(ho, Bn.prototype);
ho.isPureReactComponent = !0;
var cs = Array.isArray,
  Sa = Object.prototype.hasOwnProperty,
  vo = { current: null },
  Ea = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ra(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Sa.call(t, r) && !Ea.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var a = Array(o), f = 0; f < o; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: Or,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: vo.current,
  };
}
function Kc(e, t) {
  return {
    $$typeof: Or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function go(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function Vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fs = /\/+/g;
function Yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Vc("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Or:
          case Lc:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + Yl(s, 0) : r),
      cs(l)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "./"),
          Zr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (go(l) &&
            (l = Kc(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(fs, "$&/") + "./") +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), cs(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var a = r + Yl(i, o);
      s += Zr(i, t, n, a, l);
    }
  else if (((a = Wc(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Yl(i, o++)), (s += Zr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Zr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Hc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  Gr = { transition: null },
  Qc = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Gr,
    ReactCurrentOwner: vo,
  };
Q.Children = {
  map: Lr,
  forEach: function (e, t, n) {
    Lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!go(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = Bn;
Q.Fragment = Uc;
Q.Profiler = Tc;
Q.PureComponent = po;
Q.StrictMode = Dc;
Q.Suspense = zc;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = wa({}, e.props),
    l = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = vo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Sa.call(t, a) &&
        !Ea.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var f = 0; f < a; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: Or, type: e.type, key: l, ref: i, props: r, _owner: s };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ic,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ac, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Ra;
Q.createFactory = function (e) {
  var t = Ra.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Bc, render: e };
};
Q.isValidElement = go;
Q.lazy = function (e) {
  return { $$typeof: $c, _payload: { _status: -1, _result: e }, _init: Hc };
};
Q.memo = function (e, t) {
  return { $$typeof: jc, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Gr.transition;
  Gr.transition = {};
  try {
    e();
  } finally {
    Gr.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Ue.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
Q.useId = function () {
  return Ue.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Ue.current.useRef(e);
};
Q.useState = function (e) {
  return Ue.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Ue.current.useTransition();
};
Q.version = "18.2.0";
(function (e) {
  e.exports = Q;
})(ze);
var Yc = ze.exports,
  Xc = Symbol.for("react.element"),
  Zc = Symbol.for("react.fragment"),
  Gc = Object.prototype.hasOwnProperty,
  bc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Gc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Xc,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: bc.current,
  };
}
kl.Fragment = Zc;
kl.jsx = Oa;
kl.jsxs = Oa;
(function (e) {
  e.exports = kl;
})(mo);
const d = mo.exports.jsx,
  T = mo.exports.jsxs;
var _i = {},
  Fa = { exports: {} },
  Ge = {},
  xa = { exports: {} },
  Ma = {};
(function (e) {
  function t(D, $) {
    var W = D.length;
    D.push($);
    e: for (; 0 < W; ) {
      var Z = (W - 1) >>> 1,
        J = D[Z];
      if (0 < l(J, $)) (D[Z] = $), (D[W] = J), (W = Z);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var $ = D[0],
      W = D.pop();
    if (W !== $) {
      D[0] = W;
      e: for (var Z = 0, J = D.length, we = J >>> 1; Z < we; ) {
        var Ee = 2 * (Z + 1) - 1,
          yt = D[Ee],
          Ve = Ee + 1,
          _t = D[Ve];
        if (0 > l(yt, W))
          Ve < J && 0 > l(_t, yt)
            ? ((D[Z] = _t), (D[Ve] = W), (Z = Ve))
            : ((D[Z] = yt), (D[Ee] = W), (Z = Ee));
        else if (Ve < J && 0 > l(_t, W)) (D[Z] = _t), (D[Ve] = W), (Z = Ve);
        else break e;
      }
    }
    return $;
  }
  function l(D, $) {
    var W = D.sortIndex - $.sortIndex;
    return W !== 0 ? W : D.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var a = [],
    f = [],
    m = 1,
    u = null,
    c = 3,
    h = !1,
    p = !1,
    _ = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var $ = n(f); $ !== null; ) {
      if ($.callback === null) r(f);
      else if ($.startTime <= D)
        r(f), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(f);
    }
  }
  function P(D) {
    if (((_ = !1), y(D), !p))
      if (n(a) !== null) (p = !0), se(C);
      else {
        var $ = n(f);
        $ !== null && he(P, $.startTime - D);
      }
  }
  function C(D, $) {
    (p = !1), _ && ((_ = !1), g(A), (A = -1)), (h = !0);
    var W = c;
    try {
      for (
        y($), u = n(a);
        u !== null && (!(u.expirationTime > $) || (D && !I()));

      ) {
        var Z = u.callback;
        if (typeof Z == "function") {
          (u.callback = null), (c = u.priorityLevel);
          var J = Z(u.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof J == "function" ? (u.callback = J) : u === n(a) && r(a),
            y($);
        } else r(a);
        u = n(a);
      }
      if (u !== null) var we = !0;
      else {
        var Ee = n(f);
        Ee !== null && he(P, Ee.startTime - $), (we = !1);
      }
      return we;
    } finally {
      (u = null), (c = W), (h = !1);
    }
  }
  var R = !1,
    M = null,
    A = -1,
    k = 5,
    O = -1;
  function I() {
    return !(e.unstable_now() - O < k);
  }
  function K() {
    if (M !== null) {
      var D = e.unstable_now();
      O = D;
      var $ = !0;
      try {
        $ = M(!0, D);
      } finally {
        $ ? Y() : ((R = !1), (M = null));
      }
    } else R = !1;
  }
  var Y;
  if (typeof v == "function")
    Y = function () {
      v(K);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      te = oe.port2;
    (oe.port1.onmessage = K),
      (Y = function () {
        te.postMessage(null);
      });
  } else
    Y = function () {
      w(K, 0);
    };
  function se(D) {
    (M = D), R || ((R = !0), Y());
  }
  function he(D, $) {
    A = w(function () {
      D(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || h || ((p = !0), se(C));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = c;
      }
      var W = c;
      c = $;
      try {
        return D();
      } finally {
        c = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, $) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = c;
      c = D;
      try {
        return $();
      } finally {
        c = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, $, W) {
      var Z = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? Z + W : Z))
          : (W = Z),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = W + J),
        (D = {
          id: m++,
          callback: $,
          priorityLevel: D,
          startTime: W,
          expirationTime: J,
          sortIndex: -1,
        }),
        W > Z
          ? ((D.sortIndex = W),
            t(f, D),
            n(a) === null &&
              D === n(f) &&
              (_ ? (g(A), (A = -1)) : (_ = !0), he(P, W - Z)))
          : ((D.sortIndex = J), t(a, D), p || h || ((p = !0), se(C))),
        D
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (D) {
      var $ = c;
      return function () {
        var W = c;
        c = $;
        try {
          return D.apply(this, arguments);
        } finally {
          c = W;
        }
      };
    });
})(Ma);
(function (e) {
  e.exports = Ma;
})(xa);
var ka = ze.exports,
  Ze = xa.exports;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var La = new Set(),
  cr = {};
function un(e, t) {
  kn(e, t), kn(e + "Capture", t);
}
function kn(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) La.add(t[e]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pi = Object.prototype.hasOwnProperty,
  qc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ds = {},
  ms = {};
function ef(e) {
  return Pi.call(ms, e)
    ? !0
    : Pi.call(ds, e)
    ? !1
    : qc.test(e)
    ? (ms[e] = !0)
    : ((ds[e] = !0), !1);
}
function tf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nf(e, t, n, r) {
  if (t === null || typeof t > "u" || tf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, l, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yo = /[\-:]([a-z])/g;
function _o(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yo, _o);
    Se[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yo, _o);
    Se[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yo, _o);
  Se[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Po(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (nf(t, n, l, r) && (n = null),
    r || l === null
      ? ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ur = Symbol.for("react.element"),
  mn = Symbol.for("react.portal"),
  pn = Symbol.for("react.fragment"),
  wo = Symbol.for("react.strict_mode"),
  wi = Symbol.for("react.profiler"),
  Ua = Symbol.for("react.provider"),
  Da = Symbol.for("react.context"),
  Co = Symbol.for("react.forward_ref"),
  Ci = Symbol.for("react.suspense"),
  Ni = Symbol.for("react.suspense_list"),
  No = Symbol.for("react.memo"),
  kt = Symbol.for("react.lazy"),
  Ta = Symbol.for("react.offscreen"),
  ps = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ps && e[ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  Xl;
function bn(e) {
  if (Xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xl = (t && t[1]) || "";
    }
  return (
    `
` +
    Xl +
    e
  );
}
var Zl = !1;
function Gl(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          s = l.length - 1,
          o = i.length - 1;
        1 <= s && 0 <= o && l[s] !== i[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (l[s] !== i[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || l[s] !== i[o])) {
                var a =
                  `
` + l[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (Zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? bn(e) : "";
}
function rf(e) {
  switch (e.tag) {
    case 5:
      return bn(e.type);
    case 16:
      return bn("Lazy");
    case 13:
      return bn("Suspense");
    case 19:
      return bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case mn:
      return "Portal";
    case wi:
      return "Profiler";
    case wo:
      return "StrictMode";
    case Ci:
      return "Suspense";
    case Ni:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Da:
        return (e.displayName || "Context") + ".Consumer";
      case Ua:
        return (e._context.displayName || "Context") + ".Provider";
      case Co:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case No:
        return (
          (t = e.displayName || null), t !== null ? t : Si(e.type) || "Memo"
        );
      case kt:
        (t = e._payload), (e = e._init);
        try {
          return Si(e(t));
        } catch {}
    }
  return null;
}
function lf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Si(t);
    case 8:
      return t === wo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Aa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function of(e) {
  var t = Aa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Dr(e) {
  e._valueTracker || (e._valueTracker = of(e));
}
function Ia(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Aa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ba(e, t) {
  (t = t.checked), t != null && Po(e, "checked", t, !1);
}
function Ri(e, t) {
  Ba(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Oi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oi(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Oi(e, t, n) {
  (t !== "number" || sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function En(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Jn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function za(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ja(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ja(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Tr,
  $a = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function (e) {
  sf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tr[t] = tr[e]);
  });
});
function Wa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (tr.hasOwnProperty(e) && tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ka(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Wa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var af = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Mi(e, t) {
  if (t) {
    if (af[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function ki(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Li = null;
function So(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ui = null,
  Rn = null,
  On = null;
function _s(e) {
  if ((e = Mr(e))) {
    if (typeof Ui != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Al(t)), Ui(e.stateNode, e.type, t));
  }
}
function Va(e) {
  Rn ? (On ? On.push(e) : (On = [e])) : (Rn = e);
}
function Ha() {
  if (Rn) {
    var e = Rn,
      t = On;
    if (((On = Rn = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
  }
}
function Qa(e, t) {
  return e(t);
}
function Ya() {}
var bl = !1;
function Xa(e, t, n) {
  if (bl) return e(t, n);
  bl = !0;
  try {
    return Qa(e, t, n);
  } finally {
    (bl = !1), (Rn !== null || On !== null) && (Ya(), Ha());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Di = !1;
if (Et)
  try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener("test", Vn, Vn),
      window.removeEventListener("test", Vn, Vn);
  } catch {
    Di = !1;
  }
function uf(e, t, n, r, l, i, s, o, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var nr = !1,
  al = null,
  ul = !1,
  Ti = null,
  cf = {
    onError: function (e) {
      (nr = !0), (al = e);
    },
  };
function ff(e, t, n, r, l, i, s, o, a) {
  (nr = !1), (al = null), uf.apply(cf, arguments);
}
function df(e, t, n, r, l, i, s, o, a) {
  if ((ff.apply(this, arguments), nr)) {
    if (nr) {
      var f = al;
      (nr = !1), (al = null);
    } else throw Error(L(198));
    ul || ((ul = !0), (Ti = f));
  }
}
function cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ps(e) {
  if (cn(e) !== e) throw Error(L(188));
}
function mf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ps(l), e;
        if (i === r) return Ps(l), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          (s = !0), (n = l), (r = i);
          break;
        }
        if (o === r) {
          (s = !0), (r = l), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === n) {
            (s = !0), (n = i), (r = l);
            break;
          }
          if (o === r) {
            (s = !0), (r = i), (n = l);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Ga(e) {
  return (e = mf(e)), e !== null ? ba(e) : null;
}
function ba(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ba(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ja = Ze.unstable_scheduleCallback,
  ws = Ze.unstable_cancelCallback,
  pf = Ze.unstable_shouldYield,
  hf = Ze.unstable_requestPaint,
  pe = Ze.unstable_now,
  vf = Ze.unstable_getCurrentPriorityLevel,
  Eo = Ze.unstable_ImmediatePriority,
  qa = Ze.unstable_UserBlockingPriority,
  cl = Ze.unstable_NormalPriority,
  gf = Ze.unstable_LowPriority,
  eu = Ze.unstable_IdlePriority,
  Ll = null,
  vt = null;
function yf(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : wf,
  _f = Math.log,
  Pf = Math.LN2;
function wf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_f(e) / Pf) | 0)) | 0;
}
var Ar = 64,
  Ir = 4194304;
function qn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? (r = qn(o)) : ((i &= s), i !== 0 && (r = qn(i)));
  } else (s = n & ~l), s !== 0 ? (r = qn(s)) : i !== 0 && (r = qn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Cf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - ut(i),
      o = 1 << s,
      a = l[s];
    a === -1
      ? ((o & n) === 0 || (o & r) !== 0) && (l[s] = Cf(o, t))
      : a <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tu() {
  var e = Ar;
  return (Ar <<= 1), (Ar & 4194240) === 0 && (Ar = 64), e;
}
function Jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Sf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ut(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ro(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var q = 0;
function nu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var ru,
  Oo,
  lu,
  iu,
  ou,
  Ii = !1,
  Br = [],
  It = null,
  Bt = null,
  zt = null,
  mr = new Map(),
  pr = new Map(),
  Ut = [],
  Ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Mr(t)), t !== null && Oo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Rf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (It = Hn(It, e, t, n, r, l)), !0;
    case "dragenter":
      return (Bt = Hn(Bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (zt = Hn(zt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return mr.set(i, Hn(mr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), pr.set(i, Hn(pr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function su(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Za(n)), t !== null)) {
          (e.blockedOn = t),
            ou(e.priority, function () {
              lu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Li = r), n.target.dispatchEvent(r), (Li = null);
    } else return (t = Mr(n)), t !== null && Oo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  br(e) && n.delete(t);
}
function Of() {
  (Ii = !1),
    It !== null && br(It) && (It = null),
    Bt !== null && br(Bt) && (Bt = null),
    zt !== null && br(zt) && (zt = null),
    mr.forEach(Ns),
    pr.forEach(Ns);
}
function Qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ii ||
      ((Ii = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Of)));
}
function hr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < Br.length) {
    Qn(Br[0], e);
    for (var n = 1; n < Br.length; n++) {
      var r = Br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && Qn(It, e),
      Bt !== null && Qn(Bt, e),
      zt !== null && Qn(zt, e),
      mr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    su(n), n.blockedOn === null && Ut.shift();
}
var Fn = xt.ReactCurrentBatchConfig,
  dl = !0;
function Ff(e, t, n, r) {
  var l = q,
    i = Fn.transition;
  Fn.transition = null;
  try {
    (q = 1), Fo(e, t, n, r);
  } finally {
    (q = l), (Fn.transition = i);
  }
}
function xf(e, t, n, r) {
  var l = q,
    i = Fn.transition;
  Fn.transition = null;
  try {
    (q = 4), Fo(e, t, n, r);
  } finally {
    (q = l), (Fn.transition = i);
  }
}
function Fo(e, t, n, r) {
  if (dl) {
    var l = Bi(e, t, n, r);
    if (l === null) ai(e, t, r, ml, n), Cs(e, r);
    else if (Rf(l, e, t, n, r)) r.stopPropagation();
    else if ((Cs(e, r), t & 4 && -1 < Ef.indexOf(e))) {
      for (; l !== null; ) {
        var i = Mr(l);
        if (
          (i !== null && ru(i),
          (i = Bi(e, t, n, r)),
          i === null && ai(e, t, r, ml, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ai(e, t, r, null, n);
  }
}
var ml = null;
function Bi(e, t, n, r) {
  if (((ml = null), (e = So(r)), (e = Jt(e)), e !== null))
    if (((t = cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Za(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ml = e), null;
}
function au(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vf()) {
        case Eo:
          return 1;
        case qa:
          return 4;
        case cl:
        case gf:
          return 16;
        case eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  xo = null,
  Jr = null;
function uu() {
  if (Jr) return Jr;
  var e,
    t = xo,
    n = t.length,
    r,
    l = "value" in Tt ? Tt.value : Tt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
  return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function qr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function Ss() {
  return !1;
}
function be(e) {
  function t(n, r, l, i, s) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? zr
        : Ss),
      (this.isPropagationStopped = Ss),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mo = be(zn),
  xr = de({}, zn, { view: 0, detail: 0 }),
  Mf = be(xr),
  ql,
  ei,
  Yn,
  Ul = de({}, xr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ko,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Yn &&
            (Yn && e.type === "mousemove"
              ? ((ql = e.screenX - Yn.screenX), (ei = e.screenY - Yn.screenY))
              : (ei = ql = 0),
            (Yn = e)),
          ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  Es = be(Ul),
  kf = de({}, Ul, { dataTransfer: 0 }),
  Lf = be(kf),
  Uf = de({}, xr, { relatedTarget: 0 }),
  ti = be(Uf),
  Df = de({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = be(Df),
  Af = de({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  If = be(Af),
  Bf = de({}, zn, { data: 0 }),
  Rs = be(Bf),
  zf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  jf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $f = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $f[e]) ? !!t[e] : !1;
}
function ko() {
  return Wf;
}
var Kf = de({}, xr, {
    key: function (e) {
      if (e.key) {
        var t = zf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ko,
    charCode: function (e) {
      return e.type === "keypress" ? qr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Vf = be(Kf),
  Hf = de({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Os = be(Hf),
  Qf = de({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ko,
  }),
  Yf = be(Qf),
  Xf = de({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zf = be(Xf),
  Gf = de({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bf = be(Gf),
  Jf = [9, 13, 27, 32],
  Lo = Et && "CompositionEvent" in window,
  rr = null;
Et && "documentMode" in document && (rr = document.documentMode);
var qf = Et && "TextEvent" in window && !rr,
  cu = Et && (!Lo || (rr && 8 < rr && 11 >= rr)),
  Fs = String.fromCharCode(32),
  xs = !1;
function fu(e, t) {
  switch (e) {
    case "keyup":
      return Jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function du(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function ed(e, t) {
  switch (e) {
    case "compositionend":
      return du(t);
    case "keypress":
      return t.which !== 32 ? null : ((xs = !0), Fs);
    case "textInput":
      return (e = t.data), e === Fs && xs ? null : e;
    default:
      return null;
  }
}
function td(e, t) {
  if (hn)
    return e === "compositionend" || (!Lo && fu(e, t))
      ? ((e = uu()), (Jr = xo = Tt = null), (hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return cu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nd[e.type] : t === "textarea";
}
function mu(e, t, n, r) {
  Va(r),
    (t = pl(t, "onChange")),
    0 < t.length &&
      ((n = new Mo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lr = null,
  vr = null;
function rd(e) {
  Su(e, 0);
}
function Dl(e) {
  var t = yn(e);
  if (Ia(t)) return e;
}
function ld(e, t) {
  if (e === "change") return t;
}
var pu = !1;
if (Et) {
  var ni;
  if (Et) {
    var ri = "oninput" in document;
    if (!ri) {
      var ks = document.createElement("div");
      ks.setAttribute("oninput", "return;"),
        (ri = typeof ks.oninput == "function");
    }
    ni = ri;
  } else ni = !1;
  pu = ni && (!document.documentMode || 9 < document.documentMode);
}
function Ls() {
  lr && (lr.detachEvent("onpropertychange", hu), (vr = lr = null));
}
function hu(e) {
  if (e.propertyName === "value" && Dl(vr)) {
    var t = [];
    mu(t, vr, e, So(e)), Xa(rd, t);
  }
}
function id(e, t, n) {
  e === "focusin"
    ? (Ls(), (lr = t), (vr = n), lr.attachEvent("onpropertychange", hu))
    : e === "focusout" && Ls();
}
function od(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dl(vr);
}
function sd(e, t) {
  if (e === "click") return Dl(t);
}
function ad(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : ud;
function gr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Pi.call(t, l) || !ft(e[l], t[l])) return !1;
  }
  return !0;
}
function Us(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Us(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Us(n);
  }
}
function vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? vu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gu() {
  for (var e = window, t = sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sl(e.document);
  }
  return t;
}
function Uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function cd(e) {
  var t = gu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ds(n, i));
        var s = Ds(n, r);
        l &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fd = Et && "documentMode" in document && 11 >= document.documentMode,
  vn = null,
  zi = null,
  ir = null,
  ji = !1;
function Ts(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji ||
    vn == null ||
    vn !== sl(r) ||
    ((r = vn),
    "selectionStart" in r && Uo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ir && gr(ir, r)) ||
      ((ir = r),
      (r = pl(zi, "onSelect")),
      0 < r.length &&
        ((t = new Mo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vn))));
}
function jr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gn = {
    animationend: jr("Animation", "AnimationEnd"),
    animationiteration: jr("Animation", "AnimationIteration"),
    animationstart: jr("Animation", "AnimationStart"),
    transitionend: jr("Transition", "TransitionEnd"),
  },
  li = {},
  yu = {};
Et &&
  ((yu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gn.animationend.animation,
    delete gn.animationiteration.animation,
    delete gn.animationstart.animation),
  "TransitionEvent" in window || delete gn.transitionend.transition);
function Tl(e) {
  if (li[e]) return li[e];
  if (!gn[e]) return e;
  var t = gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yu) return (li[e] = t[n]);
  return e;
}
var _u = Tl("animationend"),
  Pu = Tl("animationiteration"),
  wu = Tl("animationstart"),
  Cu = Tl("transitionend"),
  Nu = new Map(),
  As =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Yt(e, t) {
  Nu.set(e, t), un(t, [e]);
}
for (var ii = 0; ii < As.length; ii++) {
  var oi = As[ii],
    dd = oi.toLowerCase(),
    md = oi[0].toUpperCase() + oi.slice(1);
  Yt(dd, "on" + md);
}
Yt(_u, "onAnimationEnd");
Yt(Pu, "onAnimationIteration");
Yt(wu, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Cu, "onTransitionEnd");
kn("onMouseEnter", ["mouseout", "mouseover"]);
kn("onMouseLeave", ["mouseout", "mouseover"]);
kn("onPointerEnter", ["pointerout", "pointerover"]);
kn("onPointerLeave", ["pointerout", "pointerover"]);
un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function Is(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), df(r, t, void 0, e), (e.currentTarget = null);
}
function Su(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            a = o.instance,
            f = o.currentTarget;
          if (((o = o.listener), a !== i && l.isPropagationStopped())) break e;
          Is(l, o, f), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (a = o.instance),
            (f = o.currentTarget),
            (o = o.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          Is(l, o, f), (i = a);
        }
    }
  }
  if (ul) throw ((e = Ti), (ul = !1), (Ti = null), e);
}
function le(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Eu(t, e, 2, !1), n.add(r));
}
function si(e, t, n) {
  var r = 0;
  t && (r |= 4), Eu(n, e, r, t);
}
var $r = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[$r]) {
    (e[$r] = !0),
      La.forEach(function (n) {
        n !== "selectionchange" && (pd.has(n) || si(n, !1, e), si(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$r] || ((t[$r] = !0), si("selectionchange", !1, t));
  }
}
function Eu(e, t, n, r) {
  switch (au(t)) {
    case 1:
      var l = Ff;
      break;
    case 4:
      l = xf;
      break;
    default:
      l = Fo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ai(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = Jt(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Xa(function () {
    var f = i,
      m = So(n),
      u = [];
    e: {
      var c = Nu.get(e);
      if (c !== void 0) {
        var h = Mo,
          p = e;
        switch (e) {
          case "keypress":
            if (qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Vf;
            break;
          case "focusin":
            (p = "focus"), (h = ti);
            break;
          case "focusout":
            (p = "blur"), (h = ti);
            break;
          case "beforeblur":
          case "afterblur":
            h = ti;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Es;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Yf;
            break;
          case _u:
          case Pu:
          case wu:
            h = Tf;
            break;
          case Cu:
            h = Zf;
            break;
          case "scroll":
            h = Mf;
            break;
          case "wheel":
            h = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = If;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Os;
        }
        var _ = (t & 4) !== 0,
          w = !_ && e === "scroll",
          g = _ ? (c !== null ? c + "Capture" : null) : c;
        _ = [];
        for (var v = f, y; v !== null; ) {
          y = v;
          var P = y.stateNode;
          if (
            (y.tag === 5 &&
              P !== null &&
              ((y = P),
              g !== null && ((P = dr(v, g)), P != null && _.push(_r(v, P, y)))),
            w)
          )
            break;
          v = v.return;
        }
        0 < _.length &&
          ((c = new h(c, p, null, n, m)), u.push({ event: c, listeners: _ }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Li &&
            (p = n.relatedTarget || n.fromElement) &&
            (Jt(p) || p[Rt]))
        )
          break e;
        if (
          (h || c) &&
          ((c =
            m.window === m
              ? m
              : (c = m.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          h
            ? ((p = n.relatedTarget || n.toElement),
              (h = f),
              (p = p ? Jt(p) : null),
              p !== null &&
                ((w = cn(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((h = null), (p = f)),
          h !== p)
        ) {
          if (
            ((_ = Es),
            (P = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Os),
              (P = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (w = h == null ? c : yn(h)),
            (y = p == null ? c : yn(p)),
            (c = new _(P, v + "leave", h, n, m)),
            (c.target = w),
            (c.relatedTarget = y),
            (P = null),
            Jt(m) === f &&
              ((_ = new _(g, v + "enter", p, n, m)),
              (_.target = y),
              (_.relatedTarget = w),
              (P = _)),
            (w = P),
            h && p)
          )
            t: {
              for (_ = h, g = p, v = 0, y = _; y; y = fn(y)) v++;
              for (y = 0, P = g; P; P = fn(P)) y++;
              for (; 0 < v - y; ) (_ = fn(_)), v--;
              for (; 0 < y - v; ) (g = fn(g)), y--;
              for (; v--; ) {
                if (_ === g || (g !== null && _ === g.alternate)) break t;
                (_ = fn(_)), (g = fn(g));
              }
              _ = null;
            }
          else _ = null;
          h !== null && Bs(u, c, h, _, !1),
            p !== null && w !== null && Bs(u, w, p, _, !0);
        }
      }
      e: {
        if (
          ((c = f ? yn(f) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === "select" || (h === "input" && c.type === "file"))
        )
          var C = ld;
        else if (Ms(c))
          if (pu) C = ad;
          else {
            C = od;
            var R = id;
          }
        else
          (h = c.nodeName) &&
            h.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (C = sd);
        if (C && (C = C(e, f))) {
          mu(u, C, n, m);
          break e;
        }
        R && R(e, c, f),
          e === "focusout" &&
            (R = c._wrapperState) &&
            R.controlled &&
            c.type === "number" &&
            Oi(c, "number", c.value);
      }
      switch (((R = f ? yn(f) : window), e)) {
        case "focusin":
          (Ms(R) || R.contentEditable === "true") &&
            ((vn = R), (zi = f), (ir = null));
          break;
        case "focusout":
          ir = zi = vn = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ji = !1), Ts(u, n, m);
          break;
        case "selectionchange":
          if (fd) break;
        case "keydown":
        case "keyup":
          Ts(u, n, m);
      }
      var M;
      if (Lo)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        hn
          ? fu(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (cu &&
          n.locale !== "ko" &&
          (hn || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && hn && (M = uu())
            : ((Tt = m),
              (xo = "value" in Tt ? Tt.value : Tt.textContent),
              (hn = !0))),
        (R = pl(f, A)),
        0 < R.length &&
          ((A = new Rs(A, e, null, n, m)),
          u.push({ event: A, listeners: R }),
          M ? (A.data = M) : ((M = du(n)), M !== null && (A.data = M)))),
        (M = qf ? ed(e, n) : td(e, n)) &&
          ((f = pl(f, "onBeforeInput")),
          0 < f.length &&
            ((m = new Rs("onBeforeInput", "beforeinput", null, n, m)),
            u.push({ event: m, listeners: f }),
            (m.data = M)));
    }
    Su(u, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = dr(e, n)),
      i != null && r.unshift(_r(e, i, l)),
      (i = dr(e, t)),
      i != null && r.push(_r(e, i, l))),
      (e = e.return);
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bs(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      f = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      f !== null &&
      ((o = f),
      l
        ? ((a = dr(n, i)), a != null && s.unshift(_r(n, a, o)))
        : l || ((a = dr(n, i)), a != null && s.push(_r(n, a, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hd = /\r\n?/g,
  vd = /\u0000|\uFFFD/g;
function zs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hd,
      `
`
    )
    .replace(vd, "");
}
function Wr(e, t, n) {
  if (((t = zs(t)), zs(e) !== t && n)) throw Error(L(425));
}
function hl() {}
var $i = null,
  Wi = null;
function Ki(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  gd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  js = typeof Promise == "function" ? Promise : void 0,
  yd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof js < "u"
      ? function (e) {
          return js.resolve(null).then(e).catch(_d);
        }
      : Vi;
function _d(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "./$")) {
        if (r === 0) {
          e.removeChild(l), hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  hr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "./$") return null;
    }
  }
  return e;
}
function $s(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "./$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + jn,
  Pr = "__reactProps$" + jn,
  Rt = "__reactContainer$" + jn,
  Hi = "__reactEvents$" + jn,
  Pd = "__reactListeners$" + jn,
  wd = "__reactHandles$" + jn;
function Jt(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $s(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = $s(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Mr(e) {
  return (
    (e = e[ht] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Al(e) {
  return e[Pr] || null;
}
var Qi = [],
  _n = -1;
function Xt(e) {
  return { current: e };
}
function ie(e) {
  0 > _n || ((e.current = Qi[_n]), (Qi[_n] = null), _n--);
}
function ne(e, t) {
  _n++, (Qi[_n] = e.current), (e.current = t);
}
var Qt = {},
  xe = Xt(Qt),
  $e = Xt(!1),
  rn = Qt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  ie($e), ie(xe);
}
function Ws(e, t, n) {
  if (xe.current !== Qt) throw Error(L(168));
  ne(xe, t), ne($e, n);
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, lf(e) || "Unknown", l));
  return de({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (rn = xe.current),
    ne(xe, e),
    ne($e, $e.current),
    !0
  );
}
function Ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Ru(e, t, rn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie($e),
      ie(xe),
      ne(xe, e))
    : ie($e),
    ne($e, n);
}
var wt = null,
  Il = !1,
  ci = !1;
function Ou(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function Cd(e) {
  (Il = !0), Ou(e);
}
function Zt() {
  if (!ci && wt !== null) {
    ci = !0;
    var e = 0,
      t = q;
    try {
      var n = wt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (Il = !1);
    } catch (l) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Ja(Eo, Zt), l);
    } finally {
      (q = t), (ci = !1);
    }
  }
  return null;
}
var Pn = [],
  wn = 0,
  yl = null,
  _l = 0,
  Je = [],
  qe = 0,
  ln = null,
  Ct = 1,
  Nt = "";
function Gt(e, t) {
  (Pn[wn++] = _l), (Pn[wn++] = yl), (yl = e), (_l = t);
}
function Fu(e, t, n) {
  (Je[qe++] = Ct), (Je[qe++] = Nt), (Je[qe++] = ln), (ln = e);
  var r = Ct;
  e = Nt;
  var l = 32 - ut(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ut(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (Ct = (1 << (32 - ut(t) + l)) | (n << l) | r),
      (Nt = i + e);
  } else (Ct = (1 << i) | (n << l) | r), (Nt = e);
}
function Do(e) {
  e.return !== null && (Gt(e, 1), Fu(e, 1, 0));
}
function To(e) {
  for (; e === yl; )
    (yl = Pn[--wn]), (Pn[wn] = null), (_l = Pn[--wn]), (Pn[wn] = null);
  for (; e === ln; )
    (ln = Je[--qe]),
      (Je[qe] = null),
      (Nt = Je[--qe]),
      (Je[qe] = null),
      (Ct = Je[--qe]),
      (Je[qe] = null);
}
var Xe = null,
  Ye = null,
  ae = !1,
  at = null;
function xu(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: Ct, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (ae) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Vs(e, t)) {
        if (Yi(e)) throw Error(L(418));
        t = jt(n.nextSibling);
        var r = Xe;
        t && Vs(e, t)
          ? xu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e));
      }
    } else {
      if (Yi(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e);
    }
  }
}
function Hs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Kr(e) {
  if (e !== Xe) return !1;
  if (!ae) return Hs(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ki(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Yi(e)) throw (Mu(), Error(L(418)));
    for (; t; ) xu(e, t), (t = jt(t.nextSibling));
  }
  if ((Hs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "./$") {
            if (t === 0) {
              Ye = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mu() {
  for (var e = Ye; e; ) e = jt(e.nextSibling);
}
function Un() {
  (Ye = Xe = null), (ae = !1);
}
function Ao(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Nd = xt.ReactCurrentBatchConfig;
function ot(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Pl = Xt(null),
  wl = null,
  Cn = null,
  Io = null;
function Bo() {
  Io = Cn = wl = null;
}
function zo(e) {
  var t = Pl.current;
  ie(Pl), (e._currentValue = t);
}
function Zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xn(e, t) {
  (wl = e),
    (Io = Cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (je = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Io !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
      if (wl === null) throw Error(L(308));
      (Cn = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else Cn = Cn.next = e;
  return t;
}
var qt = null;
function jo(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function ku(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), jo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function $o(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function St(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (X & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), jo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function el(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ro(e, n);
  }
}
function Qs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Cl(e, t, n, r) {
  var l = e.updateQueue;
  Lt = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var a = o,
      f = a.next;
    (a.next = null), s === null ? (i = f) : (s.next = f), (s = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== s &&
        (o === null ? (m.firstBaseUpdate = f) : (o.next = f),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var u = l.baseState;
    (s = 0), (m = f = a = null), (o = i);
    do {
      var c = o.lane,
        h = o.eventTime;
      if ((r & c) === c) {
        m !== null &&
          (m = m.next =
            {
              eventTime: h,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var p = e,
            _ = o;
          switch (((c = t), (h = n), _.tag)) {
            case 1:
              if (((p = _.payload), typeof p == "function")) {
                u = p.call(h, u, c);
                break e;
              }
              u = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = _.payload),
                (c = typeof p == "function" ? p.call(h, u, c) : p),
                c == null)
              )
                break e;
              u = de({}, u, c);
              break e;
            case 2:
              Lt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (c = l.effects),
          c === null ? (l.effects = [o]) : c.push(o));
      } else
        (h = {
          eventTime: h,
          lane: c,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((f = m = h), (a = u)) : (m = m.next = h),
          (s |= c);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (c = o),
          (o = c.next),
          (c.next = null),
          (l.lastBaseUpdate = c),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (a = u),
      (l.baseState = a),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (s |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (sn |= s), (e.lanes = s), (e.memoizedState = u);
  }
}
function Ys(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(L(191, l));
        l.call(r);
      }
    }
}
var Uu = new ka.Component().refs;
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Kt(e),
      i = St(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, l)),
      t !== null && (ct(t, e, l, r), el(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Kt(e),
      i = St(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, l)),
      t !== null && (ct(t, e, l, r), el(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Kt(e),
      l = St(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = $t(e, l, r)),
      t !== null && (ct(t, e, r, n), el(t, e, r));
  },
};
function Xs(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gr(n, r) || !gr(l, i)
      : !0
  );
}
function Du(e, t, n) {
  var r = !1,
    l = Qt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nt(i))
      : ((l = We(t) ? rn : xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ln(e, l) : Qt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Uu), $o(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = nt(i))
    : ((i = We(t) ? rn : xe.current), (l.context = Ln(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Gi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Bl.enqueueReplaceState(l, l.state, null),
      Cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var o = l.refs;
            o === Uu && (o = l.refs = {}),
              s === null ? delete o[i] : (o[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Tu(e) {
  function t(g, v) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [v]), (g.flags |= 16)) : y.push(v);
    }
  }
  function n(g, v) {
    if (!e) return null;
    for (; v !== null; ) t(g, v), (v = v.sibling);
    return null;
  }
  function r(g, v) {
    for (g = new Map(); v !== null; )
      v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
    return g;
  }
  function l(g, v) {
    return (g = Vt(g, v)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, v, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < v ? ((g.flags |= 2), v) : y)
            : ((g.flags |= 2), v))
        : ((g.flags |= 1048576), v)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, v, y, P) {
    return v === null || v.tag !== 6
      ? ((v = gi(y, g.mode, P)), (v.return = g), v)
      : ((v = l(v, y)), (v.return = g), v);
  }
  function a(g, v, y, P) {
    var C = y.type;
    return C === pn
      ? m(g, v, y.props.children, P, y.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === kt &&
            Gs(C) === v.type))
      ? ((P = l(v, y.props)), (P.ref = Xn(g, v, y)), (P.return = g), P)
      : ((P = ol(y.type, y.key, y.props, null, g.mode, P)),
        (P.ref = Xn(g, v, y)),
        (P.return = g),
        P);
  }
  function f(g, v, y, P) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== y.containerInfo ||
      v.stateNode.implementation !== y.implementation
      ? ((v = yi(y, g.mode, P)), (v.return = g), v)
      : ((v = l(v, y.children || [])), (v.return = g), v);
  }
  function m(g, v, y, P, C) {
    return v === null || v.tag !== 7
      ? ((v = nn(y, g.mode, P, C)), (v.return = g), v)
      : ((v = l(v, y)), (v.return = g), v);
  }
  function u(g, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = gi("" + v, g.mode, y)), (v.return = g), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ur:
          return (
            (y = ol(v.type, v.key, v.props, null, g.mode, y)),
            (y.ref = Xn(g, null, v)),
            (y.return = g),
            y
          );
        case mn:
          return (v = yi(v, g.mode, y)), (v.return = g), v;
        case kt:
          var P = v._init;
          return u(g, P(v._payload), y);
      }
      if (Jn(v) || Kn(v))
        return (v = nn(v, g.mode, y, null)), (v.return = g), v;
      Vr(g, v);
    }
    return null;
  }
  function c(g, v, y, P) {
    var C = v !== null ? v.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : o(g, v, "" + y, P);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ur:
          return y.key === C ? a(g, v, y, P) : null;
        case mn:
          return y.key === C ? f(g, v, y, P) : null;
        case kt:
          return (C = y._init), c(g, v, C(y._payload), P);
      }
      if (Jn(y) || Kn(y)) return C !== null ? null : m(g, v, y, P, null);
      Vr(g, y);
    }
    return null;
  }
  function h(g, v, y, P, C) {
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return (g = g.get(y) || null), o(v, g, "" + P, C);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case Ur:
          return (g = g.get(P.key === null ? y : P.key) || null), a(v, g, P, C);
        case mn:
          return (g = g.get(P.key === null ? y : P.key) || null), f(v, g, P, C);
        case kt:
          var R = P._init;
          return h(g, v, y, R(P._payload), C);
      }
      if (Jn(P) || Kn(P)) return (g = g.get(y) || null), m(v, g, P, C, null);
      Vr(v, P);
    }
    return null;
  }
  function p(g, v, y, P) {
    for (
      var C = null, R = null, M = v, A = (v = 0), k = null;
      M !== null && A < y.length;
      A++
    ) {
      M.index > A ? ((k = M), (M = null)) : (k = M.sibling);
      var O = c(g, M, y[A], P);
      if (O === null) {
        M === null && (M = k);
        break;
      }
      e && M && O.alternate === null && t(g, M),
        (v = i(O, v, A)),
        R === null ? (C = O) : (R.sibling = O),
        (R = O),
        (M = k);
    }
    if (A === y.length) return n(g, M), ae && Gt(g, A), C;
    if (M === null) {
      for (; A < y.length; A++)
        (M = u(g, y[A], P)),
          M !== null &&
            ((v = i(M, v, A)), R === null ? (C = M) : (R.sibling = M), (R = M));
      return ae && Gt(g, A), C;
    }
    for (M = r(g, M); A < y.length; A++)
      (k = h(M, g, A, y[A], P)),
        k !== null &&
          (e && k.alternate !== null && M.delete(k.key === null ? A : k.key),
          (v = i(k, v, A)),
          R === null ? (C = k) : (R.sibling = k),
          (R = k));
    return (
      e &&
        M.forEach(function (I) {
          return t(g, I);
        }),
      ae && Gt(g, A),
      C
    );
  }
  function _(g, v, y, P) {
    var C = Kn(y);
    if (typeof C != "function") throw Error(L(150));
    if (((y = C.call(y)), y == null)) throw Error(L(151));
    for (
      var R = (C = null), M = v, A = (v = 0), k = null, O = y.next();
      M !== null && !O.done;
      A++, O = y.next()
    ) {
      M.index > A ? ((k = M), (M = null)) : (k = M.sibling);
      var I = c(g, M, O.value, P);
      if (I === null) {
        M === null && (M = k);
        break;
      }
      e && M && I.alternate === null && t(g, M),
        (v = i(I, v, A)),
        R === null ? (C = I) : (R.sibling = I),
        (R = I),
        (M = k);
    }
    if (O.done) return n(g, M), ae && Gt(g, A), C;
    if (M === null) {
      for (; !O.done; A++, O = y.next())
        (O = u(g, O.value, P)),
          O !== null &&
            ((v = i(O, v, A)), R === null ? (C = O) : (R.sibling = O), (R = O));
      return ae && Gt(g, A), C;
    }
    for (M = r(g, M); !O.done; A++, O = y.next())
      (O = h(M, g, A, O.value, P)),
        O !== null &&
          (e && O.alternate !== null && M.delete(O.key === null ? A : O.key),
          (v = i(O, v, A)),
          R === null ? (C = O) : (R.sibling = O),
          (R = O));
    return (
      e &&
        M.forEach(function (K) {
          return t(g, K);
        }),
      ae && Gt(g, A),
      C
    );
  }
  function w(g, v, y, P) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === pn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ur:
          e: {
            for (var C = y.key, R = v; R !== null; ) {
              if (R.key === C) {
                if (((C = y.type), C === pn)) {
                  if (R.tag === 7) {
                    n(g, R.sibling),
                      (v = l(R, y.props.children)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === kt &&
                    Gs(C) === R.type)
                ) {
                  n(g, R.sibling),
                    (v = l(R, y.props)),
                    (v.ref = Xn(g, R, y)),
                    (v.return = g),
                    (g = v);
                  break e;
                }
                n(g, R);
                break;
              } else t(g, R);
              R = R.sibling;
            }
            y.type === pn
              ? ((v = nn(y.props.children, g.mode, P, y.key)),
                (v.return = g),
                (g = v))
              : ((P = ol(y.type, y.key, y.props, null, g.mode, P)),
                (P.ref = Xn(g, v, y)),
                (P.return = g),
                (g = P));
          }
          return s(g);
        case mn:
          e: {
            for (R = y.key; v !== null; ) {
              if (v.key === R)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === y.containerInfo &&
                  v.stateNode.implementation === y.implementation
                ) {
                  n(g, v.sibling),
                    (v = l(v, y.children || [])),
                    (v.return = g),
                    (g = v);
                  break e;
                } else {
                  n(g, v);
                  break;
                }
              else t(g, v);
              v = v.sibling;
            }
            (v = yi(y, g.mode, P)), (v.return = g), (g = v);
          }
          return s(g);
        case kt:
          return (R = y._init), w(g, v, R(y._payload), P);
      }
      if (Jn(y)) return p(g, v, y, P);
      if (Kn(y)) return _(g, v, y, P);
      Vr(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        v !== null && v.tag === 6
          ? (n(g, v.sibling), (v = l(v, y)), (v.return = g), (g = v))
          : (n(g, v), (v = gi(y, g.mode, P)), (v.return = g), (g = v)),
        s(g))
      : n(g, v);
  }
  return w;
}
var Dn = Tu(!0),
  Au = Tu(!1),
  kr = {},
  gt = Xt(kr),
  wr = Xt(kr),
  Cr = Xt(kr);
function en(e) {
  if (e === kr) throw Error(L(174));
  return e;
}
function Wo(e, t) {
  switch ((ne(Cr, t), ne(wr, e), ne(gt, kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e));
  }
  ie(gt), ne(gt, t);
}
function Tn() {
  ie(gt), ie(wr), ie(Cr);
}
function Iu(e) {
  en(Cr.current);
  var t = en(gt.current),
    n = xi(t, e.type);
  t !== n && (ne(wr, e), ne(gt, n));
}
function Ko(e) {
  wr.current === e && (ie(gt), ie(wr));
}
var ce = Xt(0);
function Nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fi = [];
function Vo() {
  for (var e = 0; e < fi.length; e++)
    fi[e]._workInProgressVersionPrimary = null;
  fi.length = 0;
}
var tl = xt.ReactCurrentDispatcher,
  di = xt.ReactCurrentBatchConfig,
  on = 0,
  fe = null,
  ge = null,
  _e = null,
  Sl = !1,
  or = !1,
  Nr = 0,
  Sd = 0;
function Re() {
  throw Error(L(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, l, i) {
  if (
    ((on = i),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? Fd : xd),
    (e = n(r, l)),
    or)
  ) {
    i = 0;
    do {
      if (((or = !1), (Nr = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (_e = ge = null),
        (t.updateQueue = null),
        (tl.current = Md),
        (e = n(r, l));
    } while (or);
  }
  if (
    ((tl.current = El),
    (t = ge !== null && ge.next !== null),
    (on = 0),
    (_e = ge = fe = null),
    (Sl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Yo() {
  var e = Nr !== 0;
  return (Nr = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (fe.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function rt() {
  if (ge === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = _e === null ? fe.memoizedState : _e.next;
  if (t !== null) (_e = t), (ge = e);
  else {
    if (e === null) throw Error(L(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      _e === null ? (fe.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      (l.next = i.next), (i.next = s);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var o = (s = null),
      a = null,
      f = i;
    do {
      var m = f.lane;
      if ((on & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var u = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        a === null ? ((o = a = u), (s = r)) : (a = a.next = u),
          (fe.lanes |= m),
          (sn |= m);
      }
      f = f.next;
    } while (f !== null && f !== i);
    a === null ? (s = r) : (a.next = o),
      ft(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (fe.lanes |= i), (sn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== l);
    ft(i, t.memoizedState) || (je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Bu() {}
function zu(e, t) {
  var n = fe,
    r = rt(),
    l = t(),
    i = !ft(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (je = !0)),
    (r = r.queue),
    Xo(Wu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Er(9, $u.bind(null, n, r, l, t), void 0, null),
      Pe === null)
    )
      throw Error(L(349));
    (on & 30) !== 0 || ju(n, t, l);
  }
  return l;
}
function ju(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $u(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ku(t) && Vu(e);
}
function Wu(e, t, n) {
  return n(function () {
    Ku(t) && Vu(e);
  });
}
function Ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Vu(e) {
  var t = Ot(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function bs(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Od.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hu() {
  return rt().memoizedState;
}
function nl(e, t, n, r) {
  var l = pt();
  (fe.flags |= e),
    (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r));
}
function zl(e, t, n, r) {
  var l = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((i = s.destroy), r !== null && Ho(r, s.deps))) {
      l.memoizedState = Er(t, n, i, r);
      return;
    }
  }
  (fe.flags |= e), (l.memoizedState = Er(1 | t, n, i, r));
}
function Js(e, t) {
  return nl(8390656, 8, e, t);
}
function Xo(e, t) {
  return zl(2048, 8, e, t);
}
function Qu(e, t) {
  return zl(4, 2, e, t);
}
function Yu(e, t) {
  return zl(4, 4, e, t);
}
function Xu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zl(4, 4, Xu.bind(null, t, e), n)
  );
}
function Zo() {}
function Gu(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bu(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return (on & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n))
    : (ft(n, t) || ((n = tu()), (fe.lanes |= n), (sn |= n), (e.baseState = !0)),
      t);
}
function Ed(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = di.transition;
  di.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (di.transition = r);
  }
}
function qu() {
  return rt().memoizedState;
}
function Rd(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ec(e))
  )
    tc(t, n);
  else if (((n = ku(e, t, n, r)), n !== null)) {
    var l = Le();
    ct(n, e, r, l), nc(n, t, r);
  }
}
function Od(e, t, n) {
  var r = Kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), ft(o, s))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), jo(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ku(e, t, l, r)),
      n !== null && ((l = Le()), ct(n, e, r, l), nc(n, t, r));
  }
}
function ec(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function tc(e, t) {
  or = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nc(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ro(e, n);
  }
}
var El = {
    readContext: nt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Fd = {
    readContext: nt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Js,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        nl(4194308, 4, Xu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Rd.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bs,
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = bs(!1),
        t = e[0];
      return (e = Ed.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        l = pt();
      if (ae) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(L(349));
        (on & 30) !== 0 || ju(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Js(Wu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Er(9, $u.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = Pe.identifierPrefix;
      if (ae) {
        var n = Nt,
          r = Ct;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xd = {
    readContext: nt,
    useCallback: Gu,
    useContext: nt,
    useEffect: Xo,
    useImperativeHandle: Zu,
    useInsertionEffect: Qu,
    useLayoutEffect: Yu,
    useMemo: bu,
    useReducer: mi,
    useRef: Hu,
    useState: function () {
      return mi(Sr);
    },
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      var t = rt();
      return Ju(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(Sr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: zu,
    useId: qu,
    unstable_isNewReconciler: !1,
  },
  Md = {
    readContext: nt,
    useCallback: Gu,
    useContext: nt,
    useEffect: Xo,
    useImperativeHandle: Zu,
    useInsertionEffect: Qu,
    useLayoutEffect: Yu,
    useMemo: bu,
    useReducer: pi,
    useRef: Hu,
    useState: function () {
      return pi(Sr);
    },
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      var t = rt();
      return ge === null ? (t.memoizedState = e) : Ju(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(Sr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: zu,
    useId: qu,
    unstable_isNewReconciler: !1,
  };
function An(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kd = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  (n = St(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ol || ((Ol = !0), (ao = r)), Ji(e, t);
    }),
    n
  );
}
function lc(e, t, n) {
  (n = St(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ji(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function qs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Hd.bind(null, e, t, n)), t.then(e, e));
}
function ea(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ta(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = St(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var Ld = xt.ReactCurrentOwner,
  je = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Au(t, null, n, r) : Dn(t, e.child, n, r);
}
function na(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    xn(t, l),
    (r = Qo(e, t, n, r, i, l)),
    (n = Yo()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (ae && n && Do(t), (t.flags |= 1), ke(e, t, r, l), t.child)
  );
}
function ra(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !rs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ic(e, t, i, r, l))
      : ((e = ol(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gr), n(s, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (gr(i, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (je = !0);
      else return (t.lanes = e.lanes), Ft(e, t, l);
  }
  return qi(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Sn, Qe),
        (Qe |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Sn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Sn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Sn, Qe),
      (Qe |= r);
  return ke(e, t, l, n), t.child;
}
function sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qi(e, t, n, r, l) {
  var i = We(n) ? rn : xe.current;
  return (
    (i = Ln(t, i)),
    xn(t, l),
    (n = Qo(e, t, n, r, i, l)),
    (r = Yo()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (ae && r && Do(t), (t.flags |= 1), ke(e, t, n, l), t.child)
  );
}
function la(e, t, n, r, l) {
  if (We(n)) {
    var i = !0;
    gl(t);
  } else i = !1;
  if ((xn(t, l), t.stateNode === null))
    rl(e, t), Du(t, n, r), bi(t, n, r, l), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = nt(f))
      : ((f = We(n) ? rn : xe.current), (f = Ln(t, f)));
    var m = n.getDerivedStateFromProps,
      u =
        typeof m == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== r || a !== f) && Zs(t, s, r, f)),
      (Lt = !1);
    var c = t.memoizedState;
    (s.state = c),
      Cl(t, r, s, l),
      (a = t.memoizedState),
      o !== r || c !== a || $e.current || Lt
        ? (typeof m == "function" && (Gi(t, n, m, r), (a = t.memoizedState)),
          (o = Lt || Xs(t, n, o, r, c, a, f))
            ? (u ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = f),
          (r = o))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Lu(e, t),
      (o = t.memoizedProps),
      (f = t.type === t.elementType ? o : ot(t.type, o)),
      (s.props = f),
      (u = t.pendingProps),
      (c = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = We(n) ? rn : xe.current), (a = Ln(t, a)));
    var h = n.getDerivedStateFromProps;
    (m =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== u || c !== a) && Zs(t, s, r, a)),
      (Lt = !1),
      (c = t.memoizedState),
      (s.state = c),
      Cl(t, r, s, l);
    var p = t.memoizedState;
    o !== u || c !== p || $e.current || Lt
      ? (typeof h == "function" && (Gi(t, n, h, r), (p = t.memoizedState)),
        (f = Lt || Xs(t, n, f, r, c, p, a) || !1)
          ? (m ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, p, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, p, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (o === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (s.props = r),
        (s.state = p),
        (s.context = a),
        (r = f))
      : (typeof s.componentDidUpdate != "function" ||
          (o === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return eo(e, t, n, r, i, l);
}
function eo(e, t, n, r, l, i) {
  sc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Ks(t, n, !1), Ft(e, t, i);
  (r = t.stateNode), (Ld.current = t);
  var o =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Dn(t, e.child, null, i)), (t.child = Dn(t, null, o, i)))
      : ke(e, t, o, i),
    (t.memoizedState = r.state),
    l && Ks(t, n, !0),
    t.child
  );
}
function ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ws(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ws(e, t.context, !1),
    Wo(e, t.containerInfo);
}
function ia(e, t, n, r, l) {
  return Un(), Ao(l), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var to = { dehydrated: null, treeContext: null, retryLane: 0 };
function no(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = ce.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ne(ce, l & 1),
    e === null)
  )
    return (
      Xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Wl(s, r, 0, null)),
              (e = nn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = no(n)),
              (t.memoizedState = to),
              e)
            : Go(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return Ud(e, t, s, r, o, l, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (l = e.child), (o = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      (s & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Vt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = Vt(o, i)) : ((i = nn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? no(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = to),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vt(i, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Go(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hr(e, t, n, r) {
  return (
    r !== null && Ao(r),
    Dn(t, e.child, null, n),
    (e = Go(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ud(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hi(Error(L(422)))), Hr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Wl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = nn(i, l, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && Dn(t, e.child, null, s),
        (t.child.memoizedState = no(s)),
        (t.memoizedState = to),
        i);
  if ((t.mode & 1) === 0) return Hr(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(L(419))), (r = hi(i, r, void 0)), Hr(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), je || o)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ot(e, l), ct(r, e, l, -1));
    }
    return ns(), (r = hi(Error(L(421)))), Hr(e, t, s, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = jt(l.nextSibling)),
      (Xe = t),
      (ae = !0),
      (at = null),
      e !== null &&
        ((Je[qe++] = Ct),
        (Je[qe++] = Nt),
        (Je[qe++] = ln),
        (Ct = e.id),
        (Nt = e.overflow),
        (ln = t)),
      (t = Go(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zi(e.return, t, n);
}
function vi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ke(e, t, r.children, n), (r = ce.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oa(e, n, t);
        else if (e.tag === 19) oa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ce, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Nl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          vi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Nl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        vi(t, !0, n, null, i);
        break;
      case "together":
        vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dd(e, t, n) {
  switch (t.tag) {
    case 3:
      ac(t), Un();
      break;
    case 5:
      Iu(t);
      break;
    case 1:
      We(t.type) && gl(t);
      break;
    case 4:
      Wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ne(Pl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ce, ce.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? uc(e, t, n)
          : (ne(ce, ce.current & 1),
            (e = Ft(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ne(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ft(e, t, n);
}
var fc, ro, dc, mc;
fc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ro = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), en(gt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ei(e, l)), (r = Ei(e, r)), (i = []);
        break;
      case "select":
        (l = de({}, l, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Fi(e, l)), (r = Fi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hl);
    }
    Mi(n, r);
    var s;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var o = l[f];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (cr.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (
        ((o = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && a !== o && (a != null || o != null))
      )
        if (f === "style")
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                o[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(f, n)), (n = a);
        else
          f === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (i = i || []).push(f, a))
            : f === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(f, "" + a)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (cr.hasOwnProperty(f)
                ? (a != null && f === "onScroll" && le("scroll", e),
                  i || o === a || (i = []))
                : (i = i || []).push(f, a));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
mc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Td(e, t, n) {
  var r = t.pendingProps;
  switch ((To(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return We(t.type) && vl(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        ie($e),
        ie(xe),
        Vo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Kr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), at !== null && (fo(at), (at = null)))),
        ro(e, t),
        Oe(t),
        null
      );
    case 5:
      Ko(t);
      var l = en(Cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Oe(t), null;
        }
        if (((e = en(gt.current)), Kr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ht] = t), (r[Pr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < er.length; l++) le(er[l], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              hs(r, i), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              gs(r, i), le("invalid", r);
          }
          Mi(n, i), (l = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var o = i[s];
              s === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : cr.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), vs(r, i, !0);
              break;
            case "textarea":
              Dr(r), ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = hl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ja(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ht] = t),
            (e[Pr] = r),
            fc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ki(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) le(er[l], e);
                l = r;
                break;
              case "source":
                le("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (l = r);
                break;
              case "details":
                le("toggle", e), (l = r);
                break;
              case "input":
                hs(e, r), (l = Ei(e, r)), le("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = de({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                gs(e, r), (l = Fi(e, r)), le("invalid", e);
                break;
              default:
                l = r;
            }
            Mi(n, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "style"
                  ? Ka(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && $a(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && fr(e, a)
                    : typeof a == "number" && fr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (cr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && le("scroll", e)
                      : a != null && Po(e, i, a, s));
              }
            switch (n) {
              case "input":
                Dr(e), vs(e, r, !1);
                break;
              case "textarea":
                Dr(e), ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? En(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      En(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = en(Cr.current)), en(gt.current), Kr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (i = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ie(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ye !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Mu(), Un(), (t.flags |= 98560), (i = !1);
        else if (((i = Kr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[ht] = t;
          } else
            Un(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Oe(t), (i = !1);
        } else at !== null && (fo(at), (at = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (ce.current & 1) !== 0
                ? ye === 0 && (ye = 3)
                : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Tn(), ro(e, t), e === null && yr(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return zo(t.type._context), Oe(t), null;
    case 17:
      return We(t.type) && vl(), Oe(t), null;
    case 19:
      if ((ie(ce), (i = t.memoizedState), i === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Zn(i, !1);
        else {
          if (ye !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = Nl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Zn(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > In &&
            ((t.flags |= 128), (r = !0), Zn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
            )
              return Oe(t), null;
          } else
            2 * pe() - i.renderingStartTime > In &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ce.current),
          ne(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Qe & 1073741824) !== 0 &&
            (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Ad(e, t) {
  switch ((To(t), t.tag)) {
    case 1:
      return (
        We(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        ie($e),
        ie(xe),
        Vo(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Ko(t), null;
    case 13:
      if (
        (ie(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ce), null;
    case 4:
      return Tn(), null;
    case 10:
      return zo(t.type._context), null;
    case 22:
    case 23:
      return ts(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qr = !1,
  Fe = !1,
  Id = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function lo(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var sa = !1;
function Bd(e, t) {
  if ((($i = dl), (e = gu()), Uo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            o = -1,
            a = -1,
            f = 0,
            m = 0,
            u = e,
            c = null;
          t: for (;;) {
            for (
              var h;
              u !== n || (l !== 0 && u.nodeType !== 3) || (o = s + l),
                u !== i || (r !== 0 && u.nodeType !== 3) || (a = s + r),
                u.nodeType === 3 && (s += u.nodeValue.length),
                (h = u.firstChild) !== null;

            )
              (c = u), (u = h);
            for (;;) {
              if (u === e) break t;
              if (
                (c === n && ++f === l && (o = s),
                c === i && ++m === r && (a = s),
                (h = u.nextSibling) !== null)
              )
                break;
              (u = c), (c = u.parentNode);
            }
            u = h;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, dl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var p = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var _ = p.memoizedProps,
                    w = p.memoizedState,
                    g = t.stateNode,
                    v = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : ot(t.type, _),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (P) {
          me(t, t.return, P);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (p = sa), (sa = !1), p;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && lo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function io(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht], delete t[Pr], delete t[Hi], delete t[Pd], delete t[wd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), (e = e.sibling);
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), (e = e.sibling);
}
var Ce = null,
  st = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
}
function vc(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || Nn(n, t);
    case 6:
      var r = Ce,
        l = st;
      (Ce = null),
        Mt(e, t, n),
        (Ce = r),
        (st = l),
        Ce !== null &&
          (st
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (st
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? ui(e.parentNode, n)
              : e.nodeType === 1 && ui(e, n),
            hr(e))
          : ui(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = st),
        (Ce = n.stateNode.containerInfo),
        (st = !0),
        Mt(e, t, n),
        (Ce = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && lo(n, t, s),
            (l = l.next);
        } while (l !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          me(n, t, o);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Mt(e, t, n), (Fe = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Id()),
      t.forEach(function (r) {
        var l = Yd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Ce = o.stateNode), (st = !1);
              break e;
            case 3:
              (Ce = o.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (Ce = o.stateNode.containerInfo), (st = !0);
              break e;
          }
          o = o.return;
        }
        if (Ce === null) throw Error(L(160));
        vc(i, s, l), (Ce = null), (st = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (f) {
        me(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), mt(e), r & 4)) {
        try {
          sr(3, e, e.return), jl(3, e);
        } catch (_) {
          me(e, e.return, _);
        }
        try {
          sr(5, e, e.return);
        } catch (_) {
          me(e, e.return, _);
        }
      }
      break;
    case 1:
      it(t, e), mt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        mt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          fr(l, "");
        } catch (_) {
          me(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && Ba(l, i),
              ki(o, s);
            var f = ki(o, i);
            for (s = 0; s < a.length; s += 2) {
              var m = a[s],
                u = a[s + 1];
              m === "style"
                ? Ka(l, u)
                : m === "dangerouslySetInnerHTML"
                ? $a(l, u)
                : m === "children"
                ? fr(l, u)
                : Po(l, m, u, f);
            }
            switch (o) {
              case "input":
                Ri(l, i);
                break;
              case "textarea":
                za(l, i);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? En(l, !!i.multiple, h, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? En(l, !!i.multiple, i.defaultValue, !0)
                      : En(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Pr] = i;
          } catch (_) {
            me(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((it(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (_) {
          me(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hr(t.containerInfo);
        } catch (_) {
          me(e, e.return, _);
        }
      break;
    case 4:
      it(t, e), mt(e);
      break;
    case 13:
      it(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qo = pe())),
        r & 4 && ua(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (f = Fe) || m), it(t, e), (Fe = f)) : it(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !m && (e.mode & 1) !== 0)
        )
          for (z = e, m = e.child; m !== null; ) {
            for (u = z = m; z !== null; ) {
              switch (((c = z), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, c, c.return);
                  break;
                case 1:
                  Nn(c, c.return);
                  var p = c.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (_) {
                      me(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Nn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    fa(u);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), (z = h)) : fa(u);
            }
            m = m.sibling;
          }
        e: for (m = null, u = e; ; ) {
          if (u.tag === 5) {
            if (m === null) {
              m = u;
              try {
                (l = u.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = u.stateNode),
                      (a = u.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Wa("display", s)));
              } catch (_) {
                me(e, e.return, _);
              }
            }
          } else if (u.tag === 6) {
            if (m === null)
              try {
                u.stateNode.nodeValue = f ? "" : u.memoizedProps;
              } catch (_) {
                me(e, e.return, _);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            (u.child.return = u), (u = u.child);
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === e) break e;
            m === u && (m = null), (u = u.return);
          }
          m === u && (m = null), (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      break;
    case 19:
      it(t, e), mt(e), r & 4 && ua(e);
      break;
    case 21:
      break;
    default:
      it(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (fr(l, ""), (r.flags &= -33));
          var i = aa(e);
          so(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = aa(e);
          oo(e, o, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zd(e, t, n) {
  (z = e), yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Qr;
      if (!s) {
        var o = l.alternate,
          a = (o !== null && o.memoizedState !== null) || Fe;
        o = Qr;
        var f = Fe;
        if (((Qr = s), (Fe = a) && !f))
          for (z = l; z !== null; )
            (s = z),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? da(l)
                : a !== null
                ? ((a.return = s), (z = a))
                : da(l);
        for (; i !== null; ) (z = i), yc(i), (i = i.sibling);
        (z = l), (Qr = o), (Fe = f);
      }
      ca(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (z = i))
        : ca(e);
  }
}
function ca(e) {
  for (; z !== null; ) {
    var t = z;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ys(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ys(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var m = f.memoizedState;
                  if (m !== null) {
                    var u = m.dehydrated;
                    u !== null && hr(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Fe || (t.flags & 512 && io(t));
      } catch (c) {
        me(t, t.return, c);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function fa(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function da(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, l, a);
            }
          }
          var i = t.return;
          try {
            io(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            io(t);
          } catch (a) {
            me(t, s, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (z = o);
      break;
    }
    z = t.return;
  }
}
var jd = Math.ceil,
  Rl = xt.ReactCurrentDispatcher,
  bo = xt.ReactCurrentOwner,
  tt = xt.ReactCurrentBatchConfig,
  X = 0,
  Pe = null,
  ve = null,
  Ne = 0,
  Qe = 0,
  Sn = Xt(0),
  ye = 0,
  Rr = null,
  sn = 0,
  $l = 0,
  Jo = 0,
  ar = null,
  Be = null,
  qo = 0,
  In = 1 / 0,
  Pt = null,
  Ol = !1,
  ao = null,
  Wt = null,
  Yr = !1,
  At = null,
  Fl = 0,
  ur = 0,
  uo = null,
  ll = -1,
  il = 0;
function Le() {
  return (X & 6) !== 0 ? pe() : ll !== -1 ? ll : (ll = pe());
}
function Kt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (X & 2) !== 0 && Ne !== 0
    ? Ne & -Ne
    : Nd.transition !== null
    ? (il === 0 && (il = tu()), il)
    : ((e = q),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : au(e.type))),
      e);
}
function ct(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), (uo = null), Error(L(185)));
  Fr(e, n, r),
    ((X & 2) === 0 || e !== Pe) &&
      (e === Pe && ((X & 2) === 0 && ($l |= n), ye === 4 && Dt(e, Ne)),
      Ke(e, r),
      n === 1 &&
        X === 0 &&
        (t.mode & 1) === 0 &&
        ((In = pe() + 500), Il && Zt()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  Nf(e, t);
  var r = fl(e, e === Pe ? Ne : 0);
  if (r === 0)
    n !== null && ws(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ws(n), t === 1))
      e.tag === 0 ? Cd(ma.bind(null, e)) : Ou(ma.bind(null, e)),
        yd(function () {
          (X & 6) === 0 && Zt();
        }),
        (n = null);
    else {
      switch (nu(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = qa;
          break;
        case 16:
          n = cl;
          break;
        case 536870912:
          n = eu;
          break;
        default:
          n = cl;
      }
      n = Rc(n, _c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _c(e, t) {
  if (((ll = -1), (il = 0), (X & 6) !== 0)) throw Error(L(327));
  var n = e.callbackNode;
  if (Mn() && e.callbackNode !== n) return null;
  var r = fl(e, e === Pe ? Ne : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = wc();
    (Pe !== e || Ne !== t) && ((Pt = null), (In = pe() + 500), tn(e, t));
    do
      try {
        Kd();
        break;
      } catch (o) {
        Pc(e, o);
      }
    while (1);
    Bo(),
      (Rl.current = i),
      (X = l),
      ve !== null ? (t = 0) : ((Pe = null), (Ne = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ai(e)), l !== 0 && ((r = l), (t = co(e, l)))), t === 1)
    )
      throw ((n = Rr), tn(e, 0), Dt(e, r), Ke(e, pe()), n);
    if (t === 6) Dt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !$d(l) &&
          ((t = xl(e, r)),
          t === 2 && ((i = Ai(e)), i !== 0 && ((r = i), (t = co(e, i)))),
          t === 1))
      )
        throw ((n = Rr), tn(e, 0), Dt(e, r), Ke(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          bt(e, Be, Pt);
          break;
        case 3:
          if (
            (Dt(e, r), (r & 130023424) === r && ((t = qo + 500 - pe()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Vi(bt.bind(null, e, Be, Pt), t);
            break;
          }
          bt(e, Be, Pt);
          break;
        case 4:
          if ((Dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - ut(r);
            (i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(bt.bind(null, e, Be, Pt), r);
            break;
          }
          bt(e, Be, Pt);
          break;
        case 5:
          bt(e, Be, Pt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ke(e, pe()), e.callbackNode === n ? _c.bind(null, e) : null;
}
function co(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = xl(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && fo(t)),
    e
  );
}
function fo(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function $d(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ft(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Dt(e, t) {
  for (
    t &= ~Jo,
      t &= ~$l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if ((X & 6) !== 0) throw Error(L(327));
  Mn();
  var t = fl(e, 0);
  if ((t & 1) === 0) return Ke(e, pe()), null;
  var n = xl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ai(e);
    r !== 0 && ((t = r), (n = co(e, r)));
  }
  if (n === 1) throw ((n = Rr), tn(e, 0), Dt(e, t), Ke(e, pe()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    bt(e, Be, Pt),
    Ke(e, pe()),
    null
  );
}
function es(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((In = pe() + 500), Il && Zt());
  }
}
function an(e) {
  At !== null && At.tag === 0 && (X & 6) === 0 && Mn();
  var t = X;
  X |= 1;
  var n = tt.transition,
    r = q;
  try {
    if (((tt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (tt.transition = n), (X = t), (X & 6) === 0 && Zt();
  }
}
function ts() {
  (Qe = Sn.current), ie(Sn);
}
function tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gd(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((To(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          Tn(), ie($e), ie(xe), Vo();
          break;
        case 5:
          Ko(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          ie(ce);
          break;
        case 19:
          ie(ce);
          break;
        case 10:
          zo(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (ve = e = Vt(e.current, null)),
    (Ne = Qe = t),
    (ye = 0),
    (Rr = null),
    (Jo = $l = sn = 0),
    (Be = ar = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = l), (r.next = s);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function Pc(e, t) {
  do {
    var n = ve;
    try {
      if ((Bo(), (tl.current = El), Sl)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((on = 0),
        (_e = ge = fe = null),
        (or = !1),
        (Nr = 0),
        (bo.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (Rr = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = Ne),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var f = a,
            m = o,
            u = m.tag;
          if ((m.mode & 1) === 0 && (u === 0 || u === 11 || u === 15)) {
            var c = m.alternate;
            c
              ? ((m.updateQueue = c.updateQueue),
                (m.memoizedState = c.memoizedState),
                (m.lanes = c.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var h = ea(s);
          if (h !== null) {
            (h.flags &= -257),
              ta(h, s, o, i, t),
              h.mode & 1 && qs(i, f, t),
              (t = h),
              (a = f);
            var p = t.updateQueue;
            if (p === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else p.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              qs(i, f, t), ns();
              break e;
            }
            a = Error(L(426));
          }
        } else if (ae && o.mode & 1) {
          var w = ea(s);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256),
              ta(w, s, o, i, t),
              Ao(An(a, o));
            break e;
          }
        }
        (i = a = An(a, o)),
          ye !== 4 && (ye = 2),
          ar === null ? (ar = [i]) : ar.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = rc(i, a, t);
              Qs(i, g);
              break e;
            case 1:
              o = a;
              var v = i.type,
                y = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var P = lc(i, o, t);
                Qs(i, P);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Nc(n);
    } catch (C) {
      (t = C), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wc() {
  var e = Rl.current;
  return (Rl.current = El), e === null ? El : e;
}
function ns() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Pe === null ||
      ((sn & 268435455) === 0 && ($l & 268435455) === 0) ||
      Dt(Pe, Ne);
}
function xl(e, t) {
  var n = X;
  X |= 2;
  var r = wc();
  (Pe !== e || Ne !== t) && ((Pt = null), tn(e, t));
  do
    try {
      Wd();
      break;
    } catch (l) {
      Pc(e, l);
    }
  while (1);
  if ((Bo(), (X = n), (Rl.current = r), ve !== null)) throw Error(L(261));
  return (Pe = null), (Ne = 0), ye;
}
function Wd() {
  for (; ve !== null; ) Cc(ve);
}
function Kd() {
  for (; ve !== null && !pf(); ) Cc(ve);
}
function Cc(e) {
  var t = Ec(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nc(e) : (ve = t),
    (bo.current = null);
}
function Nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Td(n, t, Qe)), n !== null)) {
        ve = n;
        return;
      }
    } else {
      if (((n = Ad(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (ve = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function bt(e, t, n) {
  var r = q,
    l = tt.transition;
  try {
    (tt.transition = null), (q = 1), Vd(e, t, n, r);
  } finally {
    (tt.transition = l), (q = r);
  }
  return null;
}
function Vd(e, t, n, r) {
  do Mn();
  while (At !== null);
  if ((X & 6) !== 0) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Sf(e, i),
    e === Pe && ((ve = Pe = null), (Ne = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Yr ||
      ((Yr = !0),
      Rc(cl, function () {
        return Mn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = tt.transition), (tt.transition = null);
    var s = q;
    q = 1;
    var o = X;
    (X |= 4),
      (bo.current = null),
      Bd(e, n),
      gc(n, e),
      cd(Wi),
      (dl = !!$i),
      (Wi = $i = null),
      (e.current = n),
      zd(n),
      hf(),
      (X = o),
      (q = s),
      (tt.transition = i);
  } else e.current = n;
  if (
    (Yr && ((Yr = !1), (At = e), (Fl = l)),
    (i = e.pendingLanes),
    i === 0 && (Wt = null),
    yf(n.stateNode),
    Ke(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ol) throw ((Ol = !1), (e = ao), (ao = null), e);
  return (
    (Fl & 1) !== 0 && e.tag !== 0 && Mn(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === uo ? ur++ : ((ur = 0), (uo = e))) : (ur = 0),
    Zt(),
    null
  );
}
function Mn() {
  if (At !== null) {
    var e = nu(Fl),
      t = tt.transition,
      n = q;
    try {
      if (((tt.transition = null), (q = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (Fl = 0), (X & 6) !== 0))
          throw Error(L(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var i = z,
            s = i.child;
          if ((z.flags & 16) !== 0) {
            var o = i.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var f = o[a];
                for (z = f; z !== null; ) {
                  var m = z;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, m, i);
                  }
                  var u = m.child;
                  if (u !== null) (u.return = m), (z = u);
                  else
                    for (; z !== null; ) {
                      m = z;
                      var c = m.sibling,
                        h = m.return;
                      if ((pc(m), m === f)) {
                        z = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), (z = c);
                        break;
                      }
                      z = h;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var _ = p.child;
                if (_ !== null) {
                  p.child = null;
                  do {
                    var w = _.sibling;
                    (_.sibling = null), (_ = w);
                  } while (_ !== null);
                }
              }
              z = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && s !== null)
            (s.return = i), (z = s);
          else
            e: for (; z !== null; ) {
              if (((i = z), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sr(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (z = g);
                break e;
              }
              z = i.return;
            }
        }
        var v = e.current;
        for (z = v; z !== null; ) {
          s = z;
          var y = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && y !== null)
            (y.return = s), (z = y);
          else
            e: for (s = v; z !== null; ) {
              if (((o = z), (o.flags & 2048) !== 0))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, o);
                  }
                } catch (C) {
                  me(o, o.return, C);
                }
              if (o === s) {
                z = null;
                break e;
              }
              var P = o.sibling;
              if (P !== null) {
                (P.return = o.return), (z = P);
                break e;
              }
              z = o.return;
            }
        }
        if (
          ((X = l), Zt(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (tt.transition = t);
    }
  }
  return !1;
}
function pa(e, t, n) {
  (t = An(n, t)),
    (t = rc(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = Le()),
    e !== null && (Fr(e, 1, t), Ke(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) pa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = An(n, e)),
            (e = lc(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = Le()),
            t !== null && (Fr(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Ne & n) === n &&
      (ye === 4 || (ye === 3 && (Ne & 130023424) === Ne && 500 > pe() - qo)
        ? tn(e, 0)
        : (Jo |= n)),
    Ke(e, t);
}
function Sc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Ir), (Ir <<= 1), (Ir & 130023424) === 0 && (Ir = 4194304)));
  var n = Le();
  (e = Ot(e, t)), e !== null && (Fr(e, t, n), Ke(e, n));
}
function Qd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function Yd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Sc(e, n);
}
var Ec;
Ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) je = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (je = !1), Dd(e, t, n);
      je = (e.flags & 131072) !== 0;
    }
  else (je = !1), ae && (t.flags & 1048576) !== 0 && Fu(t, _l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      rl(e, t), (e = t.pendingProps);
      var l = Ln(t, xe.current);
      xn(t, n), (l = Qo(null, t, r, e, l, n));
      var i = Yo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), gl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            $o(t),
            (l.updater = Bl),
            (t.stateNode = l),
            (l._reactInternals = t),
            bi(t, r, e, n),
            (t = eo(null, t, r, !0, i, n)))
          : ((t.tag = 0), ae && i && Do(t), ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Zd(r)),
          (e = ot(r, e)),
          l)
        ) {
          case 0:
            t = qi(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        la(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ac(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Lu(e, t),
          Cl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = An(Error(L(423)), t)), (t = ia(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = An(Error(L(424)), t)), (t = ia(e, t, r, n, l));
            break e;
          } else
            for (
              Ye = jt(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ae = !0,
                at = null,
                n = Au(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Un(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Iu(t),
        e === null && Xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = l.children),
        Ki(r, l) ? (s = null) : i !== null && Ki(r, i) && (t.flags |= 32),
        sc(e, t),
        ke(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return uc(e, t, n);
    case 4:
      return (
        Wo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Dn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        na(e, t, r, l, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (s = l.value),
          ne(Pl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (ft(i.value, s)) {
            if (i.children === l.children && !$e.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                s = i.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = St(-1, n & -n)), (a.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var m = f.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (f.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Zi(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  Zi(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (l = nt(l)),
        (r = r(l)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ot(r, t.pendingProps)),
        (l = ot(r.type, l)),
        ra(e, t, r, l, n)
      );
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        rl(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), gl(t)) : (e = !1),
        xn(t, n),
        Du(t, r, l),
        bi(t, r, l, n),
        eo(null, t, r, !0, e, n)
      );
    case 19:
      return cc(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Rc(e, t) {
  return Ja(e, t);
}
function Xd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(e, t, n, r) {
  return new Xd(e, t, n, r);
}
function rs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zd(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Co)) return 11;
    if (e === No) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ol(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) rs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case pn:
        return nn(n.children, l, i, t);
      case wo:
        (s = 8), (l |= 8);
        break;
      case wi:
        return (
          (e = et(12, n, t, l | 2)), (e.elementType = wi), (e.lanes = i), e
        );
      case Ci:
        return (e = et(13, n, t, l)), (e.elementType = Ci), (e.lanes = i), e;
      case Ni:
        return (e = et(19, n, t, l)), (e.elementType = Ni), (e.lanes = i), e;
      case Ta:
        return Wl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ua:
              s = 10;
              break e;
            case Da:
              s = 9;
              break e;
            case Co:
              s = 11;
              break e;
            case No:
              s = 14;
              break e;
            case kt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function nn(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = Ta),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gi(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jl(0)),
    (this.expirationTimes = Jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ls(e, t, n, r, l, i, s, o, a) {
  return (
    (e = new Gd(e, t, n, o, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $o(i),
    e
  );
}
function bd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Oc(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Ru(e, n, t);
  }
  return t;
}
function Fc(e, t, n, r, l, i, s, o, a) {
  return (
    (e = ls(n, r, !0, e, l, i, s, o, a)),
    (e.context = Oc(null)),
    (n = e.current),
    (r = Le()),
    (l = Kt(n)),
    (i = St(r, l)),
    (i.callback = t ?? null),
    $t(n, i, l),
    (e.current.lanes = l),
    Fr(e, l, r),
    Ke(e, r),
    e
  );
}
function Kl(e, t, n, r) {
  var l = t.current,
    i = Le(),
    s = Kt(l);
  return (
    (n = Oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = St(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(l, t, s)),
    e !== null && (ct(e, l, s, i), el(e, l, s)),
    s
  );
}
function Ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ha(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function is(e, t) {
  ha(e, t), (e = e.alternate) && ha(e, t);
}
function Jd() {
  return null;
}
var xc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function os(e) {
  this._internalRoot = e;
}
Vl.prototype.render = os.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Kl(e, t, null, null);
};
Vl.prototype.unmount = os.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      Kl(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function Vl(e) {
  this._internalRoot = e;
}
Vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && su(e);
  }
};
function ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function va() {}
function qd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = Ml(s);
        i.call(f);
      };
    }
    var s = Fc(t, r, e, 0, null, !1, !1, "", va);
    return (
      (e._reactRootContainer = s),
      (e[Rt] = s.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var f = Ml(a);
      o.call(f);
    };
  }
  var a = ls(e, 0, !1, null, null, !1, !1, "", va);
  return (
    (e._reactRootContainer = a),
    (e[Rt] = a.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Kl(t, a, n, r);
    }),
    a
  );
}
function Ql(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var a = Ml(s);
        o.call(a);
      };
    }
    Kl(t, s, e, l);
  } else s = qd(n, t, e, l, r);
  return Ml(s);
}
ru = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes);
        n !== 0 &&
          (Ro(t, n | 1),
          Ke(t, pe()),
          (X & 6) === 0 && ((In = pe() + 500), Zt()));
      }
      break;
    case 13:
      an(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var l = Le();
          ct(r, e, 1, l);
        }
      }),
        is(e, 1);
  }
};
Oo = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = Le();
      ct(t, e, 134217728, n);
    }
    is(e, 134217728);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = Le();
      ct(n, e, t, r);
    }
    is(e, t);
  }
};
iu = function () {
  return q;
};
ou = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ri(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(L(90));
            Ia(r), Ri(r, l);
          }
        }
      }
      break;
    case "textarea":
      za(e, n);
      break;
    case "select":
      (t = n.value), t != null && En(e, !!n.multiple, t, !1);
  }
};
Qa = es;
Ya = an;
var em = { usingClientEntryPoint: !1, Events: [Mr, yn, Al, Va, Ha, es] },
  Gn = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  tm = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ga(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || Jd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (Ll = Xr.inject(tm)), (vt = Xr);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ss(t)) throw Error(L(200));
  return bd(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!ss(e)) throw Error(L(299));
  var n = !1,
    r = "",
    l = xc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new os(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Ga(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return an(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Hl(t)) throw Error(L(200));
  return Ql(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!ss(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    s = xc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fc(t, null, e, 1, n ?? null, l, !1, i, s)),
    (e[Rt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Vl(t);
};
Ge.render = function (e, t, n) {
  if (!Hl(t)) throw Error(L(200));
  return Ql(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Hl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (an(function () {
        Ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = es;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ql(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ge);
})(Fa);
var ga = Fa.exports;
(_i.createRoot = ga.createRoot), (_i.hydrateRoot = ga.hydrateRoot);
function nm() {
  return (
    ze.exports.useEffect(() => {
      console.log("Script Started");
      var e = ["blue", "green", "white", "yellow", "red", "orange"],
        t = document.getElementsByClassName("piece__s");
      function n(i, s) {
        return (
          ([2, 4, 3, 5][s % 4 | 0] +
            (i % 2) * (((s | 0) % 4) * 2 + 3) +
            2 * ((i / 2) | 0)) %
          6
        );
      }
      function r(i) {
        return String.fromCharCode("X".charCodeAt(0) + i / 2);
      }
      function l() {
        function i(f) {
          return (
            (s = s + (1 << f)),
            t[a].children[f]
              .appendChild(document.createElement("div"))
              .setAttribute("class", "sticker__s " + e[f]),
            "translate" + r(f) + "(" + ((f % 2) * 4 - 2) + "em)"
          );
        }
        for (var s, o, a = 0; (s = 0), a < 26; a++)
          (o = n(a, a % 18)),
            (t[a].style.transform =
              "rotateX(0deg)" +
              i(a % 6) +
              (a > 5 ? i(o) + (a > 17 ? i(n(o, o + 2)) : "") : "")),
            t[a].setAttribute("id", "piece__s" + s);
      }
      return (
        (document.ondragstart = function () {
          return !1;
        }),
        l(),
        () => {
          console.log("Start Component Unmounted");
        }
      );
    }, []),
    T("div", {
      className: "rotating__cube--start",
      children: [
        d("div", {
          className: "scene__s",
          id: "scene__s",
          children: d("div", {
            className: "pivot__s centered__s",
            id: "pivot__s",
            children: T("div", {
              className: "cube__s",
              id: "cube__s",
              children: [
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
                T("div", {
                  className: "piece__s",
                  children: [
                    d("div", { className: "element__s left__s" }),
                    d("div", { className: "element__s right__s" }),
                    d("div", { className: "element__s top__s" }),
                    d("div", { className: "element__s bottom__s" }),
                    d("div", { className: "element__s back__s" }),
                    d("div", { className: "element__s front__s" }),
                  ],
                }),
              ],
            }),
          }),
        }),
        T("div", {
          id: "guide__s",
          children: [
            d("div", {
              className: "anchor__s",
              id: "anchor__s3",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-270deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor__s",
              id: "anchor__s2",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-180deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor__s",
              id: "anchor__s1",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-90deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor__s",
              id: "anchor__s0",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(0deg) translateY(66.67%)",
              },
            }),
          ],
        }),
      ],
    })
  );
}
function rm(e) {
  return T("div", {
    className: "start__container flex__center--col",
    children: [
      d("div", {
        className: "start__heading",
        children: "solve rubik's cube.",
      }),
      d("div", { className: "cube__img--container", children: d(nm, {}) }),
      d("button", {
        className: "start__btn",
        onClick: e.handleClick,
        children: "Start",
      }),
    ],
  });
}
let lm = (e = 21) =>
  crypto
    .getRandomValues(new Uint8Array(e))
    .reduce(
      (t, n) => (
        (n &= 63),
        n < 36
          ? (t += n.toString(36))
          : n < 62
          ? (t += (n - 26).toString(36).toUpperCase())
          : n > 62
          ? (t += "-")
          : (t += "_"),
        t
      ),
      ""
    );
function dn(e) {
  let t = e.side.map((n) =>
    d("div", { className: `single__face ${n}__face` }, lm())
  );
  return d("div", {
    className: "face__container flex__center--row",
    children: t,
  });
}
var Mc = { exports: {} };
(function (e, t) {
  (function (r, l) {
    e.exports = l();
  })(ya, function () {
    return (function (n) {
      var r = {};
      function l(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return n[i].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
      }
      return (
        (l.m = n),
        (l.c = r),
        (l.i = function (i) {
          return i;
        }),
        (l.d = function (i, s, o) {
          l.o(i, s) ||
            Object.defineProperty(i, s, {
              configurable: !1,
              enumerable: !0,
              get: o,
            });
        }),
        (l.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return l.d(s, "a", s), s;
        }),
        (l.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (l.p = ""),
        l((l.s = 33))
      );
    })([
      function (n, r, l) {
        var i = l(12),
          s = l.n(i),
          o = l(14),
          a = l(4);
        const f = {
            f: "s",
            r: "mprime",
            u: "eprime",
            d: "e",
            l: "m",
            b: "sprime",
          },
          m = (k) => {
            if (typeof k != "string")
              throw new TypeError("move must be a string");
            let O = k[0].toLowerCase();
            if (O === "f") return "front";
            if (O === "r") return "right";
            if (O === "u") return "up";
            if (O === "d") return "down";
            if (O === "l") return "left";
            if (O === "b") return "back";
          };
        r.a = m;
        const u = (k) => {
          if (typeof k != "string")
            throw new TypeError("face must be a string");
          if (
            ((k = k.toLowerCase()),
            !["front", "right", "up", "down", "left", "back"].includes(k))
          )
            throw new Error(`${k} is not valid face`);
          return k[0];
        };
        r.f = u;
        const c = (k) => ((k = k.toLowerCase()[0]), f[k]);
        r.g = c;
        const h = (k) => {
            k = k.toLowerCase();
            for (let O of Object.keys(f)) {
              let I = f[O];
              if (k === I) return O;
            }
          },
          p = (k, O = {}) => {
            let I = _(k);
            return (
              O.upperCase &&
                (I = I.map((K) => K[0].toUpperCase() + K.slice(1))),
              O.orientation && (I = y(I, O.orientation)),
              O.reverse && (I = A(I)),
              typeof k == "string" ? I.join(" ") : I
            );
          };
        r.d = p;
        const _ = (k) => (
          typeof k == "string" && (k = k.split(" ")),
          (k = k.filter((O) => O !== "")),
          k.map((O) => {
            let I = O.toLowerCase().includes("prime"),
              K = O.includes("2");
            return (O = O[0]), K ? (O = O[0] + "2") : I && (O = O + "prime"), O;
          })
        );
        r.h = _;
        const w = (k, O, I) => {
          (I = P(I)), (I = C(I, k));
          let K = new o.a(k),
            Y = new o.a(O),
            oe = R(I);
          M([K, Y], oe);
          let te = new a.a(s()([], K.normal(), Y.normal())).getAxis(),
            se = a.a.getAngle(K.normal(), Y.normal());
          if (te === "x" && se > 0) return "down";
          if (te === "x" && se < 0) return "up";
          if (te === "y" && se > 0) return "right";
          if (te === "y" && se < 0) return "left";
          if (se === 0) return "front";
          if (se === Math.PI) return "back";
        };
        r.c = w;
        const g = (k, O, I) => {
          (I = P(I)), (I = C(I, k));
          let K = new o.a(k),
            Y = R(I);
          M([K], Y);
          let oe = new o.a(O),
            { axis: te, angle: se } = a.a.getRotationFromNormals(
              K.normal(),
              oe.normal()
            );
          K.rotate(te, se);
          let he = Y.map((D) => a.a.reverseRotation(D)).reverse();
          return M([K], he), K.toString();
        };
        r.e = g;
        const v = (k, O, I) => {
          const K = new o.a(k),
            Y = new o.a(O),
            oe = new o.a(I);
          let te = K.vector.getAxis(),
            [se, he] = [Y.vector.getAxis(), oe.vector.getAxis()];
          if ([se.toLowerCase(), he.toLowerCase()].includes(te.toLowerCase()))
            throw new Error(`moving ${K} from ${Y} to ${oe} is not possible.`);
          let D = u(k).toUpperCase(),
            $ = a.a.getAngle(Y.normal(), oe.normal());
          if ((K.vector.getMagnitude() < 0 && ($ *= -1), $ === 0)) return "";
          if (Math.abs($) === Math.PI) return `${D} ${D}`;
          if ($ < 0) return `${D}`;
          if ($ > 0) return `${D}Prime`;
        };
        r.b = v;
        const y = (k, O) => {
          O = P(O);
          let I = R(O);
          return (
            I.reverse().map((K) => a.a.reverseRotation(K)),
            k.map((K) => {
              let Y = K.toLowerCase().includes("prime"),
                oe = K.includes("2"),
                te = K[0] === K[0].toLowerCase(),
                se = ["m", "e", "s"].includes(K[0].toLowerCase());
              oe && (K = K.replace("2", ""));
              let he;
              if (se) {
                let $ = m(h(K));
                he = new o.a($);
              } else {
                let $ = m(K[0]);
                he = new o.a($);
              }
              M([he], I);
              let D;
              return (
                se ? (D = c(he.toString())) : (D = he.toString()[0]),
                te || (D = D.toUpperCase()),
                oe && (D = D + "2"),
                Y && !se && (D += "prime"),
                D
              );
            })
          );
        };
        function P(k) {
          let O = {};
          return (
            Object.keys(k).forEach((I) => {
              O[I.toLowerCase()] = k[I].toLowerCase();
            }),
            O
          );
        }
        function C(k, O) {
          let I = Object.keys(k);
          if (I.length <= 1 && ["front", "back"].includes(I[0]))
            throw new Error(
              `Orientation object "${k}" is ambiguous. Please specify one of these faces: "up", "right", "down", "left"`
            );
          let K = k;
          return (
            (k = {}),
            I.forEach((Y) => {
              ["front", "back"].includes(Y) || (k[Y] = K[Y]);
            }),
            (k.front = O.toLowerCase()),
            k
          );
        }
        function R(k) {
          if (Object.keys(k) <= 1)
            throw new Error(
              `Orientation object "${k}" is ambiguous. Please specify 2 faces.`
            );
          let O = Object.keys(k),
            I = O.map((te) => new o.a(k[te])),
            K = O.map((te) => new o.a(te)),
            Y = a.a.getRotationFromNormals(
              I[0].normal(),
              I[0].orientTo(K[0]).normal()
            );
          I[1].rotate(Y.axis, Y.angle);
          let oe = a.a.getRotationFromNormals(
            I[1].normal(),
            I[1].orientTo(K[1]).normal()
          );
          if (Math.abs(oe.angle) === Math.PI) {
            let te = new o.a(O[0]).vector.getAxis();
            oe.axis = te;
          }
          return [Y, oe];
        }
        function M(k, O) {
          for (let I of k) for (let K of O) I.rotate(K.axis, K.angle);
        }
        function A(k) {
          const O = [];
          for (let I of k)
            (I = I.includes("prime") ? I[0] : I[0] + "prime"), O.push(I);
          return typeof moves == "string" ? O.join(" ") : O;
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return f;
        });
        var i = l(6),
          s = l(2),
          o = l(0);
        const a = "fffffffffrrrrrrrrruuuuuuuuudddddddddlllllllllbbbbbbbbb";
        class f {
          static Solved() {
            return new f(a);
          }
          static FromMoves(u) {
            const c = f.Solved();
            return c.move(u), c;
          }
          static Scrambled() {
            let u = f.Solved(),
              c = f.getRandomMoves(25);
            return u.move(c), u;
          }
          static reverseMoves(u) {
            return f.transformMoves(u, { reverse: !0 });
          }
          static transformMoves(u, c = {}) {
            return l.i(o.d)(u, c);
          }
          static getRandomMoves(u = 25) {
            let c = [],
              h = [
                "F",
                "Fprime",
                "R",
                "Rprime",
                "U",
                "Uprime",
                "D",
                "Dprime",
                "L",
                "Lprime",
                "B",
                "Bprime",
              ];
            for (; c.length < u; ) {
              for (let p = 0; p < u - c.length; p++) {
                let _ = ~~(Math.random() * h.length);
                c.push(h[_]);
              }
              c = l.i(s.a)(c).split(" ");
            }
            return c.join(" ");
          }
          constructor(u) {
            if (u.length !== 9 * 6)
              throw new Error("Wrong number of colors provided");
            (this._notationToRotation = {
              f: { axis: "z", mag: -1 },
              r: { axis: "x", mag: -1 },
              u: { axis: "y", mag: -1 },
              d: { axis: "y", mag: 1 },
              l: { axis: "x", mag: 1 },
              b: { axis: "z", mag: 1 },
              m: { axis: "x", mag: 1 },
              e: { axis: "y", mag: 1 },
              s: { axis: "z", mag: -1 },
            }),
              this._build(u);
          }
          getFace(u) {
            if (typeof u != "string")
              throw new Error(`"face" must be a string (received: ${u})`);
            u = u.toLowerCase()[0];
            let c, h, p, _, w;
            if (u === "f")
              ([c, h, p, _] = ["Y", "X", -1, 1]),
                (w = this._cubies.filter((g) => g.getZ() === 1));
            else if (u === "r")
              ([c, h, p, _] = ["Y", "Z", -1, -1]),
                (w = this._cubies.filter((g) => g.getX() === 1));
            else if (u === "u")
              ([c, h, p, _] = ["Z", "X", 1, 1]),
                (w = this._cubies.filter((g) => g.getY() === 1));
            else if (u === "d")
              ([c, h, p, _] = ["Z", "X", -1, 1]),
                (w = this._cubies.filter((g) => g.getY() === -1));
            else if (u === "l")
              ([c, h, p, _] = ["Y", "Z", -1, 1]),
                (w = this._cubies.filter((g) => g.getX() === -1));
            else if (u === "b")
              ([c, h, p, _] = ["Y", "X", -1, -1]),
                (w = this._cubies.filter((g) => g.getZ() === -1));
            else if (["m", "e", "s"].includes(u))
              return this._getMiddleCubiesForMove(u);
            return w.sort((g, v) => {
              let y = g[`get${c}`]() * p,
                P = g[`get${h}`]() * _,
                C = v[`get${c}`]() * p,
                R = v[`get${h}`]() * _;
              return y < C ? -1 : y > C ? 1 : P < R ? -1 : 1;
            });
          }
          getCubie(u) {
            return this._cubies.find((c) => {
              if (u.length != c.faces().length) return !1;
              for (let h of u) if (!c.faces().includes(h)) return !1;
              return !0;
            });
          }
          corners() {
            return this._cubies.filter((u) => u.isCorner());
          }
          edges() {
            return this._cubies.filter((u) => u.isEdge());
          }
          middles() {
            return this._cubies.filter((u) => u.isMiddle());
          }
          move(u, c = {}) {
            typeof u == "string" && (u = u.split(" ")), (u = l.i(o.d)(u, c));
            for (let h of u) {
              let p = h[0];
              if (!p) continue;
              let _ = h.toLowerCase().includes("prime"),
                w = p === p.toLowerCase(),
                g = h.includes("2"),
                { axis: v, mag: y } = this._getRotationForFace(p),
                P = this.getFace(p);
              if ((_ && (y *= -1), g && (y *= 2), w)) {
                let C = l.i(o.g)(p),
                  R = this._getMiddleCubiesForMove(C);
                P = [...P, ...R];
              }
              for (let C of P) C.rotate(v, y);
            }
          }
          isSolved() {
            return this.toString() === a;
          }
          toString() {
            let u = "",
              c = ["front", "right", "up", "down", "left", "back"];
            for (let h of c) {
              let p = this.getFace(h);
              for (let _ of p) u += _.getColorOfFace(h);
            }
            return u;
          }
          clone() {
            return new f(this.toString());
          }
          _build(u) {
            (this._cubies = []), this._populateCube();
            let c = this._parseColors(u);
            for (let h of Object.keys(c)) {
              let p = c[h];
              this._colorFace(h, p);
            }
          }
          _populateCube() {
            for (let u = -1; u <= 1; u++)
              for (let c = -1; c <= 1; c++)
                for (let h = -1; h <= 1; h++) {
                  if (u === 0 && c === 0 && h === 0) continue;
                  let p = new i.a({ position: [u, c, h] });
                  this._cubies.push(p);
                }
          }
          _parseColors(u) {
            let c = {
                front: [],
                right: [],
                up: [],
                down: [],
                left: [],
                back: [],
              },
              h;
            for (let p = 0; p < u.length; p++) {
              let _ = u[p];
              p < 9
                ? (h = "front")
                : p < 9 * 2
                ? (h = "right")
                : p < 9 * 3
                ? (h = "up")
                : p < 9 * 4
                ? (h = "down")
                : p < 9 * 5
                ? (h = "left")
                : (h = "back"),
                c[h].push(_);
            }
            return c;
          }
          _colorFace(u, c) {
            let h = this.getFace(u);
            for (let p = 0; p < c.length; p++) h[p].colorFace(u, c[p]);
          }
          _getRotationForFace(u) {
            if (typeof u != "string")
              throw new Error(`"face" must be a string (received: ${u})`);
            return (
              (u = u.toLowerCase()),
              {
                axis: this._notationToRotation[u].axis,
                mag: (this._notationToRotation[u].mag * Math.PI) / 2,
              }
            );
          }
          _getMiddleCubiesForMove(u) {
            u = u[0].toLowerCase();
            let c;
            return (
              u === "m"
                ? (c = ["left", "right"])
                : u === "e"
                ? (c = ["up", "down"])
                : u === "s" && (c = ["front", "back"]),
              this._cubies.filter((h) => !h.hasFace(c[0]) && !h.hasFace(c[1]))
            );
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return a;
        });
        var i = l(19),
          s = l.n(i);
        const o = { F: "B", R: "L", U: "D" },
          a = (f) => {
            typeof f == "string" && (f = f.split(" "));
            const m = {
              compare(u, c) {
                return u[0] === c[0];
              },
              combine(u, c) {
                const h = u.includes("2") ? 2 : u.includes("prime") ? -1 : 1,
                  p = c.includes("2") ? 2 : c.includes("prime") ? -1 : 1;
                let _ = h + p;
                if (
                  (_ === 4 && (_ = 0),
                  _ === -2 && (_ = 2),
                  _ === 3 && (_ = -1),
                  _ === 0)
                )
                  return "";
                let w = _ === 2 ? "2" : _ === -1 ? "prime" : "";
                return `${u[0]}${w}`;
              },
              cancel(u) {
                return u === "";
              },
              ignore(u, c) {
                return o[u[0]] === c[0] || o[c[0]] === u[0];
              },
            };
            return s()(f, m).join(" ");
          };
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return o;
        });
        var i = l(1),
          s = l(0);
        class o {
          constructor(f, m = {}) {
            (this.cube = typeof f == "string" ? new i.a(f) : f),
              (this.options = m),
              (this.partition = {}),
              (this.partitions = []),
              (this.totalMoves = []),
              (this._afterEachCallbacks = []);
          }
          move(f, m) {
            typeof f == "string" && (f = f.split(" ")),
              this.cube.move(f, m),
              (f = l.i(s.d)(f, m));
            for (let u of f) this.totalMoves.push(u);
          }
          afterEach(f) {
            this._afterEachCallbacks.push(f);
          }
          _triggerAfterEach(...f) {
            this._afterEachCallbacks.forEach((m) => m(...f));
          }
          _solve(f = {}) {
            (this.partition = {}), (this.partition.cubies = f);
            let { corner: m, edge: u } = f;
            return (
              (this.partition.caseNumber = this._getCaseNumber({
                corner: m,
                edge: u,
              })),
              this._solveCase(this.partition.caseNumber, {
                corner: m,
                edge: u,
              }),
              (this.partition.moves = this.totalMoves),
              (this.totalMoves = []),
              this._overrideAfterEach ||
                this._triggerAfterEach(this.partition, this.phase),
              this.partition
            );
          }
          _solveCase(f, m = {}) {
            let { corner: u, edge: c } = m;
            this[`_solveCase${f}`]({ corner: u, edge: c });
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return w;
        });
        var i = l(22),
          s = l.n(i),
          o = l(12),
          a = l.n(o),
          f = l(26),
          m = l.n(f),
          u = l(27),
          c = l.n(u),
          h = l(28),
          p = l.n(h);
        const _ = { x: m.a, y: c.a, z: p.a };
        class w {
          static FromString(v) {
            return new w(v.split(" ").map((y) => parseInt(y)));
          }
          static areEqual(v, y) {
            return v[0] === y[0] && v[1] === y[1] && v[2] === y[2];
          }
          static getAngle(v, y) {
            let P = s()(v, y),
              C = a()([], v, y),
              R = new w(C).getMagnitude();
            return R ? P * R : P;
          }
          static getRotationFromNormals(v, y) {
            let P = new w(a()([], v, y)).getAxis(),
              C = w.getAngle(v, y);
            if (!P) {
              let R = ["x", "y", "z"];
              R.splice(R.indexOf(new w(v).getAxis()), 1), (P = R[0]);
            }
            return { axis: P, angle: C };
          }
          static reverseRotation(v) {
            return (v.angle *= -1), v;
          }
          constructor(v) {
            this.set(v);
          }
          toArray() {
            return this.vector;
          }
          set(v) {
            typeof v > "u" || (this.vector = v.map((y) => Math.round(y)));
          }
          setX(v) {
            this.vector[0] = v;
          }
          setY(v) {
            this.vector[1] = v;
          }
          setZ(v) {
            this.vector[2] = v;
          }
          getX() {
            return this.toArray()[0];
          }
          getY() {
            return this.toArray()[1];
          }
          getZ() {
            return this.toArray()[2];
          }
          isAxis() {
            let v = 0;
            for (let y of this.vector) y === 0 && (v += 1);
            return v === 2;
          }
          getAxis() {
            if (!!this.isAxis()) {
              if (this.vector[0] !== 0) return "x";
              if (this.vector[1] !== 0) return "y";
              if (this.vector[2] !== 0) return "z";
            }
          }
          getMagnitude() {
            if (!!this.isAxis())
              return this[`get${this.getAxis().toUpperCase()}`]();
          }
          rotate(v, y) {
            return (
              (v = v.toLowerCase()),
              this.set(_[v]([], this.vector, [0, 0, 0], y)),
              this
            );
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return s;
        });
        var i = l(15);
        class s extends i.a {
          solve({ corner: a, edge: f }) {
            return this._solve({ corner: a, edge: f });
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return o;
        });
        var i = l(4),
          s = l(14);
        class o {
          static FromFaces(f) {
            let m = new i.a([0, 0, 0]),
              u = {};
            for (let c of f) {
              if (!c) continue;
              let h = new s.a(c),
                p = h.vector.getAxis().toUpperCase();
              m[`set${p}`](h.vector.getMagnitude()),
                (u[c.toLowerCase()] = h.toString()[0].toLowerCase());
            }
            return new o({ position: m.toArray(), colorMap: u });
          }
          constructor({ position: f, colorMap: m = {} }) {
            this.position(f),
              (this.colorMap = {}),
              Object.keys(m).forEach((u) => {
                let c = m[u];
                this.colorFace(u, c);
              });
          }
          clone() {
            return new o({
              position: this.position(),
              colorMap: this.colorMap,
            });
          }
          position(f) {
            if (typeof f > "u")
              return this.vector ? this.vector.toArray() : this.vector;
            this.vector = new i.a(f);
          }
          getX() {
            return this.vector.getX();
          }
          getY() {
            return this.vector.getY();
          }
          getZ() {
            return this.vector.getZ();
          }
          isCorner() {
            return Object.keys(this.colorMap).length === 3;
          }
          isEdge() {
            return Object.keys(this.colorMap).length === 2;
          }
          isMiddle() {
            return Object.keys(this.colorMap).length === 1;
          }
          colors() {
            return Object.keys(this.colorMap).map((f) => this.colorMap[f]);
          }
          hasColor(f) {
            f = f.toLowerCase();
            for (let m of Object.keys(this.colorMap))
              if (this.colorMap[m] === f) return !0;
            return !1;
          }
          hasFace(f) {
            return (
              (f = f.toLowerCase()), Object.keys(this.colorMap).includes(f)
            );
          }
          colorFace(f, m) {
            return (
              (f = f.toLowerCase()),
              (m = m.toLowerCase()),
              (this.colorMap[f] = m),
              this
            );
          }
          getColorOfFace(f) {
            return (f = f.toLowerCase()), this.colorMap[f];
          }
          getFaceOfColor(f) {
            return (
              (f = f.toLowerCase()),
              Object.keys(this.colorMap).find((m) => this.colorMap[m] === f)
            );
          }
          faces() {
            return Object.keys(this.colorMap);
          }
          rotate(f, m) {
            this.vector.rotate(f, m);
            let u = {};
            for (let c of Object.keys(this.colorMap)) {
              let h = this.colorMap[c],
                _ = new s.a(c).rotate(f, m).normal().join(" "),
                w = s.a.FromNormal(_).toString().toLowerCase();
              u[w] = h;
            }
            (this.colorMap = {}),
              Object.keys(u).forEach((c) => this.colorFace(c, u[c]));
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return m;
        });
        var i = l(3),
          s = l(1),
          o = l(0);
        const a = "u",
          f = (u) => s.a.reverseMoves(u);
        class m extends i.a {
          constructor(...c) {
            super(...c), (this.phase = "cross");
          }
          solve() {
            let c = this._getCrossEdges();
            for (let h of c) {
              let p = this._solve({ edge: h });
              this.partitions.push(p);
            }
            return this.partitions;
          }
          isSolved() {
            let c = this._getCrossEdges();
            for (let h of c) if (!this.isEdgeSolved(h)) return !1;
            return !0;
          }
          isEdgeSolved(c) {
            let h = c.colors().find((g) => g !== "u");
            const _ = c.faces().find((g) => g !== "up")[0] === h;
            return c.getColorOfFace("up") === "u" && _;
          }
          _getCrossEdges() {
            return this.cube.edges().filter((c) => c.hasColor(a));
          }
          _getCaseNumber({ edge: c }) {
            if (c.getColorOfFace("up") === a) return 1;
            if (c.getColorOfFace("down") === a) return 2;
            if (c.faces().includes("up")) return 3;
            if (c.faces().includes("down")) return 4;
            let h = c.getFaceOfColor(a),
              p = c.getFaceOfColor(c.colors().find((w) => w !== a)),
              _ = l.i(o.c)(h, p, { up: "up" });
            if (_ === "right") return 5;
            if (_ === "left") return 6;
          }
          _solveCase1({ edge: c }) {
            if (this.isEdgeSolved(c)) return;
            let h = c.faces().find((p) => p !== "up");
            this.move(`${h} ${h}`, { upperCase: !0 }),
              this._solveCase2({ edge: c });
          }
          _solveCase2({ edge: c }) {
            let h = this._case1And2Helper({ edge: c }, 2);
            this.move(h, { upperCase: !0 });
          }
          _solveCase3({ edge: c }) {
            let h = this._case3And4Helper({ edge: c }, 3);
            this.move(h, { upperCase: !0 }), this._solveCase5({ edge: c });
          }
          _solveCase4({ edge: c }) {
            let h = l.i(o.b)(
              "down",
              c.getFaceOfColor("u"),
              l.i(o.a)(c.getColorOfFace("down"))
            );
            this.move(h, { upperCase: !0 });
            let p = f(c.getFaceOfColor("u"));
            this.move(p, { upperCase: !0 }), this._solveCase5({ edge: c });
          }
          _solveCase5({ edge: c }) {
            let h = this._case5And6Helper({ edge: c }, 5);
            this.move(h, { upperCase: !0 });
          }
          _solveCase6({ edge: c }) {
            let h = this._case5And6Helper({ edge: c }, 6);
            this.move(h, { upperCase: !0 });
          }
          _case1And2Helper({ edge: c }, h) {
            let p = h === 1 ? "up" : "down",
              _ = c.faces().find((v) => v !== p),
              w = l.i(o.a)(c.getColorOfFace(_)),
              g = l.i(o.b)(p, _, w);
            if (h === 2) {
              let v = l.i(o.f)(w);
              g += ` ${v} ${v}`;
            }
            return g;
          }
          _case3And4Helper({ edge: c }, h) {
            let p = c.faces().find((_) => !["up", "down"].includes(_));
            return h === 4 && (p = f(p)), p;
          }
          _case5And6Helper({ edge: c }, h) {
            let p = c.colors().find((y) => y !== "u"),
              _ = c.getFaceOfColor(p),
              w = l.i(o.a)(p),
              g = l.i(o.b)("up", _, w),
              v = l.i(o.f)(_);
            return h === 6 && (v = f(v)), `${f(g)} ${v} ${g}`;
          }
          _getPartitionBefore({ edge: c }) {
            return { edge: c.clone() };
          }
          _getPartitionAfter({ edge: c }) {
            return { edge: c };
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return c;
        });
        var i = l(1),
          s = l(15),
          o = l(34),
          a = l(35),
          f = l(36),
          m = l(0);
        const u = (h) => i.a.reverseMoves(h);
        class c extends s.a {
          constructor(...p) {
            super(...p),
              (this.subCaseOptions = Object.assign(this.options, {
                _overrideAfterEach: !0,
              }));
          }
          solve() {
            return (
              (this.partitions = []),
              this.getAllPairs().forEach(({ corner: _, edge: w }) => {
                let g = this._solve({ corner: _, edge: w });
                this.partitions.push(g);
              }),
              this.partitions
            );
          }
          isSolved() {
            let p = this.getAllPairs();
            for (let _ of p) if (!this.isPairSolved(_)) return !1;
            return !0;
          }
          getAllPairs() {
            let p = this.cube.corners().filter((g) => g.hasColor("u")),
              _ = this.cube
                .edges()
                .filter((g) => !g.hasColor("u") && !g.hasColor("d")),
              w = [];
            for (let g of _) {
              let v = p.find((y) => {
                let P = g.colors();
                return y.hasColor(P[0]) && y.hasColor(P[1]);
              });
              w.push({ edge: g, corner: v });
            }
            return w;
          }
          _getCaseNumber({ corner: p, edge: _ }) {
            if (p.faces().includes("down")) {
              if (_.faces().includes("down")) return 1;
              if (!_.faces().includes("down") && !_.faces().includes("up"))
                return 2;
            }
            if (p.faces().includes("up")) {
              if (_.faces().includes("down")) return 3;
              if (!_.faces().includes("down") && !_.faces().includes("up"))
                return 4;
            }
            throw new Error("Could not find a top level F2L case");
          }
          _solveCase1({ corner: p, edge: _ }) {
            let g = new o.a(this.cube, this.subCaseOptions).solve({
              corner: p,
              edge: _,
            });
            (this.totalMoves = g.moves),
              (this.partition.caseNumber = [
                this.partition.caseNumber,
                g.caseNumber,
              ]);
          }
          _solveCase2({ corner: p, edge: _ }) {
            let g = new a.a(this.cube, this.subCaseOptions).solve({
              corner: p,
              edge: _,
            });
            (this.totalMoves = g.moves),
              (this.partition.caseNumber = [
                this.partition.caseNumber,
                g.caseNumber,
              ]);
          }
          _solveCase3({ corner: p, edge: _ }) {
            let g = new f.a(this.cube, this.subCaseOptions).solve({
              corner: p,
              edge: _,
            });
            (this.totalMoves = g.moves),
              (this.partition.caseNumber = [
                this.partition.caseNumber,
                g.caseNumber,
              ]);
          }
          _solveCase4({ corner: p, edge: _ }) {
            if (this.isPairSolved({ corner: p, edge: _ })) return;
            let w;
            p.faces().includes(_.faces()[0]) && p.faces().includes(_.faces()[1])
              ? (w = new o.a(this.cube, this.subCaseOptions))
              : (w = new a.a(this.cube, this.subCaseOptions));
            let g = p.faces().filter((C) => C !== "up"),
              y =
                l.i(m.c)(g[0], g[1], { up: "down" }) === "right" ? g[1] : g[0];
            this.move(`${y} D ${u(y)}`, { upperCase: !0 });
            let P = w.solve({ corner: p, edge: _ });
            (this.partition.caseNumber = [
              this.partition.caseNumber,
              P.caseNumber,
            ]),
              (this.totalMoves = [...this.totalMoves, ...P.moves]);
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return a;
        }),
          l(1);
        var i = l(3),
          s = l(0);
        const o = "00000000";
        class a extends i.a {
          constructor(...m) {
            super(...m),
              (this.phase = "oll"),
              (this.algorithms = {
                [o]: "",
                21000110: "F R U RPrime UPrime FPrime",
                21211010:
                  "F R U RPrime UPrime FPrime F R U RPrime UPrime FPrime",
                10201020:
                  "R U2 RPrime UPrime R U RPrime UPrime R UPrime RPrime",
                "01112000": "F U R UPrime RPrime FPrime",
                11102120: "F U R UPrime RPrime U R UPrime RPrime FPrime",
                1121e4: "RPrime UPrime FPrime U F R",
                11102021: "FPrime LPrime UPrime L U LPrime UPrime L U F",
                10011110: "R L2 BPrime L BPrime LPrime B2 L BPrime L RPrime",
                "00202121": "LPrime R2 B RPrime B R B2 RPrime B RPrime L",
                "01111111":
                  "F U R UPrime RPrime FPrime L F U FPrime UPrime LPrime",
                21212101:
                  "F U R UPrime RPrime FPrime R B U BPrime UPrime RPrime",
                21211111:
                  "F R U RPrime UPrime FPrime B U L UPrime LPrime BPrime",
                20201010: "R U2 R2 UPrime R2 UPrime R2 U2 R",
                "01101110": "R B RPrime L U LPrime UPrime R BPrime RPrime",
                21002120: "LPrime BPrime L RPrime UPrime R U LPrime B L",
                21001100: "RPrime F R U RPrime UPrime FPrime U R",
                "01000100": "R U RPrime UPrime MPrime U R UPrime rPrime",
                "01010101": "M U R U RPrime UPrime M2 U R UPrime rPrime",
                10211021:
                  "F R U RPrime UPrime R U RPrime UPrime FPrime B U L UPrime LPrime BPrime",
                11000120: "R U RPrime UPrime RPrime F R FPrime",
                10000020: "LPrime BPrime R B L BPrime RPrime B",
                20001e3: "B LPrime BPrime R B L BPrime RPrime",
                "00112001": "RPrime UPrime RPrime F R FPrime U R",
                21112111: "R U2 RPrime RPrime F R FPrime U2 RPrime F R FPrime",
                10002101: "R U2 RPrime RPrime F R FPrime R U2 RPrime",
                21110101: "M U R U RPrime UPrime MPrime RPrime F R FPrime",
                11212010: "F LPrime U2 L U2 L F2 LPrime F",
                "01110020":
                  "R U RPrime U R UPrime RPrime UPrime RPrime F R FPrime",
                10012100:
                  "RPrime UPrime R UPrime RPrime U R U R BPrime RPrime B",
                10112021: "RPrime UPrime R UPrime RPrime U FPrime U F R",
                "01110121":
                  "F U R UPrime RPrime FPrime F U FPrime UPrime FPrime L F LPrime",
                "01112101":
                  "F U R UPrime RPrime FPrime B U BPrime UPrime SPrime U B UPrime bPrime",
                21212e3: "lPrime U2 L U LPrime U l",
                "01212020": "r U RPrime U R U2 rPrime",
                "00202020": "R U RPrime U R U2 RPrime",
                10101e3: "RPrime UPrime R URprime RPrime U2 R",
                "01001021": "RPrime U R U2 RPrime UPrime FPrime U F U R",
                10200101:
                  "R UPrime RPrime U2 R U B UPrime BPrime UPrime RPrime",
                21102011: "r U RPrime U R UPrime RPrime U R U2 rPrime",
                21112010:
                  "lPrime UPrime L UPrime LPrime U L UPrime LPrime U2 l",
                11100011: "r U2 RPrime UPrime R UPrime rPrime",
                11012e3: "F R UPrime RPrime UPrime R U RPrime FPrime",
                11001011: "lPrime UPrime L UPrime LPrime U2 l",
                "01010000": "r U RPrime UPrime M U R UPrime RPrime",
                "01002110": "R U RPrime UPrime BPrime RPrime F R FPrime B",
                "01202120": "L FPrime LPrime UPrime L F LPrime FPrime U F",
                11001110: "RPrime F R U RPrime FPrime R F UPrime FPrime",
                102e5: "R2 D RPrime U2 R DPrime RPrime U2 RPrime",
                20112011: "RPrime U2 R2 U RPrime U R U2 BPrime RPrime B",
                10000121: "R U BPrime UPrime RPrime U R B RPrime",
                11000021: "RPrime UPrime F U R UPrime RPrime FPrime R",
                "01100120": "L FPrime LPrime UPrime L U F UPrime LPrime",
                11112020: "RPrime F R2 FPrime U2 FPrime U2 F RPrime",
                20110100:
                  "BPrime RPrime B LPrime BPrime R R BPrime RPrime B2 L",
                20100101: "B L BPrime R B L2 B L B2 RPrime",
                "01101011": "FPrime UPrime F L FPrime LPrime U L F LPrime",
                21012020: "F U FPrime RPrime F R UPrime RPrime FPrime R",
              });
          }
          isSolved() {
            return this.getOllString() === o;
          }
          solve() {
            return this._solve();
          }
          _getCaseNumber() {
            return this.getOllString();
          }
          _solveCase(m) {
            let u = this.findPattern(m),
              c = this.getAlgorithm(u),
              h = this._getFrontFace(m, u);
            this.move(c, { orientation: { up: "down", front: h } });
          }
          getOllString() {
            let m = [];
            return (
              this._getOllCubies().forEach((c) => {
                let h = this._getCubieOrientation(c);
                m.push(h);
              }),
              m.join("")
            );
          }
          findPattern(m) {
            typeof m > "u" && (m = this.getOllString());
            for (let u = 0; u < 4; u++) {
              if (typeof this.algorithms[m] == "string") return m;
              m = this._rotateOllStringLeft(m);
            }
            throw new Error(`No pattern found for oll string "${m}"`);
          }
          getAlgorithm(m) {
            if (
              (typeof m > "u" && (m = this.getPattern(m)),
              typeof this.algorithms[m] > "u")
            )
              throw new Error(`No algorithm found for pattern "${m}"`);
            return this.algorithms[m];
          }
          _getOllCubies() {
            return [
              ["front", "down", "right"],
              ["front", "down"],
              ["front", "down", "left"],
              ["left", "down"],
              ["left", "down", "back"],
              ["back", "down"],
              ["back", "down", "right"],
              ["right", "down"],
            ].map((u) => this.cube.getCubie(u));
          }
          _getCubieOrientation(m) {
            if (m.getColorOfFace("down") === "d") return 0;
            if (m.isEdge()) return 1;
            let [u, c] = m.faces().filter((_) => _ !== "down"),
              p = l.i(s.c)(u, c, { up: "down" }) === "right" ? c : u;
            return m.getColorOfFace(p) === "d" ? 1 : 2;
          }
          _getFrontFace(m, u) {
            let c = ["front", "left", "back", "right"];
            for (let h = 0; h < 4; h++) {
              if (m === u) return c[h];
              m = this._rotateOllStringLeft(m);
            }
            throw new Error(
              `OLL string "${m}" does not resolve to the pattern "${u}"`
            );
          }
          _rotateOllStringLeft(m) {
            return m.slice(2) + m.slice(0, 2);
          }
          _getPartitionBefore() {
            return this.getOllString();
          }
          _getPartitionAfter() {
            return null;
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return a;
        });
        var i = l(3),
          s = l(0);
        const o = "0 0 0 0 0 0 0 0";
        class a extends i.a {
          constructor(...m) {
            super(...m),
              (this.phase = "pll"),
              (this.algorithms = {
                [o]: "",
                "2 -1 1 -1 1 0 0 2": "R2 F2 RPrime BPrime R F2 RPrime B RPrime",
                "-1 1 -1 2 2 0 0 1": "R BPrime R F2 RPrime B R F2 R2",
                "1 -1 2 2 0 0 1 -1":
                  "R UPrime R U R U R UPrime RPrime UPrime R2",
                "-1 1 -1 1 0 0 2 2":
                  "R2 U R U RPrime UPrime RPrime UPrime RPrime U RPrime",
                "2 2 2 2 2 2 2 2": "M M U M M U2 M M U M M",
                "0 1 1 1 1 0 2 2":
                  "R U RPrime UPrime RPrime F R2 UPrime RPrime UPrime R U RPrime FPrime",
                "1 0 2 0 1 0 0 0":
                  "R U2 RPrime UPrime R U2 LPrime U RPrime UPrime L",
                "0 2 2 0 1 1 1 1":
                  "F R UPrime RPrime UPrime R U RPrime FPrime R U RPrime UPrime RPrime F R FPrime",
                "1 -1 -1 2 -1 -1 1 0":
                  "RPrime U2 R U2 RPrime F R U RPrime UPrime RPrime FPrime R2",
                "0 1 -1 -1 2 -1 -1 1":
                  "R UPrime RPrime UPrime R U R D RPrime UPrime R DPrime RPrime U2 RPrime",
                "0 2 -1 -1 -1 -1 2 0":
                  "RPrime U RPrime UPrime BPrime D BPrime DPrime B2 RPrime BPrime R B R",
                "2 -1 -1 -1 -1 2 0 0":
                  "RPrime UPrime FPrime R U RPrime UPrime RPrime F R2 UPrime RPrime UPrime R U RPrime U R",
                "-1 2 2 2 -1 2 0 2":
                  "L U LPrime B2 uPrime B UPrime BPrime U BPrime u B2",
                "2 -1 2 0 2 -1 2 2":
                  "RPrime UPrime R B2 u BPrime U B UPrime B uPrime B2",
                "2 -1 1 1 0 1 1 -1":
                  "R2 uPrime R UPrime R U RPrime u R2 B UPrime BPrime",
                "1 0 1 1 -1 2 -1 1":
                  "R2 u RPrime U RPrime UPrime R uPrime R2 FPrime U F",
                "1 -1 -1 1 1 -1 -1 1":
                  "U RPrime UPrime R UPrime R U R UPrime RPrime U R U R2 UPrime RPrime",
                "0 1 0 0 0 1 0 2":
                  "LPrime U2 L U LPrime U2 R UPrime L U RPrime",
                "1 1 -1 -1 1 1 -1 -1":
                  "R BPrime RPrime F R B RPrime FPrime R B RPrime F R BPrime RPrime FPrime",
                "2 0 2 0 2 0 2 0":
                  "R U RPrime U R U RPrime FPrime R U RPrime UPrime RPrime F R2 UPrime RPrime U2 R UPrime RPrime",
                "0 2 0 2 0 2 0 2":
                  "RPrime U R UPrime RPrime FPrime UPrime F R U RPrime F RPrime FPrime R UPrime R",
              });
          }
          solve() {
            return this._solve();
          }
          _getCaseNumber() {
            return this.getPllString();
          }
          _solveCase(m) {
            let u = this.findPattern(m),
              c = this.getAlgorithm(u),
              h = this._getFrontFace(m, u);
            this.move(c, { orientation: { up: "down", front: h } });
            let p = this.cube.getCubie(["down", "front"]),
              _ = "front",
              w = l.i(s.a)(p.getColorOfFace(_)),
              g = l.i(s.b)("down", _, w);
            this.move(g);
          }
          isSolved() {
            return this.cube.isSolved();
          }
          getPllString() {
            let m = [],
              u = this._getPllCubies(),
              c = ["front", "left", "back", "right"];
            for (let h = 0; h < u.length; h++) {
              let p = u[h],
                _ = u[h + 1],
                w = c[~~(h / 2)],
                g = p.getColorOfFace(w);
              _ || (_ = u[0]);
              let v = _.getColorOfFace(w),
                y = l.i(s.a)(g),
                P = l.i(s.a)(v),
                C = l.i(s.c)(y, P, { up: "down" });
              C === "front" && (C = 0),
                C === "right" && (C = 1),
                C === "left" && (C = -1),
                C === "back" && (C = 2),
                m.push(C);
            }
            return m.join(" ");
          }
          findPattern(m) {
            let u = m;
            typeof m > "u" && (m = this.getPllString());
            for (let c = 0; c < 4; c++) {
              if (typeof this.algorithms[m] == "string") return m;
              m = this._rotatePllStringLeft(m);
            }
            throw new Error(`No pattern found for pll string "${u}"`);
          }
          getAlgorithm(m) {
            if (
              (typeof m > "u" && (m = this.findPattern(m)),
              typeof this.algorithms[m] > "u")
            )
              throw new Error(`No algorithm found for pattern "${m}"`);
            return this.algorithms[m];
          }
          _getPllCubies() {
            return [
              ["front", "down", "right"],
              ["front", "down"],
              ["front", "down", "left"],
              ["left", "down"],
              ["left", "down", "back"],
              ["back", "down"],
              ["back", "down", "right"],
              ["right", "down"],
            ].map((u) => this.cube.getCubie(u));
          }
          _getCubiePermutation(m) {
            let u = m.faces().find((_) => _ !== "down"),
              c = l.i(s.a)(m.getColorOfFace(u)),
              h = l.i(s.b)("down", u, c);
            h = h.toLowerCase();
            let p;
            return (
              h === ""
                ? (p = 0)
                : h.includes("prime")
                ? (p = 1)
                : h.split(" ").length > 1
                ? (p = 2)
                : (p = -1),
              p
            );
          }
          _rotatePllStringLeft(m) {
            let u = m.split(" ").map((c) => parseInt(c));
            return [...u.slice(2), ...u.slice(0, 2)].join(" ");
          }
          _getFrontFace(m, u) {
            let c = ["front", "left", "back", "right"];
            for (let h = 0; h < 4; h++) {
              if (m === u) return c[h];
              m = this._rotatePllStringLeft(m);
            }
            throw new Error(
              `OLL string "${m}" does not resolve to the pattern "${u}"`
            );
          }
        }
      },
      function (n, r, l) {
        n.exports = function () {
          return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
        };
      },
      function (n, r) {
        n.exports = l;
        function l(i, s, o) {
          var a = s[0],
            f = s[1],
            m = s[2],
            u = o[0],
            c = o[1],
            h = o[2];
          return (
            (i[0] = f * h - m * c),
            (i[1] = m * u - a * h),
            (i[2] = a * c - f * u),
            i
          );
        }
      },
      function (n, r) {
        var l = (n.exports = {}),
          i,
          s;
        function o() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        (function () {
          try {
            typeof setTimeout == "function" ? (i = setTimeout) : (i = o);
          } catch {
            i = o;
          }
          try {
            typeof clearTimeout == "function" ? (s = clearTimeout) : (s = a);
          } catch {
            s = a;
          }
        })();
        function f(y) {
          if (i === setTimeout) return setTimeout(y, 0);
          if ((i === o || !i) && setTimeout)
            return (i = setTimeout), setTimeout(y, 0);
          try {
            return i(y, 0);
          } catch {
            try {
              return i.call(null, y, 0);
            } catch {
              return i.call(this, y, 0);
            }
          }
        }
        function m(y) {
          if (s === clearTimeout) return clearTimeout(y);
          if ((s === a || !s) && clearTimeout)
            return (s = clearTimeout), clearTimeout(y);
          try {
            return s(y);
          } catch {
            try {
              return s.call(null, y);
            } catch {
              return s.call(this, y);
            }
          }
        }
        var u = [],
          c = !1,
          h,
          p = -1;
        function _() {
          !c ||
            !h ||
            ((c = !1),
            h.length ? (u = h.concat(u)) : (p = -1),
            u.length && w());
        }
        function w() {
          if (!c) {
            var y = f(_);
            c = !0;
            for (var P = u.length; P; ) {
              for (h = u, u = []; ++p < P; ) h && h[p].run();
              (p = -1), (P = u.length);
            }
            (h = null), (c = !1), m(y);
          }
        }
        l.nextTick = function (y) {
          var P = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var C = 1; C < arguments.length; C++) P[C - 1] = arguments[C];
          u.push(new g(y, P)), u.length === 1 && !c && f(w);
        };
        function g(y, P) {
          (this.fun = y), (this.array = P);
        }
        (g.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
          (l.title = "browser"),
          (l.browser = !0),
          (l.env = {}),
          (l.argv = []),
          (l.version = ""),
          (l.versions = {});
        function v() {}
        (l.on = v),
          (l.addListener = v),
          (l.once = v),
          (l.off = v),
          (l.removeListener = v),
          (l.removeAllListeners = v),
          (l.emit = v),
          (l.prependListener = v),
          (l.prependOnceListener = v),
          (l.listeners = function (y) {
            return [];
          }),
          (l.binding = function (y) {
            throw new Error("process.binding is not supported");
          }),
          (l.cwd = function () {
            return "./";
          }),
          (l.chdir = function (y) {
            throw new Error("process.chdir is not supported");
          }),
          (l.umask = function () {
            return 0;
          });
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return o;
        });
        var i = l(4);
        const s = {
          front: "0 0 1",
          right: "1 0 0",
          up: "0 1 0",
          down: "0 -1 0",
          left: "-1 0 0",
          back: "0 0 -1",
        };
        class o {
          static FromNormal(f) {
            return (
              typeof f == "string" && (f = i.a.FromString(f).toArray()),
              new o(o.getFace(f))
            );
          }
          static getNormal(f) {
            return i.a.FromString(s[f]).toArray();
          }
          static getFace(f) {
            typeof f == "string" && (f = i.a.FromString(f).toArray());
            for (let m of Object.keys(s)) if (f.join(" ") === s[m]) return m;
          }
          constructor(f) {
            if (typeof f != "string")
              throw new Error(`"face" must be a string (received: ${f})`);
            (f = f.toLowerCase()), (this.vector = i.a.FromString(s[f]));
          }
          normal() {
            return this.vector.toArray();
          }
          toString() {
            return o.getFace(this.normal());
          }
          orientTo(f) {
            typeof f == "string" && (f = new o(f));
            let { axis: m, angle: u } = i.a.getRotationFromNormals(
              this.normal(),
              f.normal()
            );
            return this.vector.rotate(m, u), this;
          }
          rotate(f, m) {
            return this.vector.rotate(f, m), this;
          }
        }
        (o.FRONT = new o("FRONT")),
          (o.RIGHT = new o("RIGHT")),
          (o.UP = new o("UP")),
          (o.DOWN = new o("DOWN")),
          (o.LEFT = new o("LEFT")),
          (o.BACK = new o("BACK"));
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return f;
        });
        var i = l(3),
          s = l(1),
          o = l(0);
        const a = (m) => s.a.reverseMoves(m);
        class f extends i.a {
          constructor(...u) {
            super(...u), (this.phase = "f2l");
          }
          colorsMatch({ corner: u, edge: c }) {
            let h = c.colors();
            return !!(u.colors().includes(h[0]) && u.colors().includes(h[1]));
          }
          isPairSolved({ corner: u, edge: c }) {
            if (
              !this.isPairMatched({ corner: u, edge: c }) ||
              u.getFaceOfColor("u") !== "up"
            )
              return !1;
            for (let h of c.colors())
              if (c.getFaceOfColor(h) !== l.i(o.a)(h)) return !1;
            return !0;
          }
          isPairMatched({ corner: u, edge: c }) {
            if (!this.colorsMatch({ corner: u, edge: c })) return !1;
            for (let h of c.colors())
              if (u.getFaceOfColor(h) !== c.getFaceOfColor(h)) return !1;
            return !0;
          }
          isPairSeparated({ corner: u, edge: c }) {
            if (
              !this.colorsMatch({ corner: u, edge: c }) ||
              ["up", "down"].includes(u.getFaceOfColor("u")) ||
              !c.faces().includes("down")
            )
              return !1;
            let h = u
              .colors()
              .find((_) => _ !== "u" && u.getFaceOfColor(_) !== "down");
            return c.getFaceOfColor(h) !== "down"
              ? !1
              : l.i(o.c)(
                  u.getFaceOfColor(h),
                  c.getFaceOfColor(u.getColorOfFace("down")),
                  { up: "up" }
                ) === "back";
          }
          solveMatchedPair({ corner: u, edge: c }) {
            if (!this.isPairMatched({ corner: u, edge: c }))
              throw new Error("Pair is not matched");
            let h = c.colors().find((R) => c.getFaceOfColor(R) !== "down"),
              p =
                l.i(o.c)(c.getFaceOfColor(h), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left",
              _ = l.i(o.a)(h),
              w = u.getFaceOfColor(h),
              g = l.i(o.e)(_, p ? "left" : "right", { up: "down" }),
              v = l.i(o.b)("down", w, g),
              y = p ? _ : a(_),
              C = [v, y, p ? "DPrime" : "D", a(y)].join(" ");
            return this.move(C, { upperCase: !0 }), C;
          }
          solveSeparatedPair({ corner: u, edge: c }) {
            if (!this.isPairSeparated({ corner: u, edge: c }))
              throw new Error("Pair is not separated");
            let h = c.colors().find((C) => c.getFaceOfColor(C) !== "down"),
              p =
                l
                  .i(o.c)(u.getFaceOfColor("u"), c.getFaceOfColor(h), {
                    up: "down",
                  })
                  .toUpperCase() === "LEFT",
              _ = u.getFaceOfColor("u"),
              w = l.i(o.a)(h),
              g = l.i(o.b)("down", _, w),
              v = l.i(o.f)(w);
            v = p ? a(v) : v;
            let P = [g, v, p ? "DPrime" : "D", a(v)].join(" ");
            return this.move(P, { upperCase: !0 }), P;
          }
          _getPartitionBefore({ corner: u, edge: c }) {
            return { corner: u.clone(), edge: c.clone() };
          }
          _getPartitionAfter({ corner: u, edge: c }) {
            return { corner: u, edge: c };
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return c;
        });
        var i = l(1),
          s = l(7),
          o = l(8),
          a = l(9),
          f = l(10),
          m = l(0),
          u = l(2);
        class c {
          constructor(p, _) {
            if (p instanceof i.a) this.cube = p;
            else if (typeof p == "string") {
              let g = 6;
              p.split(" ").length > 1 || p.length <= g
                ? ((this.cube = i.a.Solved()), this.cube.move(p))
                : (this.cube = new i.a(p));
            } else
              throw new Error(
                '"cubeState" is not a valid cubeState. Please provide a list of scramble moves or a string representing a cube state'
              );
            (this.options = _),
              (this.phases = ["cross", "f2l", "oll", "pll"]),
              (this.progress = {}),
              this.phases.forEach((g) => (this.progress[g] = []));
            const w = (g, v) => {
              this._updateProgress(g, v);
            };
            (this.currentPhase = null),
              (this.currentSolver = null),
              (this.crossSolver = new s.a(this.cube, this.options)),
              (this.f2lSolver = new o.a(this.cube, this.options)),
              (this.ollSolver = new a.a(this.cube, this.options)),
              (this.pllSolver = new f.a(this.cube, this.options)),
              this.afterEach("all", w);
          }
          afterEach(p, _) {
            if (
              (typeof p == "function"
                ? ((_ = p), (p = "all"))
                : typeof p == "string" &&
                  (p === "all" ? (p = this.phases.slice()) : (p = [p])),
              typeof _ != "function")
            )
              throw new Error('"afterEach" callback is not a function.');
            for (let w of p)
              if (!this.phases.includes(w))
                throw new Error(
                  `Phase "${w}" isn't recognized. Please specify "cross", "f2l", "oll", "pll", or "all".`
                );
            for (let w of p) this[`${w}Solver`].afterEach(_);
          }
          solve() {
            (this.currentPhase = "cross"),
              (this.currentSolver = this.crossSolver),
              this.crossSolver.solve(),
              (this.currentPhase = "f2l"),
              (this.currentSolver = this.f2lSolver),
              this.f2lSolver.solve(),
              (this.currentPhase = "oll"),
              (this.currentSolver = this.ollSolver),
              this.ollSolver.solve(),
              (this.currentPhase = "pll"),
              (this.currentSolver = this.pllSolver),
              this.pllSolver.solve();
          }
          getMoves() {
            let p = [];
            return (
              Object.keys(this.progress).forEach((_) => {
                this.progress[_].forEach((g) => p.push(...g.moves));
              }),
              (p = l.i(m.h)(p)),
              p.join(" ")
            );
          }
          getPartitions() {
            let p = {};
            return (
              Object.keys(this.progress).forEach((w) => {
                let g = this.progress[w];
                if (g.length === 1) p[w] = l.i(u.a)(g[0].moves);
                else {
                  let v = [];
                  this.progress[w].forEach((y) => {
                    v.push(l.i(u.a)(y.moves));
                  }),
                    (p[w] = v);
                }
              }),
              p
            );
          }
          isCrossEdgeSolved(p) {
            return this.crossSolver.isEdgeSolved(p);
          }
          isF2LPairSolved({ corner: p, edge: _ }) {
            return this.f2lSolver.isPairSolved({ corner: p, edge: _ });
          }
          isOLLSolved() {
            return this.ollSolver.isSolved();
          }
          isPLLSolved() {
            return this.pllSolver.isSolved();
          }
          _updateProgress(p, _) {
            this.progress[_].push(p);
          }
        }
      },
      function (n, r, l) {
        (function (i) {
          function s() {
            var o = {
              modifiers: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29],
              },
              colors: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                gray: [90, 39],
              },
              bgColors: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
              },
            };
            return (
              (o.colors.grey = o.colors.gray),
              Object.keys(o).forEach(function (a) {
                var f = o[a];
                Object.keys(f).forEach(function (m) {
                  var u = f[m];
                  o[m] = f[m] = {
                    open: "\x1B[" + u[0] + "m",
                    close: "\x1B[" + u[1] + "m",
                  };
                }),
                  Object.defineProperty(o, a, { value: f, enumerable: !1 });
              }),
              o
            );
          }
          Object.defineProperty(i, "exports", { enumerable: !0, get: s });
        }).call(r, l(32)(n));
      },
      function (n, r, l) {
        let i, s;
        const o = {
          cancel() {
            return !1;
          },
          ignore() {
            return !1;
          },
        };
        class a {
          constructor(u, c) {
            (this.options = Object.assign({}, o, c)),
              this.options.DEBUG && ((i = l(20)), (s = c.DEBUG)),
              (this.input = u.slice()),
              (this.output = []);
          }
          run() {
            if (this.input.length <= 1) return this.input;
            this.temp = [this.input.shift()];
            let u, c, h;
            for (; this.temp.length > 0; ) {
              f(() => {
                console.log(i.bold("========= START =========")),
                  this._logInfo(),
                  console.log();
              });
              let p, _;
              if (this.temp.length === 1) {
                for (
                  p = 0, _ = this.input[p];
                  p < this.input.length && this.options.ignore(this.temp[0], _);

                )
                  _ = this.input[++p];
                p < this.input.length && this.temp.push(_);
              }
              if ((f(() => (h = this.temp.slice())), this.temp.length === 0)) {
                f(() => {
                  console.log(i.green("breaking")),
                    console.log(i.bold("========= END =========")),
                    console.log();
                });
                break;
              }
              if (this.temp.length === 1) {
                this.output.push(this.temp.pop()),
                  this.populateTempForward(),
                  f(() => {
                    console.log(i.green("continuing")),
                      this._logInfo(),
                      console.log(i.bold("========= END =========")),
                      console.log();
                  });
                continue;
              }
              if (this.options.compare(this.temp[0], this.temp[1])) {
                p !== void 0 && this.input.splice(p, 1);
                const w = this.options.combine(this.temp[0], this.temp[1]);
                f(() => {
                  (u = "Combining:"), (c = w);
                }),
                  (this.temp = this.options.cancel(w) ? [] : [w]),
                  this.populateTempBackward(),
                  this.temp.length === 0 && this.populateTempForward();
              } else
                this.output.push(this.temp.shift()),
                  p !== void 0 &&
                    (p > 0
                      ? (this.temp = this.input.splice(0, 1))
                      : this.input.splice(p, 1)),
                  f(() => (u = "Skipping:"));
              f(() => {
                console.log(i.green(u), h),
                  console.log(i.green("value:"), c),
                  console.log(),
                  this._logInfo(),
                  console.log(i.bold("========= END =========")),
                  console.log(),
                  (u = null),
                  (c = null),
                  (h = null);
              });
            }
            return (
              f(() => {
                console.log(i.bold.green("========= FINAL =========")),
                  this._logInfo(),
                  console.log(i.bold.green("========= FINAL =========")),
                  console.log();
              }),
              this.output
            );
          }
          populateTempBackward() {
            this.output.length > 0 && this.temp.unshift(this.output.pop());
          }
          populateTempForward() {
            this.input.length > 0 && this.temp.push(this.input.shift());
          }
          _logInfo() {
            console.log(i.bold("output"), this.output),
              console.log(i.bold("temp"), this.temp),
              console.log(i.bold("input"), this.input);
          }
        }
        n.exports = a;
        function f(m) {
          !s || (m && m());
        }
      },
      function (n, r, l) {
        const i = l(18);
        n.exports = (o, a = {}) => (s(o, a), new i(o, a).run());
        function s(o, a) {
          if (!o) throw new Error("Why are you even importing this.");
          if (!a.compare)
            throw new Error("options.compare callback must be present");
          if (!a.combine)
            throw new Error("options.combine callback must be present");
        }
      },
      function (n, r, l) {
        (function (i) {
          var s = l(21),
            o = l(17),
            a = l(30),
            f = l(29),
            m = l(31),
            u = Object.defineProperties,
            c = i.platform === "win32" && !/^xterm/i.test({}.TERM);
          function h(y) {
            this.enabled = !y || y.enabled === void 0 ? m : y.enabled;
          }
          c && (o.blue.open = "\x1B[94m");
          var p = (function () {
              var y = {};
              return (
                Object.keys(o).forEach(function (P) {
                  (o[P].closeRe = new RegExp(s(o[P].close), "g")),
                    (y[P] = {
                      get: function () {
                        return w.call(this, this._styles.concat(P));
                      },
                    });
                }),
                y
              );
            })(),
            _ = u(function () {}, p);
          function w(y) {
            var P = function () {
              return g.apply(P, arguments);
            };
            return (
              (P._styles = y), (P.enabled = this.enabled), (P.__proto__ = _), P
            );
          }
          function g() {
            var y = arguments,
              P = y.length,
              C = P !== 0 && String(arguments[0]);
            if (P > 1) for (var R = 1; R < P; R++) C += " " + y[R];
            if (!this.enabled || !C) return C;
            var M = this._styles,
              A = M.length,
              k = o.dim.open;
            for (
              c &&
              (M.indexOf("gray") !== -1 || M.indexOf("grey") !== -1) &&
              (o.dim.open = "");
              A--;

            ) {
              var O = o[M[A]];
              C = O.open + C.replace(O.closeRe, O.open) + O.close;
            }
            return (o.dim.open = k), C;
          }
          function v() {
            var y = {};
            return (
              Object.keys(p).forEach(function (P) {
                y[P] = {
                  get: function () {
                    return w.call(this, [P]);
                  },
                };
              }),
              y
            );
          }
          u(h.prototype, v()),
            (n.exports = new h()),
            (n.exports.styles = o),
            (n.exports.hasColor = f),
            (n.exports.stripColor = a),
            (n.exports.supportsColor = m);
        }).call(r, l(13));
      },
      function (n, r, l) {
        var i = /[|\\{}()[\]^$+*?.]/g;
        n.exports = function (s) {
          if (typeof s != "string") throw new TypeError("Expected a string");
          return s.replace(i, "\\$&");
        };
      },
      function (n, r, l) {
        n.exports = a;
        var i = l(24),
          s = l(25),
          o = l(23);
        function a(f, m) {
          var u = i(f[0], f[1], f[2]),
            c = i(m[0], m[1], m[2]);
          s(u, u), s(c, c);
          var h = o(u, c);
          return h > 1 ? 0 : Math.acos(h);
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s) {
          return i[0] * s[0] + i[1] * s[1] + i[2] * s[2];
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s, o) {
          var a = new Float32Array(3);
          return (a[0] = i), (a[1] = s), (a[2] = o), a;
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s) {
          var o = s[0],
            a = s[1],
            f = s[2],
            m = o * o + a * a + f * f;
          return (
            m > 0 &&
              ((m = 1 / Math.sqrt(m)),
              (i[0] = s[0] * m),
              (i[1] = s[1] * m),
              (i[2] = s[2] * m)),
            i
          );
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s, o, a) {
          var f = o[1],
            m = o[2],
            u = s[1] - f,
            c = s[2] - m,
            h = Math.sin(a),
            p = Math.cos(a);
          return (
            (i[0] = s[0]),
            (i[1] = f + u * p - c * h),
            (i[2] = m + u * h + c * p),
            i
          );
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s, o, a) {
          var f = o[0],
            m = o[2],
            u = s[0] - f,
            c = s[2] - m,
            h = Math.sin(a),
            p = Math.cos(a);
          return (
            (i[0] = f + c * h + u * p),
            (i[1] = s[1]),
            (i[2] = m + c * p - u * h),
            i
          );
        }
      },
      function (n, r) {
        n.exports = l;
        function l(i, s, o, a) {
          var f = o[0],
            m = o[1],
            u = s[0] - f,
            c = s[1] - m,
            h = Math.sin(a),
            p = Math.cos(a);
          return (
            (i[0] = f + u * p - c * h),
            (i[1] = m + u * h + c * p),
            (i[2] = s[2]),
            i
          );
        }
      },
      function (n, r, l) {
        var i = l(11),
          s = new RegExp(i().source);
        n.exports = s.test.bind(s);
      },
      function (n, r, l) {
        var i = l(11)();
        n.exports = function (s) {
          return typeof s == "string" ? s.replace(i, "") : s;
        };
      },
      function (n, r, l) {
        (function (i) {
          var s = i.argv,
            o = s.indexOf("--"),
            a = function (f) {
              f = "--" + f;
              var m = s.indexOf(f);
              return m !== -1 && (o !== -1 ? m < o : !0);
            };
          n.exports = (function () {
            return "FORCE_COLOR" in i.env
              ? !0
              : a("no-color") || a("no-colors") || a("color=false")
              ? !1
              : a("color") ||
                a("colors") ||
                a("color=true") ||
                a("color=always")
              ? !0
              : i.stdout && !i.stdout.isTTY
              ? !1
              : i.platform === "win32" || "COLORTERM" in i.env
              ? !0
              : {}.TERM === "dumb"
              ? !1
              : !!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(
                  {}.TERM
                );
          })();
        }).call(r, l(13));
      },
      function (n, r) {
        n.exports = function (l) {
          return (
            l.webpackPolyfill ||
              ((l.deprecate = function () {}),
              (l.paths = []),
              l.children || (l.children = []),
              Object.defineProperty(l, "loaded", {
                enumerable: !0,
                get: function () {
                  return l.l;
                },
              }),
              Object.defineProperty(l, "id", {
                enumerable: !0,
                get: function () {
                  return l.i;
                },
              }),
              (l.webpackPolyfill = 1)),
            l
          );
        };
      },
      function (n, r, l) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = l(16),
          s = l(2);
        l.d(r, "Solver", function () {
          return i.a;
        });
        var o = l(6);
        l.d(r, "Cubie", function () {
          return o.a;
        });
        var a = l(1);
        l.d(r, "RubiksCube", function () {
          return a.a;
        });
        var f = l(7);
        l.d(r, "CrossSolver", function () {
          return f.a;
        });
        var m = l(8);
        l.d(r, "F2LSolver", function () {
          return m.a;
        });
        var u = l(9);
        l.d(r, "OLLSolver", function () {
          return u.a;
        });
        var c = l(10);
        l.d(r, "PLLSolver", function () {
          return c.a;
        }),
          l.d(r, "algorithmShortener", function () {
            return s.a;
          }),
          (r.default = (h, p = {}) => {
            let _ = new i.a(h, p);
            return (
              _.solve(),
              p.partitioned ? _.getPartitions() : l.i(s.a)(_.getMoves())
            );
          });
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return f;
        });
        var i = l(1),
          s = l(5),
          o = l(0);
        const a = (m) => i.a.reverseMoves(m);
        class f extends s.a {
          _getCaseNumber({ corner: u, edge: c }) {
            if (this.isPairMatched({ corner: u, edge: c })) return 1;
            if (this.isPairSeparated({ corner: u, edge: c })) return 2;
            let h;
            c.faces().forEach((w) => {
              u.faces().includes(w) && w !== "down" && (h = w);
            });
            let p = u
                .colors()
                .find((w) => w !== "u" && w !== u.getColorOfFace("down")),
              _ = c.colors().find((w) => c.getFaceOfColor(w) !== "down");
            return u.getFaceOfColor("u") === "down"
              ? h
                ? u.getColorOfFace(h) === c.getColorOfFace(h)
                  ? 3
                  : 4
                : 5
              : p === _
              ? h
                ? 6
                : 7
              : h
              ? h === u.getFaceOfColor("u")
                ? 8
                : 9
              : 10;
          }
          _solveCase1({ corner: u, edge: c }) {
            return this.solveMatchedPair({ corner: u, edge: c });
          }
          _solveCase2({ corner: u, edge: c }) {
            return this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase3({ corner: u, edge: c }) {
            let h = c.faces().find((R) => R !== "down"),
              p = l.i(o.a)(c.getColorOfFace("down")),
              _ = l.i(o.e)(p, "back", { up: "down" }),
              w = u.getFaceOfColor(c.getColorOfFace("down")),
              g = l.i(o.e)(h, w, { up: "down" }) === "left",
              v = l.i(o.b)("down", h, _),
              y = l.i(o.a)(c.getColorOfFace(h)),
              P = g ? "D" : "DPrime";
            y = g ? y : a(y);
            let C = `${v} ${y} ${y} D D `;
            (C += `${y} ${P} ${a(y)} ${P} ${y} ${y}`),
              this.move(C, { upperCase: !0 });
          }
          _solveCase4({ corner: u, edge: c }) {
            let h = c.faces().find((y) => y !== "down"),
              p = l.i(o.a)(c.getColorOfFace(h)),
              _ = u.faces().find((y) => !c.faces().includes(y)),
              w = l.i(o.e)(_, h, { up: "down" }) === "left",
              g = l.i(o.b)("down", h, p),
              v = l.i(o.f)(p);
            (v = w ? a(v) : v),
              this.move(`${g} ${v} D D ${a(v)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase5({ corner: u, edge: c }) {
            let h = c.colors().find((M) => c.getFaceOfColor(M) !== "down"),
              p = c.colors().find((M) => c.getFaceOfColor(M) === "down"),
              _ =
                l.i(o.e)(l.i(o.a)(h), l.i(o.a)(p), { up: "down" }) === "right",
              w = c.getFaceOfColor(h),
              g = l.i(o.a)(h),
              v = l.i(o.b)("down", w, g);
            this.move(v, { upperCase: !0 });
            let y = u.getFaceOfColor(h),
              P = g,
              C = l.i(o.b)("down", y, P),
              R = _ ? a(g) : g;
            this.move(`${R} ${C} ${a(R)}`, { upperCase: !0 }),
              this.solveMatchedPair({ corner: u, edge: c });
          }
          _solveCase6({ corner: u, edge: c }) {
            let h = c.colors().find((P) => c.getFaceOfColor(P) !== "down"),
              p = c.getFaceOfColor(h),
              _ = l.i(o.a)(c.getColorOfFace("down")),
              w = l.i(o.c)(p, u.getFaceOfColor(h), { up: "down" }) === "left",
              g = l.i(o.b)("down", p, _),
              v = w ? _ : a(_),
              y = w ? "DPrime" : "D";
            this.move(`${g} ${v} ${y} ${a(v)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase7({ corner: u, edge: c }) {
            let h = c.colors().find((R) => c.getFaceOfColor(R) !== "down"),
              p = u.getFaceOfColor("u"),
              _ = l.i(o.a)(h),
              w =
                l.i(o.c)(u.getFaceOfColor(h), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left",
              g = l.i(o.b)("down", p, _);
            this.move(g, { upperCase: !0 });
            let v = c.getFaceOfColor(h),
              y = u.getFaceOfColor(h),
              P = w ? u.getFaceOfColor("u") : a(u.getFaceOfColor("u")),
              C = l.i(o.b)("down", v, y);
            this.move(`${P} ${C} ${a(P)}`, { upperCase: !0 }),
              this.solveMatchedPair({ corner: u, edge: c });
          }
          _solveCase8({ corner: u, edge: c }) {
            let h = c.colors().find((C) => c.getFaceOfColor(C) !== "down"),
              p = c.colors().find((C) => c.getFaceOfColor(C) === "down"),
              _ = u.getFaceOfColor(p),
              w = l.i(o.a)(h),
              g = l.i(o.c)(_, u.getFaceOfColor("u"), { up: "down" }) === "left",
              v = l.i(o.b)("down", _, w),
              y = g ? a(w) : w,
              P = g ? "D" : "DPrime";
            this.move(`${v} ${y} ${P} ${a(y)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase9({ corner: u, edge: c }) {
            let h = c.colors().find((y) => c.getFaceOfColor(y) === "down"),
              p = u.getFaceOfColor("u"),
              _ = l.i(o.a)(h),
              w = l.i(o.c)(u.getFaceOfColor(h), p, { up: "down" }) === "left",
              g = l.i(o.b)("down", p, _),
              v = w ? _ : a(_);
            this.move(`${g} ${v} D D ${a(v)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase10({ corner: u, edge: c }) {
            let h = c.colors().find((M) => c.getFaceOfColor(M) !== "down"),
              p = c.colors().find((M) => c.getFaceOfColor(M) === "down"),
              _ = u.getFaceOfColor("u"),
              w = l.i(o.a)(p),
              g =
                l.i(o.c)(u.getFaceOfColor(p), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left",
              v = l.i(o.b)("down", _, w);
            this.move(v, { upperCase: !0 });
            let y = c.getFaceOfColor(h),
              P = l.i(o.a)(h),
              C = g ? w : a(w),
              R = l.i(o.b)("down", y, P);
            this.move(`${C} ${R} ${a(C)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return f;
        });
        var i = l(1),
          s = l(5),
          o = l(0);
        const a = (m) => i.a.reverseMoves(m);
        class f extends s.a {
          _getCaseNumber({ corner: u, edge: c }) {
            let h = u.faces().filter((R) => R !== "down"),
              p = c.faces(),
              _ = l.i(o.c)(h[0], h[1], { up: "down" }),
              w = l.i(o.c)(p[0], p[1], { up: "down" }),
              g = _ === "right" ? h[1] : h[0],
              v = w === "right" ? p[1] : p[0];
            if (u.getFaceOfColor("u") === "down")
              return u.getColorOfFace(g) === c.getColorOfFace(v) ? 1 : 2;
            let y = u
                .colors()
                .find((R) => R !== "u" && R !== u.getColorOfFace("down")),
              C =
                l.i(o.c)(u.getFaceOfColor(y), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left"
                  ? c.getColorOfFace(v)
                  : c.colors().find((R) => c.getFaceOfColor(R) !== v);
            return y === C ? 3 : 4;
          }
          _solveCase1({ corner: u, edge: c }) {
            let h = c.colors()[0],
              p = u.getFaceOfColor(h),
              _ = c.getFaceOfColor(h),
              w = l.i(o.b)("down", p, _);
            this.move(w, { upperCase: !0 });
            let [g, v] = c.faces(),
              P = l.i(o.c)(g, v, { up: "down" }) === "right" ? v : g;
            this.move(`${P} DPrime ${a(P)}`, { upperCase: !0 }),
              this.solveMatchedPair({ corner: u, edge: c });
          }
          _solveCase2({ corner: u, edge: c }) {
            let h = u.getFaceOfColor(c.colors()[0]),
              p = c.getFaceOfColor(c.colors()[1]),
              _ = l.i(o.b)("down", h, p);
            this.move(_, { upperCase: !0 });
            let w = l.i(o.c)(c.faces()[0], c.faces()[1], { up: "down" }),
              g = c.faces()[w === "right" ? 1 : 0];
            this.move(`${g} D ${a(g)} DPrime`, { upperCase: !0 }),
              this.move(`${g} D ${a(g)}`, { upperCase: !0 }),
              this.solveSeparatedPair({ corner: u, edge: c });
          }
          _solveCase3({ corner: u, edge: c }) {
            this._case3And4Helper({ corner: u, edge: c }, 3);
          }
          _solveCase4({ corner: u, edge: c }) {
            this._case3And4Helper({ corner: u, edge: c }, 4);
          }
          _case3And4Helper({ corner: u, edge: c }, h) {
            let p = u.getColorOfFace("down"),
              _ = u.colors().find((A) => ![p, "u"].includes(A)),
              w = h === 3 ? _ : p,
              g =
                l.i(o.c)(u.getFaceOfColor(_), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left",
              v = u.getFaceOfColor("u"),
              y = c.getFaceOfColor(w),
              P = l.i(o.b)("down", v, y),
              C = g ? y : a(y),
              R = g ? "DPrime" : "D";
            (R = h === 4 ? a(R) : R),
              this.move(`${P} ${C} ${R} ${a(C)}`, { upperCase: !0 }),
              this[`solve${h === 3 ? "Matched" : "Separated"}Pair`]({
                corner: u,
                edge: c,
              });
          }
        }
      },
      function (n, r, l) {
        l.d(r, "a", function () {
          return f;
        });
        var i = l(1),
          s = l(5),
          o = l(0);
        const a = (m) => i.a.reverseMoves(m);
        class f extends s.a {
          _getCaseNumber({ corner: u, edge: c }) {
            return u.getColorOfFace("up") === "u" ? 1 : 2;
          }
          _solveCase1({ corner: u, edge: c }) {
            let h = u.faces().filter((A) => A !== "up"),
              p = l.i(o.c)(h[0], h[1], { up: "down" }),
              [_, w] = p === "right" ? h : h.reverse(),
              g = c.faces().find((A) => A !== "down"),
              v = c.getColorOfFace(g),
              y = l.i(o.e)(
                u.getFaceOfColor(v),
                v === u.getColorOfFace(w) ? "right" : "left",
                { up: "down" }
              ),
              P = v === u.getColorOfFace(_),
              C = l.i(o.b)("down", g, y),
              R = P ? w : a(_),
              M = P ? "DPrime" : "D";
            this.move(`${C} ${R} ${M} ${a(R)}`, { upperCase: !0 }),
              this.solveMatchedPair({ corner: u, edge: c });
          }
          _solveCase2({ corner: u, edge: c }) {
            let h = u
                .colors()
                .find((M) => M !== "u" && u.getFaceOfColor(M) !== "up"),
              p = c.faces().find((M) => M !== "down"),
              _ = c.getColorOfFace(p),
              w = h !== _,
              g = u.getFaceOfColor(w ? h : "u"),
              v = l.i(o.b)("down", p, g),
              y =
                l.i(o.c)(u.getFaceOfColor(h), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left",
              P = y ? "DPrime" : "D",
              C = u.getFaceOfColor("u");
            (C = y ? a(C) : C),
              this.move(`${v} ${C} ${P} ${a(C)}`, { upperCase: !0 }),
              this[`solve${w ? "Matched" : "Separated"}Pair`]({
                corner: u,
                edge: c,
              });
          }
        }
      },
    ]);
  });
})(Mc);
const im = _a(Mc.exports);
function om(e) {
  let [t, n] = ze.exports.useState(0);
  function r() {
    function l(p) {
      return p.map((w) => {
        let g = "f";
        switch (w) {
          case "green":
            g = "f";
            break;
          case "red":
            g = "r";
            break;
          case "white":
            g = "u";
            break;
          case "yellow":
            g = "d";
            break;
          case "orange":
            g = "l";
            break;
          case "blue":
            g = "b";
            break;
          default:
            console.log("Invalid Color to Side Conversion. Default side used");
        }
        return g;
      });
    }
    let i = l(e.cubeColorState.front).join(""),
      s = l(e.cubeColorState.right).join(""),
      o = l(e.cubeColorState.upper).join(""),
      a = l(e.cubeColorState.down).join(""),
      f = l(e.cubeColorState.left).join(""),
      m = l(e.cubeColorState.back).join(""),
      u = [i, s, o, a, f, m].join(""),
      c = im(u).split(" ");
    console.log(c);
    let h = c
      .map((p) =>
        p.includes("2")
          ? p
          : p.includes("prime")
          ? p.replace("prime", "")
          : p + "prime"
      )
      .reverse();
    e.setAlgo({ solveMoves: c, reverseMoves: h }), n(c.length), e.handleClick();
  }
  return T("div", {
    className: "face__set--section flex__center--col",
    children: [
      d("div", { className: "face__set--title", children: "Type Face Color" }),
      T("div", {
        className: "face__set--body flex__center--row",
        children: [
          T("ul", {
            className: "color__value--container",
            children: [
              d("div", { className: "color__heading", children: "Colors: " }),
              T("li", {
                className: "color__value green",
                children: [d("b", { children: "g" }), " = Green"],
              }),
              T("li", {
                className: "color__value red",
                children: [d("b", { children: "r" }), " = Red"],
              }),
              T("li", {
                className: "color__value white",
                children: [d("b", { children: "w" }), " = White"],
              }),
              T("li", {
                className: "color__value yellow",
                children: [d("b", { children: "y" }), " = Yellow"],
              }),
              T("li", {
                className: "color__value orange",
                children: [d("b", { children: "o" }), " = Orange"],
              }),
              T("li", {
                className: "color__value blue",
                children: [d("b", { children: "b" }), " = Blue"],
              }),
            ],
          }),
          T("div", {
            className: "face__set--container flex__center--row",
            children: [
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Front Green Face",
                  }),
                  d(dn, { side: e.colors.front }),
                  d("input", {
                    name: "front",
                    type: "text",
                    className: "color__input",
                    placeholder: "ggggggggg",
                    onChange: e.handleChange,
                  }),
                ],
              }),
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Right Red Face",
                  }),
                  d(dn, { side: e.colors.right }),
                  d("input", {
                    name: "right",
                    type: "text",
                    className: "color__input",
                    placeholder: "rrrrrrrrr",
                    onChange: e.handleChange,
                  }),
                ],
              }),
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Upper White Face",
                  }),
                  d(dn, { side: e.colors.upper }),
                  d("input", {
                    name: "upper",
                    type: "text",
                    className: "color__input",
                    placeholder: "wwwwwwwww",
                    onChange: e.handleChange,
                  }),
                ],
              }),
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Down Yellow Face",
                  }),
                  d(dn, { side: e.colors.down }),
                  d("input", {
                    name: "down",
                    type: "text",
                    className: "color__input",
                    placeholder: "yyyyyyyyy",
                    onChange: e.handleChange,
                  }),
                ],
              }),
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Left Orange Face",
                  }),
                  d(dn, { side: e.colors.left }),
                  d("input", {
                    name: "left",
                    type: "text",
                    className: "color__input",
                    placeholder: "ooooooooo",
                    onChange: e.handleChange,
                  }),
                ],
              }),
              T("div", {
                className: "face__info",
                children: [
                  d("div", {
                    className: "face__name",
                    children: "Back Blue Face",
                  }),
                  d(dn, { side: e.colors.back }),
                  d("input", {
                    name: "back",
                    type: "text",
                    className: "color__input",
                    placeholder: "bbbbbbbbb",
                    onChange: e.handleChange,
                  }),
                ],
              }),
            ],
          }),
          T("div", {
            className: "example__colors",
            children: [
              d("div", {
                className: "example__color--heading",
                children: "Example:",
              }),
              T("ul", {
                className: "example__list",
                children: [
                  d("li", {
                    className: "example__item green",
                    children: "ggyggwggg",
                  }),
                  d("li", {
                    className: "example__item red",
                    children: "rrwbrrwrr",
                  }),
                  d("li", {
                    className: "example__item white",
                    children: "wwowwgwwg",
                  }),
                  d("li", {
                    className: "example__item yellow",
                    children: "yyryyyyyy",
                  }),
                  d("li", {
                    className: "example__item orange",
                    children: "boooooooo",
                  }),
                  d("li", {
                    className: "example__item blue",
                    children: "brrbbbbbb",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      d("button", {
        className: "color__set--btn",
        onClick: r,
        children: "Next",
      }),
    ],
  });
}
const sm = "./assets/cube_position-e3d5a86a.png",
  am = "./assets/3D_axis-6095f3c2.png";
function um(e) {
  return T("div", {
    className: "position__container flex__center--col",
    children: [
      d("div", {
        className: "position__heading",
        children: "Orient your cube as shown here to input.",
      }),
      T("ul", {
        className: "position__side--color flex__center--row",
        children: [
          d("li", {
            className: "position__side",
            children: "Green center at Front",
          }),
          d("li", {
            className: "position__side",
            children: "White center at Top",
          }),
          d("li", {
            className: "position__side",
            children: "Red center at Right",
          }),
        ],
      }),
      T("ul", {
        className: "position__side--color flex__center--row",
        children: [
          d("li", {
            className: "position__side",
            children: "Blue center at Back",
          }),
          d("li", {
            className: "position__side",
            children: "Yellow center at Bottom",
          }),
          d("li", {
            className: "position__side",
            children: "Orange center at Left",
          }),
        ],
      }),
      d("div", {
        className: "cube__pos--container",
        children: d("img", {
          src: sm,
          alt: "Rubiks Cube Position Set",
          className: "cube__pos--pic",
        }),
      }),
      d("img", { src: am, alt: "3D Axis", className: "position__axis" }),
      d("button", {
        className: "pos__btn",
        onClick: e.handleClick,
        children: "Okay",
      }),
    ],
  });
}
var kc = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(ze.exports);
  })(typeof self < "u" ? self : ya, function (n) {
    return (function (r) {
      var l = {};
      function i(s) {
        if (l[s]) return l[s].exports;
        var o = (l[s] = { i: s, l: !1, exports: {} });
        return r[s].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
      }
      return (
        (i.m = r),
        (i.c = l),
        (i.d = function (s, o, a) {
          i.o(s, o) || Object.defineProperty(s, o, { enumerable: !0, get: a });
        }),
        (i.r = function (s) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(s, "__esModule", { value: !0 });
        }),
        (i.t = function (s, o) {
          if (
            (1 & o && (s = i(s)),
            8 & o || (4 & o && typeof s == "object" && s && s.__esModule))
          )
            return s;
          var a = Object.create(null);
          if (
            (i.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: s }),
            2 & o && typeof s != "string")
          )
            for (var f in s)
              i.d(
                a,
                f,
                function (m) {
                  return s[m];
                }.bind(null, f)
              );
          return a;
        }),
        (i.n = function (s) {
          var o =
            s && s.__esModule
              ? function () {
                  return s.default;
                }
              : function () {
                  return s;
                };
          return i.d(o, "a", o), o;
        }),
        (i.o = function (s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }),
        (i.p = ""),
        i((i.s = 2))
      );
    })([
      function (r, l) {
        r.exports = n;
      },
      function (r, l, i) {
        var s = {
          linear: function (o, a, f, m) {
            return ((f - a) * o) / m + a;
          },
          easeInQuad: function (o, a, f, m) {
            return (f - a) * (o /= m) * o + a;
          },
          easeOutQuad: function (o, a, f, m) {
            return -(f - a) * (o /= m) * (o - 2) + a;
          },
          easeInOutQuad: function (o, a, f, m) {
            var u = f - a;
            return (o /= m / 2) < 1
              ? (u / 2) * o * o + a
              : (-u / 2) * (--o * (o - 2) - 1) + a;
          },
          easeInCubic: function (o, a, f, m) {
            return (f - a) * (o /= m) * o * o + a;
          },
          easeOutCubic: function (o, a, f, m) {
            return (f - a) * ((o = o / m - 1) * o * o + 1) + a;
          },
          easeInOutCubic: function (o, a, f, m) {
            var u = f - a;
            return (o /= m / 2) < 1
              ? (u / 2) * o * o * o + a
              : (u / 2) * ((o -= 2) * o * o + 2) + a;
          },
          easeInQuart: function (o, a, f, m) {
            return (f - a) * (o /= m) * o * o * o + a;
          },
          easeOutQuart: function (o, a, f, m) {
            return -(f - a) * ((o = o / m - 1) * o * o * o - 1) + a;
          },
          easeInOutQuart: function (o, a, f, m) {
            var u = f - a;
            return (o /= m / 2) < 1
              ? (u / 2) * o * o * o * o + a
              : (-u / 2) * ((o -= 2) * o * o * o - 2) + a;
          },
          easeInQuint: function (o, a, f, m) {
            return (f - a) * (o /= m) * o * o * o * o + a;
          },
          easeOutQuint: function (o, a, f, m) {
            return (f - a) * ((o = o / m - 1) * o * o * o * o + 1) + a;
          },
          easeInOutQuint: function (o, a, f, m) {
            var u = f - a;
            return (o /= m / 2) < 1
              ? (u / 2) * o * o * o * o * o + a
              : (u / 2) * ((o -= 2) * o * o * o * o + 2) + a;
          },
          easeInSine: function (o, a, f, m) {
            var u = f - a;
            return -u * Math.cos((o / m) * (Math.PI / 2)) + u + a;
          },
          easeOutSine: function (o, a, f, m) {
            return (f - a) * Math.sin((o / m) * (Math.PI / 2)) + a;
          },
          easeInOutSine: function (o, a, f, m) {
            return (-(f - a) / 2) * (Math.cos((Math.PI * o) / m) - 1) + a;
          },
          easeInExpo: function (o, a, f, m) {
            return o == 0 ? a : (f - a) * Math.pow(2, 10 * (o / m - 1)) + a;
          },
          easeOutExpo: function (o, a, f, m) {
            var u = f - a;
            return o == m ? a + u : u * (1 - Math.pow(2, (-10 * o) / m)) + a;
          },
          easeInOutExpo: function (o, a, f, m) {
            var u = f - a;
            return o === 0
              ? a
              : o === m
              ? a + u
              : (o /= m / 2) < 1
              ? (u / 2) * Math.pow(2, 10 * (o - 1)) + a
              : (u / 2) * (2 - Math.pow(2, -10 * --o)) + a;
          },
          easeInCirc: function (o, a, f, m) {
            return -(f - a) * (Math.sqrt(1 - (o /= m) * o) - 1) + a;
          },
          easeOutCirc: function (o, a, f, m) {
            return (f - a) * Math.sqrt(1 - (o = o / m - 1) * o) + a;
          },
          easeInOutCirc: function (o, a, f, m) {
            var u = f - a;
            return (o /= m / 2) < 1
              ? (-u / 2) * (Math.sqrt(1 - o * o) - 1) + a
              : (u / 2) * (Math.sqrt(1 - (o -= 2) * o) + 1) + a;
          },
          easeInElastic: function (o, a, f, m) {
            var u,
              c,
              h,
              p = f - a;
            return (
              (h = 1.70158),
              o === 0
                ? a
                : (o /= m) == 1
                ? a + p
                : ((c = 0) || (c = 0.3 * m),
                  (u = p) < Math.abs(p)
                    ? ((u = p), (h = c / 4))
                    : (h = (c / (2 * Math.PI)) * Math.asin(p / u)),
                  -u *
                    Math.pow(2, 10 * (o -= 1)) *
                    Math.sin(((o * m - h) * (2 * Math.PI)) / c) +
                    a)
            );
          },
          easeOutElastic: function (o, a, f, m) {
            var u,
              c,
              h,
              p = f - a;
            return (
              (h = 1.70158),
              o === 0
                ? a
                : (o /= m) == 1
                ? a + p
                : ((c = 0) || (c = 0.3 * m),
                  (u = p) < Math.abs(p)
                    ? ((u = p), (h = c / 4))
                    : (h = (c / (2 * Math.PI)) * Math.asin(p / u)),
                  u *
                    Math.pow(2, -10 * o) *
                    Math.sin(((o * m - h) * (2 * Math.PI)) / c) +
                    p +
                    a)
            );
          },
          easeInOutElastic: function (o, a, f, m) {
            var u,
              c,
              h,
              p = f - a;
            return (
              (h = 1.70158),
              o === 0
                ? a
                : (o /= m / 2) == 2
                ? a + p
                : ((c = 0) || (c = m * 0.44999999999999996),
                  (u = p) < Math.abs(p)
                    ? ((u = p), (h = c / 4))
                    : (h = (c / (2 * Math.PI)) * Math.asin(p / u)),
                  o < 1
                    ? u *
                        Math.pow(2, 10 * (o -= 1)) *
                        Math.sin(((o * m - h) * (2 * Math.PI)) / c) *
                        -0.5 +
                      a
                    : u *
                        Math.pow(2, -10 * (o -= 1)) *
                        Math.sin(((o * m - h) * (2 * Math.PI)) / c) *
                        0.5 +
                      p +
                      a)
            );
          },
          easeInBack: function (o, a, f, m, u) {
            return (
              u === void 0 && (u = 1.70158),
              (f - a) * (o /= m) * o * ((u + 1) * o - u) + a
            );
          },
          easeOutBack: function (o, a, f, m, u) {
            return (
              u === void 0 && (u = 1.70158),
              (f - a) * ((o = o / m - 1) * o * ((u + 1) * o + u) + 1) + a
            );
          },
          easeInOutBack: function (o, a, f, m, u) {
            var c = f - a;
            return (
              u === void 0 && (u = 1.70158),
              (o /= m / 2) < 1
                ? (c / 2) * (o * o * ((1 + (u *= 1.525)) * o - u)) + a
                : (c / 2) * ((o -= 2) * o * ((1 + (u *= 1.525)) * o + u) + 2) +
                  a
            );
          },
          easeInBounce: function (o, a, f, m) {
            var u = f - a;
            return u - s.easeOutBounce(m - o, 0, u, m) + a;
          },
          easeOutBounce: function (o, a, f, m) {
            var u = f - a;
            return (o /= m) < 0.36363636363636365
              ? u * (7.5625 * o * o) + a
              : o < 0.7272727272727273
              ? u * (7.5625 * (o -= 0.5454545454545454) * o + 0.75) + a
              : o < 0.9090909090909091
              ? u * (7.5625 * (o -= 0.8181818181818182) * o + 0.9375) + a
              : u * (7.5625 * (o -= 0.9545454545454546) * o + 0.984375) + a;
          },
          easeInOutBounce: function (o, a, f, m) {
            var u = f - a;
            return o < m / 2
              ? 0.5 * s.easeInBounce(2 * o, 0, u, m) + a
              : 0.5 * s.easeOutBounce(2 * o - m, 0, u, m) + 0.5 * u + a;
          },
        };
        r.exports = s;
      },
      function (r, l, i) {
        r.exports = i(3);
      },
      function (r, l, i) {
        i.r(l),
          i.d(l, "ReactConfetti", function () {
            return _t;
          });
        var s,
          o,
          a = i(0),
          f = i.n(a),
          m = i(1),
          u = i.n(m);
        function c(S, x) {
          return S + Math.random() * (x - S);
        }
        function h(S, x) {
          for (var U = 0; U < x.length; U++) {
            var F = x[U];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(S, F.key, F);
          }
        }
        function p(S, x, U) {
          return (
            x in S
              ? Object.defineProperty(S, x, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (S[x] = U),
            S
          );
        }
        (function (S) {
          (S[(S.Circle = 0)] = "Circle"),
            (S[(S.Square = 1)] = "Square"),
            (S[(S.Strip = 2)] = "Strip");
        })(s || (s = {})),
          (function (S) {
            (S[(S.Positive = 1)] = "Positive"),
              (S[(S.Negative = -1)] = "Negative");
          })(o || (o = {}));
        var _ = (function () {
          function S(F, G, B, V) {
            (function (E, N) {
              if (!(E instanceof N))
                throw new TypeError("Cannot call a class as a function");
            })(this, S),
              p(this, "context", void 0),
              p(this, "radius", void 0),
              p(this, "x", void 0),
              p(this, "y", void 0),
              p(this, "w", void 0),
              p(this, "h", void 0),
              p(this, "vx", void 0),
              p(this, "vy", void 0),
              p(this, "shape", void 0),
              p(this, "angle", void 0),
              p(this, "angularSpin", void 0),
              p(this, "color", void 0),
              p(this, "rotateY", void 0),
              p(this, "rotationDirection", void 0),
              p(this, "getOptions", void 0),
              (this.getOptions = G);
            var ee,
              re,
              b = this.getOptions(),
              He = b.colors,
              Me = b.initialVelocityX,
              Te = b.initialVelocityY;
            (this.context = F),
              (this.x = B),
              (this.y = V),
              (this.w = c(5, 20)),
              (this.h = c(5, 20)),
              (this.radius = c(5, 10)),
              (this.vx =
                typeof Me == "number" ? c(-Me, Me) : c(Me.min, Me.max)),
              (this.vy = typeof Te == "number" ? c(-Te, 0) : c(Te.min, Te.max)),
              (this.shape =
                ((ee = 0),
                (re = 2),
                Math.floor(ee + Math.random() * (re - ee + 1)))),
              (this.angle = (c(0, 360) * Math.PI) / 180),
              (this.angularSpin = c(-0.2, 0.2)),
              (this.color = He[Math.floor(Math.random() * He.length)]),
              (this.rotateY = c(0, 1)),
              (this.rotationDirection = c(0, 1) ? o.Positive : o.Negative);
          }
          var x, U;
          return (
            (x = S),
            (U = [
              {
                key: "update",
                value: function () {
                  var F = this.getOptions(),
                    G = F.gravity,
                    B = F.wind,
                    V = F.friction,
                    ee = F.opacity,
                    re = F.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += G),
                    (this.vx += B),
                    (this.vx *= V),
                    (this.vy *= V),
                    this.rotateY >= 1 && this.rotationDirection === o.Positive
                      ? (this.rotationDirection = o.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === o.Negative &&
                        (this.rotationDirection = o.Positive);
                  var b = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += b),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = ee),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    re && typeof re == "function")
                  )
                    re.call(this, this.context);
                  else
                    switch (this.shape) {
                      case s.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case s.Square:
                        this.context.fillRect(
                          -this.w / 2,
                          -this.h / 2,
                          this.w,
                          this.h
                        );
                        break;
                      case s.Strip:
                        this.context.fillRect(
                          -this.w / 6,
                          -this.h / 2,
                          this.w / 3,
                          this.h
                        );
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && h(x.prototype, U),
            S
          );
        })();
        function w(S, x, U) {
          return (
            x in S
              ? Object.defineProperty(S, x, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (S[x] = U),
            S
          );
        }
        var g = function S(x, U) {
          var F = this;
          (function (B, V) {
            if (!(B instanceof V))
              throw new TypeError("Cannot call a class as a function");
          })(this, S),
            w(this, "canvas", void 0),
            w(this, "context", void 0),
            w(this, "getOptions", void 0),
            w(this, "x", 0),
            w(this, "y", 0),
            w(this, "w", 0),
            w(this, "h", 0),
            w(this, "lastNumberOfPieces", 0),
            w(this, "tweenInitTime", Date.now()),
            w(this, "particles", []),
            w(this, "particlesGenerated", 0),
            w(this, "removeParticleAt", function (B) {
              F.particles.splice(B, 1);
            }),
            w(this, "getParticle", function () {
              var B = c(F.x, F.w + F.x),
                V = c(F.y, F.h + F.y);
              return new _(F.context, F.getOptions, B, V);
            }),
            w(this, "animate", function () {
              var B = F.canvas,
                V = F.context,
                ee = F.particlesGenerated,
                re = F.lastNumberOfPieces,
                b = F.getOptions(),
                He = b.run,
                Me = b.recycle,
                Te = b.numberOfPieces,
                E = b.debug,
                N = b.tweenFunction,
                j = b.tweenDuration;
              if (!He) return !1;
              var H = F.particles.length,
                ue = Me ? H : ee,
                Ae = Date.now();
              if (ue < Te) {
                re !== Te &&
                  ((F.tweenInitTime = Ae), (F.lastNumberOfPieces = Te));
                for (
                  var lt = F.tweenInitTime,
                    Ie = N(Ae - lt > j ? j : Math.max(0, Ae - lt), ue, Te, j),
                    dt = Math.round(Ie - ue),
                    $n = 0;
                  $n < dt;
                  $n++
                )
                  F.particles.push(F.getParticle());
                F.particlesGenerated += dt;
              }
              return (
                E &&
                  ((V.font = "12px sans-serif"),
                  (V.fillStyle = "#333"),
                  (V.textAlign = "right"),
                  V.fillText(
                    "Particles: ".concat(H),
                    B.width - 10,
                    B.height - 20
                  )),
                F.particles.forEach(function (Wn, as) {
                  Wn.update(),
                    (Wn.y > B.height ||
                      Wn.y < -100 ||
                      Wn.x > B.width + 100 ||
                      Wn.x < -100) &&
                      (Me && ue <= Te
                        ? (F.particles[as] = F.getParticle())
                        : F.removeParticleAt(as));
                }),
                H > 0 || ue < Te
              );
            }),
            (this.canvas = x);
          var G = this.canvas.getContext("2d");
          if (!G) throw new Error("Could not get canvas context");
          (this.context = G), (this.getOptions = U);
        };
        function v(S, x) {
          var U = Object.keys(S);
          if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(S);
            x &&
              (F = F.filter(function (G) {
                return Object.getOwnPropertyDescriptor(S, G).enumerable;
              })),
              U.push.apply(U, F);
          }
          return U;
        }
        function y(S) {
          for (var x = 1; x < arguments.length; x++) {
            var U = arguments[x] != null ? arguments[x] : {};
            x % 2
              ? v(Object(U), !0).forEach(function (F) {
                  C(S, F, U[F]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(U))
              : v(Object(U)).forEach(function (F) {
                  Object.defineProperty(
                    S,
                    F,
                    Object.getOwnPropertyDescriptor(U, F)
                  );
                });
          }
          return S;
        }
        function P(S, x) {
          for (var U = 0; U < x.length; U++) {
            var F = x[U];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(S, F.key, F);
          }
        }
        function C(S, x, U) {
          return (
            x in S
              ? Object.defineProperty(S, x, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (S[x] = U),
            S
          );
        }
        var R = {
            width: typeof window < "u" ? window.innerWidth : 300,
            height: typeof window < "u" ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548",
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: u.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          M = (function () {
            function S(F, G) {
              var B = this;
              (function (ee, re) {
                if (!(ee instanceof re))
                  throw new TypeError("Cannot call a class as a function");
              })(this, S),
                C(this, "canvas", void 0),
                C(this, "context", void 0),
                C(this, "_options", void 0),
                C(this, "generator", void 0),
                C(this, "rafId", void 0),
                C(this, "setOptionsWithDefaults", function (ee) {
                  var re = {
                    confettiSource: { x: 0, y: 0, w: B.canvas.width, h: 0 },
                  };
                  (B._options = y(y(y({}, re), R), ee)),
                    Object.assign(B, ee.confettiSource);
                }),
                C(this, "update", function () {
                  var ee = B.options,
                    re = ee.run,
                    b = ee.onConfettiComplete,
                    He = B.canvas,
                    Me = B.context;
                  re &&
                    ((Me.fillStyle = "white"),
                    Me.clearRect(0, 0, He.width, He.height)),
                    B.generator.animate()
                      ? (B.rafId = requestAnimationFrame(B.update))
                      : (b &&
                          typeof b == "function" &&
                          B.generator.particlesGenerated > 0 &&
                          b.call(B, B),
                        (B._options.run = !1));
                }),
                C(this, "reset", function () {
                  B.generator &&
                    B.generator.particlesGenerated > 0 &&
                    ((B.generator.particlesGenerated = 0),
                    (B.generator.particles = []),
                    (B.generator.lastNumberOfPieces = 0));
                }),
                C(this, "stop", function () {
                  (B.options = { run: !1 }),
                    B.rafId &&
                      (cancelAnimationFrame(B.rafId), (B.rafId = void 0));
                }),
                (this.canvas = F);
              var V = this.canvas.getContext("2d");
              if (!V) throw new Error("Could not get canvas context");
              (this.context = V),
                (this.generator = new g(this.canvas, function () {
                  return B.options;
                })),
                (this.options = G),
                this.update();
            }
            var x, U;
            return (
              (x = S),
              (U = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (F) {
                    var G = this._options && this._options.run,
                      B = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(F),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource
                        ),
                        typeof F.recycle == "boolean" &&
                          F.recycle &&
                          B === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof F.run == "boolean" &&
                        F.run &&
                        G === !1 &&
                        this.update();
                  },
                },
              ]) && P(x.prototype, U),
              S
            );
          })();
        function A(S) {
          return (
            (function (x) {
              if (Array.isArray(x)) return te(x);
            })(S) ||
            (function (x) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(x))
                return Array.from(x);
            })(S) ||
            oe(S) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function k(S) {
          return (k =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (x) {
                  return typeof x;
                }
              : function (x) {
                  return x &&
                    typeof Symbol == "function" &&
                    x.constructor === Symbol &&
                    x !== Symbol.prototype
                    ? "symbol"
                    : typeof x;
                })(S);
        }
        function O() {
          return (O =
            Object.assign ||
            function (S) {
              for (var x = 1; x < arguments.length; x++) {
                var U = arguments[x];
                for (var F in U)
                  Object.prototype.hasOwnProperty.call(U, F) && (S[F] = U[F]);
              }
              return S;
            }).apply(this, arguments);
        }
        function I(S, x) {
          var U = Object.keys(S);
          if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(S);
            x &&
              (F = F.filter(function (G) {
                return Object.getOwnPropertyDescriptor(S, G).enumerable;
              })),
              U.push.apply(U, F);
          }
          return U;
        }
        function K(S) {
          for (var x = 1; x < arguments.length; x++) {
            var U = arguments[x] != null ? arguments[x] : {};
            x % 2
              ? I(Object(U), !0).forEach(function (F) {
                  we(S, F, U[F]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(U))
              : I(Object(U)).forEach(function (F) {
                  Object.defineProperty(
                    S,
                    F,
                    Object.getOwnPropertyDescriptor(U, F)
                  );
                });
          }
          return S;
        }
        function Y(S, x) {
          return (
            (function (U) {
              if (Array.isArray(U)) return U;
            })(S) ||
            (function (U, F) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(U)))) {
                var G = [],
                  B = !0,
                  V = !1,
                  ee = void 0;
                try {
                  for (
                    var re, b = U[Symbol.iterator]();
                    !(B = (re = b.next()).done) &&
                    (G.push(re.value), !F || G.length !== F);
                    B = !0
                  );
                } catch (He) {
                  (V = !0), (ee = He);
                } finally {
                  try {
                    B || b.return == null || b.return();
                  } finally {
                    if (V) throw ee;
                  }
                }
                return G;
              }
            })(S, x) ||
            oe(S, x) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function oe(S, x) {
          if (S) {
            if (typeof S == "string") return te(S, x);
            var U = Object.prototype.toString.call(S).slice(8, -1);
            return (
              U === "Object" && S.constructor && (U = S.constructor.name),
              U === "Map" || U === "Set"
                ? Array.from(S)
                : U === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)
                ? te(S, x)
                : void 0
            );
          }
        }
        function te(S, x) {
          (x == null || x > S.length) && (x = S.length);
          for (var U = 0, F = new Array(x); U < x; U++) F[U] = S[U];
          return F;
        }
        function se(S, x) {
          if (!(S instanceof x))
            throw new TypeError("Cannot call a class as a function");
        }
        function he(S, x) {
          for (var U = 0; U < x.length; U++) {
            var F = x[U];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(S, F.key, F);
          }
        }
        function D(S, x) {
          return (D =
            Object.setPrototypeOf ||
            function (U, F) {
              return (U.__proto__ = F), U;
            })(S, x);
        }
        function $(S) {
          var x = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })();
          return function () {
            var U,
              F = J(S);
            if (x) {
              var G = J(this).constructor;
              U = Reflect.construct(F, arguments, G);
            } else U = F.apply(this, arguments);
            return W(this, U);
          };
        }
        function W(S, x) {
          return !x || (k(x) !== "object" && typeof x != "function") ? Z(S) : x;
        }
        function Z(S) {
          if (S === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return S;
        }
        function J(S) {
          return (J = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (x) {
                return x.__proto__ || Object.getPrototypeOf(x);
              })(S);
        }
        function we(S, x, U) {
          return (
            x in S
              ? Object.defineProperty(S, x, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (S[x] = U),
            S
          );
        }
        var Ee = f.a.createRef(),
          yt = (function (S) {
            (function (B, V) {
              if (typeof V != "function" && V !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (B.prototype = Object.create(V && V.prototype, {
                constructor: { value: B, writable: !0, configurable: !0 },
              })),
                V && D(B, V);
            })(G, S);
            var x,
              U,
              F = $(G);
            function G(B) {
              var V;
              se(this, G);
              for (
                var ee = arguments.length,
                  re = new Array(ee > 1 ? ee - 1 : 0),
                  b = 1;
                b < ee;
                b++
              )
                re[b - 1] = arguments[b];
              return (
                we(
                  Z((V = F.call.apply(F, [this, B].concat(re)))),
                  "canvas",
                  f.a.createRef()
                ),
                we(Z(V), "confetti", void 0),
                (V.canvas = B.canvasRef || Ee),
                V
              );
            }
            return (
              (x = G),
              (U = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var B = Ve(this.props)[0];
                      this.confetti = new M(this.canvas.current, B);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var B = Ve(this.props)[0];
                    this.confetti && (this.confetti.options = B);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.confetti && this.confetti.stop(),
                      (this.confetti = void 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var B = Y(Ve(this.props), 2),
                      V = B[0],
                      ee = B[1],
                      re = K(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        ee.style
                      );
                    return f.a.createElement(
                      "canvas",
                      O(
                        { width: V.width, height: V.height, ref: this.canvas },
                        ee,
                        { style: re }
                      )
                    );
                  },
                },
              ]) && he(x.prototype, U),
              G
            );
          })(a.Component);
        function Ve(S) {
          var x = {},
            U = {},
            F = [].concat(A(Object.keys(R)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            G = ["canvasRef"];
          for (var B in S) {
            var V = S[B];
            F.includes(B)
              ? (x[B] = V)
              : G.includes(B)
              ? (G[B] = V)
              : (U[B] = V);
          }
          return [x, U, {}];
        }
        we(yt, "defaultProps", K({}, R)),
          we(yt, "displayName", "ReactConfetti");
        var _t = f.a.forwardRef(function (S, x) {
          return f.a.createElement(yt, O({ canvasRef: x }, S));
        });
        l.default = _t;
      },
    ]).default;
  });
})(kc);
const cm = _a(kc.exports);
function fm(e) {
  let t = 500,
    n = 0,
    r = 0,
    l = 0,
    i = "",
    [s, o] = ze.exports.useState(!1),
    [a, f] = ze.exports.useState(0),
    [m, u] = ze.exports.useState("Syncing the cube state with yours...🪄"),
    c = { front: 1, right: 4, upper: 2, down: 3, left: 5, back: 0 };
  return (
    ze.exports.useEffect(() => {
      console.log("Script Started");
      let h = document.querySelector("#pivot"),
        p = document.querySelector(".moves__num"),
        _ = document.querySelector(".step__count"),
        w = document.querySelector(".scramble__error"),
        g = document.querySelector(".retry__btn--scramble"),
        v = document.querySelector(".repeat__btn"),
        y = document.querySelector(".previous__btn"),
        P = document.querySelector(".next__move--btn"),
        C = document.querySelector(".replay__btn");
      var R = ["blue", "green", "white", "yellow", "red", "orange"],
        M = document.getElementsByClassName("piece");
      function A(E, N) {
        return (
          ([2, 4, 3, 5][N % 4 | 0] +
            (E % 2) * (((N | 0) % 4) * 2 + 3) +
            2 * ((E / 2) | 0)) %
          6
        );
      }
      function k(E) {
        return String.fromCharCode("X".charCodeAt(0) + E / 2);
      }
      function O() {
        function E(ue) {
          return (
            (N = N + (1 << ue)),
            M[H].children[ue]
              .appendChild(document.createElement("div"))
              .setAttribute("class", "sticker " + R[ue]),
            "translate" + k(ue) + "(" + ((ue % 2) * 4 - 2) + "em)"
          );
        }
        for (var N, j, H = 0; (N = 0), H < 26; H++)
          (j = A(H, H % 18)),
            (M[H].style.transform =
              "rotateX(0deg)" +
              E(H % 6) +
              (H > 5 ? E(j) + (H > 17 ? E(A(j, j + 2)) : "") : "")),
            M[H].setAttribute("id", "piece" + N);
      }
      function I(E, N, j) {
        return document.getElementById(
          "piece" + ((1 << E) + (1 << A(E, N)) + (1 << A(E, N + 1)) * j)
        );
      }
      function K(E, N) {
        for (var j = 0; j < 6 * N; j++)
          for (
            var H = I(E, j / 2, j % 2), ue = I(E, j / 2 + 1, j % 2), Ae = 0;
            Ae < 5;
            Ae++
          ) {
            var lt = H.children[Ae < 4 ? A(E, Ae) : E].firstChild,
              Ie = ue.children[Ae < 4 ? A(E, Ae + 1) : E].firstChild,
              dt = lt ? lt.className : "";
            dt && ((lt.className = Ie.className), (Ie.className = dt));
          }
      }
      function Y(E, N, j, H = !0) {
        var ue = 0.3 * ((E % 2) * 2 - 1) * (2 * N - 1),
          Ae = Array(9)
            .fill(M[E])
            .map(function (lt, Ie) {
              return Ie ? I(E, Ie / 2, Ie % 2) : lt;
            });
        H
          ? (function lt() {
              var Ie = Date.now() - j,
                dt = "rotate" + k(E) + "(" + ue * Ie * (Ie < 300) + "deg)";
              if (
                (Ae.forEach(function ($n) {
                  $n.style.transform = $n.style.transform.replace(
                    /rotate.\(\S+\)/,
                    dt
                  );
                }),
                Ie >= 300)
              )
                return K(E, 3 - 2 * N);
              requestAnimationFrame(lt);
            })()
          : (function () {
              var Ie = "rotate" + k(E) + "(" + 300;
              Ae.forEach(function (dt) {
                dt.style.transform = dt.style.transform.replace(
                  /rotate.\(\S+\)/,
                  Ie
                );
              }),
                K(E, 3 - 2 * N);
            })();
      }
      function oe(E, N) {
        Y(c.front, E, Date.now(), N);
      }
      function te(E, N) {
        Y(c.right, E, Date.now(), N);
      }
      function se(E, N) {
        Y(c.upper, E, Date.now(), N);
      }
      function he(E, N) {
        Y(c.down, E, Date.now(), N);
      }
      function D(E, N) {
        Y(c.left, E, Date.now(), N);
      }
      function $(E, N) {
        Y(c.back, E, Date.now(), N);
      }
      var W = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number);
      let Z = 0;
      function J(E, N = !0) {
        E ? (Z = Z + 90) : (Z = Z - 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg) rotate3d(1,0,0,${Z}deg)`);
        let j = c;
        E
          ? (c = {
              ...j,
              right: j.upper,
              upper: j.left,
              down: j.right,
              left: j.down,
            })
          : (c = {
              ...j,
              right: j.down,
              upper: j.right,
              down: j.left,
              left: j.upper,
            });
      }
      function we(E, N = !0) {
        E ? (W[1] = W[1] - 90) : (W[1] = W[1] + 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg)`);
        let j = c;
        E
          ? (c = {
              ...j,
              front: j.right,
              right: j.back,
              left: j.front,
              back: j.left,
            })
          : (c = {
              ...j,
              front: j.left,
              right: j.front,
              left: j.back,
              back: j.right,
            });
      }
      function Ee(E, N = !0) {
        E ? (W[2] = W[2] - 90) : (W[2] = W[2] + 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg)`);
        let j = c;
        E
          ? (c = {
              ...j,
              front: j.down,
              upper: j.front,
              down: j.back,
              back: j.upper,
            })
          : (c = {
              ...j,
              front: j.upper,
              upper: j.back,
              down: j.front,
              back: j.down,
            });
      }
      function yt(E, N) {
        N && n++,
          $(E, N),
          N
            ? setTimeout(() => {
                J(E), n--;
              }, t)
            : J(E, N);
      }
      function Ve(E, N) {
        N && n++,
          D(E, N),
          N
            ? setTimeout(() => {
                Ee(E), n--;
              }, t)
            : Ee(E, N);
      }
      function _t(E, N) {
        N && n++,
          he(E, N),
          N
            ? setTimeout(() => {
                we(E), n--;
              }, t)
            : we(E, N);
      }
      function S(E, N) {
        N && n++,
          se(E, N),
          N
            ? setTimeout(() => {
                we(!E), n--;
              }, t)
            : we(!E, N);
      }
      function x(E, N) {
        N && n++,
          te(E, N),
          N
            ? setTimeout(() => {
                Ee(!E), n--;
              }, t)
            : Ee(!E, N);
      }
      function U(E, N) {
        N && n++,
          oe(E, N),
          N
            ? setTimeout(() => {
                J(!E), n--;
              }, t)
            : J(!E, N);
      }
      function F(E, N) {
        N && (n += 2),
          te(E, N),
          N
            ? setTimeout(() => {
                D(!E, N),
                  n--,
                  setTimeout(() => {
                    Ee(!E), n--;
                  }, t);
              }, t)
            : (D(!E, N), Ee(!E, N));
      }
      function G(E, N) {
        N && (n += 2),
          se(E, N),
          N
            ? setTimeout(() => {
                he(!E, N),
                  n--,
                  setTimeout(() => {
                    we(!E), n--;
                  }, t);
              }, t)
            : (he(!E, N), we(!E, N));
      }
      function B(E, N) {
        N && (n += 2),
          oe(!E, N),
          N
            ? setTimeout(() => {
                $(E, N),
                  n--,
                  setTimeout(() => {
                    J(E), n--;
                  }, t);
              }, t)
            : ($(E, N), J(E, N));
      }
      function V(E, N) {
        let j = E[0],
          H = E.includes("2") ? !0 : !E.includes("prime"),
          ue = function () {
            switch (j) {
              case "F":
                return oe(H, N);
              case "R":
                return te(H, N);
              case "U":
                return se(H, N);
              case "D":
                return he(H, N);
              case "L":
                return D(H, N);
              case "B":
                return $(H, N);
              case "f":
                return yt(H, N);
              case "r":
                return Ve(H, N);
              case "u":
                return _t(H, N);
              case "d":
                return S(H, N);
              case "l":
                return x(H, N);
              case "b":
                return U(H, N);
              case "M":
                return F(H, N);
              case "E":
                return G(H, N);
              case "S":
                return B(H, N);
              default:
                console.log("Move Function Conversion Error");
            }
          };
        ue(),
          E.includes("2") &&
            (N
              ? (n++,
                setTimeout(() => {
                  ue(), n--;
                }, t))
              : ue());
      }
      O(),
        (window.onerror = function (E, N, j, H, ue) {
          if (
            ue.name === "RangeError" &&
            ue.message === "Maximum call stack size exceeded"
          )
            console.log("Solver Message: Maximum call stack size exceeded"),
              w.classList.add("active"),
              g.classList.add("active");
          else throw ue;
        });
      function ee() {
        p.classList.remove("active"),
          _.classList.remove("active"),
          y.setAttribute("disabled", ""),
          v.setAttribute("disabled", ""),
          P.setAttribute("disabled", "");
        let E = !1;
        setTimeout(() => {
          for (r = 0; r <= e.movesAlgo.reverseAlgo.length - 1; r++)
            V(e.movesAlgo.reverseAlgo[r], E);
          p.classList.add("active"),
            P.removeAttribute("disabled"),
            u("Orient your cube as shown here to solve.");
        }, 1e3);
      }
      ee();
      function re() {
        (r = 0),
          g.classList.remove("active"),
          w.classList.remove("active"),
          ee(),
          O();
      }
      document.ondragstart = function () {
        return !1;
      };
      function b(E = !1) {
        n++,
          p.classList.remove("active"),
          v.removeAttribute("disabled"),
          _.classList.add("active"),
          console.log("Clicked Next Button");
        let N = !0;
        setTimeout(() => {
          l < e.movesAlgo.forwardAlgo.length
            ? (E || f((j) => j + 1),
              V(e.movesAlgo.forwardAlgo[l], N),
              l == e.movesAlgo.forwardAlgo.length - 1 &&
                (P.setAttribute("disabled", ""),
                o(!0),
                C.classList.add("active"),
                setTimeout(() => {
                  h.classList.add("active"),
                    u("CONGRATULATIONS!!! Cube is solved🎉");
                }, 1500)),
              l++,
              l >= 2
                ? y.removeAttribute("disabled")
                : y.setAttribute("disabled", ""),
              n--)
            : console.log("Cube Already Solved...CONGRATULATIONS!!!");
        }, t * n);
      }
      function He() {
        let E = !1,
          N = !0,
          j = e.movesAlgo.reverseAlgo.length - l;
        V(e.movesAlgo.reverseAlgo[j], E), l--, b(N);
      }
      function Me() {
        let E = !1,
          N = !1;
        P.removeAttribute("disabled"),
          C.classList.remove("active"),
          h.classList.remove("active");
        let j = e.movesAlgo.reverseAlgo.length - l;
        console.log(l, j),
          V(e.movesAlgo.reverseAlgo[j], E),
          j++,
          V(e.movesAlgo.reverseAlgo[j], E),
          (l -= 2),
          o(!1),
          u("Orient your cube as shown here to solve."),
          f((H) => H - 2),
          b(N);
      }
      function Te(E) {
        let N = E.key;
        console.log(N),
          N == "ArrowLeft" && !y.hasAttribute("disabled")
            ? Me()
            : N == "ArrowDown" && !v.hasAttribute("disabled")
            ? He()
            : N == "ArrowRight" && !P.hasAttribute("disabled") && b(!1);
      }
      return (
        g.addEventListener("click", re),
        y.addEventListener("click", Me),
        P.addEventListener("click", (E) => b(!1)),
        v.addEventListener("click", He),
        C.addEventListener("click", (E) => e.handleReplay()),
        window.addEventListener("keydown", Te),
        () => {
          console.log("Solver Component Unmounted"),
            (l = 0),
            (r = 0),
            g.classList.remove("active"),
            w.classList.remove("active"),
            C.classList.remove("active"),
            h.classList.remove("active"),
            y.setAttribute("disabled", ""),
            v.setAttribute("disabled", ""),
            P.setAttribute("disabled", ""),
            g.removeEventListener("click", re),
            y.removeEventListener("click", Me),
            P.removeEventListener("click", (E) => b(!1)),
            v.removeEventListener("click", He),
            C.removeEventListener("click", (E) => e.handleReplay()),
            window.removeEventListener("keydown", Te);
        }
      );
    }, []),
    T("div", {
      className: `cube__container${i}`,
      children: [
        d("div", {
          className: "step__count flex__center--row",
          children: `Step: ${a}`,
        }),
        d("div", { className: "move__name", children: m }),
        d("div", {
          className: "moves__num",
          children: `${e.movesAlgo.forwardAlgo.length} moves needed`,
        }),
        d("div", {
          className: "scramble__error",
          children: "Memory consumption is high. Please try again!",
        }),
        d("button", { className: "retry__btn--scramble", children: "Retry" }),
        s && d(cm, {}),
        d("div", {
          className: "scene",
          id: "scene",
          children: d("div", {
            className: "pivot centered",
            id: "pivot",
            style: {
              transform: "rotateX(-35deg) rotateY(-135deg) rotateZ(0deg)",
            },
            children: T("div", {
              className: "cube",
              id: "cube",
              children: [
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
                T("div", {
                  className: "piece",
                  children: [
                    d("div", { className: "element left" }),
                    d("div", { className: "element right" }),
                    d("div", { className: "element top" }),
                    d("div", { className: "element bottom" }),
                    d("div", { className: "element back" }),
                    d("div", { className: "element front" }),
                  ],
                }),
              ],
            }),
          }),
        }),
        T("div", {
          id: "guide",
          children: [
            d("div", {
              className: "anchor",
              id: "anchor3",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-270deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor",
              id: "anchor2",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-180deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor",
              id: "anchor1",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(-90deg) translateY(66.67%)",
              },
            }),
            d("div", {
              className: "anchor",
              id: "anchor0",
              style: {
                transform:
                  "translateZ(3px) translateY(-33.33%) rotate(0deg) translateY(66.67%)",
              },
            }),
          ],
        }),
        d("button", {
          className: "previous__btn",
          disabled: !0,
          children: "Previous",
        }),
        d("button", {
          className: "repeat__btn",
          disabled: !0,
          children: "Repeat",
        }),
        d("button", {
          className: "next__move--btn",
          disabled: !0,
          children: "Next",
        }),
        d("button", { className: "replay__btn", children: "Replay" }),
      ],
    })
  );
}
function dm() {
  let e = [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    t = ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
    n = [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
    ],
    r = [
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    l = [
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
      "orange",
    ],
    i = [
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
      "blue",
    ],
    [s, o] = ze.exports.useState({}),
    [a, f] = ze.exports.useState({});
  function m() {
    o({ front: e, right: t, upper: n, down: r, left: l, back: i }),
      f({ forwardAlgo: [], reverseAlgo: [] });
  }
  ze.exports.useEffect(() => {
    m();
  }, []);
  let [u, c] = ze.exports.useState([!0, !1, !1, !1, !1]);
  function h() {
    console.log("started"), c([!1, !0, !1, !1, !1]);
  }
  function p() {
    console.log("Position Ran"), c([!1, !1, !0, !1, !1]);
  }
  function _() {
    console.log("Face Input Ran"), c([!1, !1, !1, !0, !1]);
  }
  function w(P) {
    console.log("Face Set Ran");
    let C = P.target.name,
      R = P.target.value,
      M = [];
    switch (C) {
      case "front":
        M = e;
        break;
      case "right":
        M = t;
        break;
      case "upper":
        M = n;
        break;
      case "down":
        M = r;
        break;
      case "left":
        M = l;
        break;
      case "back":
        M = i;
        break;
      default:
        console.log("Color Assignment Error");
    }
    (M = M.map((A, k) => {
      let O = A;
      if (k < R.length)
        switch (R[k]) {
          case "g":
            O = "green";
            break;
          case "r":
            O = "red";
            break;
          case "w":
            O = "white";
            break;
          case "y":
            O = "yellow";
            break;
          case "o":
            O = "orange";
            break;
          case "b":
            O = "blue";
            break;
          default:
            console.log("Invalid Color. Default color will be used.");
        }
      return k == 4 && (O = A), O;
    })),
      o((A) => ({ ...A, [C]: M }));
  }
  function g() {
    console.log("Solver Ran");
  }
  function v() {
    m(), c([!0, !1, !1, !1, !1]), console.log("App Restarted");
  }
  function y(P) {
    console.log("Algo Set Ran");
    let C = P.solveMoves,
      R = P.reverseMoves;
    f({ forwardAlgo: C, reverseAlgo: R });
  }
  return d("div", {
    className: "App",
    children: T("div", {
      className: "app__container",
      children: [
        u[0] && d(rm, { handleClick: h }),
        u[1] && d(um, { handleClick: p }),
        u[2] &&
          d(om, {
            handleClick: _,
            handleChange: w,
            colors: s,
            setAlgo: (P) => y(P),
            cubeColorState: s,
          }),
        u[3] && d(fm, { handleClick: g, movesAlgo: a, handleReplay: v }),
      ],
    }),
  });
}
_i.createRoot(document.getElementById("root")).render(d(dm, {}));
