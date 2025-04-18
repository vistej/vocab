var of = (t) => {
  throw TypeError(t);
};
var Qr = (t, e, n) => e.has(t) || of('Cannot ' + n);
var v = (t, e, n) => (
    Qr(t, e, 'read from private field'), n ? n.call(t) : e.get(t)
  ),
  z = (t, e, n) =>
    e.has(t)
      ? of('Cannot add the same private member more than once')
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, n),
  U = (t, e, n, l) => (
    Qr(t, e, 'write to private field'), l ? l.call(t, n) : e.set(t, n), n
  ),
  X = (t, e, n) => (Qr(t, e, 'access private method'), n);
var $u = (t, e, n, l) => ({
  set _(a) {
    U(t, e, a, n);
  },
  get _() {
    return v(t, e, l);
  },
});
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) l(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === 'childList')
        for (const i of u.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && l(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : a.crossOrigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function l(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = n(a);
    fetch(a.href, u);
  }
})();
function Ad(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
var xd = { exports: {} },
  hr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv = Symbol.for('react.transitional.element'),
  Sv = Symbol.for('react.fragment');
function Dd(t, e, n) {
  var l = null;
  if (
    (n !== void 0 && (l = '' + n),
    e.key !== void 0 && (l = '' + e.key),
    'key' in e)
  ) {
    n = {};
    for (var a in e) a !== 'key' && (n[a] = e[a]);
  } else n = e;
  return (
    (e = n.ref),
    { $$typeof: bv, type: t, key: l, ref: e !== void 0 ? e : null, props: n }
  );
}
hr.Fragment = Sv;
hr.jsx = Dd;
hr.jsxs = Dd;
xd.exports = hr;
var M = xd.exports,
  wd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kc = Symbol.for('react.transitional.element'),
  Ev = Symbol.for('react.portal'),
  Tv = Symbol.for('react.fragment'),
  Ov = Symbol.for('react.strict_mode'),
  Rv = Symbol.for('react.profiler'),
  Av = Symbol.for('react.consumer'),
  xv = Symbol.for('react.context'),
  Dv = Symbol.for('react.forward_ref'),
  wv = Symbol.for('react.suspense'),
  Mv = Symbol.for('react.memo'),
  Md = Symbol.for('react.lazy'),
  ff = Symbol.iterator;
function Cv(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (ff && t[ff]) || t['@@iterator']),
      typeof t == 'function' ? t : null);
}
var Cd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ud = Object.assign,
  _d = {};
function ya(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = _d),
    (this.updater = n || Cd);
}
ya.prototype.isReactComponent = {};
ya.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
ya.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function Nd() {}
Nd.prototype = ya.prototype;
function Jc(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = _d),
    (this.updater = n || Cd);
}
var kc = (Jc.prototype = new Nd());
kc.constructor = Jc;
Ud(kc, ya.prototype);
kc.isPureReactComponent = !0;
var hf = Array.isArray,
  at = { H: null, A: null, T: null, S: null, V: null },
  zd = Object.prototype.hasOwnProperty;
function Fc(t, e, n, l, a, u) {
  return (
    (n = u.ref),
    { $$typeof: Kc, type: t, key: e, ref: n !== void 0 ? n : null, props: u }
  );
}
function Uv(t, e) {
  return Fc(t.type, e, void 0, void 0, void 0, t.props);
}
function $c(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Kc;
}
function _v(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var df = /\/+/g;
function Yr(t, e) {
  return typeof t == 'object' && t !== null && t.key != null
    ? _v('' + t.key)
    : e.toString(36);
}
function mf() {}
function Nv(t) {
  switch (t.status) {
    case 'fulfilled':
      return t.value;
    case 'rejected':
      throw t.reason;
    default:
      switch (
        (typeof t.status == 'string'
          ? t.then(mf, mf)
          : ((t.status = 'pending'),
            t.then(
              function (e) {
                t.status === 'pending' &&
                  ((t.status = 'fulfilled'), (t.value = e));
              },
              function (e) {
                t.status === 'pending' &&
                  ((t.status = 'rejected'), (t.reason = e));
              }
            )),
        t.status)
      ) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw t.reason;
      }
  }
  throw t;
}
function bl(t, e, n, l, a) {
  var u = typeof t;
  (u === 'undefined' || u === 'boolean') && (t = null);
  var i = !1;
  if (t === null) i = !0;
  else
    switch (u) {
      case 'bigint':
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (t.$$typeof) {
          case Kc:
          case Ev:
            i = !0;
            break;
          case Md:
            return (i = t._init), bl(i(t._payload), e, n, l, a);
        }
    }
  if (i)
    return (
      (a = a(t)),
      (i = l === '' ? '.' + Yr(t, 0) : l),
      hf(a)
        ? ((n = ''),
          i != null && (n = i.replace(df, '$&/') + '/'),
          bl(a, e, n, '', function (c) {
            return c;
          }))
        : a != null &&
          ($c(a) &&
            (a = Uv(
              a,
              n +
                (a.key == null || (t && t.key === a.key)
                  ? ''
                  : ('' + a.key).replace(df, '$&/') + '/') +
                i
            )),
          e.push(a)),
      1
    );
  i = 0;
  var r = l === '' ? '.' : l + ':';
  if (hf(t))
    for (var s = 0; s < t.length; s++)
      (l = t[s]), (u = r + Yr(l, s)), (i += bl(l, e, n, u, a));
  else if (((s = Cv(t)), typeof s == 'function'))
    for (t = s.call(t), s = 0; !(l = t.next()).done; )
      (l = l.value), (u = r + Yr(l, s++)), (i += bl(l, e, n, u, a));
  else if (u === 'object') {
    if (typeof t.then == 'function') return bl(Nv(t), e, n, l, a);
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  }
  return i;
}
function Wu(t, e, n) {
  if (t == null) return t;
  var l = [],
    a = 0;
  return (
    bl(t, l, '', '', function (u) {
      return e.call(n, u, a++);
    }),
    l
  );
}
function zv(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var yf =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var e = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof t == 'object' && t !== null && typeof t.message == 'string'
                ? String(t.message)
                : String(t),
            error: t,
          });
          if (!window.dispatchEvent(e)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', t);
          return;
        }
        console.error(t);
      };
function jv() {}
B.Children = {
  map: Wu,
  forEach: function (t, e, n) {
    Wu(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Wu(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Wu(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!$c(t))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return t;
  },
};
B.Component = ya;
B.Fragment = Tv;
B.Profiler = Rv;
B.PureComponent = Jc;
B.StrictMode = Ov;
B.Suspense = wv;
B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = at;
B.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (t) {
    return at.H.useMemoCache(t);
  },
};
B.cache = function (t) {
  return function () {
    return t.apply(null, arguments);
  };
};
B.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'The argument must be a React element, but you passed ' + t + '.'
    );
  var l = Ud({}, t.props),
    a = t.key,
    u = void 0;
  if (e != null)
    for (i in (e.ref !== void 0 && (u = void 0),
    e.key !== void 0 && (a = '' + e.key),
    e))
      !zd.call(e, i) ||
        i === 'key' ||
        i === '__self' ||
        i === '__source' ||
        (i === 'ref' && e.ref === void 0) ||
        (l[i] = e[i]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var r = Array(i), s = 0; s < i; s++) r[s] = arguments[s + 2];
    l.children = r;
  }
  return Fc(t.type, a, void 0, void 0, u, l);
};
B.createContext = function (t) {
  return (
    (t = {
      $$typeof: xv,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (t.Provider = t),
    (t.Consumer = { $$typeof: Av, _context: t }),
    t
  );
};
B.createElement = function (t, e, n) {
  var l,
    a = {},
    u = null;
  if (e != null)
    for (l in (e.key !== void 0 && (u = '' + e.key), e))
      zd.call(e, l) &&
        l !== 'key' &&
        l !== '__self' &&
        l !== '__source' &&
        (a[l] = e[l]);
  var i = arguments.length - 2;
  if (i === 1) a.children = n;
  else if (1 < i) {
    for (var r = Array(i), s = 0; s < i; s++) r[s] = arguments[s + 2];
    a.children = r;
  }
  if (t && t.defaultProps)
    for (l in ((i = t.defaultProps), i)) a[l] === void 0 && (a[l] = i[l]);
  return Fc(t, u, void 0, void 0, null, a);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (t) {
  return { $$typeof: Dv, render: t };
};
B.isValidElement = $c;
B.lazy = function (t) {
  return { $$typeof: Md, _payload: { _status: -1, _result: t }, _init: zv };
};
B.memo = function (t, e) {
  return { $$typeof: Mv, type: t, compare: e === void 0 ? null : e };
};
B.startTransition = function (t) {
  var e = at.T,
    n = {};
  at.T = n;
  try {
    var l = t(),
      a = at.S;
    a !== null && a(n, l),
      typeof l == 'object' &&
        l !== null &&
        typeof l.then == 'function' &&
        l.then(jv, yf);
  } catch (u) {
    yf(u);
  } finally {
    at.T = e;
  }
};
B.unstable_useCacheRefresh = function () {
  return at.H.useCacheRefresh();
};
B.use = function (t) {
  return at.H.use(t);
};
B.useActionState = function (t, e, n) {
  return at.H.useActionState(t, e, n);
};
B.useCallback = function (t, e) {
  return at.H.useCallback(t, e);
};
B.useContext = function (t) {
  return at.H.useContext(t);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (t, e) {
  return at.H.useDeferredValue(t, e);
};
B.useEffect = function (t, e, n) {
  var l = at.H;
  if (typeof n == 'function')
    throw Error(
      'useEffect CRUD overload is not enabled in this build of React.'
    );
  return l.useEffect(t, e);
};
B.useId = function () {
  return at.H.useId();
};
B.useImperativeHandle = function (t, e, n) {
  return at.H.useImperativeHandle(t, e, n);
};
B.useInsertionEffect = function (t, e) {
  return at.H.useInsertionEffect(t, e);
};
B.useLayoutEffect = function (t, e) {
  return at.H.useLayoutEffect(t, e);
};
B.useMemo = function (t, e) {
  return at.H.useMemo(t, e);
};
B.useOptimistic = function (t, e) {
  return at.H.useOptimistic(t, e);
};
B.useReducer = function (t, e, n) {
  return at.H.useReducer(t, e, n);
};
B.useRef = function (t) {
  return at.H.useRef(t);
};
B.useState = function (t) {
  return at.H.useState(t);
};
B.useSyncExternalStore = function (t, e, n) {
  return at.H.useSyncExternalStore(t, e, n);
};
B.useTransition = function () {
  return at.H.useTransition();
};
B.version = '19.1.0';
wd.exports = B;
var O = wd.exports;
const Qn = Ad(O);
var jd = { exports: {} },
  dr = {},
  Hd = { exports: {} },
  Bd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(C, Q) {
    var L = C.length;
    C.push(Q);
    t: for (; 0 < L; ) {
      var ht = (L - 1) >>> 1,
        St = C[ht];
      if (0 < a(St, Q)) (C[ht] = Q), (C[L] = St), (L = ht);
      else break t;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function l(C) {
    if (C.length === 0) return null;
    var Q = C[0],
      L = C.pop();
    if (L !== Q) {
      C[0] = L;
      t: for (var ht = 0, St = C.length, Ju = St >>> 1; ht < Ju; ) {
        var ku = 2 * (ht + 1) - 1,
          Lr = C[ku],
          qn = ku + 1,
          Fu = C[qn];
        if (0 > a(Lr, L))
          qn < St && 0 > a(Fu, Lr)
            ? ((C[ht] = Fu), (C[qn] = L), (ht = qn))
            : ((C[ht] = Lr), (C[ku] = L), (ht = ku));
        else if (qn < St && 0 > a(Fu, L)) (C[ht] = Fu), (C[qn] = L), (ht = qn);
        else break t;
      }
    }
    return Q;
  }
  function a(C, Q) {
    var L = C.sortIndex - Q.sortIndex;
    return L !== 0 ? L : C.id - Q.id;
  }
  if (
    ((t.unstable_now = void 0),
    typeof performance == 'object' && typeof performance.now == 'function')
  ) {
    var u = performance;
    t.unstable_now = function () {
      return u.now();
    };
  } else {
    var i = Date,
      r = i.now();
    t.unstable_now = function () {
      return i.now() - r;
    };
  }
  var s = [],
    c = [],
    f = 1,
    o = null,
    h = 3,
    y = !1,
    b = !1,
    S = !1,
    g = !1,
    d = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  function E(C) {
    for (var Q = n(c); Q !== null; ) {
      if (Q.callback === null) l(c);
      else if (Q.startTime <= C)
        l(c), (Q.sortIndex = Q.expirationTime), e(s, Q);
      else break;
      Q = n(c);
    }
  }
  function R(C) {
    if (((S = !1), E(C), !b))
      if (n(s) !== null) (b = !0), D || ((D = !0), Mt());
      else {
        var Q = n(c);
        Q !== null && qr(R, Q.startTime - C);
      }
  }
  var D = !1,
    x = -1,
    w = 5,
    _ = -1;
  function N() {
    return g ? !0 : !(t.unstable_now() - _ < w);
  }
  function I() {
    if (((g = !1), D)) {
      var C = t.unstable_now();
      _ = C;
      var Q = !0;
      try {
        t: {
          (b = !1), S && ((S = !1), m(x), (x = -1)), (y = !0);
          var L = h;
          try {
            e: {
              for (
                E(C), o = n(s);
                o !== null && !(o.expirationTime > C && N());

              ) {
                var ht = o.callback;
                if (typeof ht == 'function') {
                  (o.callback = null), (h = o.priorityLevel);
                  var St = ht(o.expirationTime <= C);
                  if (((C = t.unstable_now()), typeof St == 'function')) {
                    (o.callback = St), E(C), (Q = !0);
                    break e;
                  }
                  o === n(s) && l(s), E(C);
                } else l(s);
                o = n(s);
              }
              if (o !== null) Q = !0;
              else {
                var Ju = n(c);
                Ju !== null && qr(R, Ju.startTime - C), (Q = !1);
              }
            }
            break t;
          } finally {
            (o = null), (h = L), (y = !1);
          }
          Q = void 0;
        }
      } finally {
        Q ? Mt() : (D = !1);
      }
    }
  }
  var Mt;
  if (typeof p == 'function')
    Mt = function () {
      p(I);
    };
  else if (typeof MessageChannel < 'u') {
    var cf = new MessageChannel(),
      gv = cf.port2;
    (cf.port1.onmessage = I),
      (Mt = function () {
        gv.postMessage(null);
      });
  } else
    Mt = function () {
      d(I, 0);
    };
  function qr(C, Q) {
    x = d(function () {
      C(t.unstable_now());
    }, Q);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (t.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (w = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = h;
      }
      var L = h;
      h = Q;
      try {
        return C();
      } finally {
        h = L;
      }
    }),
    (t.unstable_requestPaint = function () {
      g = !0;
    }),
    (t.unstable_runWithPriority = function (C, Q) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var L = h;
      h = C;
      try {
        return Q();
      } finally {
        h = L;
      }
    }),
    (t.unstable_scheduleCallback = function (C, Q, L) {
      var ht = t.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? ht + L : ht))
          : (L = ht),
        C)
      ) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return (
        (St = L + St),
        (C = {
          id: f++,
          callback: Q,
          priorityLevel: C,
          startTime: L,
          expirationTime: St,
          sortIndex: -1,
        }),
        L > ht
          ? ((C.sortIndex = L),
            e(c, C),
            n(s) === null &&
              C === n(c) &&
              (S ? (m(x), (x = -1)) : (S = !0), qr(R, L - ht)))
          : ((C.sortIndex = St),
            e(s, C),
            b || y || ((b = !0), D || ((D = !0), Mt()))),
        C
      );
    }),
    (t.unstable_shouldYield = N),
    (t.unstable_wrapCallback = function (C) {
      var Q = h;
      return function () {
        var L = h;
        h = Q;
        try {
          return C.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Bd);
Hd.exports = Bd;
var Hv = Hd.exports,
  qd = { exports: {} },
  qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bv = O;
function Ld(t) {
  var e = 'https://react.dev/errors/' + t;
  if (1 < arguments.length) {
    e += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      e += '&args[]=' + encodeURIComponent(arguments[n]);
  }
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function nn() {}
var Bt = {
    d: {
      f: nn,
      r: function () {
        throw Error(Ld(522));
      },
      D: nn,
      C: nn,
      L: nn,
      m: nn,
      X: nn,
      S: nn,
      M: nn,
    },
    p: 0,
    findDOMNode: null,
  },
  qv = Symbol.for('react.portal');
function Lv(t, e, n) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qv,
    key: l == null ? null : '' + l,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
var Xa = Bv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function mr(t, e) {
  if (t === 'font') return '';
  if (typeof e == 'string') return e === 'use-credentials' ? e : '';
}
qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Bt;
qt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
    throw Error(Ld(299));
  return Lv(t, e, null, n);
};
qt.flushSync = function (t) {
  var e = Xa.T,
    n = Bt.p;
  try {
    if (((Xa.T = null), (Bt.p = 2), t)) return t();
  } finally {
    (Xa.T = e), (Bt.p = n), Bt.d.f();
  }
};
qt.preconnect = function (t, e) {
  typeof t == 'string' &&
    (e
      ? ((e = e.crossOrigin),
        (e =
          typeof e == 'string' ? (e === 'use-credentials' ? e : '') : void 0))
      : (e = null),
    Bt.d.C(t, e));
};
qt.prefetchDNS = function (t) {
  typeof t == 'string' && Bt.d.D(t);
};
qt.preinit = function (t, e) {
  if (typeof t == 'string' && e && typeof e.as == 'string') {
    var n = e.as,
      l = mr(n, e.crossOrigin),
      a = typeof e.integrity == 'string' ? e.integrity : void 0,
      u = typeof e.fetchPriority == 'string' ? e.fetchPriority : void 0;
    n === 'style'
      ? Bt.d.S(t, typeof e.precedence == 'string' ? e.precedence : void 0, {
          crossOrigin: l,
          integrity: a,
          fetchPriority: u,
        })
      : n === 'script' &&
        Bt.d.X(t, {
          crossOrigin: l,
          integrity: a,
          fetchPriority: u,
          nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
        });
  }
};
qt.preinitModule = function (t, e) {
  if (typeof t == 'string')
    if (typeof e == 'object' && e !== null) {
      if (e.as == null || e.as === 'script') {
        var n = mr(e.as, e.crossOrigin);
        Bt.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
          nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
        });
      }
    } else e == null && Bt.d.M(t);
};
qt.preload = function (t, e) {
  if (
    typeof t == 'string' &&
    typeof e == 'object' &&
    e !== null &&
    typeof e.as == 'string'
  ) {
    var n = e.as,
      l = mr(n, e.crossOrigin);
    Bt.d.L(t, n, {
      crossOrigin: l,
      integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
      nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
      type: typeof e.type == 'string' ? e.type : void 0,
      fetchPriority:
        typeof e.fetchPriority == 'string' ? e.fetchPriority : void 0,
      referrerPolicy:
        typeof e.referrerPolicy == 'string' ? e.referrerPolicy : void 0,
      imageSrcSet: typeof e.imageSrcSet == 'string' ? e.imageSrcSet : void 0,
      imageSizes: typeof e.imageSizes == 'string' ? e.imageSizes : void 0,
      media: typeof e.media == 'string' ? e.media : void 0,
    });
  }
};
qt.preloadModule = function (t, e) {
  if (typeof t == 'string')
    if (e) {
      var n = mr(e.as, e.crossOrigin);
      Bt.d.m(t, {
        as: typeof e.as == 'string' && e.as !== 'script' ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
      });
    } else Bt.d.m(t);
};
qt.requestFormReset = function (t) {
  Bt.d.r(t);
};
qt.unstable_batchedUpdates = function (t, e) {
  return t(e);
};
qt.useFormState = function (t, e, n) {
  return Xa.H.useFormState(t, e, n);
};
qt.useFormStatus = function () {
  return Xa.H.useHostTransitionStatus();
};
qt.version = '19.1.0';
function Qd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd);
    } catch (t) {
      console.error(t);
    }
}
Qd(), (qd.exports = qt);
var Qv = qd.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bt = Hv,
  Yd = O,
  Yv = Qv;
function A(t) {
  var e = 'https://react.dev/errors/' + t;
  if (1 < arguments.length) {
    e += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      e += '&args[]=' + encodeURIComponent(arguments[n]);
  }
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Gd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function xu(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Xd(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function pf(t) {
  if (xu(t) !== t) throw Error(A(188));
}
function Gv(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = xu(t)), e === null)) throw Error(A(188));
    return e !== t ? null : t;
  }
  for (var n = t, l = e; ; ) {
    var a = n.return;
    if (a === null) break;
    var u = a.alternate;
    if (u === null) {
      if (((l = a.return), l !== null)) {
        n = l;
        continue;
      }
      break;
    }
    if (a.child === u.child) {
      for (u = a.child; u; ) {
        if (u === n) return pf(a), t;
        if (u === l) return pf(a), e;
        u = u.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== l.return) (n = a), (l = u);
    else {
      for (var i = !1, r = a.child; r; ) {
        if (r === n) {
          (i = !0), (n = a), (l = u);
          break;
        }
        if (r === l) {
          (i = !0), (l = a), (n = u);
          break;
        }
        r = r.sibling;
      }
      if (!i) {
        for (r = u.child; r; ) {
          if (r === n) {
            (i = !0), (n = u), (l = a);
            break;
          }
          if (r === l) {
            (i = !0), (l = u), (n = a);
            break;
          }
          r = r.sibling;
        }
        if (!i) throw Error(A(189));
      }
    }
    if (n.alternate !== l) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? t : e;
}
function Vd(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t;
  for (t = t.child; t !== null; ) {
    if (((e = Vd(t)), e !== null)) return e;
    t = t.sibling;
  }
  return null;
}
var nt = Object.assign,
  Xv = Symbol.for('react.element'),
  Pu = Symbol.for('react.transitional.element'),
  Ba = Symbol.for('react.portal'),
  Ol = Symbol.for('react.fragment'),
  Zd = Symbol.for('react.strict_mode'),
  Ms = Symbol.for('react.profiler'),
  Vv = Symbol.for('react.provider'),
  Kd = Symbol.for('react.consumer'),
  Ge = Symbol.for('react.context'),
  Wc = Symbol.for('react.forward_ref'),
  Cs = Symbol.for('react.suspense'),
  Us = Symbol.for('react.suspense_list'),
  Pc = Symbol.for('react.memo'),
  rn = Symbol.for('react.lazy'),
  _s = Symbol.for('react.activity'),
  Zv = Symbol.for('react.memo_cache_sentinel'),
  vf = Symbol.iterator;
function Da(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (vf && t[vf]) || t['@@iterator']),
      typeof t == 'function' ? t : null);
}
var Kv = Symbol.for('react.client.reference');
function Ns(t) {
  if (t == null) return null;
  if (typeof t == 'function')
    return t.$$typeof === Kv ? null : t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case Ol:
      return 'Fragment';
    case Ms:
      return 'Profiler';
    case Zd:
      return 'StrictMode';
    case Cs:
      return 'Suspense';
    case Us:
      return 'SuspenseList';
    case _s:
      return 'Activity';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case Ba:
        return 'Portal';
      case Ge:
        return (t.displayName || 'Context') + '.Provider';
      case Kd:
        return (t._context.displayName || 'Context') + '.Consumer';
      case Wc:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case Pc:
        return (
          (e = t.displayName || null), e !== null ? e : Ns(t.type) || 'Memo'
        );
      case rn:
        (e = t._payload), (t = t._init);
        try {
          return Ns(t(e));
        } catch {}
    }
  return null;
}
var qa = Array.isArray,
  j = Yd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  J = Yv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  In = { pending: !1, data: null, method: null, action: null },
  zs = [],
  Rl = -1;
function ze(t) {
  return { current: t };
}
function Rt(t) {
  0 > Rl || ((t.current = zs[Rl]), (zs[Rl] = null), Rl--);
}
function ut(t, e) {
  Rl++, (zs[Rl] = t.current), (t.current = e);
}
var Ue = ze(null),
  au = ze(null),
  Rn = ze(null),
  _i = ze(null);
function Ni(t, e) {
  switch ((ut(Rn, e), ut(au, t), ut(Ue, null), e.nodeType)) {
    case 9:
    case 11:
      t = (t = e.documentElement) && (t = t.namespaceURI) ? Th(t) : 0;
      break;
    default:
      if (((t = e.tagName), (e = e.namespaceURI))) (e = Th(e)), (t = cp(e, t));
      else
        switch (t) {
          case 'svg':
            t = 1;
            break;
          case 'math':
            t = 2;
            break;
          default:
            t = 0;
        }
  }
  Rt(Ue), ut(Ue, t);
}
function aa() {
  Rt(Ue), Rt(au), Rt(Rn);
}
function js(t) {
  t.memoizedState !== null && ut(_i, t);
  var e = Ue.current,
    n = cp(e, t.type);
  e !== n && (ut(au, t), ut(Ue, n));
}
function zi(t) {
  au.current === t && (Rt(Ue), Rt(au)),
    _i.current === t && (Rt(_i), (mu._currentValue = In));
}
var Hs = Object.prototype.hasOwnProperty,
  Ic = bt.unstable_scheduleCallback,
  Gr = bt.unstable_cancelCallback,
  Jv = bt.unstable_shouldYield,
  kv = bt.unstable_requestPaint,
  _e = bt.unstable_now,
  Fv = bt.unstable_getCurrentPriorityLevel,
  Jd = bt.unstable_ImmediatePriority,
  kd = bt.unstable_UserBlockingPriority,
  ji = bt.unstable_NormalPriority,
  $v = bt.unstable_LowPriority,
  Fd = bt.unstable_IdlePriority,
  Wv = bt.log,
  Pv = bt.unstable_setDisableYieldValue,
  Du = null,
  $t = null;
function Sn(t) {
  if (
    (typeof Wv == 'function' && Pv(t),
    $t && typeof $t.setStrictMode == 'function')
  )
    try {
      $t.setStrictMode(Du, t);
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : e0,
  Iv = Math.log,
  t0 = Math.LN2;
function e0(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Iv(t) / t0) | 0)) | 0;
}
var Iu = 256,
  ti = 4194304;
function Yn(t) {
  var e = t & 42;
  if (e !== 0) return e;
  switch (t & -t) {
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
      return 64;
    case 128:
      return 128;
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
      return t & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return t & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return t;
  }
}
function yr(t, e, n) {
  var l = t.pendingLanes;
  if (l === 0) return 0;
  var a = 0,
    u = t.suspendedLanes,
    i = t.pingedLanes;
  t = t.warmLanes;
  var r = l & 134217727;
  return (
    r !== 0
      ? ((l = r & ~u),
        l !== 0
          ? (a = Yn(l))
          : ((i &= r),
            i !== 0
              ? (a = Yn(i))
              : n || ((n = r & ~t), n !== 0 && (a = Yn(n)))))
      : ((r = l & ~u),
        r !== 0
          ? (a = Yn(r))
          : i !== 0
          ? (a = Yn(i))
          : n || ((n = l & ~t), n !== 0 && (a = Yn(n)))),
    a === 0
      ? 0
      : e !== 0 &&
        e !== a &&
        !(e & u) &&
        ((u = a & -a),
        (n = e & -e),
        u >= n || (u === 32 && (n & 4194048) !== 0))
      ? e
      : a
  );
}
function wu(t, e) {
  return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
}
function n0(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return e + 250;
    case 16:
    case 32:
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
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $d() {
  var t = Iu;
  return (Iu <<= 1), !(Iu & 4194048) && (Iu = 256), t;
}
function Wd() {
  var t = ti;
  return (ti <<= 1), !(ti & 62914560) && (ti = 4194304), t;
}
function Xr(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Mu(t, e) {
  (t.pendingLanes |= e),
    e !== 268435456 &&
      ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
}
function l0(t, e, n, l, a, u) {
  var i = t.pendingLanes;
  (t.pendingLanes = n),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.warmLanes = 0),
    (t.expiredLanes &= n),
    (t.entangledLanes &= n),
    (t.errorRecoveryDisabledLanes &= n),
    (t.shellSuspendCounter = 0);
  var r = t.entanglements,
    s = t.expirationTimes,
    c = t.hiddenUpdates;
  for (n = i & ~n; 0 < n; ) {
    var f = 31 - Wt(n),
      o = 1 << f;
    (r[f] = 0), (s[f] = -1);
    var h = c[f];
    if (h !== null)
      for (c[f] = null, f = 0; f < h.length; f++) {
        var y = h[f];
        y !== null && (y.lane &= -536870913);
      }
    n &= ~o;
  }
  l !== 0 && Pd(t, l, 0),
    u !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
}
function Pd(t, e, n) {
  (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
  var l = 31 - Wt(e);
  (t.entangledLanes |= e),
    (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 4194090));
}
function Id(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var l = 31 - Wt(n),
      a = 1 << l;
    (a & e) | (t[l] & e) && (t[l] |= e), (n &= ~a);
  }
}
function to(t) {
  switch (t) {
    case 2:
      t = 1;
      break;
    case 8:
      t = 4;
      break;
    case 32:
      t = 16;
      break;
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
      t = 128;
      break;
    case 268435456:
      t = 134217728;
      break;
    default:
      t = 0;
  }
  return t;
}
function eo(t) {
  return (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2;
}
function tm() {
  var t = J.p;
  return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : bp(t.type));
}
function a0(t, e) {
  var n = J.p;
  try {
    return (J.p = t), e();
  } finally {
    J.p = n;
  }
}
var jn = Math.random().toString(36).slice(2),
  _t = '__reactFiber$' + jn,
  Vt = '__reactProps$' + jn,
  pa = '__reactContainer$' + jn,
  Bs = '__reactEvents$' + jn,
  u0 = '__reactListeners$' + jn,
  i0 = '__reactHandles$' + jn,
  gf = '__reactResources$' + jn,
  Cu = '__reactMarker$' + jn;
function no(t) {
  delete t[_t], delete t[Vt], delete t[Bs], delete t[u0], delete t[i0];
}
function Al(t) {
  var e = t[_t];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[pa] || n[_t])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Ah(t); t !== null; ) {
          if ((n = t[_t])) return n;
          t = Ah(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function va(t) {
  if ((t = t[_t] || t[pa])) {
    var e = t.tag;
    if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
      return t;
  }
  return null;
}
function La(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
  throw Error(A(33));
}
function Hl(t) {
  var e = t[gf];
  return (
    e ||
      (e = t[gf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    e
  );
}
function Tt(t) {
  t[Cu] = !0;
}
var em = new Set(),
  nm = {};
function dl(t, e) {
  ua(t, e), ua(t + 'Capture', e);
}
function ua(t, e) {
  for (nm[t] = e, t = 0; t < e.length; t++) em.add(e[t]);
}
var r0 = RegExp(
    '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
  ),
  bf = {},
  Sf = {};
function s0(t) {
  return Hs.call(Sf, t)
    ? !0
    : Hs.call(bf, t)
    ? !1
    : r0.test(t)
    ? (Sf[t] = !0)
    : ((bf[t] = !0), !1);
}
function mi(t, e, n) {
  if (s0(e))
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
          t.removeAttribute(e);
          return;
        case 'boolean':
          var l = e.toLowerCase().slice(0, 5);
          if (l !== 'data-' && l !== 'aria-') {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, '' + n);
    }
}
function ei(t, e, n) {
  if (n === null) t.removeAttribute(e);
  else {
    switch (typeof n) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        t.removeAttribute(e);
        return;
    }
    t.setAttribute(e, '' + n);
  }
}
function He(t, e, n, l) {
  if (l === null) t.removeAttribute(n);
  else {
    switch (typeof l) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        t.removeAttribute(n);
        return;
    }
    t.setAttributeNS(e, n, '' + l);
  }
}
var Vr, Ef;
function Sl(t) {
  if (Vr === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      (Vr = (e && e[1]) || ''),
        (Ef =
          -1 <
          n.stack.indexOf(`
    at`)
            ? ' (<anonymous>)'
            : -1 < n.stack.indexOf('@')
            ? '@unknown:0:0'
            : '');
    }
  return (
    `
` +
    Vr +
    t +
    Ef
  );
}
var Zr = !1;
function Kr(t, e) {
  if (!t || Zr) return '';
  Zr = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var l = {
      DetermineComponentFrameRoot: function () {
        try {
          if (e) {
            var o = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(o.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == 'object' && Reflect.construct)
            ) {
              try {
                Reflect.construct(o, []);
              } catch (y) {
                var h = y;
              }
              Reflect.construct(t, [], o);
            } else {
              try {
                o.call();
              } catch (y) {
                h = y;
              }
              t.call(o.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (y) {
              h = y;
            }
            (o = t()) &&
              typeof o.catch == 'function' &&
              o.catch(function () {});
          }
        } catch (y) {
          if (y && h && typeof y.stack == 'string') return [y.stack, h.stack];
        }
        return [null, null];
      },
    };
    l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
    var a = Object.getOwnPropertyDescriptor(
      l.DetermineComponentFrameRoot,
      'name'
    );
    a &&
      a.configurable &&
      Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
        value: 'DetermineComponentFrameRoot',
      });
    var u = l.DetermineComponentFrameRoot(),
      i = u[0],
      r = u[1];
    if (i && r) {
      var s = i.split(`
`),
        c = r.split(`
`);
      for (
        a = l = 0;
        l < s.length && !s[l].includes('DetermineComponentFrameRoot');

      )
        l++;
      for (; a < c.length && !c[a].includes('DetermineComponentFrameRoot'); )
        a++;
      if (l === s.length || a === c.length)
        for (
          l = s.length - 1, a = c.length - 1;
          1 <= l && 0 <= a && s[l] !== c[a];

        )
          a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (s[l] !== c[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || s[l] !== c[a])) {
                var f =
                  `
` + s[l].replace(' at new ', ' at ');
                return (
                  t.displayName &&
                    f.includes('<anonymous>') &&
                    (f = f.replace('<anonymous>', t.displayName)),
                  f
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Zr = !1), (Error.prepareStackTrace = n);
  }
  return (n = t ? t.displayName || t.name : '') ? Sl(n) : '';
}
function c0(t) {
  switch (t.tag) {
    case 26:
    case 27:
    case 5:
      return Sl(t.type);
    case 16:
      return Sl('Lazy');
    case 13:
      return Sl('Suspense');
    case 19:
      return Sl('SuspenseList');
    case 0:
    case 15:
      return Kr(t.type, !1);
    case 11:
      return Kr(t.type.render, !1);
    case 1:
      return Kr(t.type, !0);
    case 31:
      return Sl('Activity');
    default:
      return '';
  }
}
function Tf(t) {
  try {
    var e = '';
    do (e += c0(t)), (t = t.return);
    while (t);
    return e;
  } catch (n) {
    return (
      `
Error generating stack: ` +
      n.message +
      `
` +
      n.stack
    );
  }
}
function ue(t) {
  switch (typeof t) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t;
    case 'object':
      return t;
    default:
      return '';
  }
}
function lm(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  );
}
function o0(t) {
  var e = lm(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    l = '' + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var a = n.get,
      u = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (i) {
          (l = '' + i), u.call(this, i);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (i) {
          l = '' + i;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Hi(t) {
  t._valueTracker || (t._valueTracker = o0(t));
}
function am(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    l = '';
  return (
    t && (l = lm(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = l),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Bi(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u'))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
var f0 = /[\n"\\]/g;
function se(t) {
  return t.replace(f0, function (e) {
    return '\\' + e.charCodeAt(0).toString(16) + ' ';
  });
}
function qs(t, e, n, l, a, u, i, r) {
  (t.name = ''),
    i != null &&
    typeof i != 'function' &&
    typeof i != 'symbol' &&
    typeof i != 'boolean'
      ? (t.type = i)
      : t.removeAttribute('type'),
    e != null
      ? i === 'number'
        ? ((e === 0 && t.value === '') || t.value != e) &&
          (t.value = '' + ue(e))
        : t.value !== '' + ue(e) && (t.value = '' + ue(e))
      : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
    e != null
      ? Ls(t, i, ue(e))
      : n != null
      ? Ls(t, i, ue(n))
      : l != null && t.removeAttribute('value'),
    a == null && u != null && (t.defaultChecked = !!u),
    a != null &&
      (t.checked = a && typeof a != 'function' && typeof a != 'symbol'),
    r != null &&
    typeof r != 'function' &&
    typeof r != 'symbol' &&
    typeof r != 'boolean'
      ? (t.name = '' + ue(r))
      : t.removeAttribute('name');
}
function um(t, e, n, l, a, u, i, r) {
  if (
    (u != null &&
      typeof u != 'function' &&
      typeof u != 'symbol' &&
      typeof u != 'boolean' &&
      (t.type = u),
    e != null || n != null)
  ) {
    if (!((u !== 'submit' && u !== 'reset') || e != null)) return;
    (n = n != null ? '' + ue(n) : ''),
      (e = e != null ? '' + ue(e) : n),
      r || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (l = l ?? a),
    (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
    (t.checked = r ? t.checked : !!l),
    (t.defaultChecked = !!l),
    i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean' &&
      (t.name = i);
}
function Ls(t, e, n) {
  (e === 'number' && Bi(t.ownerDocument) === t) ||
    t.defaultValue === '' + n ||
    (t.defaultValue = '' + n);
}
function Bl(t, e, n, l) {
  if (((t = t.options), e)) {
    e = {};
    for (var a = 0; a < n.length; a++) e['$' + n[a]] = !0;
    for (n = 0; n < t.length; n++)
      (a = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== a && (t[n].selected = a),
        a && l && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + ue(n), e = null, a = 0; a < t.length; a++) {
      if (t[a].value === n) {
        (t[a].selected = !0), l && (t[a].defaultSelected = !0);
        return;
      }
      e !== null || t[a].disabled || (e = t[a]);
    }
    e !== null && (e.selected = !0);
  }
}
function im(t, e, n) {
  if (
    e != null &&
    ((e = '' + ue(e)), e !== t.value && (t.value = e), n == null)
  ) {
    t.defaultValue !== e && (t.defaultValue = e);
    return;
  }
  t.defaultValue = n != null ? '' + ue(n) : '';
}
function rm(t, e, n, l) {
  if (e == null) {
    if (l != null) {
      if (n != null) throw Error(A(92));
      if (qa(l)) {
        if (1 < l.length) throw Error(A(93));
        l = l[0];
      }
      n = l;
    }
    n == null && (n = ''), (e = n);
  }
  (n = ue(e)),
    (t.defaultValue = n),
    (l = t.textContent),
    l === n && l !== '' && l !== null && (t.value = l);
}
function ia(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var h0 = new Set(
  'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
    ' '
  )
);
function Of(t, e, n) {
  var l = e.indexOf('--') === 0;
  n == null || typeof n == 'boolean' || n === ''
    ? l
      ? t.setProperty(e, '')
      : e === 'float'
      ? (t.cssFloat = '')
      : (t[e] = '')
    : l
    ? t.setProperty(e, n)
    : typeof n != 'number' || n === 0 || h0.has(e)
    ? e === 'float'
      ? (t.cssFloat = n)
      : (t[e] = ('' + n).trim())
    : (t[e] = n + 'px');
}
function sm(t, e, n) {
  if (e != null && typeof e != 'object') throw Error(A(62));
  if (((t = t.style), n != null)) {
    for (var l in n)
      !n.hasOwnProperty(l) ||
        (e != null && e.hasOwnProperty(l)) ||
        (l.indexOf('--') === 0
          ? t.setProperty(l, '')
          : l === 'float'
          ? (t.cssFloat = '')
          : (t[l] = ''));
    for (var a in e)
      (l = e[a]), e.hasOwnProperty(a) && n[a] !== l && Of(t, a, l);
  } else for (var u in e) e.hasOwnProperty(u) && Of(t, u, e[u]);
}
function lo(t) {
  if (t.indexOf('-') === -1) return !1;
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var d0 = new Map([
    ['acceptCharset', 'accept-charset'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
    ['crossOrigin', 'crossorigin'],
    ['accentHeight', 'accent-height'],
    ['alignmentBaseline', 'alignment-baseline'],
    ['arabicForm', 'arabic-form'],
    ['baselineShift', 'baseline-shift'],
    ['capHeight', 'cap-height'],
    ['clipPath', 'clip-path'],
    ['clipRule', 'clip-rule'],
    ['colorInterpolation', 'color-interpolation'],
    ['colorInterpolationFilters', 'color-interpolation-filters'],
    ['colorProfile', 'color-profile'],
    ['colorRendering', 'color-rendering'],
    ['dominantBaseline', 'dominant-baseline'],
    ['enableBackground', 'enable-background'],
    ['fillOpacity', 'fill-opacity'],
    ['fillRule', 'fill-rule'],
    ['floodColor', 'flood-color'],
    ['floodOpacity', 'flood-opacity'],
    ['fontFamily', 'font-family'],
    ['fontSize', 'font-size'],
    ['fontSizeAdjust', 'font-size-adjust'],
    ['fontStretch', 'font-stretch'],
    ['fontStyle', 'font-style'],
    ['fontVariant', 'font-variant'],
    ['fontWeight', 'font-weight'],
    ['glyphName', 'glyph-name'],
    ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
    ['glyphOrientationVertical', 'glyph-orientation-vertical'],
    ['horizAdvX', 'horiz-adv-x'],
    ['horizOriginX', 'horiz-origin-x'],
    ['imageRendering', 'image-rendering'],
    ['letterSpacing', 'letter-spacing'],
    ['lightingColor', 'lighting-color'],
    ['markerEnd', 'marker-end'],
    ['markerMid', 'marker-mid'],
    ['markerStart', 'marker-start'],
    ['overlinePosition', 'overline-position'],
    ['overlineThickness', 'overline-thickness'],
    ['paintOrder', 'paint-order'],
    ['panose-1', 'panose-1'],
    ['pointerEvents', 'pointer-events'],
    ['renderingIntent', 'rendering-intent'],
    ['shapeRendering', 'shape-rendering'],
    ['stopColor', 'stop-color'],
    ['stopOpacity', 'stop-opacity'],
    ['strikethroughPosition', 'strikethrough-position'],
    ['strikethroughThickness', 'strikethrough-thickness'],
    ['strokeDasharray', 'stroke-dasharray'],
    ['strokeDashoffset', 'stroke-dashoffset'],
    ['strokeLinecap', 'stroke-linecap'],
    ['strokeLinejoin', 'stroke-linejoin'],
    ['strokeMiterlimit', 'stroke-miterlimit'],
    ['strokeOpacity', 'stroke-opacity'],
    ['strokeWidth', 'stroke-width'],
    ['textAnchor', 'text-anchor'],
    ['textDecoration', 'text-decoration'],
    ['textRendering', 'text-rendering'],
    ['transformOrigin', 'transform-origin'],
    ['underlinePosition', 'underline-position'],
    ['underlineThickness', 'underline-thickness'],
    ['unicodeBidi', 'unicode-bidi'],
    ['unicodeRange', 'unicode-range'],
    ['unitsPerEm', 'units-per-em'],
    ['vAlphabetic', 'v-alphabetic'],
    ['vHanging', 'v-hanging'],
    ['vIdeographic', 'v-ideographic'],
    ['vMathematical', 'v-mathematical'],
    ['vectorEffect', 'vector-effect'],
    ['vertAdvY', 'vert-adv-y'],
    ['vertOriginX', 'vert-origin-x'],
    ['vertOriginY', 'vert-origin-y'],
    ['wordSpacing', 'word-spacing'],
    ['writingMode', 'writing-mode'],
    ['xmlnsXlink', 'xmlns:xlink'],
    ['xHeight', 'x-height'],
  ]),
  m0 =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function yi(t) {
  return m0.test('' + t)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : t;
}
var Qs = null;
function ao(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var xl = null,
  ql = null;
function Rf(t) {
  var e = va(t);
  if (e && (t = e.stateNode)) {
    var n = t[Vt] || null;
    t: switch (((t = e.stateNode), e.type)) {
      case 'input':
        if (
          (qs(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ),
          (e = n.name),
          n.type === 'radio' && e != null)
        ) {
          for (n = t; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name="' + se('' + e) + '"][type="radio"]'
            ),
              e = 0;
            e < n.length;
            e++
          ) {
            var l = n[e];
            if (l !== t && l.form === t.form) {
              var a = l[Vt] || null;
              if (!a) throw Error(A(90));
              qs(
                l,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name
              );
            }
          }
          for (e = 0; e < n.length; e++) (l = n[e]), l.form === t.form && am(l);
        }
        break t;
      case 'textarea':
        im(t, n.value, n.defaultValue);
        break t;
      case 'select':
        (e = n.value), e != null && Bl(t, !!n.multiple, e, !1);
    }
  }
}
var Jr = !1;
function cm(t, e, n) {
  if (Jr) return t(e, n);
  Jr = !0;
  try {
    var l = t(e);
    return l;
  } finally {
    if (
      ((Jr = !1),
      (xl !== null || ql !== null) &&
        (Ar(), xl && ((e = xl), (t = ql), (ql = xl = null), Rf(e), t)))
    )
      for (e = 0; e < t.length; e++) Rf(t[e]);
  }
}
function uu(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var l = n[Vt] || null;
  if (l === null) return null;
  n = l[e];
  t: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (l = !l.disabled) ||
        ((t = t.type),
        (l = !(
          t === 'button' ||
          t === 'input' ||
          t === 'select' ||
          t === 'textarea'
        ))),
        (t = !l);
      break t;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != 'function') throw Error(A(231, e, typeof n));
  return n;
}
var $e = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ys = !1;
if ($e)
  try {
    var wa = {};
    Object.defineProperty(wa, 'passive', {
      get: function () {
        Ys = !0;
      },
    }),
      window.addEventListener('test', wa, wa),
      window.removeEventListener('test', wa, wa);
  } catch {
    Ys = !1;
  }
var En = null,
  uo = null,
  pi = null;
function om() {
  if (pi) return pi;
  var t,
    e = uo,
    n = e.length,
    l,
    a = 'value' in En ? En.value : En.textContent,
    u = a.length;
  for (t = 0; t < n && e[t] === a[t]; t++);
  var i = n - t;
  for (l = 1; l <= i && e[n - l] === a[u - l]; l++);
  return (pi = a.slice(t, 1 < l ? 1 - l : void 0));
}
function vi(t) {
  var e = t.keyCode;
  return (
    'charCode' in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ni() {
  return !0;
}
function Af() {
  return !1;
}
function Zt(t) {
  function e(n, l, a, u, i) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = l),
      (this.nativeEvent = u),
      (this.target = i),
      (this.currentTarget = null);
    for (var r in t)
      t.hasOwnProperty(r) && ((n = t[r]), (this[r] = n ? n(u) : u[r]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? ni
        : Af),
      (this.isPropagationStopped = Af),
      this
    );
  }
  return (
    nt(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ni));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ni));
      },
      persist: function () {},
      isPersistent: ni,
    }),
    e
  );
}
var ml = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pr = Zt(ml),
  Uu = nt({}, ml, { view: 0, detail: 0 }),
  y0 = Zt(Uu),
  kr,
  Fr,
  Ma,
  vr = nt({}, Uu, {
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
    getModifierState: io,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== Ma &&
            (Ma && t.type === 'mousemove'
              ? ((kr = t.screenX - Ma.screenX), (Fr = t.screenY - Ma.screenY))
              : (Fr = kr = 0),
            (Ma = t)),
          kr);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : Fr;
    },
  }),
  xf = Zt(vr),
  p0 = nt({}, vr, { dataTransfer: 0 }),
  v0 = Zt(p0),
  g0 = nt({}, Uu, { relatedTarget: 0 }),
  $r = Zt(g0),
  b0 = nt({}, ml, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S0 = Zt(b0),
  E0 = nt({}, ml, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    },
  }),
  T0 = Zt(E0),
  O0 = nt({}, ml, { data: 0 }),
  Df = Zt(O0),
  R0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  A0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  x0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function D0(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = x0[t]) ? !!e[t] : !1;
}
function io() {
  return D0;
}
var w0 = nt({}, Uu, {
    key: function (t) {
      if (t.key) {
        var e = R0[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = vi(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? A0[t.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: io,
    charCode: function (t) {
      return t.type === 'keypress' ? vi(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? vi(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0;
    },
  }),
  M0 = Zt(w0),
  C0 = nt({}, vr, {
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
  wf = Zt(C0),
  U0 = nt({}, Uu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: io,
  }),
  _0 = Zt(U0),
  N0 = nt({}, ml, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z0 = Zt(N0),
  j0 = nt({}, vr, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  H0 = Zt(j0),
  B0 = nt({}, ml, { newState: 0, oldState: 0 }),
  q0 = Zt(B0),
  L0 = [9, 13, 27, 32],
  ro = $e && 'CompositionEvent' in window,
  Va = null;
$e && 'documentMode' in document && (Va = document.documentMode);
var Q0 = $e && 'TextEvent' in window && !Va,
  fm = $e && (!ro || (Va && 8 < Va && 11 >= Va)),
  Mf = ' ',
  Cf = !1;
function hm(t, e) {
  switch (t) {
    case 'keyup':
      return L0.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function dm(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var Dl = !1;
function Y0(t, e) {
  switch (t) {
    case 'compositionend':
      return dm(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Cf = !0), Mf);
    case 'textInput':
      return (t = e.data), t === Mf && Cf ? null : t;
    default:
      return null;
  }
}
function G0(t, e) {
  if (Dl)
    return t === 'compositionend' || (!ro && hm(t, e))
      ? ((t = om()), (pi = uo = En = null), (Dl = !1), t)
      : null;
  switch (t) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return fm && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var X0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Uf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!X0[t.type] : e === 'textarea';
}
function mm(t, e, n, l) {
  xl ? (ql ? ql.push(l) : (ql = [l])) : (xl = l),
    (e = er(e, 'onChange')),
    0 < e.length &&
      ((n = new pr('onChange', 'change', null, n, l)),
      t.push({ event: n, listeners: e }));
}
var Za = null,
  iu = null;
function V0(t) {
  ip(t, 0);
}
function gr(t) {
  var e = La(t);
  if (am(e)) return t;
}
function _f(t, e) {
  if (t === 'change') return e;
}
var ym = !1;
if ($e) {
  var Wr;
  if ($e) {
    var Pr = 'oninput' in document;
    if (!Pr) {
      var Nf = document.createElement('div');
      Nf.setAttribute('oninput', 'return;'),
        (Pr = typeof Nf.oninput == 'function');
    }
    Wr = Pr;
  } else Wr = !1;
  ym = Wr && (!document.documentMode || 9 < document.documentMode);
}
function zf() {
  Za && (Za.detachEvent('onpropertychange', pm), (iu = Za = null));
}
function pm(t) {
  if (t.propertyName === 'value' && gr(iu)) {
    var e = [];
    mm(e, iu, t, ao(t)), cm(V0, e);
  }
}
function Z0(t, e, n) {
  t === 'focusin'
    ? (zf(), (Za = e), (iu = n), Za.attachEvent('onpropertychange', pm))
    : t === 'focusout' && zf();
}
function K0(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
    return gr(iu);
}
function J0(t, e) {
  if (t === 'click') return gr(e);
}
function k0(t, e) {
  if (t === 'input' || t === 'change') return gr(e);
}
function F0(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var ee = typeof Object.is == 'function' ? Object.is : F0;
function ru(t, e) {
  if (ee(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null)
    return !1;
  var n = Object.keys(t),
    l = Object.keys(e);
  if (n.length !== l.length) return !1;
  for (l = 0; l < n.length; l++) {
    var a = n[l];
    if (!Hs.call(e, a) || !ee(t[a], e[a])) return !1;
  }
  return !0;
}
function jf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Hf(t, e) {
  var n = jf(t);
  t = 0;
  for (var l; n; ) {
    if (n.nodeType === 3) {
      if (((l = t + n.textContent.length), t <= e && l >= e))
        return { node: n, offset: e - t };
      t = l;
    }
    t: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break t;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jf(n);
  }
}
function vm(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? vm(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function gm(t) {
  t =
    t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
      ? t.ownerDocument.defaultView
      : window;
  for (var e = Bi(t.document); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Bi(t.document);
  }
  return e;
}
function so(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  );
}
var $0 = $e && 'documentMode' in document && 11 >= document.documentMode,
  wl = null,
  Gs = null,
  Ka = null,
  Xs = !1;
function Bf(t, e, n) {
  var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xs ||
    wl == null ||
    wl !== Bi(l) ||
    ((l = wl),
    'selectionStart' in l && so(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (Ka && ru(Ka, l)) ||
      ((Ka = l),
      (l = er(Gs, 'onSelect')),
      0 < l.length &&
        ((e = new pr('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: l }),
        (e.target = wl))));
}
function Ln(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var Ml = {
    animationend: Ln('Animation', 'AnimationEnd'),
    animationiteration: Ln('Animation', 'AnimationIteration'),
    animationstart: Ln('Animation', 'AnimationStart'),
    transitionrun: Ln('Transition', 'TransitionRun'),
    transitionstart: Ln('Transition', 'TransitionStart'),
    transitioncancel: Ln('Transition', 'TransitionCancel'),
    transitionend: Ln('Transition', 'TransitionEnd'),
  },
  Ir = {},
  bm = {};
$e &&
  ((bm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ml.animationend.animation,
    delete Ml.animationiteration.animation,
    delete Ml.animationstart.animation),
  'TransitionEvent' in window || delete Ml.transitionend.transition);
function yl(t) {
  if (Ir[t]) return Ir[t];
  if (!Ml[t]) return t;
  var e = Ml[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in bm) return (Ir[t] = e[n]);
  return t;
}
var Sm = yl('animationend'),
  Em = yl('animationiteration'),
  Tm = yl('animationstart'),
  W0 = yl('transitionrun'),
  P0 = yl('transitionstart'),
  I0 = yl('transitioncancel'),
  Om = yl('transitionend'),
  Rm = new Map(),
  Vs =
    'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
Vs.push('scrollEnd');
function be(t, e) {
  Rm.set(t, e), dl(e, [t]);
}
var qf = new WeakMap();
function ce(t, e) {
  if (typeof t == 'object' && t !== null) {
    var n = qf.get(t);
    return n !== void 0
      ? n
      : ((e = { value: t, source: e, stack: Tf(e) }), qf.set(t, e), e);
  }
  return { value: t, source: e, stack: Tf(e) };
}
var le = [],
  Cl = 0,
  co = 0;
function br() {
  for (var t = Cl, e = (co = Cl = 0); e < t; ) {
    var n = le[e];
    le[e++] = null;
    var l = le[e];
    le[e++] = null;
    var a = le[e];
    le[e++] = null;
    var u = le[e];
    if (((le[e++] = null), l !== null && a !== null)) {
      var i = l.pending;
      i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
        (l.pending = a);
    }
    u !== 0 && Am(n, a, u);
  }
}
function Sr(t, e, n, l) {
  (le[Cl++] = t),
    (le[Cl++] = e),
    (le[Cl++] = n),
    (le[Cl++] = l),
    (co |= l),
    (t.lanes |= l),
    (t = t.alternate),
    t !== null && (t.lanes |= l);
}
function oo(t, e, n, l) {
  return Sr(t, e, n, l), qi(t);
}
function ga(t, e) {
  return Sr(t, null, null, e), qi(t);
}
function Am(t, e, n) {
  t.lanes |= n;
  var l = t.alternate;
  l !== null && (l.lanes |= n);
  for (var a = !1, u = t.return; u !== null; )
    (u.childLanes |= n),
      (l = u.alternate),
      l !== null && (l.childLanes |= n),
      u.tag === 22 &&
        ((t = u.stateNode), t === null || t._visibility & 1 || (a = !0)),
      (t = u),
      (u = u.return);
  return t.tag === 3
    ? ((u = t.stateNode),
      a &&
        e !== null &&
        ((a = 31 - Wt(n)),
        (t = u.hiddenUpdates),
        (l = t[a]),
        l === null ? (t[a] = [e]) : l.push(e),
        (e.lane = n | 536870912)),
      u)
    : null;
}
function qi(t) {
  if (50 < nu) throw ((nu = 0), (fc = null), Error(A(185)));
  for (var e = t.return; e !== null; ) (t = e), (e = t.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Ul = {};
function tg(t, e, n, l) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ft(t, e, n, l) {
  return new tg(t, e, n, l);
}
function fo(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Je(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Ft(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 65011712),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    (n.refCleanup = t.refCleanup),
    n
  );
}
function xm(t, e) {
  t.flags &= 65011714;
  var n = t.alternate;
  return (
    n === null
      ? ((t.childLanes = 0),
        (t.lanes = e),
        (t.child = null),
        (t.subtreeFlags = 0),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.dependencies = null),
        (t.stateNode = null))
      : ((t.childLanes = n.childLanes),
        (t.lanes = n.lanes),
        (t.child = n.child),
        (t.subtreeFlags = 0),
        (t.deletions = null),
        (t.memoizedProps = n.memoizedProps),
        (t.memoizedState = n.memoizedState),
        (t.updateQueue = n.updateQueue),
        (t.type = n.type),
        (e = n.dependencies),
        (t.dependencies =
          e === null
            ? null
            : { lanes: e.lanes, firstContext: e.firstContext })),
    t
  );
}
function gi(t, e, n, l, a, u) {
  var i = 0;
  if (((l = t), typeof t == 'function')) fo(t) && (i = 1);
  else if (typeof t == 'string')
    i = nb(t, n, Ue.current)
      ? 26
      : t === 'html' || t === 'head' || t === 'body'
      ? 27
      : 5;
  else
    t: switch (t) {
      case _s:
        return (t = Ft(31, n, e, a)), (t.elementType = _s), (t.lanes = u), t;
      case Ol:
        return tl(n.children, a, u, e);
      case Zd:
        (i = 8), (a |= 24);
        break;
      case Ms:
        return (
          (t = Ft(12, n, e, a | 2)), (t.elementType = Ms), (t.lanes = u), t
        );
      case Cs:
        return (t = Ft(13, n, e, a)), (t.elementType = Cs), (t.lanes = u), t;
      case Us:
        return (t = Ft(19, n, e, a)), (t.elementType = Us), (t.lanes = u), t;
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case Vv:
            case Ge:
              i = 10;
              break t;
            case Kd:
              i = 9;
              break t;
            case Wc:
              i = 11;
              break t;
            case Pc:
              i = 14;
              break t;
            case rn:
              (i = 16), (l = null);
              break t;
          }
        (i = 29),
          (n = Error(A(130, t === null ? 'null' : typeof t, ''))),
          (l = null);
    }
  return (
    (e = Ft(i, n, e, a)), (e.elementType = t), (e.type = l), (e.lanes = u), e
  );
}
function tl(t, e, n, l) {
  return (t = Ft(7, t, l, e)), (t.lanes = n), t;
}
function ts(t, e, n) {
  return (t = Ft(6, t, null, e)), (t.lanes = n), t;
}
function es(t, e, n) {
  return (
    (e = Ft(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
var _l = [],
  Nl = 0,
  Li = null,
  Qi = 0,
  ie = [],
  re = 0,
  el = null,
  Xe = 1,
  Ve = '';
function Gn(t, e) {
  (_l[Nl++] = Qi), (_l[Nl++] = Li), (Li = t), (Qi = e);
}
function Dm(t, e, n) {
  (ie[re++] = Xe), (ie[re++] = Ve), (ie[re++] = el), (el = t);
  var l = Xe;
  t = Ve;
  var a = 32 - Wt(l) - 1;
  (l &= ~(1 << a)), (n += 1);
  var u = 32 - Wt(e) + a;
  if (30 < u) {
    var i = a - (a % 5);
    (u = (l & ((1 << i) - 1)).toString(32)),
      (l >>= i),
      (a -= i),
      (Xe = (1 << (32 - Wt(e) + a)) | (n << a) | l),
      (Ve = u + t);
  } else (Xe = (1 << u) | (n << a) | l), (Ve = t);
}
function ho(t) {
  t.return !== null && (Gn(t, 1), Dm(t, 1, 0));
}
function mo(t) {
  for (; t === Li; )
    (Li = _l[--Nl]), (_l[Nl] = null), (Qi = _l[--Nl]), (_l[Nl] = null);
  for (; t === el; )
    (el = ie[--re]),
      (ie[re] = null),
      (Ve = ie[--re]),
      (ie[re] = null),
      (Xe = ie[--re]),
      (ie[re] = null);
}
var Ht = null,
  ct = null,
  K = !1,
  nl = null,
  Me = !1,
  Zs = Error(A(519));
function rl(t) {
  var e = Error(A(418, ''));
  throw (su(ce(e, t)), Zs);
}
function Lf(t) {
  var e = t.stateNode,
    n = t.type,
    l = t.memoizedProps;
  switch (((e[_t] = t), (e[Vt] = l), n)) {
    case 'dialog':
      Y('cancel', e), Y('close', e);
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      Y('load', e);
      break;
    case 'video':
    case 'audio':
      for (n = 0; n < fu.length; n++) Y(fu[n], e);
      break;
    case 'source':
      Y('error', e);
      break;
    case 'img':
    case 'image':
    case 'link':
      Y('error', e), Y('load', e);
      break;
    case 'details':
      Y('toggle', e);
      break;
    case 'input':
      Y('invalid', e),
        um(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ),
        Hi(e);
      break;
    case 'select':
      Y('invalid', e);
      break;
    case 'textarea':
      Y('invalid', e), rm(e, l.value, l.defaultValue, l.children), Hi(e);
  }
  (n = l.children),
    (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
    e.textContent === '' + n ||
    l.suppressHydrationWarning === !0 ||
    sp(e.textContent, n)
      ? (l.popover != null && (Y('beforetoggle', e), Y('toggle', e)),
        l.onScroll != null && Y('scroll', e),
        l.onScrollEnd != null && Y('scrollend', e),
        l.onClick != null && (e.onclick = wr),
        (e = !0))
      : (e = !1),
    e || rl(t);
}
function Qf(t) {
  for (Ht = t.return; Ht; )
    switch (Ht.tag) {
      case 5:
      case 13:
        Me = !1;
        return;
      case 27:
      case 3:
        Me = !0;
        return;
      default:
        Ht = Ht.return;
    }
}
function Ca(t) {
  if (t !== Ht) return !1;
  if (!K) return Qf(t), (K = !0), !1;
  var e = t.tag,
    n;
  if (
    ((n = e !== 3 && e !== 27) &&
      ((n = e === 5) &&
        ((n = t.type),
        (n = !(n !== 'form' && n !== 'button') || vc(t.type, t.memoizedProps))),
      (n = !n)),
    n && ct && rl(t),
    Qf(t),
    e === 13)
  ) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(A(317));
    t: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8)
          if (((n = t.data), n === '/$')) {
            if (e === 0) {
              ct = ve(t.nextSibling);
              break t;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        t = t.nextSibling;
      }
      ct = null;
    }
  } else
    e === 27
      ? ((e = ct), Hn(t.type) ? ((t = Sc), (Sc = null), (ct = t)) : (ct = e))
      : (ct = Ht ? ve(t.stateNode.nextSibling) : null);
  return !0;
}
function _u() {
  (ct = Ht = null), (K = !1);
}
function Yf() {
  var t = nl;
  return (
    t !== null && (Gt === null ? (Gt = t) : Gt.push.apply(Gt, t), (nl = null)),
    t
  );
}
function su(t) {
  nl === null ? (nl = [t]) : nl.push(t);
}
var Ks = ze(null),
  pl = null,
  Ze = null;
function cn(t, e, n) {
  ut(Ks, e._currentValue), (e._currentValue = n);
}
function ke(t) {
  (t._currentValue = Ks.current), Rt(Ks);
}
function Js(t, e, n) {
  for (; t !== null; ) {
    var l = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
        : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ks(t, e, n, l) {
  var a = t.child;
  for (a !== null && (a.return = t); a !== null; ) {
    var u = a.dependencies;
    if (u !== null) {
      var i = a.child;
      u = u.firstContext;
      t: for (; u !== null; ) {
        var r = u;
        u = a;
        for (var s = 0; s < e.length; s++)
          if (r.context === e[s]) {
            (u.lanes |= n),
              (r = u.alternate),
              r !== null && (r.lanes |= n),
              Js(u.return, n, t),
              l || (i = null);
            break t;
          }
        u = r.next;
      }
    } else if (a.tag === 18) {
      if (((i = a.return), i === null)) throw Error(A(341));
      (i.lanes |= n),
        (u = i.alternate),
        u !== null && (u.lanes |= n),
        Js(i, n, t),
        (i = null);
    } else i = a.child;
    if (i !== null) i.return = a;
    else
      for (i = a; i !== null; ) {
        if (i === t) {
          i = null;
          break;
        }
        if (((a = i.sibling), a !== null)) {
          (a.return = i.return), (i = a);
          break;
        }
        i = i.return;
      }
    a = i;
  }
}
function Nu(t, e, n, l) {
  t = null;
  for (var a = e, u = !1; a !== null; ) {
    if (!u) {
      if (a.flags & 524288) u = !0;
      else if (a.flags & 262144) break;
    }
    if (a.tag === 10) {
      var i = a.alternate;
      if (i === null) throw Error(A(387));
      if (((i = i.memoizedProps), i !== null)) {
        var r = a.type;
        ee(a.pendingProps.value, i.value) ||
          (t !== null ? t.push(r) : (t = [r]));
      }
    } else if (a === _i.current) {
      if (((i = a.alternate), i === null)) throw Error(A(387));
      i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
        (t !== null ? t.push(mu) : (t = [mu]));
    }
    a = a.return;
  }
  t !== null && ks(e, t, n, l), (e.flags |= 262144);
}
function Yi(t) {
  for (t = t.firstContext; t !== null; ) {
    if (!ee(t.context._currentValue, t.memoizedValue)) return !0;
    t = t.next;
  }
  return !1;
}
function sl(t) {
  (pl = t),
    (Ze = null),
    (t = t.dependencies),
    t !== null && (t.firstContext = null);
}
function Nt(t) {
  return wm(pl, t);
}
function li(t, e) {
  return pl === null && sl(t), wm(t, e);
}
function wm(t, e) {
  var n = e._currentValue;
  if (((e = { context: e, memoizedValue: n, next: null }), Ze === null)) {
    if (t === null) throw Error(A(308));
    (Ze = e),
      (t.dependencies = { lanes: 0, firstContext: e }),
      (t.flags |= 524288);
  } else Ze = Ze.next = e;
  return n;
}
var eg =
    typeof AbortController < 'u'
      ? AbortController
      : function () {
          var t = [],
            e = (this.signal = {
              aborted: !1,
              addEventListener: function (n, l) {
                t.push(l);
              },
            });
          this.abort = function () {
            (e.aborted = !0),
              t.forEach(function (n) {
                return n();
              });
          };
        },
  ng = bt.unstable_scheduleCallback,
  lg = bt.unstable_NormalPriority,
  vt = {
    $$typeof: Ge,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function yo() {
  return { controller: new eg(), data: new Map(), refCount: 0 };
}
function zu(t) {
  t.refCount--,
    t.refCount === 0 &&
      ng(lg, function () {
        t.controller.abort();
      });
}
var Ja = null,
  Fs = 0,
  ra = 0,
  Ll = null;
function ag(t, e) {
  if (Ja === null) {
    var n = (Ja = []);
    (Fs = 0),
      (ra = qo()),
      (Ll = {
        status: 'pending',
        value: void 0,
        then: function (l) {
          n.push(l);
        },
      });
  }
  return Fs++, e.then(Gf, Gf), e;
}
function Gf() {
  if (--Fs === 0 && Ja !== null) {
    Ll !== null && (Ll.status = 'fulfilled');
    var t = Ja;
    (Ja = null), (ra = 0), (Ll = null);
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
}
function ug(t, e) {
  var n = [],
    l = {
      status: 'pending',
      value: null,
      reason: null,
      then: function (a) {
        n.push(a);
      },
    };
  return (
    t.then(
      function () {
        (l.status = 'fulfilled'), (l.value = e);
        for (var a = 0; a < n.length; a++) (0, n[a])(e);
      },
      function (a) {
        for (l.status = 'rejected', l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ),
    l
  );
}
var Xf = j.S;
j.S = function (t, e) {
  typeof e == 'object' && e !== null && typeof e.then == 'function' && ag(t, e),
    Xf !== null && Xf(t, e);
};
var ll = ze(null);
function po() {
  var t = ll.current;
  return t !== null ? t : et.pooledCache;
}
function bi(t, e) {
  e === null ? ut(ll, ll.current) : ut(ll, e.pool);
}
function Mm() {
  var t = po();
  return t === null ? null : { parent: vt._currentValue, pool: t };
}
var ju = Error(A(460)),
  Cm = Error(A(474)),
  Er = Error(A(542)),
  $s = { then: function () {} };
function Vf(t) {
  return (t = t.status), t === 'fulfilled' || t === 'rejected';
}
function ai() {}
function Um(t, e, n) {
  switch (
    ((n = t[n]),
    n === void 0 ? t.push(e) : n !== e && (e.then(ai, ai), (e = n)),
    e.status)
  ) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw ((t = e.reason), Kf(t), t);
    default:
      if (typeof e.status == 'string') e.then(ai, ai);
      else {
        if (((t = et), t !== null && 100 < t.shellSuspendCounter))
          throw Error(A(482));
        (t = e),
          (t.status = 'pending'),
          t.then(
            function (l) {
              if (e.status === 'pending') {
                var a = e;
                (a.status = 'fulfilled'), (a.value = l);
              }
            },
            function (l) {
              if (e.status === 'pending') {
                var a = e;
                (a.status = 'rejected'), (a.reason = l);
              }
            }
          );
      }
      switch (e.status) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw ((t = e.reason), Kf(t), t);
      }
      throw ((ka = e), ju);
  }
}
var ka = null;
function Zf() {
  if (ka === null) throw Error(A(459));
  var t = ka;
  return (ka = null), t;
}
function Kf(t) {
  if (t === ju || t === Er) throw Error(A(483));
}
var sn = !1;
function vo(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function Ws(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null,
      });
}
function An(t) {
  return { lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(t, e, n) {
  var l = t.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), $ & 2)) {
    var a = l.pending;
    return (
      a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (l.pending = e),
      (e = qi(t)),
      Am(t, null, n),
      e
    );
  }
  return Sr(t, l, e, n), qi(t);
}
function Fa(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
  ) {
    var l = e.lanes;
    (l &= t.pendingLanes), (n |= l), (e.lanes = n), Id(t, n);
  }
}
function ns(t, e) {
  var n = t.updateQueue,
    l = t.alternate;
  if (l !== null && ((l = l.updateQueue), n === l)) {
    var a = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null,
        };
        u === null ? (a = u = i) : (u = u.next = i), (n = n.next);
      } while (n !== null);
      u === null ? (a = u = e) : (u = u.next = e);
    } else a = u = e;
    (n = {
      baseState: l.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: u,
      shared: l.shared,
      callbacks: l.callbacks,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
var Ps = !1;
function $a() {
  if (Ps) {
    var t = Ll;
    if (t !== null) throw t;
  }
}
function Wa(t, e, n, l) {
  Ps = !1;
  var a = t.updateQueue;
  sn = !1;
  var u = a.firstBaseUpdate,
    i = a.lastBaseUpdate,
    r = a.shared.pending;
  if (r !== null) {
    a.shared.pending = null;
    var s = r,
      c = s.next;
    (s.next = null), i === null ? (u = c) : (i.next = c), (i = s);
    var f = t.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (r = f.lastBaseUpdate),
      r !== i &&
        (r === null ? (f.firstBaseUpdate = c) : (r.next = c),
        (f.lastBaseUpdate = s)));
  }
  if (u !== null) {
    var o = a.baseState;
    (i = 0), (f = c = s = null), (r = u);
    do {
      var h = r.lane & -536870913,
        y = h !== r.lane;
      if (y ? (Z & h) === h : (l & h) === h) {
        h !== 0 && h === ra && (Ps = !0),
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                tag: r.tag,
                payload: r.payload,
                callback: null,
                next: null,
              });
        t: {
          var b = t,
            S = r;
          h = e;
          var g = n;
          switch (S.tag) {
            case 1:
              if (((b = S.payload), typeof b == 'function')) {
                o = b.call(g, o, h);
                break t;
              }
              o = b;
              break t;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = S.payload),
                (h = typeof b == 'function' ? b.call(g, o, h) : b),
                h == null)
              )
                break t;
              o = nt({}, o, h);
              break t;
            case 2:
              sn = !0;
          }
        }
        (h = r.callback),
          h !== null &&
            ((t.flags |= 64),
            y && (t.flags |= 8192),
            (y = a.callbacks),
            y === null ? (a.callbacks = [h]) : y.push(h));
      } else
        (y = {
          lane: h,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }),
          f === null ? ((c = f = y), (s = o)) : (f = f.next = y),
          (i |= h);
      if (((r = r.next), r === null)) {
        if (((r = a.shared.pending), r === null)) break;
        (y = r),
          (r = y.next),
          (y.next = null),
          (a.lastBaseUpdate = y),
          (a.shared.pending = null);
      }
    } while (!0);
    f === null && (s = o),
      (a.baseState = s),
      (a.firstBaseUpdate = c),
      (a.lastBaseUpdate = f),
      u === null && (a.shared.lanes = 0),
      (zn |= i),
      (t.lanes = i),
      (t.memoizedState = o);
  }
}
function _m(t, e) {
  if (typeof t != 'function') throw Error(A(191, t));
  t.call(e);
}
function Nm(t, e) {
  var n = t.callbacks;
  if (n !== null)
    for (t.callbacks = null, t = 0; t < n.length; t++) _m(n[t], e);
}
var sa = ze(null),
  Gi = ze(0);
function Jf(t, e) {
  (t = Ie), ut(Gi, t), ut(sa, e), (Ie = t | e.baseLanes);
}
function Is() {
  ut(Gi, Ie), ut(sa, sa.current);
}
function go() {
  (Ie = Gi.current), Rt(sa), Rt(Gi);
}
var _n = 0,
  q = null,
  P = null,
  yt = null,
  Xi = !1,
  Ql = !1,
  cl = !1,
  Vi = 0,
  cu = 0,
  Yl = null,
  ig = 0;
function dt() {
  throw Error(A(321));
}
function bo(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ee(t[n], e[n])) return !1;
  return !0;
}
function So(t, e, n, l, a, u) {
  return (
    (_n = u),
    (q = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (j.H = t === null || t.memoizedState === null ? oy : fy),
    (cl = !1),
    (u = n(l, a)),
    (cl = !1),
    Ql && (u = jm(e, n, l, a)),
    zm(t),
    u
  );
}
function zm(t) {
  j.H = Zi;
  var e = P !== null && P.next !== null;
  if (((_n = 0), (yt = P = q = null), (Xi = !1), (cu = 0), (Yl = null), e))
    throw Error(A(300));
  t === null || Ot || ((t = t.dependencies), t !== null && Yi(t) && (Ot = !0));
}
function jm(t, e, n, l) {
  q = t;
  var a = 0;
  do {
    if ((Ql && (Yl = null), (cu = 0), (Ql = !1), 25 <= a)) throw Error(A(301));
    if (((a += 1), (yt = P = null), t.updateQueue != null)) {
      var u = t.updateQueue;
      (u.lastEffect = null),
        (u.events = null),
        (u.stores = null),
        u.memoCache != null && (u.memoCache.index = 0);
    }
    (j.H = dg), (u = e(n, l));
  } while (Ql);
  return u;
}
function rg() {
  var t = j.H,
    e = t.useState()[0];
  return (
    (e = typeof e.then == 'function' ? Hu(e) : e),
    (t = t.useState()[0]),
    (P !== null ? P.memoizedState : null) !== t && (q.flags |= 1024),
    e
  );
}
function Eo() {
  var t = Vi !== 0;
  return (Vi = 0), t;
}
function To(t, e, n) {
  (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
}
function Oo(t) {
  if (Xi) {
    for (t = t.memoizedState; t !== null; ) {
      var e = t.queue;
      e !== null && (e.pending = null), (t = t.next);
    }
    Xi = !1;
  }
  (_n = 0), (yt = P = q = null), (Ql = !1), (cu = Vi = 0), (Yl = null);
}
function Qt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return yt === null ? (q.memoizedState = yt = t) : (yt = yt.next = t), yt;
}
function pt() {
  if (P === null) {
    var t = q.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = P.next;
  var e = yt === null ? q.memoizedState : yt.next;
  if (e !== null) (yt = e), (P = t);
  else {
    if (t === null) throw q.alternate === null ? Error(A(467)) : Error(A(310));
    (P = t),
      (t = {
        memoizedState: P.memoizedState,
        baseState: P.baseState,
        baseQueue: P.baseQueue,
        queue: P.queue,
        next: null,
      }),
      yt === null ? (q.memoizedState = yt = t) : (yt = yt.next = t);
  }
  return yt;
}
function Ro() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function Hu(t) {
  var e = cu;
  return (
    (cu += 1),
    Yl === null && (Yl = []),
    (t = Um(Yl, t, e)),
    (e = q),
    (yt === null ? e.memoizedState : yt.next) === null &&
      ((e = e.alternate),
      (j.H = e === null || e.memoizedState === null ? oy : fy)),
    t
  );
}
function Tr(t) {
  if (t !== null && typeof t == 'object') {
    if (typeof t.then == 'function') return Hu(t);
    if (t.$$typeof === Ge) return Nt(t);
  }
  throw Error(A(438, String(t)));
}
function Ao(t) {
  var e = null,
    n = q.updateQueue;
  if ((n !== null && (e = n.memoCache), e == null)) {
    var l = q.alternate;
    l !== null &&
      ((l = l.updateQueue),
      l !== null &&
        ((l = l.memoCache),
        l != null &&
          (e = {
            data: l.data.map(function (a) {
              return a.slice();
            }),
            index: 0,
          })));
  }
  if (
    (e == null && (e = { data: [], index: 0 }),
    n === null && ((n = Ro()), (q.updateQueue = n)),
    (n.memoCache = e),
    (n = e.data[e.index]),
    n === void 0)
  )
    for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = Zv;
  return e.index++, n;
}
function We(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function Si(t) {
  var e = pt();
  return xo(e, P, t);
}
function xo(t, e, n) {
  var l = t.queue;
  if (l === null) throw Error(A(311));
  l.lastRenderedReducer = n;
  var a = t.baseQueue,
    u = l.pending;
  if (u !== null) {
    if (a !== null) {
      var i = a.next;
      (a.next = u.next), (u.next = i);
    }
    (e.baseQueue = a = u), (l.pending = null);
  }
  if (((u = t.baseState), a === null)) t.memoizedState = u;
  else {
    e = a.next;
    var r = (i = null),
      s = null,
      c = e,
      f = !1;
    do {
      var o = c.lane & -536870913;
      if (o !== c.lane ? (Z & o) === o : (_n & o) === o) {
        var h = c.revertLane;
        if (h === 0)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                revertLane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            o === ra && (f = !0);
        else if ((_n & h) === h) {
          (c = c.next), h === ra && (f = !0);
          continue;
        } else
          (o = {
            lane: 0,
            revertLane: c.revertLane,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
            s === null ? ((r = s = o), (i = u)) : (s = s.next = o),
            (q.lanes |= h),
            (zn |= h);
        (o = c.action),
          cl && n(u, o),
          (u = c.hasEagerState ? c.eagerState : n(u, o));
      } else
        (h = {
          lane: o,
          revertLane: c.revertLane,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }),
          s === null ? ((r = s = h), (i = u)) : (s = s.next = h),
          (q.lanes |= o),
          (zn |= o);
      c = c.next;
    } while (c !== null && c !== e);
    if (
      (s === null ? (i = u) : (s.next = r),
      !ee(u, t.memoizedState) && ((Ot = !0), f && ((n = Ll), n !== null)))
    )
      throw n;
    (t.memoizedState = u),
      (t.baseState = i),
      (t.baseQueue = s),
      (l.lastRenderedState = u);
  }
  return a === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
}
function ls(t) {
  var e = pt(),
    n = e.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = t;
  var l = n.dispatch,
    a = n.pending,
    u = e.memoizedState;
  if (a !== null) {
    n.pending = null;
    var i = (a = a.next);
    do (u = t(u, i.action)), (i = i.next);
    while (i !== a);
    ee(u, e.memoizedState) || (Ot = !0),
      (e.memoizedState = u),
      e.baseQueue === null && (e.baseState = u),
      (n.lastRenderedState = u);
  }
  return [u, l];
}
function Hm(t, e, n) {
  var l = q,
    a = pt(),
    u = K;
  if (u) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else n = e();
  var i = !ee((P || a).memoizedState, n);
  i && ((a.memoizedState = n), (Ot = !0)), (a = a.queue);
  var r = Lm.bind(null, l, a, t);
  if (
    (Bu(2048, 8, r, [t]),
    a.getSnapshot !== e || i || (yt !== null && yt.memoizedState.tag & 1))
  ) {
    if (
      ((l.flags |= 2048),
      ca(9, Or(), qm.bind(null, l, a, n, e), null),
      et === null)
    )
      throw Error(A(349));
    u || _n & 124 || Bm(l, e, n);
  }
  return n;
}
function Bm(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = q.updateQueue),
    e === null
      ? ((e = Ro()), (q.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function qm(t, e, n, l) {
  (e.value = n), (e.getSnapshot = l), Qm(e) && Ym(t);
}
function Lm(t, e, n) {
  return n(function () {
    Qm(e) && Ym(t);
  });
}
function Qm(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ee(t, n);
  } catch {
    return !0;
  }
}
function Ym(t) {
  var e = ga(t, 2);
  e !== null && It(e, t, 2);
}
function tc(t) {
  var e = Qt();
  if (typeof t == 'function') {
    var n = t;
    if (((t = n()), cl)) {
      Sn(!0);
      try {
        n();
      } finally {
        Sn(!1);
      }
    }
  }
  return (
    (e.memoizedState = e.baseState = t),
    (e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: We,
      lastRenderedState: t,
    }),
    e
  );
}
function Gm(t, e, n, l) {
  return (t.baseState = n), xo(t, P, typeof l == 'function' ? l : We);
}
function sg(t, e, n, l, a) {
  if (Rr(t)) throw Error(A(485));
  if (((t = e.action), t !== null)) {
    var u = {
      payload: a,
      action: t,
      next: null,
      isTransition: !0,
      status: 'pending',
      value: null,
      reason: null,
      listeners: [],
      then: function (i) {
        u.listeners.push(i);
      },
    };
    j.T !== null ? n(!0) : (u.isTransition = !1),
      l(u),
      (n = e.pending),
      n === null
        ? ((u.next = e.pending = u), Xm(e, u))
        : ((u.next = n.next), (e.pending = n.next = u));
  }
}
function Xm(t, e) {
  var n = e.action,
    l = e.payload,
    a = t.state;
  if (e.isTransition) {
    var u = j.T,
      i = {};
    j.T = i;
    try {
      var r = n(a, l),
        s = j.S;
      s !== null && s(i, r), kf(t, e, r);
    } catch (c) {
      ec(t, e, c);
    } finally {
      j.T = u;
    }
  } else
    try {
      (u = n(a, l)), kf(t, e, u);
    } catch (c) {
      ec(t, e, c);
    }
}
function kf(t, e, n) {
  n !== null && typeof n == 'object' && typeof n.then == 'function'
    ? n.then(
        function (l) {
          Ff(t, e, l);
        },
        function (l) {
          return ec(t, e, l);
        }
      )
    : Ff(t, e, n);
}
function Ff(t, e, n) {
  (e.status = 'fulfilled'),
    (e.value = n),
    Vm(e),
    (t.state = n),
    (e = t.pending),
    e !== null &&
      ((n = e.next),
      n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Xm(t, n)));
}
function ec(t, e, n) {
  var l = t.pending;
  if (((t.pending = null), l !== null)) {
    l = l.next;
    do (e.status = 'rejected'), (e.reason = n), Vm(e), (e = e.next);
    while (e !== l);
  }
  t.action = null;
}
function Vm(t) {
  t = t.listeners;
  for (var e = 0; e < t.length; e++) (0, t[e])();
}
function Zm(t, e) {
  return e;
}
function $f(t, e) {
  if (K) {
    var n = et.formState;
    if (n !== null) {
      t: {
        var l = q;
        if (K) {
          if (ct) {
            e: {
              for (var a = ct, u = Me; a.nodeType !== 8; ) {
                if (!u) {
                  a = null;
                  break e;
                }
                if (((a = ve(a.nextSibling)), a === null)) {
                  a = null;
                  break e;
                }
              }
              (u = a.data), (a = u === 'F!' || u === 'F' ? a : null);
            }
            if (a) {
              (ct = ve(a.nextSibling)), (l = a.data === 'F!');
              break t;
            }
          }
          rl(l);
        }
        l = !1;
      }
      l && (e = n[0]);
    }
  }
  return (
    (n = Qt()),
    (n.memoizedState = n.baseState = e),
    (l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zm,
      lastRenderedState: e,
    }),
    (n.queue = l),
    (n = ry.bind(null, q, l)),
    (l.dispatch = n),
    (l = tc(!1)),
    (u = Co.bind(null, q, !1, l.queue)),
    (l = Qt()),
    (a = { state: e, dispatch: null, action: t, pending: null }),
    (l.queue = a),
    (n = sg.bind(null, q, a, u, n)),
    (a.dispatch = n),
    (l.memoizedState = t),
    [e, n, !1]
  );
}
function Wf(t) {
  var e = pt();
  return Km(e, P, t);
}
function Km(t, e, n) {
  if (
    ((e = xo(t, e, Zm)[0]),
    (t = Si(We)[0]),
    typeof e == 'object' && e !== null && typeof e.then == 'function')
  )
    try {
      var l = Hu(e);
    } catch (i) {
      throw i === ju ? Er : i;
    }
  else l = e;
  e = pt();
  var a = e.queue,
    u = a.dispatch;
  return (
    n !== e.memoizedState &&
      ((q.flags |= 2048), ca(9, Or(), cg.bind(null, a, n), null)),
    [l, u, t]
  );
}
function cg(t, e) {
  t.action = e;
}
function Pf(t) {
  var e = pt(),
    n = P;
  if (n !== null) return Km(e, n, t);
  pt(), (e = e.memoizedState), (n = pt());
  var l = n.queue.dispatch;
  return (n.memoizedState = t), [e, l, !1];
}
function ca(t, e, n, l) {
  return (
    (t = { tag: t, create: n, deps: l, inst: e, next: null }),
    (e = q.updateQueue),
    e === null && ((e = Ro()), (q.updateQueue = e)),
    (n = e.lastEffect),
    n === null
      ? (e.lastEffect = t.next = t)
      : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
    t
  );
}
function Or() {
  return { destroy: void 0, resource: void 0 };
}
function Jm() {
  return pt().memoizedState;
}
function Ei(t, e, n, l) {
  var a = Qt();
  (l = l === void 0 ? null : l),
    (q.flags |= t),
    (a.memoizedState = ca(1 | e, Or(), n, l));
}
function Bu(t, e, n, l) {
  var a = pt();
  l = l === void 0 ? null : l;
  var u = a.memoizedState.inst;
  P !== null && l !== null && bo(l, P.memoizedState.deps)
    ? (a.memoizedState = ca(e, u, n, l))
    : ((q.flags |= t), (a.memoizedState = ca(1 | e, u, n, l)));
}
function If(t, e) {
  Ei(8390656, 8, t, e);
}
function km(t, e) {
  Bu(2048, 8, t, e);
}
function Fm(t, e) {
  return Bu(4, 2, t, e);
}
function $m(t, e) {
  return Bu(4, 4, t, e);
}
function Wm(t, e) {
  if (typeof e == 'function') {
    t = t();
    var n = e(t);
    return function () {
      typeof n == 'function' ? n() : e(null);
    };
  }
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Pm(t, e, n) {
  (n = n != null ? n.concat([t]) : null), Bu(4, 4, Wm.bind(null, e, t), n);
}
function Do() {}
function Im(t, e) {
  var n = pt();
  e = e === void 0 ? null : e;
  var l = n.memoizedState;
  return e !== null && bo(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
}
function ty(t, e) {
  var n = pt();
  e = e === void 0 ? null : e;
  var l = n.memoizedState;
  if (e !== null && bo(e, l[1])) return l[0];
  if (((l = t()), cl)) {
    Sn(!0);
    try {
      t();
    } finally {
      Sn(!1);
    }
  }
  return (n.memoizedState = [l, e]), l;
}
function wo(t, e, n) {
  return n === void 0 || _n & 1073741824
    ? (t.memoizedState = e)
    : ((t.memoizedState = n), (t = Vy()), (q.lanes |= t), (zn |= t), n);
}
function ey(t, e, n, l) {
  return ee(n, e)
    ? n
    : sa.current !== null
    ? ((t = wo(t, n, l)), ee(t, e) || (Ot = !0), t)
    : _n & 42
    ? ((t = Vy()), (q.lanes |= t), (zn |= t), e)
    : ((Ot = !0), (t.memoizedState = n));
}
function ny(t, e, n, l, a) {
  var u = J.p;
  J.p = u !== 0 && 8 > u ? u : 8;
  var i = j.T,
    r = {};
  (j.T = r), Co(t, !1, e, n);
  try {
    var s = a(),
      c = j.S;
    if (
      (c !== null && c(r, s),
      s !== null && typeof s == 'object' && typeof s.then == 'function')
    ) {
      var f = ug(s, l);
      Pa(t, e, f, Pt(t));
    } else Pa(t, e, l, Pt(t));
  } catch (o) {
    Pa(t, e, { then: function () {}, status: 'rejected', reason: o }, Pt());
  } finally {
    (J.p = u), (j.T = i);
  }
}
function og() {}
function nc(t, e, n, l) {
  if (t.tag !== 5) throw Error(A(476));
  var a = ly(t).queue;
  ny(
    t,
    a,
    e,
    In,
    n === null
      ? og
      : function () {
          return ay(t), n(l);
        }
  );
}
function ly(t) {
  var e = t.memoizedState;
  if (e !== null) return e;
  e = {
    memoizedState: In,
    baseState: In,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: We,
      lastRenderedState: In,
    },
    next: null,
  };
  var n = {};
  return (
    (e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: We,
        lastRenderedState: n,
      },
      next: null,
    }),
    (t.memoizedState = e),
    (t = t.alternate),
    t !== null && (t.memoizedState = e),
    e
  );
}
function ay(t) {
  var e = ly(t).next.queue;
  Pa(t, e, {}, Pt());
}
function Mo() {
  return Nt(mu);
}
function uy() {
  return pt().memoizedState;
}
function iy() {
  return pt().memoizedState;
}
function fg(t) {
  for (var e = t.return; e !== null; ) {
    switch (e.tag) {
      case 24:
      case 3:
        var n = Pt();
        t = An(n);
        var l = xn(e, t, n);
        l !== null && (It(l, e, n), Fa(l, e, n)),
          (e = { cache: yo() }),
          (t.payload = e);
        return;
    }
    e = e.return;
  }
}
function hg(t, e, n) {
  var l = Pt();
  (n = {
    lane: l,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    Rr(t)
      ? sy(e, n)
      : ((n = oo(t, e, n, l)), n !== null && (It(n, t, l), cy(n, e, l)));
}
function ry(t, e, n) {
  var l = Pt();
  Pa(t, e, n, l);
}
function Pa(t, e, n, l) {
  var a = {
    lane: l,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (Rr(t)) sy(e, a);
  else {
    var u = t.alternate;
    if (
      t.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = e.lastRenderedReducer), u !== null)
    )
      try {
        var i = e.lastRenderedState,
          r = u(i, n);
        if (((a.hasEagerState = !0), (a.eagerState = r), ee(r, i)))
          return Sr(t, e, a, 0), et === null && br(), !1;
      } catch {
      } finally {
      }
    if (((n = oo(t, e, a, l)), n !== null)) return It(n, t, l), cy(n, e, l), !0;
  }
  return !1;
}
function Co(t, e, n, l) {
  if (
    ((l = {
      lane: 2,
      revertLane: qo(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rr(t))
  ) {
    if (e) throw Error(A(479));
  } else (e = oo(t, n, l, 2)), e !== null && It(e, t, 2);
}
function Rr(t) {
  var e = t.alternate;
  return t === q || (e !== null && e === q);
}
function sy(t, e) {
  Ql = Xi = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function cy(t, e, n) {
  if (n & 4194048) {
    var l = e.lanes;
    (l &= t.pendingLanes), (n |= l), (e.lanes = n), Id(t, n);
  }
}
var Zi = {
    readContext: Nt,
    use: Tr,
    useCallback: dt,
    useContext: dt,
    useEffect: dt,
    useImperativeHandle: dt,
    useLayoutEffect: dt,
    useInsertionEffect: dt,
    useMemo: dt,
    useReducer: dt,
    useRef: dt,
    useState: dt,
    useDebugValue: dt,
    useDeferredValue: dt,
    useTransition: dt,
    useSyncExternalStore: dt,
    useId: dt,
    useHostTransitionStatus: dt,
    useFormState: dt,
    useActionState: dt,
    useOptimistic: dt,
    useMemoCache: dt,
    useCacheRefresh: dt,
  },
  oy = {
    readContext: Nt,
    use: Tr,
    useCallback: function (t, e) {
      return (Qt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Nt,
    useEffect: If,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        Ei(4194308, 4, Wm.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return Ei(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      Ei(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Qt();
      e = e === void 0 ? null : e;
      var l = t();
      if (cl) {
        Sn(!0);
        try {
          t();
        } finally {
          Sn(!1);
        }
      }
      return (n.memoizedState = [l, e]), l;
    },
    useReducer: function (t, e, n) {
      var l = Qt();
      if (n !== void 0) {
        var a = n(e);
        if (cl) {
          Sn(!0);
          try {
            n(e);
          } finally {
            Sn(!1);
          }
        }
      } else a = e;
      return (
        (l.memoizedState = l.baseState = a),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: a,
        }),
        (l.queue = t),
        (t = t.dispatch = hg.bind(null, q, t)),
        [l.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Qt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = tc(t);
      var e = t.queue,
        n = ry.bind(null, q, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: Do,
    useDeferredValue: function (t, e) {
      var n = Qt();
      return wo(n, t, e);
    },
    useTransition: function () {
      var t = tc(!1);
      return (
        (t = ny.bind(null, q, t.queue, !0, !1)),
        (Qt().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var l = q,
        a = Qt();
      if (K) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = e()), et === null)) throw Error(A(349));
        Z & 124 || Bm(l, e, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return (
        (a.queue = u),
        If(Lm.bind(null, l, u, t), [t]),
        (l.flags |= 2048),
        ca(9, Or(), qm.bind(null, l, u, n, e), null),
        n
      );
    },
    useId: function () {
      var t = Qt(),
        e = et.identifierPrefix;
      if (K) {
        var n = Ve,
          l = Xe;
        (n = (l & ~(1 << (32 - Wt(l) - 1))).toString(32) + n),
          (e = '«' + e + 'R' + n),
          (n = Vi++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += '»');
      } else (n = ig++), (e = '«' + e + 'r' + n.toString(32) + '»');
      return (t.memoizedState = e);
    },
    useHostTransitionStatus: Mo,
    useFormState: $f,
    useActionState: $f,
    useOptimistic: function (t) {
      var e = Qt();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = Co.bind(null, q, !0, n)), (n.dispatch = e), [t, e]
      );
    },
    useMemoCache: Ao,
    useCacheRefresh: function () {
      return (Qt().memoizedState = fg.bind(null, q));
    },
  },
  fy = {
    readContext: Nt,
    use: Tr,
    useCallback: Im,
    useContext: Nt,
    useEffect: km,
    useImperativeHandle: Pm,
    useInsertionEffect: Fm,
    useLayoutEffect: $m,
    useMemo: ty,
    useReducer: Si,
    useRef: Jm,
    useState: function () {
      return Si(We);
    },
    useDebugValue: Do,
    useDeferredValue: function (t, e) {
      var n = pt();
      return ey(n, P.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Si(We)[0],
        e = pt().memoizedState;
      return [typeof t == 'boolean' ? t : Hu(t), e];
    },
    useSyncExternalStore: Hm,
    useId: uy,
    useHostTransitionStatus: Mo,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function (t, e) {
      var n = pt();
      return Gm(n, P, t, e);
    },
    useMemoCache: Ao,
    useCacheRefresh: iy,
  },
  dg = {
    readContext: Nt,
    use: Tr,
    useCallback: Im,
    useContext: Nt,
    useEffect: km,
    useImperativeHandle: Pm,
    useInsertionEffect: Fm,
    useLayoutEffect: $m,
    useMemo: ty,
    useReducer: ls,
    useRef: Jm,
    useState: function () {
      return ls(We);
    },
    useDebugValue: Do,
    useDeferredValue: function (t, e) {
      var n = pt();
      return P === null ? wo(n, t, e) : ey(n, P.memoizedState, t, e);
    },
    useTransition: function () {
      var t = ls(We)[0],
        e = pt().memoizedState;
      return [typeof t == 'boolean' ? t : Hu(t), e];
    },
    useSyncExternalStore: Hm,
    useId: uy,
    useHostTransitionStatus: Mo,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function (t, e) {
      var n = pt();
      return P !== null
        ? Gm(n, P, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Ao,
    useCacheRefresh: iy,
  },
  Gl = null,
  ou = 0;
function ui(t) {
  var e = ou;
  return (ou += 1), Gl === null && (Gl = []), Um(Gl, t, e);
}
function Ua(t, e) {
  (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
}
function ii(t, e) {
  throw e.$$typeof === Xv
    ? Error(A(525))
    : ((t = Object.prototype.toString.call(e)),
      Error(
        A(
          31,
          t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t
        )
      ));
}
function th(t) {
  var e = t._init;
  return e(t._payload);
}
function hy(t) {
  function e(d, m) {
    if (t) {
      var p = d.deletions;
      p === null ? ((d.deletions = [m]), (d.flags |= 16)) : p.push(m);
    }
  }
  function n(d, m) {
    if (!t) return null;
    for (; m !== null; ) e(d, m), (m = m.sibling);
    return null;
  }
  function l(d) {
    for (var m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function a(d, m) {
    return (d = Je(d, m)), (d.index = 0), (d.sibling = null), d;
  }
  function u(d, m, p) {
    return (
      (d.index = p),
      t
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < m ? ((d.flags |= 67108866), m) : p)
            : ((d.flags |= 67108866), m))
        : ((d.flags |= 1048576), m)
    );
  }
  function i(d) {
    return t && d.alternate === null && (d.flags |= 67108866), d;
  }
  function r(d, m, p, E) {
    return m === null || m.tag !== 6
      ? ((m = ts(p, d.mode, E)), (m.return = d), m)
      : ((m = a(m, p)), (m.return = d), m);
  }
  function s(d, m, p, E) {
    var R = p.type;
    return R === Ol
      ? f(d, m, p.props.children, E, p.key)
      : m !== null &&
        (m.elementType === R ||
          (typeof R == 'object' &&
            R !== null &&
            R.$$typeof === rn &&
            th(R) === m.type))
      ? ((m = a(m, p.props)), Ua(m, p), (m.return = d), m)
      : ((m = gi(p.type, p.key, p.props, null, d.mode, E)),
        Ua(m, p),
        (m.return = d),
        m);
  }
  function c(d, m, p, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = es(p, d.mode, E)), (m.return = d), m)
      : ((m = a(m, p.children || [])), (m.return = d), m);
  }
  function f(d, m, p, E, R) {
    return m === null || m.tag !== 7
      ? ((m = tl(p, d.mode, E, R)), (m.return = d), m)
      : ((m = a(m, p)), (m.return = d), m);
  }
  function o(d, m, p) {
    if (
      (typeof m == 'string' && m !== '') ||
      typeof m == 'number' ||
      typeof m == 'bigint'
    )
      return (m = ts('' + m, d.mode, p)), (m.return = d), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Pu:
          return (
            (p = gi(m.type, m.key, m.props, null, d.mode, p)),
            Ua(p, m),
            (p.return = d),
            p
          );
        case Ba:
          return (m = es(m, d.mode, p)), (m.return = d), m;
        case rn:
          var E = m._init;
          return (m = E(m._payload)), o(d, m, p);
      }
      if (qa(m) || Da(m))
        return (m = tl(m, d.mode, p, null)), (m.return = d), m;
      if (typeof m.then == 'function') return o(d, ui(m), p);
      if (m.$$typeof === Ge) return o(d, li(d, m), p);
      ii(d, m);
    }
    return null;
  }
  function h(d, m, p, E) {
    var R = m !== null ? m.key : null;
    if (
      (typeof p == 'string' && p !== '') ||
      typeof p == 'number' ||
      typeof p == 'bigint'
    )
      return R !== null ? null : r(d, m, '' + p, E);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Pu:
          return p.key === R ? s(d, m, p, E) : null;
        case Ba:
          return p.key === R ? c(d, m, p, E) : null;
        case rn:
          return (R = p._init), (p = R(p._payload)), h(d, m, p, E);
      }
      if (qa(p) || Da(p)) return R !== null ? null : f(d, m, p, E, null);
      if (typeof p.then == 'function') return h(d, m, ui(p), E);
      if (p.$$typeof === Ge) return h(d, m, li(d, p), E);
      ii(d, p);
    }
    return null;
  }
  function y(d, m, p, E, R) {
    if (
      (typeof E == 'string' && E !== '') ||
      typeof E == 'number' ||
      typeof E == 'bigint'
    )
      return (d = d.get(p) || null), r(m, d, '' + E, R);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Pu:
          return (d = d.get(E.key === null ? p : E.key) || null), s(m, d, E, R);
        case Ba:
          return (d = d.get(E.key === null ? p : E.key) || null), c(m, d, E, R);
        case rn:
          var D = E._init;
          return (E = D(E._payload)), y(d, m, p, E, R);
      }
      if (qa(E) || Da(E)) return (d = d.get(p) || null), f(m, d, E, R, null);
      if (typeof E.then == 'function') return y(d, m, p, ui(E), R);
      if (E.$$typeof === Ge) return y(d, m, p, li(m, E), R);
      ii(m, E);
    }
    return null;
  }
  function b(d, m, p, E) {
    for (
      var R = null, D = null, x = m, w = (m = 0), _ = null;
      x !== null && w < p.length;
      w++
    ) {
      x.index > w ? ((_ = x), (x = null)) : (_ = x.sibling);
      var N = h(d, x, p[w], E);
      if (N === null) {
        x === null && (x = _);
        break;
      }
      t && x && N.alternate === null && e(d, x),
        (m = u(N, m, w)),
        D === null ? (R = N) : (D.sibling = N),
        (D = N),
        (x = _);
    }
    if (w === p.length) return n(d, x), K && Gn(d, w), R;
    if (x === null) {
      for (; w < p.length; w++)
        (x = o(d, p[w], E)),
          x !== null &&
            ((m = u(x, m, w)), D === null ? (R = x) : (D.sibling = x), (D = x));
      return K && Gn(d, w), R;
    }
    for (x = l(x); w < p.length; w++)
      (_ = y(x, d, w, p[w], E)),
        _ !== null &&
          (t && _.alternate !== null && x.delete(_.key === null ? w : _.key),
          (m = u(_, m, w)),
          D === null ? (R = _) : (D.sibling = _),
          (D = _));
    return (
      t &&
        x.forEach(function (I) {
          return e(d, I);
        }),
      K && Gn(d, w),
      R
    );
  }
  function S(d, m, p, E) {
    if (p == null) throw Error(A(151));
    for (
      var R = null, D = null, x = m, w = (m = 0), _ = null, N = p.next();
      x !== null && !N.done;
      w++, N = p.next()
    ) {
      x.index > w ? ((_ = x), (x = null)) : (_ = x.sibling);
      var I = h(d, x, N.value, E);
      if (I === null) {
        x === null && (x = _);
        break;
      }
      t && x && I.alternate === null && e(d, x),
        (m = u(I, m, w)),
        D === null ? (R = I) : (D.sibling = I),
        (D = I),
        (x = _);
    }
    if (N.done) return n(d, x), K && Gn(d, w), R;
    if (x === null) {
      for (; !N.done; w++, N = p.next())
        (N = o(d, N.value, E)),
          N !== null &&
            ((m = u(N, m, w)), D === null ? (R = N) : (D.sibling = N), (D = N));
      return K && Gn(d, w), R;
    }
    for (x = l(x); !N.done; w++, N = p.next())
      (N = y(x, d, w, N.value, E)),
        N !== null &&
          (t && N.alternate !== null && x.delete(N.key === null ? w : N.key),
          (m = u(N, m, w)),
          D === null ? (R = N) : (D.sibling = N),
          (D = N));
    return (
      t &&
        x.forEach(function (Mt) {
          return e(d, Mt);
        }),
      K && Gn(d, w),
      R
    );
  }
  function g(d, m, p, E) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === Ol &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case Pu:
          t: {
            for (var R = p.key; m !== null; ) {
              if (m.key === R) {
                if (((R = p.type), R === Ol)) {
                  if (m.tag === 7) {
                    n(d, m.sibling),
                      (E = a(m, p.props.children)),
                      (E.return = d),
                      (d = E);
                    break t;
                  }
                } else if (
                  m.elementType === R ||
                  (typeof R == 'object' &&
                    R !== null &&
                    R.$$typeof === rn &&
                    th(R) === m.type)
                ) {
                  n(d, m.sibling),
                    (E = a(m, p.props)),
                    Ua(E, p),
                    (E.return = d),
                    (d = E);
                  break t;
                }
                n(d, m);
                break;
              } else e(d, m);
              m = m.sibling;
            }
            p.type === Ol
              ? ((E = tl(p.props.children, d.mode, E, p.key)),
                (E.return = d),
                (d = E))
              : ((E = gi(p.type, p.key, p.props, null, d.mode, E)),
                Ua(E, p),
                (E.return = d),
                (d = E));
          }
          return i(d);
        case Ba:
          t: {
            for (R = p.key; m !== null; ) {
              if (m.key === R)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  n(d, m.sibling),
                    (E = a(m, p.children || [])),
                    (E.return = d),
                    (d = E);
                  break t;
                } else {
                  n(d, m);
                  break;
                }
              else e(d, m);
              m = m.sibling;
            }
            (E = es(p, d.mode, E)), (E.return = d), (d = E);
          }
          return i(d);
        case rn:
          return (R = p._init), (p = R(p._payload)), g(d, m, p, E);
      }
      if (qa(p)) return b(d, m, p, E);
      if (Da(p)) {
        if (((R = Da(p)), typeof R != 'function')) throw Error(A(150));
        return (p = R.call(p)), S(d, m, p, E);
      }
      if (typeof p.then == 'function') return g(d, m, ui(p), E);
      if (p.$$typeof === Ge) return g(d, m, li(d, p), E);
      ii(d, p);
    }
    return (typeof p == 'string' && p !== '') ||
      typeof p == 'number' ||
      typeof p == 'bigint'
      ? ((p = '' + p),
        m !== null && m.tag === 6
          ? (n(d, m.sibling), (E = a(m, p)), (E.return = d), (d = E))
          : (n(d, m), (E = ts(p, d.mode, E)), (E.return = d), (d = E)),
        i(d))
      : n(d, m);
  }
  return function (d, m, p, E) {
    try {
      ou = 0;
      var R = g(d, m, p, E);
      return (Gl = null), R;
    } catch (x) {
      if (x === ju || x === Er) throw x;
      var D = Ft(29, x, null, d.mode);
      return (D.lanes = E), (D.return = d), D;
    } finally {
    }
  };
}
var oa = hy(!0),
  dy = hy(!1),
  fe = ze(null),
  Ne = null;
function on(t) {
  var e = t.alternate;
  ut(gt, gt.current & 1),
    ut(fe, t),
    Ne === null &&
      (e === null || sa.current !== null || e.memoizedState !== null) &&
      (Ne = t);
}
function my(t) {
  if (t.tag === 22) {
    if ((ut(gt, gt.current), ut(fe, t), Ne === null)) {
      var e = t.alternate;
      e !== null && e.memoizedState !== null && (Ne = t);
    }
  } else fn();
}
function fn() {
  ut(gt, gt.current), ut(fe, fe.current);
}
function Ke(t) {
  Rt(fe), Ne === t && (Ne = null), Rt(gt);
}
var gt = ze(0);
function Ki(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || bc(n))
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
function as(t, e, n, l) {
  (e = t.memoizedState),
    (n = n(l, e)),
    (n = n == null ? e : nt({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var lc = {
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var l = Pt(),
      a = An(l);
    (a.payload = e),
      n != null && (a.callback = n),
      (e = xn(t, a, l)),
      e !== null && (It(e, t, l), Fa(e, t, l));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var l = Pt(),
      a = An(l);
    (a.tag = 1),
      (a.payload = e),
      n != null && (a.callback = n),
      (e = xn(t, a, l)),
      e !== null && (It(e, t, l), Fa(e, t, l));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Pt(),
      l = An(n);
    (l.tag = 2),
      e != null && (l.callback = e),
      (e = xn(t, l, n)),
      e !== null && (It(e, t, n), Fa(e, t, n));
  },
};
function eh(t, e, n, l, a, u, i) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(l, u, i)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ru(n, l) || !ru(a, u)
      : !0
  );
}
function nh(t, e, n, l) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(n, l),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, l),
    e.state !== t && lc.enqueueReplaceState(e, e.state, null);
}
function ol(t, e) {
  var n = e;
  if ('ref' in e) {
    n = {};
    for (var l in e) l !== 'ref' && (n[l] = e[l]);
  }
  if ((t = t.defaultProps)) {
    n === e && (n = nt({}, n));
    for (var a in t) n[a] === void 0 && (n[a] = t[a]);
  }
  return n;
}
var Ji =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var e = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof t == 'object' && t !== null && typeof t.message == 'string'
                ? String(t.message)
                : String(t),
            error: t,
          });
          if (!window.dispatchEvent(e)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', t);
          return;
        }
        console.error(t);
      };
function yy(t) {
  Ji(t);
}
function py(t) {
  console.error(t);
}
function vy(t) {
  Ji(t);
}
function ki(t, e) {
  try {
    var n = t.onUncaughtError;
    n(e.value, { componentStack: e.stack });
  } catch (l) {
    setTimeout(function () {
      throw l;
    });
  }
}
function lh(t, e, n) {
  try {
    var l = t.onCaughtError;
    l(n.value, {
      componentStack: n.stack,
      errorBoundary: e.tag === 1 ? e.stateNode : null,
    });
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
function ac(t, e, n) {
  return (
    (n = An(n)),
    (n.tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      ki(t, e);
    }),
    n
  );
}
function gy(t) {
  return (t = An(t)), (t.tag = 3), t;
}
function by(t, e, n, l) {
  var a = n.type.getDerivedStateFromError;
  if (typeof a == 'function') {
    var u = l.value;
    (t.payload = function () {
      return a(u);
    }),
      (t.callback = function () {
        lh(e, n, l);
      });
  }
  var i = n.stateNode;
  i !== null &&
    typeof i.componentDidCatch == 'function' &&
    (t.callback = function () {
      lh(e, n, l),
        typeof a != 'function' &&
          (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
      var r = l.stack;
      this.componentDidCatch(l.value, { componentStack: r !== null ? r : '' });
    });
}
function mg(t, e, n, l, a) {
  if (
    ((n.flags |= 32768),
    l !== null && typeof l == 'object' && typeof l.then == 'function')
  ) {
    if (
      ((e = n.alternate),
      e !== null && Nu(e, n, a, !0),
      (n = fe.current),
      n !== null)
    ) {
      switch (n.tag) {
        case 13:
          return (
            Ne === null ? hc() : n.alternate === null && ot === 0 && (ot = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = a),
            l === $s
              ? (n.flags |= 16384)
              : ((e = n.updateQueue),
                e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                ys(t, l, a)),
            !1
          );
        case 22:
          return (
            (n.flags |= 65536),
            l === $s
              ? (n.flags |= 16384)
              : ((e = n.updateQueue),
                e === null
                  ? ((e = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([l]),
                    }),
                    (n.updateQueue = e))
                  : ((n = e.retryQueue),
                    n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                ys(t, l, a)),
            !1
          );
      }
      throw Error(A(435, n.tag));
    }
    return ys(t, l, a), hc(), !1;
  }
  if (K)
    return (
      (e = fe.current),
      e !== null
        ? (!(e.flags & 65536) && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = a),
          l !== Zs && ((t = Error(A(422), { cause: l })), su(ce(t, n))))
        : (l !== Zs && ((e = Error(A(423), { cause: l })), su(ce(e, n))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (a &= -a),
          (t.lanes |= a),
          (l = ce(l, n)),
          (a = ac(t.stateNode, l, a)),
          ns(t, a),
          ot !== 4 && (ot = 2)),
      !1
    );
  var u = Error(A(520), { cause: l });
  if (
    ((u = ce(u, n)),
    eu === null ? (eu = [u]) : eu.push(u),
    ot !== 4 && (ot = 2),
    e === null)
  )
    return !0;
  (l = ce(l, n)), (n = e);
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (t = a & -a),
          (n.lanes |= t),
          (t = ac(n.stateNode, l, t)),
          ns(n, t),
          !1
        );
      case 1:
        if (
          ((e = n.type),
          (u = n.stateNode),
          (n.flags & 128) === 0 &&
            (typeof e.getDerivedStateFromError == 'function' ||
              (u !== null &&
                typeof u.componentDidCatch == 'function' &&
                (Dn === null || !Dn.has(u)))))
        )
          return (
            (n.flags |= 65536),
            (a &= -a),
            (n.lanes |= a),
            (a = gy(a)),
            by(a, t, n, l),
            ns(n, a),
            !1
          );
    }
    n = n.return;
  } while (n !== null);
  return !1;
}
var Sy = Error(A(461)),
  Ot = !1;
function At(t, e, n, l) {
  e.child = t === null ? dy(e, null, n, l) : oa(e, t.child, n, l);
}
function ah(t, e, n, l, a) {
  n = n.render;
  var u = e.ref;
  if ('ref' in l) {
    var i = {};
    for (var r in l) r !== 'ref' && (i[r] = l[r]);
  } else i = l;
  return (
    sl(e),
    (l = So(t, e, n, i, u, a)),
    (r = Eo()),
    t !== null && !Ot
      ? (To(t, e, a), Pe(t, e, a))
      : (K && r && ho(e), (e.flags |= 1), At(t, e, l, a), e.child)
  );
}
function uh(t, e, n, l, a) {
  if (t === null) {
    var u = n.type;
    return typeof u == 'function' &&
      !fo(u) &&
      u.defaultProps === void 0 &&
      n.compare === null
      ? ((e.tag = 15), (e.type = u), Ey(t, e, u, l, a))
      : ((t = gi(n.type, null, l, e, e.mode, a)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((u = t.child), !Uo(t, a))) {
    var i = u.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ru), n(i, l) && t.ref === e.ref)
    )
      return Pe(t, e, a);
  }
  return (
    (e.flags |= 1),
    (t = Je(u, l)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Ey(t, e, n, l, a) {
  if (t !== null) {
    var u = t.memoizedProps;
    if (ru(u, l) && t.ref === e.ref)
      if (((Ot = !1), (e.pendingProps = l = u), Uo(t, a)))
        t.flags & 131072 && (Ot = !0);
      else return (e.lanes = t.lanes), Pe(t, e, a);
  }
  return uc(t, e, n, l, a);
}
function Ty(t, e, n) {
  var l = e.pendingProps,
    a = l.children,
    u = t !== null ? t.memoizedState : null;
  if (l.mode === 'hidden') {
    if (e.flags & 128) {
      if (((l = u !== null ? u.baseLanes | n : n), t !== null)) {
        for (a = e.child = t.child, u = 0; a !== null; )
          (u = u | a.lanes | a.childLanes), (a = a.sibling);
        e.childLanes = u & ~l;
      } else (e.childLanes = 0), (e.child = null);
      return ih(t, e, l, n);
    }
    if (n & 536870912)
      (e.memoizedState = { baseLanes: 0, cachePool: null }),
        t !== null && bi(e, u !== null ? u.cachePool : null),
        u !== null ? Jf(e, u) : Is(),
        my(e);
    else
      return (
        (e.lanes = e.childLanes = 536870912),
        ih(t, e, u !== null ? u.baseLanes | n : n, n)
      );
  } else
    u !== null
      ? (bi(e, u.cachePool), Jf(e, u), fn(), (e.memoizedState = null))
      : (t !== null && bi(e, null), Is(), fn());
  return At(t, e, a, n), e.child;
}
function ih(t, e, n, l) {
  var a = po();
  return (
    (a = a === null ? null : { parent: vt._currentValue, pool: a }),
    (e.memoizedState = { baseLanes: n, cachePool: a }),
    t !== null && bi(e, null),
    Is(),
    my(e),
    t !== null && Nu(t, e, l, !0),
    null
  );
}
function Ti(t, e) {
  var n = e.ref;
  if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
  else {
    if (typeof n != 'function' && typeof n != 'object') throw Error(A(284));
    (t === null || t.ref !== n) && (e.flags |= 4194816);
  }
}
function uc(t, e, n, l, a) {
  return (
    sl(e),
    (n = So(t, e, n, l, void 0, a)),
    (l = Eo()),
    t !== null && !Ot
      ? (To(t, e, a), Pe(t, e, a))
      : (K && l && ho(e), (e.flags |= 1), At(t, e, n, a), e.child)
  );
}
function rh(t, e, n, l, a, u) {
  return (
    sl(e),
    (e.updateQueue = null),
    (n = jm(e, l, n, a)),
    zm(t),
    (l = Eo()),
    t !== null && !Ot
      ? (To(t, e, u), Pe(t, e, u))
      : (K && l && ho(e), (e.flags |= 1), At(t, e, n, u), e.child)
  );
}
function sh(t, e, n, l, a) {
  if ((sl(e), e.stateNode === null)) {
    var u = Ul,
      i = n.contextType;
    typeof i == 'object' && i !== null && (u = Nt(i)),
      (u = new n(l, u)),
      (e.memoizedState =
        u.state !== null && u.state !== void 0 ? u.state : null),
      (u.updater = lc),
      (e.stateNode = u),
      (u._reactInternals = e),
      (u = e.stateNode),
      (u.props = l),
      (u.state = e.memoizedState),
      (u.refs = {}),
      vo(e),
      (i = n.contextType),
      (u.context = typeof i == 'object' && i !== null ? Nt(i) : Ul),
      (u.state = e.memoizedState),
      (i = n.getDerivedStateFromProps),
      typeof i == 'function' && (as(e, n, i, l), (u.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' &&
          typeof u.componentWillMount != 'function') ||
        ((i = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' &&
          u.UNSAFE_componentWillMount(),
        i !== u.state && lc.enqueueReplaceState(u, u.state, null),
        Wa(e, l, u, a),
        $a(),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
      (l = !0);
  } else if (t === null) {
    u = e.stateNode;
    var r = e.memoizedProps,
      s = ol(n, r);
    u.props = s;
    var c = u.context,
      f = n.contextType;
    (i = Ul), typeof f == 'object' && f !== null && (i = Nt(f));
    var o = n.getDerivedStateFromProps;
    (f =
      typeof o == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
      (r = e.pendingProps !== r),
      f ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((r || c !== i) && nh(e, u, l, i)),
      (sn = !1);
    var h = e.memoizedState;
    (u.state = h),
      Wa(e, l, u, a),
      $a(),
      (c = e.memoizedState),
      r || h !== c || sn
        ? (typeof o == 'function' && (as(e, n, o, l), (c = e.memoizedState)),
          (s = sn || eh(e, n, s, l, h, c, i))
            ? (f ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = l),
              (e.memoizedState = c)),
          (u.props = l),
          (u.state = c),
          (u.context = i),
          (l = s))
        : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (l = !1));
  } else {
    (u = e.stateNode),
      Ws(t, e),
      (i = e.memoizedProps),
      (f = ol(n, i)),
      (u.props = f),
      (o = e.pendingProps),
      (h = u.context),
      (c = n.contextType),
      (s = Ul),
      typeof c == 'object' && c !== null && (s = Nt(c)),
      (r = n.getDerivedStateFromProps),
      (c =
        typeof r == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== o || h !== s) && nh(e, u, l, s)),
      (sn = !1),
      (h = e.memoizedState),
      (u.state = h),
      Wa(e, l, u, a),
      $a();
    var y = e.memoizedState;
    i !== o ||
    h !== y ||
    sn ||
    (t !== null && t.dependencies !== null && Yi(t.dependencies))
      ? (typeof r == 'function' && (as(e, n, r, l), (y = e.memoizedState)),
        (f =
          sn ||
          eh(e, n, f, l, h, y, s) ||
          (t !== null && t.dependencies !== null && Yi(t.dependencies)))
          ? (c ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(l, y, s),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(l, y, s)),
            typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (i === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (i === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = l),
            (e.memoizedState = y)),
        (u.props = l),
        (u.state = y),
        (u.context = s),
        (l = f))
      : (typeof u.componentDidUpdate != 'function' ||
          (i === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (i === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (l = !1));
  }
  return (
    (u = l),
    Ti(t, e),
    (l = (e.flags & 128) !== 0),
    u || l
      ? ((u = e.stateNode),
        (n =
          l && typeof n.getDerivedStateFromError != 'function'
            ? null
            : u.render()),
        (e.flags |= 1),
        t !== null && l
          ? ((e.child = oa(e, t.child, null, a)), (e.child = oa(e, null, n, a)))
          : At(t, e, n, a),
        (e.memoizedState = u.state),
        (t = e.child))
      : (t = Pe(t, e, a)),
    t
  );
}
function ch(t, e, n, l) {
  return _u(), (e.flags |= 256), At(t, e, n, l), e.child;
}
var us = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function is(t) {
  return { baseLanes: t, cachePool: Mm() };
}
function rs(t, e, n) {
  return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= oe), t;
}
function Oy(t, e, n) {
  var l = e.pendingProps,
    a = !1,
    u = (e.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i =
        t !== null && t.memoizedState === null ? !1 : (gt.current & 2) !== 0),
    i && ((a = !0), (e.flags &= -129)),
    (i = (e.flags & 32) !== 0),
    (e.flags &= -33),
    t === null)
  ) {
    if (K) {
      if ((a ? on(e) : fn(), K)) {
        var r = ct,
          s;
        if ((s = r)) {
          t: {
            for (s = r, r = Me; s.nodeType !== 8; ) {
              if (!r) {
                r = null;
                break t;
              }
              if (((s = ve(s.nextSibling)), s === null)) {
                r = null;
                break t;
              }
            }
            r = s;
          }
          r !== null
            ? ((e.memoizedState = {
                dehydrated: r,
                treeContext: el !== null ? { id: Xe, overflow: Ve } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (s = Ft(18, null, null, 0)),
              (s.stateNode = r),
              (s.return = e),
              (e.child = s),
              (Ht = e),
              (ct = null),
              (s = !0))
            : (s = !1);
        }
        s || rl(e);
      }
      if (
        ((r = e.memoizedState), r !== null && ((r = r.dehydrated), r !== null))
      )
        return bc(r) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      Ke(e);
    }
    return (
      (r = l.children),
      (l = l.fallback),
      a
        ? (fn(),
          (a = e.mode),
          (r = Fi({ mode: 'hidden', children: r }, a)),
          (l = tl(l, a, n, null)),
          (r.return = e),
          (l.return = e),
          (r.sibling = l),
          (e.child = r),
          (a = e.child),
          (a.memoizedState = is(n)),
          (a.childLanes = rs(t, i, n)),
          (e.memoizedState = us),
          l)
        : (on(e), ic(e, r))
    );
  }
  if (((s = t.memoizedState), s !== null && ((r = s.dehydrated), r !== null))) {
    if (u)
      e.flags & 256
        ? (on(e), (e.flags &= -257), (e = ss(t, e, n)))
        : e.memoizedState !== null
        ? (fn(), (e.child = t.child), (e.flags |= 128), (e = null))
        : (fn(),
          (a = l.fallback),
          (r = e.mode),
          (l = Fi({ mode: 'visible', children: l.children }, r)),
          (a = tl(a, r, n, null)),
          (a.flags |= 2),
          (l.return = e),
          (a.return = e),
          (l.sibling = a),
          (e.child = l),
          oa(e, t.child, null, n),
          (l = e.child),
          (l.memoizedState = is(n)),
          (l.childLanes = rs(t, i, n)),
          (e.memoizedState = us),
          (e = a));
    else if ((on(e), bc(r))) {
      if (((i = r.nextSibling && r.nextSibling.dataset), i)) var c = i.dgst;
      (i = c),
        (l = Error(A(419))),
        (l.stack = ''),
        (l.digest = i),
        su({ value: l, source: null, stack: null }),
        (e = ss(t, e, n));
    } else if (
      (Ot || Nu(t, e, n, !1), (i = (n & t.childLanes) !== 0), Ot || i)
    ) {
      if (
        ((i = et),
        i !== null &&
          ((l = n & -n),
          (l = l & 42 ? 1 : to(l)),
          (l = l & (i.suspendedLanes | n) ? 0 : l),
          l !== 0 && l !== s.retryLane))
      )
        throw ((s.retryLane = l), ga(t, l), It(i, t, l), Sy);
      r.data === '$?' || hc(), (e = ss(t, e, n));
    } else
      r.data === '$?'
        ? ((e.flags |= 192), (e.child = t.child), (e = null))
        : ((t = s.treeContext),
          (ct = ve(r.nextSibling)),
          (Ht = e),
          (K = !0),
          (nl = null),
          (Me = !1),
          t !== null &&
            ((ie[re++] = Xe),
            (ie[re++] = Ve),
            (ie[re++] = el),
            (Xe = t.id),
            (Ve = t.overflow),
            (el = e)),
          (e = ic(e, l.children)),
          (e.flags |= 4096));
    return e;
  }
  return a
    ? (fn(),
      (a = l.fallback),
      (r = e.mode),
      (s = t.child),
      (c = s.sibling),
      (l = Je(s, { mode: 'hidden', children: l.children })),
      (l.subtreeFlags = s.subtreeFlags & 65011712),
      c !== null ? (a = Je(c, a)) : ((a = tl(a, r, n, null)), (a.flags |= 2)),
      (a.return = e),
      (l.return = e),
      (l.sibling = a),
      (e.child = l),
      (l = a),
      (a = e.child),
      (r = t.child.memoizedState),
      r === null
        ? (r = is(n))
        : ((s = r.cachePool),
          s !== null
            ? ((c = vt._currentValue),
              (s = s.parent !== c ? { parent: c, pool: c } : s))
            : (s = Mm()),
          (r = { baseLanes: r.baseLanes | n, cachePool: s })),
      (a.memoizedState = r),
      (a.childLanes = rs(t, i, n)),
      (e.memoizedState = us),
      l)
    : (on(e),
      (n = t.child),
      (t = n.sibling),
      (n = Je(n, { mode: 'visible', children: l.children })),
      (n.return = e),
      (n.sibling = null),
      t !== null &&
        ((i = e.deletions),
        i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
      (e.child = n),
      (e.memoizedState = null),
      n);
}
function ic(t, e) {
  return (
    (e = Fi({ mode: 'visible', children: e }, t.mode)),
    (e.return = t),
    (t.child = e)
  );
}
function Fi(t, e) {
  return (
    (t = Ft(22, t, null, e)),
    (t.lanes = 0),
    (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
    }),
    t
  );
}
function ss(t, e, n) {
  return (
    oa(e, t.child, null, n),
    (t = ic(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function oh(t, e, n) {
  t.lanes |= e;
  var l = t.alternate;
  l !== null && (l.lanes |= e), Js(t.return, e, n);
}
function cs(t, e, n, l, a) {
  var u = t.memoizedState;
  u === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: n,
        tailMode: a,
      })
    : ((u.isBackwards = e),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = l),
      (u.tail = n),
      (u.tailMode = a));
}
function Ry(t, e, n) {
  var l = e.pendingProps,
    a = l.revealOrder,
    u = l.tail;
  if ((At(t, e, l.children, n), (l = gt.current), l & 2))
    (l = (l & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && oh(t, n, e);
        else if (t.tag === 19) oh(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    l &= 1;
  }
  switch ((ut(gt, l), a)) {
    case 'forwards':
      for (n = e.child, a = null; n !== null; )
        (t = n.alternate),
          t !== null && Ki(t) === null && (a = n),
          (n = n.sibling);
      (n = a),
        n === null
          ? ((a = e.child), (e.child = null))
          : ((a = n.sibling), (n.sibling = null)),
        cs(e, !1, a, n, u);
      break;
    case 'backwards':
      for (n = null, a = e.child, e.child = null; a !== null; ) {
        if (((t = a.alternate), t !== null && Ki(t) === null)) {
          e.child = a;
          break;
        }
        (t = a.sibling), (a.sibling = n), (n = a), (a = t);
      }
      cs(e, !0, n, null, u);
      break;
    case 'together':
      cs(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Pe(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (zn |= e.lanes),
    !(n & e.childLanes))
  )
    if (t !== null) {
      if ((Nu(t, e, n, !1), (n & e.childLanes) === 0)) return null;
    } else return null;
  if (t !== null && e.child !== t.child) throw Error(A(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Je(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Je(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function Uo(t, e) {
  return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && Yi(t)));
}
function yg(t, e, n) {
  switch (e.tag) {
    case 3:
      Ni(e, e.stateNode.containerInfo), cn(e, vt, t.memoizedState.cache), _u();
      break;
    case 27:
    case 5:
      js(e);
      break;
    case 4:
      Ni(e, e.stateNode.containerInfo);
      break;
    case 10:
      cn(e, e.type, e.memoizedProps.value);
      break;
    case 13:
      var l = e.memoizedState;
      if (l !== null)
        return l.dehydrated !== null
          ? (on(e), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Oy(t, e, n)
          : (on(e), (t = Pe(t, e, n)), t !== null ? t.sibling : null);
      on(e);
      break;
    case 19:
      var a = (t.flags & 128) !== 0;
      if (
        ((l = (n & e.childLanes) !== 0),
        l || (Nu(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
        a)
      ) {
        if (l) return Ry(t, e, n);
        e.flags |= 128;
      }
      if (
        ((a = e.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        ut(gt, gt.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ty(t, e, n);
    case 24:
      cn(e, vt, t.memoizedState.cache);
  }
  return Pe(t, e, n);
}
function Ay(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps) Ot = !0;
    else {
      if (!Uo(t, n) && !(e.flags & 128)) return (Ot = !1), yg(t, e, n);
      Ot = !!(t.flags & 131072);
    }
  else (Ot = !1), K && e.flags & 1048576 && Dm(e, Qi, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 16:
      t: {
        t = e.pendingProps;
        var l = e.elementType,
          a = l._init;
        if (((l = a(l._payload)), (e.type = l), typeof l == 'function'))
          fo(l)
            ? ((t = ol(l, t)), (e.tag = 1), (e = sh(null, e, l, t, n)))
            : ((e.tag = 0), (e = uc(null, e, l, t, n)));
        else {
          if (l != null) {
            if (((a = l.$$typeof), a === Wc)) {
              (e.tag = 11), (e = ah(null, e, l, t, n));
              break t;
            } else if (a === Pc) {
              (e.tag = 14), (e = uh(null, e, l, t, n));
              break t;
            }
          }
          throw ((e = Ns(l) || l), Error(A(306, e, '')));
        }
      }
      return e;
    case 0:
      return uc(t, e, e.type, e.pendingProps, n);
    case 1:
      return (l = e.type), (a = ol(l, e.pendingProps)), sh(t, e, l, a, n);
    case 3:
      t: {
        if ((Ni(e, e.stateNode.containerInfo), t === null)) throw Error(A(387));
        l = e.pendingProps;
        var u = e.memoizedState;
        (a = u.element), Ws(t, e), Wa(e, l, null, n);
        var i = e.memoizedState;
        if (
          ((l = i.cache),
          cn(e, vt, l),
          l !== u.cache && ks(e, [vt], n, !0),
          $a(),
          (l = i.element),
          u.isDehydrated)
        )
          if (
            ((u = { element: l, isDehydrated: !1, cache: i.cache }),
            (e.updateQueue.baseState = u),
            (e.memoizedState = u),
            e.flags & 256)
          ) {
            e = ch(t, e, l, n);
            break t;
          } else if (l !== a) {
            (a = ce(Error(A(424)), e)), su(a), (e = ch(t, e, l, n));
            break t;
          } else {
            switch (((t = e.stateNode.containerInfo), t.nodeType)) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
            }
            for (
              ct = ve(t.firstChild),
                Ht = e,
                K = !0,
                nl = null,
                Me = !0,
                n = dy(e, null, l, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          }
        else {
          if ((_u(), l === a)) {
            e = Pe(t, e, n);
            break t;
          }
          At(t, e, l, n);
        }
        e = e.child;
      }
      return e;
    case 26:
      return (
        Ti(t, e),
        t === null
          ? (n = Dh(e.type, null, e.pendingProps, null))
            ? (e.memoizedState = n)
            : K ||
              ((n = e.type),
              (t = e.pendingProps),
              (l = nr(Rn.current).createElement(n)),
              (l[_t] = e),
              (l[Vt] = t),
              wt(l, n, t),
              Tt(l),
              (e.stateNode = l))
          : (e.memoizedState = Dh(
              e.type,
              t.memoizedProps,
              e.pendingProps,
              t.memoizedState
            )),
        null
      );
    case 27:
      return (
        js(e),
        t === null &&
          K &&
          ((l = e.stateNode = fp(e.type, e.pendingProps, Rn.current)),
          (Ht = e),
          (Me = !0),
          (a = ct),
          Hn(e.type) ? ((Sc = a), (ct = ve(l.firstChild))) : (ct = a)),
        At(t, e, e.pendingProps.children, n),
        Ti(t, e),
        t === null && (e.flags |= 4194304),
        e.child
      );
    case 5:
      return (
        t === null &&
          K &&
          ((a = l = ct) &&
            ((l = Xg(l, e.type, e.pendingProps, Me)),
            l !== null
              ? ((e.stateNode = l),
                (Ht = e),
                (ct = ve(l.firstChild)),
                (Me = !1),
                (a = !0))
              : (a = !1)),
          a || rl(e)),
        js(e),
        (a = e.type),
        (u = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (l = u.children),
        vc(a, u) ? (l = null) : i !== null && vc(a, i) && (e.flags |= 32),
        e.memoizedState !== null &&
          ((a = So(t, e, rg, null, null, n)), (mu._currentValue = a)),
        Ti(t, e),
        At(t, e, l, n),
        e.child
      );
    case 6:
      return (
        t === null &&
          K &&
          ((t = n = ct) &&
            ((n = Vg(n, e.pendingProps, Me)),
            n !== null
              ? ((e.stateNode = n), (Ht = e), (ct = null), (t = !0))
              : (t = !1)),
          t || rl(e)),
        null
      );
    case 13:
      return Oy(t, e, n);
    case 4:
      return (
        Ni(e, e.stateNode.containerInfo),
        (l = e.pendingProps),
        t === null ? (e.child = oa(e, null, l, n)) : At(t, e, l, n),
        e.child
      );
    case 11:
      return ah(t, e, e.type, e.pendingProps, n);
    case 7:
      return At(t, e, e.pendingProps, n), e.child;
    case 8:
      return At(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return At(t, e, e.pendingProps.children, n), e.child;
    case 10:
      return (
        (l = e.pendingProps),
        cn(e, e.type, l.value),
        At(t, e, l.children, n),
        e.child
      );
    case 9:
      return (
        (a = e.type._context),
        (l = e.pendingProps.children),
        sl(e),
        (a = Nt(a)),
        (l = l(a)),
        (e.flags |= 1),
        At(t, e, l, n),
        e.child
      );
    case 14:
      return uh(t, e, e.type, e.pendingProps, n);
    case 15:
      return Ey(t, e, e.type, e.pendingProps, n);
    case 19:
      return Ry(t, e, n);
    case 31:
      return (
        (l = e.pendingProps),
        (n = e.mode),
        (l = { mode: l.mode, children: l.children }),
        t === null
          ? ((n = Fi(l, n)),
            (n.ref = e.ref),
            (e.child = n),
            (n.return = e),
            (e = n))
          : ((n = Je(t.child, l)),
            (n.ref = e.ref),
            (e.child = n),
            (n.return = e),
            (e = n)),
        e
      );
    case 22:
      return Ty(t, e, n);
    case 24:
      return (
        sl(e),
        (l = Nt(vt)),
        t === null
          ? ((a = po()),
            a === null &&
              ((a = et),
              (u = yo()),
              (a.pooledCache = u),
              u.refCount++,
              u !== null && (a.pooledCacheLanes |= n),
              (a = u)),
            (e.memoizedState = { parent: l, cache: a }),
            vo(e),
            cn(e, vt, a))
          : (t.lanes & n && (Ws(t, e), Wa(e, null, null, n), $a()),
            (a = t.memoizedState),
            (u = e.memoizedState),
            a.parent !== l
              ? ((a = { parent: l, cache: l }),
                (e.memoizedState = a),
                e.lanes === 0 &&
                  (e.memoizedState = e.updateQueue.baseState = a),
                cn(e, vt, l))
              : ((l = u.cache),
                cn(e, vt, l),
                l !== a.cache && ks(e, [vt], n, !0))),
        At(t, e, e.pendingProps.children, n),
        e.child
      );
    case 29:
      throw e.pendingProps;
  }
  throw Error(A(156, e.tag));
}
function Be(t) {
  t.flags |= 4;
}
function fh(t, e) {
  if (e.type !== 'stylesheet' || e.state.loading & 4) t.flags &= -16777217;
  else if (((t.flags |= 16777216), !mp(e))) {
    if (
      ((e = fe.current),
      e !== null &&
        ((Z & 4194048) === Z
          ? Ne !== null
          : ((Z & 62914560) !== Z && !(Z & 536870912)) || e !== Ne))
    )
      throw ((ka = $s), Cm);
    t.flags |= 8192;
  }
}
function ri(t, e) {
  e !== null && (t.flags |= 4),
    t.flags & 16384 &&
      ((e = t.tag !== 22 ? Wd() : 536870912), (t.lanes |= e), (fa |= e));
}
function _a(t, e) {
  if (!K)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = t.tail;
        for (var l = null; n !== null; )
          n.alternate !== null && (l = n), (n = n.sibling);
        l === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (l.sibling = null);
    }
}
function rt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    l = 0;
  if (e)
    for (var a = t.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (l |= a.subtreeFlags & 65011712),
        (l |= a.flags & 65011712),
        (a.return = t),
        (a = a.sibling);
  else
    for (a = t.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (l |= a.subtreeFlags),
        (l |= a.flags),
        (a.return = t),
        (a = a.sibling);
  return (t.subtreeFlags |= l), (t.childLanes = n), e;
}
function pg(t, e, n) {
  var l = e.pendingProps;
  switch ((mo(e), e.tag)) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return rt(e), null;
    case 1:
      return rt(e), null;
    case 3:
      return (
        (n = e.stateNode),
        (l = null),
        t !== null && (l = t.memoizedState.cache),
        e.memoizedState.cache !== l && (e.flags |= 2048),
        ke(vt),
        aa(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (t === null || t.child === null) &&
          (Ca(e)
            ? Be(e)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Yf())),
        rt(e),
        null
      );
    case 26:
      return (
        (n = e.memoizedState),
        t === null
          ? (Be(e),
            n !== null ? (rt(e), fh(e, n)) : (rt(e), (e.flags &= -16777217)))
          : n
          ? n !== t.memoizedState
            ? (Be(e), rt(e), fh(e, n))
            : (rt(e), (e.flags &= -16777217))
          : (t.memoizedProps !== l && Be(e), rt(e), (e.flags &= -16777217)),
        null
      );
    case 27:
      zi(e), (n = Rn.current);
      var a = e.type;
      if (t !== null && e.stateNode != null) t.memoizedProps !== l && Be(e);
      else {
        if (!l) {
          if (e.stateNode === null) throw Error(A(166));
          return rt(e), null;
        }
        (t = Ue.current),
          Ca(e) ? Lf(e) : ((t = fp(a, l, n)), (e.stateNode = t), Be(e));
      }
      return rt(e), null;
    case 5:
      if ((zi(e), (n = e.type), t !== null && e.stateNode != null))
        t.memoizedProps !== l && Be(e);
      else {
        if (!l) {
          if (e.stateNode === null) throw Error(A(166));
          return rt(e), null;
        }
        if (((t = Ue.current), Ca(e))) Lf(e);
        else {
          switch (((a = nr(Rn.current)), t)) {
            case 1:
              t = a.createElementNS('http://www.w3.org/2000/svg', n);
              break;
            case 2:
              t = a.createElementNS('http://www.w3.org/1998/Math/MathML', n);
              break;
            default:
              switch (n) {
                case 'svg':
                  t = a.createElementNS('http://www.w3.org/2000/svg', n);
                  break;
                case 'math':
                  t = a.createElementNS(
                    'http://www.w3.org/1998/Math/MathML',
                    n
                  );
                  break;
                case 'script':
                  (t = a.createElement('div')),
                    (t.innerHTML = '<script></script>'),
                    (t = t.removeChild(t.firstChild));
                  break;
                case 'select':
                  (t =
                    typeof l.is == 'string'
                      ? a.createElement('select', { is: l.is })
                      : a.createElement('select')),
                    l.multiple
                      ? (t.multiple = !0)
                      : l.size && (t.size = l.size);
                  break;
                default:
                  t =
                    typeof l.is == 'string'
                      ? a.createElement(n, { is: l.is })
                      : a.createElement(n);
              }
          }
          (t[_t] = e), (t[Vt] = l);
          t: for (a = e.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break t;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break t;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
          e.stateNode = t;
          t: switch ((wt(t, n, l), n)) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              t = !!l.autoFocus;
              break t;
            case 'img':
              t = !0;
              break t;
            default:
              t = !1;
          }
          t && Be(e);
        }
      }
      return rt(e), (e.flags &= -16777217), null;
    case 6:
      if (t && e.stateNode != null) t.memoizedProps !== l && Be(e);
      else {
        if (typeof l != 'string' && e.stateNode === null) throw Error(A(166));
        if (((t = Rn.current), Ca(e))) {
          if (
            ((t = e.stateNode),
            (n = e.memoizedProps),
            (l = null),
            (a = Ht),
            a !== null)
          )
            switch (a.tag) {
              case 27:
              case 5:
                l = a.memoizedProps;
            }
          (t[_t] = e),
            (t = !!(
              t.nodeValue === n ||
              (l !== null && l.suppressHydrationWarning === !0) ||
              sp(t.nodeValue, n)
            )),
            t || rl(e);
        } else (t = nr(t).createTextNode(l)), (t[_t] = e), (e.stateNode = t);
      }
      return rt(e), null;
    case 13:
      if (
        ((l = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (((a = Ca(e)), l !== null && l.dehydrated !== null)) {
          if (t === null) {
            if (!a) throw Error(A(318));
            if (
              ((a = e.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(A(317));
            a[_t] = e;
          } else
            _u(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          rt(e), (a = !1);
        } else
          (a = Yf()),
            t !== null &&
              t.memoizedState !== null &&
              (t.memoizedState.hydrationErrors = a),
            (a = !0);
        if (!a) return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
      }
      if ((Ke(e), e.flags & 128)) return (e.lanes = n), e;
      if (((n = l !== null), (t = t !== null && t.memoizedState !== null), n)) {
        (l = e.child),
          (a = null),
          l.alternate !== null &&
            l.alternate.memoizedState !== null &&
            l.alternate.memoizedState.cachePool !== null &&
            (a = l.alternate.memoizedState.cachePool.pool);
        var u = null;
        l.memoizedState !== null &&
          l.memoizedState.cachePool !== null &&
          (u = l.memoizedState.cachePool.pool),
          u !== a && (l.flags |= 2048);
      }
      return (
        n !== t && n && (e.child.flags |= 8192),
        ri(e, e.updateQueue),
        rt(e),
        null
      );
    case 4:
      return aa(), t === null && Lo(e.stateNode.containerInfo), rt(e), null;
    case 10:
      return ke(e.type), rt(e), null;
    case 19:
      if ((Rt(gt), (a = e.memoizedState), a === null)) return rt(e), null;
      if (((l = (e.flags & 128) !== 0), (u = a.rendering), u === null))
        if (l) _a(a, !1);
        else {
          if (ot !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((u = Ki(t)), u !== null)) {
                for (
                  e.flags |= 128,
                    _a(a, !1),
                    t = u.updateQueue,
                    e.updateQueue = t,
                    ri(e, t),
                    e.subtreeFlags = 0,
                    t = n,
                    n = e.child;
                  n !== null;

                )
                  xm(n, t), (n = n.sibling);
                return ut(gt, (gt.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          a.tail !== null &&
            _e() > Wi &&
            ((e.flags |= 128), (l = !0), _a(a, !1), (e.lanes = 4194304));
        }
      else {
        if (!l)
          if (((t = Ki(u)), t !== null)) {
            if (
              ((e.flags |= 128),
              (l = !0),
              (t = t.updateQueue),
              (e.updateQueue = t),
              ri(e, t),
              _a(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !u.alternate && !K)
            )
              return rt(e), null;
          } else
            2 * _e() - a.renderingStartTime > Wi &&
              n !== 536870912 &&
              ((e.flags |= 128), (l = !0), _a(a, !1), (e.lanes = 4194304));
        a.isBackwards
          ? ((u.sibling = e.child), (e.child = u))
          : ((t = a.last),
            t !== null ? (t.sibling = u) : (e.child = u),
            (a.last = u));
      }
      return a.tail !== null
        ? ((e = a.tail),
          (a.rendering = e),
          (a.tail = e.sibling),
          (a.renderingStartTime = _e()),
          (e.sibling = null),
          (t = gt.current),
          ut(gt, l ? (t & 1) | 2 : t & 1),
          e)
        : (rt(e), null);
    case 22:
    case 23:
      return (
        Ke(e),
        go(),
        (l = e.memoizedState !== null),
        t !== null
          ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
          : l && (e.flags |= 8192),
        l
          ? n & 536870912 &&
            !(e.flags & 128) &&
            (rt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : rt(e),
        (n = e.updateQueue),
        n !== null && ri(e, n.retryQueue),
        (n = null),
        t !== null &&
          t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (n = t.memoizedState.cachePool.pool),
        (l = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (l = e.memoizedState.cachePool.pool),
        l !== n && (e.flags |= 2048),
        t !== null && Rt(ll),
        null
      );
    case 24:
      return (
        (n = null),
        t !== null && (n = t.memoizedState.cache),
        e.memoizedState.cache !== n && (e.flags |= 2048),
        ke(vt),
        rt(e),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(A(156, e.tag));
}
function vg(t, e) {
  switch ((mo(e), e.tag)) {
    case 1:
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ke(vt),
        aa(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 26:
    case 27:
    case 5:
      return zi(e), null;
    case 13:
      if ((Ke(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(A(340));
        _u();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Rt(gt), null;
    case 4:
      return aa(), null;
    case 10:
      return ke(e.type), null;
    case 22:
    case 23:
      return (
        Ke(e),
        go(),
        t !== null && Rt(ll),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 24:
      return ke(vt), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function xy(t, e) {
  switch ((mo(e), e.tag)) {
    case 3:
      ke(vt), aa();
      break;
    case 26:
    case 27:
    case 5:
      zi(e);
      break;
    case 4:
      aa();
      break;
    case 13:
      Ke(e);
      break;
    case 19:
      Rt(gt);
      break;
    case 10:
      ke(e.type);
      break;
    case 22:
    case 23:
      Ke(e), go(), t !== null && Rt(ll);
      break;
    case 24:
      ke(vt);
  }
}
function qu(t, e) {
  try {
    var n = e.updateQueue,
      l = n !== null ? n.lastEffect : null;
    if (l !== null) {
      var a = l.next;
      n = a;
      do {
        if ((n.tag & t) === t) {
          l = void 0;
          var u = n.create,
            i = n.inst;
          (l = u()), (i.destroy = l);
        }
        n = n.next;
      } while (n !== a);
    }
  } catch (r) {
    tt(e, e.return, r);
  }
}
function Nn(t, e, n) {
  try {
    var l = e.updateQueue,
      a = l !== null ? l.lastEffect : null;
    if (a !== null) {
      var u = a.next;
      l = u;
      do {
        if ((l.tag & t) === t) {
          var i = l.inst,
            r = i.destroy;
          if (r !== void 0) {
            (i.destroy = void 0), (a = e);
            var s = n,
              c = r;
            try {
              c();
            } catch (f) {
              tt(a, s, f);
            }
          }
        }
        l = l.next;
      } while (l !== u);
    }
  } catch (f) {
    tt(e, e.return, f);
  }
}
function Dy(t) {
  var e = t.updateQueue;
  if (e !== null) {
    var n = t.stateNode;
    try {
      Nm(e, n);
    } catch (l) {
      tt(t, t.return, l);
    }
  }
}
function wy(t, e, n) {
  (n.props = ol(t.type, t.memoizedProps)), (n.state = t.memoizedState);
  try {
    n.componentWillUnmount();
  } catch (l) {
    tt(t, e, l);
  }
}
function Ia(t, e) {
  try {
    var n = t.ref;
    if (n !== null) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          var l = t.stateNode;
          break;
        case 30:
          l = t.stateNode;
          break;
        default:
          l = t.stateNode;
      }
      typeof n == 'function' ? (t.refCleanup = n(l)) : (n.current = l);
    }
  } catch (a) {
    tt(t, e, a);
  }
}
function Ce(t, e) {
  var n = t.ref,
    l = t.refCleanup;
  if (n !== null)
    if (typeof l == 'function')
      try {
        l();
      } catch (a) {
        tt(t, e, a);
      } finally {
        (t.refCleanup = null),
          (t = t.alternate),
          t != null && (t.refCleanup = null);
      }
    else if (typeof n == 'function')
      try {
        n(null);
      } catch (a) {
        tt(t, e, a);
      }
    else n.current = null;
}
function My(t) {
  var e = t.type,
    n = t.memoizedProps,
    l = t.stateNode;
  try {
    t: switch (e) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        n.autoFocus && l.focus();
        break t;
      case 'img':
        n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
    }
  } catch (a) {
    tt(t, t.return, a);
  }
}
function os(t, e, n) {
  try {
    var l = t.stateNode;
    qg(l, t.type, n, e), (l[Vt] = e);
  } catch (a) {
    tt(t, t.return, a);
  }
}
function Cy(t) {
  return (
    t.tag === 5 ||
    t.tag === 3 ||
    t.tag === 26 ||
    (t.tag === 27 && Hn(t.type)) ||
    t.tag === 4
  );
}
function fs(t) {
  t: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Cy(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (
        (t.tag === 27 && Hn(t.type)) ||
        t.flags & 2 ||
        t.child === null ||
        t.tag === 4
      )
        continue t;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function rc(t, e, n) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode),
      e
        ? (n.nodeType === 9
            ? n.body
            : n.nodeName === 'HTML'
            ? n.ownerDocument.body
            : n
          ).insertBefore(t, e)
        : ((e =
            n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
              ? n.ownerDocument.body
              : n),
          e.appendChild(t),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = wr));
  else if (
    l !== 4 &&
    (l === 27 && Hn(t.type) && ((n = t.stateNode), (e = null)),
    (t = t.child),
    t !== null)
  )
    for (rc(t, e, n), t = t.sibling; t !== null; ) rc(t, e, n), (t = t.sibling);
}
function $i(t, e, n) {
  var l = t.tag;
  if (l === 5 || l === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (
    l !== 4 &&
    (l === 27 && Hn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
  )
    for ($i(t, e, n), t = t.sibling; t !== null; ) $i(t, e, n), (t = t.sibling);
}
function Uy(t) {
  var e = t.stateNode,
    n = t.memoizedProps;
  try {
    for (var l = t.type, a = e.attributes; a.length; )
      e.removeAttributeNode(a[0]);
    wt(e, l, n), (e[_t] = t), (e[Vt] = n);
  } catch (u) {
    tt(t, t.return, u);
  }
}
var Ye = !1,
  mt = !1,
  hs = !1,
  hh = typeof WeakSet == 'function' ? WeakSet : Set,
  Et = null;
function gg(t, e) {
  if (((t = t.containerInfo), (yc = ir), (t = gm(t)), so(t))) {
    if ('selectionStart' in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      t: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var l = n.getSelection && n.getSelection();
        if (l && l.rangeCount !== 0) {
          n = l.anchorNode;
          var a = l.anchorOffset,
            u = l.focusNode;
          l = l.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break t;
          }
          var i = 0,
            r = -1,
            s = -1,
            c = 0,
            f = 0,
            o = t,
            h = null;
          e: for (;;) {
            for (
              var y;
              o !== n || (a !== 0 && o.nodeType !== 3) || (r = i + a),
                o !== u || (l !== 0 && o.nodeType !== 3) || (s = i + l),
                o.nodeType === 3 && (i += o.nodeValue.length),
                (y = o.firstChild) !== null;

            )
              (h = o), (o = y);
            for (;;) {
              if (o === t) break e;
              if (
                (h === n && ++c === a && (r = i),
                h === u && ++f === l && (s = i),
                (y = o.nextSibling) !== null)
              )
                break;
              (o = h), (h = o.parentNode);
            }
            o = y;
          }
          n = r === -1 || s === -1 ? null : { start: r, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    pc = { focusedElem: t, selectionRange: n }, ir = !1, Et = e;
    Et !== null;

  )
    if (((e = Et), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null))
      (t.return = e), (Et = t);
    else
      for (; Et !== null; ) {
        switch (((e = Et), (u = e.alternate), (t = e.flags), e.tag)) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (t & 1024 && u !== null) {
              (t = void 0),
                (n = e),
                (a = u.memoizedProps),
                (u = u.memoizedState),
                (l = n.stateNode);
              try {
                var b = ol(n.type, a, n.elementType === n.type);
                (t = l.getSnapshotBeforeUpdate(b, u)),
                  (l.__reactInternalSnapshotBeforeUpdate = t);
              } catch (S) {
                tt(n, n.return, S);
              }
            }
            break;
          case 3:
            if (t & 1024) {
              if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9))
                gc(t);
              else if (n === 1)
                switch (t.nodeName) {
                  case 'HEAD':
                  case 'HTML':
                  case 'BODY':
                    gc(t);
                    break;
                  default:
                    t.textContent = '';
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (t & 1024) throw Error(A(163));
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (Et = t);
          break;
        }
        Et = e.return;
      }
}
function _y(t, e, n) {
  var l = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      ln(t, n), l & 4 && qu(5, n);
      break;
    case 1:
      if ((ln(t, n), l & 4))
        if (((t = n.stateNode), e === null))
          try {
            t.componentDidMount();
          } catch (i) {
            tt(n, n.return, i);
          }
        else {
          var a = ol(n.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            tt(n, n.return, i);
          }
        }
      l & 64 && Dy(n), l & 512 && Ia(n, n.return);
      break;
    case 3:
      if ((ln(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        try {
          Nm(t, e);
        } catch (i) {
          tt(n, n.return, i);
        }
      }
      break;
    case 27:
      e === null && l & 4 && Uy(n);
    case 26:
    case 5:
      ln(t, n), e === null && l & 4 && My(n), l & 512 && Ia(n, n.return);
      break;
    case 12:
      ln(t, n);
      break;
    case 13:
      ln(t, n),
        l & 4 && jy(t, n),
        l & 64 &&
          ((t = n.memoizedState),
          t !== null &&
            ((t = t.dehydrated),
            t !== null && ((n = Dg.bind(null, n)), Zg(t, n))));
      break;
    case 22:
      if (((l = n.memoizedState !== null || Ye), !l)) {
        (e = (e !== null && e.memoizedState !== null) || mt), (a = Ye);
        var u = mt;
        (Ye = l),
          (mt = e) && !u ? an(t, n, (n.subtreeFlags & 8772) !== 0) : ln(t, n),
          (Ye = a),
          (mt = u);
      }
      break;
    case 30:
      break;
    default:
      ln(t, n);
  }
}
function Ny(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Ny(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 && ((e = t.stateNode), e !== null && no(e)),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
var lt = null,
  Yt = !1;
function qe(t, e, n) {
  for (n = n.child; n !== null; ) zy(t, e, n), (n = n.sibling);
}
function zy(t, e, n) {
  if ($t && typeof $t.onCommitFiberUnmount == 'function')
    try {
      $t.onCommitFiberUnmount(Du, n);
    } catch {}
  switch (n.tag) {
    case 26:
      mt || Ce(n, e),
        qe(t, e, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
      break;
    case 27:
      mt || Ce(n, e);
      var l = lt,
        a = Yt;
      Hn(n.type) && ((lt = n.stateNode), (Yt = !1)),
        qe(t, e, n),
        lu(n.stateNode),
        (lt = l),
        (Yt = a);
      break;
    case 5:
      mt || Ce(n, e);
    case 6:
      if (
        ((l = lt),
        (a = Yt),
        (lt = null),
        qe(t, e, n),
        (lt = l),
        (Yt = a),
        lt !== null)
      )
        if (Yt)
          try {
            (lt.nodeType === 9
              ? lt.body
              : lt.nodeName === 'HTML'
              ? lt.ownerDocument.body
              : lt
            ).removeChild(n.stateNode);
          } catch (u) {
            tt(n, e, u);
          }
        else
          try {
            lt.removeChild(n.stateNode);
          } catch (u) {
            tt(n, e, u);
          }
      break;
    case 18:
      lt !== null &&
        (Yt
          ? ((t = lt),
            Rh(
              t.nodeType === 9
                ? t.body
                : t.nodeName === 'HTML'
                ? t.ownerDocument.body
                : t,
              n.stateNode
            ),
            vu(t))
          : Rh(lt, n.stateNode));
      break;
    case 4:
      (l = lt),
        (a = Yt),
        (lt = n.stateNode.containerInfo),
        (Yt = !0),
        qe(t, e, n),
        (lt = l),
        (Yt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      mt || Nn(2, n, e), mt || Nn(4, n, e), qe(t, e, n);
      break;
    case 1:
      mt ||
        (Ce(n, e),
        (l = n.stateNode),
        typeof l.componentWillUnmount == 'function' && wy(n, e, l)),
        qe(t, e, n);
      break;
    case 21:
      qe(t, e, n);
      break;
    case 22:
      (mt = (l = mt) || n.memoizedState !== null), qe(t, e, n), (mt = l);
      break;
    default:
      qe(t, e, n);
  }
}
function jy(t, e) {
  if (
    e.memoizedState === null &&
    ((t = e.alternate),
    t !== null &&
      ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
  )
    try {
      vu(t);
    } catch (n) {
      tt(e, e.return, n);
    }
}
function bg(t) {
  switch (t.tag) {
    case 13:
    case 19:
      var e = t.stateNode;
      return e === null && (e = t.stateNode = new hh()), e;
    case 22:
      return (
        (t = t.stateNode),
        (e = t._retryCache),
        e === null && (e = t._retryCache = new hh()),
        e
      );
    default:
      throw Error(A(435, t.tag));
  }
}
function ds(t, e) {
  var n = bg(t);
  e.forEach(function (l) {
    var a = wg.bind(null, t, l);
    n.has(l) || (n.add(l), l.then(a, a));
  });
}
function Kt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var a = n[l],
        u = t,
        i = e,
        r = i;
      t: for (; r !== null; ) {
        switch (r.tag) {
          case 27:
            if (Hn(r.type)) {
              (lt = r.stateNode), (Yt = !1);
              break t;
            }
            break;
          case 5:
            (lt = r.stateNode), (Yt = !1);
            break t;
          case 3:
          case 4:
            (lt = r.stateNode.containerInfo), (Yt = !0);
            break t;
        }
        r = r.return;
      }
      if (lt === null) throw Error(A(160));
      zy(u, i, a),
        (lt = null),
        (Yt = !1),
        (u = a.alternate),
        u !== null && (u.return = null),
        (a.return = null);
    }
  if (e.subtreeFlags & 13878)
    for (e = e.child; e !== null; ) Hy(e, t), (e = e.sibling);
}
var ye = null;
function Hy(t, e) {
  var n = t.alternate,
    l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Kt(e, t),
        Jt(t),
        l & 4 && (Nn(3, t, t.return), qu(3, t), Nn(5, t, t.return));
      break;
    case 1:
      Kt(e, t),
        Jt(t),
        l & 512 && (mt || n === null || Ce(n, n.return)),
        l & 64 &&
          Ye &&
          ((t = t.updateQueue),
          t !== null &&
            ((l = t.callbacks),
            l !== null &&
              ((n = t.shared.hiddenCallbacks),
              (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
      break;
    case 26:
      var a = ye;
      if (
        (Kt(e, t),
        Jt(t),
        l & 512 && (mt || n === null || Ce(n, n.return)),
        l & 4)
      ) {
        var u = n !== null ? n.memoizedState : null;
        if (((l = t.memoizedState), n === null))
          if (l === null)
            if (t.stateNode === null) {
              t: {
                (l = t.type), (n = t.memoizedProps), (a = a.ownerDocument || a);
                e: switch (l) {
                  case 'title':
                    (u = a.getElementsByTagName('title')[0]),
                      (!u ||
                        u[Cu] ||
                        u[_t] ||
                        u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                        u.hasAttribute('itemprop')) &&
                        ((u = a.createElement(l)),
                        a.head.insertBefore(
                          u,
                          a.querySelector('head > title')
                        )),
                      wt(u, l, n),
                      (u[_t] = t),
                      Tt(u),
                      (l = u);
                    break t;
                  case 'link':
                    var i = Mh('link', 'href', a).get(l + (n.href || ''));
                    if (i) {
                      for (var r = 0; r < i.length; r++)
                        if (
                          ((u = i[r]),
                          u.getAttribute('href') ===
                            (n.href == null || n.href === '' ? null : n.href) &&
                            u.getAttribute('rel') ===
                              (n.rel == null ? null : n.rel) &&
                            u.getAttribute('title') ===
                              (n.title == null ? null : n.title) &&
                            u.getAttribute('crossorigin') ===
                              (n.crossOrigin == null ? null : n.crossOrigin))
                        ) {
                          i.splice(r, 1);
                          break e;
                        }
                    }
                    (u = a.createElement(l)),
                      wt(u, l, n),
                      a.head.appendChild(u);
                    break;
                  case 'meta':
                    if (
                      (i = Mh('meta', 'content', a).get(l + (n.content || '')))
                    ) {
                      for (r = 0; r < i.length; r++)
                        if (
                          ((u = i[r]),
                          u.getAttribute('content') ===
                            (n.content == null ? null : '' + n.content) &&
                            u.getAttribute('name') ===
                              (n.name == null ? null : n.name) &&
                            u.getAttribute('property') ===
                              (n.property == null ? null : n.property) &&
                            u.getAttribute('http-equiv') ===
                              (n.httpEquiv == null ? null : n.httpEquiv) &&
                            u.getAttribute('charset') ===
                              (n.charSet == null ? null : n.charSet))
                        ) {
                          i.splice(r, 1);
                          break e;
                        }
                    }
                    (u = a.createElement(l)),
                      wt(u, l, n),
                      a.head.appendChild(u);
                    break;
                  default:
                    throw Error(A(468, l));
                }
                (u[_t] = t), Tt(u), (l = u);
              }
              t.stateNode = l;
            } else Ch(a, t.type, t.stateNode);
          else t.stateNode = wh(a, l, t.memoizedProps);
        else
          u !== l
            ? (u === null
                ? n.stateNode !== null &&
                  ((n = n.stateNode), n.parentNode.removeChild(n))
                : u.count--,
              l === null
                ? Ch(a, t.type, t.stateNode)
                : wh(a, l, t.memoizedProps))
            : l === null &&
              t.stateNode !== null &&
              os(t, t.memoizedProps, n.memoizedProps);
      }
      break;
    case 27:
      Kt(e, t),
        Jt(t),
        l & 512 && (mt || n === null || Ce(n, n.return)),
        n !== null && l & 4 && os(t, t.memoizedProps, n.memoizedProps);
      break;
    case 5:
      if (
        (Kt(e, t),
        Jt(t),
        l & 512 && (mt || n === null || Ce(n, n.return)),
        t.flags & 32)
      ) {
        a = t.stateNode;
        try {
          ia(a, '');
        } catch (y) {
          tt(t, t.return, y);
        }
      }
      l & 4 &&
        t.stateNode != null &&
        ((a = t.memoizedProps), os(t, a, n !== null ? n.memoizedProps : a)),
        l & 1024 && (hs = !0);
      break;
    case 6:
      if ((Kt(e, t), Jt(t), l & 4)) {
        if (t.stateNode === null) throw Error(A(162));
        (l = t.memoizedProps), (n = t.stateNode);
        try {
          n.nodeValue = l;
        } catch (y) {
          tt(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        ((Ai = null),
        (a = ye),
        (ye = lr(e.containerInfo)),
        Kt(e, t),
        (ye = a),
        Jt(t),
        l & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vu(e.containerInfo);
        } catch (y) {
          tt(t, t.return, y);
        }
      hs && ((hs = !1), By(t));
      break;
    case 4:
      (l = ye), (ye = lr(t.stateNode.containerInfo)), Kt(e, t), Jt(t), (ye = l);
      break;
    case 12:
      Kt(e, t), Jt(t);
      break;
    case 13:
      Kt(e, t),
        Jt(t),
        t.child.flags & 8192 &&
          (t.memoizedState !== null) !=
            (n !== null && n.memoizedState !== null) &&
          (Ho = _e()),
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((t.updateQueue = null), ds(t, l)));
      break;
    case 22:
      a = t.memoizedState !== null;
      var s = n !== null && n.memoizedState !== null,
        c = Ye,
        f = mt;
      if (
        ((Ye = c || a),
        (mt = f || s),
        Kt(e, t),
        (mt = f),
        (Ye = c),
        Jt(t),
        l & 8192)
      )
        t: for (
          e = t.stateNode,
            e._visibility = a ? e._visibility & -2 : e._visibility | 1,
            a && (n === null || s || Ye || mt || Xn(t)),
            n = null,
            e = t;
          ;

        ) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              s = n = e;
              try {
                if (((u = s.stateNode), a))
                  (i = u.style),
                    typeof i.setProperty == 'function'
                      ? i.setProperty('display', 'none', 'important')
                      : (i.display = 'none');
                else {
                  r = s.stateNode;
                  var o = s.memoizedProps.style,
                    h =
                      o != null && o.hasOwnProperty('display')
                        ? o.display
                        : null;
                  r.style.display =
                    h == null || typeof h == 'boolean' ? '' : ('' + h).trim();
                }
              } catch (y) {
                tt(s, s.return, y);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              s = e;
              try {
                s.stateNode.nodeValue = a ? '' : s.memoizedProps;
              } catch (y) {
                tt(s, s.return, y);
              }
            }
          } else if (
            ((e.tag !== 22 && e.tag !== 23) ||
              e.memoizedState === null ||
              e === t) &&
            e.child !== null
          ) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), (e = e.return);
          }
          n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling);
        }
      l & 4 &&
        ((l = t.updateQueue),
        l !== null &&
          ((n = l.retryQueue),
          n !== null && ((l.retryQueue = null), ds(t, n))));
      break;
    case 19:
      Kt(e, t),
        Jt(t),
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((t.updateQueue = null), ds(t, l)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      Kt(e, t), Jt(t);
  }
}
function Jt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      for (var n, l = t.return; l !== null; ) {
        if (Cy(l)) {
          n = l;
          break;
        }
        l = l.return;
      }
      if (n == null) throw Error(A(160));
      switch (n.tag) {
        case 27:
          var a = n.stateNode,
            u = fs(t);
          $i(t, u, a);
          break;
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (ia(i, ''), (n.flags &= -33));
          var r = fs(t);
          $i(t, r, i);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            c = fs(t);
          rc(t, c, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (f) {
      tt(t, t.return, f);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function By(t) {
  if (t.subtreeFlags & 1024)
    for (t = t.child; t !== null; ) {
      var e = t;
      By(e),
        e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
        (t = t.sibling);
    }
}
function ln(t, e) {
  if (e.subtreeFlags & 8772)
    for (e = e.child; e !== null; ) _y(t, e.alternate, e), (e = e.sibling);
}
function Xn(t) {
  for (t = t.child; t !== null; ) {
    var e = t;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nn(4, e, e.return), Xn(e);
        break;
      case 1:
        Ce(e, e.return);
        var n = e.stateNode;
        typeof n.componentWillUnmount == 'function' && wy(e, e.return, n),
          Xn(e);
        break;
      case 27:
        lu(e.stateNode);
      case 26:
      case 5:
        Ce(e, e.return), Xn(e);
        break;
      case 22:
        e.memoizedState === null && Xn(e);
        break;
      case 30:
        Xn(e);
        break;
      default:
        Xn(e);
    }
    t = t.sibling;
  }
}
function an(t, e, n) {
  for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
    var l = e.alternate,
      a = t,
      u = e,
      i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        an(a, u, n), qu(4, u);
        break;
      case 1:
        if (
          (an(a, u, n),
          (l = u),
          (a = l.stateNode),
          typeof a.componentDidMount == 'function')
        )
          try {
            a.componentDidMount();
          } catch (c) {
            tt(l, l.return, c);
          }
        if (((l = u), (a = l.updateQueue), a !== null)) {
          var r = l.stateNode;
          try {
            var s = a.shared.hiddenCallbacks;
            if (s !== null)
              for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++)
                _m(s[a], r);
          } catch (c) {
            tt(l, l.return, c);
          }
        }
        n && i & 64 && Dy(u), Ia(u, u.return);
        break;
      case 27:
        Uy(u);
      case 26:
      case 5:
        an(a, u, n), n && l === null && i & 4 && My(u), Ia(u, u.return);
        break;
      case 12:
        an(a, u, n);
        break;
      case 13:
        an(a, u, n), n && i & 4 && jy(a, u);
        break;
      case 22:
        u.memoizedState === null && an(a, u, n), Ia(u, u.return);
        break;
      case 30:
        break;
      default:
        an(a, u, n);
    }
    e = e.sibling;
  }
}
function _o(t, e) {
  var n = null;
  t !== null &&
    t.memoizedState !== null &&
    t.memoizedState.cachePool !== null &&
    (n = t.memoizedState.cachePool.pool),
    (t = null),
    e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (t = e.memoizedState.cachePool.pool),
    t !== n && (t != null && t.refCount++, n != null && zu(n));
}
function No(t, e) {
  (t = null),
    e.alternate !== null && (t = e.alternate.memoizedState.cache),
    (e = e.memoizedState.cache),
    e !== t && (e.refCount++, t != null && zu(t));
}
function Oe(t, e, n, l) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) qy(t, e, n, l), (e = e.sibling);
}
function qy(t, e, n, l) {
  var a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      Oe(t, e, n, l), a & 2048 && qu(9, e);
      break;
    case 1:
      Oe(t, e, n, l);
      break;
    case 3:
      Oe(t, e, n, l),
        a & 2048 &&
          ((t = null),
          e.alternate !== null && (t = e.alternate.memoizedState.cache),
          (e = e.memoizedState.cache),
          e !== t && (e.refCount++, t != null && zu(t)));
      break;
    case 12:
      if (a & 2048) {
        Oe(t, e, n, l), (t = e.stateNode);
        try {
          var u = e.memoizedProps,
            i = u.id,
            r = u.onPostCommit;
          typeof r == 'function' &&
            r(
              i,
              e.alternate === null ? 'mount' : 'update',
              t.passiveEffectDuration,
              -0
            );
        } catch (s) {
          tt(e, e.return, s);
        }
      } else Oe(t, e, n, l);
      break;
    case 13:
      Oe(t, e, n, l);
      break;
    case 23:
      break;
    case 22:
      (u = e.stateNode),
        (i = e.alternate),
        e.memoizedState !== null
          ? u._visibility & 2
            ? Oe(t, e, n, l)
            : tu(t, e)
          : u._visibility & 2
          ? Oe(t, e, n, l)
          : ((u._visibility |= 2),
            El(t, e, n, l, (e.subtreeFlags & 10256) !== 0)),
        a & 2048 && _o(i, e);
      break;
    case 24:
      Oe(t, e, n, l), a & 2048 && No(e.alternate, e);
      break;
    default:
      Oe(t, e, n, l);
  }
}
function El(t, e, n, l, a) {
  for (a = a && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
    var u = t,
      i = e,
      r = n,
      s = l,
      c = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        El(u, i, r, s, a), qu(8, i);
        break;
      case 23:
        break;
      case 22:
        var f = i.stateNode;
        i.memoizedState !== null
          ? f._visibility & 2
            ? El(u, i, r, s, a)
            : tu(u, i)
          : ((f._visibility |= 2), El(u, i, r, s, a)),
          a && c & 2048 && _o(i.alternate, i);
        break;
      case 24:
        El(u, i, r, s, a), a && c & 2048 && No(i.alternate, i);
        break;
      default:
        El(u, i, r, s, a);
    }
    e = e.sibling;
  }
}
function tu(t, e) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) {
      var n = t,
        l = e,
        a = l.flags;
      switch (l.tag) {
        case 22:
          tu(n, l), a & 2048 && _o(l.alternate, l);
          break;
        case 24:
          tu(n, l), a & 2048 && No(l.alternate, l);
          break;
        default:
          tu(n, l);
      }
      e = e.sibling;
    }
}
var Qa = 8192;
function vl(t) {
  if (t.subtreeFlags & Qa)
    for (t = t.child; t !== null; ) Ly(t), (t = t.sibling);
}
function Ly(t) {
  switch (t.tag) {
    case 26:
      vl(t),
        t.flags & Qa &&
          t.memoizedState !== null &&
          ab(ye, t.memoizedState, t.memoizedProps);
      break;
    case 5:
      vl(t);
      break;
    case 3:
    case 4:
      var e = ye;
      (ye = lr(t.stateNode.containerInfo)), vl(t), (ye = e);
      break;
    case 22:
      t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && e.memoizedState !== null
          ? ((e = Qa), (Qa = 16777216), vl(t), (Qa = e))
          : vl(t));
      break;
    default:
      vl(t);
  }
}
function Qy(t) {
  var e = t.alternate;
  if (e !== null && ((t = e.child), t !== null)) {
    e.child = null;
    do (e = t.sibling), (t.sibling = null), (t = e);
    while (t !== null);
  }
}
function Na(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var l = e[n];
        (Et = l), Gy(l, t);
      }
    Qy(t);
  }
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) Yy(t), (t = t.sibling);
}
function Yy(t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      Na(t), t.flags & 2048 && Nn(9, t, t.return);
      break;
    case 3:
      Na(t);
      break;
    case 12:
      Na(t);
      break;
    case 22:
      var e = t.stateNode;
      t.memoizedState !== null &&
      e._visibility & 2 &&
      (t.return === null || t.return.tag !== 13)
        ? ((e._visibility &= -3), Oi(t))
        : Na(t);
      break;
    default:
      Na(t);
  }
}
function Oi(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var l = e[n];
        (Et = l), Gy(l, t);
      }
    Qy(t);
  }
  for (t = t.child; t !== null; ) {
    switch (((e = t), e.tag)) {
      case 0:
      case 11:
      case 15:
        Nn(8, e, e.return), Oi(e);
        break;
      case 22:
        (n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), Oi(e));
        break;
      default:
        Oi(e);
    }
    t = t.sibling;
  }
}
function Gy(t, e) {
  for (; Et !== null; ) {
    var n = Et;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Nn(8, n, e);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var l = n.memoizedState.cachePool.pool;
          l != null && l.refCount++;
        }
        break;
      case 24:
        zu(n.memoizedState.cache);
    }
    if (((l = n.child), l !== null)) (l.return = n), (Et = l);
    else
      t: for (n = t; Et !== null; ) {
        l = Et;
        var a = l.sibling,
          u = l.return;
        if ((Ny(l), l === n)) {
          Et = null;
          break t;
        }
        if (a !== null) {
          (a.return = u), (Et = a);
          break t;
        }
        Et = u;
      }
  }
}
var Sg = {
    getCacheForType: function (t) {
      var e = Nt(vt),
        n = e.data.get(t);
      return n === void 0 && ((n = t()), e.data.set(t, n)), n;
    },
  },
  Eg = typeof WeakMap == 'function' ? WeakMap : Map,
  $ = 0,
  et = null,
  G = null,
  Z = 0,
  F = 0,
  kt = null,
  Tn = !1,
  ba = !1,
  zo = !1,
  Ie = 0,
  ot = 0,
  zn = 0,
  al = 0,
  jo = 0,
  oe = 0,
  fa = 0,
  eu = null,
  Gt = null,
  sc = !1,
  Ho = 0,
  Wi = 1 / 0,
  Pi = null,
  Dn = null,
  Dt = 0,
  wn = null,
  ha = null,
  Xl = 0,
  cc = 0,
  oc = null,
  Xy = null,
  nu = 0,
  fc = null;
function Pt() {
  if ($ & 2 && Z !== 0) return Z & -Z;
  if (j.T !== null) {
    var t = ra;
    return t !== 0 ? t : qo();
  }
  return tm();
}
function Vy() {
  oe === 0 && (oe = !(Z & 536870912) || K ? $d() : 536870912);
  var t = fe.current;
  return t !== null && (t.flags |= 32), oe;
}
function It(t, e, n) {
  ((t === et && (F === 2 || F === 9)) || t.cancelPendingCommit !== null) &&
    (da(t, 0), On(t, Z, oe, !1)),
    Mu(t, n),
    (!($ & 2) || t !== et) &&
      (t === et && (!($ & 2) && (al |= n), ot === 4 && On(t, Z, oe, !1)),
      je(t));
}
function Zy(t, e, n) {
  if ($ & 6) throw Error(A(327));
  var l = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || wu(t, e),
    a = l ? Rg(t, e) : ms(t, e, !0),
    u = l;
  do {
    if (a === 0) {
      ba && !l && On(t, e, 0, !1);
      break;
    } else {
      if (((n = t.current.alternate), u && !Tg(n))) {
        (a = ms(t, e, !1)), (u = !1);
        continue;
      }
      if (a === 2) {
        if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
        else
          (i = t.pendingLanes & -536870913),
            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
        if (i !== 0) {
          e = i;
          t: {
            var r = t;
            a = eu;
            var s = r.current.memoizedState.isDehydrated;
            if ((s && (da(r, i).flags |= 256), (i = ms(r, i, !1)), i !== 2)) {
              if (zo && !s) {
                (r.errorRecoveryDisabledLanes |= u), (al |= u), (a = 4);
                break t;
              }
              (u = Gt),
                (Gt = a),
                u !== null && (Gt === null ? (Gt = u) : Gt.push.apply(Gt, u));
            }
            a = i;
          }
          if (((u = !1), a !== 2)) continue;
        }
      }
      if (a === 1) {
        da(t, 0), On(t, e, 0, !0);
        break;
      }
      t: {
        switch (((l = t), (u = a), u)) {
          case 0:
          case 1:
            throw Error(A(345));
          case 4:
            if ((e & 4194048) !== e) break;
          case 6:
            On(l, e, oe, !Tn);
            break t;
          case 2:
            Gt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(A(329));
        }
        if ((e & 62914560) === e && ((a = Ho + 300 - _e()), 10 < a)) {
          if ((On(l, e, oe, !Tn), yr(l, 0, !0) !== 0)) break t;
          l.timeoutHandle = op(
            dh.bind(null, l, n, Gt, Pi, sc, e, oe, al, fa, Tn, u, 2, -0, 0),
            a
          );
          break t;
        }
        dh(l, n, Gt, Pi, sc, e, oe, al, fa, Tn, u, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  je(t);
}
function dh(t, e, n, l, a, u, i, r, s, c, f, o, h, y) {
  if (
    ((t.timeoutHandle = -1),
    (o = e.subtreeFlags),
    (o & 8192 || (o & 16785408) === 16785408) &&
      ((du = { stylesheets: null, count: 0, unsuspend: lb }),
      Ly(e),
      (o = ub()),
      o !== null))
  ) {
    (t.cancelPendingCommit = o(
      yh.bind(null, t, e, u, n, l, a, i, r, s, f, 1, h, y)
    )),
      On(t, u, i, !c);
    return;
  }
  yh(t, e, u, n, l, a, i, r, s);
}
function Tg(t) {
  for (var e = t; ; ) {
    var n = e.tag;
    if (
      (n === 0 || n === 11 || n === 15) &&
      e.flags & 16384 &&
      ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
    )
      for (var l = 0; l < n.length; l++) {
        var a = n[l],
          u = a.getSnapshot;
        a = a.value;
        try {
          if (!ee(u(), a)) return !1;
        } catch {
          return !1;
        }
      }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function On(t, e, n, l) {
  (e &= ~jo),
    (e &= ~al),
    (t.suspendedLanes |= e),
    (t.pingedLanes &= ~e),
    l && (t.warmLanes |= e),
    (l = t.expirationTimes);
  for (var a = e; 0 < a; ) {
    var u = 31 - Wt(a),
      i = 1 << u;
    (l[u] = -1), (a &= ~i);
  }
  n !== 0 && Pd(t, n, e);
}
function Ar() {
  return $ & 6 ? !0 : (Lu(0), !1);
}
function Bo() {
  if (G !== null) {
    if (F === 0) var t = G.return;
    else (t = G), (Ze = pl = null), Oo(t), (Gl = null), (ou = 0), (t = G);
    for (; t !== null; ) xy(t.alternate, t), (t = t.return);
    G = null;
  }
}
function da(t, e) {
  var n = t.timeoutHandle;
  n !== -1 && ((t.timeoutHandle = -1), Qg(n)),
    (n = t.cancelPendingCommit),
    n !== null && ((t.cancelPendingCommit = null), n()),
    Bo(),
    (et = t),
    (G = n = Je(t.current, null)),
    (Z = e),
    (F = 0),
    (kt = null),
    (Tn = !1),
    (ba = wu(t, e)),
    (zo = !1),
    (fa = oe = jo = al = zn = ot = 0),
    (Gt = eu = null),
    (sc = !1),
    e & 8 && (e |= e & 32);
  var l = t.entangledLanes;
  if (l !== 0)
    for (t = t.entanglements, l &= e; 0 < l; ) {
      var a = 31 - Wt(l),
        u = 1 << a;
      (e |= t[a]), (l &= ~u);
    }
  return (Ie = e), br(), n;
}
function Ky(t, e) {
  (q = null),
    (j.H = Zi),
    e === ju || e === Er
      ? ((e = Zf()), (F = 3))
      : e === Cm
      ? ((e = Zf()), (F = 4))
      : (F =
          e === Sy
            ? 8
            : e !== null && typeof e == 'object' && typeof e.then == 'function'
            ? 6
            : 1),
    (kt = e),
    G === null && ((ot = 1), ki(t, ce(e, t.current)));
}
function Jy() {
  var t = j.H;
  return (j.H = Zi), t === null ? Zi : t;
}
function ky() {
  var t = j.A;
  return (j.A = Sg), t;
}
function hc() {
  (ot = 4),
    Tn || ((Z & 4194048) !== Z && fe.current !== null) || (ba = !0),
    (!(zn & 134217727) && !(al & 134217727)) ||
      et === null ||
      On(et, Z, oe, !1);
}
function ms(t, e, n) {
  var l = $;
  $ |= 2;
  var a = Jy(),
    u = ky();
  (et !== t || Z !== e) && ((Pi = null), da(t, e)), (e = !1);
  var i = ot;
  t: do
    try {
      if (F !== 0 && G !== null) {
        var r = G,
          s = kt;
        switch (F) {
          case 8:
            Bo(), (i = 6);
            break t;
          case 3:
          case 2:
          case 9:
          case 6:
            fe.current === null && (e = !0);
            var c = F;
            if (((F = 0), (kt = null), zl(t, r, s, c), n && ba)) {
              i = 0;
              break t;
            }
            break;
          default:
            (c = F), (F = 0), (kt = null), zl(t, r, s, c);
        }
      }
      Og(), (i = ot);
      break;
    } catch (f) {
      Ky(t, f);
    }
  while (!0);
  return (
    e && t.shellSuspendCounter++,
    (Ze = pl = null),
    ($ = l),
    (j.H = a),
    (j.A = u),
    G === null && ((et = null), (Z = 0), br()),
    i
  );
}
function Og() {
  for (; G !== null; ) Fy(G);
}
function Rg(t, e) {
  var n = $;
  $ |= 2;
  var l = Jy(),
    a = ky();
  et !== t || Z !== e
    ? ((Pi = null), (Wi = _e() + 500), da(t, e))
    : (ba = wu(t, e));
  t: do
    try {
      if (F !== 0 && G !== null) {
        e = G;
        var u = kt;
        e: switch (F) {
          case 1:
            (F = 0), (kt = null), zl(t, e, u, 1);
            break;
          case 2:
          case 9:
            if (Vf(u)) {
              (F = 0), (kt = null), mh(e);
              break;
            }
            (e = function () {
              (F !== 2 && F !== 9) || et !== t || (F = 7), je(t);
            }),
              u.then(e, e);
            break t;
          case 3:
            F = 7;
            break t;
          case 4:
            F = 5;
            break t;
          case 7:
            Vf(u)
              ? ((F = 0), (kt = null), mh(e))
              : ((F = 0), (kt = null), zl(t, e, u, 7));
            break;
          case 5:
            var i = null;
            switch (G.tag) {
              case 26:
                i = G.memoizedState;
              case 5:
              case 27:
                var r = G;
                if (!i || mp(i)) {
                  (F = 0), (kt = null);
                  var s = r.sibling;
                  if (s !== null) G = s;
                  else {
                    var c = r.return;
                    c !== null ? ((G = c), xr(c)) : (G = null);
                  }
                  break e;
                }
            }
            (F = 0), (kt = null), zl(t, e, u, 5);
            break;
          case 6:
            (F = 0), (kt = null), zl(t, e, u, 6);
            break;
          case 8:
            Bo(), (ot = 6);
            break t;
          default:
            throw Error(A(462));
        }
      }
      Ag();
      break;
    } catch (f) {
      Ky(t, f);
    }
  while (!0);
  return (
    (Ze = pl = null),
    (j.H = l),
    (j.A = a),
    ($ = n),
    G !== null ? 0 : ((et = null), (Z = 0), br(), ot)
  );
}
function Ag() {
  for (; G !== null && !Jv(); ) Fy(G);
}
function Fy(t) {
  var e = Ay(t.alternate, t, Ie);
  (t.memoizedProps = t.pendingProps), e === null ? xr(t) : (G = e);
}
function mh(t) {
  var e = t,
    n = e.alternate;
  switch (e.tag) {
    case 15:
    case 0:
      e = rh(n, e, e.pendingProps, e.type, void 0, Z);
      break;
    case 11:
      e = rh(n, e, e.pendingProps, e.type.render, e.ref, Z);
      break;
    case 5:
      Oo(e);
    default:
      xy(n, e), (e = G = xm(e, Ie)), (e = Ay(n, e, Ie));
  }
  (t.memoizedProps = t.pendingProps), e === null ? xr(t) : (G = e);
}
function zl(t, e, n, l) {
  (Ze = pl = null), Oo(e), (Gl = null), (ou = 0);
  var a = e.return;
  try {
    if (mg(t, a, e, n, Z)) {
      (ot = 1), ki(t, ce(n, t.current)), (G = null);
      return;
    }
  } catch (u) {
    if (a !== null) throw ((G = a), u);
    (ot = 1), ki(t, ce(n, t.current)), (G = null);
    return;
  }
  e.flags & 32768
    ? (K || l === 1
        ? (t = !0)
        : ba || Z & 536870912
        ? (t = !1)
        : ((Tn = t = !0),
          (l === 2 || l === 9 || l === 3 || l === 6) &&
            ((l = fe.current),
            l !== null && l.tag === 13 && (l.flags |= 16384))),
      $y(e, t))
    : xr(e);
}
function xr(t) {
  var e = t;
  do {
    if (e.flags & 32768) {
      $y(e, Tn);
      return;
    }
    t = e.return;
    var n = pg(e.alternate, e, Ie);
    if (n !== null) {
      G = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      G = e;
      return;
    }
    G = e = t;
  } while (e !== null);
  ot === 0 && (ot = 5);
}
function $y(t, e) {
  do {
    var n = vg(t.alternate, t);
    if (n !== null) {
      (n.flags &= 32767), (G = n);
      return;
    }
    if (
      ((n = t.return),
      n !== null &&
        ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !e && ((t = t.sibling), t !== null))
    ) {
      G = t;
      return;
    }
    G = t = n;
  } while (t !== null);
  (ot = 6), (G = null);
}
function yh(t, e, n, l, a, u, i, r, s) {
  t.cancelPendingCommit = null;
  do Dr();
  while (Dt !== 0);
  if ($ & 6) throw Error(A(327));
  if (e !== null) {
    if (e === t.current) throw Error(A(177));
    if (
      ((u = e.lanes | e.childLanes),
      (u |= co),
      l0(t, n, u, i, r, s),
      t === et && ((G = et = null), (Z = 0)),
      (ha = e),
      (wn = t),
      (Xl = n),
      (cc = u),
      (oc = a),
      (Xy = l),
      e.subtreeFlags & 10256 || e.flags & 10256
        ? ((t.callbackNode = null),
          (t.callbackPriority = 0),
          Mg(ji, function () {
            return ep(), null;
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
      (l = (e.flags & 13878) !== 0),
      e.subtreeFlags & 13878 || l)
    ) {
      (l = j.T), (j.T = null), (a = J.p), (J.p = 2), (i = $), ($ |= 4);
      try {
        gg(t, e, n);
      } finally {
        ($ = i), (J.p = a), (j.T = l);
      }
    }
    (Dt = 1), Wy(), Py(), Iy();
  }
}
function Wy() {
  if (Dt === 1) {
    Dt = 0;
    var t = wn,
      e = ha,
      n = (e.flags & 13878) !== 0;
    if (e.subtreeFlags & 13878 || n) {
      (n = j.T), (j.T = null);
      var l = J.p;
      J.p = 2;
      var a = $;
      $ |= 4;
      try {
        Hy(e, t);
        var u = pc,
          i = gm(t.containerInfo),
          r = u.focusedElem,
          s = u.selectionRange;
        if (
          i !== r &&
          r &&
          r.ownerDocument &&
          vm(r.ownerDocument.documentElement, r)
        ) {
          if (s !== null && so(r)) {
            var c = s.start,
              f = s.end;
            if ((f === void 0 && (f = c), 'selectionStart' in r))
              (r.selectionStart = c),
                (r.selectionEnd = Math.min(f, r.value.length));
            else {
              var o = r.ownerDocument || document,
                h = (o && o.defaultView) || window;
              if (h.getSelection) {
                var y = h.getSelection(),
                  b = r.textContent.length,
                  S = Math.min(s.start, b),
                  g = s.end === void 0 ? S : Math.min(s.end, b);
                !y.extend && S > g && ((i = g), (g = S), (S = i));
                var d = Hf(r, S),
                  m = Hf(r, g);
                if (
                  d &&
                  m &&
                  (y.rangeCount !== 1 ||
                    y.anchorNode !== d.node ||
                    y.anchorOffset !== d.offset ||
                    y.focusNode !== m.node ||
                    y.focusOffset !== m.offset)
                ) {
                  var p = o.createRange();
                  p.setStart(d.node, d.offset),
                    y.removeAllRanges(),
                    S > g
                      ? (y.addRange(p), y.extend(m.node, m.offset))
                      : (p.setEnd(m.node, m.offset), y.addRange(p));
                }
              }
            }
          }
          for (o = [], y = r; (y = y.parentNode); )
            y.nodeType === 1 &&
              o.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
          for (
            typeof r.focus == 'function' && r.focus(), r = 0;
            r < o.length;
            r++
          ) {
            var E = o[r];
            (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
          }
        }
        (ir = !!yc), (pc = yc = null);
      } finally {
        ($ = a), (J.p = l), (j.T = n);
      }
    }
    (t.current = e), (Dt = 2);
  }
}
function Py() {
  if (Dt === 2) {
    Dt = 0;
    var t = wn,
      e = ha,
      n = (e.flags & 8772) !== 0;
    if (e.subtreeFlags & 8772 || n) {
      (n = j.T), (j.T = null);
      var l = J.p;
      J.p = 2;
      var a = $;
      $ |= 4;
      try {
        _y(t, e.alternate, e);
      } finally {
        ($ = a), (J.p = l), (j.T = n);
      }
    }
    Dt = 3;
  }
}
function Iy() {
  if (Dt === 4 || Dt === 3) {
    (Dt = 0), kv();
    var t = wn,
      e = ha,
      n = Xl,
      l = Xy;
    e.subtreeFlags & 10256 || e.flags & 10256
      ? (Dt = 5)
      : ((Dt = 0), (ha = wn = null), tp(t, t.pendingLanes));
    var a = t.pendingLanes;
    if (
      (a === 0 && (Dn = null),
      eo(n),
      (e = e.stateNode),
      $t && typeof $t.onCommitFiberRoot == 'function')
    )
      try {
        $t.onCommitFiberRoot(Du, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
    if (l !== null) {
      (e = j.T), (a = J.p), (J.p = 2), (j.T = null);
      try {
        for (var u = t.onRecoverableError, i = 0; i < l.length; i++) {
          var r = l[i];
          u(r.value, { componentStack: r.stack });
        }
      } finally {
        (j.T = e), (J.p = a);
      }
    }
    Xl & 3 && Dr(),
      je(t),
      (a = t.pendingLanes),
      n & 4194090 && a & 42
        ? t === fc
          ? nu++
          : ((nu = 0), (fc = t))
        : (nu = 0),
      Lu(0);
  }
}
function tp(t, e) {
  (t.pooledCacheLanes &= e) === 0 &&
    ((e = t.pooledCache), e != null && ((t.pooledCache = null), zu(e)));
}
function Dr(t) {
  return Wy(), Py(), Iy(), ep();
}
function ep() {
  if (Dt !== 5) return !1;
  var t = wn,
    e = cc;
  cc = 0;
  var n = eo(Xl),
    l = j.T,
    a = J.p;
  try {
    (J.p = 32 > n ? 32 : n), (j.T = null), (n = oc), (oc = null);
    var u = wn,
      i = Xl;
    if (((Dt = 0), (ha = wn = null), (Xl = 0), $ & 6)) throw Error(A(331));
    var r = $;
    if (
      (($ |= 4),
      Yy(u.current),
      qy(u, u.current, i, n),
      ($ = r),
      Lu(0, !1),
      $t && typeof $t.onPostCommitFiberRoot == 'function')
    )
      try {
        $t.onPostCommitFiberRoot(Du, u);
      } catch {}
    return !0;
  } finally {
    (J.p = a), (j.T = l), tp(t, e);
  }
}
function ph(t, e, n) {
  (e = ce(n, e)),
    (e = ac(t.stateNode, e, 2)),
    (t = xn(t, e, 2)),
    t !== null && (Mu(t, 2), je(t));
}
function tt(t, e, n) {
  if (t.tag === 3) ph(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        ph(e, t, n);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof l.componentDidCatch == 'function' &&
            (Dn === null || !Dn.has(l)))
        ) {
          (t = ce(n, t)),
            (n = gy(2)),
            (l = xn(e, n, 2)),
            l !== null && (by(n, l, e, t), Mu(l, 2), je(l));
          break;
        }
      }
      e = e.return;
    }
}
function ys(t, e, n) {
  var l = t.pingCache;
  if (l === null) {
    l = t.pingCache = new Eg();
    var a = new Set();
    l.set(e, a);
  } else (a = l.get(e)), a === void 0 && ((a = new Set()), l.set(e, a));
  a.has(n) || ((zo = !0), a.add(n), (t = xg.bind(null, t, e, n)), e.then(t, t));
}
function xg(t, e, n) {
  var l = t.pingCache;
  l !== null && l.delete(e),
    (t.pingedLanes |= t.suspendedLanes & n),
    (t.warmLanes &= ~n),
    et === t &&
      (Z & n) === n &&
      (ot === 4 || (ot === 3 && (Z & 62914560) === Z && 300 > _e() - Ho)
        ? !($ & 2) && da(t, 0)
        : (jo |= n),
      fa === Z && (fa = 0)),
    je(t);
}
function np(t, e) {
  e === 0 && (e = Wd()), (t = ga(t, e)), t !== null && (Mu(t, e), je(t));
}
function Dg(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), np(t, n);
}
function wg(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var l = t.stateNode,
        a = t.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      l = t.stateNode;
      break;
    case 22:
      l = t.stateNode._retryCache;
      break;
    default:
      throw Error(A(314));
  }
  l !== null && l.delete(e), np(t, n);
}
function Mg(t, e) {
  return Ic(t, e);
}
var Ii = null,
  Tl = null,
  dc = !1,
  tr = !1,
  ps = !1,
  ul = 0;
function je(t) {
  t !== Tl &&
    t.next === null &&
    (Tl === null ? (Ii = Tl = t) : (Tl = Tl.next = t)),
    (tr = !0),
    dc || ((dc = !0), Ug());
}
function Lu(t, e) {
  if (!ps && tr) {
    ps = !0;
    do
      for (var n = !1, l = Ii; l !== null; ) {
        if (t !== 0) {
          var a = l.pendingLanes;
          if (a === 0) var u = 0;
          else {
            var i = l.suspendedLanes,
              r = l.pingedLanes;
            (u = (1 << (31 - Wt(42 | t) + 1)) - 1),
              (u &= a & ~(i & ~r)),
              (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
          }
          u !== 0 && ((n = !0), vh(l, u));
        } else
          (u = Z),
            (u = yr(
              l,
              l === et ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            )),
            !(u & 3) || wu(l, u) || ((n = !0), vh(l, u));
        l = l.next;
      }
    while (n);
    ps = !1;
  }
}
function Cg() {
  lp();
}
function lp() {
  tr = dc = !1;
  var t = 0;
  ul !== 0 && (Lg() && (t = ul), (ul = 0));
  for (var e = _e(), n = null, l = Ii; l !== null; ) {
    var a = l.next,
      u = ap(l, e);
    u === 0
      ? ((l.next = null),
        n === null ? (Ii = a) : (n.next = a),
        a === null && (Tl = n))
      : ((n = l), (t !== 0 || u & 3) && (tr = !0)),
      (l = a);
  }
  Lu(t);
}
function ap(t, e) {
  for (
    var n = t.suspendedLanes,
      l = t.pingedLanes,
      a = t.expirationTimes,
      u = t.pendingLanes & -62914561;
    0 < u;

  ) {
    var i = 31 - Wt(u),
      r = 1 << i,
      s = a[i];
    s === -1
      ? (!(r & n) || r & l) && (a[i] = n0(r, e))
      : s <= e && (t.expiredLanes |= r),
      (u &= ~r);
  }
  if (
    ((e = et),
    (n = Z),
    (n = yr(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    )),
    (l = t.callbackNode),
    n === 0 ||
      (t === e && (F === 2 || F === 9)) ||
      t.cancelPendingCommit !== null)
  )
    return (
      l !== null && l !== null && Gr(l),
      (t.callbackNode = null),
      (t.callbackPriority = 0)
    );
  if (!(n & 3) || wu(t, n)) {
    if (((e = n & -n), e === t.callbackPriority)) return e;
    switch ((l !== null && Gr(l), eo(n))) {
      case 2:
      case 8:
        n = kd;
        break;
      case 32:
        n = ji;
        break;
      case 268435456:
        n = Fd;
        break;
      default:
        n = ji;
    }
    return (
      (l = up.bind(null, t)),
      (n = Ic(n, l)),
      (t.callbackPriority = e),
      (t.callbackNode = n),
      e
    );
  }
  return (
    l !== null && l !== null && Gr(l),
    (t.callbackPriority = 2),
    (t.callbackNode = null),
    2
  );
}
function up(t, e) {
  if (Dt !== 0 && Dt !== 5)
    return (t.callbackNode = null), (t.callbackPriority = 0), null;
  var n = t.callbackNode;
  if (Dr() && t.callbackNode !== n) return null;
  var l = Z;
  return (
    (l = yr(
      t,
      t === et ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    )),
    l === 0
      ? null
      : (Zy(t, l, e),
        ap(t, _e()),
        t.callbackNode != null && t.callbackNode === n
          ? up.bind(null, t)
          : null)
  );
}
function vh(t, e) {
  if (Dr()) return null;
  Zy(t, e, !0);
}
function Ug() {
  Yg(function () {
    $ & 6 ? Ic(Jd, Cg) : lp();
  });
}
function qo() {
  return ul === 0 && (ul = $d()), ul;
}
function gh(t) {
  return t == null || typeof t == 'symbol' || typeof t == 'boolean'
    ? null
    : typeof t == 'function'
    ? t
    : yi('' + t);
}
function bh(t, e) {
  var n = e.ownerDocument.createElement('input');
  return (
    (n.name = e.name),
    (n.value = e.value),
    t.id && n.setAttribute('form', t.id),
    e.parentNode.insertBefore(n, e),
    (t = new FormData(t)),
    n.parentNode.removeChild(n),
    t
  );
}
function _g(t, e, n, l, a) {
  if (e === 'submit' && n && n.stateNode === a) {
    var u = gh((a[Vt] || null).action),
      i = l.submitter;
    i &&
      ((e = (e = i[Vt] || null)
        ? gh(e.formAction)
        : i.getAttribute('formAction')),
      e !== null && ((u = e), (i = null)));
    var r = new pr('action', 'action', null, l, a);
    t.push({
      event: r,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (l.defaultPrevented) {
              if (ul !== 0) {
                var s = i ? bh(a, i) : new FormData(a);
                nc(
                  n,
                  { pending: !0, data: s, method: a.method, action: u },
                  null,
                  s
                );
              }
            } else
              typeof u == 'function' &&
                (r.preventDefault(),
                (s = i ? bh(a, i) : new FormData(a)),
                nc(
                  n,
                  { pending: !0, data: s, method: a.method, action: u },
                  u,
                  s
                ));
          },
          currentTarget: a,
        },
      ],
    });
  }
}
for (var vs = 0; vs < Vs.length; vs++) {
  var gs = Vs[vs],
    Ng = gs.toLowerCase(),
    zg = gs[0].toUpperCase() + gs.slice(1);
  be(Ng, 'on' + zg);
}
be(Sm, 'onAnimationEnd');
be(Em, 'onAnimationIteration');
be(Tm, 'onAnimationStart');
be('dblclick', 'onDoubleClick');
be('focusin', 'onFocus');
be('focusout', 'onBlur');
be(W0, 'onTransitionRun');
be(P0, 'onTransitionStart');
be(I0, 'onTransitionCancel');
be(Om, 'onTransitionEnd');
ua('onMouseEnter', ['mouseout', 'mouseover']);
ua('onMouseLeave', ['mouseout', 'mouseover']);
ua('onPointerEnter', ['pointerout', 'pointerover']);
ua('onPointerLeave', ['pointerout', 'pointerover']);
dl(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
dl(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
dl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
dl(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
dl(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
dl(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var fu =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  jg = new Set(
    'beforetoggle cancel close invalid load scroll scrollend toggle'
      .split(' ')
      .concat(fu)
  );
function ip(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var l = t[n],
      a = l.event;
    l = l.listeners;
    t: {
      var u = void 0;
      if (e)
        for (var i = l.length - 1; 0 <= i; i--) {
          var r = l[i],
            s = r.instance,
            c = r.currentTarget;
          if (((r = r.listener), s !== u && a.isPropagationStopped())) break t;
          (u = r), (a.currentTarget = c);
          try {
            u(a);
          } catch (f) {
            Ji(f);
          }
          (a.currentTarget = null), (u = s);
        }
      else
        for (i = 0; i < l.length; i++) {
          if (
            ((r = l[i]),
            (s = r.instance),
            (c = r.currentTarget),
            (r = r.listener),
            s !== u && a.isPropagationStopped())
          )
            break t;
          (u = r), (a.currentTarget = c);
          try {
            u(a);
          } catch (f) {
            Ji(f);
          }
          (a.currentTarget = null), (u = s);
        }
    }
  }
}
function Y(t, e) {
  var n = e[Bs];
  n === void 0 && (n = e[Bs] = new Set());
  var l = t + '__bubble';
  n.has(l) || (rp(e, t, 2, !1), n.add(l));
}
function bs(t, e, n) {
  var l = 0;
  e && (l |= 4), rp(n, t, l, e);
}
var si = '_reactListening' + Math.random().toString(36).slice(2);
function Lo(t) {
  if (!t[si]) {
    (t[si] = !0),
      em.forEach(function (n) {
        n !== 'selectionchange' && (jg.has(n) || bs(n, !1, t), bs(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[si] || ((e[si] = !0), bs('selectionchange', !1, e));
  }
}
function rp(t, e, n, l) {
  switch (bp(e)) {
    case 2:
      var a = sb;
      break;
    case 8:
      a = cb;
      break;
    default:
      a = Xo;
  }
  (n = a.bind(null, e, n, t)),
    (a = void 0),
    !Ys ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (a = !0),
    l
      ? a !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: a })
        : t.addEventListener(e, n, !0)
      : a !== void 0
      ? t.addEventListener(e, n, { passive: a })
      : t.addEventListener(e, n, !1);
}
function Ss(t, e, n, l, a) {
  var u = l;
  if (!(e & 1) && !(e & 2) && l !== null)
    t: for (;;) {
      if (l === null) return;
      var i = l.tag;
      if (i === 3 || i === 4) {
        var r = l.stateNode.containerInfo;
        if (r === a) break;
        if (i === 4)
          for (i = l.return; i !== null; ) {
            var s = i.tag;
            if ((s === 3 || s === 4) && i.stateNode.containerInfo === a) return;
            i = i.return;
          }
        for (; r !== null; ) {
          if (((i = Al(r)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
            l = u = i;
            continue t;
          }
          r = r.parentNode;
        }
      }
      l = l.return;
    }
  cm(function () {
    var c = u,
      f = ao(n),
      o = [];
    t: {
      var h = Rm.get(t);
      if (h !== void 0) {
        var y = pr,
          b = t;
        switch (t) {
          case 'keypress':
            if (vi(n) === 0) break t;
          case 'keydown':
          case 'keyup':
            y = M0;
            break;
          case 'focusin':
            (b = 'focus'), (y = $r);
            break;
          case 'focusout':
            (b = 'blur'), (y = $r);
            break;
          case 'beforeblur':
          case 'afterblur':
            y = $r;
            break;
          case 'click':
            if (n.button === 2) break t;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = xf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = v0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = _0;
            break;
          case Sm:
          case Em:
          case Tm:
            y = S0;
            break;
          case Om:
            y = z0;
            break;
          case 'scroll':
          case 'scrollend':
            y = y0;
            break;
          case 'wheel':
            y = H0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            y = T0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = wf;
            break;
          case 'toggle':
          case 'beforetoggle':
            y = q0;
        }
        var S = (e & 4) !== 0,
          g = !S && (t === 'scroll' || t === 'scrollend'),
          d = S ? (h !== null ? h + 'Capture' : null) : h;
        S = [];
        for (var m = c, p; m !== null; ) {
          var E = m;
          if (
            ((p = E.stateNode),
            (E = E.tag),
            (E !== 5 && E !== 26 && E !== 27) ||
              p === null ||
              d === null ||
              ((E = uu(m, d)), E != null && S.push(hu(m, E, p))),
            g)
          )
            break;
          m = m.return;
        }
        0 < S.length &&
          ((h = new y(h, b, null, n, f)), o.push({ event: h, listeners: S }));
      }
    }
    if (!(e & 7)) {
      t: {
        if (
          ((h = t === 'mouseover' || t === 'pointerover'),
          (y = t === 'mouseout' || t === 'pointerout'),
          h &&
            n !== Qs &&
            (b = n.relatedTarget || n.fromElement) &&
            (Al(b) || b[pa]))
        )
          break t;
        if (
          (y || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((b = n.relatedTarget || n.toElement),
              (y = c),
              (b = b ? Al(b) : null),
              b !== null &&
                ((g = xu(b)),
                (S = b.tag),
                b !== g || (S !== 5 && S !== 27 && S !== 6)) &&
                (b = null))
            : ((y = null), (b = c)),
          y !== b)
        ) {
          if (
            ((S = xf),
            (E = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (m = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((S = wf),
              (E = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (m = 'pointer')),
            (g = y == null ? h : La(y)),
            (p = b == null ? h : La(b)),
            (h = new S(E, m + 'leave', y, n, f)),
            (h.target = g),
            (h.relatedTarget = p),
            (E = null),
            Al(f) === c &&
              ((S = new S(d, m + 'enter', b, n, f)),
              (S.target = p),
              (S.relatedTarget = g),
              (E = S)),
            (g = E),
            y && b)
          )
            e: {
              for (S = y, d = b, m = 0, p = S; p; p = gl(p)) m++;
              for (p = 0, E = d; E; E = gl(E)) p++;
              for (; 0 < m - p; ) (S = gl(S)), m--;
              for (; 0 < p - m; ) (d = gl(d)), p--;
              for (; m--; ) {
                if (S === d || (d !== null && S === d.alternate)) break e;
                (S = gl(S)), (d = gl(d));
              }
              S = null;
            }
          else S = null;
          y !== null && Sh(o, h, y, S, !1),
            b !== null && g !== null && Sh(o, g, b, S, !0);
        }
      }
      t: {
        if (
          ((h = c ? La(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && h.type === 'file'))
        )
          var R = _f;
        else if (Uf(h))
          if (ym) R = k0;
          else {
            R = K0;
            var D = Z0;
          }
        else
          (y = h.nodeName),
            !y ||
            y.toLowerCase() !== 'input' ||
            (h.type !== 'checkbox' && h.type !== 'radio')
              ? c && lo(c.elementType) && (R = _f)
              : (R = J0);
        if (R && (R = R(t, c))) {
          mm(o, R, n, f);
          break t;
        }
        D && D(t, h, c),
          t === 'focusout' &&
            c &&
            h.type === 'number' &&
            c.memoizedProps.value != null &&
            Ls(h, 'number', h.value);
      }
      switch (((D = c ? La(c) : window), t)) {
        case 'focusin':
          (Uf(D) || D.contentEditable === 'true') &&
            ((wl = D), (Gs = c), (Ka = null));
          break;
        case 'focusout':
          Ka = Gs = wl = null;
          break;
        case 'mousedown':
          Xs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Xs = !1), Bf(o, n, f);
          break;
        case 'selectionchange':
          if ($0) break;
        case 'keydown':
        case 'keyup':
          Bf(o, n, f);
      }
      var x;
      if (ro)
        t: {
          switch (t) {
            case 'compositionstart':
              var w = 'onCompositionStart';
              break t;
            case 'compositionend':
              w = 'onCompositionEnd';
              break t;
            case 'compositionupdate':
              w = 'onCompositionUpdate';
              break t;
          }
          w = void 0;
        }
      else
        Dl
          ? hm(t, n) && (w = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (w = 'onCompositionStart');
      w &&
        (fm &&
          n.locale !== 'ko' &&
          (Dl || w !== 'onCompositionStart'
            ? w === 'onCompositionEnd' && Dl && (x = om())
            : ((En = f),
              (uo = 'value' in En ? En.value : En.textContent),
              (Dl = !0))),
        (D = er(c, w)),
        0 < D.length &&
          ((w = new Df(w, t, null, n, f)),
          o.push({ event: w, listeners: D }),
          x ? (w.data = x) : ((x = dm(n)), x !== null && (w.data = x)))),
        (x = Q0 ? Y0(t, n) : G0(t, n)) &&
          ((w = er(c, 'onBeforeInput')),
          0 < w.length &&
            ((D = new Df('onBeforeInput', 'beforeinput', null, n, f)),
            o.push({ event: D, listeners: w }),
            (D.data = x))),
        _g(o, t, c, n, f);
    }
    ip(o, e);
  });
}
function hu(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function er(t, e) {
  for (var n = e + 'Capture', l = []; t !== null; ) {
    var a = t,
      u = a.stateNode;
    if (
      ((a = a.tag),
      (a !== 5 && a !== 26 && a !== 27) ||
        u === null ||
        ((a = uu(t, n)),
        a != null && l.unshift(hu(t, a, u)),
        (a = uu(t, e)),
        a != null && l.push(hu(t, a, u))),
      t.tag === 3)
    )
      return l;
    t = t.return;
  }
  return [];
}
function gl(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5 && t.tag !== 27);
  return t || null;
}
function Sh(t, e, n, l, a) {
  for (var u = e._reactName, i = []; n !== null && n !== l; ) {
    var r = n,
      s = r.alternate,
      c = r.stateNode;
    if (((r = r.tag), s !== null && s === l)) break;
    (r !== 5 && r !== 26 && r !== 27) ||
      c === null ||
      ((s = c),
      a
        ? ((c = uu(n, u)), c != null && i.unshift(hu(n, c, s)))
        : a || ((c = uu(n, u)), c != null && i.push(hu(n, c, s)))),
      (n = n.return);
  }
  i.length !== 0 && t.push({ event: e, listeners: i });
}
var Hg = /\r\n?/g,
  Bg = /\u0000|\uFFFD/g;
function Eh(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      Hg,
      `
`
    )
    .replace(Bg, '');
}
function sp(t, e) {
  return (e = Eh(e)), Eh(t) === e;
}
function wr() {}
function W(t, e, n, l, a, u) {
  switch (n) {
    case 'children':
      typeof l == 'string'
        ? e === 'body' || (e === 'textarea' && l === '') || ia(t, l)
        : (typeof l == 'number' || typeof l == 'bigint') &&
          e !== 'body' &&
          ia(t, '' + l);
      break;
    case 'className':
      ei(t, 'class', l);
      break;
    case 'tabIndex':
      ei(t, 'tabindex', l);
      break;
    case 'dir':
    case 'role':
    case 'viewBox':
    case 'width':
    case 'height':
      ei(t, n, l);
      break;
    case 'style':
      sm(t, l, u);
      break;
    case 'data':
      if (e !== 'object') {
        ei(t, 'data', l);
        break;
      }
    case 'src':
    case 'href':
      if (l === '' && (e !== 'a' || n !== 'href')) {
        t.removeAttribute(n);
        break;
      }
      if (
        l == null ||
        typeof l == 'function' ||
        typeof l == 'symbol' ||
        typeof l == 'boolean'
      ) {
        t.removeAttribute(n);
        break;
      }
      (l = yi('' + l)), t.setAttribute(n, l);
      break;
    case 'action':
    case 'formAction':
      if (typeof l == 'function') {
        t.setAttribute(
          n,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof u == 'function' &&
          (n === 'formAction'
            ? (e !== 'input' && W(t, e, 'name', a.name, a, null),
              W(t, e, 'formEncType', a.formEncType, a, null),
              W(t, e, 'formMethod', a.formMethod, a, null),
              W(t, e, 'formTarget', a.formTarget, a, null))
            : (W(t, e, 'encType', a.encType, a, null),
              W(t, e, 'method', a.method, a, null),
              W(t, e, 'target', a.target, a, null)));
      if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
        t.removeAttribute(n);
        break;
      }
      (l = yi('' + l)), t.setAttribute(n, l);
      break;
    case 'onClick':
      l != null && (t.onclick = wr);
      break;
    case 'onScroll':
      l != null && Y('scroll', t);
      break;
    case 'onScrollEnd':
      l != null && Y('scrollend', t);
      break;
    case 'dangerouslySetInnerHTML':
      if (l != null) {
        if (typeof l != 'object' || !('__html' in l)) throw Error(A(61));
        if (((n = l.__html), n != null)) {
          if (a.children != null) throw Error(A(60));
          t.innerHTML = n;
        }
      }
      break;
    case 'multiple':
      t.multiple = l && typeof l != 'function' && typeof l != 'symbol';
      break;
    case 'muted':
      t.muted = l && typeof l != 'function' && typeof l != 'symbol';
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'defaultValue':
    case 'defaultChecked':
    case 'innerHTML':
    case 'ref':
      break;
    case 'autoFocus':
      break;
    case 'xlinkHref':
      if (
        l == null ||
        typeof l == 'function' ||
        typeof l == 'boolean' ||
        typeof l == 'symbol'
      ) {
        t.removeAttribute('xlink:href');
        break;
      }
      (n = yi('' + l)),
        t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
      break;
    case 'contentEditable':
    case 'spellCheck':
    case 'draggable':
    case 'value':
    case 'autoReverse':
    case 'externalResourcesRequired':
    case 'focusable':
    case 'preserveAlpha':
      l != null && typeof l != 'function' && typeof l != 'symbol'
        ? t.setAttribute(n, '' + l)
        : t.removeAttribute(n);
      break;
    case 'inert':
    case 'allowFullScreen':
    case 'async':
    case 'autoPlay':
    case 'controls':
    case 'default':
    case 'defer':
    case 'disabled':
    case 'disablePictureInPicture':
    case 'disableRemotePlayback':
    case 'formNoValidate':
    case 'hidden':
    case 'loop':
    case 'noModule':
    case 'noValidate':
    case 'open':
    case 'playsInline':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'itemScope':
      l && typeof l != 'function' && typeof l != 'symbol'
        ? t.setAttribute(n, '')
        : t.removeAttribute(n);
      break;
    case 'capture':
    case 'download':
      l === !0
        ? t.setAttribute(n, '')
        : l !== !1 &&
          l != null &&
          typeof l != 'function' &&
          typeof l != 'symbol'
        ? t.setAttribute(n, l)
        : t.removeAttribute(n);
      break;
    case 'cols':
    case 'rows':
    case 'size':
    case 'span':
      l != null &&
      typeof l != 'function' &&
      typeof l != 'symbol' &&
      !isNaN(l) &&
      1 <= l
        ? t.setAttribute(n, l)
        : t.removeAttribute(n);
      break;
    case 'rowSpan':
    case 'start':
      l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
        ? t.removeAttribute(n)
        : t.setAttribute(n, l);
      break;
    case 'popover':
      Y('beforetoggle', t), Y('toggle', t), mi(t, 'popover', l);
      break;
    case 'xlinkActuate':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
      break;
    case 'xlinkArcrole':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
      break;
    case 'xlinkRole':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
      break;
    case 'xlinkShow':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
      break;
    case 'xlinkTitle':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
      break;
    case 'xlinkType':
      He(t, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
      break;
    case 'xmlBase':
      He(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
      break;
    case 'xmlLang':
      He(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
      break;
    case 'xmlSpace':
      He(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
      break;
    case 'is':
      mi(t, 'is', l);
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      (!(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
        ((n = d0.get(n) || n), mi(t, n, l));
  }
}
function mc(t, e, n, l, a, u) {
  switch (n) {
    case 'style':
      sm(t, l, u);
      break;
    case 'dangerouslySetInnerHTML':
      if (l != null) {
        if (typeof l != 'object' || !('__html' in l)) throw Error(A(61));
        if (((n = l.__html), n != null)) {
          if (a.children != null) throw Error(A(60));
          t.innerHTML = n;
        }
      }
      break;
    case 'children':
      typeof l == 'string'
        ? ia(t, l)
        : (typeof l == 'number' || typeof l == 'bigint') && ia(t, '' + l);
      break;
    case 'onScroll':
      l != null && Y('scroll', t);
      break;
    case 'onScrollEnd':
      l != null && Y('scrollend', t);
      break;
    case 'onClick':
      l != null && (t.onclick = wr);
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'innerHTML':
    case 'ref':
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      if (!nm.hasOwnProperty(n))
        t: {
          if (
            n[0] === 'o' &&
            n[1] === 'n' &&
            ((a = n.endsWith('Capture')),
            (e = n.slice(2, a ? n.length - 7 : void 0)),
            (u = t[Vt] || null),
            (u = u != null ? u[n] : null),
            typeof u == 'function' && t.removeEventListener(e, u, a),
            typeof l == 'function')
          ) {
            typeof u != 'function' &&
              u !== null &&
              (n in t
                ? (t[n] = null)
                : t.hasAttribute(n) && t.removeAttribute(n)),
              t.addEventListener(e, l, a);
            break t;
          }
          n in t ? (t[n] = l) : l === !0 ? t.setAttribute(n, '') : mi(t, n, l);
        }
  }
}
function wt(t, e, n) {
  switch (e) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'img':
      Y('error', t), Y('load', t);
      var l = !1,
        a = !1,
        u;
      for (u in n)
        if (n.hasOwnProperty(u)) {
          var i = n[u];
          if (i != null)
            switch (u) {
              case 'src':
                l = !0;
                break;
              case 'srcSet':
                a = !0;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(A(137, e));
              default:
                W(t, e, u, i, n, null);
            }
        }
      a && W(t, e, 'srcSet', n.srcSet, n, null),
        l && W(t, e, 'src', n.src, n, null);
      return;
    case 'input':
      Y('invalid', t);
      var r = (u = i = a = null),
        s = null,
        c = null;
      for (l in n)
        if (n.hasOwnProperty(l)) {
          var f = n[l];
          if (f != null)
            switch (l) {
              case 'name':
                a = f;
                break;
              case 'type':
                i = f;
                break;
              case 'checked':
                s = f;
                break;
              case 'defaultChecked':
                c = f;
                break;
              case 'value':
                u = f;
                break;
              case 'defaultValue':
                r = f;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(A(137, e));
                break;
              default:
                W(t, e, l, f, n, null);
            }
        }
      um(t, u, r, s, c, i, a, !1), Hi(t);
      return;
    case 'select':
      Y('invalid', t), (l = i = u = null);
      for (a in n)
        if (n.hasOwnProperty(a) && ((r = n[a]), r != null))
          switch (a) {
            case 'value':
              u = r;
              break;
            case 'defaultValue':
              i = r;
              break;
            case 'multiple':
              l = r;
            default:
              W(t, e, a, r, n, null);
          }
      (e = u),
        (n = i),
        (t.multiple = !!l),
        e != null ? Bl(t, !!l, e, !1) : n != null && Bl(t, !!l, n, !0);
      return;
    case 'textarea':
      Y('invalid', t), (u = a = l = null);
      for (i in n)
        if (n.hasOwnProperty(i) && ((r = n[i]), r != null))
          switch (i) {
            case 'value':
              l = r;
              break;
            case 'defaultValue':
              a = r;
              break;
            case 'children':
              u = r;
              break;
            case 'dangerouslySetInnerHTML':
              if (r != null) throw Error(A(91));
              break;
            default:
              W(t, e, i, r, n, null);
          }
      rm(t, l, a, u), Hi(t);
      return;
    case 'option':
      for (s in n)
        if (n.hasOwnProperty(s) && ((l = n[s]), l != null))
          switch (s) {
            case 'selected':
              t.selected = l && typeof l != 'function' && typeof l != 'symbol';
              break;
            default:
              W(t, e, s, l, n, null);
          }
      return;
    case 'dialog':
      Y('beforetoggle', t), Y('toggle', t), Y('cancel', t), Y('close', t);
      break;
    case 'iframe':
    case 'object':
      Y('load', t);
      break;
    case 'video':
    case 'audio':
      for (l = 0; l < fu.length; l++) Y(fu[l], t);
      break;
    case 'image':
      Y('error', t), Y('load', t);
      break;
    case 'details':
      Y('toggle', t);
      break;
    case 'embed':
    case 'source':
    case 'link':
      Y('error', t), Y('load', t);
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (c in n)
        if (n.hasOwnProperty(c) && ((l = n[c]), l != null))
          switch (c) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              throw Error(A(137, e));
            default:
              W(t, e, c, l, n, null);
          }
      return;
    default:
      if (lo(e)) {
        for (f in n)
          n.hasOwnProperty(f) &&
            ((l = n[f]), l !== void 0 && mc(t, e, f, l, n, void 0));
        return;
      }
  }
  for (r in n)
    n.hasOwnProperty(r) && ((l = n[r]), l != null && W(t, e, r, l, n, null));
}
function qg(t, e, n, l) {
  switch (e) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'input':
      var a = null,
        u = null,
        i = null,
        r = null,
        s = null,
        c = null,
        f = null;
      for (y in n) {
        var o = n[y];
        if (n.hasOwnProperty(y) && o != null)
          switch (y) {
            case 'checked':
              break;
            case 'value':
              break;
            case 'defaultValue':
              s = o;
            default:
              l.hasOwnProperty(y) || W(t, e, y, null, l, o);
          }
      }
      for (var h in l) {
        var y = l[h];
        if (((o = n[h]), l.hasOwnProperty(h) && (y != null || o != null)))
          switch (h) {
            case 'type':
              u = y;
              break;
            case 'name':
              a = y;
              break;
            case 'checked':
              c = y;
              break;
            case 'defaultChecked':
              f = y;
              break;
            case 'value':
              i = y;
              break;
            case 'defaultValue':
              r = y;
              break;
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (y != null) throw Error(A(137, e));
              break;
            default:
              y !== o && W(t, e, h, y, l, o);
          }
      }
      qs(t, i, r, s, c, f, u, a);
      return;
    case 'select':
      y = i = r = h = null;
      for (u in n)
        if (((s = n[u]), n.hasOwnProperty(u) && s != null))
          switch (u) {
            case 'value':
              break;
            case 'multiple':
              y = s;
            default:
              l.hasOwnProperty(u) || W(t, e, u, null, l, s);
          }
      for (a in l)
        if (
          ((u = l[a]),
          (s = n[a]),
          l.hasOwnProperty(a) && (u != null || s != null))
        )
          switch (a) {
            case 'value':
              h = u;
              break;
            case 'defaultValue':
              r = u;
              break;
            case 'multiple':
              i = u;
            default:
              u !== s && W(t, e, a, u, l, s);
          }
      (e = r),
        (n = i),
        (l = y),
        h != null
          ? Bl(t, !!n, h, !1)
          : !!l != !!n &&
            (e != null ? Bl(t, !!n, e, !0) : Bl(t, !!n, n ? [] : '', !1));
      return;
    case 'textarea':
      y = h = null;
      for (r in n)
        if (
          ((a = n[r]), n.hasOwnProperty(r) && a != null && !l.hasOwnProperty(r))
        )
          switch (r) {
            case 'value':
              break;
            case 'children':
              break;
            default:
              W(t, e, r, null, l, a);
          }
      for (i in l)
        if (
          ((a = l[i]),
          (u = n[i]),
          l.hasOwnProperty(i) && (a != null || u != null))
        )
          switch (i) {
            case 'value':
              h = a;
              break;
            case 'defaultValue':
              y = a;
              break;
            case 'children':
              break;
            case 'dangerouslySetInnerHTML':
              if (a != null) throw Error(A(91));
              break;
            default:
              a !== u && W(t, e, i, a, l, u);
          }
      im(t, h, y);
      return;
    case 'option':
      for (var b in n)
        if (
          ((h = n[b]), n.hasOwnProperty(b) && h != null && !l.hasOwnProperty(b))
        )
          switch (b) {
            case 'selected':
              t.selected = !1;
              break;
            default:
              W(t, e, b, null, l, h);
          }
      for (s in l)
        if (
          ((h = l[s]),
          (y = n[s]),
          l.hasOwnProperty(s) && h !== y && (h != null || y != null))
        )
          switch (s) {
            case 'selected':
              t.selected = h && typeof h != 'function' && typeof h != 'symbol';
              break;
            default:
              W(t, e, s, h, l, y);
          }
      return;
    case 'img':
    case 'link':
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (var S in n)
        (h = n[S]),
          n.hasOwnProperty(S) &&
            h != null &&
            !l.hasOwnProperty(S) &&
            W(t, e, S, null, l, h);
      for (c in l)
        if (
          ((h = l[c]),
          (y = n[c]),
          l.hasOwnProperty(c) && h !== y && (h != null || y != null))
        )
          switch (c) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (h != null) throw Error(A(137, e));
              break;
            default:
              W(t, e, c, h, l, y);
          }
      return;
    default:
      if (lo(e)) {
        for (var g in n)
          (h = n[g]),
            n.hasOwnProperty(g) &&
              h !== void 0 &&
              !l.hasOwnProperty(g) &&
              mc(t, e, g, void 0, l, h);
        for (f in l)
          (h = l[f]),
            (y = n[f]),
            !l.hasOwnProperty(f) ||
              h === y ||
              (h === void 0 && y === void 0) ||
              mc(t, e, f, h, l, y);
        return;
      }
  }
  for (var d in n)
    (h = n[d]),
      n.hasOwnProperty(d) &&
        h != null &&
        !l.hasOwnProperty(d) &&
        W(t, e, d, null, l, h);
  for (o in l)
    (h = l[o]),
      (y = n[o]),
      !l.hasOwnProperty(o) ||
        h === y ||
        (h == null && y == null) ||
        W(t, e, o, h, l, y);
}
var yc = null,
  pc = null;
function nr(t) {
  return t.nodeType === 9 ? t : t.ownerDocument;
}
function Th(t) {
  switch (t) {
    case 'http://www.w3.org/2000/svg':
      return 1;
    case 'http://www.w3.org/1998/Math/MathML':
      return 2;
    default:
      return 0;
  }
}
function cp(t, e) {
  if (t === 0)
    switch (e) {
      case 'svg':
        return 1;
      case 'math':
        return 2;
      default:
        return 0;
    }
  return t === 1 && e === 'foreignObject' ? 0 : t;
}
function vc(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    typeof e.children == 'bigint' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Es = null;
function Lg() {
  var t = window.event;
  return t && t.type === 'popstate'
    ? t === Es
      ? !1
      : ((Es = t), !0)
    : ((Es = null), !1);
}
var op = typeof setTimeout == 'function' ? setTimeout : void 0,
  Qg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Oh = typeof Promise == 'function' ? Promise : void 0,
  Yg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Oh < 'u'
      ? function (t) {
          return Oh.resolve(null).then(t).catch(Gg);
        }
      : op;
function Gg(t) {
  setTimeout(function () {
    throw t;
  });
}
function Hn(t) {
  return t === 'head';
}
function Rh(t, e) {
  var n = e,
    l = 0,
    a = 0;
  do {
    var u = n.nextSibling;
    if ((t.removeChild(n), u && u.nodeType === 8))
      if (((n = u.data), n === '/$')) {
        if (0 < l && 8 > l) {
          n = l;
          var i = t.ownerDocument;
          if ((n & 1 && lu(i.documentElement), n & 2 && lu(i.body), n & 4))
            for (n = i.head, lu(n), i = n.firstChild; i; ) {
              var r = i.nextSibling,
                s = i.nodeName;
              i[Cu] ||
                s === 'SCRIPT' ||
                s === 'STYLE' ||
                (s === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                n.removeChild(i),
                (i = r);
            }
        }
        if (a === 0) {
          t.removeChild(u), vu(e);
          return;
        }
        a--;
      } else
        n === '$' || n === '$?' || n === '$!'
          ? a++
          : (l = n.charCodeAt(0) - 48);
    else l = 0;
    n = u;
  } while (n);
  vu(e);
}
function gc(t) {
  var e = t.firstChild;
  for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
    var n = e;
    switch (((e = e.nextSibling), n.nodeName)) {
      case 'HTML':
      case 'HEAD':
      case 'BODY':
        gc(n), no(n);
        continue;
      case 'SCRIPT':
      case 'STYLE':
        continue;
      case 'LINK':
        if (n.rel.toLowerCase() === 'stylesheet') continue;
    }
    t.removeChild(n);
  }
}
function Xg(t, e, n, l) {
  for (; t.nodeType === 1; ) {
    var a = n;
    if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
      if (!l && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
    } else if (l) {
      if (!t[Cu])
        switch (e) {
          case 'meta':
            if (!t.hasAttribute('itemprop')) break;
            return t;
          case 'link':
            if (
              ((u = t.getAttribute('rel')),
              u === 'stylesheet' && t.hasAttribute('data-precedence'))
            )
              break;
            if (
              u !== a.rel ||
              t.getAttribute('href') !==
                (a.href == null || a.href === '' ? null : a.href) ||
              t.getAttribute('crossorigin') !==
                (a.crossOrigin == null ? null : a.crossOrigin) ||
              t.getAttribute('title') !== (a.title == null ? null : a.title)
            )
              break;
            return t;
          case 'style':
            if (t.hasAttribute('data-precedence')) break;
            return t;
          case 'script':
            if (
              ((u = t.getAttribute('src')),
              (u !== (a.src == null ? null : a.src) ||
                t.getAttribute('type') !== (a.type == null ? null : a.type) ||
                t.getAttribute('crossorigin') !==
                  (a.crossOrigin == null ? null : a.crossOrigin)) &&
                u &&
                t.hasAttribute('async') &&
                !t.hasAttribute('itemprop'))
            )
              break;
            return t;
          default:
            return t;
        }
    } else if (e === 'input' && t.type === 'hidden') {
      var u = a.name == null ? null : '' + a.name;
      if (a.type === 'hidden' && t.getAttribute('name') === u) return t;
    } else return t;
    if (((t = ve(t.nextSibling)), t === null)) break;
  }
  return null;
}
function Vg(t, e, n) {
  if (e === '') return null;
  for (; t.nodeType !== 3; )
    if (
      ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
        !n) ||
      ((t = ve(t.nextSibling)), t === null)
    )
      return null;
  return t;
}
function bc(t) {
  return (
    t.data === '$!' ||
    (t.data === '$?' && t.ownerDocument.readyState === 'complete')
  );
}
function Zg(t, e) {
  var n = t.ownerDocument;
  if (t.data !== '$?' || n.readyState === 'complete') e();
  else {
    var l = function () {
      e(), n.removeEventListener('DOMContentLoaded', l);
    };
    n.addEventListener('DOMContentLoaded', l), (t._reactRetry = l);
  }
}
function ve(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (
        ((e = t.data),
        e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')
      )
        break;
      if (e === '/$') return null;
    }
  }
  return t;
}
var Sc = null;
function Ah(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t;
        e--;
      } else n === '/$' && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
function fp(t, e, n) {
  switch (((e = nr(n)), t)) {
    case 'html':
      if (((t = e.documentElement), !t)) throw Error(A(452));
      return t;
    case 'head':
      if (((t = e.head), !t)) throw Error(A(453));
      return t;
    case 'body':
      if (((t = e.body), !t)) throw Error(A(454));
      return t;
    default:
      throw Error(A(451));
  }
}
function lu(t) {
  for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
  no(t);
}
var he = new Map(),
  xh = new Set();
function lr(t) {
  return typeof t.getRootNode == 'function'
    ? t.getRootNode()
    : t.nodeType === 9
    ? t
    : t.ownerDocument;
}
var en = J.d;
J.d = { f: Kg, r: Jg, D: kg, C: Fg, L: $g, m: Wg, X: Ig, S: Pg, M: tb };
function Kg() {
  var t = en.f(),
    e = Ar();
  return t || e;
}
function Jg(t) {
  var e = va(t);
  e !== null && e.tag === 5 && e.type === 'form' ? ay(e) : en.r(t);
}
var Sa = typeof document > 'u' ? null : document;
function hp(t, e, n) {
  var l = Sa;
  if (l && typeof e == 'string' && e) {
    var a = se(e);
    (a = 'link[rel="' + t + '"][href="' + a + '"]'),
      typeof n == 'string' && (a += '[crossorigin="' + n + '"]'),
      xh.has(a) ||
        (xh.add(a),
        (t = { rel: t, crossOrigin: n, href: e }),
        l.querySelector(a) === null &&
          ((e = l.createElement('link')),
          wt(e, 'link', t),
          Tt(e),
          l.head.appendChild(e)));
  }
}
function kg(t) {
  en.D(t), hp('dns-prefetch', t, null);
}
function Fg(t, e) {
  en.C(t, e), hp('preconnect', t, e);
}
function $g(t, e, n) {
  en.L(t, e, n);
  var l = Sa;
  if (l && t && e) {
    var a = 'link[rel="preload"][as="' + se(e) + '"]';
    e === 'image' && n && n.imageSrcSet
      ? ((a += '[imagesrcset="' + se(n.imageSrcSet) + '"]'),
        typeof n.imageSizes == 'string' &&
          (a += '[imagesizes="' + se(n.imageSizes) + '"]'))
      : (a += '[href="' + se(t) + '"]');
    var u = a;
    switch (e) {
      case 'style':
        u = ma(t);
        break;
      case 'script':
        u = Ea(t);
    }
    he.has(u) ||
      ((t = nt(
        {
          rel: 'preload',
          href: e === 'image' && n && n.imageSrcSet ? void 0 : t,
          as: e,
        },
        n
      )),
      he.set(u, t),
      l.querySelector(a) !== null ||
        (e === 'style' && l.querySelector(Qu(u))) ||
        (e === 'script' && l.querySelector(Yu(u))) ||
        ((e = l.createElement('link')),
        wt(e, 'link', t),
        Tt(e),
        l.head.appendChild(e)));
  }
}
function Wg(t, e) {
  en.m(t, e);
  var n = Sa;
  if (n && t) {
    var l = e && typeof e.as == 'string' ? e.as : 'script',
      a = 'link[rel="modulepreload"][as="' + se(l) + '"][href="' + se(t) + '"]',
      u = a;
    switch (l) {
      case 'audioworklet':
      case 'paintworklet':
      case 'serviceworker':
      case 'sharedworker':
      case 'worker':
      case 'script':
        u = Ea(t);
    }
    if (
      !he.has(u) &&
      ((t = nt({ rel: 'modulepreload', href: t }, e)),
      he.set(u, t),
      n.querySelector(a) === null)
    ) {
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          if (n.querySelector(Yu(u))) return;
      }
      (l = n.createElement('link')),
        wt(l, 'link', t),
        Tt(l),
        n.head.appendChild(l);
    }
  }
}
function Pg(t, e, n) {
  en.S(t, e, n);
  var l = Sa;
  if (l && t) {
    var a = Hl(l).hoistableStyles,
      u = ma(t);
    e = e || 'default';
    var i = a.get(u);
    if (!i) {
      var r = { loading: 0, preload: null };
      if ((i = l.querySelector(Qu(u)))) r.loading = 5;
      else {
        (t = nt({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)),
          (n = he.get(u)) && Qo(t, n);
        var s = (i = l.createElement('link'));
        Tt(s),
          wt(s, 'link', t),
          (s._p = new Promise(function (c, f) {
            (s.onload = c), (s.onerror = f);
          })),
          s.addEventListener('load', function () {
            r.loading |= 1;
          }),
          s.addEventListener('error', function () {
            r.loading |= 2;
          }),
          (r.loading |= 4),
          Ri(i, e, l);
      }
      (i = { type: 'stylesheet', instance: i, count: 1, state: r }),
        a.set(u, i);
    }
  }
}
function Ig(t, e) {
  en.X(t, e);
  var n = Sa;
  if (n && t) {
    var l = Hl(n).hoistableScripts,
      a = Ea(t),
      u = l.get(a);
    u ||
      ((u = n.querySelector(Yu(a))),
      u ||
        ((t = nt({ src: t, async: !0 }, e)),
        (e = he.get(a)) && Yo(t, e),
        (u = n.createElement('script')),
        Tt(u),
        wt(u, 'link', t),
        n.head.appendChild(u)),
      (u = { type: 'script', instance: u, count: 1, state: null }),
      l.set(a, u));
  }
}
function tb(t, e) {
  en.M(t, e);
  var n = Sa;
  if (n && t) {
    var l = Hl(n).hoistableScripts,
      a = Ea(t),
      u = l.get(a);
    u ||
      ((u = n.querySelector(Yu(a))),
      u ||
        ((t = nt({ src: t, async: !0, type: 'module' }, e)),
        (e = he.get(a)) && Yo(t, e),
        (u = n.createElement('script')),
        Tt(u),
        wt(u, 'link', t),
        n.head.appendChild(u)),
      (u = { type: 'script', instance: u, count: 1, state: null }),
      l.set(a, u));
  }
}
function Dh(t, e, n, l) {
  var a = (a = Rn.current) ? lr(a) : null;
  if (!a) throw Error(A(446));
  switch (t) {
    case 'meta':
    case 'title':
      return null;
    case 'style':
      return typeof n.precedence == 'string' && typeof n.href == 'string'
        ? ((e = ma(n.href)),
          (n = Hl(a).hoistableStyles),
          (l = n.get(e)),
          l ||
            ((l = { type: 'style', instance: null, count: 0, state: null }),
            n.set(e, l)),
          l)
        : { type: 'void', instance: null, count: 0, state: null };
    case 'link':
      if (
        n.rel === 'stylesheet' &&
        typeof n.href == 'string' &&
        typeof n.precedence == 'string'
      ) {
        t = ma(n.href);
        var u = Hl(a).hoistableStyles,
          i = u.get(t);
        if (
          (i ||
            ((a = a.ownerDocument || a),
            (i = {
              type: 'stylesheet',
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            u.set(t, i),
            (u = a.querySelector(Qu(t))) &&
              !u._p &&
              ((i.instance = u), (i.state.loading = 5)),
            he.has(t) ||
              ((n = {
                rel: 'preload',
                as: 'style',
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy,
              }),
              he.set(t, n),
              u || eb(a, t, n, i.state))),
          e && l === null)
        )
          throw Error(A(528, ''));
        return i;
      }
      if (e && l !== null) throw Error(A(529, ''));
      return null;
    case 'script':
      return (
        (e = n.async),
        (n = n.src),
        typeof n == 'string' &&
        e &&
        typeof e != 'function' &&
        typeof e != 'symbol'
          ? ((e = Ea(n)),
            (n = Hl(a).hoistableScripts),
            (l = n.get(e)),
            l ||
              ((l = { type: 'script', instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null }
      );
    default:
      throw Error(A(444, t));
  }
}
function ma(t) {
  return 'href="' + se(t) + '"';
}
function Qu(t) {
  return 'link[rel="stylesheet"][' + t + ']';
}
function dp(t) {
  return nt({}, t, { 'data-precedence': t.precedence, precedence: null });
}
function eb(t, e, n, l) {
  t.querySelector('link[rel="preload"][as="style"][' + e + ']')
    ? (l.loading = 1)
    : ((e = t.createElement('link')),
      (l.preload = e),
      e.addEventListener('load', function () {
        return (l.loading |= 1);
      }),
      e.addEventListener('error', function () {
        return (l.loading |= 2);
      }),
      wt(e, 'link', n),
      Tt(e),
      t.head.appendChild(e));
}
function Ea(t) {
  return '[src="' + se(t) + '"]';
}
function Yu(t) {
  return 'script[async]' + t;
}
function wh(t, e, n) {
  if ((e.count++, e.instance === null))
    switch (e.type) {
      case 'style':
        var l = t.querySelector('style[data-href~="' + se(n.href) + '"]');
        if (l) return (e.instance = l), Tt(l), l;
        var a = nt({}, n, {
          'data-href': n.href,
          'data-precedence': n.precedence,
          href: null,
          precedence: null,
        });
        return (
          (l = (t.ownerDocument || t).createElement('style')),
          Tt(l),
          wt(l, 'style', a),
          Ri(l, n.precedence, t),
          (e.instance = l)
        );
      case 'stylesheet':
        a = ma(n.href);
        var u = t.querySelector(Qu(a));
        if (u) return (e.state.loading |= 4), (e.instance = u), Tt(u), u;
        (l = dp(n)),
          (a = he.get(a)) && Qo(l, a),
          (u = (t.ownerDocument || t).createElement('link')),
          Tt(u);
        var i = u;
        return (
          (i._p = new Promise(function (r, s) {
            (i.onload = r), (i.onerror = s);
          })),
          wt(u, 'link', l),
          (e.state.loading |= 4),
          Ri(u, n.precedence, t),
          (e.instance = u)
        );
      case 'script':
        return (
          (u = Ea(n.src)),
          (a = t.querySelector(Yu(u)))
            ? ((e.instance = a), Tt(a), a)
            : ((l = n),
              (a = he.get(u)) && ((l = nt({}, n)), Yo(l, a)),
              (t = t.ownerDocument || t),
              (a = t.createElement('script')),
              Tt(a),
              wt(a, 'link', l),
              t.head.appendChild(a),
              (e.instance = a))
        );
      case 'void':
        return null;
      default:
        throw Error(A(443, e.type));
    }
  else
    e.type === 'stylesheet' &&
      !(e.state.loading & 4) &&
      ((l = e.instance), (e.state.loading |= 4), Ri(l, n.precedence, t));
  return e.instance;
}
function Ri(t, e, n) {
  for (
    var l = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      a = l.length ? l[l.length - 1] : null,
      u = a,
      i = 0;
    i < l.length;
    i++
  ) {
    var r = l[i];
    if (r.dataset.precedence === e) u = r;
    else if (u !== a) break;
  }
  u
    ? u.parentNode.insertBefore(t, u.nextSibling)
    : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
}
function Qo(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.title == null && (t.title = e.title);
}
function Yo(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.integrity == null && (t.integrity = e.integrity);
}
var Ai = null;
function Mh(t, e, n) {
  if (Ai === null) {
    var l = new Map(),
      a = (Ai = new Map());
    a.set(n, l);
  } else (a = Ai), (l = a.get(n)), l || ((l = new Map()), a.set(n, l));
  if (l.has(t)) return l;
  for (
    l.set(t, null), n = n.getElementsByTagName(t), a = 0;
    a < n.length;
    a++
  ) {
    var u = n[a];
    if (
      !(
        u[Cu] ||
        u[_t] ||
        (t === 'link' && u.getAttribute('rel') === 'stylesheet')
      ) &&
      u.namespaceURI !== 'http://www.w3.org/2000/svg'
    ) {
      var i = u.getAttribute(e) || '';
      i = t + i;
      var r = l.get(i);
      r ? r.push(u) : l.set(i, [u]);
    }
  }
  return l;
}
function Ch(t, e, n) {
  (t = t.ownerDocument || t),
    t.head.insertBefore(
      n,
      e === 'title' ? t.querySelector('head > title') : null
    );
}
function nb(t, e, n) {
  if (n === 1 || e.itemProp != null) return !1;
  switch (t) {
    case 'meta':
    case 'title':
      return !0;
    case 'style':
      if (
        typeof e.precedence != 'string' ||
        typeof e.href != 'string' ||
        e.href === ''
      )
        break;
      return !0;
    case 'link':
      if (
        typeof e.rel != 'string' ||
        typeof e.href != 'string' ||
        e.href === '' ||
        e.onLoad ||
        e.onError
      )
        break;
      switch (e.rel) {
        case 'stylesheet':
          return (t = e.disabled), typeof e.precedence == 'string' && t == null;
        default:
          return !0;
      }
    case 'script':
      if (
        e.async &&
        typeof e.async != 'function' &&
        typeof e.async != 'symbol' &&
        !e.onLoad &&
        !e.onError &&
        e.src &&
        typeof e.src == 'string'
      )
        return !0;
  }
  return !1;
}
function mp(t) {
  return !(t.type === 'stylesheet' && !(t.state.loading & 3));
}
var du = null;
function lb() {}
function ab(t, e, n) {
  if (du === null) throw Error(A(475));
  var l = du;
  if (
    e.type === 'stylesheet' &&
    (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
    !(e.state.loading & 4)
  ) {
    if (e.instance === null) {
      var a = ma(n.href),
        u = t.querySelector(Qu(a));
      if (u) {
        (t = u._p),
          t !== null &&
            typeof t == 'object' &&
            typeof t.then == 'function' &&
            (l.count++, (l = ar.bind(l)), t.then(l, l)),
          (e.state.loading |= 4),
          (e.instance = u),
          Tt(u);
        return;
      }
      (u = t.ownerDocument || t),
        (n = dp(n)),
        (a = he.get(a)) && Qo(n, a),
        (u = u.createElement('link')),
        Tt(u);
      var i = u;
      (i._p = new Promise(function (r, s) {
        (i.onload = r), (i.onerror = s);
      })),
        wt(u, 'link', n),
        (e.instance = u);
    }
    l.stylesheets === null && (l.stylesheets = new Map()),
      l.stylesheets.set(e, t),
      (t = e.state.preload) &&
        !(e.state.loading & 3) &&
        (l.count++,
        (e = ar.bind(l)),
        t.addEventListener('load', e),
        t.addEventListener('error', e));
  }
}
function ub() {
  if (du === null) throw Error(A(475));
  var t = du;
  return (
    t.stylesheets && t.count === 0 && Ec(t, t.stylesheets),
    0 < t.count
      ? function (e) {
          var n = setTimeout(function () {
            if ((t.stylesheets && Ec(t, t.stylesheets), t.unsuspend)) {
              var l = t.unsuspend;
              (t.unsuspend = null), l();
            }
          }, 6e4);
          return (
            (t.unsuspend = e),
            function () {
              (t.unsuspend = null), clearTimeout(n);
            }
          );
        }
      : null
  );
}
function ar() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) Ec(this, this.stylesheets);
    else if (this.unsuspend) {
      var t = this.unsuspend;
      (this.unsuspend = null), t();
    }
  }
}
var ur = null;
function Ec(t, e) {
  (t.stylesheets = null),
    t.unsuspend !== null &&
      (t.count++, (ur = new Map()), e.forEach(ib, t), (ur = null), ar.call(t));
}
function ib(t, e) {
  if (!(e.state.loading & 4)) {
    var n = ur.get(t);
    if (n) var l = n.get(null);
    else {
      (n = new Map()), ur.set(t, n);
      for (
        var a = t.querySelectorAll(
            'link[data-precedence],style[data-precedence]'
          ),
          u = 0;
        u < a.length;
        u++
      ) {
        var i = a[u];
        (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
          (n.set(i.dataset.precedence, i), (l = i));
      }
      l && n.set(null, l);
    }
    (a = e.instance),
      (i = a.getAttribute('data-precedence')),
      (u = n.get(i) || l),
      u === l && n.set(null, a),
      n.set(i, a),
      this.count++,
      (l = ar.bind(this)),
      a.addEventListener('load', l),
      a.addEventListener('error', l),
      u
        ? u.parentNode.insertBefore(a, u.nextSibling)
        : ((t = t.nodeType === 9 ? t.head : t),
          t.insertBefore(a, t.firstChild)),
      (e.state.loading |= 4);
  }
}
var mu = {
  $$typeof: Ge,
  Provider: null,
  Consumer: null,
  _currentValue: In,
  _currentValue2: In,
  _threadCount: 0,
};
function rb(t, e, n, l, a, u, i, r) {
  (this.tag = 1),
    (this.containerInfo = t),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = Xr(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xr(0)),
    (this.hiddenUpdates = Xr(null)),
    (this.identifierPrefix = l),
    (this.onUncaughtError = a),
    (this.onCaughtError = u),
    (this.onRecoverableError = i),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = r),
    (this.incompleteTransitions = new Map());
}
function yp(t, e, n, l, a, u, i, r, s, c, f, o) {
  return (
    (t = new rb(t, e, n, i, r, s, c, o)),
    (e = 1),
    u === !0 && (e |= 24),
    (u = Ft(3, null, null, e)),
    (t.current = u),
    (u.stateNode = t),
    (e = yo()),
    e.refCount++,
    (t.pooledCache = e),
    e.refCount++,
    (u.memoizedState = { element: l, isDehydrated: n, cache: e }),
    vo(u),
    t
  );
}
function pp(t) {
  return t ? ((t = Ul), t) : Ul;
}
function vp(t, e, n, l, a, u) {
  (a = pp(a)),
    l.context === null ? (l.context = a) : (l.pendingContext = a),
    (l = An(e)),
    (l.payload = { element: n }),
    (u = u === void 0 ? null : u),
    u !== null && (l.callback = u),
    (n = xn(t, l, e)),
    n !== null && (It(n, t, e), Fa(n, t, e));
}
function Uh(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Go(t, e) {
  Uh(t, e), (t = t.alternate) && Uh(t, e);
}
function gp(t) {
  if (t.tag === 13) {
    var e = ga(t, 67108864);
    e !== null && It(e, t, 67108864), Go(t, 67108864);
  }
}
var ir = !0;
function sb(t, e, n, l) {
  var a = j.T;
  j.T = null;
  var u = J.p;
  try {
    (J.p = 2), Xo(t, e, n, l);
  } finally {
    (J.p = u), (j.T = a);
  }
}
function cb(t, e, n, l) {
  var a = j.T;
  j.T = null;
  var u = J.p;
  try {
    (J.p = 8), Xo(t, e, n, l);
  } finally {
    (J.p = u), (j.T = a);
  }
}
function Xo(t, e, n, l) {
  if (ir) {
    var a = Tc(l);
    if (a === null) Ss(t, e, l, rr, n), _h(t, l);
    else if (fb(a, t, e, n, l)) l.stopPropagation();
    else if ((_h(t, l), e & 4 && -1 < ob.indexOf(t))) {
      for (; a !== null; ) {
        var u = va(a);
        if (u !== null)
          switch (u.tag) {
            case 3:
              if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                var i = Yn(u.pendingLanes);
                if (i !== 0) {
                  var r = u;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                    var s = 1 << (31 - Wt(i));
                    (r.entanglements[1] |= s), (i &= ~s);
                  }
                  je(u), !($ & 6) && ((Wi = _e() + 500), Lu(0));
                }
              }
              break;
            case 13:
              (r = ga(u, 2)), r !== null && It(r, u, 2), Ar(), Go(u, 2);
          }
        if (((u = Tc(l)), u === null && Ss(t, e, l, rr, n), u === a)) break;
        a = u;
      }
      a !== null && l.stopPropagation();
    } else Ss(t, e, l, null, n);
  }
}
function Tc(t) {
  return (t = ao(t)), Vo(t);
}
var rr = null;
function Vo(t) {
  if (((rr = null), (t = Al(t)), t !== null)) {
    var e = xu(t);
    if (e === null) t = null;
    else {
      var n = e.tag;
      if (n === 13) {
        if (((t = Xd(e)), t !== null)) return t;
        t = null;
      } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null;
      } else e !== t && (t = null);
    }
  }
  return (rr = t), null;
}
function bp(t) {
  switch (t) {
    case 'beforetoggle':
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'toggle':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 2;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 8;
    case 'message':
      switch (Fv()) {
        case Jd:
          return 2;
        case kd:
          return 8;
        case ji:
        case $v:
          return 32;
        case Fd:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var Oc = !1,
  Mn = null,
  Cn = null,
  Un = null,
  yu = new Map(),
  pu = new Map(),
  hn = [],
  ob =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
      ' '
    );
function _h(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Mn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Cn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Un = null;
      break;
    case 'pointerover':
    case 'pointerout':
      yu.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      pu.delete(e.pointerId);
  }
}
function za(t, e, n, l, a, u) {
  return t === null || t.nativeEvent !== u
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: l,
        nativeEvent: u,
        targetContainers: [a],
      }),
      e !== null && ((e = va(e)), e !== null && gp(e)),
      t)
    : ((t.eventSystemFlags |= l),
      (e = t.targetContainers),
      a !== null && e.indexOf(a) === -1 && e.push(a),
      t);
}
function fb(t, e, n, l, a) {
  switch (e) {
    case 'focusin':
      return (Mn = za(Mn, t, e, n, l, a)), !0;
    case 'dragenter':
      return (Cn = za(Cn, t, e, n, l, a)), !0;
    case 'mouseover':
      return (Un = za(Un, t, e, n, l, a)), !0;
    case 'pointerover':
      var u = a.pointerId;
      return yu.set(u, za(yu.get(u) || null, t, e, n, l, a)), !0;
    case 'gotpointercapture':
      return (
        (u = a.pointerId), pu.set(u, za(pu.get(u) || null, t, e, n, l, a)), !0
      );
  }
  return !1;
}
function Sp(t) {
  var e = Al(t.target);
  if (e !== null) {
    var n = xu(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Xd(n)), e !== null)) {
          (t.blockedOn = e),
            a0(t.priority, function () {
              if (n.tag === 13) {
                var l = Pt();
                l = to(l);
                var a = ga(n, l);
                a !== null && It(a, n, l), Go(n, l);
              }
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function xi(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Tc(t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var l = new n.constructor(n.type, n);
      (Qs = l), n.target.dispatchEvent(l), (Qs = null);
    } else return (e = va(n)), e !== null && gp(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Nh(t, e, n) {
  xi(t) && n.delete(e);
}
function hb() {
  (Oc = !1),
    Mn !== null && xi(Mn) && (Mn = null),
    Cn !== null && xi(Cn) && (Cn = null),
    Un !== null && xi(Un) && (Un = null),
    yu.forEach(Nh),
    pu.forEach(Nh);
}
function ci(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Oc ||
      ((Oc = !0),
      bt.unstable_scheduleCallback(bt.unstable_NormalPriority, hb)));
}
var oi = null;
function zh(t) {
  oi !== t &&
    ((oi = t),
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, function () {
      oi === t && (oi = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e],
          l = t[e + 1],
          a = t[e + 2];
        if (typeof l != 'function') {
          if (Vo(l || n) === null) continue;
          break;
        }
        var u = va(n);
        u !== null &&
          (t.splice(e, 3),
          (e -= 3),
          nc(u, { pending: !0, data: a, method: n.method, action: l }, l, a));
      }
    }));
}
function vu(t) {
  function e(s) {
    return ci(s, t);
  }
  Mn !== null && ci(Mn, t),
    Cn !== null && ci(Cn, t),
    Un !== null && ci(Un, t),
    yu.forEach(e),
    pu.forEach(e);
  for (var n = 0; n < hn.length; n++) {
    var l = hn[n];
    l.blockedOn === t && (l.blockedOn = null);
  }
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null); )
    Sp(n), n.blockedOn === null && hn.shift();
  if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
    for (l = 0; l < n.length; l += 3) {
      var a = n[l],
        u = n[l + 1],
        i = a[Vt] || null;
      if (typeof u == 'function') i || zh(n);
      else if (i) {
        var r = null;
        if (u && u.hasAttribute('formAction')) {
          if (((a = u), (i = u[Vt] || null))) r = i.formAction;
          else if (Vo(a) !== null) continue;
        } else r = i.action;
        typeof r == 'function' ? (n[l + 1] = r) : (n.splice(l, 3), (l -= 3)),
          zh(n);
      }
    }
}
function Zo(t) {
  this._internalRoot = t;
}
Mr.prototype.render = Zo.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(A(409));
  var n = e.current,
    l = Pt();
  vp(n, l, t, e, null, null);
};
Mr.prototype.unmount = Zo.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    vp(t.current, 2, null, t, null, null), Ar(), (e[pa] = null);
  }
};
function Mr(t) {
  this._internalRoot = t;
}
Mr.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = tm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < hn.length && e !== 0 && e < hn[n].priority; n++);
    hn.splice(n, 0, t), n === 0 && Sp(t);
  }
};
var jh = Yd.version;
if (jh !== '19.1.0') throw Error(A(527, jh, '19.1.0'));
J.findDOMNode = function (t) {
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(A(188))
      : ((t = Object.keys(t).join(',')), Error(A(268, t)));
  return (
    (t = Gv(e)),
    (t = t !== null ? Vd(t) : null),
    (t = t === null ? null : t.stateNode),
    t
  );
};
var db = {
  bundleType: 0,
  version: '19.1.0',
  rendererPackageName: 'react-dom',
  currentDispatcherRef: j,
  reconcilerVersion: '19.1.0',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fi.isDisabled && fi.supportsFiber)
    try {
      (Du = fi.inject(db)), ($t = fi);
    } catch {}
}
dr.createRoot = function (t, e) {
  if (!Gd(t)) throw Error(A(299));
  var n = !1,
    l = '',
    a = yy,
    u = py,
    i = vy,
    r = null;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
      e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
      e.onCaughtError !== void 0 && (u = e.onCaughtError),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
      e.unstable_transitionCallbacks !== void 0 &&
        (r = e.unstable_transitionCallbacks)),
    (e = yp(t, 1, !1, null, null, n, l, a, u, i, r, null)),
    (t[pa] = e.current),
    Lo(t),
    new Zo(e)
  );
};
dr.hydrateRoot = function (t, e, n) {
  if (!Gd(t)) throw Error(A(299));
  var l = !1,
    a = '',
    u = yy,
    i = py,
    r = vy,
    s = null,
    c = null;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
      n.onCaughtError !== void 0 && (i = n.onCaughtError),
      n.onRecoverableError !== void 0 && (r = n.onRecoverableError),
      n.unstable_transitionCallbacks !== void 0 &&
        (s = n.unstable_transitionCallbacks),
      n.formState !== void 0 && (c = n.formState)),
    (e = yp(t, 1, !0, e, n ?? null, l, a, u, i, r, s, c)),
    (e.context = pp(null)),
    (n = e.current),
    (l = Pt()),
    (l = to(l)),
    (a = An(l)),
    (a.callback = null),
    xn(n, a, l),
    (n = l),
    (e.current.lanes = n),
    Mu(e, n),
    je(e),
    (t[pa] = e.current),
    Lo(t),
    new Mr(e)
  );
};
dr.version = '19.1.0';
function Ep() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep);
    } catch (t) {
      console.error(t);
    }
}
Ep(), (jd.exports = dr);
var mb = jd.exports;
const yb = Ad(mb);
var Ko = {};
Object.defineProperty(Ko, '__esModule', { value: !0 });
Ko.parse = Tb;
Ko.serialize = Ob;
const pb = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  vb = /^[\u0021-\u003A\u003C-\u007E]*$/,
  gb =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  bb = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Sb = Object.prototype.toString,
  Eb = (() => {
    const t = function () {};
    return (t.prototype = Object.create(null)), t;
  })();
function Tb(t, e) {
  const n = new Eb(),
    l = t.length;
  if (l < 2) return n;
  const a = (e == null ? void 0 : e.decode) || Rb;
  let u = 0;
  do {
    const i = t.indexOf('=', u);
    if (i === -1) break;
    const r = t.indexOf(';', u),
      s = r === -1 ? l : r;
    if (i > s) {
      u = t.lastIndexOf(';', i - 1) + 1;
      continue;
    }
    const c = Hh(t, u, i),
      f = Bh(t, i, c),
      o = t.slice(c, f);
    if (n[o] === void 0) {
      let h = Hh(t, i + 1, s),
        y = Bh(t, s, h);
      const b = a(t.slice(h, y));
      n[o] = b;
    }
    u = s + 1;
  } while (u < l);
  return n;
}
function Hh(t, e, n) {
  do {
    const l = t.charCodeAt(e);
    if (l !== 32 && l !== 9) return e;
  } while (++e < n);
  return n;
}
function Bh(t, e, n) {
  for (; e > n; ) {
    const l = t.charCodeAt(--e);
    if (l !== 32 && l !== 9) return e + 1;
  }
  return n;
}
function Ob(t, e, n) {
  const l = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!pb.test(t)) throw new TypeError(`argument name is invalid: ${t}`);
  const a = l(e);
  if (!vb.test(a)) throw new TypeError(`argument val is invalid: ${e}`);
  let u = t + '=' + a;
  if (!n) return u;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    u += '; Max-Age=' + n.maxAge;
  }
  if (n.domain) {
    if (!gb.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    u += '; Domain=' + n.domain;
  }
  if (n.path) {
    if (!bb.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    u += '; Path=' + n.path;
  }
  if (n.expires) {
    if (!Ab(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    u += '; Expires=' + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (u += '; HttpOnly'),
    n.secure && (u += '; Secure'),
    n.partitioned && (u += '; Partitioned'),
    n.priority)
  )
    switch (typeof n.priority == 'string' ? n.priority.toLowerCase() : void 0) {
      case 'low':
        u += '; Priority=Low';
        break;
      case 'medium':
        u += '; Priority=Medium';
        break;
      case 'high':
        u += '; Priority=High';
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == 'string' ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case 'strict':
        u += '; SameSite=Strict';
        break;
      case 'lax':
        u += '; SameSite=Lax';
        break;
      case 'none':
        u += '; SameSite=None';
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return u;
}
function Rb(t) {
  if (t.indexOf('%') === -1) return t;
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function Ab(t) {
  return Sb.call(t) === '[object Date]';
}
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var qh = 'popstate';
function xb(t = {}) {
  function e(l, a) {
    let { pathname: u, search: i, hash: r } = l.location;
    return Rc(
      '',
      { pathname: u, search: i, hash: r },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function n(l, a) {
    return typeof a == 'string' ? a : gu(a);
  }
  return wb(e, n, null, t);
}
function it(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
function ge(t, e) {
  if (!t) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Db() {
  return Math.random().toString(36).substring(2, 10);
}
function Lh(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Rc(t, e, n = null, l) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof e == 'string' ? Ta(e) : e),
    state: n,
    key: (e && e.key) || l || Db(),
  };
}
function gu({ pathname: t = '/', search: e = '', hash: n = '' }) {
  return (
    e && e !== '?' && (t += e.charAt(0) === '?' ? e : '?' + e),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function Ta(t) {
  let e = {};
  if (t) {
    let n = t.indexOf('#');
    n >= 0 && ((e.hash = t.substring(n)), (t = t.substring(0, n)));
    let l = t.indexOf('?');
    l >= 0 && ((e.search = t.substring(l)), (t = t.substring(0, l))),
      t && (e.pathname = t);
  }
  return e;
}
function wb(t, e, n, l = {}) {
  let { window: a = document.defaultView, v5Compat: u = !1 } = l,
    i = a.history,
    r = 'POP',
    s = null,
    c = f();
  c == null && ((c = 0), i.replaceState({ ...i.state, idx: c }, ''));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function o() {
    r = 'POP';
    let g = f(),
      d = g == null ? null : g - c;
    (c = g), s && s({ action: r, location: S.location, delta: d });
  }
  function h(g, d) {
    r = 'PUSH';
    let m = Rc(S.location, g, d);
    c = f() + 1;
    let p = Lh(m, c),
      E = S.createHref(m);
    try {
      i.pushState(p, '', E);
    } catch (R) {
      if (R instanceof DOMException && R.name === 'DataCloneError') throw R;
      a.location.assign(E);
    }
    u && s && s({ action: r, location: S.location, delta: 1 });
  }
  function y(g, d) {
    r = 'REPLACE';
    let m = Rc(S.location, g, d);
    c = f();
    let p = Lh(m, c),
      E = S.createHref(m);
    i.replaceState(p, '', E),
      u && s && s({ action: r, location: S.location, delta: 0 });
  }
  function b(g) {
    let d = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      m = typeof g == 'string' ? g : gu(g);
    return (
      (m = m.replace(/ $/, '%20')),
      it(
        d,
        `No window.location.(origin|href) available to create URL for href: ${m}`
      ),
      new URL(m, d)
    );
  }
  let S = {
    get action() {
      return r;
    },
    get location() {
      return t(a, i);
    },
    listen(g) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(qh, o),
        (s = g),
        () => {
          a.removeEventListener(qh, o), (s = null);
        }
      );
    },
    createHref(g) {
      return e(a, g);
    },
    createURL: b,
    encodeLocation(g) {
      let d = b(g);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: y,
    go(g) {
      return i.go(g);
    },
  };
  return S;
}
function Tp(t, e, n = '/') {
  return Mb(t, e, n, !1);
}
function Mb(t, e, n, l) {
  let a = typeof e == 'string' ? Ta(e) : e,
    u = tn(a.pathname || '/', n);
  if (u == null) return null;
  let i = Op(t);
  Cb(i);
  let r = null;
  for (let s = 0; r == null && s < i.length; ++s) {
    let c = Yb(u);
    r = Lb(i[s], c, l);
  }
  return r;
}
function Op(t, e = [], n = [], l = '') {
  let a = (u, i, r) => {
    let s = {
      relativePath: r === void 0 ? u.path || '' : r,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: i,
      route: u,
    };
    s.relativePath.startsWith('/') &&
      (it(
        s.relativePath.startsWith(l),
        `Absolute route path "${s.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (s.relativePath = s.relativePath.slice(l.length)));
    let c = Fe([l, s.relativePath]),
      f = n.concat(s);
    u.children &&
      u.children.length > 0 &&
      (it(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
      ),
      Op(u.children, e, f, c)),
      !(u.path == null && !u.index) &&
        e.push({ path: c, score: Bb(c, u.index), routesMeta: f });
  };
  return (
    t.forEach((u, i) => {
      var r;
      if (u.path === '' || !((r = u.path) != null && r.includes('?'))) a(u, i);
      else for (let s of Rp(u.path)) a(u, i, s);
    }),
    e
  );
}
function Rp(t) {
  let e = t.split('/');
  if (e.length === 0) return [];
  let [n, ...l] = e,
    a = n.endsWith('?'),
    u = n.replace(/\?$/, '');
  if (l.length === 0) return a ? [u, ''] : [u];
  let i = Rp(l.join('/')),
    r = [];
  return (
    r.push(...i.map((s) => (s === '' ? u : [u, s].join('/')))),
    a && r.push(...i),
    r.map((s) => (t.startsWith('/') && s === '' ? '/' : s))
  );
}
function Cb(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : qb(
          e.routesMeta.map((l) => l.childrenIndex),
          n.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
var Ub = /^:[\w-]+$/,
  _b = 3,
  Nb = 2,
  zb = 1,
  jb = 10,
  Hb = -2,
  Qh = (t) => t === '*';
function Bb(t, e) {
  let n = t.split('/'),
    l = n.length;
  return (
    n.some(Qh) && (l += Hb),
    e && (l += Nb),
    n
      .filter((a) => !Qh(a))
      .reduce((a, u) => a + (Ub.test(u) ? _b : u === '' ? zb : jb), l)
  );
}
function qb(t, e) {
  return t.length === e.length && t.slice(0, -1).every((l, a) => l === e[a])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Lb(t, e, n = !1) {
  let { routesMeta: l } = t,
    a = {},
    u = '/',
    i = [];
  for (let r = 0; r < l.length; ++r) {
    let s = l[r],
      c = r === l.length - 1,
      f = u === '/' ? e : e.slice(u.length) || '/',
      o = sr(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        f
      ),
      h = s.route;
    if (
      (!o &&
        c &&
        n &&
        !l[l.length - 1].route.index &&
        (o = sr(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !o)
    )
      return null;
    Object.assign(a, o.params),
      i.push({
        params: a,
        pathname: Fe([u, o.pathname]),
        pathnameBase: Zb(Fe([u, o.pathnameBase])),
        route: h,
      }),
      o.pathnameBase !== '/' && (u = Fe([u, o.pathnameBase]));
  }
  return i;
}
function sr(t, e) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, l] = Qb(t.path, t.caseSensitive, t.end),
    a = e.match(n);
  if (!a) return null;
  let u = a[0],
    i = u.replace(/(.)\/+$/, '$1'),
    r = a.slice(1);
  return {
    params: l.reduce((c, { paramName: f, isOptional: o }, h) => {
      if (f === '*') {
        let b = r[h] || '';
        i = u.slice(0, u.length - b.length).replace(/(.)\/+$/, '$1');
      }
      const y = r[h];
      return (
        o && !y ? (c[f] = void 0) : (c[f] = (y || '').replace(/%2F/g, '/')), c
      );
    }, {}),
    pathname: u,
    pathnameBase: i,
    pattern: t,
  };
}
function Qb(t, e = !1, n = !0) {
  ge(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(
      /\*$/,
      '/*'
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(
      /\*$/,
      '/*'
    )}".`
  );
  let l = [],
    a =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, r, s) => (
            l.push({ paramName: r, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    t.endsWith('*')
      ? (l.push({ paramName: '*' }),
        (a += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (a += '\\/*$')
      : t !== '' && t !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, e ? void 0 : 'i'), l]
  );
}
function Yb(t) {
  try {
    return t
      .split('/')
      .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
      .join('/');
  } catch (e) {
    return (
      ge(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
      ),
      t
    );
  }
}
function tn(t, e) {
  if (e === '/') return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith('/') ? e.length - 1 : e.length,
    l = t.charAt(n);
  return l && l !== '/' ? null : t.slice(n) || '/';
}
function Gb(t, e = '/') {
  let {
    pathname: n,
    search: l = '',
    hash: a = '',
  } = typeof t == 'string' ? Ta(t) : t;
  return {
    pathname: n ? (n.startsWith('/') ? n : Xb(n, e)) : e,
    search: Kb(l),
    hash: Jb(a),
  };
}
function Xb(t, e) {
  let n = e.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((a) => {
      a === '..' ? n.length > 1 && n.pop() : a !== '.' && n.push(a);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ts(t, e, n, l) {
  return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(
    l
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Vb(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Jo(t) {
  let e = Vb(t);
  return e.map((n, l) => (l === e.length - 1 ? n.pathname : n.pathnameBase));
}
function ko(t, e, n, l = !1) {
  let a;
  typeof t == 'string'
    ? (a = Ta(t))
    : ((a = { ...t }),
      it(
        !a.pathname || !a.pathname.includes('?'),
        Ts('?', 'pathname', 'search', a)
      ),
      it(
        !a.pathname || !a.pathname.includes('#'),
        Ts('#', 'pathname', 'hash', a)
      ),
      it(!a.search || !a.search.includes('#'), Ts('#', 'search', 'hash', a)));
  let u = t === '' || a.pathname === '',
    i = u ? '/' : a.pathname,
    r;
  if (i == null) r = n;
  else {
    let o = e.length - 1;
    if (!l && i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), (o -= 1);
      a.pathname = h.join('/');
    }
    r = o >= 0 ? e[o] : '/';
  }
  let s = Gb(a, r),
    c = i && i !== '/' && i.endsWith('/'),
    f = (u || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (c || f) && (s.pathname += '/'), s;
}
var Fe = (t) => t.join('/').replace(/\/\/+/g, '/'),
  Zb = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Kb = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  Jb = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
function kb(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
var Ap = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Ap);
var Fb = ['GET', ...Ap];
new Set(Fb);
var Oa = O.createContext(null);
Oa.displayName = 'DataRouter';
var Cr = O.createContext(null);
Cr.displayName = 'DataRouterState';
var xp = O.createContext({ isTransitioning: !1 });
xp.displayName = 'ViewTransition';
var $b = O.createContext(new Map());
$b.displayName = 'Fetchers';
var Wb = O.createContext(null);
Wb.displayName = 'Await';
var Se = O.createContext(null);
Se.displayName = 'Navigation';
var Gu = O.createContext(null);
Gu.displayName = 'Location';
var Ee = O.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ee.displayName = 'Route';
var Fo = O.createContext(null);
Fo.displayName = 'RouteError';
function Pb(t, { relative: e } = {}) {
  it(
    Ra(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: n, navigator: l } = O.useContext(Se),
    { hash: a, pathname: u, search: i } = Xu(t, { relative: e }),
    r = u;
  return (
    n !== '/' && (r = u === '/' ? n : Fe([n, u])),
    l.createHref({ pathname: r, search: i, hash: a })
  );
}
function Ra() {
  return O.useContext(Gu) != null;
}
function Bn() {
  return (
    it(
      Ra(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    O.useContext(Gu).location
  );
}
var Dp =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function wp(t) {
  O.useContext(Se).static || O.useLayoutEffect(t);
}
function $o() {
  let { isDataRoute: t } = O.useContext(Ee);
  return t ? hS() : Ib();
}
function Ib() {
  it(
    Ra(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let t = O.useContext(Oa),
    { basename: e, navigator: n } = O.useContext(Se),
    { matches: l } = O.useContext(Ee),
    { pathname: a } = Bn(),
    u = JSON.stringify(Jo(l)),
    i = O.useRef(!1);
  return (
    wp(() => {
      i.current = !0;
    }),
    O.useCallback(
      (s, c = {}) => {
        if ((ge(i.current, Dp), !i.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let f = ko(s, JSON.parse(u), a, c.relative === 'path');
        t == null &&
          e !== '/' &&
          (f.pathname = f.pathname === '/' ? e : Fe([e, f.pathname])),
          (c.replace ? n.replace : n.push)(f, c.state, c);
      },
      [e, n, u, a, t]
    )
  );
}
O.createContext(null);
function tS() {
  let { matches: t } = O.useContext(Ee),
    e = t[t.length - 1];
  return e ? e.params : {};
}
function Xu(t, { relative: e } = {}) {
  let { matches: n } = O.useContext(Ee),
    { pathname: l } = Bn(),
    a = JSON.stringify(Jo(n));
  return O.useMemo(() => ko(t, JSON.parse(a), l, e === 'path'), [t, a, l, e]);
}
function eS(t, e) {
  return Mp(t, e);
}
function Mp(t, e, n, l) {
  var m;
  it(
    Ra(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: a, static: u } = O.useContext(Se),
    { matches: i } = O.useContext(Ee),
    r = i[i.length - 1],
    s = r ? r.params : {},
    c = r ? r.pathname : '/',
    f = r ? r.pathnameBase : '/',
    o = r && r.route;
  {
    let p = (o && o.path) || '';
    Cp(
      c,
      !o || p.endsWith('*') || p.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${
        p === '/' ? '*' : `${p}/*`
      }">.`
    );
  }
  let h = Bn(),
    y;
  if (e) {
    let p = typeof e == 'string' ? Ta(e) : e;
    it(
      f === '/' || ((m = p.pathname) == null ? void 0 : m.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${p.pathname}" was given in the \`location\` prop.`
    ),
      (y = p);
  } else y = h;
  let b = y.pathname || '/',
    S = b;
  if (f !== '/') {
    let p = f.replace(/^\//, '').split('/');
    S = '/' + b.replace(/^\//, '').split('/').slice(p.length).join('/');
  }
  let g =
    !u && n && n.matches && n.matches.length > 0
      ? n.matches
      : Tp(t, { pathname: S });
  ge(
    o || g != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ),
    ge(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let d = iS(
    g &&
      g.map((p) =>
        Object.assign({}, p, {
          params: Object.assign({}, s, p.params),
          pathname: Fe([
            f,
            a.encodeLocation
              ? a.encodeLocation(p.pathname).pathname
              : p.pathname,
          ]),
          pathnameBase:
            p.pathnameBase === '/'
              ? f
              : Fe([
                  f,
                  a.encodeLocation
                    ? a.encodeLocation(p.pathnameBase).pathname
                    : p.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    l
  );
  return e && d
    ? O.createElement(
        Gu.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...y,
            },
            navigationType: 'POP',
          },
        },
        d
      )
    : d;
}
function nS() {
  let t = fS(),
    e = kb(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    l = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: l },
    u = { padding: '2px 4px', backgroundColor: l },
    i = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (i = O.createElement(
      O.Fragment,
      null,
      O.createElement('p', null, '💿 Hey developer 👋'),
      O.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        O.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        O.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    O.createElement(
      O.Fragment,
      null,
      O.createElement('h2', null, 'Unexpected Application Error!'),
      O.createElement('h3', { style: { fontStyle: 'italic' } }, e),
      n ? O.createElement('pre', { style: a }, n) : null,
      i
    )
  );
}
var lS = O.createElement(nS, null),
  aS = class extends O.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, e) {
      return e.location !== t.location ||
        (e.revalidation !== 'idle' && t.revalidation === 'idle')
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : e.error,
            location: e.location,
            revalidation: t.revalidation || e.revalidation,
          };
    }
    componentDidCatch(t, e) {
      console.error(
        'React Router caught the following error during render',
        t,
        e
      );
    }
    render() {
      return this.state.error !== void 0
        ? O.createElement(
            Ee.Provider,
            { value: this.props.routeContext },
            O.createElement(Fo.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function uS({ routeContext: t, match: e, children: n }) {
  let l = O.useContext(Oa);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = e.route.id),
    O.createElement(Ee.Provider, { value: t }, n)
  );
}
function iS(t, e = [], n = null, l = null) {
  if (t == null) {
    if (!n) return null;
    if (n.errors) t = n.matches;
    else if (e.length === 0 && !n.initialized && n.matches.length > 0)
      t = n.matches;
    else return null;
  }
  let a = t,
    u = n == null ? void 0 : n.errors;
  if (u != null) {
    let s = a.findIndex(
      (c) => c.route.id && (u == null ? void 0 : u[c.route.id]) !== void 0
    );
    it(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(',')}`
    ),
      (a = a.slice(0, Math.min(a.length, s + 1)));
  }
  let i = !1,
    r = -1;
  if (n)
    for (let s = 0; s < a.length; s++) {
      let c = a[s];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (r = s),
        c.route.id)
      ) {
        let { loaderData: f, errors: o } = n,
          h =
            c.route.loader &&
            !f.hasOwnProperty(c.route.id) &&
            (!o || o[c.route.id] === void 0);
        if (c.route.lazy || h) {
          (i = !0), r >= 0 ? (a = a.slice(0, r + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((s, c, f) => {
    let o,
      h = !1,
      y = null,
      b = null;
    n &&
      ((o = u && c.route.id ? u[c.route.id] : void 0),
      (y = c.route.errorElement || lS),
      i &&
        (r < 0 && f === 0
          ? (Cp(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (h = !0),
            (b = null))
          : r === f &&
            ((h = !0), (b = c.route.hydrateFallbackElement || null))));
    let S = e.concat(a.slice(0, f + 1)),
      g = () => {
        let d;
        return (
          o
            ? (d = y)
            : h
            ? (d = b)
            : c.route.Component
            ? (d = O.createElement(c.route.Component, null))
            : c.route.element
            ? (d = c.route.element)
            : (d = s),
          O.createElement(uS, {
            match: c,
            routeContext: { outlet: s, matches: S, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? O.createElement(aS, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: o,
          children: g(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : g();
  }, null);
}
function Wo(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function rS(t) {
  let e = O.useContext(Oa);
  return it(e, Wo(t)), e;
}
function sS(t) {
  let e = O.useContext(Cr);
  return it(e, Wo(t)), e;
}
function cS(t) {
  let e = O.useContext(Ee);
  return it(e, Wo(t)), e;
}
function Po(t) {
  let e = cS(t),
    n = e.matches[e.matches.length - 1];
  return (
    it(
      n.route.id,
      `${t} can only be used on routes that contain a unique "id"`
    ),
    n.route.id
  );
}
function oS() {
  return Po('useRouteId');
}
function fS() {
  var l;
  let t = O.useContext(Fo),
    e = sS('useRouteError'),
    n = Po('useRouteError');
  return t !== void 0 ? t : (l = e.errors) == null ? void 0 : l[n];
}
function hS() {
  let { router: t } = rS('useNavigate'),
    e = Po('useNavigate'),
    n = O.useRef(!1);
  return (
    wp(() => {
      n.current = !0;
    }),
    O.useCallback(
      async (a, u = {}) => {
        ge(n.current, Dp),
          n.current &&
            (typeof a == 'number'
              ? t.navigate(a)
              : await t.navigate(a, { fromRouteId: e, ...u }));
      },
      [t, e]
    )
  );
}
var Yh = {};
function Cp(t, e, n) {
  !e && !Yh[t] && ((Yh[t] = !0), ge(!1, n));
}
O.memo(dS);
function dS({ routes: t, future: e, state: n }) {
  return Mp(t, void 0, n, e);
}
function mS({ to: t, replace: e, state: n, relative: l }) {
  it(
    Ra(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: a } = O.useContext(Se);
  ge(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: u } = O.useContext(Ee),
    { pathname: i } = Bn(),
    r = $o(),
    s = ko(t, Jo(u), i, l === 'path'),
    c = JSON.stringify(s);
  return (
    O.useEffect(() => {
      r(JSON.parse(c), { replace: e, state: n, relative: l });
    }, [r, c, l, e, n]),
    null
  );
}
function Ya(t) {
  it(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function yS({
  basename: t = '/',
  children: e = null,
  location: n,
  navigationType: l = 'POP',
  navigator: a,
  static: u = !1,
}) {
  it(
    !Ra(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let i = t.replace(/^\/*/, '/'),
    r = O.useMemo(
      () => ({ basename: i, navigator: a, static: u, future: {} }),
      [i, a, u]
    );
  typeof n == 'string' && (n = Ta(n));
  let {
      pathname: s = '/',
      search: c = '',
      hash: f = '',
      state: o = null,
      key: h = 'default',
    } = n,
    y = O.useMemo(() => {
      let b = tn(s, i);
      return b == null
        ? null
        : {
            location: { pathname: b, search: c, hash: f, state: o, key: h },
            navigationType: l,
          };
    }, [i, s, c, f, o, h, l]);
  return (
    ge(
      y != null,
      `<Router basename="${i}"> is not able to match the URL "${s}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    y == null
      ? null
      : O.createElement(
          Se.Provider,
          { value: r },
          O.createElement(Gu.Provider, { children: e, value: y })
        )
  );
}
function pS({ children: t, location: e }) {
  return eS(Ac(t), e);
}
function Ac(t, e = []) {
  let n = [];
  return (
    O.Children.forEach(t, (l, a) => {
      if (!O.isValidElement(l)) return;
      let u = [...e, a];
      if (l.type === O.Fragment) {
        n.push.apply(n, Ac(l.props.children, u));
        return;
      }
      it(
        l.type === Ya,
        `[${
          typeof l.type == 'string' ? l.type : l.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        it(
          !l.props.index || !l.props.children,
          'An index route cannot have child routes.'
        );
      let i = {
        id: l.props.id || u.join('-'),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        hydrateFallbackElement: l.props.hydrateFallbackElement,
        HydrateFallback: l.props.HydrateFallback,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.hasErrorBoundary === !0 ||
          l.props.ErrorBoundary != null ||
          l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (i.children = Ac(l.props.children, u)), n.push(i);
    }),
    n
  );
}
var Di = 'get',
  wi = 'application/x-www-form-urlencoded';
function Ur(t) {
  return t != null && typeof t.tagName == 'string';
}
function vS(t) {
  return Ur(t) && t.tagName.toLowerCase() === 'button';
}
function gS(t) {
  return Ur(t) && t.tagName.toLowerCase() === 'form';
}
function bS(t) {
  return Ur(t) && t.tagName.toLowerCase() === 'input';
}
function SS(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function ES(t, e) {
  return t.button === 0 && (!e || e === '_self') && !SS(t);
}
var hi = null;
function TS() {
  if (hi === null)
    try {
      new FormData(document.createElement('form'), 0), (hi = !1);
    } catch {
      hi = !0;
    }
  return hi;
}
var OS = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Os(t) {
  return t != null && !OS.has(t)
    ? (ge(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wi}"`
      ),
      null)
    : t;
}
function RS(t, e) {
  let n, l, a, u, i;
  if (gS(t)) {
    let r = t.getAttribute('action');
    (l = r ? tn(r, e) : null),
      (n = t.getAttribute('method') || Di),
      (a = Os(t.getAttribute('enctype')) || wi),
      (u = new FormData(t));
  } else if (vS(t) || (bS(t) && (t.type === 'submit' || t.type === 'image'))) {
    let r = t.form;
    if (r == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = t.getAttribute('formaction') || r.getAttribute('action');
    if (
      ((l = s ? tn(s, e) : null),
      (n = t.getAttribute('formmethod') || r.getAttribute('method') || Di),
      (a =
        Os(t.getAttribute('formenctype')) ||
        Os(r.getAttribute('enctype')) ||
        wi),
      (u = new FormData(r, t)),
      !TS())
    ) {
      let { name: c, type: f, value: o } = t;
      if (f === 'image') {
        let h = c ? `${c}.` : '';
        u.append(`${h}x`, '0'), u.append(`${h}y`, '0');
      } else c && u.append(c, o);
    }
  } else {
    if (Ur(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Di), (l = null), (a = wi), (i = t);
  }
  return (
    u && a === 'text/plain' && ((i = u), (u = void 0)),
    { action: l, method: n.toLowerCase(), encType: a, formData: u, body: i }
  );
}
function Io(t, e) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(e);
}
async function AS(t, e) {
  if (t.id in e) return e[t.id];
  try {
    let n = await import(t.module);
    return (e[t.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function xS(t) {
  return t == null
    ? !1
    : t.href == null
    ? t.rel === 'preload' &&
      typeof t.imageSrcSet == 'string' &&
      typeof t.imageSizes == 'string'
    : typeof t.rel == 'string' && typeof t.href == 'string';
}
async function DS(t, e, n) {
  let l = await Promise.all(
    t.map(async (a) => {
      let u = e.routes[a.route.id];
      if (u) {
        let i = await AS(u, n);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return US(
    l
      .flat(1)
      .filter(xS)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' }
      )
  );
}
function Gh(t, e, n, l, a, u) {
  let i = (s, c) => (n[c] ? s.route.id !== n[c].route.id : !0),
    r = (s, c) => {
      var f;
      return (
        n[c].pathname !== s.pathname ||
        (((f = n[c].route.path) == null ? void 0 : f.endsWith('*')) &&
          n[c].params['*'] !== s.params['*'])
      );
    };
  return u === 'assets'
    ? e.filter((s, c) => i(s, c) || r(s, c))
    : u === 'data'
    ? e.filter((s, c) => {
        var o;
        let f = l.routes[s.route.id];
        if (!f || !f.hasLoader) return !1;
        if (i(s, c) || r(s, c)) return !0;
        if (s.route.shouldRevalidate) {
          let h = s.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams: ((o = n[0]) == null ? void 0 : o.params) || {},
            nextUrl: new URL(t, window.origin),
            nextParams: s.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof h == 'boolean') return h;
        }
        return !0;
      })
    : [];
}
function wS(t, e, { includeHydrateFallback: n } = {}) {
  return MS(
    t
      .map((l) => {
        let a = e.routes[l.route.id];
        if (!a) return [];
        let u = [a.module];
        return (
          a.clientActionModule && (u = u.concat(a.clientActionModule)),
          a.clientLoaderModule && (u = u.concat(a.clientLoaderModule)),
          n &&
            a.hydrateFallbackModule &&
            (u = u.concat(a.hydrateFallbackModule)),
          a.imports && (u = u.concat(a.imports)),
          u
        );
      })
      .flat(1)
  );
}
function MS(t) {
  return [...new Set(t)];
}
function CS(t) {
  let e = {},
    n = Object.keys(t).sort();
  for (let l of n) e[l] = t[l];
  return e;
}
function US(t, e) {
  let n = new Set();
  return (
    new Set(e),
    t.reduce((l, a) => {
      let u = JSON.stringify(CS(a));
      return n.has(u) || (n.add(u), l.push({ key: u, link: a })), l;
    }, [])
  );
}
function _S(t, e) {
  let n =
    typeof t == 'string'
      ? new URL(
          t,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : t;
  return (
    n.pathname === '/'
      ? (n.pathname = '_root.data')
      : e && tn(n.pathname, e) === '/'
      ? (n.pathname = `${e.replace(/\/$/, '')}/_root.data`)
      : (n.pathname = `${n.pathname.replace(/\/$/, '')}.data`),
    n
  );
}
function Up() {
  let t = O.useContext(Oa);
  return (
    Io(
      t,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    t
  );
}
function NS() {
  let t = O.useContext(Cr);
  return (
    Io(
      t,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    t
  );
}
var tf = O.createContext(void 0);
tf.displayName = 'FrameworkContext';
function _p() {
  let t = O.useContext(tf);
  return (
    Io(t, 'You must render this element inside a <HydratedRouter> element'), t
  );
}
function zS(t, e) {
  let n = O.useContext(tf),
    [l, a] = O.useState(!1),
    [u, i] = O.useState(!1),
    {
      onFocus: r,
      onBlur: s,
      onMouseEnter: c,
      onMouseLeave: f,
      onTouchStart: o,
    } = e,
    h = O.useRef(null);
  O.useEffect(() => {
    if ((t === 'render' && i(!0), t === 'viewport')) {
      let S = (d) => {
          d.forEach((m) => {
            i(m.isIntersecting);
          });
        },
        g = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        h.current && g.observe(h.current),
        () => {
          g.disconnect();
        }
      );
    }
  }, [t]),
    O.useEffect(() => {
      if (l) {
        let S = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [l]);
  let y = () => {
      a(!0);
    },
    b = () => {
      a(!1), i(!1);
    };
  return n
    ? t !== 'intent'
      ? [u, h, {}]
      : [
          u,
          h,
          {
            onFocus: ja(r, y),
            onBlur: ja(s, b),
            onMouseEnter: ja(c, y),
            onMouseLeave: ja(f, b),
            onTouchStart: ja(o, y),
          },
        ]
    : [!1, h, {}];
}
function ja(t, e) {
  return (n) => {
    t && t(n), n.defaultPrevented || e(n);
  };
}
function jS({ page: t, ...e }) {
  let { router: n } = Up(),
    l = O.useMemo(() => Tp(n.routes, t, n.basename), [n.routes, t, n.basename]);
  return l ? O.createElement(BS, { page: t, matches: l, ...e }) : null;
}
function HS(t) {
  let { manifest: e, routeModules: n } = _p(),
    [l, a] = O.useState([]);
  return (
    O.useEffect(() => {
      let u = !1;
      return (
        DS(t, e, n).then((i) => {
          u || a(i);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, e, n]),
    l
  );
}
function BS({ page: t, matches: e, ...n }) {
  let l = Bn(),
    { manifest: a, routeModules: u } = _p(),
    { basename: i } = Up(),
    { loaderData: r, matches: s } = NS(),
    c = O.useMemo(() => Gh(t, e, s, a, l, 'data'), [t, e, s, a, l]),
    f = O.useMemo(() => Gh(t, e, s, a, l, 'assets'), [t, e, s, a, l]),
    o = O.useMemo(() => {
      if (t === l.pathname + l.search + l.hash) return [];
      let b = new Set(),
        S = !1;
      if (
        (e.forEach((d) => {
          var p;
          let m = a.routes[d.route.id];
          !m ||
            !m.hasLoader ||
            ((!c.some((E) => E.route.id === d.route.id) &&
              d.route.id in r &&
              (p = u[d.route.id]) != null &&
              p.shouldRevalidate) ||
            m.hasClientLoader
              ? (S = !0)
              : b.add(d.route.id));
        }),
        b.size === 0)
      )
        return [];
      let g = _S(t, i);
      return (
        S &&
          b.size > 0 &&
          g.searchParams.set(
            '_routes',
            e
              .filter((d) => b.has(d.route.id))
              .map((d) => d.route.id)
              .join(',')
          ),
        [g.pathname + g.search]
      );
    }, [i, r, l, a, c, e, t, u]),
    h = O.useMemo(() => wS(f, a), [f, a]),
    y = HS(f);
  return O.createElement(
    O.Fragment,
    null,
    o.map((b) =>
      O.createElement('link', {
        key: b,
        rel: 'prefetch',
        as: 'fetch',
        href: b,
        ...n,
      })
    ),
    h.map((b) =>
      O.createElement('link', { key: b, rel: 'modulepreload', href: b, ...n })
    ),
    y.map(({ key: b, link: S }) => O.createElement('link', { key: b, ...S }))
  );
}
function qS(...t) {
  return (e) => {
    t.forEach((n) => {
      typeof n == 'function' ? n(e) : n != null && (n.current = e);
    });
  };
}
var Np =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Np && (window.__reactRouterVersion = '7.5.0');
} catch {}
function LS({ basename: t, children: e, window: n }) {
  let l = O.useRef();
  l.current == null && (l.current = xb({ window: n, v5Compat: !0 }));
  let a = l.current,
    [u, i] = O.useState({ action: a.action, location: a.location }),
    r = O.useCallback(
      (s) => {
        O.startTransition(() => i(s));
      },
      [i]
    );
  return (
    O.useLayoutEffect(() => a.listen(r), [a, r]),
    O.createElement(yS, {
      basename: t,
      children: e,
      location: u.location,
      navigationType: u.action,
      navigator: a,
    })
  );
}
var zp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jp = O.forwardRef(function (
    {
      onClick: e,
      discover: n = 'render',
      prefetch: l = 'none',
      relative: a,
      reloadDocument: u,
      replace: i,
      state: r,
      target: s,
      to: c,
      preventScrollReset: f,
      viewTransition: o,
      ...h
    },
    y
  ) {
    let { basename: b } = O.useContext(Se),
      S = typeof c == 'string' && zp.test(c),
      g,
      d = !1;
    if (typeof c == 'string' && S && ((g = c), Np))
      try {
        let _ = new URL(window.location.href),
          N = c.startsWith('//') ? new URL(_.protocol + c) : new URL(c),
          I = tn(N.pathname, b);
        N.origin === _.origin && I != null
          ? (c = I + N.search + N.hash)
          : (d = !0);
      } catch {
        ge(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let m = Pb(c, { relative: a }),
      [p, E, R] = zS(l, h),
      D = XS(c, {
        replace: i,
        state: r,
        target: s,
        preventScrollReset: f,
        relative: a,
        viewTransition: o,
      });
    function x(_) {
      e && e(_), _.defaultPrevented || D(_);
    }
    let w = O.createElement('a', {
      ...h,
      ...R,
      href: g || m,
      onClick: d || u ? e : x,
      ref: qS(y, E),
      target: s,
      'data-discover': !S && n === 'render' ? 'true' : void 0,
    });
    return p && !S
      ? O.createElement(O.Fragment, null, w, O.createElement(jS, { page: m }))
      : w;
  });
jp.displayName = 'Link';
var QS = O.forwardRef(function (
  {
    'aria-current': e = 'page',
    caseSensitive: n = !1,
    className: l = '',
    end: a = !1,
    style: u,
    to: i,
    viewTransition: r,
    children: s,
    ...c
  },
  f
) {
  let o = Xu(i, { relative: c.relative }),
    h = Bn(),
    y = O.useContext(Cr),
    { navigator: b, basename: S } = O.useContext(Se),
    g = y != null && kS(o) && r === !0,
    d = b.encodeLocation ? b.encodeLocation(o).pathname : o.pathname,
    m = h.pathname,
    p =
      y && y.navigation && y.navigation.location
        ? y.navigation.location.pathname
        : null;
  n ||
    ((m = m.toLowerCase()),
    (p = p ? p.toLowerCase() : null),
    (d = d.toLowerCase())),
    p && S && (p = tn(p, S) || p);
  const E = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
  let R = m === d || (!a && m.startsWith(d) && m.charAt(E) === '/'),
    D =
      p != null &&
      (p === d || (!a && p.startsWith(d) && p.charAt(d.length) === '/')),
    x = { isActive: R, isPending: D, isTransitioning: g },
    w = R ? e : void 0,
    _;
  typeof l == 'function'
    ? (_ = l(x))
    : (_ = [
        l,
        R ? 'active' : null,
        D ? 'pending' : null,
        g ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let N = typeof u == 'function' ? u(x) : u;
  return O.createElement(
    jp,
    {
      ...c,
      'aria-current': w,
      className: _,
      ref: f,
      style: N,
      to: i,
      viewTransition: r,
    },
    typeof s == 'function' ? s(x) : s
  );
});
QS.displayName = 'NavLink';
var YS = O.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: e,
      navigate: n,
      reloadDocument: l,
      replace: a,
      state: u,
      method: i = Di,
      action: r,
      onSubmit: s,
      relative: c,
      preventScrollReset: f,
      viewTransition: o,
      ...h
    },
    y
  ) => {
    let b = KS(),
      S = JS(r, { relative: c }),
      g = i.toLowerCase() === 'get' ? 'get' : 'post',
      d = typeof r == 'string' && zp.test(r),
      m = (p) => {
        if ((s && s(p), p.defaultPrevented)) return;
        p.preventDefault();
        let E = p.nativeEvent.submitter,
          R = (E == null ? void 0 : E.getAttribute('formmethod')) || i;
        b(E || p.currentTarget, {
          fetcherKey: e,
          method: R,
          navigate: n,
          replace: a,
          state: u,
          relative: c,
          preventScrollReset: f,
          viewTransition: o,
        });
      };
    return O.createElement('form', {
      ref: y,
      method: g,
      action: S,
      onSubmit: l ? s : m,
      ...h,
      'data-discover': !d && t === 'render' ? 'true' : void 0,
    });
  }
);
YS.displayName = 'Form';
function GS(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hp(t) {
  let e = O.useContext(Oa);
  return it(e, GS(t)), e;
}
function XS(
  t,
  {
    target: e,
    replace: n,
    state: l,
    preventScrollReset: a,
    relative: u,
    viewTransition: i,
  } = {}
) {
  let r = $o(),
    s = Bn(),
    c = Xu(t, { relative: u });
  return O.useCallback(
    (f) => {
      if (ES(f, e)) {
        f.preventDefault();
        let o = n !== void 0 ? n : gu(s) === gu(c);
        r(t, {
          replace: o,
          state: l,
          preventScrollReset: a,
          relative: u,
          viewTransition: i,
        });
      }
    },
    [s, r, c, n, l, e, t, a, u, i]
  );
}
var VS = 0,
  ZS = () => `__${String(++VS)}__`;
function KS() {
  let { router: t } = Hp('useSubmit'),
    { basename: e } = O.useContext(Se),
    n = oS();
  return O.useCallback(
    async (l, a = {}) => {
      let { action: u, method: i, encType: r, formData: s, body: c } = RS(l, e);
      if (a.navigate === !1) {
        let f = a.fetcherKey || ZS();
        await t.fetch(f, n, a.action || u, {
          preventScrollReset: a.preventScrollReset,
          formData: s,
          body: c,
          formMethod: a.method || i,
          formEncType: a.encType || r,
          flushSync: a.flushSync,
        });
      } else
        await t.navigate(a.action || u, {
          preventScrollReset: a.preventScrollReset,
          formData: s,
          body: c,
          formMethod: a.method || i,
          formEncType: a.encType || r,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [t, e, n]
  );
}
function JS(t, { relative: e } = {}) {
  let { basename: n } = O.useContext(Se),
    l = O.useContext(Ee);
  it(l, 'useFormAction must be used inside a RouteContext');
  let [a] = l.matches.slice(-1),
    u = { ...Xu(t || '.', { relative: e }) },
    i = Bn();
  if (t == null) {
    u.search = i.search;
    let r = new URLSearchParams(u.search),
      s = r.getAll('index');
    if (s.some((f) => f === '')) {
      r.delete('index'),
        s.filter((o) => o).forEach((o) => r.append('index', o));
      let f = r.toString();
      u.search = f ? `?${f}` : '';
    }
  }
  return (
    (!t || t === '.') &&
      a.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (u.pathname = u.pathname === '/' ? n : Fe([n, u.pathname])),
    gu(u)
  );
}
function kS(t, e = {}) {
  let n = O.useContext(xp);
  it(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: l } = Hp('useViewTransitionState'),
    a = Xu(t, { relative: e.relative });
  if (!n.isTransitioning) return !1;
  let u = tn(n.currentLocation.pathname, l) || n.currentLocation.pathname,
    i = tn(n.nextLocation.pathname, l) || n.nextLocation.pathname;
  return sr(a.pathname, i) != null || sr(a.pathname, u) != null;
}
new TextEncoder();
const FS = () =>
    M.jsx('div', {
      className: 'fixed bottom-0 w-full bg-white shadow-md p-4',
      children: M.jsxs('div', {
        className: 'flex justify-center',
        children: [
          M.jsxs('p', {
            children: [
              'Made with',
              ' ',
              M.jsx('a', {
                href: 'https://reactjs.org',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'font-semibold text-blue-500 hover:underline',
                children: 'React',
              }),
              ' + ',
              M.jsx('a', {
                href: 'https://vite.dev',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'font-semibold text-blue-500 hover:underline',
                children: 'Vite',
              }),
              '.',
            ],
          }),
          M.jsxs('p', {
            children: [
              '© ',
              new Date().getFullYear(),
              ' Vocab by',
              ' ',
              M.jsx('a', {
                href: 'https://github.com/vistej',
                className: 'text-blue-500 hover:underline font-medium',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'vistej',
              }),
              '.',
            ],
          }),
        ],
      }),
    }),
  $S = () => M.jsx(M.Fragment, {});
function Bp(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: WS } = Object.prototype,
  { getPrototypeOf: ef } = Object,
  _r = ((t) => (e) => {
    const n = WS.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Te = (t) => ((t = t.toLowerCase()), (e) => _r(e) === t),
  Nr = (t) => (e) => typeof e === t,
  { isArray: Aa } = Array,
  bu = Nr('undefined');
function PS(t) {
  return (
    t !== null &&
    !bu(t) &&
    t.constructor !== null &&
    !bu(t.constructor) &&
    te(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const qp = Te('ArrayBuffer');
function IS(t) {
  let e;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && qp(t.buffer)),
    e
  );
}
const t1 = Nr('string'),
  te = Nr('function'),
  Lp = Nr('number'),
  zr = (t) => t !== null && typeof t == 'object',
  e1 = (t) => t === !0 || t === !1,
  Mi = (t) => {
    if (_r(t) !== 'object') return !1;
    const e = ef(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  n1 = Te('Date'),
  l1 = Te('File'),
  a1 = Te('Blob'),
  u1 = Te('FileList'),
  i1 = (t) => zr(t) && te(t.pipe),
  r1 = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == 'function' && t instanceof FormData) ||
        (te(t.append) &&
          ((e = _r(t)) === 'formdata' ||
            (e === 'object' &&
              te(t.toString) &&
              t.toString() === '[object FormData]'))))
    );
  },
  s1 = Te('URLSearchParams'),
  [c1, o1, f1, h1] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Te
  ),
  d1 = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Vu(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > 'u') return;
  let l, a;
  if ((typeof t != 'object' && (t = [t]), Aa(t)))
    for (l = 0, a = t.length; l < a; l++) e.call(null, t[l], l, t);
  else {
    const u = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      i = u.length;
    let r;
    for (l = 0; l < i; l++) (r = u[l]), e.call(null, t[r], r, t);
  }
}
function Qp(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let l = n.length,
    a;
  for (; l-- > 0; ) if (((a = n[l]), e === a.toLowerCase())) return a;
  return null;
}
const Vn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  Yp = (t) => !bu(t) && t !== Vn;
function xc() {
  const { caseless: t } = (Yp(this) && this) || {},
    e = {},
    n = (l, a) => {
      const u = (t && Qp(e, a)) || a;
      Mi(e[u]) && Mi(l)
        ? (e[u] = xc(e[u], l))
        : Mi(l)
        ? (e[u] = xc({}, l))
        : Aa(l)
        ? (e[u] = l.slice())
        : (e[u] = l);
    };
  for (let l = 0, a = arguments.length; l < a; l++)
    arguments[l] && Vu(arguments[l], n);
  return e;
}
const m1 = (t, e, n, { allOwnKeys: l } = {}) => (
    Vu(
      e,
      (a, u) => {
        n && te(a) ? (t[u] = Bp(a, n)) : (t[u] = a);
      },
      { allOwnKeys: l }
    ),
    t
  ),
  y1 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  p1 = (t, e, n, l) => {
    (t.prototype = Object.create(e.prototype, l)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, 'super', { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  v1 = (t, e, n, l) => {
    let a, u, i;
    const r = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (a = Object.getOwnPropertyNames(t), u = a.length; u-- > 0; )
        (i = a[u]), (!l || l(i, t, e)) && !r[i] && ((e[i] = t[i]), (r[i] = !0));
      t = n !== !1 && ef(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  g1 = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const l = t.indexOf(e, n);
    return l !== -1 && l === n;
  },
  b1 = (t) => {
    if (!t) return null;
    if (Aa(t)) return t;
    let e = t.length;
    if (!Lp(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  S1 = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < 'u' && ef(Uint8Array)),
  E1 = (t, e) => {
    const l = (t && t[Symbol.iterator]).call(t);
    let a;
    for (; (a = l.next()) && !a.done; ) {
      const u = a.value;
      e.call(t, u[0], u[1]);
    }
  },
  T1 = (t, e) => {
    let n;
    const l = [];
    for (; (n = t.exec(e)) !== null; ) l.push(n);
    return l;
  },
  O1 = Te('HTMLFormElement'),
  R1 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, l, a) {
      return l.toUpperCase() + a;
    }),
  Xh = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  A1 = Te('RegExp'),
  Gp = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      l = {};
    Vu(n, (a, u) => {
      let i;
      (i = e(a, u, t)) !== !1 && (l[u] = i || a);
    }),
      Object.defineProperties(t, l);
  },
  x1 = (t) => {
    Gp(t, (e, n) => {
      if (te(t) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const l = t[n];
      if (te(l)) {
        if (((e.enumerable = !1), 'writable' in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  D1 = (t, e) => {
    const n = {},
      l = (a) => {
        a.forEach((u) => {
          n[u] = !0;
        });
      };
    return Aa(t) ? l(t) : l(String(t).split(e)), n;
  },
  w1 = () => {},
  M1 = (t, e) => (t != null && Number.isFinite((t = +t)) ? t : e);
function C1(t) {
  return !!(
    t &&
    te(t.append) &&
    t[Symbol.toStringTag] === 'FormData' &&
    t[Symbol.iterator]
  );
}
const U1 = (t) => {
    const e = new Array(10),
      n = (l, a) => {
        if (zr(l)) {
          if (e.indexOf(l) >= 0) return;
          if (!('toJSON' in l)) {
            e[a] = l;
            const u = Aa(l) ? [] : {};
            return (
              Vu(l, (i, r) => {
                const s = n(i, a + 1);
                !bu(s) && (u[r] = s);
              }),
              (e[a] = void 0),
              u
            );
          }
        }
        return l;
      };
    return n(t, 0);
  },
  _1 = Te('AsyncFunction'),
  N1 = (t) => t && (zr(t) || te(t)) && te(t.then) && te(t.catch),
  Xp = ((t, e) =>
    t
      ? setImmediate
      : e
      ? ((n, l) => (
          Vn.addEventListener(
            'message',
            ({ source: a, data: u }) => {
              a === Vn && u === n && l.length && l.shift()();
            },
            !1
          ),
          (a) => {
            l.push(a), Vn.postMessage(n, '*');
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    te(Vn.postMessage)
  ),
  z1 =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Vn)
      : (typeof process < 'u' && process.nextTick) || Xp,
  T = {
    isArray: Aa,
    isArrayBuffer: qp,
    isBuffer: PS,
    isFormData: r1,
    isArrayBufferView: IS,
    isString: t1,
    isNumber: Lp,
    isBoolean: e1,
    isObject: zr,
    isPlainObject: Mi,
    isReadableStream: c1,
    isRequest: o1,
    isResponse: f1,
    isHeaders: h1,
    isUndefined: bu,
    isDate: n1,
    isFile: l1,
    isBlob: a1,
    isRegExp: A1,
    isFunction: te,
    isStream: i1,
    isURLSearchParams: s1,
    isTypedArray: S1,
    isFileList: u1,
    forEach: Vu,
    merge: xc,
    extend: m1,
    trim: d1,
    stripBOM: y1,
    inherits: p1,
    toFlatObject: v1,
    kindOf: _r,
    kindOfTest: Te,
    endsWith: g1,
    toArray: b1,
    forEachEntry: E1,
    matchAll: T1,
    isHTMLForm: O1,
    hasOwnProperty: Xh,
    hasOwnProp: Xh,
    reduceDescriptors: Gp,
    freezeMethods: x1,
    toObjectSet: D1,
    toCamelCase: R1,
    noop: w1,
    toFiniteNumber: M1,
    findKey: Qp,
    global: Vn,
    isContextDefined: Yp,
    isSpecCompliantForm: C1,
    toJSONObject: U1,
    isAsyncFn: _1,
    isThenable: N1,
    setImmediate: Xp,
    asap: z1,
  };
function H(t, e, n, l, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = 'AxiosError'),
    e && (this.code = e),
    n && (this.config = n),
    l && (this.request = l),
    a && ((this.response = a), (this.status = a.status ? a.status : null));
}
T.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Vp = H.prototype,
  Zp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((t) => {
  Zp[t] = { value: t };
});
Object.defineProperties(H, Zp);
Object.defineProperty(Vp, 'isAxiosError', { value: !0 });
H.from = (t, e, n, l, a, u) => {
  const i = Object.create(Vp);
  return (
    T.toFlatObject(
      t,
      i,
      function (s) {
        return s !== Error.prototype;
      },
      (r) => r !== 'isAxiosError'
    ),
    H.call(i, t.message, e, n, l, a),
    (i.cause = t),
    (i.name = t.name),
    u && Object.assign(i, u),
    i
  );
};
const j1 = null;
function Dc(t) {
  return T.isPlainObject(t) || T.isArray(t);
}
function Kp(t) {
  return T.endsWith(t, '[]') ? t.slice(0, -2) : t;
}
function Vh(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (a, u) {
          return (a = Kp(a)), !n && u ? '[' + a + ']' : a;
        })
        .join(n ? '.' : '')
    : e;
}
function H1(t) {
  return T.isArray(t) && !t.some(Dc);
}
const B1 = T.toFlatObject(T, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function jr(t, e, n) {
  if (!T.isObject(t)) throw new TypeError('target must be an object');
  (e = e || new FormData()),
    (n = T.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, g) {
        return !T.isUndefined(g[S]);
      }
    ));
  const l = n.metaTokens,
    a = n.visitor || f,
    u = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && T.isSpecCompliantForm(e);
  if (!T.isFunction(a)) throw new TypeError('visitor must be a function');
  function c(b) {
    if (b === null) return '';
    if (T.isDate(b)) return b.toISOString();
    if (!s && T.isBlob(b))
      throw new H('Blob is not supported. Use a Buffer instead.');
    return T.isArrayBuffer(b) || T.isTypedArray(b)
      ? s && typeof Blob == 'function'
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function f(b, S, g) {
    let d = b;
    if (b && !g && typeof b == 'object') {
      if (T.endsWith(S, '{}'))
        (S = l ? S : S.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (T.isArray(b) && H1(b)) ||
        ((T.isFileList(b) || T.endsWith(S, '[]')) && (d = T.toArray(b)))
      )
        return (
          (S = Kp(S)),
          d.forEach(function (p, E) {
            !(T.isUndefined(p) || p === null) &&
              e.append(
                i === !0 ? Vh([S], E, u) : i === null ? S : S + '[]',
                c(p)
              );
          }),
          !1
        );
    }
    return Dc(b) ? !0 : (e.append(Vh(g, S, u), c(b)), !1);
  }
  const o = [],
    h = Object.assign(B1, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: Dc,
    });
  function y(b, S) {
    if (!T.isUndefined(b)) {
      if (o.indexOf(b) !== -1)
        throw Error('Circular reference detected in ' + S.join('.'));
      o.push(b),
        T.forEach(b, function (d, m) {
          (!(T.isUndefined(d) || d === null) &&
            a.call(e, d, T.isString(m) ? m.trim() : m, S, h)) === !0 &&
            y(d, S ? S.concat(m) : [m]);
        }),
        o.pop();
    }
  }
  if (!T.isObject(t)) throw new TypeError('data must be an object');
  return y(t), e;
}
function Zh(t) {
  const e = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (l) {
    return e[l];
  });
}
function nf(t, e) {
  (this._pairs = []), t && jr(t, this, e);
}
const Jp = nf.prototype;
Jp.append = function (e, n) {
  this._pairs.push([e, n]);
};
Jp.toString = function (e) {
  const n = e
    ? function (l) {
        return e.call(this, l, Zh);
      }
    : Zh;
  return this._pairs
    .map(function (a) {
      return n(a[0]) + '=' + n(a[1]);
    }, '')
    .join('&');
};
function q1(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function kp(t, e, n) {
  if (!e) return t;
  const l = (n && n.encode) || q1;
  T.isFunction(n) && (n = { serialize: n });
  const a = n && n.serialize;
  let u;
  if (
    (a
      ? (u = a(e, n))
      : (u = T.isURLSearchParams(e) ? e.toString() : new nf(e, n).toString(l)),
    u)
  ) {
    const i = t.indexOf('#');
    i !== -1 && (t = t.slice(0, i)),
      (t += (t.indexOf('?') === -1 ? '?' : '&') + u);
  }
  return t;
}
class Kh {
  constructor() {
    this.handlers = [];
  }
  use(e, n, l) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: l ? l.synchronous : !1,
        runWhen: l ? l.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    T.forEach(this.handlers, function (l) {
      l !== null && e(l);
    });
  }
}
const Fp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  L1 = typeof URLSearchParams < 'u' ? URLSearchParams : nf,
  Q1 = typeof FormData < 'u' ? FormData : null,
  Y1 = typeof Blob < 'u' ? Blob : null,
  G1 = {
    isBrowser: !0,
    classes: { URLSearchParams: L1, FormData: Q1, Blob: Y1 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  lf = typeof window < 'u' && typeof document < 'u',
  wc = (typeof navigator == 'object' && navigator) || void 0,
  X1 =
    lf &&
    (!wc || ['ReactNative', 'NativeScript', 'NS'].indexOf(wc.product) < 0),
  V1 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Z1 = (lf && window.location.href) || 'http://localhost',
  K1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: lf,
        hasStandardBrowserEnv: X1,
        hasStandardBrowserWebWorkerEnv: V1,
        navigator: wc,
        origin: Z1,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ut = { ...K1, ...G1 };
function J1(t, e) {
  return jr(
    t,
    new Ut.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, l, a, u) {
          return Ut.isNode && T.isBuffer(n)
            ? (this.append(l, n.toString('base64')), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function k1(t) {
  return T.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === '[]' ? '' : e[1] || e[0]
  );
}
function F1(t) {
  const e = {},
    n = Object.keys(t);
  let l;
  const a = n.length;
  let u;
  for (l = 0; l < a; l++) (u = n[l]), (e[u] = t[u]);
  return e;
}
function $p(t) {
  function e(n, l, a, u) {
    let i = n[u++];
    if (i === '__proto__') return !0;
    const r = Number.isFinite(+i),
      s = u >= n.length;
    return (
      (i = !i && T.isArray(a) ? a.length : i),
      s
        ? (T.hasOwnProp(a, i) ? (a[i] = [a[i], l]) : (a[i] = l), !r)
        : ((!a[i] || !T.isObject(a[i])) && (a[i] = []),
          e(n, l, a[i], u) && T.isArray(a[i]) && (a[i] = F1(a[i])),
          !r)
    );
  }
  if (T.isFormData(t) && T.isFunction(t.entries)) {
    const n = {};
    return (
      T.forEachEntry(t, (l, a) => {
        e(k1(l), a, n, 0);
      }),
      n
    );
  }
  return null;
}
function $1(t, e, n) {
  if (T.isString(t))
    try {
      return (e || JSON.parse)(t), T.trim(t);
    } catch (l) {
      if (l.name !== 'SyntaxError') throw l;
    }
  return (n || JSON.stringify)(t);
}
const Zu = {
  transitional: Fp,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (e, n) {
      const l = n.getContentType() || '',
        a = l.indexOf('application/json') > -1,
        u = T.isObject(e);
      if ((u && T.isHTMLForm(e) && (e = new FormData(e)), T.isFormData(e)))
        return a ? JSON.stringify($p(e)) : e;
      if (
        T.isArrayBuffer(e) ||
        T.isBuffer(e) ||
        T.isStream(e) ||
        T.isFile(e) ||
        T.isBlob(e) ||
        T.isReadableStream(e)
      )
        return e;
      if (T.isArrayBufferView(e)) return e.buffer;
      if (T.isURLSearchParams(e))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          e.toString()
        );
      let r;
      if (u) {
        if (l.indexOf('application/x-www-form-urlencoded') > -1)
          return J1(e, this.formSerializer).toString();
        if ((r = T.isFileList(e)) || l.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return jr(
            r ? { 'files[]': e } : e,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return u || a ? (n.setContentType('application/json', !1), $1(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || Zu.transitional,
        l = n && n.forcedJSONParsing,
        a = this.responseType === 'json';
      if (T.isResponse(e) || T.isReadableStream(e)) return e;
      if (e && T.isString(e) && ((l && !this.responseType) || a)) {
        const i = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(e);
        } catch (r) {
          if (i)
            throw r.name === 'SyntaxError'
              ? H.from(r, H.ERR_BAD_RESPONSE, this, null, this.response)
              : r;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ut.classes.FormData, Blob: Ut.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
T.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (t) => {
  Zu.headers[t] = {};
});
const W1 = T.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  P1 = (t) => {
    const e = {};
    let n, l, a;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (i) {
            (a = i.indexOf(':')),
              (n = i.substring(0, a).trim().toLowerCase()),
              (l = i.substring(a + 1).trim()),
              !(!n || (e[n] && W1[n])) &&
                (n === 'set-cookie'
                  ? e[n]
                    ? e[n].push(l)
                    : (e[n] = [l])
                  : (e[n] = e[n] ? e[n] + ', ' + l : l));
          }),
      e
    );
  },
  Jh = Symbol('internals');
function Ha(t) {
  return t && String(t).trim().toLowerCase();
}
function Ci(t) {
  return t === !1 || t == null ? t : T.isArray(t) ? t.map(Ci) : String(t);
}
function I1(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; (l = n.exec(t)); ) e[l[1]] = l[2];
  return e;
}
const tE = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Rs(t, e, n, l, a) {
  if (T.isFunction(l)) return l.call(this, e, n);
  if ((a && (e = n), !!T.isString(e))) {
    if (T.isString(l)) return e.indexOf(l) !== -1;
    if (T.isRegExp(l)) return l.test(e);
  }
}
function eE(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, l) => n.toUpperCase() + l);
}
function nE(t, e) {
  const n = T.toCamelCase(' ' + e);
  ['get', 'set', 'has'].forEach((l) => {
    Object.defineProperty(t, l + n, {
      value: function (a, u, i) {
        return this[l].call(this, e, a, u, i);
      },
      configurable: !0,
    });
  });
}
let Xt = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, l) {
    const a = this;
    function u(r, s, c) {
      const f = Ha(s);
      if (!f) throw new Error('header name must be a non-empty string');
      const o = T.findKey(a, f);
      (!o || a[o] === void 0 || c === !0 || (c === void 0 && a[o] !== !1)) &&
        (a[o || s] = Ci(r));
    }
    const i = (r, s) => T.forEach(r, (c, f) => u(c, f, s));
    if (T.isPlainObject(e) || e instanceof this.constructor) i(e, n);
    else if (T.isString(e) && (e = e.trim()) && !tE(e)) i(P1(e), n);
    else if (T.isHeaders(e)) for (const [r, s] of e.entries()) u(s, r, l);
    else e != null && u(n, e, l);
    return this;
  }
  get(e, n) {
    if (((e = Ha(e)), e)) {
      const l = T.findKey(this, e);
      if (l) {
        const a = this[l];
        if (!n) return a;
        if (n === !0) return I1(a);
        if (T.isFunction(n)) return n.call(this, a, l);
        if (T.isRegExp(n)) return n.exec(a);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(e, n) {
    if (((e = Ha(e)), e)) {
      const l = T.findKey(this, e);
      return !!(l && this[l] !== void 0 && (!n || Rs(this, this[l], l, n)));
    }
    return !1;
  }
  delete(e, n) {
    const l = this;
    let a = !1;
    function u(i) {
      if (((i = Ha(i)), i)) {
        const r = T.findKey(l, i);
        r && (!n || Rs(l, l[r], r, n)) && (delete l[r], (a = !0));
      }
    }
    return T.isArray(e) ? e.forEach(u) : u(e), a;
  }
  clear(e) {
    const n = Object.keys(this);
    let l = n.length,
      a = !1;
    for (; l--; ) {
      const u = n[l];
      (!e || Rs(this, this[u], u, e, !0)) && (delete this[u], (a = !0));
    }
    return a;
  }
  normalize(e) {
    const n = this,
      l = {};
    return (
      T.forEach(this, (a, u) => {
        const i = T.findKey(l, u);
        if (i) {
          (n[i] = Ci(a)), delete n[u];
          return;
        }
        const r = e ? eE(u) : String(u).trim();
        r !== u && delete n[u], (n[r] = Ci(a)), (l[r] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      T.forEach(this, (l, a) => {
        l != null && l !== !1 && (n[a] = e && T.isArray(l) ? l.join(', ') : l);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const l = new this(e);
    return n.forEach((a) => l.set(a)), l;
  }
  static accessor(e) {
    const l = (this[Jh] = this[Jh] = { accessors: {} }).accessors,
      a = this.prototype;
    function u(i) {
      const r = Ha(i);
      l[r] || (nE(a, i), (l[r] = !0));
    }
    return T.isArray(e) ? e.forEach(u) : u(e), this;
  }
};
Xt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
T.reduceDescriptors(Xt.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(l) {
      this[n] = l;
    },
  };
});
T.freezeMethods(Xt);
function As(t, e) {
  const n = this || Zu,
    l = e || n,
    a = Xt.from(l.headers);
  let u = l.data;
  return (
    T.forEach(t, function (r) {
      u = r.call(n, u, a.normalize(), e ? e.status : void 0);
    }),
    a.normalize(),
    u
  );
}
function Wp(t) {
  return !!(t && t.__CANCEL__);
}
function xa(t, e, n) {
  H.call(this, t ?? 'canceled', H.ERR_CANCELED, e, n),
    (this.name = 'CanceledError');
}
T.inherits(xa, H, { __CANCEL__: !0 });
function Pp(t, e, n) {
  const l = n.config.validateStatus;
  !n.status || !l || l(n.status)
    ? t(n)
    : e(
        new H(
          'Request failed with status code ' + n.status,
          [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function lE(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || '';
}
function aE(t, e) {
  t = t || 10;
  const n = new Array(t),
    l = new Array(t);
  let a = 0,
    u = 0,
    i;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (s) {
      const c = Date.now(),
        f = l[u];
      i || (i = c), (n[a] = s), (l[a] = c);
      let o = u,
        h = 0;
      for (; o !== a; ) (h += n[o++]), (o = o % t);
      if (((a = (a + 1) % t), a === u && (u = (u + 1) % t), c - i < e)) return;
      const y = f && c - f;
      return y ? Math.round((h * 1e3) / y) : void 0;
    }
  );
}
function uE(t, e) {
  let n = 0,
    l = 1e3 / e,
    a,
    u;
  const i = (c, f = Date.now()) => {
    (n = f), (a = null), u && (clearTimeout(u), (u = null)), t.apply(null, c);
  };
  return [
    (...c) => {
      const f = Date.now(),
        o = f - n;
      o >= l
        ? i(c, f)
        : ((a = c),
          u ||
            (u = setTimeout(() => {
              (u = null), i(a);
            }, l - o)));
    },
    () => a && i(a),
  ];
}
const cr = (t, e, n = 3) => {
    let l = 0;
    const a = aE(50, 250);
    return uE((u) => {
      const i = u.loaded,
        r = u.lengthComputable ? u.total : void 0,
        s = i - l,
        c = a(s),
        f = i <= r;
      l = i;
      const o = {
        loaded: i,
        total: r,
        progress: r ? i / r : void 0,
        bytes: s,
        rate: c || void 0,
        estimated: c && r && f ? (r - i) / c : void 0,
        event: u,
        lengthComputable: r != null,
        [e ? 'download' : 'upload']: !0,
      };
      t(o);
    }, n);
  },
  kh = (t, e) => {
    const n = t != null;
    return [(l) => e[0]({ lengthComputable: n, total: t, loaded: l }), e[1]];
  },
  Fh =
    (t) =>
    (...e) =>
      T.asap(() => t(...e)),
  iE = Ut.hasStandardBrowserEnv
    ? ((t, e) => (n) => (
        (n = new URL(n, Ut.origin)),
        t.protocol === n.protocol &&
          t.host === n.host &&
          (e || t.port === n.port)
      ))(
        new URL(Ut.origin),
        Ut.navigator && /(msie|trident)/i.test(Ut.navigator.userAgent)
      )
    : () => !0,
  rE = Ut.hasStandardBrowserEnv
    ? {
        write(t, e, n, l, a, u) {
          const i = [t + '=' + encodeURIComponent(e)];
          T.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            T.isString(l) && i.push('path=' + l),
            T.isString(a) && i.push('domain=' + a),
            u === !0 && i.push('secure'),
            (document.cookie = i.join('; '));
        },
        read(t) {
          const e = document.cookie.match(
            new RegExp('(^|;\\s*)(' + t + ')=([^;]*)')
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove(t) {
          this.write(t, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function sE(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function cE(t, e) {
  return e ? t.replace(/\/?\/$/, '') + '/' + e.replace(/^\/+/, '') : t;
}
function Ip(t, e, n) {
  let l = !sE(e);
  return t && (l || n == !1) ? cE(t, e) : e;
}
const $h = (t) => (t instanceof Xt ? { ...t } : t);
function fl(t, e) {
  e = e || {};
  const n = {};
  function l(c, f, o, h) {
    return T.isPlainObject(c) && T.isPlainObject(f)
      ? T.merge.call({ caseless: h }, c, f)
      : T.isPlainObject(f)
      ? T.merge({}, f)
      : T.isArray(f)
      ? f.slice()
      : f;
  }
  function a(c, f, o, h) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c)) return l(void 0, c, o, h);
    } else return l(c, f, o, h);
  }
  function u(c, f) {
    if (!T.isUndefined(f)) return l(void 0, f);
  }
  function i(c, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c)) return l(void 0, c);
    } else return l(void 0, f);
  }
  function r(c, f, o) {
    if (o in e) return l(c, f);
    if (o in t) return l(void 0, c);
  }
  const s = {
    url: u,
    method: u,
    data: u,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: r,
    headers: (c, f, o) => a($h(c), $h(f), o, !0),
  };
  return (
    T.forEach(Object.keys(Object.assign({}, t, e)), function (f) {
      const o = s[f] || a,
        h = o(t[f], e[f], f);
      (T.isUndefined(h) && o !== r) || (n[f] = h);
    }),
    n
  );
}
const tv = (t) => {
    const e = fl({}, t);
    let {
      data: n,
      withXSRFToken: l,
      xsrfHeaderName: a,
      xsrfCookieName: u,
      headers: i,
      auth: r,
    } = e;
    (e.headers = i = Xt.from(i)),
      (e.url = kp(
        Ip(e.baseURL, e.url, e.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer
      )),
      r &&
        i.set(
          'Authorization',
          'Basic ' +
            btoa(
              (r.username || '') +
                ':' +
                (r.password ? unescape(encodeURIComponent(r.password)) : '')
            )
        );
    let s;
    if (T.isFormData(n)) {
      if (Ut.hasStandardBrowserEnv || Ut.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((s = i.getContentType()) !== !1) {
        const [c, ...f] = s
          ? s
              .split(';')
              .map((o) => o.trim())
              .filter(Boolean)
          : [];
        i.setContentType([c || 'multipart/form-data', ...f].join('; '));
      }
    }
    if (
      Ut.hasStandardBrowserEnv &&
      (l && T.isFunction(l) && (l = l(e)), l || (l !== !1 && iE(e.url)))
    ) {
      const c = a && u && rE.read(u);
      c && i.set(a, c);
    }
    return e;
  },
  oE = typeof XMLHttpRequest < 'u',
  fE =
    oE &&
    function (t) {
      return new Promise(function (n, l) {
        const a = tv(t);
        let u = a.data;
        const i = Xt.from(a.headers).normalize();
        let { responseType: r, onUploadProgress: s, onDownloadProgress: c } = a,
          f,
          o,
          h,
          y,
          b;
        function S() {
          y && y(),
            b && b(),
            a.cancelToken && a.cancelToken.unsubscribe(f),
            a.signal && a.signal.removeEventListener('abort', f);
        }
        let g = new XMLHttpRequest();
        g.open(a.method.toUpperCase(), a.url, !0), (g.timeout = a.timeout);
        function d() {
          if (!g) return;
          const p = Xt.from(
              'getAllResponseHeaders' in g && g.getAllResponseHeaders()
            ),
            R = {
              data:
                !r || r === 'text' || r === 'json'
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: p,
              config: t,
              request: g,
            };
          Pp(
            function (x) {
              n(x), S();
            },
            function (x) {
              l(x), S();
            },
            R
          ),
            (g = null);
        }
        'onloadend' in g
          ? (g.onloadend = d)
          : (g.onreadystatechange = function () {
              !g ||
                g.readyState !== 4 ||
                (g.status === 0 &&
                  !(g.responseURL && g.responseURL.indexOf('file:') === 0)) ||
                setTimeout(d);
            }),
          (g.onabort = function () {
            g &&
              (l(new H('Request aborted', H.ECONNABORTED, t, g)), (g = null));
          }),
          (g.onerror = function () {
            l(new H('Network Error', H.ERR_NETWORK, t, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let E = a.timeout
              ? 'timeout of ' + a.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const R = a.transitional || Fp;
            a.timeoutErrorMessage && (E = a.timeoutErrorMessage),
              l(
                new H(
                  E,
                  R.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  t,
                  g
                )
              ),
              (g = null);
          }),
          u === void 0 && i.setContentType(null),
          'setRequestHeader' in g &&
            T.forEach(i.toJSON(), function (E, R) {
              g.setRequestHeader(R, E);
            }),
          T.isUndefined(a.withCredentials) ||
            (g.withCredentials = !!a.withCredentials),
          r && r !== 'json' && (g.responseType = a.responseType),
          c && (([h, b] = cr(c, !0)), g.addEventListener('progress', h)),
          s &&
            g.upload &&
            (([o, y] = cr(s)),
            g.upload.addEventListener('progress', o),
            g.upload.addEventListener('loadend', y)),
          (a.cancelToken || a.signal) &&
            ((f = (p) => {
              g &&
                (l(!p || p.type ? new xa(null, t, g) : p),
                g.abort(),
                (g = null));
            }),
            a.cancelToken && a.cancelToken.subscribe(f),
            a.signal &&
              (a.signal.aborted ? f() : a.signal.addEventListener('abort', f)));
        const m = lE(a.url);
        if (m && Ut.protocols.indexOf(m) === -1) {
          l(new H('Unsupported protocol ' + m + ':', H.ERR_BAD_REQUEST, t));
          return;
        }
        g.send(u || null);
      });
    },
  hE = (t, e) => {
    const { length: n } = (t = t ? t.filter(Boolean) : []);
    if (e || n) {
      let l = new AbortController(),
        a;
      const u = function (c) {
        if (!a) {
          (a = !0), r();
          const f = c instanceof Error ? c : this.reason;
          l.abort(
            f instanceof H ? f : new xa(f instanceof Error ? f.message : f)
          );
        }
      };
      let i =
        e &&
        setTimeout(() => {
          (i = null), u(new H(`timeout ${e} of ms exceeded`, H.ETIMEDOUT));
        }, e);
      const r = () => {
        t &&
          (i && clearTimeout(i),
          (i = null),
          t.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(u)
              : c.removeEventListener('abort', u);
          }),
          (t = null));
      };
      t.forEach((c) => c.addEventListener('abort', u));
      const { signal: s } = l;
      return (s.unsubscribe = () => T.asap(r)), s;
    }
  },
  dE = function* (t, e) {
    let n = t.byteLength;
    if (n < e) {
      yield t;
      return;
    }
    let l = 0,
      a;
    for (; l < n; ) (a = l + e), yield t.slice(l, a), (l = a);
  },
  mE = async function* (t, e) {
    for await (const n of yE(t)) yield* dE(n, e);
  },
  yE = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const e = t.getReader();
    try {
      for (;;) {
        const { done: n, value: l } = await e.read();
        if (n) break;
        yield l;
      }
    } finally {
      await e.cancel();
    }
  },
  Wh = (t, e, n, l) => {
    const a = mE(t, e);
    let u = 0,
      i,
      r = (s) => {
        i || ((i = !0), l && l(s));
      };
    return new ReadableStream(
      {
        async pull(s) {
          try {
            const { done: c, value: f } = await a.next();
            if (c) {
              r(), s.close();
              return;
            }
            let o = f.byteLength;
            if (n) {
              let h = (u += o);
              n(h);
            }
            s.enqueue(new Uint8Array(f));
          } catch (c) {
            throw (r(c), c);
          }
        },
        cancel(s) {
          return r(s), a.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Hr =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  ev = Hr && typeof ReadableStream == 'function',
  pE =
    Hr &&
    (typeof TextEncoder == 'function'
      ? (
          (t) => (e) =>
            t.encode(e)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  nv = (t, ...e) => {
    try {
      return !!t(...e);
    } catch {
      return !1;
    }
  },
  vE =
    ev &&
    nv(() => {
      let t = !1;
      const e = new Request(Ut.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (t = !0), 'half';
        },
      }).headers.has('Content-Type');
      return t && !e;
    }),
  Ph = 64 * 1024,
  Mc = ev && nv(() => T.isReadableStream(new Response('').body)),
  or = { stream: Mc && ((t) => t.body) };
Hr &&
  ((t) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
      !or[e] &&
        (or[e] = T.isFunction(t[e])
          ? (n) => n[e]()
          : (n, l) => {
              throw new H(
                `Response type '${e}' is not supported`,
                H.ERR_NOT_SUPPORT,
                l
              );
            });
    });
  })(new Response());
const gE = async (t) => {
    if (t == null) return 0;
    if (T.isBlob(t)) return t.size;
    if (T.isSpecCompliantForm(t))
      return (
        await new Request(Ut.origin, { method: 'POST', body: t }).arrayBuffer()
      ).byteLength;
    if (T.isArrayBufferView(t) || T.isArrayBuffer(t)) return t.byteLength;
    if ((T.isURLSearchParams(t) && (t = t + ''), T.isString(t)))
      return (await pE(t)).byteLength;
  },
  bE = async (t, e) => {
    const n = T.toFiniteNumber(t.getContentLength());
    return n ?? gE(e);
  },
  SE =
    Hr &&
    (async (t) => {
      let {
        url: e,
        method: n,
        data: l,
        signal: a,
        cancelToken: u,
        timeout: i,
        onDownloadProgress: r,
        onUploadProgress: s,
        responseType: c,
        headers: f,
        withCredentials: o = 'same-origin',
        fetchOptions: h,
      } = tv(t);
      c = c ? (c + '').toLowerCase() : 'text';
      let y = hE([a, u && u.toAbortSignal()], i),
        b;
      const S =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let g;
      try {
        if (
          s &&
          vE &&
          n !== 'get' &&
          n !== 'head' &&
          (g = await bE(f, l)) !== 0
        ) {
          let R = new Request(e, { method: 'POST', body: l, duplex: 'half' }),
            D;
          if (
            (T.isFormData(l) &&
              (D = R.headers.get('content-type')) &&
              f.setContentType(D),
            R.body)
          ) {
            const [x, w] = kh(g, cr(Fh(s)));
            l = Wh(R.body, Ph, x, w);
          }
        }
        T.isString(o) || (o = o ? 'include' : 'omit');
        const d = 'credentials' in Request.prototype;
        b = new Request(e, {
          ...h,
          signal: y,
          method: n.toUpperCase(),
          headers: f.normalize().toJSON(),
          body: l,
          duplex: 'half',
          credentials: d ? o : void 0,
        });
        let m = await fetch(b);
        const p = Mc && (c === 'stream' || c === 'response');
        if (Mc && (r || (p && S))) {
          const R = {};
          ['status', 'statusText', 'headers'].forEach((_) => {
            R[_] = m[_];
          });
          const D = T.toFiniteNumber(m.headers.get('content-length')),
            [x, w] = (r && kh(D, cr(Fh(r), !0))) || [];
          m = new Response(
            Wh(m.body, Ph, x, () => {
              w && w(), S && S();
            }),
            R
          );
        }
        c = c || 'text';
        let E = await or[T.findKey(or, c) || 'text'](m, t);
        return (
          !p && S && S(),
          await new Promise((R, D) => {
            Pp(R, D, {
              data: E,
              headers: Xt.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: t,
              request: b,
            });
          })
        );
      } catch (d) {
        throw (
          (S && S(),
          d && d.name === 'TypeError' && /fetch/i.test(d.message)
            ? Object.assign(new H('Network Error', H.ERR_NETWORK, t, b), {
                cause: d.cause || d,
              })
            : H.from(d, d && d.code, t, b))
        );
      }
    }),
  Cc = { http: j1, xhr: fE, fetch: SE };
T.forEach(Cc, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, 'name', { value: e });
    } catch {}
    Object.defineProperty(t, 'adapterName', { value: e });
  }
});
const Ih = (t) => `- ${t}`,
  EE = (t) => T.isFunction(t) || t === null || t === !1,
  lv = {
    getAdapter: (t) => {
      t = T.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, l;
      const a = {};
      for (let u = 0; u < e; u++) {
        n = t[u];
        let i;
        if (
          ((l = n),
          !EE(n) && ((l = Cc[(i = String(n)).toLowerCase()]), l === void 0))
        )
          throw new H(`Unknown adapter '${i}'`);
        if (l) break;
        a[i || '#' + u] = l;
      }
      if (!l) {
        const u = Object.entries(a).map(
          ([r, s]) =>
            `adapter ${r} ` +
            (s === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let i = e
          ? u.length > 1
            ? `since :
` +
              u.map(Ih).join(`
`)
            : ' ' + Ih(u[0])
          : 'as no adapter specified';
        throw new H(
          'There is no suitable adapter to dispatch the request ' + i,
          'ERR_NOT_SUPPORT'
        );
      }
      return l;
    },
    adapters: Cc,
  };
function xs(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new xa(null, t);
}
function td(t) {
  return (
    xs(t),
    (t.headers = Xt.from(t.headers)),
    (t.data = As.call(t, t.transformRequest)),
    ['post', 'put', 'patch'].indexOf(t.method) !== -1 &&
      t.headers.setContentType('application/x-www-form-urlencoded', !1),
    lv
      .getAdapter(t.adapter || Zu.adapter)(t)
      .then(
        function (l) {
          return (
            xs(t),
            (l.data = As.call(t, t.transformResponse, l)),
            (l.headers = Xt.from(l.headers)),
            l
          );
        },
        function (l) {
          return (
            Wp(l) ||
              (xs(t),
              l &&
                l.response &&
                ((l.response.data = As.call(
                  t,
                  t.transformResponse,
                  l.response
                )),
                (l.response.headers = Xt.from(l.response.headers)))),
            Promise.reject(l)
          );
        }
      )
  );
}
const av = '1.8.4',
  Br = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (t, e) => {
    Br[t] = function (l) {
      return typeof l === t || 'a' + (e < 1 ? 'n ' : ' ') + t;
    };
  }
);
const ed = {};
Br.transitional = function (e, n, l) {
  function a(u, i) {
    return (
      '[Axios v' +
      av +
      "] Transitional option '" +
      u +
      "'" +
      i +
      (l ? '. ' + l : '')
    );
  }
  return (u, i, r) => {
    if (e === !1)
      throw new H(
        a(i, ' has been removed' + (n ? ' in ' + n : '')),
        H.ERR_DEPRECATED
      );
    return (
      n &&
        !ed[i] &&
        ((ed[i] = !0),
        console.warn(
          a(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      e ? e(u, i, r) : !0
    );
  };
};
Br.spelling = function (e) {
  return (n, l) => (console.warn(`${l} is likely a misspelling of ${e}`), !0);
};
function TE(t, e, n) {
  if (typeof t != 'object')
    throw new H('options must be an object', H.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(t);
  let a = l.length;
  for (; a-- > 0; ) {
    const u = l[a],
      i = e[u];
    if (i) {
      const r = t[u],
        s = r === void 0 || i(r, u, t);
      if (s !== !0)
        throw new H('option ' + u + ' must be ' + s, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H('Unknown option ' + u, H.ERR_BAD_OPTION);
  }
}
const Ui = { assertOptions: TE, validators: Br },
  Re = Ui.validators;
let il = class {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Kh(), response: new Kh() });
  }
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (l) {
      if (l instanceof Error) {
        let a = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(a)
          : (a = new Error());
        const u = a.stack ? a.stack.replace(/^.+\n/, '') : '';
        try {
          l.stack
            ? u &&
              !String(l.stack).endsWith(u.replace(/^.+\n.+\n/, '')) &&
              (l.stack +=
                `
` + u)
            : (l.stack = u);
        } catch {}
      }
      throw l;
    }
  }
  _request(e, n) {
    typeof e == 'string' ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = fl(this.defaults, n));
    const { transitional: l, paramsSerializer: a, headers: u } = n;
    l !== void 0 &&
      Ui.assertOptions(
        l,
        {
          silentJSONParsing: Re.transitional(Re.boolean),
          forcedJSONParsing: Re.transitional(Re.boolean),
          clarifyTimeoutError: Re.transitional(Re.boolean),
        },
        !1
      ),
      a != null &&
        (T.isFunction(a)
          ? (n.paramsSerializer = { serialize: a })
          : Ui.assertOptions(
              a,
              { encode: Re.function, serialize: Re.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Ui.assertOptions(
        n,
        {
          baseUrl: Re.spelling('baseURL'),
          withXsrfToken: Re.spelling('withXSRFToken'),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = u && T.merge(u.common, u[n.method]);
    u &&
      T.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (b) => {
          delete u[b];
        }
      ),
      (n.headers = Xt.concat(i, u));
    const r = [];
    let s = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == 'function' && S.runWhen(n) === !1) ||
        ((s = s && S.synchronous), r.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (S) {
      c.push(S.fulfilled, S.rejected);
    });
    let f,
      o = 0,
      h;
    if (!s) {
      const b = [td.bind(this), void 0];
      for (
        b.unshift.apply(b, r),
          b.push.apply(b, c),
          h = b.length,
          f = Promise.resolve(n);
        o < h;

      )
        f = f.then(b[o++], b[o++]);
      return f;
    }
    h = r.length;
    let y = n;
    for (o = 0; o < h; ) {
      const b = r[o++],
        S = r[o++];
      try {
        y = b(y);
      } catch (g) {
        S.call(this, g);
        break;
      }
    }
    try {
      f = td.call(this, y);
    } catch (b) {
      return Promise.reject(b);
    }
    for (o = 0, h = c.length; o < h; ) f = f.then(c[o++], c[o++]);
    return f;
  }
  getUri(e) {
    e = fl(this.defaults, e);
    const n = Ip(e.baseURL, e.url, e.allowAbsoluteUrls);
    return kp(n, e.params, e.paramsSerializer);
  }
};
T.forEach(['delete', 'get', 'head', 'options'], function (e) {
  il.prototype[e] = function (n, l) {
    return this.request(
      fl(l || {}, { method: e, url: n, data: (l || {}).data })
    );
  };
});
T.forEach(['post', 'put', 'patch'], function (e) {
  function n(l) {
    return function (u, i, r) {
      return this.request(
        fl(r || {}, {
          method: e,
          headers: l ? { 'Content-Type': 'multipart/form-data' } : {},
          url: u,
          data: i,
        })
      );
    };
  }
  (il.prototype[e] = n()), (il.prototype[e + 'Form'] = n(!0));
});
let OE = class uv {
  constructor(e) {
    if (typeof e != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (u) {
      n = u;
    });
    const l = this;
    this.promise.then((a) => {
      if (!l._listeners) return;
      let u = l._listeners.length;
      for (; u-- > 0; ) l._listeners[u](a);
      l._listeners = null;
    }),
      (this.promise.then = (a) => {
        let u;
        const i = new Promise((r) => {
          l.subscribe(r), (u = r);
        }).then(a);
        return (
          (i.cancel = function () {
            l.unsubscribe(u);
          }),
          i
        );
      }),
      e(function (u, i, r) {
        l.reason || ((l.reason = new xa(u, i, r)), n(l.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(),
      n = (l) => {
        e.abort(l);
      };
    return (
      this.subscribe(n),
      (e.signal.unsubscribe = () => this.unsubscribe(n)),
      e.signal
    );
  }
  static source() {
    let e;
    return {
      token: new uv(function (a) {
        e = a;
      }),
      cancel: e,
    };
  }
};
function RE(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function AE(t) {
  return T.isObject(t) && t.isAxiosError === !0;
}
const Uc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Uc).forEach(([t, e]) => {
  Uc[e] = t;
});
function iv(t) {
  const e = new il(t),
    n = Bp(il.prototype.request, e);
  return (
    T.extend(n, il.prototype, e, { allOwnKeys: !0 }),
    T.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (a) {
      return iv(fl(t, a));
    }),
    n
  );
}
const ft = iv(Zu);
ft.Axios = il;
ft.CanceledError = xa;
ft.CancelToken = OE;
ft.isCancel = Wp;
ft.VERSION = av;
ft.toFormData = jr;
ft.AxiosError = H;
ft.Cancel = ft.CanceledError;
ft.all = function (e) {
  return Promise.all(e);
};
ft.spread = RE;
ft.isAxiosError = AE;
ft.mergeConfig = fl;
ft.AxiosHeaders = Xt;
ft.formToJSON = (t) => $p(T.isHTMLForm(t) ? new FormData(t) : t);
ft.getAdapter = lv.getAdapter;
ft.HttpStatusCode = Uc;
ft.default = ft;
const {
    Axios: U2,
    AxiosError: _2,
    CanceledError: N2,
    isCancel: z2,
    CancelToken: j2,
    VERSION: H2,
    all: B2,
    Cancel: q2,
    isAxiosError: L2,
    spread: Q2,
    toFormData: Y2,
    AxiosHeaders: G2,
    HttpStatusCode: X2,
    formToJSON: V2,
    getAdapter: Z2,
    mergeConfig: K2,
  } = ft,
  xE = 'Left',
  DE = 'Right',
  wE = 'Up',
  ME = 'Down',
  jl = {
    delta: 10,
    preventScrollOnSwipe: !1,
    rotationAngle: 0,
    trackMouse: !1,
    trackTouch: !0,
    swipeDuration: 1 / 0,
    touchEventOptions: { passive: !0 },
  },
  _c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
  nd = 'mousemove',
  ld = 'mouseup',
  CE = 'touchend',
  UE = 'touchmove',
  _E = 'touchstart';
function NE(t, e, n, l) {
  return t > e ? (n > 0 ? DE : xE) : l > 0 ? ME : wE;
}
function ad(t, e) {
  if (e === 0) return t;
  const n = (Math.PI / 180) * e,
    l = t[0] * Math.cos(n) + t[1] * Math.sin(n),
    a = t[1] * Math.cos(n) - t[0] * Math.sin(n);
  return [l, a];
}
function zE(t, e) {
  const n = (f) => {
      const o = 'touches' in f;
      (o && f.touches.length > 1) ||
        t((h, y) => {
          y.trackMouse &&
            !o &&
            (document.addEventListener(nd, l),
            document.addEventListener(ld, i));
          const { clientX: b, clientY: S } = o ? f.touches[0] : f,
            g = ad([b, S], y.rotationAngle);
          return (
            y.onTouchStartOrOnMouseDown &&
              y.onTouchStartOrOnMouseDown({ event: f }),
            Object.assign(Object.assign(Object.assign({}, h), _c), {
              initial: g.slice(),
              xy: g,
              start: f.timeStamp || 0,
            })
          );
        });
    },
    l = (f) => {
      t((o, h) => {
        const y = 'touches' in f;
        if (y && f.touches.length > 1) return o;
        if (f.timeStamp - o.start > h.swipeDuration)
          return o.swiping
            ? Object.assign(Object.assign({}, o), { swiping: !1 })
            : o;
        const { clientX: b, clientY: S } = y ? f.touches[0] : f,
          [g, d] = ad([b, S], h.rotationAngle),
          m = g - o.xy[0],
          p = d - o.xy[1],
          E = Math.abs(m),
          R = Math.abs(p),
          D = (f.timeStamp || 0) - o.start,
          x = Math.sqrt(E * E + R * R) / (D || 1),
          w = [m / (D || 1), p / (D || 1)],
          _ = NE(E, R, m, p),
          N =
            typeof h.delta == 'number'
              ? h.delta
              : h.delta[_.toLowerCase()] || jl.delta;
        if (E < N && R < N && !o.swiping) return o;
        const I = {
          absX: E,
          absY: R,
          deltaX: m,
          deltaY: p,
          dir: _,
          event: f,
          first: o.first,
          initial: o.initial,
          velocity: x,
          vxvy: w,
        };
        I.first && h.onSwipeStart && h.onSwipeStart(I),
          h.onSwiping && h.onSwiping(I);
        let Mt = !1;
        return (
          (h.onSwiping || h.onSwiped || h[`onSwiped${_}`]) && (Mt = !0),
          Mt &&
            h.preventScrollOnSwipe &&
            h.trackTouch &&
            f.cancelable &&
            f.preventDefault(),
          Object.assign(Object.assign({}, o), {
            first: !1,
            eventData: I,
            swiping: !0,
          })
        );
      });
    },
    a = (f) => {
      t((o, h) => {
        let y;
        if (o.swiping && o.eventData) {
          if (f.timeStamp - o.start < h.swipeDuration) {
            (y = Object.assign(Object.assign({}, o.eventData), { event: f })),
              h.onSwiped && h.onSwiped(y);
            const b = h[`onSwiped${y.dir}`];
            b && b(y);
          }
        } else h.onTap && h.onTap({ event: f });
        return (
          h.onTouchEndOrOnMouseUp && h.onTouchEndOrOnMouseUp({ event: f }),
          Object.assign(Object.assign(Object.assign({}, o), _c), {
            eventData: y,
          })
        );
      });
    },
    u = () => {
      document.removeEventListener(nd, l), document.removeEventListener(ld, i);
    },
    i = (f) => {
      u(), a(f);
    },
    r = (f, o) => {
      let h = () => {};
      if (f && f.addEventListener) {
        const y = Object.assign(
            Object.assign({}, jl.touchEventOptions),
            o.touchEventOptions
          ),
          b = [
            [_E, n, y],
            [
              UE,
              l,
              Object.assign(
                Object.assign({}, y),
                o.preventScrollOnSwipe ? { passive: !1 } : {}
              ),
            ],
            [CE, a, y],
          ];
        b.forEach(([S, g, d]) => f.addEventListener(S, g, d)),
          (h = () => b.forEach(([S, g]) => f.removeEventListener(S, g)));
      }
      return h;
    },
    c = {
      ref: (f) => {
        f !== null &&
          t((o, h) => {
            if (o.el === f) return o;
            const y = {};
            return (
              o.el &&
                o.el !== f &&
                o.cleanUpTouch &&
                (o.cleanUpTouch(), (y.cleanUpTouch = void 0)),
              h.trackTouch && f && (y.cleanUpTouch = r(f, h)),
              Object.assign(Object.assign(Object.assign({}, o), { el: f }), y)
            );
          });
      },
    };
  return e.trackMouse && (c.onMouseDown = n), [c, r];
}
function jE(t, e, n, l) {
  return !e.trackTouch || !t.el
    ? (t.cleanUpTouch && t.cleanUpTouch(),
      Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))
    : t.cleanUpTouch
    ? e.preventScrollOnSwipe !== n.preventScrollOnSwipe ||
      e.touchEventOptions.passive !== n.touchEventOptions.passive
      ? (t.cleanUpTouch(),
        Object.assign(Object.assign({}, t), { cleanUpTouch: l(t.el, e) }))
      : t
    : Object.assign(Object.assign({}, t), { cleanUpTouch: l(t.el, e) });
}
function HE(t) {
  const { trackMouse: e } = t,
    n = O.useRef(Object.assign({}, _c)),
    l = O.useRef(Object.assign({}, jl)),
    a = O.useRef(Object.assign({}, l.current));
  (a.current = Object.assign({}, l.current)),
    (l.current = Object.assign(Object.assign({}, jl), t));
  let u;
  for (u in jl) l.current[u] === void 0 && (l.current[u] = jl[u]);
  const [i, r] = O.useMemo(
    () => zE((s) => (n.current = s(n.current, l.current)), { trackMouse: e }),
    [e]
  );
  return (n.current = jE(n.current, l.current, a.current, r)), i;
}
const BE = ({ meaning: t }) =>
    M.jsx('div', {
      className: 'pt-5',
      children: t.meanings.map((e) =>
        M.jsxs(
          'div',
          {
            className: 'p-2',
            children: [
              M.jsx('p', {
                className: 'italic font-bold',
                children: e.partOfSpeech,
              }),
              M.jsx('div', {
                className: 'pl-4',
                children: e.definitions.map((n, l) =>
                  M.jsx(
                    'p',
                    { children: `${l + 1}. ${n.definition}` },
                    n.definition
                  )
                ),
              }),
              e.synonyms.length
                ? M.jsxs('div', {
                    className: 'pl-4 flex justify-start flex-wrap pt-2 gap-2',
                    children: [
                      M.jsx('p', { className: '', children: 'synonyms: ' }),
                      e.synonyms.map((n, l) =>
                        M.jsx(
                          'p',
                          {
                            className:
                              'border rounded-xl border-slate-500 px-1',
                            children: n,
                          },
                          l + n
                        )
                      ),
                    ],
                  })
                : M.jsx(M.Fragment, {}),
              e.antonyms.length
                ? M.jsxs('div', {
                    className: 'pl-4 flex justify-start flex-wrap pt-2 gap-2',
                    children: [
                      M.jsx('p', { className: '', children: 'antonyms: ' }),
                      e.antonyms.map((n, l) =>
                        M.jsx(
                          'p',
                          {
                            className:
                              'border rounded-xl border-slate-500 px-1',
                            children: n,
                          },
                          l + n
                        )
                      ),
                    ],
                  })
                : M.jsx(M.Fragment, {}),
            ],
          },
          e.partOfSpeech
        )
      ),
    }),
  qE = ({
    groupIndex: t,
    wordIndex: e,
    words: n,
    getMeaning: l,
    onPrev: a,
    onNext: u,
  }) => {
    const i = () => {
        const s = n.words[t][e];
        navigator.clipboard &&
          navigator.clipboard
            .writeText(s)
            .then(() => {
              console.log('Copied to clipboard');
            })
            .catch((c) => {
              console.log('Failed to copy to clipboard', c);
            });
      },
      r = () => {
        const s = n.words[t][e];
        window.open('//google.com/search?q=define ' + s, '_blank');
      };
    return (
      (document.onkeydown = (s) => {
        switch ((console.log(s.key), s.key)) {
          case 'ArrowLeft':
            a();
            break;
          case 'ArrowRight':
            u();
            break;
          case 'Enter':
            l();
            break;
          case 'g':
            r();
            break;
          case 'c':
            i();
            break;
        }
      }),
      M.jsxs('div', {
        children: [
          M.jsxs('div', {
            className: 'flex justify-center gap-2 pt-5',
            children: [
              M.jsx('button', {
                className: 'btn',
                onClick: a,
                children: '◂ prev',
              }),
              M.jsx('button', {
                className: 'btn',
                onClick: u,
                children: 'next ▸',
              }),
            ],
          }),
          M.jsx('div', {
            className: 'flex justify-center pt-10 pb-10 gap-2',
            children: M.jsx('p', {
              className: 'text-5xl',
              children: n.words[t][e],
            }),
          }),
          M.jsxs('div', {
            className: 'flex justify-center gap-2',
            children: [
              M.jsx('button', {
                className: 'btn',
                onClick: () => i(),
                children: 'copy',
              }),
              M.jsx('button', {
                className: 'btn',
                onClick: l,
                children: 'show meaning',
              }),
              M.jsx('button', {
                className: 'btn',
                onClick: () => r(),
                children: 'Google dictionary ↗',
              }),
            ],
          }),
        ],
      })
    );
  },
  LE = ({
    words: t,
    groupIndex: e,
    wordIndex: n,
    onSelectWord: l,
    onSelectGroup: a,
  }) =>
    M.jsxs(M.Fragment, {
      children: [
        M.jsx('div', {
          className: 'flex justify-start flex-wrap gap-1 p-2',
          children: Object.keys(t.words).map((u) =>
            M.jsx(
              'span',
              {
                children: M.jsx('button', {
                  className: 'btn' + (u === e ? ' bg-black text-white' : ''),
                  onClick: () => a(u),
                  children: u.split('_').join(' '),
                }),
              },
              u
            )
          ),
        }),
        e &&
          M.jsx('p', { className: 'p-2 font-bold text-lg', children: 'Words' }),
        e &&
          M.jsx('div', {
            className: 'flex justify-start flex-wrap gap-1 p-2',
            children: t.words[e].map((u, i) =>
              M.jsx(
                'span',
                {
                  children: M.jsx('button', {
                    className:
                      'btn' +
                      (u === t.words[e][n] ? ' bg-black text-white' : ''),
                    onClick: () => l(i),
                    children: u,
                  }),
                },
                u
              )
            ),
          }),
      ],
    });
var Ku = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  hl = typeof window > 'u' || 'Deno' in globalThis;
function ae() {}
function QE(t, e) {
  return typeof t == 'function' ? t(e) : t;
}
function Nc(t) {
  return typeof t == 'number' && t >= 0 && t !== 1 / 0;
}
function rv(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Vl(t, e) {
  return typeof t == 'function' ? t(e) : t;
}
function pe(t, e) {
  return typeof t == 'function' ? t(e) : t;
}
function ud(t, e) {
  const {
    type: n = 'all',
    exact: l,
    fetchStatus: a,
    predicate: u,
    queryKey: i,
    stale: r,
  } = t;
  if (i) {
    if (l) {
      if (e.queryHash !== af(i, e.options)) return !1;
    } else if (!Eu(e.queryKey, i)) return !1;
  }
  if (n !== 'all') {
    const s = e.isActive();
    if ((n === 'active' && !s) || (n === 'inactive' && s)) return !1;
  }
  return !(
    (typeof r == 'boolean' && e.isStale() !== r) ||
    (a && a !== e.state.fetchStatus) ||
    (u && !u(e))
  );
}
function id(t, e) {
  const { exact: n, status: l, predicate: a, mutationKey: u } = t;
  if (u) {
    if (!e.options.mutationKey) return !1;
    if (n) {
      if (Su(e.options.mutationKey) !== Su(u)) return !1;
    } else if (!Eu(e.options.mutationKey, u)) return !1;
  }
  return !((l && e.state.status !== l) || (a && !a(e)));
}
function af(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Su)(t);
}
function Su(t) {
  return JSON.stringify(t, (e, n) =>
    jc(n)
      ? Object.keys(n)
          .sort()
          .reduce((l, a) => ((l[a] = n[a]), l), {})
      : n
  );
}
function Eu(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == 'object' && typeof e == 'object'
    ? Object.keys(e).every((n) => Eu(t[n], e[n]))
    : !1;
}
function sv(t, e) {
  if (t === e) return t;
  const n = rd(t) && rd(e);
  if (n || (jc(t) && jc(e))) {
    const l = n ? t : Object.keys(t),
      a = l.length,
      u = n ? e : Object.keys(e),
      i = u.length,
      r = n ? [] : {};
    let s = 0;
    for (let c = 0; c < i; c++) {
      const f = n ? c : u[c];
      ((!n && l.includes(f)) || n) && t[f] === void 0 && e[f] === void 0
        ? ((r[f] = void 0), s++)
        : ((r[f] = sv(t[f], e[f])), r[f] === t[f] && t[f] !== void 0 && s++);
    }
    return a === i && s === a ? t : r;
  }
  return e;
}
function zc(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (t[n] !== e[n]) return !1;
  return !0;
}
function rd(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function jc(t) {
  if (!sd(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const n = e.prototype;
  return !(
    !sd(n) ||
    !n.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function sd(t) {
  return Object.prototype.toString.call(t) === '[object Object]';
}
function YE(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Hc(t, e, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(t, e)
    : n.structuralSharing !== !1
    ? sv(t, e)
    : e;
}
function GE(t, e, n = 0) {
  const l = [...t, e];
  return n && l.length > n ? l.slice(1) : l;
}
function XE(t, e, n = 0) {
  const l = [e, ...t];
  return n && l.length > n ? l.slice(0, -1) : l;
}
var uf = Symbol();
function cv(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === uf
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
var Zn,
  dn,
  Zl,
  pd,
  VE =
    ((pd = class extends Ku {
      constructor() {
        super();
        z(this, Zn);
        z(this, dn);
        z(this, Zl);
        U(this, Zl, (e) => {
          if (!hl && window.addEventListener) {
            const n = () => e();
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        v(this, dn) || this.setEventListener(v(this, Zl));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = v(this, dn)) == null || e.call(this), U(this, dn, void 0));
      }
      setEventListener(e) {
        var n;
        U(this, Zl, e),
          (n = v(this, dn)) == null || n.call(this),
          U(
            this,
            dn,
            e((l) => {
              typeof l == 'boolean' ? this.setFocused(l) : this.onFocus();
            })
          );
      }
      setFocused(e) {
        v(this, Zn) !== e && (U(this, Zn, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((n) => {
          n(e);
        });
      }
      isFocused() {
        var e;
        return typeof v(this, Zn) == 'boolean'
          ? v(this, Zn)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              'hidden';
      }
    }),
    (Zn = new WeakMap()),
    (dn = new WeakMap()),
    (Zl = new WeakMap()),
    pd),
  rf = new VE(),
  Kl,
  mn,
  Jl,
  vd,
  ZE =
    ((vd = class extends Ku {
      constructor() {
        super();
        z(this, Kl, !0);
        z(this, mn);
        z(this, Jl);
        U(this, Jl, (e) => {
          if (!hl && window.addEventListener) {
            const n = () => e(!0),
              l = () => e(!1);
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', l, !1),
              () => {
                window.removeEventListener('online', n),
                  window.removeEventListener('offline', l);
              }
            );
          }
        });
      }
      onSubscribe() {
        v(this, mn) || this.setEventListener(v(this, Jl));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = v(this, mn)) == null || e.call(this), U(this, mn, void 0));
      }
      setEventListener(e) {
        var n;
        U(this, Jl, e),
          (n = v(this, mn)) == null || n.call(this),
          U(this, mn, e(this.setOnline.bind(this)));
      }
      setOnline(e) {
        v(this, Kl) !== e &&
          (U(this, Kl, e),
          this.listeners.forEach((l) => {
            l(e);
          }));
      }
      isOnline() {
        return v(this, Kl);
      }
    }),
    (Kl = new WeakMap()),
    (mn = new WeakMap()),
    (Jl = new WeakMap()),
    vd),
  fr = new ZE();
function Bc() {
  let t, e;
  const n = new Promise((a, u) => {
    (t = a), (e = u);
  });
  (n.status = 'pending'), n.catch(() => {});
  function l(a) {
    Object.assign(n, a), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (a) => {
      l({ status: 'fulfilled', value: a }), t(a);
    }),
    (n.reject = (a) => {
      l({ status: 'rejected', reason: a }), e(a);
    }),
    n
  );
}
function KE(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function ov(t) {
  return (t ?? 'online') === 'online' ? fr.isOnline() : !0;
}
var fv = class extends Error {
  constructor(t) {
    super('CancelledError'),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function Ds(t) {
  return t instanceof fv;
}
function hv(t) {
  let e = !1,
    n = 0,
    l = !1,
    a;
  const u = Bc(),
    i = (S) => {
      var g;
      l || (h(new fv(S)), (g = t.abort) == null || g.call(t));
    },
    r = () => {
      e = !0;
    },
    s = () => {
      e = !1;
    },
    c = () =>
      rf.isFocused() &&
      (t.networkMode === 'always' || fr.isOnline()) &&
      t.canRun(),
    f = () => ov(t.networkMode) && t.canRun(),
    o = (S) => {
      var g;
      l ||
        ((l = !0),
        (g = t.onSuccess) == null || g.call(t, S),
        a == null || a(),
        u.resolve(S));
    },
    h = (S) => {
      var g;
      l ||
        ((l = !0),
        (g = t.onError) == null || g.call(t, S),
        a == null || a(),
        u.reject(S));
    },
    y = () =>
      new Promise((S) => {
        var g;
        (a = (d) => {
          (l || c()) && S(d);
        }),
          (g = t.onPause) == null || g.call(t);
      }).then(() => {
        var S;
        (a = void 0), l || (S = t.onContinue) == null || S.call(t);
      }),
    b = () => {
      if (l) return;
      let S;
      const g = n === 0 ? t.initialPromise : void 0;
      try {
        S = g ?? t.fn();
      } catch (d) {
        S = Promise.reject(d);
      }
      Promise.resolve(S)
        .then(o)
        .catch((d) => {
          var D;
          if (l) return;
          const m = t.retry ?? (hl ? 0 : 3),
            p = t.retryDelay ?? KE,
            E = typeof p == 'function' ? p(n, d) : p,
            R =
              m === !0 ||
              (typeof m == 'number' && n < m) ||
              (typeof m == 'function' && m(n, d));
          if (e || !R) {
            h(d);
            return;
          }
          n++,
            (D = t.onFail) == null || D.call(t, n, d),
            YE(E)
              .then(() => (c() ? void 0 : y()))
              .then(() => {
                e ? h(d) : b();
              });
        });
    };
  return {
    promise: u,
    cancel: i,
    continue: () => (a == null || a(), u),
    cancelRetry: r,
    continueRetry: s,
    canStart: f,
    start: () => (f() ? b() : y().then(b), u),
  };
}
var JE = (t) => setTimeout(t, 0);
function kE() {
  let t = [],
    e = 0,
    n = (r) => {
      r();
    },
    l = (r) => {
      r();
    },
    a = JE;
  const u = (r) => {
      e
        ? t.push(r)
        : a(() => {
            n(r);
          });
    },
    i = () => {
      const r = t;
      (t = []),
        r.length &&
          a(() => {
            l(() => {
              r.forEach((s) => {
                n(s);
              });
            });
          });
    };
  return {
    batch: (r) => {
      let s;
      e++;
      try {
        s = r();
      } finally {
        e--, e || i();
      }
      return s;
    },
    batchCalls:
      (r) =>
      (...s) => {
        u(() => {
          r(...s);
        });
      },
    schedule: u,
    setNotifyFunction: (r) => {
      n = r;
    },
    setBatchNotifyFunction: (r) => {
      l = r;
    },
    setScheduler: (r) => {
      a = r;
    },
  };
}
var xt = kE(),
  Kn,
  gd,
  dv =
    ((gd = class {
      constructor() {
        z(this, Kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Nc(this.gcTime) &&
            U(
              this,
              Kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          t ?? (hl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        v(this, Kn) && (clearTimeout(v(this, Kn)), U(this, Kn, void 0));
      }
    }),
    (Kn = new WeakMap()),
    gd),
  kl,
  Fl,
  ne,
  Jn,
  Ct,
  Tu,
  kn,
  de,
  Le,
  bd,
  FE =
    ((bd = class extends dv {
      constructor(e) {
        super();
        z(this, de);
        z(this, kl);
        z(this, Fl);
        z(this, ne);
        z(this, Jn);
        z(this, Ct);
        z(this, Tu);
        z(this, kn);
        U(this, kn, !1),
          U(this, Tu, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          U(this, Jn, e.client),
          U(this, ne, v(this, Jn).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          U(this, kl, $E(this.options)),
          (this.state = e.state ?? v(this, kl)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = v(this, Ct)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        (this.options = { ...v(this, Tu), ...e }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === 'idle' &&
          v(this, ne).remove(this);
      }
      setData(e, n) {
        const l = Hc(this.state.data, e, this.options);
        return (
          X(this, de, Le).call(this, {
            data: l,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          l
        );
      }
      setState(e, n) {
        X(this, de, Le).call(this, {
          type: 'setState',
          state: e,
          setStateOptions: n,
        });
      }
      cancel(e) {
        var l, a;
        const n = (l = v(this, Ct)) == null ? void 0 : l.promise;
        return (
          (a = v(this, Ct)) == null || a.cancel(e),
          n ? n.then(ae).catch(ae) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(v(this, kl));
      }
      isActive() {
        return this.observers.some((e) => pe(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === uf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(e = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !rv(this.state.dataUpdatedAt, e)
        );
      }
      onFocus() {
        var n;
        const e = this.observers.find((l) => l.shouldFetchOnWindowFocus());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (n = v(this, Ct)) == null || n.continue();
      }
      onOnline() {
        var n;
        const e = this.observers.find((l) => l.shouldFetchOnReconnect());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (n = v(this, Ct)) == null || n.continue();
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          v(this, ne).notify({
            type: 'observerAdded',
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((n) => n !== e)),
          this.observers.length ||
            (v(this, Ct) &&
              (v(this, kn)
                ? v(this, Ct).cancel({ revert: !0 })
                : v(this, Ct).cancelRetry()),
            this.scheduleGc()),
          v(this, ne).notify({
            type: 'observerRemoved',
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          X(this, de, Le).call(this, { type: 'invalidate' });
      }
      fetch(e, n) {
        var s, c, f;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (v(this, Ct))
            return v(this, Ct).continueRetry(), v(this, Ct).promise;
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const o = this.observers.find((h) => h.options.queryFn);
          o && this.setOptions(o.options);
        }
        const l = new AbortController(),
          a = (o) => {
            Object.defineProperty(o, 'signal', {
              enumerable: !0,
              get: () => (U(this, kn, !0), l.signal),
            });
          },
          u = () => {
            const o = cv(this.options, n),
              h = {
                client: v(this, Jn),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              a(h),
              U(this, kn, !1),
              this.options.persister ? this.options.persister(o, h, this) : o(h)
            );
          },
          i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            client: v(this, Jn),
            state: this.state,
            fetchFn: u,
          };
        a(i),
          (s = this.options.behavior) == null || s.onFetch(i, this),
          U(this, Fl, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !==
              ((c = i.fetchOptions) == null ? void 0 : c.meta)) &&
            X(this, de, Le).call(this, {
              type: 'fetch',
              meta: (f = i.fetchOptions) == null ? void 0 : f.meta,
            });
        const r = (o) => {
          var h, y, b, S;
          (Ds(o) && o.silent) ||
            X(this, de, Le).call(this, { type: 'error', error: o }),
            Ds(o) ||
              ((y = (h = v(this, ne).config).onError) == null ||
                y.call(h, o, this),
              (S = (b = v(this, ne).config).onSettled) == null ||
                S.call(b, this.state.data, o, this)),
            this.scheduleGc();
        };
        return (
          U(
            this,
            Ct,
            hv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: i.fetchFn,
              abort: l.abort.bind(l),
              onSuccess: (o) => {
                var h, y, b, S;
                if (o === void 0) {
                  r(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(o);
                } catch (g) {
                  r(g);
                  return;
                }
                (y = (h = v(this, ne).config).onSuccess) == null ||
                  y.call(h, o, this),
                  (S = (b = v(this, ne).config).onSettled) == null ||
                    S.call(b, o, this.state.error, this),
                  this.scheduleGc();
              },
              onError: r,
              onFail: (o, h) => {
                X(this, de, Le).call(this, {
                  type: 'failed',
                  failureCount: o,
                  error: h,
                });
              },
              onPause: () => {
                X(this, de, Le).call(this, { type: 'pause' });
              },
              onContinue: () => {
                X(this, de, Le).call(this, { type: 'continue' });
              },
              retry: i.options.retry,
              retryDelay: i.options.retryDelay,
              networkMode: i.options.networkMode,
              canRun: () => !0,
            })
          ),
          v(this, Ct).start()
        );
      }
    }),
    (kl = new WeakMap()),
    (Fl = new WeakMap()),
    (ne = new WeakMap()),
    (Jn = new WeakMap()),
    (Ct = new WeakMap()),
    (Tu = new WeakMap()),
    (kn = new WeakMap()),
    (de = new WeakSet()),
    (Le = function (e) {
      const n = (l) => {
        switch (e.type) {
          case 'failed':
            return {
              ...l,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case 'pause':
            return { ...l, fetchStatus: 'paused' };
          case 'continue':
            return { ...l, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...l,
              ...mv(l.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case 'success':
            return {
              ...l,
              data: e.data,
              dataUpdateCount: l.dataUpdateCount + 1,
              dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!e.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const a = e.error;
            return Ds(a) && a.revert && v(this, Fl)
              ? { ...v(this, Fl), fetchStatus: 'idle' }
              : {
                  ...l,
                  error: a,
                  errorUpdateCount: l.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: l.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...l, isInvalidated: !0 };
          case 'setState':
            return { ...l, ...e.state };
        }
      };
      (this.state = n(this.state)),
        xt.batch(() => {
          this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            v(this, ne).notify({ query: this, type: 'updated', action: e });
        });
    }),
    bd);
function mv(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ov(e.networkMode) ? 'fetching' : 'paused',
    ...(t === void 0 && { error: null, status: 'pending' }),
  };
}
function $E(t) {
  const e =
      typeof t.initialData == 'function' ? t.initialData() : t.initialData,
    n = e !== void 0,
    l = n
      ? typeof t.initialDataUpdatedAt == 'function'
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? l ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var Ae,
  Sd,
  WE =
    ((Sd = class extends Ku {
      constructor(e = {}) {
        super();
        z(this, Ae);
        (this.config = e), U(this, Ae, new Map());
      }
      build(e, n, l) {
        const a = n.queryKey,
          u = n.queryHash ?? af(a, n);
        let i = this.get(u);
        return (
          i ||
            ((i = new FE({
              client: e,
              queryKey: a,
              queryHash: u,
              options: e.defaultQueryOptions(n),
              state: l,
              defaultOptions: e.getQueryDefaults(a),
            })),
            this.add(i)),
          i
        );
      }
      add(e) {
        v(this, Ae).has(e.queryHash) ||
          (v(this, Ae).set(e.queryHash, e),
          this.notify({ type: 'added', query: e }));
      }
      remove(e) {
        const n = v(this, Ae).get(e.queryHash);
        n &&
          (e.destroy(),
          n === e && v(this, Ae).delete(e.queryHash),
          this.notify({ type: 'removed', query: e }));
      }
      clear() {
        xt.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return v(this, Ae).get(e);
      }
      getAll() {
        return [...v(this, Ae).values()];
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((l) => ud(n, l));
      }
      findAll(e = {}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter((l) => ud(e, l)) : n;
      }
      notify(e) {
        xt.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      onFocus() {
        xt.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        xt.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (Ae = new WeakMap()),
    Sd),
  xe,
  zt,
  Fn,
  De,
  un,
  Ed,
  PE =
    ((Ed = class extends dv {
      constructor(e) {
        super();
        z(this, De);
        z(this, xe);
        z(this, zt);
        z(this, Fn);
        (this.mutationId = e.mutationId),
          U(this, zt, e.mutationCache),
          U(this, xe, []),
          (this.state = e.state || IE()),
          this.setOptions(e.options),
          this.scheduleGc();
      }
      setOptions(e) {
        (this.options = e), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        v(this, xe).includes(e) ||
          (v(this, xe).push(e),
          this.clearGcTimeout(),
          v(this, zt).notify({
            type: 'observerAdded',
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        U(
          this,
          xe,
          v(this, xe).filter((n) => n !== e)
        ),
          this.scheduleGc(),
          v(this, zt).notify({
            type: 'observerRemoved',
            mutation: this,
            observer: e,
          });
      }
      optionalRemove() {
        v(this, xe).length ||
          (this.state.status === 'pending'
            ? this.scheduleGc()
            : v(this, zt).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = v(this, Fn)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var a, u, i, r, s, c, f, o, h, y, b, S, g, d, m, p, E, R, D, x;
        U(
          this,
          Fn,
          hv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (w, _) => {
              X(this, De, un).call(this, {
                type: 'failed',
                failureCount: w,
                error: _,
              });
            },
            onPause: () => {
              X(this, De, un).call(this, { type: 'pause' });
            },
            onContinue: () => {
              X(this, De, un).call(this, { type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => v(this, zt).canRun(this),
          })
        );
        const n = this.state.status === 'pending',
          l = !v(this, Fn).canStart();
        try {
          if (!n) {
            X(this, De, un).call(this, {
              type: 'pending',
              variables: e,
              isPaused: l,
            }),
              await ((u = (a = v(this, zt).config).onMutate) == null
                ? void 0
                : u.call(a, e, this));
            const _ = await ((r = (i = this.options).onMutate) == null
              ? void 0
              : r.call(i, e));
            _ !== this.state.context &&
              X(this, De, un).call(this, {
                type: 'pending',
                context: _,
                variables: e,
                isPaused: l,
              });
          }
          const w = await v(this, Fn).start();
          return (
            await ((c = (s = v(this, zt).config).onSuccess) == null
              ? void 0
              : c.call(s, w, e, this.state.context, this)),
            await ((o = (f = this.options).onSuccess) == null
              ? void 0
              : o.call(f, w, e, this.state.context)),
            await ((y = (h = v(this, zt).config).onSettled) == null
              ? void 0
              : y.call(
                  h,
                  w,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((S = (b = this.options).onSettled) == null
              ? void 0
              : S.call(b, w, null, e, this.state.context)),
            X(this, De, un).call(this, { type: 'success', data: w }),
            w
          );
        } catch (w) {
          try {
            throw (
              (await ((d = (g = v(this, zt).config).onError) == null
                ? void 0
                : d.call(g, w, e, this.state.context, this)),
              await ((p = (m = this.options).onError) == null
                ? void 0
                : p.call(m, w, e, this.state.context)),
              await ((R = (E = v(this, zt).config).onSettled) == null
                ? void 0
                : R.call(
                    E,
                    void 0,
                    w,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((x = (D = this.options).onSettled) == null
                ? void 0
                : x.call(D, void 0, w, e, this.state.context)),
              w)
            );
          } finally {
            X(this, De, un).call(this, { type: 'error', error: w });
          }
        } finally {
          v(this, zt).runNext(this);
        }
      }
    }),
    (xe = new WeakMap()),
    (zt = new WeakMap()),
    (Fn = new WeakMap()),
    (De = new WeakSet()),
    (un = function (e) {
      const n = (l) => {
        switch (e.type) {
          case 'failed':
            return {
              ...l,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case 'pause':
            return { ...l, isPaused: !0 };
          case 'continue':
            return { ...l, isPaused: !1 };
          case 'pending':
            return {
              ...l,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: 'pending',
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...l,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...l,
              data: void 0,
              error: e.error,
              failureCount: l.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = n(this.state)),
        xt.batch(() => {
          v(this, xe).forEach((l) => {
            l.onMutationUpdate(e);
          }),
            v(this, zt).notify({ mutation: this, type: 'updated', action: e });
        });
    }),
    Ed);
function IE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var Qe,
  me,
  Ou,
  Td,
  t2 =
    ((Td = class extends Ku {
      constructor(e = {}) {
        super();
        z(this, Qe);
        z(this, me);
        z(this, Ou);
        (this.config = e),
          U(this, Qe, new Set()),
          U(this, me, new Map()),
          U(this, Ou, 0);
      }
      build(e, n, l) {
        const a = new PE({
          mutationCache: this,
          mutationId: ++$u(this, Ou)._,
          options: e.defaultMutationOptions(n),
          state: l,
        });
        return this.add(a), a;
      }
      add(e) {
        v(this, Qe).add(e);
        const n = di(e);
        if (typeof n == 'string') {
          const l = v(this, me).get(n);
          l ? l.push(e) : v(this, me).set(n, [e]);
        }
        this.notify({ type: 'added', mutation: e });
      }
      remove(e) {
        if (v(this, Qe).delete(e)) {
          const n = di(e);
          if (typeof n == 'string') {
            const l = v(this, me).get(n);
            if (l)
              if (l.length > 1) {
                const a = l.indexOf(e);
                a !== -1 && l.splice(a, 1);
              } else l[0] === e && v(this, me).delete(n);
          }
        }
        this.notify({ type: 'removed', mutation: e });
      }
      canRun(e) {
        const n = di(e);
        if (typeof n == 'string') {
          const l = v(this, me).get(n),
            a =
              l == null ? void 0 : l.find((u) => u.state.status === 'pending');
          return !a || a === e;
        } else return !0;
      }
      runNext(e) {
        var l;
        const n = di(e);
        if (typeof n == 'string') {
          const a =
            (l = v(this, me).get(n)) == null
              ? void 0
              : l.find((u) => u !== e && u.state.isPaused);
          return (a == null ? void 0 : a.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        xt.batch(() => {
          v(this, Qe).forEach((e) => {
            this.notify({ type: 'removed', mutation: e });
          }),
            v(this, Qe).clear(),
            v(this, me).clear();
        });
      }
      getAll() {
        return Array.from(v(this, Qe));
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((l) => id(n, l));
      }
      findAll(e = {}) {
        return this.getAll().filter((n) => id(e, n));
      }
      notify(e) {
        xt.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((n) => n.state.isPaused);
        return xt.batch(() =>
          Promise.all(e.map((n) => n.continue().catch(ae)))
        );
      }
    }),
    (Qe = new WeakMap()),
    (me = new WeakMap()),
    (Ou = new WeakMap()),
    Td);
function di(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
function cd(t) {
  return {
    onFetch: (e, n) => {
      var f, o, h, y, b;
      const l = e.options,
        a =
          (h =
            (o = (f = e.fetchOptions) == null ? void 0 : f.meta) == null
              ? void 0
              : o.fetchMore) == null
            ? void 0
            : h.direction,
        u = ((y = e.state.data) == null ? void 0 : y.pages) || [],
        i = ((b = e.state.data) == null ? void 0 : b.pageParams) || [];
      let r = { pages: [], pageParams: [] },
        s = 0;
      const c = async () => {
        let S = !1;
        const g = (p) => {
            Object.defineProperty(p, 'signal', {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (S = !0)
                  : e.signal.addEventListener('abort', () => {
                      S = !0;
                    }),
                e.signal
              ),
            });
          },
          d = cv(e.options, e.fetchOptions),
          m = async (p, E, R) => {
            if (S) return Promise.reject();
            if (E == null && p.pages.length) return Promise.resolve(p);
            const D = {
              client: e.client,
              queryKey: e.queryKey,
              pageParam: E,
              direction: R ? 'backward' : 'forward',
              meta: e.options.meta,
            };
            g(D);
            const x = await d(D),
              { maxPages: w } = e.options,
              _ = R ? XE : GE;
            return {
              pages: _(p.pages, x, w),
              pageParams: _(p.pageParams, E, w),
            };
          };
        if (a && u.length) {
          const p = a === 'backward',
            E = p ? e2 : od,
            R = { pages: u, pageParams: i },
            D = E(l, R);
          r = await m(R, D, p);
        } else {
          const p = t ?? u.length;
          do {
            const E = s === 0 ? i[0] ?? l.initialPageParam : od(l, r);
            if (s > 0 && E == null) break;
            (r = await m(r, E)), s++;
          } while (s < p);
        }
        return r;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var S, g;
            return (g = (S = e.options).persister) == null
              ? void 0
              : g.call(
                  S,
                  c,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  n
                );
          })
        : (e.fetchFn = c);
    },
  };
}
function od(t, { pages: e, pageParams: n }) {
  const l = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[l], e, n[l], n) : void 0;
}
function e2(t, { pages: e, pageParams: n }) {
  var l;
  return e.length > 0
    ? (l = t.getPreviousPageParam) == null
      ? void 0
      : l.call(t, e[0], e, n[0], n)
    : void 0;
}
var st,
  yn,
  pn,
  $l,
  Wl,
  vn,
  Pl,
  Il,
  Od,
  n2 =
    ((Od = class {
      constructor(t = {}) {
        z(this, st);
        z(this, yn);
        z(this, pn);
        z(this, $l);
        z(this, Wl);
        z(this, vn);
        z(this, Pl);
        z(this, Il);
        U(this, st, t.queryCache || new WE()),
          U(this, yn, t.mutationCache || new t2()),
          U(this, pn, t.defaultOptions || {}),
          U(this, $l, new Map()),
          U(this, Wl, new Map()),
          U(this, vn, 0);
      }
      mount() {
        $u(this, vn)._++,
          v(this, vn) === 1 &&
            (U(
              this,
              Pl,
              rf.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), v(this, st).onFocus());
              })
            ),
            U(
              this,
              Il,
              fr.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), v(this, st).onOnline());
              })
            ));
      }
      unmount() {
        var t, e;
        $u(this, vn)._--,
          v(this, vn) === 0 &&
            ((t = v(this, Pl)) == null || t.call(this),
            U(this, Pl, void 0),
            (e = v(this, Il)) == null || e.call(this),
            U(this, Il, void 0));
      }
      isFetching(t) {
        return v(this, st).findAll({ ...t, fetchStatus: 'fetching' }).length;
      }
      isMutating(t) {
        return v(this, yn).findAll({ ...t, status: 'pending' }).length;
      }
      getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = v(this, st).get(e.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          n = v(this, st).build(this, e),
          l = n.state.data;
        return l === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              n.isStaleByTime(Vl(e.staleTime, n)) &&
              this.prefetchQuery(e),
            Promise.resolve(l));
      }
      getQueriesData(t) {
        return v(this, st)
          .findAll(t)
          .map(({ queryKey: e, state: n }) => {
            const l = n.data;
            return [e, l];
          });
      }
      setQueryData(t, e, n) {
        const l = this.defaultQueryOptions({ queryKey: t }),
          a = v(this, st).get(l.queryHash),
          u = a == null ? void 0 : a.state.data,
          i = QE(e, u);
        if (i !== void 0)
          return v(this, st)
            .build(this, l)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(t, e, n) {
        return xt.batch(() =>
          v(this, st)
            .findAll(t)
            .map(({ queryKey: l }) => [l, this.setQueryData(l, e, n)])
        );
      }
      getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (n = v(this, st).get(e.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(t) {
        const e = v(this, st);
        xt.batch(() => {
          e.findAll(t).forEach((n) => {
            e.remove(n);
          });
        });
      }
      resetQueries(t, e) {
        const n = v(this, st);
        return xt.batch(
          () => (
            n.findAll(t).forEach((l) => {
              l.reset();
            }),
            this.refetchQueries({ type: 'active', ...t }, e)
          )
        );
      }
      cancelQueries(t, e = {}) {
        const n = { revert: !0, ...e },
          l = xt.batch(() =>
            v(this, st)
              .findAll(t)
              .map((a) => a.cancel(n))
          );
        return Promise.all(l).then(ae).catch(ae);
      }
      invalidateQueries(t, e = {}) {
        return xt.batch(
          () => (
            v(this, st)
              .findAll(t)
              .forEach((n) => {
                n.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      'active',
                  },
                  e
                )
          )
        );
      }
      refetchQueries(t, e = {}) {
        const n = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          l = xt.batch(() =>
            v(this, st)
              .findAll(t)
              .filter((a) => !a.isDisabled())
              .map((a) => {
                let u = a.fetch(void 0, n);
                return (
                  n.throwOnError || (u = u.catch(ae)),
                  a.state.fetchStatus === 'paused' ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(l).then(ae);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = v(this, st).build(this, e);
        return n.isStaleByTime(Vl(e.staleTime, n))
          ? n.fetch(e)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(ae).catch(ae);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = cd(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(ae).catch(ae);
      }
      ensureInfiniteQueryData(t) {
        return (t.behavior = cd(t.pages)), this.ensureQueryData(t);
      }
      resumePausedMutations() {
        return fr.isOnline()
          ? v(this, yn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return v(this, st);
      }
      getMutationCache() {
        return v(this, yn);
      }
      getDefaultOptions() {
        return v(this, pn);
      }
      setDefaultOptions(t) {
        U(this, pn, t);
      }
      setQueryDefaults(t, e) {
        v(this, $l).set(Su(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...v(this, $l).values()],
          n = {};
        return (
          e.forEach((l) => {
            Eu(t, l.queryKey) && Object.assign(n, l.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(t, e) {
        v(this, Wl).set(Su(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...v(this, Wl).values()],
          n = {};
        return (
          e.forEach((l) => {
            Eu(t, l.mutationKey) && Object.assign(n, l.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...v(this, pn).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = af(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== 'always'),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = 'offlineFirst'),
          e.queryFn === uf && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...v(this, pn).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        v(this, st).clear(), v(this, yn).clear();
      }
    }),
    (st = new WeakMap()),
    (yn = new WeakMap()),
    (pn = new WeakMap()),
    ($l = new WeakMap()),
    (Wl = new WeakMap()),
    (vn = new WeakMap()),
    (Pl = new WeakMap()),
    (Il = new WeakMap()),
    Od),
  Lt,
  V,
  Ru,
  jt,
  $n,
  ta,
  gn,
  we,
  Au,
  ea,
  na,
  Wn,
  Pn,
  bn,
  la,
  k,
  Ga,
  qc,
  Lc,
  Qc,
  Yc,
  Gc,
  Xc,
  Vc,
  yv,
  Rd,
  l2 =
    ((Rd = class extends Ku {
      constructor(e, n) {
        super();
        z(this, k);
        z(this, Lt);
        z(this, V);
        z(this, Ru);
        z(this, jt);
        z(this, $n);
        z(this, ta);
        z(this, gn);
        z(this, we);
        z(this, Au);
        z(this, ea);
        z(this, na);
        z(this, Wn);
        z(this, Pn);
        z(this, bn);
        z(this, la, new Set());
        (this.options = n),
          U(this, Lt, e),
          U(this, we, null),
          U(this, gn, Bc()),
          this.options.experimental_prefetchInRender ||
            v(this, gn).reject(
              new Error(
                'experimental_prefetchInRender feature flag is not enabled'
              )
            ),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (v(this, V).addObserver(this),
          fd(v(this, V), this.options)
            ? X(this, k, Ga).call(this)
            : this.updateResult(),
          X(this, k, Yc).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Zc(v(this, V), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Zc(v(this, V), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          X(this, k, Gc).call(this),
          X(this, k, Xc).call(this),
          v(this, V).removeObserver(this);
      }
      setOptions(e) {
        const n = this.options,
          l = v(this, V);
        if (
          ((this.options = v(this, Lt).defaultQueryOptions(e)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof pe(this.options.enabled, v(this, V)) != 'boolean')
        )
          throw new Error(
            'Expected enabled to be a boolean or a callback that returns a boolean'
          );
        X(this, k, Vc).call(this),
          v(this, V).setOptions(this.options),
          n._defaulted &&
            !zc(this.options, n) &&
            v(this, Lt)
              .getQueryCache()
              .notify({
                type: 'observerOptionsUpdated',
                query: v(this, V),
                observer: this,
              });
        const a = this.hasListeners();
        a && hd(v(this, V), l, this.options, n) && X(this, k, Ga).call(this),
          this.updateResult(),
          a &&
            (v(this, V) !== l ||
              pe(this.options.enabled, v(this, V)) !==
                pe(n.enabled, v(this, V)) ||
              Vl(this.options.staleTime, v(this, V)) !==
                Vl(n.staleTime, v(this, V))) &&
            X(this, k, qc).call(this);
        const u = X(this, k, Lc).call(this);
        a &&
          (v(this, V) !== l ||
            pe(this.options.enabled, v(this, V)) !==
              pe(n.enabled, v(this, V)) ||
            u !== v(this, bn)) &&
          X(this, k, Qc).call(this, u);
      }
      getOptimisticResult(e) {
        const n = v(this, Lt).getQueryCache().build(v(this, Lt), e),
          l = this.createResult(n, e);
        return (
          u2(this, l) &&
            (U(this, jt, l),
            U(this, ta, this.options),
            U(this, $n, v(this, V).state)),
          l
        );
      }
      getCurrentResult() {
        return v(this, jt);
      }
      trackResult(e, n) {
        const l = {};
        return (
          Object.keys(e).forEach((a) => {
            Object.defineProperty(l, a, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(a), n == null || n(a), e[a]),
            });
          }),
          l
        );
      }
      trackProp(e) {
        v(this, la).add(e);
      }
      getCurrentQuery() {
        return v(this, V);
      }
      refetch({ ...e } = {}) {
        return this.fetch({ ...e });
      }
      fetchOptimistic(e) {
        const n = v(this, Lt).defaultQueryOptions(e),
          l = v(this, Lt).getQueryCache().build(v(this, Lt), n);
        return l.fetch().then(() => this.createResult(l, n));
      }
      fetch(e) {
        return X(this, k, Ga)
          .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), v(this, jt)));
      }
      createResult(e, n) {
        var w;
        const l = v(this, V),
          a = this.options,
          u = v(this, jt),
          i = v(this, $n),
          r = v(this, ta),
          c = e !== l ? e.state : v(this, Ru),
          { state: f } = e;
        let o = { ...f },
          h = !1,
          y;
        if (n._optimisticResults) {
          const _ = this.hasListeners(),
            N = !_ && fd(e, n),
            I = _ && hd(e, l, n, a);
          (N || I) && (o = { ...o, ...mv(f.data, e.options) }),
            n._optimisticResults === 'isRestoring' && (o.fetchStatus = 'idle');
        }
        let { error: b, errorUpdatedAt: S, status: g } = o;
        if (n.select && o.data !== void 0)
          if (
            u &&
            o.data === (i == null ? void 0 : i.data) &&
            n.select === v(this, Au)
          )
            y = v(this, ea);
          else
            try {
              U(this, Au, n.select),
                (y = n.select(o.data)),
                (y = Hc(u == null ? void 0 : u.data, y, n)),
                U(this, ea, y),
                U(this, we, null);
            } catch (_) {
              U(this, we, _);
            }
        else y = o.data;
        if (n.placeholderData !== void 0 && y === void 0 && g === 'pending') {
          let _;
          if (
            u != null &&
            u.isPlaceholderData &&
            n.placeholderData === (r == null ? void 0 : r.placeholderData)
          )
            _ = u.data;
          else if (
            ((_ =
              typeof n.placeholderData == 'function'
                ? n.placeholderData(
                    (w = v(this, na)) == null ? void 0 : w.state.data,
                    v(this, na)
                  )
                : n.placeholderData),
            n.select && _ !== void 0)
          )
            try {
              (_ = n.select(_)), U(this, we, null);
            } catch (N) {
              U(this, we, N);
            }
          _ !== void 0 &&
            ((g = 'success'),
            (y = Hc(u == null ? void 0 : u.data, _, n)),
            (h = !0));
        }
        v(this, we) &&
          ((b = v(this, we)),
          (y = v(this, ea)),
          (S = Date.now()),
          (g = 'error'));
        const d = o.fetchStatus === 'fetching',
          m = g === 'pending',
          p = g === 'error',
          E = m && d,
          R = y !== void 0,
          x = {
            status: g,
            fetchStatus: o.fetchStatus,
            isPending: m,
            isSuccess: g === 'success',
            isError: p,
            isInitialLoading: E,
            isLoading: E,
            data: y,
            dataUpdatedAt: o.dataUpdatedAt,
            error: b,
            errorUpdatedAt: S,
            failureCount: o.fetchFailureCount,
            failureReason: o.fetchFailureReason,
            errorUpdateCount: o.errorUpdateCount,
            isFetched: o.dataUpdateCount > 0 || o.errorUpdateCount > 0,
            isFetchedAfterMount:
              o.dataUpdateCount > c.dataUpdateCount ||
              o.errorUpdateCount > c.errorUpdateCount,
            isFetching: d,
            isRefetching: d && !m,
            isLoadingError: p && !R,
            isPaused: o.fetchStatus === 'paused',
            isPlaceholderData: h,
            isRefetchError: p && R,
            isStale: sf(e, n),
            refetch: this.refetch,
            promise: v(this, gn),
          };
        if (this.options.experimental_prefetchInRender) {
          const _ = (Mt) => {
              x.status === 'error'
                ? Mt.reject(x.error)
                : x.data !== void 0 && Mt.resolve(x.data);
            },
            N = () => {
              const Mt = U(this, gn, (x.promise = Bc()));
              _(Mt);
            },
            I = v(this, gn);
          switch (I.status) {
            case 'pending':
              e.queryHash === l.queryHash && _(I);
              break;
            case 'fulfilled':
              (x.status === 'error' || x.data !== I.value) && N();
              break;
            case 'rejected':
              (x.status !== 'error' || x.error !== I.reason) && N();
              break;
          }
        }
        return x;
      }
      updateResult() {
        const e = v(this, jt),
          n = this.createResult(v(this, V), this.options);
        if (
          (U(this, $n, v(this, V).state),
          U(this, ta, this.options),
          v(this, $n).data !== void 0 && U(this, na, v(this, V)),
          zc(n, e))
        )
          return;
        U(this, jt, n);
        const l = () => {
          if (!e) return !0;
          const { notifyOnChangeProps: a } = this.options,
            u = typeof a == 'function' ? a() : a;
          if (u === 'all' || (!u && !v(this, la).size)) return !0;
          const i = new Set(u ?? v(this, la));
          return (
            this.options.throwOnError && i.add('error'),
            Object.keys(v(this, jt)).some((r) => {
              const s = r;
              return v(this, jt)[s] !== e[s] && i.has(s);
            })
          );
        };
        X(this, k, yv).call(this, { listeners: l() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && X(this, k, Yc).call(this);
      }
    }),
    (Lt = new WeakMap()),
    (V = new WeakMap()),
    (Ru = new WeakMap()),
    (jt = new WeakMap()),
    ($n = new WeakMap()),
    (ta = new WeakMap()),
    (gn = new WeakMap()),
    (we = new WeakMap()),
    (Au = new WeakMap()),
    (ea = new WeakMap()),
    (na = new WeakMap()),
    (Wn = new WeakMap()),
    (Pn = new WeakMap()),
    (bn = new WeakMap()),
    (la = new WeakMap()),
    (k = new WeakSet()),
    (Ga = function (e) {
      X(this, k, Vc).call(this);
      let n = v(this, V).fetch(this.options, e);
      return (e != null && e.throwOnError) || (n = n.catch(ae)), n;
    }),
    (qc = function () {
      X(this, k, Gc).call(this);
      const e = Vl(this.options.staleTime, v(this, V));
      if (hl || v(this, jt).isStale || !Nc(e)) return;
      const l = rv(v(this, jt).dataUpdatedAt, e) + 1;
      U(
        this,
        Wn,
        setTimeout(() => {
          v(this, jt).isStale || this.updateResult();
        }, l)
      );
    }),
    (Lc = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(v(this, V))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Qc = function (e) {
      X(this, k, Xc).call(this),
        U(this, bn, e),
        !(
          hl ||
          pe(this.options.enabled, v(this, V)) === !1 ||
          !Nc(v(this, bn)) ||
          v(this, bn) === 0
        ) &&
          U(
            this,
            Pn,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || rf.isFocused()) &&
                X(this, k, Ga).call(this);
            }, v(this, bn))
          );
    }),
    (Yc = function () {
      X(this, k, qc).call(this),
        X(this, k, Qc).call(this, X(this, k, Lc).call(this));
    }),
    (Gc = function () {
      v(this, Wn) && (clearTimeout(v(this, Wn)), U(this, Wn, void 0));
    }),
    (Xc = function () {
      v(this, Pn) && (clearInterval(v(this, Pn)), U(this, Pn, void 0));
    }),
    (Vc = function () {
      const e = v(this, Lt).getQueryCache().build(v(this, Lt), this.options);
      if (e === v(this, V)) return;
      const n = v(this, V);
      U(this, V, e),
        U(this, Ru, e.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), e.addObserver(this));
    }),
    (yv = function (e) {
      xt.batch(() => {
        e.listeners &&
          this.listeners.forEach((n) => {
            n(v(this, jt));
          }),
          v(this, Lt)
            .getQueryCache()
            .notify({ query: v(this, V), type: 'observerResultsUpdated' });
      });
    }),
    Rd);
function a2(t, e) {
  return (
    pe(e.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === 'error' && e.retryOnMount === !1)
  );
}
function fd(t, e) {
  return a2(t, e) || (t.state.data !== void 0 && Zc(t, e, e.refetchOnMount));
}
function Zc(t, e, n) {
  if (pe(e.enabled, t) !== !1) {
    const l = typeof n == 'function' ? n(t) : n;
    return l === 'always' || (l !== !1 && sf(t, e));
  }
  return !1;
}
function hd(t, e, n, l) {
  return (
    (t !== e || pe(l.enabled, t) === !1) &&
    (!n.suspense || t.state.status !== 'error') &&
    sf(t, n)
  );
}
function sf(t, e) {
  return pe(e.enabled, t) !== !1 && t.isStaleByTime(Vl(e.staleTime, t));
}
function u2(t, e) {
  return !zc(t.getCurrentResult(), e);
}
var pv = O.createContext(void 0),
  i2 = (t) => {
    const e = O.useContext(pv);
    if (!e)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return e;
  },
  r2 = ({ client: t, children: e }) => (
    O.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    M.jsx(pv.Provider, { value: t, children: e })
  ),
  vv = O.createContext(!1),
  s2 = () => O.useContext(vv);
vv.Provider;
function c2() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var o2 = O.createContext(c2()),
  f2 = () => O.useContext(o2);
function h2(t, e) {
  return typeof t == 'function' ? t(...e) : !!t;
}
function dd() {}
var d2 = (t, e) => {
    (t.suspense || t.throwOnError || t.experimental_prefetchInRender) &&
      (e.isReset() || (t.retryOnMount = !1));
  },
  m2 = (t) => {
    O.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  y2 = ({
    result: t,
    errorResetBoundary: e,
    throwOnError: n,
    query: l,
    suspense: a,
  }) =>
    t.isError &&
    !e.isReset() &&
    !t.isFetching &&
    l &&
    ((a && t.data === void 0) || h2(n, [t.error, l])),
  p2 = (t) => {
    const e = t.staleTime;
    t.suspense &&
      ((t.staleTime =
        typeof e == 'function'
          ? (...n) => Math.max(e(...n), 1e3)
          : Math.max(e ?? 1e3, 1e3)),
      typeof t.gcTime == 'number' && (t.gcTime = Math.max(t.gcTime, 1e3)));
  },
  v2 = (t, e) => t.isLoading && t.isFetching && !e,
  g2 = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
  md = (t, e, n) =>
    e.fetchOptimistic(t).catch(() => {
      n.clearReset();
    });
function b2(t, e, n) {
  var o, h, y, b, S;
  const l = i2(),
    a = s2(),
    u = f2(),
    i = l.defaultQueryOptions(t);
  (h =
    (o = l.getDefaultOptions().queries) == null
      ? void 0
      : o._experimental_beforeQuery) == null || h.call(o, i),
    (i._optimisticResults = a ? 'isRestoring' : 'optimistic'),
    p2(i),
    d2(i, u),
    m2(u);
  const r = !l.getQueryCache().get(i.queryHash),
    [s] = O.useState(() => new e(l, i)),
    c = s.getOptimisticResult(i),
    f = !a && t.subscribed !== !1;
  if (
    (O.useSyncExternalStore(
      O.useCallback(
        (g) => {
          const d = f ? s.subscribe(xt.batchCalls(g)) : dd;
          return s.updateResult(), d;
        },
        [s, f]
      ),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    O.useEffect(() => {
      s.setOptions(i);
    }, [i, s]),
    g2(i, c))
  )
    throw md(i, s, u);
  if (
    y2({
      result: c,
      errorResetBoundary: u,
      throwOnError: i.throwOnError,
      query: l.getQueryCache().get(i.queryHash),
      suspense: i.suspense,
    })
  )
    throw c.error;
  if (
    ((b =
      (y = l.getDefaultOptions().queries) == null
        ? void 0
        : y._experimental_afterQuery) == null || b.call(y, i, c),
    i.experimental_prefetchInRender && !hl && v2(c, a))
  ) {
    const g = r
      ? md(i, s, u)
      : (S = l.getQueryCache().get(i.queryHash)) == null
      ? void 0
      : S.promise;
    g == null ||
      g.catch(dd).finally(() => {
        s.updateResult();
      });
  }
  return i.notifyOnChangeProps ? c : s.trackResult(c);
}
function S2(t, e) {
  return b2(t, l2);
}
const E2 = () => {
    const { pgi: t, pwi: e } = tS(),
      n = $o(),
      [l, a] = Qn.useState(),
      [u, i] = Qn.useState(t),
      [r, s] = Qn.useState(e),
      [c, f] = Qn.useState(null),
      [o, h] = Qn.useState(!0),
      y = HE({
        onSwipedLeft: () => R(),
        onSwipedRight: () => E(),
        onSwipedUp: () => g(),
      });
    Qn.useEffect(() => {
      const D = `${window.location.origin}/data/words.json`;
      ft.get(D).then((x) => {
        a(x.data);
      });
    }, []);
    const b = async () => {
        const { data: D } = await ft.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${l.words[u][r]}`
        );
        return f(D[0]), D[0];
      },
      {
        isLoading: S,
        refetch: g,
        isFetching: d,
      } = S2({ queryKey: ['meaning', u, r], queryFn: b, enabled: !1 }),
      m = (D) => {
        D >= 0 &&
          D < l.words[u].length &&
          D !== Number(r) &&
          (s(D), f(''), n(`/${u}/${D}`, { replace: !0 }));
      },
      p = (D) => {
        const x = '0';
        s(x), i(D), f(''), n(`/${D}/${x}`, { replace: !0 });
      },
      E = () => {
        const D = Number(r) - 1;
        m(D);
      },
      R = () => {
        const D = Number(r) + 1;
        m(D);
      };
    return M.jsx('div', {
      className: 'pt-5 h-full',
      ...y,
      children:
        l &&
        M.jsxs(M.Fragment, {
          children: [
            M.jsxs('div', {
              className: 'flex justify-between',
              children: [
                M.jsx('p', {
                  className: 'p-2 font-bold text-lg',
                  children: 'Groups',
                }),
                M.jsx('button', {
                  className: 'p-2',
                  onClick: () => h(!o),
                  children: o ? 'minimize ▴' : 'expand ▾',
                }),
              ],
            }),
            o &&
              M.jsx(LE, {
                words: l,
                groupIndex: u,
                wordIndex: r,
                onSelectWord: m,
                onSelectGroup: p,
              }),
            M.jsx('hr', {}),
            !u &&
              M.jsx('div', {
                className: 'flex justify-center items-center',
                children: M.jsx('p', {
                  className: 'text-2xl',
                  children: 'Select a group to start!',
                }),
              }),
            l &&
              u &&
              l.words[u][r] &&
              M.jsx(qE, {
                words: l,
                groupIndex: u,
                wordIndex: r,
                getMeaning: g,
                onPrev: E,
                onNext: R,
              }),
            (S || d) && M.jsx('div', { children: 'Loading....' }),
            c && M.jsx(BE, { meaning: c }),
          ],
        }),
    });
  },
  ws = () =>
    M.jsxs('div', {
      className: 'container mx-auto h-screen',
      children: [M.jsx($S, {}), M.jsx(E2, {}), M.jsx(FS, {})],
    });
function T2() {
  return M.jsx('div', {
    children: M.jsxs(pS, {
      children: [
        M.jsx(Ya, { path: '/', element: M.jsx(ws, {}) }),
        M.jsx(Ya, { path: '/:pgi', element: M.jsx(ws, {}) }),
        M.jsx(Ya, { path: '/:pgi/:pwi', element: M.jsx(ws, {}) }),
        M.jsx(Ya, { path: '*', element: M.jsx(mS, { to: '/', replace: !0 }) }),
      ],
    }),
  });
}
const O2 = 'modulepreload',
  R2 = function (t) {
    return '/' + t;
  },
  yd = {},
  A2 = function (e, n, l) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const i = document.querySelector('meta[property=csp-nonce]'),
        r =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'));
      a = Promise.allSettled(
        n.map((s) => {
          if (((s = R2(s)), s in yd)) return;
          yd[s] = !0;
          const c = s.endsWith('.css'),
            f = c ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${s}"]${f}`)) return;
          const o = document.createElement('link');
          if (
            ((o.rel = c ? 'stylesheet' : O2),
            c || (o.as = 'script'),
            (o.crossOrigin = ''),
            (o.href = s),
            r && o.setAttribute('nonce', r),
            document.head.appendChild(o),
            c)
          )
            return new Promise((h, y) => {
              o.addEventListener('load', h),
                o.addEventListener('error', () =>
                  y(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    function u(i) {
      const r = new Event('vite:preloadError', { cancelable: !0 });
      if (((r.payload = i), window.dispatchEvent(r), !r.defaultPrevented))
        throw i;
    }
    return a.then((i) => {
      for (const r of i || []) r.status === 'rejected' && u(r.reason);
      return e().catch(u);
    });
  };
function x2(t = {}) {
  const {
    immediate: e = !1,
    onNeedRefresh: n,
    onOfflineReady: l,
    onRegistered: a,
    onRegisteredSW: u,
    onRegisterError: i,
  } = t;
  let r, s;
  const c = async (o = !0) => {
    await s;
  };
  async function f() {
    if ('serviceWorker' in navigator) {
      if (
        ((r = await A2(async () => {
          const { Workbox: o } = await import(
            './workbox-window.prod.es5-B9K5rw8f.js'
          );
          return { Workbox: o };
        }, [])
          .then(
            ({ Workbox: o }) => new o('/sw.js', { scope: '/', type: 'classic' })
          )
          .catch((o) => {
            i == null || i(o);
          })),
        !r)
      )
        return;
      r.addEventListener('activated', (o) => {
        (o.isUpdate || o.isExternal) && window.location.reload();
      }),
        r.addEventListener('installed', (o) => {
          o.isUpdate || l == null || l();
        }),
        r
          .register({ immediate: e })
          .then((o) => {
            u ? u('/sw.js', o) : a == null || a(o);
          })
          .catch((o) => {
            i == null || i(o);
          });
    }
  }
  return (s = f()), c;
}
x2({
  onRegistered(t) {
    console.log('Service Worker registered', t);
  },
  onRegisterError(t) {
    console.error('Service Worker registration failed', t);
  },
});
const D2 = new n2({
  defaultOptions: { queries: { staleTime: 1e3 * 60 * 5, retry: 2 } },
});
yb.createRoot(document.getElementById('root')).render(
  M.jsx(Qn.StrictMode, {
    children: M.jsx(LS, {
      children: M.jsx(r2, { client: D2, children: M.jsx(T2, {}) }),
    }),
  })
);
