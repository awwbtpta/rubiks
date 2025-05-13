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
var Da =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xo = { exports: {} },
  Kl = {},
  H = { exports: {} },
  Q = {};
var Tr = Symbol.for("react.element"),
  qc = Symbol.for("react.portal"),
  ef = Symbol.for("react.fragment"),
  tf = Symbol.for("react.strict_mode"),
  nf = Symbol.for("react.profiler"),
  rf = Symbol.for("react.provider"),
  lf = Symbol.for("react.context"),
  of = Symbol.for("react.forward_ref"),
  sf = Symbol.for("react.suspense"),
  af = Symbol.for("react.memo"),
  uf = Symbol.for("react.lazy"),
  Es = Symbol.iterator;
function cf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Aa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ia = Object.assign,
  Ba = {};
function Hn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || Aa);
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $a() {}
$a.prototype = Hn.prototype;
function Fo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ba),
    (this.updater = n || Aa);
}
var Mo = (Fo.prototype = new $a());
Mo.constructor = Fo;
Ia(Mo, Hn.prototype);
Mo.isPureReactComponent = !0;
var Ss = Array.isArray,
  za = Object.prototype.hasOwnProperty,
  ko = { current: null },
  ja = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wa(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      za.call(t, r) && !ja.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var a = Array(o), f = 0; f < o; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: ko.current,
  };
}
function ff(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Lo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function df(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rs = /\/+/g;
function oi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? df("" + e.key)
    : t.toString(36);
}
function il(e, t, n, r, l) {
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
          case Tr:
          case qc:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + oi(s, 0) : r),
      Ss(l)
        ? ((n = ""),
          e != null && (n = e.replace(Rs, "$&/") + "/"),
          il(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (Lo(l) &&
            (l = ff(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Rs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ss(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var a = r + oi(i, o);
      s += il(i, t, n, a, l);
    }
  else if (((a = cf(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + oi(i, o++)), (s += il(i, t, n, a, l));
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
function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    il(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function mf(e) {
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
var Te = { current: null },
  ol = { transition: null },
  pf = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ol,
    ReactCurrentOwner: ko,
  };
Q.Children = {
  map: jr,
  forEach: function (e, t, n) {
    jr(
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
      jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Lo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = Hn;
Q.Fragment = ef;
Q.Profiler = nf;
Q.PureComponent = Fo;
Q.StrictMode = tf;
Q.Suspense = sf;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pf;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ia({}, e.props),
    l = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ko.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      za.call(t, a) &&
        !ja.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var f = 0; f < a; f++) o[f] = arguments[f + 2];
    r.children = o;
  }
  return { $$typeof: Tr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: lf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rf, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Wa;
Q.createFactory = function (e) {
  var t = Wa.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: of, render: e };
};
Q.isValidElement = Lo;
Q.lazy = function (e) {
  return { $$typeof: uf, _payload: { _status: -1, _result: e }, _init: mf };
};
Q.memo = function (e, t) {
  return { $$typeof: af, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = ol.transition;
  ol.transition = {};
  try {
    e();
  } finally {
    ol.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Te.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
Q.useId = function () {
  return Te.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Te.current.useRef(e);
};
Q.useState = function (e) {
  return Te.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Te.current.useTransition();
};
Q.version = "18.2.0";
(function (e) {
  e.exports = Q;
})(H);
var hf = H.exports,
  vf = Symbol.for("react.element"),
  gf = Symbol.for("react.fragment"),
  yf = Object.prototype.hasOwnProperty,
  _f = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ka(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) yf.call(t, r) && !Pf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vf,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: _f.current,
  };
}
Kl.Fragment = gf;
Kl.jsx = Ka;
Kl.jsxs = Ka;
(function (e) {
  e.exports = Kl;
})(xo);
const d = xo.exports.jsx,
  T = xo.exports.jsxs;
var Li = {},
  Va = { exports: {} },
  Ge = {},
  Ha = { exports: {} },
  ba = {};
(function (e) {
  function t(D, j) {
    var W = D.length;
    D.push(j);
    e: for (; 0 < W; ) {
      var Z = (W - 1) >>> 1,
        q = D[Z];
      if (0 < l(q, j)) (D[Z] = j), (D[W] = q), (W = Z);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      W = D.pop();
    if (W !== j) {
      D[0] = W;
      e: for (var Z = 0, q = D.length, Ce = q >>> 1; Z < Ce; ) {
        var Re = 2 * (Z + 1) - 1,
          _t = D[Re],
          He = Re + 1,
          Pt = D[He];
        if (0 > l(_t, W))
          He < q && 0 > l(Pt, _t)
            ? ((D[Z] = Pt), (D[He] = W), (Z = He))
            : ((D[Z] = _t), (D[Re] = W), (Z = Re));
        else if (He < q && 0 > l(Pt, W)) (D[Z] = Pt), (D[He] = W), (Z = He);
        else break e;
      }
    }
    return j;
  }
  function l(D, j) {
    var W = D.sortIndex - j.sortIndex;
    return W !== 0 ? W : D.id - j.id;
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
    for (var j = n(f); j !== null; ) {
      if (j.callback === null) r(f);
      else if (j.startTime <= D)
        r(f), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(f);
    }
  }
  function P(D) {
    if (((_ = !1), y(D), !p))
      if (n(a) !== null) (p = !0), ae(C);
      else {
        var j = n(f);
        j !== null && ve(P, j.startTime - D);
      }
  }
  function C(D, j) {
    (p = !1), _ && ((_ = !1), g(A), (A = -1)), (h = !0);
    var W = c;
    try {
      for (
        y(j), u = n(a);
        u !== null && (!(u.expirationTime > j) || (D && !I()));

      ) {
        var Z = u.callback;
        if (typeof Z == "function") {
          (u.callback = null), (c = u.priorityLevel);
          var q = Z(u.expirationTime <= j);
          (j = e.unstable_now()),
            typeof q == "function" ? (u.callback = q) : u === n(a) && r(a),
            y(j);
        } else r(a);
        u = n(a);
      }
      if (u !== null) var Ce = !0;
      else {
        var Re = n(f);
        Re !== null && ve(P, Re.startTime - j), (Ce = !1);
      }
      return Ce;
    } finally {
      (u = null), (c = W), (h = !1);
    }
  }
  var S = !1,
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
      var j = !0;
      try {
        j = M(!0, D);
      } finally {
        j ? Y() : ((S = !1), (M = null));
      }
    } else S = !1;
  }
  var Y;
  if (typeof v == "function")
    Y = function () {
      v(K);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      ne = se.port2;
    (se.port1.onmessage = K),
      (Y = function () {
        ne.postMessage(null);
      });
  } else
    Y = function () {
      w(K, 0);
    };
  function ae(D) {
    (M = D), S || ((S = !0), Y());
  }
  function ve(D, j) {
    A = w(function () {
      D(e.unstable_now());
    }, j);
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
      p || h || ((p = !0), ae(C));
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
          var j = 3;
          break;
        default:
          j = c;
      }
      var W = c;
      c = j;
      try {
        return D();
      } finally {
        c = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, j) {
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
        return j();
      } finally {
        c = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, j, W) {
      var Z = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? Z + W : Z))
          : (W = Z),
        D)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = W + q),
        (D = {
          id: m++,
          callback: j,
          priorityLevel: D,
          startTime: W,
          expirationTime: q,
          sortIndex: -1,
        }),
        W > Z
          ? ((D.sortIndex = W),
            t(f, D),
            n(a) === null &&
              D === n(f) &&
              (_ ? (g(A), (A = -1)) : (_ = !0), ve(P, W - Z)))
          : ((D.sortIndex = q), t(a, D), p || h || ((p = !0), ae(C))),
        D
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (D) {
      var j = c;
      return function () {
        var W = c;
        c = j;
        try {
          return D.apply(this, arguments);
        } finally {
          c = W;
        }
      };
    });
})(ba);
(function (e) {
  e.exports = ba;
})(Ha);
var Qa = H.exports,
  Ze = Ha.exports;
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
var Ya = new Set(),
  yr = {};
function hn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) Ya.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ui = Object.prototype.hasOwnProperty,
  wf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Os = {},
  xs = {};
function Cf(e) {
  return Ui.call(xs, e)
    ? !0
    : Ui.call(Os, e)
    ? !1
    : wf.test(e)
    ? (xs[e] = !0)
    : ((Os[e] = !0), !1);
}
function Nf(e, t, n, r) {
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
function Ef(e, t, n, r) {
  if (t === null || typeof t > "u" || Nf(e, t, n, r)) return !0;
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
function Ae(e, t, n, r, l, i, s) {
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
    Se[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uo = /[\-:]([a-z])/g;
function Do(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Do);
    Se[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uo, Do);
    Se[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uo, Do);
  Se[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function To(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ef(t, n, l, r) && (n = null),
    r || l === null
      ? Cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Lt = Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wr = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  Ao = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  Xa = Symbol.for("react.provider"),
  Za = Symbol.for("react.context"),
  Io = Symbol.for("react.forward_ref"),
  Ti = Symbol.for("react.suspense"),
  Ai = Symbol.for("react.suspense_list"),
  Bo = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Ga = Symbol.for("react.offscreen"),
  Fs = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fs && e[Fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  si;
function lr(e) {
  if (si === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      si = (t && t[1]) || "";
    }
  return (
    `
` +
    si +
    e
  );
}
var ai = !1;
function ui(e, t) {
  if (!e || ai) return "";
  ai = !0;
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
    (ai = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ui(e.type, !1)), e;
    case 11:
      return (e = ui(e.type.render, !1)), e;
    case 1:
      return (e = ui(e.type, !0)), e;
    default:
      return "";
  }
}
function Ii(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case Pn:
      return "Portal";
    case Di:
      return "Profiler";
    case Ao:
      return "StrictMode";
    case Ti:
      return "Suspense";
    case Ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Za:
        return (e.displayName || "Context") + ".Consumer";
      case Xa:
        return (e._context.displayName || "Context") + ".Provider";
      case Io:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bo:
        return (
          (t = e.displayName || null), t !== null ? t : Ii(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Ii(e(t));
        } catch {}
    }
  return null;
}
function Rf(e) {
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
      return Ii(t);
    case 8:
      return t === Ao ? "StrictMode" : "Mode";
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
function Xt(e) {
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
function Ja(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Of(e) {
  var t = Ja(e) ? "checked" : "value",
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
function Kr(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ja(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bi(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ms(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function eu(e, t) {
  (t = t.checked), t != null && To(e, "checked", t, !1);
}
function $i(e, t) {
  eu(e, t);
  var n = Xt(t.value),
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
    ? zi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zi(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ks(e, t, n) {
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
function zi(e, t, n) {
  (t !== "number" || yl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function tu(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Us(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Vr,
  ru = (function (e) {
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
        Vr = Vr || document.createElement("div"),
          Vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ar = {
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
  xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function (e) {
  xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
  });
});
function lu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
    ? ("" + t).trim()
    : t + "px";
}
function iu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = lu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ff = me(
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
function Ki(e, t) {
  if (t) {
    if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Vi(e, t) {
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
var Hi = null;
function $o(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bi = null,
  Un = null,
  Dn = null;
function Ds(e) {
  if ((e = Br(e))) {
    if (typeof bi != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Yl(t)), bi(e.stateNode, e.type, t));
  }
}
function ou(e) {
  Un ? (Dn ? Dn.push(e) : (Dn = [e])) : (Un = e);
}
function su() {
  if (Un) {
    var e = Un,
      t = Dn;
    if (((Dn = Un = null), Ds(e), t)) for (e = 0; e < t.length; e++) Ds(t[e]);
  }
}
function au(e, t) {
  return e(t);
}
function uu() {}
var ci = !1;
function cu(e, t, n) {
  if (ci) return e(t, n);
  ci = !0;
  try {
    return au(e, t, n);
  } finally {
    (ci = !1), (Un !== null || Dn !== null) && (uu(), su());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yl(n);
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
var Qi = !1;
if (Ot)
  try {
    var Gn = {};
    Object.defineProperty(Gn, "passive", {
      get: function () {
        Qi = !0;
      },
    }),
      window.addEventListener("test", Gn, Gn),
      window.removeEventListener("test", Gn, Gn);
  } catch {
    Qi = !1;
  }
function Mf(e, t, n, r, l, i, s, o, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (m) {
    this.onError(m);
  }
}
var ur = !1,
  _l = null,
  Pl = !1,
  Yi = null,
  kf = {
    onError: function (e) {
      (ur = !0), (_l = e);
    },
  };
function Lf(e, t, n, r, l, i, s, o, a) {
  (ur = !1), (_l = null), Mf.apply(kf, arguments);
}
function Uf(e, t, n, r, l, i, s, o, a) {
  if ((Lf.apply(this, arguments), ur)) {
    if (ur) {
      var f = _l;
      (ur = !1), (_l = null);
    } else throw Error(L(198));
    Pl || ((Pl = !0), (Yi = f));
  }
}
function vn(e) {
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
function fu(e) {
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
function Ts(e) {
  if (vn(e) !== e) throw Error(L(188));
}
function Df(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(L(188));
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
        if (i === n) return Ts(l), e;
        if (i === r) return Ts(l), t;
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
function du(e) {
  return (e = Df(e)), e !== null ? mu(e) : null;
}
function mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pu = Ze.unstable_scheduleCallback,
  As = Ze.unstable_cancelCallback,
  Tf = Ze.unstable_shouldYield,
  Af = Ze.unstable_requestPaint,
  he = Ze.unstable_now,
  If = Ze.unstable_getCurrentPriorityLevel,
  zo = Ze.unstable_ImmediatePriority,
  hu = Ze.unstable_UserBlockingPriority,
  wl = Ze.unstable_NormalPriority,
  Bf = Ze.unstable_LowPriority,
  vu = Ze.unstable_IdlePriority,
  Vl = null,
  gt = null;
function $f(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(Vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : Wf,
  zf = Math.log,
  jf = Math.LN2;
function Wf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zf(e) / jf) | 0)) | 0;
}
var Hr = 64,
  br = 4194304;
function or(e) {
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
function Cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? (r = or(o)) : ((i &= s), i !== 0 && (r = or(i)));
  } else (s = n & ~l), s !== 0 ? (r = or(s)) : i !== 0 && (r = or(i));
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
      (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Kf(e, t) {
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
function Vf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - ct(i),
      o = 1 << s,
      a = l[s];
    a === -1
      ? ((o & n) === 0 || (o & r) !== 0) && (l[s] = Kf(o, t))
      : a <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gu() {
  var e = Hr;
  return (Hr <<= 1), (Hr & 4194240) === 0 && (Hr = 64), e;
}
function fi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ar(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function Hf(e, t) {
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
    var l = 31 - ct(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function jo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ee = 0;
function yu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var _u,
  Wo,
  Pu,
  wu,
  Cu,
  Zi = !1,
  Qr = [],
  jt = null,
  Wt = null,
  Kt = null,
  wr = new Map(),
  Cr = new Map(),
  At = [],
  bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Is(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cr.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Br(t)), t !== null && Wo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (jt = Jn(jt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Wt = Jn(Wt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Kt = Jn(Kt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return wr.set(i, Jn(wr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Cr.set(i, Jn(Cr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Nu(e) {
  var t = rn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fu(n)), t !== null)) {
          (e.blockedOn = t),
            Cu(e.priority, function () {
              Pu(n);
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
function sl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hi = r), n.target.dispatchEvent(r), (Hi = null);
    } else return (t = Br(n)), t !== null && Wo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bs(e, t, n) {
  sl(e) && n.delete(t);
}
function Yf() {
  (Zi = !1),
    jt !== null && sl(jt) && (jt = null),
    Wt !== null && sl(Wt) && (Wt = null),
    Kt !== null && sl(Kt) && (Kt = null),
    wr.forEach(Bs),
    Cr.forEach(Bs);
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zi ||
      ((Zi = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Yf)));
}
function Nr(e) {
  function t(l) {
    return qn(l, e);
  }
  if (0 < Qr.length) {
    qn(Qr[0], e);
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && qn(jt, e),
      Wt !== null && qn(Wt, e),
      Kt !== null && qn(Kt, e),
      wr.forEach(t),
      Cr.forEach(t),
      n = 0;
    n < At.length;
    n++
  )
    (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
    Nu(n), n.blockedOn === null && At.shift();
}
var Tn = Lt.ReactCurrentBatchConfig,
  Nl = !0;
function Xf(e, t, n, r) {
  var l = ee,
    i = Tn.transition;
  Tn.transition = null;
  try {
    (ee = 1), Ko(e, t, n, r);
  } finally {
    (ee = l), (Tn.transition = i);
  }
}
function Zf(e, t, n, r) {
  var l = ee,
    i = Tn.transition;
  Tn.transition = null;
  try {
    (ee = 4), Ko(e, t, n, r);
  } finally {
    (ee = l), (Tn.transition = i);
  }
}
function Ko(e, t, n, r) {
  if (Nl) {
    var l = Gi(e, t, n, r);
    if (l === null) wi(e, t, r, El, n), Is(e, r);
    else if (Qf(l, e, t, n, r)) r.stopPropagation();
    else if ((Is(e, r), t & 4 && -1 < bf.indexOf(e))) {
      for (; l !== null; ) {
        var i = Br(l);
        if (
          (i !== null && _u(i),
          (i = Gi(e, t, n, r)),
          i === null && wi(e, t, r, El, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else wi(e, t, r, null, n);
  }
}
var El = null;
function Gi(e, t, n, r) {
  if (((El = null), (e = $o(r)), (e = rn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (El = e), null;
}
function Eu(e) {
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
      switch (If()) {
        case zo:
          return 1;
        case hu:
          return 4;
        case wl:
        case Bf:
          return 16;
        case vu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Vo = null,
  al = null;
function Su() {
  if (al) return al;
  var e,
    t = Vo,
    n = t.length,
    r,
    l = "value" in $t ? $t.value : $t.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
  return (al = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yr() {
  return !0;
}
function $s() {
  return !1;
}
function Je(e) {
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
        ? Yr
        : $s),
      (this.isPropagationStopped = $s),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yr));
      },
      persist: function () {},
      isPersistent: Yr,
    }),
    t
  );
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ho = Je(bn),
  Ir = me({}, bn, { view: 0, detail: 0 }),
  Gf = Je(Ir),
  di,
  mi,
  er,
  Hl = me({}, Ir, {
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
    getModifierState: bo,
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
        : (e !== er &&
            (er && e.type === "mousemove"
              ? ((di = e.screenX - er.screenX), (mi = e.screenY - er.screenY))
              : (mi = di = 0),
            (er = e)),
          di);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : mi;
    },
  }),
  zs = Je(Hl),
  Jf = me({}, Hl, { dataTransfer: 0 }),
  qf = Je(Jf),
  ed = me({}, Ir, { relatedTarget: 0 }),
  pi = Je(ed),
  td = me({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nd = Je(td),
  rd = me({}, bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ld = Je(rd),
  id = me({}, bn, { data: 0 }),
  js = Je(id),
  od = {
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
  sd = {
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
  ad = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ud(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ad[e]) ? !!t[e] : !1;
}
function bo() {
  return ud;
}
var cd = me({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sd[e.keyCode] || "Unidentified"
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
    getModifierState: bo,
    charCode: function (e) {
      return e.type === "keypress" ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ul(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fd = Je(cd),
  dd = me({}, Hl, {
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
  Ws = Je(dd),
  md = me({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bo,
  }),
  pd = Je(md),
  hd = me({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vd = Je(hd),
  gd = me({}, Hl, {
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
  yd = Je(gd),
  _d = [9, 13, 27, 32],
  Qo = Ot && "CompositionEvent" in window,
  cr = null;
Ot && "documentMode" in document && (cr = document.documentMode);
var Pd = Ot && "TextEvent" in window && !cr,
  Ru = Ot && (!Qo || (cr && 8 < cr && 11 >= cr)),
  Ks = String.fromCharCode(32),
  Vs = !1;
function Ou(e, t) {
  switch (e) {
    case "keyup":
      return _d.indexOf(t.keyCode) !== -1;
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
function xu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function wd(e, t) {
  switch (e) {
    case "compositionend":
      return xu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vs = !0), Ks);
    case "textInput":
      return (e = t.data), e === Ks && Vs ? null : e;
    default:
      return null;
  }
}
function Cd(e, t) {
  if (Cn)
    return e === "compositionend" || (!Qo && Ou(e, t))
      ? ((e = Su()), (al = Vo = $t = null), (Cn = !1), e)
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
      return Ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nd = {
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
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nd[e.type] : t === "textarea";
}
function Fu(e, t, n, r) {
  ou(r),
    (t = Sl(t, "onChange")),
    0 < t.length &&
      ((n = new Ho("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fr = null,
  Er = null;
function Ed(e) {
  zu(e, 0);
}
function bl(e) {
  var t = Sn(e);
  if (qa(t)) return e;
}
function Sd(e, t) {
  if (e === "change") return t;
}
var Mu = !1;
if (Ot) {
  var hi;
  if (Ot) {
    var vi = "oninput" in document;
    if (!vi) {
      var bs = document.createElement("div");
      bs.setAttribute("oninput", "return;"),
        (vi = typeof bs.oninput == "function");
    }
    hi = vi;
  } else hi = !1;
  Mu = hi && (!document.documentMode || 9 < document.documentMode);
}
function Qs() {
  fr && (fr.detachEvent("onpropertychange", ku), (Er = fr = null));
}
function ku(e) {
  if (e.propertyName === "value" && bl(Er)) {
    var t = [];
    Fu(t, Er, e, $o(e)), cu(Ed, t);
  }
}
function Rd(e, t, n) {
  e === "focusin"
    ? (Qs(), (fr = t), (Er = n), fr.attachEvent("onpropertychange", ku))
    : e === "focusout" && Qs();
}
function Od(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bl(Er);
}
function xd(e, t) {
  if (e === "click") return bl(t);
}
function Fd(e, t) {
  if (e === "input" || e === "change") return bl(t);
}
function Md(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : Md;
function Sr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ui.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ys(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xs(e, t) {
  var n = Ys(e);
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
    n = Ys(n);
  }
}
function Lu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Uu() {
  for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yl(e.document);
  }
  return t;
}
function Yo(e) {
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
function kd(e) {
  var t = Uu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Yo(n)) {
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
          (l = Xs(n, i));
        var s = Xs(n, r);
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
var Ld = Ot && "documentMode" in document && 11 >= document.documentMode,
  Nn = null,
  Ji = null,
  dr = null,
  qi = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qi ||
    Nn == null ||
    Nn !== yl(r) ||
    ((r = Nn),
    "selectionStart" in r && Yo(r)
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
    (dr && Sr(dr, r)) ||
      ((dr = r),
      (r = Sl(Ji, "onSelect")),
      0 < r.length &&
        ((t = new Ho("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function Xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionend: Xr("Transition", "TransitionEnd"),
  },
  gi = {},
  Du = {};
Ot &&
  ((Du = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function Ql(e) {
  if (gi[e]) return gi[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Du) return (gi[e] = t[n]);
  return e;
}
var Tu = Ql("animationend"),
  Au = Ql("animationiteration"),
  Iu = Ql("animationstart"),
  Bu = Ql("transitionend"),
  $u = new Map(),
  Gs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  $u.set(e, t), hn(t, [e]);
}
for (var yi = 0; yi < Gs.length; yi++) {
  var _i = Gs[yi],
    Ud = _i.toLowerCase(),
    Dd = _i[0].toUpperCase() + _i.slice(1);
  Gt(Ud, "on" + Dd);
}
Gt(Tu, "onAnimationEnd");
Gt(Au, "onAnimationIteration");
Gt(Iu, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Bu, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Td = new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));
function Js(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Uf(r, t, void 0, e), (e.currentTarget = null);
}
function zu(e, t) {
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
          Js(l, o, f), (i = a);
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
          Js(l, o, f), (i = a);
        }
    }
  }
  if (Pl) throw ((e = Yi), (Pl = !1), (Yi = null), e);
}
function ie(e, t) {
  var n = t[lo];
  n === void 0 && (n = t[lo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function Pi(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[Zr]) {
    (e[Zr] = !0),
      Ya.forEach(function (n) {
        n !== "selectionchange" && (Td.has(n) || Pi(n, !1, e), Pi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || ((t[Zr] = !0), Pi("selectionchange", !1, t));
  }
}
function ju(e, t, n, r) {
  switch (Eu(t)) {
    case 1:
      var l = Xf;
      break;
    case 4:
      l = Zf;
      break;
    default:
      l = Ko;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Qi ||
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
function wi(e, t, n, r, l) {
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
          if (((s = rn(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  cu(function () {
    var f = i,
      m = $o(n),
      u = [];
    e: {
      var c = $u.get(e);
      if (c !== void 0) {
        var h = Ho,
          p = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = fd;
            break;
          case "focusin":
            (p = "focus"), (h = pi);
            break;
          case "focusout":
            (p = "blur"), (h = pi);
            break;
          case "beforeblur":
          case "afterblur":
            h = pi;
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
            h = zs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = pd;
            break;
          case Tu:
          case Au:
          case Iu:
            h = nd;
            break;
          case Bu:
            h = vd;
            break;
          case "scroll":
            h = Gf;
            break;
          case "wheel":
            h = yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ws;
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
              g !== null && ((P = Pr(v, g)), P != null && _.push(Or(v, P, y)))),
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
            n !== Hi &&
            (p = n.relatedTarget || n.fromElement) &&
            (rn(p) || p[xt]))
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
              (p = p ? rn(p) : null),
              p !== null &&
                ((w = vn(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((h = null), (p = f)),
          h !== p)
        ) {
          if (
            ((_ = zs),
            (P = "onMouseLeave"),
            (g = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Ws),
              (P = "onPointerLeave"),
              (g = "onPointerEnter"),
              (v = "pointer")),
            (w = h == null ? c : Sn(h)),
            (y = p == null ? c : Sn(p)),
            (c = new _(P, v + "leave", h, n, m)),
            (c.target = w),
            (c.relatedTarget = y),
            (P = null),
            rn(m) === f &&
              ((_ = new _(g, v + "enter", p, n, m)),
              (_.target = y),
              (_.relatedTarget = w),
              (P = _)),
            (w = P),
            h && p)
          )
            t: {
              for (_ = h, g = p, v = 0, y = _; y; y = yn(y)) v++;
              for (y = 0, P = g; P; P = yn(P)) y++;
              for (; 0 < v - y; ) (_ = yn(_)), v--;
              for (; 0 < y - v; ) (g = yn(g)), y--;
              for (; v--; ) {
                if (_ === g || (g !== null && _ === g.alternate)) break t;
                (_ = yn(_)), (g = yn(g));
              }
              _ = null;
            }
          else _ = null;
          h !== null && qs(u, c, h, _, !1),
            p !== null && w !== null && qs(u, w, p, _, !0);
        }
      }
      e: {
        if (
          ((c = f ? Sn(f) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === "select" || (h === "input" && c.type === "file"))
        )
          var C = Sd;
        else if (Hs(c))
          if (Mu) C = Fd;
          else {
            C = Od;
            var S = Rd;
          }
        else
          (h = c.nodeName) &&
            h.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (C = xd);
        if (C && (C = C(e, f))) {
          Fu(u, C, n, m);
          break e;
        }
        S && S(e, c, f),
          e === "focusout" &&
            (S = c._wrapperState) &&
            S.controlled &&
            c.type === "number" &&
            zi(c, "number", c.value);
      }
      switch (((S = f ? Sn(f) : window), e)) {
        case "focusin":
          (Hs(S) || S.contentEditable === "true") &&
            ((Nn = S), (Ji = f), (dr = null));
          break;
        case "focusout":
          dr = Ji = Nn = null;
          break;
        case "mousedown":
          qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qi = !1), Zs(u, n, m);
          break;
        case "selectionchange":
          if (Ld) break;
        case "keydown":
        case "keyup":
          Zs(u, n, m);
      }
      var M;
      if (Qo)
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
        Cn
          ? Ou(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (Ru &&
          n.locale !== "ko" &&
          (Cn || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Cn && (M = Su())
            : (($t = m),
              (Vo = "value" in $t ? $t.value : $t.textContent),
              (Cn = !0))),
        (S = Sl(f, A)),
        0 < S.length &&
          ((A = new js(A, e, null, n, m)),
          u.push({ event: A, listeners: S }),
          M ? (A.data = M) : ((M = xu(n)), M !== null && (A.data = M)))),
        (M = Pd ? wd(e, n) : Cd(e, n)) &&
          ((f = Sl(f, "onBeforeInput")),
          0 < f.length &&
            ((m = new js("onBeforeInput", "beforeinput", null, n, m)),
            u.push({ event: m, listeners: f }),
            (m.data = M)));
    }
    zu(u, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Sl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Pr(e, n)),
      i != null && r.unshift(Or(e, i, l)),
      (i = Pr(e, t)),
      i != null && r.push(Or(e, i, l))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qs(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      f = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      f !== null &&
      ((o = f),
      l
        ? ((a = Pr(n, i)), a != null && s.unshift(Or(n, a, o)))
        : l || ((a = Pr(n, i)), a != null && s.push(Or(n, a, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ad = /\r\n?/g,
  Id = /\u0000|\uFFFD/g;
function ea(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ad,
      `
`
    )
    .replace(Id, "");
}
function Gr(e, t, n) {
  if (((t = ea(t)), ea(e) !== t && n)) throw Error(L(425));
}
function Rl() {}
var eo = null,
  to = null;
function no(e, t) {
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
var ro = typeof setTimeout == "function" ? setTimeout : void 0,
  Bd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ta = typeof Promise == "function" ? Promise : void 0,
  $d =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ta < "u"
      ? function (e) {
          return ta.resolve(null).then(e).catch(zd);
        }
      : ro;
function zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ci(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Nr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Nr(t);
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function na(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qn = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + Qn,
  xr = "__reactProps$" + Qn,
  xt = "__reactContainer$" + Qn,
  lo = "__reactEvents$" + Qn,
  jd = "__reactListeners$" + Qn,
  Wd = "__reactHandles$" + Qn;
function rn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = na(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = na(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Br(e) {
  return (
    (e = e[vt] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Yl(e) {
  return e[xr] || null;
}
var io = [],
  Rn = -1;
function Jt(e) {
  return { current: e };
}
function oe(e) {
  0 > Rn || ((e.current = io[Rn]), (io[Rn] = null), Rn--);
}
function re(e, t) {
  Rn++, (io[Rn] = e.current), (e.current = t);
}
var Zt = {},
  Me = Jt(Zt),
  We = Jt(!1),
  cn = Zt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
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
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Ol() {
  oe(We), oe(Me);
}
function ra(e, t, n) {
  if (Me.current !== Zt) throw Error(L(168));
  re(Me, t), re(We, n);
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, Rf(e) || "Unknown", l));
  return me({}, n, r);
}
function xl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (cn = Me.current),
    re(Me, e),
    re(We, We.current),
    !0
  );
}
function la(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Wu(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(We),
      oe(Me),
      re(Me, e))
    : oe(We),
    re(We, n);
}
var Nt = null,
  Xl = !1,
  Ni = !1;
function Ku(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function Kd(e) {
  (Xl = !0), Ku(e);
}
function qt() {
  if (!Ni && Nt !== null) {
    Ni = !0;
    var e = 0,
      t = ee;
    try {
      var n = Nt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Xl = !1);
    } catch (l) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), pu(zo, qt), l);
    } finally {
      (ee = t), (Ni = !1);
    }
  }
  return null;
}
var On = [],
  xn = 0,
  Fl = null,
  Ml = 0,
  qe = [],
  et = 0,
  fn = null,
  Et = 1,
  St = "";
function tn(e, t) {
  (On[xn++] = Ml), (On[xn++] = Fl), (Fl = e), (Ml = t);
}
function Vu(e, t, n) {
  (qe[et++] = Et), (qe[et++] = St), (qe[et++] = fn), (fn = e);
  var r = Et;
  e = St;
  var l = 32 - ct(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ct(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (Et = (1 << (32 - ct(t) + l)) | (n << l) | r),
      (St = i + e);
  } else (Et = (1 << i) | (n << l) | r), (St = e);
}
function Xo(e) {
  e.return !== null && (tn(e, 1), Vu(e, 1, 0));
}
function Zo(e) {
  for (; e === Fl; )
    (Fl = On[--xn]), (On[xn] = null), (Ml = On[--xn]), (On[xn] = null);
  for (; e === fn; )
    (fn = qe[--et]),
      (qe[et] = null),
      (St = qe[--et]),
      (qe[et] = null),
      (Et = qe[--et]),
      (qe[et] = null);
}
var Xe = null,
  Ye = null,
  ue = !1,
  ut = null;
function Hu(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ia(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = Vt(t.firstChild)), !0)
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
          ? ((n = fn !== null ? { id: Et, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
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
function oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function so(e) {
  if (ue) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!ia(e, t)) {
        if (oo(e)) throw Error(L(418));
        t = Vt(n.nextSibling);
        var r = Xe;
        t && ia(e, t)
          ? Hu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Xe = e));
      }
    } else {
      if (oo(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (Xe = e);
    }
  }
}
function oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Jr(e) {
  if (e !== Xe) return !1;
  if (!ue) return oa(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !no(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (oo(e)) throw (bu(), Error(L(418)));
    for (; t; ) Hu(e, t), (t = Vt(t.nextSibling));
  }
  if ((oa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function bu() {
  for (var e = Ye; e; ) e = Vt(e.nextSibling);
}
function zn() {
  (Ye = Xe = null), (ue = !1);
}
function Go(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var Vd = Lt.ReactCurrentBatchConfig;
function st(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var kl = Jt(null),
  Ll = null,
  Fn = null,
  Jo = null;
function qo() {
  Jo = Fn = Ll = null;
}
function es(e) {
  var t = kl.current;
  oe(kl), (e._currentValue = t);
}
function ao(e, t, n) {
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
function An(e, t) {
  (Ll = e),
    (Jo = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (je = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Jo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (Ll === null) throw Error(L(308));
      (Fn = e), (Ll.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var ln = null;
function ts(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Qu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ts(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ft(e, r)
  );
}
function Ft(e, t) {
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
var Tt = !1;
function ns(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Yu(e, t) {
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
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (X & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ts(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jo(e, n);
  }
}
function sa(e, t) {
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
function Ul(e, t, n, r) {
  var l = e.updateQueue;
  Tt = !1;
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
              u = me({}, u, c);
              break e;
            case 2:
              Tt = !0;
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
    (mn |= s), (e.lanes = s), (e.memoizedState = u);
  }
}
function aa(e, t, n) {
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
var Xu = new Qa.Component().refs;
function uo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Qt(e),
      i = Rt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, l)),
      t !== null && (ft(t, e, l, r), cl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Qt(e),
      i = Rt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, l)),
      t !== null && (ft(t, e, l, r), cl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = Qt(e),
      l = Rt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ht(e, l, r)),
      t !== null && (ft(t, e, r, n), cl(t, e, r));
  },
};
function ua(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Sr(n, r) || !Sr(l, i)
      : !0
  );
}
function Zu(e, t, n) {
  var r = !1,
    l = Zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = rt(i))
      : ((l = Ke(t) ? cn : Me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $n(e, l) : Zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ca(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function co(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Xu), ns(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = rt(i))
    : ((i = Ke(t) ? cn : Me.current), (l.context = $n(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (uo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Zl.enqueueReplaceState(l, l.state, null),
      Ul(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t, n) {
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
            o === Xu && (o = l.refs = {}),
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
function qr(e, t) {
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
function fa(e) {
  var t = e._init;
  return t(e._payload);
}
function Gu(e) {
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
    return (g = Yt(g, v)), (g.index = 0), (g.sibling = null), g;
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
      ? ((v = Mi(y, g.mode, P)), (v.return = g), v)
      : ((v = l(v, y)), (v.return = g), v);
  }
  function a(g, v, y, P) {
    var C = y.type;
    return C === wn
      ? m(g, v, y.props.children, P, y.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dt &&
            fa(C) === v.type))
      ? ((P = l(v, y.props)), (P.ref = tr(g, v, y)), (P.return = g), P)
      : ((P = vl(y.type, y.key, y.props, null, g.mode, P)),
        (P.ref = tr(g, v, y)),
        (P.return = g),
        P);
  }
  function f(g, v, y, P) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== y.containerInfo ||
      v.stateNode.implementation !== y.implementation
      ? ((v = ki(y, g.mode, P)), (v.return = g), v)
      : ((v = l(v, y.children || [])), (v.return = g), v);
  }
  function m(g, v, y, P, C) {
    return v === null || v.tag !== 7
      ? ((v = un(y, g.mode, P, C)), (v.return = g), v)
      : ((v = l(v, y)), (v.return = g), v);
  }
  function u(g, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Mi("" + v, g.mode, y)), (v.return = g), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Wr:
          return (
            (y = vl(v.type, v.key, v.props, null, g.mode, y)),
            (y.ref = tr(g, null, v)),
            (y.return = g),
            y
          );
        case Pn:
          return (v = ki(v, g.mode, y)), (v.return = g), v;
        case Dt:
          var P = v._init;
          return u(g, P(v._payload), y);
      }
      if (ir(v) || Zn(v))
        return (v = un(v, g.mode, y, null)), (v.return = g), v;
      qr(g, v);
    }
    return null;
  }
  function c(g, v, y, P) {
    var C = v !== null ? v.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : o(g, v, "" + y, P);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wr:
          return y.key === C ? a(g, v, y, P) : null;
        case Pn:
          return y.key === C ? f(g, v, y, P) : null;
        case Dt:
          return (C = y._init), c(g, v, C(y._payload), P);
      }
      if (ir(y) || Zn(y)) return C !== null ? null : m(g, v, y, P, null);
      qr(g, y);
    }
    return null;
  }
  function h(g, v, y, P, C) {
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return (g = g.get(y) || null), o(v, g, "" + P, C);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case Wr:
          return (g = g.get(P.key === null ? y : P.key) || null), a(v, g, P, C);
        case Pn:
          return (g = g.get(P.key === null ? y : P.key) || null), f(v, g, P, C);
        case Dt:
          var S = P._init;
          return h(g, v, y, S(P._payload), C);
      }
      if (ir(P) || Zn(P)) return (g = g.get(y) || null), m(v, g, P, C, null);
      qr(v, P);
    }
    return null;
  }
  function p(g, v, y, P) {
    for (
      var C = null, S = null, M = v, A = (v = 0), k = null;
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
        S === null ? (C = O) : (S.sibling = O),
        (S = O),
        (M = k);
    }
    if (A === y.length) return n(g, M), ue && tn(g, A), C;
    if (M === null) {
      for (; A < y.length; A++)
        (M = u(g, y[A], P)),
          M !== null &&
            ((v = i(M, v, A)), S === null ? (C = M) : (S.sibling = M), (S = M));
      return ue && tn(g, A), C;
    }
    for (M = r(g, M); A < y.length; A++)
      (k = h(M, g, A, y[A], P)),
        k !== null &&
          (e && k.alternate !== null && M.delete(k.key === null ? A : k.key),
          (v = i(k, v, A)),
          S === null ? (C = k) : (S.sibling = k),
          (S = k));
    return (
      e &&
        M.forEach(function (I) {
          return t(g, I);
        }),
      ue && tn(g, A),
      C
    );
  }
  function _(g, v, y, P) {
    var C = Zn(y);
    if (typeof C != "function") throw Error(L(150));
    if (((y = C.call(y)), y == null)) throw Error(L(151));
    for (
      var S = (C = null), M = v, A = (v = 0), k = null, O = y.next();
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
        S === null ? (C = I) : (S.sibling = I),
        (S = I),
        (M = k);
    }
    if (O.done) return n(g, M), ue && tn(g, A), C;
    if (M === null) {
      for (; !O.done; A++, O = y.next())
        (O = u(g, O.value, P)),
          O !== null &&
            ((v = i(O, v, A)), S === null ? (C = O) : (S.sibling = O), (S = O));
      return ue && tn(g, A), C;
    }
    for (M = r(g, M); !O.done; A++, O = y.next())
      (O = h(M, g, A, O.value, P)),
        O !== null &&
          (e && O.alternate !== null && M.delete(O.key === null ? A : O.key),
          (v = i(O, v, A)),
          S === null ? (C = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        M.forEach(function (K) {
          return t(g, K);
        }),
      ue && tn(g, A),
      C
    );
  }
  function w(g, v, y, P) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === wn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Wr:
          e: {
            for (var C = y.key, S = v; S !== null; ) {
              if (S.key === C) {
                if (((C = y.type), C === wn)) {
                  if (S.tag === 7) {
                    n(g, S.sibling),
                      (v = l(S, y.props.children)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dt &&
                    fa(C) === S.type)
                ) {
                  n(g, S.sibling),
                    (v = l(S, y.props)),
                    (v.ref = tr(g, S, y)),
                    (v.return = g),
                    (g = v);
                  break e;
                }
                n(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            y.type === wn
              ? ((v = un(y.props.children, g.mode, P, y.key)),
                (v.return = g),
                (g = v))
              : ((P = vl(y.type, y.key, y.props, null, g.mode, P)),
                (P.ref = tr(g, v, y)),
                (P.return = g),
                (g = P));
          }
          return s(g);
        case Pn:
          e: {
            for (S = y.key; v !== null; ) {
              if (v.key === S)
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
            (v = ki(y, g.mode, P)), (v.return = g), (g = v);
          }
          return s(g);
        case Dt:
          return (S = y._init), w(g, v, S(y._payload), P);
      }
      if (ir(y)) return p(g, v, y, P);
      if (Zn(y)) return _(g, v, y, P);
      qr(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        v !== null && v.tag === 6
          ? (n(g, v.sibling), (v = l(v, y)), (v.return = g), (g = v))
          : (n(g, v), (v = Mi(y, g.mode, P)), (v.return = g), (g = v)),
        s(g))
      : n(g, v);
  }
  return w;
}
var jn = Gu(!0),
  Ju = Gu(!1),
  $r = {},
  yt = Jt($r),
  Fr = Jt($r),
  Mr = Jt($r);
function on(e) {
  if (e === $r) throw Error(L(174));
  return e;
}
function rs(e, t) {
  switch ((re(Mr, t), re(Fr, e), re(yt, $r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wi(t, e));
  }
  oe(yt), re(yt, t);
}
function Wn() {
  oe(yt), oe(Fr), oe(Mr);
}
function qu(e) {
  on(Mr.current);
  var t = on(yt.current),
    n = Wi(t, e.type);
  t !== n && (re(Fr, e), re(yt, n));
}
function ls(e) {
  Fr.current === e && (oe(yt), oe(Fr));
}
var fe = Jt(0);
function Dl(e) {
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
var Ei = [];
function is() {
  for (var e = 0; e < Ei.length; e++)
    Ei[e]._workInProgressVersionPrimary = null;
  Ei.length = 0;
}
var fl = Lt.ReactCurrentDispatcher,
  Si = Lt.ReactCurrentBatchConfig,
  dn = 0,
  de = null,
  ye = null,
  Pe = null,
  Tl = !1,
  mr = !1,
  kr = 0,
  Hd = 0;
function Oe() {
  throw Error(L(321));
}
function os(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ss(e, t, n, r, l, i) {
  if (
    ((dn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fl.current = e === null || e.memoizedState === null ? Xd : Zd),
    (e = n(r, l)),
    mr)
  ) {
    i = 0;
    do {
      if (((mr = !1), (kr = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (Pe = ye = null),
        (t.updateQueue = null),
        (fl.current = Gd),
        (e = n(r, l));
    } while (mr);
  }
  if (
    ((fl.current = Al),
    (t = ye !== null && ye.next !== null),
    (dn = 0),
    (Pe = ye = de = null),
    (Tl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function as() {
  var e = kr !== 0;
  return (kr = 0), e;
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (de.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function lt() {
  if (ye === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Pe === null ? de.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (ye = e);
  else {
    if (e === null) throw Error(L(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Pe === null ? (de.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ri(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ye,
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
      if ((dn & m) === m)
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
          (de.lanes |= m),
          (mn |= m);
      }
      f = f.next;
    } while (f !== null && f !== i);
    a === null ? (s = r) : (a.next = o),
      dt(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (de.lanes |= i), (mn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Oi(e) {
  var t = lt(),
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
    dt(i, t.memoizedState) || (je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ec() {}
function tc(e, t) {
  var n = de,
    r = lt(),
    l = t(),
    i = !dt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (je = !0)),
    (r = r.queue),
    us(lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ur(9, rc.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(L(349));
    (dn & 30) !== 0 || nc(n, t, l);
  }
  return l;
}
function nc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ic(t) && oc(e);
}
function lc(e, t, n) {
  return n(function () {
    ic(t) && oc(e);
  });
}
function ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = Ft(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function da(e) {
  var t = ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yd.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sc() {
  return lt().memoizedState;
}
function dl(e, t, n, r) {
  var l = ht();
  (de.flags |= e),
    (l.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gl(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ye !== null) {
    var s = ye.memoizedState;
    if (((i = s.destroy), r !== null && os(r, s.deps))) {
      l.memoizedState = Ur(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (l.memoizedState = Ur(1 | t, n, i, r));
}
function ma(e, t) {
  return dl(8390656, 8, e, t);
}
function us(e, t) {
  return Gl(2048, 8, e, t);
}
function ac(e, t) {
  return Gl(4, 2, e, t);
}
function uc(e, t) {
  return Gl(4, 4, e, t);
}
function cc(e, t) {
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
function fc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gl(4, 4, cc.bind(null, t, e), n)
  );
}
function cs() {}
function dc(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && os(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mc(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && os(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pc(e, t, n) {
  return (dn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n))
    : (dt(n, t) || ((n = gu()), (de.lanes |= n), (mn |= n), (e.baseState = !0)),
      t);
}
function bd(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Si.transition;
  Si.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Si.transition = r);
  }
}
function hc() {
  return lt().memoizedState;
}
function Qd(e, t, n) {
  var r = Qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vc(e))
  )
    gc(t, n);
  else if (((n = Qu(e, t, n, r)), n !== null)) {
    var l = De();
    ft(n, e, r, l), yc(n, t, r);
  }
}
function Yd(e, t, n) {
  var r = Qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vc(e)) gc(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = o), dt(o, s))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ts(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qu(e, t, l, r)),
      n !== null && ((l = De()), ft(n, e, r, l), yc(n, t, r));
  }
}
function vc(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function gc(e, t) {
  mr = Tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yc(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jo(e, n);
  }
}
var Al = {
    readContext: rt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: rt,
    useCallback: function (e, t) {
      return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: ma,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        dl(4194308, 4, cc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return dl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return dl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ht();
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
        (e = e.dispatch = Qd.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: da,
    useDebugValue: cs,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = da(!1),
        t = e[0];
      return (e = bd.bind(null, e[1])), (ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        l = ht();
      if (ue) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(L(349));
        (dn & 30) !== 0 || nc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ma(lc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ur(9, rc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = we.identifierPrefix;
      if (ue) {
        var n = St,
          r = Et;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: rt,
    useCallback: dc,
    useContext: rt,
    useEffect: us,
    useImperativeHandle: fc,
    useInsertionEffect: ac,
    useLayoutEffect: uc,
    useMemo: mc,
    useReducer: Ri,
    useRef: sc,
    useState: function () {
      return Ri(Lr);
    },
    useDebugValue: cs,
    useDeferredValue: function (e) {
      var t = lt();
      return pc(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Ri(Lr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: hc,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: rt,
    useCallback: dc,
    useContext: rt,
    useEffect: us,
    useImperativeHandle: fc,
    useInsertionEffect: ac,
    useLayoutEffect: uc,
    useMemo: mc,
    useReducer: Oi,
    useRef: sc,
    useState: function () {
      return Oi(Lr);
    },
    useDebugValue: cs,
    useDeferredValue: function (e) {
      var t = lt();
      return ye === null ? (t.memoizedState = e) : pc(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Oi(Lr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: hc,
    unstable_isNewReconciler: !1,
  };
function Kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sf(r)), (r = r.return);
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
function xi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jd = typeof WeakMap == "function" ? WeakMap : Map;
function _c(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bl || ((Bl = !0), (Co = r)), fo(e, t);
    }),
    n
  );
}
function Pc(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        fo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        fo(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function pa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = dm.bind(null, e, t, n)), t.then(e, e));
}
function ha(e) {
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
function va(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var qd = Lt.ReactCurrentOwner,
  je = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Ju(t, null, n, r) : jn(t, e.child, n, r);
}
function ga(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    An(t, l),
    (r = ss(e, t, n, r, i, l)),
    (n = as()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (ue && n && Xo(t), (t.flags |= 1), Le(e, t, r, l), t.child)
  );
}
function ya(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ys(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), wc(e, t, i, r, l))
      : ((e = vl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Sr), n(s, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Sr(i, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (je = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return mo(e, t, n, r, l);
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(kn, Qe),
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
          re(kn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        re(kn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(kn, Qe),
      (Qe |= r);
  return Le(e, t, l, n), t.child;
}
function Nc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mo(e, t, n, r, l) {
  var i = Ke(n) ? cn : Me.current;
  return (
    (i = $n(t, i)),
    An(t, l),
    (n = ss(e, t, n, r, i, l)),
    (r = as()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (ue && r && Xo(t), (t.flags |= 1), Le(e, t, n, l), t.child)
  );
}
function _a(e, t, n, r, l) {
  if (Ke(n)) {
    var i = !0;
    xl(t);
  } else i = !1;
  if ((An(t, l), t.stateNode === null))
    ml(e, t), Zu(t, n, r), co(t, n, r, l), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = rt(f))
      : ((f = Ke(n) ? cn : Me.current), (f = $n(t, f)));
    var m = n.getDerivedStateFromProps,
      u =
        typeof m == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== r || a !== f) && ca(t, s, r, f)),
      (Tt = !1);
    var c = t.memoizedState;
    (s.state = c),
      Ul(t, r, s, l),
      (a = t.memoizedState),
      o !== r || c !== a || We.current || Tt
        ? (typeof m == "function" && (uo(t, n, m, r), (a = t.memoizedState)),
          (o = Tt || ua(t, n, o, r, c, a, f))
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
      Yu(e, t),
      (o = t.memoizedProps),
      (f = t.type === t.elementType ? o : st(t.type, o)),
      (s.props = f),
      (u = t.pendingProps),
      (c = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = rt(a))
        : ((a = Ke(n) ? cn : Me.current), (a = $n(t, a)));
    var h = n.getDerivedStateFromProps;
    (m =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== u || c !== a) && ca(t, s, r, a)),
      (Tt = !1),
      (c = t.memoizedState),
      (s.state = c),
      Ul(t, r, s, l);
    var p = t.memoizedState;
    o !== u || c !== p || We.current || Tt
      ? (typeof h == "function" && (uo(t, n, h, r), (p = t.memoizedState)),
        (f = Tt || ua(t, n, f, r, c, p, a) || !1)
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
  return po(e, t, n, r, i, l);
}
function po(e, t, n, r, l, i) {
  Nc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && la(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (qd.current = t);
  var o =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = jn(t, e.child, null, i)), (t.child = jn(t, null, o, i)))
      : Le(e, t, o, i),
    (t.memoizedState = r.state),
    l && la(t, n, !0),
    t.child
  );
}
function Ec(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ra(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ra(e, t.context, !1),
    rs(e, t.containerInfo);
}
function Pa(e, t, n, r, l) {
  return zn(), Go(l), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sc(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(fe, l & 1),
    e === null)
  )
    return (
      so(t),
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
                : (i = ei(s, r, 0, null)),
              (e = un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vo(n)),
              (t.memoizedState = ho),
              e)
            : fs(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return em(e, t, s, r, o, l, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (l = e.child), (o = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      (s & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Yt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = Yt(o, i)) : ((i = un(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vo(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ho),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Yt(i, { mode: "visible", children: r.children })),
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
function fs(e, t) {
  return (
    (t = ei({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function el(e, t, n, r) {
  return (
    r !== null && Go(r),
    jn(t, e.child, null, n),
    (e = fs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function em(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xi(Error(L(422)))), el(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ei({ mode: "visible", children: r.children }, l, 0, null)),
        (i = un(i, l, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && jn(t, e.child, null, s),
        (t.child.memoizedState = vo(s)),
        (t.memoizedState = ho),
        i);
  if ((t.mode & 1) === 0) return el(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(L(419))), (r = xi(i, r, void 0)), el(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), je || o)) {
    if (((r = we), r !== null)) {
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
          ((i.retryLane = l), Ft(e, l), ft(r, e, l, -1));
    }
    return gs(), (r = xi(Error(L(421)))), el(e, t, s, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = Vt(l.nextSibling)),
      (Xe = t),
      (ue = !0),
      (ut = null),
      e !== null &&
        ((qe[et++] = Et),
        (qe[et++] = St),
        (qe[et++] = fn),
        (Et = e.id),
        (St = e.overflow),
        (fn = t)),
      (t = fs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ao(e.return, t, n);
}
function Fi(e, t, n, r, l) {
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
function Rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Le(e, t, r.children, n), (r = fe.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wa(e, n, t);
        else if (e.tag === 19) wa(e, n, t);
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
  if ((re(fe, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Dl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Fi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Dl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Fi(t, !0, n, null, i);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ml(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tm(e, t, n) {
  switch (t.tag) {
    case 3:
      Ec(t), zn();
      break;
    case 5:
      qu(t);
      break;
    case 1:
      Ke(t.type) && xl(t);
      break;
    case 4:
      rs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(kl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Sc(e, t, n)
          : (re(fe, fe.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cc(e, t, n);
  }
  return Mt(e, t, n);
}
var Oc, go, xc, Fc;
Oc = function (e, t) {
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
go = function () {};
xc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), on(yt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Bi(e, l)), (r = Bi(e, r)), (i = []);
        break;
      case "select":
        (l = me({}, l, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ji(e, l)), (r = ji(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Rl);
    }
    Ki(n, r);
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
            (yr.hasOwnProperty(f)
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
              (yr.hasOwnProperty(f)
                ? (a != null && f === "onScroll" && ie("scroll", e),
                  i || o === a || (i = []))
                : (i = i || []).push(f, a));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Fc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!ue)
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
function xe(e) {
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
function nm(e, t, n) {
  var r = t.pendingProps;
  switch ((Zo(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return Ke(t.type) && Ol(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        oe(We),
        oe(Me),
        is(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), ut !== null && (So(ut), (ut = null)))),
        go(e, t),
        xe(t),
        null
      );
    case 5:
      ls(t);
      var l = on(Mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return xe(t), null;
        }
        if (((e = on(yt.current)), Jr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[xr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < sr.length; l++) ie(sr[l], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Ms(r, i), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Ls(r, i), ie("invalid", r);
          }
          Ki(n, i), (l = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var o = i[s];
              s === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : yr.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Kr(r), ks(r, i, !0);
              break;
            case "textarea":
              Kr(r), Us(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Rl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nu(n)),
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
            (e[vt] = t),
            (e[xr] = r),
            Oc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Vi(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < sr.length; l++) ie(sr[l], e);
                l = r;
                break;
              case "source":
                ie("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (l = r);
                break;
              case "details":
                ie("toggle", e), (l = r);
                break;
              case "input":
                Ms(e, r), (l = Bi(e, r)), ie("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = me({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Ls(e, r), (l = ji(e, r)), ie("invalid", e);
                break;
              default:
                l = r;
            }
            Ki(n, l), (o = l);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === "style"
                  ? iu(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ru(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _r(e, a)
                    : typeof a == "number" && _r(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (yr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ie("scroll", e)
                      : a != null && To(e, i, a, s));
              }
            switch (n) {
              case "input":
                Kr(e), ks(e, r, !1);
                break;
              case "textarea":
                Kr(e), Us(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Rl);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Fc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = on(Mr.current)), on(yt.current), Jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (i = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (oe(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && Ye !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          bu(), zn(), (t.flags |= 98560), (i = !1);
        else if (((i = Jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[vt] = t;
          } else
            zn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          xe(t), (i = !1);
        } else ut !== null && (So(ut), (ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (fe.current & 1) !== 0
                ? _e === 0 && (_e = 3)
                : gs())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        Wn(), go(e, t), e === null && Rr(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return es(t.type._context), xe(t), null;
    case 17:
      return Ke(t.type) && Ol(), xe(t), null;
    case 19:
      if ((oe(fe), (i = t.memoizedState), i === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) nr(i, !1);
        else {
          if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = Dl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    nr(i, !1),
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
                return re(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > Vn &&
            ((t.flags |= 128), (r = !0), nr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Dl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              nr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
            )
              return xe(t), null;
          } else
            2 * he() - i.renderingStartTime > Vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), nr(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        vs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Qe & 1073741824) !== 0 &&
            (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function rm(e, t) {
  switch ((Zo(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        oe(We),
        oe(Me),
        is(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return ls(t), null;
    case 13:
      if (
        (oe(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        zn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(fe), null;
    case 4:
      return Wn(), null;
    case 10:
      return es(t.type._context), null;
    case 22:
    case 23:
      return vs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var tl = !1,
  Fe = !1,
  lm = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function yo(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Ca = !1;
function im(e, t) {
  if (((eo = Nl), (e = Uu()), Yo(e))) {
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
  for (to = { focusedElem: e, selectionRange: n }, Nl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
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
                      t.elementType === t.type ? _ : st(t.type, _),
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
          pe(t, t.return, P);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (p = Ca), (Ca = !1), p;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && yo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Jl(e, t) {
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
function _o(e) {
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
function Mc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[xr], delete t[lo], delete t[jd], delete t[Wd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Na(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kc(e.return)) return null;
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
function Po(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Po(e, t, n), e = e.sibling; e !== null; ) Po(e, t, n), (e = e.sibling);
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), (e = e.sibling);
}
var Ne = null,
  at = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) Lc(e, t, n), (n = n.sibling);
}
function Lc(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(Vl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || Mn(n, t);
    case 6:
      var r = Ne,
        l = at;
      (Ne = null),
        Ut(e, t, n),
        (Ne = r),
        (at = l),
        Ne !== null &&
          (at
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (at
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ci(e.parentNode, n)
              : e.nodeType === 1 && Ci(e, n),
            Nr(e))
          : Ci(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (l = at),
        (Ne = n.stateNode.containerInfo),
        (at = !0),
        Ut(e, t, n),
        (Ne = r),
        (at = l);
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
            s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && yo(n, t, s),
            (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          pe(n, t, o);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Ut(e, t, n), (Fe = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function Ea(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lm()),
      t.forEach(function (r) {
        var l = pm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
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
              (Ne = o.stateNode), (at = !1);
              break e;
            case 3:
              (Ne = o.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (Ne = o.stateNode.containerInfo), (at = !0);
              break e;
          }
          o = o.return;
        }
        if (Ne === null) throw Error(L(160));
        Lc(i, s, l), (Ne = null), (at = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (f) {
        pe(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Uc(t, e), (t = t.sibling);
}
function Uc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), pt(e), r & 4)) {
        try {
          pr(3, e, e.return), Jl(3, e);
        } catch (_) {
          pe(e, e.return, _);
        }
        try {
          pr(5, e, e.return);
        } catch (_) {
          pe(e, e.return, _);
        }
      }
      break;
    case 1:
      ot(t, e), pt(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        pt(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          _r(l, "");
        } catch (_) {
          pe(e, e.return, _);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && eu(l, i),
              Vi(o, s);
            var f = Vi(o, i);
            for (s = 0; s < a.length; s += 2) {
              var m = a[s],
                u = a[s + 1];
              m === "style"
                ? iu(l, u)
                : m === "dangerouslySetInnerHTML"
                ? ru(l, u)
                : m === "children"
                ? _r(l, u)
                : To(l, m, u, f);
            }
            switch (o) {
              case "input":
                $i(l, i);
                break;
              case "textarea":
                tu(l, i);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Ln(l, !!i.multiple, h, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ln(l, !!i.multiple, i.defaultValue, !0)
                      : Ln(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[xr] = i;
          } catch (_) {
            pe(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((ot(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (_) {
          pe(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Nr(t.containerInfo);
        } catch (_) {
          pe(e, e.return, _);
        }
      break;
    case 4:
      ot(t, e), pt(e);
      break;
    case 13:
      ot(t, e),
        pt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ps = he())),
        r & 4 && Ea(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (f = Fe) || m), ot(t, e), (Fe = f)) : ot(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !m && (e.mode & 1) !== 0)
        )
          for ($ = e, m = e.child; m !== null; ) {
            for (u = $ = m; $ !== null; ) {
              switch (((c = $), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, c, c.return);
                  break;
                case 1:
                  Mn(c, c.return);
                  var p = c.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (_) {
                      pe(r, n, _);
                    }
                  }
                  break;
                case 5:
                  Mn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Ra(u);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), ($ = h)) : Ra(u);
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
                      (o.style.display = lu("display", s)));
              } catch (_) {
                pe(e, e.return, _);
              }
            }
          } else if (u.tag === 6) {
            if (m === null)
              try {
                u.stateNode.nodeValue = f ? "" : u.memoizedProps;
              } catch (_) {
                pe(e, e.return, _);
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
      ot(t, e), pt(e), r & 4 && Ea(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kc(n)) {
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
          r.flags & 32 && (_r(l, ""), (r.flags &= -33));
          var i = Na(e);
          wo(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = Na(e);
          Po(e, o, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function om(e, t, n) {
  ($ = e), Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $,
      i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || tl;
      if (!s) {
        var o = l.alternate,
          a = (o !== null && o.memoizedState !== null) || Fe;
        o = tl;
        var f = Fe;
        if (((tl = s), (Fe = a) && !f))
          for ($ = l; $ !== null; )
            (s = $),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Oa(l)
                : a !== null
                ? ((a.return = s), ($ = a))
                : Oa(l);
        for (; i !== null; ) ($ = i), Dc(i), (i = i.sibling);
        ($ = l), (tl = o), (Fe = f);
      }
      Sa(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), ($ = i))
        : Sa(e);
  }
}
function Sa(e) {
  for (; $ !== null; ) {
    var t = $;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && aa(t, i, r);
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
                aa(t, s, n);
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
                    u !== null && Nr(u);
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
        Fe || (t.flags & 512 && _o(t));
      } catch (c) {
        pe(t, t.return, c);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Ra(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Oa(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (a) {
            pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              pe(t, l, a);
            }
          }
          var i = t.return;
          try {
            _o(t);
          } catch (a) {
            pe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _o(t);
          } catch (a) {
            pe(t, s, a);
          }
      }
    } catch (a) {
      pe(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), ($ = o);
      break;
    }
    $ = t.return;
  }
}
var sm = Math.ceil,
  Il = Lt.ReactCurrentDispatcher,
  ds = Lt.ReactCurrentOwner,
  nt = Lt.ReactCurrentBatchConfig,
  X = 0,
  we = null,
  ge = null,
  Ee = 0,
  Qe = 0,
  kn = Jt(0),
  _e = 0,
  Dr = null,
  mn = 0,
  ql = 0,
  ms = 0,
  hr = null,
  ze = null,
  ps = 0,
  Vn = 1 / 0,
  Ct = null,
  Bl = !1,
  Co = null,
  bt = null,
  nl = !1,
  zt = null,
  $l = 0,
  vr = 0,
  No = null,
  pl = -1,
  hl = 0;
function De() {
  return (X & 6) !== 0 ? he() : pl !== -1 ? pl : (pl = he());
}
function Qt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (X & 2) !== 0 && Ee !== 0
    ? Ee & -Ee
    : Vd.transition !== null
    ? (hl === 0 && (hl = gu()), hl)
    : ((e = ee),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eu(e.type))),
      e);
}
function ft(e, t, n, r) {
  if (50 < vr) throw ((vr = 0), (No = null), Error(L(185)));
  Ar(e, n, r),
    ((X & 2) === 0 || e !== we) &&
      (e === we && ((X & 2) === 0 && (ql |= n), _e === 4 && It(e, Ee)),
      Ve(e, r),
      n === 1 &&
        X === 0 &&
        (t.mode & 1) === 0 &&
        ((Vn = he() + 500), Xl && qt()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Vf(e, t);
  var r = Cl(e, e === we ? Ee : 0);
  if (r === 0)
    n !== null && As(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && As(n), t === 1))
      e.tag === 0 ? Kd(xa.bind(null, e)) : Ku(xa.bind(null, e)),
        $d(function () {
          (X & 6) === 0 && qt();
        }),
        (n = null);
    else {
      switch (yu(r)) {
        case 1:
          n = zo;
          break;
        case 4:
          n = hu;
          break;
        case 16:
          n = wl;
          break;
        case 536870912:
          n = vu;
          break;
        default:
          n = wl;
      }
      n = Wc(n, Tc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tc(e, t) {
  if (((pl = -1), (hl = 0), (X & 6) !== 0)) throw Error(L(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = Cl(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = zl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = Ic();
    (we !== e || Ee !== t) && ((Ct = null), (Vn = he() + 500), an(e, t));
    do
      try {
        cm();
        break;
      } catch (o) {
        Ac(e, o);
      }
    while (1);
    qo(),
      (Il.current = i),
      (X = l),
      ge !== null ? (t = 0) : ((we = null), (Ee = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Xi(e)), l !== 0 && ((r = l), (t = Eo(e, l)))), t === 1)
    )
      throw ((n = Dr), an(e, 0), It(e, r), Ve(e, he()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !am(l) &&
          ((t = zl(e, r)),
          t === 2 && ((i = Xi(e)), i !== 0 && ((r = i), (t = Eo(e, i)))),
          t === 1))
      )
        throw ((n = Dr), an(e, 0), It(e, r), Ve(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          nn(e, ze, Ct);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = ps + 500 - he()), 10 < t))
          ) {
            if (Cl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ro(nn.bind(null, e, ze, Ct), t);
            break;
          }
          nn(e, ze, Ct);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - ct(r);
            (i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
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
                : 1960 * sm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ro(nn.bind(null, e, ze, Ct), r);
            break;
          }
          nn(e, ze, Ct);
          break;
        case 5:
          nn(e, ze, Ct);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ve(e, he()), e.callbackNode === n ? Tc.bind(null, e) : null;
}
function Eo(e, t) {
  var n = hr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = zl(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && So(t)),
    e
  );
}
function So(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(i(), l)) return !1;
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
function It(e, t) {
  for (
    t &= ~ms,
      t &= ~ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xa(e) {
  if ((X & 6) !== 0) throw Error(L(327));
  In();
  var t = Cl(e, 0);
  if ((t & 1) === 0) return Ve(e, he()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && ((t = r), (n = Eo(e, r)));
  }
  if (n === 1) throw ((n = Dr), an(e, 0), It(e, t), Ve(e, he()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, ze, Ct),
    Ve(e, he()),
    null
  );
}
function hs(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Vn = he() + 500), Xl && qt());
  }
}
function pn(e) {
  zt !== null && zt.tag === 0 && (X & 6) === 0 && In();
  var t = X;
  X |= 1;
  var n = nt.transition,
    r = ee;
  try {
    if (((nt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (nt.transition = n), (X = t), (X & 6) === 0 && qt();
  }
}
function vs() {
  (Qe = kn.current), oe(kn);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bd(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((Zo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ol();
          break;
        case 3:
          Wn(), oe(We), oe(Me), is();
          break;
        case 5:
          ls(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          oe(fe);
          break;
        case 19:
          oe(fe);
          break;
        case 10:
          es(r.type._context);
          break;
        case 22:
        case 23:
          vs();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (ge = e = Yt(e.current, null)),
    (Ee = Qe = t),
    (_e = 0),
    (Dr = null),
    (ms = ql = mn = 0),
    (ze = hr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = l), (r.next = s);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = ge;
    try {
      if ((qo(), (fl.current = Al), Tl)) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Tl = !1;
      }
      if (
        ((dn = 0),
        (Pe = ye = de = null),
        (mr = !1),
        (kr = 0),
        (ds.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (Dr = t), (ge = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = Ee),
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
          var h = ha(s);
          if (h !== null) {
            (h.flags &= -257),
              va(h, s, o, i, t),
              h.mode & 1 && pa(i, f, t),
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
              pa(i, f, t), gs();
              break e;
            }
            a = Error(L(426));
          }
        } else if (ue && o.mode & 1) {
          var w = ha(s);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256),
              va(w, s, o, i, t),
              Go(Kn(a, o));
            break e;
          }
        }
        (i = a = Kn(a, o)),
          _e !== 4 && (_e = 2),
          hr === null ? (hr = [i]) : hr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = _c(i, a, t);
              sa(i, g);
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
                    (bt === null || !bt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var P = Pc(i, o, t);
                sa(i, P);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $c(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ic() {
  var e = Il.current;
  return (Il.current = Al), e === null ? Al : e;
}
function gs() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    we === null ||
      ((mn & 268435455) === 0 && (ql & 268435455) === 0) ||
      It(we, Ee);
}
function zl(e, t) {
  var n = X;
  X |= 2;
  var r = Ic();
  (we !== e || Ee !== t) && ((Ct = null), an(e, t));
  do
    try {
      um();
      break;
    } catch (l) {
      Ac(e, l);
    }
  while (1);
  if ((qo(), (X = n), (Il.current = r), ge !== null)) throw Error(L(261));
  return (we = null), (Ee = 0), _e;
}
function um() {
  for (; ge !== null; ) Bc(ge);
}
function cm() {
  for (; ge !== null && !Tf(); ) Bc(ge);
}
function Bc(e) {
  var t = jc(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? $c(e) : (ge = t),
    (ds.current = null);
}
function $c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = nm(n, t, Qe)), n !== null)) {
        ge = n;
        return;
      }
    } else {
      if (((n = rm(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (ge = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function nn(e, t, n) {
  var r = ee,
    l = nt.transition;
  try {
    (nt.transition = null), (ee = 1), fm(e, t, n, r);
  } finally {
    (nt.transition = l), (ee = r);
  }
  return null;
}
function fm(e, t, n, r) {
  do In();
  while (zt !== null);
  if ((X & 6) !== 0) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Hf(e, i),
    e === we && ((ge = we = null), (Ee = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      nl ||
      ((nl = !0),
      Wc(wl, function () {
        return In(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = nt.transition), (nt.transition = null);
    var s = ee;
    ee = 1;
    var o = X;
    (X |= 4),
      (ds.current = null),
      im(e, n),
      Uc(n, e),
      kd(to),
      (Nl = !!eo),
      (to = eo = null),
      (e.current = n),
      om(n),
      Af(),
      (X = o),
      (ee = s),
      (nt.transition = i);
  } else e.current = n;
  if (
    (nl && ((nl = !1), (zt = e), ($l = l)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    $f(n.stateNode),
    Ve(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Bl) throw ((Bl = !1), (e = Co), (Co = null), e);
  return (
    ($l & 1) !== 0 && e.tag !== 0 && In(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === No ? vr++ : ((vr = 0), (No = e))) : (vr = 0),
    qt(),
    null
  );
}
function In() {
  if (zt !== null) {
    var e = yu($l),
      t = nt.transition,
      n = ee;
    try {
      if (((nt.transition = null), (ee = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), ($l = 0), (X & 6) !== 0))
          throw Error(L(331));
        var l = X;
        for (X |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            s = i.child;
          if (($.flags & 16) !== 0) {
            var o = i.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var f = o[a];
                for ($ = f; $ !== null; ) {
                  var m = $;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, m, i);
                  }
                  var u = m.child;
                  if (u !== null) (u.return = m), ($ = u);
                  else
                    for (; $ !== null; ) {
                      m = $;
                      var c = m.sibling,
                        h = m.return;
                      if ((Mc(m), m === f)) {
                        $ = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), ($ = c);
                        break;
                      }
                      $ = h;
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
              $ = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && s !== null)
            (s.return = i), ($ = s);
          else
            e: for (; $ !== null; ) {
              if (((i = $), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pr(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), ($ = g);
                break e;
              }
              $ = i.return;
            }
        }
        var v = e.current;
        for ($ = v; $ !== null; ) {
          s = $;
          var y = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && y !== null)
            (y.return = s), ($ = y);
          else
            e: for (s = v; $ !== null; ) {
              if (((o = $), (o.flags & 2048) !== 0))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, o);
                  }
                } catch (C) {
                  pe(o, o.return, C);
                }
              if (o === s) {
                $ = null;
                break e;
              }
              var P = o.sibling;
              if (P !== null) {
                (P.return = o.return), ($ = P);
                break e;
              }
              $ = o.return;
            }
        }
        if (
          ((X = l), qt(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(Vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (nt.transition = t);
    }
  }
  return !1;
}
function Fa(e, t, n) {
  (t = Kn(n, t)),
    (t = _c(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = De()),
    e !== null && (Ar(e, 1, t), Ve(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Fa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = Kn(n, e)),
            (e = Pc(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = De()),
            t !== null && (Ar(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ee & n) === n &&
      (_e === 4 || (_e === 3 && (Ee & 130023424) === Ee && 500 > he() - ps)
        ? an(e, 0)
        : (ms |= n)),
    Ve(e, t);
}
function zc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = br), (br <<= 1), (br & 130023424) === 0 && (br = 4194304)));
  var n = De();
  (e = Ft(e, t)), e !== null && (Ar(e, t, n), Ve(e, n));
}
function mm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function pm(e, t) {
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
  r !== null && r.delete(t), zc(e, n);
}
var jc;
jc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) je = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (je = !1), tm(e, t, n);
      je = (e.flags & 131072) !== 0;
    }
  else (je = !1), ue && (t.flags & 1048576) !== 0 && Vu(t, Ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ml(e, t), (e = t.pendingProps);
      var l = $n(t, Me.current);
      An(t, n), (l = ss(null, t, r, e, l, n));
      var i = as();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((i = !0), xl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ns(t),
            (l.updater = Zl),
            (t.stateNode = l),
            (l._reactInternals = t),
            co(t, r, e, n),
            (t = po(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && Xo(t), Le(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ml(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vm(r)),
          (e = st(r, e)),
          l)
        ) {
          case 0:
            t = mo(null, t, r, e, n);
            break e;
          case 1:
            t = _a(null, t, r, e, n);
            break e;
          case 11:
            t = ga(null, t, r, e, n);
            break e;
          case 14:
            t = ya(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        mo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        _a(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ec(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Yu(e, t),
          Ul(t, r, null, n);
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
            (l = Kn(Error(L(423)), t)), (t = Pa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Kn(Error(L(424)), t)), (t = Pa(e, t, r, n, l));
            break e;
          } else
            for (
              Ye = Vt(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ue = !0,
                ut = null,
                n = Ju(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((zn(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qu(t),
        e === null && so(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = l.children),
        no(r, l) ? (s = null) : i !== null && no(r, i) && (t.flags |= 32),
        Nc(e, t),
        Le(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && so(t), null;
    case 13:
      return Sc(e, t, n);
    case 4:
      return (
        rs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        ga(e, t, r, l, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (s = l.value),
          re(kl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (dt(i.value, s)) {
            if (i.children === l.children && !We.current) {
              t = Mt(e, t, n);
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
                      (a = Rt(-1, n & -n)), (a.tag = 2);
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
                      ao(i.return, n, t),
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
                  ao(s, n, t),
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
        Le(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        An(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = st(r, t.pendingProps)),
        (l = st(r.type, l)),
        ya(e, t, r, l, n)
      );
    case 15:
      return wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : st(r, l)),
        ml(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), xl(t)) : (e = !1),
        An(t, n),
        Zu(t, r, l),
        co(t, r, l, n),
        po(null, t, r, !0, e, n)
      );
    case 19:
      return Rc(e, t, n);
    case 22:
      return Cc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Wc(e, t) {
  return pu(e, t);
}
function hm(e, t, n, r) {
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
function tt(e, t, n, r) {
  return new hm(e, t, n, r);
}
function ys(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vm(e) {
  if (typeof e == "function") return ys(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Io)) return 11;
    if (e === Bo) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
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
function vl(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) ys(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wn:
        return un(n.children, l, i, t);
      case Ao:
        (s = 8), (l |= 8);
        break;
      case Di:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = Di), (e.lanes = i), e
        );
      case Ti:
        return (e = tt(13, n, t, l)), (e.elementType = Ti), (e.lanes = i), e;
      case Ai:
        return (e = tt(19, n, t, l)), (e.elementType = Ai), (e.lanes = i), e;
      case Ga:
        return ei(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xa:
              s = 10;
              break e;
            case Za:
              s = 9;
              break e;
            case Io:
              s = 11;
              break e;
            case Bo:
              s = 14;
              break e;
            case Dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function un(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function ei(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = Ga),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Mi(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function ki(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gm(e, t, n, r, l) {
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
    (this.eventTimes = fi(0)),
    (this.expirationTimes = fi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function _s(e, t, n, r, l, i, s, o, a) {
  return (
    (e = new gm(e, t, n, o, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ns(i),
    e
  );
}
function ym(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kc(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
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
    if (Ke(n)) return Wu(e, n, t);
  }
  return t;
}
function Vc(e, t, n, r, l, i, s, o, a) {
  return (
    (e = _s(n, r, !0, e, l, i, s, o, a)),
    (e.context = Kc(null)),
    (n = e.current),
    (r = De()),
    (l = Qt(n)),
    (i = Rt(r, l)),
    (i.callback = t ?? null),
    Ht(n, i, l),
    (e.current.lanes = l),
    Ar(e, l, r),
    Ve(e, r),
    e
  );
}
function ti(e, t, n, r) {
  var l = t.current,
    i = De(),
    s = Qt(l);
  return (
    (n = Kc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(l, t, s)),
    e !== null && (ft(e, l, s, i), cl(e, l, s)),
    s
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ps(e, t) {
  Ma(e, t), (e = e.alternate) && Ma(e, t);
}
function _m() {
  return null;
}
var Hc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ws(e) {
  this._internalRoot = e;
}
ni.prototype.render = ws.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  ti(e, t, null, null);
};
ni.prototype.unmount = ws.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      ti(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function ni(e) {
  this._internalRoot = e;
}
ni.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
    At.splice(n, 0, e), n === 0 && Nu(e);
  }
};
function Cs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ri(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ka() {}
function Pm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = jl(s);
        i.call(f);
      };
    }
    var s = Vc(t, r, e, 0, null, !1, !1, "", ka);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      Rr(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var f = jl(a);
      o.call(f);
    };
  }
  var a = _s(e, 0, !1, null, null, !1, !1, "", ka);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      ti(t, a, n, r);
    }),
    a
  );
}
function li(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var a = jl(s);
        o.call(a);
      };
    }
    ti(t, s, e, l);
  } else s = Pm(n, t, e, l, r);
  return jl(s);
}
_u = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 &&
          (jo(t, n | 1),
          Ve(t, he()),
          (X & 6) === 0 && ((Vn = he() + 500), qt()));
      }
      break;
    case 13:
      pn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = De();
          ft(r, e, 1, l);
        }
      }),
        Ps(e, 1);
  }
};
Wo = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = De();
      ft(t, e, 134217728, n);
    }
    Ps(e, 134217728);
  }
};
Pu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = De();
      ft(n, e, t, r);
    }
    Ps(e, t);
  }
};
wu = function () {
  return ee;
};
Cu = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
bi = function (e, t, n) {
  switch (t) {
    case "input":
      if (($i(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Yl(r);
            if (!l) throw Error(L(90));
            qa(r), $i(r, l);
          }
        }
      }
      break;
    case "textarea":
      tu(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ln(e, !!n.multiple, t, !1);
  }
};
au = hs;
uu = pn;
var wm = { usingClientEntryPoint: !1, Events: [Br, Sn, Yl, ou, su, hs] },
  rr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Cm = {
    bundleType: rr.bundleType,
    version: rr.version,
    rendererPackageName: rr.rendererPackageName,
    rendererConfig: rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = du(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rr.findFiberByHostInstance || _m,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rl.isDisabled && rl.supportsFiber)
    try {
      (Vl = rl.inject(Cm)), (gt = rl);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cs(t)) throw Error(L(200));
  return ym(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Cs(e)) throw Error(L(299));
  var n = !1,
    r = "",
    l = Hc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = _s(e, 1, !1, null, null, n, !1, r, l)),
    (e[xt] = t.current),
    Rr(e.nodeType === 8 ? e.parentNode : e),
    new ws(t)
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
  return (e = du(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return pn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!ri(t)) throw Error(L(200));
  return li(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Cs(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    s = Hc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Vc(t, null, e, 1, n ?? null, l, !1, i, s)),
    (e[xt] = t.current),
    Rr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ni(t);
};
Ge.render = function (e, t, n) {
  if (!ri(t)) throw Error(L(200));
  return li(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!ri(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (pn(function () {
        li(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = hs;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ri(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return li(e, t, n, !1, r);
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
})(Va);
var La = Va.exports;
(Li.createRoot = La.createRoot), (Li.hydrateRoot = La.hydrateRoot);
function Nm() {
  return (
    H.exports.useEffect(() => {
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
function Em(e) {
  return T("div", {
    className: "start__container flex__center--col",
    children: [
      d("div", {
        className: "start__heading",
        children: "solve rubik's cube.",
      }),
      d("div", { className: "cube__img--container", children: d(Nm, {}) }),
      d("button", {
        className: "start__btn",
        onClick: e.handleClick,
        children: "Start",
      }),
    ],
  });
}
let Sm = (e = 21) =>
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
function _n(e) {
  let t = e.side.map((n) =>
    d("div", { className: `single__face ${n}__face` }, Sm())
  );
  return d("div", {
    className: "face__container flex__center--row",
    children: t,
  });
}
var bc = { exports: {} };
(function (e, t) {
  (function (r, l) {
    e.exports = l();
  })(Da, function () {
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
            se = S(I);
          M([K, Y], se);
          let ne = new a.a(s()([], K.normal(), Y.normal())).getAxis(),
            ae = a.a.getAngle(K.normal(), Y.normal());
          if (ne === "x" && ae > 0) return "down";
          if (ne === "x" && ae < 0) return "up";
          if (ne === "y" && ae > 0) return "right";
          if (ne === "y" && ae < 0) return "left";
          if (ae === 0) return "front";
          if (ae === Math.PI) return "back";
        };
        r.c = w;
        const g = (k, O, I) => {
          (I = P(I)), (I = C(I, k));
          let K = new o.a(k),
            Y = S(I);
          M([K], Y);
          let se = new o.a(O),
            { axis: ne, angle: ae } = a.a.getRotationFromNormals(
              K.normal(),
              se.normal()
            );
          K.rotate(ne, ae);
          let ve = Y.map((D) => a.a.reverseRotation(D)).reverse();
          return M([K], ve), K.toString();
        };
        r.e = g;
        const v = (k, O, I) => {
          const K = new o.a(k),
            Y = new o.a(O),
            se = new o.a(I);
          let ne = K.vector.getAxis(),
            [ae, ve] = [Y.vector.getAxis(), se.vector.getAxis()];
          if ([ae.toLowerCase(), ve.toLowerCase()].includes(ne.toLowerCase()))
            throw new Error(`moving ${K} from ${Y} to ${se} is not possible.`);
          let D = u(k).toUpperCase(),
            j = a.a.getAngle(Y.normal(), se.normal());
          if ((K.vector.getMagnitude() < 0 && (j *= -1), j === 0)) return "";
          if (Math.abs(j) === Math.PI) return `${D} ${D}`;
          if (j < 0) return `${D}`;
          if (j > 0) return `${D}Prime`;
        };
        r.b = v;
        const y = (k, O) => {
          O = P(O);
          let I = S(O);
          return (
            I.reverse().map((K) => a.a.reverseRotation(K)),
            k.map((K) => {
              let Y = K.toLowerCase().includes("prime"),
                se = K.includes("2"),
                ne = K[0] === K[0].toLowerCase(),
                ae = ["m", "e", "s"].includes(K[0].toLowerCase());
              se && (K = K.replace("2", ""));
              let ve;
              if (ae) {
                let j = m(h(K));
                ve = new o.a(j);
              } else {
                let j = m(K[0]);
                ve = new o.a(j);
              }
              M([ve], I);
              let D;
              return (
                ae ? (D = c(ve.toString())) : (D = ve.toString()[0]),
                ne || (D = D.toUpperCase()),
                se && (D = D + "2"),
                Y && !ae && (D += "prime"),
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
        function S(k) {
          if (Object.keys(k) <= 1)
            throw new Error(
              `Orientation object "${k}" is ambiguous. Please specify 2 faces.`
            );
          let O = Object.keys(k),
            I = O.map((ne) => new o.a(k[ne])),
            K = O.map((ne) => new o.a(ne)),
            Y = a.a.getRotationFromNormals(
              I[0].normal(),
              I[0].orientTo(K[0]).normal()
            );
          I[1].rotate(Y.axis, Y.angle);
          let se = a.a.getRotationFromNormals(
            I[1].normal(),
            I[1].orientTo(K[1]).normal()
          );
          if (Math.abs(se.angle) === Math.PI) {
            let ne = new o.a(O[0]).vector.getAxis();
            se.axis = ne;
          }
          return [Y, se];
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
                S = v[`get${h}`]() * _;
              return y < C ? -1 : y > C ? 1 : P < S ? -1 : 1;
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
                  S = this._getMiddleCubiesForMove(C);
                P = [...P, ...S];
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
              S = new w(C).getMagnitude();
            return S ? P * S : P;
          }
          static getRotationFromNormals(v, y) {
            let P = new w(a()([], v, y)).getAxis(),
              C = w.getAngle(v, y);
            if (!P) {
              let S = ["x", "y", "z"];
              S.splice(S.indexOf(new w(v).getAxis()), 1), (P = S[0]);
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
            return "/";
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
            let h = c.colors().find((S) => c.getFaceOfColor(S) !== "down"),
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
            if (P > 1) for (var S = 1; S < P; S++) C += " " + y[S];
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
            let h = c.faces().find((S) => S !== "down"),
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
              S = _ ? a(g) : g;
            this.move(`${S} ${C} ${a(S)}`, { upperCase: !0 }),
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
            let h = c.colors().find((S) => c.getFaceOfColor(S) !== "down"),
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
              S = l.i(o.b)("down", y, P);
            this.move(`${C} ${S} ${a(C)}`, { upperCase: !0 }),
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
            let h = u.faces().filter((S) => S !== "down"),
              p = c.faces(),
              _ = l.i(o.c)(h[0], h[1], { up: "down" }),
              w = l.i(o.c)(p[0], p[1], { up: "down" }),
              g = _ === "right" ? h[1] : h[0],
              v = w === "right" ? p[1] : p[0];
            if (u.getFaceOfColor("u") === "down")
              return u.getColorOfFace(g) === c.getColorOfFace(v) ? 1 : 2;
            let y = u
                .colors()
                .find((S) => S !== "u" && S !== u.getColorOfFace("down")),
              C =
                l.i(o.c)(u.getFaceOfColor(y), u.getFaceOfColor("u"), {
                  up: "down",
                }) === "left"
                  ? c.getColorOfFace(v)
                  : c.colors().find((S) => c.getFaceOfColor(S) !== v);
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
              S = g ? "DPrime" : "D";
            (S = h === 4 ? a(S) : S),
              this.move(`${P} ${C} ${S} ${a(C)}`, { upperCase: !0 }),
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
              S = P ? w : a(_),
              M = P ? "DPrime" : "D";
            this.move(`${C} ${S} ${M} ${a(S)}`, { upperCase: !0 }),
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
})(bc);
const Rm = Ta(bc.exports);
let Om = { data: "" },
  xm = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || Om,
  Fm = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Mm = /\/\*[^]*?\*\/|  +/g,
  Ua = /\n+/g,
  Bt = (e, t) => {
    let n = "",
      r = "",
      l = "";
    for (let i in e) {
      let s = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + s + ";")
          : (r +=
              i[1] == "f"
                ? Bt(s, i)
                : i + "{" + Bt(s, i[1] == "k" ? "" : t) + "}")
        : typeof s == "object"
        ? (r += Bt(
            s,
            t
              ? t.replace(/([^,])+/g, (o) =>
                  i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (a) =>
                    /&/.test(a) ? a.replace(/&/g, o) : o ? o + " " + a : a
                  )
                )
              : i
          ))
        : s != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (l += Bt.p ? Bt.p(i, s) : i + ":" + s + ";"));
    }
    return n + (t && l ? t + "{" + l + "}" : l) + r;
  },
  wt = {},
  Qc = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Qc(e[n]);
      return t;
    }
    return e;
  },
  km = (e, t, n, r, l) => {
    let i = Qc(e),
      s =
        wt[i] ||
        (wt[i] = ((a) => {
          let f = 0,
            m = 11;
          for (; f < a.length; ) m = (101 * m + a.charCodeAt(f++)) >>> 0;
          return "go" + m;
        })(i));
    if (!wt[s]) {
      let a =
        i !== e
          ? e
          : ((f) => {
              let m,
                u,
                c = [{}];
              for (; (m = Fm.exec(f.replace(Mm, ""))); )
                m[4]
                  ? c.shift()
                  : m[3]
                  ? ((u = m[3].replace(Ua, " ").trim()),
                    c.unshift((c[0][u] = c[0][u] || {})))
                  : (c[0][m[1]] = m[2].replace(Ua, " ").trim());
              return c[0];
            })(e);
      wt[s] = Bt(l ? { ["@keyframes " + s]: a } : a, n ? "" : "." + s);
    }
    let o = n && wt.g ? wt.g : null;
    return (
      n && (wt.g = wt[s]),
      ((a, f, m, u) => {
        u
          ? (f.data = f.data.replace(u, a))
          : f.data.indexOf(a) === -1 && (f.data = m ? a + f.data : f.data + a);
      })(wt[s], t, r, o),
      s
    );
  },
  Lm = (e, t, n) =>
    e.reduce((r, l, i) => {
      let s = t[i];
      if (s && s.call) {
        let o = s(n),
          a = (o && o.props && o.props.className) || (/^go/.test(o) && o);
        s = a
          ? "." + a
          : o && typeof o == "object"
          ? o.props
            ? ""
            : Bt(o, "")
          : o === !1
          ? ""
          : o;
      }
      return r + l + (s ?? "");
    }, "");
function ii(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return km(
    n.unshift
      ? n.raw
        ? Lm(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {})
      : n,
    xm(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Yc, Ro, Oo;
ii.bind({ g: 1 });
let kt = ii.bind({ k: 1 });
function Um(e, t, n, r) {
  (Bt.p = t), (Yc = e), (Ro = n), (Oo = r);
}
function en(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function l(i, s) {
      let o = Object.assign({}, i),
        a = o.className || l.className;
      (n.p = Object.assign({ theme: Ro && Ro() }, o)),
        (n.o = / *go\d+/.test(a)),
        (o.className = ii.apply(n, r) + (a ? " " + a : "")),
        t && (o.ref = s);
      let f = e;
      return (
        e[0] && ((f = o.as || e), delete o.as), Oo && f[0] && Oo(o), Yc(f, o)
      );
    }
    return t ? t(l) : l;
  };
}
var Dm = (e) => typeof e == "function",
  Wl = (e, t) => (Dm(e) ? e(t) : e),
  Tm = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Xc = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Am = 20,
  Zc = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Am) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((i) =>
            i.id === t.toast.id ? { ...i, ...t.toast } : i
          ),
        };
      case 2:
        let { toast: n } = t;
        return Zc(e, {
          type: e.toasts.find((i) => i.id === n.id) ? 1 : 0,
          toast: n,
        });
      case 3:
        let { toastId: r } = t;
        return {
          ...e,
          toasts: e.toasts.map((i) =>
            i.id === r || r === void 0
              ? { ...i, dismissed: !0, visible: !1 }
              : i
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let l = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + l,
          })),
        };
    }
  },
  gl = [],
  sn = { toasts: [], pausedAt: void 0 },
  gn = (e) => {
    (sn = Zc(sn, e)),
      gl.forEach((t) => {
        t(sn);
      });
  },
  Im = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Bm = (e = {}) => {
    let [t, n] = H.exports.useState(sn),
      r = H.exports.useRef(sn);
    H.exports.useEffect(
      () => (
        r.current !== sn && n(sn),
        gl.push(n),
        () => {
          let i = gl.indexOf(n);
          i > -1 && gl.splice(i, 1);
        }
      ),
      []
    );
    let l = t.toasts.map((i) => {
      var s, o, a;
      return {
        ...e,
        ...e[i.type],
        ...i,
        removeDelay:
          i.removeDelay ||
          ((s = e[i.type]) == null ? void 0 : s.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          i.duration ||
          ((o = e[i.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          Im[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: l };
  },
  $m = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Tm(),
  }),
  zr = (e) => (t, n) => {
    let r = $m(t, e, n);
    return gn({ type: 2, toast: r }), r.id;
  },
  Ue = (e, t) => zr("blank")(e, t);
Ue.error = zr("error");
Ue.success = zr("success");
Ue.loading = zr("loading");
Ue.custom = zr("custom");
Ue.dismiss = (e) => {
  gn({ type: 3, toastId: e });
};
Ue.remove = (e) => gn({ type: 4, toastId: e });
Ue.promise = (e, t, n) => {
  let r = Ue.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((l) => {
        let i = t.success ? Wl(t.success, l) : void 0;
        return (
          i
            ? Ue.success(i, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : Ue.dismiss(r),
          l
        );
      })
      .catch((l) => {
        let i = t.error ? Wl(t.error, l) : void 0;
        i
          ? Ue.error(i, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : Ue.dismiss(r);
      }),
    e
  );
};
var zm = (e, t) => {
    gn({ type: 1, toast: { id: e, height: t } });
  },
  jm = () => {
    gn({ type: 5, time: Date.now() });
  },
  gr = new Map(),
  Wm = 1e3,
  Km = (e, t = Wm) => {
    if (gr.has(e)) return;
    let n = setTimeout(() => {
      gr.delete(e), gn({ type: 4, toastId: e });
    }, t);
    gr.set(e, n);
  },
  Vm = (e) => {
    let { toasts: t, pausedAt: n } = Bm(e);
    H.exports.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        s = t.map((o) => {
          if (o.duration === 1 / 0) return;
          let a = (o.duration || 0) + o.pauseDuration - (i - o.createdAt);
          if (a < 0) {
            o.visible && Ue.dismiss(o.id);
            return;
          }
          return setTimeout(() => Ue.dismiss(o.id), a);
        });
      return () => {
        s.forEach((o) => o && clearTimeout(o));
      };
    }, [t, n]);
    let r = H.exports.useCallback(() => {
        n && gn({ type: 6, time: Date.now() });
      }, [n]),
      l = H.exports.useCallback(
        (i, s) => {
          let {
              reverseOrder: o = !1,
              gutter: a = 8,
              defaultPosition: f,
            } = s || {},
            m = t.filter(
              (h) => (h.position || f) === (i.position || f) && h.height
            ),
            u = m.findIndex((h) => h.id === i.id),
            c = m.filter((h, p) => p < u && h.visible).length;
          return m
            .filter((h) => h.visible)
            .slice(...(o ? [c + 1] : [0, c]))
            .reduce((h, p) => h + (p.height || 0) + a, 0);
        },
        [t]
      );
    return (
      H.exports.useEffect(() => {
        t.forEach((i) => {
          if (i.dismissed) Km(i.id, i.removeDelay);
          else {
            let s = gr.get(i.id);
            s && (clearTimeout(s), gr.delete(i.id));
          }
        });
      }, [t]),
      {
        toasts: t,
        handlers: {
          updateHeight: zm,
          startPause: jm,
          endPause: r,
          calculateOffset: l,
        },
      }
    );
  },
  Hm = kt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  bm = kt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Qm = kt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Ym = en("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Hm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${bm} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qm} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Xm = kt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Zm = en("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Xm} 1s linear infinite;
`,
  Gm = kt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Jm = kt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  qm = en("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Gm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Jm} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  ep = en("div")`
  position: absolute;
`,
  tp = en("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  np = kt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  rp = en("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${np} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  lp = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? H.exports.createElement(rp, null, t)
        : t
      : n === "blank"
      ? null
      : H.exports.createElement(
          tp,
          null,
          H.exports.createElement(Zm, { ...r }),
          n !== "loading" &&
            H.exports.createElement(
              ep,
              null,
              n === "error"
                ? H.exports.createElement(Ym, { ...r })
                : H.exports.createElement(qm, { ...r })
            )
        );
  },
  ip = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  op = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  sp = "0%{opacity:0;} 100%{opacity:1;}",
  ap = "0%{opacity:1;} 100%{opacity:0;}",
  up = en("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  cp = en("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  fp = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, l] = Xc() ? [sp, ap] : [ip(n), op(n)];
    return {
      animation: t
        ? `${kt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${kt(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  dp = H.exports.memo(({ toast: e, position: t, style: n, children: r }) => {
    let l = e.height
        ? fp(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = H.exports.createElement(lp, { toast: e }),
      s = H.exports.createElement(cp, { ...e.ariaProps }, Wl(e.message, e));
    return H.exports.createElement(
      up,
      { className: e.className, style: { ...l, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: s })
        : H.exports.createElement(H.exports.Fragment, null, i, s)
    );
  });
Um(H.exports.createElement);
var mp = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: l,
  }) => {
    let i = H.exports.useCallback(
      (s) => {
        if (s) {
          let o = () => {
            let a = s.getBoundingClientRect().height;
            r(e, a);
          };
          o(),
            new MutationObserver(o).observe(s, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return H.exports.createElement(
      "div",
      { ref: i, className: t, style: n },
      l
    );
  },
  pp = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      l = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Xc() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...l,
    };
  },
  hp = ii`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  ll = 16,
  vp = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: l,
    containerStyle: i,
    containerClassName: s,
  }) => {
    let { toasts: o, handlers: a } = Vm(n);
    return H.exports.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: ll,
          left: ll,
          right: ll,
          bottom: ll,
          pointerEvents: "none",
          ...i,
        },
        className: s,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause,
      },
      o.map((f) => {
        let m = f.position || t,
          u = a.calculateOffset(f, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          c = pp(m, u);
        return H.exports.createElement(
          mp,
          {
            id: f.id,
            key: f.id,
            onHeightUpdate: a.updateHeight,
            className: f.visible ? hp : "",
            style: c,
          },
          f.type === "custom"
            ? Wl(f.message, f)
            : l
            ? l(f)
            : H.exports.createElement(dp, { toast: f, position: m })
        );
      })
    );
  },
  Gc = Ue;
function gp(e) {
  let [t, n] = H.exports.useState(0);
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
            console.log("Invalid Color to Side Conversion. Default side used"),
              Gc.error("Invalid Color to Side Conversion. Default side used");
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
      c = Rm(u).split(" "),
      h = c
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
                  d(_n, { side: e.colors.front }),
                  d("input", {
                    name: "front",
                    type: "text",
                    className: "color__input",
                    placeholder: "ggggggggg",
                    maxLength: 9,
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
                  d(_n, { side: e.colors.right }),
                  d("input", {
                    name: "right",
                    type: "text",
                    className: "color__input",
                    placeholder: "rrrrrrrrr",
                    maxLength: 9,
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
                  d(_n, { side: e.colors.upper }),
                  d("input", {
                    name: "upper",
                    type: "text",
                    className: "color__input",
                    placeholder: "wwwwwwwww",
                    maxLength: 9,
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
                  d(_n, { side: e.colors.down }),
                  d("input", {
                    name: "down",
                    type: "text",
                    className: "color__input",
                    placeholder: "yyyyyyyyy",
                    maxLength: 9,
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
                  d(_n, { side: e.colors.left }),
                  d("input", {
                    name: "left",
                    type: "text",
                    className: "color__input",
                    placeholder: "ooooooooo",
                    maxLength: 9,
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
                  d(_n, { side: e.colors.back }),
                  d("input", {
                    name: "back",
                    type: "text",
                    className: "color__input",
                    placeholder: "bbbbbbbbb",
                    maxLength: 9,
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
const yp = "./assets/cube_position-e3d5a86a.png",
  _p = "./assets/3D_axis-6095f3c2.png";
function Pp(e) {
  return T("div", {
    className: "position__container flex__center--col",
    children: [
      d("div", {
        className: "position__heading",
        style: { marginTop: -50, fontSize: 30 },
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
          src: yp,
          alt: "Rubiks Cube Position Set",
          className: "cube__pos--pic",
        }),
      }),
      d("img", { src: _p, alt: "3D Axis", className: "position__axis" }),
      d("button", {
        className: "pos__btn",
        onClick: e.handleClick,
        children: "Okay",
      }),
    ],
  });
}
var Jc = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(H.exports);
  })(typeof self < "u" ? self : Da, function (n) {
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
            return Pt;
          });
        var s,
          o,
          a = i(0),
          f = i.n(a),
          m = i(1),
          u = i.n(m);
        function c(E, F) {
          return E + Math.random() * (F - E);
        }
        function h(E, F) {
          for (var U = 0; U < F.length; U++) {
            var x = F[U];
            (x.enumerable = x.enumerable || !1),
              (x.configurable = !0),
              "value" in x && (x.writable = !0),
              Object.defineProperty(E, x.key, x);
          }
        }
        function p(E, F, U) {
          return (
            F in E
              ? Object.defineProperty(E, F, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[F] = U),
            E
          );
        }
        (function (E) {
          (E[(E.Circle = 0)] = "Circle"),
            (E[(E.Square = 1)] = "Square"),
            (E[(E.Strip = 2)] = "Strip");
        })(s || (s = {})),
          (function (E) {
            (E[(E.Positive = 1)] = "Positive"),
              (E[(E.Negative = -1)] = "Negative");
          })(o || (o = {}));
        var _ = (function () {
          function E(x, G, B, V) {
            (function (R, N) {
              if (!(R instanceof N))
                throw new TypeError("Cannot call a class as a function");
            })(this, E),
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
            var te,
              le,
              J = this.getOptions(),
              be = J.colors,
              ke = J.initialVelocityX,
              Ie = J.initialVelocityY;
            (this.context = x),
              (this.x = B),
              (this.y = V),
              (this.w = c(5, 20)),
              (this.h = c(5, 20)),
              (this.radius = c(5, 10)),
              (this.vx =
                typeof ke == "number" ? c(-ke, ke) : c(ke.min, ke.max)),
              (this.vy = typeof Ie == "number" ? c(-Ie, 0) : c(Ie.min, Ie.max)),
              (this.shape =
                ((te = 0),
                (le = 2),
                Math.floor(te + Math.random() * (le - te + 1)))),
              (this.angle = (c(0, 360) * Math.PI) / 180),
              (this.angularSpin = c(-0.2, 0.2)),
              (this.color = be[Math.floor(Math.random() * be.length)]),
              (this.rotateY = c(0, 1)),
              (this.rotationDirection = c(0, 1) ? o.Positive : o.Negative);
          }
          var F, U;
          return (
            (F = E),
            (U = [
              {
                key: "update",
                value: function () {
                  var x = this.getOptions(),
                    G = x.gravity,
                    B = x.wind,
                    V = x.friction,
                    te = x.opacity,
                    le = x.drawShape;
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
                  var J = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += J),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = te),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    le && typeof le == "function")
                  )
                    le.call(this, this.context);
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
            ]) && h(F.prototype, U),
            E
          );
        })();
        function w(E, F, U) {
          return (
            F in E
              ? Object.defineProperty(E, F, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[F] = U),
            E
          );
        }
        var g = function E(F, U) {
          var x = this;
          (function (B, V) {
            if (!(B instanceof V))
              throw new TypeError("Cannot call a class as a function");
          })(this, E),
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
              x.particles.splice(B, 1);
            }),
            w(this, "getParticle", function () {
              var B = c(x.x, x.w + x.x),
                V = c(x.y, x.h + x.y);
              return new _(x.context, x.getOptions, B, V);
            }),
            w(this, "animate", function () {
              var B = x.canvas,
                V = x.context,
                te = x.particlesGenerated,
                le = x.lastNumberOfPieces,
                J = x.getOptions(),
                be = J.run,
                ke = J.recycle,
                Ie = J.numberOfPieces,
                R = J.debug,
                N = J.tweenFunction,
                z = J.tweenDuration;
              if (!be) return !1;
              var b = x.particles.length,
                ce = ke ? b : te,
                Be = Date.now();
              if (ce < Ie) {
                le !== Ie &&
                  ((x.tweenInitTime = Be), (x.lastNumberOfPieces = Ie));
                for (
                  var it = x.tweenInitTime,
                    $e = N(Be - it > z ? z : Math.max(0, Be - it), ce, Ie, z),
                    mt = Math.round($e - ce),
                    Yn = 0;
                  Yn < mt;
                  Yn++
                )
                  x.particles.push(x.getParticle());
                x.particlesGenerated += mt;
              }
              return (
                R &&
                  ((V.font = "12px sans-serif"),
                  (V.fillStyle = "#333"),
                  (V.textAlign = "right"),
                  V.fillText(
                    "Particles: ".concat(b),
                    B.width - 10,
                    B.height - 20
                  )),
                x.particles.forEach(function (Xn, Ns) {
                  Xn.update(),
                    (Xn.y > B.height ||
                      Xn.y < -100 ||
                      Xn.x > B.width + 100 ||
                      Xn.x < -100) &&
                      (ke && ce <= Ie
                        ? (x.particles[Ns] = x.getParticle())
                        : x.removeParticleAt(Ns));
                }),
                b > 0 || ce < Ie
              );
            }),
            (this.canvas = F);
          var G = this.canvas.getContext("2d");
          if (!G) throw new Error("Could not get canvas context");
          (this.context = G), (this.getOptions = U);
        };
        function v(E, F) {
          var U = Object.keys(E);
          if (Object.getOwnPropertySymbols) {
            var x = Object.getOwnPropertySymbols(E);
            F &&
              (x = x.filter(function (G) {
                return Object.getOwnPropertyDescriptor(E, G).enumerable;
              })),
              U.push.apply(U, x);
          }
          return U;
        }
        function y(E) {
          for (var F = 1; F < arguments.length; F++) {
            var U = arguments[F] != null ? arguments[F] : {};
            F % 2
              ? v(Object(U), !0).forEach(function (x) {
                  C(E, x, U[x]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(U))
              : v(Object(U)).forEach(function (x) {
                  Object.defineProperty(
                    E,
                    x,
                    Object.getOwnPropertyDescriptor(U, x)
                  );
                });
          }
          return E;
        }
        function P(E, F) {
          for (var U = 0; U < F.length; U++) {
            var x = F[U];
            (x.enumerable = x.enumerable || !1),
              (x.configurable = !0),
              "value" in x && (x.writable = !0),
              Object.defineProperty(E, x.key, x);
          }
        }
        function C(E, F, U) {
          return (
            F in E
              ? Object.defineProperty(E, F, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[F] = U),
            E
          );
        }
        var S = {
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
            function E(x, G) {
              var B = this;
              (function (te, le) {
                if (!(te instanceof le))
                  throw new TypeError("Cannot call a class as a function");
              })(this, E),
                C(this, "canvas", void 0),
                C(this, "context", void 0),
                C(this, "_options", void 0),
                C(this, "generator", void 0),
                C(this, "rafId", void 0),
                C(this, "setOptionsWithDefaults", function (te) {
                  var le = {
                    confettiSource: { x: 0, y: 0, w: B.canvas.width, h: 0 },
                  };
                  (B._options = y(y(y({}, le), S), te)),
                    Object.assign(B, te.confettiSource);
                }),
                C(this, "update", function () {
                  var te = B.options,
                    le = te.run,
                    J = te.onConfettiComplete,
                    be = B.canvas,
                    ke = B.context;
                  le &&
                    ((ke.fillStyle = "white"),
                    ke.clearRect(0, 0, be.width, be.height)),
                    B.generator.animate()
                      ? (B.rafId = requestAnimationFrame(B.update))
                      : (J &&
                          typeof J == "function" &&
                          B.generator.particlesGenerated > 0 &&
                          J.call(B, B),
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
                (this.canvas = x);
              var V = this.canvas.getContext("2d");
              if (!V) throw new Error("Could not get canvas context");
              (this.context = V),
                (this.generator = new g(this.canvas, function () {
                  return B.options;
                })),
                (this.options = G),
                this.update();
            }
            var F, U;
            return (
              (F = E),
              (U = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (x) {
                    var G = this._options && this._options.run,
                      B = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(x),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource
                        ),
                        typeof x.recycle == "boolean" &&
                          x.recycle &&
                          B === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof x.run == "boolean" &&
                        x.run &&
                        G === !1 &&
                        this.update();
                  },
                },
              ]) && P(F.prototype, U),
              E
            );
          })();
        function A(E) {
          return (
            (function (F) {
              if (Array.isArray(F)) return ne(F);
            })(E) ||
            (function (F) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(F))
                return Array.from(F);
            })(E) ||
            se(E) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function k(E) {
          return (k =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (F) {
                  return typeof F;
                }
              : function (F) {
                  return F &&
                    typeof Symbol == "function" &&
                    F.constructor === Symbol &&
                    F !== Symbol.prototype
                    ? "symbol"
                    : typeof F;
                })(E);
        }
        function O() {
          return (O =
            Object.assign ||
            function (E) {
              for (var F = 1; F < arguments.length; F++) {
                var U = arguments[F];
                for (var x in U)
                  Object.prototype.hasOwnProperty.call(U, x) && (E[x] = U[x]);
              }
              return E;
            }).apply(this, arguments);
        }
        function I(E, F) {
          var U = Object.keys(E);
          if (Object.getOwnPropertySymbols) {
            var x = Object.getOwnPropertySymbols(E);
            F &&
              (x = x.filter(function (G) {
                return Object.getOwnPropertyDescriptor(E, G).enumerable;
              })),
              U.push.apply(U, x);
          }
          return U;
        }
        function K(E) {
          for (var F = 1; F < arguments.length; F++) {
            var U = arguments[F] != null ? arguments[F] : {};
            F % 2
              ? I(Object(U), !0).forEach(function (x) {
                  Ce(E, x, U[x]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(U))
              : I(Object(U)).forEach(function (x) {
                  Object.defineProperty(
                    E,
                    x,
                    Object.getOwnPropertyDescriptor(U, x)
                  );
                });
          }
          return E;
        }
        function Y(E, F) {
          return (
            (function (U) {
              if (Array.isArray(U)) return U;
            })(E) ||
            (function (U, x) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(U)))) {
                var G = [],
                  B = !0,
                  V = !1,
                  te = void 0;
                try {
                  for (
                    var le, J = U[Symbol.iterator]();
                    !(B = (le = J.next()).done) &&
                    (G.push(le.value), !x || G.length !== x);
                    B = !0
                  );
                } catch (be) {
                  (V = !0), (te = be);
                } finally {
                  try {
                    B || J.return == null || J.return();
                  } finally {
                    if (V) throw te;
                  }
                }
                return G;
              }
            })(E, F) ||
            se(E, F) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function se(E, F) {
          if (E) {
            if (typeof E == "string") return ne(E, F);
            var U = Object.prototype.toString.call(E).slice(8, -1);
            return (
              U === "Object" && E.constructor && (U = E.constructor.name),
              U === "Map" || U === "Set"
                ? Array.from(E)
                : U === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)
                ? ne(E, F)
                : void 0
            );
          }
        }
        function ne(E, F) {
          (F == null || F > E.length) && (F = E.length);
          for (var U = 0, x = new Array(F); U < F; U++) x[U] = E[U];
          return x;
        }
        function ae(E, F) {
          if (!(E instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }
        function ve(E, F) {
          for (var U = 0; U < F.length; U++) {
            var x = F[U];
            (x.enumerable = x.enumerable || !1),
              (x.configurable = !0),
              "value" in x && (x.writable = !0),
              Object.defineProperty(E, x.key, x);
          }
        }
        function D(E, F) {
          return (D =
            Object.setPrototypeOf ||
            function (U, x) {
              return (U.__proto__ = x), U;
            })(E, F);
        }
        function j(E) {
          var F = (function () {
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
              x = q(E);
            if (F) {
              var G = q(this).constructor;
              U = Reflect.construct(x, arguments, G);
            } else U = x.apply(this, arguments);
            return W(this, U);
          };
        }
        function W(E, F) {
          return !F || (k(F) !== "object" && typeof F != "function") ? Z(E) : F;
        }
        function Z(E) {
          if (E === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return E;
        }
        function q(E) {
          return (q = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (F) {
                return F.__proto__ || Object.getPrototypeOf(F);
              })(E);
        }
        function Ce(E, F, U) {
          return (
            F in E
              ? Object.defineProperty(E, F, {
                  value: U,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[F] = U),
            E
          );
        }
        var Re = f.a.createRef(),
          _t = (function (E) {
            (function (B, V) {
              if (typeof V != "function" && V !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (B.prototype = Object.create(V && V.prototype, {
                constructor: { value: B, writable: !0, configurable: !0 },
              })),
                V && D(B, V);
            })(G, E);
            var F,
              U,
              x = j(G);
            function G(B) {
              var V;
              ae(this, G);
              for (
                var te = arguments.length,
                  le = new Array(te > 1 ? te - 1 : 0),
                  J = 1;
                J < te;
                J++
              )
                le[J - 1] = arguments[J];
              return (
                Ce(
                  Z((V = x.call.apply(x, [this, B].concat(le)))),
                  "canvas",
                  f.a.createRef()
                ),
                Ce(Z(V), "confetti", void 0),
                (V.canvas = B.canvasRef || Re),
                V
              );
            }
            return (
              (F = G),
              (U = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var B = He(this.props)[0];
                      this.confetti = new M(this.canvas.current, B);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var B = He(this.props)[0];
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
                    var B = Y(He(this.props), 2),
                      V = B[0],
                      te = B[1],
                      le = K(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        te.style
                      );
                    return f.a.createElement(
                      "canvas",
                      O(
                        { width: V.width, height: V.height, ref: this.canvas },
                        te,
                        { style: le }
                      )
                    );
                  },
                },
              ]) && ve(F.prototype, U),
              G
            );
          })(a.Component);
        function He(E) {
          var F = {},
            U = {},
            x = [].concat(A(Object.keys(S)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            G = ["canvasRef"];
          for (var B in E) {
            var V = E[B];
            x.includes(B)
              ? (F[B] = V)
              : G.includes(B)
              ? (G[B] = V)
              : (U[B] = V);
          }
          return [F, U, {}];
        }
        Ce(_t, "defaultProps", K({}, S)),
          Ce(_t, "displayName", "ReactConfetti");
        var Pt = f.a.forwardRef(function (E, F) {
          return f.a.createElement(_t, O({ canvasRef: F }, E));
        });
        l.default = Pt;
      },
    ]).default;
  });
})(Jc);
const wp = Ta(Jc.exports);
function Cp(e) {
  let t = 500,
    n = 0,
    r = 0,
    l = 0,
    i = "",
    [s, o] = H.exports.useState(!1),
    [a, f] = H.exports.useState(0),
    [m, u] = H.exports.useState("Syncing the cube state with yours...🪄"),
    c = { front: 1, right: 4, upper: 2, down: 3, left: 5, back: 0 };
  return (
    H.exports.useEffect(() => {
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
      var S = ["blue", "green", "white", "yellow", "red", "orange"],
        M = document.getElementsByClassName("piece");
      function A(R, N) {
        return (
          ([2, 4, 3, 5][N % 4 | 0] +
            (R % 2) * (((N | 0) % 4) * 2 + 3) +
            2 * ((R / 2) | 0)) %
          6
        );
      }
      function k(R) {
        return String.fromCharCode("X".charCodeAt(0) + R / 2);
      }
      function O() {
        function R(ce) {
          return (
            (N = N + (1 << ce)),
            M[b].children[ce]
              .appendChild(document.createElement("div"))
              .setAttribute("class", "sticker " + S[ce]),
            "translate" + k(ce) + "(" + ((ce % 2) * 4 - 2) + "em)"
          );
        }
        for (var N, z, b = 0; (N = 0), b < 26; b++)
          (z = A(b, b % 18)),
            (M[b].style.transform =
              "rotateX(0deg)" +
              R(b % 6) +
              (b > 5 ? R(z) + (b > 17 ? R(A(z, z + 2)) : "") : "")),
            M[b].setAttribute("id", "piece" + N);
      }
      function I(R, N, z) {
        return document.getElementById(
          "piece" + ((1 << R) + (1 << A(R, N)) + (1 << A(R, N + 1)) * z)
        );
      }
      function K(R, N) {
        for (var z = 0; z < 6 * N; z++)
          for (
            var b = I(R, z / 2, z % 2), ce = I(R, z / 2 + 1, z % 2), Be = 0;
            Be < 5;
            Be++
          ) {
            var it = b.children[Be < 4 ? A(R, Be) : R].firstChild,
              $e = ce.children[Be < 4 ? A(R, Be + 1) : R].firstChild,
              mt = it ? it.className : "";
            mt && ((it.className = $e.className), ($e.className = mt));
          }
      }
      function Y(R, N, z, b = !0) {
        var ce = 0.3 * ((R % 2) * 2 - 1) * (2 * N - 1),
          Be = Array(9)
            .fill(M[R])
            .map(function (it, $e) {
              return $e ? I(R, $e / 2, $e % 2) : it;
            });
        b
          ? (function it() {
              var $e = Date.now() - z,
                mt = "rotate" + k(R) + "(" + ce * $e * ($e < 300) + "deg)";
              if (
                (Be.forEach(function (Yn) {
                  Yn.style.transform = Yn.style.transform.replace(
                    /rotate.\(\S+\)/,
                    mt
                  );
                }),
                $e >= 300)
              )
                return K(R, 3 - 2 * N);
              requestAnimationFrame(it);
            })()
          : (function () {
              var $e = "rotate" + k(R) + "(" + 300;
              Be.forEach(function (mt) {
                mt.style.transform = mt.style.transform.replace(
                  /rotate.\(\S+\)/,
                  $e
                );
              }),
                K(R, 3 - 2 * N);
            })();
      }
      function se(R, N) {
        Y(c.front, R, Date.now(), N);
      }
      function ne(R, N) {
        Y(c.right, R, Date.now(), N);
      }
      function ae(R, N) {
        Y(c.upper, R, Date.now(), N);
      }
      function ve(R, N) {
        Y(c.down, R, Date.now(), N);
      }
      function D(R, N) {
        Y(c.left, R, Date.now(), N);
      }
      function j(R, N) {
        Y(c.back, R, Date.now(), N);
      }
      var W = pivot.style.transform.match(/-?\d+\.?\d*/g).map(Number);
      let Z = 0;
      function q(R, N = !0) {
        R ? (Z = Z + 90) : (Z = Z - 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg) rotate3d(1,0,0,${Z}deg)`);
        let z = c;
        R
          ? (c = {
              ...z,
              right: z.upper,
              upper: z.left,
              down: z.right,
              left: z.down,
            })
          : (c = {
              ...z,
              right: z.down,
              upper: z.right,
              down: z.left,
              left: z.upper,
            });
      }
      function Ce(R, N = !0) {
        R ? (W[1] = W[1] - 90) : (W[1] = W[1] + 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg)`);
        let z = c;
        R
          ? (c = {
              ...z,
              front: z.right,
              right: z.back,
              left: z.front,
              back: z.left,
            })
          : (c = {
              ...z,
              front: z.left,
              right: z.front,
              left: z.back,
              back: z.right,
            });
      }
      function Re(R, N = !0) {
        R ? (W[2] = W[2] - 90) : (W[2] = W[2] + 90),
          N
            ? (pivot.style.transition = "all 0.5s ease-in-out")
            : (pivot.style.transition = "all 0s ease-in-out"),
          (pivot.style.transform = `rotateX(${W[0]}deg) rotateY(${W[1]}deg) rotateZ(${W[2]}deg)`);
        let z = c;
        R
          ? (c = {
              ...z,
              front: z.down,
              upper: z.front,
              down: z.back,
              back: z.upper,
            })
          : (c = {
              ...z,
              front: z.upper,
              upper: z.back,
              down: z.front,
              back: z.down,
            });
      }
      function _t(R, N) {
        N && n++,
          j(R, N),
          N
            ? setTimeout(() => {
                q(R), n--;
              }, t)
            : q(R, N);
      }
      function He(R, N) {
        N && n++,
          D(R, N),
          N
            ? setTimeout(() => {
                Re(R), n--;
              }, t)
            : Re(R, N);
      }
      function Pt(R, N) {
        N && n++,
          ve(R, N),
          N
            ? setTimeout(() => {
                Ce(R), n--;
              }, t)
            : Ce(R, N);
      }
      function E(R, N) {
        N && n++,
          ae(R, N),
          N
            ? setTimeout(() => {
                Ce(!R), n--;
              }, t)
            : Ce(!R, N);
      }
      function F(R, N) {
        N && n++,
          ne(R, N),
          N
            ? setTimeout(() => {
                Re(!R), n--;
              }, t)
            : Re(!R, N);
      }
      function U(R, N) {
        N && n++,
          se(R, N),
          N
            ? setTimeout(() => {
                q(!R), n--;
              }, t)
            : q(!R, N);
      }
      function x(R, N) {
        N && (n += 2),
          ne(R, N),
          N
            ? setTimeout(() => {
                D(!R, N),
                  n--,
                  setTimeout(() => {
                    Re(!R), n--;
                  }, t);
              }, t)
            : (D(!R, N), Re(!R, N));
      }
      function G(R, N) {
        N && (n += 2),
          ae(R, N),
          N
            ? setTimeout(() => {
                ve(!R, N),
                  n--,
                  setTimeout(() => {
                    Ce(!R), n--;
                  }, t);
              }, t)
            : (ve(!R, N), Ce(!R, N));
      }
      function B(R, N) {
        N && (n += 2),
          se(!R, N),
          N
            ? setTimeout(() => {
                j(R, N),
                  n--,
                  setTimeout(() => {
                    q(R), n--;
                  }, t);
              }, t)
            : (j(R, N), q(R, N));
      }
      function V(R, N) {
        let z = R[0],
          b = R.includes("2") ? !0 : !R.includes("prime"),
          ce = function () {
            switch (z) {
              case "F":
                return se(b, N);
              case "R":
                return ne(b, N);
              case "U":
                return ae(b, N);
              case "D":
                return ve(b, N);
              case "L":
                return D(b, N);
              case "B":
                return j(b, N);
              case "f":
                return _t(b, N);
              case "r":
                return He(b, N);
              case "u":
                return Pt(b, N);
              case "d":
                return E(b, N);
              case "l":
                return F(b, N);
              case "b":
                return U(b, N);
              case "M":
                return x(b, N);
              case "E":
                return G(b, N);
              case "S":
                return B(b, N);
              default:
                console.log("Move Function Conversion Error");
            }
          };
        ce(),
          R.includes("2") &&
            (N
              ? (n++,
                setTimeout(() => {
                  ce(), n--;
                }, t))
              : ce());
      }
      O(),
        (window.onerror = function (R, N, z, b, ce) {
          if (
            ce.name === "RangeError" &&
            ce.message === "Maximum call stack size exceeded"
          )
            console.log("Solver Message: Maximum call stack size exceeded"),
              w.classList.add("active"),
              g.classList.add("active");
          else throw ce;
        });
      function te() {
        p.classList.remove("active"),
          _.classList.remove("active"),
          y.setAttribute("disabled", ""),
          v.setAttribute("disabled", ""),
          P.setAttribute("disabled", "");
        let R = !1;
        setTimeout(() => {
          for (r = 0; r <= e.movesAlgo.reverseAlgo.length - 1; r++)
            V(e.movesAlgo.reverseAlgo[r], R);
          p.classList.add("active"),
            P.removeAttribute("disabled"),
            u("Orient your cube as shown here to solve.");
        }, 1e3);
      }
      te();
      function le() {
        (r = 0),
          g.classList.remove("active"),
          w.classList.remove("active"),
          te(),
          O();
      }
      document.ondragstart = function () {
        return !1;
      };
      function J(R = !1) {
        n++,
          p.classList.remove("active"),
          v.removeAttribute("disabled"),
          _.classList.add("active"),
          console.log("Clicked Next Button");
        let N = !0;
        setTimeout(() => {
          l < e.movesAlgo.forwardAlgo.length
            ? (R || f((z) => z + 1),
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
      function be() {
        let R = !1,
          N = !0,
          z = e.movesAlgo.reverseAlgo.length - l;
        V(e.movesAlgo.reverseAlgo[z], R), l--, J(N);
      }
      function ke() {
        let R = !1,
          N = !1;
        P.removeAttribute("disabled"),
          C.classList.remove("active"),
          h.classList.remove("active");
        let z = e.movesAlgo.reverseAlgo.length - l;
        console.log(l, z),
          V(e.movesAlgo.reverseAlgo[z], R),
          z++,
          V(e.movesAlgo.reverseAlgo[z], R),
          (l -= 2),
          o(!1),
          u("Orient your cube as shown here to solve."),
          f((b) => b - 2),
          J(N);
      }
      function Ie(R) {
        let N = R.key;
        console.log(N),
          N == "ArrowLeft" && !y.hasAttribute("disabled")
            ? ke()
            : N == "ArrowDown" && !v.hasAttribute("disabled")
            ? be()
            : N == "ArrowRight" && !P.hasAttribute("disabled") && J(!1);
      }
      return (
        g.addEventListener("click", le),
        y.addEventListener("click", ke),
        P.addEventListener("click", (R) => J(!1)),
        v.addEventListener("click", be),
        C.addEventListener("click", (R) => e.handleReplay()),
        window.addEventListener("keydown", Ie),
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
            g.removeEventListener("click", le),
            y.removeEventListener("click", ke),
            P.removeEventListener("click", (R) => J(!1)),
            v.removeEventListener("click", be),
            C.removeEventListener("click", (R) => e.handleReplay()),
            window.removeEventListener("keydown", Ie);
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
        s && d(wp, {}),
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
function Np() {
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
    [s, o] = H.exports.useState({}),
    [a, f] = H.exports.useState({});
  function m() {
    o({ front: e, right: t, upper: n, down: r, left: l, back: i }),
      f({ forwardAlgo: [], reverseAlgo: [] });
  }
  H.exports.useEffect(() => {
    m();
  }, []);
  let [u, c] = H.exports.useState([!0, !1, !1, !1, !1]);
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
      S = P.target.value;
    if (S.length <= 9) {
      let M = [];
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
        if (k < S.length)
          switch (S[k]) {
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
    } else Gc.error("Input string is too long");
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
      S = P.reverseMoves;
    f({ forwardAlgo: C, reverseAlgo: S });
  }
  return d("div", {
    className: "App",
    children: T("div", {
      className: "app__container",
      children: [
        u[0] && d(Em, { handleClick: h }),
        u[1] && d(Pp, { handleClick: p }),
        u[2] &&
          d(gp, {
            handleClick: _,
            handleChange: w,
            colors: s,
            setAlgo: (P) => y(P),
            cubeColorState: s,
          }),
        u[3] && d(Cp, { handleClick: g, movesAlgo: a, handleReplay: v }),
        d(vp, {}),
      ],
    }),
  });
}
Li.createRoot(document.getElementById("root")).render(d(Np, {}));
