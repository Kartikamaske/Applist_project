/*! lazysizes - v5.1.2 */
!function(a, b) {
    var c = b(a, a.document);
    a.lazySizes = c,
    "object" == typeof module && module.exports && (module.exports = c)
}("undefined" != typeof window ? window : {}, function(a, b) {
    "use strict";
    var c, d;
    if (function() {
        var b, c = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: .8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125
        };
        d = a.lazySizesConfig || a.lazysizesConfig || {};
        for (b in c)
            b in d || (d[b] = c[b])
    }(),
    !b || !b.getElementsByClassName)
        return {
            init: function() {},
            cfg: d,
            noSupport: !0
        };
    var e = b.documentElement
      , f = a.Date
      , g = a.HTMLPictureElement
      , h = "addEventListener"
      , i = "getAttribute"
      , j = a[h]
      , k = a.setTimeout
      , l = a.requestAnimationFrame || k
      , m = a.requestIdleCallback
      , n = /^picture$/i
      , o = ["load", "error", "lazyincluded", "_lazyloaded"]
      , p = {}
      , q = Array.prototype.forEach
      , r = function(a, b) {
        return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
        p[b].test(a[i]("class") || "") && p[b]
    }
      , s = function(a, b) {
        r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
    }
      , t = function(a, b) {
        var c;
        (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
    }
      , u = function(a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b),
        o.forEach(function(c) {
            a[d](c, b)
        })
    }
      , v = function(a, d, e, f, g) {
        var h = b.createEvent("Event");
        return e || (e = {}),
        e.instance = c,
        h.initEvent(d, !f, !g),
        h.detail = e,
        a.dispatchEvent(h),
        h
    }
      , w = function(b, c) {
        var e;
        !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
        e({
            reevaluate: !0,
            elements: [b]
        })) : c && c.src && (b.src = c.src)
    }
      , x = function(a, b) {
        return (getComputedStyle(a, null) || {})[b]
    }
      , y = function(a, b, c) {
        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth; )
            c = b.offsetWidth,
            b = b.parentNode;
        return c
    }
      , z = function() {
        var a, c, d = [], e = [], f = d, g = function() {
            var b = f;
            for (f = d.length ? e : d,
            a = !0,
            c = !1; b.length; )
                b.shift()();
            a = !1
        }, h = function(d, e) {
            a && !e ? d.apply(this, arguments) : (f.push(d),
            c || (c = !0,
            (b.hidden ? k : l)(g)))
        };
        return h._lsFlush = g,
        h
    }()
      , A = function(a, b) {
        return b ? function() {
            z(a)
        }
        : function() {
            var b = this
              , c = arguments;
            z(function() {
                a.apply(b, c)
            })
        }
    }
      , B = function(a) {
        var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function() {
            b = !1,
            c = f.now(),
            a()
        }, i = m && g > 49 ? function() {
            m(h, {
                timeout: g
            }),
            g !== d.ricTimeout && (g = d.ricTimeout)
        }
        : A(function() {
            k(h)
        }, !0);
        return function(a) {
            var d;
            (a = !0 === a) && (g = 33),
            b || (b = !0,
            d = e - (f.now() - c),
            d < 0 && (d = 0),
            a || d < 9 ? i() : k(i, d))
        }
    }
      , C = function(a) {
        var b, c, d = 99, e = function() {
            b = null,
            a()
        }, g = function() {
            var a = f.now() - c;
            a < d ? k(g, d - a) : (m || e)(e)
        };
        return function() {
            c = f.now(),
            b || (b = k(g, d))
        }
    }
      , D = function() {
        var g, m, o, p, y, D, F, G, H, I, J, K, L = /^img$/i, M = /^iframe$/i, N = "onscroll"in a && !/(gle|ing)bot/.test(navigator.userAgent), O = 0, P = 0, Q = 0, R = -1, S = function(a) {
            Q--,
            (!a || Q < 0 || !a.target) && (Q = 0)
        }, T = function(a) {
            return null == K && (K = "hidden" == x(b.body, "visibility")),
            K || !("hidden" == x(a.parentNode, "visibility") && "hidden" == x(a, "visibility"))
        }, U = function(a, c) {
            var d, f = a, g = T(a);
            for (G -= c,
            J += c,
            H -= c,
            I += c; g && (f = f.offsetParent) && f != b.body && f != e; )
                (g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(),
                g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1);
            return g
        }, V = function() {
            var a, f, h, j, k, l, n, o, q, r, s, t, u = c.elements;
            if ((p = d.loadMode) && Q < 8 && (a = u.length)) {
                for (f = 0,
                R++; f < a; f++)
                    if (u[f] && !u[f]._lazyRace)
                        if (!N || c.prematureUnveil && c.prematureUnveil(u[f]))
                            ba(u[f]);
                        else if ((o = u[f][i]("data-expand")) && (l = 1 * o) || (l = P),
                        r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand,
                        c._defEx = r,
                        s = r * d.expFactor,
                        t = d.hFac,
                        K = null,
                        P < s && Q < 1 && R > 2 && p > 2 && !b.hidden ? (P = s,
                        R = 0) : P = p > 1 && R > 1 && Q < 6 ? r : O),
                        q !== l && (D = innerWidth + l * t,
                        F = innerHeight + l,
                        n = -1 * l,
                        q = l),
                        h = u[f].getBoundingClientRect(),
                        (J = h.bottom) >= n && (G = h.top) <= F && (I = h.right) >= n * t && (H = h.left) <= D && (J || I || H || G) && (d.loadHidden || T(u[f])) && (m && Q < 3 && !o && (p < 3 || R < 4) || U(u[f], l))) {
                            if (ba(u[f]),
                            k = !0,
                            Q > 9)
                                break
                        } else
                            !k && m && !j && Q < 4 && R < 4 && p > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !o && (J || I || H || G || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]);
                j && !k && ba(j)
            }
        }, W = B(V), X = function(a) {
            var b = a.target;
            if (b._lazyCache)
                return void delete b._lazyCache;
            S(a),
            s(b, d.loadedClass),
            t(b, d.loadingClass),
            u(b, Z),
            v(b, "lazyloaded")
        }, Y = A(X), Z = function(a) {
            Y({
                target: a.target
            })
        }, $ = function(a, b) {
            try {
                a.contentWindow.location.replace(b)
            } catch (c) {
                a.src = b
            }
        }, _ = function(a) {
            var b, c = a[i](d.srcsetAttr);
            (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b),
            c && a.setAttribute("srcset", c)
        }, aa = A(function(a, b, c, e, f) {
            var g, h, j, l, m, p;
            (m = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)),
            h = a[i](d.srcsetAttr),
            g = a[i](d.srcAttr),
            f && (j = a.parentNode,
            l = j && n.test(j.nodeName || "")),
            p = b.firesLoad || "src"in a && (h || g || l),
            m = {
                target: a
            },
            s(a, d.loadingClass),
            p && (clearTimeout(o),
            o = k(S, 2500),
            u(a, Z, !0)),
            l && q.call(j.getElementsByTagName("source"), _),
            h ? a.setAttribute("srcset", h) : g && !l && (M.test(a.nodeName) ? $(a, g) : a.src = g),
            f && (h || l) && w(a, {
                src: g
            })),
            a._lazyRace && delete a._lazyRace,
            t(a, d.lazyClass),
            z(function() {
                var b = a.complete && a.naturalWidth > 1;
                p && !b || (b && s(a, "ls-is-cached"),
                X(m),
                a._lazyCache = !0,
                k(function() {
                    "_lazyCache"in a && delete a._lazyCache
                }, 9)),
                "lazy" == a.loading && Q--
            }, !0)
        }), ba = function(a) {
            if (!a._lazyRace) {
                var b, c = L.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e;
                (!f && m || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail,
                f && E.updateElem(a, !0, a.offsetWidth),
                a._lazyRace = !0,
                Q++,
                aa(a, b, f, e, c))
            }
        }, ca = C(function() {
            d.loadMode = 3,
            W()
        }), da = function() {
            3 == d.loadMode && (d.loadMode = 2),
            ca()
        }, ea = function() {
            if (!m) {
                if (f.now() - y < 999)
                    return void k(ea, 999);
                m = !0,
                d.loadMode = 3,
                W(),
                j("scroll", da, !0)
            }
        };
        return {
            _: function() {
                y = f.now(),
                c.elements = b.getElementsByClassName(d.lazyClass),
                g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass),
                j("scroll", W, !0),
                j("resize", W, !0),
                j("pageshow", function(a) {
                    if (a.persisted) {
                        var c = b.querySelectorAll("." + d.loadingClass);
                        c.length && c.forEach && l(function() {
                            c.forEach(function(a) {
                                a.complete && ba(a)
                            })
                        })
                    }
                }),
                a.MutationObserver ? new MutationObserver(W).observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }) : (e[h]("DOMNodeInserted", W, !0),
                e[h]("DOMAttrModified", W, !0),
                setInterval(W, 999)),
                j("hashchange", W, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(a) {
                    b[h](a, W, !0)
                }),
                /d$|^c/.test(b.readyState) ? ea() : (j("load", ea),
                b[h]("DOMContentLoaded", W),
                k(ea, 2e4)),
                c.elements.length ? (V(),
                z._lsFlush()) : W()
            },
            checkElems: W,
            unveil: ba,
            _aLSL: da
        }
    }()
      , E = function() {
        var a, c = A(function(a, b, c, d) {
            var e, f, g;
            if (a._lazysizesWidth = d,
            d += "px",
            a.setAttribute("sizes", d),
            n.test(b.nodeName || ""))
                for (e = b.getElementsByTagName("source"),
                f = 0,
                g = e.length; f < g; f++)
                    e[f].setAttribute("sizes", d);
            c.detail.dataAttr || w(a, c.detail)
        }), e = function(a, b, d) {
            var e, f = a.parentNode;
            f && (d = y(a, f, d),
            e = v(a, "lazybeforesizes", {
                width: d,
                dataAttr: !!b
            }),
            e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
        }, f = function() {
            var b, c = a.length;
            if (c)
                for (b = 0; b < c; b++)
                    e(a[b])
        }, g = C(f);
        return {
            _: function() {
                a = b.getElementsByClassName(d.autosizesClass),
                j("resize", g)
            },
            checkElems: g,
            updateElem: e
        }
    }()
      , F = function() {
        !F.i && b.getElementsByClassName && (F.i = !0,
        E._(),
        D._())
    };
    return k(function() {
        d.init && F()
    }),
    c = {
        cfg: d,
        autoSizer: E,
        loader: D,
        init: F,
        uP: w,
        aC: s,
        rC: t,
        hC: r,
        fire: v,
        gW: y,
        rAF: z
    }
});

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});

/*Ouibounce (Exit Intent)*/
!function(e, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, exports, module) : e.ouibounce = n()
}(this, function(e, n, o) {
    return function(e, n) {
        "use strict";
        function o(e, n) {
            return "undefined" == typeof e ? n : e
        }
        function i(e) {
            var n = 24 * e * 60 * 60 * 1e3
              , o = new Date;
            return o.setTime(o.getTime() + n),
            "; expires=" + o.toUTCString()
        }
        function t() {
            s() || (L.addEventListener("mouseleave", u),
            L.addEventListener("mouseenter", r),
            L.addEventListener("keydown", c))
        }
        function u(e) {
            e.clientY > k || (D = setTimeout(m, y))
        }
        function r() {
            D && (clearTimeout(D),
            D = null)
        }
        function c(e) {
            g || e.metaKey && 76 === e.keyCode && (g = !0,
            D = setTimeout(m, y))
        }
        function d(e, n) {
            return a()[e] === n
        }
        function a() {
            for (var e = document.cookie.split("; "), n = {}, o = e.length - 1; o >= 0; o--) {
                var i = e[o].split("=");
                n[i[0]] = i[1]
            }
            return n
        }
        function s() {
            return d(T, "true") && !v
        }
        function m() {
            s() || (e && (e.style.display = "block"),
            E(),
            f())
        }
        function f(e) {
            var n = e || {};
            "undefined" != typeof n.cookieExpire && (b = i(n.cookieExpire)),
            n.sitewide === !0 && (w = ";path=/"),
            "undefined" != typeof n.cookieDomain && (x = ";domain=" + n.cookieDomain),
            "undefined" != typeof n.cookieName && (T = n.cookieName),
            document.cookie = T + "=true" + b + x + w,
            L.removeEventListener("mouseleave", u),
            L.removeEventListener("mouseenter", r),
            L.removeEventListener("keydown", c)
        }
        var l = n || {}
          , v = l.aggressive || !1
          , k = o(l.sensitivity, 20)
          , p = o(l.timer, 1e3)
          , y = o(l.delay, 0)
          , E = l.callback || function() {}
          , b = i(l.cookieExpire) || ""
          , x = l.cookieDomain ? ";domain=" + l.cookieDomain : ""
          , T = l.cookieName ? l.cookieName : "viewedOuibounceModal"
          , w = l.sitewide === !0 ? ";path=/" : ""
          , D = null
          , L = document.documentElement;
        setTimeout(t, p);
        var g = !1;
        return {
            fire: m,
            disable: f,
            isDisabled: s
        }
    }
});
/*End Ouibounce (Exit Intent)*/

/**
 *  Ajax Autocomplete for jQuery, version 1.4.10
 *  (c) 2017 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function(a) {
    "use strict";
    function b(c, d) {
        var e = this;
        e.element = c,
        e.el = a(c),
        e.suggestions = [],
        e.badQueries = [],
        e.selectedIndex = -1,
        e.currentValue = e.element.value,
        e.timeoutId = null,
        e.cachedResponse = {},
        e.onChangeTimeout = null,
        e.onChange = null,
        e.isLocal = !1,
        e.suggestionsContainer = null,
        e.noSuggestionsContainer = null,
        e.options = a.extend(!0, {}, b.defaults, d),
        e.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        },
        e.hint = null,
        e.hintValue = "",
        e.selection = null,
        e.initialize(),
        e.setOptions(d)
    }
    function c(a, b, c) {
        return a.value.toLowerCase().indexOf(c) !== -1
    }
    function d(b) {
        return "string" == typeof b ? a.parseJSON(b) : b
    }
    function e(a, b) {
        if (!b)
            return a.value;
        var c = "(" + g.escapeRegExChars(b) + ")";
        return a.value.replace(new RegExp(c,"gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }
    function f(a, b) {
        return '<div class="autocomplete-group">' + b + "</div>"
    }
    var g = function() {
        return {
            escapeRegExChars: function(a) {
                return a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            },
            createNode: function(a) {
                var b = document.createElement("div");
                return b.className = a,
                b.style.position = "absolute",
                b.style.display = "none",
                b
            }
        }
    }()
      , h = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
      , i = a.noop;
    b.utils = g,
    a.Autocomplete = b,
    b.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        width: "auto",
        minChars: 1,
        maxHeight: 330,
        deferRequestBy: 0,
        params: {},
        formatResult: e,
        formatGroup: f,
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: i,
        onSearchComplete: i,
        onSearchError: i,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: c,
        paramName: "query",
        transformResult: d,
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1
    },
    b.prototype = {
        initialize: function() {
            var c, d = this, e = "." + d.classes.suggestion, f = d.classes.selected, g = d.options;
            d.element.setAttribute("autocomplete", "off"),
            d.noSuggestionsContainer = a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),
            d.suggestionsContainer = b.utils.createNode(g.containerClass),
            c = a(d.suggestionsContainer),
            c.appendTo(g.appendTo || "body"),
            "auto" !== g.width && c.css("width", g.width),
            c.on("mouseover.autocomplete", e, function() {
                d.activate(a(this).data("index"))
            }),
            c.on("mouseout.autocomplete", function() {
                d.selectedIndex = -1,
                c.children("." + f).removeClass(f)
            }),
            c.on("click.autocomplete", e, function() {
                d.select(a(this).data("index"))
            }),
            c.on("click.autocomplete", function() {
                clearTimeout(d.blurTimeoutId)
            }),
            d.fixPositionCapture = function() {
                d.visible && d.fixPosition()
            }
            ,
            a(window).on("resize.autocomplete", d.fixPositionCapture),
            d.el.on("keydown.autocomplete", function(a) {
                d.onKeyPress(a)
            }),
            d.el.on("keyup.autocomplete", function(a) {
                d.onKeyUp(a)
            }),
            d.el.on("blur.autocomplete", function() {
                d.onBlur()
            }),
            d.el.on("focus.autocomplete", function() {
                d.onFocus()
            }),
            d.el.on("change.autocomplete", function(n) {
                $(d).data("_change.autocomplete", setTimeout(function() {
                    $.isFunction(d.options.onChange) && d.options.onChange(d.el.val())
                }, 50))
            }),
            d.el.on("input.autocomplete", function(a) {
                d.onKeyUp(a)
            })
        },
        onFocus: function() {
            var a = this;
            a.fixPosition(),
            a.el.val().length >= a.options.minChars && a.onValueChange()
        },
        onBlur: function() {
            var b = this
              , c = b.options
              , d = b.el.val()
              , e = b.getQuery(d);
            b.blurTimeoutId = setTimeout(function() {
                b.hide(),
                b.selection && b.currentValue !== e && (c.onInvalidateSelection || a.noop).call(b.element)
            }, 200)
        },
        abortAjax: function() {
            var a = this;
            a.currentRequest && (a.currentRequest.abort(),
            a.currentRequest = null)
        },
        setOptions: function(b) {
            var c = this
              , d = a.extend({}, c.options, b);
            c.isLocal = Array.isArray(d.lookup),
            c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)),
            d.orientation = c.validateOrientation(d.orientation, "bottom"),
            a(c.suggestionsContainer).css({
                "max-height": d.maxHeight + "px",
                width: d.width + "px",
                "z-index": d.zIndex
            }),
            this.options = d
        },
        clearCache: function() {
            this.cachedResponse = {},
            this.badQueries = []
        },
        clear: function() {
            this.clearCache(),
            this.currentValue = "",
            this.suggestions = []
        },
        disable: function() {
            var a = this;
            a.disabled = !0,
            clearTimeout(a.onChangeTimeout),
            a.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var b = this
              , c = a(b.suggestionsContainer)
              , d = c.parent().get(0);
            if (d === document.body || b.options.forceFixPosition) {
                var e = b.options.orientation
                  , f = c.outerHeight()
                  , g = b.el.outerHeight()
                  , h = b.el.offset()
                  , i = {
                    top: h.top,
                    left: h.left
                };
                if ("auto" === e) {
                    var j = a(window).height()
                      , k = a(window).scrollTop()
                      , l = -k + h.top - f
                      , m = k + j - (h.top + g + f);
                    e = Math.max(l, m) === l ? "top" : "bottom"
                }
                if ("top" === e ? i.top += -f : i.top += g,
                d !== document.body) {
                    var n, o = c.css("opacity");
                    b.visible || c.css("opacity", 0).show(),
                    n = c.offsetParent().offset(),
                    i.top -= n.top,
                    i.top += d.scrollTop,
                    i.left -= n.left,
                    b.visible || c.css("opacity", o).hide()
                }
                "auto" === b.options.width && (i.width = b.el.outerWidth() + "px"),
                c.css(i)
            }
        },
        isCursorAtEnd: function() {
            var a, b = this, c = b.el.val().length, d = b.element.selectionStart;
            return "number" == typeof d ? d === c : !document.selection || (a = document.selection.createRange(),
            a.moveStart("character", -c),
            c === a.text.length)
        },
        onKeyPress: function(a) {
            var b = this;
            if (!b.disabled && !b.visible && a.which === h.DOWN && b.currentValue)
                return void b.suggest();
            if (!b.disabled && b.visible) {
                switch (a.which) {
                case h.ESC:
                    b.el.val(b.currentValue),
                    b.hide();
                    break;
                case h.RIGHT:
                    if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
                        b.selectHint();
                        break
                    }
                    return;
                case h.TAB:
                    if (b.hint && b.options.onHint)
                        return void b.selectHint();
                    if (b.selectedIndex === -1)
                        return void b.hide();
                    if (b.select(b.selectedIndex),
                    b.options.tabDisabled === !1)
                        return;
                    break;
                case h.RETURN:
                    if (b.selectedIndex === -1)
                        return void b.hide();
                    b.select(b.selectedIndex);
                    break;
                case h.UP:
                    b.moveUp();
                    break;
                case h.DOWN:
                    b.moveDown();
                    break;
                default:
                    return
                }
                a.stopImmediatePropagation(),
                a.preventDefault()
            }
        },
        onKeyUp: function(a) {
            var b = this;
            if (!b.disabled) {
                switch (a.which) {
                case h.UP:
                case h.DOWN:
                    return
                }
                clearTimeout(b.onChangeTimeout),
                b.currentValue !== b.el.val() && (b.findBestHint(),
                b.options.deferRequestBy > 0 ? b.onChangeTimeout = setTimeout(function() {
                    b.onValueChange()
                }, b.options.deferRequestBy) : b.onValueChange())
            }
        },
        onValueChange: function() {
            if (this.ignoreValueChange)
                return void (this.ignoreValueChange = !1);
            var b = this
              , c = b.options
              , d = b.el.val()
              , e = b.getQuery(d);
            return b.selection && b.currentValue !== e && (b.selection = null,
            (c.onInvalidateSelection || a.noop).call(b.element)),
            clearTimeout(b.onChangeTimeout),
            b.currentValue = d,
            b.selectedIndex = -1,
            c.triggerSelectOnValidInput && b.isExactMatch(e) ? void b.select(0) : void (e.length < c.minChars ? b.hide() : b.getSuggestions(e))
        },
        isExactMatch: function(a) {
            var b = this.suggestions;
            return 1 === b.length && b[0].value.toLowerCase() === a.toLowerCase()
        },
        getQuery: function(b) {
            var c, d = this.options.delimiter;
            return d ? (c = b.split(d),
            a.trim(c[c.length - 1])) : b
        },
        getSuggestionsLocal: function(b) {
            var c, d = this, e = d.options, f = b.toLowerCase(), g = e.lookupFilter, h = parseInt(e.lookupLimit, 10);
            return c = {
                suggestions: a.grep(e.lookup, function(a) {
                    return g(a, b, f)
                })
            },
            h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)),
            c
        },
        getSuggestions: function(b) {
            var c, d, e, f, g = this, h = g.options, i = h.serviceUrl;
            if (h.params[h.paramName] = b,
            h.onSearchStart.call(g.element, h.params) !== !1) {
                if (d = h.ignoreParams ? null : h.params,
                a.isFunction(h.lookup))
                    return void h.lookup(b, function(a) {
                        g.suggestions = a.suggestions,
                        g.suggest(),
                        h.onSearchComplete.call(g.element, b, a.suggestions)
                    });
                g.isLocal ? c = g.getSuggestionsLocal(b) : (a.isFunction(i) && (i = i.call(g.element, b)),
                e = i + "?" + a.param(d || {}),
                c = g.cachedResponse[e]),
                c && Array.isArray(c.suggestions) ? (g.suggestions = c.suggestions,
                g.suggest(),
                h.onSearchComplete.call(g.element, b, c.suggestions)) : g.isBadQuery(b) ? h.onSearchComplete.call(g.element, b, []) : (g.abortAjax(),
                f = {
                    url: i,
                    data: d,
                    type: h.type,
                    dataType: h.dataType
                },
                a.extend(f, h.ajaxSettings),
                g.currentRequest = a.ajax(f).done(function(a) {
                    var c;
                    g.currentRequest = null,
                    c = h.transformResult(a, b),
                    g.processResponse(c, b, e),
                    h.onSearchComplete.call(g.element, b, c.suggestions)
                }).fail(function(a, c, d) {
                    h.onSearchError.call(g.element, b, a, c, d)
                }))
            }
        },
        isBadQuery: function(a) {
            if (!this.options.preventBadQueries)
                return !1;
            for (var b = this.badQueries, c = b.length; c--; )
                if (0 === a.indexOf(b[c]))
                    return !0;
            return !1
        },
        hide: function() {
            var b = this
              , c = a(b.suggestionsContainer);
            a.isFunction(b.options.onHide) && b.visible && b.options.onHide.call(b.element, c),
            b.visible = !1,
            b.selectedIndex = -1,
            clearTimeout(b.onChangeTimeout),
            a(b.suggestionsContainer).hide(),
            b.signalHint(null)
        },
        suggest: function() {
            if (!this.suggestions.length)
                return void (this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
            var b, c = this, d = c.options, e = d.groupBy, f = d.formatResult, g = c.getQuery(c.currentValue), h = c.classes.suggestion, i = c.classes.selected, j = a(c.suggestionsContainer), k = a(c.noSuggestionsContainer), l = d.beforeRender, m = "", n = function(a, c) {
                var f = a.data[e];
                return b === f ? "" : (b = f,
                d.formatGroup(a, b))
            };
            return d.triggerSelectOnValidInput && c.isExactMatch(g) ? void c.select(0) : (a.each(c.suggestions, function(a, b) {
                e && (m += n(b, g, a)),
                m += '<div class="' + h + '" data-index="' + a + '">' + f(b, g, a) + "</div>"
            }),
            this.adjustContainerWidth(),
            k.detach(),
            j.html(m),
            a.isFunction(l) && l.call(c.element, j, c.suggestions),
            c.fixPosition(),
            j.show(),
            d.autoSelectFirst && (c.selectedIndex = 0,
            j.scrollTop(0),
            j.children("." + h).first().addClass(i)),
            c.visible = !0,
            void c.findBestHint())
        },
        noSuggestions: function() {
            var b = this
              , c = b.options.beforeRender
              , d = a(b.suggestionsContainer)
              , e = a(b.noSuggestionsContainer);
            this.adjustContainerWidth(),
            e.detach(),
            d.empty(),
            d.append(e),
            a.isFunction(c) && c.call(b.element, d, b.suggestions),
            b.fixPosition(),
            d.show(),
            b.visible = !0
        },
        adjustContainerWidth: function() {
            var b, c = this, d = c.options, e = a(c.suggestionsContainer);
            "auto" === d.width ? (b = c.el.outerWidth(),
            e.css("width", b > 0 ? b : 300)) : "flex" === d.width && e.css("width", "")
        },
        findBestHint: function() {
            var b = this
              , c = b.el.val().toLowerCase()
              , d = null;
            c && (a.each(b.suggestions, function(a, b) {
                var e = 0 === b.value.toLowerCase().indexOf(c);
                return e && (d = b),
                !e
            }),
            b.signalHint(d))
        },
        signalHint: function(b) {
            var c = ""
              , d = this;
            b && (c = d.currentValue + b.value.substr(d.currentValue.length)),
            d.hintValue !== c && (d.hintValue = c,
            d.hint = b,
            (this.options.onHint || a.noop)(c))
        },
        verifySuggestionsFormat: function(b) {
            return b.length && "string" == typeof b[0] ? a.map(b, function(a) {
                return {
                    value: a,
                    data: null
                }
            }) : b
        },
        validateOrientation: function(b, c) {
            return b = a.trim(b || "").toLowerCase(),
            a.inArray(b, ["auto", "bottom", "top"]) === -1 && (b = c),
            b
        },
        processResponse: function(a, b, c) {
            var d = this
              , e = d.options;
            a.suggestions = d.verifySuggestionsFormat(a.suggestions),
            e.noCache || (d.cachedResponse[c] = a,
            e.preventBadQueries && !a.suggestions.length && d.badQueries.push(b)),
            b === d.getQuery(d.currentValue) && (d.suggestions = a.suggestions,
            d.suggest())
        },
        activate: function(b) {
            var c, d = this, e = d.classes.selected, f = a(d.suggestionsContainer), g = f.find("." + d.classes.suggestion);
            return f.find("." + e).removeClass(e),
            d.selectedIndex = b,
            d.selectedIndex !== -1 && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex),
            a(c).addClass(e),
            c) : null
        },
        selectHint: function() {
            var b = this
              , c = a.inArray(b.hint, b.suggestions);
            b.select(c)
        },
        select: function(a) {
            var b = this;
            b.hide(),
            b.onSelect(a)
        },
        moveUp: function() {
            var b = this;
            if (b.selectedIndex !== -1)
                return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children("." + b.classes.suggestion).first().removeClass(b.classes.selected),
                b.selectedIndex = -1,
                b.ignoreValueChange = !1,
                b.el.val(b.currentValue),
                void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1)
        },
        moveDown: function() {
            var a = this;
            a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1)
        },
        adjustScroll: function(b) {
            var c = this
              , d = c.activate(b);
            if (d) {
                var e, f, g, h = a(d).outerHeight();
                e = d.offsetTop,
                f = a(c.suggestionsContainer).scrollTop(),
                g = f + c.options.maxHeight - h,
                e < f ? a(c.suggestionsContainer).scrollTop(e) : e > g && a(c.suggestionsContainer).scrollTop(e - c.options.maxHeight + h),
                c.options.preserveInput || (c.ignoreValueChange = !0,
                c.el.val(c.getValue(c.suggestions[b].value))),
                c.signalHint(null)
            }
        },
        onSelect: function(b) {
            var c = this
              , d = c.options.onSelect
              , e = c.suggestions[b];
            c.currentValue = c.getValue(e.value),
            c.currentValue === c.el.val() || c.options.preserveInput || c.el.val(c.currentValue),
            c.signalHint(null),
            c.suggestions = [],
            c.selection = e,
            a.isFunction(d) && d.call(c.element, e)
        },
        getValue: function(a) {
            var b, c, d = this, e = d.options.delimiter;
            return e ? (b = d.currentValue,
            c = b.split(e),
            1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a
        },
        dispose: function() {
            var b = this;
            b.el.off(".autocomplete").removeData("autocomplete"),
            a(window).off("resize.autocomplete", b.fixPositionCapture),
            a(b.suggestionsContainer).remove()
        }
    },
    a.fn.devbridgeAutocomplete = function(c, d) {
        var e = "autocomplete";
        return arguments.length ? this.each(function() {
            var f = a(this)
              , g = f.data(e);
            "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(),
            g = new b(this,c),
            f.data(e, g))
        }) : this.first().data(e)
    }
    ,
    a.fn.autocomplete || (a.fn.autocomplete = a.fn.devbridgeAutocomplete)
});

/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e),
    n = !0),
    "object" == typeof exports && (module.exports = e(),
    n = !0),
    !n) {
        var t = window.Cookies
          , o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t,
            o
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)
                n[o] = t[o]
        }
        return n
    }
    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}
        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i)
                    i[u] && (f += "; " + u,
                    !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }
        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("=")
                      , u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u),
                        t)
                            try {
                                u = JSON.parse(u)
                            } catch (e) {}
                        if (r[a] = u,
                        e === a)
                            break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i,
        r.get = function(e) {
            return c(e, !1)
        }
        ,
        r.getJSON = function(e) {
            return c(e, !0)
        }
        ,
        r.remove = function(n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }
        ,
        r.defaults = {},
        r.withConverter = t,
        r
    }(function() {})
});

/*
* International Telephone Input v17.0.0
* https://github.com/jackocnr/intl-tel-input.git
* Licensed under the MIT license
*/

!function(a) {
    "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], function(b) {
        a(b)
    }) : a(jQuery)
}(function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1,
            d.configurable = !0,
            "value"in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d)
        }
    }
    function e(a, b, c) {
        return b && d(a.prototype, b),
        c && d(a, c),
        a
    }
    for (var f = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], g = 0; g < f.length; g++) {
        var h = f[g];
        f[g] = {
            name: h[0],
            iso2: h[1],
            dialCode: h[2],
            priority: h[3] || 0,
            areaCodes: h[4] || null
        }
    }
    var i = {
        getInstance: function(a) {
            var b = a.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[b]
        },
        instances: {}
    };
    "object" == typeof window && (window.intlTelInputGlobals = i);
    var j = 0
      , k = {
        allowDropdown: !0,
        autoHideDialCode: !0,
        autoPlaceholder: "polite",
        customContainer: "",
        customPlaceholder: null,
        dropdownContainer: null,
        excludeCountries: [],
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        localizedCountries: null,
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: !1,
        utilsScript: ""
    }
      , l = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
    "object" == typeof window && window.addEventListener("load", function() {
        window.intlTelInputGlobals.windowLoaded = !0
    });
    var m = function(a, b) {
        for (var c = Object.keys(a), d = 0; d < c.length; d++)
            b(c[d], a[c[d]])
    }
      , n = function(a) {
        m(window.intlTelInputGlobals.instances, function(b) {
            window.intlTelInputGlobals.instances[b][a]()
        })
    }
      , o = function() {
        function a(b, d) {
            var e = this;
            c(this, a),
            this.id = j++,
            this.a = b,
            this.b = null,
            this.c = null;
            var f = d || {};
            this.d = {},
            m(k, function(a, b) {
                e.d[a] = f.hasOwnProperty(a) ? f[a] : b
            }),
            this.e = Boolean(b.getAttribute("placeholder"))
        }
        return e(a, [{
            key: "_init",
            value: function() {
                var a = this;
                if (this.d.nationalMode && (this.d.autoHideDialCode = !1),
                this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1),
                this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                this.g && (document.body.classList.add("iti-mobile"),
                this.d.dropdownContainer || (this.d.dropdownContainer = document.body)),
                "undefined" != typeof Promise) {
                    var b = new Promise(function(b, c) {
                        a.h = b,
                        a.i = c
                    }
                    )
                      , c = new Promise(function(b, c) {
                        a.i0 = b,
                        a.i1 = c
                    }
                    );
                    this.promise = Promise.all([b, c])
                } else
                    this.h = this.i = function() {}
                    ,
                    this.i0 = this.i1 = function() {}
                    ;
                this.s = {},
                this._b(),
                this._f(),
                this._h(),
                this._i(),
                this._i3()
            }
        }, {
            key: "_b",
            value: function() {
                this._d(),
                this._d2(),
                this._e(),
                this.d.localizedCountries && this._d0(),
                (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1)
            }
        }, {
            key: "_c",
            value: function(a, c, d) {
                c.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = c.length),
                this.q.hasOwnProperty(c) || (this.q[c] = []);
                for (var e = 0; e < this.q[c].length; e++)
                    if (this.q[c][e] === a)
                        return;
                var f = d !== b ? d : this.q[c].length;
                this.q[c][f] = a
            }
        }, {
            key: "_d",
            value: function() {
                if (this.d.onlyCountries.length) {
                    var a = this.d.onlyCountries.map(function(a) {
                        return a.toLowerCase()
                    });
                    this.p = f.filter(function(b) {
                        return a.indexOf(b.iso2) > -1
                    })
                } else if (this.d.excludeCountries.length) {
                    var b = this.d.excludeCountries.map(function(a) {
                        return a.toLowerCase()
                    });
                    this.p = f.filter(function(a) {
                        return -1 === b.indexOf(a.iso2)
                    })
                } else
                    this.p = f
            }
        }, {
            key: "_d0",
            value: function() {
                for (var a = 0; a < this.p.length; a++) {
                    var b = this.p[a].iso2.toLowerCase();
                    this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b])
                }
            }
        }, {
            key: "_d1",
            value: function(a, b) {
                return a.name.localeCompare(b.name)
            }
        }, {
            key: "_d2",
            value: function() {
                this.dialCodeMaxLen = 0,
                this.q = {};
                for (var a = 0; a < this.p.length; a++) {
                    var b = this.p[a];
                    this._c(b.iso2, b.dialCode, b.priority)
                }
                for (var c = 0; c < this.p.length; c++) {
                    var d = this.p[c];
                    if (d.areaCodes)
                        for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) {
                            for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
                                var i = d.dialCode + g.substr(0, h);
                                this._c(e, i),
                                this._c(d.iso2, i)
                            }
                            this._c(d.iso2, d.dialCode + g)
                        }
                }
            }
        }, {
            key: "_e",
            value: function() {
                this.preferredCountries = [];
                for (var a = 0; a < this.d.preferredCountries.length; a++) {
                    var b = this.d.preferredCountries[a].toLowerCase()
                      , c = this._y(b, !1, !0);
                    c && this.preferredCountries.push(c)
                }
            }
        }, {
            key: "_e2",
            value: function(a, b, c) {
                var d = document.createElement(a);
                return b && m(b, function(a, b) {
                    return d.setAttribute(a, b)
                }),
                c && c.appendChild(d),
                d
            }
        }, {
            key: "_f",
            value: function() {
                this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off");
                var a = "iti";
                this.d.allowDropdown && (a += " iti--allow-dropdown"),
                this.d.separateDialCode && (a += " iti--separate-dial-code"),
                this.d.customContainer && (a += " ",
                a += this.d.customContainer);
                var b = this._e2("div", {
                    "class": a
                });
                if (this.a.parentNode.insertBefore(b, this.a),
                this.k = this._e2("div", {
                    "class": "iti__flag-container"
                }, b),
                b.appendChild(this.a),
                this.selectedFlag = this._e2("div", {
                    "class": "iti__selected-flag",
                    role: "combobox",
                    "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                    "aria-expanded": "false"
                }, this.k),
                this.l = this._e2("div", {
                    "class": "iti__flag"
                }, this.selectedFlag),
                this.d.separateDialCode && (this.t = this._e2("div", {
                    "class": "iti__selected-dial-code"
                }, this.selectedFlag)),
                this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"),
                this.u = this._e2("div", {
                    "class": "iti__arrow"
                }, this.selectedFlag),
                this.m = this._e2("ul", {
                    "class": "iti__country-list iti__hide",
                    id: "iti-".concat(this.id, "__country-listbox"),
                    role: "listbox"
                }),
                this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0),
                this._e2("li", {
                    "class": "iti__divider",
                    role: "separator",
                    "aria-disabled": "true"
                }, this.m)),
                this._g(this.p, "iti__standard"),
                this.d.dropdownContainer ? (this.dropdown = this._e2("div", {
                    "class": "iti iti--container"
                }),
                this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)),
                this.d.hiddenInput) {
                    var c = this.d.hiddenInput
                      , d = this.a.getAttribute("name");
                    if (d) {
                        var e = d.lastIndexOf("[");
                        -1 !== e && (c = "".concat(d.substr(0, e), "[").concat(c, "]"))
                    }
                    this.hiddenInput = this._e2("input", {
                        type: "hidden",
                        name: c
                    }),
                    b.appendChild(this.hiddenInput)
                }
            }
        }, {
            key: "_g",
            value: function(a, b, c) {
                for (var d = "", e = 0; e < a.length; e++) {
                    var f = a[e]
                      , g = c ? "-preferred" : "";
                    d += "<li class='iti__country ".concat(b, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(f.iso2).concat(g, "' role='option' data-dial-code='").concat(f.dialCode, "' data-country-code='").concat(f.iso2, "'>"),
                    d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2, "'></div></div>"),
                    d += "<span class='iti__country-name'>".concat(f.name, "</span>"),
                    d += "<span class='iti__dial-code'>+".concat(f.dialCode, "</span>"),
                    d += "</li>"
                }
                this.m.insertAdjacentHTML("beforeend", d)
            }
        }, {
            key: "_h",
            value: function() {
                var a = this.a.value
                  , b = this._5(a)
                  , c = this._w(a)
                  , d = this.d
                  , e = d.initialCountry
                  , f = d.nationalMode
                  , g = d.autoHideDialCode
                  , h = d.separateDialCode;
                b && !c ? this._v(a) : "auto" !== e && (e ? this._z(e.toLowerCase()) : b && c ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2,
                a || this._z(this.j)),
                a || f || g || h || (this.a.value = "+".concat(this.s.dialCode))),
                a && this._u(a)
            }
        }, {
            key: "_i",
            value: function() {
                this._j(),
                this.d.autoHideDialCode && this._l(),
                this.d.allowDropdown && this._i2(),
                this.hiddenInput && this._i0()
            }
        }, {
            key: "_i0",
            value: function() {
                var a = this;
                this._a14 = function() {
                    a.hiddenInput.value = a.getNumber()
                }
                ,
                this.a.form && this.a.form.addEventListener("submit", this._a14)
            }
        }, {
            key: "_i1",
            value: function() {
                for (var a = this.a; a && "LABEL" !== a.tagName; )
                    a = a.parentNode;
                return a
            }
        }, {
            key: "_i2",
            value: function() {
                var a = this;
                this._a9 = function(b) {
                    a.m.classList.contains("iti__hide") ? a.a.focus() : b.preventDefault()
                }
                ;
                var b = this._i1();
                b && b.addEventListener("click", this._a9),
                this._a10 = function() {
                    !a.m.classList.contains("iti__hide") || a.a.disabled || a.a.readOnly || a._n()
                }
                ,
                this.selectedFlag.addEventListener("click", this._a10),
                this._a11 = function(b) {
                    a.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b.key) && (b.preventDefault(),
                    b.stopPropagation(),
                    a._n()),
                    "Tab" === b.key && a._2()
                }
                ,
                this.k.addEventListener("keydown", this._a11)
            }
        }, {
            key: "_i3",
            value: function() {
                var a = this;
                this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.windowLoaded ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function() {
                    window.intlTelInputGlobals.loadUtils(a.d.utilsScript)
                }) : this.i0(),
                "auto" === this.d.initialCountry ? this._i4() : this.h()
            }
        }, {
            key: "_i4",
            value: function() {
                window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0,
                "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function(a) {
                    window.intlTelInputGlobals.autoCountry = a.toLowerCase(),
                    setTimeout(function() {
                        return n("handleAutoCountry")
                    })
                }, function() {
                    return n("rejectAutoCountryPromise")
                }))
            }
        }, {
            key: "_j",
            value: function() {
                var a = this;
                this._a12 = function() {
                    a._v(a.a.value) && a._8()
                }
                ,
                this.a.addEventListener("keyup", this._a12),
                this._a13 = function() {
                    setTimeout(a._a12)
                }
                ,
                this.a.addEventListener("cut", this._a13),
                this.a.addEventListener("paste", this._a13)
            }
        }, {
            key: "_j2",
            value: function(a) {
                var b = this.a.getAttribute("maxlength");
                return b && a.length > b ? a.substr(0, b) : a
            }
        }, {
            key: "_l",
            value: function() {
                var a = this;
                this._a8 = function() {
                    a._l2()
                }
                ,
                this.a.form && this.a.form.addEventListener("submit", this._a8),
                this.a.addEventListener("blur", this._a8)
            }
        }, {
            key: "_l2",
            value: function() {
                if ("+" === this.a.value.charAt(0)) {
                    var a = this._m(this.a.value);
                    a && this.s.dialCode !== a || (this.a.value = "")
                }
            }
        }, {
            key: "_m",
            value: function(a) {
                return a.replace(/\D/g, "")
            }
        }, {
            key: "_m2",
            value: function(a) {
                var b = document.createEvent("Event");
                b.initEvent(a, !0, !0),
                this.a.dispatchEvent(b)
            }
        }, {
            key: "_n",
            value: function() {
                this.m.classList.remove("iti__hide"),
                this.selectedFlag.setAttribute("aria-expanded", "true"),
                this._o(),
                this.b && (this._x(this.b, !1),
                this._3(this.b, !0)),
                this._p(),
                this.u.classList.add("iti__arrow--up"),
                this._m2("open:countrydropdown")
            }
        }, {
            key: "_n2",
            value: function(a, b, c) {
                c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b)
            }
        }, {
            key: "_o",
            value: function() {
                var a = this;
                if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown),
                !this.g) {
                    var b = this.a.getBoundingClientRect()
                      , c = window.pageYOffset || document.documentElement.scrollTop
                      , d = b.top + c
                      , e = this.m.offsetHeight
                      , f = d + this.a.offsetHeight + e < c + window.innerHeight
                      , g = d - e > c;
                    if (this._n2(this.m, "iti__country-list--dropup", !f && g),
                    this.d.dropdownContainer) {
                        var h = !f && g ? 0 : this.a.offsetHeight;
                        this.dropdown.style.top = "".concat(d + h, "px"),
                        this.dropdown.style.left = "".concat(b.left + document.body.scrollLeft, "px"),
                        this._a4 = function() {
                            return a._2()
                        }
                        ,
                        window.addEventListener("scroll", this._a4)
                    }
                }
            }
        }, {
            key: "_o2",
            value: function(a) {
                for (var b = a; b && b !== this.m && !b.classList.contains("iti__country"); )
                    b = b.parentNode;
                return b === this.m ? null : b
            }
        }, {
            key: "_p",
            value: function() {
                var a = this;
                this._a0 = function(b) {
                    var c = a._o2(b.target);
                    c && a._x(c, !1)
                }
                ,
                this.m.addEventListener("mouseover", this._a0),
                this._a1 = function(b) {
                    var c = a._o2(b.target);
                    c && a._1(c)
                }
                ,
                this.m.addEventListener("click", this._a1);
                var b = !0;
                this._a2 = function() {
                    b || a._2(),
                    b = !1
                }
                ,
                document.documentElement.addEventListener("click", this._a2);
                var c = ""
                  , d = null;
                this._a3 = function(b) {
                    b.preventDefault(),
                    "ArrowUp" === b.key || "Up" === b.key || "ArrowDown" === b.key || "Down" === b.key ? a._q(b.key) : "Enter" === b.key ? a._r() : "Escape" === b.key ? a._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) && (d && clearTimeout(d),
                    c += b.key.toLowerCase(),
                    a._s(c),
                    d = setTimeout(function() {
                        c = ""
                    }, 1e3))
                }
                ,
                document.addEventListener("keydown", this._a3)
            }
        }, {
            key: "_q",
            value: function(a) {
                var b = "ArrowUp" === a || "Up" === a ? this.c.previousElementSibling : this.c.nextElementSibling;
                b && (b.classList.contains("iti__divider") && (b = "ArrowUp" === a || "Up" === a ? b.previousElementSibling : b.nextElementSibling),
                this._x(b, !0))
            }
        }, {
            key: "_r",
            value: function() {
                this.c && this._1(this.c)
            }
        }, {
            key: "_s",
            value: function(a) {
                for (var b = 0; b < this.p.length; b++)
                    if (this._t(this.p[b].name, a)) {
                        var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b].iso2));
                        this._x(c, !1),
                        this._3(c, !0);
                        break
                    }
            }
        }, {
            key: "_t",
            value: function(a, b) {
                return a.substr(0, b.length).toLowerCase() === b
            }
        }, {
            key: "_u",
            value: function(a) {
                var b = a;
                if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                    var c = !this.d.separateDialCode && (this.d.nationalMode || "+" !== b.charAt(0))
                      , d = intlTelInputUtils.numberFormat
                      , e = d.NATIONAL
                      , f = d.INTERNATIONAL
                      , g = c ? e : f;
                    b = intlTelInputUtils.formatNumber(b, this.s.iso2, g)
                }
                b = this._7(b),
                this.a.value = b
            }
        }, {
            key: "_v",
            value: function(a) {
                var b = a
                  , c = this.s.dialCode
                  , d = "1" === c;
                b && this.d.nationalMode && d && "+" !== b.charAt(0) && ("1" !== b.charAt(0) && (b = "1".concat(b)),
                b = "+".concat(b)),
                this.d.separateDialCode && c && "+" !== b.charAt(0) && (b = "+".concat(c).concat(b));
                var e = this._5(b)
                  , f = this._m(b)
                  , g = null;
                if (e) {
                    var h = this.q[this._m(e)]
                      , i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1;
                    if (!("1" === c && this._w(f)) && !i)
                        for (var j = 0; j < h.length; j++)
                            if (h[j]) {
                                g = h[j];
                                break
                            }
                } else
                    "+" === b.charAt(0) && f.length ? g = "" : b && "+" !== b || (g = this.j);
                return null !== g && this._z(g)
            }
        }, {
            key: "_w",
            value: function(a) {
                var b = this._m(a);
                if ("1" === b.charAt(0)) {
                    var c = b.substr(1, 3);
                    return -1 !== l.indexOf(c)
                }
                return !1
            }
        }, {
            key: "_x",
            value: function(a, b) {
                var c = this.c;
                c && c.classList.remove("iti__highlight"),
                this.c = a,
                this.c.classList.add("iti__highlight"),
                b && this.c.focus()
            }
        }, {
            key: "_y",
            value: function(a, b, c) {
                for (var d = b ? f : this.p, e = 0; e < d.length; e++)
                    if (d[e].iso2 === a)
                        return d[e];
                if (c)
                    return null;
                throw new Error("No country data for '".concat(a, "'"))
            }
        }, {
            key: "_z",
            value: function(a) {
                var b = this.s.iso2 ? this.s : {};
                this.s = a ? this._y(a, !1, !1) : {},
                this.s.iso2 && (this.j = this.s.iso2),
                this.l.setAttribute("class", "iti__flag iti__".concat(a));
                var c = a ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
                if (this.selectedFlag.setAttribute("title", c),
                this.d.separateDialCode) {
                    var d = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                    this.t.innerHTML = d;
                    var e = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                    this.a.style.paddingLeft = "".concat(e + 6, "px")
                }
                if (this._0(),
                this.d.allowDropdown) {
                    var f = this.b;
                    if (f && (f.classList.remove("iti__active"),
                    f.setAttribute("aria-selected", "false")),
                    a) {
                        var g = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a));
                        g.setAttribute("aria-selected", "true"),
                        g.classList.add("iti__active"),
                        this.b = g,
                        this.selectedFlag.setAttribute("aria-activedescendant", g.getAttribute("id"))
                    }
                }
                return b.iso2 !== a
            }
        }, {
            key: "_getHiddenSelectedFlagWidth",
            value: function() {
                var a = this.a.parentNode.cloneNode();
                a.style.visibility = "hidden",
                document.body.appendChild(a);
                var b = this.selectedFlag.cloneNode(!0);
                a.appendChild(b);
                var c = b.offsetWidth;
                return a.parentNode.removeChild(a),
                c
            }
        }, {
            key: "_0",
            value: function() {
                var a = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder;
                if (window.intlTelInputUtils && a) {
                    var b = intlTelInputUtils.numberType[this.d.placeholderNumberType]
                      , c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : "";
                    c = this._7(c),
                    "function" == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)),
                    this.a.setAttribute("placeholder", c)
                }
            }
        }, {
            key: "_1",
            value: function(a) {
                var b = this._z(a.getAttribute("data-country-code"));
                this._2(),
                this._4(a.getAttribute("data-dial-code"), !0),
                this.a.focus();
                var c = this.a.value.length;
                this.a.setSelectionRange(c, c),
                b && this._8()
            }
        }, {
            key: "_2",
            value: function() {
                this.m.classList.add("iti__hide"),
                this.selectedFlag.setAttribute("aria-expanded", "false"),
                this.u.classList.remove("iti__arrow--up"),
                document.removeEventListener("keydown", this._a3),
                document.documentElement.removeEventListener("click", this._a2),
                this.m.removeEventListener("mouseover", this._a0),
                this.m.removeEventListener("click", this._a1),
                this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4),
                this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)),
                this._m2("close:countrydropdown")
            }
        }, {
            key: "_3",
            value: function(a, b) {
                var c = this.m
                  , d = window.pageYOffset || document.documentElement.scrollTop
                  , e = c.offsetHeight
                  , f = c.getBoundingClientRect().top + d
                  , g = f + e
                  , h = a.offsetHeight
                  , i = a.getBoundingClientRect().top + d
                  , j = i + h
                  , k = i - f + c.scrollTop
                  , l = e / 2 - h / 2;
                if (i < f)
                    b && (k -= l),
                    c.scrollTop = k;
                else if (j > g) {
                    b && (k += l);
                    var m = e - h;
                    c.scrollTop = k - m
                }
            }
        }, {
            key: "_4",
            value: function(a, b) {
                var c, d = this.a.value, e = "+".concat(a);
                if ("+" === d.charAt(0)) {
                    var f = this._5(d);
                    c = f ? d.replace(f, e) : e
                } else {
                    if (this.d.nationalMode || this.d.separateDialCode)
                        return;
                    if (d)
                        c = e + d;
                    else {
                        if (!b && this.d.autoHideDialCode)
                            return;
                        c = e
                    }
                }
                this.a.value = c
            }
        }, {
            key: "_5",
            value: function(a) {
                var b = "";
                if ("+" === a.charAt(0))
                    for (var c = "", d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        if (!isNaN(parseInt(e, 10)) && (c += e,
                        this.q[c] && (b = a.substr(0, d + 1)),
                        c.length === this.dialCodeMaxLen))
                            break
                    }
                return b
            }
        }, {
            key: "_6",
            value: function() {
                var a = this.a.value.trim()
                  , b = this.s.dialCode
                  , c = this._m(a);
                return (this.d.separateDialCode && "+" !== a.charAt(0) && b && c ? "+".concat(b) : "") + a
            }
        }, {
            key: "_7",
            value: function(a) {
                var b = a;
                if (this.d.separateDialCode) {
                    var c = this._5(b);
                    if (c) {
                        c = "+".concat(this.s.dialCode);
                        var d = " " === b[c.length] || "-" === b[c.length] ? c.length + 1 : c.length;
                        b = b.substr(d)
                    }
                }
                return this._j2(b)
            }
        }, {
            key: "_8",
            value: function() {
                this._m2("countrychange")
            }
        }, {
            key: "handleAutoCountry",
            value: function() {
                "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry,
                this.a.value || this.setCountry(this.j),
                this.h())
            }
        }, {
            key: "handleUtils",
            value: function() {
                window.intlTelInputUtils && (this.a.value && this._u(this.a.value),
                this._0()),
                this.i0()
            }
        }, {
            key: "destroy",
            value: function() {
                var a = this.a.form;
                if (this.d.allowDropdown) {
                    this._2(),
                    this.selectedFlag.removeEventListener("click", this._a10),
                    this.k.removeEventListener("keydown", this._a11);
                    var b = this._i1();
                    b && b.removeEventListener("click", this._a9)
                }
                this.hiddenInput && a && a.removeEventListener("submit", this._a14),
                this.d.autoHideDialCode && (a && a.removeEventListener("submit", this._a8),
                this.a.removeEventListener("blur", this._a8)),
                this.a.removeEventListener("keyup", this._a12),
                this.a.removeEventListener("cut", this._a13),
                this.a.removeEventListener("paste", this._a13),
                this.a.removeAttribute("data-intl-tel-input-id");
                var c = this.a.parentNode;
                c.parentNode.insertBefore(this.a, c),
                c.parentNode.removeChild(c),
                delete window.intlTelInputGlobals.instances[this.id]
            }
        }, {
            key: "getExtension",
            value: function() {
                return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : ""
            }
        }, {
            key: "getNumber",
            value: function(a) {
                if (window.intlTelInputUtils) {
                    var b = this.s.iso2;
                    return intlTelInputUtils.formatNumber(this._6(), b, a)
                }
                return ""
            }
        }, {
            key: "getNumberType",
            value: function() {
                return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99
            }
        }, {
            key: "getSelectedCountryData",
            value: function() {
                return this.s
            }
        }, {
            key: "getValidationError",
            value: function() {
                if (window.intlTelInputUtils) {
                    var a = this.s.iso2;
                    return intlTelInputUtils.getValidationError(this._6(), a)
                }
                return -99
            }
        }, {
            key: "isValidNumber",
            value: function() {
                var a = this._6().trim()
                  , b = this.d.nationalMode ? this.s.iso2 : "";
                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, b) : null
            }
        }, {
            key: "setCountry",
            value: function(a) {
                var b = a.toLowerCase();
                this.l.classList.contains("iti__".concat(b)) || (this._z(b),
                this._4(this.s.dialCode, !1),
                this._8())
            }
        }, {
            key: "setNumber",
            value: function(a) {
                var b = this._v(a);
                this._u(a),
                b && this._8()
            }
        }, {
            key: "setPlaceholderNumberType",
            value: function(a) {
                this.d.placeholderNumberType = a,
                this._0()
            }
        }]),
        a
    }();
    i.getCountryData = function() {
        return f
    }
    ;
    var p = function(a, b, c) {
        var d = document.createElement("script");
        d.onload = function() {
            n("handleUtils"),
            b && b()
        }
        ,
        d.onerror = function() {
            n("rejectUtilsScriptPromise"),
            c && c()
        }
        ,
        d.className = "iti-load-utils",
        d.async = !0,
        d.src = a,
        document.body.appendChild(d)
    };
    i.loadUtils = function(a) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
            if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0,
            "undefined" != typeof Promise)
                return new Promise(function(b, c) {
                    return p(a, b, c)
                }
                );
            p(a)
        }
        return null
    }
    ,
    i.defaults = k,
    i.version = "17.0.0";
    a.fn.intlTelInput = function(c) {
        var d = arguments;
        if (c === b || "object" == typeof c)
            return this.each(function() {
                if (!a.data(this, "plugin_intlTelInput")) {
                    var b = new o(this,c);
                    b._init(),
                    window.intlTelInputGlobals.instances[b.id] = b,
                    a.data(this, "plugin_intlTelInput", b)
                }
            });
        if ("string" == typeof c && "_" !== c[0]) {
            var e;
            return this.each(function() {
                var b = a.data(this, "plugin_intlTelInput");
                b instanceof o && "function" == typeof b[c] && (e = b[c].apply(b, Array.prototype.slice.call(d, 1))),
                "destroy" === c && a.data(this, "plugin_intlTelInput", null)
            }),
            e !== b ? e : this
        }
    }
});

// libphonenumber-js.min.js 1.7.9
// downloaded from == https://www.cdnpkg.com/libphonenumber-js?id=50545
// version 1.7.9
// version link == https://www.cdnpkg.com/libphonenumber-js/1.7.9?id=50545
!function(t, d) {
    "object" == typeof exports && "object" == typeof module ? module.exports = d() : "function" == typeof define && define.amd ? define("libphonenumber", [], d) : "object" == typeof exports ? exports.libphonenumber = d() : t.libphonenumber = d()
}(window, function() {
    return function(t) {
        var d = {};
        function e(r) {
            if (d[r])
                return d[r].exports;
            var n = d[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(n.exports, n, n.exports, e),
            n.l = !0,
            n.exports
        }
        return e.m = t,
        e.c = d,
        e.d = function(t, d, r) {
            e.o(t, d) || Object.defineProperty(t, d, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        e.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        e.n = function(t) {
            var d = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(d, "a", d),
            d
        }
        ,
        e.o = function(t, d) {
            return Object.prototype.hasOwnProperty.call(t, d)
        }
        ,
        e.p = "",
        e(e.s = 45)
    }([function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        d.validateMetadata = p,
        d.getExtPrefix = function(t, d) {
            if ((d = new f(d)).hasCountry(t))
                return d.country(t).ext();
            return s
        }
        ,
        d.getCountryCallingCode = function(t, d) {
            if ((d = new f(d)).hasCountry(t))
                return d.country(t).countryCallingCode();
            throw new Error("Unknown country: " + t)
        }
        ,
        d.isSupportedCountry = function(t, d) {
            return void 0 !== d.countries[t]
        }
        ;
        var n, a = e(44), $ = (n = a) && n.__esModule ? n : {
            default: n
        };
        var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : r(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t)
        }
          , o = function() {
            function t(t, d) {
                for (var e = 0; e < d.length; e++) {
                    var r = d[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(d, e, r) {
                return e && t(d.prototype, e),
                r && t(d, r),
                d
            }
        }();
        function u(t, d) {
            if (!(t instanceof d))
                throw new TypeError("Cannot call a class as a function")
        }
        var l = "1.2.0"
          , s = " ext. "
          , f = function() {
            function t(d) {
                u(this, t),
                p(d),
                this.metadata = d,
                this.v1 = !d.version,
                this.v2 = void 0 !== d.version && -1 === (0,
                $.default)(d.version, l),
                this.v3 = void 0 !== d.version
            }
            return o(t, [{
                key: "hasCountry",
                value: function(t) {
                    return void 0 !== this.metadata.countries[t]
                }
            }, {
                key: "country",
                value: function(t) {
                    if (!t)
                        return this._country = void 0,
                        this.country_metadata = void 0,
                        this;
                    if (!this.hasCountry(t))
                        throw new Error("Unknown country: " + t);
                    return this._country = t,
                    this.country_metadata = this.metadata.countries[t],
                    this
                }
            }, {
                key: "getDefaultCountryMetadataForRegion",
                value: function() {
                    return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]]
                }
            }, {
                key: "countryCallingCode",
                value: function() {
                    return this.country_metadata[0]
                }
            }, {
                key: "IDDPrefix",
                value: function() {
                    if (!this.v1 && !this.v2)
                        return this.country_metadata[1]
                }
            }, {
                key: "defaultIDDPrefix",
                value: function() {
                    if (!this.v1 && !this.v2)
                        return this.country_metadata[12]
                }
            }, {
                key: "nationalNumberPattern",
                value: function() {
                    return this.v1 || this.v2 ? this.country_metadata[1] : this.country_metadata[2]
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.v1)
                        return this.country_metadata[this.v2 ? 2 : 3]
                }
            }, {
                key: "_getFormats",
                value: function(t) {
                    return t[this.v1 ? 2 : this.v2 ? 3 : 4]
                }
            }, {
                key: "formats",
                value: function() {
                    var t = this
                      , d = this._getFormats(this.country_metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                    return d.map(function(d) {
                        return new c(d,t)
                    })
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                }
            }, {
                key: "_getNationalPrefixFormattingRule",
                value: function(t) {
                    return t[this.v1 ? 4 : this.v2 ? 5 : 6]
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this._getNationalPrefixFormattingRule(this.country_metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                }
            }, {
                key: "nationalPrefixForParsing",
                value: function() {
                    return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix()
                }
            }, {
                key: "nationalPrefixTransformRule",
                value: function() {
                    return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                }
            }, {
                key: "_getNationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                }
            }, {
                key: "leadingDigits",
                value: function() {
                    return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                }
            }, {
                key: "types",
                value: function() {
                    return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                }
            }, {
                key: "hasTypes",
                value: function() {
                    return (!this.types() || 0 !== this.types().length) && !!this.types()
                }
            }, {
                key: "type",
                value: function(t) {
                    if (this.hasTypes() && y(this.types(), t))
                        return new h(y(this.types(), t),this)
                }
            }, {
                key: "ext",
                value: function() {
                    return this.v1 || this.v2 ? s : this.country_metadata[13] || s
                }
            }, {
                key: "countryCallingCodes",
                value: function() {
                    return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                }
            }, {
                key: "chooseCountryByCountryCallingCode",
                value: function(t) {
                    var d = this.countryCallingCodes()[t][0];
                    this.hasCountry(d) && this.country(d)
                }
            }, {
                key: "selectedCountry",
                value: function() {
                    return this._country
                }
            }]),
            t
        }();
        d.default = f;
        var c = function() {
            function t(d, e) {
                u(this, t),
                this._format = d,
                this.metadata = e
            }
            return o(t, [{
                key: "pattern",
                value: function() {
                    return this._format[0]
                }
            }, {
                key: "format",
                value: function() {
                    return this._format[1]
                }
            }, {
                key: "leadingDigitsPatterns",
                value: function() {
                    return this._format[2] || []
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting()
                }
            }, {
                key: "nationalPrefixIsMandatoryWhenFormatting",
                value: function() {
                    return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting()
                }
            }, {
                key: "usesNationalPrefix",
                value: function() {
                    return this.nationalPrefixFormattingRule() && "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""))
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format()
                }
            }]),
            t
        }()
          , h = function() {
            function t(d, e) {
                u(this, t),
                this.type = d,
                this.metadata = e
            }
            return o(t, [{
                key: "pattern",
                value: function() {
                    return this.metadata.v1 ? this.type : this.type[0]
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.metadata.v1)
                        return this.type[1] || this.metadata.possibleLengths()
                }
            }]),
            t
        }();
        function y(t, d) {
            switch (d) {
            case "FIXED_LINE":
                return t[0];
            case "MOBILE":
                return t[1];
            case "TOLL_FREE":
                return t[2];
            case "PREMIUM_RATE":
                return t[3];
            case "PERSONAL_NUMBER":
                return t[4];
            case "VOICEMAIL":
                return t[5];
            case "UAN":
                return t[6];
            case "PAGER":
                return t[7];
            case "VOIP":
                return t[8];
            case "SHARED_COST":
                return t[9]
            }
        }
        function p(t) {
            if (!t)
                throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
            if (!m(t) || !m(t.countries) || !m(t.country_calling_codes) && !m(t.country_phone_code_to_countries))
                throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (m(t) ? "an object of shape: { " + Object.keys(t).join(", ") + " }" : "a " + v(t) + ": " + t) + ".")
        }
        var m = function(t) {
            return "object" === (void 0 === t ? "undefined" : i(t))
        }
          , v = function(t) {
            return void 0 === t ? "undefined" : i(t)
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        d.MIN_LENGTH_FOR_NSN = 2,
        d.MAX_LENGTH_FOR_NSN = 17,
        d.MAX_LENGTH_COUNTRY_CODE = 3,
        d.VALID_DIGITS = "0-9０-９٠-٩۰-۹";
        var r = d.WHITESPACE = "  ­​⁠　";
        d.VALID_PUNCTUATION = "-‐-―−ー－／/．." + r + "()（）［］\\[\\]~⁓∼～",
        d.PLUS_CHARS = "+＋"
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , e = arguments[2];
            if (e = new $.default(e),
            d.defaultCountry && !e.hasCountry(d.defaultCountry)) {
                if (d.v2)
                    throw new a.default("INVALID_COUNTRY");
                throw new Error("Unknown country: " + d.defaultCountry)
            }
            var f = function(t, d) {
                if (t && 0 === t.indexOf("tel:"))
                    return (0,
                    y.parseRFC3966)(t);
                var e = g(t, d);
                if (!e || !(0,
                i.default)(e))
                    return {};
                var r = (0,
                o.extractExtension)(e);
                if (r.ext)
                    return r;
                return {
                    number: e
                }
            }(t, d.v2)
              , h = f.number
              , m = f.ext;
            if (!h) {
                if (d.v2)
                    throw new a.default("NOT_A_NUMBER");
                return {}
            }
            var v = function(t, d, e) {
                var r = P(t, d, e.metadata)
                  , a = r.countryCallingCode
                  , $ = r.number;
                if (!$)
                    return {
                        countryCallingCode: a
                    };
                var i = void 0;
                if (a)
                    e.chooseCountryByCountryCallingCode(a);
                else {
                    if (!d)
                        return {};
                    e.country(d),
                    i = d,
                    a = (0,
                    l.default)(d, e.metadata)
                }
                var o = function(t, d) {
                    var e = (0,
                    u.default)(t)
                      , r = void 0
                      , a = C(e, d)
                      , $ = a.number
                      , i = a.carrierCode;
                    if (d.possibleLengths())
                        switch ((0,
                        s.checkNumberLengthForType)($, void 0, d)) {
                        case "TOO_SHORT":
                        case "INVALID_LENGTH":
                            break;
                        default:
                            e = $,
                            r = i
                        }
                    else
                        (0,
                        n.matchesEntirely)(e, d.nationalNumberPattern()) && !(0,
                        n.matchesEntirely)($, d.nationalNumberPattern()) || (e = $,
                        r = i);
                    return {
                        national_number: e,
                        carrier_code: r
                    }
                }($, e)
                  , f = o.national_number
                  , c = o.carrier_code
                  , h = N(a, f, e);
                h && (i = h,
                e.country(i));
                return {
                    country: i,
                    countryCallingCode: a,
                    national_number: f,
                    carrierCode: c
                }
            }(h, d.defaultCountry, e)
              , _ = v.country
              , b = v.national_number
              , A = v.countryCallingCode
              , I = v.carrierCode;
            if (!e.selectedCountry()) {
                if (d.v2)
                    throw new a.default("INVALID_COUNTRY");
                return {}
            }
            if (b.length < r.MIN_LENGTH_FOR_NSN) {
                if (d.v2)
                    throw new a.default("TOO_SHORT");
                return {}
            }
            if (b.length > r.MAX_LENGTH_FOR_NSN) {
                if (d.v2)
                    throw new a.default("TOO_LONG");
                return {}
            }
            if (d.v2) {
                var O = new p.default(A,b,e.metadata);
                return _ && (O.country = _),
                I && (O.carrierCode = I),
                m && (O.ext = m),
                O
            }
            var x = !(!_ || !(0,
            n.matchesEntirely)(b, e.nationalNumberPattern()));
            if (!d.extended)
                return x ? function(t, d, e) {
                    var r = {
                        country: t,
                        phone: d
                    };
                    e && (r.ext = e);
                    return r
                }(_, b, m) : {};
            return {
                country: _,
                countryCallingCode: A,
                carrierCode: I,
                valid: x,
                possible: !!x || !0 === d.extended && e.possibleLengths() && (0,
                c.is_possible_number)(b, void 0 !== A, e),
                phone: b,
                ext: m
            }
        }
        ,
        d.extract_formatted_phone_number = g,
        d.strip_national_prefix_and_carrier_code = C,
        d.find_country_code = N,
        d.extractCountryCallingCode = P;
        var r = e(1)
          , n = e(5)
          , a = m(e(16))
          , $ = m(e(0))
          , i = m(e(10))
          , o = e(9)
          , u = m(e(18))
          , l = m(e(28))
          , s = e(4)
          , f = m(s)
          , c = e(15)
          , h = e(27)
          , y = e(14)
          , p = m(e(8));
        function m(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var v = 250
          , _ = new RegExp("[" + r.PLUS_CHARS + r.VALID_DIGITS + "]")
          , b = new RegExp("[^" + r.VALID_DIGITS + "]+$");
        function g(t, d) {
            if (t)
                if (t.length > v) {
                    if (d)
                        throw new a.default("TOO_LONG")
                } else {
                    var e = t.search(_);
                    if (!(e < 0))
                        return t.slice(e).replace(b, "")
                }
        }
        function C(t, d) {
            if (!t || !d.nationalPrefixForParsing())
                return {
                    number: t
                };
            var e = new RegExp("^(?:" + d.nationalPrefixForParsing() + ")")
              , r = e.exec(t);
            if (!r)
                return {
                    number: t
                };
            var n = void 0
              , a = r.length - 1;
            n = d.nationalPrefixTransformRule() && r[a] ? t.replace(e, d.nationalPrefixTransformRule()) : t.slice(r[0].length);
            var $ = void 0;
            return a > 0 && ($ = r[1]),
            {
                number: n,
                carrierCode: $
            }
        }
        function N(t, d, e) {
            var r = e.countryCallingCodes()[t];
            return 1 === r.length ? r[0] : function(t, d, e) {
                e = new $.default(e);
                for (var r = t, n = Array.isArray(r), a = 0, r = n ? r : r[Symbol.iterator](); ; ) {
                    var i;
                    if (n) {
                        if (a >= r.length)
                            break;
                        i = r[a++]
                    } else {
                        if ((a = r.next()).done)
                            break;
                        i = a.value
                    }
                    var o = i;
                    if (e.country(o),
                    e.leadingDigits()) {
                        if (d && 0 === d.search(e.leadingDigits()))
                            return o
                    } else if ((0,
                    f.default)({
                        phone: d,
                        country: o
                    }, void 0, e.metadata))
                        return o
                }
            }(r, d, e.metadata)
        }
        function P(t, d, e) {
            if (!(t = (0,
            u.default)(t)))
                return {};
            if ("+" !== t[0]) {
                var n = (0,
                h.stripIDDPrefix)(t, d, e);
                if (!n || n === t)
                    return {
                        number: t
                    };
                t = "+" + n
            }
            if ("0" === t[1])
                return {};
            e = new $.default(e);
            for (var a = 2; a - 1 <= r.MAX_LENGTH_COUNTRY_CODE && a <= t.length; ) {
                var i = t.slice(1, a);
                if (e.countryCallingCodes()[i])
                    return {
                        countryCallingCode: i,
                        number: t.slice(a)
                    };
                a++
            }
            return {}
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        d.default = function() {
            var t = l(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            $.default)(d, e, r)
        }
        ,
        d.normalizeArguments = l;
        var n, a = e(25), $ = (n = a) && n.__esModule ? n : {
            default: n
        };
        var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : r(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t)
        }
          , o = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
          , u = function() {
            return function(t, d) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, d) {
                        var e = []
                          , r = !0
                          , n = !1
                          , a = void 0;
                        try {
                            for (var $, i = t[Symbol.iterator](); !(r = ($ = i.next()).done) && (e.push($.value),
                            !d || e.length !== d); r = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            a = t
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (n)
                                    throw a
                            }
                        }
                        return e
                    }(t, d);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        function l(t) {
            var d = Array.prototype.slice.call(t)
              , e = u(d, 4)
              , r = e[0]
              , n = e[1]
              , a = e[2]
              , $ = e[3]
              , i = void 0
              , l = void 0
              , f = void 0;
            if ("string" != typeof r)
                throw new TypeError("A text for parsing must be a string.");
            if (i = r,
            n && "string" != typeof n) {
                if (!s(n))
                    throw new Error("Invalid second argument: " + n);
                a ? (l = n,
                f = a) : f = n
            } else
                $ ? (l = a,
                f = $) : (l = void 0,
                f = a),
                n && (l = o({
                    defaultCountry: n
                }, l));
            return {
                text: i,
                options: l,
                metadata: f
            }
        }
        var s = function(t) {
            return "object" === (void 0 === t ? "undefined" : i(t))
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , e = arguments[2];
            if (!t.country)
                return;
            if (!(e = new a.default(e)).hasCountry(t.country))
                throw new Error("Unknown country: " + t.country);
            var r = d.v2 ? t.nationalNumber : t.phone;
            if (e.country(t.country),
            !(0,
            $.matchesEntirely)(r, e.nationalNumberPattern()))
                return;
            if (o(r, "FIXED_LINE", e))
                return e.type("MOBILE") && "" === e.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : e.type("MOBILE") ? o(r, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
            for (var n = i, u = Array.isArray(n), l = 0, n = u ? n : n[Symbol.iterator](); ; ) {
                var s;
                if (u) {
                    if (l >= n.length)
                        break;
                    s = n[l++]
                } else {
                    if ((l = n.next()).done)
                        break;
                    s = l.value
                }
                var f = s;
                if (o(r, f, e))
                    return f
            }
        }
        ,
        d.is_of_type = o,
        d.checkNumberLengthForType = function t(d, e, r) {
            var n = r.type(e);
            var a = n && n.possibleLengths() || r.possibleLengths();
            if ("FIXED_LINE_OR_MOBILE" === e) {
                if (!r.type("FIXED_LINE"))
                    return t(d, "MOBILE", r);
                var i = r.type("MOBILE");
                i && (a = (0,
                $.mergeArrays)(a, i.possibleLengths()))
            } else if (e && !n)
                return "INVALID_LENGTH";
            var o = d.length;
            var u = a[0];
            if (u === o)
                return "IS_POSSIBLE";
            if (u > o)
                return "TOO_SHORT";
            if (a[a.length - 1] < o)
                return "TOO_LONG";
            return a.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
        }
        ;
        var r, n = e(0), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(5);
        var i = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
        function o(t, d, e) {
            return !(!(d = e.type(d)) || !d.pattern()) && (!(d.possibleLengths() && d.possibleLengths().indexOf(t.length) < 0) && (0,
            $.matchesEntirely)(t, d.pattern()))
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.matchesEntirely = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , d = arguments[1];
            return new RegExp("^(?:" + d + ")$").test(t)
        }
        ,
        d.mergeArrays = function(t, d) {
            for (var e = t.slice(), r = d, n = Array.isArray(r), a = 0, r = n ? r : r[Symbol.iterator](); ; ) {
                var $;
                if (n) {
                    if (a >= r.length)
                        break;
                    $ = r[a++]
                } else {
                    if ((a = r.next()).done)
                        break;
                    $ = a.value
                }
                var i = $;
                t.indexOf(i) < 0 && e.push(i)
            }
            return e.sort(function(t, d) {
                return t - d
            })
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.limit = function(t, d) {
            if (t < 0 || d <= 0 || d < t)
                throw new TypeError;
            return "{" + t + "," + d + "}"
        }
        ,
        d.trimAfterFirstMatch = function(t, d) {
            var e = d.search(t);
            if (e >= 0)
                return d.slice(0, e);
            return d
        }
        ,
        d.startsWith = function(t, d) {
            return 0 === t.indexOf(d)
        }
        ,
        d.endsWith = function(t, d) {
            return t.indexOf(d, t.length - d.length) === t.length - d.length
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , e = arguments[2];
            if (e = new r.default(e),
            !t.country)
                return !1;
            if (!e.hasCountry(t.country))
                throw new Error("Unknown country: " + t.country);
            if (e.country(t.country),
            e.hasTypes())
                return void 0 !== (0,
                a.default)(t, d, e.metadata);
            var $ = d.v2 ? t.nationalNumber : t.phone;
            return (0,
            n.matchesEntirely)($, e.nationalNumberPattern())
        }
        ;
        var r = $(e(0))
          , n = e(5)
          , a = $(e(4));
        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = o(e(0))
          , n = o(e(15))
          , a = o(e(7))
          , $ = (o(e(26)),
        o(e(4)))
          , i = o(e(13));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
          , l = function() {
            function t(t, d) {
                for (var e = 0; e < d.length; e++) {
                    var r = d[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(d, e, r) {
                return e && t(d.prototype, e),
                r && t(d, r),
                d
            }
        }();
        var s = function() {
            function t(d, e, n) {
                if (function(t, d) {
                    if (!(t instanceof d))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                !d)
                    throw new TypeError("`countryCallingCode` not passed");
                if (!e)
                    throw new TypeError("`nationalNumber` not passed");
                if (f(d)) {
                    this.country = d;
                    var a = new r.default(n);
                    a.country(d),
                    d = a.countryCallingCode()
                }
                this.countryCallingCode = d,
                this.nationalNumber = e,
                this.number = "+" + this.countryCallingCode + this.nationalNumber,
                this.metadata = n
            }
            return l(t, [{
                key: "isPossible",
                value: function() {
                    return (0,
                    n.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "isValid",
                value: function() {
                    return (0,
                    a.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "getType",
                value: function() {
                    return (0,
                    $.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "format",
                value: function(t, d) {
                    return (0,
                    i.default)(this, t, d ? u({}, d, {
                        v2: !0
                    }) : {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "formatNational",
                value: function(t) {
                    return this.format("NATIONAL", t)
                }
            }, {
                key: "formatInternational",
                value: function(t) {
                    return this.format("INTERNATIONAL", t)
                }
            }, {
                key: "getURI",
                value: function(t) {
                    return this.format("RFC3966", t)
                }
            }]),
            t
        }();
        d.default = s;
        var f = function(t) {
            return /^[A-Z]{2}$/.test(t)
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.EXTN_PATTERNS_FOR_MATCHING = d.EXTN_PATTERNS_FOR_PARSING = void 0,
        d.extractExtension = function(t) {
            var d = t.search(o);
            if (d < 0)
                return {};
            var e = t.slice(0, d)
              , r = t.match(o)
              , n = 1;
            for (; n < r.length; ) {
                if (null != r[n] && r[n].length > 0)
                    return {
                        number: e,
                        ext: r[n]
                    };
                n++
            }
        }
        ;
        var r = e(1)
          , n = ";ext="
          , a = "([" + r.VALID_DIGITS + "]{1,7})";
        function $(t) {
            var d = "xｘ#＃~～";
            switch (t) {
            case "parsing":
                d = ",;" + d
            }
            return n + a + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|[" + d + "]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + a + "#?|[- ]+([" + r.VALID_DIGITS + "]{1,5})#"
        }
        var i = d.EXTN_PATTERNS_FOR_PARSING = $("parsing")
          , o = (d.EXTN_PATTERNS_FOR_MATCHING = $("matching"),
        new RegExp("(?:" + i + ")$","i"))
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            return t.length >= r.MIN_LENGTH_FOR_NSN && i.test(t)
        }
        ;
        var r = e(1)
          , n = e(9)
          , a = "[" + r.VALID_DIGITS + "]{" + r.MIN_LENGTH_FOR_NSN + "}"
          , $ = "[" + r.PLUS_CHARS + "]{0,1}(?:[" + r.VALID_PUNCTUATION + "]*[" + r.VALID_DIGITS + "]){3,}[" + r.VALID_PUNCTUATION + r.VALID_DIGITS + "]*"
          , i = new RegExp("^" + a + "$|^" + $ + "(?:" + n.EXTN_PATTERNS_FOR_PARSING + ")?$","i")
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = y(e(8))
          , n = e(1)
          , a = e(9)
          , $ = e(6)
          , i = e(20)
          , o = y(e(31))
          , u = y(e(23))
          , l = y(e(22))
          , s = e(21)
          , f = y(s)
          , c = e(0)
          , h = y(e(2));
        function y(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
          , m = function() {
            function t(t, d) {
                for (var e = 0; e < d.length; e++) {
                    var r = d[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(d, e, r) {
                return e && t(d.prototype, e),
                r && t(d, r),
                d
            }
        }();
        var v = ["\\/+(.*)/", "(\\([^(]*)", "(?:" + i.pZ + "-|-" + i.pZ + ")" + i.pZ + "*(.+)", "[‒-―－]" + i.pZ + "*(.+)", "\\.+" + i.pZ + "*([^.]+)", i.pZ + "+(" + i.PZ + "+)"]
          , _ = (0,
        $.limit)(0, 2)
          , b = (0,
        $.limit)(0, 4)
          , g = n.MAX_LENGTH_FOR_NSN + n.MAX_LENGTH_COUNTRY_CODE
          , C = (0,
        $.limit)(0, g)
          , N = "[" + n.VALID_PUNCTUATION + "]" + b
          , P = i.pNd + (0,
        $.limit)(1, g)
          , A = "(?:" + s.LEAD_CLASS + N + ")" + _ + P + "(?:" + N + P + ")" + C + "(?:" + a.EXTN_PATTERNS_FOR_MATCHING + ")?"
          , I = new RegExp("[^" + i._pN + i._pL + "#]+$")
          , O = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1
          , x = function() {
            function t() {
                var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments[2];
                if (function(t, d) {
                    if (!(t instanceof d))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.state = "NOT_READY",
                this.searchIndex = 0,
                !(e = p({}, e, {
                    defaultCountry: e.defaultCountry && (0,
                    c.isSupportedCountry)(e.defaultCountry, r) ? e.defaultCountry : void 0,
                    leniency: e.leniency || e.extended ? "POSSIBLE" : "VALID",
                    maxTries: e.maxTries || O
                })).leniency)
                    throw new TypeError("`Leniency` not supplied");
                if (e.maxTries < 0)
                    throw new TypeError("`maxTries` not supplied");
                if (this.text = d,
                this.options = e,
                this.metadata = r,
                this.leniency = o.default[e.leniency],
                !this.leniency)
                    throw new TypeError("Unknown leniency: " + e.leniency + ".");
                this.maxTries = e.maxTries,
                this.PATTERN = new RegExp(A,"ig")
            }
            return m(t, [{
                key: "find",
                value: function() {
                    for (var t = void 0; this.maxTries > 0 && null !== (t = this.PATTERN.exec(this.text)); ) {
                        var d = t[0]
                          , e = t.index;
                        if (d = (0,
                        u.default)(d),
                        (0,
                        l.default)(d, e, this.text)) {
                            var n = this.parseAndVerify(d, e, this.text) || this.extractInnerMatch(d, e, this.text);
                            if (n) {
                                if (this.options.v2) {
                                    var a = new r.default(n.country,n.phone,this.metadata);
                                    return n.ext && (a.ext = n.ext),
                                    {
                                        startsAt: n.startsAt,
                                        endsAt: n.endsAt,
                                        number: a
                                    }
                                }
                                return n
                            }
                        }
                        this.maxTries--
                    }
                }
            }, {
                key: "extractInnerMatch",
                value: function(t, d, e) {
                    var r = v
                      , n = Array.isArray(r)
                      , a = 0;
                    for (r = n ? r : r[Symbol.iterator](); ; ) {
                        var i;
                        if (n) {
                            if (a >= r.length)
                                break;
                            i = r[a++]
                        } else {
                            if ((a = r.next()).done)
                                break;
                            i = a.value
                        }
                        for (var o = !0, u = void 0, l = new RegExp(i,"g"); null !== (u = l.exec(t)) && this.maxTries > 0; ) {
                            if (o) {
                                var s = (0,
                                $.trimAfterFirstMatch)(I, t.slice(0, u.index))
                                  , f = this.parseAndVerify(s, d, e);
                                if (f)
                                    return f;
                                this.maxTries--,
                                o = !1
                            }
                            var c = (0,
                            $.trimAfterFirstMatch)(I, u[1])
                              , h = this.parseAndVerify(c, d + u.index, e);
                            if (h)
                                return h;
                            this.maxTries--
                        }
                    }
                }
            }, {
                key: "parseAndVerify",
                value: function(t, d, e) {
                    if ((0,
                    f.default)(t, d, e, this.options.leniency)) {
                        var r = (0,
                        h.default)(t, {
                            extended: !0,
                            defaultCountry: this.options.defaultCountry
                        }, this.metadata);
                        if (r.possible && this.leniency(r, t, this.metadata)) {
                            var n = {
                                startsAt: d,
                                endsAt: d + t.length,
                                country: r.country,
                                phone: r.phone
                            };
                            return r.ext && (n.ext = r.ext),
                            n
                        }
                    }
                }
            }, {
                key: "hasNext",
                value: function() {
                    return "NOT_READY" === this.state && (this.lastMatch = this.find(),
                    this.lastMatch ? this.state = "READY" : this.state = "DONE"),
                    "READY" === this.state
                }
            }, {
                key: "next",
                value: function() {
                    if (!this.hasNext())
                        throw new Error("No next element");
                    var t = this.lastMatch;
                    return this.lastMatch = null,
                    this.state = "NOT_READY",
                    t
                }
            }]),
            t
        }();
        d.default = x
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        d.default = function() {
            var t = l(arguments)
              , d = t.input
              , e = t.options
              , r = t.metadata;
            return (0,
            a.default)(d, e, r)
        }
        ,
        d.normalizeArguments = l;
        var n = i(e(10))
          , a = i(e(4))
          , $ = i(e(2));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : r(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t)
        }
          , u = function() {
            return function(t, d) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, d) {
                        var e = []
                          , r = !0
                          , n = !1
                          , a = void 0;
                        try {
                            for (var $, i = t[Symbol.iterator](); !(r = ($ = i.next()).done) && (e.push($.value),
                            !d || e.length !== d); r = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            a = t
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (n)
                                    throw a
                            }
                        }
                        return e
                    }(t, d);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        function l(t) {
            var d = Array.prototype.slice.call(t)
              , e = u(d, 4)
              , r = e[0]
              , a = e[1]
              , i = e[2]
              , l = e[3]
              , f = void 0
              , c = {}
              , h = void 0;
            if ("string" == typeof r)
                "object" !== (void 0 === a ? "undefined" : o(a)) ? (l ? (c = i,
                h = l) : h = i,
                f = (0,
                n.default)(r) ? (0,
                $.default)(r, {
                    defaultCountry: a
                }, h) : {}) : (i ? (c = a,
                h = i) : h = a,
                f = (0,
                n.default)(r) ? (0,
                $.default)(r, void 0, h) : {});
            else {
                if (!s(r))
                    throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");
                f = r,
                i ? (c = a,
                h = i) : h = a
            }
            return {
                input: f,
                options: c,
                metadata: h
            }
        }
        var s = function(t) {
            return "object" === (void 0 === t ? "undefined" : o(t))
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.FIRST_GROUP_PATTERN = void 0,
        d.default = function(t, d, e, r) {
            e = e ? l({}, s, e) : s;
            if (r = new i.default(r),
            t.country) {
                if (!r.hasCountry(t.country))
                    throw new Error("Unknown country: " + t.country);
                r.country(t.country)
            } else {
                if (!t.countryCallingCode)
                    return t.phone || "";
                r.chooseCountryByCountryCallingCode(t.countryCallingCode)
            }
            var n = r.countryCallingCode()
              , a = e.v2 ? t.nationalNumber : t.phone
              , $ = void 0;
            switch (d) {
            case "NATIONAL":
                return a ? m($ = h(a, "NATIONAL", r), t.ext, r, e.formatExtension) : "";
            case "INTERNATIONAL":
                return a ? ($ = h(a, "INTERNATIONAL", r),
                m($ = "+" + n + " " + $, t.ext, r, e.formatExtension)) : "+" + n;
            case "E.164":
                return "+" + n + a;
            case "RFC3966":
                return (0,
                u.formatRFC3966)({
                    number: "+" + n + a,
                    ext: t.ext
                });
            case "IDD":
                if (!e.fromCountry)
                    return;
                var f = (0,
                o.getIDDPrefix)(e.fromCountry, r.metadata);
                if (!f)
                    return;
                if (e.humanReadable) {
                    var c = n && v(a, r.countryCallingCode(), e.fromCountry, r);
                    return m($ = c || f + " " + n + " " + h(a, "INTERNATIONAL", r), t.ext, r, e.formatExtension)
                }
                return "" + f + n + a;
            default:
                throw new Error('Unknown "format" argument passed to "formatNumber()": "' + d + '"')
            }
        }
        ,
        d.format_national_number_using_format = c,
        d.choose_format_for_number = y,
        d.changeInternationalFormatStyle = p,
        d.formatIDDSameCountryCallingCodeNumber = v;
        var r, n = e(1), a = e(5), $ = e(0), i = (r = $) && r.__esModule ? r : {
            default: r
        }, o = e(27), u = e(14);
        var l = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
          , s = {
            formatExtension: function(t, d, e) {
                return "" + t + e.ext() + d
            }
        };
        var f = d.FIRST_GROUP_PATTERN = /(\$\d)/;
        function c(t, d, e, r, n) {
            var a = t.replace(new RegExp(d.pattern()), e ? d.internationalFormat() : !d.nationalPrefixFormattingRule() || d.nationalPrefixIsOptionalWhenFormatting() && !r ? d.format() : d.format().replace(f, d.nationalPrefixFormattingRule()));
            return e ? p(a) : a
        }
        function h(t, d, e) {
            var r = y(e.formats(), t);
            return r ? c(t, r, "INTERNATIONAL" === d, !0) : t
        }
        function y(t, d) {
            var e = t
              , r = Array.isArray(e)
              , n = 0;
            for (e = r ? e : e[Symbol.iterator](); ; ) {
                var $;
                if (r) {
                    if (n >= e.length)
                        break;
                    $ = e[n++]
                } else {
                    if ((n = e.next()).done)
                        break;
                    $ = n.value
                }
                var i = $;
                if (i.leadingDigitsPatterns().length > 0) {
                    var o = i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length - 1];
                    if (0 !== d.search(o))
                        continue
                }
                if ((0,
                a.matchesEntirely)(d, i.pattern()))
                    return i
            }
        }
        function p(t) {
            return t.replace(new RegExp("[" + n.VALID_PUNCTUATION + "]+","g"), " ").trim()
        }
        function m(t, d, e, r) {
            return d ? r(t, d, e) : t
        }
        function v(t, d, e, r) {
            var n = new i.default(r.metadata);
            if (n.country(e),
            d === n.countryCallingCode())
                return "1" === d ? d + " " + h(t, "NATIONAL", r) : h(t, "NATIONAL", r)
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.parseRFC3966 = function(t) {
            for (var d = void 0, e = void 0, r = (t = t.replace(/^tel:/, "tel=")).split(";"), n = Array.isArray(r), i = 0, r = n ? r : r[Symbol.iterator](); ; ) {
                var o;
                if (n) {
                    if (i >= r.length)
                        break;
                    o = r[i++]
                } else {
                    if ((i = r.next()).done)
                        break;
                    o = i.value
                }
                var u = o
                  , l = u.split("=")
                  , s = $(l, 2)
                  , f = s[0]
                  , c = s[1];
                switch (f) {
                case "tel":
                    d = c;
                    break;
                case "ext":
                    e = c;
                    break;
                case "phone-context":
                    "+" === c[0] && (d = c + d)
                }
            }
            if (!(0,
            a.default)(d))
                return {};
            var h = {
                number: d
            };
            e && (h.ext = e);
            return h
        }
        ,
        d.formatRFC3966 = function(t) {
            var d = t.number
              , e = t.ext;
            if (!d)
                return "";
            if ("+" !== d[0])
                throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
            return "tel:" + d + (e ? ";ext=" + e : "")
        }
        ;
        var r, n = e(10), a = (r = n) && r.__esModule ? r : {
            default: r
        };
        var $ = function() {
            return function(t, d) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, d) {
                        var e = []
                          , r = !0
                          , n = !1
                          , a = void 0;
                        try {
                            for (var $, i = t[Symbol.iterator](); !(r = ($ = i.next()).done) && (e.push($.value),
                            !d || e.length !== d); r = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            a = t
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (n)
                                    throw a
                            }
                        }
                        return e
                    }(t, d);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            void 0 === d && (d = {});
            if (e = new a.default(e),
            d.v2) {
                if (!t.countryCallingCode)
                    throw new Error("Invalid phone number object passed");
                e.chooseCountryByCountryCallingCode(t.countryCallingCode)
            } else {
                if (!t.phone)
                    return !1;
                if (t.country) {
                    if (!e.hasCountry(t.country))
                        throw new Error("Unknown country: " + t.country);
                    e.country(t.country)
                } else {
                    if (!t.countryCallingCode)
                        throw new Error("Invalid phone number object passed");
                    e.chooseCountryByCountryCallingCode(t.countryCallingCode)
                }
            }
            if (!e.possibleLengths())
                throw new Error("Metadata too old");
            return i(t.phone || t.nationalNumber, void 0, e)
        }
        ,
        d.is_possible_number = i;
        var r, n = e(0), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(4);
        function i(t, d, e) {
            switch ((0,
            $.checkNumberLengthForType)(t, void 0, e)) {
            case "IS_POSSIBLE":
                return !0;
            default:
                return !1
            }
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = function t(d) {
            !function(t, d) {
                if (!(t instanceof d))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.name = this.constructor.name,
            this.message = d,
            this.stack = new Error(d).stack
        };
        d.default = r,
        (r.prototype = Object.create(Error.prototype)).constructor = r
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.parseDigit = n,
        d.default = function(t) {
            for (var d = "", e = t.split(""), r = Array.isArray(e), a = 0, e = r ? e : e[Symbol.iterator](); ; ) {
                var $;
                if (r) {
                    if (a >= e.length)
                        break;
                    $ = e[a++]
                } else {
                    if ((a = e.next()).done)
                        break;
                    $ = a.value
                }
                var i = $
                  , o = n(i);
                o && (d += o)
            }
            return d
        }
        ;
        var r = d.DIGITS = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "０": "0",
            "１": "1",
            "２": "2",
            "３": "3",
            "４": "4",
            "５": "5",
            "６": "6",
            "７": "7",
            "８": "8",
            "９": "9",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        };
        function n(t) {
            return r[t]
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            for (var d = "", e = t.split(""), r = Array.isArray(e), a = 0, e = r ? e : e[Symbol.iterator](); ; ) {
                var $;
                if (r) {
                    if (a >= e.length)
                        break;
                    $ = e[a++]
                } else {
                    if ((a = e.next()).done)
                        break;
                    $ = a.value
                }
                var i = $;
                d += n(i, d) || ""
            }
            return d
        }
        ,
        d.parsePhoneNumberCharacter = n;
        var r = e(17);
        function n(t, d) {
            if ("+" === t) {
                if (d)
                    return;
                return "+"
            }
            return (0,
            r.parseDigit)(t)
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.DIGIT_PLACEHOLDER = void 0,
        d.strip_dangling_braces = C,
        d.cut_stripping_dangling_braces = N,
        d.close_dangling_braces = function(t, d) {
            var e = t.slice(0, d)
              , r = P("(", e)
              , n = P(")", e)
              , a = r - n;
            for (; a > 0 && d < t.length; )
                ")" === t[d] && a--,
                d++;
            return t.slice(0, d)
        }
        ,
        d.count_occurences = P,
        d.repeat = A;
        var r = s(e(0))
          , n = s(e(8))
          , a = e(1)
          , $ = e(5)
          , i = e(2)
          , o = e(13)
          , u = e(4)
          , l = s(e(18));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var f = function() {
            function t(t, d) {
                for (var e = 0; e < d.length; e++) {
                    var r = d[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(d, e, r) {
                return e && t(d.prototype, e),
                r && t(d, r),
                d
            }
        }();
        var c = A("9", 15)
          , h = d.DIGIT_PLACEHOLDER = "x"
          , y = new RegExp(h)
          , p = function() {
            return /\[([^\[\]])*\]/g
        }
          , m = function() {
            return /\d(?=[^,}][^,}])/g
        }
          , v = new RegExp("^[" + a.VALID_PUNCTUATION + "]*(\\$\\d[" + a.VALID_PUNCTUATION + "]*)+$")
          , _ = "[" + a.PLUS_CHARS + "]{0,1}[" + a.VALID_PUNCTUATION + a.VALID_DIGITS + "]*"
          , b = new RegExp("^" + _ + "$","i")
          , g = function() {
            function t(d, e) {
                !function(t, d) {
                    if (!(t instanceof d))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.options = {},
                this.metadata = new r.default(e),
                d && this.metadata.hasCountry(d) && (this.defaultCountry = d),
                this.reset()
            }
            return f(t, [{
                key: "input",
                value: function(t) {
                    var d = (0,
                    i.extract_formatted_phone_number)(t) || "";
                    return d || t && t.indexOf("+") >= 0 && (d = "+"),
                    b.test(d) ? this.processInput((0,
                    l.default)(d)) : this.currentOutput
                }
            }, {
                key: "processInput",
                value: function(t) {
                    if ("+" === t[0] && (this.parsedInput || (this.parsedInput += "+",
                    this.resetCountriness()),
                    t = t.slice(1)),
                    this.parsedInput += t,
                    this.nationalNumber += t,
                    this.isInternational())
                        if (this.countryCallingCode)
                            this.country || this.determineTheCountry();
                        else {
                            if (!this.nationalNumber)
                                return this.parsedInput;
                            if (!this.extractCountryCallingCode())
                                return this.parsedInput;
                            this.initialize_phone_number_formats_for_this_country_calling_code(),
                            this.resetFormat(),
                            this.determineTheCountry()
                        }
                    else {
                        var d = this.nationalPrefix;
                        this.nationalNumber = this.nationalPrefix + this.nationalNumber,
                        this.extractNationalPrefix(),
                        this.nationalPrefix !== d && (this.matching_formats = void 0,
                        this.resetFormat())
                    }
                    if (!this.nationalNumber)
                        return this.format_as_non_formatted_number();
                    this.match_formats_by_leading_digits();
                    var e = this.formatNationalNumber(t);
                    return e ? this.formatFullNumber(e) : this.format_as_non_formatted_number()
                }
            }, {
                key: "format_as_non_formatted_number",
                value: function() {
                    return this.isInternational() && this.countryCallingCode ? "+" + this.countryCallingCode + this.nationalNumber : this.parsedInput
                }
            }, {
                key: "formatNationalNumber",
                value: function(t) {
                    var d = void 0;
                    this.chosenFormat && (d = this.formatNextNationalNumberDigits(t));
                    var e = this.attempt_to_format_complete_phone_number();
                    return e || (this.chooseAnotherFormat() ? this.reformatNationalNumber() : d)
                }
            }, {
                key: "reset",
                value: function() {
                    return this.parsedInput = "",
                    this.currentOutput = "",
                    this.nationalPrefix = "",
                    this.nationalNumber = "",
                    this.carrierCode = "",
                    this.resetCountriness(),
                    this.resetFormat(),
                    this
                }
            }, {
                key: "resetCountry",
                value: function() {
                    this.isInternational() ? this.country = void 0 : this.country = this.defaultCountry
                }
            }, {
                key: "resetCountriness",
                value: function() {
                    this.resetCountry(),
                    this.defaultCountry && !this.isInternational() ? (this.metadata.country(this.defaultCountry),
                    this.countryCallingCode = this.metadata.countryCallingCode(),
                    this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0),
                    this.countryCallingCode = void 0,
                    this.available_formats = [],
                    this.matching_formats = void 0)
                }
            }, {
                key: "resetFormat",
                value: function() {
                    this.chosenFormat = void 0,
                    this.template = void 0,
                    this.partially_populated_template = void 0,
                    this.last_match_position = -1
                }
            }, {
                key: "reformatNationalNumber",
                value: function() {
                    return this.formatNextNationalNumberDigits(this.nationalNumber)
                }
            }, {
                key: "initialize_phone_number_formats_for_this_country_calling_code",
                value: function() {
                    this.available_formats = this.metadata.formats().filter(function(t) {
                        return v.test(t.internationalFormat())
                    }),
                    this.matching_formats = void 0
                }
            }, {
                key: "match_formats_by_leading_digits",
                value: function() {
                    var t = this.nationalNumber
                      , d = t.length - 3;
                    d < 0 && (d = 0);
                    var e = this.had_enough_leading_digits && this.matching_formats || this.available_formats;
                    this.had_enough_leading_digits = this.shouldFormat(),
                    this.matching_formats = e.filter(function(e) {
                        var r = e.leadingDigitsPatterns().length;
                        if (0 === r)
                            return !0;
                        var n = Math.min(d, r - 1)
                          , a = e.leadingDigitsPatterns()[n];
                        return new RegExp("^(" + a + ")").test(t)
                    }),
                    this.chosenFormat && -1 === this.matching_formats.indexOf(this.chosenFormat) && this.resetFormat()
                }
            }, {
                key: "shouldFormat",
                value: function() {
                    return this.nationalNumber.length >= 3
                }
            }, {
                key: "attempt_to_format_complete_phone_number",
                value: function() {
                    var t = this.matching_formats
                      , d = Array.isArray(t)
                      , e = 0;
                    for (t = d ? t : t[Symbol.iterator](); ; ) {
                        var r;
                        if (d) {
                            if (e >= t.length)
                                break;
                            r = t[e++]
                        } else {
                            if ((e = t.next()).done)
                                break;
                            r = e.value
                        }
                        var n = r;
                        if (new RegExp("^(?:" + n.pattern() + ")$").test(this.nationalNumber) && this.isFormatApplicable(n)) {
                            this.resetFormat(),
                            this.chosenFormat = n;
                            var a = (0,
                            o.format_national_number_using_format)(this.nationalNumber, n, this.isInternational(), "" !== this.nationalPrefix, this.metadata);
                            if (this.nationalPrefix && "1" === this.countryCallingCode && (a = "1 " + a),
                            this.createFormattingTemplate(n))
                                this.reformatNationalNumber();
                            else {
                                var $ = this.formatFullNumber(a);
                                this.template = $.replace(/[\d\+]/g, h),
                                this.partially_populated_template = $
                            }
                            return a
                        }
                    }
                }
            }, {
                key: "formatFullNumber",
                value: function(t) {
                    return this.isInternational() ? "+" + this.countryCallingCode + " " + t : t
                }
            }, {
                key: "extractCountryCallingCode",
                value: function() {
                    var t = (0,
                    i.extractCountryCallingCode)(this.parsedInput, this.defaultCountry, this.metadata.metadata)
                      , d = t.countryCallingCode
                      , e = t.number;
                    if (d)
                        return this.countryCallingCode = d,
                        this.nationalNumber = e,
                        this.metadata.chooseCountryByCountryCallingCode(d),
                        void 0 !== this.metadata.selectedCountry()
                }
            }, {
                key: "extractNationalPrefix",
                value: function() {
                    if (this.nationalPrefix = "",
                    this.metadata.selectedCountry()) {
                        var t = (0,
                        i.strip_national_prefix_and_carrier_code)(this.nationalNumber, this.metadata)
                          , d = t.number
                          , e = t.carrierCode;
                        if (e && (this.carrierCode = e),
                        this.metadata.possibleLengths() && (!this.isPossibleNumber(this.nationalNumber) || this.isPossibleNumber(d)) || !(0,
                        $.matchesEntirely)(this.nationalNumber, this.metadata.nationalNumberPattern()) || (0,
                        $.matchesEntirely)(d, this.metadata.nationalNumberPattern()))
                            return this.nationalPrefix = this.nationalNumber.slice(0, this.nationalNumber.length - d.length),
                            this.nationalNumber = d,
                            this.nationalPrefix
                    }
                }
            }, {
                key: "isPossibleNumber",
                value: function(t) {
                    switch ((0,
                    u.checkNumberLengthForType)(t, void 0, this.metadata)) {
                    case "IS_POSSIBLE":
                        return !0;
                    default:
                        return !1
                    }
                }
            }, {
                key: "chooseAnotherFormat",
                value: function() {
                    var t = this.matching_formats
                      , d = Array.isArray(t)
                      , e = 0;
                    for (t = d ? t : t[Symbol.iterator](); ; ) {
                        var r;
                        if (d) {
                            if (e >= t.length)
                                break;
                            r = t[e++]
                        } else {
                            if ((e = t.next()).done)
                                break;
                            r = e.value
                        }
                        var n = r;
                        if (this.chosenFormat === n)
                            return;
                        if (this.isFormatApplicable(n) && this.createFormattingTemplate(n))
                            return this.chosenFormat = n,
                            this.last_match_position = -1,
                            !0
                    }
                    this.resetCountry(),
                    this.resetFormat()
                }
            }, {
                key: "isFormatApplicable",
                value: function(t) {
                    return !(!this.isInternational() && !this.nationalPrefix && t.nationalPrefixIsMandatoryWhenFormatting()) && !(this.nationalPrefix && !t.usesNationalPrefix() && !t.nationalPrefixIsOptionalWhenFormatting())
                }
            }, {
                key: "createFormattingTemplate",
                value: function(t) {
                    if (!(t.pattern().indexOf("|") >= 0)) {
                        var d = this.getTemplateForNumberFormatPattern(t);
                        if (d)
                            return this.partially_populated_template = d,
                            this.isInternational() ? this.template = h + A(h, this.countryCallingCode.length) + " " + d : this.template = d.replace(/\d/g, h),
                            this.template
                    }
                }
            }, {
                key: "getTemplateForNumberFormatPattern",
                value: function(t) {
                    var d = t.pattern();
                    d = d.replace(p(), "\\d").replace(m(), "\\d");
                    var e = c.match(d)[0];
                    if (!(this.nationalNumber.length > e.length)) {
                        var r = this.getFormatFormat(t)
                          , n = new RegExp("^" + d + "$")
                          , a = this.nationalNumber.replace(/\d/g, "9");
                        return n.test(a) && (e = a),
                        e.replace(new RegExp(d), r).replace(new RegExp("9","g"), h)
                    }
                }
            }, {
                key: "formatNextNationalNumberDigits",
                value: function(t) {
                    var d = t.split("")
                      , e = Array.isArray(d)
                      , r = 0;
                    for (d = e ? d : d[Symbol.iterator](); ; ) {
                        var n;
                        if (e) {
                            if (r >= d.length)
                                break;
                            n = d[r++]
                        } else {
                            if ((r = d.next()).done)
                                break;
                            n = r.value
                        }
                        var a = n;
                        if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(y))
                            return this.chosenFormat = void 0,
                            this.template = void 0,
                            void (this.partially_populated_template = void 0);
                        this.last_match_position = this.partially_populated_template.search(y),
                        this.partially_populated_template = this.partially_populated_template.replace(y, a)
                    }
                    return N(this.partially_populated_template, this.last_match_position + 1)
                }
            }, {
                key: "isInternational",
                value: function() {
                    return this.parsedInput && "+" === this.parsedInput[0]
                }
            }, {
                key: "getFormatFormat",
                value: function(t) {
                    if (this.isInternational())
                        return (0,
                        o.changeInternationalFormatStyle)(t.internationalFormat());
                    if (t.nationalPrefixFormattingRule()) {
                        if (this.nationalPrefix || !t.usesNationalPrefix())
                            return t.format().replace(o.FIRST_GROUP_PATTERN, t.nationalPrefixFormattingRule())
                    } else if ("1" === this.countryCallingCode && "1" === this.nationalPrefix)
                        return "1 " + t.format();
                    return t.format()
                }
            }, {
                key: "determineTheCountry",
                value: function() {
                    this.country = (0,
                    i.find_country_code)(this.countryCallingCode, this.nationalNumber, this.metadata)
                }
            }, {
                key: "getNumber",
                value: function() {
                    if (this.countryCallingCode && this.nationalNumber) {
                        var t = new n.default(this.country || this.countryCallingCode,this.nationalNumber,this.metadata.metadata);
                        return this.carrierCode && (t.carrierCode = this.carrierCode),
                        t
                    }
                }
            }, {
                key: "getNationalNumber",
                value: function() {
                    return this.nationalNumber
                }
            }, {
                key: "getTemplate",
                value: function() {
                    if (this.template) {
                        for (var t = -1, d = 0; d < this.parsedInput.length; )
                            t = this.template.indexOf(h, t + 1),
                            d++;
                        return N(this.template, t + 1)
                    }
                }
            }]),
            t
        }();
        function C(t) {
            for (var d = [], e = 0; e < t.length; )
                "(" === t[e] ? d.push(e) : ")" === t[e] && d.pop(),
                e++;
            var r = 0
              , n = "";
            d.push(t.length);
            var a = d
              , $ = Array.isArray(a)
              , i = 0;
            for (a = $ ? a : a[Symbol.iterator](); ; ) {
                var o;
                if ($) {
                    if (i >= a.length)
                        break;
                    o = a[i++]
                } else {
                    if ((i = a.next()).done)
                        break;
                    o = i.value
                }
                var u = o;
                n += t.slice(r, u),
                r = u + 1
            }
            return n
        }
        function N(t, d) {
            return ")" === t[d] && d++,
            C(t.slice(0, d))
        }
        function P(t, d) {
            var e = 0
              , r = d.split("")
              , n = Array.isArray(r)
              , a = 0;
            for (r = n ? r : r[Symbol.iterator](); ; ) {
                var $;
                if (n) {
                    if (a >= r.length)
                        break;
                    $ = r[a++]
                } else {
                    if ((a = r.next()).done)
                        break;
                    $ = a.value
                }
                $ === t && e++
            }
            return e
        }
        function A(t, d) {
            if (d < 1)
                return "";
            for (var e = ""; d > 1; )
                1 & d && (e += t),
                d >>= 1,
                t += t;
            return e + t
        }
        d.default = g
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.isLatinLetter = function(t) {
            if (!a.test(t) && !i.test(t))
                return !1;
            return o.test(t)
        }
        ,
        d.isInvalidPunctuationSymbol = function(t) {
            return "%" === t || $.test(t)
        }
        ;
        var r = "   ᠎ - \u2028\u2029  　"
          , n = (d.pZ = "[" + r + "]",
        d.PZ = "[^" + r + "]",
        d._pN = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９",
        d.pNd = "[0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９]",
        d._pL = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ")
          , a = new RegExp("[" + n + "]")
          , $ = new RegExp("[$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦]")
          , i = new RegExp("[̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦]")
          , o = new RegExp("[\0--ÿĀ-ſḀ-ỿƀ-ɏ̀-ͯ]")
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.LEAD_CLASS = void 0,
        d.default = function(t, d, e, r) {
            if (!u.test(t) || l.test(t))
                return;
            if ("POSSIBLE" !== r) {
                if (d > 0 && !i.test(t)) {
                    var n = e[d - 1];
                    if ((0,
                    a.isInvalidPunctuationSymbol)(n) || (0,
                    a.isLatinLetter)(n))
                        return !1
                }
                var $ = d + t.length;
                if ($ < e.length) {
                    var o = e[$];
                    if ((0,
                    a.isInvalidPunctuationSymbol)(o) || (0,
                    a.isLatinLetter)(o))
                        return !1
                }
            }
            return !0
        }
        ;
        var r = e(1)
          , n = e(6)
          , a = e(20)
          , $ = d.LEAD_CLASS = "[(\\[（［" + r.PLUS_CHARS + "]"
          , i = new RegExp("^" + $)
          , o = (0,
        n.limit)(0, 3)
          , u = new RegExp("^(?:[(\\[（［])?(?:[^(\\[（［)\\]）］]+[)\\]）］])?[^(\\[（［)\\]）］]+(?:[(\\[（［][^(\\[（［)\\]）］]+[)\\]）］])" + o + "[^(\\[（［)\\]）］]*$")
          , l = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            if (r.test(t))
                return !1;
            if (n.test(t)) {
                var $ = e.slice(d + t.length);
                if (a.test($))
                    return !1
            }
            return !0
        }
        ;
        var r = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/
          , n = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/
          , a = /^:[0-5]\d/
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t) {
            return (0,
            r.trimAfterFirstMatch)(n, t)
        }
        ;
        var r = e(6)
          , n = /[\\/] *x/
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.PhoneNumberSearch = void 0,
        d.default = function(t, d, e) {
            void 0 === d && (d = {});
            var r = new h(t,d,e)
              , n = [];
            for (; r.hasNext(); )
                n.push(r.next());
            return n
        }
        ,
        d.searchPhoneNumbers = function(t, d, e) {
            void 0 === d && (d = {});
            var r = new h(t,d,e);
            return function(t, d, e) {
                d in t ? Object.defineProperty(t, d, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[d] = e;
                return t
            }({}, Symbol.iterator, function() {
                return {
                    next: function() {
                        return r.hasNext() ? {
                            done: !1,
                            value: r.next()
                        } : {
                            done: !0
                        }
                    }
                }
            })
        }
        ;
        var r = e(1)
          , n = e(9)
          , a = u(e(2))
          , $ = u(e(23))
          , i = u(e(22))
          , o = u(e(21));
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var l = function() {
            function t(t, d) {
                for (var e = 0; e < d.length; e++) {
                    var r = d[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(d, e, r) {
                return e && t(d.prototype, e),
                r && t(d, r),
                d
            }
        }();
        var s = "[" + r.PLUS_CHARS + "]{0,1}(?:[" + r.VALID_PUNCTUATION + "]*[" + r.VALID_DIGITS + "]){3,}[" + r.VALID_PUNCTUATION + r.VALID_DIGITS + "]*"
          , f = new RegExp("^[" + r.WHITESPACE + "]+")
          , c = new RegExp("[" + r.VALID_PUNCTUATION + "]+$");
        var h = d.PhoneNumberSearch = function() {
            function t(d) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments[2];
                !function(t, d) {
                    if (!(t instanceof d))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.state = "NOT_READY",
                this.text = d,
                this.options = e,
                this.metadata = r,
                this.regexp = new RegExp(s + "(?:" + n.EXTN_PATTERNS_FOR_PARSING + ")?","ig")
            }
            return l(t, [{
                key: "find",
                value: function() {
                    var t = this.regexp.exec(this.text);
                    if (t) {
                        var d = t[0]
                          , e = t.index;
                        d = d.replace(f, ""),
                        e += t[0].length - d.length,
                        d = d.replace(c, ""),
                        d = (0,
                        $.default)(d);
                        var r = this.parseCandidate(d, e);
                        return r || this.find()
                    }
                }
            }, {
                key: "parseCandidate",
                value: function(t, d) {
                    if ((0,
                    i.default)(t, d, this.text) && (0,
                    o.default)(t, d, this.text, this.options.extended ? "POSSIBLE" : "VALID")) {
                        var e = (0,
                        a.default)(t, this.options, this.metadata);
                        if (e.phone)
                            return e.startsAt = d,
                            e.endsAt = d + t.length,
                            e
                    }
                }
            }, {
                key: "hasNext",
                value: function() {
                    return "NOT_READY" === this.state && (this.last_match = this.find(),
                    this.last_match ? this.state = "READY" : this.state = "DONE"),
                    "READY" === this.state
                }
            }, {
                key: "next",
                value: function() {
                    if (!this.hasNext())
                        throw new Error("No next element");
                    var t = this.last_match;
                    return this.last_match = null,
                    this.state = "NOT_READY",
                    t
                }
            }]),
            t
        }()
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            return (0,
            a.default)(t, $({}, d, {
                v2: !0
            }), e)
        }
        ;
        var r, n = e(2), a = (r = n) && r.__esModule ? r : {
            default: r
        };
        var $ = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = arguments[3];
            return t.country === d && (0,
            a.default)(t, e, r)
        }
        ;
        var r, n = e(7), a = (r = n) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.getIDDPrefix = function(t, d) {
            var e = new a.default(d);
            if (e.country(t),
            o.test(e.IDDPrefix()))
                return e.IDDPrefix();
            return e.defaultIDDPrefix()
        }
        ,
        d.stripIDDPrefix = function(t, d, e) {
            if (!d)
                return;
            var r = new a.default(e);
            r.country(d);
            var n = new RegExp(r.IDDPrefix());
            if (0 !== t.search(n))
                return;
            var $ = (t = t.slice(t.match(n)[0].length)).match(i);
            if ($ && null != $[1] && $[1].length > 0 && "0" === $[1])
                return;
            return t
        }
        ;
        var r, n = e(0), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(1);
        var i = new RegExp("([" + $.VALID_DIGITS + "])")
          , o = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = e(0);
        Object.defineProperty(d, "default", {
            enumerable: !0,
            get: function() {
                return r.getCountryCallingCode
            }
        })
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            e || (e = d,
            d = void 0);
            return new a.default(d,e).input(t)
        }
        ;
        var r, n = e(19), a = (r = n) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            n.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata
              , a = new $.default(d,e,r);
            return function(t, d, e) {
                d in t ? Object.defineProperty(t, d, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[d] = e;
                return t
            }({}, Symbol.iterator, function() {
                return {
                    next: function() {
                        return a.hasNext() ? {
                            done: !1,
                            value: a.next()
                        } : {
                            done: !0
                        }
                    }
                }
            })
        }
        ;
        var r, n = e(3), a = e(11), $ = (r = a) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.containsMoreThanOneSlashInNationalNumber = u;
        var r = $(e(7))
          , n = $(e(17))
          , a = e(6);
        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function i(t, d, e) {
            for (var r = 0; r < d.length - 1; r++) {
                var a = d.charAt(r);
                if ("x" === a || "X" === a) {
                    var $ = d.charAt(r + 1);
                    if ("x" === $ || "X" === $) {
                        if (r++,
                        util.isNumberMatch(t, d.substring(r)) != MatchType.NSN_MATCH)
                            return !1
                    } else if ((0,
                    n.default)(d.substring(r)) !== t.ext)
                        return !1
                }
            }
            return !0
        }
        function o(t, d) {
            if ("FROM_DEFAULT_COUNTRY" != t.getCountryCodeSource())
                return !0;
            var e = util.getRegionCodeForCountryCode(t.getCountryCode())
              , r = util.getMetadataForRegion(e);
            if (null == r)
                return !0;
            var n = util.getNationalSignificantNumber(t)
              , a = util.chooseFormattingPatternForNumber(r.numberFormats(), n);
            if (a && a.getNationalPrefixFormattingRule().length > 0) {
                if (a.getNationalPrefixOptionalWhenFormatting())
                    return !0;
                if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly(a.getNationalPrefixFormattingRule()))
                    return !0;
                var $ = PhoneNumberUtil.normalizeDigitsOnly(t.getRawInput());
                return util.maybeStripNationalPrefixAndCarrierCode($, r, null)
            }
            return !0
        }
        function u(t, d) {
            var e = d.indexOf("/");
            if (e < 0)
                return !1;
            var r = d.indexOf("/", e + 1);
            return !(r < 0) && (!(t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || t.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(d.substring(0, e)) !== String(t.getCountryCode()) || d.slice(r + 1).indexOf("/") >= 0)
        }
        function l(t, d, e, r) {
            var n = normalizeDigits(d, !0)
              , a = s(e, t, null);
            if (r(e, t, n, a))
                return !0;
            var $ = MetadataManager.getAlternateFormatsForCountry(t.getCountryCode());
            if ($) {
                var i = $.numberFormats()
                  , o = Array.isArray(i)
                  , u = 0;
                for (i = o ? i : i[Symbol.iterator](); ; ) {
                    var l;
                    if (o) {
                        if (u >= i.length)
                            break;
                        l = i[u++]
                    } else {
                        if ((u = i.next()).done)
                            break;
                        l = u.value
                    }
                    if (r(e, t, n, a = s(e, t, l)))
                        return !0
                }
            }
            return !1
        }
        function s(t, d, e) {
            if (e) {
                var r = util.getNationalSignificantNumber(d);
                return util.formatNsnUsingPattern(r, e, "RFC3966", t).split("-")
            }
            var n = formatNumber(d, "RFC3966", t)
              , a = n.indexOf(";");
            a < 0 && (a = n.length);
            var $ = n.indexOf("-") + 1;
            return n.slice($, a).split("-")
        }
        function f(t, d, e, r) {
            var n = e.split(NON_DIGITS_PATTERN)
              , $ = d.hasExtension() ? n.length - 2 : n.length - 1;
            if (1 == n.length || n[$].contains(util.getNationalSignificantNumber(d)))
                return !0;
            for (var i = r.length - 1; i > 0 && $ >= 0; ) {
                if (n[$] !== r[i])
                    return !1;
                i--,
                $--
            }
            return $ >= 0 && (0,
            a.endsWith)(n[$], r[0])
        }
        function c(t, d, e, r) {
            var n = 0;
            if (d.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                var $ = String(d.getCountryCode());
                n = e.indexOf($) + $.length()
            }
            for (var i = 0; i < r.length; i++) {
                if ((n = e.indexOf(r[i], n)) < 0)
                    return !1;
                if (n += r[i].length(),
                0 == i && n < e.length()) {
                    var o = util.getRegionCodeForCountryCode(d.getCountryCode());
                    if (null != util.getNddPrefixForRegion(o, !0) && Character.isDigit(e.charAt(n))) {
                        var u = util.getNationalSignificantNumber(d);
                        return (0,
                        a.startsWith)(e.slice(n - r[i].length), u)
                    }
                }
            }
            return e.slice(n).contains(d.getExtension())
        }
        d.default = {
            POSSIBLE: function(t, d, e) {
                return !0
            },
            VALID: function(t, d, e) {
                return !(!(0,
                r.default)(t, void 0, e) || !i(t, d.toString(), e))
            },
            STRICT_GROUPING: function(t, d, e) {
                var n = d.toString();
                return !(!(0,
                r.default)(t, void 0, e) || !i(t, n, e) || u(t, n) || !o(t, e)) && l(t, d, e, c)
            },
            EXACT_GROUPING: function(t, d, e) {
                var n = d.toString();
                return !(!(0,
                r.default)(t, void 0, e) || !i(t, n, e) || u(t, n) || !o(t, e)) && l(t, d, e, f)
            }
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            var r = new a.default(t,d,e)
              , n = [];
            for (; r.hasNext(); )
                n.push(r.next());
            return n
        }
        ;
        var r, n = e(11), a = (r = n) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            $.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            a.default)(d, e, r)
        }
        ;
        var r, n = e(32), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(3)
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            if ("string" != typeof t)
                throw new TypeError("number must be a string");
            if ("string" != typeof d)
                throw new TypeError("country must be a string");
            var $ = void 0;
            $ = (0,
            r.default)(t) ? (0,
            n.default)(t, {
                defaultCountry: d
            }, e) : {};
            return (0,
            a.default)($, d, void 0, e)
        }
        ;
        var r = $(e(10))
          , n = $(e(2))
          , a = $(e(26));
        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            n.normalizeArguments)(arguments)
              , d = t.input
              , e = t.options
              , r = t.metadata;
            return (0,
            $.default)(d, e, r)
        }
        ;
        var r, n = e(12), a = e(15), $ = (r = a) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            if (d[t])
                return new a.default(t,d[t],e)
        }
        ;
        var r, n = e(8), a = (r = n) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function(t, d, e) {
            d && d.defaultCountry && !(0,
            a.isSupportedCountry)(d.defaultCountry, e) && (d = i({}, d, {
                defaultCountry: void 0
            }));
            try {
                return (0,
                r.default)(t, d, e)
            } catch (t) {
                if (!(t instanceof n.default))
                    throw t
            }
        }
        ;
        var r = $(e(25))
          , n = $(e(16))
          , a = e(0);
        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = Object.assign || function(t) {
            for (var d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            n.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            $.default)(d, e, r)
        }
        ;
        var r, n = e(3), a = e(37), $ = (r = a) && r.__esModule ? r : {
            default: r
        }
    }
    , function(t) {
        t.exports = {
            version: "1.7.9",
            country_calling_codes: {
                1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                7: ["RU", "KZ"],
                20: ["EG"],
                27: ["ZA"],
                30: ["GR"],
                31: ["NL"],
                32: ["BE"],
                33: ["FR"],
                34: ["ES"],
                36: ["HU"],
                39: ["IT", "VA"],
                40: ["RO"],
                41: ["CH"],
                43: ["AT"],
                44: ["GB", "GG", "IM", "JE"],
                45: ["DK"],
                46: ["SE"],
                47: ["NO", "SJ"],
                48: ["PL"],
                49: ["DE"],
                51: ["PE"],
                52: ["MX"],
                53: ["CU"],
                54: ["AR"],
                55: ["BR"],
                56: ["CL"],
                57: ["CO"],
                58: ["VE"],
                60: ["MY"],
                61: ["AU", "CC", "CX"],
                62: ["ID"],
                63: ["PH"],
                64: ["NZ"],
                65: ["SG"],
                66: ["TH"],
                81: ["JP"],
                82: ["KR"],
                84: ["VN"],
                86: ["CN"],
                90: ["TR"],
                91: ["IN"],
                92: ["PK"],
                93: ["AF"],
                94: ["LK"],
                95: ["MM"],
                98: ["IR"],
                211: ["SS"],
                212: ["MA", "EH"],
                213: ["DZ"],
                216: ["TN"],
                218: ["LY"],
                220: ["GM"],
                221: ["SN"],
                222: ["MR"],
                223: ["ML"],
                224: ["GN"],
                225: ["CI"],
                226: ["BF"],
                227: ["NE"],
                228: ["TG"],
                229: ["BJ"],
                230: ["MU"],
                231: ["LR"],
                232: ["SL"],
                233: ["GH"],
                234: ["NG"],
                235: ["TD"],
                236: ["CF"],
                237: ["CM"],
                238: ["CV"],
                239: ["ST"],
                240: ["GQ"],
                241: ["GA"],
                242: ["CG"],
                243: ["CD"],
                244: ["AO"],
                245: ["GW"],
                246: ["IO"],
                247: ["AC"],
                248: ["SC"],
                249: ["SD"],
                250: ["RW"],
                251: ["ET"],
                252: ["SO"],
                253: ["DJ"],
                254: ["KE"],
                255: ["TZ"],
                256: ["UG"],
                257: ["BI"],
                258: ["MZ"],
                260: ["ZM"],
                261: ["MG"],
                262: ["RE", "YT"],
                263: ["ZW"],
                264: ["NA"],
                265: ["MW"],
                266: ["LS"],
                267: ["BW"],
                268: ["SZ"],
                269: ["KM"],
                290: ["SH", "TA"],
                291: ["ER"],
                297: ["AW"],
                298: ["FO"],
                299: ["GL"],
                350: ["GI"],
                351: ["PT"],
                352: ["LU"],
                353: ["IE"],
                354: ["IS"],
                355: ["AL"],
                356: ["MT"],
                357: ["CY"],
                358: ["FI", "AX"],
                359: ["BG"],
                370: ["LT"],
                371: ["LV"],
                372: ["EE"],
                373: ["MD"],
                374: ["AM"],
                375: ["BY"],
                376: ["AD"],
                377: ["MC"],
                378: ["SM"],
                380: ["UA"],
                381: ["RS"],
                382: ["ME"],
                383: ["XK"],
                385: ["HR"],
                386: ["SI"],
                387: ["BA"],
                389: ["MK"],
                420: ["CZ"],
                421: ["SK"],
                423: ["LI"],
                500: ["FK"],
                501: ["BZ"],
                502: ["GT"],
                503: ["SV"],
                504: ["HN"],
                505: ["NI"],
                506: ["CR"],
                507: ["PA"],
                508: ["PM"],
                509: ["HT"],
                590: ["GP", "BL", "MF"],
                591: ["BO"],
                592: ["GY"],
                593: ["EC"],
                594: ["GF"],
                595: ["PY"],
                596: ["MQ"],
                597: ["SR"],
                598: ["UY"],
                599: ["CW", "BQ"],
                670: ["TL"],
                672: ["NF"],
                673: ["BN"],
                674: ["NR"],
                675: ["PG"],
                676: ["TO"],
                677: ["SB"],
                678: ["VU"],
                679: ["FJ"],
                680: ["PW"],
                681: ["WF"],
                682: ["CK"],
                683: ["NU"],
                685: ["WS"],
                686: ["KI"],
                687: ["NC"],
                688: ["TV"],
                689: ["PF"],
                690: ["TK"],
                691: ["FM"],
                692: ["MH"],
                800: ["001"],
                808: ["001"],
                850: ["KP"],
                852: ["HK"],
                853: ["MO"],
                855: ["KH"],
                856: ["LA"],
                870: ["001"],
                878: ["001"],
                880: ["BD"],
                881: ["001"],
                882: ["001"],
                883: ["001"],
                886: ["TW"],
                888: ["001"],
                960: ["MV"],
                961: ["LB"],
                962: ["JO"],
                963: ["SY"],
                964: ["IQ"],
                965: ["KW"],
                966: ["SA"],
                967: ["YE"],
                968: ["OM"],
                970: ["PS"],
                971: ["AE"],
                972: ["IL"],
                973: ["BH"],
                974: ["QA"],
                975: ["BT"],
                976: ["MN"],
                977: ["NP"],
                979: ["001"],
                992: ["TJ"],
                993: ["TM"],
                994: ["AZ"],
                995: ["GE"],
                996: ["KG"],
                998: ["UZ"]
            },
            countries: {
                AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
                AD: ["376", "00", "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
                AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
                AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
                AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268"],
                AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264"],
                AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
                AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-9]"], "0$1"]], "0"],
                AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
                AR: ["54", "00", "11\\d{8}|(?:[2368]|9\\d)\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
                AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684"],
                AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
                AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, 0, 0, 0, 0, [["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]], ["1471\\d{5}|(?:145|550)\\d{6}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
                AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
                AZ: ["994", "00", "(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]], "0"],
                BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
                BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246"],
                BD: ["880", "00", "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
                BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
                BF: ["226", "00", "[25-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]]],
                BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
                BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]]],
                BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
                BJ: ["229", "00", "[2689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]]],
                BL: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441"],
                BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
                BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d{3}|80017)\\d{4}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
                BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
                BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[189][1-9]|2[12478])[2-57]|[3-7]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["1[1-9]|[2-9]"], "($1)"]], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
                BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242"],
                BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
                BW: ["267", "00", "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", [7, 8], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]]],
                BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
                BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
                CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]]],
                CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["1471\\d{5}|(?:145|550)\\d{6}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
                CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
                CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
                CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
                CI: ["225", "00", "[02-8]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]]],
                CK: ["682", "00", "[2-8]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]]],
                CL: ["56", "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "1230\\d{7}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
                CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]]],
                CN: ["86", "00|1(?:[12]\\d|79|9[0-7])\\d\\d00", "1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["807", "8078", "8078[19]", "8078(?:10|95)", "8078(?:100|95)"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "0|(1(?:[12]\\d|79|9[0-7])\\d\\d)", 0, 0, 0, 0, "00"],
                CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"],
                CR: ["506", "00", "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
                CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}", [6, 7, 8], [["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0"],
                CV: ["238", "0", "[2-59]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]]],
                CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
                CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["1471\\d{5}|(?:145|550)\\d{6}", [9]], ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]], "0011"],
                CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
                CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
                DE: ["49", "00", "[2579]\\d{5,14}|49[67]0\\d{1,4}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|7[89]|9\\d)\\d{1,3}|49(?:[12]\\d|3[1-689]|7[1-7])\\d{1,8}|49(?:[05]\\d|[46][1-8])\\d{1,9}|(?:1|[368]\\d|4[0-8])\\d{3,13}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{4})(\\d{3,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{5})(\\d{3,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
                DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
                DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
                DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767"],
                DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8[024]9"],
                DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
                EC: ["593", "00", "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
                EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]]],
                EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]], "0"],
                EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
                ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
                ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
                ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]], "0"],
                FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
                FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                FK: ["500", "00", "[2-7]\\d{4}", [5]],
                FM: ["691", "00", "[39]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]]],
                FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
                FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
                GA: ["241", "00", "(?:0\\d|[2-7])\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]]],
                GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
                GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473"],
                GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
                GF: ["594", "00", "[56]94\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0"],
                GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]], ["56\\d{8}", [10]]]],
                GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
                GI: ["350", "00", "(?:[25]\\d\\d|629)\\d{5}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
                GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]]],
                GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
                GN: ["224", "00", "(?:30|6\\d\\d|722)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
                GP: ["590", "00", "(?:590|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
                GR: ["30", "00", "(?:[268]\\d|[79]0)\\d{8}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]]],
                GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
                GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671"],
                GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
                GY: ["592", "001", "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]]],
                HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                HN: ["504", "00", "[237-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
                HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
                HT: ["509", "00", "[2-489]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]]],
                HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]], "06"],
                ID: ["62", "0(?:0[17-9]|10(?:00|1[67]))", "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
                IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]], "0"],
                IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
                IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([5-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24"],
                IN: ["91", "00", "(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
                IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
                IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
                IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
                IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                IT: ["39", "00", "0\\d{6,10}|55\\d{8}|[08]\\d{5}|(?:3[0-8]|8)\\d{7,9}|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10, 11]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
                JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"], ["56\\d{8}"]]],
                JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
                JO: ["962", "00", "900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
                JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82[0367]|993", "2(?:[34]7|[56]9|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]", "2(?:[34]7|59(?:[02-8]|1[0-689]|9[0-8])|69|74|9(?:1[02-689]|[4-79]))|82[0367]|993[0-25-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2(?:2[12]|3[0-269]|4[59]|5[0-468]|62|7[1-35]|8[16]|9[0238])|4(?:2[1-57]|3[0-57]|[45]|6[28]|7[259]|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|9(?:4[15]|9[12489])", "2(?:2[12]|3[0-269]|4[59]|5(?:[04][01]|[1-3]|[68]1)|62|7[1-35]|8[16]|9(?:[028]|3[015-9]))|4(?:2(?:[13-57]|21)|3[0-57]|[45]|6[28]|7(?:2|[59][019])|8[1-9]|9[29])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|9(?:4[15]|9(?:[1289]|4[0178]))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|60|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93)", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:3[014-9]|7)|5(?:5[0-69]|[68]0|7[015-9]|9)|78[0189]|8(?:3[0134]|9[0-5])|917)|4(?:2(?:20|6|8[014-6]|9[178])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3[29]|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93[34])|(?:264|837)[016-9]|(?:59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[0169]|2[1-9]|4[1-3]))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:[23][1-9]|5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:(?:2|91)7|5(?:5[0-69]|[68]0|7[015-9]|9)|64[016-9]|78[0189]|8(?:3[0134]|9[0-5]))|4(?:2(?:20|6|8[014-6])|64|7[347])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|60|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6[01]|9[0145])|7[0-468]|8[68])|9(?:5[138]|6[1-3]|7[156]|8[189]|93(?:31|4[357]))|(?:42|866)9[178]|(?:223|8699)[014-9]|(?:829(?:2|66)|9[23])[1-9]|(?:59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2[09]|7(?:0[019]|1))"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]], "0"],
                KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
                KG: ["996", "00", "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
                KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
                KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
                KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
                KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869"],
                KP: ["850", "00|99", "85\\d{6}|(?:19\\d|2)\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
                KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
                KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]]],
                KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345"],
                KZ: ["7", "810", "33622\\d{5}|(?:7\\d|80)\\d{8}", [10], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
                LA: ["856", "00", "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]], "0"],
                LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]], "0"],
                LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "758$1", 0, "758"],
                LI: ["423", "00", "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "0|(10(?:01|20|66))"],
                LK: ["94", "00", "(?:[1-7]\\d|[89]1)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
                LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]], "0"],
                LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
                LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"],
                LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
                LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
                LY: ["218", "00", "(?:[2569]\\d|71)\\d{7}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]], "0"],
                MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"], ["80\\d{7}"], ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]]],
                MC: ["377", "00", "870\\d{5}|(?:[349]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
                MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
                ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
                MF: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]]],
                MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "0|([24-9]\\d{6})$", "20$1"],
                MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
                MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
                ML: ["223", "00", "(?:[246-9]\\d|50)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
                MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
                MN: ["976", "001", "[12]\\d{7,9}|[57-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
                MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
                MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670"],
                MQ: ["596", "00", "(?:596|69\\d)\\d{6}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]], "0"],
                MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
                MS: ["1", "011", "66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(4\\d{6})$", "664$1", 0, "664"],
                MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
                MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
                MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[14-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]], "0"],
                MX: ["52", "0[09]", "(?:1\\d|[2-9])\\d{9}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], "044 $1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], "044 $1", 0, "$1 $2 $3 $4"]], "01", 0, "0[12]|04[45]([2-9]\\d{9})$", "1$1", 0, 0, 0, "00"],
                MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
                MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
                NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
                NC: ["687", "00", "[2-57-9]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]]],
                NE: ["227", "00", "[0289]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]]],
                NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
                NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
                NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
                NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"],
                NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
                NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
                NR: ["674", "00", "(?:444|55\\d|888)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]]],
                NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
                NZ: ["64", "0(?:0|161)", "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", [8, 9, 10], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
                OM: ["968", "00", "(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]]],
                PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]]],
                PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, 0, " Anexo "],
                PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]]],
                PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                PH: ["63", "00", "(?:1800|8)\\d{7,9}|2\\d{5}(?:\\d{2})?|(?:[3-7]|9\\d)\\d{8}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
                PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
                PL: ["48", "00", "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", [6, 7, 8, 9], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]]],
                PM: ["508", "00", "[45]\\d{5}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]], "0"],
                PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
                PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
                PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]]],
                PW: ["680", "01[12]", "(?:[25-8]\\d\\d|345|488|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
                PY: ["595", "00", "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]], "0"],
                QA: ["974", "00", "800\\d{4}|(?:2|[3-7]\\d)\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
                RE: ["262", "00", "(?:26|[68]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]], "0", 0, 0, 0, 0, "262|69|8"],
                RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
                RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
                RU: ["7", "810", "[347-9]\\d{9}", [10], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
                RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"],
                SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
                SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
                SC: ["248", "010|0[0-2]", "8000\\d{3}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
                SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
                SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
                SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
                SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
                SJ: ["47", "00", "0\\d{4}|(?:[4589]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
                SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
                SL: ["232", "00", "(?:[2-578]\\d|66|99)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[2-9]"], "(0$1)"]], "0"],
                SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
                SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
                SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]], "0"],
                SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
                SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
                ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
                SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
                SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721"],
                SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
                SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
                TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649"],
                TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
                TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
                TH: ["66", "00[1-9]", "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
                TJ: ["992", "810", "(?:[3-59]\\d|77|88)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], 0, 1], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], 0, 1], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], 0, 1], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[457-9]"], 0, 1]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
                TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
                TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
                TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
                TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
                TO: ["676", "00", "[78]\\d{6}|[2-478]\\d{4}|(?:080|[56])0\\d{3}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]]]],
                TR: ["90", "00", "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", [7, 10], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1]], "0"],
                TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868"],
                TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7]],
                TW: ["886", "0(?:0[25-79]|19)", "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[27-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
                TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
                UA: ["380", "00", "[3-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|[89]0|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|[89]0|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
                UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
                US: ["1", "011", "[2-9]\\d{9}", [10], [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["710[2-9]\\d{6}"]]],
                UY: ["598", "0(?:0|1[3-9]\\d)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
                UZ: ["998", "810", "[679]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
                VA: ["39", "00", "0\\d{6,10}|55\\d{8}|[08]\\d{5}|(?:3[0-8]|8)\\d{7,9}|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"],
                VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784"],
                VE: ["58", "00", "[89]00\\d{7}|(?:[24]\\d|50)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1"]], "0"],
                VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284"],
                VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340"],
                VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
                VU: ["678", "00", "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]]],
                WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]]],
                WS: ["685", "0", "[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-6]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["8"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
                XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], "0"],
                YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
                YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63"],
                ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]], "0"],
                ZM: ["260", "00", "800\\d{6}|(?:21|76|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
                ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"],
                "001": ["979", 0, "\\d{9}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]]
            }
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            $.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            a.default)(d, e, r)
        }
        ,
        d.searchPhoneNumbers = function() {
            var t = (0,
            $.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            n.searchPhoneNumbers)(d, e, r)
        }
        ;
        var r, n = e(24), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(3)
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            $.normalizeArguments)(arguments)
              , d = t.input
              , e = t.options
              , r = t.metadata;
            return (0,
            a.default)(d, e, r)
        }
        ;
        var r, n = e(7), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(12)
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        d.default = function() {
            var t = function(t) {
                var d = Array.prototype.slice.call(t)
                  , e = o(d, 5)
                  , r = e[0]
                  , n = e[1]
                  , $ = e[2]
                  , i = e[3]
                  , l = e[4]
                  , s = void 0
                  , f = void 0
                  , c = void 0
                  , h = void 0;
                if ("string" == typeof r)
                    if ("string" == typeof $)
                        f = $,
                        l ? (c = i,
                        h = l) : h = i,
                        s = (0,
                        a.default)(r, {
                            defaultCountry: n,
                            extended: !0
                        }, h);
                    else {
                        if ("string" != typeof n)
                            throw new Error("`format` argument not passed to `formatNumber(number, format)`");
                        f = n,
                        i ? (c = $,
                        h = i) : h = $,
                        s = (0,
                        a.default)(r, {
                            extended: !0
                        }, h)
                    }
                else {
                    if (!u(r))
                        throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");
                    s = r,
                    f = n,
                    i ? (c = $,
                    h = i) : h = $
                }
                "International" === f ? f = "INTERNATIONAL" : "National" === f && (f = "NATIONAL");
                return {
                    input: s,
                    format: f,
                    options: c,
                    metadata: h
                }
            }(arguments)
              , d = t.input
              , e = t.format
              , r = t.options
              , $ = t.metadata;
            return (0,
            n.default)(d, e, r, $)
        }
        ;
        var n = $(e(13))
          , a = $(e(2));
        function $(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : r(t)
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t)
        }
          , o = function() {
            return function(t, d) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return function(t, d) {
                        var e = []
                          , r = !0
                          , n = !1
                          , a = void 0;
                        try {
                            for (var $, i = t[Symbol.iterator](); !(r = ($ = i.next()).done) && (e.push($.value),
                            !d || e.length !== d); r = !0)
                                ;
                        } catch (t) {
                            n = !0,
                            a = t
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (n)
                                    throw a
                            }
                        }
                        return e
                    }(t, d);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        var u = function(t) {
            return "object" === (void 0 === t ? "undefined" : i(t))
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.default = function() {
            var t = (0,
            $.normalizeArguments)(arguments)
              , d = t.text
              , e = t.options
              , r = t.metadata;
            return (0,
            a.default)(d, e, r)
        }
        ;
        var r, n = e(2), a = (r = n) && r.__esModule ? r : {
            default: r
        }, $ = e(3)
    }
    , function(t, d) {
        t.exports = function(t, d) {
            for (var e = t.split("."), r = d.split("."), n = 0; n < 3; n++) {
                var a = Number(e[n])
                  , $ = Number(r[n]);
                if (a > $)
                    return 1;
                if ($ > a)
                    return -1;
                if (!isNaN(a) && isNaN($))
                    return 1;
                if (isNaN(a) && !isNaN($))
                    return -1
            }
            return 0
        }
    }
    , function(t, d, e) {
        "use strict";
        Object.defineProperty(d, "__esModule", {
            value: !0
        }),
        d.DIGIT_PLACEHOLDER = d.AsYouTypeCustom = d.getCountryCallingCodeCustom = d.getNumberTypeCustom = d.PhoneNumberSearchCustom = d.searchPhoneNumbersCustom = d.findPhoneNumbersCustom = d.isValidNumberCustom = d.formatCustom = d.parseCustom = d.ParseError = d.parseDigits = d.DIGITS = d.parsePhoneNumberCharacter = d.parseIncompletePhoneNumber = d.Metadata = void 0;
        var r = e(0);
        Object.defineProperty(d, "Metadata", {
            enumerable: !0,
            get: function() {
                return R(r).default
            }
        });
        var n = e(18);
        Object.defineProperty(d, "parseIncompletePhoneNumber", {
            enumerable: !0,
            get: function() {
                return R(n).default
            }
        }),
        Object.defineProperty(d, "parsePhoneNumberCharacter", {
            enumerable: !0,
            get: function() {
                return n.parsePhoneNumberCharacter
            }
        });
        var a = e(17);
        Object.defineProperty(d, "DIGITS", {
            enumerable: !0,
            get: function() {
                return a.DIGITS
            }
        }),
        Object.defineProperty(d, "parseDigits", {
            enumerable: !0,
            get: function() {
                return R(a).default
            }
        });
        var $ = e(16);
        Object.defineProperty(d, "ParseError", {
            enumerable: !0,
            get: function() {
                return R($).default
            }
        }),
        d.parsePhoneNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            p.default.apply(this, t)
        }
        ,
        d.parsePhoneNumberFromString = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            m.default.apply(this, t)
        }
        ,
        d.parseNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            v.default.apply(this, t)
        }
        ,
        d.parse = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            v.default.apply(this, t)
        }
        ,
        d.formatNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            _.default.apply(this, t)
        }
        ,
        d.format = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            _.default.apply(this, t)
        }
        ,
        d.getNumberType = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            b.default.apply(this, t)
        }
        ,
        d.getExampleNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            g.default.apply(this, t)
        }
        ,
        d.isPossibleNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            C.default.apply(this, t)
        }
        ,
        d.isValidNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            N.default.apply(this, t)
        }
        ,
        d.isValidNumberForRegion = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            P.default.apply(this, t)
        }
        ,
        d.findPhoneNumbers = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            A.default.apply(this, t)
        }
        ,
        d.searchPhoneNumbers = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            l.searchPhoneNumbers.apply(this, t)
        }
        ,
        d.PhoneNumberSearch = L,
        d.findNumbers = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            I.default.apply(this, t)
        }
        ,
        d.searchNumbers = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            O.default.apply(this, t)
        }
        ,
        d.PhoneNumberMatcher = w,
        d.AsYouType = F,
        d.isSupportedCountry = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            r.isSupportedCountry.apply(this, t)
        }
        ,
        d.getExtPrefix = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            r.getExtPrefix.apply(this, t)
        }
        ,
        d.parseRFC3966 = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            S.parseRFC3966.apply(this, t)
        }
        ,
        d.formatRFC3966 = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            S.formatRFC3966.apply(this, t)
        }
        ,
        d.formatIncompletePhoneNumber = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.push(y.default),
            M.default.apply(this, t)
        }
        ;
        var i = e(43);
        Object.defineProperty(d, "parseCustom", {
            enumerable: !0,
            get: function() {
                return R(i).default
            }
        });
        var o = e(42);
        Object.defineProperty(d, "formatCustom", {
            enumerable: !0,
            get: function() {
                return R(o).default
            }
        });
        var u = e(41);
        Object.defineProperty(d, "isValidNumberCustom", {
            enumerable: !0,
            get: function() {
                return R(u).default
            }
        });
        var l = e(40);
        Object.defineProperty(d, "findPhoneNumbersCustom", {
            enumerable: !0,
            get: function() {
                return R(l).default
            }
        }),
        Object.defineProperty(d, "searchPhoneNumbersCustom", {
            enumerable: !0,
            get: function() {
                return l.searchPhoneNumbers
            }
        });
        var s = e(24);
        Object.defineProperty(d, "PhoneNumberSearchCustom", {
            enumerable: !0,
            get: function() {
                return s.PhoneNumberSearch
            }
        });
        var f = e(12);
        Object.defineProperty(d, "getNumberTypeCustom", {
            enumerable: !0,
            get: function() {
                return R(f).default
            }
        });
        var c = e(28);
        Object.defineProperty(d, "getCountryCallingCodeCustom", {
            enumerable: !0,
            get: function() {
                return R(c).default
            }
        });
        var h = e(19);
        Object.defineProperty(d, "AsYouTypeCustom", {
            enumerable: !0,
            get: function() {
                return R(h).default
            }
        }),
        Object.defineProperty(d, "DIGIT_PLACEHOLDER", {
            enumerable: !0,
            get: function() {
                return h.DIGIT_PLACEHOLDER
            }
        }),
        d.getCountryCallingCode = D,
        d.getPhoneCode = function(t) {
            return D(t)
        }
        ,
        d.getPhoneCodeCustom = function(t, d) {
            return (0,
            T.default)(t, d)
        }
        ;
        var y = R(e(39))
          , p = R(e(3))
          , m = R(e(38))
          , v = R(i)
          , _ = R(o)
          , b = R(f)
          , g = R(e(36))
          , C = R(e(35))
          , N = R(u)
          , P = R(e(34))
          , A = R(l)
          , I = R(e(33))
          , O = R(e(30))
          , x = R(e(11))
          , E = R(h)
          , T = R(c)
          , S = e(14)
          , M = R(e(29));
        function R(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function L(t, d) {
            s.PhoneNumberSearch.call(this, t, d, y.default)
        }
        function w(t, d) {
            x.default.call(this, t, d, y.default)
        }
        function F(t) {
            E.default.call(this, t, y.default)
        }
        function D(t) {
            return (0,
            T.default)(t, y.default)
        }
        L.prototype = Object.create(s.PhoneNumberSearch.prototype, {}),
        L.prototype.constructor = L,
        w.prototype = Object.create(x.default.prototype, {}),
        w.prototype.constructor = w,
        F.prototype = Object.create(E.default.prototype, {}),
        F.prototype.constructor = F
    }
    ])
});
//# sourceMappingURL=libphonenumber-js.min.js.map
// end libphonenumber-js.min.js

var intl_tel_cloned = false;
$(document).mouseup(function(e) {
    if (intl_tel_cloned === false) {
        $('#sidebar_callback .mobile_no_field, .gt_background .mobile_no_field').html('<input class="ssintlTelInput popup_desk_field sidebar_form_input" pattern="^[0-9].*" placeholder="Phone Number *" type="tel" value="" required="1" maxlength="12" name="ssleadpost[mobile]" aria-label="mobile">')
        init_intl_tel_input('#sidebar_callback');
        init_intl_tel_input('.gt_background');
        intl_tel_cloned = true;
    }
});

var myTimer, timerId;
let mqsoft_loaded = false;
const category_name_val = $('.ga_page_name').val();
const industryname = $('.industryname').val();
const ga_city_name = $('.ga_city_name').val();
var ga_page_type = $('.ga_page_type').val();
$(document).ready(function() {
    if ($('.ga_page_type').val() == 'StaticCategory' || $('.ga_page_type').val() == 'Report') {
        $('body').addClass('white_bg');
        $('.sidebar_main_div').hide();
        $('.add_div_after_pagination').hide();
    }
    $('#ssloader').fadeOut();
    var page_type_ser_soft = '';
    if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceCountry' || $('.ga_page_type').val() == 'Service_Profile') {
        page_type_ser_soft = 'servicepage';
    } else if ($('.ga_page_type').val() == 'Category') {
        page_type_ser_soft = 'Category';
    }
    popup_body_data = true;

    if (popup_body_data === false) {
        $.ajax({
            type: "post",
            url: '/singleview/callhiddencontent',
            data: {
                page_type: page_type_ser_soft,
                ga_page_type: ga_page_type,
                category: category_name_val,
                ga_city_name: ga_city_name,
                industryname: industryname
            },
            success: function(response) {
                $('body').append(response)
                popup_body_data = true;
                init_intl_tel_input('#software_popup_homepage');
                init_intl_tel_input('#resources_lead_popup');
                init_intl_tel_input('#service_popup_homepage');
                init_intl_tel_input('#landing_req_callback_f12');
                init_intl_tel_input('#claim_profile_landing_form');
                init_intl_tel_input('#new_cat_landing');
                init_intl_tel_input('#form_main_div_first_fold');
                init_intl_tel_input('#send_requirement_popup');
            },
            error: function() {
            }
        });
    }
    sidebarform_ajax = false;
    if (sidebarform_ajax === false) {
        $.ajax({
            type: "POST",
            url: '/singleview/callsidebarform',
            data: {
                page_type: page_type_ser_soft,
                current_cat_id: current_categoryid
            },
            success: function(response) {
                $('.append_sticky_form .ajax_loader_div').remove();
                $('.append_sticky_form').append(response);
                sidebarform_ajax = true;
                $('#sidebar_callback .ssleadpost_source').val('FreeConsultation');
                $('#sidebar_callback .ssleadpost_categoryid').val($('.categoryid').val());
                $('#sidebar_callback .form_1_submit').text('Get Offer - It\'s Free');
            },
            error: function() {
            }
        });
    }
});

/*Trending customer on load ajax js start */
$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: '/desktopview/trendingcustomersticky',
        data: {
            ga_page_type: ga_page_type,
            current_cat_id: current_categoryid
        },
        success: function(response) {
            if ($.trim(response) != '') {
                $('.trending_customer_sticky .ajax_loader_div').remove();
                $('.trending_customer_sticky').append(response);
                $('.leader_matrix_card').remove();
            } else {
                $('.trending_customer_sticky').remove();
                if ($('.leader_matrix_card').length === 0) {
                    $(".big_banner").addClass("make_big_banner_sticky");
                }
            }
        },
        error: function() {
        }
    });
});
/*Trending customer on load ajax js end */

init_intl_tel_input('#freeconsulting_contactus');
init_intl_tel_input('#partner_form');
init_intl_tel_input('#content_writting_form');

// tab js
var top_software_flag = true;
var leadermatrix_flag = true;

if (($('.ga_page_type').val() == 'Category') || ($('.ga_page_type').val() == 'SerCategory')) {
    top_software_flag = false;
    leadermatrix_flag = false;
}
jQuery(document).ready(function($) {
    $(document).on("click", ".tab_soft_list a", function(e) {
        var selected_tab = $(this).attr("data-tab");
        if ($(this).attr("tab-type") != 'link') {
            e.preventDefault();
            $(".tab_soft_list a").removeClass('active');
            $(this).addClass("active");
            // body background color change for new design all software tab
            if (selected_tab == 'list_tab_content' && $('.new_design').val() == 'cat_new_design') {
                $('body').removeClass('body_color');
            } else {
                $('body').addClass('body_color');
            }
            // body background color change for new design all software tab end
            // buyer's guide tab changes
            if (selected_tab == 'bguide_tab_content') {
                SoftwareBguidetabClick();
            }
            // buyer's guide tab changes end
            // load leader matrix data
            if (selected_tab == 'leader_matrix_tab_content') {
                LeadermatrixLoadData();
            }
            // load leader matrix data end
            $("." + selected_tab).stop().addClass("active");
            $("." + selected_tab).siblings().removeClass("active");
            return false;
        }
    });
});
function LeadermatrixLoadData() {
    if (leadermatrix_flag == false) {
        if ($('.ga_page_type').val() == 'SerCategory') {
            var url_main = '/servicemaincategory/getmqdataalljson'
        } else {
            var url_main = '/softwaremaincategory/getmqdataalljson'
        }
        $.ajax({
            type: "POST",

            url: baseUrl + url_main,
            data: {
                data_json: JSON.stringify($('.send_on_viewmore').val()),
                ga_page_type: ga_page_type,
                cat_id: current_categoryid,
                category: category_name_val
            },
            beforeSend: function() {},
            success: function(response) {
                leadermatrix_flag = true;
                $('.leader_matrix_tab_content').html(response);
            },
            error: function() {
            }
        });
    }
}
function SoftwareBguidetabClick() {
    if ($('.ga_page_type').val() == 'Category') {
        $('.activebguidetab').removeClass('activebguidetab');
        $('.b_guide_sidebar_ol li:first-child').addClass('activebguidetab');
        if (top_software_flag == false) {
            top_software_flag = true;
            $.ajax({
                type: "POST",
                url: baseUrl + '/softwaremaincategory/topsoftwarerecommend',
                data: {
                    data_json: JSON.stringify($('.send_on_viewmore').val()),
                    ga_page_type: ga_page_type,
                    buyer_guide_soft_list_top: JSON.stringify(buyer_guide_soft_list_top),
                    category: category_name_val,
                    view_file: '/layouts_new/toprecomend_software'
                },
                beforeSend: function() {
                    $('.top_comparison_main').css('min-height', '130px');
                    $('.top_comparison_main .ajax_loader_div img').show();
                },
                success: function(response) {
                    top_software_flag = true;
                    $('.top_software_recomend .ajax_loader_div').remove();
                    $('.top_software_recomend').append(response);
                },
                error: function() {
                    top_software_flag = true;
                }
            });
        }
    }
}
//Hide GDPR element and set cookie
$(document).ready(function() {
    //Show GDPR element if cookie is not set
    if (!Cookies.get('gdpr_cookie_status')) {
        $('.cookies_policy_div_position').fadeIn();
    }
});
function gdprClickCookie() {
    $('.cookies_policy_div_position').fadeOut();
    Cookies.set('gdpr_cookie_status', true, {
        expires: 365
    });
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('.sticky_alternatives_header').addClass('alt_header_sticky');
        $('.sticky_alternatives_header .popup_small_new .popup_small_close').click();
    } else {
        $('.sticky_alternatives_header').removeClass('alt_header_sticky');
    }
});

var loaded_three_soft = true;
if ($('.ga_page_type').val() == 'Category' || $('.ga_page_type').val() == 'Country-Page') {
    loaded_three_soft = false;
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
        if (!loaded_three_soft) {
            $.ajax({
                type: "POST",
                url: baseUrl + '/softwaremaincategory/topsoftwarerecommend',
                dataType: "text",
                data: {
                    data_json: JSON.stringify($('.send_on_viewmore').val()),
                    ga_page_type: ga_page_type,
                    category: category_name_val,
                    view_file: '/layouts_new/threesofttop'
                },
                success: function(response) {
                    $('body').append(response);
                    show_three_soft();
                    $('.three_soft_on_top .popup_new_free').removeClass('popup_new_free').addClass('popup_new_free_three');
                    $('.three_soft_on_top .popup_new_get').removeClass('popup_new_get').addClass('popup_new_get_three');
                    loaded_three_soft = true;
                },
                error: function() {
                    loaded_three_soft = false;
                }
            });
            loaded_three_soft = true;
        } else {
            show_three_soft();
        }
    } else {
        $('.three_soft_on_top').fadeOut();
    }
    function show_three_soft() {
        $('.three_soft_on_top').fadeIn();
        $('#search').val('');
        $('.suggestions_global_search').hide();
        $('#software_cat_header_dd, #desk_ajax_software_cat_header_dd').removeClass('drop_list_active drop_active');
    }
});
// scroll top js
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});
$(document).on("click", ".scrolltop", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 700);
    return false;
});
// end scroll top js

$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', '#search_new_on_sccroll', function(e) {
    if ($(this).val() == '' || $(this).val().length == '1') {
        $('.searc_container_append_here, .new_search_filter_ul').hide()
    }
    $('.hidden_span_for_bordder_line').text($(this).val());
})

$('#search_new_on_sccroll').devbridgeAutocomplete({
    serviceUrl: "/site/searchhomeservicesoftware",
    minChars: 2,
    type: "POST",
    triggerSelectOnValidInput: false,
    onSearchStart: function() {
        $('.search_filter_active').removeClass('search_filter_active');
        $('.tab_search_main_all').addClass('search_filter_active')
        $('.searc_container_append_here').show()
        $('.search_loader_new_search').show();
        $('.autocomplete-suggestion').hide();
    },
    onSearchComplete: function() {
        $('.search_loader_new_search').hide();
        $('.autocomplete-suggestion').show();
    },
    beforeRender: function(container, suggestions) {
        var i_val_soft = ''
          , i_val_ser = ''
          , i_val_cat = '';
        $('.searc_container_append_here').append(container);
        container.addClass('new_suggestions_global_search').find('.autocomplete-suggestion').each(function(i, suggestion) {
            $('#suggetion_service_service').removeAttr("disabled");
            $('.tab_search_main_all, .new_search_filter_ul').show()
            if (suggestions[i].data.category == 'Software') {
                $('.tab_search_main_software').show()
                new_software($(this), i, suggestions);
                i_val_soft = suggestions[i].data.category;
            }
            if (suggestions[i].data.category == 'Services') {
                $('.tab_search_main_service').show()
                new_servcie($(this), i, suggestions);
                i_val_ser = suggestions[i].data.category;
            }
            if (suggestions[i].data.category == 'Categories') {
                $('.tab_search_main_category').show()
                new_category($(this), i, suggestions);
                i_val_cat = suggestions[i].data.category;
            }
        });
        if (i_val_ser == '' || !i_val_ser) {
            $('.tab_search_main_service').hide();
        }
        if (i_val_cat == '' || !i_val_cat) {
            $('.tab_search_main_category').hide();
        }
        if (i_val_soft == '' || !i_val_soft) {
            $('.tab_search_main_software').hide();
        }
        scroll_fun_refresh();
    },
    showNoSuggestionNotice: 'true',
    groupBy: 'category',
    maxHeight: false,
});
var category_i_last, software_i_last, service_i_last;

function new_category(container, i, suggestions) {
    if (i == 0) {
        var category_class_firsrt = 'category_main_first';
        category_i_last = i;
    } else {
        category_class_firsrt = '';
        category_i_last = i;
    }
    var highlighted_name = highlight(suggestions[i].value, i);
    container.html('<div class="autocomplete-suggestions_software"> <div class="autocomplete-suggestions_cat_name ' + category_class_firsrt + '"><span class="search_category_folder_icon"></span> <a target="_blank" rel="noopener" id="text_name_val' + i + '" href="' + suggestions[i].data.resullink + '">' + highlighted_name + '</a> </div></div>');
}
function new_software(container, i, suggestions) {
    if (i == (category_i_last + 1) || i == 0) {
        var software_class_first = 'software_main_first';
        software_i_last = i;
    } else {
        software_class_first = '';
        software_i_last = i;
    }
    var highlighted_name = highlight(suggestions[i].value, i);
    container.html('<div class="autocomplete-suggestions_software"> <div class="autocomplete-suggestions_soft_name ' + software_class_first + '"><a id="text_name_val' + i + '" target="_blank" rel="noopener" href="' + suggestions[i].data.resullink + '" class="d-flex serching_items_link"> <div class="search_logo_main"><img class="search_soft_ser_logo" src="' + suggestions[i].data.logo + '" alt="' + suggestions[i].value + ' logo"></div><p> ' + highlighted_name + '</p></a></div></div>');
}
function new_servcie(container, i, suggestions) {
    if (i == (software_i_last + 1)) {
        var service_class_first = 'service_main_first';
    } else {
        service_class_first = '';
    }
    var highlighted_name = highlight(suggestions[i].value, i);
    container.html('<div class="autocomplete-suggestions_service"> <div class="autocomplete-suggestions_ser_name ' + service_class_first + '"><a id="text_name_val' + i + '" target="_blank" rel="noopener" href="' + suggestions[i].data.resullink + '" class="d-flex serching_items_link"> <div class="search_logo_main"><img class="search_soft_ser_logo" src="' + suggestions[i].data.logo + '" alt="' + suggestions[i].value + ' logo"></div> <p>' + highlighted_name + '</p></a> </div></div>');
}
// end header software search
function highlight(text, i) {
    var src_str = text;
    var term = $('#search_new_on_sccroll').val();
    term = term.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
    var pattern = new RegExp("(" + term + ")","gi");

    src_str = src_str.replace(pattern, "<strong>$1</strong>");
    src_str = src_str.replace(/(<strong>[^<>]*)((<[^>]+>)+)([^<>]*<\/strong>)/, "$1</strong>$2<strong>$4");

    return src_str;
}

$(document).on('click', '.new_search_filter_ul li', function() {
    $('.new_search_filter_ul li').removeClass('search_filter_active');
    var scroll_to = $(this).attr('show-tab');
    if (scroll_to == 'all_show') {
        $('.autocomplete-suggestion').show();
    } else {
        $('.autocomplete-suggestions_soft_name, .autocomplete-suggestions_cat_name, .autocomplete-suggestions_ser_name').closest('.autocomplete-suggestion').hide();
        $('.' + scroll_to).closest('.autocomplete-suggestion').show();
    }
    var add_to = $(this);
    setTimeout(function() {
        add_class_this(add_to);
    }, 10);
    function add_class_this(add_to) {
        $('.new_search_filter_ul li').removeClass('search_filter_active');
        add_to.addClass('search_filter_active');
    }
});

function scroll_fun_refresh() {
    $(".new_suggestions_global_search").scroll(function() {
        var scroll_top_val = $(this).offset().top + $(this).scrollTop();
        if ($(this).offset().top == scroll_top_val) {
            $('.search_filter_active').removeClass('search_filter_active');
            $('.tab_search_main_all').addClass('search_filter_active');
        }
        if ($('.category_main_first').offset().top < scroll_top_val) {
            $('.search_filter_active').removeClass('search_filter_active');
            $('.tab_search_main_category').addClass('search_filter_active');
        }
        if ($('.software_main_first').offset().top < (scroll_top_val - 300)) {
            $('.search_filter_active').removeClass('search_filter_active');
            $('.tab_search_main_software').addClass('search_filter_active');
        }
        if ($('.service_main_first').offset().top < (scroll_top_val - 600)) {
            $('.search_filter_active').removeClass('search_filter_active');
            $('.tab_search_main_service').addClass('search_filter_active');
        }
    });
}
scroll_fun_refresh();

/*popup accordion*/

var acordian_cat_id;
function change_field(e) {
    //start special dropdown in selected category
    var array_category = ["3", "21", "32", "51", "104", "228", "239", "276", "310", "322", "364"];
    if (array_category.includes(e)) {
        $('.no_of_employees_old').html('').removeClass('popup_small_field_div');
    } else {
        $('.no_of_employees_old').html('<select class="popup_small_field" name="ssleadpost[no_of_employees]" required=""><option value="">-- Select No. of Employees --</option><option value="Less than 50 ">Less than 50</option><option value="50-100">50-100</option><option value="100-500">100-500</option><option value="500-1000">500-1000</option><option value="More than 1000">More than 1000</option> </select>').addClass('popup_small_field_div');
    }

    $.ajax({
        type: "POST",
        url: '/site/getmaincriteriaacordion',
        dataType: "text",
        data: {
            cat_id: e
        },
        success: function(response) {
            $('.field_no_of_users').html(response);
        },
        error: function() {
            $('.field_no_of_users').html('<select class="popup_small_field" name="ssleadpost[no_of_users]" required=""><option value="">-- No. of Software Users --</option><option value="1 - 5 Users">1 - 5 Users</option><option value="6 - 9 Users">6 - 9 Users</option><option value="10 - 19 Users">10 - 19 Users</option><option value="20 - 29 Users">20 - 29 Users</option><option value="30 - 39 Users">30 - 39 Users</option><option value="40 - 49 Users">40 - 49 Users</option><option value="50 - 99 Users">50 - 99 Users</option><option value="100 -199 Users">100 -199 Users</option><option value="200 - 499 Users">200 - 499 Users</option><option value="500 - 999 Users">500 - 999 Users</option><option value="1000 Users and Above">1000 Users and Above</option> </select>');
        }
    });
    //end special dropdown in selected category
}
var ajax_form_accordion_btn_name;

var popup_soft_name, popup_category, popup_soft_id, popup_comp_id, popup_type, popup_new_current;
function popup_getquote(b, c, d, e, f, h, g, k, p) {

    // hide showmore like this software list
    $('.showmorelikethis_list').hide();
    $('.show_likethis_arrow_up').hide();
    $('.show_likethis_arrow_down').show();
    // hide showmore like this software list

    change_field(e);
    acordian_cat_id = e;

    if (p == 'pricing') {
        popup_new_current = 'pricing';
        ajax_form_accordion_btn_name = 'Pricing';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Pricing');
    } else if (p == 'getquote') {
        popup_new_current = 'getquote';
        ajax_form_accordion_btn_name = 'Get Quote';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Get Quote');
    } else if (p == 'Get Best Quote') {
        popup_new_current = 'getquote';
        ajax_form_accordion_btn_name = 'Get Best Quote';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Get Best Quote');
    } else {
        popup_new_current = '';
        ajax_form_accordion_btn_name = 'Get Pricing';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Get Pricing');
    }
    popup_set_hidden_data(b, c, d, e, f, h, g, k);
}
function popup_freedemo(b, c, d, e, f, h, g, k, p) {
    // hide showmore like this software list
    $('.showmorelikethis_list').hide();
    $('.show_likethis_arrow_up').hide();
    $('.show_likethis_arrow_down').show();
    // hide showmore like this software list

    change_field(e);
    acordian_cat_id = e;

    if (p == 'free_con') {
        popup_new_current = 'free_con';
        ajax_form_accordion_btn_name = 'Free Consultation';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Free Consultation');
    } else if (p == 'Free Expert Advice') {
        popup_new_current = 'free_con';
        ajax_form_accordion_btn_name = 'Free Expert Advice';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Free Expert Advice');
    } else {
        popup_new_current = '';
        ajax_form_accordion_btn_name = 'Free Demo';
        $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text('Free Demo');
    }
    popup_set_hidden_data(b, c, d, e, f, h, g, k);
}

function popup_set_hidden_data(b, c, d, e, f, h, g, k) {
    popup_soft_name = b;
    popup_category = e;
    popup_soft_id = c;
    popup_comp_id = d;
    popup_type = f;
}

var get_quote_btn = '.popup_new_get', get_quote_form_step, get_quote_form_soft_id,
free_demo_btn = '.popup_new_free', request_demo_form_step, request_demo_form_soft_id,
popup_ajax_url_one = hostUrl + "/ssleadsave/savelead", popup_ajax_url_two = hostUrl + "/ssleadsave/savelead", ga_event = '', popup_new_cookie_phone = '';

if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceIndustry' || $('.ga_page_type').val() == 'ServiceCountry' || $('.ga_page_type').val() == 'Service_Profile') {
    popup_ajax_url_one = hostUrl + "/serviceleadsave/savelead";
    popup_ajax_url_two = hostUrl + "/serviceleadsave/savelead";
}

$(document).on('click', '.onclick_free_trial_free_demo', function() {
    $(this).closest('.list_software_main').find('.popup_new_free').click().removeClass('popup_btn_disable');
    $('html,body').animate({
        scrollTop: $(this).closest('.list_software_main').find('.popup_new_free').offset().top - $(window).height() / 2
    }, 'slow');
});
$(document).on('click', '.popup_small_close', function() {
    $(".popup_small_new").hide();
    $('.popup_btn_disable').removeClass('popup_btn_disable');
});

$(document).on("click", free_demo_btn, function(event) {
    let form_name = 'popup_request_demo';
    let currnetid = $(this);
    let form_step = request_demo_form_step;
    let form_soft_id = request_demo_form_soft_id;
    popup_resume(form_name, currnetid, form_step, form_soft_id);

    request_demo_ga_event = "'send', 'event', 'N-GetQuote', 'GQ-" + popup_type + "', " + "'N-" + popup_soft_name + "'";

    if (popup_new_cookie_phone != '') {
        $('.popup_small_new .popup_small_form_one input[name="txtphone"]').val(popup_new_cookie_phone);
    }
});

$(document).on("click", get_quote_btn, function(event) {
    let form_name = 'popup_get_quote';
    let currnetid = $(this);
    let form_step = get_quote_form_step;
    let form_soft_id = get_quote_form_soft_id;
    popup_resume(form_name, currnetid, form_step, form_soft_id);

    get_quote_ga_event = "'send', 'event', 'N-GetQuote', 'GQ-" + popup_type + "', " + "'N-" + popup_soft_name + "'";

    if (popup_new_cookie_phone != '') {
        $('.popup_small_new .popup_small_form_one input[name="txtphone"]').val(popup_new_cookie_phone);
    }
});

function popup_resume(form_name, currnetid, form_step, form_soft_id) {
    $('.popup_btn_disable').removeClass('popup_btn_disable');

    $(".popup_small_new,.popup_small_form_one,.popup_small_form_otp,.popup_small_form_two,.popup_small_form_basic_detail,.popup_small_form_three,.popup_small_form_four").hide();
    closest_div = $(currnetid).closest('.popup_new_append');
    $(currnetid).addClass('popup_btn_disable');
    $('.popup_small_new').attr('id', form_name);
    $(".popup_small_new").appendTo(closest_div).fadeIn('slow');

    $("#" + form_name + " .popup_small_message_div").hide();
    if (form_step == 'mobile_otp') {
        $("#" + form_name + " .popup_small_form_otp").show();
    } else if (form_step == 'otp') {
        $("#" + form_name + " .popup_small_form_basic_detail").show();
    } else if (form_step == 'basic_detail' || form_step == 'one') {
        $("#" + form_name + " .popup_small_form_two").show();
    } else if (form_step == 'two') {
        $("#" + form_name + " .popup_small_form_three").show();
    } else if (form_step == 'three') {
        if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceCountry' || $('.ga_page_type').val() == 'Service_Profile') {
            $("#" + form_name + " .popup_small_message_div").show();
        } else {
            $("#" + form_name + " .popup_small_form_four").show();
        }
    } else if (form_step == 'four') {
        $("#" + form_name + " .popup_small_message_div").show();
    } else {
        $("#" + form_name + " .popup_small_form_one").show();
    }

    if (form_soft_id != '') {
        $("#" + form_name + " input.lead_id").val(form_soft_id);
    }
}

$(document).on("click", "#popup_get_quote .popup_small_form_one .popup_small_submit_btn", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_one';
    var phonenumber = $(this).closest('form').find('.ssintlTelInput')
      , errorMsg = $(this).closest('form').find('.is_mobile_no_valid')
      , validMsg = $(this).closest('form').find('.is_mobile_no_valid');

    phonenumber_is_valid(phonenumber, errorMsg, validMsg);
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_get_quote .popup_small_form_otp .otp_accorian_submit", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_otp';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_get_quote .popup_small_form_basic_detail .popup_small_submit_btn", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_basic_detail';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_get_quote .popup_small_form_two .popup_small_submit_btn", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_two';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_get_quote .popup_small_form_three .popup_small_submit_btn", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_three';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_get_quote .popup_small_form_four .popup_small_submit_btn", function() {
    let form_name = '#popup_get_quote';
    let form_num = '.popup_small_form_four';
    popup_check(form_name, form_num);
});

$(document).on("click", "#popup_request_demo .popup_small_form_one .popup_small_submit_btn", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_one';

    var phonenumber = $(this).closest('form').find('.ssintlTelInput')
      , errorMsg = $(this).closest('form').find('.is_mobile_no_valid')
      , validMsg = $(this).closest('form').find('.is_mobile_no_valid');

    phonenumber_is_valid(phonenumber, errorMsg, validMsg);

    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_request_demo .popup_small_form_otp .otp_accorian_submit", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_otp';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_request_demo .popup_small_form_basic_detail .popup_small_submit_btn", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_basic_detail';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_request_demo .popup_small_form_two .popup_small_submit_btn", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_two';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_request_demo .popup_small_form_three .popup_small_submit_btn", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_three';
    popup_check(form_name, form_num);
});
$(document).on("click", "#popup_request_demo .popup_small_form_four .popup_small_submit_btn", function() {
    let form_name = '#popup_request_demo';
    let form_num = '.popup_small_form_four';
    popup_check(form_name, form_num);
});

$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', '#mobilefield_otp', function(e) {
    $('.error_msg_invalid_no, .otp_error_text').hide();
    $('.otp_input_number').val('');
});
var requestdemo_source = 'RequestDemo'
  , getquote_source = 'GetQuote';

function popup_check(form_name, form_num) {
    if (form_num == '.popup_small_form_one' && $('.popup_small_new .otp_send').val() == 1) {
        if ($('.popup_small_new .is_mobile_no_valid').val() != 'valid') {
            $('#mobilefield_otp').focus();
            $(form_name + ' .error_msg_invalid_no').show();
            event.preventDefault();
            return false;
        }
    }
    if ($('.ga_page_type').val() == 'AppCategory' || $('.ga_page_type').val() == 'mobileapp_profile') {
        requestdemo_source = 'MobileAppRequestDemo';
        getquote_source = 'MobileAppGetQuote';
    }
    if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceCountry') {
        if (ajax_form_accordion_btn_name == 'Free Expert Advice') {
            requestdemo_source = 'free_expert_advice';
            getquote_source = 'pricing_details';
        } else {
            requestdemo_source = 'expert_consultation';
            getquote_source = 'get_best_quote';
        }
    }
    let post_url;
    let form = form_name + ' ' + form_num;
    $(form).append('<input type="hidden" name="ssleadpost[software]" value="' + popup_soft_name + '">');
    let post_data = $(form).serialize();
    let businessmail;

    $(form).unbind('submit').bind('submit', function(event) {
        event.preventDefault();
        if (form_name == '#popup_get_quote') {
            post_url = popup_ajax_url_one;
            if (form == '#popup_get_quote .popup_small_form_one') {
                post_data = post_data + //"&ssleadpost[software]=" + popup_soft_name +
                "&ssleadpost[categoryid]=" + popup_category + "&ssleadpost[utm_source]=" + $('.utm_source').val() + "&ssleadpost[source]=" + getquote_source;
                ga_event = get_quote_ga_event;
                popup_ajax(form_name, form_num, post_url, post_data, ga_event);
            } else {
                popup_ajax(form_name, form_num, post_url, post_data);
            }
        }

        if (form_name == '#popup_request_demo') {
            post_url = popup_ajax_url_two;
            if (form == '#popup_request_demo .popup_small_form_one') {
                post_data = post_data + //"&ssleadpost[software]=" + popup_soft_name +
                "&ssleadpost[categoryid]=" + popup_category + "&ssleadpost[utm_source]=" + $('.utm_source').val() + "&ssleadpost[source]=" + requestdemo_source;

                ga_event = request_demo_ga_event;
                popup_ajax(form_name, form_num, post_url, post_data, ga_event);
            } else {
                popup_ajax(form_name, form_num, post_url, post_data);
            }
        }

    });
}

// popup new ajax
function popup_ajax(form_name, form_num, post_url, post_data, ga_event='') {
    form = form_name + ' ' + form_num;
    $.ajax({
        type: "POST",
        url: post_url,
        dataType: "text",
        data: post_data,
        beforeSend: function() {
            $(form + " .popup_small_submit_btn").addClass('popup_submit_btn_disable').html('Submiting');
        },
        success: function(response) {
            $(form_name).find('.otp_text .mobile_no').html($(form_name).find('.ssintlTelInput').val());
            responseObj = jQuery.parseJSON(response);
            if (responseObj.lead_save_status) {

                if (form_num == '.popup_small_form_one') {
                    if (responseObj.lead_exit) {
                        if (form_name == '#popup_get_quote') {
                            $('.skip_gq_form_or_not').val('1');
                        }
                        if (form_name == '#popup_request_demo') {
                            $('.skip_rd_form_or_not').val('1');
                        }
                    } else {
                        if (form_name == '#popup_get_quote') {
                            $('.skip_gq_form_or_not').val('0');
                        }
                        if (form_name == '#popup_request_demo') {
                            $('.skip_rd_form_or_not').val('0');
                        }
                    }
                }

                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_one') {
                    if ($('#popup_get_quote .popup_small_form_one').find('.otp_send').val() == '1') {
                        clearInterval(timerId);
                        $('.resend_click').removeClass('pointer_none');
                        setTimeout(function() {
                            otp_timer(2, 30);
                        }, 10)
                        get_quote_form_step = 'mobile_otp';
                    } else {
                        get_quote_form_step = 'one';
                    }
                    get_quote_form_soft_id = responseObj.lead_id;
                    if (popup_new_current == "pricing") {
                        ga_track_np_sub();
                    } else {
                        ga_track_ngq_sub();
                    }
                } else {
                    clearInterval(timerId);
                    $('.resend_click').removeClass('pointer_none');
                }
                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_otp') {
                    if ($('.skip_gq_form_or_not').val() == '1') {
                        get_quote_form_step = 'four';
                        $(form_name + ' form').hide();
                        $(form_name + ' .popup_small_message_div').show();
                        $(form + " .popup_small_submit_btn").removeClass('popup_submit_btn_disable').html('Submit');
                        return false;
                    } else {
                        get_quote_form_step = 'otp';
                    }
                    get_quote_form_soft_id = responseObj.lead_id;
                    gtag('event', 'Verify', {
                        'event_category': 'OTP',
                        'event_label': window.location.href
                    });
                    console.log('event', 'Verify', {
                        'event_category': 'OTP',
                        'event_label': window.location.href
                    })
                }
                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_two') {
                    get_quote_form_step = 'two';
                    get_quote_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_basic_detail') {
                    get_quote_form_step = 'basic_detail';
                    get_quote_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_three') {
                    get_quote_form_step = 'three';
                    get_quote_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_get_quote' && form_num == '.popup_small_form_four') {
                    get_quote_form_step = 'four';
                    get_quote_form_soft_id = responseObj.lead_id;
                }

                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_one') {
                    if ($('#popup_request_demo .popup_small_form_one').find('.otp_send').val() == '1') {
                        clearInterval(timerId);
                        $('.resend_click').removeClass('pointer_none');
                        setTimeout(function() {
                            otp_timer(2, 30);
                        }, 10)
                        request_demo_form_step = 'mobile_otp';
                    } else {
                        request_demo_form_step = 'one';
                    }
                    request_demo_form_soft_id = responseObj.lead_id;
                    if (popup_new_current == "free_con") {
                        ga_track_nfc_sub();
                    } else {
                        ga_track_nrd_sub();
                    }
                } else {
                    clearInterval(timerId);
                    $('.resend_click').removeClass('pointer_none');
                }
                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_otp') {
                    if ($('.skip_rd_form_or_not').val() == '1') {
                        request_demo_form_step = 'four';
                        $(form_name + ' form').hide();
                        $(form_name + ' .popup_small_message_div').show();
                        $(form + " .popup_small_submit_btn").removeClass('popup_submit_btn_disable').html('Submit');
                        return false;
                    } else {
                        request_demo_form_step = 'otp';
                    }
                    request_demo_form_soft_id = responseObj.lead_id;
                    gtag('event', 'Verify', {
                        'event_category': 'OTP',
                        'event_label': window.location.href
                    });
                    console.log('event', 'Verify', {
                        'event_category': 'OTP',
                        'event_label': window.location.href
                    })
                }
                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_basic_detail') {
                    request_demo_form_step = 'basic_detail';
                    request_demo_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_two') {
                    request_demo_form_step = 'two';
                    request_demo_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_three') {
                    request_demo_form_step = 'three';
                    request_demo_form_soft_id = responseObj.lead_id;
                }
                if (form_name == '#popup_request_demo' && form_num == '.popup_small_form_four') {
                    request_demo_form_step = 'four';
                    request_demo_form_soft_id = responseObj.lead_id;
                }

                $(form_name + " input.lead_id").val(responseObj.lead_id);
                if (popup_new_cookie_phone == '') {
                    $(form).trigger("reset");
                }
                $(form).hide();
                if ((form_name == '#popup_get_quote' || form_name == '#popup_request_demo') && form_num == '.popup_small_form_one') {
                    if ($(form_name + ' .popup_small_form_one').find('.otp_send').val() == '1') {
                        if ($(form_name + ' .popup_countrycode').val() != '+91') {
                            $(form).next().next().show();
                        } else {
                            $(form).next().show();
                        }
                    } else {
                        $(form).next().show();
                    }
                } else {
                    $(form).next().show();
                }

                $(form + " .popup_small_submit_btn").removeClass('popup_submit_btn_disable').html('Submit');
            } else {
                if (form_num == '.popup_small_form_otp') {
                    $(form_num).closest('.popup_small_new').find('.otp_error_text').show();
                } else {
                    alert('Some internal problem, Please reload page and try again.');
                }
                $(form + " .popup_small_submit_btn").removeClass('popup_submit_btn_disable').html('Submit');
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError)
        }
    });
}
/*End popup accordion*/
$(document).on('change input keyup', '#mobilefield_otp', function() {
    $('.otpform_change_mobile b').html($(this).val());
});
$(document).on('click', '.change_number_btn', function() {
    $('.popup_small_form_otp').hide();
    $('.popup_small_form_one').show();
    $('.popup_small_form_one #mobilefield_otp').val('');
    get_quote_form_step = '';
    request_demo_form_step = '';
    clearInterval(timerId);
    $('.resend_click').removeClass('pointer_none');
});
$(document).on('click', '.popup_small_new .resend_click', function() {
    $(this).closest('.popup_small_new').find('.new_agree_terms_checkbox input').click();
    $(this).closest('.popup_small_new').find('.popup_small_form_one .popup_small_submit_btn').click();
});
/* otp timer code */
function otp_timer(min, sec) {
    var minutes = min;
    var seconds = sec;
    $('.resend_click').addClass('pointer_none');
    timerId = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        $(".otp_timer").html(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
        $('.timer_text_rm').show();
        if (minutes == 0 && seconds == 0) {
            clearInterval(timerId);
            $('.resend_click').removeClass('pointer_none');
            $('.timer_text_rm').hide();
        }
    }, 1000);
}
/* otp timer code end */

var errorMap = ["invalid number", "invalid country code", "too short", "too long", "invalid number"];

function init_intl_tel_input(data) {
    var numberTemp = $(data + " .ssintlTelInput").val();
    $(data + " .ssintlTelInput").val('');

    $(data + " .ssintlTelInput").intlTelInput({
        autoPlaceholder: "off",
        formatOnDisplay: !1,
        geoIpLookup: function(callback) {
            callback($("#currentip").val())
        },
        initialCountry: "auto",
        placeholderNumberType: "MOBILE",
        separateDialCode: !0,
        utilsScript: baseUrl + "/assets2/js/utils.js",
    });
    setTimeout(function() {
        var countrycode = $(data + " .iti__selected-dial-code").text();
        $(data + " .ssleadpost_countrycode").val(countrycode);
        $(data + " .ssintlTelInput").val(numberTemp);
    });

    var telInput = $(data + " .ssintlTelInput")
      , errorMsg = $(data).find(".is_mobile_no_valid")
      , validMsg = $(data).find(".is_mobile_no_valid");

    telInput.keyup(function() {
        var curentval = $(this).val();
        telInput.val(curentval);

        // reset(telInput, errorMsg, validMsg);
        validMsg.val('');
        if ($.trim(telInput.val())) {
            var number = $.trim(telInput.val());
            var numberwith_code = '+' + $(telInput).intlTelInput("getSelectedCountryData").dialCode + $.trim(telInput.val());
            // console.log(numberwith_code);
            if (number.length < 5) {
                errorMsg.val('too short');
                var message = 'too short';
            } else if (isValidNumber(numberwith_code)) {
                validMsg.val('valid');
                message = 'valid';
            } else {
                errorMsg.val('invalid number');
                message = 'invalid number';
            }
            // console.log(message);
        } else {
            validMsg.val('');
        }
    });
    $(data).find('.iti__selected-flag').attr('aria-controls', 'someElementId').attr('aria-expanded', 'false');
    $(data).find('.iti__selected-flag').removeAttr('role');
}
function phonenumber_is_valid(telInput, errorMsg, validMsg) {
    if ($.trim(telInput.val())) {
        var number = $.trim(telInput.val());
        var numberwith_code = '+' + $(telInput).intlTelInput("getSelectedCountryData").dialCode + $.trim(telInput.val());
        // console.log(number);
        if (number.length < 5) {
            errorMsg.val('too short');
            var message = 'too short';
        } else if (isValidNumber(numberwith_code)) {
            validMsg.val('valid');
            message = 'valid';
        } else {
            errorMsg.val('invalid number');
            message = 'invalid number';
        }
        // console.log(message);
    }
}

function isValidNumber(number) {
    return new libphonenumber.parsePhoneNumber(number).isValid()
}

var intl_tel_last_click;
$(document).on('click', '.iti__flag-container', function(e) {
    intl_tel_last_click = $(this).closest('.iti');
});

$(document).on('click', '.iti__country', function(e) {
    var telInput = intl_tel_last_click.find('.ssintlTelInput');
    var errorMsg = intl_tel_last_click.closest('form').find('.is_mobile_no_valid');
    var validMsg = intl_tel_last_click.closest('form').find('.is_mobile_no_valid');
    telInput.val('')
    // reset(telInput, errorMsg, validMsg);
    validMsg.val('');
    intl_tel_last_click.closest('form').find('.ssleadpost_countrycode').val(intl_tel_last_click.find('.iti__selected-dial-code').text());
});

$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', '.ssintlTelInput', function(e) {
    $(this).removeClass('field_placeholder');
})

//Url ajax view (start from domain name)
var ajax_view_url = baseUrl + "/singleview/getajaxdata";

//Ajax function for load extra views or elements
let issoftwareloadedonload = false;
function ajax_fire(data, isloadmore) {
    if (data.before) {
        var before_method = data.before;
    }
    if (data.error) {
        var error_method = data.error;
    }
    if (data.success) {
        var success_method = data.success;
    }
    var ajax_url = data.url;
    var page_type = $('.ga_page_type').val();
    $.ajax({
        type: "POST",
        url: ajax_url,
        dataType: "text",
        data: data.data + "&data_json=" + encodeURIComponent(JSON.stringify($('.send_on_viewmore').val())) + '&page_type=' + page_type + '&cat_name=' + $('.ga_page_name').val() + '&current_cat_id=' + current_categoryid + '&europien_country=' + europien_country,
        beforeSend: function() {
            // $(data.before).prop('disabled', true);
            if (data.before_data) {
                beforeObj = {
                    'selector': data.selector,
                };
                before_method(beforeObj);
            }
        },
        success: function(response) {
            if (response) {
                button_name_and_update_hiden_inout();
                var ajax_res = JSON.stringify(response);
                successObj = {
                    "response": ajax_res,
                    'selector': data.selector,
                };
                success_method(successObj);
            } else {
                errorObj = {
                    'selector': data.selector,
                };
                error_method(errorObj);
            }
            if (isloadmore == 'isloadmore_half') {
                let pagedefaultcount = Number($('.page_software_count').val());
                $('.count_of_showing').text(pagedefaultcount);
                if (Number($('.count_of_listing .count_of_showing').text()) >= Number($('.total_count').text())) {
                    if ($.trim($('.total_count').text()) != '') {
                        $('.count_of_showing').text($('.total_count').text());
                    } else {
                        $('.count_of_showing').text($('.count_in').length);
                    }
                }
                var window_width = window.matchMedia("(max-width: 1080px)");
                getResolution(window_width);
            }
            if (isloadmore == 'isloadmore') {
                let pagedefaultcount = Number($('.page_software_count').val());
                $('.count_of_showing').text(pagedefaultcount + pagedefaultcount);

                if (Number($('.count_of_listing .count_of_showing').text()) >= Number($('.total_count').text())) {
                    $('.count_of_showing').text($('.total_count').text());
                }
                let isLast;
                if ($('.load_software_on_load').val() === 'true' && !issoftwareloadedonload) {
                    $('.count_of_showing').text($('.count_in').length);
                    $('.soft_startlimit, .page_software_count').val($('.count_in').length);
                    issoftwareloadedonload = true;
                } else {
                    IsSoftwareloade = true;
                    let shownext = Number($('.count_of_listing .count_of_showing').text());
                    isLast = false;
                    if ($('.count_in').length <= shownext) {
                        isLast = true;
                    }
                }
                var window_width = window.matchMedia("(max-width: 1080px)");
                getResolution(window_width);
                setTimeout(function() {
                    HideextrasotwareAfterajax(Number($('.count_of_listing .count_of_showing').text()) - 1, isLast);
                }, 500);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            if (data.error) {
                errorObj = {
                    'selector': data.selector,
                };
                error_method(errorObj);
            }
        }
    })
}

// Hide Extra Software After ajax complet
function HideextrasotwareAfterajax(count, isLast) {
    if (isLast === true) {
        $('.view_more_btn_div').hide();
        $('.new_design_category').eq(count).prevAll().show();
        $('.new_design_category').eq(count).nextAll().hide();
        $('.new_design_category').eq(count).show();
    } else {
        $('.new_design_category').eq(count).prevAll().show();
        $('.new_design_category').eq(count).nextAll().hide();
    }
}
// Hide Extra Software After ajax complet end

//Get form popup element and append to element
function get_form_accordion(data) {
    $(".popup_small_form_div").append(data);
}

// ajax category dropdown
function get_dropdown(data) {
    var success_response = jQuery.parseJSON(data.response);
    $(data.selector + " .ajax_loader_div").remove();
    $(data.selector).append(success_response);
}

function dropdown_ajax_fail(data) {
    $(data.selector + ' .ajax_fail_div').show();
    $(data.selector + ' .ajax_loader_img').hide();
    $(data.selector + ' .ajax_reload_btn').addClass('ajax_header_cat_dropddown');
}

// ajax category dropdown
function get_mobile_sidebar(data) {
    var success_response = jQuery.parseJSON(data.response);
    $(data.selector + " .ajax_loader_div").remove();
    $(data.selector).append(success_response);
    $('#mobile_view_sidebar').show();
    $(".nav_bar").css('transform', 'translate3d(0, 0, 0)');
    $('body').addClass('body_overflow');
}

$(document).on("click", ".mobile_view_sidebar_ajax", function() {
    $(this).removeClass("mobile_view_sidebar_ajax");

    var file_name = $('.hamburger').attr('id');
    var append_id = 'body';

    $('.ajax_header_selector.drop_list_active .ajax_loader_img').show();
    $('.ajax_header_selector.drop_list_active .ajax_fail_div').hide();
    ajax_view_url = baseUrl + "/singleview/getajaxdata";
    var data_dropdown = {
        success: get_mobile_sidebar,
        error: dropdown_ajax_fail,
        url: ajax_view_url,
        data: 'view=' + file_name,
        selector: append_id,
    };
    ajax_fire(data_dropdown);
});
// end ajax category dropdown

// popup js
var current_popup, current_popup_soft_name, current_popup_source, popup_new_title, popup_ajax_complet = new Array(), popup_new_logo, popup_new_screenshot, popup_new_category_name, popup_new_button_name, pro_callback_m_no, pro_callback_coountry_code, pro_callback_validNo, current_categoryid = $('.categoryid').val();
$(document).on("click", ".popup_desk_close_btn", function(e) {
    $('.active_popup').fadeOut().removeClass('active_popup');
    $("body").removeClass("body_overflow");
    if ($(this).closest('.popup_desk').attr('id') == 'loginpopup') {
        Cookies.remove('bookmark_soft_id');
        $("#loginpopup a").attr('target', '');
    }
});
// cofused section ajax js start
$(document).on("click", "#clickhere_btn", function(e) {
    var ga_soft_name = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val().trim();
    ga_gq_soft_name = ga_soft_name;
});

$(document).on("click", "#confused_form_sbt form button", function(e) {
    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        $('#confused_form_sbt .ssleadpost_categoryid').val($('.categoryid').val());
        $('#confused_form_sbt .ssleadpost_source').val('FreeConsultation');
        $('.utm_source_hiden').val($('.utm_source').val());
        popup_new_category_name = $('.category_name').val();
        popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
        current_popup = 'confused_form_sbt';
        current_popup_source = 'FreeConsultation';
        var form = $(this).closest('form').serialize();
        var next = true;
        if (next) {
            big_popup_ajax(form);
        }
    });
});
// cofused section ajax js end

$(document).on("click", ".request_callback_btn", function(e) {
    $('.request_callback_btn').removeClass('ajax_load_popup_form');
    current_popup = 'request_callback';
    current_popup_source = 'FreeConsultation';
    toggle_popup();
});

$(document).on("click", ".user_signup_btn", function(e) {
    $('.user_signup_btn').removeClass('ajax_load_popup_form');
    current_popup = 'loginpopup';
    current_popup_source = 'loginpopup';
    toggle_popup();
});

$(document).on("click", ".filter_desktop_button", function(e) {
    $('.filter_desktop_button').removeClass('ajax_load_popup_form');
    current_popup = 'desktop_filter_popup';
    current_popup_source = 'Filter';
    toggle_popup();
});

$(document).on("click", "#full_page_search_open", function(e) {
    $('#full_page_search').fadeIn();
    $('body').addClass('full_popup_open')
    current_popup = 'full_page_search';
    current_popup_source = '';
    toggle_popup();
});

// pricing section click here popup event
$(document).on("click", "#pricing .price_link_popup", function(e) {
    $('.price_link_popup').removeClass('ajax_load_popup_form');
    current_popup = 'pricing_click_pricing_popup';
    popup_new_title = $('.soft_name').val();
    current_popup_source = 'Pricing';
    toggle_popup();
});
// pricing section click here popup event end

// category compare pricing popup
$(document).on("click", "#compare_price .price_table_avlbl_popup", function(e) {
    $('.price_table_avlbl_popup').removeClass('ajax_load_popup_form');
    current_popup = 'pricing_click_pricing_popup';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
    current_popup_source = 'Pricing';
    toggle_popup();
});
// category compare pricing popup end

// profile starting price section click here popup event
$(document).on("click", "#starting_price .price_link_popup,#award_section .price_link_popup,#comparison .price_link_popup", function(e) {
    $('.price_link_popup').removeClass('ajax_load_popup_form');
    current_popup = 'pricing_click_pricing_popup';
    popup_new_title = $('.soft_name').val();
    current_popup_source = 'Pricing';
    toggle_popup();
});
// profile starting price section click here popup event end

// ask question popup profile page
$(document).on("click", ".ask_q_button_prof", function(e) {
    $('.ask_q_button_prof').removeClass('ajax_load_popup_form');
    current_popup = 'ask_question_popup';
    current_popup_source = 'AskQuestion';
    popup_new_title = $('.soft_name').val();
    popup_new_button_name = $(this).text();
    toggle_popup();
});
// ask question popup profile page end 

// profile page alternatives software form
$(document).on("click", ".profile_pricing_popup", function(e) {
    $('.profile_pricing_popup').removeClass('ajax_load_popup_form');
    current_popup = 'get_pricing_popup';
    if ($('.ga_page_type').val() == 'mobileapp_profile') {
        current_popup_source = 'MobileAppGetQuote';
    } else {
        current_popup_source = 'GetQuote';
    }
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.popup_soft_name').val();
    popup_new_button_name = $(this).text();
    $('#get_pricing_popup .form_1_submit').text(popup_new_button_name);
    $('.fancybox-button--close').click();
    $('#get_pricing_popup').find('form, .popup_desk_thanks_msg').hide();
    $('#get_pricing_popup').find('.popup_desk_form_1').show();
    toggle_popup();
});
// profile page alternatives software form end

// profile page alternatives software form
$(document).on("click", ".expl_detail_pricing_popup", function(e) {
    $('.expl_detail_pricing_popup').removeClass('ajax_load_popup_form');
    current_popup = 'get_pricing_popup';
    current_popup_source = 'GetQuote';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.popup_soft_name').val();
    popup_new_button_name = $(this).text();
    $('#get_pricing_popup .form_1_submit').text(popup_new_button_name);
    $('.fancybox-button--close').click();
    $('#get_pricing_popup').find('form, .popup_desk_thanks_msg').hide();
    $('#get_pricing_popup').find('.popup_desk_form_1').show();
    toggle_popup();
});
// profile page alternatives software form end

// profile page pricing software form
$(document).on("click", ".profile_req_demo", function(e) {
    $('.profile_req_demo').removeClass('ajax_load_popup_form');
    current_popup = 'request_a_demo';
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.popup_soft_name').val();
    popup_new_button_name = $(this).text();
    popup_new_logo = $(this).closest('.ga_track_soft_list').find('.hiden_logo').val();
    popup_new_category_name = $('.category_name').val();
    popup_new_screenshot = $(this).closest('.ga_track_soft_list').find('.hiden_screenshot').val();
    $('#request_a_demo .form_1_submit').text(popup_new_button_name);
    $('.fancybox-button--close').click();
    toggle_popup();
});
// profile page pricing software form end

// profile page small callback form
$(document).on("submit", ".overiewsec_mobile_field", function(e) {
    if ($.trim($('.overiewsec_mobile_field input').val()) != '') {
        $('.profile_callback_popup').removeClass('ajax_load_popup_form_callback');
        current_popup = 'callback_profile';
        current_popup_source = 'FreeConsultation';
        popup_new_category_name = $('.category_name').val();
        pro_callback_m_no = $('.overiewsec_mobile_field').find('.ssintlTelInput').val();
        pro_callback_coountry_code = $('.overiewsec_mobile_field').find('.ssleadpost_countrycode').val();
        pro_callback_validNo = $('.overiewsec_mobile_field').find('.is_mobile_no_valid').val();
        toggle_popup();
        ajax_load_popup_form();
    } else {
        setTimeout(function() {
            $('.profile_callback_popup').addClass('ajax_load_popup_form_callback');
        }, 400);
    }
    e.preventDefault();
});
// profile page small callback form end
// service profile page pricing software form
$(document).on("click", ".service_profile_req_demo", function(e) {
    $('.service_profile_req_demo').removeClass('ajax_load_popup_form');
    current_popup = 'request_a_demo';
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_freq_soft_name').val();
    popup_new_button_name = $(this).text();
    popup_new_logo = $(this).closest('.ga_track_soft_list').find('.hiden_logo').val();
    popup_new_category_name = $('.category_name').val();
    popup_new_screenshot = $(this).closest('.ga_track_soft_list').find('.hiden_screenshot').val();
    $('#request_a_demo .form_1_submit').text(popup_new_button_name);
    $('.fancybox-button--close').click();
    toggle_popup();
});
// service profile page pricing software form end

// service profile page free expert advice software form
$(document).on("click", ".service_profile_free_exp", function(e) {
    $('.service_profile_free_exp').removeClass('ajax_load_popup_form');
    current_popup = 'get_pricing_popup';
    current_popup_source = 'GetQuote';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
    popup_new_button_name = $(this).text();
    $('#get_pricing_popup .form_1_submit').text(popup_new_button_name);
    toggle_popup();
});
// service profile page free expert advice software form end

var resource_btn_clicked;
// profile page resources popup start
$(document).on("click", ".resources_lead_popup_open", function(e) {
    $('.resources_lead_popup_open').removeClass('ajax_load_popup_form');
    resource_btn_clicked = $(this);
    current_popup = 'resources_lead_popup';
    current_popup_source = '';
    toggle_popup();
    $('#resources_lead_popup .resource_title').val($(this).siblings('.button_title').val());
    $('#resources_lead_popup .resource_type').val($(this).siblings('.button_type').val());
    $('#resources_lead_popup .popup_desk_title').text('Download ' + $(this).siblings('.button_type').val() + ' Now');
    $('#resources_lead_popup .resource_download_link').val($(this).siblings('.button_link').val());
    $('#resources_lead_popup .resource_software_id').val($('.software_id').val());
    $('#resources_lead_popup .user_email').text($('#resources_lead_popup .email_field').val());
    $('#resources_lead_popup .source_url').val('/' + $('.page_url').val());
    $('#resources_lead_popup .resources_sent_to_text').text('Your ' + $(this).siblings('.button_type').val() + ' has been sent to your mailbox.');
});
$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', '#resources_lead_popup .email_field', function() {
    $('#resources_lead_popup .user_email').text($(this).val());
})
// profile page resources popup end 

// price estimator need help contact us popup start
$(document).on("click", ".contact_up_popup", function(e) {
    $(".contact_up_popup").removeClass("ajax_load_popup_form ")
    current_popup = 'price_estimator_popup';
    current_popup_source = '';
    toggle_popup();
});
// price estimator need help contact us popup end

$(document).on("click", "#claim_profile_btn", function(e) {
    current_popup = 'claim_profile';
    current_popup_source = '';
    toggle_popup();
});

// profile page award popup start
$(document).on("click", ".more_award_popup_btn", function(e) {
    e.preventDefault();
    current_popup = 'more_award_popup';
    current_popup_source = '';
    toggle_popup();
});
// profile page award popup end 

$(document).on('click', '#full_page_search .popup_desk_close_icon', function() {
    $('#full_page_search').fadeOut();
    $('body').removeClass('full_popup_open')
})

/*download buyers guide pdf popup btn js start*/
$(document).on("click", ".download_research_btn", function() {
    current_popup = 'download_research_report';
    current_popup_source = 'buyersguide';
    toggle_popup();

});
$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', '#download_research_report .email_field', function() {
    $('#download_research_report .user_email').text($(this).val());
})
/*download buyers guide pdf popup btn js start*/

$(document).on("click", ".wrt_rev_popup_app", function(e) {
    $('.wrt_rev_popup_app').removeClass('ajax_load_popup_form');
    $('body').addClass('body_overflow')
    current_popup = 'full_page_wrt_rev_app';
    current_popup_source = '';
    popup_new_title = $(this).siblings('.rev_soft_name').val();
    rev_soft_popup_id = $(this).siblings('.rev_soft_id').val();
    rev_soft_popup_logo = $(this).siblings('.rev_soft_logo').val();
    toggle_popup();
});

$(document).on("click", ".wrt_rev_popup_service", function(e) {
    $('.wrt_rev_popup_service').removeClass('ajax_load_popup_form');
    $('body').addClass('body_overflow')
    current_popup = 'full_page_wrt_rev_service';
    current_popup_source = '';
    popup_new_title = $(this).siblings('.rev_soft_name').val();
    rev_soft_popup_id = $(this).siblings('.rev_soft_id').val();
    rev_soft_popup_logo = $(this).siblings('.rev_soft_logo').val();
    toggle_popup();
});

$(document).on("click", ".search_btn_home_software", function(e) {
    current_popup = 'software_popup_homepage';
    current_popup_source = 'GetQuote';
    var popup_title = $(this).closest('.autocomplete-suggestions_software').find('.autocomplete-suggestions_soft_name a').text();
    var btn_name = $(this).text();
    $('#software_popup_homepage .ssleadpost_source').val(current_popup_source);
    $('#software_popup_homepage .popup_desk_title').text(popup_title);
    $('#software_popup_homepage .ssleadpost_software_name').val(popup_title);
    $('#software_popup_homepage .form_1_submit').text(btn_name);
    $('#software_popup_homepage .form_1_submit').text(btn_name);
    $('#software_popup_homepage .ssleadpost_categoryid').val($(this).siblings('#category_id').val());
    var cat_id_home_form = $(this).siblings('#category_id').val();

    var array_category = ["3", "21", "32", "51", "104", "228", "239", "276", "310", "322", "364"];
    if (array_category.includes(cat_id_home_form)) {
        $('.no_of_employees_old').html('');
    } else {
        $('.no_of_employees_old').html('<select class="popup_desk_field sidebar_form_input" required="1" name="ssleadpost[no_of_employees]" aria-label="no_of_employees"><option value="">-- Select No. of Employees --</option><option value="Less than 50 ">Less than 50</option><option value="50-100">50-100</option><option value="100-500">100-500</option><option value="500-1000">500-1000</option><option value="More than 1000">More than 1000</option> </select>');
    }
    $.ajax({
        type: "POST",
        url: '/site/getmaincriteria',
        dataType: "text",
        data: {
            cat_id: cat_id_home_form
        },
        success: function(response) {
            $('.field_no_of_users').html(response);
        },
        error: function() {
            $('.field_no_of_users').html('<select class="popup_desk_field sidebar_form_input" required="1" name="ssleadpost[no_of_users]" aria-label="no_of_users"><option value="">-- No. of Software Users --</option><option value="1 - 5 Users">1 - 5 Users</option><option value="6 - 9 Users">6 - 9 Users</option><option value="10 - 19 Users">10 - 19 Users</option><option value="20 - 29 Users">20 - 29 Users</option><option value="30 - 39 Users">30 - 39 Users</option><option value="40 - 49 Users">40 - 49 Users</option><option value="50 - 99 Users">50 - 99 Users</option><option value="100 -199 Users">100 -199 Users</option><option value="200 - 499 Users">200 - 499 Users</option><option value="500 - 999 Users">500 - 999 Users</option><option value="1000 Users and Above">1000 Users and Above</option> </select>');
        }
    });
    toggle_popup();
});

$(document).on("click", ".search_btn_home_service", function(e) {
    var btn_name = $(this).text();
    current_popup = 'service_popup_homepage';
    if (btn_name == 'Free Expert Advice') {
        current_popup_source = 'free_expert_advice';
    } else {
        current_popup_source = 'expert_consultation';
    }
    var popup_title = $(this).closest('.autocomplete-suggestions_service').find('.autocomplete-suggestions_ser_name a').text();
    $('#service_popup_homepage .ssleadpost_source').val(current_popup_source);
    $('#service_popup_homepage .popup_desk_title').text(popup_title);
    $('#service_popup_homepage .ssleadpost_software_name').val(popup_title);
    $('#service_popup_homepage .form_1_submit').text(btn_name);
    $('#service_popup_homepage .ssleadpost_categoryid').val($(this).siblings('#category_id').val());
    toggle_popup();
});

// Start like and share review js software
$(document).on("click", ".review_like_usefull", function(e) {
    $('#useful_review_popup .ssleadpost_categoryid').val($('.categoryid').val())
    useful_soft_id = $(this).closest('.like_and_share_main').find('.like_soft_id').val();
    useful_review_id = $(this).closest('.like_and_share_main').find('.like_review_id').val();
    useful_thisclick = $(this);
    if (useful_thisclick.closest('.like_btn_main').hasClass('liked')) {
        like_unlike_useful_review(useful_soft_id, useful_review_id, useful_thisclick);
    } else {
        $('.useful_review_btn').removeClass('ajax_load_popup_form');
        current_popup = 'useful_review_popup';
        current_popup_source = 'Useful';
        $('.popup_desk_thanks_msg').hide();
        $('.popup_desk_form_1').show();
        setTimeout(function() {
            toggle_popup();
        }, 500)
    }
});
// profile page pricing software form
$(document).on("click", ".alternatives_req_demo", function(e) {
    $('.alternatives_req_demo').removeClass('ajax_load_popup_form');
    current_popup = 'request_a_demo';
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.soft_list_prof').find('.soft_name_top_soft').text();
    popup_new_button_name = $(this).text();
    popup_new_logo = $(this).closest('.soft_list_prof').find('.hiden_logo').val();
    popup_new_category_name = $(this).closest('.soft_list_prof').find('.category_name').val();
    popup_new_screenshot = $(this).closest('.soft_list_prof').find('.hiden_screenshot').val();
    $('#alternatives_request_a_demo .form_1_submit').text(popup_new_button_name);
    toggle_popup();
});
// profile page pricing software form end

// profile page pricing software form
$(document).on("click", ".compare_alternative_free_demo", function(e) {
    $('.compare_alternative_free_demo').removeClass('ajax_load_popup_form');
    current_popup = 'request_a_demo';
    if ($('.ga_page_type').val() == 'mobileapp_profile') {
        current_popup_source = 'MobileAppRequestDemo';
    } else {
        current_popup_source = 'RequestDemo';
    }
    popup_new_title = $(this).closest('.soft_list_prof').find('.soft_name_top_soft').text();
    popup_new_button_name = $(this).text();
    popup_new_logo = $(this).closest('.soft_list_prof').find('.hiden_logo').val();
    popup_new_category_name = $('.category_name').val();
    popup_new_screenshot = $(this).closest('.soft_list_prof').find('.hiden_screenshot').val();
    $('#alternatives_request_a_demo .form_1_submit').text(popup_new_button_name);
    toggle_popup();
});
// profile page pricing software form end

// compare two software get pricing popup
$(document).on("click", ".compare_main_pricing_popup_open", function(e) {
    $('.compare_main_pricing_popup_open').removeClass('ajax_load_popup_form');
    current_popup = 'get_pricing_popup';
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
    popup_new_button_name = $(this).text();
    if (popup_new_button_name == 'Compare Price Quotes') {
        popup_new_button_name = 'Get Pricing';
    }
    $('#compare_toptwo_pricing_popup .form_1_submit').text(popup_new_button_name);
    toggle_popup();
});
// compare two software get pricing popup end

function like_unlike_useful_review(useful_soft_id, useful_review_id, useful_thisclick) {
    if ($('.ga_page_type').val() == 'Service_Profile') {
        var likemethod = '/cservices/getlikemethod';
        var likedata = {
            comp_id: useful_soft_id,
            review_id: useful_review_id
        };
    } else {
        var likemethod = '/ssapplication/getlikemethod';
        var likedata = {
            soft_id: useful_soft_id,
            review_id: useful_review_id
        };
    }
    $.ajax({
        type: 'POST',
        url: likemethod,
        data: likedata,
        beforeSend: function() {},
        success: function(responce) {
            console.log('===RV===>', responce);
            if (responce) {
                responseObj = jQuery.parseJSON(responce);
                useful_thisclick.find(".usefull_or_not").html(responseObj.Useful_txt);
                if (responseObj.count == true) {
                    useful_thisclick.closest('.like_btn_main').addClass('liked');
                } else {
                    useful_thisclick.closest('.like_btn_main').removeClass('liked');
                }
            }
        },
        error: function(xhr) {}
    });
}
// like and share review js software End

var popup_desk_title, popup_desk_btn_text;
// three software on top fix header in category page popup  :: Start
$(document).on("click", ".three_soft_on_top .popup_new_free_three, .three_soft_on_top .popup_new_get_three", function(e) {
    $('.three_soft_on_top .popup_new_free_three, .three_soft_on_top .popup_new_get_three').removeClass('ajax_load_popup_form');
    current_popup = 'request_demo';
    popup_desk_btn_text = $(this).text();
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
    popup_new_button_name = $(this).text();
    toggle_popup();
});
// three software on top fix header in category page popup :: End

// featured software non ppc software category page popup  :: Start
$(document).on("click", ".popup_freedemo_featuredsoft", function(e) {
    $('.popup_freedemo_featuredsoft').removeClass('ajax_load_popup_form');
    current_popup = 'request_demo';
    popup_desk_btn_text = $(this).text();
    current_popup_source = 'RequestDemo';
    popup_new_title = $(this).closest('.ga_track_soft_list').find('.ga_soft_name').val();
    popup_new_button_name = $(this).text();
    toggle_popup();
});
// featured software non ppc software category page popup :: End

$(document).ready(function() {
    setTimeout(function() {
        if (mobile_popup_init) {
            current_popup = 'mobile_popup';
            current_popup_source = 'MobilePopup';
            $('#' + current_popup).hide();
            toggle_popup();
            ajax_load_popup_form();
            ga_track_timed_popup_trigger();
            Cookies.set('timed_popup', true, {
                expires: 1
            });
        }
    }, 20000);
});
$(document).mouseup(function(e) {
    var container = $("#" + current_popup + ' .popup_desk_auto_scroll_div');
    $.each(container, function(key, value) {
        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
            $("#" + current_popup).fadeOut();
            $("body").removeClass("body_overflow");
        }
    });
});

function update_popup_data() {
    if (current_popup == 'callback_profile') {
        $('#callback_profile .is_mobile_no_valid').val(pro_callback_validNo);
        $('#callback_profile .ssleadpost_countrycode').val(pro_callback_coountry_code);
        $('#callback_profile .profile_callback_mobileno').val(pro_callback_m_no);
    }
    if (current_popup == 'pricing_click_pricing_popup') {
        $('#pricing_click_pricing_popup .popup_desk_title').text('Pricing for ' + popup_new_title);
        $('#pricing_click_pricing_popup .ssleadpost_software_name').val(popup_new_title);
        $('#pricing_click_pricing_popup .soft_id').val($('.software_id').val());
    }
    if (current_popup == 'pricing_section_popup') {
        $('#pricing_section_popup .popup_desk_title').text(popup_new_title);
        $('#pricing_section_popup .form_1_submit').text(popup_new_button_name);
        $('#pricing_section_popup .ssleadpost_software_name').val(popup_new_title);
    }
    if (current_popup == 'get_pricing_popup') {
        $('#get_pricing_popup .popup_desk_title').text(popup_new_title);
        $('#get_pricing_popup .form_1_submit').text(popup_new_button_name);
        $('#get_pricing_popup .ssleadpost_software_name').val(popup_new_title);
    }
    if (current_popup == 'ask_question_popup') {
        $('#ask_question_popup .popup_desk_title').text('Ask a Question for ' + $('.soft_name').val());
        $('#ask_question_popup .ssleadpost_software_name').val($('.soft_name').val());
        $('#ask_question_popup .soft_id').val($('.software_id').val());
        $('#ask_question_popup .comp_id').val($('.company_id').val());
    }
    if (current_popup == 'request_a_demo') {
        $('#request_a_demo .popup_soft_logo_img img').attr('src', popup_new_logo);
        $('#request_a_demo .popup_soft_name').text('Request a demo for ' + popup_new_title);
        $('#request_a_demo .popup_cat_name').text(popup_new_category_name);
        $('#request_a_demo .first_screen_shot').attr('src', popup_new_screenshot);
        $('#request_a_demo .ssleadpost_software_name').val(popup_new_title);
        $('#request_a_demo .form_1_submit').text(popup_new_button_name);
    }
    if (current_popup == 'popular_comp_req_demo') {
        $('#popular_comp_req_demo .popup_desk_title').text(popup_new_title);
        $('#popular_comp_req_demo .form_1_submit').text(popup_new_button_name);
    }
    if (current_popup == 'ouibounce-modal') {
        $('#ouibounce-modal .form_1_submit').text('Get Free Consultation');
    }
    if (current_popup == 'mobile_popup') {
        $('#mobile_popup .form_1_submit').text('Request A Call Back');
    }
    if (current_popup == 'request_demo') {
        $('#request_demo .popup_desk_title').text(popup_new_title);
        $('#request_demo .form_1_submit').text(popup_new_button_name);
        $('#request_demo .ssleadpost_software_name').val(popup_new_title);
    }
    if (current_popup == 'full_page_wrt_rev_app' || current_popup == 'full_page_wrt_rev_service') {
        $('.full_page_wrt_rev_class .popup_wrt_rev_title span').text(popup_new_title);
        $('.full_page_wrt_rev_class .review_popup_comp_name').val(popup_new_title);
        $('.full_page_wrt_rev_class .review_popup_comp_id').val(rev_soft_popup_id);
        $('.full_page_wrt_rev_class #SoftwareReview_comment').attr('placeholder', 'Describe how ' + popup_new_title + ' has impacted your work.');
        $('.full_page_wrt_rev_class #SoftwareReviewAll_pros').attr('placeholder', 'What is most beneficial about ' + popup_new_title + '? What features are most impactful? Is the product easy to use?');

        $('.full_page_wrt_rev_class #SoftwareReviewAll_cons').attr('placeholder', 'What is least beneficial about ' + popup_new_title + '? Any aspects of the product that are difficult to use?');

        $('.full_page_wrt_rev_class #products_evaluated').attr('placeholder', 'Have you tried any other Software/product like ' + popup_new_title + '? Any comparison between the two products?');

        $('.full_page_wrt_rev_class #different_competitor').attr('placeholder', 'In what ways you find ' + popup_new_title + ' performing better than its competitors?');

        $('.full_page_wrt_rev_class #missing_feature').attr('placeholder', 'Any features you find missing in ' + popup_new_title + '?');
        $('.full_page_wrt_rev_class #other_products').attr('placeholder', 'Is their any other Software/product like ' + popup_new_title + ' you tried? Any comparison between the two products?');
        $('.full_page_wrt_rev_class .selected_name').text(popup_new_title);

        $('.full_page_wrt_rev_class .rev_popup_logo_main img').attr('src', rev_soft_popup_logo);
    }
    if (current_popup == 'download_research_report') {
        $(".resource_type").val(current_popup_source);
        $('#download_research_report .buycurrent_categoryid').val($('.categoryid').val());
        $('#download_research_report .buy_page_type').val($('.ga_page_type').val());
        $('#download_research_report .user_email').text($('#download_research_report .email_field').val());
    }
    if (current_popup == 'resources_lead_popup') {
        $('#resources_lead_popup .resource_title').val(resource_btn_clicked.siblings('.button_title').val());
        $('#resources_lead_popup .resource_type').val(resource_btn_clicked.siblings('.button_type').val());
        $('#resources_lead_popup .popup_desk_title').text('Download ' + resource_btn_clicked.siblings('.button_type').val() + ' Now');
        $('#resources_lead_popup .resource_download_link').val(resource_btn_clicked.siblings('.button_link').val());
        $('#resources_lead_popup .resource_software_id').val($('.software_id').val());
        $('#resources_lead_popup .user_email').text($('#resources_lead_popup .email_field').val());
        $('#resources_lead_popup .source_url').val('/' + $('.page_url').val());
        $('#resources_lead_popup .resources_sent_to_text').text('Your ' + resource_btn_clicked.siblings('.button_type').val() + ' has been sent to your mailbox.');
    }
    if (current_popup == 'useful_review_popup') {
        $('#useful_review_popup .form_1_submit').html('Mark Useful <div class="like_icon_button"></div>');
    }
}

function toggle_popup(data) {
    if (current_popup != 'full_page_search') {
        $('.active_popup').fadeOut().removeClass('active_popup');
        $('.popup_btn_disable').removeClass('popup_btn_disable');
        $("#" + current_popup).addClass('active_popup').fadeIn();
        $("body").addClass("body_overflow");
    }
    update_popup_data();
}
function button_name_and_update_hiden_inout() {
    setTimeout(function() {
        update_popup_data();
    }, 10);
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,9}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

$(document).on("click", ".active_popup form button", function(e) {
    var next = true;
    if (current_popup == 'claim_profile') {
        $('.claim_soft_id').val($('.software_id').val());
        $('.claim_comp_id').val($('.company_id').val());

        if ($("#GetListed_email").val() == '') {
            $("#emailerr").text('Official Email cannot be blank.').show();
            next = 0;
        }
        if ($("#GetListed_email").val()) {
            var x = $("#GetListed_email").val();
            var z = x.split('@').pop();
            if (!isValidEmailAddress(x)) {
                $("#emailerr").text('Official Email is not a valid email address').show();
                next = 0;
            } else if (z == 'gmail.com' || z == 'yahoo.com' || z == 'hotmail.com' || z == 'mailinator.com' || z == 'yahoomail.com' || z == 'yahoo.in' || z == 'ymail.com' || z == 'rediffmail.com' || z == 'live.com') {
                $("#emailerr").text('Please enter valid Email ID with company domain e,g john@apple.com').show();
                next = 0;
            }
        }
    }

    if ($(this).closest('form').find('.ssleadpost_currentform').val() == 'firstform') {
        var phonenumber = $(this).closest('form').find('.ssintlTelInput')
          , errorMsg = $(this).closest('form').find('.is_mobile_no_valid')
          , validMsg = $(this).closest('form').find('.is_mobile_no_valid');

        phonenumber_is_valid(phonenumber, errorMsg, validMsg);
    }

    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        $('.utm_source_hiden').val($('.utm_source').val());
        var form = $(this).closest('form').serialize();
        if (next) {
            big_popup_ajax(form);
        }
    });
});
// sidebar callback popup submit
$(document).on("click", "#sidebar_callback form button", function(e) {
    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        current_popup = 'sidebar_callback';
        $('.utm_source_hiden').val($('.utm_source').val());
        var form = $(this).closest('form').serialize();
        var next = true;
        if (next) {
            big_popup_ajax(form);
        }
    });
});
// end sidebar callback popup submit

/*Lquote page form*/
$(document).on("click", ".all_form_main form button", function(e) {

    if ($(this).closest('form').find('.ssleadpost_currentform').val() == 'firstform') {
        var phonenumber = $(this).closest('form').find('.ssintlTelInput')
          , errorMsg = $(this).closest('form').find('.is_mobile_no_valid')
          , validMsg = $(this).closest('form').find('.is_mobile_no_valid');

        phonenumber_is_valid(phonenumber, errorMsg, validMsg);
    }

    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        var country_code = $('.new_landing_form .iti__selected-dial-code').html();
        $(this).closest('.new_landing_form').find('#new_landing_countrycode').val(country_code);
        var form = $(this).closest('form').serialize();
        big_popup_ajax(form);
    });
});
/*End Lquote page form*/
var useful_soft_id;
var useful_review_id;
var useful_thisclick;

function big_popup_ajax(form) {
    $inputs = $('#' + current_popup + ' form').find("input, select, button, textarea");
    $form_button = $('#' + current_popup + " .popup_desk_submit_btn");
    if (current_popup == 'calling_form_main') {
        $inputs = $('.' + current_popup + ' form').find("input, select, button, textarea");
        $form_button = $('.' + current_popup + " .popup_desk_submit_btn");
    }
    var source_url = hostUrl + "/ssleadsave/savelead"
    if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceIndustry' || $('.ga_page_type').val() == 'ServiceCountry' || $('.ga_page_type').val() == 'Service_Profile' || current_popup == 'service_popup_homepage') {
        source_url = hostUrl + "/serviceleadsave/savelead";
    }
    if (current_popup == 'claim_profile') {
        source_url = hostUrl + "/profileclaimed/getuserdata";
        if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceCountry' || $('.ga_page_type').val() == 'Service_Profile' || $('.ga_page_type').val() == 'Comp_Profile') {
            form = form + '&page_type=servicepage';
        }

    }
    if (current_popup == 'price_estimator_popup') {
        source_url = hostUrl + "/staticpage/priceestimatormailsend";
    }
    if (current_popup == 'consultant_partner_modal') {
        source_url = hostUrl + "/site/partnermailsendnew";
    }
    if (current_popup == 'resources_lead_popup') {
        source_url = baseUrl + '/profileresources/savelead';
    }
    if (current_popup == 'download_research_report') {
        //source_url = baseUrl + '/singleview/downloadbuyersguide';
        source_url = countryUrl + '/singleview/downloadbuyersguide';
    }
    if (current_popup == 'get_started_contact_popup') {
        source_url = baseUrl + '/singleview/pricinglead';
    }
    if (current_popup == 'send_requirement_popup') {
        form = form + '&' + $('#firm_requirements_tab form').serialize();
    }
    if (current_popup == 'full_page_wrt_rev' || current_popup == 'full_page_wrt_rev_service' || current_popup == 'full_page_wrt_rev_app') {
        source_url = hostUrl + "/commonwritereview/savereview"
    }

    $.ajax({
        type: "POST",
        url: source_url,
        dataType: "text",
        data: form,
        beforeSend: function() {
            $inputs.prop('disabled', !0).addClass('disabled');
            if (current_popup != 'category_mobile_no_popup') {
                $form_button.text("Submiting...");
            }
        },
        success: function(response) {
            var current_form = "";
            if ((current_popup == 'ouibounce-modal') || (current_popup == 'request_callback')) {
                if (($('.ga_page_type').val() == 'Service_Profile') || ($('.ga_page_type').val() == 'SerCategory') || ($('.ga_page_type').val() == 'SerCity') || ($('.ga_page_type').val() == 'ServiceCountry')) {
                    $(document).on('submit', '.popup_desk_form_3', function() {
                        $('#' + current_popup + ' .popup_desk_title').hide();
                        $('#' + current_popup + ' .popup_desk_sub_title').hide();
                        $('#' + current_popup + ' .req_callback_client_img_div').hide();
                    });
                } else {
                    $(document).on('submit', '.popup_desk_form_4', function() {
                        $('#' + current_popup + ' .popup_desk_title').hide();
                        $('#' + current_popup + ' .popup_desk_sub_title').hide();
                        $('#' + current_popup + ' .req_callback_client_img_div').hide();
                    });
                }
            }
            if (current_popup == 'calling_form_main') {
                current_form = $('.' + current_popup + ' form');
                $('.call_popup_main .popup_desk_auto_scroll_div').hide();
                $('.call_popup_main .call_thanks_msg').show();
                ga_form_submit_event();
            }
            if (current_popup == 'full_page_wrt_rev' || current_popup == 'full_page_wrt_rev_service' || current_popup == 'full_page_wrt_rev_app') {
                $('#' + current_popup + " form").each(function() {
                    if ($(this).css('display') != 'none') {
                        current_form = $(this);
                    }
                });
                $('.full_page_wrt_rev_class .active_review_step').removeClass('active_review_step').next().addClass('active_review_step');
            }
            if (current_popup == 'useful_review_popup') {
                like_unlike_useful_review(useful_soft_id, useful_review_id, useful_thisclick);
                ga_track_review_useful_like();
            }
            if (current_popup == 'claim_profile') {
                response = response.replace(/(\r\n|\n|\r)/gm, "");
                if (response != "ERROR") {
                    $('#claim_profile form').hide().next().fadeIn('slow');
                }
            }
            if (current_popup == 'form_main_div_first_fold') {

                if (response != "ERROR") {
                    $('#landing_req_callback_f1 form').hide().next().fadeIn('slow');
                }
                responseObj = jQuery.parseJSON(response);
                if (responseObj.lead_save_status) {// window.location.href = hostUrl+"/"+responseObj.lquote_url;
                }
            }
            responseObj = jQuery.parseJSON(response);
            if (current_popup == 'price_estimator_popup') {
                responseObj = jQuery.parseJSON(response);
                if (responseObj.status != "ERROR") {

                    $('#' + current_popup + " form").each(function() {
                        if ($(this).css('display') != 'none') {
                            current_form = $(this);
                        }
                    });
                    current_form.hide().next().fadeIn('slow');
                } else {
                    $form_button.text("Submit");
                    $inputs.prop('disabled', !1).removeClass('disabled');
                    alert('Please check your network connection try again!');
                }
            } else if (responseObj.lead_save_status) {

                $('#' + current_popup + " .ssleadpost_lead_id").val(responseObj.lead_id);

                $('#' + current_popup + " form").each(function() {
                    if ($(this).css('display') != 'none') {
                        current_form = $(this);
                    }
                });

                if (current_form.find('.ssleadpost_currentform').val() == 'firstform') {
                    ga_form_submit_event();
                    if (current_form.find('.otp_send').val() == '1') {
                        clearInterval(timerId);
                        setTimeout(function() {
                            otp_timer(current_form, 60);
                        }, 10)
                    }
                } else {
                    clearInterval(timerId);
                }
                current_form.hide().next().fadeIn('slow');
                $form_button.text("Submit");
                $inputs.prop('disabled', !1).removeClass('disabled');
            } else {
                $('#' + current_popup + " form").each(function() {
                    if ($(this).css('display') != 'none') {
                        current_form = $(this);
                    }
                });
                if (current_form.find('.ssleadpost_currentform').val() == 'otpform') {
                    current_form.find('.otp_error_text').show();
                } else {
                    alert('Please check your network connection try again!');
                }
                $form_button.text("Submit");
                $inputs.prop('disabled', !1).removeClass('disabled');
            }
            $('.other_form_pointer').prop("disabled", 1);
            current_form.next().find('.otp_text .mobile_no').html(current_form.find('.ssintlTelInput').val());
            if (current_popup == 'send_requirement_popup') {
                $('.firm_requirement_form').fadeOut();
                $('#send_requirement_popup').hide();
                $('.evaluation_popup_thanks').show();
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert('Please check your network connection try again!');
            $form_button.text("Submit");
            $inputs.prop('disabled', !1).removeClass('disabled');
        }
    })
}

function ga_form_submit_event() {
    if (current_popup == 'callback_profile') {
        ga_track_reqcallback_sidebar($('.soft_name').val())
    }
    if (current_popup == 'request_callback') {
        if (reqcall_position == 'header') {
            ga_track_rc_sub('Header');
        }
        if (reqcall_position == 'sidebar') {
            ga_track_rc_sub('Sidebar');
        }
        if (reqcall_position == 'Getfreeadvice') {
            ga_track_rc_free_advice();
        }
    }
    if (current_popup == 'ouibounce-modal') {
        ga_track_exit_intent_sub();
    }
    if (current_popup == 'mobile_popup') {
        ga_track_timed_popup_sub();
    }
    if (current_popup == 'sidebar_callback' || current_popup == 'alternatives_callbackform') {
        if ($('.ga_page_type').val() == 'Software') {
            ga_track_reqcallback_sidebar($('.soft_name').val())
        } else if ($('.ga_page_type').val() == 'Service_Profile') {
            ga_track_reqcallback_sidebar($('.soft_name').val())
        } else {
            ga_track_reqcallback_sidebar($('.ga_page_type').val())
        }
    }
    if (current_popup == 'request_demo') {
        if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceIndustry' || $('.ga_page_type').val() == 'ServiceCountry') {
            if (popup_new_button_name == 'Free Expert Advice') {
                ga_track_nfc_sub();
            } else {
                ga_track_nrd_sub();
            }
        } else {
            if (popup_new_button_name == 'Free Consultation') {
                ga_track_nfc_sub();
            } else {
                ga_track_nrd_sub();
            }
        }
    }
    if (current_popup == 'calling_form_main') {
        gtag('event', 'submit', {
            'event_category': 'CallWidget',
            'event_label': window.location.href
        });
        console.log('event', 'submit', {
            'event_category': 'CallWidget',
            'event_label': window.location.href
        });
    }
    if (current_popup == 'pricing_click_pricing_popup') {
        ga_track_pricing_click();
    }
    if (current_popup == 'ask_question_popup') {
        ga_track_askque_overallrev();
    }
    if (current_popup == 'top_soft_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'pricing_section_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'also_visited_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'sccreenshot_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'freq_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'also_like_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'compare_main_get_pricing_popup') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'request_a_demo') {
        if (popup_new_button_name == 'Free Consultation') {
            ga_track_nfc_sub();
        } else {
            ga_track_nrd_sub();
        }
    }
    if (current_popup == 'freq_request_a_demo') {
        if (popup_new_button_name == 'Free Consultation') {
            ga_track_nfc_sub();
        } else {
            ga_track_nrd_sub();
        }
    }
    if (current_popup == 'screen_request_a_demo') {
        if (popup_new_button_name == 'Free Consultation') {
            ga_track_nfc_sub();
        } else {
            ga_track_nrd_sub();
        }
    }
    if (current_popup == 'popular_comp_req_demo') {
        if (popup_new_button_name == 'Free Consultation') {
            ga_track_nfc_sub();
        } else {
            ga_track_nrd_sub();
        }
    }
    if (current_popup == 'software_popup_homepage') {
        if (popup_new_button_name == 'Pricing') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
    if (current_popup == 'service_popup_homepage') {
        if (popup_new_button_name == 'Free Consultation') {
            ga_track_np_sub();
        } else {
            ga_track_ngq_sub();
        }
    }
}
// popup js END

// ajax form popup
function get_form_popup(data) {
    var success_response = jQuery.parseJSON(data.response);
    $('body').append(success_response);
    $(data.selector + " .ssleadpost_source").val(current_popup_source);
    $(data.selector + " .ssleadpost_categoryid").val(current_categoryid);
    $(data.selector).find('.ssleadpost_software_name').val(current_popup_soft_name);
    init_intl_tel_input(data.selector);
}

function form_popup_ajax_fail(data) {
    $(data.selector + ' .ajax_fail_div').show();
    $(data.selector + ' .ajax_loader_img').hide();
    $(data.selector + ' .ajax_reload_btn').addClass('ajax_load_popup_form');
}

$(document).on("click", ".ajax_load_popup_form", function() {
    $(this).removeClass("ajax_load_popup_form");
    ajax_load_popup_form();
});
function ajax_load_popup_form() {
    let ajax_data;
    var ajax_view_url = baseUrl + "/singleview/getajaxdata";
    var current_popup_id = '#' + $('.active_popup').attr('id');
    $(current_popup_id + ' .ajax_loader_img').show();
    $(current_popup_id + ' .ajax_fail_div').hide();
    if (current_popup == 'request_callback') {
        ajax_data = "view=/layouts_new/popups/requestcallback";
        ajax_view_url = baseUrl + "/ajax/requestcallback";
        current_popup_id = '#request_callback';
    } else if (current_popup == 'ouibounce-modal') {
        ajax_data = "view=/layouts_new/popups/exitintent_popup";
        ajax_view_url = baseUrl + "/ajax/exitintent";
        current_popup_id = '#ouibounce-modal';
    } else if (current_popup == 'loginpopup') {
        ajax_data = "view=/layouts_new/popups/login_popup";
        ajax_view_url = baseUrl + "/ajax/loginpopup";
        current_popup_id = '#loginpopup';
    } else if (current_popup == 'mobile_popup') {
        ajax_data = "view=/layouts_new/popups/mobile_popup";
        ajax_view_url = baseUrl + "/ajax/mobilepopup";
        current_popup_id = '#mobile_popup';
    } else if (current_popup == 'request_demo') {
        ajax_data = "view=/layouts_new/popups/requestdemo";
        ajax_view_url = baseUrl + "/ajax/requestdemo";
        current_popup_id = '#request_demo';
    } else if (current_popup == 'callback_profile') {
        ajax_data = "view=/layouts_new/popups/profile_callback_new";
        ajax_view_url = baseUrl + "/ajax/profilecallback";
        current_popup_id = '#callback_profile';
    } else if (current_popup == 'claim_profile') {
        ajax_data = "view=/layouts_new/popups/claim_profile_popup";
        ajax_view_url = baseUrl + "/ajax/claimprofile";
        current_popup_id = '#claim_profile';
    } else if (current_popup == 'pricing_click_pricing_popup') {
        ajax_data = "view=/layouts_new/popups/pricing_popup";
        ajax_view_url = baseUrl + "/ajax/pricingprofile";
        current_popup_id = '#pricing_click_pricing_popup';
    } else if (current_popup == 'request_a_demo') {
        ajax_data = "view=/layouts_new/popups/request_a_demo";
        ajax_view_url = baseUrl + "/ajax/requestdemoprofile";
        current_popup_id = '#request_a_demo';
    } else if (current_popup == 'useful_review_popup') {
        ajax_data = "view=/layouts_new/popups/useful_review_popup";
        ajax_view_url = baseUrl + "/ajax/usefullreview";
        current_popup_id = '#useful_review_popup';
    } else if (current_popup == 'resources_lead_popup') {
        ajax_data = "view=/layouts_new/popups/resources_lead_popup";
        ajax_view_url = baseUrl + "/ajax/resourcepopup";
        current_popup_id = '#resources_lead_popup';
    } else if (current_popup == 'ask_question_popup') {
        ajax_data = "view=/layouts_new/popups/ask_question_popup";
        ajax_view_url = baseUrl + "/ajax/askquestion";
        current_popup_id = '#ask_question_popup';
    } else if (current_popup == 'get_pricing_popup') {
        ajax_data = "view=/layouts_new/popups/get_pricing_popup";
        ajax_view_url = baseUrl + "/ajax/getpricing";
        current_popup_id = '#get_pricing_popup';
    } else if (current_popup == 'price_estimator_popup') {
        ajax_data = "view=/layouts_new/popups/vendors_pricestimatore_popup";
        ajax_view_url = baseUrl + "/ajax/registervendors";
        current_popup_id = '#price_estimator_popup';
    } else if (current_popup == 'download_research_report') {
        ajax_data = "view=/layouts_new/popups/download_research_report";
        ajax_view_url = baseUrl + "/ajax/researchreport";
        current_popup_id = '#download_research_report';
    } else if (current_popup == 'category_mobile_no_popup') {
        ajax_data = "view=category_mobile_no_popup_open";
    } else if (current_popup == 'category_mobile_no_popup_non_ppc') {
        ajax_data = "view=category_mobile_no_popup_open";
    } else if (current_popup == 'full_page_wrt_rev') {
        ajax_data = "view=full_page_wrt_rev_m";
    } else if (current_popup == 'full_page_wrt_rev_app') {
        ajax_data = "view=/layouts_new/popups/ajax_review_form_app";
        ajax_view_url = baseUrl + "/ajax/writereviewpopup";
        current_popup_id = '#full_page_wrt_rev_app';
    } else if (current_popup == 'full_page_wrt_rev_service') {
        ajax_data = "view=/layouts_new/popups/ajax_review_form_service";
        ajax_view_url = baseUrl + "/ajax/writereviewpopupservices";
        current_popup_id = '#full_page_wrt_rev_service';
    } else {
        ajax_data = "view=desk_ajax_form_popup_all";
    }
    var data_form_popup = {
        success: get_form_popup,
        error: form_popup_ajax_fail,
        url: ajax_view_url,
        data: ajax_data,
        selector: current_popup_id,
    };
    if (!find_in_array_function(popup_ajax_complet, current_popup_id)) {
        ajax_fire(data_form_popup);
        if (!popup_ajax_complet.find(find_function)) {
            popup_ajax_complet.push(current_popup_id)
        }
        function find_function(value, index, array) {
            return value == current_popup_id;
        }
    }
}
// end ajax form popup 

/* find in array function */
function find_in_array_function(array, find_val) {
    if (array.find(array_find)) {
        return true;
    } else {
        return false;
    }
    function array_find(value, index, array) {
        return value == find_val;
    }
}
/* find in array function */

// ajax form accordion
var is_accordion_loaded = false;
function get_form_accordion(data) {
    var success_response = jQuery.parseJSON(data.response);
    $(data.selector).closest(".popup_new_append").append(success_response);

    init_intl_tel_input('.popup_small_new');
    $(".popup_small_new").attr('id', accordian_popup_id);

    is_accordion_loaded = true;

    $(".popup_small_new .popup_small_form_one .popup_small_submit_btn").text(ajax_form_accordion_btn_name);
    var popup_countrycode = 0;
    popup_countrycode = $('.popup_small_form_one div.iti__selected-dial-code').text();
    $('.popup_small_form_one .popup_countrycode').val(popup_countrycode);
    $('.popup_small_form_one div.iti__selected-dial-code').bind("DOMSubtreeModified", function() {
        popup_countrycode = $('.popup_small_form_one div.iti__selected-dial-code').text();
        $('.popup_small_form_one .popup_countrycode').val(popup_countrycode)
    });
    change_field(acordian_cat_id);
    if ($('#currentip').val() == 'IN' && $('.categoryid').val() == '480') {
        $('.popup_small_new .iti__flag-container').addClass('disable_flag');
    }
}

function form_accordion_ajax_fail(data) {
    $('.popup_small_new .ajax_fail_div').show();
    $('.popup_small_new .ajax_loader_img').hide();
    $('.popup_small_new .ajax_reload_btn').addClass('ajax_form_accordion');
}

var accordian_popup_id = 'popup_get_quote';
$(document).on("click", ".ajax_form_accordion", function() {

    if ($.trim($(this).text()) == "Free Demo" || $.trim($(this).text()) == "Free Expert Advice") {
        accordian_popup_id = 'popup_request_demo';
    }
    var accordian_view = "view=/layouts_new/popups/accordian_popup";
    if ($('.categoryid').val() == 480 && ga_page_type == 'Category' && $('#currentip').val() == 'IN') {
        accordian_view = "view=/layouts_new/popups/accordian_popup_otp";
    }
    if (!is_accordion_loaded) {
        $('.ajax_form_accordion').removeClass("ajax_form_accordion");
        $('.popup_small_new .ajax_loader_img').show();
        $('.popup_small_new .ajax_fail_div').hide();
        ajax_view_url = baseUrl + "/ajax/accordian";
        var data_form_accordion = {
            success: get_form_accordion,
            error: form_accordion_ajax_fail,
            url: ajax_view_url,
            data: accordian_view,
            selector: $(this)
        };
        ajax_fire(data_form_accordion);
    }
});
// end ajax form accordion

// View More Software
let loadmore_software_count = parseInt($(".soft_startlimit").val());
if (!loadmore_software_count || loadmore_software_count == 0) {
    loadmore_software_count = 20;
}
function get_soft_list(data) {
    if ($('.ga_page_type').val() == 'AppCategory') {
        $(".cat_view_more_btn").removeAttr('disabled', 'disabled').text('View More Mobile apps');
    } else if ($('.ga_page_type').val() == 'SerCategory' || $('.ga_page_type').val() == 'SerCity' || $('.ga_page_type').val() == 'ServiceCountry') {
        $(".cat_view_more_btn").removeAttr('disabled', 'disabled').text('View More Services');
    } else {
        $(".cat_view_more_btn").removeAttr('disabled', 'disabled').text('View More Products');
    }
    var success_response = jQuery.parseJSON(data.response);
    if ($.trim(success_response)) {
        $(".software_list_append").append(success_response);
        $(".soft_startlimit").val(parseInt($(".soft_startlimit").val()) + loadmore_software_count);
    } else {
        $(".cat_view_more_btn").hide();
    }
}

function get_soft_list_ajax_fail(data) {
    $(".cat_view_more_btn").removeAttr('disabled').removeClass('disabled');
}
let IsSoftwareloade = false;
$(document).on("click", ".old_filter_view_more .cat_view_more_btn", function() {
    let newdesignval
    if ($('.new_design').val() == 'cat_new_design') {
        newdesignval = '&newdesign=' + true;
    }
    if (IsSoftwareloade === false) {
        var type = '';
        var slug = $(".cat_view_more_btn").val();

        if ($('.ga_page_type').val() == 'Alternative') {
            var url = baseUrl + '/softwarealternatives/viewmorealternatives';
        } else if ($('.ga_page_type').val() == 'FreeSoftware') {
            var url = baseUrl + '/softwarefreeopensource/viewmorefree'
        } else if ($('.ga_page_type').val() == 'Industry-Page') {
            var url = baseUrl + '/softwareindustry/viewmoreindustry'
        } else if ($('.ga_page_type').val() == 'Country-Page') {
            var url = baseUrl + '/softwarecountry/viewmorecountry'
        } else if ($('.ga_page_type').val() == 'City-Page') {
            var url = baseUrl + '/softwarecity/viewmorecity'
        } else if ($('.ga_page_type').val() == 'AppCategory') {
            var url = baseUrl + '/softwaremobilecategory/viewmoremobile'
        } else if ($('.ga_page_type').val() == 'SerCategory') {
            var url = baseUrl + '/servicemaincategory/viewmoremaincategoryservice'
        } else if ($('.ga_page_type').val() == 'SerCity') {
            var url = baseUrl + '/servicecity/viewmoreservicecity'
        } else if ($('.ga_page_type').val() == 'ServiceCountry') {
            var url = baseUrl + '/servicecountry/viewmoreservicecountry'
        } else {
            var url = baseUrl + '/softwaremaincategory/viewmoremaincategory';
        }
        $('.popup_small_new .ajax_loader_img').show();
        $('.popup_small_new .ajax_fail_div').hide();
        var t = $(".soft_startlimit").val()
          , e = $(".categoryid").val()
          , a = $(".ga_page_name").val().toLowerCase()
          , b = $(".software_id").val()
          , data_form_accordion = {
            success: get_soft_list,
            error: get_soft_list_ajax_fail,
            url: url,
            data: "data_json=" + encodeURIComponent(JSON.stringify($('.send_on_viewmore').val())) + "&type=" + type + "&categoryid=" + e + "&startlimit=" + t + "&slug=" + a + "&softwareid=" + b + "&software=" + slug + newdesignval,
        };
        var isloadmore = "isloadmore";
        ajax_fire(data_form_accordion, isloadmore);
        $(".cat_view_more_btn").attr('disabled', 'disabled').html('<img src="/assets2/singleview/assets/icon/ajax-loader_new.svg" style="height:20px;width:50px" />');
    } else {
        let shownext = Number($('.count_of_listing .count_of_showing').text()) + Number($('.page_software_count').val());
        $('.count_of_showing').text(shownext);
        let isLast = false;
        if ($('.count_in').length <= shownext) {
            shownext = $('.count_in').length - 1;
            isLast = true;
            $('.count_of_showing').text($('.count_in').length);
        }
        HideextrasotwareAfterajax(shownext, isLast)
    }
});
// end View More Software

//Disable button if user input <script tag
$(document).on('input keydown keyup mousedown mouseup select contextmenu drop', 'input,textarea', function(e) {
    var isScript = false;
    $(this).closest('form').find('input').each(function() {
        var regex_script_tag = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|(?:\W*s\W*c\W*r\W*i\W*p\W*t)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])[\s\0]*=/gi.test(this.value);
        if (regex_script_tag) {
            isScript = true;
        }
    });
    $(this).closest('form').find('textarea').each(function() {
        var regex_script_tag = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|(?:\W*s\W*c\W*r\W*i\W*p\W*t)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])[\s\0]*=/gi.test(this.value);
        if (regex_script_tag) {
            isScript = true;
        }
    });
    if (isScript) {
        $(this).closest('form').find(':submit').prop("disabled", !0).addClass('disabled');
    } else {
        $(this).closest('form').find(':submit').prop("disabled", !1).removeClass('disabled');
    }
});
//End Disable button if user input <script tag

/*Disallow copy text in tel input*/
$(document).on('paste', 'input[type="tel"]', function(event) {
    if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
        event.preventDefault();
    }
});
$(document).on('keypress', 'input[type="tel"]', function(event) {
    return event.charCode >= 48 && event.charCode <= 57;
});
/*End Disallow copy text in tel input*/

// Event snippet for hrsoftlead conversion pageIn your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function lead_track_one_gtag_report_conversion(url) {
    var callback = function() {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-665064630/KUD1CIT02cQBELapkL0C',
        'event_callback': callback
    });
    return false;
}

// Event snippet for atssoftlead conversion pageIn your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function lead_track_two_gtag_report_conversion(url) {
    var callback = function() {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-665064630/cKGtCKuV08UBELapkL0C',
        'event_callback': callback
    });
    return false;
}

// mobile view header search option 
//Search Input hide show

$(document).on("click", ".hamburger", function(event) {
    $('#mobile_view_sidebar').show();
    $(".nav_bar").css('transform', 'translate3d(0, 0, 0)');
    $('body').addClass('body_overflow');
});
$(document).on("click", ".sidebar_backdrop, .request_button_mobile_header", function(e) {
    $('#mobile_view_sidebar').hide();
    $(".nav_bar").css('transform', '');
    $('body').removeClass('body_overflow');
});
//Sidebar Menu Category toggle
$(document).on("click", ".menu_title_btn", function(e) {
    if ($(this).hasClass('menu_title_active')) {
        $(this).removeClass('menu_title_active menu-minus-sign').addClass('menu-plus-sign').siblings('.sidebar_menu_content').slideUp(200);
    } else {
        $('.menu_title_active').removeClass('menu_title_active menu-minus-sign').addClass('menu-plus-sign');
        $('.sidebar_menu_content').slideUp(200);
        $(this).addClass('menu_title_active menu-minus-sign').removeClass('menu-plus-sign').siblings('.sidebar_menu_content').slideDown(200);
    }
});
//End Sidebar Menu Category toggle
$(document).on("click", ".main_menu_title_btn", function(e) {
    if ($(this).hasClass('main_menu_title_active')) {
        $(this).removeClass('main_menu_title_active menu-minus-sign').addClass('menu-plus-sign').siblings('.main_sidebar_menu_content').slideUp(200);
    } else {
        $('.main_menu_title_active').removeClass('main_menu_title_active menu-minus-sign').addClass('menu-plus-sign');
        $('.main_sidebar_menu_content').slideUp(200);
        $(this).addClass('main_menu_title_active menu-minus-sign').removeClass('menu-plus-sign').siblings('.main_sidebar_menu_content').slideDown(200);
    }
});

/*Description content*/
$(".cat_disc_div table").wrap('<div class="table_div"></div>');
/*End Description content*/

// count of software list js 
$(document).ready(function() {
    var page_no_is = $('.page_no').val()
      , total_div_count = $('.count_in').length
      , no_list_in_page = 25;
    if ($('.ga_page_type').val() == 'City-Page' && $('.page_ip').val() == 'india') {
        no_list_in_page = $(".page_software_count").val();
    }
    if ($('.ga_page_type').val() == 'Alternative') {
        no_list_in_page = $(".page_software_count").val();
    }
    if ($('.ga_page_type').val() == 'Category') {
        no_list_in_page = $(".page_software_count").val();
    }
    if ($('.ga_page_type').val() == 'Industry-Page') {
        no_list_in_page = $(".page_software_count").val();
    }

    if (page_no_is) {
        var showing_from = (page_no_is - 1) * no_list_in_page;
        var showing_to = showing_from + total_div_count;
        $('.starting_count').text(showing_from + 1);
        $('.count_of_showing').text(showing_to);
    } else {
        $('.starting_count').text('1');
        $('.count_of_showing').text(total_div_count);
    }
});
// end count of software list js 

$("#login_open_dropdown").click(function() {
    $('.btn-hide-service').hide();
    $('#cat_sub_menu').removeClass("dropulmenu");
});

// new search popup focus input when open popup
$(document).on('click', '#full_page_search_open', function(e) {
    $('#search_new_on_sccroll').focus();
})
// new search popup focus input when open popup end

// scroll tab when more then 3 in mobile
//Hide left at start
$('#prev_nav').hide();

//left arrow controls
$('#prev_nav').click(function() {
    $('#next_nav').show();
    $("#elem").animate({
        scrollLeft: "-=100px"
    }, "normal", function() {
        if ($('#elem').scrollLeft() <= 0) {
            $('#prev_nav').hide();
        }
    });
});

//right arrow controls
$('#next_nav').click(function() {
    $('#prev_nav').show();
    $("#elem").animate({
        scrollLeft: "+=100px"
    }, "normal", function() {
        if ($('#elem')[0].scrollWidth - $('#elem').scrollLeft() == $('#elem').width()) {
            $("#next_nav").hide();
        }
    });
});
// scroll tab when more then 3 in mobile end

// new header related category
$('.show_less_rel_cat').hide();
$(document).on('click', '.show_more_rel_cat', function() {
    $('.hiden_rel_cat').removeClass('rel_cat_dis_none');
    $('.show_less_rel_cat').show();
    $('.show_more_rel_cat').hide();
})
$(document).on('click', '.show_less_rel_cat', function() {
    $('.hiden_rel_cat').addClass('rel_cat_dis_none');
    $('.show_more_rel_cat').show();
    $('.show_less_rel_cat').hide();
})
// new header related category

// on press enter go to search page header

$(document).on("keyup", '#search', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $(this).closest('form').submit();
    }
});

/*category search filter dropdown js start*/

$(".search_input").on("click", function() {
    var current_dropdown = $(this).siblings(".search_list_main_div");
    $(".search_list_main_div").not(current_dropdown).hide();
    current_dropdown.toggle();
    return false;
});

var deployment_search_filter_array = new Array();
var device_supported_filter_array = new Array();
var buisness_search_filter_array = new Array();
var language_supported_filter_array = new Array();
var deployment_input_value_added = false;
var device_input_value_added = false;
var buisness_input_value_added = false;
var language_input_value_added = false;
// $(".selected_checkbox_input").change(function(){
$(document).on('change', '.selected_checkbox_input', function() {
    var current_checked = $(this).closest('.selected_checkbox_input').val();
    if ($(this).closest('.dropdown_search_main').find('.search_input').hasClass('deployment_search_filter')) {
        if ($(this).prop('checked')) {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !deployment_input_value_added) {
                var diployment_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                diployment_val = diployment_val.split(',');
                deployment_search_filter_array = [].concat(deployment_search_filter_array, diployment_val);
            }
            deployment_search_filter_array.push(current_checked);
            $(this).closest('.dropdown_search_main').find('.search_input').val(deployment_search_filter_array);
        } else {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !deployment_input_value_added) {
                var diployment_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                diployment_val = diployment_val.split(',');
                deployment_search_filter_array = [].concat(deployment_search_filter_array, diployment_val);
            }
            var deployment_index = deployment_search_filter_array.indexOf(current_checked);
            if (deployment_index > -1) {
                deployment_search_filter_array.splice(deployment_index, 1);
            }
            $(this).closest('.dropdown_search_main').find('.search_input').val(deployment_search_filter_array);
        }
        deployment_input_value_added = true;
    }
    if ($(this).closest('.dropdown_search_main').find('.search_input').hasClass('device_supported_filter')) {
        if ($(this).prop('checked')) {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !device_input_value_added) {
                var device_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                device_supported_val = device_supported_val.split(',');
                device_supported_filter_array = [].concat(device_supported_filter_array, device_supported_val);
            }
            device_supported_filter_array.push(current_checked);
            $(this).closest('.dropdown_search_main').find('.search_input').val(device_supported_filter_array);
        } else {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !device_input_value_added) {
                var device_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                device_supported_val = device_supported_val.split(',');
                device_supported_filter_array = [].concat(device_supported_filter_array, device_supported_val);
            }
            var device_index = device_supported_filter_array.indexOf(current_checked);
            if (device_index > -1) {
                device_supported_filter_array.splice(device_index, 1);
            }
            $(this).closest('.dropdown_search_main').find('.search_input').val(device_supported_filter_array);
        }
        device_input_value_added = true;
    }
    if ($(this).closest('.dropdown_search_main').find('.search_input').hasClass('buisness_search_filter')) {
        if ($(this).prop('checked')) {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !buisness_input_value_added) {
                var buisness_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                buisness_supported_val = buisness_supported_val.split(',');
                buisness_search_filter_array = [].concat(buisness_search_filter_array, buisness_supported_val);
            }
            buisness_search_filter_array.push(current_checked);
            $(this).closest('.dropdown_search_main').find('.search_input').val(buisness_search_filter_array);
        } else {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !buisness_input_value_added) {
                var buisness_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                buisness_supported_val = buisness_supported_val.split(',');
                buisness_search_filter_array = [].concat(buisness_search_filter_array, buisness_supported_val);
            }
            var buisness_index = buisness_search_filter_array.indexOf(current_checked);
            if (buisness_index > -1) {
                buisness_search_filter_array.splice(buisness_index, 1);
            }
            $(this).closest('.dropdown_search_main').find('.search_input').val(buisness_search_filter_array);
        }
        buisness_input_value_added = true;
    }
    if ($(this).closest('.dropdown_search_main').find('.search_input').hasClass('language_supported_filter')) {
        if ($(this).prop('checked')) {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !language_input_value_added) {
                var language_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                language_supported_val = language_supported_val.split(',');
                language_supported_filter_array = [].concat(language_supported_filter_array, language_supported_val);
            }
            language_supported_filter_array.push(current_checked);
            $(this).closest('.dropdown_search_main').find('.search_input').val(language_supported_filter_array);
        } else {
            if ($(this).closest('.dropdown_search_main').find('.search_input').val() != '' && !language_input_value_added) {
                var language_supported_val = $(this).closest('.dropdown_search_main').find('.search_input').val();
                language_supported_val = language_supported_val.split(',');
                language_supported_filter_array = [].concat(language_supported_filter_array, language_supported_val);
            }
            var language_index = language_supported_filter_array.indexOf(current_checked);
            if (language_index > -1) {
                language_supported_filter_array.splice(language_index, 1);
            }
            $(this).closest('.dropdown_search_main').find('.search_input').val(language_supported_filter_array);
        }
        language_input_value_added = true;
    }
});

$(document).on("click", ".search_filter_dropdown_inner", function(e) {
    var sort_checked = $(this).find('.selected_checkbox_input').val();
    $('.sort_by_search').val(sort_checked);

});

var t = 0
  , e = $(".categoryid").val();
$(document).on("click", ".apply_input_button_div_btn", function(event) {
    event.preventDefault();
    $('#filter_search').val('');
    $('#desktop_filter_popup').hide();
    $('.applied_or_not').val('applied');
    $('.filter_desktop_button').addClass('new_filter_btn_design');
    var t = 0
      , e = $(".categoryid").val();
    $formObj = $(this).closest('form');
    filterFormData = $(this).closest('form').serialize();
    // filterCategorySoftwareListAjax(filterFormData, e, t, false);
    if ($(this).attr('data-loadSoftEnable') == 1) {
        filterCategorySoftwareListAjax(filterFormData, e, t, false);
    } else {
        $formObj.attr('action', window.location.href + '?type=filter');
        $formObj.submit();
    }
});
$(document).on("click", ".latest_filter_apply .cat_view_more_btn", function() {
    var t = $('.count_in').length
      , e = $(".categoryid").val();
    event.preventDefault();
    filterCategorySoftwareListAjax(filterFormData, e, t, true);
});
function filterCategorySoftwareListAjax(filterFormData, categoryid, startlimit, appendHTML=false) {
    var form = filterFormData + "&categoryid=" + categoryid + "&startlimit=" + startlimit;
    if ($('.new_design').val() == 'cat_new_design') {
        form = filterFormData + "&categoryid=" + categoryid + "&startlimit=" + startlimit + '&newdesign=' + true;
    }
    $.ajax({
        type: 'POST',
        data: form,
        url: 'singleview/searchfilternew',
        beforeSend: function() {
            $('.apply_input_button_div_btn').prop('disabled', !0).addClass('disabled');
            $('.latest_filter_apply .cat_view_more_btn').prop('disabled', !0).addClass('disabled');
            if (appendHTML) {
                $(".cat_view_more_btn").attr('disabled', 'disabled').html('<img src="/assets2/singleview/assets/icon/ajax-loader_new.svg" style="height:20px;width:50px" />');
            } else {
                $('.apply_input_button_div_btn').val("Applying...");
                $('.fullpage_loader').css('display', 'flex');
            }
        },
        success: function(data) {
            $('#filter_search').val('');
            $('.old_filter_view_more').hide();
            $('.latest_filter_apply').show();

            $('.apply_input_button_div_btn').prop('disabled', !0).removeClass('disabled');
            $(".latest_filter_apply .cat_view_more_btn").removeAttr('disabled').removeClass('disabled');
            if (appendHTML) {
                $('.latest_filter_apply .cat_view_more_btn').html("View More Products");
            } else {
                is_accordion_loaded = false;
                $('.apply_input_button_div_btn').val("Apply");
                $('.fullpage_loader').css('display', 'none');
            }

            button_name_and_update_hiden_inout();
            data = jQuery.parseJSON(data);
            var ajax_res = JSON.stringify(data.view);
            var success_response = jQuery.parseJSON(ajax_res);
            if ($.trim(success_response)) {
                if (appendHTML) {
                    $(".software_list_append").append(success_response);
                } else {
                    $(".software_list_append").html(success_response);
                }
                GetratingDetail($('.activeclassshowdtl'), $('.activeclassshowdtl').find('.softid').val(), $('.categoryid').val(), $('.ga_page_type').val(), $('.ga_page_name').val());
                var window_width = window.matchMedia("(max-width: 1080px)");
                getResolution(window_width);
                var a = parseInt($(".soft_startlimit").val()) + parseInt($(".page_software_count").val());
                $(".soft_startlimit").val(a);
                $(".cat_view_more_btn").show();

                var count_div = $('.count_in').length;
                var total_count = data.total_count;
                $('.count_of_listing .starting_count').text('1');
                $('.count_of_showing').text(count_div);
                $('.count_of_listing .total_count').text(total_count);
            } else {
                $(".software_list_append").html('No data found.');
                $(".cat_view_more_btn").hide();

                $('.count_of_listing .starting_count').text('0');
                $('.count_of_showing').text('0');
                $('.count_of_listing .total_count').text('0');
            }

            if (count_div == total_count) {
                $('.view_more_btn_div').hide();
            }
            // hide popup after apply filter in mobile view
            $('.form_mobile_view_filter').hide();
            $('body').removeClass('body_overflow');
            // hide popup after apply filter in mobile view end
        },
        error: function(xhr, ajaxOptions, thrownError) {
            if (data.error) {
                errorObj = {
                    'selector': data.selector,
                };
                get_soft_list_ajax_fail(errorObj);
            }
        }
    });
}

// filter hide option when click out side
$(document).mouseup(function(e) {
    var drop_down = $(".dropdown_search_main");
    if (!drop_down.is(e.target) && drop_down.has(e.target).length === 0) {
        $(".search_list_main_div").hide();
    }
});
// filter hide option when click out side end

// mobile view filter popup
$(document).on('click', '.filter_icon_main', function() {
    $('.form_mobile_view_filter').show();
    $('body').addClass('body_overflow');
})
$(document).on('click', '.filter_mobile_back span', function() {
    $('.form_mobile_view_filter').hide();
    $('body').removeClass('body_overflow');
})
// mobile view filter popup end

// europe country tos checkbox start
$(document).on('click', '.europe_checkbox_label', function() {
    $(this).siblings('input:checkbox').click();
})
// europe country tos checkbox end

$(document).ready(function() {
    $('.this_not_checked').prop('checked', !1);
})

// software category filter clear btn jquery start 
$(document).on('click', '.filter_clear_btn', function() {
    event.preventDefault();
    $('.filter_desktop_button').removeClass('new_filter_btn_design');
    $('#desktop_filter_popup').hide();
    deployment_search_filter_array = [];
    device_supported_filter_array = [];
    buisness_search_filter_array = [];
    language_supported_filter_array = [];
    if ($('.apply_input_button_div_btn').attr('data-loadSoftEnable') == 1) {
        var filter_applied_or_not = $('.applied_or_not').val();
        if (filter_applied_or_not == 'applied') {
            filterFormData = $(this).closest('form').get(0).reset();
            filterCategorySoftwareListAjax(filterFormData, e, 0, false);
            $('.applied_or_not').val('not applied');
        }
    } else {
        window.location.href = location.protocol + '//' + location.host + location.pathname;
    }
})
// software category filter clear btn jquery end 

// redirect to leader matrix tab
var new_url_hash = window.location.hash;
$(document).ready(function() {
    if (new_url_hash == "#leader_matrix") {
        setTimeout(function() {
            $('.tab_item_link[data-tab="leader_matrix_tab_content"]').mouseup().click();
        }, 200)
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }
    $(document).on('click', 'a.leader_matrix_link', function() {
        $('.tab_item_link[data-tab="leader_matrix_tab_content"]').mouseup().click();
        if ($('.ga_page_type').val() == 'Category') {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
    });
});

// scroll to city and industry section
$(document).on('click', '.city_industry_scroll, .mobilecat_scroll_link', function() {
    event.preventDefault();
    var scrol_newhash = this.hash;
    $('html, body').animate({
        scrollTop: $(scrol_newhash).offset().top - 90
    }, 800)
});
// scroll to city and industry section ens

// Name input validation start
$(document).on('input', '.name_input_validation', function() {
    var c = this.selectionStart
      , r = /[^a-z0-9 .]/gi
      , v = $(this).val();
    if (r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
});
// Name input validation end

/* show more city in mobile view */
$(document).on('click', '.showmore_city_list', function() {
    $('.city_list_hide_mobile_show_more').removeClass('city_list_hide_mobile_show_more');
    $(this).hide();
    $('.border_right_none').removeClass('border_right_none');
})
/* show more city in mobile view end */

/* show more industry in mobile view */
$(document).on('click', '.showmore_industry_list', function() {
    $('.industry_list_hide_mobile_show_more').removeClass('industry_list_hide_mobile_show_more');
    $(this).hide();
    $('.border_right_none_ind').removeClass('border_right_none_ind');
})
/* show more industry in mobile view end */

// start review prigress
var forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};
$(document).ready(function() {
    var max = -219.99078369140625;
    forEach(document.querySelectorAll('.key_progress_bar'), function(index, value) {
        percent = value.getAttribute('key-data-progress');
        value.querySelector('.keyrev_fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
        //value.querySelector('.rev_value').innerHTML = percent + '%';
    });
});
// end review prigress

/* show rating detail ajax start */
if ($('.ga_page_type').val() == 'Category') {
    $(document).on('click', '.show_detail_label', function() {
        $(this).closest('.show_detail_cat_page').toggleClass('activeclassshowdtl')
        $(this).siblings('.detail_div_main').toggleClass('active_this_detail');
    });
    $(document).on('click', '.ajax_load_review_data', function() {
        GetratingDetail($(this), $(this).find('.softid').val(), $('.categoryid').val(), $('.ga_page_type').val(), $('.ga_page_name').val());
    });
    var first_ratingdetail = false;
    $(window).scroll(function() {
        if (first_ratingdetail == false) {
            setTimeout(function() {
                GetratingDetail($('.activeclassshowdtl'), $('.activeclassshowdtl').find('.softid').val(), $('.categoryid').val(), $('.ga_page_type').val(), $('.ga_page_name').val());
            }, 100)
            first_ratingdetail = true;
        }
    });
    if ($(window).scrollTop() >= 10) {
        if (first_ratingdetail == false) {
            GetratingDetail($('.activeclassshowdtl'), $('.activeclassshowdtl').find('.softid').val(), $('.categoryid').val(), $('.ga_page_type').val(), $('.ga_page_name').val());
            first_ratingdetail = true;
        }
    }
    function GetratingDetail(thisdetail, softid, id, pagetype, category) {
        $.ajax({
            url: baseUrl + "/singleview/getratingdetails",
            type: "POST",
            dataType: "text",
            data: {
                ga_page_type: pagetype,
                softid: softid,
                cat_id: id,
                category: category
            },
            beforeSend: function() {
                $('.ratingdetail_loader').show();
            },
            success: function(response) {
                thisdetail.find('.detail_div_main').html(response);
                thisdetail.removeClass('ajax_load_review_data');
                $('.ratingdetail_loader').remove();
            },
            error: function() {
                console.log('error');
            }
        });
    }
}
/* show rating detail ajax end*/

/* call widget submit js start */
$(document).on("click", ".call_widget_form .form_1_submit", function(e) {
    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        current_popup = 'calling_form_main';
        $('.utm_source_hiden').val($('.utm_source').val());
        $('.ssleadpost_categoryid').val($('.categoryid').val());
        var form = $(this).closest('form').serialize();
        big_popup_ajax(form);
    });
});
/* call widget submit js end */
// alternatives callback form submit
$(document).on("click", "#alternatives_callbackform form button", function(e) {
    $(this).closest('form').unbind('submit').bind('submit', function(e) {
        e.preventDefault();
        current_popup = 'alternatives_callbackform';
        $('.utm_source_hiden').val($('.utm_source').val());
        var form = $(this).closest('form').serialize();
        var next = true;
        if (next) {
            big_popup_ajax(form);
        }
    });
});
// alternatives callback form submit end
// sidebar leadermatrix card ajax
let leadermatrixcard_sidebar = false;
if (!leadermatrixcard_sidebar) {
    const category_urlval = $('.leadermatrixcardlink').val();
    $.ajax({
        type: "POST",
        url: '/singleview/leadermatrixcard',
        dataType: "text",
        data: {
            ga_page_type: ga_page_type,
            category: category_name_val,
            category_url: category_urlval
        },
        success: function(response) {
            $('.leader_matrix_card').html(response);
        },
        error: function() {
            console.log('error');
        }
    });
    leadermatrixcard_sidebar = true;
}
// sidebar leadermatrix card ajax end

// sidebar write review card ajax
var reviewcard_banner_sidebar = false;
if ($('.ga_page_type').val() == 'AppCategory') {
    var reviewcard_banner_sidebar = true;
}
if (!reviewcard_banner_sidebar) {
    $.ajax({
        type: "POST",
        url: baseUrl + '/softwaremaincategory/writereviewcard',
        dataType: "text",
        data: {
            ga_page_type: ga_page_type,
            category: category_name_val
        },
        success: function(response) {
            $('.sidebar_gift_card_top_outer').html(response);
        },
        error: function() {
            console.log('error');
        }
    });
    reviewcard_banner_sidebar = true;
}
// sidebar write review card ajax end

// sidebar write review card ajax
if ($('.call_popup_main').length != 0) {
    var getfreeconsultationpopup = false;
    $(window).scroll(function() {
        if (getfreeconsultationpopup == false) {
            var scrolltopvalue = ($(document).height() / 100) * 18;

            var pagelink = '/singleview/getfreeconsultationpopup';
            if ($('.hiddenint').val() == "pricing" || $('.hiddenint').val() == "vendors" || $('.hiddenint').val() == "value-added-services" || $('.hiddenint').val() == "award" || $('.hiddenint').val() == "price-estimator") {
                pagelink = '/ajax/leavemessage';
                scrolltopvalue = 0;
            }

            if ($(this).scrollTop() > scrolltopvalue) {
                //Play Sound 
                var getFreeConsultPopup = document.getElementsByClassName("call_popup_main");
                if (getFreeConsultPopup.length > 0 && window.getComputedStyle(getFreeConsultPopup[0]).display !== "none" && window.innerWidth > 1170) {
                    setTimeout(function() {
                        let notificationSound = $('#notificationSound')[0];
                        notificationSound.play();
                    }, 100);
                }
                setTimeout(function() {
                    $.ajax({
                        type: "POST",
                        url: baseUrl + pagelink,
                        dataType: "text",
                        data: {
                            ga_page_type: ga_page_type,
                            category: category_name_val
                        },
                        success: function(response) {
                            $(document.body).append($('.call_popup_main').detach());
                            $('.call_popup_main').html(response);
                        },
                        error: function() {
                            console.log('error');
                        }
                    });
                }, 100)
                getfreeconsultationpopup = true;
            }
        }
    });
}
// sidebar write review card ajax end

var tabwidth = 0;
// category page tab scroll arrow show hide 
$(document).ready(function() {
    // $( ".tab_soft_list a" ).each(function( index ) {
    //     tabwidth = tabwidth + $(this).width();
    // });
    setTimeout(function() {
        $(".tab_soft_list a").each(function(index) {
            tabwidth = tabwidth + $(this).width();
        });
        categorNavbarshow(tabwidth);
    }, 500);
})
$(window).resize(function() {
    $(".tab_soft_list a").each(function(index) {
        tabwidth = tabwidth + $(this).width();
    });
    categorNavbarshow(tabwidth);
});
function categorNavbarshow(tabwidth) {
    if (tabwidth > ($('.tab_soft_list').width() - 30)) {
        $('.nav_sections #next_nav').show();
    }
}
// category page tab scroll arrow show hide 

// filter popup ajax
$(document).on('click', '.filter_desktop_button', function(e) {
    e.preventDefault();
    let IDtoShow = '#desktop_filter_popup';
    if ($(this).hasClass('callajaxdata')) {
        $('.fullpageloader_backdrop').show();
        $(this).removeClass('callajaxdata');
        let viewfile = '/layouts_new/popups/software_filter'
        let postData = {
            ga_page_type: ga_page_type,
            category: category_name_val,
            viewfile: viewfile
        };
        let appendData = 'body';
        CallDatawithAjax(postData, appendData, IDtoShow);
    } else {
        $(IDtoShow).addClass('active_popup');
    }
});
// filter popup ajax end

// for all ajax view call
function CallDatawithAjax(Data, ApendTo, IDtoShow) {
    $.ajax({
        type: "POST",
        url: baseUrl + '/ajax/filtersoftwarepopup',
        dataType: "text",
        data: Data,
        beforeSend: function(response) {
            $('.fullpageloader_backdrop').show();
        },
        success: function(response) {
            if (response) {
                $(ApendTo).append(response);
                setTimeout(function() {
                    $('.fullpageloader_backdrop').hide();
                    ChangePopupdataafterAjax();
                    $(IDtoShow).addClass('active_popup');
                }, 1000);
            } else {
                alert('Please check your network connection try again!');
            }
        },
        error: function() {
            alert('Please check your network connection try again!');
            $('.fullpageloader_backdrop').hide();
        }
    });
}
// for all ajax view call end

// changes in popup after ajax complet and append to dom
function ChangePopupdataafterAjax() {// changes for data
}
// changes in popup after ajax complet and append to dom end

// to laod software data on load 
function get_soft_list_onoad(data) {
    $(".cat_view_more_btn").removeAttr('disabled', 'disabled').text('View More Products');
    $('.send_on_viewmore_ajax').remove();
    var success_response = jQuery.parseJSON(data.response);
    if ($.trim(success_response)) {
        $(".software_list_append").html(success_response);
        $('.count_of_listing .total_count').text($('.total_count_input').val());
        setTimeout(function() {
            if (Number($('.total_count_input').val()) < Number($('.soft_startlimit').val())) {
                $('.view_more_btn_div').hide();
            }
        }, 1500)
    } else {
        $(".cat_view_more_btn").hide();
    }
}
if ($('.load_software_on_load').val() === 'true') {
    var url = baseUrl + '/softwaremaincategory/loadsoftwareonload';
    $('.popup_small_new .ajax_loader_img').show();
    $('.popup_small_new .ajax_fail_div').hide();
    var t = $(".soft_startlimit").val()
      , e = $(".categoryid").val()
      , a = $(".ga_page_name").val().toLowerCase()
      , b = $(".software_id").val()
      , data_form_accordion = {
        success: get_soft_list_onoad,
        error: get_soft_list_ajax_fail,
        url: url,
        data: "data_json=" + JSON.stringify($('.send_on_viewmore_ajax').val()) + "&categoryid=" + e + "&startlimit=" + t + "&slug=" + a + "&softwareid=" + b,
    };
    var isloadmore = "isloadmore";
    ajax_fire(data_form_accordion, isloadmore);
}
// to laod software data on load 
// to laod ppc software data on load 
function ppc_soft_list_onoad(data) {
    $('.halfajax_append_here').remove();
    var success_response = jQuery.parseJSON(data.response);
    if ($.trim(success_response)) {
        $(".software_list_append").prepend(success_response);
        setTimeout(function() {
            let Oldjson = JSON.parse($('.send_on_viewmore').val());
            Oldjson['sw_id'] = Oldjson.sw_id + ',' + Oldjson.ppc_half_ajx_sw_id;
            Oldjson['ppc_half_ajx_sw_id'] = '';
            $('.send_on_viewmore').val(JSON.stringify(Oldjson));
        }, 500)
    } else {
        $(".cat_view_more_btn").hide();
    }
}
if ($('.halfajax_sw_id').val()) {
    var url;
    if ($('.ga_page_type').val() == 'Country-Page') {
        url = baseUrl + '/softwarecountry/halfppclistingcountry';
    } else {
        url = baseUrl + '/softwaremaincategory/halfppclisting';
    }
    var t = $(".soft_startlimit").val()
      , e = $(".categoryid").val()
      , a = $(".ga_page_name").val().toLowerCase()
      , b = $(".software_id").val()
      , data_form_accordion = {
        success: ppc_soft_list_onoad,
        error: get_soft_list_ajax_fail,
        url: url,
        data: "data_json=" + JSON.stringify($('.send_on_viewmore').val()) + "&halfajax_sw_id=" + $('.halfajax_sw_id').val() + "&categoryid=" + e + "&startlimit=" + t + "&slug=" + a + "&softwareid=" + b,
    };
    var isloadmore = "isloadmore_half";
    ajax_fire(data_form_accordion, isloadmore);
}
// to laod ppc software data on load 

if (($('.ga_page_type').val() == 'Category') || ($('.ga_page_type').val() == 'FreeSoftware') || ($('.ga_page_type').val() == 'AppCategory') || ($('.ga_page_type').val() == 'SerCategory')) {
    // create buyers guide table of content
    $('.cat_disc_div').find('h2').each(function(key) {
        var h2taghtml = $(this).html().replace(/&nbsp;/g, " ").replace(/&amp;/g, " ");
        var h2clone_div = document.createElement("div");
        h2clone_div.innerHTML = h2taghtml;
        var h2current_text = $.trim(h2clone_div.innerText);
        if (h2current_text != '') {
            if (h2current_text != 'Table of Contents') {
                $(this).addClass('title_bguide');
                var h2_a_id = $.trim($(this).find('a').attr('id'));
                $('.b_guide_sidebar').find('li').each(function() {
                    var current_text = $.trim($(this).find('a').html().replace(/&nbsp;/g, " ").replace(/&amp;/g, " "));
                    if (current_text.toLowerCase() == h2current_text.toLowerCase()) {
                        $(this).find('a').attr('data-scroll-id', h2_a_id);
                        $(this).find('a').attr('href', '#' + h2_a_id);
                    }
                });
            }
        }
        h2clone_div.remove();
    });
    // $('.clone_for_b_guide').clone().appendTo('.append_here_city_faq_ind_data');
    // create buyers guide table of content end

    // buyer's guide sidebar click scroll to title
    $(document).on('click', '.b_guide_sidebar_ol li', function() {
        event.preventDefault();
        $('.activebguidetab').removeClass('activebguidetab');
        $(this).addClass('activebguidetab');
        var sidebarscrolltohash = $(this).find('a').attr('href');
        $('html, body').animate({
            scrollTop: $(sidebarscrolltohash).offset().top - 90
        }, 800);
    });
    // buyer's guide sidebar click scroll to title End

    // on scroll buyer's guide tab change automatic
    if ($('.b_guide_sidebar_ol li').length) {
        var lastId, topMenu = $(".header_main"), topMenuHeight = 100, // All list items
        menuItems = $(".b_guide_sidebar_ol li a"), // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
        $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
                // Get container scroll position
                var fromTop = $(this).scrollTop() + topMenuHeight;

                // Get id of current scroll item
                if ($('.title_bguide').length) {
                    if (fromTop > $('.title_bguide').offset().top) {
                        var cur = scrollItems.map(function(key) {
                            if ($(this).offset().top < fromTop) {
                                return this;
                            }
                        });
                        // Get the id of the current element
                        cur = cur[cur.length - 1];
                        var id = cur && cur.length ? cur[0].id : "";

                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            menuItems.closest('li').removeClass("activebguidetab");
                            menuItems.filter("[data-scroll-id=" + id + "]").closest('li').addClass("activebguidetab");
                            var keyall;
                            $('.b_guide_sidebar').find('li').each(function(key) {
                                var thischieldtext = $(this).text();
                                if (thischieldtext == menuItems.filter("[data-scroll-id=" + id + "]").text()) {
                                    keyall = key;
                                }
                            });
                            if (keyall > 4) {
                                scrollsidebar(keyall);
                            } else {
                                $('.b_guide_sidebar').animate({
                                    scrollTop: 0
                                }, 800);
                            }
                        }
                    }
                }
            }
        });
        function scrollsidebar(top) {
            var varscrolltop = 50 * (Number(top) - 4);
            $('.b_guide_sidebar').animate({
                scrollTop: varscrolltop
            }, 800);
        }
    }
}
// on scroll buyer's guide tab change automatic end
// Sound Effect For Request A Callback Popup Start
/*window.onload = () => {
    $('body').append(`<audio id="notificationSound"><source src="${baseUrl}/assets2/notification_sound/notification_audio.mp3" type="audio/mpeg"></audio>`);
}*/
$('body').append(`<audio id="notificationSound"><source src="${baseUrl}/assets2/notification_sound/notification_audio.mp3" type="audio/mpeg"></audio>`);
// Sound Effect For Request A Callback Popup End

// webinar flag
init_intl_tel_input('#webinar_form');
