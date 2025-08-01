/* ========== */
/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, y = n.hasOwnProperty, a = y.toString, l = a.call(Object),
        v = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, x = function (e) {
            return null != e && e === e.window
        }, S = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, n) {
        var r, i, o = (n = n || S).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.6.3", E = function (e, t) {
        return new E.fn.init(e, t)
    };

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    E.fn = E.prototype = {
        jquery: f, constructor: E, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return E.each(this, e)
        }, map: function (n) {
            return this.pushStack(E.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, E.extend = E.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            b(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date, p = n.document, k = 0,
            r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {
                return e === t && (l = !0), 0
            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, S)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[E] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.cssSupportsSelector = ce(function () {
                return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && S) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e)
            }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
            }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType && e.documentElement || e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), v(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, y) {
                    var v = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === y ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (v) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                            return (d -= y) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace(B, "$1"));
                    return s[E] ? le(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ye(function () {
                    return [0]
                }), last: ye(function (e, t) {
                    return [t - 1]
                }), eq: ye(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ye(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ye(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ye(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Se(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, y, v, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !S);
                            while (s = y[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && E(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }

    E.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, D = E(S);
    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    E.fn.extend({
        has: function (e) {
            var t = E(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
            if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function (r, i) {
        E.fn[r] = function (e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
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

    E.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    E.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return E.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, E.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return E.Deferred(function (r) {
                            E.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return E.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? E.extend(e, a) : a
                    }
                }, s = {};
            return E.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = E.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = E.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready()
    }

    E.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
        }
    }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) B(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(E(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = E.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    E.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : B(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), E.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t), r = n.length, i = n.shift(), o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                E.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = S.documentElement, ie = function (e) {
            return E.contains(e.ownerDocument, e)
        }, oe = {composed: !0};
    re.getRootNode && (ie = function (e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return E.css(e, t, "")
            }, u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    E.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < E.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return S.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
    }

    E.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[E.expando] ? e : new E.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
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
        which: !0
    }, E.event.addProp), E.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        E.event.special[t] = {
            setup: function () {
                return Ee(this, t, Ce), !1
            }, trigger: function () {
                return Ee(this, t), !0
            }, _default: function (e) {
                return Y.get(e.target, t)
            }, delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        E.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function (e, t, n, r) {
            return Se(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    E.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), E.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        }, remove: function (e) {
            return Oe(this, e)
        }, text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        }, prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t)
            })
        }, html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        E.fn[e] = function (e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = /^--/, Me = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        }, Ie = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        }, We = new RegExp(ne.join("|"), "i"), Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t), u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = S.createElement("div"), l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"], Ue = S.createElement("div").style, Xe = {};

    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = ze.length;
            while (n--) if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }

    var Ge = /^(none|table(?!-c[ea]).+)/, Ye = {position: "absolute", visibility: "hidden", display: "block"},
        Qe = {letterSpacing: "0", fontWeight: "400"};

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e), i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r), o = i,
            a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }

    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
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
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Re.test(t), l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function (e, u) {
        E.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
                    return Ze(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Me(e), o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        E.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Je)
    }), E.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = et).prototype = {
        constructor: et, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, E.fx = et.prototype.init, E.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;

    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = E.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    E.Animation = E.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ae(e), y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], ot.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || E.style(e, r)
            }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && le([e], !0), p.done(function () {
                for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
            })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), E.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = E.isEmptyObject(t), o = E.speed(e, n, r), a = function () {
                var e = ft(this, E.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = E.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (e, r) {
        var i = E.fn[r];
        E.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        E.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function () {
        var e, t = 0, n = E.timers;
        for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), tt = void 0
    }, E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        nt || (nt = !0, st())
    }, E.fx.stop = function () {
        nt = null
    }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || E.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }

    E.fn.extend({
        prop: function (e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), v.optSelected || (E.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        }, removeClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        }, toggleClass: function (t, n) {
            var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function (e) {
                E(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function () {
                if (s) for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    E.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = E(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || S], d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = E.extend(new E.Event, n, {type: e, isSimulated: !0});
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                E.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), v.focusin || E.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location, Ct = {guid: Date.now()}, St = /\?/;
    E.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Et = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function (e, t) {
            r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }

    E.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                    return {name: t.name, value: e.replace(kt, "\r\n")}
                }) : {name: t.name, value: n.replace(kt, "\r\n")}
            }).get()
        }
    });
    var Dt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = S.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {}, u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }

    Wt.href = Tt.href, E.extend({
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
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t), v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event, x = E.Deferred(),
                b = E.Callbacks("once memory"), w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (y.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function (e, i) {
        E[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), E._evalUrl = function (e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                E.globalEval(e, t, n)
            }
        })
    }, E.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = E(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var _t = {0: 200, 1223: 204}, zt = E.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), E.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xt.pop() || E.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
            return B(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({Height: "height", Width: "width"}, function (a, s) {
        E.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            E.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), E.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        E.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Yt = C.jQuery, Qt = C.$;
    return E.noConflict = function (e) {
        return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E
    }, "undefined" == typeof e && (C.jQuery = C.$ = E), E
});

/* ========== */
/**
 * Swiper 11.1.14
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 12, 2024
 */
var Swiper = function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }

    const s = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }

    const i = {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    function n(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
    }

    function l(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function o() {
        return Date.now()
    }

    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let a = 1; a < arguments.length; a += 1) {
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t], r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
                }
            }
        }
        var s;
        return e
    }

    function u(e, t, s) {
        e.style.setProperty(t, s)
    }

    function m(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({[a]: c}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[a]: c})
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function f(e, t) {
        void 0 === t && (t = "");
        const s = [...e.children];
        return e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t ? s.filter((e => e.matches(t))) : s
    }

    function g(e) {
        try {
            return void console.warn(e)
        } catch (e) {
        }
    }

    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)), s
    }

    function w(e) {
        const t = r(), s = a(), i = e.getBoundingClientRect(), n = s.body, l = e.clientTop || n.clientTop || 0,
            o = e.clientLeft || n.clientLeft || 0, d = e === t ? t.scrollY : e.scrollTop,
            c = e === t ? t.scrollX : e.scrollLeft;
        return {top: i.top + d - l, left: i.left + c - o}
    }

    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t)
    }

    function y(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
            return t
        }
    }

    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
        return s
    }

    function x(e, t) {
        t && e.addEventListener("transitionend", (function s(a) {
            a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
        }))
    }

    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function T(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
    }

    function M(e) {
        return t => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t
    }

    let C, P, L;

    function I() {
        return C || (C = function () {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), C
    }

    function z(e) {
        return void 0 === e && (e = {}), P || (P = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = I(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent,
                l = {ios: !1, android: !1}, o = a.screen.width, d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
        }(e)), P
    }

    function A() {
        return L || (L = function () {
            const e = r(), t = z();
            let s = !1;

            function a() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }

            if (a()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, a] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    s = e < 16 || 16 === e && a < 2
                }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = a();
            return {isSafari: s || n, needPerspectiveFix: s, need3dFix: n || i && t.ios, isWebView: i}
        }()), L
    }

    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        }, once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }

            return i.__emitterProxy = t, a.on(e, i, s)
        }, onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        }, off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    const k = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    };
    const O = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    };
    const D = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
        }
    }, G = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    }, H = e => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i, r = [s - t];
            return r.push(...Array.from({length: t}).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
                r.includes(t.column) && G(e, s)
            }))
        }
        const r = i + a - 1;
        if (e.params.rewind || e.params.loop) for (let a = i - t; a <= r + t; a += 1) {
            const t = (a % s + s) % s;
            (t < i || t > r) && G(e, t)
        } else for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && G(e, a)
    };
    var B = {
        updateSize: function () {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        }, updateSlides: function () {
            const e = this;

            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }

            const s = e.params, {wrapperEl: a, slidesEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e,
                o = e.virtual && s.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length,
                c = f(i, `.${e.params.slideClass}, swiper-slide`), p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = [], g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length, E = e.slidesGrid.length;
            let x = s.spaceBetween, T = -v, M = 0, C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
            })), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let a = 0; a < p; a += 1) {
                let i;
                if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        I && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i), n = i.style.transform, l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0); else {
                            const e = t(r, "width"), s = t(r, "padding-left"), a = t(r, "padding-right"),
                                n = t(r, "margin-left"), l = t(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) L = e + n + l; else {
                                const {clientWidth: t, offsetWidth: r} = i;
                                L = e + s + a + n + l + (r - t)
                            }
                        }
                        n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L))
                    } else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
                const t = [];
                for (let a = 0; a < m.length; a += 1) {
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i)
                }
                m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                        i = t * s.slidesPerGroup;
                    for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i)
                }
                for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
            }
            if (0 === m.length && (m = [0]), 0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${x}px`
                }))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                })), e -= x;
                const t = e > r ? e - r : 0;
                m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                })), e -= x;
                const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < r) {
                    const s = (r - e - t) / 2;
                    m.forEach(((e, t) => {
                        m[t] = e - s
                    })), h.forEach(((e, t) => {
                        h[t] = e + s
                    }))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: m,
                slidesGrid: h,
                slidesSizesGrid: g
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`, a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
            }
        }, updateAutoHeight: function (e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                s.push(e)
            })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e))
            } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r
            }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides,
                s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    u = -(n - d), m = u + t.slidesSizesGrid[e], h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
                    f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), k(o, f, s.slideVisibleClass), k(o, h, s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
            }
        }, updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n, progressLoop: l} = t;
            const o = r, d = n;
            if (0 === a) i = 0, r = !0, n = !0; else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0), a = t.getSlideIndexByData(t.slides.length - 1), i = t.slidesGrid[s],
                    r = t.slidesGrid[a], n = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: s, slidesEl: a, activeIndex: i} = e, r = e.virtual && s.virtual.enabled,
                n = e.grid && s.grid && s.grid.rows > 1, l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (r) if (s.loop) {
                let t = i - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
            } else o = l(`[data-swiper-slide-index="${i}"]`); else n ? (o = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
            o && (n || (c = function (e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function (e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                O(e, e === o, s.slideActiveClass), O(e, e === c, s.slideNextClass), O(e, e === d, s.slidePrevClass)
            })), e.emitSlidesClasses()
        }, updateActiveIndex: function (e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
                snapGrid: a,
                params: i,
                activeIndex: r,
                realIndex: n,
                snapIndex: l
            } = t;
            let o, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
            };
            if (void 0 === d && (d = function (e) {
                const {slidesGrid: t, params: s} = e, a = e.rtlTranslate ? e.translate : -e.translate;
                let i;
                for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), a.indexOf(s) >= 0) o = a.indexOf(s); else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop) u = c(d); else if (p) {
                const e = t.slides.filter((e => e.column === d))[0];
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d
            } else u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }), t.initialized && H(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        }, updateClickedSlide: function (e, t) {
            const s = this, a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
            }));
            let r, n = !1;
            if (i) for (let e = 0; e < s.slides.length; e += 1) if (s.slides[e] === i) {
                n = !0, r = e;
                break
            }
            if (!i || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
            s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };
    var N = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, wrapperEl: i} = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            const s = this, {rtlTranslate: a, params: i, wrapperEl: r, progress: n} = s;
            let l, o = 0, d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"))
            }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function X(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }

    var Y = {
        slideTo: function (e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: f
            } = r;
            if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = r.params.speed);
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset";
            const y = r.virtual && r.params.virtual.enabled;
            if (!(y && i) && (u && -w === r.translate || !u && w === r.translate)) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? w : -w;
                if (0 === t) y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s
                }))) : h[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame((() => {
                    r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
                })); else {
                    if (!r.support.smoothScroll) return m({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
                    h.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop) if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore; else {
                let e;
                if (r) {
                    const t = n * i.params.grid.rows;
                    e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = i.getSlideIndexByData(n);
                const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {centeredSlides: s} = i.params;
                let l = i.params.slidesPerView;
                "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
                let o = t - e < l;
                if (s && (o = o || e < Math.ceil(l / 2)), a && s && "auto" !== i.params.slidesPerView && !r && (o = !1), o) {
                    const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                    i.loopFix({
                        direction: a,
                        slideTo: !0,
                        activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                        slideRealIndex: "next" === a ? i.realIndex : void 0
                    })
                }
                if (r) {
                    const e = n * i.params.grid.rows;
                    n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else n = i.getSlideIndexByData(n)
            }
            return requestAnimationFrame((() => {
                i.slideTo(n, t, s, a)
            })), i
        }, slideNext: function (e, t, s) {
            void 0 === t && (t = !0);
            const a = this, {enabled: i, params: r, animating: n} = a;
            if (!i || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding) return !1;
                if (a.loopFix({direction: "next"}), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                    a.slideTo(a.activeIndex + o, e, t, s)
                })), !0
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        }, slidePrev: function (e, t, s) {
            void 0 === t && (t = !0);
            const a = this, {params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = a;
            if (!o || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding) return !1;
                a.loopFix({direction: "prev"}), a._clientLeft = a.wrapperEl.clientLeft
            }

            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const u = p(l ? a.translate : -a.translate), m = r.map((e => p(e)));
            let h = r[m.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                r.forEach(((t, s) => {
                    u >= t && (e = s)
                })), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
            }
            let f = 0;
            if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
                a.slideTo(f, e, t, s)
            })), !0) : a.slideTo(f, e, t, s)
        }, slideReset: function (e, t, s) {
            void 0 === t && (t = !0);
            const a = this;
            if (!a.destroyed) return void 0 === e && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s)
        }, slideToClosest: function (e, t, s, a) {
            void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        }, slideToClickedSlide: function () {
            const e = this;
            if (e.destroyed) return;
            const {params: t, slidesEl: s} = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var R = {
        loopCreate: function (e) {
            const t = this, {params: s, slidesEl: a} = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                    f(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }))
                }, r = t.grid && s.grid && s.grid.rows > 1, n = s.slidesPerGroup * (r ? s.grid.rows : 1),
                l = t.slides.length % n != 0, o = r && t.slides.length % s.grid.rows != 0, d = e => {
                    for (let a = 0; a < e; a += 1) {
                        const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                };
            if (l) {
                if (s.loopAddBlankSlides) {
                    d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else if (o) {
                if (s.loopAddBlankSlides) {
                    d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else i();
            t.loopFix({slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next"})
        }, loopFix: function (e) {
            let {
                slideRealIndex: t,
                slideTo: s = !0,
                direction: a,
                setTranslate: i,
                activeSlideIndex: r,
                byController: n,
                byMousewheel: l
            } = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const {
                slides: d,
                allowSlidePrev: c,
                allowSlideNext: p,
                slidesEl: u,
                params: m
            } = o, {centeredSlides: h} = m;
            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
            let f = m.slidesPerView;
            "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
            const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
            const b = o.grid && m.grid && m.grid.rows > 1;
            d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [], E = [];
            let x = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
            const S = "next" === a || !a, T = "prev" === a || !a;
            let M = 0, C = 0;
            const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
                L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
            if (L < w) {
                M = Math.max(w - L, v);
                for (let e = 0; e < w - L; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    if (b) {
                        const e = P - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
                    } else y.push(P - t - 1)
                }
            } else if (L + f > P - w) {
                C = Math.max(L - (P - 2 * w), v);
                for (let e = 0; e < C; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    b ? d.forEach(((e, s) => {
                        e.column === t && E.push(s)
                    })) : E.push(t)
                }
            }
            if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
                o.__preventObserver__ = !1
            })), T && y.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
            })), S && E.forEach((e => {
                d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
            })), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(((e, t) => {
                o.grid.updateSlide(t, e, o.slides)
            })), m.watchSlidesProgress && o.updateSlidesOffset(), s) if (y.length > 0 && T) {
                if (void 0 === t) {
                    const e = o.slidesGrid[x], t = o.slidesGrid[x + M] - e;
                    l ? o.setTranslate(o.translate - t) : (o.slideTo(x + Math.ceil(M), 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                } else if (i) {
                    const e = b ? y.length / m.grid.rows : y.length;
                    o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
                }
            } else if (E.length > 0 && S) if (void 0 === t) {
                const e = o.slidesGrid[x], t = o.slidesGrid[x - C] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
            } else {
                const e = b ? E.length / m.grid.rows : E.length;
                o.slideTo(o.activeIndex - e, 0, !1, !0)
            }
            if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
                const e = {slideRealIndex: t, direction: a, setTranslate: i, activeSlideIndex: r, byController: !0};
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && s
                    })
                })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                    ...e,
                    slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                })
            }
            o.emit("loopFix")
        }, loopDestroy: function () {
            const e = this, {params: t, slidesEl: s} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            })), a.forEach((e => {
                s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
        }
    };

    function q(e, t, s) {
        const a = r(), {params: i} = e, n = i.edgeSwipeDetection, l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0)
    }

    function F(e) {
        const t = this, s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
            n.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
        const {params: l, touches: d, enabled: c} = t;
        if (!c) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && !function (e, t) {
            const s = t.contains(e);
            if (!s && t instanceof HTMLSlotElement) return [...t.assignedElements()].includes(e);
            return s
        }(p, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass, m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function (e, t) {
            return void 0 === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(h, p) : p.closest(h))) return void (t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
        d.currentX = i.pageX, d.currentY = i.pageY;
        const g = d.currentX, v = d.currentY;
        if (!q(t, i, g)) return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !p.matches(n.focusableElements)) && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
    }

    function V(e) {
        const t = a(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: l, enabled: d} = s;
        if (!d) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
            if (null !== i.touchId) return;
            if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
            if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX, m = c.pageY;
        if (p.preventedByNestedSwiper) return n.startX = u, void (n.startY = m);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m
        }), i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
        const h = n.currentX - n.startX, f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f, v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode,
            y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({direction: s.swipeDirection}), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {bySwiperTouchMove: !0}
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let E = !0, x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function _(e) {
        const t = this, s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0], !a || a.identifier !== s.touchId) return
        } else {
            if (null !== s.touchId) return;
            if (i.pointerId !== s.pointerId) return;
            a = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
            if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
        }
        s.pointerId = null, s.touchId = null;
        const {params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p} = t;
        if (!p) return;
        if (!r.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o(), m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = o(), l((() => {
            t.destroyed || (t.allowClick = !0)
        })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
        const f = h >= -t.maxTranslate() && !t.params.loop;
        let g = 0, v = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
        }
        let w = null, b = null;
        r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const y = (h - c[g]) / v, E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
        } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
        }
    }

    function W() {
        const e = this, {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e, n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function j(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function U() {
        const e = this, {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function K(e) {
        const t = this;
        D(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }

    function Z() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }

    const Q = (e, t) => {
        const s = a(), {params: i, el: r, wrapperEl: n, device: l} = e, o = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener", c = t;
        r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }), r[d]("touchstart", e.onTouchStart, {passive: !1}), r[d]("pointerdown", e.onTouchStart, {passive: !1}), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("touchend", e.onTouchEnd, {passive: !0}), s[d]("pointerup", e.onTouchEnd, {passive: !0}), s[d]("pointercancel", e.onTouchEnd, {passive: !0}), s[d]("touchcancel", e.onTouchEnd, {passive: !0}), s[d]("pointerout", e.onTouchEnd, {passive: !0}), s[d]("pointerleave", e.onTouchEnd, {passive: !0}), s[d]("contextmenu", e.onTouchEnd, {passive: !0}), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W, !0) : e[c]("observerUpdate", W, !0), r[d]("load", e.onLoad, {capture: !0}))
    };
    const J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var ee = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function te(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {enabled: !0}), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {enabled: !1}), p(t, s)) : p(t, s)) : p(t, s)
        }
    }

    const se = {
        eventsEmitter: $, update: B, translate: N, transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), X({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), X({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: Y, loop: R, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                    t.__preventObserver__ = !1
                }))
            }, unsetGrabCursor: function () {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                    e.__preventObserver__ = !1
                })))
            }
        }, events: {
            attachEvents: function () {
                const e = this, {params: t} = e;
                e.onTouchStart = F.bind(e), e.onTouchMove = V.bind(e), e.onTouchEnd = _.bind(e), e.onDocumentTouchStart = Z.bind(e), t.cssMode && (e.onScroll = U.bind(e)), e.onClick = j.bind(e), e.onLoad = K.bind(e), Q(e, "on")
            }, detachEvents: function () {
                Q(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {realIndex: t, initialized: s, params: a, el: i} = e, r = a.breakpoints;
                if (!r || r && 0 === Object.keys(r).length) return;
                const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                if (!n || e.currentBreakpoint === n) return;
                const l = (n in r ? r[n] : void 0) || e.originalParams, o = J(e, a), d = J(e, l),
                    c = e.params.grabCursor, u = l.grabCursor, m = a.enabled;
                o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if (void 0 === l[t]) return;
                    const s = a[t] && a[t].enabled, i = l[t] && l[t].enabled;
                    s && !i && e[t].disable(), !s && i && e[t].enable()
                }));
                const h = l.direction && l.direction !== a.direction,
                    f = a.loop && (l.slidesPerView !== a.slidesPerView || h), g = a.loop;
                h && s && e.changeDirection(), p(e.params, l);
                const v = e.params.enabled, w = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), m && !v ? e.disable() : !m && v && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", l)
            }, getBreakpoint: function (e, t, s) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                let a = !1;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: n * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const e = this, {classNames: t, params: s, rtl: a, el: i, device: r} = e, n = function (e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        })) : "string" == typeof e && s.push(t + e)
                    })), s
                }(["initialized", s.direction, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: a}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
                t.push(...n), i.classList.add(...t), e.emitContainerClasses()
            }, removeClasses: function () {
                const {el: e, classNames: t} = this;
                e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
        }
    }, ae = {};

    class ie {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const a = p({}, t, {el: s});
                    e.push(new ie(a))
                })), e
            }
            const l = this;
            l.__swiper__ = !0, l.support = I(), l.device = z({userAgent: t.userAgent}), l.browser = A(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: te(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                })
            }));
            const d = p({}, ee, o);
            return l.params = p({}, d, ae, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                l.on(e, l.params.on[e])
            })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === l.params.direction,
                isVertical: () => "vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), l.emit("_swiper"), l.params.init && l.init(), l
        }

        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[e]
        }

        getSlideIndex(e) {
            const {slidesEl: t, params: s} = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a
        }

        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }

        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`)
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s => {
                const a = e.getSlideClasses(s);
                t.push({slideEl: s, classNames: a}), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView) return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize), o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
            } else for (let e = l - 1; e >= 0; e -= 1) {
                i[l] - i[e] < n && (o += 1)
            }
            return o
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: s} = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let i;
            if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                t.complete && D(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight(); else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
            s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = (() => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return f(s, a())[0]
            })();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }))), Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                e.complete ? D(t, e) : e.addEventListener("load", (e => {
                    D(t, e.target)
                }))
            })), H(t), t.initialized = !0, H(t), t.emit("init"), t.emit("afterInit"), t
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this, {params: a, el: i, wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), r && r.removeAttribute("style"), n && n.length && n.forEach((e => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                }))
            }(s)), s.destroyed = !0), null
        }

        static extendDefaults(e) {
            p(ae, e)
        }

        static get extendedDefaults() {
            return ae
        }

        static get defaults() {
            return ee
        }

        static installModule(e) {
            ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
            const t = ie.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => ie.installModule(e))), ie) : (ie.installModule(e), ie)
        }
    }

    function re(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r
            }
        })), s
    }

    function ne(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function le(e) {
        const t = this, {params: s, slidesEl: a} = t;
        s.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, a.append(t.children[0]), t.innerHTML = ""
            } else a.append(e)
        };
        if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]); else i(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
    }

    function oe(e) {
        const t = this, {params: s, activeIndex: a, slidesEl: i} = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
            } else i.prepend(e)
        };
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
            r = a + e.length
        } else n(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
    }

    function de(e, t) {
        const s = this, {params: a, activeIndex: i, slidesEl: r} = s;
        let n = i;
        a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n
        } else r.append(t);
        for (let e = 0; e < d.length; e += 1) r.append(d[e]);
        s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function ce(e) {
        const t = this, {params: s, activeIndex: a} = t;
        let i = a;
        s.loop && (i -= t.loopedSlides, t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
            n = Math.max(n, 0)
        } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }

    function pe() {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function ue(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function me(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
    }

    function he(e) {
        let {swiper: t, duration: s, transformElements: a, allSlides: i} = e;
        const {activeIndex: r} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e => {
                const s = e.classList.contains("swiper-slide-transform") ? (e => {
                    if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                    return e.parentElement
                })(e) : e;
                return t.getSlideIndex(s) === r
            })), e.forEach((e => {
                x(e, (() => {
                    if (s) return;
                    if (!t || t.destroyed) return;
                    s = !0, t.animating = !1;
                    const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
                    t.wrapperEl.dispatchEvent(e)
                }))
            }))
        }
    }

    function fe(e, t, s) {
        const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")), i.append(r)), r
    }

    Object.keys(se).forEach((e => {
        Object.keys(se[e]).forEach((t => {
            ie.prototype[t] = se[e][t]
        }))
    })), ie.use([function (e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null, l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
        }, d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {width: s, height: a} = t;
                    let i = s, r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = [], l = r(), o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const s = function () {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }));
            a.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: t.isElement || (void 0 === s.childList || s).childList,
                characterData: void 0 === s.characterData || s.characterData
            }), n.push(a)
        };
        s({observer: !1, observeParents: !1, observeSlideChildren: !1}), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.hostEl, {childList: t.params.observeSlideChildren}), o(t.wrapperEl, {attributes: !1})
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const ge = [function (e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const l = a();
        s.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []};
        const o = l.createElement("div");

        function d(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            let i;
            return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i
        }

        function c(e, t) {
            const {slidesPerView: a, slidesPerGroup: i, centeredSlides: r, loop: l, initialSlide: o} = s.params;
            if (t && !l && o > 0) return;
            const {addSlidesBefore: c, addSlidesAfter: p} = s.params.virtual, {
                from: u,
                to: m,
                slides: h,
                slidesGrid: g,
                offset: v
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const w = s.activeIndex || 0;
            let b, y, E;
            b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", r ? (y = Math.floor(a / 2) + i + p, E = Math.floor(a / 2) + i + c) : (y = a + (i - 1) + p, E = (l ? a : i) + c);
            let x = w - E, S = w + y;
            l || (x = Math.max(x, 0), S = Math.min(S, h.length - 1));
            let T = (s.slidesGrid[x] || 0) - (s.slidesGrid[0] || 0);

            function M() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate")
            }

            if (l && w >= E ? (x -= E, r || (T += s.slidesGrid[0])) : l && w < E && (x = -E, r && (T += s.slidesGrid[0])), Object.assign(s.virtual, {
                from: x,
                to: S,
                offset: T,
                slidesGrid: s.slidesGrid,
                slidesBefore: E,
                slidesAfter: y
            }), u === x && m === S && !e) return s.slidesGrid !== g && T !== v && s.slides.forEach((e => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
            })), s.updateProgress(), void n("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: T,
                from: x,
                to: S,
                slides: function () {
                    const e = [];
                    for (let t = x; t <= S; t += 1) e.push(h[t]);
                    return e
                }()
            }), void (s.params.virtual.renderExternalUpdate ? M() : n("virtualUpdate"));
            const C = [], P = [], L = e => {
                let t = e;
                return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length), t
            };
            if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
                e.remove()
            })); else for (let e = u; e <= m; e += 1) if (e < x || e > S) {
                const t = L(e);
                s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                    e.remove()
                }))
            }
            const I = l ? -h.length : 0, z = l ? 2 * h.length : h.length;
            for (let t = I; t < z; t += 1) if (t >= x && t <= S) {
                const s = L(t);
                void 0 === m || e ? P.push(s) : (t > m && P.push(s), t < u && C.push(s))
            }
            if (P.forEach((e => {
                s.slidesEl.append(d(h[e], e))
            })), l) for (let e = C.length - 1; e >= 0; e -= 1) {
                const t = C[e];
                s.slidesEl.prepend(d(h[t], t))
            } else C.sort(((e, t) => t - e)), C.forEach((e => {
                s.slidesEl.prepend(d(h[e], e))
            }));
            f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
            })), M()
        }

        r("beforeInit", (() => {
            if (!s.params.virtual.enabled) return;
            let e;
            if (void 0 === s.passedParams.virtual.slides) {
                const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
                })))
            }
            e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c(!1, !0)
        })), r("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                c()
            }), 100)) : c())
        })), r("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                c(!0)
            }, prependSlide: function (e) {
                const t = s.activeIndex;
                let a = t + 1, i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache, t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s], r = a.getAttribute("data-swiper-slide-index");
                        r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                c(!0), s.slideTo(a, 0)
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach((t => {
                    t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                }))), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0); else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
                    t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                }))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
                c(!0), s.slideTo(t, 0)
            }, removeAllSlides: function () {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0)
            }, update: c
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a(), o = r();

        function d(e) {
            if (!t.enabled) return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i,
                p = 37 === i, u = 39 === i, m = 38 === i, h = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                    let e = !1;
                    if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
                    const a = t.el, i = a.clientWidth, r = a.clientHeight, n = o.innerWidth, l = o.innerHeight,
                        d = w(a);
                    s && (d.left -= a.scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i)
            }
        }

        function c() {
            t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0)
        }

        function p() {
            t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1)
        }

        t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
            t.params.keyboard.enabled && c()
        })), i("destroy", (() => {
            t.keyboard.enabled && p()
        })), Object.assign(t.keyboard, {enable: c, disable: p})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let d;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }), t.mousewheel = {enabled: !1};
        let c, p = o();
        const u = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function h() {
            t.enabled && (t.mouseEntered = !1)
        }

        function f(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = (new n.Date).getTime(), !1)))
        }

        function g(e) {
            let s = e, a = !0;
            if (!t.enabled) return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
            const p = n && n.contains(s.target);
            if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let m = 0;
            const h = t.rtlTranslate ? -1 : 1, g = function (e) {
                let t = 0, s = 0, a = 0, i = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                m = -g.pixelX * h
            } else {
                if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                m = -g.pixelY
            } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
            if (0 === m) return !0;
            r.invert && (m = -m);
            let v = t.getTranslate() + m * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {time: o(), delta: Math.abs(m), direction: Math.sign(m)},
                    a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                if (!a) {
                    c = void 0;
                    let n = t.getTranslate() + m * r.sensitivity;
                    const o = t.isBeginning, p = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                        direction: e.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }), t.params.freeMode.sticky) {
                        clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
                        const s = u.length ? u[u.length - 1] : void 0, a = u[0];
                        if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0); else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = m > 0 ? .8 : .2;
                            c = e, u.splice(0), d = l((() => {
                                !t.destroyed && t.params && t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        d || (d = l((() => {
                            if (t.destroyed || !t.params) return;
                            c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0
                }
            } else {
                const s = {time: o(), delta: Math.abs(m), direction: Math.sign(m), raw: e};
                u.length >= 2 && u.shift();
                const a = u.length ? u[u.length - 1] : void 0;
                if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function (e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                    return !1
                }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function v(e) {
            let s = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
        }

        function w() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
        }

        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
        })), a("destroy", (() => {
            t.params.cssMode && w(), t.mousewheel.enabled && b()
        })), Object.assign(t.mousewheel, {enable: w, disable: b})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;

        function r(e) {
            let s;
            return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e) || t.hostEl.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s)
        }

        function n(e, s) {
            const a = t.params.navigation;
            (e = T(e)).forEach((e => {
                e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
            }))
        }

        function l() {
            const {nextEl: e, prevEl: s} = t.navigation;
            if (t.params.loop) return n(s, !1), void n(e, !1);
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function d(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function c() {
            const e = t.params.navigation;
            if (t.params.navigation = re(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            let s = r(e.nextEl), a = r(e.prevEl);
            Object.assign(t.navigation, {nextEl: s, prevEl: a}), s = T(s), a = T(a);
            const i = (s, a) => {
                s && s.addEventListener("click", "next" === a ? d : o), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
            };
            s.forEach((e => i(e, "next"))), a.forEach((e => i(e, "prev")))
        }

        function p() {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = T(e), s = T(s);
            const a = (e, s) => {
                e.removeEventListener("click", "next" === s ? d : o), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            };
            e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
        }

        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {nextEl: null, prevEl: null}, a("init", (() => {
            !1 === t.params.navigation.enabled ? u() : (c(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            p()
        })), a("enable disable", (() => {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = T(e), s = T(s), t.enabled ? l() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), a("click", ((e, s) => {
            let {nextEl: a, prevEl: r} = t.navigation;
            a = T(a), r = T(r);
            const n = s.target;
            let l = r.includes(n) || a.includes(n);
            if (t.isElement && !l) {
                const e = s.path || s.composedPath && s.composedPath();
                e && (l = e.find((e => a.includes(e) || r.includes(e))))
            }
            if (t.params.navigation.hideOnClick && !l) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...r].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
            }
        }));
        const u = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), l()
            }, disable: u, update: l, init: c, destroy: p
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {el: null, bullets: []};
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function d(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
        }

        function c(e) {
            const s = e.target.closest(ne(t.params.pagination.bulletClass));
            if (!s) return;
            e.preventDefault();
            const a = y(s) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === a) return;
                const e = (i = t.realIndex, r = a, n = t.slides.length, (r %= n) == 1 + (i %= n) ? "next" : r === i - 1 ? "previous" : void 0);
                "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(a)
            } else t.slideTo(a);
            var i, r, n
        }

        function p() {
            const e = t.rtl, s = t.params.pagination;
            if (o()) return;
            let a, r, c = t.pagination.el;
            c = T(c);
            const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let o, p, u;
                if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e => {
                    e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                })), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), p = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (p + o) / 2), i.forEach((e => {
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                    e.classList.remove(...t)
                })), c.length > 1) i.forEach((e => {
                    const i = y(e);
                    i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && d(e, "prev"), i === p && d(e, "next"))
                })); else {
                    const e = i[a];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
                        e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                    })), s.dynamicBullets) {
                        const e = i[o], t = i[p];
                        for (let e = o; e <= p; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        d(e, "prev"), d(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const a = Math.min(i.length, s.dynamicMainBullets + 4), r = (n * a - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    i.forEach((e => {
                        e.style[t.isHorizontal() ? l : "top"] = `${r}px`
                    }))
                }
            }
            c.forEach(((e, r) => {
                if ("fraction" === s.type && (e.querySelectorAll(ne(s.currentClass)).forEach((e => {
                    e.textContent = s.formatFractionCurrent(a + 1)
                })), e.querySelectorAll(ne(s.totalClass)).forEach((e => {
                    e.textContent = s.formatFractionTotal(u)
                }))), "progressbar" === s.type) {
                    let i;
                    i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const r = (a + 1) / u;
                    let n = 1, l = 1;
                    "horizontal" === i ? n = r : l = r, e.querySelectorAll(ne(s.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
                    }))
                }
                "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, u), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
            }))
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
            let a = t.pagination.el;
            a = T(a);
            let r = "";
            if ("bullets" === e.type) {
                let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
                for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s => {
                "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ne(e.bulletClass)))
            })), "custom" !== e.type && i("paginationRender", a[0])
        }

        function m() {
            t.params.pagination = re(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let s;
            "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {el: s}), s = T(s), s.forEach((s => {
                "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass)
            })))
        }

        function h() {
            const e = t.params.pagination;
            if (o()) return;
            let s = t.pagination.el;
            s && (s = T(s), s.forEach((s => {
                s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c))
            }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }

        a("changeDirection", (() => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let {el: s} = t.pagination;
            s = T(s), s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (m(), u(), p())
        })), a("activeIndexChange", (() => {
            void 0 === t.snapIndex && p()
        })), a("snapIndexChange", (() => {
            p()
        })), a("snapGridLengthChange", (() => {
            u(), p()
        })), a("destroy", (() => {
            h()
        })), a("enable disable", (() => {
            let {el: e} = t.pagination;
            e && (e = T(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target, r = T(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }));
        const f = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {el: e} = t.pagination;
            e && (e = T(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), h()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = T(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), m(), u(), p()
            }, disable: f, render: u, update: p, init: m, destroy: h
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const o = a();
        let d, c, p, u, m = !1, h = null, f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e, rtlTranslate: s} = t, {dragEl: a, el: i} = e, r = t.params.scrollbar,
                n = t.params.loop ? t.progressLoop : t.progress;
            let l = c, o = (p - c) * n;
            s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout((() => {
                i.style.opacity = 0, i.style.transitionDuration = "400ms"
            }), 1e3))
        }

        function b() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e} = t, {dragEl: s, el: a} = e;
            s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
        }

        function y(e) {
            return t.isHorizontal() ? e.clientX : e.clientY
        }

        function E(e) {
            const {scrollbar: s, rtlTranslate: a} = t, {el: i} = s;
            let r;
            r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar, {scrollbar: a, wrapperEl: i} = t, {el: n, dragEl: l} = a;
            m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e)
        }

        function S(e) {
            const {scrollbar: s, wrapperEl: a} = t, {el: i, dragEl: n} = s;
            m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e))
        }

        function M(e) {
            const s = t.params.scrollbar, {scrollbar: a, wrapperEl: i} = t, {el: n} = a;
            m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l((() => {
                n.style.opacity = 0, n.style.transitionDuration = "400ms"
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {scrollbar: s, params: a} = t, i = s.el;
            if (!i) return;
            const r = i, n = !!a.passiveListeners && {passive: !1, capture: !1},
                l = !!a.passiveListeners && {passive: !0, capture: !1};
            if (!r) return;
            const d = "on" === e ? "addEventListener" : "removeEventListener";
            r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", M, l)
        }

        function P() {
            const {scrollbar: e, el: s} = t;
            t.params.scrollbar = re(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i, r;
            if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el); else if (i = o.querySelectorAll(a.el), !i.length) return;
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(ne(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
                el: i,
                dragEl: r
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }

        function L() {
            const e = t.params.scrollbar, s = t.scrollbar.el;
            s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }

        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {el: null, dragEl: null}, i("changeDirection", (() => {
            if (!t.scrollbar || !t.scrollbar.el) return;
            const e = t.params.scrollbar;
            let {el: s} = t.scrollbar;
            s = T(s), s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), i("init", (() => {
            !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g())
        })), i("update resize observerUpdate lock unlock changeDirection", (() => {
            b()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
            }(s)
        })), i("enable disable", (() => {
            const {el: e} = t.scrollbar;
            e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        })), i("destroy", (() => {
            L()
        }));
        const I = () => {
            t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), L()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), P(), b(), g()
            }, disable: I, updateSize: b, setTranslate: g, init: P, destroy: L
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({parallax: {enabled: !1}});
        const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            r = (e, s) => {
                const {rtl: a} = t, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
                let n = e.getAttribute("data-swiper-parallax-x"), l = e.getAttribute("data-swiper-parallax-y");
                const o = e.getAttribute("data-swiper-parallax-scale"),
                    d = e.getAttribute("data-swiper-parallax-opacity"),
                    c = e.getAttribute("data-swiper-parallax-rotate");
                if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
                    const t = d - (d - 1) * (1 - Math.abs(s));
                    e.style.opacity = t
                }
                let p = `translate3d(${n}, ${l}, 0px)`;
                if (null != o) {
                    p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
                }
                if (c && null != c) {
                    p += ` rotate(${c * s * -1}deg)`
                }
                e.style.transform = p
            }, n = () => {
                const {el: e, slides: s, progress: a, snapGrid: n, isElement: l} = t, o = f(e, i);
                t.isElement && o.push(...f(t.hostEl, i)), o.forEach((e => {
                    r(e, a)
                })), s.forEach(((e, s) => {
                    let l = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
                        r(e, l)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && n()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && n()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function (e) {
                void 0 === e && (e = t.params.speed);
                const {el: s, hostEl: a} = t, r = [...s.querySelectorAll(i)];
                t.isElement && r.push(...a.querySelectorAll(i)), r.forEach((t => {
                    let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
                }))
            }(s)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                limitToOriginalSize: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {enabled: !1};
        let l, o, c = 1, p = !1;
        const u = [], m = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        }, h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v, b = 1;

        function y() {
            if (u.length < 2) return 1;
            const e = u[0].pageX, t = u[0].pageY, s = u[1].pageX, a = u[1].pageY;
            return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
        }

        function x() {
            const e = t.params.zoom, s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
            if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
                const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
                return Math.min(e, s)
            }
            return s
        }

        function S(e) {
            const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
            return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
        }

        function T(e) {
            if ("mouse" === e.pointerType && u.splice(0, u.length), !S(e)) return;
            const s = t.params.zoom;
            if (l = !1, o = !1, u.push(e), !(u.length < 2)) {
                if (l = !0, m.scaleStart = y(), !m.slideEl) {
                    m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                    let a = m.slideEl.querySelector(`.${s.containerClass}`);
                    if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
                    m.maxRatio = x()
                }
                if (m.imageEl) {
                    const [e, t] = function () {
                        if (u.length < 2) return {x: null, y: null};
                        const e = m.imageEl.getBoundingClientRect();
                        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
                    }();
                    m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
                }
                p = !0
            }
        }

        function M(e) {
            if (!S(e)) return;
            const s = t.params.zoom, a = t.zoom, i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && (u[i] = e), u.length < 2 || (o = !0, m.scaleMove = y(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
        }

        function C(e) {
            if (!S(e)) return;
            if ("mouse" === e.pointerType && "pointerout" === e.type) return;
            const s = t.params.zoom, a = t.zoom, i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && u.splice(i, 1), l && o && (l = !1, o = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
        }

        function P() {
            t.touchEventsData.preventTouchMoveFromPointerMove = !1
        }

        function L(e) {
            if (!S(e) || !function (e) {
                const s = `.${t.params.zoom.containerClass}`;
                return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
            }(e)) return;
            const s = t.zoom;
            if (!m.imageEl) return;
            if (!h.isTouched || !m.slideEl) return;
            h.isMoved || (h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth, h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight, h.startX = d(m.imageWrapEl, "x") || 0, h.startY = d(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
            const a = h.width * s.scale, i = h.height * s.scale;
            h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
            if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
                if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return h.isTouched = !1, void P();
                if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return h.isTouched = !1, void P()
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout((() => {
                t.destroyed || P()
            })), h.isMoved = !0;
            const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio), {originX: n, originY: l} = m;
            h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
        }

        function I() {
            const e = t.zoom;
            m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
        }

        function z(e) {
            const s = t.zoom, a = t.params.zoom;
            if (!m.slideEl) {
                e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                let s = m.slideEl.querySelector(`.${a.containerClass}`);
                s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
            }
            if (!m.imageEl || !m.imageWrapEl) return;
            let i, r, l, o, d, p, u, g, v, b, y, S, T, M, C, P, L, I;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
            const z = "number" == typeof e ? e : null;
            1 === c && z && (i = void 0, r = void 0, h.touchesStart.x = void 0, h.touchesStart.y = void 0);
            const A = x();
            s.scale = z || A, c = z || A, !e || 1 === c && z ? (u = 0, g = 0) : (L = m.slideEl.offsetWidth, I = m.slideEl.offsetHeight, l = w(m.slideEl).left + n.scrollX, o = w(m.slideEl).top + n.scrollY, d = l + L / 2 - i, p = o + I / 2 - r, v = m.imageEl.offsetWidth || m.imageEl.clientWidth, b = m.imageEl.offsetHeight || m.imageEl.clientHeight, y = v * s.scale, S = b * s.scale, T = Math.min(L / 2 - y / 2, 0), M = Math.min(I / 2 - S / 2, 0), C = -T, P = -M, u = d * s.scale, g = p * s.scale, u < T && (u = T), u > C && (u = C), g < M && (g = M), g > P && (g = P)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
        }

        function A() {
            const e = t.zoom, s = t.params.zoom;
            if (!m.slideEl) {
                t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                let e = m.slideEl.querySelector(`.${s.containerClass}`);
                e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
            }
            m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, h.touchesStart.x = void 0, h.touchesStart.y = void 0, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
        }

        function $(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? A() : z(e)
        }

        function k() {
            return {
                passiveListener: !!t.params.passiveListeners && {passive: !0, capture: !1},
                activeListenerWithCapture: !t.params.passiveListeners || {passive: !1, capture: !0}
            }
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const {passiveListener: s, activeListenerWithCapture: a} = k();
            t.wrapperEl.addEventListener("pointerdown", T, s), t.wrapperEl.addEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.addEventListener(e, C, s)
            })), t.wrapperEl.addEventListener("pointermove", L, a)
        }

        function D() {
            const e = t.zoom;
            if (!e.enabled) return;
            e.enabled = !1;
            const {passiveListener: s, activeListenerWithCapture: a} = k();
            t.wrapperEl.removeEventListener("pointerdown", T, s), t.wrapperEl.removeEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.removeEventListener(e, C, s)
            })), t.wrapperEl.removeEventListener("pointermove", L, a)
        }

        Object.defineProperty(t.zoom, "scale", {
            get: () => b, set(e) {
                if (b !== e) {
                    const t = m.imageEl, s = m.slideEl;
                    i("zoomChange", e, t, s)
                }
                b = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            D()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function (e) {
                const s = t.device;
                if (!m.imageEl) return;
                if (h.isTouched) return;
                s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
                const a = u.length > 0 ? u[0] : e;
                h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!m.imageEl) return;
                if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
                h.isTouched = !1, h.isMoved = !1;
                let s = 300, a = 300;
                const i = g.x * s, r = h.currentX + i, n = g.y * a, l = h.currentY + n;
                0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
                const o = Math.max(s, a);
                h.currentX = r, h.currentY = l;
                const d = h.width * e.scale, c = h.height * e.scale;
                h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && $(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && I()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && I()
        })), Object.assign(t.zoom, {enable: O, disable: D, in: z, out: A, toggle: $})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;

        function i(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }

        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {control: void 0}, a("beforeInit", (() => {
            if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                ("string" == typeof t.params.controller.control ? [...document.querySelectorAll(t.params.controller.control)] : [t.params.controller.control]).forEach((e => {
                    if (t.controller.control || (t.controller.control = []), e && e.swiper) t.controller.control.push(e.swiper); else if (e) {
                        const s = `${t.params.eventsPrefix}init`, a = i => {
                            t.controller.control.push(i.detail[0]), t.update(), e.removeEventListener(s, a)
                        };
                        e.addEventListener(s, a)
                    }
                }))
            } else t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function (e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    if (e.destroyed) return;
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function (e) {
                        t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a)
            }, setTransition: function (e, s) {
                const a = t.constructor, i = t.controller.control;
                let r;

                function n(s) {
                    s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l((() => {
                        s.updateAutoHeight()
                    })), x(s.wrapperEl, (() => {
                        i && s.transitionEnd()
                    }))))
                }

                if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i)
            }
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                containerRole: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
                scrollOnFocus: !0
            }
        }), t.a11y = {clicked: !1};
        let r, n, l = null, o = (new Date).getTime();

        function d(e) {
            const t = l;
            0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
        }

        function c(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }))
        }

        function p(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }))
        }

        function u(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("role", t)
            }))
        }

        function m(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }))
        }

        function h(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }))
        }

        function f(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }))
        }

        function g(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }))
        }

        function w(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y, a = e.target;
            if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(ne(t.params.pagination.bulletClass))) {
                if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                    const e = T(t.navigation.prevEl);
                    T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage))
                }
                t.pagination && a.matches(ne(t.params.pagination.bulletClass)) && a.click()
            }
        }

        function b() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function E() {
            return b() && t.params.pagination.clickable
        }

        const x = (e, t, s) => {
            c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", w)), h(e, s), function (e, t) {
                (e = T(e)).forEach((e => {
                    e.setAttribute("aria-controls", t)
                }))
            }(e, t)
        }, S = e => {
            n && n !== e.target && !n.contains(e.target) && (r = !0), t.a11y.clicked = !0
        }, M = () => {
            r = !1, requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    t.destroyed || (t.a11y.clicked = !1)
                }))
            }))
        }, C = e => {
            o = (new Date).getTime()
        }, P = e => {
            if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - o < 100) return;
            const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!s || !t.slides.includes(s)) return;
            n = s;
            const a = t.slides.indexOf(s) === t.activeIndex,
                i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                r || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0), r = !1)
            })))
        }, L = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
            const s = t.slides.length;
            e.slideLabelMessage && t.slides.forEach(((a, i) => {
                const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
            }))
        }, I = () => {
            const e = t.params.a11y;
            t.el.append(l);
            const s = t.el;
            e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage), e.containerRole && u(s, e.containerRole);
            const i = t.wrapperEl,
                r = e.id || i.getAttribute("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var d;
            d = r, T(i).forEach((e => {
                e.setAttribute("id", d)
            })), function (e, t) {
                (e = T(e)).forEach((e => {
                    e.setAttribute("aria-live", t)
                }))
            }(i, o), L();
            let {nextEl: c, prevEl: p} = t.navigation ? t.navigation : {};
            if (c = T(c), p = T(p), c && c.forEach((t => x(t, r, e.nextSlideMessage))), p && p.forEach((t => x(t, r, e.prevSlideMessage))), E()) {
                T(t.pagination.el).forEach((e => {
                    e.addEventListener("keydown", w)
                }))
            }
            a().addEventListener("visibilitychange", C), t.el.addEventListener("focus", P, !0), t.el.addEventListener("focus", P, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", M, !0)
        };
        i("beforeInit", (() => {
            l = v("span", t.params.a11y.notificationClass), l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true")
        })), i("afterInit", (() => {
            t.params.a11y.enabled && I()
        })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && L()
        })), i("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {nextEl: e, prevEl: s} = t.navigation;
                s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))), e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)))
            }()
        })), i("paginationUpdate", (() => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                b() && t.pagination.bullets.forEach((s => {
                    t.params.pagination.clickable && (c(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(ne(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                }))
            }()
        })), i("destroy", (() => {
            t.params.a11y.enabled && function () {
                l && l.remove();
                let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
                e = T(e), s = T(s), e && e.forEach((e => e.removeEventListener("keydown", w))), s && s.forEach((e => e.removeEventListener("keydown", w))), E() && T(t.pagination.el).forEach((e => {
                    e.removeEventListener("keydown", w)
                }));
                a().removeEventListener("visibilitychange", C), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", P, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", M, !0))
            }()
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let i = !1, n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length;
                return {key: a[i - 2], value: a[i - 1]}
            }, d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
                let d = l(o.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`
                } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({value: d}, null, d) : a.history.pushState({value: d}, null, d))
            }, c = (e, s, a) => {
                if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides[i];
                    if (l(r.getAttribute("data-history")) === s) {
                        const s = t.getSlideIndex(r);
                        t.slideTo(s, e, a)
                    }
                } else t.slideTo(0, e, a)
            }, p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e, l = !1;
        const o = a(), d = r();
        s({
            hashNavigation: {
                enabled: !1, replaceState: !1, watchState: !1, getSlideIndex(e, s) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                        if (!e) return 0;
                        return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    }
                    return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                }
            }
        });
        const c = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", ""),
                s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
            if (e !== (s ? s.getAttribute("data-hash") : "")) {
                const s = t.params.hashNavigation.getSlideIndex(t, e);
                if (void 0 === s || Number.isNaN(s)) return;
                t.slideTo(s)
            }
        }, p = () => {
            if (!l || !t.params.hashNavigation.enabled) return;
            const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
            t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
        };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0, a = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && p()
        })), n("slideChange", (() => {
            l && t.params.cssMode && p()
        }))
    }, function (e) {
        let t, s, {swiper: i, extendParams: r, on: n, emit: l, params: o} = e;
        i.autoplay = {running: !1, paused: !1, timeLeft: 0}, r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
            w = o && o.autoplay ? o.autoplay.delay : 3e3, b = (new Date).getTime();

        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || C())
        }

        const E = () => {
            if (i.destroyed || !i.autoplay.running) return;
            i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
            const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
            i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
                E()
            }))
        }, x = e => {
            if (i.destroyed || !i.autoplay.running) return;
            cancelAnimationFrame(s), E();
            let a = void 0 === e ? i.params.autoplay.delay : e;
            v = i.params.autoplay.delay, w = i.params.autoplay.delay;
            const r = (() => {
                let e;
                if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], !e) return;
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
            })();
            !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
            const n = i.params.speed, o = () => {
                i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                    x()
                }))))
            };
            return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
                o()
            }), a)) : requestAnimationFrame((() => {
                o()
            })), a
        }, S = () => {
            b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart")
        }, T = () => {
            i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop")
        }, M = (e, s) => {
            if (i.destroyed || !i.autoplay.running) return;
            clearTimeout(t), e || (f = !0);
            const a = () => {
                l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
            };
            if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
            const r = d || i.params.autoplay.delay;
            d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a())
        }, C = () => {
            i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"))
        }, P = () => {
            if (i.destroyed || !i.autoplay.running) return;
            const e = a();
            "hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C()
        }, L = e => {
            "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0))
        }, I = e => {
            "mouse" === e.pointerType && (g = !1, i.autoplay.paused && C())
        };
        n("init", (() => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", I)), a().addEventListener("visibilitychange", P), S())
        })), n("destroy", (() => {
            i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", I)), a().removeEventListener("visibilitychange", P), i.autoplay.running && T()
        })), n("_freeModeStaticRelease", (() => {
            (u || f) && C()
        })), n("_freeModeNoMomentumRelease", (() => {
            i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
        })), n("beforeTransitionStart", ((e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
        })), n("sliderFirstMove", (() => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout((() => {
                f = !0, u = !0, M(!0)
            }), 200)))
        })), n("touchEnd", (() => {
            if (!i.destroyed && i.autoplay.running && p) {
                if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
                u && i.params.cssMode && C(), u = !1, p = !1
            }
        })), n("slideChange", (() => {
            !i.destroyed && i.autoplay.running && (h = !0)
        })), Object.assign(i.autoplay, {start: S, stop: T, pause: M, resume: C})
    }, function (e) {
        let {swiper: t, extendParams: s, on: i} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1, n = !1;

        function l() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex, a = e.clickedSlide;
            if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function o() {
            const {thumbs: e} = t.params;
            if (r) return !1;
            r = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), t.thumbs.swiper.update(); else if (c(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(a), n = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
        }

        function d(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                e.classList.add(r)
            })); else for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                const i = s.activeIndex;
                let r, o;
                if (s.params.loop) {
                    const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                    r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
                l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
            }
        }

        t.thumbs = {swiper: null}, i("beforeInit", (() => {
            const {thumbs: e} = t.params;
            if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                const s = a(), i = () => {
                    const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                    if (a && a.swiper) e.swiper = a.swiper, o(), d(!0); else if (a) {
                        const s = `${t.params.eventsPrefix}init`, i = r => {
                            e.swiper = r.detail[0], a.removeEventListener(s, i), o(), d(!0), e.swiper.update(), t.update()
                        };
                        a.addEventListener(s, i)
                    }
                    return a
                }, r = () => {
                    if (t.destroyed) return;
                    i() || requestAnimationFrame(r)
                };
                requestAnimationFrame(r)
            } else o(), d(!0)
        })), i("slideChange update resize observerUpdate", (() => {
            d()
        })), i("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), i("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        })), Object.assign(t.thumbs, {init: o, update: d})
    }, function (e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    if (t.params.cssMode) return;
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: o()})
                }, onTouchEnd: function (e) {
                    let {currentPos: s} = e;
                    if (t.params.cssMode) return;
                    const {params: r, wrapperEl: n, rtlTranslate: l, snapGrid: d, touchEventsData: c} = t,
                        p = o() - c.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(), s = c.velocities.pop(), a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let p = t.translate + s;
                            l && (p = -p);
                            let u, m = !1;
                            const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1) if (d[t] > -p) {
                                    e = t;
                                    break
                                }
                                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                            }
                            if (f && i("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -p : p) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, (() => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(u), x(n, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, (() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (e) {
        let t, s, a, i, {swiper: r, extendParams: n, on: l} = e;
        n({grid: {rows: 1, fill: "column"}});
        const o = () => {
            let e = r.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
        };
        l("init", (() => {
            i = r.params.grid && r.params.grid.rows > 1
        })), l("update", (() => {
            const {params: e, el: t} = r, s = e.grid && e.grid.rows > 1;
            i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s
        })), r.grid = {
            initSlides: e => {
                const {slidesPerView: i} = r.params, {rows: n, fill: l} = r.params.grid,
                    o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n
            }, unsetSlides: () => {
                r.slides && r.slides.forEach((e => {
                    e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "")
                }))
            }, updateSlide: (e, i, n) => {
                const {slidesPerGroup: l} = r.params, d = o(), {rows: c, fill: p} = r.params.grid,
                    u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                let m, h, f;
                if ("row" === p && l > 1) {
                    const s = Math.floor(e / (l * c)), a = e - c * l * s,
                        r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                    f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m
                } else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
                i.row = f, i.column = h, i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0
            }, updateWrapperSize: (e, s) => {
                const {centeredSlides: a, roundLengths: i} = r.params, n = o(), {rows: l} = r.params.grid;
                if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`), a) {
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a)
                    }
                    s.splice(0, s.length), s.push(...e)
                }
            }
        }
    }, function (e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: le.bind(t),
            prependSlide: oe.bind(t),
            addSlide: de.bind(t),
            removeSlide: ce.bind(t),
            removeAllSlides: pe.bind(t)
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({fadeEffect: {crossFade: !1}}), ue({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t;
                t.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides[s];
                    let a = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (a -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = a, a = 0);
                    const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                        n = me(0, e);
                    n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                })), he({swiper: t, duration: e, transformElements: s, allSlides: !0})
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const i = (e, t, s) => {
            let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
        };
        ue({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {el: e, wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: d} = t,
                    c = M(t), p = t.params.cubeEffect, u = t.isHorizontal(), m = t.virtual && t.params.virtual.enabled;
                let h, f = 0;
                p.shadow && (u ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${r}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), e.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    let s = e;
                    m && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                    let r = 90 * s, n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t.progress, 1), -1);
                    let h = 0, g = 0, v = 0;
                    s % 4 == 0 ? (h = 4 * -n * o, v = 0) : (s - 1) % 4 == 0 ? (h = 0, v = 4 * -n * o) : (s - 2) % 4 == 0 ? (h = o + 4 * n * o, v = o) : (s - 3) % 4 == 0 && (h = -o, v = 3 * o + 4 * o * n), l && (h = -h), u || (g = h, h = 0);
                    const w = `rotateX(${c(u ? 0 : -r)}deg) rotateY(${c(u ? r : 0)}deg) translate3d(${h}px, ${g}px, ${v}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.style.transform = w, p.slideShadows && i(t, d, u)
                }
                if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, p.shadow) if (u) h.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`; else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                    h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`
                }
                const g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                s.style.transform = `translate3d(0px,0,${g}px) rotateX(${c(t.isHorizontal() ? 0 : f)}deg) rotateY(${c(t.isHorizontal() ? -f : 0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {el: s, slides: a} = t;
                if (a.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = s.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(t, s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({flipEffect: {slideShadows: !0, limitRotation: !0}});
        const i = (e, s) => {
            let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = fe("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = fe("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0))
        };
        ue({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t, a = t.params.flipEffect, r = M(t);
                for (let n = 0; n < e.length; n += 1) {
                    const l = e[n];
                    let o = l.progress;
                    t.params.flipEffect.limitRotation && (o = Math.max(Math.min(l.progress, 1), -1));
                    const d = l.swiperSlideOffset;
                    let c = -180 * o, p = 0, u = t.params.cssMode ? -d - t.translate : -d, m = 0;
                    t.isHorizontal() ? s && (c = -c) : (m = u, u = 0, p = -c, c = 0), l.style.zIndex = -Math.abs(Math.round(o)) + e.length, a.slideShadows && i(l, o);
                    const h = `translate3d(${u}px, ${m}px, 0px) rotateX(${r(p)}deg) rotateY(${r(c)}deg)`;
                    me(0, l).style.transform = h
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), he({swiper: t, duration: e, transformElements: s})
            },
            recreateShadows: () => {
                t.params.flipEffect, t.slides.forEach((e => {
                    let s = e.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}}), ue({
            effect: "coverflow", swiper: t, on: a, setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t, r = t.params.coverflowEffect,
                    n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate,
                    c = r.depth, p = M(t);
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a[e], s = i[e], l = (o - t.swiperSlideOffset - s / 2) / s,
                        u = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let m = n ? d * u : 0, h = n ? 0 : d * u, f = -c * Math.abs(u), g = r.stretch;
                    "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * s);
                    let v = n ? 0 : g * u, w = n ? g * u : 0, b = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0);
                    const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${p(h)}deg) rotateY(${p(m)}deg) scale(${b})`;
                    if (me(0, t).style.transform = y, t.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                        let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
                            s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                        e || (e = fe("coverflow", t, n ? "left" : "top")), s || (s = fe("coverflow", t, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), s && (s.style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }, setTransition: e => {
                t.slides.map((e => h(e))).forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                }))
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        ue({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, wrapperEl: s, slidesSizesGrid: a} = t,
                    r = t.params.creativeEffect, {progressMultiplier: n} = r, l = t.params.centeredSlides, o = M(t);
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.style.transform = `translateX(calc(50% - ${e}px))`
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e[s], d = a.progress,
                        c = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
                    let p = c;
                    l || (p = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                    const u = a.swiperSlideOffset, m = [t.params.cssMode ? -u - t.translate : -u, 0, 0], h = [0, 0, 0];
                    let f = !1;
                    t.isHorizontal() || (m[1] = m[0], m[0] = 0);
                    let g = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    c < 0 ? (g = r.next, f = !0) : c > 0 && (g = r.prev, f = !0), m.forEach(((e, t) => {
                        m[t] = `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(c * n)}))`
                    })), h.forEach(((e, t) => {
                        let s = g.rotate[t] * Math.abs(c * n);
                        h[t] = s
                    })), a.style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    const v = m.join(", "), w = `rotateX(${o(h[0])}deg) rotateY(${o(h[1])}deg) rotateZ(${o(h[2])}deg)`,
                        b = p < 0 ? `scale(${1 + (1 - g.scale) * p * n})` : `scale(${1 - (1 - g.scale) * p * n})`,
                        y = p < 0 ? 1 + (1 - g.opacity) * p * n : 1 - (1 - g.opacity) * p * n,
                        E = `translate3d(${v}) ${w} ${b}`;
                    if (f && g.shadow || !f) {
                        let e = a.querySelector(".swiper-slide-shadow");
                        if (!e && g.shadow && (e = fe("creative", a)), e) {
                            const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const x = me(0, a);
                    x.style.transform = E, x.style.opacity = y, g.origin && (x.style.transformOrigin = g.origin)
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), he({swiper: t, duration: e, transformElements: s, allSlides: !0})
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cardsEffect: {slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), ue({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s, rtlTranslate: a} = t, i = t.params.cardsEffect, {
                    startTranslate: r,
                    isTouched: n
                } = t.touchEventsData, l = a ? -t.translate : t.translate;
                for (let o = 0; o < e.length; o += 1) {
                    const d = e[o], c = d.progress, p = Math.min(Math.max(c, -4), 4);
                    let u = d.swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let m = t.params.cssMode ? -u - t.translate : -u, h = 0;
                    const f = -100 * Math.abs(p);
                    let g = 1, v = -i.perSlideRotate * p, w = i.perSlideOffset - .75 * Math.abs(p);
                    const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                        y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
                        E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
                    if (y || E) {
                        const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                        v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%"
                    }
                    if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
                        const e = h;
                        h = m, m = e
                    }
                    const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                        S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
                    if (i.slideShadows) {
                        let e = d.querySelector(".swiper-slide-shadow");
                        e || (e = fe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                    }
                    d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                    me(0, d).style.transform = S
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), he({swiper: t, duration: e, transformElements: s})
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }];
    return ie.use(ge), ie
}();


/* ========== */
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && ze
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i);) ;
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Mt(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0), i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) ;
        return i < r
    }

    function ma() {
        var t, e, r = dt.length, i = dt.slice(0);
        for (ct = {}, t = dt.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t, e, r, i) {
        dt.length && !L && ma(), t.render(e, r, i || L && e < 0 && (t._initted || t._startAt)), dt.length && !L && ma()
    }

    function oa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function pa(t) {
        return t
    }

    function qa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ta(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ua(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function va(t) {
        var e = t.parent || I, r = t.keyframes ? function _setKeyframeDefaults(i) {
            return function (t, e) {
                for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
            }
        }(Z(t.keyframes)) : qa;
        if (w(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function xa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function ya(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev, a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function za(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }

    function Aa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ca(t, e, r, i) {
        return t._startAt && (L ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Ea(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ga(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ha(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }

    function Ia(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
    }

    function Ja(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ga(t.rawTime(), e), (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -X
        }
    }

    function Ka(e, r, i, n) {
        return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
    }

    function La(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ma(t, e, r, i, n) {
        return Qt(t, e, n), t._initted ? !r && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (dt.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Ra(t, e, r, i) {
        var n = t._repeat, a = ja(e) || 0, s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
    }

    function Sa(t) {
        return t instanceof Xt ? Aa(t) : Ra(t, t._dur)
    }

    function Va(e, r, i) {
        var n, a, s = t(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new $t(r[0], u, r[1 + o])
    }

    function Wa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Ya(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function _a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function cb(r) {
        return r = Mt(r)[0] || R("Invalid scope") || {}, function (t) {
            var e = r.current || r.nativeElement || r;
            return Mt(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
        }
    }

    function db(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function eb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {each: t}, _ = jt(p.ease), m = p.from || 0, g = parseFloat(p.base) || 0, y = {},
            e = 0 < m && m < 1, T = isNaN(m) || e, b = p.axis, w = m, x = m;
        return r(m) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && T && (w = m[0], x = m[1]), function (t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || p).length, c = y[d];
            if (!c) {
                if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                    for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d;) ;
                    f < d && f--
                }
                for (c = y[d] = [], i = T ? Math.min(f, d) * w - .5 : m % f, n = f === U ? 0 : T ? d * x / f - .5 : m / f | 0, l = U, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
                "random" === m && db(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ya(p.amount || p.each) || 0, _ = _ && d < 0 ? Yt(_) : _
            }
            return d = (c[t] - c.min) / c.max || 0, ja(c.b + (_ ? _(d) : d) * c.v) + c.u
        }
    }

    function fb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function (e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
        }
    }

    function gb(h, e) {
        var l, f, r = Z(h);
        return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Mt(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function (t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function (e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;) (r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
        } : fb(h))
    }

    function hb(t, e, r, i) {
        return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function lb(e, r, t) {
        return Wa(t, function (t) {
            return e[~~r(t)]
        })
    }

    function ob(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function rb(t, e, r) {
        var i, n, a, s = t.labels, o = U;
        for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function tb(t) {
        return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && Ct(t, "onInterrupt"), t
    }

    function wb(t) {
        if (t) if (t = !t.name && t.default || t, x() || t.headless) {
            var e = t.name, r = s(t), i = e && !r && t.init ? function () {
                    this._props = []
                } : t, n = {init: T, render: he, add: Wt, kill: ce, modifier: fe, rawVars: 0},
                a = {targetTest: 0, get: 0, getSetter: ne, aliases: {}, register: 0};
            if (Ft(), t !== i) {
                if (pt[e]) return;
                qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            S(e, i), t.register && t.register(ze, i, _e)
        } else At.push(t)
    }

    function zb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + .5 | 0
    }

    function Ab(e, r, i) {
        var n, a, s, o, u, h, l, f, d, c, p = e ? t(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : zt.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), zt[e]) p = zt[e]; else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & St, p & St, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St]
            } else if ("hsl" === e.substr(0, 3)) if (p = c = e.match(tt), r) {
                if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
            } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = zb(o + 1 / 3, n, a), p[1] = zb(o, n, a), p[2] = zb(o - 1 / 3, n, a); else p = e.match(tt) || zt.transparent;
            p = p.map(Number)
        }
        return r && !c && (n = p[0] / St, a = p[1] / St, s = p[2] / St, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (d = l - f, u = .5 < h ? d / (2 - l - f) : d / (l + f), o = l === n ? (a - s) / d + (a < s ? 6 : 0) : l === a ? (s - n) / d + 2 : (n - a) / d + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Bb(t) {
        var r = [], i = [], n = -1;
        return t.split(Et).forEach(function (t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Cb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Et), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u) return t;
        if (u = u.map(function (t) {
            return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }), r && (a = Bb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n) for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Fb(t) {
        var e, r = t.join(" ");
        if (Et.lastIndex = 0, Et.test(r)) return e = Dt.test(r), t[1] = Cb(t[1], e), t[0] = Cb(t[0], e, Bb(t[1])), !0
    }

    function Ob(t) {
        var e = (t + "").split("("), r = Lt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(oa)) : Lt._CE && It.test(t) ? Lt._CE("", t) : r
    }

    function Qb(t, e) {
        for (var r, i = t._first; i;) i instanceof Xt ? Qb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Sb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {easeIn: e, easeOut: r, easeInOut: i};
        return ha(t, function (t) {
            for (var e in Lt[t] = ot[t] = a, Lt[n = t.toLowerCase()] = r, a) Lt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Lt[t + "." + e] = a[e]
        }), a
    }

    function Tb(e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Ub(r, t, e) {
        function Jm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }

        var i = 1 <= t ? t : 1, n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1), a = n / N * (Math.asin(1 / i) || 0),
            s = "out" === r ? Jm : "in" === r ? function (t) {
                return 1 - Jm(1 - t)
            } : Tb(Jm);
        return n = N / n, s.config = function (t, e) {
            return Ub(r, t, e)
        }, s
    }

    function Vb(e, r) {
        function Rm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }

        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Rm : "in" === e ? function (t) {
            return 1 - Rm(1 - t)
        } : Tb(Rm);
        return t.config = function (t) {
            return Vb(e, t)
        }, t
    }

    var F, L, l, I, h, n, a, i, o, f, d, c, p, _, m, g, b, O, k, M, C, A, z, E, D, B, Y, j,
        q = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        V = {duration: .5, overwrite: !1, delay: 0}, U = 1e8, X = 1 / U, N = 2 * Math.PI, G = N / 4, W = 0,
        K = Math.sqrt, J = Math.cos, H = Math.sin,
        $ = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
        }, Z = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi, st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ot = {},
        ut = {suppressEvents: !0, isStart: !0, kill: !1}, ht = {suppressEvents: !0, kill: !1},
        lt = {suppressEvents: !0}, ft = {}, dt = [], ct = {}, pt = {}, _t = {}, mt = 30, gt = [], vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        }, Tt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        }, bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        }, wt = {_start: 0, endTime: T, totalDuration: T}, xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels, u = t._recent || wt, h = t.duration() >= U ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (Z(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        }, Ot = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        }, kt = [].slice, Mt = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? Z(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function (t) {
                    return r(t) && !e || _a(t, 1) ? i.push.apply(i, Mt(t)) : i.push(t)
                }) || i
            }(t, i) : _a(t) ? kt.call(t, 0) : t ? [t] : [] : kt.call((e || a).querySelectorAll(t), 0)
        }, Pt = function mapRange(e, t, r, i, n) {
            var a = t - e, s = i - r;
            return Wa(n, function (t) {
                return r + ((t - e) / a * s || 0)
            })
        }, Ct = function _callback(t, e, r) {
            var i, n, a, s = t.vars, o = s[e], u = l, h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && dt.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        }, At = [], St = 255, zt = {
            aqua: [0, St, St],
            lime: [0, St, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, St],
            navy: [0, 0, 128],
            white: [St, St, St],
            olive: [128, 128, 0],
            yellow: [St, St, 0],
            orange: [St, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [St, 0, 0],
            pink: [St, 192, 203],
            cyan: [0, St, St],
            transparent: [St, St, St, 0]
        }, Et = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in zt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(), Dt = /hsl[a]?\(/, Rt = (k = Date.now, M = 500, C = 33, A = k(), z = A, D = E = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                yl(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = ze, (h.gsapVersions || (h.gsapVersions = [])).push(ze.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), At.forEach(wb)), m = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, p && g.sleep(), _ = m || function (t) {
                    return setTimeout(t, D - 1e3 * g.time + 1 | 0)
                }, c = 1, yl(2))
            },
            sleep: function sleep() {
                (m ? cancelAnimationFrame : clearTimeout)(p), c = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                M = t || 1 / 0, C = Math.min(e || 33, M)
            },
            fps: function fps(t) {
                E = 1e3 / (t || 240), D = 1e3 * g.time + E
            },
            add: function add(n, t, e) {
                var a = t ? function (t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a
            },
            remove: function remove(t, e) {
                ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= O && O--
            },
            _listeners: B = []
        }), Ft = function _wake() {
            return !c && Rt.wake()
        }, Lt = {}, It = /^[\d.\-M][\d.\-,\s]/, Bt = /["']/g, Yt = function _invertEase(e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        }, jt = function _parseEase(t, e) {
            return t && (s(t) ? t : Lt[t] || Ob(t)) || e
        };

    function yl(t) {
        var e, r, i, n, a = k() - z, s = !0 === t;
        if ((M < a || a < 0) && (A += a - C), (0 < (e = (i = (z += a) - A) - D) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, D += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(yl)), r) for (O = 0; O < B.length; O++) B[O](i, b, n, t)
    }

    function gn(t) {
        return t < j ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }

    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        Sb(t + ",Power" + (r - 1), e ? function (t) {
            return Math.pow(t, r)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, r)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function (t) {
        return 1 - gn(1 - t)
    }, gn), Sb("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Sb("Circ", function (t) {
        return -(K(1 - t * t) - 1)
    }), Sb("Sine", function (t) {
        return 1 === t ? 1 : 1 - J(t * G)
    }), Sb("Back", Vb("in"), Vb("out"), Vb()), Lt.SteppedEase = Lt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0;
            return function (t) {
                return ((i * Ot(0, .99999999, t) | 0) + n) * r
            }
        }
    }, V.ease = Lt["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return vt += t + "," + t + "Params,"
    });
    var qt, Vt = function GSCache(t, e) {
        this.id = W++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : ne
    }, Ut = ((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
    }, qt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }, qt.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, qt.totalTime = function totalTime(t, e) {
        if (Ft(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
    }, qt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }, qt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 < this.rawTime() ? 1 : 0
    }, qt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : 0 < this.rawTime() ? 1 : 0
    }, qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
    }, qt.timeScale = function timeScale(t, e) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var r = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, this.totalTime(Ot(-Math.abs(this._delay), this._tDur, r), !1 !== e), Ha(this), function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        }(this)
    }, qt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps
    }, qt.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
        }
        return this._start
    }, qt.endTime = function endTime(t) {
        return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
    }, qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return L = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), L = e, this
    }, qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
        return !this.parent && this._sat ? this._sat.globalTime(t) : r
    }, qt.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }, qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
            var e = this._time;
            return this._rDelay = t, Sa(this), e ? this.time(e) : this
        }
        return this._rDelay
    }, qt.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo
    }, qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e))
    }, qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e))
    }, qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
    }, qt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
    }, qt.resume = function resume() {
        return this.paused(!1)
    }, qt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0
    }, qt.invalidate = function invalidate() {
        return this._initted = this._act = 0, this._zTime = -X, this
    }, qt.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
    }, qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
    }, qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
            function Co() {
                var t = i.then;
                i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
            }

            var r = s(t) ? t : pa;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Co() : i._prom = Co
        })
    }, qt.kill = function kill() {
        tb(this)
    }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), c || Rt.wake()
    }

    qa(Ut.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Xt = function (i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), I && Ka(t.parent || I, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
        }

        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Va(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Va(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Va(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ka(this, $t.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur, v = t <= 0 ? 0 : ja(t), y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = Tt(this._tTime, o), !_ && this._tTime && d !== s && this._tTime - d * o - this._dur <= 0 && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var T = c && 1 & d, b = T === (c && 1 & s);
                        if (s < d && (T = !T), _ = T ? 0 : v % g ? g : v, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ct(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Qb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r) for (i = t._first; i && i._start <= r;) {
                        if ("isPause" === i.data && i._start > e) return i;
                        i = i._next
                    } else for (i = t._last; i && i._start >= r;) {
                        if ("isPause" === i.data && i._start < e) return i;
                        i = i._prev
                    }
                }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && !s && (Ct(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t) for (n = this._first; n;) {
                    if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                        if (n.parent !== this) return this.render(t, e, r);
                        if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                            h = 0, a && (v += this._zTime = -X);
                            break
                        }
                    }
                    n = a
                } else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n;) {
                        if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || L && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = w ? -X : X);
                                break
                            }
                        }
                        n = a
                    }
                }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
                this._onUpdate && !e && Ct(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof Ut)) {
                if (Z(e)) return e.forEach(function (t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = $t.delayedCall(0, e)
            }
            return this !== e ? Ka(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = $t.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Nt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s;) s instanceof $t ? la(s._targets, a) && (o ? (!Nt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this, n = xt(i, t), a = e.startAt, s = e.onStart, o = e.onStartParams, u = e.immediateRender,
                h = $t.to(i, qa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, qa({startAt: {time: xt(this, t)}}, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e) for (i in a) a[i] >= r && (a[i] += t);
            return Aa(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ra(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (na(I, Ga(t, I)), f = Rt.frame), Rt.frame >= mt) {
                mt += q.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Rt.sleep()
                }
            }
        }, Timeline
    }(Ut);
    qa(Xt.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});

    function ac(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
            if (s(t) && (t = Kt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || Z(t) || $(t)) return r(t) ? Kt(t, a, e, i, n) : t;
            var o, u = {};
            for (o in t) u[o] = Kt(t[o], a, e, i, n);
            return u
        }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== d)) for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function gc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (Z(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
            return a.push({t: e / (r.length - 1) * 100, v: t, e: s})
        }); else for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({t: parseFloat(t), v: r[n], e: s})
    }

    var Nt, Gt, Wt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
        s(n) && (n = n(a || 0, t, o));
        var d, c = t[e],
            p = "get" !== i ? i : s(c) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
            _ = s(c) ? l ? re : te : Zt;
        if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(d = ka(p, n) + (Ya(p) || 0)) && 0 !== d || (n = d))), !f || p !== n || Gt) return isNaN(p * n) || "" === n ? (c || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
            var o, u, h, l, f, d, c, p, _ = new _e(this._pt, t, e, 0, 1, ue, null, n), m = 0, g = 0;
            for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                _next: _._pt,
                p: f || 1 === g ? f : ",",
                s: d,
                c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d,
                m: h && h < 4 ? Math.round : 0
            }, m = it.lastIndex);
            return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _
        }.call(this, t, e, p, n, _, h || q.stringFilter, l)) : (d = new _e(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof c ? se : ae, 0, _), l && (d.fp = l), u && d.modifier(u, this, t), this._pt = d)
    }, Qt = function _initTween(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c, p, _, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender,
            T = m.lazy, b = m.onUpdate, x = m.runBackwards, O = m.yoyoEase, k = m.keyframes, M = m.autoRevert,
            P = t._dur, C = t._startAt, A = t._targets, S = t.parent, z = S && "nested" === S.data ? S.vars.targets : A,
            E = "auto" === t._overwrite && !F, D = t.timeline;
        if (!D || k && g || (g = "none"), t._ease = jt(g, V.ease), t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !D && !!m.runBackwards, !D || k && !m.stagger) {
            if (p = (l = A[0] ? fa(A[0]).harness : 0) && m[l.prop], i = ua(m, ft), C && (C._zTime < 0 && C.progress(1), e < 0 && x && y && !M ? C.render(-1, !0) : C.revert(x && P ? ht : ut), C._lazy = 0), v) {
                if (za(t._startAt = $t.set(A, qa({
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: !C && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b && function () {
                        return Ct(t, "onUpdate")
                    },
                    stagger: 0
                }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L || !y && !M) && t._startAt.revert(ht), y && P && e <= 0 && r <= 0) return void (e && (t._zTime = e))
            } else if (x && P && !C) if (e && (y = !1), a = qa({
                overwrite: !1,
                data: "isFromStart",
                lazy: y && !C && w(T),
                immediateRender: y,
                stagger: 0,
                parent: S
            }, i), p && (a[l.prop] = p), za(t._startAt = $t.set(A, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                if (!e) return
            } else _initTween(t._startAt, X, X);
            for (t._pt = t._ptCache = 0, T = P && w(T) || T && !P, n = 0; n < A.length; n++) {
                if (h = (o = A[n])._gsap || ea(A)[n]._gsap, t._ptLookup[n] = d = {}, ct[h.id] && dt.length && ma(), c = z === A ? n : z.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, c, z) && (t._pt = s = new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
                    d[t] = s
                }), f.priority && (u = 1)), !l || p) for (a in i) pt[a] && (f = ac(a, i, t, c, o, z)) ? f.priority && (u = 1) : d[a] = s = Wt.call(t, o, a, "get", i[a], c, z, 0, m.stringFilter);
                t._op && t._op[n] && t.kill(o, t._op[n]), E && t._pt && (Nt = t, I.killTweensOf(o, d, t.globalTime(e)), _ = !t.parent, Nt = 0), t._pt && T && (ct[h.id] = 1)
            }
            u && pe(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, k && e <= 0 && D.render(U, !0, !0)
    }, Kt = function _parseFuncOrString(t, e, i, n, a) {
        return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
    }, Jt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ht = {};
    ha(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return Ht[t] = 1
    });
    var $t = function (D) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, d, c, p = (a = D.call(this, n ? r : va(r)) || this).vars, _ = p.duration, m = p.delay,
                g = p.immediateRender, T = p.stagger, b = p.overwrite, x = p.keyframes, O = p.defaults,
                k = p.scrollTrigger, M = p.yoyoEase, P = r.parent || I,
                C = (Z(e) || $(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
            if (a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://gsap.com", !q.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Xt({
                    data: "nested",
                    defaults: O || {},
                    targets: P && "nested" === P.data ? P.vars.targets : C
                })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = C.length, d = T && eb(T), v(T)) for (l in T) ~Jt.indexOf(l) && ((c = c || {})[l] = T[l]);
                    for (o = 0; o < h; o++) (u = ua(r, Ht)).stagger = 0, M && (u.yoyoEase = M), c && yt(u, c), f = C[o], u.duration = +Kt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Kt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, d ? d(o, f, C) : 0), s._ease = Lt.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    va(qa(s.vars.defaults, {ease: "none"})), s._ease = jt(x.ease || r.ease || "none");
                    var A, S, z, E = 0;
                    if (Z(x)) x.forEach(function (t) {
                        return s.to(C, t, ">")
                    }), s.duration(); else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
                        for (l in u) for (A = u[l].sort(function (t, e) {
                            return t.t - e.t
                        }), o = E = 0; o < A.length; o++) (z = {
                            ease: (S = A[o]).e,
                            duration: (S.t - (o ? A[o - 1].t : 0)) / 100 * _
                        })[l] = S.v, s.to(C, z, E), E += z.duration;
                        s.duration() < _ && s.to({}, {duration: _ - s.duration()})
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || F || (Nt = _assertThisInitialized(a), I.killTweensOf(C), Nt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -X, a.render(Math.max(0, -m) || 0)), k && La(_assertThisInitialized(a), k), a
        }

        _inheritsLoose(Tween, D);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, c = this._tDur, p = this._dur, _ = t < 0,
                m = c - X < t && !_ ? c : t < X ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === c ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === ja(m / s) && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === d && !r && this._initted && a === o) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Qb(l, u), this.vars.repeatRefresh && !u && !this._lock && this._time !== s && this._initted && (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (!(d === this._time || r && this.vars.repeatRefresh && a !== o)) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !d && !e && !a && (Ct(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !d || !(m || d || u) || (Ct(this, m === c ? "onComplete" : "onReverseComplete", !0), !this._prom || m < c && 0 < this.timeScale() || this._prom()))
                }
            } else !function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio, u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                    var e = t.parent;
                    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1, h = t._rDelay, l = 0;
                if (h && t._repeat && (l = Ot(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || L || i || t._zTime === X || !e && t._zTime) {
                    if (!t._initted && Ma(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && Ct(t, "onUpdate"), l && t._repeat && !r && t.parent && Ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || L || (Ct(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), D.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i, n) {
            c || Rt.wake(), this._ts || this.play();
            var a, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Qt(this, s), a = this._ease(s / this._dur), function _updatePropTweens(t, e, r, i, n, a, s, o) {
                var u, h, l, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!d) for (d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                    if ((u = l[f][e]) && u.d && u.d._pt) for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                    if (!u) return Gt = 1, t.vars[e] = "+=0", Qt(t, s), Gt = 0, o ? R(e + " not eligible for reset") : 1;
                    d.push(u)
                }
                for (f = d.length; f--;) (u = (h = d[f])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + a * u.c : i, u.c = r - u.s, h.e && (h.e = ia(r) + Ya(h.e)), h.b && (h.b = u.s + Ya(h.b))
            }(this, t, e, r, i, a, s, n) ? this.resetTo(t, e, r, i, 1) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets, d = t ? Mt(t) : f, c = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) ;
                return r < 0
            }(f, d)) return "all" === e && (this._pt = 0), tb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function (t) {
                return u[t] = 1
            }), e = u), e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0, o = s && s.aliases;
                if (!o) return e;
                for (i in r = yt({}, e), o) if (i in r) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                return r
            }(f, e)), l = f.length; l--;) if (~d.indexOf(f[l])) for (u in a = c[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o) (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && tb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Va(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Va(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }, Tween
    }(Ut);
    qa($t.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function (r) {
        $t[r] = function () {
            var t = new Xt, e = kt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function oc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function wc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }

    var Zt = function _setterPlain(t, e, r) {
        return t[e] = r
    }, te = function _setterFunc(t, e, r) {
        return t[e](r)
    }, re = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }, ne = function _getSetter(t, e) {
        return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt
    }, ae = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }, se = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }, ue = function _renderComplexString(t, e) {
        var r = e._pt, i = "";
        if (!t && e.b) i = e.b; else if (1 === t && e.e) i = e.e; else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }, he = function _renderPropTweens(t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    }, fe = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
    }, ce = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
        return !e
    }, pe = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a;) {
            for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e
        }
        t._pt = i
    }, _e = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set, this.set = wc, this.m = t, this.mt = r, this.tween = e
    }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ae, this.d = s || this, this.set = o || Zt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }

    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Xt, I = new Xt({
        sortChildren: !1,
        defaults: V,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), q.stringFilter = Fb;

    function Ec(t) {
        return (ye[t] || Te).map(function (t) {
            return t()
        })
    }

    function Fc() {
        var t = Date.now(), o = [];
        2 < t - Oe && (Ec("matchMediaInit"), ge.forEach(function (t) {
            var e, r, i, n, a = t.queries, s = t.conditions;
            for (r in a) (e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Ec("matchMediaRevert"), o.forEach(function (e) {
            return e.onMatch(e, function (t) {
                return e.add(null, t)
            })
        }), Oe = t, Ec("matchMedia"))
    }

    var me, ge = [], ye = {}, Te = [], Oe = 0, Me = 0, Pe = ((me = Context.prototype).add = function add(t, i, n) {
        function Gw() {
            var t, e = l, r = a.selector;
            return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
        }

        s(t) && (n = i, i = t, t = s);
        var a = this;
        return a.last = Gw, t === s ? Gw(a, function (t) {
            return a.add(null, t)
        }) : t ? a[t] = Gw : Gw
    }, me.ignore = function ignore(t) {
        var e = l;
        l = null, t(this), l = e
    }, me.getTweens = function getTweens() {
        var e = [];
        return this.data.forEach(function (t) {
            return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && !(t.parent && "nested" === t.parent.data) && e.push(t)
        }), e
    }, me.clear = function clear() {
        this._r.length = this.data.length = 0
    }, me.kill = function kill(i, t) {
        var n = this;
        if (i ? function () {
            for (var t, e = n.getTweens(), r = n.data.length; r--;) "isFlip" === (t = n.data[r]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function (t) {
                return e.splice(e.indexOf(t), 1)
            }));
            for (e.map(function (t) {
                return {
                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                    t: t
                }
            }).sort(function (t, e) {
                return e.g - t.g || -1 / 0
            }).forEach(function (t) {
                return t.t.revert(i)
            }), r = n.data.length; r--;) (t = n.data[r]) instanceof Xt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : t instanceof $t || !t.revert || t.revert(i);
            n._r.forEach(function (t) {
                return t(i, n)
            }), n.isReverted = !0
        }() : this.data.forEach(function (t) {
            return t.kill && t.kill()
        }), this.clear(), t) for (var e = ge.length; e--;) ge[e].id === this.id && ge.splice(e, 1)
    }, me.revert = function revert(t) {
        this.kill(t || {})
    }, Context);

    function Context(t, e) {
        this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Me++, t && this.add(t)
    }

    var Ce, Ae = ((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {matches: t});
        var i, n, a, s = new Pe(0, r || this.scope), o = s.conditions = {};
        for (n in l && !s.selector && (s.selector = l.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ge.indexOf(s) < 0 && ge.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Fc) : i.addEventListener("change", Fc));
        return a && e(s, function (t) {
            return s.add(null, t)
        }), this
    }, Ce.revert = function revert(t) {
        this.kill(t || {})
    }, Ce.kill = function kill(e) {
        this.contexts.forEach(function (t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t, l && l.data.push(this)
    }

    var Se = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (t) {
                return wb(t)
            })
        },
        timeline: function timeline(t) {
            return new Xt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Mt(i)[0]);
            var a = fa(i || {}).get, s = e ? pa : oa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function (t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Mt(r)).length) {
                var n = r.map(function (t) {
                    return ze.quickSetter(t, e, i)
                }), a = n.length;
                return function (t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e], o = fa(r), u = o.harness && (o.harness.aliases || {})[e] || e, h = s ? function (t) {
                var e = new s;
                d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && he(1, d)
            } : o.set(r, u);
            return s ? h : function (t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function $x(t, e, r) {
                return n.resetTo(i, t, e, r)
            }

            var r, n = ze.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return $x.tween = n, $x
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {})
        },
        config: function config(t) {
            return ta(q, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name, n = t.effect, e = t.plugins, a = t.defaults, r = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function (t, e, r) {
                return n(Mt(t), qa(e || {}, a), r)
            }, r && (Xt.prototype[i] = function (t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Lt[t] = jt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? jt(t, e) : Lt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Xt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
            return Ka(I, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Pe(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Ae(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return ge.forEach(function (t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Fc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = ye[t] || (ye[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = ye[t], i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return Z(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function (t) {
                    return (i + (t - e) % i) % i + e
                })
            }, wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e, n = 2 * i;
                return Z(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function (t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            }, distribute: eb, random: hb, snap: gb, normalize: function normalize(t, e, r) {
                return Pt(t, e, 0, 1, r)
            }, getUnit: Ya, clamp: function clamp(e, r, t) {
                return Wa(t, function (t) {
                    return Ot(e, r, t)
                })
            }, splitColor: Ab, toArray: Mt, selector: cb, mapRange: Pt, pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            }, unitize: function unitize(e, r) {
                return function (t) {
                    return e(parseFloat(t)) + (r || Ya(t))
                }
            }, interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e), d = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {p: e}, i = {p: i}; else if (Z(e) && !Z(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt(Z(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Wt.call(d, e, s, "get", i[s]);
                        a = function func(t) {
                            return he(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Wa(t, a)
            }, shuffle: db
        },
        install: P,
        effects: _t,
        ticker: Rt,
        updateRoot: Xt.updateRoot,
        plugins: pt,
        globalTimeline: I,
        core: {
            PropTween: _e,
            globals: S,
            Tween: $t,
            Timeline: Xt,
            Animation: Ut,
            getCache: fa,
            _removeLinkedListItem: ya,
            reverting: function reverting() {
                return L
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return Se[t] = $t[t]
    }), Rt.add(Xt.updateRoot), d = Se.to({}, {duration: 0});

    function Jc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Lc(t, a) {
        return {
            name: t, rawVars: 1, init: function init(t, n, e) {
                e._onInit = function (t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function (t) {
                        return e[t] = 1
                    }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Jc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }

    var ze = Se.registerPlugin({
        name: "attr", init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        }, render: function render(t, e) {
            for (var r = e._pt; r;) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray", init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Lc("roundProps", fb), Lc("modifiers"), Lc("snap", gb)) || Se;
    $t.version = Xt.version = ze.version = "3.12.5", o = 1, x() && Ft();

    function vd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function wd(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function yd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function zd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function Ad(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Bd(t, e, r) {
        return t.style[e] = r
    }

    function Cd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Dd(t, e, r) {
        return t._gsap[e] = r
    }

    function Ed(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Fd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Gd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Jd(t, e) {
        var r = this, i = this.target, n = i.style, a = i._gsap;
        if (t in ar && n) {
            if (this.tfm = this.tfm || {}, "transform" === t) return dr.transform.split(",").forEach(function (t) {
                return Jd.call(r, t, e)
            });
            if (~(t = dr[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
                return r.tfm[t] = yr(i, t)
            }) : this.tfm[t] = a.x ? a[t] : yr(i, t), t === pr && (this.tfm.zOrigin = a.zOrigin), 0 <= this.props.indexOf(cr)) return;
            a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pr, e, "")), t = cr
        }
        (n || e) && this.props.push(t, e, n[t])
    }

    function Kd(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Ld() {
        var t, e, r = this.props, i = this.target, n = i.style, a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(hr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Be()) && t.isStart || n[cr] || (Kd(n), a.zOrigin && n[pr] && (n[pr] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
        }
    }

    function Md(t, e) {
        var r = {target: t, props: [], revert: Ld, save: Jd};
        return t._gsap || ze.core.getCache(t), e && e.split(",").forEach(function (t) {
            return r.save(t)
        }), r
    }

    function Od(t, e) {
        var r = De.createElementNS ? De.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : De.createElement(t);
        return r && r.style ? r : De.createElement(t)
    }

    function Pd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(hr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Pd(t, mr(e) || e, 1) || ""
    }

    function Sd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Ee = window, De = Ee.document, Re = De.documentElement, Le = Od("div") || {style: {}}, Od("div"), cr = mr(cr), pr = cr + "Origin", Le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ye = !!mr("perspective"), Be = ze.core.reverting, Fe = 1)
    }

    function Td(t) {
        var e,
            r = Od("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Td
        } catch (t) {
        } else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e
    }

    function Ud(t, e) {
        for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Vd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Td.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Td || (r = Td.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Ud(e, ["x", "cx", "x1"]) || 0,
            y: +Ud(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Wd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Vd(t))
    }

    function Xd(t, e) {
        if (e) {
            var r, i = t.style;
            e in ar && e !== pr && (e = cr), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(hr, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }

    function Yd(t, e, r, i, n, a) {
        var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function _d(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = Le.style,
            f = lr.test(e), d = "svg" === t.tagName.toLowerCase(),
            c = (d ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, _ = "%" === i;
        if (i === h || !u || gr[i] || gr[h]) return u;
        if ("px" === h || p || (u = _d(t, e, r, "px")), o = t.getCTM && Wd(t), (_ || "%" === h) && (ar[e] || ~e.indexOf("adius"))) return n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ia(_ ? u / n * 100 : u / 100 * n);
        if (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== De && a.appendChild || (a = De.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache) return ia(u / s.width * 100);
        if (!_ || "height" !== e && "width" !== e) !_ && "%" !== h || vr[Pd(a, "display")] || (l.position = Pd(t, "position")), a === t && (l.position = "static"), a.appendChild(Le), n = Le[c], a.removeChild(Le), l.position = "absolute"; else {
            var m = t.style[e];
            t.style[e] = 100 + i, n = t[c], m ? t.style[e] = m : Xd(t, e)
        }
        return f && _ && ((s = fa(a)).time = Rt.time, s.width = a[c]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0)
    }

    function be(t, e, r, i) {
        if (!r || "none" === r) {
            var n = mr(e, t, 1), a = n && Pd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Pd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g = new _e(this._pt, t.style, e, 0, 1, ue), v = 0, y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (f = t.style[e], t.style[e] = i, i = Pd(t, e) || i, f ? t.style[e] = f : Xd(t, e)), Fb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ka(h, d) + m), c = parseFloat(d), _ = d.substr((c + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || q.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = _d(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: c - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? Ad : zd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function de(t) {
        var e = t.split(" "), r = e[0], i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Tr[r] || r, e[1] = Tr[i] || i, e.join(" ")
    }

    function ee(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1; else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], ar[r] && (i = 1, r = "transformOrigin" === r ? pr : cr), Xd(a, r);
            i && (Xd(a, cr), u && (u.svg && a.removeAttribute("transform"), Or(a, 1), u.uncache = 1, Kd(s)))
        }
    }

    function ie(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function je(t) {
        var e = Pd(t, cr);
        return ie(e) ? wr : e.substr(7).match(et).map(ia)
    }

    function ke(t, e) {
        var r, i, n, a, s = t._gsap || fa(t), o = t.style, u = je(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? wr : u : (u !== wr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = je(t), n ? o.display = n : Xd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function le(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || ke(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, c = h.xOffset || 0,
            p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "),
            w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        r ? l !== wr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Vd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[pr] = "0px 0px", a && (Yd(a, h, "xOrigin", f, w), Yd(a, h, "yOrigin", d, x), Yd(a, h, "xOffset", c, h.xOffset), Yd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function oe(t, e, r) {
        var i = Ya(e);
        return ia(parseFloat(e) + parseFloat(_d(t, "x", r + "px", i))) + i
    }

    function ve(t, e, i, n, a) {
        var s, o, u = 360, h = r(a), l = parseFloat(a) * (h && ~a.indexOf("rad") ? sr : 1) - n, f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new _e(t._pt, e, i, n, l, wd), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function we(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function xe(t, e, r) {
        var i, n, a, s, o, u, h, l = we({}, r._gsap), f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[cr] = e, i = Or(r, 1), Xd(r, cr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[cr], f[cr] = e, i = Or(r, 1), f[cr] = a), ar) (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new _e(t._pt, i, n, o, u - o, vd), t._pt.u = h || 0, t._props.push(n));
        we(i, l)
    }

    var Ee, De, Re, Fe, Le, Ie, Be, Ye, qe = Lt.Power0, Ve = Lt.Power1, Ue = Lt.Power2, Xe = Lt.Power3, Ne = Lt.Power4,
        Ge = Lt.Linear, We = Lt.Quad, Qe = Lt.Cubic, Ke = Lt.Quart, Je = Lt.Quint, He = Lt.Strong, $e = Lt.Elastic,
        Ze = Lt.Back, tr = Lt.SteppedEase, er = Lt.Bounce, rr = Lt.Sine, ir = Lt.Expo, nr = Lt.Circ, ar = {},
        sr = 180 / Math.PI, or = Math.PI / 180, ur = Math.atan2, hr = /([A-Z])/g,
        lr = /(left|right|width|margin|padding|x)/i, fr = /[\s,\(]\S/,
        dr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, cr = "transform",
        pr = cr + "Origin", _r = "O,Moz,ms,Ms,Webkit".split(","), mr = function _checkPropPrefix(t, e, r) {
            var i = (e || Le).style, n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(_r[n] + t in i);) ;
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? _r[n] : "") + t
        }, gr = {deg: 1, rad: 1, turn: 1}, vr = {grid: 1, flex: 1}, yr = function _get(t, e, r, i) {
            var n;
            return Fe || Sd(), e in dr && "transform" !== e && ~(e = dr[e]).indexOf(",") && (e = e.split(",")[0]), ar[e] && "transform" !== e ? (n = Or(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : kr(Pd(t, pr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = br[e] && br[e](t, e, r) || Pd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? _d(t, e, n, r) + r : n
        }, Tr = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, br = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new _e(t._pt, e, r, 0, 0, ee);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        }, wr = [1, 0, 0, 1, 0, 0], xr = {}, Or = function _parseTransform(t, e) {
            var r = t._gsap || new Vt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w, x, O, k, M, P, C, A, S, z, E, D, R, F = t.style,
                L = r.scaleX < 0, I = "deg", B = getComputedStyle(t), Y = Pd(t, pr) || "0";
            return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !Wd(t)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (F[cr] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[cr] ? B[cr] : "")), F.scale = F.rotate = F.translate = "none"), m = ke(t, r.svg), r.svg && (M = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), le(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== wr && (T = m[0], b = m[1], w = m[2], x = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ur(b, T) * sr : 0, (f = w || x ? ur(w, x) * sr + u : 0) && (o *= Math.abs(Math.cos(f * or))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], E = m[7], A = m[8], S = m[9], z = m[10], D = m[11], i = m[12], n = m[13], a = m[14], h = (g = ur(R, z)) * sr, g && (M = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), P = k * v + S * y, C = R * v + z * y, A = O * -y + A * v, S = k * -y + S * v, z = R * -y + z * v, D = E * -y + D * v, O = M, k = P, R = C), l = (g = ur(-w, z)) * sr, g && (v = Math.cos(-g), D = x * (y = Math.sin(-g)) + D * v, T = M = T * v - A * y, b = P = b * v - S * y, w = C = w * v - z * y), u = (g = ur(b, T)) * sr, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = O * v + k * y, b = b * v - T * y, k = k * v - O * y, T = M, O = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(k * k + R * R)), g = ur(O, k), f = 2e-4 < Math.abs(g) ? g * sr : 0, c = D ? 1 / (D < 0 ? -D : D) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ie(Pd(t, cr)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (L ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + I, r.rotationX = ia(h) + I, r.rotationY = ia(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || !e && r.zOrigin || 0) && (F[pr] = kr(Y)), r.xOffset = r.yOffset = 0, r.force3D = q.force3D, r.renderTransform = r.svg ? zr : Ye ? Sr : Mr, r.uncache = 0, r
        }, kr = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, Mr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Sr(t, e)
        }, Pr = "0deg", Cr = "0px", Ar = ") ", Sr = function _renderCSSTransforms(t, e) {
            var r = e || this, i = r.xPercent, n = r.yPercent, a = r.x, s = r.y, o = r.z, u = r.rotation, h = r.rotationY,
                l = r.rotationX, f = r.skewX, d = r.skewY, c = r.scaleX, p = r.scaleY, _ = r.transformPerspective,
                m = r.force3D, g = r.target, v = r.zOrigin, y = "", T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Pr || h !== Pr)) {
                var b, w = parseFloat(h) * or, x = Math.sin(w), O = Math.cos(w);
                w = parseFloat(l) * or, b = Math.cos(w), a = oe(g, a, x * b * -v), s = oe(g, s, -Math.sin(w) * -v), o = oe(g, o, O * b * -v + v)
            }
            _ !== Cr && (y += "perspective(" + _ + Ar), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Cr && s === Cr && o === Cr || (y += o !== Cr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ar), u !== Pr && (y += "rotate(" + u + Ar), h !== Pr && (y += "rotateY(" + h + Ar), l !== Pr && (y += "rotateX(" + l + Ar), f === Pr && d === Pr || (y += "skew(" + f + ", " + d + Ar), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Ar), g.style[cr] = y || "translate(0, 0)"
        }, zr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, c = o.skewX,
                p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset,
                b = o.yOffset, w = o.forceCSS, x = parseFloat(l), O = parseFloat(f);
            d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= or, c *= or, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= or, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = _d(g, "x", l, "px"), O = _d(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), O = ia(O + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), O = ia(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[cr] = s)
        };
    ha("padding,margin,Width,Radius", function (e, r) {
        var t = "Right", i = "Bottom", n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
                return r < 2 ? e + t : "border" + t + e
            });
        br[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function (t) {
                return yr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Er, Dr, Rr, Fr = {
        name: "css", register: Sd, targetTest: function targetTest(t) {
            return t.style && t.nodeType
        }, init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w = this._props, x = t.style, O = i.vars.startAt;
            for (d in Fe || Sd(), this.styles = this.styles || Md(t), b = this.styles.props, this.tween = i, e) if ("autoRound" !== d && (o = e[d], !pt[d] || !ac(d, e, i, n, t, a))) if (l = typeof o, f = br[d], "function" === l && (l = typeof (o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, d, o, i) && (T = 1); else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", Et.lastIndex = 0, Et.test(s) || (c = Ya(s), p = Ya(o)), p ? c !== p && (s = _d(t, d, s, p) + p) : c && (o += c), this.add(x, "setProperty", s, o, n, a, 0, 0, d), w.push(d), b.push(d, 0, x[d]); else if ("undefined" !== l) {
                if (O && d in O ? (s = "function" == typeof O[d] ? O[d].call(i, n, t, a) : O[d], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || "auto" === s || (s += q.units[d] || Ya(yr(t, d)) || ""), "=" === (s + "").charAt(1) && (s = yr(t, d))) : s = yr(t, d), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), d in dr && ("autoAlpha" === d && (1 === h && "hidden" === yr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Yd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = dr[d]).indexOf(",") && (d = d.split(",")[0])), m = d in ar) if (this.styles.save(d), g || ((v = t._gsap).renderTransform && !e.parseTransform || Or(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new _e(this._pt, x, cr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new _e(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, vd), this._pt.u = 0, w.push("scaleY", d), d += "X"; else {
                    if ("transformOrigin" === d) {
                        b.push(pr, 0, x[pr]), o = de(o), v.svg ? le(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Yd(this, v, "zOrigin", v.zOrigin, p), Yd(this, x, d, kr(s), kr(o)));
                        continue
                    }
                    if ("svgOrigin" === d) {
                        le(t, o, 1, y, 0, this);
                        continue
                    }
                    if (d in xr) {
                        ve(this, v, d, h, _ ? ka(h, _ + o) : o);
                        continue
                    }
                    if ("smoothOrigin" === d) {
                        Yd(this, v, "smooth", v.smooth, o);
                        continue
                    }
                    if ("force3D" === d) {
                        v[d] = o;
                        continue
                    }
                    if ("transform" === d) {
                        xe(this, o, t);
                        continue
                    }
                } else d in x || (d = mr(d) || d);
                if (m || (u || 0 === u) && (h || 0 === h) && !fr.test(o) && d in x) u = u || 0, (c = (s + "").substr((h + "").length)) !== (p = Ya(o) || (d in q.units ? q.units[d] : c)) && (h = _d(t, d, s, p)), this._pt = new _e(this._pt, m ? v : x, d, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? vd : yd), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = xd); else if (d in x) be.call(this, t, d, s, _ ? _ + o : o); else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a); else if ("parseTransform" !== d) {
                    Q(d, o);
                    continue
                }
                m || (d in x ? b.push(d, 0, x[d]) : b.push(d, 1, s || t[d])), w.push(d)
            }
            T && pe(this)
        }, render: function render(t, e) {
            if (e.tween._time || !Be()) for (var r = e._pt; r;) r.r(t, r.d), r = r._next; else e.styles.revert()
        }, get: yr, aliases: dr, getSetter: function getSetter(t, e, r) {
            var i = dr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in ar && e !== pr && (t._gsap.x || yr(t, "x")) ? r && Ie === r ? "scale" === e ? Ed : Dd : (Ie = r || {}) && ("scale" === e ? Fd : Gd) : t.style && !u(t.style[e]) ? Bd : ~e.indexOf("-") ? Cd : ne(t, e)
        }, core: {_removeProperty: Xd, _getMatrix: ke}
    };
    ze.utils.checkPrefix = mr, ze.core.getStyleSaver = Md, Rr = ha((Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Dr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        ar[t] = 1
    }), ha(Dr, function (t) {
        q.units[t] = "deg", xr[t] = 1
    }), dr[Rr[13]] = Er + "," + Dr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        var e = t.split(":");
        dr[e[1]] = Rr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        q.units[t] = "px"
    }), ze.registerPlugin(Fr);
    var Lr = ze.registerPlugin(Fr) || ze, Ir = Lr.core.Tween;
    e.Back = Ze, e.Bounce = er, e.CSSPlugin = Fr, e.Circ = nr, e.Cubic = Qe, e.Elastic = $e, e.Expo = ir, e.Linear = Ge, e.Power0 = qe, e.Power1 = Ve, e.Power2 = Ue, e.Power3 = Xe, e.Power4 = Ne, e.Quad = We, e.Quart = Ke, e.Quint = Je, e.Sine = rr, e.SteppedEase = tr, e.Strong = He, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = $t, e.TweenMax = Ir, e.default = Lr, e.gsap = Lr;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    } else {
        delete e.default
    }
});


/* ========== */
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return Ce || "undefined" != typeof window && (Ce = window.gsap) && Ce.registerPlugin && Ce
    }

    function z(e, t) {
        return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {passive: !1 !== n, capture: !!o})
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return De && De.isPressed || Ie.cache++
    }

    function G(r, n) {
        function dd(e) {
            if (e || 0 === e) {
                o && (Se.history.scrollRestoration = "manual");
                var t = De && De.isPressed;
                e = dd.v = Math.round(e) || (De && De.iOS ? 1 : 0), r(e), dd.cacheID = Ie.cache, t && i("ss", e)
            } else (n || Ie.cache !== dd.cacheID || i("ref")) && (dd.cacheID = Ie.cache, dd.v = r());
            return dd.v + dd.offset
        }

        return dd.offset = 0, r && dd
    }

    function J(e, t) {
        return (t && t._ctx && t._ctx.selector || Ce.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Ce.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function K(t, e) {
        var r = e.s, n = e.sc;
        A(t) && (t = ke.scrollingElement || Pe);
        var o = Ie.indexOf(t), i = n === Fe.sc ? 1 : 2;
        ~o || (o = Ie.push(t) - 1), Ie[o + i] || B(t, "scroll", F);
        var a = Ie[o + i], s = a || (Ie[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function (e) {
            return arguments.length ? t[r] = e : t[r]
        })));
        return s.target = t, a || (s.smooth = "smooth" === Ce.getProperty(t, "scrollBehavior")), s
    }

    function L(e, t, o) {
        function Cd(e, t) {
            var r = ze();
            t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }

        var i = e, a = e, s = ze(), l = s, n = t || 50, c = Math.max(500, 3 * n);
        return {
            update: Cd, reset: function reset() {
                a = i = o ? 0 : i, l = s = 0
            }, getVelocity: function getVelocity(e) {
                var t = l, r = a, n = ze();
                return !e && 0 !== e || e === i || Cd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }

    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function N(e) {
        var t = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function O() {
        (Ae = Ce.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core, r = e.bridge || {}, t = e._scrollers, n = e._proxies;
            t.push.apply(t, Ie), n.push.apply(n, Le), Ie = t, Le = n, i = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function P(e) {
        return Ce = e || r(), !Te && Ce && "undefined" != typeof document && document.body && (Se = window, Pe = (ke = document).documentElement, Me = ke.body, t = [Se, ke, Pe, Me], Ce.utils.clamp, Be = Ce.core.context || function () {
        }, Oe = "onpointerenter" in Me ? "pointer" : "mouse", Ee = k.isTouch = Se.matchMedia && Se.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Se || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Re = k.eventTypes = ("ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
            return o = 0
        }, 500), O(), Te = 1), Te
    }

    var Ce, Te, Se, ke, Pe, Me, Ee, Oe, Ae, t, De, Re, Be, o = 1, qe = [], Ie = [], Le = [], ze = Date.now,
        i = function _bridge(e, t) {
            return t
        }, n = "scrollLeft", a = "scrollTop", Ye = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function (e) {
                return arguments.length ? Se.scrollTo(e, Fe.sc()) : Se.pageXOffset || ke[n] || Pe[n] || Me[n] || 0
            })
        }, Fe = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Ye,
            sc: G(function (e) {
                return arguments.length ? Se.scrollTo(Ye.sc(), e) : Se.pageYOffset || ke[a] || Pe[a] || Me[a] || 0
            })
        };
    Ye.op = Fe, Ie.cache = 0;
    var k = (Observer.prototype.init = function init(e) {
        Te || P(Ce) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
        var o = e.tolerance, a = e.dragMinimum, t = e.type, i = e.target, r = e.lineHeight, n = e.debounce,
            s = e.preventDefault, l = e.onStop, c = e.onStopDelay, u = e.ignore, f = e.wheelSpeed, d = e.event,
            p = e.onDragStart, g = e.onDragEnd, h = e.onDrag, v = e.onPress, b = e.onRelease, m = e.onRight,
            y = e.onLeft, x = e.onUp, w = e.onDown, _ = e.onChangeX, T = e.onChangeY, S = e.onChange, k = e.onToggleX,
            E = e.onToggleY, D = e.onHover, R = e.onHoverEnd, q = e.onMove, I = e.ignoreCheck, z = e.isNormalizer,
            Y = e.onGestureStart, H = e.onGestureEnd, X = e.onWheel, W = e.onEnable, V = e.onDisable, U = e.onClick,
            j = e.scrollSpeed, G = e.capture, Q = e.allowClicks, Z = e.lockAxis, $ = e.onLockAxis;

        function cf() {
            return xe = ze()
        }

        function df(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && he && "touch" !== e.pointerType || I && I(e, t)
        }

        function ff() {
            var e = se.deltaX = N(me), t = se.deltaY = N(ye), r = Math.abs(e) >= o, n = Math.abs(t) >= o;
            S && (r || n) && S(se, e, t, me, ye), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, me[0] = me[1] = me[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), T && T(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, ye[0] = ye[1] = ye[2] = 0), (ne || re) && (q && q(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && $ && $(se), oe && (X(se), oe = !1), ee = 0
        }

        function gf(e, t, r) {
            me[r] += e, ye[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(ff) : ff()
        }

        function hf(e, t) {
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (me[2] += e, se._vx.update(e, !0)), "x" !== ae && (ye[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(ff) : ff()
        }

        function jf(e) {
            if (!df(e, 1)) {
                var t = (e = M(e, s)).clientX, r = e.clientY, n = t - se.x, o = r - se.y, i = se.isDragging;
                se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), hf(n, o), i || p && p(se))
            }
        }

        function mf(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && Y(e, se.isDragging)
        }

        function nf() {
            return (se.isGesturing = !1) || H(se)
        }

        function of(e) {
            if (!df(e)) {
                var t = fe(), r = de();
                gf((t - pe) * j, (r - ge) * j, 1), pe = t, ge = r, l && te.restart(!0)
            }
        }

        function pf(e) {
            if (!df(e)) {
                e = M(e, s), X && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Se.innerHeight : 1) * f;
                gf(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0)
            }
        }

        function qf(e) {
            if (!df(e)) {
                var t = e.clientX, r = e.clientY, n = t - se.x, o = r - se.y;
                se.x = t, se.y = r, ne = !0, l && te.restart(!0), (n || o) && hf(n, o)
            }
        }

        function rf(e) {
            se.event = e, D(se)
        }

        function sf(e) {
            se.event = e, R(se)
        }

        function tf(e) {
            return df(e) || M(e, s) && U(se)
        }

        this.target = i = J(i) || Pe, this.vars = e, u = u && Ce.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, j = j || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Se.getComputedStyle(Me).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this, le = 0, ce = 0, ue = e.passive || !s, fe = K(i, Ye), de = K(i, Fe),
            pe = fe(), ge = de(), he = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Re[0],
            ve = A(i), be = i.ownerDocument || ke, me = [0, 0, 0], ye = [0, 0, 0], xe = 0,
            we = se.onPress = function (e) {
                df(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(z ? i : be, Re[1], jf, ue, !0), se.deltaX = se.deltaY = 0, v && v(se))
            }, _e = se.onRelease = function (t) {
                if (!df(t, 1)) {
                    C(z ? i : be, Re[1], jf, !0);
                    var e = !isNaN(se.y - se.startY), r = se.isDragging,
                        n = r && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)), o = M(t);
                    !n && e && (se._vx.reset(), se._vy.reset(), s && Q && Ce.delayedCall(.08, function () {
                        if (300 < ze() - xe && !t.defaultPrevented) if (t.target.click) t.target.click(); else if (be.createEvent) {
                            var e = be.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Se, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    })), se.isDragging = se.isGesturing = se.isPressed = !1, l && r && !z && te.restart(!0), g && r && g(se), b && b(se, n)
                }
            };
        te = se._dc = Ce.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = fe, se.scrollY = de, se.isDragging = se.isGesturing = se.isPressed = !1, Be(this), se.enable = function (e) {
            return se.isEnabled || (B(ve ? be : i, "scroll", F), 0 <= t.indexOf("scroll") && B(ve ? be : i, "scroll", of, ue, G), 0 <= t.indexOf("wheel") && B(i, "wheel", pf, ue, G), (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (B(i, Re[0], we, ue, G), B(be, Re[2], _e), B(be, Re[3], _e), Q && B(i, "click", cf, !0, !0), U && B(i, "click", tf), Y && B(be, "gesturestart", mf), H && B(be, "gestureend", nf), D && B(i, Oe + "enter", rf), R && B(i, Oe + "leave", sf), q && B(i, Oe + "move", qf)), se.isEnabled = !0, e && e.type && we(e), W && W(se)), se
        }, se.disable = function () {
            se.isEnabled && (qe.filter(function (e) {
                return e !== se && A(e.target)
            }).length || C(ve ? be : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(z ? i : be, Re[1], jf, !0)), C(ve ? be : i, "scroll", of, G), C(i, "wheel", pf, G), C(i, Re[0], we, G), C(be, Re[2], _e), C(be, Re[3], _e), C(i, "click", cf, !0), C(i, "click", tf), C(be, "gesturestart", mf), C(be, "gestureend", nf), C(i, Oe + "enter", rf), C(i, Oe + "leave", sf), C(i, Oe + "move", qf), se.isEnabled = se.isPressed = se.isDragging = !1, V && V(se))
        }, se.kill = se.revert = function () {
            se.disable();
            var e = qe.indexOf(se);
            0 <= e && qe.splice(e, 1), De === se && (De = 0)
        }, qe.push(se), z && A(i) && (De = se), se.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX", get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }

    k.version = "3.12.5", k.create = function (e) {
        return new k(e)
    }, k.register = P, k.getAll = function () {
        return qe.slice()
    }, k.getById = function (t) {
        return qe.filter(function (e) {
            return e.vars.id === t
        })[0]
    }, r() && Ce.registerPlugin(k);

    function Ca(e, t, r) {
        var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
        return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e
    }

    function Da(e, t) {
        return !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
    }

    function Fa() {
        return Ge = 1
    }

    function Ga() {
        return Ge = 0
    }

    function Ha(e) {
        return e
    }

    function Ia(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Ja() {
        return "undefined" != typeof window
    }

    function Ka() {
        return He || Ja() && (He = window.gsap) && He.registerPlugin && He
    }

    function La(e) {
        return !!~l.indexOf(e)
    }

    function Ma(e) {
        return ("Height" === e ? T : Ne["inner" + e]) || Je["client" + e] || We["client" + e]
    }

    function Na(e) {
        return z(e, "getBoundingClientRect") || (La(e) ? function () {
            return Ot.width = Ne.innerWidth, Ot.height = T, Ot
        } : function () {
            return wt(e)
        })
    }

    function Qa(e, t) {
        var r = t.s, n = t.d2, o = t.d, i = t.a;
        return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - Na(e)()[o] : La(e) ? (Je[r] || We[r]) - Ma(n) : e[r] - e["offset" + n])
    }

    function Ra(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function Ta(e) {
        return "function" == typeof e
    }

    function Ua(e) {
        return "number" == typeof e
    }

    function Va(e) {
        return "object" == typeof e
    }

    function Wa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Xa(e, t) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function () {
                return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function mb(e) {
        return Ne.getComputedStyle(e)
    }

    function ob(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function qb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function rb(e) {
        var t, r = [], n = e.labels, o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r
    }

    function tb(o) {
        var i = He.utils.snap(o), a = Array.isArray(o) && o.slice(0).sort(function (e, t) {
            return e - t
        });
        return a ? function (e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return i(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;) if (a[n] <= e) return a[n];
            return a[0]
        } : function (e, t, r) {
            void 0 === r && (r = .001);
            var n = i(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
        }
    }

    function vb(t, r, e, n) {
        return e.split(",").forEach(function (e) {
            return t(r, e, n)
        })
    }

    function wb(e, t, r, n, o) {
        return e.addEventListener(t, r, {passive: !n, capture: !!o})
    }

    function xb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function yb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    }

    function Cb(e, t) {
        if (ct(e)) {
            var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in H ? H[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Db(e, t, r, n, o, i, a, s) {
        var l = o.startColor, c = o.endColor, u = o.fontSize, f = o.indent, d = o.fontWeight,
            p = Xe.createElement("div"), g = La(r) || "fixed" === z(r, "pinType"), h = -1 !== e.indexOf("scroller"),
            v = g ? We : r, b = -1 !== e.indexOf("start"), m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Fe ? q : I) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, b), p
    }

    function Ib() {
        return 34 < at() - st && (D = D || requestAnimationFrame(Z))
    }

    function Jb() {
        v && v.isPressed && !(v.startX > We.clientWidth) || (Ie.cache++, v ? D = D || requestAnimationFrame(Z) : Z(), st || U("scrollStart"), st = at())
    }

    function Kb() {
        y = Ne.innerWidth, m = Ne.innerHeight
    }

    function Lb() {
        Ie.cache++, je || h || Xe.fullscreenElement || Xe.webkitFullscreenElement || b && y === Ne.innerWidth && !(Math.abs(Ne.innerHeight - m) > .25 * Ne.innerHeight) || c.restart(!0)
    }

    function Ob() {
        return xb(ne, "scrollEnd", Ob) || Pt(!0)
    }

    function Rb(e) {
        for (var t = 0; t < j.length; t += 5) (!e || j[t + 4] && j[t + 4].query === e) && (j[t].style.cssText = j[t + 1], j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""), j[t + 3].uncache = 1)
    }

    function Sb(e, t) {
        var r;
        for (Qe = 0; Qe < Tt.length; Qe++) !(r = Tt[Qe]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        S = !0, t && Rb(t), t || U("revert")
    }

    function Tb(e, t) {
        Ie.cache++, !t && rt || Ie.forEach(function (e) {
            return Ta(e) && e.cacheID++ && (e.rec = 0)
        }), ct(e) && (Ne.history.scrollRestoration = w = e)
    }

    function Yb() {
        We.appendChild(_), T = !v && _.offsetHeight || Ne.innerHeight, We.removeChild(_)
    }

    function Zb(t) {
        return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (e) {
            return e.style.display = t ? "none" : "block"
        })
    }

    function gc(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = $.length, a = t.style, s = e.style; i--;) a[o = $[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[I] = s[q] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = qb(e, Ye) + xt, a[dt] = qb(e, Fe) + xt, a[bt] = s[mt] = s.top = s.left = "0", Et(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[bt] = r[bt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function jc(e) {
        for (var t = ee.length, r = e.style, n = [], o = 0; o < t; o++) n.push(ee[o], r[ee[o]]);
        return n.t = e, n
    }

    function mc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
        Ta(e) && (e = e(s)), ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Cb("0" + e.substr(3), r) : 0));
        var g, h, v, b = d ? d.time() : 0;
        if (d && d.seek(0), isNaN(e) || (e = +e), Ua(e)) d && (e = He.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0); else {
            Ta(t) && (t = t(s));
            var m, y, x, w, _ = (e || "0").split(" ");
            v = J(t, s) || We, (m = wt(v) || {}) && (m.left || m.top) || "none" !== mb(v).display || (w = v.style.display, v.style.display = "block", m = wt(v), w ? v.style.display = w : v.style.removeProperty("display")), y = Cb(_[0], m[n.d]), x = Cb(_[1] || "0", r), e = m[n.p] - l[n.p] - c + y + o - x, a && X(a, x, n, r - x < 20 || a._isStart && 20 < x), r -= r - x
        }
        if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var C = e + r, T = i._isStart;
            g = "scroll" + n.d2, X(i, C, n, T && 20 < C || !T && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= C + 1), u && (l = wt(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt))
        }
        return d && v && (g = wt(v), d.seek(f), h = wt(v), d._caScrollDist = g[n.p] - h[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
    }

    function oc(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === We) {
                for (o in e._stOrig = a.cssText, i = mb(e)) +o || re.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            He.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function pc(r, e, n) {
        var o = e, i = o;
        return function (e) {
            var t = Math.round(r());
            return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && (e = t, n && n()), i = o, o = e
        }
    }

    function qc(e, t, r) {
        var n = {};
        n[t.p] = "+=" + r, He.set(e, n)
    }

    function rc(c, e) {
        function Ck(e, t, r, n, o) {
            var i = Ck.tween, a = t.onComplete, s = {};
            r = r || u();
            var l = pc(u, r, function () {
                i.kill(), Ck.tween = 0
            });
            return o = n && o || 0, n = n || e - r, i && i.kill(), t[f] = e, t.inherit = !1, (t.modifiers = s)[f] = function () {
                return l(r + n * i.ratio + o * i.ratio * i.ratio)
            }, t.onUpdate = function () {
                Ie.cache++, Ck.tween && Z()
            }, t.onComplete = function () {
                Ck.tween = 0, a && a.call(i)
            }, i = Ck.tween = He.to(c, t)
        }

        var u = K(c, e), f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function () {
            return Ck.tween && Ck.tween.kill() && (Ck.tween = 0)
        }, wb(c, "wheel", u.wheelHandler), ne.isTouch && wb(c, "touchmove", u.wheelHandler), Ck
    }

    var He, s, Ne, Xe, Je, We, l, c, Ve, Ue, Ke, u, je, Ge, f, Qe, d, p, g, Ze, $e, h, v, b, m, y, E, x, w, _, T, S, et,
        tt, D, rt, nt, ot, it = 1, at = Date.now, R = at(), st = 0, lt = 0, ct = function _isString(e) {
            return "string" == typeof e
        }, ut = Math.abs, q = "right", I = "bottom", ft = "width", dt = "height", pt = "Right", gt = "Left", ht = "Top",
        vt = "Bottom", bt = "padding", mt = "margin", yt = "Width", Y = "Height", xt = "px",
        wt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== mb(e)[f] && He.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        }, _t = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
        Ct = {toggleActions: "play", anticipatePin: 0}, H = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
        X = function _positionMarker(e, t, r, n) {
            var o = {display: "block"}, i = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + yt] = 1, o["border" + a + yt] = 0, o[r.p] = t + "px", He.set(e, o)
        }, Tt = [], St = {}, W = {}, V = [], U = function _dispatch(e) {
            return W[e] && W[e].map(function (e) {
                return e()
            }) || V
        }, j = [], kt = 0, Pt = function _refreshAll(e, t) {
            if (!st || e || S) {
                Yb(), rt = ne.isRefreshing = !0, Ie.forEach(function (e) {
                    return Ta(e) && ++e.cacheID && (e.rec = e())
                });
                var r = U("refreshInit");
                Ze && ne.sort(), t || Sb(), Ie.forEach(function (e) {
                    Ta(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), Tt.slice(0).forEach(function (e) {
                    return e.refresh()
                }), S = !1, Tt.forEach(function (e) {
                    if (e._subPinOffset && e.pin) {
                        var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight", r = e.pin[t];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
                    }
                }), et = 1, Zb(!0), Tt.forEach(function (e) {
                    var t = Qa(e.scroller, e._dir), r = "max" === e.vars.end || e._endClamp && e.end > t,
                        n = e._startClamp && e.start >= t;
                    (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
                }), Zb(!1), et = 0, r.forEach(function (e) {
                    return e && e.render && e.render(-1)
                }), Ie.forEach(function (e) {
                    Ta(e) && (e.smooth && requestAnimationFrame(function () {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Tb(w, 1), c.pause(), kt++, Z(rt = 2), Tt.forEach(function (e) {
                    return Ta(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), rt = ne.isRefreshing = !1, U("refresh")
            } else wb(ne, "scrollEnd", Ob)
        }, Q = 0, Mt = 1, Z = function _updateAll(e) {
            if (2 === e || !rt && !S) {
                ne.isUpdating = !0, ot && ot.update(0);
                var t = Tt.length, r = at(), n = 50 <= r - R, o = t && Tt[0].scroll();
                if (Mt = o < Q ? -1 : 1, rt || (Q = o), n && (st && !Ge && 200 < r - st && (st = 0, U("scrollEnd")), Ke = R, R = r), Mt < 0) {
                    for (Qe = t; 0 < Qe--;) Tt[Qe] && Tt[Qe].update(0, n);
                    Mt = 1
                } else for (Qe = 0; Qe < t; Qe++) Tt[Qe] && Tt[Qe].update(0, n);
                ne.isUpdating = !1
            }
            D = 0
        },
        $ = ["left", "top", I, q, mt + vt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ee = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + Y, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
        te = /([A-Z])/g, Et = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style, o = e.length, i = 0;
                for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase())
            }
        }, Ot = {left: 0, top: 0}, re = /(webkit|moz|length|cssText|inset)/i,
        ne = (ScrollTrigger.prototype.init = function init(E, O) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), lt) {
                var A, n, p, D, R, B, q, I, L, Y, F, e, H, N, X, W, V, U, t, j, b, G, Q, m, Z, y, $, x, r, w, _, ee, o,
                    g, te, re, ne, C, i, T = (E = ob(ct(E) || Ua(E) || E.nodeType ? {trigger: E} : E, Ct)).onUpdate,
                    S = E.toggleClass, a = E.id, k = E.onToggle, oe = E.onRefresh, P = E.scrub, ie = E.trigger,
                    ae = E.pin, se = E.pinSpacing, le = E.invalidateOnRefresh, M = E.anticipatePin,
                    s = E.onScrubComplete, h = E.onSnapComplete, ce = E.once, ue = E.snap, fe = E.pinReparent,
                    l = E.pinSpacer, de = E.containerAnimation, pe = E.fastScrollEnd, ge = E.preventOverlaps,
                    he = E.horizontal || E.containerAnimation && !1 !== E.horizontal ? Ye : Fe, ve = !P && 0 !== P,
                    be = J(E.scroller || Ne), c = He.core.getCache(be), me = La(be),
                    ye = "fixed" === ("pinType" in E ? E.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack], we = ve && E.toggleActions.split(" "),
                    _e = "markers" in E ? E.markers : Ct.markers,
                    Ce = me ? 0 : parseFloat(mb(be)["border" + he.p2 + yt]) || 0, Te = this,
                    Se = E.onRefreshInit && function () {
                        return E.onRefreshInit(Te)
                    }, ke = function _getSizeFunc(e, t, r) {
                        var n = r.d, o = r.d2, i = r.a;
                        return (i = z(e, "getBoundingClientRect")) ? function () {
                            return i()[n]
                        } : function () {
                            return (t ? Ma(o) : e["client" + o]) || 0
                        }
                    }(be, me, he), Pe = function _getOffsetsFunc(e, t) {
                        return !t || ~Le.indexOf(e) ? Na(e) : function () {
                            return Ot
                        }
                    }(be, me), Me = 0, Ee = 0, Oe = 0, Ae = K(be, he);
                if (Te._startClamp = Te._endClamp = !1, Te._dir = he, M *= 45, Te.scroller = be, Te.scroll = de ? de.time.bind(de) : Ae, D = Ae(), Te.vars = E, O = O || E.animation, "refreshPriority" in E && (Ze = 1, -9999 === E.refreshPriority && (ot = Te)), c.tweenScroll = c.tweenScroll || {
                    top: rc(be, Fe),
                    left: rc(be, Ye)
                }, Te.tweenTo = A = c.tweenScroll[he.p], Te.scrubDuration = function (e) {
                    (o = Ua(e) && e) ? ee ? ee.duration(e) : ee = He.to(O, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: o,
                        paused: !0,
                        onComplete: function onComplete() {
                            return s && s(Te)
                        }
                    }) : (ee && ee.progress(1).kill(), ee = 0)
                }, O && (O.vars.lazy = !1, O._initted && !Te.isReverted || !1 !== O.vars.immediateRender && !1 !== E.immediateRender && O.duration() && O.render(0, !0, !0), Te.animation = O.pause(), (O.scrollTrigger = Te).scrubDuration(P), w = 0, a = a || O.vars.id), ue && (Va(ue) && !ue.push || (ue = {snapTo: ue}), "scrollBehavior" in We.style && He.set(me ? [We, Je] : be, {scrollBehavior: "auto"}), Ie.forEach(function (e) {
                    return Ta(e) && e.target === (me ? Xe.scrollingElement || Je : be) && (e.smooth = !1)
                }), p = Ta(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                    return function (e) {
                        return He.utils.snap(rb(t), e)
                    }
                }(O) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                    return function (e, t) {
                        return tb(rb(r))(e, t.direction)
                    }
                }(O) : !1 !== ue.directional ? function (e, t) {
                    return tb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction)
                } : He.utils.snap(ue.snapTo), g = ue.duration || {
                    min: .1,
                    max: 2
                }, g = Va(g) ? Ue(g.min, g.max) : Ue(g, g), te = He.delayedCall(ue.delay || o / 2 || .1, function () {
                    var e = Ae(), t = at() - Ee < 500, r = A.tween;
                    if (!(t || Math.abs(Te.getVelocity()) < 10) || r || Ge || Me === e) Te.isActive && Me !== e && te.restart(!0); else {
                        var n, o, i = (e - B) / N, a = O && !ve ? O.totalProgress() : i,
                            s = t ? 0 : (a - _) / (at() - Ke) * 1e3 || 0,
                            l = He.utils.clamp(-i, 1 - i, ut(s / 2) * s / .185), c = i + (!1 === ue.inertia ? 0 : l),
                            u = ue.onStart, f = ue.onInterrupt, d = ue.onComplete;
                        if (n = p(c, Te), Ua(n) || (n = c), o = Math.round(B + n * N), e <= q && B <= e && o !== e) {
                            if (r && !r._initted && r.data <= ut(o - e)) return;
                            !1 === ue.inertia && (l = n - i), A(o, {
                                duration: g(ut(.185 * Math.max(ut(c - a), ut(n - a)) / s / .05 || 0)),
                                ease: ue.ease || "power3",
                                data: ut(o - e),
                                onInterrupt: function onInterrupt() {
                                    return te.restart(!0) && f && f(Te)
                                },
                                onComplete: function onComplete() {
                                    Te.update(), Me = Ae(), O && (ee ? ee.resetTo("totalProgress", n, O._tTime / O._tDur) : O.progress(n)), w = _ = O && !ve ? O.totalProgress() : Te.progress, h && h(Te), d && d(Te)
                                }
                            }, e, l * N, o - e - l * N), u && u(Te, A.tween)
                        }
                    }
                }).pause()), a && (St[a] = Te), i = (i = (ie = Te.trigger = J(ie || !0 !== ae && ae)) && ie._gsap && ie._gsap.stRevert) && i(Te), ae = !0 === ae ? ie : J(ae), ct(S) && (S = {
                    targets: ie,
                    className: S
                }), ae && (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === mb(ae.parentNode).display) && bt), Te.pin = ae, (n = He.core.getCache(ae)).spacer ? X = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = jc(l))), n.spacer = U = l || Xe.createElement("div"), U.classList.add("pin-spacer"), a && U.classList.add("pin-spacer-" + a), n.pinState = X = jc(ae)), !1 !== E.force3D && He.set(ae, {force3D: !0}), Te.spacer = U = n.spacer, r = mb(ae), m = r[se + he.os2], j = He.getProperty(ae), b = He.quickSetter(ae, he.a, xt), gc(ae, U, r), V = jc(ae)), _e) {
                    e = Va(_e) ? ob(_e, _t) : _t, Y = Db("scroller-start", a, be, he, e, 0), F = Db("scroller-end", a, be, he, e, 0, Y), t = Y["offset" + he.op.d2];
                    var u = J(z(be, "content") || be);
                    I = this.markerStart = Db("start", a, u, he, e, t, 0, de), L = this.markerEnd = Db("end", a, u, he, e, t, 0, de), de && (C = He.quickSetter([I, L], he.a, xt)), ye || Le.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = mb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? We : be), He.set([Y, F], {force3D: !0}), y = He.quickSetter(Y, he.a, xt), x = He.quickSetter(F, he.a, xt))
                }
                if (de) {
                    var f = de.vars.onUpdate, d = de.vars.onUpdateParams;
                    de.eventCallback("onUpdate", function () {
                        Te.update(0, 0, 1), f && f.apply(de, d || [])
                    })
                }
                if (Te.previous = function () {
                    return Tt[Tt.indexOf(Te) - 1]
                }, Te.next = function () {
                    return Tt[Tt.indexOf(Te) + 1]
                }, Te.revert = function (e, t) {
                    if (!t) return Te.kill(!0);
                    var r = !1 !== e || !Te.enabled, n = je;
                    r !== Te.isReverted && (r && (re = Math.max(Ae(), Te.scroll.rec || 0), Oe = Te.progress, ne = O && O.progress()), I && [I, L, Y, F].forEach(function (e) {
                        return e.style.display = r ? "none" : "block"
                    }), r && (je = Te).update(r), !ae || fe && Te.isActive || (r ? function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState); else if (e._gsap.swappedIn) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t), o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ae, U, X) : gc(ae, U, mb(ae), Z)), r || Te.update(r), je = n, Te.isReverted = r)
                }, Te.refresh = function (e, t, r, n) {
                    if (!je && Te.enabled || t) if (ae && e && st) wb(ScrollTrigger, "scrollEnd", Ob); else {
                        !rt && Se && Se(Te), je = Te, A.tween && !r && (A.tween.kill(), A.tween = 0), ee && ee.pause(), le && O && O.revert({kill: !1}).invalidate(), Te.isReverted || Te.revert(!0, !0), Te._subPinOffset = !1;
                        var o, i, a, s, l, c, u, f, d, p, g, h, v, b = ke(), m = Pe(),
                            y = de ? de.duration() : Qa(be, he), x = N <= .01, w = 0, _ = n || 0,
                            C = Va(r) ? r.end : E.end, T = E.endTrigger || ie,
                            S = Va(r) ? r.start : E.start || (0 !== E.start && ie ? ae ? "0 0" : "0 100%" : 0),
                            k = Te.pinnedContainer = E.pinnedContainer && J(E.pinnedContainer, Te),
                            P = ie && Math.max(0, Tt.indexOf(Te)) || 0, M = P;
                        for (_e && Va(r) && (h = He.getProperty(Y, he.p), v = He.getProperty(F, he.p)); M--;) (c = Tt[M]).end || c.refresh(0, 1) || (je = Te), !(u = c.pin) || u !== ie && u !== ae && u !== k || c.isReverted || ((p = p || []).unshift(c), c.revert(!0, !0)), c !== Tt[M] && (P--, M--);
                        for (Ta(S) && (S = S(Te)), S = Ca(S, "start", Te), B = mc(S, ie, b, he, Ae(), I, Y, Te, m, Ce, ye, y, de, Te._startClamp && "_startClamp") || (ae ? -.001 : 0), Ta(C) && (C = C(Te)), ct(C) && !C.indexOf("+=") && (~C.indexOf(" ") ? C = (ct(S) ? S.split(" ")[0] : "") + C : (w = Cb(C.substr(2), b), C = ct(S) ? S : (de ? He.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, B) : B) + w, T = ie)), C = Ca(C, "end", Te), q = Math.max(B, mc(C || (T ? "100% 0" : y), T, b, he, Ae() + w, L, F, Te, m, Ce, ye, y, de, Te._endClamp && "_endClamp")) || -.001, w = 0, M = P; M--;) (u = (c = Tt[M]).pin) && c.start - c._pinPush <= B && !de && 0 < c.end && (o = c.end - (Te._startClamp ? Math.max(0, c.start) : c.start), (u === ie && c.start - c._pinPush < B || u === k) && isNaN(S) && (w += o * (1 - c.progress)), u === ae && (_ += o));
                        if (B += w, q += w, Te._startClamp && (Te._startClamp += w), Te._endClamp && !rt && (Te._endClamp = q || -.001, q = Math.min(q, Qa(be, he))), N = q - B || (B -= .01) && .001, x && (Oe = He.utils.clamp(0, 1, He.utils.normalize(B, q, re))), Te._pinPush = _, I && w && ((o = {})[he.a] = "+=" + w, k && (o[he.p] = "-=" + Ae()), He.set([I, L], o)), !ae || et && Te.end >= Qa(be, he)) {
                            if (ie && Ae() && !de) for (i = ie.parentNode; i && i !== We;) i._pinOffset && (B -= i._pinOffset, q -= i._pinOffset), i = i.parentNode
                        } else o = mb(ae), s = he === Fe, a = Ae(), G = parseFloat(j(he.a)) + _, !y && 1 < q && (g = {
                            style: g = (me ? Xe.scrollingElement || Je : be).style,
                            value: g["overflow" + he.a.toUpperCase()]
                        }, me && "scroll" !== mb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")), gc(ae, U, o), V = jc(ae), i = wt(ae, !0), f = ye && K(be, s ? Ye : Fe)(), se ? ((Z = [se + he.os2, N + _ + xt]).t = U, (M = se === bt ? qb(ae, he) + N + _ : 0) && (Z.push(he.d, M + xt), "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt)), Et(Z), k && Tt.forEach(function (e) {
                            e.pin === k && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                        }), ye && Ae(re)) : (M = qb(ae, he)) && "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt), ye && ((l = {
                            top: i.top + (s ? a - B : f) + xt,
                            left: i.left + (s ? f : a - B) + xt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[ft] = l.maxWidth = Math.ceil(i.width) + xt, l[dt] = l.maxHeight = Math.ceil(i.height) + xt, l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0", l[bt] = o[bt], l[bt + ht] = o[bt + ht], l[bt + pt] = o[bt + pt], l[bt + vt] = o[bt + vt], l[bt + gt] = o[bt + gt], W = function _copyState(e, t, r) {
                            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                            return o.t = e.t, o
                        }(X, l, fe), rt && Ae(0)), O ? (d = O._initted, $e(1), O.render(O.duration(), !0, !0), Q = j(he.a) - G + N + _, $ = 1 < Math.abs(N - Q), ye && $ && W.splice(W.length - 2, 2), O.render(0, !0, !0), d || O.invalidate(!0), O.parent || O.totalTime(O.totalTime()), $e(0)) : Q = N, g && (g.value ? g.style["overflow" + he.a.toUpperCase()] = g.value : g.style.removeProperty("overflow-" + he.a));
                        p && p.forEach(function (e) {
                            return e.revert(!1, !0)
                        }), Te.start = B, Te.end = q, D = R = rt ? re : Ae(), de || rt || (D < re && Ae(re), Te.scroll.rec = 0), Te.revert(!1, !0), Ee = at(), te && (Me = -1, te.restart(!0)), je = 0, O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0), (x || Oe !== Te.progress || de || le) && (O && !ve && O.totalProgress(de && B < -.001 && !Oe ? He.utils.normalize(B, q, 0) : Oe, !0), Te.progress = x || (D - B) / N === Oe ? 0 : Oe), ae && se && (U._pinOffset = Math.round(Te.progress * Q)), ee && ee.invalidate(), isNaN(h) || (h -= He.getProperty(Y, he.p), v -= He.getProperty(F, he.p), qc(Y, he, h), qc(I, he, h - (n || 0)), qc(F, he, v), qc(L, he, v - (n || 0))), x && !rt && Te.update(), !oe || rt || H || (H = !0, oe(Te), H = !1)
                    }
                }, Te.getVelocity = function () {
                    return (Ae() - R) / (at() - Ke) * 1e3 || 0
                }, Te.endAnimation = function () {
                    Wa(Te.callbackAnimation), O && (ee ? ee.progress(1) : O.paused() ? ve || Wa(O, Te.direction < 0, 1) : Wa(O, O.reversed()))
                }, Te.labelToScroll = function (e) {
                    return O && O.labels && (B || Te.refresh() || B) + O.labels[e] / O.duration() * N || 0
                }, Te.getTrailing = function (t) {
                    var e = Tt.indexOf(Te), r = 0 < Te.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
                    return (ct(t) ? r.filter(function (e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function (e) {
                        return 0 < Te.direction ? e.end <= B : e.start >= q
                    })
                }, Te.update = function (e, t, r) {
                    if (!de || r || e) {
                        var n, o, i, a, s, l, c, u = !0 === rt ? re : Te.scroll(), f = e ? 0 : (u - B) / N,
                            d = f < 0 ? 0 : 1 < f ? 1 : f || 0, p = Te.progress;
                        if (t && (R = D, D = de ? Ae() : u, ue && (_ = w, w = O && !ve ? O.totalProgress() : d)), M && ae && !je && !it && st && (!d && B < u + (u - R) / (at() - Ke) * M ? d = 1e-4 : 1 === d && q > u + (u - R) / (at() - Ke) * M && (d = .9999)), d !== p && Te.enabled) {
                            if (a = (s = (n = Te.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Te.direction = p < d ? 1 : -1, Te.progress = d, a && !je && (o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = O && ("complete" === i || "reset" === i || i in O))), ge && (s || c) && (c || P || !O) && (Ta(ge) ? ge(Te) : Te.getTrailing(ge).forEach(function (e) {
                                return e.endAnimation()
                            })), ve || (!ee || je || it ? O && O.totalProgress(d, !(!je || !Ee && !e)) : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : (ee.vars.totalProgress = d, ee.invalidate().restart()))), ae) if (e && se && (U.style[se + he.os2] = m), ye) {
                                if (a) {
                                    if (l = !e && p < d && u < q + 1 && u + 1 >= Qa(be, he), fe) if (e || !n && !l) oc(ae, U); else {
                                        var g = wt(ae, !0), h = u - B;
                                        oc(ae, We, g.top + (he === Fe ? h : 0) + xt, g.left + (he === Fe ? 0 : h) + xt)
                                    }
                                    Et(n || l ? W : V), $ && d < 1 && n || b(G + (1 !== d || l ? 0 : Q))
                                }
                            } else b(Ia(G + Q * d));
                            !ue || A.tween || je || it || te.restart(!0), S && (s || ce && d && (d < 1 || !tt)) && Ve(S.targets).forEach(function (e) {
                                return e.classList[n || ce ? "add" : "remove"](S.className)
                            }), !T || ve || e || T(Te), a && !je ? (ve && (c && ("complete" === i ? O.pause().totalProgress(1) : "reset" === i ? O.restart(!0).pause() : "restart" === i ? O.restart(!0) : O[i]()), T && T(Te)), !s && tt || (k && s && Xa(Te, k), xe[o] && Xa(Te, xe[o]), ce && (1 === d ? Te.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === d ? 1 : 3] && Xa(Te, xe[o])), pe && !n && Math.abs(Te.getVelocity()) > (Ua(pe) ? pe : 2500) && (Wa(Te.callbackAnimation), ee ? ee.progress(1) : Wa(O, "reverse" === i ? 1 : !d, 1))) : ve && T && !je && T(Te)
                        }
                        if (x) {
                            var v = de ? u / de.duration() * (de._caScrollDist || 0) : u;
                            y(v + (Y._isFlipped ? 1 : 0)), x(v)
                        }
                        C && C(-u / de.duration() * (de._caScrollDist || 0))
                    }
                }, Te.enable = function (e, t) {
                    Te.enabled || (Te.enabled = !0, wb(be, "resize", Lb), me || wb(be, "scroll", Jb), Se && wb(ScrollTrigger, "refreshInit", Se), !1 !== e && (Te.progress = Oe = 0, D = R = Me = Ae()), !1 !== t && Te.refresh())
                }, Te.getTween = function (e) {
                    return e && A ? A.tween : ee
                }, Te.setPositions = function (e, t, r, n) {
                    if (de) {
                        var o = de.scrollTrigger, i = de.duration(), a = o.end - o.start;
                        e = o.start + a * e / i, t = o.start + a * t / i
                    }
                    Te.refresh(!1, !1, {
                        start: Da(e, r && !!Te._startClamp),
                        end: Da(t, r && !!Te._endClamp)
                    }, n), Te.update()
                }, Te.adjustPinSpacing = function (e) {
                    if (Z && e) {
                        var t = Z.indexOf(he.d) + 1;
                        Z[t] = parseFloat(Z[t]) + e + xt, Z[1] = parseFloat(Z[1]) + e + xt, Et(Z)
                    }
                }, Te.disable = function (e, t) {
                    if (Te.enabled && (!1 !== e && Te.revert(!0, !0), Te.enabled = Te.isActive = !1, t || ee && ee.pause(), re = 0, n && (n.uncache = 1), Se && xb(ScrollTrigger, "refreshInit", Se), te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)), !me)) {
                        for (var r = Tt.length; r--;) if (Tt[r].scroller === be && Tt[r] !== Te) return;
                        xb(be, "resize", Lb), me || xb(be, "scroll", Jb)
                    }
                }, Te.kill = function (e, t) {
                    Te.disable(e, t), ee && !t && ee.kill(), a && delete St[a];
                    var r = Tt.indexOf(Te);
                    0 <= r && Tt.splice(r, 1), r === Qe && 0 < Mt && Qe--, r = 0, Tt.forEach(function (e) {
                        return e.scroller === Te.scroller && (r = 1)
                    }), r || rt || (Te.scroll.rec = 0), O && (O.scrollTrigger = null, e && O.revert({kill: !1}), t || O.kill()), I && [I, L, Y, F].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), ot === Te && (ot = 0), ae && (n && (n.uncache = 1), r = 0, Tt.forEach(function (e) {
                        return e.pin === ae && r++
                    }), r || (n.spacer = 0)), E.onKill && E.onKill(Te)
                }, Tt.push(Te), Te.enable(!1, !1), i && i(Te), O && O.add && !N) {
                    var v = Te.update;
                    Te.update = function () {
                        Te.update = v, B || q || Te.refresh()
                    }, He.delayedCall(.01, Te.update), N = .01, B = q = 0
                } else Te.refresh();
                ae && function _queueRefreshAll() {
                    if (nt !== kt) {
                        var e = nt = kt;
                        requestAnimationFrame(function () {
                            return e === kt && Pt(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Ha
        }, ScrollTrigger.register = function register(e) {
            return s || (He = e || Ka(), Ja() && window.document && ScrollTrigger.enable(), s = lt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e) for (var t in e) Ct[t] = e[t];
            return Ct
        }, ScrollTrigger.disable = function disable(t, r) {
            lt = 0, Tt.forEach(function (e) {
                return e[r ? "kill" : "disable"](t)
            }), xb(Ne, "wheel", Jb), xb(Xe, "scroll", Jb), clearInterval(u), xb(Xe, "touchcancel", Ha), xb(We, "touchstart", Ha), vb(xb, Xe, "pointerdown,touchstart,mousedown", Fa), vb(xb, Xe, "pointerup,touchend,mouseup", Ga), c.kill(), Ra(xb);
            for (var e = 0; e < Ie.length; e += 3) yb(xb, Ie[e], Ie[e + 1]), yb(xb, Ie[e], Ie[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Ne = window, Xe = document, Je = Xe.documentElement, We = Xe.body, He && (Ve = He.utils.toArray, Ue = He.utils.clamp, x = He.core.context || Ha, $e = He.core.suppressOverwrites || Ha, w = Ne.history.scrollRestoration || "auto", Q = Ne.pageYOffset, He.core.globals("ScrollTrigger", ScrollTrigger), We)) {
                lt = 1, (_ = document.createElement("div")).style.height = "100vh", _.style.position = "absolute", Yb(), function _rafBugFix() {
                    return lt && requestAnimationFrame(_rafBugFix)
                }(), k.register(He), ScrollTrigger.isTouch = k.isTouch, E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), b = 1 === k.isTouch, wb(Ne, "wheel", Jb), l = [Ne, Xe, Je, We], He.matchMedia ? (ScrollTrigger.matchMedia = function (e) {
                    var t, r = He.matchMedia();
                    for (t in e) r.add(t, e[t]);
                    return r
                }, He.addEventListener("matchMediaInit", function () {
                    return Sb()
                }), He.addEventListener("matchMediaRevert", function () {
                    return Rb()
                }), He.addEventListener("matchMedia", function () {
                    Pt(0, 1), U("matchMedia")
                }), He.matchMedia("(orientation: portrait)", function () {
                    return Kb(), Kb
                })) : console.warn("Requires GSAP 3.11.0 or later"), Kb(), wb(Xe, "scroll", Jb);
                var e, t, r = We.style, n = r.borderTopStyle, o = He.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                    value: function value() {
                        return this.time(-.01, !0)
                    }
                }), r.borderTopStyle = "solid", e = wt(We), Fe.m = Math.round(e.top + Fe.sc()) || 0, Ye.m = Math.round(e.left + Ye.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Ib, 250), He.delayedCall(.5, function () {
                    return it = 0
                }), wb(Xe, "touchcancel", Ha), wb(We, "touchstart", Ha), vb(wb, Xe, "pointerdown,touchstart,mousedown", Fa), vb(wb, Xe, "pointerup,touchend,mouseup", Ga), f = He.utils.checkPrefix("transform"), ee.push(f), s = at(), c = He.delayedCall(.2, Pt).pause(), g = [Xe, "visibilitychange", function () {
                    var e = Ne.innerWidth, t = Ne.innerHeight;
                    Xe.hidden ? (d = e, p = t) : d === e && p === t || Lb()
                }, Xe, "DOMContentLoaded", Pt, Ne, "load", Pt, Ne, "resize", Lb], Ra(wb), Tt.forEach(function (e) {
                    return e.enable(0, 1)
                }), t = 0; t < Ie.length; t += 3) yb(xb, Ie[t], Ie[t + 1]), yb(xb, Ie[t], Ie[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (tt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Ib, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ra(xb) || Ra(wb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e), n = Ie.indexOf(r), o = La(r);
            ~n && Ie.splice(n, o ? 6 : 2), t && (o ? Le.unshift(Ne, t, We, t, Je, t) : Le.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            Tt.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (ct(e) ? J(e) : e).getBoundingClientRect(), o = n[r ? ft : dt] * t || 0;
            return r ? 0 < n.right - o && n.left + o < Ne.innerWidth : 0 < n.bottom - o && n.top + o < Ne.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            ct(e) && (e = J(e));
            var n = e.getBoundingClientRect(), o = n[r ? ft : dt],
                i = null == t ? o / 2 : t in H ? H[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (Tt.slice(0).forEach(function (e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
            }), !0 !== e) {
                var t = W.killAll || [];
                W = {}, t.forEach(function (e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), x(this), this.init(e, t)
    }

    ne.version = "3.12.5", ne.saveStyles = function (e) {
        return e ? Ve(e).forEach(function (e) {
            if (e && e.style) {
                var t = j.indexOf(e);
                0 <= t && j.splice(t, 5), j.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), x())
            }
        }) : j
    }, ne.revert = function (e, t) {
        return Sb(!e, t)
    }, ne.create = function (e, t) {
        return new ne(e, t)
    }, ne.refresh = function (e) {
        return e ? Lb() : (s || ne.register()) && Pt(!0)
    }, ne.update = function (e) {
        return ++Ie.cache && Z(!0 === e ? 2 : 0)
    }, ne.clearScrollMemory = Tb, ne.maxScroll = function (e, t) {
        return Qa(e, t ? Ye : Fe)
    }, ne.getScrollFunc = function (e, t) {
        return K(J(e), t ? Ye : Fe)
    }, ne.getById = function (e) {
        return St[e]
    }, ne.getAll = function () {
        return Tt.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, ne.isScrolling = function () {
        return !!st
    }, ne.snapDirectional = tb, ne.addEventListener = function (e, t) {
        var r = W[e] || (W[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, ne.removeEventListener = function (e, t) {
        var r = W[e], n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, ne.batch = function (e, t) {
        function Cp(e, t) {
            var r = [], n = [], o = He.delayedCall(i, function () {
                t(r, n), r = [], n = []
            }).pause();
            return function (e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }

        var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && Ta(t[r]) && "onRefreshInit" !== r ? Cp(0, t[r]) : t[r];
        return Ta(a) && (a = a(), wb(ne, "refresh", function () {
            return a = t.batchMax()
        })), Ve(e).forEach(function (e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push(ne.create(t))
        }), n
    };

    function tc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function uc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none", e === Je && uc(We, t)
    }

    function wc(e) {
        var t, r = e.event, n = e.target, o = e.axis, i = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = i._gsap || He.core.getCache(i), s = at();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== We && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !ie[(t = mb(i)).overflowY] && !ie[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !La(i) && (ie[(t = mb(i)).overflowY] || ie[t.overflowX]), a._isScrollT = s
        }
        !a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function xc(e, t, r, n) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && wc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && wb(Xe, k.eventTypes[0], se, !1, !0)
            },
            onDisable: function onDisable() {
                return xb(Xe, k.eventTypes[0], se, !0)
            }
        })
    }

    function Bc(e) {
        function zq() {
            return o = !1
        }

        function Cq() {
            i = Qa(p, Fe), S = Ue(E ? 1 : 0, i), f && (T = Ue(0, Qa(p, Ye))), l = kt
        }

        function Dq() {
            v._gsap.y = Ia(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function Jq() {
            Cq(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i))
        }

        Va(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX, t = e.momentum, r = e.allowNestedScroll, d = e.onRelease,
            p = J(e.target) || Je, g = He.core.globals().ScrollSmoother, h = g && g.get(),
            v = E && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()), b = K(p, Fe),
            m = K(p, Ye), y = 1,
            x = (k.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth,
            w = 0, _ = Ta(t) ? function () {
                return t(n)
            } : function () {
                return t || 2.8
            }, C = xc(p, e.type, !0, r), T = Ha, S = Ha;
        return v && He.set(v, {y: "+=0"}), e.ignoreCheck = function (e) {
            return E && "touchmove" === e.type && function ignoreDrag() {
                if (o) {
                    requestAnimationFrame(zq);
                    var e = Ia(n.deltaY / 2), t = S(b.v - e);
                    if (v && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = Ia((parseFloat(v && v._gsap.y) || 0) - b.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = Ie.cache, Z()
                    }
                    return !0
                }
                b.offset && Dq(), o = !0
            }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function () {
            o = !1;
            var e = y;
            y = Ia((Ne.visualViewport && Ne.visualViewport.scale || 1) / x), a.pause(), e !== y && uc(p, 1.01 < y || !f && "x"), c = m(), u = b(), Cq(), l = kt
        }, e.onRelease = e.onGestureStart = function (e, t) {
            if (b.offset && Dq(), t) {
                Ie.cache++;
                var r, n, o = _();
                f && (n = (r = m()) + .05 * o * -e.velocityX / .227, o *= tc(m, r, n, Qa(p, Ye)), a.vars.scrollX = T(n)), n = (r = b()) + .05 * o * -e.velocityY / .227, o *= tc(b, r, n, Qa(p, Fe)), a.vars.scrollY = S(n), a.invalidate().duration(o).play(.01), (E && a.vars.scrollY >= i || i - 1 <= r) && He.to({}, {
                    onUpdate: Jq,
                    duration: o
                })
            } else s.restart(!0);
            d && d(e)
        }, e.onWheel = function () {
            a._ts && a.pause(), 1e3 < at() - w && (l = 0, w = at())
        }, e.onChange = function (e, t, r, n, o) {
            if (kt !== l && Cq(), t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
                b.offset && Dq();
                var i = o[2] === r, a = i ? u + e.startY - e.y : b() + r - o[1], s = S(a);
                i && a !== s && (u += s - a), b(s)
            }
            (r || t) && Z()
        }, e.onEnable = function () {
            uc(p, !f && "x"), ne.addEventListener("refresh", Jq), wb(Ne, "resize", Jq), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), C.enable()
        }, e.onDisable = function () {
            uc(p, !0), xb(Ne, "resize", Jq), ne.removeEventListener("refresh", Jq), C.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new k(e)).iOS = E) && !b() && b(1), E && He.ticker.add(Ha), s = n._dc, a = He.to(n, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: pc(b, b(), function () {
                    return a.pause()
                })
            },
            onUpdate: Z,
            onComplete: s.vars.onComplete
        }), n
    }

    var oe, ie = {auto: 1, scroll: 1}, ae = /(input|label|select|textarea)/i, se = function _captureInputs(e) {
        var t = ae.test(e.target.tagName);
        (t || oe) && (e._gsapAllow = !0, oe = t)
    };
    ne.sort = function (e) {
        return Tt.sort(e || function (e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, ne.observe = function (e) {
        return new k(e)
    }, ne.normalizeScroll = function (e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill(), void (v = e);
        var t = e instanceof k ? e : Bc(e);
        return v && v.target === t.target && v.kill(), La(t.target) && (v = t), t
    }, ne.core = {
        _getVelocityProp: L, _inputObserver: xc, _scrollers: Ie, _proxies: Le, bridge: {
            ss: function ss() {
                st || U("scrollStart"), st = at()
            }, ref: function ref() {
                return je
            }
        }
    }, Ka() && He.registerPlugin(ne), e.ScrollTrigger = ne, e.default = ne;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    } else {
        delete e.default
    }
});


/* ========== */
/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function (D) {
    "use strict";
    var i = /(?:^\s+|\s+$)/g,
        r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function splitInnerHTML(D, u, F, C) {
        for (var E, e = D.firstChild, t = []; e;) 3 === e.nodeType ? (E = (e.nodeValue + "").replace(/^\n+/g, ""), C || (E = E.replace(/\s+/g, " ")), t.push.apply(t, emojiSafeSplit(E, u, F, C))) : "br" === (e.nodeName + "").toLowerCase() ? t[t.length - 1] += "<br>" : t.push(e.outerHTML), e = e.nextSibling;
        for (E = t.length; E--;) "&" === t[E] && t.splice(E, 1, "&amp;");
        return t
    }

    function emojiSafeSplit(D, u, F, C) {
        if (D += "", F && (D = D.trim ? D.trim() : D.replace(i, "")), u && "" !== u) return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);
        for (var E, e, t = [], n = D.length, B = 0; B < n; B++) (55296 <= (e = D.charAt(B)).charCodeAt(0) && e.charCodeAt(0) <= 56319 || 65024 <= D.charCodeAt(B + 1) && D.charCodeAt(B + 1) <= 65039) && (E = ((D.substr(B, 12).split(r) || [])[1] || "").length || 2, e = D.substr(B, E), B += E - (t.emoji = 1)), t.push(">" === e ? "&gt;" : "<" === e ? "&lt;" : !C || " " !== e || " " !== D.charAt(B - 1) && " " !== D.charAt(B + 1) ? e : "&nbsp;");
        return t
    }

    var u, g, F = {
        version: "3.12.5", name: "text", init: function init(D, u, F) {
            "object" != typeof u && (u = {value: u});
            var C, E, e, t, n, B, i, r, A = D.nodeName.toUpperCase(), s = this, l = u.newClass, o = u.oldClass,
                a = u.preserveSpaces, p = u.rtl, f = s.delimiter = u.delimiter || "",
                d = s.fillChar = u.fillChar || (u.padSpace ? "&nbsp;" : "");
            if (s.svg = D.getBBox && ("TEXT" === A || "TSPAN" === A), !("innerHTML" in D || s.svg)) return !1;
            if (s.target = D, "value" in u) {
                for (e = splitInnerHTML(D, f, !1, a), (g = g || document.createElement("div")).innerHTML = u.value, E = splitInnerHTML(g, f, !1, a), s.from = F._from, !s.from && !p || p && s.from || (A = e, e = E, E = A), s.hasClass = !(!l && !o), s.newClass = p ? o : l, s.oldClass = p ? l : o, C = (A = e.length - E.length) < 0 ? e : E, A < 0 && (A = -A); -1 < --A;) C.push(d);
                if ("diff" === u.type) {
                    for (n = [], B = [], i = "", A = t = 0; A < E.length; A++) (r = E[A]) === e[A] ? i += r : (n[t] = i + r, B[t++] = i + e[A], i = "");
                    E = n, e = B, i && (E.push(i), e.push(i))
                }
                u.speed && F.duration(Math.min(.05 / u.speed * C.length, u.maxDuration || 9999)), s.rtl = p, s.original = e, s.text = E, s._props.push("text")
            } else s.text = s.original = [""]
        }, render: function render(D, u) {
            1 < D ? D = 1 : D < 0 && (D = 0), u.from && (D = 1 - D);
            var F, C, E, e = u.text, t = u.hasClass, n = u.newClass, B = u.oldClass, i = u.delimiter, r = u.target,
                A = u.fillChar, s = u.original, l = u.rtl, o = e.length, a = (l ? 1 - D : D) * o + .5 | 0;
            E = t && D ? (C = B && a !== o, ((F = n && a) ? "<span class='" + n + "'>" : "") + e.slice(0, a).join(i) + (F ? "</span>" : "") + (C ? "<span class='" + B + "'>" : "") + i + s.slice(a).join(i) + (C ? "</span>" : "")) : e.slice(0, a).join(i) + i + s.slice(a).join(i), u.svg ? r.textContent = E : r.innerHTML = "&nbsp;" === A && ~E.indexOf("  ") ? E.split("  ").join("&nbsp;&nbsp;") : E
        }
    };
    F.splitInnerHTML = splitInnerHTML, F.emojiSafeSplit = emojiSafeSplit, F.getText = function getText(D) {
        var u = D.nodeType, F = "";
        if (1 === u || 9 === u || 11 === u) {
            if ("string" == typeof D.textContent) return D.textContent;
            for (D = D.firstChild; D; D = D.nextSibling) F += getText(D)
        } else if (3 === u || 4 === u) return D.nodeValue;
        return F
    }, function _getGSAP() {
        return u || "undefined" != typeof window && (u = window.gsap) && u.registerPlugin && u
    }() && u.registerPlugin(F), D.TextPlugin = F, D.default = F;
    if (typeof (window) === "undefined" || window !== D) {
        Object.defineProperty(D, "__esModule", {value: !0})
    } else {
        delete D.default
    }
});


/* ========== */
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function l() {
        return "undefined" != typeof window
    }

    function m() {
        return f || l() && (f = window.gsap) && f.registerPlugin && f
    }

    function n(e) {
        return "string" == typeof e
    }

    function o(e) {
        return "function" == typeof e
    }

    function p(e, t) {
        var o = "x" === t ? "Width" : "Height", n = "scroll" + o, r = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o]
    }

    function q(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c), function () {
            return e[o]
        }
    }

    function s(e, t) {
        if (!(e = y(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = e.getBoundingClientRect(), n = !t || t === T || t === c, r = n ? {
            top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
            left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
        } : t.getBoundingClientRect(), l = {x: o.left - r.left, y: o.top - r.top};
        return !n && t && (l.x += q(t, "x")(), l.y += q(t, "y")()), l
    }

    function t(e, t, o, r, l) {
        return isNaN(e) || "object" == typeof e ? n(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - l : "max" === e ? p(t, o) - l : Math.min(p(t, o), s(e, t)[o] - l) : parseFloat(e) - l
    }

    function u() {
        f = m(), l() && f && "undefined" != typeof document && document.body && (T = window, c = document.body, i = document.documentElement, y = f.utils.toArray, f.config({autoKillThreshold: 7}), h = f.config(), a = 1)
    }

    var f, a, T, i, c, y, h, v, r = {
        version: "3.12.5", name: "scrollTo", rawVars: 1, register: function register(e) {
            f = e, u()
        }, init: function init(e, r, l, s, i) {
            a || u();
            var p = this, c = f.getProperty(e, "scrollSnapType");
            p.isWin = e === T, p.target = e, p.tween = l, r = function _clean(e, t, r, l) {
                if (o(e) && (e = e(t, r, l)), "object" != typeof e) return n(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {y: e};
                if (e.nodeType) return {y: e, x: e};
                var s, i = {};
                for (s in e) i[s] = "onAutoKill" !== s && o(e[s]) ? e[s](t, r, l) : e[s];
                return i
            }(r, s, e, i), p.vars = r, p.autoKill = !!r.autoKill, p.getX = q(e, "x"), p.getY = q(e, "y"), p.x = p.xPrev = p.getX(), p.y = p.yPrev = p.getY(), v = v || f.core.globals().ScrollTrigger, "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, {scrollBehavior: "auto"}), c && "none" !== c && (p.snap = 1, p.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != r.x ? (p.add(p, "x", p.x, t(r.x, e, "x", p.x, r.offsetX || 0), s, i), p._props.push("scrollTo_x")) : p.skipX = 1, null != r.y ? (p.add(p, "y", p.y, t(r.y, e, "y", p.y, r.offsetY || 0), s, i), p._props.push("scrollTo_y")) : p.skipY = 1
        }, render: function render(e, t) {
            for (var o, n, r, l, s, i = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; i;) i.r(e, i.d), i = i._next;
            o = d || !t.skipX ? t.getX() : a, r = (n = d || !t.skipY ? t.getY() : y) - y, l = o - a, s = h.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), f && (!t.skipX && (s < l || l < -s) && o < p(c, "x") && (t.skipX = 1), !t.skipY && (s < r || r < -s) && n < p(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !g || 1 !== e && 0 !== e || (n = c.scrollTop, o = c.scrollLeft, x ? c.style.scrollSnapType = x : c.style.removeProperty("scroll-snap-type"), c.scrollTop = n + 1, c.scrollLeft = o + 1, c.scrollTop = n, c.scrollLeft = o), t.xPrev = t.x, t.yPrev = t.y, v && v.update()
        }, kill: function kill(e) {
            var t = "scrollTo" === e, o = this._props.indexOf(e);
            return !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1), -1 < o && this._props.splice(o, 1), !this._props.length
        }
    };
    r.max = p, r.getOffset = s, r.buildGetter = q, m() && f.registerPlugin(r), e.ScrollToPlugin = r, e.default = r;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    } else {
        delete e.default
    }
});