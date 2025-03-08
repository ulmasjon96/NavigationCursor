/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
var __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator;
(function (l) {
    function m(k, l) {
        return function (m, u) {
            return (k[m] = l ? l(m, u) : u);
        };
    }
    var u =
        "object" === typeof global
            ? global
            : "object" === typeof self
            ? self
            : "object" === typeof this
            ? this
            : {};
    "object" === typeof System && "function" === typeof System.register
        ? System.register("tslib", [], function (k) {
              l(m(u, k));
              return { setters: [], execute: function () {} };
          })
        : "function" === typeof define && define.amd
        ? define("tslib", ["exports"], function (k) {
              l(m(u, m(k)));
          })
        : "object" === typeof module && "object" === typeof module.exports
        ? l(m(u, m(module.exports)))
        : l(m(u));
})(function (l) {
    __extends = function (l, u) {
        function k() {
            this.constructor = l;
        }
        for (var m in u) u.hasOwnProperty(m) && (l[m] = u[m]);
        l.prototype =
            null === u
                ? Object.create(u)
                : ((k.prototype = u.prototype), new k());
    };
    __assign =
        Object.assign ||
        function (l) {
            for (var m, k = 1, E = arguments.length; k < E; k++) {
                m = arguments[k];
                for (var w in m)
                    Object.prototype.hasOwnProperty.call(m, w) && (l[w] = m[w]);
            }
            return l;
        };
    __rest = function (l, u) {
        var k = {},
            m;
        for (m in l)
            Object.prototype.hasOwnProperty.call(l, m) &&
                0 > u.indexOf(m) &&
                (k[m] = l[m]);
        if (null != l && "function" === typeof Object.getOwnPropertySymbols) {
            var w = 0;
            for (m = Object.getOwnPropertySymbols(l); w < m.length; w++)
                0 > u.indexOf(m[w]) && (k[m[w]] = l[m[w]]);
        }
        return k;
    };
    __decorate = function (l, u, k, E) {
        var m = arguments.length,
            A =
                3 > m
                    ? u
                    : null === E
                    ? (E = Object.getOwnPropertyDescriptor(u, k))
                    : E,
            F;
        if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
        )
            A = Reflect.decorate(l, u, k, E);
        else
            for (var v = l.length - 1; 0 <= v; v--)
                if ((F = l[v]))
                    A = (3 > m ? F(A) : 3 < m ? F(u, k, A) : F(u, k)) || A;
        return 3 < m && A && Object.defineProperty(u, k, A), A;
    };
    __param = function (l, u) {
        return function (k, m) {
            u(k, m, l);
        };
    };
    __metadata = function (l, u) {
        if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.metadata
        )
            return Reflect.metadata(l, u);
    };
    __awaiter = function (l, u, k, E) {
        return new (k || (k = Promise))(function (m, A) {
            function w(l) {
                try {
                    G(E.next(l));
                } catch (q) {
                    A(q);
                }
            }
            function v(l) {
                try {
                    G(E["throw"](l));
                } catch (q) {
                    A(q);
                }
            }
            function G(l) {
                l.done
                    ? m(l.value)
                    : new k(function (k) {
                          k(l.value);
                      }).then(w, v);
            }
            G((E = E.apply(l, u)).next());
        });
    };
    __generator = function (l, u) {
        function k(l) {
            return function (k) {
                return m([l, k]);
            };
        }
        function m(k) {
            if (A) throw new TypeError("Generator is already executing.");
            for (; w; )
                try {
                    if (
                        ((A = 1),
                        F &&
                            (v =
                                F[
                                    k[0] & 2
                                        ? "return"
                                        : k[0]
                                        ? "throw"
                                        : "next"
                                ]) &&
                            !(v = v.call(F, k[1])).done)
                    )
                        return v;
                    if (((F = 0), v)) k = [0, v.value];
                    switch (k[0]) {
                        case 0:
                        case 1:
                            v = k;
                            break;
                        case 4:
                            return w.label++, { value: k[1], done: !1 };
                        case 5:
                            w.label++;
                            F = k[1];
                            k = [0];
                            continue;
                        case 7:
                            k = w.ops.pop();
                            w.trys.pop();
                            continue;
                        default:
                            if (
                                !((v = w.trys),
                                (v = 0 < v.length && v[v.length - 1])) &&
                                (6 === k[0] || 2 === k[0])
                            ) {
                                w = 0;
                                continue;
                            }
                            if (
                                3 === k[0] &&
                                (!v || (k[1] > v[0] && k[1] < v[3]))
                            )
                                w.label = k[1];
                            else if (6 === k[0] && w.label < v[1])
                                (w.label = v[1]), (v = k);
                            else if (v && w.label < v[2])
                                (w.label = v[2]), w.ops.push(k);
                            else {
                                v[2] && w.ops.pop();
                                w.trys.pop();
                                continue;
                            }
                    }
                    k = u.call(l, w);
                } catch (Z) {
                    (k = [6, Z]), (F = 0);
                } finally {
                    A = v = 0;
                }
            if (k[0] & 5) throw k[1];
            return { value: k[0] ? k[1] : void 0, done: !0 };
        }
        var w = {
                label: 0,
                sent: function () {
                    if (v[0] & 1) throw v[1];
                    return v[1];
                },
                trys: [],
                ops: [],
            },
            A,
            F,
            v;
        return { next: k(0), throw: k(1), return: k(2) };
    };
    l("__extends", __extends);
    l("__assign", __assign);
    l("__rest", __rest);
    l("__decorate", __decorate);
    l("__param", __param);
    l("__metadata", __metadata);
    l("__awaiter", __awaiter);
    l("__generator", __generator);
});
(function (l, m) {
    "object" === typeof exports && "undefined" !== typeof module
        ? m(exports)
        : "function" === typeof define && define.amd
        ? define(["exports"], m)
        : m((l.Rx = l.Rx || {}));
})(this, function (l) {
    function m(b) {
        return "function" === typeof b;
    }
    function u() {
        try {
            return qa.apply(this, arguments);
        } catch (b) {
            return (n.e = b), n;
        }
    }
    function k(b) {
        qa = b;
        return u;
    }
    function E(b) {
        var a = b.subject;
        a.next(b.value);
        a.complete();
    }
    function w(b) {
        b.subject.error(b.err);
    }
    function A(b) {
        var a = this,
            c = b.source;
        b = b.subscriber;
        var e = c.callbackFunc,
            d = c.args,
            f = c.scheduler,
            h = c.subject;
        if (!h) {
            var h = (c.subject = new P()),
                g = function J() {
                    for (var c = [], b = 0; b < arguments.length; b++)
                        c[b - 0] = arguments[b];
                    var e = J.source,
                        b = e.selector,
                        e = e.subject,
                        d = c.shift();
                    d
                        ? e.error(d)
                        : b
                        ? ((c = k(b).apply(this, c)),
                          c === n
                              ? a.add(
                                    f.schedule(v, 0, { err: n.e, subject: e })
                                )
                              : a.add(
                                    f.schedule(F, 0, { value: c, subject: e })
                                ))
                        : a.add(
                              f.schedule(F, 0, {
                                  value: 1 === c.length ? c[0] : c,
                                  subject: e,
                              })
                          );
                };
            g.source = c;
            k(e).apply(this, d.concat(g)) === n && h.error(n.e);
        }
        a.add(h.subscribe(b));
    }
    function F(b) {
        var a = b.subject;
        a.next(b.value);
        a.complete();
    }
    function v(b) {
        b.subject.error(b.err);
    }
    function G(b) {
        return b && "function" === typeof b.schedule;
    }
    function Z(b) {
        return (
            b &&
            "function" !== typeof b.subscribe &&
            "function" === typeof b.then
        );
    }
    function q(b, a, c, e) {
        var d = new ra(b, c, e);
        if (d.closed) return null;
        if (a instanceof g)
            if (a._isScalar) d.next(a.value), d.complete();
            else return a.subscribe(d);
        else if (H(a)) {
            b = 0;
            for (c = a.length; b < c && !d.closed; b++) d.next(a[b]);
            d.closed || d.complete();
        } else {
            if (Z(a))
                return (
                    a
                        .then(
                            function (c) {
                                d.closed || (d.next(c), d.complete());
                            },
                            function (c) {
                                return d.error(c);
                            }
                        )
                        .then(null, function (c) {
                            r.setTimeout(function () {
                                throw c;
                            });
                        }),
                    d
                );
            if (a && "function" === typeof a[I]) {
                a = a[I]();
                do {
                    b = a.next();
                    if (b.done) {
                        d.complete();
                        break;
                    }
                    d.next(b.value);
                    if (d.closed) break;
                } while (1);
            } else if (a && "function" === typeof a[M])
                if (((a = a[M]()), "function" !== typeof a.subscribe))
                    d.error(
                        new TypeError(
                            "Provided object does not correctly implement Symbol.observable"
                        )
                    );
                else return a.subscribe(new ra(b, c, e));
            else
                d.error(
                    new TypeError(
                        "You provided " +
                            (null != a && "object" === typeof a
                                ? "an invalid object"
                                : "'" + a + "'") +
                            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
                    )
                );
        }
        return null;
    }
    function S() {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        a = null;
        G(b[b.length - 1]) && (a = b.pop());
        return null === a && 1 === b.length
            ? b[0]
            : new K(b, a).lift(new aa(1));
    }
    function sa(b) {
        var a = b.value;
        b = b.subscriber;
        b.closed || (b.next(a), b.complete());
    }
    function ob(b) {
        var a = b.err;
        b = b.subscriber;
        b.closed || b.error(a);
    }
    function ga(b) {
        return !H(b) && 0 <= b - parseFloat(b) + 1;
    }
    function ta() {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        var a = Number.POSITIVE_INFINITY,
            c = null,
            e = b[b.length - 1];
        G(e)
            ? ((c = b.pop()),
              1 < b.length &&
                  "number" === typeof b[b.length - 1] &&
                  (a = b.pop()))
            : "number" === typeof e && (a = b.pop());
        return null === c && 1 === b.length
            ? b[0]
            : new K(b, c).lift(new aa(a));
    }
    function ua() {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        if (1 === b.length)
            if (H(b[0])) b = b[0];
            else return b[0];
        return new K(b).lift(new pb());
    }
    function qb(b) {
        var a = b.obj,
            c = b.keys,
            e = b.index,
            d = b.subscriber;
        e === b.length
            ? d.complete()
            : ((c = c[e]),
              d.next([c, a[c]]),
              (b.index = e + 1),
              this.schedule(b));
    }
    function ba(b) {
        return b instanceof Date && !isNaN(+b);
    }
    function va() {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        a = b[b.length - 1];
        "function" === typeof a && b.pop();
        return new K(b).lift(new wa(a));
    }
    function xa(b, a) {
        if ("function" !== typeof b)
            throw new TypeError(
                "argument is not a function. Are you looking for `mapTo()`?"
            );
        return this.lift(new ya(b, a));
    }
    function rb(b, a) {
        void 0 === a && (a = null);
        return new Q({ method: "GET", url: b, headers: a });
    }
    function sb(b, a, c) {
        return new Q({ method: "POST", url: b, body: a, headers: c });
    }
    function tb(b, a) {
        return new Q({ method: "DELETE", url: b, headers: a });
    }
    function ub(b, a, c) {
        return new Q({ method: "PUT", url: b, body: a, headers: c });
    }
    function vb(b, a) {
        return new Q({
            method: "GET",
            url: b,
            responseType: "json",
            headers: a,
        }).lift(
            new ya(function (c, a) {
                return c.response;
            }, null)
        );
    }
    function wb(b) {
        for (var a = [], c = 1; c < arguments.length; c++)
            a[c - 1] = arguments[c];
        for (var c = a.length, e = 0; e < c; e++) {
            var d = a[e],
                f;
            for (f in d) d.hasOwnProperty(f) && (b[f] = d[f]);
        }
        return b;
    }
    function za(b) {
        var a = b.subscriber,
            c = b.context;
        c && a.closeContext(c);
        a.closed ||
            ((b.context = a.openContext()),
            (b.context.closeAction = this.schedule(b, b.bufferTimeSpan)));
    }
    function xb(b) {
        var a = b.bufferCreationInterval,
            c = b.bufferTimeSpan,
            e = b.subscriber,
            d = b.scheduler,
            f = e.openContext();
        e.closed ||
            (e.add(
                (f.closeAction = d.schedule(Aa, c, {
                    subscriber: e,
                    context: f,
                }))
            ),
            this.schedule(b, a));
    }
    function Aa(b) {
        b.subscriber.closeContext(b.context);
    }
    function Ba(b) {
        b = new yb(b);
        var a = this.lift(b);
        return (b.caught = a);
    }
    function Ca(b, a, c) {
        void 0 === c && (c = Number.POSITIVE_INFINITY);
        "number" === typeof a && ((c = a), (a = null));
        return this.lift(new Da(b, a, c));
    }
    function Ea(b, a, c) {
        void 0 === c && (c = Number.POSITIVE_INFINITY);
        "number" === typeof a && ((c = a), (a = null));
        return this.lift(new Fa(b, a, c));
    }
    function zb(b) {
        b.debouncedNext();
    }
    function Ab() {
        return (function () {
            function b() {
                this._values = [];
            }
            b.prototype.add = function (a) {
                this.has(a) || this._values.push(a);
            };
            b.prototype.has = function (a) {
                return -1 !== this._values.indexOf(a);
            };
            Object.defineProperty(b.prototype, "size", {
                get: function () {
                    return this._values.length;
                },
                enumerable: !0,
                configurable: !0,
            });
            b.prototype.clear = function () {
                this._values.length = 0;
            };
            return b;
        })();
    }
    function Ga(b, a) {
        return this.lift(new Bb(b, a));
    }
    function Ha(b, a, c) {
        return this.lift(new Cb(b, a, c));
    }
    function ha(b, a) {
        return this.lift(new Db(b, a));
    }
    function Ia(b) {
        return this.lift(new Eb(b));
    }
    function Fb(b) {
        b.clearThrottle();
    }
    function Ja(b) {
        return b(this);
    }
    function N(b, a) {
        var c;
        c =
            "function" === typeof b
                ? b
                : function () {
                      return b;
                  };
        if ("function" === typeof a) return this.lift(new Gb(c, a));
        a = Object.create(this, Hb);
        a.source = this;
        a.subjectFactory = c;
        return a;
    }
    function Ib(b, a) {
        function c() {
            return !c.pred.apply(c.thisArg, arguments);
        }
        c.pred = b;
        c.thisArg = a;
        return c;
    }
    function Jb(b, a) {
        return function (c) {
            var e = c;
            for (c = 0; c < a; c++)
                if (((e = e[b[c]]), "undefined" === typeof e)) return;
            return e;
        };
    }
    function Kb(b) {
        var a = b.period;
        b.subscriber.notifyNext();
        this.schedule(b, a);
    }
    function Lb() {
        return new y();
    }
    function Ka() {
        return this.lift(new Mb());
    }
    function Nb(b) {
        b.subscriber.clearThrottle();
    }
    function Ob(b) {
        var a = b.subscriber,
            c = b.windowTimeSpan,
            e = b.window;
        e && e.complete();
        b.window = a.openWindow();
        this.schedule(b, c);
    }
    function Pb(b) {
        var a = b.windowTimeSpan,
            c = b.subscriber,
            e = b.scheduler,
            d = b.windowCreationInterval,
            f = c.openWindow(),
            h = { action: this, subscription: null };
        h.subscription = e.schedule(La, a, {
            subscriber: c,
            window: f,
            context: h,
        });
        this.add(h.subscription);
        this.schedule(b, d);
    }
    function La(b) {
        var a = b.subscriber,
            c = b.window;
        (b = b.context) &&
            b.action &&
            b.subscription &&
            b.action.remove(b.subscription);
        a.closeWindow(c);
    }
    function Ma(b, a) {
        for (var c = 0, e = a.length; c < e; c++)
            for (
                var d = a[c],
                    f = Object.getOwnPropertyNames(d.prototype),
                    h = 0,
                    g = f.length;
                h < g;
                h++
            ) {
                var k = f[h];
                b.prototype[k] = d.prototype[k];
            }
    }
    var r =
        ("object" == typeof window && window.window === window && window) ||
        ("object" == typeof self && self.self === self && self) ||
        ("object" == typeof global && global.global === global && global);
    if (!r)
        throw Error(
            "RxJS could not find any global context (window, self, global)"
        );
    var H =
            Array.isArray ||
            function (b) {
                return b && "number" === typeof b.length;
            },
        n = { e: {} },
        qa,
        ia = (function (b) {
            function a(c) {
                b.call(this);
                this.errors = c;
                c = Error.call(
                    this,
                    c
                        ? c.length +
                              " errors occurred during unsubscription:\n  " +
                              c
                                  .map(function (c, a) {
                                      return a + 1 + ") " + c.toString();
                                  })
                                  .join("\n  ")
                        : ""
                );
                this.name = c.name = "UnsubscriptionError";
                this.stack = c.stack;
                this.message = c.message;
            }
            __extends(a, b);
            return a;
        })(Error),
        x = (function () {
            function b(a) {
                this.closed = !1;
                a && (this._unsubscribe = a);
            }
            b.prototype.unsubscribe = function () {
                var a = !1,
                    c;
                if (!this.closed) {
                    this.closed = !0;
                    var b = this._unsubscribe,
                        d = this._subscriptions;
                    this._subscriptions = null;
                    if (m(b)) {
                        var f = k(b).call(this);
                        f === n && ((a = !0), (c = c || []).push(n.e));
                    }
                    if (H(d))
                        for (var b = -1, h = d.length; ++b < h; )
                            (f = d[b]),
                                null != f &&
                                    "object" === typeof f &&
                                    ((f = k(f.unsubscribe).call(f)),
                                    f === n &&
                                        ((a = !0),
                                        (c = c || []),
                                        (f = n.e),
                                        f instanceof ia
                                            ? (c = c.concat(f.errors))
                                            : c.push(f)));
                    if (a) throw new ia(c);
                }
            };
            b.prototype.add = function (a) {
                if (!a || a === b.EMPTY) return b.EMPTY;
                if (a === this) return this;
                var c = a;
                switch (typeof a) {
                    case "function":
                        c = new b(a);
                    case "object":
                        c.closed ||
                            "function" !== typeof c.unsubscribe ||
                            (this.closed
                                ? c.unsubscribe()
                                : (
                                      this._subscriptions ||
                                      (this._subscriptions = [])
                                  ).push(c));
                        break;
                    default:
                        throw Error(
                            "unrecognized teardown " +
                                a +
                                " added to Subscription."
                        );
                }
                return c;
            };
            b.prototype.remove = function (a) {
                if (null != a && a !== this && a !== b.EMPTY) {
                    var c = this._subscriptions;
                    c && ((a = c.indexOf(a)), -1 !== a && c.splice(a, 1));
                }
            };
            b.EMPTY = (function (a) {
                a.closed = !0;
                return a;
            })(new b());
            return b;
        })(),
        ja = {
            closed: !0,
            next: function (b) {},
            error: function (b) {
                throw b;
            },
            complete: function () {},
        },
        ka = r.Symbol,
        T =
            "function" === typeof ka && "function" === typeof ka.for
                ? ka.for("rxSubscriber")
                : "@@rxSubscriber",
        p = (function (b) {
            function a(c, e, d) {
                b.call(this);
                this.syncErrorValue = null;
                this.isStopped =
                    this.syncErrorThrowable =
                    this.syncErrorThrown =
                        !1;
                switch (arguments.length) {
                    case 0:
                        this.destination = ja;
                        break;
                    case 1:
                        if (!c) {
                            this.destination = ja;
                            break;
                        }
                        if ("object" === typeof c) {
                            c instanceof a
                                ? ((this.destination = c),
                                  this.destination.add(this))
                                : ((this.syncErrorThrowable = !0),
                                  (this.destination = new Na(this, c)));
                            break;
                        }
                    default:
                        (this.syncErrorThrowable = !0),
                            (this.destination = new Na(this, c, e, d));
                }
            }
            __extends(a, b);
            a.prototype[T] = function () {
                return this;
            };
            a.create = function (c, b, d) {
                c = new a(c, b, d);
                c.syncErrorThrowable = !1;
                return c;
            };
            a.prototype.next = function (c) {
                this.isStopped || this._next(c);
            };
            a.prototype.error = function (c) {
                this.isStopped || ((this.isStopped = !0), this._error(c));
            };
            a.prototype.complete = function () {
                this.isStopped || ((this.isStopped = !0), this._complete());
            };
            a.prototype.unsubscribe = function () {
                this.closed ||
                    ((this.isStopped = !0), b.prototype.unsubscribe.call(this));
            };
            a.prototype._next = function (c) {
                this.destination.next(c);
            };
            a.prototype._error = function (c) {
                this.destination.error(c);
                this.unsubscribe();
            };
            a.prototype._complete = function () {
                this.destination.complete();
                this.unsubscribe();
            };
            return a;
        })(x),
        Na = (function (b) {
            function a(c, a, d, f) {
                b.call(this);
                this._parent = c;
                var e;
                c = this;
                m(a)
                    ? (e = a)
                    : a &&
                      ((c = a),
                      (e = a.next),
                      (d = a.error),
                      (f = a.complete),
                      m(c.unsubscribe) && this.add(c.unsubscribe.bind(c)),
                      (c.unsubscribe = this.unsubscribe.bind(this)));
                this._context = c;
                this._next = e;
                this._error = d;
                this._complete = f;
            }
            __extends(a, b);
            a.prototype.next = function (c) {
                if (!this.isStopped && this._next) {
                    var a = this._parent;
                    a.syncErrorThrowable
                        ? this.__tryOrSetError(a, this._next, c) &&
                          this.unsubscribe()
                        : this.__tryOrUnsub(this._next, c);
                }
            };
            a.prototype.error = function (c) {
                if (!this.isStopped) {
                    var a = this._parent;
                    if (this._error)
                        a.syncErrorThrowable
                            ? this.__tryOrSetError(a, this._error, c)
                            : this.__tryOrUnsub(this._error, c),
                            this.unsubscribe();
                    else if (a.syncErrorThrowable)
                        (a.syncErrorValue = c),
                            (a.syncErrorThrown = !0),
                            this.unsubscribe();
                    else throw (this.unsubscribe(), c);
                }
            };
            a.prototype.complete = function () {
                if (!this.isStopped) {
                    var c = this._parent;
                    this._complete &&
                        (c.syncErrorThrowable
                            ? this.__tryOrSetError(c, this._complete)
                            : this.__tryOrUnsub(this._complete));
                    this.unsubscribe();
                }
            };
            a.prototype.__tryOrUnsub = function (c, a) {
                try {
                    c.call(this._context, a);
                } catch (d) {
                    throw (this.unsubscribe(), d);
                }
            };
            a.prototype.__tryOrSetError = function (c, a, b) {
                try {
                    a.call(this._context, b);
                } catch (f) {
                    return (c.syncErrorValue = f), (c.syncErrorThrown = !0);
                }
                return !1;
            };
            a.prototype._unsubscribe = function () {
                var c = this._parent;
                this._parent = this._context = null;
                c.unsubscribe();
            };
            return a;
        })(p),
        M = (function (b) {
            var a = b.Symbol;
            "function" === typeof a
                ? a.observable
                    ? (b = a.observable)
                    : ((b = a("observable")), (a.observable = b))
                : (b = "@@observable");
            return b;
        })(r),
        g = (function () {
            function b(a) {
                this._isScalar = !1;
                a && (this._subscribe = a);
            }
            b.prototype.lift = function (a) {
                var c = new b();
                c.source = this;
                c.operator = a;
                return c;
            };
            b.prototype.subscribe = function (a, c, b) {
                var e = this.operator;
                a: {
                    if (a) {
                        if (a instanceof p) break a;
                        if (a[T]) {
                            a = a[T]();
                            break a;
                        }
                    }
                    a = a || c || b ? new p(a, c, b) : new p(ja);
                }
                e ? e.call(a, this.source) : a.add(this._subscribe(a));
                if (
                    a.syncErrorThrowable &&
                    ((a.syncErrorThrowable = !1), a.syncErrorThrown)
                )
                    throw a.syncErrorValue;
                return a;
            };
            b.prototype.forEach = function (a, c) {
                var b = this;
                c ||
                    (r.Rx && r.Rx.config && r.Rx.config.Promise
                        ? (c = r.Rx.config.Promise)
                        : r.Promise && (c = r.Promise));
                if (!c) throw Error("no Promise impl found");
                return new c(function (c, e) {
                    var d = b.subscribe(
                        function (c) {
                            if (d)
                                try {
                                    a(c);
                                } catch (B) {
                                    e(B), d.unsubscribe();
                                }
                            else a(c);
                        },
                        e,
                        c
                    );
                });
            };
            b.prototype._subscribe = function (a) {
                return this.source.subscribe(a);
            };
            b.prototype[M] = function () {
                return this;
            };
            b.create = function (a) {
                return new b(a);
            };
            return b;
        })(),
        O = (function (b) {
            function a() {
                var c = b.call(this, "object unsubscribed");
                this.name = c.name = "ObjectUnsubscribedError";
                this.stack = c.stack;
                this.message = c.message;
            }
            __extends(a, b);
            return a;
        })(Error),
        Oa = (function (b) {
            function a(c, a) {
                b.call(this);
                this.subject = c;
                this.subscriber = a;
                this.closed = !1;
            }
            __extends(a, b);
            a.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var c = this.subject,
                        a = c.observers;
                    this.subject = null;
                    !a ||
                        0 === a.length ||
                        c.isStopped ||
                        c.closed ||
                        ((c = a.indexOf(this.subscriber)),
                        -1 !== c && a.splice(c, 1));
                }
            };
            return a;
        })(x),
        Pa = (function (b) {
            function a(c) {
                b.call(this, c);
                this.destination = c;
            }
            __extends(a, b);
            return a;
        })(p),
        y = (function (b) {
            function a() {
                b.call(this);
                this.observers = [];
                this.hasError = this.isStopped = this.closed = !1;
                this.thrownError = null;
            }
            __extends(a, b);
            a.prototype[T] = function () {
                return new Pa(this);
            };
            a.prototype.lift = function (c) {
                var a = new ca(this, this);
                a.operator = c;
                return a;
            };
            a.prototype.next = function (c) {
                if (this.closed) throw new O();
                if (!this.isStopped)
                    for (
                        var a = this.observers,
                            b = a.length,
                            a = a.slice(),
                            f = 0;
                        f < b;
                        f++
                    )
                        a[f].next(c);
            };
            a.prototype.error = function (c) {
                if (this.closed) throw new O();
                this.hasError = !0;
                this.thrownError = c;
                this.isStopped = !0;
                for (
                    var a = this.observers, b = a.length, a = a.slice(), f = 0;
                    f < b;
                    f++
                )
                    a[f].error(c);
                this.observers.length = 0;
            };
            a.prototype.complete = function () {
                if (this.closed) throw new O();
                this.isStopped = !0;
                for (
                    var c = this.observers, a = c.length, c = c.slice(), b = 0;
                    b < a;
                    b++
                )
                    c[b].complete();
                this.observers.length = 0;
            };
            a.prototype.unsubscribe = function () {
                this.closed = this.isStopped = !0;
                this.observers = null;
            };
            a.prototype._subscribe = function (c) {
                if (this.closed) throw new O();
                if (this.hasError) return c.error(this.thrownError), x.EMPTY;
                if (this.isStopped) return c.complete(), x.EMPTY;
                this.observers.push(c);
                return new Oa(this, c);
            };
            a.prototype.asObservable = function () {
                var c = new g();
                c.source = this;
                return c;
            };
            a.create = function (c, a) {
                return new ca(c, a);
            };
            return a;
        })(g),
        ca = (function (b) {
            function a(c, a) {
                b.call(this);
                this.destination = c;
                this.source = a;
            }
            __extends(a, b);
            a.prototype.next = function (c) {
                var a = this.destination;
                a && a.next && a.next(c);
            };
            a.prototype.error = function (c) {
                var a = this.destination;
                a && a.error && this.destination.error(c);
            };
            a.prototype.complete = function () {
                var c = this.destination;
                c && c.complete && this.destination.complete();
            };
            a.prototype._subscribe = function (c) {
                return this.source ? this.source.subscribe(c) : x.EMPTY;
            };
            return a;
        })(y),
        P = (function (b) {
            function a() {
                b.apply(this, arguments);
                this.value = null;
                this.hasCompleted = this.hasNext = !1;
            }
            __extends(a, b);
            a.prototype._subscribe = function (c) {
                return this.hasCompleted && this.hasNext
                    ? (c.next(this.value), c.complete(), x.EMPTY)
                    : this.hasError
                    ? (c.error(this.thrownError), x.EMPTY)
                    : b.prototype._subscribe.call(this, c);
            };
            a.prototype.next = function (c) {
                this.hasCompleted || ((this.value = c), (this.hasNext = !0));
            };
            a.prototype.complete = function () {
                this.hasCompleted = !0;
                this.hasNext && b.prototype.next.call(this, this.value);
                b.prototype.complete.call(this);
            };
            return a;
        })(y),
        Qb = (function (b) {
            function a(c, a, d, f) {
                b.call(this);
                this.callbackFunc = c;
                this.selector = a;
                this.args = d;
                this.scheduler = f;
            }
            __extends(a, b);
            a.create = function (c, b, d) {
                void 0 === b && (b = void 0);
                return function () {
                    for (var e = [], h = 0; h < arguments.length; h++)
                        e[h - 0] = arguments[h];
                    return new a(c, b, e, d);
                };
            };
            a.prototype._subscribe = function (c) {
                var b = this.callbackFunc,
                    d = this.args,
                    f = this.scheduler,
                    h = this.subject;
                if (f)
                    return f.schedule(a.dispatch, 0, {
                        source: this,
                        subscriber: c,
                    });
                h ||
                    ((h = this.subject = new P()),
                    (f = function B() {
                        for (var c = [], a = 0; a < arguments.length; a++)
                            c[a - 0] = arguments[a];
                        var b = B.source,
                            a = b.selector,
                            b = b.subject;
                        a
                            ? ((c = k(a).apply(this, c)),
                              c === n
                                  ? b.error(n.e)
                                  : (b.next(c), b.complete()))
                            : (b.next(1 === c.length ? c[0] : c), b.complete());
                    }),
                    (f.source = this),
                    k(b).apply(this, d.concat(f)) === n && h.error(n.e));
                return h.subscribe(c);
            };
            a.dispatch = function (c) {
                var a = this,
                    b = c.source;
                c = c.subscriber;
                var f = b.callbackFunc,
                    h = b.args,
                    g = b.scheduler,
                    B = b.subject;
                if (!B) {
                    var B = (b.subject = new P()),
                        l = function nb() {
                            for (var c = [], b = 0; b < arguments.length; b++)
                                c[b - 0] = arguments[b];
                            var e = nb.source,
                                b = e.selector,
                                e = e.subject;
                            b
                                ? ((c = k(b).apply(this, c)),
                                  c === n
                                      ? a.add(
                                            g.schedule(w, 0, {
                                                err: n.e,
                                                subject: e,
                                            })
                                        )
                                      : a.add(
                                            g.schedule(E, 0, {
                                                value: c,
                                                subject: e,
                                            })
                                        ))
                                : a.add(
                                      g.schedule(E, 0, {
                                          value: 1 === c.length ? c[0] : c,
                                          subject: e,
                                      })
                                  );
                        };
                    l.source = b;
                    k(f).apply(this, h.concat(l)) === n && B.error(n.e);
                }
                a.add(B.subscribe(c));
            };
            return a;
        })(g).create;
    g.bindCallback = Qb;
    var Rb = (function (b) {
        function a(c, a, d, f) {
            b.call(this);
            this.callbackFunc = c;
            this.selector = a;
            this.args = d;
            this.scheduler = f;
        }
        __extends(a, b);
        a.create = function (c, b, d) {
            void 0 === b && (b = void 0);
            return function () {
                for (var e = [], h = 0; h < arguments.length; h++)
                    e[h - 0] = arguments[h];
                return new a(c, b, e, d);
            };
        };
        a.prototype._subscribe = function (c) {
            var a = this.callbackFunc,
                b = this.args,
                f = this.scheduler,
                h = this.subject;
            if (f) return f.schedule(A, 0, { source: this, subscriber: c });
            h ||
                ((h = this.subject = new P()),
                (f = function B() {
                    for (var c = [], a = 0; a < arguments.length; a++)
                        c[a - 0] = arguments[a];
                    var b = B.source,
                        a = b.selector,
                        b = b.subject,
                        e = c.shift();
                    e
                        ? b.error(e)
                        : a
                        ? ((c = k(a).apply(this, c)),
                          c === n ? b.error(n.e) : (b.next(c), b.complete()))
                        : (b.next(1 === c.length ? c[0] : c), b.complete());
                }),
                (f.source = this),
                k(a).apply(this, b.concat(f)) === n && h.error(n.e));
            return h.subscribe(c);
        };
        return a;
    })(g).create;
    g.bindNodeCallback = Rb;
    var la = (function (b) {
            function a(c, a) {
                b.call(this);
                this.value = c;
                this.scheduler = a;
                this._isScalar = !0;
                a && (this._isScalar = !1);
            }
            __extends(a, b);
            a.create = function (c, b) {
                return new a(c, b);
            };
            a.dispatch = function (c) {
                var a = c.value,
                    b = c.subscriber;
                c.done
                    ? b.complete()
                    : (b.next(a),
                      b.closed || ((c.done = !0), this.schedule(c)));
            };
            a.prototype._subscribe = function (c) {
                var b = this.value,
                    d = this.scheduler;
                if (d)
                    return d.schedule(a.dispatch, 0, {
                        done: !1,
                        value: b,
                        subscriber: c,
                    });
                c.next(b);
                c.closed || c.complete();
            };
            return a;
        })(g),
        L = (function (b) {
            function a(c) {
                b.call(this);
                this.scheduler = c;
            }
            __extends(a, b);
            a.create = function (c) {
                return new a(c);
            };
            a.dispatch = function (c) {
                c.subscriber.complete();
            };
            a.prototype._subscribe = function (c) {
                var b = this.scheduler;
                if (b) return b.schedule(a.dispatch, 0, { subscriber: c });
                c.complete();
            };
            return a;
        })(g),
        K = (function (b) {
            function a(c, a) {
                b.call(this);
                this.array = c;
                this.scheduler = a;
                a ||
                    1 !== c.length ||
                    ((this._isScalar = !0), (this.value = c[0]));
            }
            __extends(a, b);
            a.create = function (c, b) {
                return new a(c, b);
            };
            a.of = function () {
                for (var c = [], b = 0; b < arguments.length; b++)
                    c[b - 0] = arguments[b];
                b = c[c.length - 1];
                G(b) ? c.pop() : (b = null);
                var d = c.length;
                return 1 < d
                    ? new a(c, b)
                    : 1 === d
                    ? new la(c[0], b)
                    : new L(b);
            };
            a.dispatch = function (c) {
                var a = c.array,
                    b = c.index,
                    f = c.subscriber;
                b >= c.count
                    ? f.complete()
                    : (f.next(a[b]),
                      f.closed || ((c.index = b + 1), this.schedule(c)));
            };
            a.prototype._subscribe = function (c) {
                var b = this.array,
                    d = b.length,
                    f = this.scheduler;
                if (f)
                    return f.schedule(a.dispatch, 0, {
                        array: b,
                        index: 0,
                        count: d,
                        subscriber: c,
                    });
                for (f = 0; f < d && !c.closed; f++) c.next(b[f]);
                c.complete();
            };
            return a;
        })(g),
        t = (function (b) {
            function a() {
                b.apply(this, arguments);
            }
            __extends(a, b);
            a.prototype.notifyNext = function (c, a, b, f, h) {
                this.destination.next(a);
            };
            a.prototype.notifyError = function (c, a) {
                this.destination.error(c);
            };
            a.prototype.notifyComplete = function (c) {
                this.destination.complete();
            };
            return a;
        })(p),
        I = (function (b) {
            var a = b.Symbol;
            if ("function" === typeof a)
                return (
                    a.iterator || (a.iterator = a("iterator polyfill")),
                    a.iterator
                );
            if ((a = b.Set) && "function" === typeof new a()["@@iterator"])
                return "@@iterator";
            if ((b = b.Map))
                for (
                    var a = Object.getOwnPropertyNames(b.prototype), c = 0;
                    c < a.length;
                    ++c
                ) {
                    var e = a[c];
                    if (
                        "entries" !== e &&
                        "size" !== e &&
                        b.prototype[e] === b.prototype.entries
                    )
                        return e;
                }
            return "@@iterator";
        })(r),
        ra = (function (b) {
            function a(c, a, d) {
                b.call(this);
                this.parent = c;
                this.outerValue = a;
                this.outerIndex = d;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                this.parent.notifyNext(
                    this.outerValue,
                    c,
                    this.outerIndex,
                    this.index++,
                    this
                );
            };
            a.prototype._error = function (c) {
                this.parent.notifyError(c, this);
                this.unsubscribe();
            };
            a.prototype._complete = function () {
                this.parent.notifyComplete(this);
                this.unsubscribe();
            };
            return a;
        })(p),
        Qa = {},
        ma = (function () {
            function b(a) {
                this.project = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Sb(a, this.project));
            };
            return b;
        })(),
        Sb = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.project = a;
                this.active = 0;
                this.values = [];
                this.observables = [];
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                this.values.push(Qa);
                this.observables.push(c);
            };
            a.prototype._complete = function () {
                var c = this.observables,
                    a = c.length;
                if (0 === a) this.destination.complete();
                else {
                    this.toRespond = this.active = a;
                    for (var b = 0; b < a; b++) {
                        var f = c[b];
                        this.add(q(this, f, f, b));
                    }
                }
            };
            a.prototype.notifyComplete = function (c) {
                0 === --this.active && this.destination.complete();
            };
            a.prototype.notifyNext = function (c, a, b, f, h) {
                c = this.values;
                f = c[b];
                f = this.toRespond
                    ? f === Qa
                        ? --this.toRespond
                        : this.toRespond
                    : 0;
                c[b] = a;
                0 === f &&
                    (this.project
                        ? this._tryProject(c)
                        : this.destination.next(c.slice()));
            };
            a.prototype._tryProject = function (c) {
                var a;
                try {
                    a = this.project.apply(this, c);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.destination.next(a);
            };
            return a;
        })(t);
    g.combineLatest = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        var c = (a = null);
        G(b[b.length - 1]) && (c = b.pop());
        "function" === typeof b[b.length - 1] && (a = b.pop());
        1 === b.length && H(b[0]) && (b = b[0]);
        return new K(b, c).lift(new ma(a));
    };
    var aa = (function () {
            function b(a) {
                this.concurrent = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Tb(a, this.concurrent));
            };
            return b;
        })(),
        Tb = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.concurrent = a;
                this.hasCompleted = !1;
                this.buffer = [];
                this.active = 0;
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                this.active < this.concurrent
                    ? (this.active++, this.add(q(this, c)))
                    : this.buffer.push(c);
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                0 === this.active &&
                    0 === this.buffer.length &&
                    this.destination.complete();
            };
            a.prototype.notifyComplete = function (c) {
                var a = this.buffer;
                this.remove(c);
                this.active--;
                0 < a.length
                    ? this._next(a.shift())
                    : 0 === this.active &&
                      this.hasCompleted &&
                      this.destination.complete();
            };
            return a;
        })(t);
    g.concat = S;
    var Vb = (function (b) {
            function a(c) {
                b.call(this);
                this.observableFactory = c;
            }
            __extends(a, b);
            a.create = function (c) {
                return new a(c);
            };
            a.prototype._subscribe = function (c) {
                return new Ub(c, this.observableFactory);
            };
            return a;
        })(g),
        Ub = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.factory = a;
                this.tryDefer();
            }
            __extends(a, b);
            a.prototype.tryDefer = function () {
                try {
                    this._callFactory();
                } catch (c) {
                    this._error(c);
                }
            };
            a.prototype._callFactory = function () {
                var c = this.factory();
                c && this.add(q(this, c));
            };
            return a;
        })(t);
    g.defer = Vb.create;
    g.empty = L.create;
    var Xb = (function (b) {
            function a(c, a) {
                b.call(this);
                this.sources = c;
                this.resultSelector = a;
            }
            __extends(a, b);
            a.create = function () {
                for (var c = [], b = 0; b < arguments.length; b++)
                    c[b - 0] = arguments[b];
                if (null === c || 0 === arguments.length) return new L();
                b = null;
                "function" === typeof c[c.length - 1] && (b = c.pop());
                1 === c.length && H(c[0]) && (c = c[0]);
                return 0 === c.length ? new L() : new a(c, b);
            };
            a.prototype._subscribe = function (c) {
                return new Wb(c, this.sources, this.resultSelector);
            };
            return a;
        })(g),
        Wb = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.sources = a;
                this.resultSelector = d;
                this.haveValues = this.completed = 0;
                this.total = c = a.length;
                this.values = Array(c);
                for (d = 0; d < c; d++) {
                    var e = q(this, a[d], null, d);
                    e && ((e.outerIndex = d), this.add(e));
                }
            }
            __extends(a, b);
            a.prototype.notifyNext = function (c, a, b, f, h) {
                this.values[b] = a;
                h._hasValue || ((h._hasValue = !0), this.haveValues++);
            };
            a.prototype.notifyComplete = function (c) {
                var a = this.destination,
                    b = this.haveValues,
                    f = this.resultSelector,
                    h = this.values,
                    g = h.length;
                c._hasValue
                    ? (this.completed++,
                      this.completed === g &&
                          (b === g &&
                              ((c = f ? f.apply(this, h) : h), a.next(c)),
                          a.complete()))
                    : a.complete();
            };
            return a;
        })(t);
    g.forkJoin = Xb.create;
    var Ra = (function (b) {
            function a(c, a) {
                b.call(this);
                this.promise = c;
                this.scheduler = a;
            }
            __extends(a, b);
            a.create = function (c, b) {
                return new a(c, b);
            };
            a.prototype._subscribe = function (c) {
                var a = this,
                    b = this.promise,
                    f = this.scheduler;
                if (null == f)
                    this._isScalar
                        ? c.closed || (c.next(this.value), c.complete())
                        : b
                              .then(
                                  function (b) {
                                      a.value = b;
                                      a._isScalar = !0;
                                      c.closed || (c.next(b), c.complete());
                                  },
                                  function (a) {
                                      c.closed || c.error(a);
                                  }
                              )
                              .then(null, function (c) {
                                  r.setTimeout(function () {
                                      throw c;
                                  });
                              });
                else if (this._isScalar) {
                    if (!c.closed)
                        return f.schedule(sa, 0, {
                            value: this.value,
                            subscriber: c,
                        });
                } else
                    b.then(
                        function (b) {
                            a.value = b;
                            a._isScalar = !0;
                            c.closed ||
                                c.add(
                                    f.schedule(sa, 0, {
                                        value: b,
                                        subscriber: c,
                                    })
                                );
                        },
                        function (a) {
                            c.closed ||
                                c.add(
                                    f.schedule(ob, 0, { err: a, subscriber: c })
                                );
                        }
                    ).then(null, function (c) {
                        r.setTimeout(function () {
                            throw c;
                        });
                    });
            };
            return a;
        })(g),
        $b = (function (b) {
            function a(c, a) {
                b.call(this);
                this.scheduler = a;
                if (null == c) throw Error("iterator cannot be null.");
                if ((a = c[I]) || "string" !== typeof c)
                    if (a || void 0 === c.length) {
                        if (!a) throw new TypeError("object is not iterable");
                        c = c[I]();
                    } else c = new Yb(c);
                else c = new Zb(c);
                this.iterator = c;
            }
            __extends(a, b);
            a.create = function (c, b) {
                return new a(c, b);
            };
            a.dispatch = function (c) {
                var a = c.index,
                    b = c.iterator,
                    f = c.subscriber;
                if (c.hasError) f.error(c.error);
                else {
                    var h = b.next();
                    h.done
                        ? f.complete()
                        : (f.next(h.value),
                          (c.index = a + 1),
                          f.closed
                              ? "function" === typeof b.return && b.return()
                              : this.schedule(c));
                }
            };
            a.prototype._subscribe = function (c) {
                var b = this.iterator,
                    d = this.scheduler;
                if (d)
                    return d.schedule(a.dispatch, 0, {
                        index: 0,
                        iterator: b,
                        subscriber: c,
                    });
                do {
                    d = b.next();
                    if (d.done) {
                        c.complete();
                        break;
                    } else c.next(d.value);
                    if (c.closed) {
                        "function" === typeof b.return && b.return();
                        break;
                    }
                } while (1);
            };
            return a;
        })(g),
        Zb = (function () {
            function b(a, c, b) {
                void 0 === c && (c = 0);
                void 0 === b && (b = a.length);
                this.str = a;
                this.idx = c;
                this.len = b;
            }
            b.prototype[I] = function () {
                return this;
            };
            b.prototype.next = function () {
                return this.idx < this.len
                    ? { done: !1, value: this.str.charAt(this.idx++) }
                    : { done: !0, value: void 0 };
            };
            return b;
        })(),
        Yb = (function () {
            function b(a, c, b) {
                void 0 === c && (c = 0);
                if (void 0 === b)
                    if (((b = +a.length), isNaN(b))) b = 0;
                    else if (
                        0 !== b &&
                        "number" === typeof b &&
                        r.isFinite(b)
                    ) {
                        var e;
                        e = +b;
                        e = 0 === e ? e : isNaN(e) ? e : 0 > e ? -1 : 1;
                        b = e * Math.floor(Math.abs(b));
                        b = 0 >= b ? 0 : b > Sa ? Sa : b;
                    }
                this.arr = a;
                this.idx = c;
                this.len = b;
            }
            b.prototype[I] = function () {
                return this;
            };
            b.prototype.next = function () {
                return this.idx < this.len
                    ? { done: !1, value: this.arr[this.idx++] }
                    : { done: !0, value: void 0 };
            };
            return b;
        })(),
        Sa = Math.pow(2, 53) - 1,
        ac = (function (b) {
            function a(c, a) {
                b.call(this);
                this.arrayLike = c;
                this.scheduler = a;
                a ||
                    1 !== c.length ||
                    ((this._isScalar = !0), (this.value = c[0]));
            }
            __extends(a, b);
            a.create = function (c, b) {
                var e = c.length;
                return 0 === e
                    ? new L()
                    : 1 === e
                    ? new la(c[0], b)
                    : new a(c, b);
            };
            a.dispatch = function (c) {
                var a = c.arrayLike,
                    b = c.index,
                    f = c.subscriber;
                f.closed ||
                    (b >= c.length
                        ? f.complete()
                        : (f.next(a[b]), (c.index = b + 1), this.schedule(c)));
            };
            a.prototype._subscribe = function (c) {
                var b = this.arrayLike,
                    d = this.scheduler,
                    f = b.length;
                if (d)
                    return d.schedule(a.dispatch, 0, {
                        arrayLike: b,
                        index: 0,
                        length: f,
                        subscriber: c,
                    });
                for (d = 0; d < f && !c.closed; d++) c.next(b[d]);
                c.complete();
            };
            return a;
        })(g),
        z = (function () {
            function b(a, c, b) {
                this.kind = a;
                this.value = c;
                this.error = b;
                this.hasValue = "N" === a;
            }
            b.prototype.observe = function (a) {
                switch (this.kind) {
                    case "N":
                        return a.next && a.next(this.value);
                    case "E":
                        return a.error && a.error(this.error);
                    case "C":
                        return a.complete && a.complete();
                }
            };
            b.prototype.do = function (a, c, b) {
                switch (this.kind) {
                    case "N":
                        return a && a(this.value);
                    case "E":
                        return c && c(this.error);
                    case "C":
                        return b && b();
                }
            };
            b.prototype.accept = function (a, c, b) {
                return a && "function" === typeof a.next
                    ? this.observe(a)
                    : this.do(a, c, b);
            };
            b.prototype.toObservable = function () {
                switch (this.kind) {
                    case "N":
                        return g.of(this.value);
                    case "E":
                        return g.throw(this.error);
                    case "C":
                        return g.empty();
                }
                throw Error("unexpected notification kind value");
            };
            b.createNext = function (a) {
                return "undefined" !== typeof a
                    ? new b("N", a)
                    : this.undefinedValueNotification;
            };
            b.createError = function (a) {
                return new b("E", void 0, a);
            };
            b.createComplete = function () {
                return this.completeNotification;
            };
            b.completeNotification = new b("C");
            b.undefinedValueNotification = new b("N", void 0);
            return b;
        })(),
        bc = (function () {
            function b(a, c) {
                void 0 === c && (c = 0);
                this.scheduler = a;
                this.delay = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new na(a, this.scheduler, this.delay));
            };
            return b;
        })(),
        na = (function (b) {
            function a(c, a, d) {
                void 0 === d && (d = 0);
                b.call(this, c);
                this.scheduler = a;
                this.delay = d;
            }
            __extends(a, b);
            a.dispatch = function (c) {
                c.notification.observe(c.destination);
            };
            a.prototype.scheduleMessage = function (c) {
                this.add(
                    this.scheduler.schedule(
                        a.dispatch,
                        this.delay,
                        new cc(c, this.destination)
                    )
                );
            };
            a.prototype._next = function (c) {
                this.scheduleMessage(z.createNext(c));
            };
            a.prototype._error = function (c) {
                this.scheduleMessage(z.createError(c));
            };
            a.prototype._complete = function () {
                this.scheduleMessage(z.createComplete());
            };
            return a;
        })(p),
        cc = (function () {
            return function (b, a) {
                this.notification = b;
                this.destination = a;
            };
        })(),
        Ta = (function (b) {
            function a(c, a) {
                b.call(this, null);
                this.ish = c;
                this.scheduler = a;
            }
            __extends(a, b);
            a.create = function (c, b) {
                if (null != c) {
                    if ("function" === typeof c[M])
                        return c instanceof g && !b ? c : new a(c, b);
                    if (H(c)) return new K(c, b);
                    if (Z(c)) return new Ra(c, b);
                    if ("function" === typeof c[I] || "string" === typeof c)
                        return new $b(c, b);
                    if (c && "number" === typeof c.length) return new ac(c, b);
                }
                throw new TypeError(
                    ((null !== c && typeof c) || c) + " is not observable"
                );
            };
            a.prototype._subscribe = function (c) {
                var a = this.ish,
                    b = this.scheduler;
                return null == b
                    ? a[M]().subscribe(c)
                    : a[M]().subscribe(new na(c, b, 0));
            };
            return a;
        })(g);
    g.from = Ta.create;
    var Ua = Object.prototype.toString,
        dc = (function (b) {
            function a(c, a, d, f) {
                b.call(this);
                this.sourceObj = c;
                this.eventName = a;
                this.selector = d;
                this.options = f;
            }
            __extends(a, b);
            a.create = function (c, b, d, f) {
                m(d) && ((f = d), (d = void 0));
                return new a(c, b, f, d);
            };
            a.setupSubscription = function (c, b, d, f, h) {
                var e;
                if (
                    (c && "[object NodeList]" === Ua.call(c)) ||
                    (c && "[object HTMLCollection]" === Ua.call(c))
                )
                    for (var g = 0, k = c.length; g < k; g++)
                        a.setupSubscription(c[g], b, d, f, h);
                else if (
                    c &&
                    "function" === typeof c.addEventListener &&
                    "function" === typeof c.removeEventListener
                )
                    c.addEventListener(b, d, h),
                        (e = function () {
                            return c.removeEventListener(b, d);
                        });
                else if (
                    c &&
                    "function" === typeof c.on &&
                    "function" === typeof c.off
                )
                    c.on(b, d),
                        (e = function () {
                            return c.off(b, d);
                        });
                else if (
                    c &&
                    "function" === typeof c.addListener &&
                    "function" === typeof c.removeListener
                )
                    c.addListener(b, d),
                        (e = function () {
                            return c.removeListener(b, d);
                        });
                else throw new TypeError("Invalid event target");
                f.add(new x(e));
            };
            a.prototype._subscribe = function (c) {
                var b = this.selector;
                a.setupSubscription(
                    this.sourceObj,
                    this.eventName,
                    b
                        ? function () {
                              for (var a = [], e = 0; e < arguments.length; e++)
                                  a[e - 0] = arguments[e];
                              a = k(b).apply(void 0, a);
                              a === n ? c.error(n.e) : c.next(a);
                          }
                        : function (a) {
                              return c.next(a);
                          },
                    c,
                    this.options
                );
            };
            return a;
        })(g).create;
    g.fromEvent = dc;
    var ec = (function (b) {
        function a(c, a, d) {
            b.call(this);
            this.addHandler = c;
            this.removeHandler = a;
            this.selector = d;
        }
        __extends(a, b);
        a.create = function (c, b, d) {
            return new a(c, b, d);
        };
        a.prototype._subscribe = function (c) {
            var a = this,
                b = this.removeHandler,
                f = this.selector
                    ? function () {
                          for (var b = [], e = 0; e < arguments.length; e++)
                              b[e - 0] = arguments[e];
                          a._callSelector(c, b);
                      }
                    : function (a) {
                          c.next(a);
                      };
            this._callAddHandler(f, c);
            c.add(
                new x(function () {
                    b(f);
                })
            );
        };
        a.prototype._callSelector = function (c, a) {
            try {
                var b = this.selector.apply(this, a);
                c.next(b);
            } catch (f) {
                c.error(f);
            }
        };
        a.prototype._callAddHandler = function (c, a) {
            try {
                this.addHandler(c);
            } catch (d) {
                a.error(d);
            }
        };
        return a;
    })(g).create;
    g.fromEventPattern = ec;
    g.fromPromise = Ra.create;
    var Va = function (b) {
            return b;
        },
        fc = (function (b) {
            function a(c, a, d, f, h) {
                b.call(this);
                this.initialState = c;
                this.condition = a;
                this.iterate = d;
                this.resultSelector = f;
                this.scheduler = h;
            }
            __extends(a, b);
            a.create = function (c, b, d, f, h) {
                return 1 == arguments.length
                    ? new a(
                          c.initialState,
                          c.condition,
                          c.iterate,
                          c.resultSelector || Va,
                          c.scheduler
                      )
                    : void 0 === f || G(f)
                    ? new a(c, b, d, Va, f)
                    : new a(c, b, d, f, h);
            };
            a.prototype._subscribe = function (c) {
                var b = this.initialState;
                if (this.scheduler)
                    return this.scheduler.schedule(a.dispatch, 0, {
                        subscriber: c,
                        iterate: this.iterate,
                        condition: this.condition,
                        resultSelector: this.resultSelector,
                        state: b,
                    });
                var d = this.condition,
                    f = this.resultSelector,
                    h = this.iterate;
                do {
                    if (d) {
                        var g = void 0;
                        try {
                            g = d(b);
                        } catch (B) {
                            c.error(B);
                            break;
                        }
                        if (!g) {
                            c.complete();
                            break;
                        }
                    }
                    g = void 0;
                    try {
                        g = f(b);
                    } catch (B) {
                        c.error(B);
                        break;
                    }
                    c.next(g);
                    if (c.closed) break;
                    try {
                        b = h(b);
                    } catch (B) {
                        c.error(B);
                        break;
                    }
                } while (1);
            };
            a.dispatch = function (c) {
                var a = c.subscriber,
                    b = c.condition;
                if (!a.closed) {
                    if (c.needIterate)
                        try {
                            c.state = c.iterate(c.state);
                        } catch (D) {
                            a.error(D);
                            return;
                        }
                    else c.needIterate = !0;
                    if (b) {
                        var f = void 0;
                        try {
                            f = b(c.state);
                        } catch (D) {
                            a.error(D);
                            return;
                        }
                        if (!f) {
                            a.complete();
                            return;
                        }
                        if (a.closed) return;
                    }
                    var h;
                    try {
                        h = c.resultSelector(c.state);
                    } catch (D) {
                        a.error(D);
                        return;
                    }
                    if (!a.closed && (a.next(h), !a.closed))
                        return this.schedule(c);
                }
            };
            return a;
        })(g);
    g.generate = fc.create;
    var hc = (function (b) {
            function a(c, a, d) {
                b.call(this);
                this.condition = c;
                this.thenSource = a;
                this.elseSource = d;
            }
            __extends(a, b);
            a.create = function (c, b, d) {
                return new a(c, b, d);
            };
            a.prototype._subscribe = function (c) {
                return new gc(
                    c,
                    this.condition,
                    this.thenSource,
                    this.elseSource
                );
            };
            return a;
        })(g),
        gc = (function (b) {
            function a(c, a, d, f) {
                b.call(this, c);
                this.condition = a;
                this.thenSource = d;
                this.elseSource = f;
                this.tryIf();
            }
            __extends(a, b);
            a.prototype.tryIf = function () {
                var c = this.condition,
                    a = this.thenSource,
                    b = this.elseSource,
                    f;
                try {
                    (c = (f = c()) ? a : b)
                        ? this.add(q(this, c))
                        : this._complete();
                } catch (h) {
                    this._error(h);
                }
            };
            return a;
        })(t);
    g.if = hc.create;
    var U = (function (b) {
            function a(c, a) {
                b.call(this, c, a);
                this.scheduler = c;
                this.work = a;
                this.pending = !1;
            }
            __extends(a, b);
            a.prototype.schedule = function (c, a) {
                void 0 === a && (a = 0);
                if (this.closed) return this;
                this.state = c;
                this.pending = !0;
                c = this.id;
                var b = this.scheduler;
                null != c && (this.id = this.recycleAsyncId(b, c, a));
                this.delay = a;
                this.id = this.id || this.requestAsyncId(b, this.id, a);
                return this;
            };
            a.prototype.requestAsyncId = function (c, a, b) {
                void 0 === b && (b = 0);
                return r.setInterval(c.flush.bind(c, this), b);
            };
            a.prototype.recycleAsyncId = function (c, a, b) {
                void 0 === b && (b = 0);
                return null !== b && this.delay === b
                    ? a
                    : (r.clearInterval(a), void 0);
            };
            a.prototype.execute = function (c, a) {
                if (this.closed) return Error("executing a cancelled action");
                this.pending = !1;
                if ((c = this._execute(c, a))) return c;
                !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(
                        this.scheduler,
                        this.id,
                        null
                    ));
            };
            a.prototype._execute = function (c, a) {
                a = !1;
                var b = void 0;
                try {
                    this.work(c);
                } catch (f) {
                    (a = !0), (b = (!!f && f) || Error(f));
                }
                if (a) return this.unsubscribe(), b;
            };
            a.prototype._unsubscribe = function () {
                var c = this.id,
                    a = this.scheduler,
                    b = a.actions,
                    f = b.indexOf(this);
                this.state = this.delay = this.work = null;
                this.pending = !1;
                this.scheduler = null;
                -1 !== f && b.splice(f, 1);
                null != c && (this.id = this.recycleAsyncId(a, c, null));
            };
            return a;
        })(
            (function (b) {
                function a(c, a) {
                    b.call(this);
                }
                __extends(a, b);
                a.prototype.schedule = function (c, a) {
                    return this;
                };
                return a;
            })(x)
        ),
        V = (function (b) {
            function a() {
                b.apply(this, arguments);
                this.actions = [];
                this.active = !1;
                this.scheduled = void 0;
            }
            __extends(a, b);
            a.prototype.flush = function (c) {
                var a = this.actions;
                if (this.active) a.push(c);
                else {
                    var b;
                    this.active = !0;
                    do if ((b = c.execute(c.state, c.delay))) break;
                    while ((c = a.shift()));
                    this.active = !1;
                    if (b) {
                        for (; (c = a.shift()); ) c.unsubscribe();
                        throw b;
                    }
                }
            };
            return a;
        })(
            (function () {
                function b(a, c) {
                    void 0 === c && (c = b.now);
                    this.SchedulerAction = a;
                    this.now = c;
                }
                b.prototype.schedule = function (a, c, b) {
                    void 0 === c && (c = 0);
                    return new this.SchedulerAction(this, a).schedule(b, c);
                };
                b.now = Date.now
                    ? Date.now
                    : function () {
                          return +new Date();
                      };
                return b;
            })()
        ),
        C = new V(U),
        ic = (function (b) {
            function a(c, a) {
                void 0 === c && (c = 0);
                void 0 === a && (a = C);
                b.call(this);
                this.period = c;
                this.scheduler = a;
                if (!ga(c) || 0 > c) this.period = 0;
                (a && "function" === typeof a.schedule) || (this.scheduler = C);
            }
            __extends(a, b);
            a.create = function (c, b) {
                void 0 === c && (c = 0);
                void 0 === b && (b = C);
                return new a(c, b);
            };
            a.dispatch = function (c) {
                var a = c.subscriber,
                    b = c.period;
                a.next(c.index);
                a.closed || ((c.index += 1), this.schedule(c, b));
            };
            a.prototype._subscribe = function (c) {
                var b = this.period;
                c.add(
                    this.scheduler.schedule(a.dispatch, b, {
                        index: 0,
                        subscriber: c,
                        period: b,
                    })
                );
            };
            return a;
        })(g).create;
    g.interval = ic;
    g.merge = ta;
    var pb = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new jc(a));
            };
            return b;
        })(),
        jc = (function (b) {
            function a(c) {
                b.call(this, c);
                this.hasFirst = !1;
                this.observables = [];
                this.subscriptions = [];
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                this.observables.push(c);
            };
            a.prototype._complete = function () {
                var c = this.observables,
                    a = c.length;
                if (0 === a) this.destination.complete();
                else {
                    for (var b = 0; b < a && !this.hasFirst; b++) {
                        var f = c[b],
                            f = q(this, f, f, b);
                        this.subscriptions && this.subscriptions.push(f);
                        this.add(f);
                    }
                    this.observables = null;
                }
            };
            a.prototype.notifyNext = function (c, a, b, f, h) {
                if (!this.hasFirst) {
                    this.hasFirst = !0;
                    for (c = 0; c < this.subscriptions.length; c++)
                        c !== b &&
                            ((f = this.subscriptions[c]),
                            f.unsubscribe(),
                            this.remove(f));
                    this.subscriptions = null;
                }
                this.destination.next(a);
            };
            return a;
        })(t);
    g.race = ua;
    var kc = (function (b) {
        function a() {
            b.call(this);
        }
        __extends(a, b);
        a.create = function () {
            return new a();
        };
        a.prototype._subscribe = function (c) {};
        return a;
    })(g).create;
    g.never = kc;
    g.of = K.of;
    var Wa = (function () {
            function b(a) {
                this.nextSources = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new lc(a, this.nextSources));
            };
            return b;
        })(),
        lc = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.destination = c;
                this.nextSources = a;
            }
            __extends(a, b);
            a.prototype.notifyError = function (c, a) {
                this.subscribeToNextSource();
            };
            a.prototype.notifyComplete = function (c) {
                this.subscribeToNextSource();
            };
            a.prototype._error = function (c) {
                this.subscribeToNextSource();
            };
            a.prototype._complete = function () {
                this.subscribeToNextSource();
            };
            a.prototype.subscribeToNextSource = function () {
                var c = this.nextSources.shift();
                c ? this.add(q(this, c)) : this.destination.complete();
            };
            return a;
        })(t);
    g.onErrorResumeNext = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        1 === b.length && H(b[0]) && (b = b[0]);
        a = b.shift();
        return new Ta(a, null).lift(new Wa(b));
    };
    var mc = (function (b) {
        function a(c, a) {
            b.call(this);
            this.obj = c;
            this.scheduler = a;
            this.keys = Object.keys(c);
        }
        __extends(a, b);
        a.create = function (c, b) {
            return new a(c, b);
        };
        a.prototype._subscribe = function (c) {
            var a = this.keys,
                b = this.scheduler,
                f = a.length;
            if (b)
                return b.schedule(qb, 0, {
                    obj: this.obj,
                    keys: a,
                    length: f,
                    index: 0,
                    subscriber: c,
                });
            for (b = 0; b < f; b++) {
                var h = a[b];
                c.next([h, this.obj[h]]);
            }
            c.complete();
        };
        return a;
    })(g).create;
    g.pairs = mc;
    var nc = (function (b) {
        function a(c, a, d) {
            b.call(this);
            this.start = c;
            this._count = a;
            this.scheduler = d;
        }
        __extends(a, b);
        a.create = function (c, b, d) {
            void 0 === c && (c = 0);
            void 0 === b && (b = 0);
            return new a(c, b, d);
        };
        a.dispatch = function (c) {
            var a = c.start,
                b = c.index,
                f = c.subscriber;
            b >= c.count
                ? f.complete()
                : (f.next(a),
                  f.closed ||
                      ((c.index = b + 1), (c.start = a + 1), this.schedule(c)));
        };
        a.prototype._subscribe = function (c) {
            var b = 0,
                d = this.start,
                f = this._count,
                h = this.scheduler;
            if (h)
                return h.schedule(a.dispatch, 0, {
                    index: b,
                    count: f,
                    start: d,
                    subscriber: c,
                });
            do {
                if (b++ >= f) {
                    c.complete();
                    break;
                }
                c.next(d++);
                if (c.closed) break;
            } while (1);
        };
        return a;
    })(g).create;
    g.range = nc;
    var pc = (function (b) {
            function a(c, a) {
                b.call(this);
                this.resourceFactory = c;
                this.observableFactory = a;
            }
            __extends(a, b);
            a.create = function (c, b) {
                return new a(c, b);
            };
            a.prototype._subscribe = function (c) {
                var a = this.resourceFactory,
                    b = this.observableFactory,
                    f;
                try {
                    return (f = a()), new oc(c, f, b);
                } catch (h) {
                    c.error(h);
                }
            };
            return a;
        })(g),
        oc = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.resource = a;
                this.observableFactory = d;
                c.add(a);
                this.tryUse();
            }
            __extends(a, b);
            a.prototype.tryUse = function () {
                try {
                    var c = this.observableFactory.call(this, this.resource);
                    c && this.add(q(this, c));
                } catch (e) {
                    this._error(e);
                }
            };
            return a;
        })(t);
    g.using = pc.create;
    var qc = (function (b) {
        function a(c, a) {
            b.call(this);
            this.error = c;
            this.scheduler = a;
        }
        __extends(a, b);
        a.create = function (c, b) {
            return new a(c, b);
        };
        a.dispatch = function (c) {
            c.subscriber.error(c.error);
        };
        a.prototype._subscribe = function (c) {
            var b = this.error,
                d = this.scheduler;
            if (d)
                return d.schedule(a.dispatch, 0, { error: b, subscriber: c });
            c.error(b);
        };
        return a;
    })(g).create;
    g.throw = qc;
    var rc = (function (b) {
        function a(c, a, d) {
            void 0 === c && (c = 0);
            b.call(this);
            this.period = -1;
            this.dueTime = 0;
            ga(a)
                ? (this.period = (1 > Number(a) && 1) || Number(a))
                : G(a) && (d = a);
            G(d) || (d = C);
            this.scheduler = d;
            this.dueTime = ba(c) ? +c - this.scheduler.now() : c;
        }
        __extends(a, b);
        a.create = function (c, b, d) {
            void 0 === c && (c = 0);
            return new a(c, b, d);
        };
        a.dispatch = function (c) {
            var a = c.index,
                b = c.period,
                f = c.subscriber;
            f.next(a);
            if (!f.closed) {
                if (-1 === b) return f.complete();
                c.index = a + 1;
                this.schedule(c, b);
            }
        };
        a.prototype._subscribe = function (c) {
            return this.scheduler.schedule(a.dispatch, this.dueTime, {
                index: 0,
                period: this.period,
                subscriber: c,
            });
        };
        return a;
    })(g).create;
    g.timer = rc;
    var wa = (function () {
            function b(a) {
                this.project = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new sc(a, this.project));
            };
            return b;
        })(),
        sc = (function (b) {
            function a(c, a, d) {
                void 0 === d && (d = Object.create(null));
                b.call(this, c);
                this.iterators = [];
                this.active = 0;
                this.project = "function" === typeof a ? a : null;
                this.values = d;
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                var a = this.iterators;
                H(c)
                    ? a.push(new tc(c))
                    : "function" === typeof c[I]
                    ? a.push(new uc(c[I]()))
                    : a.push(new vc(this.destination, this, c));
            };
            a.prototype._complete = function () {
                var c = this.iterators,
                    a = c.length;
                this.active = a;
                for (var b = 0; b < a; b++) {
                    var f = c[b];
                    f.stillUnsubscribed
                        ? this.add(f.subscribe(f, b))
                        : this.active--;
                }
            };
            a.prototype.notifyInactive = function () {
                this.active--;
                0 === this.active && this.destination.complete();
            };
            a.prototype.checkIterators = function () {
                for (
                    var c = this.iterators,
                        a = c.length,
                        b = this.destination,
                        f = 0;
                    f < a;
                    f++
                ) {
                    var h = c[f];
                    if ("function" === typeof h.hasValue && !h.hasValue())
                        return;
                }
                for (var g = !1, k = [], f = 0; f < a; f++) {
                    var h = c[f],
                        l = h.next();
                    h.hasCompleted() && (g = !0);
                    if (l.done) {
                        b.complete();
                        return;
                    }
                    k.push(l.value);
                }
                this.project ? this._tryProject(k) : b.next(k);
                g && b.complete();
            };
            a.prototype._tryProject = function (c) {
                var a;
                try {
                    a = this.project.apply(this, c);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.destination.next(a);
            };
            return a;
        })(p),
        uc = (function () {
            function b(a) {
                this.iterator = a;
                this.nextResult = a.next();
            }
            b.prototype.hasValue = function () {
                return !0;
            };
            b.prototype.next = function () {
                var a = this.nextResult;
                this.nextResult = this.iterator.next();
                return a;
            };
            b.prototype.hasCompleted = function () {
                var a = this.nextResult;
                return a && a.done;
            };
            return b;
        })(),
        tc = (function () {
            function b(a) {
                this.array = a;
                this.length = this.index = 0;
                this.length = a.length;
            }
            b.prototype[I] = function () {
                return this;
            };
            b.prototype.next = function (a) {
                a = this.index++;
                var c = this.array;
                return a < this.length
                    ? { value: c[a], done: !1 }
                    : { value: null, done: !0 };
            };
            b.prototype.hasValue = function () {
                return this.array.length > this.index;
            };
            b.prototype.hasCompleted = function () {
                return this.array.length === this.index;
            };
            return b;
        })(),
        vc = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.parent = a;
                this.observable = d;
                this.stillUnsubscribed = !0;
                this.buffer = [];
                this.isComplete = !1;
            }
            __extends(a, b);
            a.prototype[I] = function () {
                return this;
            };
            a.prototype.next = function () {
                var c = this.buffer;
                return 0 === c.length && this.isComplete
                    ? { value: null, done: !0 }
                    : { value: c.shift(), done: !1 };
            };
            a.prototype.hasValue = function () {
                return 0 < this.buffer.length;
            };
            a.prototype.hasCompleted = function () {
                return 0 === this.buffer.length && this.isComplete;
            };
            a.prototype.notifyComplete = function () {
                0 < this.buffer.length
                    ? ((this.isComplete = !0), this.parent.notifyInactive())
                    : this.destination.complete();
            };
            a.prototype.notifyNext = function (c, a, b, f, h) {
                this.buffer.push(a);
                this.parent.checkIterators();
            };
            a.prototype.subscribe = function (c, a) {
                return q(this, this.observable, this, a);
            };
            return a;
        })(t);
    g.zip = va;
    var ya = (function () {
            function b(a, c) {
                this.project = a;
                this.thisArg = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new wc(a, this.project, this.thisArg));
            };
            return b;
        })(),
        wc = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.project = a;
                this.count = 0;
                this.thisArg = d || this;
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                var a;
                try {
                    a = this.project.call(this.thisArg, c, this.count++);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.destination.next(a);
            };
            return a;
        })(p),
        Q = (function (b) {
            function a(c) {
                b.call(this);
                var a = {
                    async: !0,
                    createXHR: function () {
                        var c;
                        if (this.crossDomain)
                            if (r.XMLHttpRequest)
                                (c = new r.XMLHttpRequest()),
                                    "withCredentials" in c &&
                                        (c.withCredentials =
                                            !!this.withCredentials);
                            else if (r.XDomainRequest)
                                c = new r.XDomainRequest();
                            else
                                throw Error(
                                    "CORS is not supported by your browser"
                                );
                        else if (r.XMLHttpRequest) c = new r.XMLHttpRequest();
                        else {
                            var a = void 0;
                            try {
                                for (
                                    var b = [
                                            "Msxml2.XMLHTTP",
                                            "Microsoft.XMLHTTP",
                                            "Msxml2.XMLHTTP.4.0",
                                        ],
                                        e = 0;
                                    3 > e;
                                    e++
                                )
                                    try {
                                        a = b[e];
                                        new r.ActiveXObject(a);
                                        break;
                                    } catch (J) {}
                                c = new r.ActiveXObject(a);
                            } catch (J) {
                                throw Error(
                                    "XMLHttpRequest is not supported by your browser"
                                );
                            }
                        }
                        return c;
                    },
                    crossDomain: !1,
                    withCredentials: !1,
                    headers: {},
                    method: "GET",
                    responseType: "json",
                    timeout: 0,
                };
                if ("string" === typeof c) a.url = c;
                else for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
                this.request = a;
            }
            __extends(a, b);
            a.prototype._subscribe = function (c) {
                return new xc(c, this.request);
            };
            a.create = (function () {
                var c = function (c) {
                    return new a(c);
                };
                c.get = rb;
                c.post = sb;
                c.delete = tb;
                c.put = ub;
                c.getJSON = vb;
                return c;
            })();
            return a;
        })(g),
        xc = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.request = a;
                this.done = !1;
                c = a.headers = a.headers || {};
                a.crossDomain ||
                    c["X-Requested-With"] ||
                    (c["X-Requested-With"] = "XMLHttpRequest");
                "Content-Type" in c ||
                    (r.FormData && a.body instanceof r.FormData) ||
                    "undefined" === typeof a.body ||
                    (c["Content-Type"] =
                        "application/x-www-form-urlencoded; charset\x3dUTF-8");
                a.body = this.serializeBody(a.body, a.headers["Content-Type"]);
                this.send();
            }
            __extends(a, b);
            a.prototype.next = function (c) {
                this.done = !0;
                var a = this.destination;
                c = new Xa(c, this.xhr, this.request);
                a.next(c);
            };
            a.prototype.send = function () {
                var c = this.request,
                    a = this.request,
                    b = a.user,
                    f = a.method,
                    h = a.url,
                    g = a.async,
                    l = a.password,
                    p = a.headers,
                    a = a.body,
                    m = k(c.createXHR).call(c);
                if (m === n) this.error(n.e);
                else {
                    this.xhr = m;
                    b = b
                        ? k(m.open).call(m, f, h, g, b, l)
                        : k(m.open).call(m, f, h, g);
                    if (b === n) return this.error(n.e), null;
                    m.timeout = c.timeout;
                    m.responseType = c.responseType;
                    this.setHeaders(m, p);
                    this.setupEvents(m, c);
                    b = a ? k(m.send).call(m, a) : k(m.send).call(m);
                    if (b === n) return this.error(n.e), null;
                }
                return m;
            };
            a.prototype.serializeBody = function (c, a) {
                if (
                    !c ||
                    "string" === typeof c ||
                    (r.FormData && c instanceof r.FormData)
                )
                    return c;
                if (a) {
                    var b = a.indexOf(";");
                    -1 !== b && (a = a.substring(0, b));
                }
                switch (a) {
                    case "application/x-www-form-urlencoded":
                        return Object.keys(c)
                            .map(function (a) {
                                return encodeURI(a) + "\x3d" + encodeURI(c[a]);
                            })
                            .join("\x26");
                    case "application/json":
                        return JSON.stringify(c);
                    default:
                        return c;
                }
            };
            a.prototype.setHeaders = function (c, a) {
                for (var b in a)
                    a.hasOwnProperty(b) && c.setRequestHeader(b, a[b]);
            };
            a.prototype.setupEvents = function (c, a) {
                function b(c) {
                    var a = b.subscriber,
                        e = b.progressSubscriber,
                        d = b.request;
                    e && e.error(c);
                    a.error(new Ya(this, d));
                }
                function e(c) {
                    var a = e.subscriber,
                        b = e.progressSubscriber,
                        d = e.request;
                    if (4 === this.readyState) {
                        var f = 1223 === this.status ? 204 : this.status,
                            h =
                                "text" === this.responseType
                                    ? this.response || this.responseText
                                    : this.response;
                        0 === f && (f = h ? 200 : 0);
                        200 <= f && 300 > f
                            ? (b && b.complete(), a.next(c), a.complete())
                            : (b && b.error(c),
                              a.error(new da("ajax error " + f, this, d)));
                    }
                }
                var h = a.progressSubscriber;
                c.ontimeout = b;
                b.request = a;
                b.subscriber = this;
                b.progressSubscriber = h;
                if (c.upload && "withCredentials" in c && r.XDomainRequest) {
                    if (h) {
                        var g;
                        g = function (c) {
                            g.progressSubscriber.next(c);
                        };
                        c.onprogress = g;
                        g.progressSubscriber = h;
                    }
                    var k;
                    k = function (c) {
                        var a = k.progressSubscriber,
                            b = k.subscriber,
                            e = k.request;
                        a && a.error(c);
                        b.error(new da("ajax error", this, e));
                    };
                    c.onerror = k;
                    k.request = a;
                    k.subscriber = this;
                    k.progressSubscriber = h;
                }
                c.onreadystatechange = e;
                e.subscriber = this;
                e.progressSubscriber = h;
                e.request = a;
            };
            a.prototype.unsubscribe = function () {
                var c = this.xhr;
                !this.done &&
                    c &&
                    4 !== c.readyState &&
                    "function" === typeof c.abort &&
                    c.abort();
                b.prototype.unsubscribe.call(this);
            };
            return a;
        })(p),
        Xa = (function () {
            return function (b, a, c) {
                this.originalEvent = b;
                this.xhr = a;
                this.request = c;
                this.status = a.status;
                this.responseType = a.responseType || c.responseType;
                switch (this.responseType) {
                    case "json":
                        this.response =
                            "response" in a
                                ? a.responseType
                                    ? a.response
                                    : JSON.parse(
                                          a.response || a.responseText || "null"
                                      )
                                : JSON.parse(a.responseText || "null");
                        break;
                    case "xml":
                        this.response = a.responseXML;
                        break;
                    default:
                        this.response =
                            "response" in a ? a.response : a.responseText;
                }
            };
        })(),
        da = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.message = c;
                this.xhr = a;
                this.request = d;
                this.status = a.status;
            }
            __extends(a, b);
            return a;
        })(Error),
        Ya = (function (b) {
            function a(c, a) {
                b.call(this, "ajax timeout", c, a);
            }
            __extends(a, b);
            return a;
        })(da);
    g.ajax = Q.create;
    var yc = (function (b) {
            function a(c, a) {
                b.call(this, c, a);
                this.scheduler = c;
                this.work = a;
            }
            __extends(a, b);
            a.prototype.schedule = function (c, a) {
                void 0 === a && (a = 0);
                if (0 < a) return b.prototype.schedule.call(this, c, a);
                this.delay = a;
                this.state = c;
                this.scheduler.flush(this);
                return this;
            };
            a.prototype.execute = function (c, a) {
                return 0 < a || this.closed
                    ? b.prototype.execute.call(this, c, a)
                    : this._execute(c, a);
            };
            a.prototype.requestAsyncId = function (c, a, d) {
                void 0 === d && (d = 0);
                return (null !== d && 0 < d) || (null === d && 0 < this.delay)
                    ? b.prototype.requestAsyncId.call(this, c, a, d)
                    : c.flush(this);
            };
            return a;
        })(U),
        Za = new ((function (b) {
            function a() {
                b.apply(this, arguments);
            }
            __extends(a, b);
            return a;
        })(V))(yc),
        R = (function (b) {
            function a(c, a, d) {
                void 0 === c && (c = Number.POSITIVE_INFINITY);
                void 0 === a && (a = Number.POSITIVE_INFINITY);
                b.call(this);
                this.scheduler = d;
                this._events = [];
                this._bufferSize = 1 > c ? 1 : c;
                this._windowTime = 1 > a ? 1 : a;
            }
            __extends(a, b);
            a.prototype.next = function (c) {
                var a = this._getNow();
                this._events.push(new zc(a, c));
                this._trimBufferThenGetEvents();
                b.prototype.next.call(this, c);
            };
            a.prototype._subscribe = function (c) {
                var a = this._trimBufferThenGetEvents(),
                    b = this.scheduler,
                    f;
                if (this.closed) throw new O();
                this.hasError
                    ? (f = x.EMPTY)
                    : this.isStopped
                    ? (f = x.EMPTY)
                    : (this.observers.push(c), (f = new Oa(this, c)));
                b && c.add((c = new na(c, b)));
                for (var b = a.length, h = 0; h < b && !c.closed; h++)
                    c.next(a[h].value);
                this.hasError
                    ? c.error(this.thrownError)
                    : this.isStopped && c.complete();
                return f;
            };
            a.prototype._getNow = function () {
                return (this.scheduler || Za).now();
            };
            a.prototype._trimBufferThenGetEvents = function () {
                for (
                    var c = this._getNow(),
                        a = this._bufferSize,
                        b = this._windowTime,
                        f = this._events,
                        h = f.length,
                        g = 0;
                    g < h && !(c - f[g].time < b);

                )
                    g++;
                h > a && (g = Math.max(g, h - a));
                0 < g && f.splice(0, g);
                return f;
            };
            return a;
        })(y),
        zc = (function () {
            return function (b, a) {
                this.time = b;
                this.value = a;
            };
        })(),
        Ac = r.Object.assign || wb,
        Bc = (function (b) {
            function a(c, a) {
                if (c instanceof g) b.call(this, a, c);
                else {
                    b.call(this);
                    this.WebSocketCtor = r.WebSocket;
                    this._output = new y();
                    "string" === typeof c ? (this.url = c) : Ac(this, c);
                    if (!this.WebSocketCtor)
                        throw Error("no WebSocket constructor can be found");
                    this.destination = new R();
                }
            }
            __extends(a, b);
            a.prototype.resultSelector = function (c) {
                return JSON.parse(c.data);
            };
            a.create = function (c) {
                return new a(c);
            };
            a.prototype.lift = function (c) {
                var b = new a(this, this.destination);
                b.operator = c;
                return b;
            };
            a.prototype._resetState = function () {
                this.socket = null;
                this.source || (this.destination = new R());
                this._output = new y();
            };
            a.prototype.multiplex = function (c, a, b) {
                var e = this;
                return new g(function (d) {
                    var f = k(c)();
                    f === n ? d.error(n.e) : e.next(f);
                    var h = e.subscribe(
                        function (c) {
                            var a = k(b)(c);
                            a === n ? d.error(n.e) : a && d.next(c);
                        },
                        function (c) {
                            return d.error(c);
                        },
                        function () {
                            return d.complete();
                        }
                    );
                    return function () {
                        var c = k(a)();
                        c === n ? d.error(n.e) : e.next(c);
                        h.unsubscribe();
                    };
                });
            };
            a.prototype._connectSocket = function () {
                var c = this,
                    a = this.WebSocketCtor,
                    b = this._output,
                    f = null;
                try {
                    this.socket = f = this.protocol
                        ? new a(this.url, this.protocol)
                        : new a(this.url);
                } catch (D) {
                    b.error(D);
                    return;
                }
                var h = new x(function () {
                    c.socket = null;
                    f && 1 === f.readyState && f.close();
                });
                f.onopen = function (a) {
                    var e = c.openObserver;
                    e && e.next(a);
                    a = c.destination;
                    c.destination = p.create(
                        function (c) {
                            return 1 === f.readyState && f.send(c);
                        },
                        function (a) {
                            var e = c.closingObserver;
                            e && e.next(void 0);
                            a && a.code
                                ? f.close(a.code, a.reason)
                                : b.error(
                                      new TypeError(
                                          "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"
                                      )
                                  );
                            c._resetState();
                        },
                        function () {
                            var a = c.closingObserver;
                            a && a.next(void 0);
                            f.close();
                            c._resetState();
                        }
                    );
                    a && a instanceof R && h.add(a.subscribe(c.destination));
                };
                f.onerror = function (a) {
                    c._resetState();
                    b.error(a);
                };
                f.onclose = function (a) {
                    c._resetState();
                    var e = c.closeObserver;
                    e && e.next(a);
                    a.wasClean ? b.complete() : b.error(a);
                };
                f.onmessage = function (a) {
                    a = k(c.resultSelector)(a);
                    a === n ? b.error(n.e) : b.next(a);
                };
            };
            a.prototype._subscribe = function (c) {
                var a = this,
                    b = this.source;
                if (b) return b.subscribe(c);
                this.socket || this._connectSocket();
                b = new x();
                b.add(this._output.subscribe(c));
                b.add(function () {
                    var c = a.socket;
                    0 === a._output.observers.length &&
                        (c && 1 === c.readyState && c.close(), a._resetState());
                });
                return b;
            };
            a.prototype.unsubscribe = function () {
                var c = this.source,
                    a = this.socket;
                a && 1 === a.readyState && (a.close(), this._resetState());
                b.prototype.unsubscribe.call(this);
                c || (this.destination = new R());
            };
            return a;
        })(ca).create;
    g.webSocket = Bc;
    var Dc = (function () {
            function b(a) {
                this.closingNotifier = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Cc(a, this.closingNotifier));
            };
            return b;
        })(),
        Cc = (function (b) {
            function a(c, a) {
                b.call(this, c);
                this.buffer = [];
                this.add(q(this, a));
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                this.buffer.push(c);
            };
            a.prototype.notifyNext = function (c, a, b, f, h) {
                c = this.buffer;
                this.buffer = [];
                this.destination.next(c);
            };
            return a;
        })(t);
    g.prototype.buffer = function (b) {
        return this.lift(new Dc(b));
    };
    var Fc = (function () {
            function b(a, c) {
                this.bufferSize = a;
                this.startBufferEvery = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Ec(a, this.bufferSize, this.startBufferEvery)
                );
            };
            return b;
        })(),
        Ec = (function (b) {
            function a(c, a, d) {
                b.call(this, c);
                this.bufferSize = a;
                this.startBufferEvery = d;
                this.buffers = [];
                this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                var a = this.count++,
                    b = this.destination,
                    f = this.bufferSize,
                    h = this.startBufferEvery,
                    g = this.buffers;
                0 === a % (null == h ? f : h) && g.push([]);
                for (a = g.length; a--; )
                    (h = g[a]),
                        h.push(c),
                        h.length === f && (g.splice(a, 1), b.next(h));
            };
            a.prototype._complete = function () {
                for (
                    var c = this.destination, a = this.buffers;
                    0 < a.length;

                ) {
                    var d = a.shift();
                    0 < d.length && c.next(d);
                }
                b.prototype._complete.call(this);
            };
            return a;
        })(p);
    g.prototype.bufferCount = function (b, a) {
        void 0 === a && (a = null);
        return this.lift(new Fc(b, a));
    };
    var Hc = (function () {
            function b(a, c, b, d) {
                this.bufferTimeSpan = a;
                this.bufferCreationInterval = c;
                this.maxBufferSize = b;
                this.scheduler = d;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Gc(
                        a,
                        this.bufferTimeSpan,
                        this.bufferCreationInterval,
                        this.maxBufferSize,
                        this.scheduler
                    )
                );
            };
            return b;
        })(),
        Ic = (function () {
            return function () {
                this.buffer = [];
            };
        })(),
        Gc = (function (b) {
            function a(c, a, d, f, h) {
                b.call(this, c);
                this.bufferTimeSpan = a;
                this.bufferCreationInterval = d;
                this.maxBufferSize = f;
                this.scheduler = h;
                this.contexts = [];
                c = this.openContext();
                (this.timespanOnly = null == d || 0 > d)
                    ? this.add(
                          (c.closeAction = h.schedule(za, a, {
                              subscriber: this,
                              context: c,
                              bufferTimeSpan: a,
                          }))
                      )
                    : ((f = {
                          bufferTimeSpan: a,
                          bufferCreationInterval: d,
                          subscriber: this,
                          scheduler: h,
                      }),
                      this.add(
                          (c.closeAction = h.schedule(Aa, a, {
                              subscriber: this,
                              context: c,
                          }))
                      ),
                      this.add(h.schedule(xb, d, f)));
            }
            __extends(a, b);
            a.prototype._next = function (c) {
                for (
                    var a = this.contexts, b = a.length, f, h = 0;
                    h < b;
                    h++
                ) {
                    var g = a[h],
                        k = g.buffer;
                    k.push(c);
                    k.length == this.maxBufferSize && (f = g);
                }
                if (f) this.onBufferFull(f);
            };
            a.prototype._error = function (a) {
                this.contexts.length = 0;
                b.prototype._error.call(this, a);
            };
            a.prototype._complete = function () {
                for (
                    var a = this.contexts, e = this.destination;
                    0 < a.length;

                ) {
                    var d = a.shift();
                    e.next(d.buffer);
                }
                b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                this.contexts = null;
            };
            a.prototype.onBufferFull = function (a) {
                this.closeContext(a);
                a = a.closeAction;
                a.unsubscribe();
                this.remove(a);
                if (!this.closed && this.timespanOnly) {
                    a = this.openContext();
                    var c = this.bufferTimeSpan;
                    this.add(
                        (a.closeAction = this.scheduler.schedule(za, c, {
                            subscriber: this,
                            context: a,
                            bufferTimeSpan: c,
                        }))
                    );
                }
            };
            a.prototype.openContext = function () {
                var a = new Ic();
                this.contexts.push(a);
                return a;
            };
            a.prototype.closeContext = function (a) {
                this.destination.next(a.buffer);
                var c = this.contexts;
                0 <= (c ? c.indexOf(a) : -1) && c.splice(c.indexOf(a), 1);
            };
            return a;
        })(p);
    g.prototype.bufferTime = function (b) {
        var a = arguments.length,
            c = C;
        G(arguments[arguments.length - 1]) &&
            ((c = arguments[arguments.length - 1]), a--);
        var e = null;
        2 <= a && (e = arguments[1]);
        var d = Number.POSITIVE_INFINITY;
        3 <= a && (d = arguments[2]);
        return this.lift(new Hc(b, e, d, c));
    };
    var Kc = (function () {
            function b(a, c) {
                this.openings = a;
                this.closingSelector = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Jc(a, this.openings, this.closingSelector)
                );
            };
            return b;
        })(),
        Jc = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.openings = e;
                this.closingSelector = d;
                this.contexts = [];
                this.add(q(this, e));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                for (var c = this.contexts, b = c.length, f = 0; f < b; f++)
                    c[f].buffer.push(a);
            };
            a.prototype._error = function (a) {
                for (var c = this.contexts; 0 < c.length; ) {
                    var d = c.shift();
                    d.subscription.unsubscribe();
                    d.buffer = null;
                    d.subscription = null;
                }
                this.contexts = null;
                b.prototype._error.call(this, a);
            };
            a.prototype._complete = function () {
                for (var a = this.contexts; 0 < a.length; ) {
                    var e = a.shift();
                    this.destination.next(e.buffer);
                    e.subscription.unsubscribe();
                    e.buffer = null;
                    e.subscription = null;
                }
                this.contexts = null;
                b.prototype._complete.call(this);
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                a ? this.closeBuffer(a) : this.openBuffer(b);
            };
            a.prototype.notifyComplete = function (a) {
                this.closeBuffer(a.context);
            };
            a.prototype.openBuffer = function (a) {
                try {
                    var c = this.closingSelector.call(this, a);
                    c && this.trySubscribe(c);
                } catch (d) {
                    this._error(d);
                }
            };
            a.prototype.closeBuffer = function (a) {
                var c = this.contexts;
                if (c && a) {
                    var b = a.subscription;
                    this.destination.next(a.buffer);
                    c.splice(c.indexOf(a), 1);
                    this.remove(b);
                    b.unsubscribe();
                }
            };
            a.prototype.trySubscribe = function (a) {
                var c = this.contexts,
                    b = new x(),
                    f = { buffer: [], subscription: b };
                c.push(f);
                a = q(this, a, f);
                !a || a.closed
                    ? this.closeBuffer(f)
                    : ((a.context = f), this.add(a), b.add(a));
            };
            return a;
        })(t);
    g.prototype.bufferToggle = function (b, a) {
        return this.lift(new Kc(b, a));
    };
    var Mc = (function () {
            function b(a) {
                this.closingSelector = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Lc(a, this.closingSelector));
            };
            return b;
        })(),
        Lc = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.closingSelector = e;
                this.subscribing = !1;
                this.openBuffer();
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.buffer.push(a);
            };
            a.prototype._complete = function () {
                var a = this.buffer;
                a && this.destination.next(a);
                b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                this.buffer = null;
                this.subscribing = !1;
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.openBuffer();
            };
            a.prototype.notifyComplete = function () {
                this.subscribing ? this.complete() : this.openBuffer();
            };
            a.prototype.openBuffer = function () {
                var a = this.closingSubscription;
                a && (this.remove(a), a.unsubscribe());
                (a = this.buffer) && this.destination.next(a);
                this.buffer = [];
                var b = k(this.closingSelector)();
                b === n
                    ? this.error(n.e)
                    : ((this.closingSubscription = a = new x()),
                      this.add(a),
                      (this.subscribing = !0),
                      a.add(q(this, b)),
                      (this.subscribing = !1));
            };
            return a;
        })(t);
    g.prototype.bufferWhen = function (b) {
        return this.lift(new Mc(b));
    };
    var yb = (function () {
            function b(a) {
                this.selector = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Nc(a, this.selector, this.caught));
            };
            return b;
        })(),
        Nc = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.selector = e;
                this.caught = d;
            }
            __extends(a, b);
            a.prototype.error = function (a) {
                if (!this.isStopped) {
                    var c = void 0;
                    try {
                        c = this.selector(a, this.caught);
                    } catch (d) {
                        this.destination.error(d);
                        return;
                    }
                    this.unsubscribe();
                    this.destination.remove(this);
                    q(this, c);
                }
            };
            return a;
        })(t);
    g.prototype.catch = Ba;
    g.prototype._catch = Ba;
    g.prototype.combineAll = function (b) {
        return this.lift(new ma(b));
    };
    g.prototype.combineLatest = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        a = null;
        "function" === typeof b[b.length - 1] && (a = b.pop());
        1 === b.length && H(b[0]) && (b = b[0]);
        b.unshift(this);
        return this.lift.call(new K(b), new ma(a));
    };
    g.prototype.concat = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        return this.lift.call(S.apply(void 0, [this].concat(b)));
    };
    g.prototype.concatAll = function () {
        return this.lift(new aa(1));
    };
    var Da = (function () {
            function b(a, c, b) {
                void 0 === b && (b = Number.POSITIVE_INFINITY);
                this.project = a;
                this.resultSelector = c;
                this.concurrent = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Oc(
                        a,
                        this.project,
                        this.resultSelector,
                        this.concurrent
                    )
                );
            };
            return b;
        })(),
        Oc = (function (b) {
            function a(a, e, d, f) {
                void 0 === f && (f = Number.POSITIVE_INFINITY);
                b.call(this, a);
                this.project = e;
                this.resultSelector = d;
                this.concurrent = f;
                this.hasCompleted = !1;
                this.buffer = [];
                this.index = this.active = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.active < this.concurrent
                    ? this._tryNext(a)
                    : this.buffer.push(a);
            };
            a.prototype._tryNext = function (a) {
                var c,
                    b = this.index++;
                try {
                    c = this.project(a, b);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                this.active++;
                this._innerSub(c, a, b);
            };
            a.prototype._innerSub = function (a, b, d) {
                this.add(q(this, a, b, d));
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                0 === this.active &&
                    0 === this.buffer.length &&
                    this.destination.complete();
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.resultSelector
                    ? this._notifyResultSelector(a, b, d, f)
                    : this.destination.next(b);
            };
            a.prototype._notifyResultSelector = function (a, b, d, f) {
                var c;
                try {
                    c = this.resultSelector(a, b, d, f);
                } catch (D) {
                    this.destination.error(D);
                    return;
                }
                this.destination.next(c);
            };
            a.prototype.notifyComplete = function (a) {
                var c = this.buffer;
                this.remove(a);
                this.active--;
                0 < c.length
                    ? this._next(c.shift())
                    : 0 === this.active &&
                      this.hasCompleted &&
                      this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.concatMap = function (b, a) {
        return this.lift(new Da(b, a, 1));
    };
    var Fa = (function () {
            function b(a, c, b) {
                void 0 === b && (b = Number.POSITIVE_INFINITY);
                this.ish = a;
                this.resultSelector = c;
                this.concurrent = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Pc(a, this.ish, this.resultSelector, this.concurrent)
                );
            };
            return b;
        })(),
        Pc = (function (b) {
            function a(a, e, d, f) {
                void 0 === f && (f = Number.POSITIVE_INFINITY);
                b.call(this, a);
                this.ish = e;
                this.resultSelector = d;
                this.concurrent = f;
                this.hasCompleted = !1;
                this.buffer = [];
                this.index = this.active = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                if (this.active < this.concurrent) {
                    var c = this.resultSelector,
                        b = this.index++,
                        f = this.ish,
                        h = this.destination;
                    this.active++;
                    this._innerSub(f, h, c, a, b);
                } else this.buffer.push(a);
            };
            a.prototype._innerSub = function (a, b, d, f, h) {
                this.add(q(this, a, f, h));
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                0 === this.active &&
                    0 === this.buffer.length &&
                    this.destination.complete();
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                h = this.destination;
                this.resultSelector
                    ? this.trySelectResult(a, b, d, f)
                    : h.next(b);
            };
            a.prototype.trySelectResult = function (a, b, d, f) {
                var c = this.resultSelector,
                    e = this.destination,
                    g;
                try {
                    g = c(a, b, d, f);
                } catch (J) {
                    e.error(J);
                    return;
                }
                e.next(g);
            };
            a.prototype.notifyError = function (a) {
                this.destination.error(a);
            };
            a.prototype.notifyComplete = function (a) {
                var c = this.buffer;
                this.remove(a);
                this.active--;
                0 < c.length
                    ? this._next(c.shift())
                    : 0 === this.active &&
                      this.hasCompleted &&
                      this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.concatMapTo = function (b, a) {
        return this.lift(new Fa(b, a, 1));
    };
    var Rc = (function () {
            function b(a, c) {
                this.predicate = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Qc(a, this.predicate, this.source));
            };
            return b;
        })(),
        Qc = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.predicate = e;
                this.source = d;
                this.index = this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.predicate ? this._tryPredicate(a) : this.count++;
            };
            a.prototype._tryPredicate = function (a) {
                var c;
                try {
                    c = this.predicate(a, this.index++, this.source);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                c && this.count++;
            };
            a.prototype._complete = function () {
                this.destination.next(this.count);
                this.destination.complete();
            };
            return a;
        })(p);
    g.prototype.count = function (b) {
        return this.lift(new Rc(b, this));
    };
    var Tc = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new Sc(a));
            };
            return b;
        })(),
        Sc = (function (b) {
            function a(a) {
                b.call(this, a);
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                a.observe(this.destination);
            };
            return a;
        })(p);
    g.prototype.dematerialize = function () {
        return this.lift(new Tc());
    };
    var Vc = (function () {
            function b(a) {
                this.durationSelector = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Uc(a, this.durationSelector));
            };
            return b;
        })(),
        Uc = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.durationSelector = e;
                this.hasValue = !1;
                this.durationSubscription = null;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                try {
                    var c = this.durationSelector.call(this, a);
                    c && this._tryNext(a, c);
                } catch (d) {
                    this.destination.error(d);
                }
            };
            a.prototype._complete = function () {
                this.emitValue();
                this.destination.complete();
            };
            a.prototype._tryNext = function (a, b) {
                var c = this.durationSubscription;
                this.value = a;
                this.hasValue = !0;
                c && (c.unsubscribe(), this.remove(c));
                c = q(this, b);
                c.closed || this.add((this.durationSubscription = c));
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.emitValue();
            };
            a.prototype.notifyComplete = function () {
                this.emitValue();
            };
            a.prototype.emitValue = function () {
                if (this.hasValue) {
                    var a = this.value,
                        e = this.durationSubscription;
                    e &&
                        ((this.durationSubscription = null),
                        e.unsubscribe(),
                        this.remove(e));
                    this.value = null;
                    this.hasValue = !1;
                    b.prototype._next.call(this, a);
                }
            };
            return a;
        })(t);
    g.prototype.debounce = function (b) {
        return this.lift(new Vc(b));
    };
    var Xc = (function () {
            function b(a, c) {
                this.dueTime = a;
                this.scheduler = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Wc(a, this.dueTime, this.scheduler));
            };
            return b;
        })(),
        Wc = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.dueTime = e;
                this.scheduler = d;
                this.lastValue = this.debouncedSubscription = null;
                this.hasValue = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.clearDebounce();
                this.lastValue = a;
                this.hasValue = !0;
                this.add(
                    (this.debouncedSubscription = this.scheduler.schedule(
                        zb,
                        this.dueTime,
                        this
                    ))
                );
            };
            a.prototype._complete = function () {
                this.debouncedNext();
                this.destination.complete();
            };
            a.prototype.debouncedNext = function () {
                this.clearDebounce();
                this.hasValue &&
                    (this.destination.next(this.lastValue),
                    (this.lastValue = null),
                    (this.hasValue = !1));
            };
            a.prototype.clearDebounce = function () {
                var a = this.debouncedSubscription;
                null !== a &&
                    (this.remove(a),
                    a.unsubscribe(),
                    (this.debouncedSubscription = null));
            };
            return a;
        })(p);
    g.prototype.debounceTime = function (b, a) {
        void 0 === a && (a = C);
        return this.lift(new Xc(b, a));
    };
    var Zc = (function () {
            function b(a) {
                this.defaultValue = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Yc(a, this.defaultValue));
            };
            return b;
        })(),
        Yc = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.defaultValue = e;
                this.isEmpty = !0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.isEmpty = !1;
                this.destination.next(a);
            };
            a.prototype._complete = function () {
                this.isEmpty && this.destination.next(this.defaultValue);
                this.destination.complete();
            };
            return a;
        })(p);
    g.prototype.defaultIfEmpty = function (b) {
        void 0 === b && (b = null);
        return this.lift(new Zc(b));
    };
    var ad = (function () {
            function b(a, c) {
                this.delay = a;
                this.scheduler = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new $c(a, this.delay, this.scheduler));
            };
            return b;
        })(),
        $c = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.delay = e;
                this.scheduler = d;
                this.queue = [];
                this.errored = this.active = !1;
            }
            __extends(a, b);
            a.dispatch = function (a) {
                for (
                    var c = a.source,
                        b = c.queue,
                        f = a.scheduler,
                        h = a.destination;
                    0 < b.length && 0 >= b[0].time - f.now();

                )
                    b.shift().notification.observe(h);
                0 < b.length
                    ? ((c = Math.max(0, b[0].time - f.now())),
                      this.schedule(a, c))
                    : (c.active = !1);
            };
            a.prototype._schedule = function (c) {
                this.active = !0;
                this.add(
                    c.schedule(a.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: c,
                    })
                );
            };
            a.prototype.scheduleNotification = function (a) {
                if (!0 !== this.errored) {
                    var c = this.scheduler;
                    a = new bd(c.now() + this.delay, a);
                    this.queue.push(a);
                    !1 === this.active && this._schedule(c);
                }
            };
            a.prototype._next = function (a) {
                this.scheduleNotification(z.createNext(a));
            };
            a.prototype._error = function (a) {
                this.errored = !0;
                this.queue = [];
                this.destination.error(a);
            };
            a.prototype._complete = function () {
                this.scheduleNotification(z.createComplete());
            };
            return a;
        })(p),
        bd = (function () {
            return function (b, a) {
                this.time = b;
                this.notification = a;
            };
        })();
    g.prototype.delay = function (b, a) {
        void 0 === a && (a = C);
        b = ba(b) ? +b - a.now() : Math.abs(b);
        return this.lift(new ad(b, a));
    };
    var $a = (function () {
            function b(a) {
                this.delayDurationSelector = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new cd(a, this.delayDurationSelector));
            };
            return b;
        })(),
        cd = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.delayDurationSelector = e;
                this.completed = !1;
                this.delayNotifierSubscriptions = [];
                this.values = [];
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.destination.next(a);
                this.removeSubscription(h);
                this.tryComplete();
            };
            a.prototype.notifyError = function (a, b) {
                this._error(a);
            };
            a.prototype.notifyComplete = function (a) {
                (a = this.removeSubscription(a)) && this.destination.next(a);
                this.tryComplete();
            };
            a.prototype._next = function (a) {
                try {
                    var c = this.delayDurationSelector(a);
                    c && this.tryDelay(c, a);
                } catch (d) {
                    this.destination.error(d);
                }
            };
            a.prototype._complete = function () {
                this.completed = !0;
                this.tryComplete();
            };
            a.prototype.removeSubscription = function (a) {
                a.unsubscribe();
                a = this.delayNotifierSubscriptions.indexOf(a);
                var c = null;
                -1 !== a &&
                    ((c = this.values[a]),
                    this.delayNotifierSubscriptions.splice(a, 1),
                    this.values.splice(a, 1));
                return c;
            };
            a.prototype.tryDelay = function (a, b) {
                a = q(this, a, b);
                this.add(a);
                this.delayNotifierSubscriptions.push(a);
                this.values.push(b);
            };
            a.prototype.tryComplete = function () {
                this.completed &&
                    0 === this.delayNotifierSubscriptions.length &&
                    this.destination.complete();
            };
            return a;
        })(t),
        ed = (function (b) {
            function a(a, e) {
                b.call(this);
                this.source = a;
                this.subscriptionDelay = e;
            }
            __extends(a, b);
            a.prototype._subscribe = function (a) {
                this.subscriptionDelay.subscribe(new dd(a, this.source));
            };
            return a;
        })(g),
        dd = (function (b) {
            function a(a, e) {
                b.call(this);
                this.parent = a;
                this.source = e;
                this.sourceSubscribed = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.subscribeToSource();
            };
            a.prototype._error = function (a) {
                this.unsubscribe();
                this.parent.error(a);
            };
            a.prototype._complete = function () {
                this.subscribeToSource();
            };
            a.prototype.subscribeToSource = function () {
                this.sourceSubscribed ||
                    ((this.sourceSubscribed = !0),
                    this.unsubscribe(),
                    this.source.subscribe(this.parent));
            };
            return a;
        })(p);
    g.prototype.delayWhen = function (b, a) {
        return a ? new ed(this, a).lift(new $a(b)) : this.lift(new $a(b));
    };
    var fd = r.Set || Ab(),
        hd = (function () {
            function b(a, c) {
                this.keySelector = a;
                this.flushes = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new gd(a, this.keySelector, this.flushes));
            };
            return b;
        })(),
        gd = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.keySelector = e;
                this.values = new fd();
                d && this.add(q(this, d));
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.values.clear();
            };
            a.prototype.notifyError = function (a, b) {
                this._error(a);
            };
            a.prototype._next = function (a) {
                this.keySelector
                    ? this._useKeySelector(a)
                    : this._finalizeNext(a, a);
            };
            a.prototype._useKeySelector = function (a) {
                var c,
                    b = this.destination;
                try {
                    c = this.keySelector(a);
                } catch (f) {
                    b.error(f);
                    return;
                }
                this._finalizeNext(c, a);
            };
            a.prototype._finalizeNext = function (a, b) {
                var c = this.values;
                c.has(a) || (c.add(a), this.destination.next(b));
            };
            return a;
        })(t);
    g.prototype.distinct = function (b, a) {
        return this.lift(new hd(b, a));
    };
    var Bb = (function () {
            function b(a, c) {
                this.compare = a;
                this.keySelector = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new id(a, this.compare, this.keySelector));
            };
            return b;
        })(),
        id = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.keySelector = d;
                this.hasKey = !1;
                "function" === typeof e && (this.compare = e);
            }
            __extends(a, b);
            a.prototype.compare = function (a, b) {
                return a === b;
            };
            a.prototype._next = function (a) {
                var c = a;
                if (this.keySelector && ((c = k(this.keySelector)(a)), c === n))
                    return this.destination.error(n.e);
                var b = !1;
                if (this.hasKey) {
                    if (((b = k(this.compare)(this.key, c)), b === n))
                        return this.destination.error(n.e);
                } else this.hasKey = !0;
                !1 === !!b && ((this.key = c), this.destination.next(a));
            };
            return a;
        })(p);
    g.prototype.distinctUntilChanged = Ga;
    g.prototype.distinctUntilKeyChanged = function (b, a) {
        return Ga.call(this, function (c, e) {
            return a ? a(c[b], e[b]) : c[b] === e[b];
        });
    };
    var Cb = (function () {
            function b(a, c, b) {
                this.nextOrObserver = a;
                this.error = c;
                this.complete = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new jd(a, this.nextOrObserver, this.error, this.complete)
                );
            };
            return b;
        })(),
        jd = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                a = new p(e, d, f);
                a.syncErrorThrowable = !0;
                this.add(a);
                this.safeSubscriber = a;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c = this.safeSubscriber;
                c.next(a);
                c.syncErrorThrown
                    ? this.destination.error(c.syncErrorValue)
                    : this.destination.next(a);
            };
            a.prototype._error = function (a) {
                var c = this.safeSubscriber;
                c.error(a);
                c.syncErrorThrown
                    ? this.destination.error(c.syncErrorValue)
                    : this.destination.error(a);
            };
            a.prototype._complete = function () {
                var a = this.safeSubscriber;
                a.complete();
                a.syncErrorThrown
                    ? this.destination.error(a.syncErrorValue)
                    : this.destination.complete();
            };
            return a;
        })(p);
    g.prototype.do = Ha;
    g.prototype._do = Ha;
    var ld = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new kd(a));
            };
            return b;
        })(),
        kd = (function (b) {
            function a(a) {
                b.call(this, a);
                this.hasSubscription = this.hasCompleted = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.hasSubscription ||
                    ((this.hasSubscription = !0), this.add(q(this, a)));
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                this.hasSubscription || this.destination.complete();
            };
            a.prototype.notifyComplete = function (a) {
                this.remove(a);
                this.hasSubscription = !1;
                this.hasCompleted && this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.exhaust = function () {
        return this.lift(new ld());
    };
    var nd = (function () {
            function b(a, c) {
                this.project = a;
                this.resultSelector = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new md(a, this.project, this.resultSelector)
                );
            };
            return b;
        })(),
        md = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.project = e;
                this.resultSelector = d;
                this.hasCompleted = this.hasSubscription = !1;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.hasSubscription || this.tryNext(a);
            };
            a.prototype.tryNext = function (a) {
                var c = this.index++,
                    b = this.destination;
                try {
                    var f = this.project(a, c);
                    this.hasSubscription = !0;
                    this.add(q(this, f, a, c));
                } catch (h) {
                    b.error(h);
                }
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                this.hasSubscription || this.destination.complete();
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                h = this.destination;
                this.resultSelector
                    ? this.trySelectResult(a, b, d, f)
                    : h.next(b);
            };
            a.prototype.trySelectResult = function (a, b, d, f) {
                var c = this.resultSelector,
                    e = this.destination;
                try {
                    var g = c(a, b, d, f);
                    e.next(g);
                } catch (J) {
                    e.error(J);
                }
            };
            a.prototype.notifyError = function (a) {
                this.destination.error(a);
            };
            a.prototype.notifyComplete = function (a) {
                this.remove(a);
                this.hasSubscription = !1;
                this.hasCompleted && this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.exhaustMap = function (b, a) {
        return this.lift(new nd(b, a));
    };
    var pd = (function () {
            function b(a, c, b) {
                this.project = a;
                this.concurrent = c;
                this.scheduler = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new od(a, this.project, this.concurrent, this.scheduler)
                );
            };
            return b;
        })(),
        od = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.project = e;
                this.concurrent = d;
                this.scheduler = f;
                this.active = this.index = 0;
                this.hasCompleted = !1;
                d < Number.POSITIVE_INFINITY && (this.buffer = []);
            }
            __extends(a, b);
            a.dispatch = function (a) {
                a.subscriber.subscribeToProjection(a.result, a.value, a.index);
            };
            a.prototype._next = function (c) {
                var b = this.destination;
                if (b.closed) this._complete();
                else {
                    var d = this.index++;
                    if (this.active < this.concurrent) {
                        b.next(c);
                        var f = k(this.project)(c, d);
                        f === n
                            ? b.error(n.e)
                            : this.scheduler
                            ? this.add(
                                  this.scheduler.schedule(a.dispatch, 0, {
                                      subscriber: this,
                                      result: f,
                                      value: c,
                                      index: d,
                                  })
                              )
                            : this.subscribeToProjection(f, c, d);
                    } else this.buffer.push(c);
                }
            };
            a.prototype.subscribeToProjection = function (a, b, d) {
                this.active++;
                this.add(q(this, a, b, d));
            };
            a.prototype._complete = function () {
                ((this.hasCompleted = !0), 0 === this.active) &&
                    this.destination.complete();
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this._next(b);
            };
            a.prototype.notifyComplete = function (a) {
                var c = this.buffer;
                this.remove(a);
                this.active--;
                c && 0 < c.length && this._next(c.shift());
                this.hasCompleted &&
                    0 === this.active &&
                    this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.expand = function (b, a, c) {
        void 0 === a && (a = Number.POSITIVE_INFINITY);
        void 0 === c && (c = void 0);
        a = 1 > (a || 0) ? Number.POSITIVE_INFINITY : a;
        return this.lift(new pd(b, a, c));
    };
    var W = (function (b) {
            function a() {
                var a = b.call(this, "argument out of range");
                this.name = a.name = "ArgumentOutOfRangeError";
                this.stack = a.stack;
                this.message = a.message;
            }
            __extends(a, b);
            return a;
        })(Error),
        rd = (function () {
            function b(a, c) {
                this.index = a;
                this.defaultValue = c;
                if (0 > a) throw new W();
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new qd(a, this.index, this.defaultValue));
            };
            return b;
        })(),
        qd = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.index = e;
                this.defaultValue = d;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                0 === this.index-- &&
                    (this.destination.next(a), this.destination.complete());
            };
            a.prototype._complete = function () {
                var a = this.destination;
                0 <= this.index &&
                    ("undefined" !== typeof this.defaultValue
                        ? a.next(this.defaultValue)
                        : a.error(new W()));
                a.complete();
            };
            return a;
        })(p);
    g.prototype.elementAt = function (b, a) {
        return this.lift(new rd(b, a));
    };
    var Db = (function () {
            function b(a, c) {
                this.predicate = a;
                this.thisArg = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new sd(a, this.predicate, this.thisArg));
            };
            return b;
        })(),
        sd = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.predicate = e;
                this.thisArg = d;
                this.count = 0;
                this.predicate = e;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c;
                try {
                    c = this.predicate.call(this.thisArg, a, this.count++);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                c && this.destination.next(a);
            };
            return a;
        })(p);
    g.prototype.filter = ha;
    var Eb = (function () {
            function b(a) {
                this.callback = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new td(a, this.callback));
            };
            return b;
        })(),
        td = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.add(new x(e));
            }
            __extends(a, b);
            return a;
        })(p);
    g.prototype.finally = Ia;
    g.prototype._finally = Ia;
    var ab = (function () {
            function b(a, c, b, d) {
                this.predicate = a;
                this.source = c;
                this.yieldIndex = b;
                this.thisArg = d;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new ud(
                        a,
                        this.predicate,
                        this.source,
                        this.yieldIndex,
                        this.thisArg
                    )
                );
            };
            return b;
        })(),
        ud = (function (b) {
            function a(a, e, d, f, h) {
                b.call(this, a);
                this.predicate = e;
                this.source = d;
                this.yieldIndex = f;
                this.thisArg = h;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype.notifyComplete = function (a) {
                var c = this.destination;
                c.next(a);
                c.complete();
            };
            a.prototype._next = function (a) {
                var c = this.predicate,
                    b = this.thisArg,
                    f = this.index++;
                try {
                    c.call(b || this, a, f, this.source) &&
                        this.notifyComplete(this.yieldIndex ? f : a);
                } catch (h) {
                    this.destination.error(h);
                }
            };
            a.prototype._complete = function () {
                this.notifyComplete(this.yieldIndex ? -1 : void 0);
            };
            return a;
        })(p);
    g.prototype.find = function (b, a) {
        if ("function" !== typeof b)
            throw new TypeError("predicate is not a function");
        return this.lift(new ab(b, this, !1, a));
    };
    g.prototype.findIndex = function (b, a) {
        return this.lift(new ab(b, this, !0, a));
    };
    var ea = (function (b) {
            function a() {
                var a = b.call(this, "no elements in sequence");
                this.name = a.name = "EmptyError";
                this.stack = a.stack;
                this.message = a.message;
            }
            __extends(a, b);
            return a;
        })(Error),
        wd = (function () {
            function b(a, c, b, d) {
                this.predicate = a;
                this.resultSelector = c;
                this.defaultValue = b;
                this.source = d;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new vd(
                        a,
                        this.predicate,
                        this.resultSelector,
                        this.defaultValue,
                        this.source
                    )
                );
            };
            return b;
        })(),
        vd = (function (b) {
            function a(a, e, d, f, h) {
                b.call(this, a);
                this.predicate = e;
                this.resultSelector = d;
                this.defaultValue = f;
                this.source = h;
                this.index = 0;
                this._emitted = this.hasCompleted = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c = this.index++;
                this.predicate ? this._tryPredicate(a, c) : this._emit(a, c);
            };
            a.prototype._tryPredicate = function (a, b) {
                var c;
                try {
                    c = this.predicate(a, b, this.source);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                c && this._emit(a, b);
            };
            a.prototype._emit = function (a, b) {
                this.resultSelector
                    ? this._tryResultSelector(a, b)
                    : this._emitFinal(a);
            };
            a.prototype._tryResultSelector = function (a, b) {
                var c;
                try {
                    c = this.resultSelector(a, b);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                this._emitFinal(c);
            };
            a.prototype._emitFinal = function (a) {
                var c = this.destination;
                this._emitted ||
                    ((this._emitted = !0),
                    c.next(a),
                    c.complete(),
                    (this.hasCompleted = !0));
            };
            a.prototype._complete = function () {
                var a = this.destination;
                this.hasCompleted || "undefined" === typeof this.defaultValue
                    ? this.hasCompleted || a.error(new ea())
                    : (a.next(this.defaultValue), a.complete());
            };
            return a;
        })(p);
    g.prototype.first = function (b, a, c) {
        return this.lift(new wd(b, a, c, this));
    };
    var xd = (function () {
            function b() {
                this.size = 0;
                this._values = [];
                this._keys = [];
            }
            b.prototype.get = function (a) {
                a = this._keys.indexOf(a);
                return -1 === a ? void 0 : this._values[a];
            };
            b.prototype.set = function (a, c) {
                var b = this._keys.indexOf(a);
                -1 === b
                    ? (this._keys.push(a), this._values.push(c), this.size++)
                    : (this._values[b] = c);
                return this;
            };
            b.prototype.delete = function (a) {
                a = this._keys.indexOf(a);
                if (-1 === a) return !1;
                this._values.splice(a, 1);
                this._keys.splice(a, 1);
                this.size--;
                return !0;
            };
            b.prototype.clear = function () {
                this._keys.length = 0;
                this.size = this._values.length = 0;
            };
            b.prototype.forEach = function (a, c) {
                for (var b = 0; b < this.size; b++)
                    a.call(c, this._values[b], this._keys[b]);
            };
            return b;
        })(),
        yd = r.Map || xd,
        zd = (function () {
            function b() {
                this.values = {};
            }
            b.prototype.delete = function (a) {
                this.values[a] = null;
                return !0;
            };
            b.prototype.set = function (a, c) {
                this.values[a] = c;
                return this;
            };
            b.prototype.get = function (a) {
                return this.values[a];
            };
            b.prototype.forEach = function (a, c) {
                var b = this.values,
                    d;
                for (d in b)
                    b.hasOwnProperty(d) && null !== b[d] && a.call(c, b[d], d);
            };
            b.prototype.clear = function () {
                this.values = {};
            };
            return b;
        })(),
        Bd = (function () {
            function b(a, c, b, d) {
                this.keySelector = a;
                this.elementSelector = c;
                this.durationSelector = b;
                this.subjectSelector = d;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Ad(
                        a,
                        this.keySelector,
                        this.elementSelector,
                        this.durationSelector,
                        this.subjectSelector
                    )
                );
            };
            return b;
        })(),
        Ad = (function (b) {
            function a(a, e, d, f, h) {
                b.call(this, a);
                this.keySelector = e;
                this.elementSelector = d;
                this.durationSelector = f;
                this.subjectSelector = h;
                this.groups = null;
                this.attemptedToUnsubscribe = !1;
                this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c;
                try {
                    c = this.keySelector(a);
                } catch (d) {
                    this.error(d);
                    return;
                }
                this._group(a, c);
            };
            a.prototype._group = function (a, b) {
                var c = this.groups;
                c ||
                    (c = this.groups =
                        "string" === typeof b ? new zd() : new yd());
                var e = c.get(b),
                    h;
                if (this.elementSelector)
                    try {
                        h = this.elementSelector(a);
                    } catch (D) {
                        this.error(D);
                    }
                else h = a;
                if (
                    !e &&
                    ((e = this.subjectSelector
                        ? this.subjectSelector()
                        : new y()),
                    c.set(b, e),
                    (a = new bb(b, e, this)),
                    this.destination.next(a),
                    this.durationSelector)
                ) {
                    a = void 0;
                    try {
                        a = this.durationSelector(new bb(b, e));
                    } catch (D) {
                        this.error(D);
                        return;
                    }
                    this.add(a.subscribe(new Cd(b, e, this)));
                }
                e.closed || e.next(h);
            };
            a.prototype._error = function (a) {
                var c = this.groups;
                c &&
                    (c.forEach(function (c, b) {
                        c.error(a);
                    }),
                    c.clear());
                this.destination.error(a);
            };
            a.prototype._complete = function () {
                var a = this.groups;
                a &&
                    (a.forEach(function (a, c) {
                        a.complete();
                    }),
                    a.clear());
                this.destination.complete();
            };
            a.prototype.removeGroup = function (a) {
                this.groups.delete(a);
            };
            a.prototype.unsubscribe = function () {
                this.closed ||
                    this.attemptedToUnsubscribe ||
                    ((this.attemptedToUnsubscribe = !0),
                    0 === this.count && b.prototype.unsubscribe.call(this));
            };
            return a;
        })(p),
        Cd = (function (b) {
            function a(a, e, d) {
                b.call(this);
                this.key = a;
                this.group = e;
                this.parent = d;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this._complete();
            };
            a.prototype._error = function (a) {
                var c = this.group;
                c.closed || c.error(a);
                this.parent.removeGroup(this.key);
            };
            a.prototype._complete = function () {
                var a = this.group;
                a.closed || a.complete();
                this.parent.removeGroup(this.key);
            };
            return a;
        })(p),
        bb = (function (b) {
            function a(a, e, d) {
                b.call(this);
                this.key = a;
                this.groupSubject = e;
                this.refCountSubscription = d;
            }
            __extends(a, b);
            a.prototype._subscribe = function (a) {
                var c = new x(),
                    b = this.refCountSubscription,
                    f = this.groupSubject;
                b && !b.closed && c.add(new Dd(b));
                c.add(f.subscribe(a));
                return c;
            };
            return a;
        })(g),
        Dd = (function (b) {
            function a(a) {
                b.call(this);
                this.parent = a;
                a.count++;
            }
            __extends(a, b);
            a.prototype.unsubscribe = function () {
                var a = this.parent;
                a.closed ||
                    this.closed ||
                    (b.prototype.unsubscribe.call(this),
                    --a.count,
                    0 === a.count &&
                        a.attemptedToUnsubscribe &&
                        a.unsubscribe());
            };
            return a;
        })(x);
    g.prototype.groupBy = function (b, a, c, e) {
        return this.lift(new Bd(b, a, c, e));
    };
    var Fd = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new Ed(a));
            };
            return b;
        })(),
        Ed = (function (b) {
            function a() {
                b.apply(this, arguments);
            }
            __extends(a, b);
            a.prototype._next = function (a) {};
            return a;
        })(p);
    g.prototype.ignoreElements = function () {
        return this.lift(new Fd());
    };
    var Hd = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new Gd(a));
            };
            return b;
        })(),
        Gd = (function (b) {
            function a(a) {
                b.call(this, a);
            }
            __extends(a, b);
            a.prototype.notifyComplete = function (a) {
                var c = this.destination;
                c.next(a);
                c.complete();
            };
            a.prototype._next = function (a) {
                this.notifyComplete(!1);
            };
            a.prototype._complete = function () {
                this.notifyComplete(!0);
            };
            return a;
        })(p);
    g.prototype.isEmpty = function () {
        return this.lift(new Hd());
    };
    var Jd = (function () {
            function b(a) {
                this.durationSelector = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Id(a, this.durationSelector));
            };
            return b;
        })(),
        Id = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.durationSelector = e;
                this.hasValue = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.value = a;
                this.hasValue = !0;
                this.throttled ||
                    ((a = k(this.durationSelector)(a)),
                    a === n
                        ? this.destination.error(n.e)
                        : this.add((this.throttled = q(this, a))));
            };
            a.prototype.clearThrottle = function () {
                var a = this.value,
                    b = this.hasValue,
                    d = this.throttled;
                d && (this.remove(d), (this.throttled = null), d.unsubscribe());
                b &&
                    ((this.value = null),
                    (this.hasValue = !1),
                    this.destination.next(a));
            };
            a.prototype.notifyNext = function (a, b, d, f) {
                this.clearThrottle();
            };
            a.prototype.notifyComplete = function () {
                this.clearThrottle();
            };
            return a;
        })(t);
    g.prototype.audit = function (b) {
        return this.lift(new Jd(b));
    };
    var Ld = (function () {
            function b(a, c) {
                this.duration = a;
                this.scheduler = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Kd(a, this.duration, this.scheduler));
            };
            return b;
        })(),
        Kd = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.duration = e;
                this.scheduler = d;
                this.hasValue = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.value = a;
                this.hasValue = !0;
                this.throttled ||
                    this.add(
                        (this.throttled = this.scheduler.schedule(
                            Fb,
                            this.duration,
                            this
                        ))
                    );
            };
            a.prototype.clearThrottle = function () {
                var a = this.value,
                    b = this.hasValue,
                    d = this.throttled;
                d && (this.remove(d), (this.throttled = null), d.unsubscribe());
                b &&
                    ((this.value = null),
                    (this.hasValue = !1),
                    this.destination.next(a));
            };
            return a;
        })(p);
    g.prototype.auditTime = function (b, a) {
        void 0 === a && (a = C);
        return this.lift(new Ld(b, a));
    };
    var Nd = (function () {
            function b(a, c, b, d) {
                this.predicate = a;
                this.resultSelector = c;
                this.defaultValue = b;
                this.source = d;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Md(
                        a,
                        this.predicate,
                        this.resultSelector,
                        this.defaultValue,
                        this.source
                    )
                );
            };
            return b;
        })(),
        Md = (function (b) {
            function a(a, e, d, f, h) {
                b.call(this, a);
                this.predicate = e;
                this.resultSelector = d;
                this.defaultValue = f;
                this.source = h;
                this.hasValue = !1;
                this.index = 0;
                "undefined" !== typeof f &&
                    ((this.lastValue = f), (this.hasValue = !0));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c = this.index++;
                this.predicate
                    ? this._tryPredicate(a, c)
                    : this.resultSelector
                    ? this._tryResultSelector(a, c)
                    : ((this.lastValue = a), (this.hasValue = !0));
            };
            a.prototype._tryPredicate = function (a, b) {
                var c;
                try {
                    c = this.predicate(a, b, this.source);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                c &&
                    (this.resultSelector
                        ? this._tryResultSelector(a, b)
                        : ((this.lastValue = a), (this.hasValue = !0)));
            };
            a.prototype._tryResultSelector = function (a, b) {
                var c;
                try {
                    c = this.resultSelector(a, b);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                this.lastValue = c;
                this.hasValue = !0;
            };
            a.prototype._complete = function () {
                var a = this.destination;
                this.hasValue
                    ? (a.next(this.lastValue), a.complete())
                    : a.error(new ea());
            };
            return a;
        })(p);
    g.prototype.last = function (b, a, c) {
        return this.lift(new Nd(b, a, c, this));
    };
    g.prototype.let = Ja;
    g.prototype.letBind = Ja;
    var Pd = (function () {
            function b(a, c, b) {
                this.predicate = a;
                this.thisArg = c;
                this.source = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Od(a, this.predicate, this.thisArg, this.source)
                );
            };
            return b;
        })(),
        Od = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.predicate = e;
                this.thisArg = d;
                this.source = f;
                this.index = 0;
                this.thisArg = d || this;
            }
            __extends(a, b);
            a.prototype.notifyComplete = function (a) {
                this.destination.next(a);
                this.destination.complete();
            };
            a.prototype._next = function (a) {
                var c = !1;
                try {
                    c = this.predicate.call(
                        this.thisArg,
                        a,
                        this.index++,
                        this.source
                    );
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                c || this.notifyComplete(!1);
            };
            a.prototype._complete = function () {
                this.notifyComplete(!0);
            };
            return a;
        })(p);
    g.prototype.every = function (b, a) {
        return this.lift(new Pd(b, a, this));
    };
    g.prototype.map = xa;
    var Rd = (function () {
            function b(a) {
                this.value = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new Qd(a, this.value));
            };
            return b;
        })(),
        Qd = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.value = e;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.destination.next(this.value);
            };
            return a;
        })(p);
    g.prototype.mapTo = function (b) {
        return this.lift(new Rd(b));
    };
    var Td = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new Sd(a));
            };
            return b;
        })(),
        Sd = (function (b) {
            function a(a) {
                b.call(this, a);
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.destination.next(z.createNext(a));
            };
            a.prototype._error = function (a) {
                var c = this.destination;
                c.next(z.createError(a));
                c.complete();
            };
            a.prototype._complete = function () {
                var a = this.destination;
                a.next(z.createComplete());
                a.complete();
            };
            return a;
        })(p);
    g.prototype.materialize = function () {
        return this.lift(new Td());
    };
    var oa = (function () {
            function b(a, c, b) {
                void 0 === b && (b = !1);
                this.accumulator = a;
                this.seed = c;
                this.hasSeed = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Ud(a, this.accumulator, this.seed, this.hasSeed)
                );
            };
            return b;
        })(),
        Ud = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.accumulator = e;
                this.hasSeed = f;
                this.hasValue = !1;
                this.acc = d;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.hasValue || (this.hasValue = this.hasSeed)
                    ? this._tryReduce(a)
                    : ((this.acc = a), (this.hasValue = !0));
            };
            a.prototype._tryReduce = function (a) {
                var c;
                try {
                    c = this.accumulator(this.acc, a);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.acc = c;
            };
            a.prototype._complete = function () {
                (this.hasValue || this.hasSeed) &&
                    this.destination.next(this.acc);
                this.destination.complete();
            };
            return a;
        })(p);
    g.prototype.max = function (b) {
        return this.lift(
            new oa(
                "function" === typeof b
                    ? function (a, c) {
                          return 0 < b(a, c) ? a : c;
                      }
                    : function (a, c) {
                          return a > c ? a : c;
                      }
            )
        );
    };
    g.prototype.merge = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        return this.lift.call(ta.apply(void 0, [this].concat(b)));
    };
    g.prototype.mergeAll = function (b) {
        void 0 === b && (b = Number.POSITIVE_INFINITY);
        return this.lift(new aa(b));
    };
    g.prototype.mergeMap = Ca;
    g.prototype.flatMap = Ca;
    g.prototype.flatMapTo = Ea;
    g.prototype.mergeMapTo = Ea;
    var Wd = (function () {
            function b(a, c, b) {
                this.project = a;
                this.seed = c;
                this.concurrent = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new Vd(a, this.project, this.seed, this.concurrent)
                );
            };
            return b;
        })(),
        Vd = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.project = e;
                this.acc = d;
                this.concurrent = f;
                this.hasCompleted = this.hasValue = !1;
                this.buffer = [];
                this.index = this.active = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                if (this.active < this.concurrent) {
                    var c = this.index++,
                        b = k(this.project)(this.acc, a),
                        f = this.destination;
                    b === n
                        ? f.error(n.e)
                        : (this.active++, this._innerSub(b, a, c));
                } else this.buffer.push(a);
            };
            a.prototype._innerSub = function (a, b, d) {
                this.add(q(this, a, b, d));
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                0 === this.active &&
                    0 === this.buffer.length &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete());
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                a = this.destination;
                this.acc = b;
                this.hasValue = !0;
                a.next(b);
            };
            a.prototype.notifyComplete = function (a) {
                var c = this.buffer;
                this.remove(a);
                this.active--;
                0 < c.length
                    ? this._next(c.shift())
                    : 0 === this.active &&
                      this.hasCompleted &&
                      (!1 === this.hasValue && this.destination.next(this.acc),
                      this.destination.complete());
            };
            return a;
        })(t);
    g.prototype.mergeScan = function (b, a, c) {
        void 0 === c && (c = Number.POSITIVE_INFINITY);
        return this.lift(new Wd(b, a, c));
    };
    g.prototype.min = function (b) {
        return this.lift(
            new oa(
                "function" === typeof b
                    ? function (a, c) {
                          return 0 > b(a, c) ? a : c;
                      }
                    : function (a, c) {
                          return a < c ? a : c;
                      }
            )
        );
    };
    var X = (function (b) {
            function a(a, e) {
                b.call(this);
                this.source = a;
                this.subjectFactory = e;
                this._refCount = 0;
            }
            __extends(a, b);
            a.prototype._subscribe = function (a) {
                return this.getSubject().subscribe(a);
            };
            a.prototype.getSubject = function () {
                var a = this._subject;
                if (!a || a.isStopped) this._subject = this.subjectFactory();
                return this._subject;
            };
            a.prototype.connect = function () {
                var a = this._connection;
                a ||
                    ((a = this._connection = new x()),
                    a.add(
                        this.source.subscribe(new Xd(this.getSubject(), this))
                    ),
                    a.closed
                        ? ((this._connection = null), (a = x.EMPTY))
                        : (this._connection = a));
                return a;
            };
            a.prototype.refCount = function () {
                return this.lift(new Yd(this));
            };
            return a;
        })(g),
        Hb = {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subscribe: { value: X.prototype._subscribe },
            getSubject: { value: X.prototype.getSubject },
            connect: { value: X.prototype.connect },
            refCount: { value: X.prototype.refCount },
        },
        Xd = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.connectable = e;
            }
            __extends(a, b);
            a.prototype._error = function (a) {
                this._unsubscribe();
                b.prototype._error.call(this, a);
            };
            a.prototype._complete = function () {
                this._unsubscribe();
                b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                var a = this.connectable;
                if (a) {
                    this.connectable = null;
                    var b = a._connection;
                    a._refCount = 0;
                    a._subject = null;
                    a._connection = null;
                    b && b.unsubscribe();
                }
            };
            return a;
        })(Pa),
        Yd = (function () {
            function b(a) {
                this.connectable = a;
            }
            b.prototype.call = function (a, c) {
                var b = this.connectable;
                b._refCount++;
                a = new Zd(a, b);
                c = c.subscribe(a);
                a.closed || (a.connection = b.connect());
                return c;
            };
            return b;
        })(),
        Zd = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.connectable = e;
            }
            __extends(a, b);
            a.prototype._unsubscribe = function () {
                var a = this.connectable;
                if (a) {
                    this.connectable = null;
                    var b = a._refCount;
                    0 >= b
                        ? (this.connection = null)
                        : ((a._refCount = b - 1),
                          1 < b
                              ? (this.connection = null)
                              : ((b = this.connection),
                                (a = a._connection),
                                (this.connection = null),
                                !a || (b && a !== b) || a.unsubscribe()));
                } else this.connection = null;
            };
            return a;
        })(p),
        Gb = (function () {
            function b(a, c) {
                this.subjectFactory = a;
                this.selector = c;
            }
            b.prototype.call = function (a, c) {
                var b = this.selector,
                    d = this.subjectFactory();
                a = b(d).subscribe(a);
                a.add(c.subscribe(d));
                return a;
            };
            return b;
        })();
    g.prototype.multicast = N;
    g.prototype.observeOn = function (b, a) {
        void 0 === a && (a = 0);
        return this.lift(new bc(b, a));
    };
    g.prototype.onErrorResumeNext = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        1 === b.length && H(b[0]) && (b = b[0]);
        return this.lift(new Wa(b));
    };
    var ae = (function () {
            function b() {}
            b.prototype.call = function (a, c) {
                return c.subscribe(new $d(a));
            };
            return b;
        })(),
        $d = (function (b) {
            function a(a) {
                b.call(this, a);
                this.hasPrev = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.hasPrev
                    ? this.destination.next([this.prev, a])
                    : (this.hasPrev = !0);
                this.prev = a;
            };
            return a;
        })(p);
    g.prototype.pairwise = function () {
        return this.lift(new ae());
    };
    g.prototype.partition = function (b, a) {
        return [ha.call(this, b, a), ha.call(this, Ib(b, a))];
    };
    g.prototype.pluck = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        a = b.length;
        if (0 === a) throw Error("list of properties cannot be empty.");
        return xa.call(this, Jb(b, a));
    };
    g.prototype.publish = function (b) {
        return b
            ? N.call(
                  this,
                  function () {
                      return new y();
                  },
                  b
              )
            : N.call(this, new y());
    };
    var cb = (function (b) {
        function a(a) {
            b.call(this);
            this._value = a;
        }
        __extends(a, b);
        Object.defineProperty(a.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: !0,
            configurable: !0,
        });
        a.prototype._subscribe = function (a) {
            var c = b.prototype._subscribe.call(this, a);
            c && !c.closed && a.next(this._value);
            return c;
        };
        a.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new O();
            return this._value;
        };
        a.prototype.next = function (a) {
            b.prototype.next.call(this, (this._value = a));
        };
        return a;
    })(y);
    g.prototype.publishBehavior = function (b) {
        return N.call(this, new cb(b));
    };
    g.prototype.publishReplay = function (b, a, c) {
        void 0 === b && (b = Number.POSITIVE_INFINITY);
        void 0 === a && (a = Number.POSITIVE_INFINITY);
        return N.call(this, new R(b, a, c));
    };
    g.prototype.publishLast = function () {
        return N.call(this, new P());
    };
    g.prototype.race = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        1 === b.length && H(b[0]) && (b = b[0]);
        return this.lift.call(ua.apply(void 0, [this].concat(b)));
    };
    g.prototype.reduce = function (b, a) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return this.lift(new oa(b, a, c));
    };
    var db = (function () {
            function b(a, c) {
                this.count = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new be(a, this.count, this.source));
            };
            return b;
        })(),
        be = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.count = e;
                this.source = d;
            }
            __extends(a, b);
            a.prototype.complete = function () {
                if (!this.isStopped) {
                    var a = this.source,
                        e = this.count;
                    if (0 === e) return b.prototype.complete.call(this);
                    -1 < e && (this.count = e - 1);
                    this.unsubscribe();
                    this.closed = this.isStopped = !1;
                    a.subscribe(this);
                }
            };
            return a;
        })(p);
    g.prototype.repeat = function (b) {
        void 0 === b && (b = -1);
        return 0 === b
            ? new L()
            : 0 > b
            ? this.lift(new db(-1, this))
            : this.lift(new db(b - 1, this));
    };
    var de = (function () {
            function b(a, c) {
                this.notifier = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new ce(a, this.notifier, this.source));
            };
            return b;
        })(),
        ce = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.notifier = e;
                this.source = d;
            }
            __extends(a, b);
            a.prototype.complete = function () {
                if (!this.isStopped) {
                    var a = this.notifications,
                        e = this.retries,
                        d = this.retriesSubscription;
                    if (e) this.retriesSubscription = this.notifications = null;
                    else {
                        a = new y();
                        e = k(this.notifier)(a);
                        if (e === n) return b.prototype.complete.call(this);
                        d = q(this, e);
                    }
                    this.unsubscribe();
                    this.closed = !1;
                    this.notifications = a;
                    this.retries = e;
                    this.retriesSubscription = d;
                    a.next();
                }
            };
            a.prototype._unsubscribe = function () {
                var a = this.notifications,
                    b = this.retriesSubscription;
                a && (a.unsubscribe(), (this.notifications = null));
                b && (b.unsubscribe(), (this.retriesSubscription = null));
                this.retries = null;
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                a = this.notifications;
                b = this.retries;
                d = this.retriesSubscription;
                this.retriesSubscription =
                    this.retries =
                    this.notifications =
                        null;
                this.unsubscribe();
                this.closed = this.isStopped = !1;
                this.notifications = a;
                this.retries = b;
                this.retriesSubscription = d;
                this.source.subscribe(this);
            };
            return a;
        })(t);
    g.prototype.repeatWhen = function (b) {
        return this.lift(new de(b, this));
    };
    var fe = (function () {
            function b(a, c) {
                this.count = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new ee(a, this.count, this.source));
            };
            return b;
        })(),
        ee = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.count = e;
                this.source = d;
            }
            __extends(a, b);
            a.prototype.error = function (a) {
                if (!this.isStopped) {
                    var c = this.source,
                        d = this.count;
                    if (0 === d) return b.prototype.error.call(this, a);
                    -1 < d && (this.count = d - 1);
                    this.unsubscribe();
                    this.closed = this.isStopped = !1;
                    c.subscribe(this);
                }
            };
            return a;
        })(p);
    g.prototype.retry = function (b) {
        void 0 === b && (b = -1);
        return this.lift(new fe(b, this));
    };
    var he = (function () {
            function b(a, c) {
                this.notifier = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new ge(a, this.notifier, this.source));
            };
            return b;
        })(),
        ge = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.notifier = e;
                this.source = d;
            }
            __extends(a, b);
            a.prototype.error = function (a) {
                if (!this.isStopped) {
                    var c = this.errors,
                        d = this.retries,
                        f = this.retriesSubscription;
                    if (d) this.retriesSubscription = this.errors = null;
                    else {
                        c = new y();
                        d = k(this.notifier)(c);
                        if (d === n) return b.prototype.error.call(this, n.e);
                        f = q(this, d);
                    }
                    this.unsubscribe();
                    this.closed = !1;
                    this.errors = c;
                    this.retries = d;
                    this.retriesSubscription = f;
                    c.next(a);
                }
            };
            a.prototype._unsubscribe = function () {
                var a = this.errors,
                    b = this.retriesSubscription;
                a && (a.unsubscribe(), (this.errors = null));
                b && (b.unsubscribe(), (this.retriesSubscription = null));
                this.retries = null;
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                a = this.errors;
                b = this.retries;
                d = this.retriesSubscription;
                this.retriesSubscription = this.retries = this.errors = null;
                this.unsubscribe();
                this.closed = this.isStopped = !1;
                this.errors = a;
                this.retries = b;
                this.retriesSubscription = d;
                this.source.subscribe(this);
            };
            return a;
        })(t);
    g.prototype.retryWhen = function (b) {
        return this.lift(new he(b, this));
    };
    var je = (function () {
            function b(a) {
                this.notifier = a;
            }
            b.prototype.call = function (a, c) {
                a = new ie(a);
                c = c.subscribe(a);
                c.add(q(a, this.notifier));
                return c;
            };
            return b;
        })(),
        ie = (function (b) {
            function a() {
                b.apply(this, arguments);
                this.hasValue = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.value = a;
                this.hasValue = !0;
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.emitValue();
            };
            a.prototype.notifyComplete = function () {
                this.emitValue();
            };
            a.prototype.emitValue = function () {
                this.hasValue &&
                    ((this.hasValue = !1), this.destination.next(this.value));
            };
            return a;
        })(t);
    g.prototype.sample = function (b) {
        return this.lift(new je(b));
    };
    var le = (function () {
            function b(a, c) {
                this.period = a;
                this.scheduler = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new ke(a, this.period, this.scheduler));
            };
            return b;
        })(),
        ke = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.period = e;
                this.scheduler = d;
                this.hasValue = !1;
                this.add(d.schedule(Kb, e, { subscriber: this, period: e }));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.lastValue = a;
                this.hasValue = !0;
            };
            a.prototype.notifyNext = function () {
                this.hasValue &&
                    ((this.hasValue = !1),
                    this.destination.next(this.lastValue));
            };
            return a;
        })(p);
    g.prototype.sampleTime = function (b, a) {
        void 0 === a && (a = C);
        return this.lift(new le(b, a));
    };
    var ne = (function () {
            function b(a, c, b) {
                void 0 === b && (b = !1);
                this.accumulator = a;
                this.seed = c;
                this.hasSeed = b;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(
                    new me(a, this.accumulator, this.seed, this.hasSeed)
                );
            };
            return b;
        })(),
        me = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.accumulator = e;
                this._seed = d;
                this.hasSeed = f;
                this.index = 0;
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "seed", {
                get: function () {
                    return this._seed;
                },
                set: function (a) {
                    this.hasSeed = !0;
                    this._seed = a;
                },
                enumerable: !0,
                configurable: !0,
            });
            a.prototype._next = function (a) {
                if (this.hasSeed) return this._tryNext(a);
                this.seed = a;
                this.destination.next(a);
            };
            a.prototype._tryNext = function (a) {
                var c = this.index++,
                    b;
                try {
                    b = this.accumulator(this.seed, a, c);
                } catch (f) {
                    this.destination.error(f);
                }
                this.seed = b;
                this.destination.next(b);
            };
            return a;
        })(p);
    g.prototype.scan = function (b, a) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return this.lift(new ne(b, a, c));
    };
    var pe = (function () {
            function b(a, c) {
                this.compareTo = a;
                this.comparor = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new oe(a, this.compareTo, this.comparor));
            };
            return b;
        })(),
        oe = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.compareTo = e;
                this.comparor = d;
                this._a = [];
                this._b = [];
                this._oneComplete = !1;
                this.add(e.subscribe(new qe(a, this)));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this._oneComplete && 0 === this._b.length
                    ? this.emit(!1)
                    : (this._a.push(a), this.checkValues());
            };
            a.prototype._complete = function () {
                this._oneComplete
                    ? this.emit(0 === this._a.length && 0 === this._b.length)
                    : (this._oneComplete = !0);
            };
            a.prototype.checkValues = function () {
                for (
                    var a = this._a, b = this._b, d = this.comparor;
                    0 < a.length && 0 < b.length;

                ) {
                    var f = a.shift(),
                        h = b.shift();
                    d
                        ? ((f = k(d)(f, h)),
                          f === n && this.destination.error(n.e))
                        : (f = f === h);
                    f || this.emit(!1);
                }
            };
            a.prototype.emit = function (a) {
                var c = this.destination;
                c.next(a);
                c.complete();
            };
            a.prototype.nextB = function (a) {
                this._oneComplete && 0 === this._a.length
                    ? this.emit(!1)
                    : (this._b.push(a), this.checkValues());
            };
            return a;
        })(p),
        qe = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.parent = e;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.parent.nextB(a);
            };
            a.prototype._error = function (a) {
                this.parent.error(a);
            };
            a.prototype._complete = function () {
                this.parent._complete();
            };
            return a;
        })(p);
    g.prototype.sequenceEqual = function (b, a) {
        return this.lift(new pe(b, a));
    };
    g.prototype.share = function () {
        return N.call(this, Lb).refCount();
    };
    var se = (function () {
            function b(a, c) {
                this.predicate = a;
                this.source = c;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new re(a, this.predicate, this.source));
            };
            return b;
        })(),
        re = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.predicate = e;
                this.source = d;
                this.seenValue = !1;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype.applySingleValue = function (a) {
                this.seenValue
                    ? this.destination.error(
                          "Sequence contains more than one element"
                      )
                    : ((this.seenValue = !0), (this.singleValue = a));
            };
            a.prototype._next = function (a) {
                var c = this.predicate;
                this.index++;
                c ? this.tryNext(a) : this.applySingleValue(a);
            };
            a.prototype.tryNext = function (a) {
                try {
                    this.predicate(a, this.index, this.source) &&
                        this.applySingleValue(a);
                } catch (e) {
                    this.destination.error(e);
                }
            };
            a.prototype._complete = function () {
                var a = this.destination;
                0 < this.index
                    ? (a.next(this.seenValue ? this.singleValue : void 0),
                      a.complete())
                    : a.error(new ea());
            };
            return a;
        })(p);
    g.prototype.single = function (b) {
        return this.lift(new se(b, this));
    };
    var ue = (function () {
            function b(a) {
                this.total = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new te(a, this.total));
            };
            return b;
        })(),
        te = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.total = e;
                this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                ++this.count > this.total && this.destination.next(a);
            };
            return a;
        })(p);
    g.prototype.skip = function (b) {
        return this.lift(new ue(b));
    };
    var we = (function () {
            function b(a) {
                this.notifier = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new ve(a, this.notifier));
            };
            return b;
        })(),
        ve = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.isInnerStopped = this.hasValue = !1;
                this.add(q(this, e));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.hasValue && b.prototype._next.call(this, a);
            };
            a.prototype._complete = function () {
                this.isInnerStopped
                    ? b.prototype._complete.call(this)
                    : this.unsubscribe();
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.hasValue = !0;
            };
            a.prototype.notifyComplete = function () {
                this.isInnerStopped = !0;
                this.isStopped && b.prototype._complete.call(this);
            };
            return a;
        })(t);
    g.prototype.skipUntil = function (b) {
        return this.lift(new we(b));
    };
    var ye = (function () {
            function b(a) {
                this.predicate = a;
            }
            b.prototype.call = function (a, c) {
                return c.subscribe(new xe(a, this.predicate));
            };
            return b;
        })(),
        xe = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.predicate = e;
                this.skipping = !0;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var c = this.destination;
                this.skipping && this.tryCallPredicate(a);
                this.skipping || c.next(a);
            };
            a.prototype.tryCallPredicate = function (a) {
                try {
                    this.skipping = !!this.predicate(a, this.index++);
                } catch (e) {
                    this.destination.error(e);
                }
            };
            return a;
        })(p);
    g.prototype.skipWhile = function (b) {
        return this.lift(new ye(b));
    };
    g.prototype.startWith = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        a = b[b.length - 1];
        G(a) ? b.pop() : (a = null);
        var c = b.length;
        return 1 === c
            ? S(new la(b[0], a), this)
            : 1 < c
            ? S(new K(b, a), this)
            : S(new L(a), this);
    };
    var eb = new ((function () {
            function b(a) {
                this.root = a;
                a.setImmediate && "function" === typeof a.setImmediate
                    ? ((this.setImmediate = a.setImmediate.bind(a)),
                      (this.clearImmediate = a.clearImmediate.bind(a)))
                    : ((this.nextHandle = 1),
                      (this.tasksByHandle = {}),
                      (this.currentlyRunningATask = !1),
                      this.canUseProcessNextTick()
                          ? (this.setImmediate =
                                this.createProcessNextTickSetImmediate())
                          : this.canUsePostMessage()
                          ? (this.setImmediate =
                                this.createPostMessageSetImmediate())
                          : this.canUseMessageChannel()
                          ? (this.setImmediate =
                                this.createMessageChannelSetImmediate())
                          : this.canUseReadyStateChange()
                          ? (this.setImmediate =
                                this.createReadyStateChangeSetImmediate())
                          : (this.setImmediate =
                                this.createSetTimeoutSetImmediate()),
                      (a = function e(a) {
                          delete e.instance.tasksByHandle[a];
                      }),
                      (a.instance = this),
                      (this.clearImmediate = a));
            }
            b.prototype.identify = function (a) {
                return this.root.Object.prototype.toString.call(a);
            };
            b.prototype.canUseProcessNextTick = function () {
                return "[object process]" === this.identify(this.root.process);
            };
            b.prototype.canUseMessageChannel = function () {
                return !!this.root.MessageChannel;
            };
            b.prototype.canUseReadyStateChange = function () {
                var a = this.root.document;
                return !!(
                    a && "onreadystatechange" in a.createElement("script")
                );
            };
            b.prototype.canUsePostMessage = function () {
                var a = this.root;
                if (a.postMessage && !a.importScripts) {
                    var c = !0,
                        b = a.onmessage;
                    a.onmessage = function () {
                        c = !1;
                    };
                    a.postMessage("", "*");
                    a.onmessage = b;
                    return c;
                }
                return !1;
            };
            b.prototype.partiallyApplied = function (a) {
                for (var c = [], b = 1; b < arguments.length; b++)
                    c[b - 1] = arguments[b];
                b = function f() {
                    var a = f.handler,
                        c = f.args;
                    "function" === typeof a
                        ? a.apply(void 0, c)
                        : new Function("" + a)();
                };
                b.handler = a;
                b.args = c;
                return b;
            };
            b.prototype.addFromSetImmediateArguments = function (a) {
                this.tasksByHandle[this.nextHandle] =
                    this.partiallyApplied.apply(void 0, a);
                return this.nextHandle++;
            };
            b.prototype.createProcessNextTickSetImmediate = function () {
                var a = function e() {
                    var a = e.instance,
                        b = a.addFromSetImmediateArguments(arguments);
                    a.root.process.nextTick(
                        a.partiallyApplied(a.runIfPresent, b)
                    );
                    return b;
                };
                a.instance = this;
                return a;
            };
            b.prototype.createPostMessageSetImmediate = function () {
                var a = this.root,
                    b = "setImmediate$" + a.Math.random() + "$",
                    e = function f(c) {
                        var e = f.instance;
                        c.source === a &&
                            "string" === typeof c.data &&
                            0 === c.data.indexOf(b) &&
                            e.runIfPresent(+c.data.slice(b.length));
                    };
                e.instance = this;
                a.addEventListener("message", e, !1);
                e = function h() {
                    var a = h,
                        b = a.messagePrefix,
                        a = a.instance,
                        c = a.addFromSetImmediateArguments(arguments);
                    a.root.postMessage(b + c, "*");
                    return c;
                };
                e.instance = this;
                e.messagePrefix = b;
                return e;
            };
            b.prototype.runIfPresent = function (a) {
                if (this.currentlyRunningATask)
                    this.root.setTimeout(
                        this.partiallyApplied(this.runIfPresent, a),
                        0
                    );
                else {
                    var b = this.tasksByHandle[a];
                    if (b) {
                        this.currentlyRunningATask = !0;
                        try {
                            b();
                        } finally {
                            this.clearImmediate(a),
                                (this.currentlyRunningATask = !1);
                        }
                    }
                }
            };
            b.prototype.createMessageChannelSetImmediate = function () {
                var a = this,
                    b = new this.root.MessageChannel();
                b.port1.onmessage = function (b) {
                    a.runIfPresent(b.data);
                };
                var e = function f() {
                    var a = f,
                        b = a.channel,
                        a = a.instance.addFromSetImmediateArguments(arguments);
                    b.port2.postMessage(a);
                    return a;
                };
                e.channel = b;
                e.instance = this;
                return e;
            };
            b.prototype.createReadyStateChangeSetImmediate = function () {
                var a = function e() {
                    var a = e.instance,
                        b = a.root.document,
                        h = b.documentElement,
                        g = a.addFromSetImmediateArguments(arguments),
                        k = b.createElement("script");
                    k.onreadystatechange = function () {
                        a.runIfPresent(g);
                        k.onreadystatechange = null;
                        h.removeChild(k);
                        k = null;
                    };
                    h.appendChild(k);
                    return g;
                };
                a.instance = this;
                return a;
            };
            b.prototype.createSetTimeoutSetImmediate = function () {
                var a = function e() {
                    var a = e.instance,
                        b = a.addFromSetImmediateArguments(arguments);
                    a.root.setTimeout(a.partiallyApplied(a.runIfPresent, b), 0);
                    return b;
                };
                a.instance = this;
                return a;
            };
            return b;
        })())(r),
        ze = (function (b) {
            function a(a, e) {
                b.call(this, a, e);
                this.scheduler = a;
                this.work = e;
            }
            __extends(a, b);
            a.prototype.requestAsyncId = function (a, e, d) {
                void 0 === d && (d = 0);
                if (null !== d && 0 < d)
                    return b.prototype.requestAsyncId.call(this, a, e, d);
                a.actions.push(this);
                return (
                    a.scheduled ||
                    (a.scheduled = eb.setImmediate(a.flush.bind(a, null)))
                );
            };
            a.prototype.recycleAsyncId = function (a, e, d) {
                void 0 === d && (d = 0);
                if ((null !== d && 0 < d) || (null === d && 0 < this.delay))
                    return b.prototype.recycleAsyncId.call(this, a, e, d);
                0 === a.actions.length &&
                    (eb.clearImmediate(e), (a.scheduled = void 0));
            };
            return a;
        })(U),
        fa = new ((function (b) {
            function a() {
                b.apply(this, arguments);
            }
            __extends(a, b);
            a.prototype.flush = function (a) {
                this.active = !0;
                this.scheduled = void 0;
                var b = this.actions,
                    c,
                    f = -1,
                    h = b.length;
                a = a || b.shift();
                do if ((c = a.execute(a.state, a.delay))) break;
                while (++f < h && (a = b.shift()));
                this.active = !1;
                if (c) {
                    for (; ++f < h && (a = b.shift()); ) a.unsubscribe();
                    throw c;
                }
            };
            return a;
        })(V))(ze),
        Ae = (function (b) {
            function a(a, e, d) {
                void 0 === e && (e = 0);
                void 0 === d && (d = fa);
                b.call(this);
                this.source = a;
                this.delayTime = e;
                this.scheduler = d;
                if (!ga(e) || 0 > e) this.delayTime = 0;
                (d && "function" === typeof d.schedule) ||
                    (this.scheduler = fa);
            }
            __extends(a, b);
            a.create = function (b, e, d) {
                void 0 === e && (e = 0);
                void 0 === d && (d = fa);
                return new a(b, e, d);
            };
            a.dispatch = function (a) {
                return this.add(a.source.subscribe(a.subscriber));
            };
            a.prototype._subscribe = function (b) {
                return this.scheduler.schedule(a.dispatch, this.delayTime, {
                    source: this.source,
                    subscriber: b,
                });
            };
            return a;
        })(g),
        Be = (function () {
            function b(a, b) {
                this.scheduler = a;
                this.delay = b;
            }
            b.prototype.call = function (a, b) {
                return new Ae(b, this.delay, this.scheduler).subscribe(a);
            };
            return b;
        })();
    g.prototype.subscribeOn = function (b, a) {
        void 0 === a && (a = 0);
        return this.lift(new Be(b, a));
    };
    var Mb = (function () {
            function b() {}
            b.prototype.call = function (a, b) {
                return b.subscribe(new Ce(a));
            };
            return b;
        })(),
        Ce = (function (b) {
            function a(a) {
                b.call(this, a);
                this.active = 0;
                this.hasCompleted = !1;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.unsubscribeInner();
                this.active++;
                this.add((this.innerSubscription = q(this, a)));
            };
            a.prototype._complete = function () {
                this.hasCompleted = !0;
                0 === this.active && this.destination.complete();
            };
            a.prototype.unsubscribeInner = function () {
                this.active = 0 < this.active ? this.active - 1 : 0;
                var a = this.innerSubscription;
                a && (a.unsubscribe(), this.remove(a));
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.destination.next(b);
            };
            a.prototype.notifyError = function (a) {
                this.destination.error(a);
            };
            a.prototype.notifyComplete = function () {
                this.unsubscribeInner();
                this.hasCompleted &&
                    0 === this.active &&
                    this.destination.complete();
            };
            return a;
        })(t);
    g.prototype.switch = Ka;
    g.prototype._switch = Ka;
    var Ee = (function () {
            function b(a, b) {
                this.project = a;
                this.resultSelector = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new De(a, this.project, this.resultSelector)
                );
            };
            return b;
        })(),
        De = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.project = e;
                this.resultSelector = d;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b,
                    c = this.index++;
                try {
                    b = this.project(a, c);
                } catch (f) {
                    this.destination.error(f);
                    return;
                }
                this._innerSub(b, a, c);
            };
            a.prototype._innerSub = function (a, b, d) {
                var c = this.innerSubscription;
                c && c.unsubscribe();
                this.add((this.innerSubscription = q(this, a, b, d)));
            };
            a.prototype._complete = function () {
                var a = this.innerSubscription;
                (a && !a.closed) || b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                this.innerSubscription = null;
            };
            a.prototype.notifyComplete = function (a) {
                this.remove(a);
                this.innerSubscription = null;
                this.isStopped && b.prototype._complete.call(this);
            };
            a.prototype.notifyNext = function (a, b, d, f, h) {
                this.resultSelector
                    ? this._tryNotifyNext(a, b, d, f)
                    : this.destination.next(b);
            };
            a.prototype._tryNotifyNext = function (a, b, d, f) {
                var c;
                try {
                    c = this.resultSelector(a, b, d, f);
                } catch (D) {
                    this.destination.error(D);
                    return;
                }
                this.destination.next(c);
            };
            return a;
        })(t);
    g.prototype.switchMap = function (b, a) {
        return this.lift(new Ee(b, a));
    };
    var Ge = (function () {
            function b(a, b) {
                this.observable = a;
                this.resultSelector = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new Fe(a, this.observable, this.resultSelector)
                );
            };
            return b;
        })(),
        Fe = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.inner = e;
                this.resultSelector = d;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.innerSubscription;
                b && b.unsubscribe();
                this.add(
                    (this.innerSubscription = q(
                        this,
                        this.inner,
                        a,
                        this.index++
                    ))
                );
            };
            a.prototype._complete = function () {
                var a = this.innerSubscription;
                (a && !a.closed) || b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                this.innerSubscription = null;
            };
            a.prototype.notifyComplete = function (a) {
                this.remove(a);
                this.innerSubscription = null;
                this.isStopped && b.prototype._complete.call(this);
            };
            a.prototype.notifyNext = function (a, b, d, f, g) {
                g = this.destination;
                this.resultSelector
                    ? this.tryResultSelector(a, b, d, f)
                    : g.next(b);
            };
            a.prototype.tryResultSelector = function (a, b, d, f) {
                var c = this.resultSelector,
                    e = this.destination,
                    g;
                try {
                    g = c(a, b, d, f);
                } catch (J) {
                    e.error(J);
                    return;
                }
                e.next(g);
            };
            return a;
        })(t);
    g.prototype.switchMapTo = function (b, a) {
        return this.lift(new Ge(b, a));
    };
    var Ie = (function () {
            function b(a) {
                this.total = a;
                if (0 > this.total) throw new W();
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new He(a, this.total));
            };
            return b;
        })(),
        He = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.total = e;
                this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.total,
                    c = ++this.count;
                c <= b &&
                    (this.destination.next(a),
                    c === b &&
                        (this.destination.complete(), this.unsubscribe()));
            };
            return a;
        })(p);
    g.prototype.take = function (b) {
        return 0 === b ? new L() : this.lift(new Ie(b));
    };
    var Ke = (function () {
            function b(a) {
                this.total = a;
                if (0 > this.total) throw new W();
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Je(a, this.total));
            };
            return b;
        })(),
        Je = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.total = e;
                this.ring = [];
                this.count = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.ring,
                    c = this.total,
                    f = this.count++;
                b.length < c ? b.push(a) : (b[f % c] = a);
            };
            a.prototype._complete = function () {
                var a = this.destination,
                    b = this.count;
                if (0 < b)
                    for (
                        var d =
                                this.count >= this.total
                                    ? this.total
                                    : this.count,
                            f = this.ring,
                            g = 0;
                        g < d;
                        g++
                    ) {
                        var k = b++ % d;
                        a.next(f[k]);
                    }
                a.complete();
            };
            return a;
        })(p);
    g.prototype.takeLast = function (b) {
        return 0 === b ? new L() : this.lift(new Ke(b));
    };
    var Me = (function () {
            function b(a) {
                this.notifier = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Le(a, this.notifier));
            };
            return b;
        })(),
        Le = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.notifier = e;
                this.add(q(this, e));
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, g) {
                this.complete();
            };
            a.prototype.notifyComplete = function () {};
            return a;
        })(t);
    g.prototype.takeUntil = function (b) {
        return this.lift(new Me(b));
    };
    var Oe = (function () {
            function b(a) {
                this.predicate = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Ne(a, this.predicate));
            };
            return b;
        })(),
        Ne = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.predicate = e;
                this.index = 0;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.destination,
                    c;
                try {
                    c = this.predicate(a, this.index++);
                } catch (f) {
                    b.error(f);
                    return;
                }
                this.nextOrComplete(a, c);
            };
            a.prototype.nextOrComplete = function (a, b) {
                var c = this.destination;
                b ? c.next(a) : c.complete();
            };
            return a;
        })(p);
    g.prototype.takeWhile = function (b) {
        return this.lift(new Oe(b));
    };
    var Qe = (function () {
            function b(a) {
                this.durationSelector = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Pe(a, this.durationSelector));
            };
            return b;
        })(),
        Pe = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.destination = a;
                this.durationSelector = e;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.throttled || this.tryDurationSelector(a);
            };
            a.prototype.tryDurationSelector = function (a) {
                var b = null;
                try {
                    b = this.durationSelector(a);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.emitAndThrottle(a, b);
            };
            a.prototype.emitAndThrottle = function (a, b) {
                this.add((this.throttled = q(this, b)));
                this.destination.next(a);
            };
            a.prototype._unsubscribe = function () {
                var a = this.throttled;
                a && (this.remove(a), (this.throttled = null), a.unsubscribe());
            };
            a.prototype.notifyNext = function (a, b, d, f, g) {
                this._unsubscribe();
            };
            a.prototype.notifyComplete = function () {
                this._unsubscribe();
            };
            return a;
        })(t);
    g.prototype.throttle = function (b) {
        return this.lift(new Qe(b));
    };
    var Se = (function () {
            function b(a, b) {
                this.duration = a;
                this.scheduler = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Re(a, this.duration, this.scheduler));
            };
            return b;
        })(),
        Re = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.duration = e;
                this.scheduler = d;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.throttled ||
                    (this.add(
                        (this.throttled = this.scheduler.schedule(
                            Nb,
                            this.duration,
                            { subscriber: this }
                        ))
                    ),
                    this.destination.next(a));
            };
            a.prototype.clearThrottle = function () {
                var a = this.throttled;
                a && (a.unsubscribe(), this.remove(a), (this.throttled = null));
            };
            return a;
        })(p);
    g.prototype.throttleTime = function (b, a) {
        void 0 === a && (a = C);
        return this.lift(new Se(b, a));
    };
    var fb = (function () {
            return function (b, a) {
                this.value = b;
                this.interval = a;
            };
        })(),
        Ue = (function () {
            function b(a) {
                this.scheduler = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Te(a, this.scheduler));
            };
            return b;
        })(),
        Te = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.scheduler = e;
                this.lastTime = 0;
                this.lastTime = e.now();
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.scheduler.now(),
                    c = b - this.lastTime;
                this.lastTime = b;
                this.destination.next(new fb(a, c));
            };
            return a;
        })(p);
    g.prototype.timeInterval = function (b) {
        void 0 === b && (b = C);
        return this.lift(new Ue(b));
    };
    var gb = (function (b) {
            function a() {
                var a = b.call(this, "Timeout has occurred");
                this.name = a.name = "TimeoutError";
                this.stack = a.stack;
                this.message = a.message;
            }
            __extends(a, b);
            return a;
        })(Error),
        We = (function () {
            function b(a, b, e, d) {
                this.waitFor = a;
                this.absoluteTimeout = b;
                this.scheduler = e;
                this.errorInstance = d;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new Ve(
                        a,
                        this.absoluteTimeout,
                        this.waitFor,
                        this.scheduler,
                        this.errorInstance
                    )
                );
            };
            return b;
        })(),
        Ve = (function (b) {
            function a(a, e, d, f, g) {
                b.call(this, a);
                this.absoluteTimeout = e;
                this.waitFor = d;
                this.scheduler = f;
                this.errorInstance = g;
                this._previousIndex = this.index = 0;
                this._hasCompleted = !1;
                this.scheduleTimeout();
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "previousIndex", {
                get: function () {
                    return this._previousIndex;
                },
                enumerable: !0,
                configurable: !0,
            });
            Object.defineProperty(a.prototype, "hasCompleted", {
                get: function () {
                    return this._hasCompleted;
                },
                enumerable: !0,
                configurable: !0,
            });
            a.dispatchTimeout = function (a) {
                var b = a.subscriber;
                a = a.index;
                b.hasCompleted || b.previousIndex !== a || b.notifyTimeout();
            };
            a.prototype.scheduleTimeout = function () {
                var b = this.index;
                this.scheduler.schedule(a.dispatchTimeout, this.waitFor, {
                    subscriber: this,
                    index: b,
                });
                this.index++;
                this._previousIndex = b;
            };
            a.prototype._next = function (a) {
                this.destination.next(a);
                this.absoluteTimeout || this.scheduleTimeout();
            };
            a.prototype._error = function (a) {
                this.destination.error(a);
                this._hasCompleted = !0;
            };
            a.prototype._complete = function () {
                this.destination.complete();
                this._hasCompleted = !0;
            };
            a.prototype.notifyTimeout = function () {
                this.error(this.errorInstance);
            };
            return a;
        })(p);
    g.prototype.timeout = function (b, a) {
        void 0 === a && (a = C);
        var c = ba(b);
        b = c ? +b - a.now() : Math.abs(b);
        return this.lift(new We(b, c, a, new gb()));
    };
    var Ye = (function () {
            function b(a, b, e, d) {
                this.waitFor = a;
                this.absoluteTimeout = b;
                this.withObservable = e;
                this.scheduler = d;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new Xe(
                        a,
                        this.absoluteTimeout,
                        this.waitFor,
                        this.withObservable,
                        this.scheduler
                    )
                );
            };
            return b;
        })(),
        Xe = (function (b) {
            function a(a, e, d, f, g) {
                b.call(this);
                this.destination = a;
                this.absoluteTimeout = e;
                this.waitFor = d;
                this.withObservable = f;
                this.scheduler = g;
                this.timeoutSubscription = void 0;
                this._previousIndex = this.index = 0;
                this._hasCompleted = !1;
                a.add(this);
                this.scheduleTimeout();
            }
            __extends(a, b);
            Object.defineProperty(a.prototype, "previousIndex", {
                get: function () {
                    return this._previousIndex;
                },
                enumerable: !0,
                configurable: !0,
            });
            Object.defineProperty(a.prototype, "hasCompleted", {
                get: function () {
                    return this._hasCompleted;
                },
                enumerable: !0,
                configurable: !0,
            });
            a.dispatchTimeout = function (a) {
                var b = a.subscriber;
                a = a.index;
                b.hasCompleted || b.previousIndex !== a || b.handleTimeout();
            };
            a.prototype.scheduleTimeout = function () {
                var b = this.index;
                this.scheduler.schedule(a.dispatchTimeout, this.waitFor, {
                    subscriber: this,
                    index: b,
                });
                this.index++;
                this._previousIndex = b;
            };
            a.prototype._next = function (a) {
                this.destination.next(a);
                this.absoluteTimeout || this.scheduleTimeout();
            };
            a.prototype._error = function (a) {
                this.destination.error(a);
                this._hasCompleted = !0;
            };
            a.prototype._complete = function () {
                this.destination.complete();
                this._hasCompleted = !0;
            };
            a.prototype.handleTimeout = function () {
                if (!this.closed) {
                    var a = this.withObservable;
                    this.unsubscribe();
                    this.destination.add(
                        (this.timeoutSubscription = q(this, a))
                    );
                }
            };
            return a;
        })(t);
    g.prototype.timeoutWith = function (b, a, c) {
        void 0 === c && (c = C);
        var e = ba(b);
        b = e ? +b - c.now() : Math.abs(b);
        return this.lift(new Ye(b, e, a, c));
    };
    var hb = (function () {
            return function (b, a) {
                this.value = b;
                this.timestamp = a;
            };
        })(),
        $e = (function () {
            function b(a) {
                this.scheduler = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new Ze(a, this.scheduler));
            };
            return b;
        })(),
        Ze = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.scheduler = e;
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.scheduler.now();
                this.destination.next(new hb(a, b));
            };
            return a;
        })(p);
    g.prototype.timestamp = function (b) {
        void 0 === b && (b = C);
        return this.lift(new $e(b));
    };
    var bf = (function () {
            function b() {}
            b.prototype.call = function (a, b) {
                return b.subscribe(new af(a));
            };
            return b;
        })(),
        af = (function (b) {
            function a(a) {
                b.call(this, a);
                this.array = [];
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                this.array.push(a);
            };
            a.prototype._complete = function () {
                this.destination.next(this.array);
                this.destination.complete();
            };
            return a;
        })(p);
    g.prototype.toArray = function () {
        return this.lift(new bf());
    };
    g.prototype.toPromise = function (b) {
        var a = this;
        b ||
            (r.Rx && r.Rx.config && r.Rx.config.Promise
                ? (b = r.Rx.config.Promise)
                : r.Promise && (b = r.Promise));
        if (!b) throw Error("no Promise impl found");
        return new b(function (b, e) {
            var c;
            a.subscribe(
                function (a) {
                    return (c = a);
                },
                function (a) {
                    return e(a);
                },
                function () {
                    return b(c);
                }
            );
        });
    };
    var df = (function () {
            function b(a) {
                this.windowBoundaries = a;
            }
            b.prototype.call = function (a, b) {
                a = new cf(a);
                b = b.subscribe(a);
                b.closed || a.add(q(a, this.windowBoundaries));
                return b;
            };
            return b;
        })(),
        cf = (function (b) {
            function a(a) {
                b.call(this, a);
                this.window = new y();
                a.next(this.window);
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, g) {
                this.openWindow();
            };
            a.prototype.notifyError = function (a, b) {
                this._error(a);
            };
            a.prototype.notifyComplete = function (a) {
                this._complete();
            };
            a.prototype._next = function (a) {
                this.window.next(a);
            };
            a.prototype._error = function (a) {
                this.window.error(a);
                this.destination.error(a);
            };
            a.prototype._complete = function () {
                this.window.complete();
                this.destination.complete();
            };
            a.prototype._unsubscribe = function () {
                this.window = null;
            };
            a.prototype.openWindow = function () {
                var a = this.window;
                a && a.complete();
                var a = this.destination,
                    b = (this.window = new y());
                a.next(b);
            };
            return a;
        })(t);
    g.prototype.window = function (b) {
        return this.lift(new df(b));
    };
    var ff = (function () {
            function b(a, b) {
                this.windowSize = a;
                this.startWindowEvery = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new ef(a, this.windowSize, this.startWindowEvery)
                );
            };
            return b;
        })(),
        ef = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.destination = a;
                this.windowSize = e;
                this.startWindowEvery = d;
                this.windows = [new y()];
                this.count = 0;
                a.next(this.windows[0]);
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                for (
                    var b =
                            0 < this.startWindowEvery
                                ? this.startWindowEvery
                                : this.windowSize,
                        c = this.destination,
                        f = this.windowSize,
                        g = this.windows,
                        k = g.length,
                        l = 0;
                    l < k && !this.closed;
                    l++
                )
                    g[l].next(a);
                a = this.count - f + 1;
                0 <= a && 0 === a % b && !this.closed && g.shift().complete();
                0 !== ++this.count % b ||
                    this.closed ||
                    ((b = new y()), g.push(b), c.next(b));
            };
            a.prototype._error = function (a) {
                var b = this.windows;
                if (b)
                    for (; 0 < b.length && !this.closed; ) b.shift().error(a);
                this.destination.error(a);
            };
            a.prototype._complete = function () {
                var a = this.windows;
                if (a)
                    for (; 0 < a.length && !this.closed; ) a.shift().complete();
                this.destination.complete();
            };
            a.prototype._unsubscribe = function () {
                this.count = 0;
                this.windows = null;
            };
            return a;
        })(p);
    g.prototype.windowCount = function (b, a) {
        void 0 === a && (a = 0);
        return this.lift(new ff(b, a));
    };
    var hf = (function () {
            function b(a, b, e) {
                this.windowTimeSpan = a;
                this.windowCreationInterval = b;
                this.scheduler = e;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new gf(
                        a,
                        this.windowTimeSpan,
                        this.windowCreationInterval,
                        this.scheduler
                    )
                );
            };
            return b;
        })(),
        gf = (function (b) {
            function a(a, e, d, f) {
                b.call(this, a);
                this.destination = a;
                this.windowTimeSpan = e;
                this.windowCreationInterval = d;
                this.scheduler = f;
                this.windows = [];
                if (null !== d && 0 <= d) {
                    a = {
                        subscriber: this,
                        window: this.openWindow(),
                        context: null,
                    };
                    var c = {
                        windowTimeSpan: e,
                        windowCreationInterval: d,
                        subscriber: this,
                        scheduler: f,
                    };
                    this.add(f.schedule(La, e, a));
                    this.add(f.schedule(Pb, d, c));
                } else
                    (d = {
                        subscriber: this,
                        window: this.openWindow(),
                        windowTimeSpan: e,
                    }),
                        this.add(f.schedule(Ob, e, d));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                for (var b = this.windows, c = b.length, f = 0; f < c; f++) {
                    var g = b[f];
                    g.closed || g.next(a);
                }
            };
            a.prototype._error = function (a) {
                for (var b = this.windows; 0 < b.length; ) b.shift().error(a);
                this.destination.error(a);
            };
            a.prototype._complete = function () {
                for (var a = this.windows; 0 < a.length; ) {
                    var b = a.shift();
                    b.closed || b.complete();
                }
                this.destination.complete();
            };
            a.prototype.openWindow = function () {
                var a = new y();
                this.windows.push(a);
                this.destination.next(a);
                return a;
            };
            a.prototype.closeWindow = function (a) {
                a.complete();
                var b = this.windows;
                b.splice(b.indexOf(a), 1);
            };
            return a;
        })(p);
    g.prototype.windowTime = function (b, a, c) {
        void 0 === a && (a = null);
        void 0 === c && (c = C);
        return this.lift(new hf(b, a, c));
    };
    var kf = (function () {
            function b(a, b) {
                this.openings = a;
                this.closingSelector = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(
                    new jf(a, this.openings, this.closingSelector)
                );
            };
            return b;
        })(),
        jf = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.openings = e;
                this.closingSelector = d;
                this.contexts = [];
                this.add((this.openSubscription = q(this, e, e)));
            }
            __extends(a, b);
            a.prototype._next = function (a) {
                var b = this.contexts;
                if (b)
                    for (var c = b.length, f = 0; f < c; f++)
                        b[f].window.next(a);
            };
            a.prototype._error = function (a) {
                var c = this.contexts;
                this.contexts = null;
                if (c)
                    for (var d = c.length, f = -1; ++f < d; ) {
                        var g = c[f];
                        g.window.error(a);
                        g.subscription.unsubscribe();
                    }
                b.prototype._error.call(this, a);
            };
            a.prototype._complete = function () {
                var a = this.contexts;
                this.contexts = null;
                if (a)
                    for (var e = a.length, d = -1; ++d < e; ) {
                        var f = a[d];
                        f.window.complete();
                        f.subscription.unsubscribe();
                    }
                b.prototype._complete.call(this);
            };
            a.prototype._unsubscribe = function () {
                var a = this.contexts;
                this.contexts = null;
                if (a)
                    for (var b = a.length, d = -1; ++d < b; ) {
                        var f = a[d];
                        f.window.unsubscribe();
                        f.subscription.unsubscribe();
                    }
            };
            a.prototype.notifyNext = function (a, b, d, f, g) {
                if (a === this.openings) {
                    f = k(this.closingSelector)(b);
                    if (f === n) return this.error(n.e);
                    a = new y();
                    b = new x();
                    d = { window: a, subscription: b };
                    this.contexts.push(d);
                    f = q(this, f, d);
                    f.closed
                        ? this.closeWindow(this.contexts.length - 1)
                        : ((f.context = d), b.add(f));
                    this.destination.next(a);
                } else this.closeWindow(this.contexts.indexOf(a));
            };
            a.prototype.notifyError = function (a) {
                this.error(a);
            };
            a.prototype.notifyComplete = function (a) {
                a !== this.openSubscription &&
                    this.closeWindow(this.contexts.indexOf(a.context));
            };
            a.prototype.closeWindow = function (a) {
                if (-1 !== a) {
                    var b = this.contexts,
                        c = b[a],
                        f = c.window,
                        c = c.subscription;
                    b.splice(a, 1);
                    f.complete();
                    c.unsubscribe();
                }
            };
            return a;
        })(t);
    g.prototype.windowToggle = function (b, a) {
        return this.lift(new kf(b, a));
    };
    var mf = (function () {
            function b(a) {
                this.closingSelector = a;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new lf(a, this.closingSelector));
            };
            return b;
        })(),
        lf = (function (b) {
            function a(a, e) {
                b.call(this, a);
                this.destination = a;
                this.closingSelector = e;
                this.openWindow();
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, g) {
                this.openWindow(g);
            };
            a.prototype.notifyError = function (a, b) {
                this._error(a);
            };
            a.prototype.notifyComplete = function (a) {
                this.openWindow(a);
            };
            a.prototype._next = function (a) {
                this.window.next(a);
            };
            a.prototype._error = function (a) {
                this.window.error(a);
                this.destination.error(a);
                this.unsubscribeClosingNotification();
            };
            a.prototype._complete = function () {
                this.window.complete();
                this.destination.complete();
                this.unsubscribeClosingNotification();
            };
            a.prototype.unsubscribeClosingNotification = function () {
                this.closingNotification &&
                    this.closingNotification.unsubscribe();
            };
            a.prototype.openWindow = function (a) {
                void 0 === a && (a = null);
                a && (this.remove(a), a.unsubscribe());
                (a = this.window) && a.complete();
                a = this.window = new y();
                this.destination.next(a);
                a = k(this.closingSelector)();
                a === n
                    ? ((a = n.e),
                      this.destination.error(a),
                      this.window.error(a))
                    : this.add((this.closingNotification = q(this, a)));
            };
            return a;
        })(t);
    g.prototype.windowWhen = function (b) {
        return this.lift(new mf(b));
    };
    var of = (function () {
            function b(a, b) {
                this.observables = a;
                this.project = b;
            }
            b.prototype.call = function (a, b) {
                return b.subscribe(new nf(a, this.observables, this.project));
            };
            return b;
        })(),
        nf = (function (b) {
            function a(a, e, d) {
                b.call(this, a);
                this.observables = e;
                this.project = d;
                this.toRespond = [];
                a = e.length;
                this.values = Array(a);
                for (d = 0; d < a; d++) this.toRespond.push(d);
                for (d = 0; d < a; d++) {
                    var c = e[d];
                    this.add(q(this, c, c, d));
                }
            }
            __extends(a, b);
            a.prototype.notifyNext = function (a, b, d, f, g) {
                this.values[d] = b;
                a = this.toRespond;
                0 < a.length &&
                    ((d = a.indexOf(d)), -1 !== d && a.splice(d, 1));
            };
            a.prototype.notifyComplete = function () {};
            a.prototype._next = function (a) {
                0 === this.toRespond.length &&
                    ((a = [a].concat(this.values)),
                    this.project
                        ? this._tryProject(a)
                        : this.destination.next(a));
            };
            a.prototype._tryProject = function (a) {
                var b;
                try {
                    b = this.project.apply(this, a);
                } catch (d) {
                    this.destination.error(d);
                    return;
                }
                this.destination.next(b);
            };
            return a;
        })(t);
    g.prototype.withLatestFrom = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        var c;
        "function" === typeof b[b.length - 1] && (c = b.pop());
        return this.lift(new of(b, c));
    };
    g.prototype.zip = function () {
        for (var b = [], a = 0; a < arguments.length; a++)
            b[a - 0] = arguments[a];
        return this.lift.call(va.apply(void 0, [this].concat(b)));
    };
    g.prototype.zipAll = function (b) {
        return this.lift(new wa(b));
    };
    var Y = (function () {
            return function (b, a) {
                void 0 === a && (a = Number.POSITIVE_INFINITY);
                this.subscribedFrame = b;
                this.unsubscribedFrame = a;
            };
        })(),
        ib = (function () {
            function b() {
                this.subscriptions = [];
            }
            b.prototype.logSubscribedFrame = function () {
                this.subscriptions.push(new Y(this.scheduler.now()));
                return this.subscriptions.length - 1;
            };
            b.prototype.logUnsubscribedFrame = function (a) {
                var b = this.subscriptions;
                b[a] = new Y(b[a].subscribedFrame, this.scheduler.now());
            };
            return b;
        })(),
        pa = (function (b) {
            function a(a, e) {
                b.call(this, function (a) {
                    var b = this,
                        c = b.logSubscribedFrame();
                    a.add(
                        new x(function () {
                            b.logUnsubscribedFrame(c);
                        })
                    );
                    b.scheduleMessages(a);
                    return a;
                });
                this.messages = a;
                this.subscriptions = [];
                this.scheduler = e;
            }
            __extends(a, b);
            a.prototype.scheduleMessages = function (a) {
                for (var b = this.messages.length, c = 0; c < b; c++) {
                    var f = this.messages[c];
                    a.add(
                        this.scheduler.schedule(
                            function (a) {
                                a.message.notification.observe(a.subscriber);
                            },
                            f.frame,
                            { message: f, subscriber: a }
                        )
                    );
                }
            };
            return a;
        })(g);
    Ma(pa, [ib]);
    var jb = (function (b) {
        function a(a, e) {
            b.call(this);
            this.messages = a;
            this.subscriptions = [];
            this.scheduler = e;
        }
        __extends(a, b);
        a.prototype._subscribe = function (a) {
            var c = this,
                d = c.logSubscribedFrame();
            a.add(
                new x(function () {
                    c.logUnsubscribedFrame(d);
                })
            );
            return b.prototype._subscribe.call(this, a);
        };
        a.prototype.setup = function () {
            for (var a = this, b = a.messages.length, d = 0; d < b; d++)
                (function () {
                    var b = a.messages[d];
                    a.scheduler.schedule(function () {
                        b.notification.observe(a);
                    }, b.frame);
                })();
        };
        return a;
    })(y);
    Ma(jb, [ib]);
    var lb = (function (b) {
            function a(a, e) {
                var c = this;
                void 0 === a && (a = kb);
                void 0 === e && (e = Number.POSITIVE_INFINITY);
                b.call(this, a, function () {
                    return c.frame;
                });
                this.maxFrames = e;
                this.frame = 0;
                this.index = -1;
            }
            __extends(a, b);
            a.prototype.flush = function () {
                for (
                    var a = this.actions, b = this.maxFrames, d, f;
                    (f = a.shift()) &&
                    (this.frame = f.delay) <= b &&
                    !(d = f.execute(f.state, f.delay));

                );
                if (d) {
                    for (; (f = a.shift()); ) f.unsubscribe();
                    throw d;
                }
            };
            a.frameTimeFactor = 10;
            return a;
        })(V),
        kb = (function (b) {
            function a(a, e, d) {
                void 0 === d && (d = a.index += 1);
                b.call(this, a, e);
                this.scheduler = a;
                this.work = e;
                this.index = d;
                this.index = a.index = d;
            }
            __extends(a, b);
            a.prototype.schedule = function (c, e) {
                void 0 === e && (e = 0);
                return this.id
                    ? this.add(new a(this.scheduler, this.work)).schedule(c, e)
                    : b.prototype.schedule.call(this, c, e);
            };
            a.prototype.requestAsyncId = function (b, e, d) {
                void 0 === d && (d = 0);
                this.delay = b.frame + d;
                b = b.actions;
                b.push(this);
                b.sort(a.sortActions);
                return !0;
            };
            a.prototype.recycleAsyncId = function (a, b, d) {};
            a.sortActions = function (a, b) {
                return a.delay === b.delay
                    ? a.index === b.index
                        ? 0
                        : a.index > b.index
                        ? 1
                        : -1
                    : a.delay > b.delay
                    ? 1
                    : -1;
            };
            return a;
        })(U),
        pf = (function (b) {
            function a(a) {
                b.call(this, kb, 750);
                this.assertDeepEqual = a;
                this.hotObservables = [];
                this.coldObservables = [];
                this.flushTests = [];
            }
            __extends(a, b);
            a.prototype.createTime = function (b) {
                b = b.indexOf("|");
                if (-1 === b)
                    throw Error(
                        'marble diagram for time should have a completion marker "|"'
                    );
                return b * a.frameTimeFactor;
            };
            a.prototype.createColdObservable = function (b, e, d) {
                if (-1 !== b.indexOf("^"))
                    throw Error(
                        'cold observable cannot have subscription offset "^"'
                    );
                if (-1 !== b.indexOf("!"))
                    throw Error(
                        'cold observable cannot have unsubscription marker "!"'
                    );
                b = a.parseMarbles(b, e, d);
                b = new pa(b, this);
                this.coldObservables.push(b);
                return b;
            };
            a.prototype.createHotObservable = function (b, e, d) {
                if (-1 !== b.indexOf("!"))
                    throw Error(
                        'hot observable cannot have unsubscription marker "!"'
                    );
                b = a.parseMarbles(b, e, d);
                b = new jb(b, this);
                this.hotObservables.push(b);
                return b;
            };
            a.prototype.materializeInnerObservable = function (a, b) {
                var c = this,
                    e = [];
                a.subscribe(
                    function (a) {
                        e.push({
                            frame: c.frame - b,
                            notification: z.createNext(a),
                        });
                    },
                    function (a) {
                        e.push({
                            frame: c.frame - b,
                            notification: z.createError(a),
                        });
                    },
                    function () {
                        e.push({
                            frame: c.frame - b,
                            notification: z.createComplete(),
                        });
                    }
                );
                return e;
            };
            a.prototype.expectObservable = function (b, e) {
                var c = this;
                void 0 === e && (e = null);
                var f = [],
                    h = { actual: f, ready: !1 };
                e = a.parseMarblesAsSubscriptions(e).unsubscribedFrame;
                var k;
                this.schedule(function () {
                    k = b.subscribe(
                        function (a) {
                            var b = a;
                            a instanceof g &&
                                (b = c.materializeInnerObservable(b, c.frame));
                            f.push({
                                frame: c.frame,
                                notification: z.createNext(b),
                            });
                        },
                        function (a) {
                            f.push({
                                frame: c.frame,
                                notification: z.createError(a),
                            });
                        },
                        function () {
                            f.push({
                                frame: c.frame,
                                notification: z.createComplete(),
                            });
                        }
                    );
                }, 0);
                e !== Number.POSITIVE_INFINITY &&
                    this.schedule(function () {
                        return k.unsubscribe();
                    }, e);
                this.flushTests.push(h);
                return {
                    toBe: function (b, c, d) {
                        h.ready = !0;
                        h.expected = a.parseMarbles(b, c, d, !0);
                    },
                };
            };
            a.prototype.expectSubscriptions = function (b) {
                var c = { actual: b, ready: !1 };
                this.flushTests.push(c);
                return {
                    toBe: function (b) {
                        b = "string" === typeof b ? [b] : b;
                        c.ready = !0;
                        c.expected = b.map(function (b) {
                            return a.parseMarblesAsSubscriptions(b);
                        });
                    },
                };
            };
            a.prototype.flush = function () {
                for (var a = this.hotObservables; 0 < a.length; )
                    a.shift().setup();
                b.prototype.flush.call(this);
                for (
                    a = this.flushTests.filter(function (a) {
                        return a.ready;
                    });
                    0 < a.length;

                ) {
                    var e = a.shift();
                    this.assertDeepEqual(e.actual, e.expected);
                }
            };
            a.parseMarblesAsSubscriptions = function (a) {
                if ("string" !== typeof a)
                    return new Y(Number.POSITIVE_INFINITY);
                for (
                    var b = a.length,
                        c = -1,
                        f = Number.POSITIVE_INFINITY,
                        g = Number.POSITIVE_INFINITY,
                        k = 0;
                    k < b;
                    k++
                ) {
                    var l = k * this.frameTimeFactor,
                        m = a[k];
                    switch (m) {
                        case "-":
                        case " ":
                            break;
                        case "(":
                            c = l;
                            break;
                        case ")":
                            c = -1;
                            break;
                        case "^":
                            if (f !== Number.POSITIVE_INFINITY)
                                throw Error(
                                    "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                                );
                            f = -1 < c ? c : l;
                            break;
                        case "!":
                            if (g !== Number.POSITIVE_INFINITY)
                                throw Error(
                                    "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                                );
                            g = -1 < c ? c : l;
                            break;
                        default:
                            throw Error(
                                "there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                                    m +
                                    "'."
                            );
                    }
                }
                return 0 > g ? new Y(f) : new Y(f, g);
            };
            a.parseMarbles = function (a, b, d, f) {
                void 0 === f && (f = !1);
                if (-1 !== a.indexOf("!"))
                    throw Error(
                        'conventional marble diagrams cannot have the unsubscription marker "!"'
                    );
                for (
                    var c = a.length,
                        e = [],
                        g = a.indexOf("^"),
                        g = -1 === g ? 0 : g * -this.frameTimeFactor,
                        k =
                            "object" !== typeof b
                                ? function (a) {
                                      return a;
                                  }
                                : function (a) {
                                      return f && b[a] instanceof pa
                                          ? b[a].messages
                                          : b[a];
                                  },
                        l = -1,
                        m = 0;
                    m < c;
                    m++
                ) {
                    var p = m * this.frameTimeFactor + g,
                        n = void 0,
                        q = a[m];
                    switch (q) {
                        case "-":
                        case " ":
                            break;
                        case "(":
                            l = p;
                            break;
                        case ")":
                            l = -1;
                            break;
                        case "|":
                            n = z.createComplete();
                            break;
                        case "^":
                            break;
                        case "#":
                            n = z.createError(d || "error");
                            break;
                        default:
                            n = z.createNext(k(q));
                    }
                    n && e.push({ frame: -1 < l ? l : p, notification: n });
                }
                return e;
            };
            return a;
        })(lb),
        mb = new ((function () {
            return function (b) {
                b.requestAnimationFrame
                    ? ((this.cancelAnimationFrame =
                          b.cancelAnimationFrame.bind(b)),
                      (this.requestAnimationFrame =
                          b.requestAnimationFrame.bind(b)))
                    : b.mozRequestAnimationFrame
                    ? ((this.cancelAnimationFrame =
                          b.mozCancelAnimationFrame.bind(b)),
                      (this.requestAnimationFrame =
                          b.mozRequestAnimationFrame.bind(b)))
                    : b.webkitRequestAnimationFrame
                    ? ((this.cancelAnimationFrame =
                          b.webkitCancelAnimationFrame.bind(b)),
                      (this.requestAnimationFrame =
                          b.webkitRequestAnimationFrame.bind(b)))
                    : b.msRequestAnimationFrame
                    ? ((this.cancelAnimationFrame =
                          b.msCancelAnimationFrame.bind(b)),
                      (this.requestAnimationFrame =
                          b.msRequestAnimationFrame.bind(b)))
                    : b.oRequestAnimationFrame
                    ? ((this.cancelAnimationFrame =
                          b.oCancelAnimationFrame.bind(b)),
                      (this.requestAnimationFrame =
                          b.oRequestAnimationFrame.bind(b)))
                    : ((this.cancelAnimationFrame = b.clearTimeout.bind(b)),
                      (this.requestAnimationFrame = function (a) {
                          return b.setTimeout(a, 1e3 / 60);
                      }));
            };
        })())(r),
        qf = (function (b) {
            function a(a, e) {
                b.call(this, a, e);
                this.scheduler = a;
                this.work = e;
            }
            __extends(a, b);
            a.prototype.requestAsyncId = function (a, e, d) {
                void 0 === d && (d = 0);
                if (null !== d && 0 < d)
                    return b.prototype.requestAsyncId.call(this, a, e, d);
                a.actions.push(this);
                return (
                    a.scheduled ||
                    (a.scheduled = mb.requestAnimationFrame(
                        a.flush.bind(a, null)
                    ))
                );
            };
            a.prototype.recycleAsyncId = function (a, e, d) {
                void 0 === d && (d = 0);
                if ((null !== d && 0 < d) || (null === d && 0 < this.delay))
                    return b.prototype.recycleAsyncId.call(this, a, e, d);
                0 === a.actions.length &&
                    (mb.cancelAnimationFrame(e), (a.scheduled = void 0));
            };
            return a;
        })(U),
        rf = new ((function (b) {
            function a() {
                b.apply(this, arguments);
            }
            __extends(a, b);
            a.prototype.flush = function (a) {
                this.active = !0;
                this.scheduled = void 0;
                var b = this.actions,
                    c,
                    f = -1,
                    g = b.length;
                a = a || b.shift();
                do if ((c = a.execute(a.state, a.delay))) break;
                while (++f < g && (a = b.shift()));
                this.active = !1;
                if (c) {
                    for (; ++f < g && (a = b.shift()); ) a.unsubscribe();
                    throw c;
                }
            };
            return a;
        })(V))(qf),
        sf = { rxSubscriber: T, observable: M, iterator: I };
    l.Scheduler = { asap: fa, queue: Za, animationFrame: rf, async: C };
    l.Symbol = sf;
    l.Subject = y;
    l.AnonymousSubject = ca;
    l.Observable = g;
    l.Subscription = x;
    l.Subscriber = p;
    l.AsyncSubject = P;
    l.ReplaySubject = R;
    l.BehaviorSubject = cb;
    l.ConnectableObservable = X;
    l.Notification = z;
    l.EmptyError = ea;
    l.ArgumentOutOfRangeError = W;
    l.ObjectUnsubscribedError = O;
    l.TimeoutError = gb;
    l.UnsubscriptionError = ia;
    l.TimeInterval = fb;
    l.Timestamp = hb;
    l.TestScheduler = pf;
    l.VirtualTimeScheduler = lb;
    l.AjaxResponse = Xa;
    l.AjaxError = da;
    l.AjaxTimeoutError = Ya;
    Object.defineProperty(l, "__esModule", { value: !0 });
});
