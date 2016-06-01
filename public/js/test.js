/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement)cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)for (h in a.converters)typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*")k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)for (i in e)if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d)j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b))f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object")for (var e in b)b_(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++)l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border")for (; e < g; e += 2)c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null)d = a.style[b];
        if (bt.test(d))return d;
        d = parseFloat(d) || 0;
        if (c)for (; e < g; e += 2)d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)for (d = 0, e = i[c].length; d < e; d++)f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b))return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b]))continue;
            if (b !== "toJSON")return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
            return new e.fn.init(a, b, h)
        }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
            return (b + "").toUpperCase()
        }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a)return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2])return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a))return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), A.add(a);
                return this
            }, eq: function (a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: E, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++)if ((a = arguments[j]) != null)for (c in a) {
                d = i[c], f = a[c];
                if (i === f)continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body)return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0)return;
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete")return setTimeout(e.ready, 1);
                    if (c.addEventListener)c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && J()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a != null && a == a.window
            }, isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }, type: function (a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a);
                return d === b || D.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a)return !1;
                return !0
            }, error: function (a) {
                throw new Error(a)
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b)return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                if (typeof c != "string" || !c)return null;
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(w, "ms-").replace(v, x)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a)if (c.apply(a[f], d) === !1)break
                    } else for (; g < h;)if (c.apply(a[g++], d) === !1)break
                } else if (i) {
                    for (f in a)if (c.call(a[f], f, a[f]) === !1)break
                } else for (; g < h;)if (c.call(a[g], g, a[g++]) === !1)break;
                return a
            }, trim: G ? function (a) {
                return a == null ? "" : G.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (H)return H.call(b, a, c);
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++)if (c in b && b[c] === a)return c
                }
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number")for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k)for (; i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a))return b;
                var f = F.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h, i) {
                var j, k = d == null, l = 0, m = a.length;
                if (d && typeof d == "object") {
                    for (l in d)e.access(a, c, l, d[l], 1, h, f);
                    g = 1
                } else if (f !== b) {
                    j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                        return j.call(e(a), c)
                    }) : (c.call(a, f), c = null));
                    if (c)for (; l < m; l++)c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                    g = 1
                }
                return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("聽") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++)g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++)if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {
            add: function () {
                if (c) {
                    var a = c.length;
                    n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            }, remove: function () {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++)for (var f = 0; f < c.length; f++)if (b[d] === c[f]) {
                        j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                        if (a.unique)break
                    }
                }
                return this
            }, has: function (a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++)if (a === c[b])return !0
                }
                return !1
            }, empty: function () {
                c = [];
                return this
            }, disable: function () {
                c = d = e = b;
                return this
            }, disabled: function () {
                return !c
            }, lock: function () {
                d = b, (!e || e === !0) && p.disable();
                return this
            }, locked: function () {
                return !d
            }, fireWith: function (b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            }, fire: function () {
                p.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = {
                resolve: b,
                reject: c,
                notify: d
            }, h = {
                done: b.add, fail: c.add, progress: d.add, state: function () {
                    return e
                }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                    i.done(a).fail(b).progress(c);
                    return this
                }, always: function () {
                    i.done.apply(i, arguments).fail.apply(i, arguments);
                    return this
                }, pipe: function (a, b, c) {
                    return f.Deferred(function (d) {
                        f.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                            var c = b[0], e = b[1], g;
                            f.isFunction(c) ? i[a](function () {
                                g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                            }) : i[a](d[e])
                        })
                    }).promise()
                }, promise: function (a) {
                    if (a == null)a = h; else for (var b in h)a[b] = h[b];
                    return a
                }
            }, i = h.promise({}), j;
            for (j in g)i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        }, when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e)return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)for (n in{
            submit: 1,
            change: 1,
            focusin: 1
        })m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c])return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k])return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++)delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d))return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k]))return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0], k = 0, m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++)h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object")return this.each(function () {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d)return f.queue(this[0], a);
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--)if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0))h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)if (!e.className && b.length === 1)e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++)~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++)h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a))return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++)if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b)this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b)return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0)return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j)return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length)return f(i[g]).val();
                    return h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn)return f(a)[c](d);
                if (typeof a.getAttribute == "undefined")return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b)return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null)return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++)e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button"))return w.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button"))return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get, set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b))return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
        var b = F.exec(a);
        b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
        return b
    }, H = function (a, b) {
        var c = a.attributes || {};
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
    }, I = function (a) {
        return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
    };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o)f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++)s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered))return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode)r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this)if (m.disabled !== !0) {
                        p = {}, r = [], n[0] = m;
                        for (k = 0; k < e; k++)s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                        r.length && j.push({elem: m, matches: r})
                    }
                }
                d.length > e && j.push({elem: this, matches: d.slice(e)});
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando])return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;)e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {setup: f.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event))return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J
    }, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d))a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form"))return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form"))return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1)e = J; else if (!e)return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a)this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function")d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0])return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)return [];
            if (!b || typeof b != "string")return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length)b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1)for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a)return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\")continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f)g = i = !0; else if (f === !0)continue
                    }
                    if (f)for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g)return [];
                        break
                    }
                }
                if (a === q)if (g == null)m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string")return a.textContent;
                    if (typeof a.innerText == "string")return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
                } else if (d === 3 || d === 4)return a.nodeValue
            } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++)if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1);
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                }, "~": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined")return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f)return a;
                    for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(j, "")
                }, TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not")if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))b[3] = m(b[3], null, null, c); else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!m(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f)return f(a, c, b, d);
                    if (e === "contains")return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++)if (g[h] === a)return !1;
                        return !0
                    }
                    m.error(e)
                }, CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case"only":
                        case"first":
                            while (l = l.previousSibling)if (l.nodeType === 1)return !1;
                            if (k === "first")return !0;
                            l = a;
                        case"last":
                            while (l = l.nextSibling)if (l.nodeType === 1)return !1;
                            return !0;
                        case"nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0)return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f)return f(a, c, b, d)
                }
            }
        }, p = o.match.POS, q = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a); else if (typeof a.length == "number")for (var e = a.length; c < e; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)return v(a, b);
            if (!g)return -1;
            if (!i)return 1;
            while (j)e.unshift(j), j = j.parentNode;
            j = i;
            while (j)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b)return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body)return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)return s([], f);
                                if (i.id === h[3])return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p)return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a)m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a))try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11)return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1)return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c)return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++)m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string")return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)if (f.contains(b[c], this))return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)for (h = g; h < e.length; h++)for (i = 0; i < g; i++)if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)if (f.contains(this, b[a]))return !0
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a)return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string")return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])if (a.nodeType === 1 && ++e === b)break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (f.isFunction(a))return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a))return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f
                    .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++)if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild)b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++)c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a))return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j))return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j))return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g)e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g)bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        }, clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l)continue;
                if (typeof l == "string")if (!_.test(l))l = b.createTextNode(l); else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r;
                    b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                    while (o--)p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                        for (i = t.length - 1; i >= 0; --i)f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    }
                    !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked)if (l[0] && typeof (u = l.length) == "number")for (i = 0; i < u; i++)bn(l[i]); else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()])continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b)return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d))return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b)try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b)return e;
            if (by)return by(a, c)
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b)d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b)a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c)return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                    return bB(a, b, d)
                })
            }, set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter)return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {display: "inline-block"}, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++)f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR)return bR.apply(this, arguments);
            if (!this.length)return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bE, "\r\n")}
                }) : {name: b.name, value: c.replace(bE, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified"))f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag"))f.etag[k] = z
                        }
                        if (a === 304)w = "notmodified", o = !0; else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a)w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    if (!s) {
                        var c = a.toLowerCase();
                        a = m[c] = m[c] || a, l[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return s === 2 ? n : null
                },
                getResponseHeader: function (a) {
                    var c;
                    if (s === 2) {
                        if (!o) {
                            o = {};
                            while (c = bG.exec(n))o[c[1].toLowerCase()] = c[2]
                        }
                        c = o[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function (a) {
                    s || (d.mimeType = a);
                    return this
                },
                abort: function (a) {
                    a = a || "abort", p && p.abort(a), w(0, a);
                    return this
                }
            };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2)return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in{success: 1, error: 1, complete: 1})v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p)w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2)w(-1, z); else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a)b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg)cg[a](0, 1)
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)for (j in c.xhrFields)h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e)h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0)return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0)return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++)d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++)this[g].style && (this[g].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l)i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        }, stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)for (b in g)g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0)d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this, g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)for (b in i.animatedProperties)f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(co), co = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a))return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j;
        return {top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed")break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static")k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        if (!d)return null;
        if (c === d.body)return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0])return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")a = a.offsetParent;
                return a
            })
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b)return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e])return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
;PKINFO.eCode = {
    A00000: "鎿嶄綔鎴愬姛",
    A00001: "鎮ㄨ繕娌＄櫥褰曞摝!",
    A00002: "鍑洪敊鍠斤紝璇风◢鍊欏啀璇曪紒",
    A00003: "瀵逛笉璧凤紝鎮ㄧ殑璐﹀彿鏆傛椂涓嶈兘鍙戣〃浠讳綍鍐呭锛�",
    A00004: "鐢ㄦ埛涓嶅瓨鍦�",
    A00005: "鐢ㄦ埛鏈縺娲�",
    A00006: "姝ら偖绠辫繕鏈敞鍐岃繃",
    A00007: "鐧诲綍澶辫触",
    A00008: "鎶辨瓑锛屾搷浣滅殑澶绻侊紒",
    A10001: "鍥剧墖鍙傛暟寮傚父",
    A10002: "鍥剧墖鏍煎紡涓嶅",
    A10003: "瓒呰繃鏂囦欢澶у皬闄愬埗",
    A10004: "瓒呰繃瀹介珮",
    A10005: "鎻愪氦鍙傛暟鏈夎",
    A10006: "鍘熷鍥剧墖涓嶅瓨鍦�",
    A00101: "閭鏍煎紡閿欒",
    A00102: "姝ら偖绠卞繁娉ㄥ唽锛岃<a href='javascript:void(0);' class='blue' onclick=\"location.href='/reg/gotoemail.php?email='+$('#email').val()\">婵€娲�</a>",
    A00103: '杩欎釜閭宸辨敞鍐岃繃锛岃<a href="/user/login.php">鐩存帴鐧诲綍</a>',
    A00201: "鏄电О鏍煎紡閿欒",
    A00202: "鏄电О宸茬粡琚汉鍗犵敤浜�",
    A00301: "閭鏍煎紡鏈夎",
    A00302: "瀵嗙爜鏍煎紡鏈夎",
    A00303: "鏄电О鏍煎紡鏈夎",
    A00304: "璇ラ偖绠卞凡缁忔敞鍐岃繃浜�",
    A00401: "閭鏍煎紡鏈夎",
    A00402: "婵€娲婚偖浠跺彂閫佸お棰戠箒",
    A00403: "閭宸茬粡婵€娲昏繃浜�",
    A00501: "閭鏍煎紡鏈夎",
    A00502: '姝ら偖绠辫繕娌℃湁娉ㄥ唽杩囷紝<a href="/reg/reg.php">绔嬪嵆娉ㄥ唽</a>',
    A00503: "閭娌℃湁婵€娲�",
    A00601: "瀵嗙爜鏍煎紡鏈夎",
    A00602: "瀵嗙爜杈撳叆閿欒",
    A00701: "閭鎴栧瘑鐮侀敊璇紝璇烽噸璇曪紒",
    A00702: "瀵嗙爜涓嶈兘涓虹┖",
    A00801: "褰撳墠瀵嗙爜閿欒锛岃閲嶈瘯",
    A00802: "瀵嗙爜闀垮害涓�6-20浣嶅瓧绗�",
    A00803: "褰撳墠瀵嗙爜閿欒锛岃閲嶈瘯",
    A00901: "鎻愪氦鍙傛暟鏈夎",
    A00902: "涓婁紶澶辫触锛岃閲嶈瘯",
    A01001: "鐢ㄦ埛鍚嶆牸寮忔湁璇�",
    A01002: "璇ョ敤鎴峰悕宸茬粡琚崰鐢ㄤ簡",
    A01003: "涓汉绛惧悕瓒呭瓧鍟�",
    A01101: "缁戝畾璐﹀彿寮傚父",
    A01102: "閭鏍煎紡鏈夎",
    A01103: "瀵嗙爜鏍煎紡鏈夎",
    A01104: "鏄电О鏍煎紡鏈夎",
    A01105: '杩欎釜閭宸辨敞鍐岃繃锛岃<a href="/user/login.php">鐩存帴鐧诲綍</a>',
    A01106: "鏄电О宸茬粡琚汉鍗犵敤浜�",
    A01201: "缁戝畾璐﹀彿寮傚父",
    A01202: "閭鎴栧瘑鐮侀敊璇紝璇烽噸璇�",
    A01203: "閭鎴栧瘑鐮侀敊璇紝璇烽噸璇�",
    A01204: "閭鎴栧瘑鐮侀敊璇紝璇烽噸璇�",
    A01301: "鎿嶄綔澶辫触",
    A01401: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A01402: "鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒",
    A01403: "鎶辨瓑锛屽唴瀹归暱搴﹁秴杩囬檺鍒讹紒",
    A01404: "鍐呭涓嶈兘瓒呰繃25琛岋紒",
    A01405: "鎶辨瓑锛孋ard鍥剧墖涓嶈兘涓虹┖锛�",
    A01406: "鎶辨瓑锛屽彂閫侀偖绠卞湴鍧€瓒呰繃3涓紒",
    A01501: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A01502: "鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒",
    A01503: "鎶辨瓑锛屽唴瀹归暱搴﹁秴杩囬檺鍒讹紒",
    A01601: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A01701: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A01702: "鎶辨瓑锛屾偍宸茬粡琛ㄨ揪杩囷紒",
    A01801: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A01901: "鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒",
    A01902: "鎶辨瓑锛屽唴瀹归暱搴﹁秴杩囬檺鍒讹紒",
    A02001: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02002: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁�",
    A02003: "鎶辨瓑锛屾搷浣滅殑澶绻�",
    A02004: "璇烽€夋嫨涓€鍒颁袱涓爣绛撅紒",
    A02005: "璇疯緭鍏ュ墽鍦烘爣棰橈紒",
    A02006: "鎶辨瓑锛屾爣棰橀暱搴﹁秴杩囬檺鍒讹紒",
    A02007: "璇疯緭鍏ュ墽鍦哄唴瀹癸紒",
    A02008: "鍝嶅簲瓒呮椂璇烽噸鏂板皾璇曪紒",
    A02009: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02010: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02011: "鎶辨瓑锛屾爣棰橀暱搴﹁秴杩囬檺鍒讹紒",
    A02012: "鍐呭涓嶈兘瓒呰繃10琛岋紒",
    A02101: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02102: "鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒",
    A02103: "鎶辨瓑锛屽唴瀹归暱搴﹁秴杩囬檺鍒讹紒",
    A02201: "鎶辨瓑锛屽叧娉ㄤ笉鑳戒负绌猴紒",
    A02202: "鎶辨瓑锛屽叧娉ㄨ繃澶氾紒",
    A02203: "鎶辨瓑锛屽彇娑堝叧娉ㄤ笉鑳戒负绌猴紒",
    A02204: "鎶辨瓑锛屾煡璇㈠ソ鍙嬩笉鑳戒负绌猴紒",
    A02301: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02302: "鎶辨瓑锛屽浘鐗囧昂瀵稿お灏忥紒",
    A02303: "鎶辨瓑锛屽浘鐗囧昂瀵镐笉绗﹀悎灏哄瑙勮寖锛�",
    A02304: "鎶辨瓑锛屽浘鐗囨牸寮忎笉瀵癸紒",
    A02305: "鎶辨瓑锛屾枃浠舵牸寮忎笉瀵癸紒",
    A02501: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02502: "鎶辨瓑锛屽彂閫佺墖閭殑鍐呭涓嶈兘涓虹┖锛�",
    A02503: "鎶辨瓑锛屾墍鐗囬偖鐢ㄦ埛涓嶅瓨鍦紒",
    A02504: "鎶辨瓑, 鎮ㄧ殑甯愭埛宸茬粡琚瑷€锛�",
    A02505: "鎶辨瓑, 浜掔浉鍏虫敞鎵嶈兘鍙戠墖閭紒",
    A02601: "鎶辨瓑锛岀幇鍦ㄤ笉鏄姇绋挎椂闂达紒",
    A02602: "鎶辨瓑锛屼綘宸茬粡鎶曡繃绋夸簡锛�",
    A02603: "鎶辨瓑锛屽唴瀹归暱搴︿笉绗﹀悎瑙勮寖锛�",
    A02701: "鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒",
    A02702: "鎶辨瓑锛屽彧鑳芥坊鍔犺嚜宸辩殑鏂囩珷锛�",
    A02703: "鎶辨瓑锛岃繖绡囨枃绔犲凡缁忔姇杩囩ǹ浜嗭紒",
    A02704: "鎶辨瓑锛岃繖绡囨枃绔犱笉鍦ㄨ涓撻涓嬶紒",
    A02705: "鎶辨瓑锛屼綔鍝佸湴鍧€涓嶈兘涓虹┖锛�",
    A02706: "鎶辨瓑锛岃鍦板潃涓嶆槸鐗囧埢鏂囩珷鍦板潃锛�",
    abc: "abc"
}, PKINFO.defText = {
    nickname: "鏄电О",
    email: "閭",
    password: "瀵嗙爜",
    def_name_msg: "璇疯緭鍏�4-30浣嶅瓧绗︼紝涓嫳鏂囧潎鍙�",
    def_email_msg: "璇疯緭鍏ユ偍鐨凟mail閭",
    def_psd_msg: "璇疯緭鍏ュ瘑鐮侀暱搴︿负6-20浣嶅瓧绗�"
};
var CITYINFO = {
    province: {
        34: "瀹夊窘",
        11: "鍖椾含",
        50: "閲嶅簡",
        35: "绂忓缓",
        62: "鐢樿們",
        44: "骞夸笢",
        45: "骞胯タ",
        52: "璐靛窞",
        46: "娴峰崡",
        13: "娌冲寳",
        23: "榛戦緳姹�",
        41: "娌冲崡",
        42: "婀栧寳",
        43: "婀栧崡",
        15: "鍐呰挋鍙�",
        32: "姹熻嫃",
        36: "姹熻タ",
        22: "鍚夋灄",
        21: "杈藉畞",
        64: "瀹佸",
        63: "闈掓捣",
        14: "灞辫タ",
        37: "灞变笢",
        31: "涓婃捣",
        51: "鍥涘窛",
        12: "澶╂触",
        54: "瑗胯棌",
        65: "鏂扮枂",
        53: "浜戝崡",
        33: "娴欐睙",
        61: "闄曡タ",
        71: "鍙版咕",
        81: "棣欐腐",
        82: "婢抽棬",
        99: "娴峰"
    },
    city: {
        11: {
            1: "涓滃煄鍖�",
            2: "瑗垮煄鍖�",
            5: "鏈濋槼鍖�",
            6: "涓板彴鍖�",
            7: "鐭虫櫙灞卞尯",
            8: "娴锋穩鍖�",
            9: "闂ㄥご娌熷尯",
            11: "鎴垮北鍖�",
            12: "閫氬窞鍖�",
            13: "椤轰箟鍖�",
            14: "鏄屽钩鍖�",
            15: "澶у叴鍖�",
            16: "鎬€鏌斿尯",
            17: "骞宠胺鍖�",
            28: "瀵嗕簯鍘�",
            29: "寤跺簡鍘�"
        },
        12: {
            1: "鍜屽钩鍖�",
            2: "娌充笢鍖�",
            3: "娌宠タ鍖�",
            4: "鍗楀紑鍖�",
            5: "娌冲寳鍖�",
            6: "绾㈡ˉ鍖�",
            7: "濉樻步鍖�",
            8: "姹夋步鍖�",
            9: "澶ф腐鍖�",
            10: "涓滀附鍖�",
            11: "瑗块潚鍖�",
            12: "娲ュ崡鍖�",
            13: "鍖楄景鍖�",
            14: "姝︽竻鍖�",
            15: "瀹濆澔鍖�",
            21: "瀹佹渤鍘�",
            23: "闈欐捣鍘�",
            25: "钃熷幙"
        },
        13: {
            1: "鐭冲搴�",
            2: "鍞愬北",
            3: "绉︾殗宀�",
            4: "閭兏",
            5: "閭㈠彴",
            6: "淇濆畾",
            7: "寮犲鍙�",
            8: "鎵垮痉",
            9: "娌у窞",
            10: "寤婂潑",
            11: "琛℃按"
        },
        14: {
            1: "澶師",
            2: "澶у悓",
            3: "闃虫硥",
            4: "闀挎不",
            5: "鏅嬪煄",
            6: "鏈斿窞",
            7: "鏅嬩腑",
            8: "杩愬煄",
            9: "蹇诲窞",
            10: "涓存本",
            23: "鍚曟"
        },
        15: {
            1: "鍛煎拰娴╃壒",
            2: "鍖呭ご",
            3: "涔屾捣",
            4: "璧ゅ嘲",
            5: "閫氳窘",
            6: "閯傚皵澶氭柉",
            7: "鍛间鸡璐濆皵",
            22: "鍏村畨鐩�",
            25: "閿℃灄閮嫆鐩�",
            26: "涔屽叞瀵熷竷鐩�",
            28: "宸村溅娣栧皵鐩�",
            29: "闃挎媺鍠勭洘"
        },
        21: {
            1: "娌堥槼",
            2: "澶ц繛",
            3: "闉嶅北",
            4: "鎶氶『",
            5: "鏈邯",
            6: "涓逛笢",
            7: "閿﹀窞",
            8: "钀ュ彛",
            9: "闃滄柊",
            10: "杈介槼",
            11: "鐩橀敠",
            12: "閾佸箔",
            13: "鏈濋槼",
            14: "钁姦宀�"
        },
        22: {1: "闀挎槬", 2: "鍚夋灄", 3: "鍥涘钩", 4: "杈芥簮", 5: "閫氬寲", 6: "鐧藉北", 7: "鏉惧師", 8: "鐧藉煄", 24: "寤惰竟鏈濋矞鏃忚嚜娌诲窞"},
        23: {
            1: "鍝堝皵婊�",
            2: "榻愰綈鍝堝皵",
            3: "楦¤タ",
            4: "楣ゅ矖",
            5: "鍙岄腑灞�",
            6: "澶у簡",
            7: "浼婃槬",
            8: "浣虫湪鏂�",
            9: "涓冨彴娌�",
            10: "鐗′腹姹�",
            11: "榛戞渤",
            12: "缁ュ寲",
            27: "澶у叴瀹夊箔"
        },
        31: {
            1: "榛勬郸鍖�",
            3: "鍗㈡咕鍖�",
            4: "寰愭眹鍖�",
            5: "闀垮畞鍖�",
            6: "闈欏畨鍖�",
            7: "鏅檧鍖�",
            8: "闂稿寳鍖�",
            9: "铏瑰彛鍖�",
            10: "鏉ㄦ郸鍖�",
            12: "闂佃鍖�",
            13: "瀹濆北鍖�",
            14: "鍢夊畾鍖�",
            15: "娴︿笢鏂板尯",
            16: "閲戝北鍖�",
            17: "鏉炬睙鍖�",
            18: "闈掓郸鍖�",
            19: "鍗楁眹鍖�",
            20: "濂夎搐鍖�",
            30: "宕囨槑鍘�"
        },
        32: {
            1: "鍗椾含",
            2: "鏃犻敗",
            3: "寰愬窞",
            4: "甯稿窞",
            5: "鑻忓窞",
            6: "鍗楅€�",
            7: "杩炰簯娓�",
            8: "娣畨",
            9: "鐩愬煄",
            10: "鎵窞",
            11: "闀囨睙",
            12: "娉板窞",
            13: "瀹胯縼"
        },
        33: {
            1: "鏉窞",
            2: "瀹佹尝",
            3: "娓╁窞",
            4: "鍢夊叴",
            5: "婀栧窞",
            6: "缁嶅叴",
            7: "閲戝崕",
            8: "琛㈠窞",
            9: "鑸熷北",
            10: "鍙板窞",
            11: "涓芥按"
        },
        34: {
            1: "鍚堣偉",
            2: "鑺滄箹",
            3: "铓屽煚",
            4: "娣崡",
            5: "椹瀺灞�",
            6: "娣寳",
            7: "閾滈櫟",
            8: "瀹夊簡",
            10: "榛勫北",
            11: "婊佸窞",
            12: "闃滈槼",
            13: "瀹垮窞",
            14: "宸㈡箹",
            15: "鍏畨",
            16: "浜冲窞",
            17: "姹犲窞",
            18: "瀹ｅ煄"
        },
        35: {1: "绂忓窞", 2: "鍘﹂棬", 3: "鑾嗙敯", 4: "涓夋槑", 5: "娉夊窞", 6: "婕冲窞", 7: "鍗楀钩", 8: "榫欏博", 9: "瀹佸痉"},
        36: {
            1: "鍗楁槍",
            2: "鏅痉闀�",
            3: "钀嶄埂",
            4: "涔濇睙",
            5: "鏂颁綑",
            6: "楣版江",
            7: "璧ｅ窞",
            8: "鍚夊畨",
            9: "瀹滄槬",
            10: "鎶氬窞",
            11: "涓婇ザ"
        },
        37: {
            1: "娴庡崡",
            2: "闈掑矝",
            3: "娣勫崥",
            4: "鏋ｅ簞",
            5: "涓滆惀",
            6: "鐑熷彴",
            7: "娼嶅潑",
            8: "娴庡畞",
            9: "娉板畨",
            10: "濞佹捣",
            11: "鏃ョ収",
            12: "鑾辫姕",
            13: "涓存矀",
            14: "寰峰窞",
            15: "鑱婂煄",
            16: "婊ㄥ窞",
            17: "鑿忔辰"
        },
        41: {
            1: "閮戝窞",
            2: "寮€灏�",
            3: "娲涢槼",
            4: "骞抽《灞�",
            5: "瀹夐槼",
            6: "楣ゅ",
            7: "鏂颁埂",
            8: "鐒︿綔",
            9: "婵槼",
            10: "璁告槍",
            11: "婕渤",
            12: "涓夐棬宄�",
            13: "鍗楅槼",
            14: "鍟嗕笜",
            15: "淇￠槼",
            16: "鍛ㄥ彛",
            17: "椹婚┈搴�"
        },
        42: {
            1: "姝︽眽",
            2: "榛勭煶",
            3: "鍗佸牥",
            5: "瀹滄槍",
            6: "瑗勬▕",
            7: "閯傚窞",
            8: "鑽嗛棬",
            9: "瀛濇劅",
            10: "鑽嗗窞",
            11: "榛勫唸",
            12: "鍜稿畞",
            13: "闅忓窞",
            28: "鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞"
        },
        43: {
            1: "闀挎矙",
            2: "鏍床",
            3: "婀樻江",
            4: "琛￠槼",
            5: "閭甸槼",
            6: "宀抽槼",
            7: "甯稿痉",
            8: "寮犲鐣�",
            9: "鐩婇槼",
            10: "閮村窞",
            11: "姘稿窞",
            12: "鎬€鍖�",
            13: "濞勫簳",
            31: "婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞"
        },
        44: {
            1: "骞垮窞",
            2: "闊跺叧",
            3: "娣卞湷",
            4: "鐝犳捣",
            5: "姹曞ご",
            6: "浣涘北",
            7: "姹熼棬",
            8: "婀涙睙",
            9: "鑼傚悕",
            12: "鑲囧簡",
            13: "鎯犲窞",
            14: "姊呭窞",
            15: "姹曞熬",
            16: "娌虫簮",
            17: "闃虫睙",
            18: "娓呰繙",
            19: "涓滆帪",
            20: "涓北",
            51: "娼窞",
            52: "鎻槼",
            53: "浜戞诞"
        },
        45: {
            1: "鍗楀畞",
            2: "鏌冲窞",
            3: "妗傛灄",
            4: "姊у窞",
            5: "鍖楁捣",
            6: "闃插煄娓�",
            7: "閽﹀窞",
            8: "璐垫腐",
            9: "鐜夋灄",
            10: "鐧捐壊",
            11: "璐哄窞",
            12: "娌虫睜",
            21: "鍗楀畞",
            22: "鏌冲窞"
        },
        46: {1: "娴峰彛", 2: "涓変簹", 90: "鍏朵粬"},
        50: {
            1: "涓囧窞鍖�",
            2: "娑櫟鍖�",
            3: "娓濅腑鍖�",
            4: "澶ф浮鍙ｅ尯",
            5: "姹熷寳鍖�",
            6: "娌欏潽鍧濆尯",
            7: "涔濋緳鍧″尯",
            8: "鍗楀哺鍖�",
            9: "鍖楃鍖�",
            10: "涓囩洓鍖�",
            11: "鍙屾ˉ鍖�",
            12: "娓濆寳鍖�",
            13: "宸村崡鍖�",
            14: "榛旀睙鍖�",
            15: "闀垮鍖�",
            22: "缍︽睙鍘�",
            23: "娼煎崡鍘�",
            24: "閾滄鍘�",
            25: "澶ц冻鍘�",
            26: "鑽ｆ槍鍘�",
            27: "鐠у北鍘�",
            28: "姊佸钩鍘�",
            29: "鍩庡彛鍘�",
            30: "涓伴兘鍘�",
            31: "鍨睙鍘�",
            32: "姝﹂殕鍘�",
            33: "蹇犲幙",
            34: "寮€鍘�",
            35: "浜戦槼鍘�",
            36: "濂夎妭鍘�",
            37: "宸北鍘�",
            38: "宸邯鍘�",
            40: "鐭虫煴鍦熷鏃忚嚜娌诲幙",
            41: "绉€灞卞湡瀹舵棌鑻楁棌鑷不鍘�",
            42: "閰夐槼鍦熷鏃忚嫍鏃忚嚜娌诲幙",
            43: "褰按鑻楁棌鍦熷鏃忚嚜娌诲幙",
            81: "姹熸触甯�",
            82: "鍚堝窛甯�",
            83: "姘稿窛甯�",
            84: "鍗楀窛甯�"
        },
        51: {
            1: "鎴愰兘",
            3: "鑷础",
            4: "鏀€鏋濊姳",
            5: "娉稿窞",
            6: "寰烽槼",
            7: "缁甸槼",
            8: "骞垮厓",
            9: "閬傚畞",
            10: "鍐呮睙",
            11: "涔愬北",
            13: "鍗楀厖",
            14: "鐪夊北",
            15: "瀹滃",
            16: "骞垮畨",
            17: "杈惧窞",
            18: "闆呭畨",
            19: "宸翠腑",
            20: "璧勯槼",
            32: "闃垮潩",
            33: "鐢樺瓬",
            34: "鍑夊北"
        },
        52: {1: "璐甸槼", 2: "鍏洏姘�", 3: "閬典箟", 4: "瀹夐『", 22: "閾滀粊", 23: "榛旇タ鍗�", 24: "姣曡妭", 26: "榛斾笢鍗�", 27: "榛斿崡"},
        53: {
            1: "鏄嗘槑",
            3: "鏇查潠",
            4: "鐜夋邯",
            5: "淇濆北",
            6: "鏄€�",
            23: "妤氶泟",
            25: "绾㈡渤",
            26: "鏂囧北",
            27: "鎬濊寘",
            28: "瑗垮弻鐗堢撼",
            29: "澶х悊",
            31: "寰峰畯",
            32: "涓芥睙",
            33: "鎬掓睙",
            34: "杩簡",
            35: "涓存钵"
        },
        54: {1: "鎷夎惃", 21: "鏄岄兘", 22: "灞卞崡", 23: "鏃ュ杸鍒�", 24: "閭ｆ洸", 25: "闃块噷", 26: "鏋楄姖"},
        61: {1: "瑗垮畨", 2: "閾滃窛", 3: "瀹濋浮", 4: "鍜搁槼", 5: "娓崡", 6: "寤跺畨", 7: "姹変腑", 8: "姒嗘灄", 9: "瀹夊悍", 10: "鍟嗘礇"},
        62: {
            1: "鍏板窞",
            2: "鍢夊唱鍏�",
            3: "閲戞槍",
            4: "鐧介摱",
            5: "澶╂按",
            6: "姝﹀▉",
            7: "寮犳帠",
            8: "骞冲噳",
            9: "閰掓硥",
            10: "搴嗛槼",
            24: "瀹氳タ",
            26: "闄囧崡",
            29: "涓村",
            30: "鐢樺崡"
        },
        63: {1: "瑗垮畞", 21: "娴蜂笢", 22: "娴峰寳", 23: "榛勫崡", 25: "娴峰崡", 26: "鏋滄礇", 27: "鐜夋爲", 28: "娴疯タ"},
        64: {1: "閾跺窛", 2: "鐭冲槾灞�", 3: "鍚村繝", 4: "鍥哄師"},
        65: {
            1: "涔岄瞾鏈ㄩ綈",
            2: "鍏嬫媺鐜涗緷",
            21: "鍚愰瞾鐣�",
            22: "鍝堝瘑",
            23: "鏄屽悏",
            27: "鍗氬皵濉旀媺",
            28: "宸撮煶閮",
            29: "闃垮厠鑻�",
            30: "鍏嬪瓬鍕掕嫃",
            31: "鍠€浠€",
            32: "鍜岀敯",
            40: "浼婄妬",
            42: "濉斿煄",
            43: "闃垮嫆娉�"
        },
        71: {1: "鍙板寳", 2: "楂橀泟", 90: "鍏朵粬"},
        81: {1: "棣欐腐"},
        82: {1: "婢抽棬"},
        99: {
            1: "缇庡浗",
            2: "鑻卞浗",
            3: "娉曞浗",
            4: "淇勭綏鏂�",
            5: "鍔犳嬁澶�",
            6: "宸磋タ",
            7: "婢冲ぇ鍒╀簹",
            8: "鍗板凹",
            9: "娉板浗",
            10: "椹潵瑗夸簹",
            11: "鏂板姞鍧�",
            12: "鑿插緥瀹�",
            13: "瓒婂崡",
            14: "鍗板害",
            15: "鏃ユ湰",
            16: "鍏朵粬"
        }
    }
};
(function (e, t) {
    function n(e) {
        return H.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    function r(e) {
        if (!vn[e]) {
            var t = _.body, n = H("<" + e + ">").appendTo(t), r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                mn || (mn = _.createElement("iframe"), mn.frameBorder = mn.width = mn.height = 0), t.appendChild(mn);
                if (!gn || !mn.createElement)gn = (mn.contentWindow || mn.contentDocument).document, gn.write((H.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gn.close();
                n = gn.createElement(e), gn.body.appendChild(n), r = H.css(n, "display"), t.removeChild(mn)
            }
            vn[e] = r
        }
        return vn[e]
    }

    function i(e, t) {
        var n = {};
        return H.each(En.concat.apply([], En.slice(0, t)), function () {
            n[this] = e
        }), n
    }

    function s() {
        Sn = t
    }

    function o() {
        return setTimeout(s, 0), Sn = H.now()
    }

    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function a() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes, i = {}, s, o, u = r.length, a, f = r[0], l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1)for (o in e.converters)typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*")f = l; else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break
                            }
                        }
                    }
                }
                !h && !d && H.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
            }
        }
        return n
    }

    function l(e, n, r) {
        var i = e.contents, s = e.dataTypes, o = e.responseFields, u, a, f, l;
        for (a in o)a in r && (n[o[a]] = r[a]);
        while (s[0] === "*")s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u)for (a in i)if (i[a] && i[a].test(u)) {
            s.unshift(a);
            break
        }
        if (s[0] in r)f = s[0]; else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        }
        if (f)return f !== s[0] && s.unshift(f), r[f]
    }

    function c(e, t, n, r) {
        if (H.isArray(t))H.each(t, function (t, i) {
            n || Ut.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && H.type(t) === "object")for (var i in t)c(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function h(e, n) {
        var r, i, s = H.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && H.extend(!0, e, i)
    }

    function p(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s], a = 0, f = u ? u.length : 0, l = e === rn, c;
        for (; a < f && (l || !c); a++)c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c
    }

    function d(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (H.isFunction(n)) {
                var r = t.toLowerCase().split(Zt), i = 0, s = r.length, o, u, a;
                for (; i < s; i++)o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
            }
        }
    }

    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = t === "width" ? 1 : 0, s = 4;
        if (r > 0) {
            if (n !== "border")for (; i < s; i += 2)n || (r -= parseFloat(H.css(e, "padding" + jt[i])) || 0), n === "margin" ? r += parseFloat(H.css(e, n + jt[i])) || 0 : r -= parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0;
            return r + "px"
        }
        r = Ft(e, t);
        if (r < 0 || r == null)r = e.style[t];
        if (Dt.test(r))return r;
        r = parseFloat(r) || 0;
        if (n)for (; i < s; i += 2)r += parseFloat(H.css(e, "padding" + jt[i])) || 0, n !== "padding" && (r += parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0), n === "margin" && (r += parseFloat(H.css(e, n + jt[i])) || 0);
        return r + "px"
    }

    function m(e) {
        var t = _.createElement("div");
        return Lt.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function g(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? y(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && H.grep(e.getElementsByTagName("input"), y)
    }

    function y(e) {
        if (e.type === "checkbox" || e.type === "radio")e.defaultChecked = e.checked
    }

    function b(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function w(e, t) {
        var n;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? t.outerHTML = e.outerHTML : n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function E(e, t) {
        if (t.nodeType === 1 && !!H.hasData(e)) {
            var n, r, i, s = H._data(e), o = H._data(t, s), u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)for (r = 0, i = u[n].length; r < i; r++)H.event.add(t, n, u[n][r])
            }
            o.data && (o.data = H.extend({}, o.data))
        }
    }

    function S(e, t) {
        return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    function T(e, t, n) {
        t = t || 0;
        if (H.isFunction(t))return H.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return H.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = H.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (lt.test(t))return H.filter(t, r, !n);
            t = H.filter(t, r)
        }
        return H.grep(e, function (e, r) {
            return H.inArray(e, t) >= 0 === n
        })
    }

    function N(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function C() {
        return !0
    }

    function k() {
        return !1
    }

    function L(e, t, n) {
        var r = t + "defer", i = t + "queue", s = t + "mark", o = H._data(e, r);
        o && (n === "queue" || !H._data(e, i)) && (n === "mark" || !H._data(e, s)) && setTimeout(function () {
            !H._data(e, i) && !H._data(e, s) && (H.removeData(e, r, !0), o.fire())
        }, 0)
    }

    function A(e) {
        for (var t in e) {
            if (t === "data" && H.isEmptyObject(e[t]))continue;
            if (t !== "toJSON")return !1
        }
        return !0
    }

    function O(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : H.isNumeric(r) ? +r : F.test(r) ? H.parseJSON(r) : r
                } catch (s) {
                }
                H.data(e, n, r)
            } else r = t
        }
        return r
    }

    function M(e) {
        var t = B[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++)t[e[n]] = !0;
        return t
    }

    var _ = e.document, D = e.navigator, P = e.location, H = function () {
        function n() {
            if (!r.isReady) {
                try {
                    _.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(n, 1);
                    return
                }
                r.ready()
            }
        }

        var r = function (e, t) {
            return new r.fn.init(e, t, o)
        }, i = e.jQuery, s = e.$, o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, a = /\S/, f = /^\s+/, l = /\s+$/, c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, h = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v = /(?:^|:|,)(?:\s*\[)+/g, m = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, y = /(msie) ([\w.]+)/, b = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, E = /^-ms-/, S = function (e, t) {
            return (t + "").toUpperCase()
        }, x = D.userAgent, T, N, C, k = Object.prototype.toString, L = Object.prototype.hasOwnProperty, A = Array.prototype.push, O = Array.prototype.slice, M = String.prototype.trim, P = Array.prototype.indexOf, H = {};
        return r.fn = r.prototype = {
            constructor: r, init: function (e, n, i) {
                var s, o, a, f;
                if (!e)return this;
                if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
                if (e === "body" && !n && _.body)return this.context = _, this[0] = _.body, this.selector = e, this.length = 1, this;
                if (typeof e == "string") {
                    e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? s = u.exec(e) : s = [null, e, null];
                    if (s && (s[1] || !n)) {
                        if (s[1])return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : _, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [_.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                        o = _.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2])return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = _, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                }
                return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return O.call(this, 0)
            }, get: function (e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, n) {
                var i = this.constructor();
                return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
            }, each: function (e, t) {
                return r.each(this, e, t)
            }, ready: function (e) {
                return r.bindReady(), N.add(e), this
            }, eq: function (e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(r.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: A, sort: [].sort, splice: [].splice
        }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function () {
            var e, n, i, s, o, u, a = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
            typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
            for (; f < l; f++)if ((e = arguments[f]) != null)for (n in e) {
                i = a[n], s = e[n];
                if (a === s)continue;
                c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
            }
            return a
        }, r.extend({
            noConflict: function (t) {
                return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r
            }, isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? r.readyWait++ : r.ready(!0)
            }, ready: function (e) {
                if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
                    if (!_.body)return setTimeout(r.ready, 1);
                    r.isReady = !0;
                    if (e !== !0 && --r.readyWait > 0)return;
                    N.fireWith(_, [r]), r.fn.trigger && r(_).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!N) {
                    N = r.Callbacks("once memory");
                    if (_.readyState === "complete")return setTimeout(r.ready, 1);
                    if (_.addEventListener)_.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1); else if (_.attachEvent) {
                        _.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                        var t = !1;
                        try {
                            t = e.frameElement == null
                        } catch (i) {
                        }
                        _.documentElement.doScroll && t && n()
                    }
                }
            }, isFunction: function (e) {
                return r.type(e) === "function"
            }, isArray: Array.isArray || function (e) {
                return r.type(e) === "array"
            }, isWindow: function (e) {
                return e != null && e == e.window
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                return e == null ? String(e) : H[k.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e))return !1;
                try {
                    if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e);
                return i === t || L.call(e, i)
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }, error: function (e) {
                throw new Error(e)
            }, parseJSON: function (t) {
                if (typeof t != "string" || !t)return null;
                t = r.trim(t);
                if (e.JSON && e.JSON.parse)return e.JSON.parse(t);
                if (h.test(t.replace(p, "@").replace(d, "]").replace(v, "")))return (new Function("return " + t))();
                r.error("Invalid JSON: " + t)
            }, parseXML: function (n) {
                if (typeof n != "string" || !n)return null;
                var i, s;
                try {
                    e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (o) {
                    i = t
                }
                return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i
            }, noop: function () {
            }, globalEval: function (t) {
                t && a.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(E, "ms-").replace(w, S)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            }, each: function (e, n, i) {
                var s, o = 0, u = e.length, a = u === t || r.isFunction(e);
                if (i) {
                    if (a) {
                        for (s in e)if (n.apply(e[s], i) === !1)break
                    } else for (; o < u;)if (n.apply(e[o++], i) === !1)break
                } else if (a) {
                    for (s in e)if (n.call(e[s], s, e[s]) === !1)break
                } else for (; o < u;)if (n.call(e[o], o, e[o++]) === !1)break;
                return e
            }, trim: M ? function (e) {
                return e == null ? "" : M.call(e)
            } : function (e) {
                return e == null ? "" : (e + "").replace(f, "").replace(l, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                if (e != null) {
                    var i = r.type(e);
                    e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e)
                }
                return n
            }, inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (P)return P.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, n) {
                var r = e.length, i = 0;
                if (typeof n.length == "number")for (var s = n.length; i < s; i++)e[r++] = n[i]; else while (n[i] !== t)e[r++] = n[i++];
                return e.length = r, e
            }, grep: function (e, t, n) {
                var r = [], i;
                n = !!n;
                for (var s = 0, o = e.length; s < o; s++)i = !!t(e[s], s), n !== i && r.push(e[s]);
                return r
            }, map: function (e, n, i) {
                var s, o, u = [], a = 0, f = e.length, l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                if (l)for (; a < f; a++)s = n(e[a], a, i), s != null && (u[u.length] = s); else for (o in e)s = n(e[o], o, i), s != null && (u[u.length] = s);
                return u.concat.apply([], u)
            }, guid: 1, proxy: function (e, n) {
                if (typeof n == "string") {
                    var i = e[n];
                    n = e, e = i
                }
                if (!r.isFunction(e))return t;
                var s = O.call(arguments, 2), o = function () {
                    return e.apply(n, s.concat(O.call(arguments)))
                };
                return o.guid = e.guid = e.guid || o.guid || r.guid++, o
            }, access: function (e, n, i, s, o, u, a) {
                var f, l = i == null, c = 0, h = e.length;
                if (i && typeof i == "object") {
                    for (c in i)r.access(e, n, c, i[c], 1, u, s);
                    o = 1
                } else if (s !== t) {
                    f = a === t && r.isFunction(s), l && (f ? (f = n, n = function (e, t, n) {
                        return f.call(r(e), n)
                    }) : (n.call(e, s), n = null));
                    if (n)for (; c < h; c++)n(e[c], i, f ? s.call(e[c], c, n(e[c], i)) : s, a);
                    o = 1
                }
                return o ? e : l ? n.call(e) : h ? n(e[0], i) : u
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (e) {
                e = e.toLowerCase();
                var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, sub: function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }

                r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                    return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(_);
                return e
            }, browser: {}
        }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            H["[object " + t + "]"] = t.toLowerCase()
        }), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test("聽") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(_), _.addEventListener ? C = function () {
            _.removeEventListener("DOMContentLoaded", C, !1), r.ready()
        } : _.attachEvent && (C = function () {
            _.readyState === "complete" && (_.detachEvent("onreadystatechange", C), r.ready())
        }), r
    }(), B = {};
    H.Callbacks = function (e) {
        e = e ? B[e] || M(e) : {};
        var n = [], r = [], i, s, o, u, a, f, l = function (t) {
            var r, i, s, o, u;
            for (r = 0, i = t.length; r < i; r++)s = t[r], o = H.type(s), o === "array" ? l(s) : o === "function" && (!e.unique || !h.has(s)) && n.push(s)
        }, c = function (t, l) {
            l = l || [], i = !e.memory || [t, l], s = !0, o = !0, f = u || 0, u = 0, a = n.length;
            for (; n && f < a; f++)if (n[f].apply(t, l) === !1 && e.stopOnFalse) {
                i = !0;
                break
            }
            o = !1, n && (e.once ? i === !0 ? h.disable() : n = [] : r && r.length && (i = r.shift(), h.fireWith(i[0], i[1])))
        }, h = {
            add: function () {
                if (n) {
                    var e = n.length;
                    l(arguments), o ? a = n.length : i && i !== !0 && (u = e, c(i[0], i[1]))
                }
                return this
            }, remove: function () {
                if (n) {
                    var t = arguments, r = 0, i = t.length;
                    for (; r < i; r++)for (var s = 0; s < n.length; s++)if (t[r] === n[s]) {
                        o && s <= a && (a--, s <= f && f--), n.splice(s--, 1);
                        if (e.unique)break
                    }
                }
                return this
            }, has: function (e) {
                if (n) {
                    var t = 0, r = n.length;
                    for (; t < r; t++)if (e === n[t])return !0
                }
                return !1
            }, empty: function () {
                return n = [], this
            }, disable: function () {
                return n = r = i = t, this
            }, disabled: function () {
                return !n
            }, lock: function () {
                return r = t, (!i || i === !0) && h.disable(), this
            }, locked: function () {
                return !r
            }, fireWith: function (t, n) {
                return r && (o ? e.once || r.push([t, n]) : (!e.once || !i) && c(t, n)), this
            }, fire: function () {
                return h.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return h
    };
    var j = [].slice;
    H.extend({
        Deferred: function (e) {
            var t = H.Callbacks("once memory"), n = H.Callbacks("once memory"), r = H.Callbacks("memory"), i = "pending", s = {
                resolve: t,
                reject: n,
                notify: r
            }, o = {
                done: t.add, fail: n.add, progress: r.add, state: function () {
                    return i
                }, isResolved: t.fired, isRejected: n.fired, then: function (e, t, n) {
                    return u.done(e).fail(t).progress(n), this
                }, always: function () {
                    return u.done.apply(u, arguments).fail.apply(u, arguments), this
                }, pipe: function (e, t, n) {
                    return H.Deferred(function (r) {
                        H.each({done: [e, "resolve"], fail: [t, "reject"], progress: [n, "notify"]}, function (e, t) {
                            var n = t[0], i = t[1], s;
                            H.isFunction(n) ? u[e](function () {
                                s = n.apply(this, arguments), s && H.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s])
                            }) : u[e](r[i])
                        })
                    }).promise()
                }, promise: function (e) {
                    if (e == null)e = o; else for (var t in o)e[t] = o[t];
                    return e
                }
            }, u = o.promise({}), a;
            for (a in s)u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
            return u.done(function () {
                i = "resolved"
            }, n.disable, r.lock).fail(function () {
                i = "rejected"
            }, t.disable, r.lock), e && e.call(u, u), u
        }, when: function (e) {
            function t(e) {
                return function (t) {
                    o[e] = arguments.length > 1 ? j.call(arguments, 0) : t, f.notifyWith(l, o)
                }
            }

            function n(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? j.call(arguments, 0) : t, --u || f.resolveWith(f, r)
                }
            }

            var r = j.call(arguments, 0), i = 0, s = r.length, o = Array(s), u = s, a = s, f = s <= 1 && e && H.isFunction(e.promise) ? e : H.Deferred(), l = f.promise();
            if (s > 1) {
                for (; i < s; i++)r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                u || f.resolveWith(f, r)
            } else f !== e && f.resolveWith(f, s ? [e] : []);
            return l
        }
    }), H.support = function () {
        var t, n, r, i, s, o, u, a, f, l, c, h, p = _.createElement("div"), d = _.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !n.length || !r)return {};
        i = _.createElement("select"), s = i.appendChild(_.createElement("option")), o = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!_.createElement("form").enctype,
            html5Clone: _.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, H.boxModel = t.boxModel = _.compatMode === "CSS1Compat", o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete p.test
        } catch (v) {
            t.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), o = _.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), p.appendChild(o), u = _.createDocumentFragment(), u.appendChild(p.lastChild), t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, u.removeChild(o), u.appendChild(p);
        if (p.attachEvent)for (c in{
            submit: 1,
            change: 1,
            focusin: 1
        })l = "on" + c, h = l in p, h || (p.setAttribute(l, "return;"), h = typeof p[l] == "function"), t[c + "Bubbles"] = h;
        return u.removeChild(p), u = i = s = p = o = null, H(function () {
            var n, r, i, s, o, u, f, l, c, d, v, m, g, y = _.getElementsByTagName("body")[0];
            !y || (l = 1, g = "padding:0;margin:0;border:", v = "position:absolute;top:0;left:0;width:1px;height:1px;", m = g + "0;visibility:hidden;", c = "style='" + v + g + "5px solid #000;", d = "<div " + c + "display:block;'><div style='" + g + "0;display:block;overflow:hidden;'></div></div>" + "<table " + c + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", n = _.createElement("div"), n.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + l + "px", y.insertBefore(n, y.firstChild), p = _.createElement("div"), n.appendChild(p), p.innerHTML = "<table><tr><td style='" + g + "0;display:none'></td><td>t</td></tr></table>", a = p.getElementsByTagName("td"), h = a[0].offsetHeight === 0, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = h && a[0].offsetHeight === 0, e.getComputedStyle && (p.innerHTML = "", f = _.createElement("div"), f.style.width = "0", f.style.marginRight = "0", p.style.width = "2px", p.appendChild(f), t.reliableMarginRight = (parseInt((e.getComputedStyle(f, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = v + m, p.innerHTML = d, r = p.firstChild, i = r.firstChild, o = r.nextSibling.firstChild.firstChild, u = {
                doesNotAddBorder: i.offsetTop !== 5,
                doesAddBorderForTableAndCells: o.offsetTop === 5
            }, i.style.position = "fixed", i.style.top = "20px", u.fixedPosition = i.offsetTop === 20 || i.offsetTop === 15, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", u.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, u.doesNotIncludeMarginInBodyOffset = y.offsetTop !== l, e.getComputedStyle && (p.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof n.style.zoom != "undefined" && (n.style.zoom = 1), y.removeChild(n), f = p = n = null, H.extend(t, u))
        }), t
    }();
    var F = /^(?:\{.*\}|\[.*\])$/, I = /([A-Z])/g;
    H.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !A(e)
        },
        data: function (e, n, r, i) {
            if (!!H.acceptData(e)) {
                var s, o, u, a = H.expando, f = typeof n == "string", l = e.nodeType, c = l ? H.cache : e, h = l ? e[a] : e[a] && a, p = n === "events";
                if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t)return;
                h || (l ? e[a] = h = ++H.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = H.noop));
                if (typeof n == "object" || typeof n == "function")i ? c[h] = H.extend(c[h], n) : c[h].data = H.extend(c[h].data, n);
                return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[H.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[H.camelCase(n)])) : u = o, u)
            }
        },
        removeData: function (e, t, n) {
            if (!!H.acceptData(e)) {
                var r, i, s, o = H.expando, u = e.nodeType, a = u ? H.cache : e, f = u ? e[o] : o;
                if (!a[f])return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        H.isArray(t) || (t in r ? t = [t] : (t = H.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++)delete r[t[i]];
                        if (!(n ? A : H.isEmptyObject)(r))return
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!A(a[f]))return
                }
                H.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (H.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function (e, t, n) {
            return H.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = H.noData[e.nodeName.toLowerCase()];
                if (t)return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), H.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === t) {
                if (this.length) {
                    l = H.data(a);
                    if (a.nodeType === 1 && !H._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++)o = s[f].name, o.indexOf("data-") === 0 && (o = H.camelCase(o.substring(5)), O(a, o, l[o]));
                        H._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                H.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", H.access(this, function (n) {
                if (n === t)return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = H.data(a, e), l = O(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = H(this);
                    t.triggerHandler("setData" + i, r), H.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        }, removeData: function (e) {
            return this.each(function () {
                H.removeData(this, e)
            })
        }
    }), H.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1))
        }, _unmark: function (e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark", i = e ? 0 : (H._data(t, r) || 1) - 1;
                i ? H._data(t, r, i) : (H.removeData(t, r, !0), L(t, n, "mark"))
            }
        }, queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = H.queue(e, t), r = n.shift(), i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function () {
                H.dequeue(e, t)
            }, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), L(e, t, "queue"))
        }
    }), H.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? H.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = H.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && H.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                H.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            function r() {
                --u || i.resolveWith(s, [s])
            }

            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var i = H.Deferred(), s = this, o = s.length, u = 1, a = e + "defer", f = e + "queue", l = e + "mark", c;
            while (o--)if (c = H.data(s[o], a, t, !0) || (H.data(s[o], f, t, !0) || H.data(s[o], l, t, !0)) && H.data(s[o], a, H.Callbacks("once memory"), !0))u++, c.add(r);
            return r(), i.promise(n)
        }
    });
    var q = /[\n\t\r]/g, R = /\s+/, U = /\r/g, z = /^(?:button|input)$/i, W = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea)?$/i, V = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $ = H.support.getSetAttribute, J, K, Q;
    H.fn.extend({
        attr: function (e, t) {
            return H.access(this, H.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                H.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return H.access(this, H.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = H.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (H.isFunction(e))return this.each(function (t) {
                H(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(R);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)if (!i.className && t.length === 1)i.className = e; else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++)~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                        i.className = H.trim(s)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (H.isFunction(e))return this.each(function (t) {
                H(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(R);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className)if (e) {
                        o = (" " + s.className + " ").replace(q, " ");
                        for (u = 0, a = n.length; u < a; u++)o = o.replace(" " + n[u] + " ", " ");
                        s.className = H.trim(o)
                    } else s.className = ""
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return H.isFunction(e) ? this.each(function (n) {
                H(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0, o = H(this), u = t, a = e.split(R);
                    while (i = a[s++])u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean")this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) > -1)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, s = this[0];
            if (!!arguments.length)return i = H.isFunction(e), this.each(function (r) {
                var s = H(this), o;
                if (this.nodeType === 1) {
                    i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : H.isArray(o) && (o = H.map(o, function (e) {
                        return e == null ? "" : e + ""
                    })), n = H.valHooks[this.type] || H.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, o, "value") === t)this.value = o
                }
            });
            if (s)return n = H.valHooks[s.type] || H.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(U, "") : r == null ? "" : r)
        }
    }), H.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex, o = [], u = e.options, a = e.type === "select-one";
                    if (s < 0)return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (H.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !H.nodeName(i.parentNode, "optgroup"))) {
                            t = H(i).val();
                            if (a)return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? H(u[s]).val() : o
                }, set: function (e, t) {
                    var n = H.makeArray(t);
                    return H(e).find("option").each(function () {
                        this.selected = H.inArray(H(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!!e && a !== 3 && a !== 8 && a !== 2) {
                if (i && n in H.attrFn)return H(e)[n](r);
                if (typeof e.getAttribute == "undefined")return H.prop(e, n, r);
                u = a !== 1 || !H.isXMLDoc(e), u && (n = n.toLowerCase(), o = H.attrHooks[n] || (V.test(n) ? K : J));
                if (r !== t) {
                    if (r === null) {
                        H.removeAttr(e, n);
                        return
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
            }
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o, u = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(R), s = r.length;
                for (; u < s; u++)i = r[u], i && (n = H.propFix[i] || i, o = V.test(i), o || H.attr(e, i, ""), e.removeAttribute($ ? i : n), o && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (z.test(e.nodeName) && e.parentNode)H.error("type property can't be changed"); else if (!H.support.radioValue && t === "radio" && H.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }, value: {
                get: function (e, t) {
                    return J && H.nodeName(e, "button") ? J.get(e, t) : t in e ? e.value : null
                }, set: function (e, t, n) {
                    if (J && H.nodeName(e, "button"))return J.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!!e && u !== 3 && u !== 8 && u !== 2)return o = u !== 1 || !H.isXMLDoc(e), o && (n = H.propFix[n] || n, s = H.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : W.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), H.attrHooks.tabindex = H.propHooks.tabIndex, K = {
        get: function (e, n) {
            var r, i = H.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            var r;
            return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, $ || (Q = {name: !0, id: !0, coords: !0}, J = H.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (Q[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        }, set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = _.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, H.attrHooks.tabindex.set = J.set, H.each(["width", "height"], function (e, t) {
        H.attrHooks[t] = H.extend(H.attrHooks[t], {
            set: function (e, n) {
                if (n === "")return e.setAttribute(t, "auto"), n
            }
        })
    }), H.attrHooks.contenteditable = {
        get: J.get, set: function (e, t, n) {
            t === "" && (t = "false"), J.set(e, t, n)
        }
    }), H.support.hrefNormalized || H.each(["href", "src", "width", "height"], function (e, n) {
        H.attrHooks[n] = H.extend(H.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), H.support.style || (H.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), H.support.enctype || (H.propFix.enctype = "encoding"), H.support.checkOn || H.each(["radio", "checkbox"], function () {
        H.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), H.each(["radio", "checkbox"], function () {
        H.valHooks[this] = H.extend(H.valHooks[this], {
            set: function (e, t) {
                if (H.isArray(t))return e.checked = H.inArray(H(e).val(), t) >= 0
            }
        })
    });
    var G = /^(?:textarea|input|select)$/i, Y = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, it = function (e) {
        var t = rt.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
    }, st = function (e, t) {
        var n = e.attributes || {};
        return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
    }, ot = function (e) {
        return H.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1")
    };
    H.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = H._data(e)))) {
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = H.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                    return typeof H == "undefined" || !!e && H.event.triggered === e.type ? t : H.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = H.trim(ot(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = Y.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = H.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = H.event.special[c] || {}, p = H.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        quick: s && it(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1)e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[c] = !0
                }
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s = H.hasData(e) && H._data(e), o, u, a, f, l, c, h, p, d, v, m, g;
            if (!!s && !!(p = s.events)) {
                t = H.trim(ot(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    u = Y.exec(t[o]) || [], a = f = u[1], l = u[2];
                    if (!a) {
                        for (a in p)H.event.remove(e, a + t[o], n, r, !0);
                        continue
                    }
                    d = H.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < m.length; h++)g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && H.removeEvent(e, a, s.handle), delete p[a])
                }
                H.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), H.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o = n.type || n, u = [], a, f, l, c, h, p, d, v, m, g;
                if (nt.test(o + H.event.triggered))return;
                o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
                if ((!i || H.event.customEvent[o]) && !H.event.global[o])return;
                n = typeof n == "object" ? n[H.expando] ? n : new H.Event(o, n) : new H.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
                if (!i) {
                    a = H.cache;
                    for (l in a)a[l].events && a[l].events[o] && H.event.trigger(n, r, a[l].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = i), r = r != null ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[o] || {};
                if (d.trigger && d.trigger.apply(i, r) === !1)return;
                m = [[i, d.bindType || o]];
                if (!s && !d.noBubble && !H.isWindow(i)) {
                    g = d.delegateType || o, c = nt.test(g + o) ? i : i.parentNode, h = null;
                    for (; c; c = c.parentNode)m.push([c, g]), h = c;
                    h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g])
                }
                for (l = 0; l < m.length && !n.isPropagationStopped(); l++)c = m[l][0], n.type = m[l][1], v = (H._data(c, "events") || {})[n.type] && H._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && H.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !H.nodeName(i, "a")) && H.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !H.isWindow(i) && (h = i[p], h && (i[p] = null), H.event.triggered = o, i[o](), H.event.triggered = t, h && (i[p] = h)), n.result
            }
        },
        dispatch: function (n) {
            n = H.event.fix(n || e.event);
            var r = (H._data(this, "events") || {})[n.type] || [], i = r.delegateCount, s = [].slice.call(arguments, 0), o = !n.exclusive && !n.namespace, u = H.event.special[n.type] || {}, a = [], f, l, c, h, p, d, v, m, g, y, b;
            s[0] = n, n.delegateTarget = this;
            if (!u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                if (i && (!n.button || n.type !== "click")) {
                    h = H(this), h.context = this.ownerDocument || this;
                    for (c = n.target; c != this; c = c.parentNode || this)if (c.disabled !== !0) {
                        d = {}, m = [], h[0] = c;
                        for (f = 0; f < i; f++)g = r[f], y = g.selector, d[y] === t && (d[y] = g.quick ? st(c, g.quick) : h.is(y)), d[y] && m.push(g);
                        m.length && a.push({elem: c, matches: m})
                    }
                }
                r.length > i && a.push({elem: this, matches: r.slice(i)});
                for (f = 0; f < a.length && !n.isPropagationStopped(); f++) {
                    v = a[f], n.currentTarget = v.elem;
                    for (l = 0; l < v.matches.length && !n.isImmediatePropagationStopped(); l++) {
                        g = v.matches[l];
                        if (o || !n.namespace && !g.namespace || n.namespace_re && n.namespace_re.test(g.namespace))n.data = g.data, n.handleObj = g, p = ((H.event.special[g.origType] || {}).handle || g.handler).apply(v.elem, s), p !== t && (n.result = p, p === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, o = n.button, u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || _, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[H.expando])return e;
            var n, r, i = e, s = H.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = H.Event(i);
            for (n = o.length; n;)r = o[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || _), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e
        },
        special: {
            ready: {setup: H.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (e, t, n) {
                    H.isWindow(this) && (this.onbeforeunload = n)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = H.extend(new H.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, H.event.handle = H.event.dispatch, H.removeEvent = _.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, H.Event = function (e, t) {
        if (!(this instanceof H.Event))return new H.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? C : k) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), this[H.expando] = !0
    }, H.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = C;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = C;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = C, this.stopPropagation()
        }, isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k
    }, H.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        H.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n = this, r = e.relatedTarget, i = e.handleObj, s = i.selector, o;
                if (!r || r !== n && !H.contains(n, r))e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
                return o
            }
        }
    }), H.support.submitBubbles || (H.event.special.submit = {
        setup: function () {
            if (H.nodeName(this, "form"))return !1;
            H.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (H.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (H.nodeName(this, "form"))return !1;
            H.event.remove(this, "._submit")
        }
    }), H.support.changeBubbles || (H.event.special.change = {
        setup: function () {
            if (G.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")H.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), H.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0))
                });
                return !1
            }
            H.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                G.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && H.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return H.event.remove(this, "._change"), G.test(this.nodeName)
        }
    }), H.support.focusinBubbles || H.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            H.event.simulate(t, e.target, H.event.fix(e), !0)
        };
        H.event.special[t] = {
            setup: function () {
                n++ === 0 && _.addEventListener(e, r, !0)
            }, teardown: function () {
                --n === 0 && _.removeEventListener(e, r, !0)
            }
        }
    }), H.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e)this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1)i = k; else if (!i)return this;
            return s === 1 && (o = i, i = function (e) {
                return H().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = H.guid++)), this.each(function () {
                H.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return H(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if (typeof e == "object") {
                for (var s in e)this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")r = n, n = t;
            return r === !1 && (r = k), this.each(function () {
                H.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, live: function (e, t, n) {
            return H(this.context).on(e, this.selector, t, n), this
        }, die: function (e, t) {
            return H(this.context).off(e, this.selector || "**", t), this
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        }, trigger: function (e, t) {
            return this.each(function () {
                H.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0])return H.event.trigger(e, t, this[0], !0)
        }, toggle: function (e) {
            var t = arguments, n = e.guid || H.guid++, r = 0, i = function (n) {
                var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
                return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length)t[r++].guid = n;
            return this.click(i)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        H.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, H.attrFn && (H.attrFn[t] = !0), et.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), tt.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks)
    }), function () {
        function e(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[i] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }

        function n(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }

        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = "sizcache" + (Math.random() + "").replace(".", ""), s = 0, o = Object.prototype.toString, u = !1, a = !0, f = /\\/g, l = /\r\n/g, c = /\W/;
        [0, 0].sort(function () {
            return a = !1, 0
        });
        var h = function (e, t, n, i) {
            n = n || [], t = t || _;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9)return [];
            if (!e || typeof e != "string")return n;
            var u, a, f, l, c, p, m, g, b = !0, w = h.isXML(t), E = [], x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], E.push(u[1]);
                    if (u[2]) {
                        l = u[3];
                        break
                    }
                }
            } while (u);
            if (E.length > 1 && v.exec(e))if (E.length === 2 && d.relative[E[0]])a = S(E[0] + E[1], t, i); else {
                a = d.relative[E[0]] ? [t] : h(E.shift(), t);
                while (E.length)e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i)
            } else {
                !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
                if (t) {
                    c = i ? {
                        expr: E.pop(),
                        set: y(i)
                    } : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
                    while (E.length)p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w)
                } else f = E = []
            }
            f || (f = a), f || h.error(p || e);
            if (o.call(f) === "[object Array]")if (!b)n.push.apply(n, f); else if (t && t.nodeType === 1)for (g = 0; f[g] != null; g++)f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]); else for (g = 0; f[g] != null; g++)f[g] && f[g].nodeType === 1 && n.push(a[g]); else y(f, n);
            return l && (h(l, s, n, i), h.uniqueSort(n)), n
        };
        h.uniqueSort = function (e) {
            if (w) {
                u = a, e.sort(w);
                if (u)for (var t = 1; t < e.length; t++)e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, h.matches = function (e, t) {
            return h(e, null, null, t)
        }, h.matchesSelector = function (e, t) {
            return h(t, null, null, [e]).length > 0
        }, h.find = function (e, t, n) {
            var r, i, s, o, u, a;
            if (!e)return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, h.filter = function (e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e, g = [], y = n, b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter)if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                    l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                    if (c.substr(c.length - 1) === "\\")continue;
                    y === g && (g = []);
                    if (d.preFilter[u]) {
                        s = d.preFilter[u](s, y, r, g, i, b);
                        if (!s)o = a = !0; else if (s === !0)continue
                    }
                    if (s)for (p = 0; (f = y[p]) != null; p++)f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                    if (a !== t) {
                        r || (y = g), e = e.replace(d.match[u], "");
                        if (!o)return [];
                        break
                    }
                }
                if (e === m) {
                    if (o != null)break;
                    h.error(e)
                }
                m = e
            }
            return y
        }, h.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function (e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (r === 1 || r === 9 || r === 11) {
                    if (typeof e.textContent == "string")return e.textContent;
                    if (typeof e.innerText == "string")return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling)i += p(e)
                } else if (r === 3 || r === 4)return e.nodeValue
            } else for (t = 0; n = e[t]; t++)n.nodeType !== 8 && (i += p(n));
            return i
        }, d = h.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = typeof t == "string", r = n && !c.test(t), i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var s = 0, o = e.length, u; s < o; s++)if (u = e[s]) {
                        while ((u = u.previousSibling) && u.nodeType !== 1);
                        e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                    }
                    i && h.filter(t, e, !0)
                }, ">": function (e, t) {
                    var n, r = typeof t == "string", i = 0, s = e.length;
                    if (r && !c.test(t)) {
                        t = t.toLowerCase();
                        for (; i < s; i++) {
                            n = e[i];
                            if (n) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t ? o : !1
                            }
                        }
                    } else {
                        for (; i < s; i++)n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && h.filter(t, e, !0)
                    }
                }, "": function (t, r, i) {
                    var o, u = s++, a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, i)
                }, "~": function (t, r, i) {
                    var o, u = s++, a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [r] : []
                    }
                }, NAME: function (e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [], r = t.getElementsByName(e[1]);
                        for (var i = 0, s = r.length; i < s; i++)r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return n.length === 0 ? null : n
                    }
                }, TAG: function (e, t) {
                    if (typeof t.getElementsByTagName != "undefined")return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, r, i, s) {
                    e = " " + e[1].replace(f, "") + " ";
                    if (s)return e;
                    for (var o = 0, u; (u = t[o]) != null; o++)u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                    return !1
                }, ID: function (e) {
                    return e[1].replace(f, "")
                }, TAG: function (e, t) {
                    return e[1].replace(f, "").toLowerCase()
                }, CHILD: function (e) {
                    if (e[1] === "nth") {
                        e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && h.error(e[0]);
                    return e[0] = s++, e
                }, ATTR: function (e, t, n, r, i, s) {
                    var o = e[1] = e[1].replace(f, "");
                    return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                }, PSEUDO: function (e, t, n, i, s) {
                    if (e[1] === "not") {
                        if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var o = h.filter(e[3], t, n, !0 ^ s);
                            return n || i.push.apply(i, o), !1
                        }
                        e[3] = h(e[3], null, null, t)
                    } else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0]))return !0;
                    return e
                }, POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && e.type !== "hidden"
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    return e.checked === !0
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, n) {
                    return !!h(n[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                }, radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                }, checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                }, file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                }, password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                }, submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type
                }, image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                }, reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button"
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return t === 0
                }, last: function (e, t, n, r) {
                    return t === r.length - 1
                }, even: function (e, t) {
                    return t % 2 === 0
                }, odd: function (e, t) {
                    return t % 2 === 1
                }, lt: function (e, t, n) {
                    return t < n[3] - 0
                }, gt: function (e, t, n) {
                    return t > n[3] - 0
                }, nth: function (e, t, n) {
                    return n[3] - 0 === t
                }, eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, r) {
                    var i = t[1], s = d.filters[i];
                    if (s)return s(e, n, t, r);
                    if (i === "contains")return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                    if (i === "not") {
                        var o = t[3];
                        for (var u = 0, a = o.length; u < a; u++)if (o[u] === e)return !1;
                        return !0
                    }
                    h.error(i)
                }, CHILD: function (e, t) {
                    var n, r, s, o, u, a, f, l = t[1], c = e;
                    switch (l) {
                        case"only":
                        case"first":
                            while (c = c.previousSibling)if (c.nodeType === 1)return !1;
                            if (l === "first")return !0;
                            c = e;
                        case"last":
                            while (c = c.nextSibling)if (c.nodeType === 1)return !1;
                            return !0;
                        case"nth":
                            n = t[2], r = t[3];
                            if (n === 1 && r === 0)return !0;
                            s = t[0], o = e.parentNode;
                            if (o && (o[i] !== s || !e.nodeIndex)) {
                                a = 0;
                                for (c = o.firstChild; c; c = c.nextSibling)c.nodeType === 1 && (c.nodeIndex = ++a);
                                o[i] = s
                            }
                            return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                    }
                }, ID: function (e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var n = t[1], r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), i = r + "", s = t[2], o = t[4];
                    return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                }, POS: function (e, t, n, r) {
                    var i = t[2], s = d.setFilters[i];
                    if (s)return s(e, n, t, r)
                }
            }
        }, v = d.match.POS, m = function (e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var g in d.match)d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        d.match.globalPOS = v;
        var y = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(_.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function (e, t) {
                var n = 0, r = t || [];
                if (o.call(e) === "[object Array]")Array.prototype.push.apply(r, e); else if (typeof e.length == "number")for (var i = e.length; n < i; n++)r.push(e[n]); else for (; e[n]; n++)r.push(e[n]);
                return r
            }
        }
        var w, E;
        _.documentElement.compareDocumentPosition ? w = function (e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (w = function (e, t) {
            if (e === t)return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, a = t.parentNode, f = o;
            if (o === a)return E(e, t);
            if (!o)return -1;
            if (!a)return 1;
            while (f)i.unshift(f), f = f.parentNode;
            f = a;
            while (f)s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++)if (i[l] !== s[l])return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        }, E = function (e, t, n) {
            if (e === t)return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t)return -1;
                r = r.nextSibling
            }
            return 1
        }), function () {
            var e = _.createElement("div"), n = "script" + (new Date).getTime(), r = _.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), _.getElementById(n) && (d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, d.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(), function () {
            var e = _.createElement("div");
            e.appendChild(_.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++)n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), _.querySelectorAll && function () {
            var e = h, t = _.createElement("div"), n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                h = function (t, r, i, s) {
                    r = r || _;
                    if (!s && !h.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1])return y(r.getElementsByTagName(t), i);
                            if (o[2] && d.find.CLASS && r.getElementsByClassName)return y(r.getElementsByClassName(o[2]), i)
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body)return y([r.body], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode)return y([], i);
                                if (u.id === o[3])return y([u], i)
                            }
                            try {
                                return y(r.querySelectorAll(t), i)
                            } catch (a) {
                            }
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r, l = r.getAttribute("id"), c = l || n, p = r.parentNode, v = /^\s*[+~]/.test(t);
                            l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
                            try {
                                if (!v || p)return y(r.querySelectorAll("[id='" + c + "'] " + t), i)
                            } catch (m) {
                            } finally {
                                l || f.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, s)
                };
                for (var r in e)h[r] = e[r];
                t = null
            }
        }(), function () {
            var e = _.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(_.createElement("div"), "div"), r = !1;
                try {
                    t.call(_.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                h.matchesSelector = function (e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e))try {
                        if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var s = t.call(e, i);
                            if (s || !n || e.document && e.document.nodeType !== 11)return s
                        }
                    } catch (o) {
                    }
                    return h(i, null, null, [e]).length > 0
                }
            }
        }(), function () {
            var e = _.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1)return;
                d.order.splice(1, 0, "CLASS"), d.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n)return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), _.documentElement.contains ? h.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : _.documentElement.compareDocumentPosition ? h.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : h.contains = function () {
            return !1
        }, h.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var S = function (e, t, n) {
            var r, i = [], s = "", o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e))s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++)h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = H.attr, h.selectors.attrMap = {}, H.find = h, H.expr = h.selectors, H.expr[":"] = H.expr.filters, H.unique = h.uniqueSort, H.text = h.getText, H.isXMLDoc = h.isXML, H.contains = h.contains
    }();
    var ut = /Until$/, at = /^(?:parents|prevUntil|prevAll)/, ft = /,/, lt = /^.[^:#\[\.,]*$/, ct = Array.prototype.slice, ht = H.expr.match.globalPOS, pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    H.fn.extend({
        find: function (e) {
            var t = this, n, r;
            if (typeof e != "string")return H(e).filter(function () {
                for (n = 0, r = t.length; n < r; n++)if (H.contains(t[n], this))return !0
            });
            var i = this.pushStack("", "find", e), s, o, u;
            for (n = 0, r = this.length; n < r; n++) {
                s = i.length, H.find(e, this[n], i);
                if (n > 0)for (o = s; o < i.length; o++)for (u = 0; u < s; u++)if (i[u] === i[o]) {
                    i.splice(o--, 1);
                    break
                }
            }
            return i
        }, has: function (e) {
            var t = H(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++)if (H.contains(this, t[e]))return !0
            })
        }, not: function (e) {
            return this.pushStack(T(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(T(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && (typeof e == "string" ? ht.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n = [], r, i, s = this[0];
            if (H.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++)H(s).is(e[r]) && n.push({selector: e[r], elem: s, level: o});
                    s = s.parentNode, o++
                }
                return n
            }
            var u = ht.test(e) || typeof e != "string" ? H(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : H.find.matchesSelector(s, e)) {
                        n.push(s);
                        break
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11)break
                }
            }
            return n = n.length > 1 ? H.unique(n) : n, this.pushStack(n, "closest", e)
        }, index: function (e) {
            return e ? typeof e == "string" ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (e, t) {
            var n = typeof e == "string" ? H(e, t) : H.makeArray(e && e.nodeType ? [e] : e), r = H.merge(this.get(), n);
            return this.pushStack(N(n[0]) || N(r[0]) ? r : H.unique(r))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), H.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return H.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return H.dir(e, "parentNode", n)
        }, next: function (e) {
            return H.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return H.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return H.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return H.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return H.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return H.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return H.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return H.sibling(e.firstChild)
        }, contents: function (e) {
            return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes)
        }
    }, function (e, t) {
        H.fn[e] = function (n, r) {
            var i = H.map(this, t, n);
            return ut.test(e) || (r = n), r && typeof r == "string" && (i = H.filter(r, i)), i = this.length > 1 && !pt[e] ? H.unique(i) : i, (this.length > 1 || ft.test(r)) && at.test(e) && (i = i.reverse()), this.pushStack(i, e, ct.call(arguments).join(","))
        }
    }), H.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? H.find.matchesSelector(t[0], e) ? [t[0]] : [] : H.find.matches(e, t)
        }, dir: function (e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !H(s).is(r)))s.nodeType === 1 && i.push(s), s = s[n];
            return i
        }, nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n])if (e.nodeType === 1 && ++i === t)break;
            return e
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:\d+|null)"/g, mt = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, yt = /<([\w:]+)/, bt = /<tbody/i, wt = /<|&#?\w+;/, Et = /<(?:script|style)/i, St = /<(?:script|object|embed|option|style)/i, xt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /\/(java|ecma)script/i, Ct = /^\s*<!(?:\[CDATA\[|\-\-)/, kt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, Lt = x(_);
    kt.optgroup = kt.option, kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead, kt.th = kt.td, H.support.htmlSerialize || (kt._default = [1, "div<div>", "</div>"]), H.fn.extend({
        text: function (e) {
            return H.access(this, function (e) {
                return e === t ? H.text(this) : this.empty().append((this[0] && this[0].ownerDocument || _).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (H.isFunction(e))return this.each(function (t) {
                H(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return H.isFunction(e) ? this.each(function (t) {
                H(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = H(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = H.isFunction(e);
            return this.each(function (n) {
                H(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                H.nodeName(this, "body") || H(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = H.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, H.clean(arguments)), e
            }
        }, remove: function (e, t) {
            for (var n = 0, r; (r = this[n]) != null; n++)if (!e || H.filter(e, [r]).length)!t && r.nodeType === 1 && (H.cleanData(r.getElementsByTagName("*")), H.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        }, empty: function () {
            for (var e = 0, t; (t = this[e]) != null; e++) {
                t.nodeType === 1 && H.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild)t.removeChild(t.firstChild)
            }
            return this
        }, clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return H.clone(this, e, t)
            })
        }, html: function (e) {
            return H.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : null;
                if (typeof e == "string" && !Et.test(e) && (H.support.leadingWhitespace || !mt.test(e)) && !kt[(yt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(gt, "<$1></$2>");
                    try {
                        for (; r < i; r++)n = this[r] || {}, n.nodeType === 1 && (H.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function (t) {
                var n = H(this), r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = H(e).detach()), this.each(function () {
                var t = this.nextSibling, n = this.parentNode;
                H(this).remove(), t ? H(t).before(e) : H(n).append(e)
            })) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            var i, s, o, u, a = e[0], f = [];
            if (!H.support.checkClone && arguments.length === 3 && typeof a == "string" && Tt.test(a))return this.each(function () {
                H(this).domManip(e, n, r, !0)
            });
            if (H.isFunction(a))return this.each(function (i) {
                var s = H(this);
                e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                u = a && a.parentNode, H.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {fragment: u} : i = H.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && H.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++)r.call(n ? S(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? H.clone(o, !0, !0) : o)
                }
                f.length && H.each(f, function (e, t) {
                    t.src ? H.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ct, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), H.buildFragment = function (e, t, n) {
        var r, i, s, o, u = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = _), e.length === 1 && typeof u == "string" && u.length < 512 && o === _ && u.charAt(0) === "<" && !St.test(u) && (H.support.checkClone || !Tt.test(u)) && (H.support.html5Clone || !xt.test(u)) && (i = !0, s = H.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), H.clean(e, o, r, n)), i && (H.fragments[u] = s ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, H.fragments = {}, H.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        H.fn[e] = function (n) {
            var r = [], i = H(n), s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1)return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                H(i[o])[t](a), r = r.concat(a)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), H.extend({
        clone: function (e, t, n) {
            var r, i, s, o = H.support.html5Clone || H.isXMLDoc(e) || !xt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : m(e);
            if ((!H.support.noCloneEvent || !H.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !H.isXMLDoc(e)) {
                w(e, o), r = b(e), i = b(o);
                for (s = 0; r[s]; ++s)i[s] && w(r[s], i[s])
            }
            if (t) {
                E(e, o);
                if (n) {
                    r = b(e), i = b(o);
                    for (s = 0; r[s]; ++s)E(r[s], i[s])
                }
            }
            return r = i = null, o
        }, clean: function (e, t, n, r) {
            var i, s, o, u = [];
            t = t || _, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || _);
            for (var a = 0, f; (f = e[a]) != null; a++) {
                typeof f == "number" && (f += "");
                if (!f)continue;
                if (typeof f == "string")if (!wt.test(f))f = t.createTextNode(f); else {
                    f = f.replace(gt, "<$1></$2>");
                    var l = (yt.exec(f) || ["", ""])[1].toLowerCase(), c = kt[l] || kt._default, h = c[0], p = t.createElement("div"), d = Lt.childNodes, v;
                    t === _ ? Lt.appendChild(p) : x(t).appendChild(p), p.innerHTML = c[1] + f + c[2];
                    while (h--)p = p.lastChild;
                    if (!H.support.tbody) {
                        var m = bt.test(f), y = l === "table" && !m ? p.firstChild && p.firstChild.childNodes : c[1] === "<table>" && !m ? p.childNodes : [];
                        for (o = y.length - 1; o >= 0; --o)H.nodeName(y[o], "tbody") && !y[o].childNodes.length && y[o].parentNode.removeChild(y[o])
                    }
                    !H.support.leadingWhitespace && mt.test(f) && p.insertBefore(t.createTextNode(mt.exec(f)[0]), p.firstChild), f = p.childNodes, p && (p.parentNode.removeChild(p), d.length > 0 && (v = d[d.length - 1], v && v.parentNode && v.parentNode.removeChild(v)))
                }
                var b;
                if (!H.support.appendChecked)if (f[0] && typeof (b = f.length) == "number")for (o = 0; o < b; o++)g(f[o]); else g(f);
                f.nodeType ? u.push(f) : u = H.merge(u, f)
            }
            if (n) {
                i = function (e) {
                    return !e.type || Nt.test(e.type)
                };
                for (a = 0; u[a]; a++) {
                    s = u[a];
                    if (r && H.nodeName(s, "script") && (!s.type || Nt.test(s.type)))r.push(s.parentNode ? s.parentNode.removeChild(s) : s); else {
                        if (s.nodeType === 1) {
                            var w = H.grep(s.getElementsByTagName("script"), i);
                            u.splice.apply(u, [a + 1, 0].concat(w))
                        }
                        n.appendChild(s)
                    }
                }
            }
            return u
        }, cleanData: function (e) {
            var t, n, r = H.cache, i = H.event.special, s = H.support.deleteExpando;
            for (var o = 0, u; (u = e[o]) != null; o++) {
                if (u.nodeName && H.noData[u.nodeName.toLowerCase()])continue;
                n = u[H.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var a in t.events)i[a] ? H.event.remove(u, a) : H.removeEvent(u, a, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete u[H.expando] : u.removeAttribute && u.removeAttribute(H.expando), delete r[n]
                }
            }
        }
    });
    var At = /alpha\([^)]*\)/i, Ot = /opacity=([^)]*)/, Mt = /([A-Z]|^ms)/g, _t = /^[\-+]?(?:\d*\.)?\d+$/i, Dt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Pt = /^([\-+])=([\-+.\de]+)/, Ht = /^margin/, Bt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, jt = ["Top", "Right", "Bottom", "Left"], Ft, It, qt;
    H.fn.css = function (e, n) {
        return H.access(this, function (e, n, r) {
            return r !== t ? H.style(e, n, r) : H.css(e, n)
        }, e, n, arguments.length > 1)
    }, H.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ft(e, "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": H.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (!!e && e.nodeType !== 3 && e.nodeType !== 8 && !!e.style) {
                var s, o, u = H.camelCase(n), a = e.style, f = H.cssHooks[u];
                n = H.cssProps[u] || u;
                if (r === t)return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                o = typeof r, o === "string" && (s = Pt.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(H.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r))return;
                o === "number" && !H.cssNumber[u] && (r += "px");
                if (!f || !("set" in f) || (r = f.set(e, r)) !== t)try {
                    a[n] = r
                } catch (l) {
                }
            }
        },
        css: function (e, n, r) {
            var i, s;
            n = H.camelCase(n), s = H.cssHooks[n], n = H.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (s && "get" in s && (i = s.get(e, !0, r)) !== t)return i;
            if (Ft)return Ft(e, n)
        },
        swap: function (e, t, n) {
            var r = {}, i, s;
            for (s in t)r[s] = e.style[s], e.style[s] = t[s];
            i = n.call(e);
            for (s in t)e.style[s] = r[s];
            return i
        }
    }), H.curCSS = H.css, _.defaultView && _.defaultView.getComputedStyle && (It = function (e, t) {
        var n, r, i, s, o = e.style;
        return t = t.replace(Mt, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !H.contains(e.ownerDocument.documentElement, e) && (n = H.style(e, t))), !H.support.pixelMargin && i && Ht.test(t) && Dt.test(n) && (s = o.width, o.width = n, n = i.width, o.width = s), n
    }), _.documentElement.currentStyle && (qt = function (e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t], o = e.style;
        return s == null && o && (i = o[t]) && (s = i), Dt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
    }), Ft = It || qt, H.each(["height", "width"], function (e, t) {
        H.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return e.offsetWidth !== 0 ? v(e, t, r) : H.swap(e, Bt, function () {
                    return v(e, t, r)
                })
            }, set: function (e, t) {
                return _t.test(t) ? t + "px" : t
            }
        }
    }), H.support.opacity || (H.cssHooks.opacity = {
        get: function (e, t) {
            return Ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = H.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && H.trim(s.replace(At, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter)return
            }
            n.filter = At.test(s) ? s.replace(At, i) : s + " " + i
        }
    }), H(function () {
        H.support.reliableMarginRight || (H.cssHooks.marginRight = {
            get: function (e, t) {
                return H.swap(e, {display: "inline-block"}, function () {
                    return t ? Ft(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }), H.expr && H.expr.filters && (H.expr.filters.hidden = function (e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return t === 0 && n === 0 || !H.support.reliableHiddenOffsets && (e.style && e.style.display || H.css(e, "display")) === "none"
    }, H.expr.filters.visible = function (e) {
        return !H.expr.filters.hidden(e)
    }), H.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        H.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
                for (r = 0; r < 4; r++)s[e + jt[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }
    });
    var Rt = /%20/g, Ut = /\[\]$/, zt = /\r?\n/g, Wt = /#.*$/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, $t = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Kt = /^\/\//, Qt = /\?/, Gt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Yt = /^(?:select|textarea)/i, Zt = /\s+/, en = /([?&])_=[^&]*/, tn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, nn = H.fn.load, rn = {}, sn = {}, on, un, an = ["*/"] + ["*"];
    try {
        on = P.href
    } catch (fn) {
        on = _.createElement("a"), on.href = "", on = on.href
    }
    un = tn.exec(on.toLowerCase()) || [], H.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && nn)return nn.apply(this, arguments);
            if (!this.length)return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var o = "GET";
            n && (H.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = H.param(n, H.ajaxSettings.traditional), o = "POST"));
            var u = this;
            return H.ajax({
                url: e, type: o, dataType: "html", data: n, complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), u.html(s ? H("<div>").append(n.replace(Gt, "")).find(s) : n)), r && u.each(r, [n, t, e])
                }
            }), this
        }, serialize: function () {
            return H.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? H.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Yt.test(this.nodeName) || Vt.test(this.type))
            }).map(function (e, t) {
                var n = H(this).val();
                return n == null ? null : H.isArray(n) ? H.map(n, function (e, n) {
                    return {name: t.name, value: e.replace(zt, "\r\n")}
                }) : {name: t.name, value: n.replace(zt, "\r\n")}
            }).get()
        }
    }), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        H.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), H.each(["get", "post"], function (e, n) {
        H[n] = function (e, r, i, s) {
            return H.isFunction(r) && (s = s || i, i = r, r = t), H.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), H.extend({
        getScript: function (e, n) {
            return H.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return H.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? h(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), h(e, t), e
        },
        ajaxSettings: {
            url: on,
            isLocal: $t.test(un[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": an
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": H.parseJSON, "text xml": H.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: d(rn),
        ajaxTransport: d(sn),
        ajax: function (e, n) {
            function r(e, n, r, p) {
                if (E !== 2) {
                    E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
                    var d, v, g, w = n, x = r ? l(i, T, r) : t, N, C;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (N = T.getResponseHeader("Last-Modified"))H.lastModified[h] = N;
                            if (C = T.getResponseHeader("Etag"))H.etag[h] = C
                        }
                        if (e === 304)w = "notmodified", d = !0; else try {
                            v = f(i, x), w = "success", d = !0
                        } catch (k) {
                            w = "parsererror", g = k
                        }
                    } else {
                        g = w;
                        if (!w || e)w = "error", e < 0 && (e = 0)
                    }
                    T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]), a.fireWith(s, [T, w]), S && (o.trigger("ajaxComplete", [T, i]), --H.active || H.event.trigger("ajaxStop"))
                }
            }

            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = H.ajaxSetup({}, n), s = i.context || i, o = s !== i && (s.nodeType || s instanceof H) ? H(s) : H.event, u = H.Deferred(), a = H.Callbacks("once memory"), c = i.statusCode || {}, h, d = {}, v = {}, m, g, y, b, w, E = 0, S, x, T = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = v[n] = v[n] || e, d[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return E === 2 ? m : null
                },
                getResponseHeader: function (e) {
                    var n;
                    if (E === 2) {
                        if (!g) {
                            g = {};
                            while (n = Xt.exec(m))g[n[1].toLowerCase()] = n[2]
                        }
                        n = g[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function (e) {
                    return E || (i.mimeType = e), this
                },
                abort: function (e) {
                    return e = e || "abort", y && y.abort(e), r(0, e), this
                }
            };
            u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2)for (t in e)c[t] = [c[t], e[t]]; else t = e[T.status], T.then(t, t)
                }
                return this
            }, i.url = ((e || i.url) + "").replace(Wt, "").replace(Kt, un[1] + "//"), i.dataTypes = H.trim(i.dataType || "*").toLowerCase().split(Zt), i.crossDomain == null && (w = tn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == un[1] && w[2] == un[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (un[3] || (un[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = H.param(i.data, i.traditional)), p(rn, i, n, T);
            if (E === 2)return !1;
            S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Jt.test(i.type), S && H.active++ === 0 && H.event.trigger("ajaxStart");
            if (!i.hasContent) {
                i.data && (i.url += (Qt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
                if (i.cache === !1) {
                    var N = H.now(), C = i.url.replace(en, "$1_=" + N);
                    i.url = C + (C === i.url ? (Qt.test(i.url) ? "&" : "?") + "_=" + N : "")
                }
            }
            (i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, H.lastModified[h] && T.setRequestHeader("If-Modified-Since", H.lastModified[h]), H.etag[h] && T.setRequestHeader("If-None-Match", H.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + an + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers)T.setRequestHeader(x, i.headers[x]);
            if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
                for (x in{success: 1, error: 1, complete: 1})T[x](i[x]);
                y = p(sn, i, n, T);
                if (!y)r(-1, "No Transport"); else {
                    T.readyState = 1, S && o.trigger("ajaxSend", [T, i]), i.async && i.timeout > 0 && (b = setTimeout(function () {
                        T.abort("timeout")
                    }, i.timeout));
                    try {
                        E = 1, y.send(d, r)
                    } catch (k) {
                        if (!(E < 2))throw k;
                        r(-1, k)
                    }
                }
                return T
            }
            return T.abort(), !1
        },
        param: function (e, n) {
            var r = [], i = function (e, t) {
                t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            n === t && (n = H.ajaxSettings.traditional);
            if (H.isArray(e) || e.jquery && !H.isPlainObject(e))H.each(e, function () {
                i(this.name, this.value)
            }); else for (var s in e)c(s, e[s], n, i);
            return r.join("&").replace(Rt, "+")
        }
    }), H.extend({active: 0, lastModified: {}, etag: {}});
    var ln = H.now(), cn = /(\=)\?(&|$)|\?\?/i;
    H.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return H.expando + "_" + ln++
        }
    }), H.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (cn.test(t.url) || i && cn.test(t.data))) {
            var s, o = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u = e[o], a = t.url, f = t.data, l = "$1" + o + "$2";
            return t.jsonp !== !1 && (a = a.replace(cn, l), t.url === a && (i && (f = f.replace(cn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function (e) {
                s = [e]
            }, r.always(function () {
                e[o] = u, s && H.isFunction(u) && e[o](s[0])
            }), t.converters["script json"] = function () {
                return s || H.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), H.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return H.globalEval(e), e
            }
        }
    }), H.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), H.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = _.head || _.getElementsByTagName("head")[0] || _.documentElement;
            return {
                send: function (i, s) {
                    n = _.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState))n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var hn = e.ActiveXObject ? function () {
        for (var e in dn)dn[e](0, 1)
    } : !1, pn = 0, dn;
    H.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && a() || u()
    } : a, function (e) {
        H.extend(H.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function (n) {
        if (!n.crossDomain || H.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o = n.xhr(), u, a;
                    n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                    if (n.xhrFields)for (a in n.xhrFields)o[a] = n.xhrFields[a];
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i)o.setRequestHeader(a, i[a])
                    } catch (f) {
                    }
                    o.send(n.hasContent && n.data || null), r = function (e, i) {
                        var a, f, l, c, h;
                        try {
                            if (r && (i || o.readyState === 4)) {
                                r = t, u && (o.onreadystatechange = H.noop, hn && delete dn[u]);
                                if (i)o.readyState !== 4 && o.abort(); else {
                                    a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = o.responseText
                                    } catch (e) {
                                    }
                                    try {
                                        f = o.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    !a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(a, f, c, l)
                    }, !n.async || o.readyState === 4 ? r() : (u = ++pn, hn && (dn || (dn = {}, H(e).unload(hn)), dn[u] = r), o.onreadystatechange = r)
                }, abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var vn = {}, mn, gn, yn = /^(?:toggle|show|hide)$/, bn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, wn, En = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], Sn;
    H.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0)return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++)s = this[u], s.style && (o = s.style.display, !H._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), (o === "" && H.css(s, "display") === "none" || !H.contains(s.ownerDocument.documentElement, s)) && H._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none")s.style.display = H._data(s, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (e, t, n) {
            if (e || e === 0)return this.animate(i("hide", 3), e, t, n);
            var r, s, o = 0, u = this.length;
            for (; o < u; o++)r = this[o], r.style && (s = H.css(r, "display"), s !== "none" && !H._data(r, "olddisplay") && H._data(r, "olddisplay", s));
            for (o = 0; o < u; o++)this[o].style && (this[o].style.display = "none");
            return this
        }, _toggle: H.fn.toggle, toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : H(this).is(":hidden");
                H(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        }, fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, i) {
            function s() {
                o.queue === !1 && H._mark(this);
                var t = H.extend({}, o), n = this.nodeType === 1, i = n && H(this).is(":hidden"), s, u, a, f, l, c, h, p, d, v, m;
                t.animatedProperties = {};
                for (a in e) {
                    s = H.camelCase(a), a !== s && (e[s] = e[a], delete e[a]);
                    if ((l = H.cssHooks[s]) && "expand" in l) {
                        c = l.expand(e[s]), delete e[s];
                        for (a in c)a in e || (e[a] = c[a])
                    }
                }
                for (s in e) {
                    u = e[s], H.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (u === "hide" && i || u === "show" && !i)return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], H.css(this, "display") === "inline" && H.css(this, "float") === "none" && (!H.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e)f = new H.fx(this, t, a), u = e[a], yn.test(u) ? (m = H._data(this, "toggle" + a) || (u === "toggle" ? i ? "show" : "hide" : 0), m ? (H._data(this, "toggle" + a, m === "show" ? "hide" : "show"), f[m]()) : f[u]()) : (h = bn.exec(u), p = f.cur(), h ? (d = parseFloat(h[2]), v = h[3] || (H.cssNumber[a] ? "" : "px"), v !== "px" && (H.style(this, a, (d || 1) + v), p = (d || 1) / f.cur() * p, H.style(this, a, p + v)), h[1] && (d = (h[1] === "-=" ? -1 : 1) * d + p), f.custom(p, d, v)) : f.custom(p, u, ""));
                return !0
            }

            var o = H.speed(t, n, i);
            return H.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = H.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        }, stop: function (e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, n) {
                    var i = t[n];
                    H.removeData(e, n, !0), i.stop(r)
                }

                var n, i = !1, s = H.timers, o = H._data(this);
                r || H._unmark(!0, this);
                if (e == null)for (n in o)o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n); else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--;)s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
                (!r || !i) && H.dequeue(this, e)
            })
        }
    }), H.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        H.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), H.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? H.extend({}, e) : {
                complete: n || !n && t || H.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !H.isFunction(t) && t
            };
            r.duration = H.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default;
            if (r.queue == null || r.queue === !0)r.queue = "fx";
            return r.old = r.complete, r.complete = function (e) {
                H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this)
            }, r
        }, easing: {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        }, timers: [], fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), H.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = H.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        }, custom: function (e, n, r) {
            function i(e) {
                return s.step(e)
            }

            var s = this, u = H.fx;
            this.startTime = Sn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                H._data(s.elem, "fxshow" + s.prop) === t && (s.options.hide ? H._data(s.elem, "fxshow" + s.prop, s.start) : s.options.show && H._data(s.elem, "fxshow" + s.prop, s.end))
            }, i() && H.timers.push(i) && !wn && (wn = setInterval(u.tick, u.interval))
        }, show: function () {
            var e = H._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), H(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (e) {
            var t, n, r, i = Sn || o(), s = !0, u = this.elem, a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties)a.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    a.overflow != null && !H.support.shrinkWrapBlocks && H.each(["", "X", "Y"], function (e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }), a.hide && H(u).hide();
                    if (a.hide || a.show)for (t in a.animatedProperties)H.style(u, t, a.orig[t]), H.removeData(u, "fxshow" + t, !0), H.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = H.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, H.extend(H.fx, {
        tick: function () {
            var e, t = H.timers, n = 0;
            for (; n < t.length; n++)e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || H.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(wn), wn = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                H.style(e.elem, "opacity", e.now)
            }, _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), H.each(En.concat.apply([], En), function (e, t) {
        t.indexOf("margin") && (H.fx.step[t] = function (e) {
            H.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), H.expr && H.expr.filters && (H.expr.filters.animated = function (e) {
        return H.grep(H.timers, function (t) {
            return e === t.elem
        }).length
    });
    var xn, Tn = /^t(?:able|d|h)$/i, Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in _.documentElement ? xn = function (e, t, r, i) {
        try {
            i = e.getBoundingClientRect()
        } catch (s) {
        }
        if (!i || !H.contains(r, e))return i ? {top: i.top, left: i.left} : {top: 0, left: 0};
        var o = t.body, u = n(t), a = r.clientTop || o.clientTop || 0, f = r.clientLeft || o.clientLeft || 0, l = u.pageYOffset || H.support.boxModel && r.scrollTop || o.scrollTop, c = u.pageXOffset || H.support.boxModel && r.scrollLeft || o.scrollLeft, h = i.top + l - a, p = i.left + c - f;
        return {top: h, left: p}
    } : xn = function (e, t, n) {
        var r, i = e.offsetParent, s = e, o = t.body, u = t.defaultView, a = u ? u.getComputedStyle(e, null) : e.currentStyle, f = e.offsetTop, l = e.offsetLeft;
        while ((e = e.parentNode) && e !== o && e !== n) {
            if (H.support.fixedPosition && a.position === "fixed")break;
            r = u ? u.getComputedStyle(e, null) : e.currentStyle, f -= e.scrollTop, l -= e.scrollLeft, e === i && (f += e.offsetTop, l += e.offsetLeft, H.support.doesNotAddBorder && (!H.support.doesAddBorderForTableAndCells || !Tn.test(e.nodeName)) && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), s = i, i = e.offsetParent), H.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), a = r
        }
        if (a.position === "relative" || a.position === "static")f += o.offsetTop, l += o.offsetLeft;
        return H.support.fixedPosition && a.position === "fixed" && (f += Math.max(n.scrollTop, o.scrollTop), l += Math.max(n.scrollLeft, o.scrollLeft)), {
            top: f,
            left: l
        }
    }, H.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            H.offset.setOffset(this, e, t)
        });
        var n = this[0], r = n && n.ownerDocument;
        return r ? n === r.body ? H.offset.bodyOffset(n) : xn(n, r, r.documentElement) : null
    }, H.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        }, setOffset: function (e, t, n) {
            var r = H.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = H(e), s = i.offset(), o = H.css(e, "top"), u = H.css(e, "left"), a = (r === "absolute" || r === "fixed") && H.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, H.fn.extend({
        position: function () {
            if (!this[0])return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = Nn.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || _.body;
                while (e && !Nn.test(e.nodeName) && H.css(e, "position") === "static")e = e.offsetParent;
                return e
            })
        }
    }), H.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, r) {
        var i = /Y/.test(r);
        H.fn[e] = function (s) {
            return H.access(this, function (e, s, o) {
                var u = n(e);
                if (o === t)return u ? r in u ? u[r] : H.support.boxModel && u.document.documentElement[s] || u.document.body[s] : e[s];
                u ? u.scrollTo(i ? H(u).scrollLeft() : o, i ? o : H(u).scrollTop()) : e[s] = o
            }, e, s, arguments.length, null)
        }
    }), H.each({Height: "height", Width: "width"}, function (e, n) {
        var r = "client" + e, i = "scroll" + e, s = "offset" + e;
        H.fn["inner" + e] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(H.css(e, n, "padding")) : this[n]() : null
        }, H.fn["outer" + e] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(H.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, H.fn[n] = function (e) {
            return H.access(this, function (e, n, o) {
                var u, a, f, l;
                if (H.isWindow(e))return u = e.document, a = u.documentElement[r], H.support.boxModel && a || u.body && u.body[r] || a;
                if (e.nodeType === 9)return u = e.documentElement, u[r] >= u[i] ? u[r] : Math.max(e.body[i], u[i], e.body[s], u[s]);
                if (o === t)return f = H.css(e, n), l = parseFloat(f), H.isNumeric(l) ? l : f;
                H(e).css(n, o)
            }, n, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = H, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return H
    })
})(window);
(function (e) {
    e.fn.dPassword = function (t) {
        var n = {
            interval: 200,
            duration: 3e3,
            replacement: "%u25CF",
            prefix: "password_",
            debug: !1
        }, r = e.extend(n, t), s = new Array, o = new Array;
        e(this).each(function () {
            r.debug && console.log("init [" + e(this).attr("id") + "]");
            var t = e(this).attr("name"), n = e(this).attr("id"), i = e(this).attr("class"), u = e(this).attr("style"), a = e(this).attr("size"), f = e(this).attr("maxlength"), l = e(this).attr("disabled"), c = e(this).attr("tabindex"), h = e(this).attr("accesskey"), p = e(this).attr("value");
            s.push(n), o.push(n), e(this).hide(), r.debug && e(this).after('<span id="debug_' + r.prefix + t + '" style="color: #f00;"></span>'), e(this).after(' <input name="' + (r.prefix + t) + '" ' + 'id="' + (r.prefix + n) + '" ' + 'type="password" ' + 'value="' + p + '" ' + (i != "" ? 'class="' + i + '"' : "") + (u != "" ? 'style="' + u + '"' : "") + (a != "" ? 'size="' + a + '"' : "") + (f != -1 ? 'maxlength="' + f + '"' : "") + (l != "" ? 'disabled="' + l + '"' : "") + (c != "" ? 'tabindex="' + c + '"' : "") + (h != undefined ? 'accesskey="' + h + '"' : "") + 'autocomplete="off" />'), e("label[for=" + n + "]").attr("for", r.prefix + n), e(this).attr("tabindex", ""), e(this).attr("accesskey", ""), e("#" + r.prefix + n).bind("focus", function (t) {
                r.debug && console.log("event: focus [" + getId(e(this).attr("id")) + "]"), clearTimeout(s[getId(e(this).attr("id"))]), s[getId(e(this).attr("id"))] = setTimeout("check('" + getId(e(this).attr("id")) + "', '')", r.interval)
            }), e("#" + r.prefix + n).bind("blur", function (t) {
                r.debug && console.log("event: blur [" + getId(e(this).attr("id")) + "]"), clearTimeout(s[getId(e(this).attr("id"))])
            }), setTimeout("check('" + n + "', '', true);", r.interval)
        }), getId = function (e) {
            var t = r.prefix + "(.*)", n = new RegExp(t);
            return n.exec(e), e = RegExp.$1, e
        }, setPassword = function (t, n) {
            r.debug && console.log("setPassword: [" + t + "]");
            var s = "";
            for (i = 0; i < n.length; i++)n.charAt(i) == unescape(r.replacement) ? s += e("#" + t).val().charAt(i) : s += n.charAt(i);
            e("#" + t).val(s)
        }, check = function (t, n, u) {
            r.debug && console.log("check: [" + t + "]");
            var a = e("#" + r.prefix + t).val();
            if (n != a) {
                setPassword(t, a);
                if (a.length > 1) {
                    var f = "";
                    for (i = 0; i < a.length - 1; i++)f += unescape(r.replacement);
                    f += a.charAt(a.length - 1), e("#" + r.prefix + t).val(f)
                }
                clearTimeout(o[t]), o[t] = setTimeout("convertLastChar('" + t + "')", r.duration)
            }
            r.debug && e("#debug_" + r.prefix + t).text(e("#" + t).val()), u || (s[t] = setTimeout("check('" + t + "', '" + e("#" + r.prefix + t).val() + "', false)", r.interval))
        }, convertLastChar = function (t) {
            if (e("#" + r.prefix + t).val() != "") {
                var n = "";
                for (i = 0; i < e("#" + r.prefix + t).val().length; i++)n += unescape(r.replacement);
                e("#" + r.prefix + t).val(n)
            }
        }
    }
})(jQuery);
(function (e, t, n) {
    e.fn.backstretch = function (r, i) {
        return (r === n || 0 === r.length) && e.error("No images were supplied for Backstretch"), 0 === e(t).scrollTop() && t.scrollTo(0, 0), this.each(function () {
            var t = e(this), n = t.data("backstretch");
            if (n) {
                if ("string" == typeof r && "function" == typeof n[r]) {
                    n[r](i);
                    return
                }
                i = e.extend(n.options, i), n.destroy(!0)
            }
            n = new s(this, r, i), t.data("backstretch", n)
        })
    }, e.backstretch = function (t, n) {
        return e("body").backstretch(t, n).data("backstretch")
    }, e.expr[":"].backstretch = function (t) {
        return e(t).data("backstretch") !== n
    }, e.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5e3, fade: 0};
    var r = {
        left: 0,
        top: 0,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        zIndex: -999999
    }, i = {
        position: "absolute",
        display: "none",
        margin: 0,
        padding: 0,
        border: "none",
        width: "auto",
        height: "auto",
        maxHeight: "none",
        maxWidth: "none",
        zIndex: -999999
    }, s = function (n, i, s) {
        this.options = e.extend({}, e.fn.backstretch.defaults, s || {}), this.images = e.isArray(i) ? i : [i], e.each(this.images, function () {
            e("<img />")[0].src = this
        }), this.isBody = n === document.body, this.$container = e(n), this.$root = this.isBody ? o ? e(t) : e(document) : this.$container, n = this.$container.children(".backstretch").first(), this.$wrap = n.length ? n : e('<div class="backstretch"></div>').css(r).appendTo(this.$container), this.isBody || (n = this.$container.css("position"), i = this.$container.css("zIndex"), this.$container.css({
            position: "static" === n ? "relative" : n,
            zIndex: "auto" === i ? 0 : i,
            background: "none"
        }), this.$wrap.css({zIndex: -999998})), this.$wrap.css({position: this.isBody && o ? "fixed" : "absolute"}), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
            this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1), this.resize())
        }, this))
    };
    s.prototype = {
        resize: function () {
            try {
                var e = {
                    left: 0,
                    top: 0
                }, n = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = n, i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(), s = r / this.$img.data("ratio"), o;
                s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px")), this.$wrap.css({
                    width: n,
                    height: i
                }).find("img:not(.deleteable)").css({width: r, height: s}).css(e)
            } catch (u) {
            }
            return this
        }, show: function (t) {
            if (!(Math.abs(t) > this.images.length - 1)) {
                var n = this, r = n.$wrap.find("img").addClass("deleteable"), s = {relatedTarget: n.$container[0]};
                return n.$container.trigger(e.Event("backstretch.before", s), [n, t]), this.index = t, clearInterval(n.interval), n.$img = e("<img />").css(i).bind("load", function (i) {
                    var o = this.width || e(i.target).width();
                    i = this.height || e(i.target).height(), e(this).data("ratio", o / i), e(this).fadeIn(n.options.speed || n.options.fade, function () {
                        r.remove(), n.paused || n.cycle(), e(["after", "show"]).each(function () {
                            n.$container.trigger(e.Event("backstretch." + this, s), [n, t])
                        })
                    }), n.resize()
                }).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n
            }
        }, next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        }, prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        }, pause: function () {
            return this.paused = !0, this
        }, resume: function () {
            return this.paused = !1, this.next(), this
        }, cycle: function () {
            return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration)), this
        }, destroy: function (n) {
            e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
        }
    };
    var o, u = navigator.userAgent, a = navigator.platform, f = u.match(/AppleWebKit\/([0-9]+)/), f = !!f && f[1], l = u.match(/Fennec\/([0-9]+)/), l = !!l && l[1], c = u.match(/Opera Mobi\/([0-9]+)/), h = !!c && c[1], p = u.match(/MSIE ([0-9]+)/), p = !!p && p[1];
    o = !((-1 < a.indexOf("iPhone") || -1 < a.indexOf("iPad") || -1 < a.indexOf("iPod")) && f && 534 > f || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || c && 7458 > h || -1 < u.indexOf("Android") && f && 533 > f || l && 6 > l || "palmGetResource" in t && f && 534 > f || -1 < u.indexOf("MeeGo") && -1 < u.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p)
})(jQuery, window);
(function (e) {
    var t, n = {
        className: "autosizejs",
        append: "",
        callback: !1
    }, r = "hidden", i = "border-box", s = "lineHeight", o = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>', u = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], a = "oninput", f = "onpropertychange", l = e(o).data("autosize", !0)[0];
    l.style.lineHeight = "99px", "99px" === e(l).css(s) && u.push(s), l.style.lineHeight = "", e.fn.autosize = function (s) {
        return s = e.extend({}, n, s || {}), l.parentNode !== document.body && e(document.body).append(l), this.each(function () {
            function n() {
                t = m, l.className = s.className, e.each(u, function (e, t) {
                    l.style[t] = g.css(t)
                })
            }

            function o() {
                var e, i, o;
                if (t !== m && n(), !d) {
                    d = !0, l.value = m.value + s.append, l.style.overflowY = m.style.overflowY, o = parseInt(m.style.height, 10), l.style.width = Math.max(g.width(), 0) + "px", l.scrollTop = 0, l.scrollTop = 9e4, e = l.scrollTop;
                    var u = parseInt(g.css("maxHeight"), 10);
                    u = u && u > 0 ? u : 9e4, e > u ? (e = u, i = "scroll") : p > e && (e = p), e += y, m.style.overflowY = i || r, o !== e && (m.style.height = e + "px", b && s.callback.call(m)), setTimeout(function () {
                        d = !1
                    }, 1)
                }
            }

            var p, d, v, m = this, g = e(m), y = 0, b = e.isFunction(s.callback);
            g.data("autosize") || ((g.css("box-sizing") === i || g.css("-moz-box-sizing") === i || g.css("-webkit-box-sizing") === i) && (y = g.outerHeight() - g.height()), p = Math.max(parseInt(g.css("minHeight"), 10) - y, g.height()), v = "none" === g.css("resize") || "vertical" === g.css("resize") ? "none" : "horizontal", g.css({
                overflow: r,
                overflowY: r,
                wordWrap: "break-word",
                resize: v
            }).data("autosize", !0), f in m ? a in m ? m[a] = m.onkeyup = o : m[f] = o : m[a] = o, e(window).resize(function () {
                d = !1, o()
            }), g.bind("autosize", function () {
                d = !1, o()
            }), o())
        })
    }
})(window.jQuery || window.Zepto);
jQuery.extend({
    createUploadIframe: function (e, t) {
        var n = "jUploadFrame" + e, r = '<iframe id="' + n + '" name="' + n + '" style="position:absolute; top:-9999px; left:-9999px"';
        return window.ActiveXObject && (typeof t == "boolean" ? r += ' src="javascript:false"' : typeof t == "string" && (r += ' src="' + t + '"')), r += " />", jQuery(r).appendTo(document.body), jQuery("#" + n).get(0)
    }, createUploadForm: function (e, t, n) {
        var r = "jUploadForm" + e, i = "jUploadFile" + e, s = jQuery('<form  action="" method="POST" name="' + r + '" id="' + r + '" enctype="multipart/form-data"></form>');
        if (n)for (var o in n)jQuery('<input type="hidden" name="' + o + '" value="' + n[o] + '" />').appendTo(s);
        var u = jQuery("#" + t), a = jQuery(u).clone();
        return jQuery(u).attr("id", i), jQuery(u).before(a), jQuery(u).appendTo(s), jQuery(s).css("position", "absolute"), jQuery(s).css("top", "-1200px"), jQuery(s).css("left", "-1200px"), jQuery(s).appendTo("body"), s
    }, ajaxFileUpload: function (e) {
        e = jQuery.extend({}, jQuery.ajaxSettings, e);
        var t = (new Date).getTime(), n = jQuery.createUploadForm(t, e.fileElementId, typeof e.data == "undefined" ? !1 : e.data), r = jQuery.createUploadIframe(t, e.secureuri), i = "jUploadFrame" + t, s = "jUploadForm" + t;
        e.global && !(jQuery.active++) && jQuery.event.trigger("ajaxStart");
        var o = !1, u = {};
        e.global && jQuery.event.trigger("ajaxSend", [u, e]);
        var a = function (t) {
            var r = document.getElementById(i);
            try {
                r.contentWindow ? (u.responseText = r.contentWindow.document.body ? r.contentWindow.document.body.innerHTML : null, u.responseXML = r.contentWindow.document.XMLDocument ? r.contentWindow.document.XMLDocument : r.contentWindow.document) : r.contentDocument && (u.responseText = r.contentDocument.document.body ? r.contentDocument.document.body.innerHTML : null, u.responseXML = r.contentDocument.document.XMLDocument ? r.contentDocument.document.XMLDocument : r.contentDocument.document)
            } catch (s) {
                jQuery.handleError(e, u, null, s)
            }
            if (u || t == "timeout") {
                o = !0;
                var a;
                try {
                    a = t != "timeout" ? "success" : "error";
                    if (a != "error") {
                        var f = jQuery.uploadHttpData(u, e.dataType);
                        e.success && e.success(f, a), e.global && jQuery.event.trigger("ajaxSuccess", [u, e])
                    } else jQuery.handleError(e, u, a)
                } catch (s) {
                    a = "error", jQuery.handleError(e, u, a, s)
                }
                e.global && jQuery.event.trigger("ajaxComplete", [u, e]), e.global && !--jQuery.active && jQuery.event.trigger("ajaxStop"), e.complete && e.complete(u, a), jQuery(r).unbind(), setTimeout(function () {
                    try {
                        jQuery(r).remove(), jQuery(n).remove()
                    } catch (t) {
                        jQuery.handleError(e, u, null, t)
                    }
                }, 100), u = null
            }
        };
        e.timeout > 0 && setTimeout(function () {
            o || a("timeout")
        }, e.timeout);
        try {
            var n = jQuery("#" + s);
            jQuery(n).attr("action", e.url), jQuery(n).attr("method", "POST"), jQuery(n).attr("target", i), n.encoding ? jQuery(n).attr("encoding", "multipart/form-data") : jQuery(n).attr("enctype", "multipart/form-data"), jQuery(n).submit()
        } catch (f) {
            jQuery.handleError(e, u, null, f)
        }
        return jQuery("#" + i).load(a), {
            abort: function () {
            }
        }
    }, uploadHttpData: function (r, type) {
        var data = !type;
        return data = type == "xml" || data ? r.responseXML : r.responseText, type == "script" && jQuery.globalEval(data), type == "json" && eval("data = " + data.replace(/<.*>/, "")), type == "html" && jQuery("<div>").html(data).evalScripts(), data
    }
});
var Pianke = {
    baseInit: function () {
        common_init(), Pianke.comment.init(), Pianke.search && Pianke.search.init()
    }
}, HAS_AUDIO = !!document.createElement("video").canPlayType;
$(function () {
    Pianke.baseInit(), window.noBase || pageInit()
}), pageInit = function () {
    var e = location.pathname.split("/"), t = e[1].toString();
    switch (t) {
        case"index":
            Pianke.slider.init();
            break;
        case"home":
        case"draft":
        case"fav":
        case"feedtype":
        case"followed":
            Pianke.home.init(), Pianke.draft.init(), Pianke.user.init();
            break;
        case"talk":
            Pianke.talk.init();
            break;
        case"write":
            Pianke.write.init(), Pianke.draft.init();
            break;
        case"writegposts":
            Pianke.writegposts.init();
            break;
        case"note":
            Pianke.note.init();
            break;
        case"wordcard":
        case"posts":
        case"card":
        case"cardrec":
            Pianke.wordcard.init(), Pianke.slider.init(), Pianke.draft.init(), Pianke.detailpage.init(), Pianke.write.init(), Pianke.classic.init();
            break;
        case"timeline":
            Pianke.timeline.init(), Pianke.user.init();
            break;
        case"album":
            Pianke.album.init();
            break;
        case"mobile":
            mobileAnimate();
            break;
        case"":
            defaultBgInit();
            break;
        case"reg":
        case"user":
            Pianke.reg.init(), Pianke.user.init(), Pianke.changePwd.init(), Pianke.draft.init();
            break;
        case"bind":
            Pianke.Oauth.init();
            break;
        case"create":
        case"eposts":
            Pianke.create.init(), Pianke.draft.init();
            break;
        case"profile":
            Pianke.user.init(), Pianke.album.init(), Pianke.wordcard.init(), Pianke.timeline.init(), Pianke.theater.init();
            break;
        case"theater":
        case"subject":
            Pianke.theater.init();
            break;
        case"public":
            Pianke.public.init();
            break;
        case"fposts":
            Pianke.topic.init(), Pianke.detailpage.init(), Pianke.draft.init();
            break;
        case"gposts":
            Pianke.writegposts.init();
            break;
        case"feeling":
            Pianke.topic.init();
            break;
        case"contribute":
            Pianke.contribute.init();
            break;
        case"message":
            Pianke.message.init();
            break;
        case"collect":
        case"topic":
            Pianke.collect.init();
            break;
        case"event":
            Pianke.the100th.init();
            break;
        case"read":
        case"reader":
        case"explore":
        case"writing":
            Pianke.read.init();
            break;
        case"ting":
            Pianke.ting.init();
            break;
        case"search":
            break;
        case"classic":
        case"cposts":
            Pianke.classic.init();
            break;
        default:
    }
}, Pianke.SendEmail = function (e) {
    $.ajax({
        type: "POST", data: "email=" + e, url: "../api/reg/resendemail", dataType: "json", success: function (e) {
            e.code == "A00000" ? alert("鍙戦€佹垚鍔燂紒") : alert(PKINFO.eCode[e.code])
        }
    })
}, window.console || (window.console = {
    log: function () {
    }
}), window.alert = function (e) {
    var t = "poplayer", n = $("<div class='poplayer'>" + e + "</div>");
    $(document.body).append(n);
    var r = $(window).width(), i = $(window).height(), s = (r - n.width()) / 2 - 40 - 5, o = (i - n.height()) / 2 + $(document.body).scrollTop();
    n.hide().css({left: s, top: o}).fadeIn(500), setTimeout(function () {
        $("body .poplayer").remove()
    }, 2e3)
}, window.confirm = function (e, t, n, r) {
    var i = $("#fix_confirm");
    i.show().find(".inner").text(e).end().find(".cancel").unbind("click").bind("click", function () {
        i.hide()
    }).end().find(".primary").unbind("click").bind("click", function () {
        t && t(), i.hide()
    });
    if (n) {
        var s = i.find(".delete");
        i.css({overflow: "visible", position: "absolute"}), s.css({
            left: $(window).width() / 2,
            top: $(window).height() / 2
        })
    }
}, window.show_dialog = function (e, t, n) {
    if (!PKINFO.islogin)return !1;
    var r = $(".layer_friend"), i = e.data.data.user, s = e.data.data.relation.star, o = s ? "鍙栨秷鍏虫敞" : "鍏虫敞", u = s ? "listen_c" : "listen_a", a = s ? "" : "follow";
    r.css(t).show().find("h2").text(i.uname), r.find("h2").parent().attr("href", "/profile/" + n), r.find(".name").attr("href", "/profile/" + n), r.find(".avatar").attr("src", i.icon), r.find(".follow_btn").removeClass("follow").addClass(a).attr("data-id", n), r.find("span").text(o).end().find("strong").removeClass("listen_a listen_c").addClass(u)
}, window.hide_dialog = function () {
    $(".layer_friend").hide()
}, window.msg_modal = function (e, t) {
    t = t || 1e3, el = $("<div class='delete radius i_delete' style='display:none'><div class='btn_control'><p  class='blue'>" + e + "</p></div></div>"), $("body").append(el.fadeIn()), setTimeout(function () {
        el.fadeOut(2e3, function () {
            $(".delete.i_delete").remove()
        })
    }, t)
}, common_init = function () {
    var e = ".lbox a,.self li a,.create_content .image a,.create_content .images a,.model li a,.own .user a,.author a,.d_user_img a", t = !1, n = ".content .open,.create_content .open,.i_picture", r = ".content,.create_content";
    backToTop(), $(window).height() >= $("body").height() && ($(".footer").css({position: "absolute"}), $("body").css("height", $(window).height())), $(n).live("click", function () {
        var e = $(this), t = e.parents(r), n = t.find(".long,.short"), i = e.hasClass("down"), s = i ? "灞曞紑" : "鏀惰捣", o = e.attr("href") + (e.find("a").length ? e.find("a").attr("href") : "");
        /\//.test(o) || (e.hasClass("i_picture") && (e = t.find(".open")), e.text(s).toggleClass("down"), n.toggle())
    });
    if (window.location.pathname == "/app/ting.php") {
        var i = function () {
            var e = $(".app_hot p img").attr("src"), t = $(".app_bg .hot_btn a:first").attr("data-src"), n = $(".app_bg .hot_btn a:last").attr("data-src");
            e = e == t ? n : t, $(".app_hot p img").attr("src", e), $(".app_bg .hot_btn a").toggleClass("current")
        }, s = setInterval(i, 5e3);
        $(".app_bg .hot_btn a").bind("click", function () {
            clearInterval(s);
            var e = $(this).attr("data-src");
            $(".app_hot p img").attr("src", e), $(".app_bg .hot_btn a").removeClass("current"), $(this).addClass("current"), s = setInterval(i, 5e3)
        })
    }
    $(".fake_enter").live("click", function () {
        if (!PKINFO.islogin)openlogintip(); else {
            var e = $(this), t = e.parent().find(".true_enter");
            e.hide(), t.show(), t.find("textarea,input").focus()
        }
    }), $(document).bind("scroll", function () {
        $(window).height() <= $("body").height() && $(".footer").attr("style", "")
    }), $(document).click(function (e) {
        $(e.target).parents(".bq,.tjbq,.choose_log").length || $(".bq,.log_list").hide()
    }), $(".report").live("click", function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        var e = $(this).attr("data-id");
        $(".report_layer").show().data("content_id", e)
    }), $(".report_layer .checkbox_other").click(function () {
        $(".reason_entry").toggle($(this).is(":checked"))
    }), $(".report_layer .close,.report_layer .cancel_btn").bind("click", function () {
        $(".report_layer").hide()
    }), $(".report_layer .save_btn").bind("click", function () {
        var e = "/api/report/add.php", t = "%$$%", n = $(".report_layer"), r = $(".report_layer textarea"), i = n.data("content_id"), s = r.val();
        s = s.length ? t + s : "", $.post(e, {
            content_id: i, reason: $.map($(".checkbox:checked"), function (e) {
                return e.value
            }).join(t) + s
        }, function (e) {
            e.code == "A00000" ? (n.hide(), r.val(""), $(".checkbox:checked").attr("checked", !1)) : showerrortip(e.data.msg)
        }, "json")
    }), $(".new_bigindex .i_new_main .list_content").hover(function () {
        $(this).data("close") || ($(this).find(".cover").css("opacity", 1).hide().fadeIn(200), $(this).data("close", !0))
    }, function () {
        $(this).data("close") && ($(this).find(".cover").dequeue().hide(), $(this).data("close", !1))
    }), $("#fix_layer_login_form").submit(function (e) {
        e.preventDefault(), Pianke.LayerLogin.clickOnRegBtn()
    }), $(".layer_friend").hover(function () {
        t = !0
    }, function () {
        t = !1, setTimeout(function () {
            t || hide_dialog()
        }, 150)
    }), $(e).live("mouseenter", function () {
        if (location.pathname.split("/")[1].toString() == "ting" || !PKINFO.islogin)return !1;
        t = !0;
        var e = $(this), n = e.find("img"), r = $(".layer_friend:first"), i = r.height() + 15, s = n.height() + 9, o = n.offset().top - $("body").scrollTop() - $(".header").height() > i, u = {
            top: o ? n.offset().top - i : n.offset().top + s,
            left: n.offset().left
        }, a = e.attr("href").replace(/http:\/\/|https:\/\//, "").split("/")[2];
        if (PKINFO.uinfo.uid == a)return !1;
        $.getJSON("/api/user/get", {fuid: a}, function (e) {
            show_dialog(e, u, a)
        })
    }).live("mouseleave", function () {
        t = !1, setTimeout(function () {
            t || hide_dialog()
        }, 150)
    }), $(".follow_btn").live("click", function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        var e = $(this), t = e.hasClass("follow"), n = e.attr("data-id"), r = e.attr("data-type"), i = r ? "/api/follow/" : "/api/attention/", s = Math.floor(Math.random() * 9999999999), o = i + (t ? "follow" : "unfollow"), u = t ? "鍙栨秷鍏虫敞" : "鍏虫敞", a = {
            type: r,
            rand: s
        }, f = r ? "cid" : "staruids";
        a[f] = n;
        if (e.hasClass("gray"))return !1;
        e.addClass("gray"), Pianke.user.get_attention(e, o, a, function () {
            e.toggleClass("follow").find("span").text(u).end().find("strong").toggleClass("listen_a listen_c")
        })
    }), Pianke.emotion.init(), $("#send_mail,.open_msg_dialog").bind("click", function () {
        var e = $(this), t = e.hasClass("open_msg_dialog"), n = t ? $(".layer_friend .follow_btn").attr("data-id") : $(".follow_btn[data-id]").attr("data-id"), r = t ? $(".layer_friend h2").text() : $(".approve h2").text();
        initMailBox(r, n)
    }), $(".f_secret .widthg94").live("click", function () {
        $(this).parents(".f_secret").remove()
    }), $(".f_secret .close").live("click", function () {
        if ($(this).parents(".layer_vcode").length)return;
        $(this).parents(".f_secret").remove()
    }), $(".f_secret textarea,.s_entry textarea").live("keyup", function () {
        var e = $(this).val(), t = e.length, n = 500, r = n - t;
        r >= 0 ? $(".f_secret .point_text,.s_entry .point_text").html("杩樺彲浠ヨ緭鍏�<span>" + r + "</span>瀛�</p>") : $(".f_secret .point_text,.s_entry .point_text").html('宸茬粡瓒呰繃<span class="red">' + -r + "</span>瀛�</p>")
    }), $(".judge-recommend .click-all").live("click", function () {
        var e = $(this), t = e.parents(".judge-recommend").find(".judge-word"), n = ["<<鏀惰捣", "鏌ョ湅鍏ㄩ儴 >>"], r = t.filter(":last").is(":visible");
        t.not(":first").toggle(!r), e.find("a").text(n[Number(r)])
    }), $(".f_secret .width94").live("click", function () {
        var e = $(this).parents(".f_secret"), t = e.find("textarea").val(), n = e.data("uid"), r = 500;
        if (t.length > r)return alert("鐗囬偖姝ｆ枃闄愬埗" + r + "瀛椾互鍐�"), !1;
        $.trim(t).length && $.post("/api/message/send", {withuid: n, content: t}, function (e) {
            e.code == "A00000" ? ($(".f_secret").remove(), msg_modal("鐗囬偖鍙戦€佹垚鍔燂紒")) : alert(PKINFO.eCode[e.code])
        }, "json")
    }), $("#love,.love").live("click", function () {
        var e = $(this);
        $.post("/api/attitude/love.php", {id: e.attr("data-id")}, function (t) {
            t.code == "A00000" ? e.find(".number").text(t.data.data.love) : t.code == "A00001" ? openlogintip() : showerrortip(t.data.msg)
        }, "json")
    }), $(".icon .like,.like_btn").live("click", function () {
        var e = $(this), t = e.parents(".icon").attr("data-id") || e.attr("data-id"), n = e.attr("data-type");
        t && submitlike(t, e, n)
    })
}, submitlike = function (e, t, n) {
    var r = location.pathname.split("/")[1] == "posts" && !n;
    if (PKINFO.islogin != 1)return openlogintip(), !1;
    if ("" == e || "undefined" == typeof e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    var i = {id: e, isdetail: r ? 1 : 0, type: 1};
    return $.post("/api/attitude/like.php", i, function (e) {
        e.data.data.canReview && init_recommend_box(e.data.data.contentid), addlikeswitch = !0;
        switch (e.code) {
            case"A00001":
                return openlogintip(), !1;
            case"A00000":
                var n = e.data.data.good;
                return n = n ? n : "", t.find(".number,.num").text(n).show(), t.parents("li").find(".good_number").text(n + "璧�"), r && (info = Pianke.detailpage.get_info(e), $(".arrow_opend .arrow_people").data("info", info), Pianke.detailpage.open_like_list(!0)), !0;
            default:
                return showerrortip(e.data.msg), !1
        }
    }, "json"), !0
}, hide_recommend_box = function () {
    $("#article-recommend-box").hide()
}, init_recommend_box = function (e) {
    var t = $("#article-recommend-box");
    t.length || ($("body").append(get_article_recommend_box()), t = $("#article-recommend-box"), t.attr("data-id", e), t.find(".re-cancel,.cl").bind("click", function () {
        hide_recommend_box()
    }).end().find("textarea").bind("focus", function () {
        $(this).next("span").hide()
    }).end().find(".re-ok").bind("click", function () {
        var e = t.find("textarea").val();
        n({contentid: t.attr("data-id"), comment: e, ifcomment: $("#submit_as_comment:checked").length})
    }).end().find(".recommend-word span").bind("click", function () {
        t.find("textarea").focus()
    }));
    var n = function (e) {
        var n = t.find("textarea").val();
        if (!n.length) {
            alert("鍐呭涓嶈兘涓虹┖");
            return
        }
        $.post("/api/attitude/addReview.php", e, function (e) {
            e.code == "A00000" ? (alert("鍙戦€佹垚鍔燂紒"), hide_recommend_box(), t.find("textarea").val(""), t.find(".recommend-word span").show()) : showerrortip(e.data.msg)
        }, "json")
    };
    t.show().attr("data-id", e)
}, get_article_recommend_box = function () {
    return '<div id="article-recommend-box" class="article-recommend"> <div class="recommend-title">鎺ㄨ崘濂藉唴瀹� <span>浣犳槸[鐬籡寰界珷鐢ㄦ埛锛�<a target="_blank" href="/public/help.php#medal">浜嗚В鏇村</a></span> <a href="javascript:void(0);" class="cl"></a></div> <div class="recommend-word"><textarea></textarea> <span>鐪嬪埌濂藉唴瀹癸紝鍐欎笅浣犵殑鎺ㄨ崘璇紝鍒嗕韩缁欐洿澶氱墖瀹㈠惂</span></div> <div class="recommend-more"><input type="checkbox" id="submit_as_comment" checked>  <label for="submit_as_comment" class="css-label">鍚屾椂浣滀负璇勮鍙戝嚭</label><span class="re-action"><button name="re-ok" class="re-ok">鎻愪氦</button> <button name="re-cancel" class="re-cancel">鍙栨秷</button> </span> </div> </div>'
}, mobileAnimate = function () {
    var e = $(".app_hot a"), t = $(".hot_btn a"), n = e.length, r = null, i = 5e3, s = function (o) {
        clearTimeout(r);
        var u = $(e).filter(":eq(" + o + ")"), a = $(e).not(":eq(" + o + ")");
        if (u.is(":visible"))return;
        u.fadeIn(1e3), a.fadeOut(1e3), t.removeClass("current").filter(":eq(" + o + ")").addClass("current"), r = setTimeout(function () {
            o += 1, o >= n && (o = 0), s(o)
        }, i)
    };
    t.bind("click", function () {
        var e = $(this).index();
        s(e)
    })
}, defaultBgInit = function () {
    var e = $("#defaultBg").attr("src");
    $.backstretch(e)
}, initMailBox = function (e, t) {
    if (PKINFO.islogin != 1)return openlogintip(), !1;
    var n = $("<div class='f_secret' style='display:none'><div class='box'><a href='javascript:void(0);' class='close'></a><div class='case'><h2>鍙戠墖閭粰锛�<span>" + e + "</span></h2><textarea></textarea><div class='but'><p class='point_text'>杩樺彲浠ヨ緭鍏�<span>500</span>瀛�</p><a class='widthg94'>鍙栨秷</a><a class='width94'>鍙戦€�</a></div></div></div></div>");
    $("body").append(n), n.data("uid", t), $(".f_secret").show().find("textarea").focus()
}, jQuery.handleError = jQuery.handleError || function (e, t, n, r) {
        e.error && e.error.call(e.context || e, t, n, r), e.global && (e.context ? jQuery(e.context) : jQuery.event).trigger("ajaxError", [t, e, r])
    };
Pianke.read = {
    GET_WRITING_URL: "/api/writing/debuts.php",
    fall_canload: !0,
    on_writing: /writing/.test(location.pathname),
    _cur_page: 1,
    cur_num: 0,
    cur_type: 0,
    cur_page: 1,
    contentid: "",
    total_count: 0,
    is_max: !1,
    is_loading: !1,
    cur_play: {},
    cur_info: {},
    play_st: 0,
    list_length: 0,
    on_move: !1,
    url: "/api/read/list?type=",
    slidt_st: null,
    timmer: 1e4,
    listened_counter: {},
    articles: [],
    init: function () {
        that = this, /explore|writing|read/.test(location.pathname.split("/")[1]) ? that.indexEvent() : (that.initView(), that.fetchData(that.contentid), that.bindEvent(), that.list_resize()), $(".slide-list").length && (that.slidt_st = setTimeout(function () {
            that.next_slide()
        }, that.timmer))
    },
    indexEvent: function () {
        var e = this;
        $(document).scroll(function () {
            $(document).height() <= $(window).height() + $(window).scrollTop() + 20 && e.fall_canload && e.fall_load_more()
        }), $(".story-category .filter-tabs .tab").bind("click", function () {
            index = $(this).index(), $(".story-category .filter-tabs li").removeClass("on").filter(":eq(" + index + ")").addClass("on"), $(".story-category .bd ul").hide().filter(":eq(" + index + ")").show()
        }), $(".slide-btns").find(".slide-prev,.slide-next").bind("click", function () {
            var t = $(this), n = t.hasClass("slide-prev"), r = $(".slide-list li"), i = r.filter(":visible").index(), s = r.length;
            i += n ? -1 : 1, i >= s ? i = 0 : i < 0 && (i = s - 1), e.select_slide(i)
        }), $(".slide-controls .dots li").bind("click", function () {
            var t = $(this).index();
            e.select_slide(t)
        }), $(".t_left .tag a").bind("click", function () {
            var e = $(this).attr("data-id");
            $(".tag_cont").hide().filter('[data-id="' + e + '"]').show(), $(".tag a").removeClass("current"), $(this).addClass("current")
        }), $(".p_nav a").bind("click", function () {
            var e = $(this), t = e.attr("data-type"), n = e.parents(".piece6");
            n.find(".p_nav a").removeClass("current").end().find(".p_box").hide().filter("[data-type=" + t + "]").show(), e.addClass("current")
        }), $(".hot_author .hot_btn .r_icon,.hot_anchor .hot_btn .r_icon").bind("click", function () {
            var e = $(this).hasClass("up"), t = $($(this).parents(".hot_author")[0] || $(this).parents(".hot_anchor")[0]), n = t.find(".hot_cont");
            Pianke.home.suggest_slider(e, n, n)
        }), $(".p_box_bg .p_box:first li").hover(function () {
            $(this).data("close") || ($(this).find(".cover").css("opacity", 1).hide().fadeIn(200), $(this).data("close", !0))
        }, function () {
            $(this).data("close") && ($(this).find(".cover").dequeue().hide(), $(this).data("close", !1))
        })
    },
    initView: function () {
        $(".r_card").attr("title", "杩炶浇"), $.ajaxSetup({cache: !1}), window.HAS_AUDIO ? ($(".mp3_player").remove(), this.cur_play = document.getElementById("playerAudio")) : $(".m_player").remove(), this.contentid = location.hash.replace("#", "")
    },
    fall_load_more: function () {
        var e = this;
        e.fall_canload && e.on_writing && ($("#loading").show(), e.fall_canload = !1, e._cur_page += 1, $.getJSON(e.GET_WRITING_URL, {
            page: e._cur_page,
            _: Math.floor(Math.random() * 999999)
        }, function (t) {
            $("#loading").hide(), t.data.data.ended ? (showerrortip("宸茬粡琚綘娴忚瀹屼簡锛屼紤鎭竴涓嬪惂锝�"), e.fall_canload = !1) : ($(".main_cont").append(t.data.data.html), e.fall_canload = !0)
        }))
    },
    bindEvent: function () {
        var e = this;
        $(document).ajaxSuccess(function () {
            e.update_counter()
        }), $("html").bind("keydown", function (t) {
            switch (t.keyCode) {
                case 37:
                    e.prev_page();
                    break;
                case 39:
                    e.next_page()
            }
        }), $(window).bind("resize", function () {
            e.list_resize()
        }), $(".get_comment").bind("click", function () {
            el = $(this), hei = el.offset().top, $("html,body").delay(100).animate({scrollTop: hei}, 200)
        }), $(".read_l a[r_type]").bind("click", function () {
            var t = $(this), n = t.attr("r_type");
            if (n == e.cur_type)return !1;
            e.cur_type = n, e.cur_page = 1, e.is_max = !1, e.articles = [], e.total_count = 0, e.fetchData(), $(".read_l_cont ul").empty(), $(".head_read li a[r_type]").removeClass().filter("[r_type=" + n + "]").addClass("current")
        }), $(".read_l_cont li").live("click", function (t) {
            var n = $(this), r = parseInt(n.attr("data-id"), 10), i = $(t.target).hasClass("sing");
            e.render_detail(r, i)
        }), $(".read_l_cont").bind("scroll", function () {
            var t = $(this), n = t.scrollTop(), r = t.find("ul").height(), i = t.height() + n;
            if (i + 200 >= r) {
                if (e.is_loading)return !1;
                e.fetchData()
            }
        }), $(".but_ico.random").bind("click", function () {
            e.random_detail()
        }), $(".but_ico.up").bind("click", function () {
            e.prev_page()
        }), $(".but_ico.down").bind("click", function () {
            e.next_page()
        }), $(".but_ico.switch").bind("click", function () {
            var e = $(".read_l"), t = -e.width() - 1;
            e.animate({left: t}, 200)
        }), $(".like_btn").bind("click", function () {
            var e = $(this), t = $(".read_r").attr("data-id"), n = e.attr("data-type");
            submitlike(t, e, n)
        }), $(".social").bind("click", function () {
            e.share_to_sns(this)
        }), $(".unfold").bind("click", function () {
            $(".read_l").animate({left: 0}, 200)
        }), $(".m_player .progress").bind("click", function (t) {
            num = t.offsetX, curtime = num / 100 * e.cur_play.duration, e.cur_play.currentTime = curtime, $(".progress_bar").width(num + "%"), e.play_music()
        }), $(".m_player .play").bind("click", function () {
            e.play_music()
        }), $(".m_player .pause").bind("click", function () {
            e.cur_play.pause(), $(".m_player .play").show(), $(".m_player .pause").hide()
        })
    },
    get_url: function (e, t) {
        return e = e || 0, t = t || 1, contentid = this.contentid, that.url + e + "&page=" + t + "&contentid=" + contentid
    },
    fetchData: function (e) {
        that = this, get_url = that.get_url(that.cur_type, that.cur_page);
        if (that.is_max)return !1;
        $(".loading").show(), that.is_loading = !0, $.getJSON(get_url, function (t) {
            t.data && !t.data.data.length ? that.is_max = !0 : $(".but_ico.down").show(), $(".loading").hide(), that.is_loading = !1;
            var n = t.data.data, r = [];
            $.each(n, function () {
                var e = 1;
                r.push(this), this.type == "album" && this.detail.contentlist.length && (e = _length = this.detail.contentlist.length, r = r.concat(Array(_length - 1))), that.list_length += e
            }), that.articles = that.articles.concat(r), that.render_list(n), that.cur_page == 1 && that.render_detail(0, !1, e), 5, that.cur_page++
        })
    },
    random_detail: function () {
        this.articles = Shuffle(this.articles), $(".read_l_cont ul").empty(), this.render_list(this.articles), this.render_detail(0)
    },
    render_list: function (e) {
        var t = e, n = $(".read_list"), r = this;
        $.each(t, function () {
            var e = r.create_list_item(this).addClass("read_item");
            n.append(e)
        }), $(".read_l_cont li:first").addClass("first")
    },
    create_list_item: function (e) {
        return e.type == "default" ? el = this.create_default(e.detail) : e.type == "album" && (el = this.create_album(e.detail)), el
    },
    create_album: function (e) {
        var t = e.albumInfo, n = this, r = t.title, r = r ? n.cut_str(r, 16) : "鏃犻", i = t.userinfo.uname, s = $("#mul_list_temp").clone().removeAttr("id"), o = "";
        return s.attr("data-id", n.total_count).find(".album_info").find("h3").text(r).end().find("p").text("by锛�" + i), $.each(e.contentlist, function (e) {
            o += '<li data-id="' + n.total_count + '"><a href="javascript:void(0);"><p>' + this.title + "</p>", this.musicUserInfo.uid && (o += '<span class="but_ico sing" title="涓绘挱"></span>'), o += "</a></li>", n.total_count++
        }), s.find(".r_up_read").hide().find("ul").html(o), s
    },
    create_default: function (e) {
        var t = e.title, t = t ? that.cut_str(t, 16) : "鏃犻", n = e.userinfo.uname, r = $("#template_box .list_temp").clone().removeAttr("class");
        return r.attr("data-id", that.total_count), r.find("h3").text(t), r.find("p").text("by锛�" + n), r.find(".sing").hide(), e.musicUserInfo && e.musicUserInfo.uid && r.find(".sing").show().attr("title", "涓绘挱"), that.total_count++, r
    },
    prev_page: function () {
        if (this.cur_num == 0)return;
        this.cur_num--, this.render_detail(this.cur_num)
    },
    next_page: function () {
        if (this.cur_num == this.articles.length - 1) {
            if (that.is_loading)return !1;
            that.fetchData()
        } else this.cur_num++, this.render_detail(this.cur_num)
    },
    get_data: function (e) {
        var t = 1, n = this, r = {}, s = n.articles, e = e.length ? e : parseInt(e, 10);
        if (typeof e != "string")if (typeof e != "number" || e < 0 || s.length == 0)return !1;
        if (typeof e == "string") {
            if (s[0].type == "default")r = s[0].detail; else if (s[0].type == "album") {
                contentlist = s[0].detail.contentlist, i = 0;
                for (li in contentlist) {
                    if (contentlist[li].contentid == e) {
                        r = contentlist[li], this.cur_num = i;
                        break
                    }
                    i++
                }
            }
            r.contentid || (e = 0)
        }
        if (!r.contentid)if (s[e])s[e].type == "default" ? r = s[e].detail : s[e].type == "album" && (r = s[e].detail.contentlist[0]); else while (r || e < 0) {
            if (s[e] && s[e].type == "album") {
                r = s[e].detail.contentlist[t - 1];
                break
            }
            e -= 1, t += 1;
            if (t > 50)return
        }
        return r
    },
    render_detail: function (e, t, n) {
        this.cur_num = e;
        var r = $(".read_r").fadeIn(), i = this.get_data(n ? n : e), s = i.contentid, o = i.userinfo, u = i.imgUrl, a = i.content, f = "url(" + u + ")", l = $(".fillmoreInner"), c = l.css("background-image"), h = i.musicUrl, p = i.musicUserInfo, d = i.musicVisit, t = t ? t : !1;
        this.cur_play && (this.cur_play.src = ""), e = this.cur_num, $(".progress_bar").width(0), this.update_visit(s), location.hash = s, i.musicUserInfo && i.musicUserInfo.uid && $(".host_name").attr("href", "/profile/" + i.musicUserInfo.uid).text(i.musicUserInfo.uname), $(".music_info").fadeOut(), $(".comment_list,.ajax_fenye").empty(), $("html,body").animate({scrollTop: 0}, 200), $(".play_count").text(i.musicVisit), this.full_userinfo(o), this.full_content(i), this.slider_animate(e), $(".recid_input").attr("id", "recid_" + s), $(".reuid_input").attr("id", "reuid_" + s), r.attr("data-id", s), $(".entry").hide().find(".send,textarea").attr("data-id", s), $(".icon5.fav_btn").attr("f-contentid", s), h && ($(".music_info").fadeIn(), this.edit_player(h, p, d, t, s)), c && !c.match(u) && (l.fadeOut(300, function () {
            $(this).remove()
        }), $("body").append($("<div></div>").addClass("fillmoreInner").hide().css("background-image", f).fadeIn(500))), e == 0 ? $(".but_ico.up").hide() : e == that.list_length ? ($(".but_ico.down").hide(), this.fetchData()) : $(".but_ico.up,.but_ico.down").show(), Pianke.comment.getcomment($(".entry"), 0, 1, !0, !0)
    },
    slider_animate: function (e) {
        var t = $(".read_l_cont li[data-id=" + e + "]:first");
        t.hasClass("read_item") || (t = t.parents(".read_item"));
        var n = t.find(".r_idea");
        t.siblings().find(".r_up_read").hide(), $(".r_idea").removeClass("current"), $(".read_l_cont li").removeClass("current").filter("[data-id=" + e + "]").addClass("current"), n.addClass("current").find(".r_up_read").show()
    },
    full_content: function (e) {
        var t = $(".r_content"), n = $(".get_comment .number"), r = $(".like_btn .number"), i = $(".fav_btn .number"), s = $(".fav_btn"), o = $(".detail_title a"), u = $(".article_content p"), a = $(".from_type"), f = $(".r_name"), l = $(".r_time"), c = $(".essay"), h = $(".follow_btn"), p = $(".icon .tag"), d = e.relation.isStar;
        i.remove(), r.text(e.counter.like || ""), s.addClass(e.isFav ? "on" : "").text(e.isFav ? "鍙栨秷鏀惰棌" : "鏀惰棌").append('<span class="number">' + (e.counter.fav || "") + "</span>"), n.text(e.counter.comment || ""), o.text(e.title || "鏃犻").attr("href", e.content_url), u.html(e.content), a.text(e.from).attr("href", e.from_url), f.text(e.userinfo.uname), l.text(e.time.addtime_f), e.userinfo.uid == PKINFO.uinfo.uid ? h.hide() : (h.attr("data-id", e.userinfo.uid).find("span").text(d ? "鍙栨秷鍏虫敞" : "鍏虫敞").end()[0].className = "follow_btn " + (d ? "" : "follow"), d ? h.find("strong").removeClass("listen_a").addClass("listen_c") : h.find("strong").removeClass("listen_c").addClass("listen_a")), p.empty(), $.map(e.styles, function (e) {
            p.append("<span>#" + e + "</span>")
        }), e.remark && e.remark.length ? c.show().find(".contents").html(e.remark) : c.hide()
    },
    share_to_sns: function (e) {
        var t = e.className.split(" ")[1], n = $(".detail_title a").attr("href"), r = $.trim(this.cut_str($(".article_content p").text(), 90)), i = "", s = $(".detail_title a").text();
        redirect_to_sns(t, n, r, i, !0, s)
    },
    update_counter: function () {
        var e = this, t = e.get_data(e.cur_num), n = $(".fav_btn .number").text() || 0, r = $(".like_btn .number").text() || 0, i = $(".get_comment .number").text() || 0, s = !$(".follow_btn").hasClass("follow"), o = $(".follow_btn").attr("data-id");
        t && (t.counter = {
            card: 0,
            comment: i,
            fav: n,
            like: r
        }, t.isFav = $(".fav_btn").hasClass("on"), t.relation.isStar = s, $.map(e.articles, function (e) {
            e && e.type == "default" && e.detail.userinfo.uid == o && (e.detail.relation.isStar = s)
        }))
    },
    full_userinfo: function (e) {
        $(".anthor_news").find(".name_t").attr("href", "/profile/" + e.uid).end().find("h3").text(e.uname).end().find(".name_t img").attr("src", e.icon).end().find("p").html(e.desc).end().find(".att").attr("data-id", e.uid)
    },
    cut_str: function (e, t) {
        return e.length < t ? e : e.substr(0, t) + "..."
    },
    update_visit: function (e) {
        var t = "/visit/read/" + e;
        $.post(t, {}, function (e) {
            return !0
        })
    },
    edit_player: function (e, t, n, r, i) {
        var s = "", o = "http://pkstatic.b0.upaiyun.com/swf/singlemp3player.swf";
        if (t.uid)if (window.HAS_AUDIO) {
            var u = this.cur_play;
            u.src = e, u.setAttribute("data-id", i), clearInterval(this.play_st), $(".m_player .play").show(), $(".m_player .pause").hide(), r && (this.play_music(), this.send_listencount(), this.listened_counter[i] = !0)
        } else params = o + "?file=" + e + "&repeatPlay=true&songVolume=100&frontColor=827bb4", params += "&autoStart=" + r + "&contentId=" + i, $(".mp3_player").empty().html('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="145" height="20" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="wmode" value="transparent"><param name="movie" value="' + params + '"><embed wmode="transparent" width="145" height="30" src="' + params + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>')
    },
    play_music: function () {
        var e = this, t = e.cur_play;
        t.play(), $(".m_player .play").hide(), $(".m_player .pause").show(), clearInterval(e.play_st), e.listened_counter[t.getAttribute("data-id")] || (e.send_listencount(), e.listened_counter[t.getAttribute("data-id")] = !0), e.play_st = setInterval(function () {
            e.show_progress(t)
        }, 33)
    },
    show_progress: function (e) {
        var e = e || this.cur_play;
        $(".progress_bar").width(Math.floor(100 * (e.currentTime / e.duration)) + "%"), e.duration && e.currentTime == e.duration && (e.currentTime = 0, this.send_listencount(), this.listened_counter[e.getAttribute("data-id")] = !0)
    },
    next_slide: function () {
        var e = $(this), t = e.hasClass("slide-prev"), n = $(".slide-list li"), r = n.filter(":visible").index(), i = n.length;
        r += 1, r >= i && (r = 0), that.select_slide(r)
    },
    select_slide: function (e) {
        that = this;
        if (that.on_move)return;
        clearInterval(that.slidt_st), that.on_move = !0, next = $(".slide-list .slide-item:eq(" + e + ")"), prev = $(".slide-list .slide-item:visible"), bool = e > prev.index(), width = $(".slide-item").width(), timmer = 500, next.show().css({left: width * (bool ? 1 : -1)}).animate({left: 0}, timmer), prev.animate({left: width * (bool ? -1 : 1)}, timmer, function () {
            that.on_move = !1, prev.hide(), that.slidt_st = setTimeout(function () {
                that.next_slide()
            }, that.timmer)
        }), $(".slide-controls .dots li").removeClass("active").filter(":eq(" + e + ")").addClass("active")
    },
    send_listencount: function () {
        var e = this.cur_play.getAttribute("data-tingid");
        $.getJSON("container=" + e, function (e) {
            $(".play_count").text(e.data.data)
        })
    },
    list_resize: function () {
        $(".read_l_cont").height($(window).height() - $(".head_read").height())
    }
};
Pianke.emotion = {
    EMOTION_BASE_URL: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/",
    init: function (e) {
        this.bindEvent()
    },
    bindEvent: function () {
        var e = this;
        $(".tjbq").live("click", function () {
            var t = $(this), n = t.find(".emotionlist");
            n.length ? n.fadeIn() : e.createBox(t)
        }), $(".emotionlist li a").live("click", function () {
            var t = $(this), n = t.find("img")[0].title;
            e.commentinsertemotion(t, n)
        }), $(".emotionlist .closed").live("click", function () {
            el = $(this), el.parents(".emotionlist").hide(), el.parents(".post_item").removeClass("zindex"), /commentbox/.test(location.pathname) && el.parents("li").removeClass("zindex")
        })
    },
    createBox: function (e) {
        var t = "", n = e.parent();
        $.each(this.lists, function () {
            var e = this.name, n = Pianke.emotion.EMOTION_BASE_URL + this.url;
            t += '<li><a href="javascript:void();" ><img title="' + e + '" alt="' + e + '" src="' + n + '"></a></li>'
        }), list = $("<div class='bq emotionlist'></div>").html('<div class="jt"></div><div class="detailbox"><div class="closed"><a href="javascript:void(0);"></a></div><div class="detail"><ul node-type="inner" class="faces_list clearfix"></ul></div></div>'), list.find("ul").html(t), n.find(".emotionlist").remove(), n.append(list), list.fadeIn(100, function () {
            n.find(".emotionlist").show(), list.show()
        }), e.parents(".post_item,.create_content").addClass("zindex"), /commentbox/.test(location.pathname) && e.parents("li").addClass("zindex")
    },
    commentinsertemotion: function (e, t) {
        return $(".fake_enter").hide(), $(".true_enter").show(), e.parents(".entry,.enter,.m_write").find("textarea").insertAtCaret("[" + t + "]"), $(".emotionlist").remove(), !0
    },
    lists: {
        smilea: {name: "鍛靛懙", url: "ac/smilea_thumb.gif"},
        tootha: {name: "鍢诲樆", url: "0b/tootha_thumb.gif"},
        laugh: {name: "鍝堝搱", url: "6a/laugh.gif"},
        tza: {name: "鍙埍", url: "14/tza_thumb.gif"},
        kl: {name: "鍙€�", url: "af/kl_thumb.gif"},
        kbsa: {name: "鎸栭蓟灞�", url: "a0/kbsa_thumb.gif"},
        cj: {name: "鍚冩儕", url: "f4/cj_thumb.gif"},
        shamea: {name: "瀹崇緸", url: "6e/shamea_thumb.gif"},
        zy: {name: "鎸ょ溂", url: "c3/zy_thumb.gif"},
        bz: {name: "闂槾", url: "29/bz_thumb.gif"},
        bs2: {name: "閯欒", url: "71/bs2_thumb.gif"},
        lovea: {name: "鐖变綘", url: "6d/lovea_thumb.gif"},
        sada: {name: "娉�", url: "9d/sada_thumb.gif"},
        heia: {name: "鍋风瑧", url: "19/heia_thumb.gif"},
        qq: {name: "浜蹭翰", url: "8f/qq_thumb.gif"},
        sb: {name: "鐢熺梾", url: "b6/sb_thumb.gif"},
        mb: {name: "澶紑蹇�", url: "58/mb_thumb.gif"},
        ldln: {name: "鎳掑緱鐞嗕綘", url: "17/ldln_thumb.gif"},
        yhh: {name: "鍙冲摷鍝�", url: "98/yhh_thumb.gif"},
        zhh: {name: "宸﹀摷鍝�", url: "6d/zhh_thumb.gif"},
        x: {name: "鍢�", url: "a6/x_thumb.gif"},
        cry: {name: "琛�", url: "af/cry.gif"},
        wq: {name: "濮斿眻", url: "73/wq_thumb.gif"},
        t: {name: "鍚�", url: "9e/t_thumb.gif"},
        k: {name: "鎵撳搱娆�", url: "f3/k_thumb.gif"},
        bba: {name: "鎶辨姳", url: "27/bba_thumb.gif"},
        angrya: {name: "鎬�", url: "7c/angrya_thumb.gif"},
        yw: {name: "鐤戦棶", url: "5c/yw_thumb.gif"},
        cza: {name: "棣嬪槾", url: "a5/cza_thumb.gif"},
        88: {name: "鎷滄嫓", url: "70/88_thumb.gif"},
        sk: {name: "鎬濊€�", url: "e9/sk_thumb.gif"},
        sweata: {name: "姹�", url: "24/sweata_thumb.gif"},
        sleepya: {name: "鍥�", url: "7f/sleepya_thumb.gif"},
        sleepa: {name: "鐫¤", url: "6b/sleepa_thumb.gif"},
        money: {name: "閽�", url: "90/money_thumb.gif"},
        sw: {name: "澶辨湜", url: "0c/sw_thumb.gif"},
        cool: {name: "閰�", url: "40/cool_thumb.gif"},
        hsa: {name: "鑺卞績", url: "8c/hsa_thumb.gif"},
        hatea: {name: "鍝�", url: "49/hatea_thumb.gif"},
        gza: {name: "榧撴帉", url: "36/gza_thumb.gif"},
        dizzya: {name: "鏅�", url: "d9/dizzya_thumb.gif"},
        bs: {name: "鎮蹭激", url: "1a/bs_thumb.gif"},
        crazya: {name: "鎶撶媯", url: "62/crazya_thumb.gif"},
        h: {name: "榛戠嚎", url: "91/h_thumb.gif"},
        yx: {name: "闃撮櫓", url: "6d/yx_thumb.gif"},
        nm: {name: "鎬掗獋", url: "89/nm_thumb.gif"},
        hearta: {name: "蹇�", url: "40/hearta_thumb.gif"},
        unheart: {name: "浼ゅ績", url: "ea/unheart.gif"},
        pig: {name: "鐚ご", url: "58/pig.gif"},
        ok: {name: "ok", url: "d6/ok_thumb.gif"},
        ye: {name: "鑰�", url: "d9/ye_thumb.gif"},
        good: {name: "good", url: "d8/good_thumb.gif"},
        no: {name: "涓嶈", url: "c7/no_thumb.gif"},
        z2: {name: "璧�", url: "d0/z2_thumb.gif"},
        come: {name: "鏉�", url: "40/come_thumb.gif"},
        sad: {name: "寮�", url: "d8/sad_thumb.gif"},
        lazu: {name: "铚＄儧", url: "91/lazu_thumb.gif"},
        cake: {name: "铔嬬硶", url: "6a/cake.gif"},
        clock: {name: "閽�", url: "d3/clock_thumb.gif"},
        m: {name: "璇濈瓛", url: "1b/m_thumb.gif"}
    }
};
Pianke.reg = {
    init: function () {
        if (/changepwd|setemail/.test(location.pathname))return;
        this.bindEvent()
    }, bindEvent: function () {
        var e = this, t = ".registerform";
        $(t + " input").focus(function () {
            e.getFocus(this)
        }).live("blur", function () {
            e.loseFocus(this)
        }), $("form").bind("submit", function (t) {
            t.preventDefault(), e.checkAll() && e.register()
        }), $("#submit_find_pwd").click(function (t) {
            t.preventDefault();
            var n = $("#email");
            if (!e.emailTest())return $("#nobody").slideDown(200).text("閭欢鏍煎紡閿欒"), !1;
            if ($.trim(n.val()) == "" || $.trim(n.val()) == "璇疯緭鍏ユ偍娉ㄥ唽鏃跺～鍐欑殑閭")return $("#nobody").slideDown(200).text("閭涓嶈兘涓虹┖"), !1;
            e.submitData()
        }), $("#resend").click(function (e) {
            Pianke.SendEmail($(this).attr("data")), e.preventDefault()
        }), $("#register_btn").bind("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            if ($(this).hasClass("login_gray"))return !1;
            e.clickOnRegBtn()
        }), $("#read").bind("click", function (e) {
            $("#read:checked").length ? $("#register_btn").removeClass("login_gray") : $("#register_btn").addClass("login_gray")
        }), /login/.test(location.pathname) && $('input[type="password"]').live("keydown", function (e) {
            e.keyCode == 13 && Pianke.reg.user_login()
        }), $("#email").focus(function () {
            var e = $(this), t = e.val();
            e.removeClass("gray1"), (t == PKINFO.defText.email || e.val() == "閭鎴栨墜鏈哄彿" || e.val() == "甯哥敤閭" || t == "璇疯緭鍏ユ偍娉ㄥ唽鏃跺～鍐欑殑閭") && e.val("")
        }).blur(function () {
            el = $(this), el.addClass("gray1"), el.val() == "" && (text = $(".wrapper").hasClass("resetx") ? PKINFO.defText.find_password : "閭鎴栨墜鏈哄彿", /reg/.test(location.pathname) && text == "閭鎴栨墜鏈哄彿" && text == "閭" && (text = "甯哥敤閭"), el.val(text))
        }), $("#password").focus(function () {
            $(".password_tips").hide()
        }).blur(function () {
            $(this).val().length == 0 && $(".password_tips").show()
        }), $('input[type="password"]').focus(function () {
            $(this).removeClass("gray1")
        }).blur(function () {
            $(this).addClass("gray1"), $(this).val() == "" && ($("#n_password").show(), $("#n_password").val(PKINFO.defText.password))
        }), $("#login_btn").bind("click", function (t) {
            t.preventDefault(), e.user_login()
        })
    }, user_login: function () {
        var e = $.trim($("#email").val()), t = $.trim($("#password").val()), n = $("#fromurl").val() || "";
        if (e == "" || e == PKINFO.defText.email || t == "")return;
        $.ajax({
            url: "../api/user/login",
            type: "POST",
            data: {passwd: t, email: e, fromurl: n},
            dataType: "json",
            success: function (e) {
                e.code != "A00000" ? ($("#err_password").html(PKINFO.eCode[e.code]).show, $("#err_password").fadeIn()) : window.location = e.data.redirect
            }
        })
    }, clickOnRegBtn: function () {
        var e = this;
        e.checkAll() && e.register()
    }, getFocus: function (e) {
        var t = this, e = $(e), n = e.attr("id");
        e.parent().prev().hide();
        switch (n) {
            case"nickname":
                t.msg("4-30浣嶅瓧绗︼紝涓嫳鏂囧潎鍙�", n);
                break;
            case"email":
                t.msg("寰堥噸瑕侊紝楠岃瘉鍚庢柟鍙櫥褰曠墖鍒�", n);
                break;
            case"password":
            case"n_password":
                t.msg("6-20浣嶅瓧绗︼紝鍖哄垎澶у皬鍐�", "password");
                break;
            default:
        }
    }, loseFocus: function (e) {
        var t = this, e = $(e);
        setTimeout(function () {
            $.trim(e.val()).length == 0 && (e.parent().prev().show(), e.val("")), t.check(e)
        }, 100)
    }, check: function (e) {
        if (!e)return;
        var t = this, n = e.attr("id"), r = $.trim(e.val());
        switch (n) {
            case"nickname":
                if (r == "")return t.msg("鏄电О涓嶈兘涓虹┖", n), !1;
                t.name_isuniq(e);
                if (r.replace(/[^\x00-\xff]/g, "**").length < 4 || r.replace(/[^\x00-\xff]/g, "**").length > 30)return t.msg("鏄电О闀垮害涓�4-30浣嶅瓧绗�", n), !1;
                break;
            case"email":
                var i = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
                if (r.length == 0 || r == "甯哥敤閭")return t.msg("閭涓嶈兘涓虹┖", n), !1;
                if (!i.test(r))return t.msg("閭鏍煎紡閿欒", n), !1;
                $.post("/api/reg/checkemail", {email: r}, function (e) {
                    if (e.data.msg)return t.msg(e.data.msg, n), !1
                }, "json");
                break;
            case"password":
                n = "password";
                if (r == "")return t.msg("瀵嗙爜涓嶈兘涓虹┖", n), !1;
                if (r.length < 6 || r.length > 20)return t.msg("瀵嗙爜闀垮害涓�6-20浣嶅瓧绗�", n), $(this).val(""), !1;
                t.msg("", n, !0);
                break;
            default:
                return !0
        }
        return t.msg("", n, !0), !0
    }, msg: function (e, t, n) {
        n = n || !1, n ? $("#err_" + t).html(e).slideUp(200) : $("#err_" + t).html(e).slideDown(200)
    }, checkAll: function () {
        var e = this, t = e.check($("#nickname")), n = e.check($("#password")), r = e.check($("#email"));
        return t && n && r ? !0 : !1
    }, register: function () {
        var e = this, t = $.trim($("#nickname").val()), n = $.trim($("#email").val()), r = $.trim($("#password").val());
        if (!$("#read:checked")) {
            alert("璇峰厛闃呰骞跺悓鎰忎娇鐢ㄥ崗璁�");
            return
        }
        $("#register_btn").addClass("login_gray"), $.ajax({
            url: "../api/reg/reg",
            type: "POST",
            data: "email=" + n + "&uname=" + t + "&passwd=" + r,
            dataType: "json",
            success: function (t) {
                t.code != "A00000" ? (e.msg(PKINFO.eCode[t.code], "password"), $("#register_btn").removeClass("login_gray")) : window.location = "gotoemail.php?email=" + n
            }
        })
    }, submitData: function () {
        var e = $("#email"), t = $("#nobody");
        if ($.trim(e.val()) == "")return;
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/api/user/findpwd",
            data: "email=" + $.trim(e.val()),
            success: function (e) {
                e.code != "A00000" ? t.show().html(PKINFO.eCode[e.code]) : window.location = e.data.redirect
            }
        })
    }, emailTest: function () {
        var e = $("#email"), t = $("nobody"), n = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i, r = e.val();
        return !n.test(r) && $.trim(r) != "" && $.trim(r) != "璇疯緭鍏ユ偍娉ㄥ唽鏃跺～鍐欑殑閭" ? (t.show().html("閭鏍煎紡閿欒"), !1) : (t.hide(), !0)
    }, name_isuniq: function (e) {
        var t = $.trim(e.val()), n = this;
        $.post("/api/reg/checkuname", {uname: t}, function (e) {
            e.code == "A00202" && n.msg(e.data.msg, "nickname")
        }, "json")
    }
};
Pianke.comment = {
    first_loaded: !1, is20: !1, init: function () {
        this.bindEvent(), $("#comment_isdetail").length != 0 && (this.is20 = !0)
    }, bindEvent: function () {
        var e = this;
        $(".get_comment").live("click", function () {
            var e = $(this).parent().next();
            $(".arrow_people").hide();
            if (!e.length || !e.hasClass("entry"))e = $(this).parents(".own,.create_content,.detail_comment,.list_block").find(".cont,.arrow_top,.detail_comment").show().end().find(".entry"), !e.length && /create/.test(location.pathname) && ($(".detail_comment").show(), e = $(".entry"));
            Pianke.comment.getcomment(e, 0, 1, !0)
        }), $(".entry .send,.entry .sendn,.m_send").live("click", function () {
            e.submitcomment($(this))
        }), $(".close_comment_box").live("click", function () {
            $(this).hide().prev().hide()
        }), $(".ajax_fenye a").live("click", function (t) {
            t.preventDefault(), t.cancelBubble = !0;
            var n = $(this).attr("href").match(/page=(\d+)/), r = $(this).parents(".entry,.message_box"), i = $(".message_box").length ? "nj" : "";
            return n && e.getcomment(r, 1, n[1], !0, !0, i), !1
        }), $(".you_reply .close").live("click", function () {
            var e = $(".send").attr("data-id");
            $(".you_reply").hide(), $("#recid_" + e).val(""), $("#reuid_" + e).val("")
        }), $(".entry .sort a").live("click", function () {
            var t = $(this).attr("data-sort"), n = $(this).parents(".entry");
            $(".entry .sort a").removeClass("sort_current"), $(this).addClass("sort_current"), n.data("sort", t), e.getcomment(n, 1, 1, !0, !0)
        }), $(".comment_reply").live("click", function () {
            var t = $(this), n = t.hasClass("m_reply"), r = t.attr("data-type"), i = t.parents("li,.create_content").first(), s = n ? $(".m_text textarea") : t.parents(".entry").find("textarea"), o = t.attr("data-id"), u = t.parents("li").find(".comment_user_name"), a = $.trim(u.text()) + ":", f = n ? t.parents("li").attr("data-id") : i.attr("data-id"), l = n ? $(".m_send").attr("data-id") : s.attr("data-id"), c = r == "quote";
            /@/.test(a) || (a = "@" + a), $(".fake_enter").hide(), $(".true_enter").show(), e.replycomment(l, f, o, a, s, c);
            if (c) {
                var i = t.parents(".create_content"), h = i.find(".word_article p").text(), p = i.find(".images a"), d = p.attr("href"), a = p.attr("title"), v = i.find(".blockquote");
                v.length && (h = h.replace(v.text(), "")), $(".you_reply").show().find("li").html("<span class='quote_text'>" + h + "</span> - <a href='" + d + "'>" + a + "</a><a href='javascript:void(0)' class='close'></a>"), s.focus()
            }
        })
    }, getcomment: function (e, t, n, r, i, s) {
        var o = e, u = o.find(".comment_list"), a = o.find("textarea"), f = o.find(".pagination"), l = o.find(".send,.sendn,.m_send").attr("data-id"), c = e.prev(".arrow_top"), h = e.data("sort"), p = this;
        if ("" == l || "undefined" == typeof l)return !1;
        PKINFO.islogin != 1 && location.pathname.split("/")[1] != "create" ? (tips = '<div class="login_point"><p><a href="/user/login.php">绔嬪嵆鐧诲綍</a>鍙備笌璇勮锛岄€夋嫨鍏跺畠甯愬彿鐧诲綍锛�<a href="/oauth/sina/" class="login_ico sina" title="鏂版氮寰崥"></a><a href="/oauth/qq/" class="login_ico qzone" title="鑵捐QQ"></a><a href="/oauth/renren/" class="login_ico renren" title="浜轰汉缃�"></a><a href="/oauth/douban/" class="login_ico douban" title="璞嗙摚缃�"></a></p></div>', o.find(".texta,.add,.send,textarea").hide(), o.find(".login_point").length || o.find("input:last").after(tips)) : o.find(".texta,.add,.send,textarea").show();
        var d = $("#type_" + l).val() || 1;
        if ("" == d || "undefined" == typeof d)return !1;
        if ("" == n || "undefined" == typeof n)n = 1;
        if (t != 1) {
            var v = e.is(":visible");
            if (!!v)return o.hide(), c.hide(), o.next(".cl").hide(), !1;
            o.show(), o.next(".cl").show(), c.show(), i || a.focus()
        }
        var m = p.is20 ? 20 : 10;
        $(".message_box").length && (m = 5);
        var g = {contentid: l, type: d, page: n, pagesize: m, sort: h, from: s || "", _: (new Date).valueOf()};
        return $.getJSON("/api/comment/get.php", g, function (e) {
            if (e.code != "A00000")return !1;
            u.show(), u.html(e.data.list), e.data.pagehtml != "" && f.show().html(e.data.pagehtml), p.first_loaded && (r || $("html,body").scrollTop(o.offset().top - 100)), p.first_loaded = !0
        }), !0
    }, submitcomment: function (e) {
        var t = e.attr("data-id"), n = e.hasClass("m_send") ? $(".message_box") : e.parents(".entry"), r = n.find("textarea"), i = r.val(), s = n.find(".comment_list"), o = n.prev().find(".get_comment .number"), u = $("#recid_" + t).val(), a = $("#reuid_" + t).val();
        s = s.find("ul").length ? s.find("ul") : s;
        if ("" == t || "undefined" == typeof t)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
        if ("" == i || "undefined" == typeof i)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
        o.length == 0 && (o = $(n).parents(".own").find(".get_comment .number"));
        var f = {contentid: t, content: i, recid: u, reuid: a};
        return $(".you_reply").length && (f.from = "quote"), e.hasClass("m_send") && (f.from = "nj"), addcommentswitch = !1, $.post("/api/comment/add.php", f, function (e) {
            addcommentswitch = !0;
            switch (e.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    r.val(""), $("#recid_" + t).val(""), $("#reuid_" + t).val(""), s.show(), e.data.data.num == 1 ? s.html(e.data.data.list) : f.from == "quote" ? s.append(e.data.data.list) : s.prepend(e.data.data.list);
                    var n = o.html();
                    if ("" == n || "undefined" == typeof n || isNaN(n))n = 0;
                    return n = parseInt(n) + 1, n = isNaN(n) ? 1 : n, o.html(n).removeClass("no"), $(".you_reply").hide(), !0;
                default:
                    return showerrortip(e.data.msg), !1
            }
        }, "json"), !0
    }, replycomment: function (e, t, n, r, i, s) {
        return $("#recid_" + e).val(t), $("#reuid_" + e).val(n), $(".msg_input").hide().find("textarea").parents(".msg_input").show(), s || i.focus().val("鍥炲 " + r), !1
    }
}, $.fn.insertAtCaret = function (e) {
    return this.each(function () {
        var t = this;
        if (document.selection)t.focus(), sel = document.selection.createRange(), sel.text = e, t.focus(); else if (t.selectionStart || t.selectionStart == "0") {
            var n = t.selectionStart, r = t.selectionEnd, i = t.scrollTop;
            t.value = t.value.substring(0, n) + e + t.value.substring(r, t.value.length), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i
        } else t.value += e, t.focus()
    })
};
Pianke.draft = {
    DEFAULT_TITLE: "濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�",
    DRAFT_SUBMIT: "/api/draft/submit",
    st: null,
    draft_params: !1,
    init: function () {
        this.bindEvent(), $("#editor").length && (this.st = setInterval(this.save_draft, 1e4))
    },
    bindEvent: function () {
        var e = this;
        $(".more_link .save_btn").bind("click", function (t) {
            t.preventDefault(), clearInterval(e.st), e.save_draft(function () {
                location.href = "/draft"
            })
        }), $(".preview_btn").bind("click", function (t) {
            t.preventDefault(), e.preview_form()
        }), $(".operating .o_cancel").bind("click", function (t) {
            t.preventDefault(), $(".title input").val() != e.DEFAULT_TITLE || $(".write textarea").val().length > 0 ? confirm("纭鍙栨秷鍚楋紵鏈繚瀛樻暟鎹細涓㈠け锛�", function () {
                e.back_to_index()
            }) : e.back_to_index()
        }), $(".delDraft,.submitDraft").bind("click", function () {
            var e = $(this), t = e.hasClass("submitDraft"), n = t ? "/api/draft/addposts" : "/api/draft/deldraft", r = e.parents(".cont,.create_content"), i = t ? "鍙戝竷鎴愬姛" : "鑽夌ǹ鍒犻櫎鎴愬姛", s = t ? "鎻愪氦" : "鍒犻櫎", o = $(".draft_icon .m_num"), u = {id: e.parents(".icon").attr("data-id")}, a = function (e) {
                e.code == "A00000" && (r.slideUp(function () {
                    r.remove()
                }), o.text(parseInt(o.text(), 10) - 1), msg_modal(i, 2e3))
            };
            u.id || (u.id = e.attr("data-id")), t ? $.post(n, u, a, "json") : confirm("纭" + s + "璇ヨ崏绋�?", function () {
                $.post(n, u, a, "json")
            })
        })
    },
    save_draft: function (e) {
        var t = this, n = Pianke.draft.get_params();
        if (!Pianke.draft.match_params(n) || $("#isupdate").val())return !1;
        $(".process").show(), $.ajax({
            url: "/api/draft/submit",
            type: "POST",
            data: n,
            dataType: "json",
            success: function (n) {
                $(".process").hide(), e && e(), clearInterval(Pianke.draft.st), t.st = setInterval(function () {
                    Pianke.draft.save_draft()
                }, 1e4)
            }
        })
    },
    preview_form: function () {
        var e = "<form action='/postpreview/preview.php' target='_blank' method='post' id='previewForm'>";
        $.each(this.get_params(), function (t, n) {
            e += "<input type='hidden' name='" + t + "' value='" + n + "'/>"
        }), e += "</form>", $("#previewForm").remove(), $("body").append(e), $("#previewForm").submit()
    },
    match_params: function (e) {
        var t = !1, n = this.draft_params;
        return n ? ($.each(e, function (e, r) {
            n[e] != r && (t = !0)
        }), this.draft_params = e) : (this.draft_params = e, t = !0), !0
    },
    back_to_index: function () {
        var e = $("#wordcardid").length ? $("#wordcardid").val() : $("#topic_id").val(), t = location.pathname.split("/")[1];
        /create|eposts/.test(t) ? location.href = "/create/" + $("#createid").val() : location.href = "/" + location.pathname.split("/")[1] + "/" + e
    },
    get_params: function () {
        var e = $(".title_input").val() || "", t = $.map($(".tag_choose .tag_name"), function (e, t) {
            return $.trim($(e).text())
        }).join(","), e = e == this.DEFAULT_TITLE ? "" : e, n = $("input[name=copyright]:checked").val(), r = Pianke.write;
        return param = {
            fromid: $("#fromid").val(),
            postsfrom: $("#postsfrom").val(),
            title: e,
            draftid: $("#draftid").val(),
            content: UE.getEditor("editor").getContent() || "",
            tags: $.map($(".tag_choose .tag_name"), function (e, t) {
                return $.trim($(e).text())
            }).join(","),
            copyright: n || 1,
            copyright_desc: n == 2 ? $("#copyright_desc").val() : ""
        }, param.songid = r.$search_data[r.cur_song_index], param.songid ? param.songid = param.songid.id : window.musicConf && (param.songid = musicConf.songid), param
    }
};
Pianke.contribute = {
    URLMP3: "", init: function () {
        this.bindEvent()
    }, bindEvent: function () {
        var that = this;
        $("#feeling_submit").bind("click", function () {
            var e = "/api/contribute/add.php", t = "feeling", n = $("#title").val(), r = $("#content").val(), i = $.map($("a[name=pics]"), function (e) {
                return $(e).attr("href")
            }).join(","), s = {type: t, title: n, content: r, pic: i, story: $("#story").val()};
            n && r && i && $.post(e, s, function (e) {
                if (e.code == "A00000")return alert("鎶曠ǹ鎴愬姛锛岃嫢琚噰鐢ㄥ皢鍙﹁閫氱煡鎮紝璋㈣阿鎮ㄥ鐗囧埢鐨勬敮鎸侊紒"), setTimeout(function () {
                    location.reload()
                }, "2500"), !0;
                alert(e.data.msg)
            }, "JSON")
        }), $("#appscreen_submit").bind("click", function () {
            var e = "/api/contribute/add.php", t = "appscreen", n = $("#content").val(), r = $.map($("a[name=pics]"), function (e) {
                return $(e).attr("href")
            }).join(","), i = {type: t, content: n, pic: r};
            r && $.post(e, i, function (e) {
                if (e.code == "A00000")return alert("鎶曠ǹ鎴愬姛锛岃嫢琚噰鐢ㄥ皢鍙﹁閫氱煡鎮紝璋㈣阿鎮ㄥ鐗囧埢鐨勬敮鎸侊紒"), setTimeout(function () {
                    location.reload()
                }, "2500"), !0;
                alert(e.data.msg)
            }, "JSON")
        }), $("#livinglab_submit").bind("click", function () {
            var e = "/api/contribute/add.php", t = "livinglab", n = $("#articleurl").val(), r = {
                type: t,
                articleurl: n
            };
            e && $.post(e, r, function (e) {
                if (e.code == "A00000")return alert("鎶曠ǹ鎴愬姛锛岃嫢琚噰鐢ㄥ皢鍙﹁閫氱煡鎮紝璋㈣阿鎮ㄥ鐗囧埢鐨勬敮鎸侊紒"), setTimeout(function () {
                    location.reload()
                }, "2500"), !0;
                alert(e.data.msg)
            }, "JSON")
        }), $(".c_box_cont .add_btn").bind("click", function () {
            var e = $(this), t = e.parent(".c_right"), n = t.find("input").length + 1, r = t.find("p:first").clone();
            r.find(".c_text").val("绗�" + n + "绔犳枃绔犻摼鎺ュ湴鍧€").removeClass("gray").addClass("gray"), e.before(r)
        }), $("#album_submit").bind("click", function () {
            var e = that.check_album();
            e && that.submit_contribute("album", e)
        }), $("input,textarea").live("focus", function () {
            var e = $(this);
            e.data("text") || e.data("text", e.val()), e.hasClass("gray") && e.val("").removeClass("gray")
        }).live("blur", function () {
            var e = $(this);
            e.val() === "" && e.val(e.data("text")).addClass("gray")
        }), $("#uploadfile").bind("click", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1
        }), $.browser.msie ? $("#uploadfile").live("click", function (e) {
            var t = $(this), n = function () {
                t.blur(), that.uploadFile()
            };
            clearInterval(t.data("st")), t.data("st", setInterval(function () {
                i >= 1e3 && clearInterval(t.data("st")), t.val().length > 0 && (n(), clearInterval(t.data("st"))), i += 1
            }, 300))
        }) : $("#uploadfile").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            that.uploadFile()
        }), $(".d_mp3 .close").live("click", function () {
            $(".d_mp3").children().remove(), $(".d_mp3").hide(), $(".inst_add").show(), that.URLMP3 = ""
        }), $("#audio_submit").bind("click", function () {
            var e = $(".case .text_l").val(), t = that.URLMP3;
            if (e && t)var n = {url: e, fileurl: t};
            that.submit_contribute("audio", n)
        }), $("#wordcard_submit").bind("click", function () {
            var bool = !1, num = 0;
            str = $(".case:first input").map(function () {
                var e = this.value, t = /gray/.test(this.className);
                return num += t ? 0 : e.length, (e == "" && bool == 0 || t) && (bool = !0), e.replace(/\s+/g, "")
            }).get().join(","), key = "word";
            if (num > 7)return showerrortip("涓変釜璇嶆€诲叡涓嶈秴杩囦竷涓瓧锛�"), !1;
            if (bool)return showerrortip("鎶辨瓑锛岃妫€鏌ユ偍鐨勬彁浜ゅ唴瀹癸紒"), !1;
            params = eval("({" + key + ':"' + str + '"})'), params.desc = $("#desc").val(), that.submit_contribute("wordcard", params)
        }), $("#subject_submit").bind("click", function () {
            var e = $(".image img");
            if (!e.length)return showerrortip("鎶辨瓑锛岃妫€鏌ユ偍鐨勬彁浜ゅ唴瀹癸紒"), !1;
            var t = e.map(function () {
                return this.src
            }).get().join(","), n = {imglist: t};
            type = $(this).hasClass("background_add") ? "background" : "subject", that.submit_contribute(type, n)
        }), $(".pic .close").live("click", function () {
            location.pathname == "/contribute/album.php" && $(this).parents("#album_img").hide(), $(this).parent().remove()
        }), $("#picfile").bind("click", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1
        }), $.browser.msie ? $("#picfile").live("click", function (e) {
            var t = $(this);
            clearInterval(t.data("st")), t.data("st", setInterval(function () {
                i >= 1e3 && clearInterval(t.data("st")), t.val().length > 0 && (t.blur(), bool = $(this).hasClass("background_add"), that.uploadImage(bool), clearInterval(t.data("st"))), i += 1
            }, 300))
        }) : $("#picfile").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            if ($(".pic li").length >= 5)return !1;
            if (location.pathname == "/contribute/album.php" && $(".pic li").length >= 1)return !1;
            bool = $(this).hasClass("background_add"), that.uploadImage(bool)
        })
    }, uploadImage: function (e) {
        var t = this, n = $(".add_inst img"), r = $("#picfile").parents(".case");
        n.show(), data = e ? {type: "background"} : {}, location.pathname == "/contribute/album.php" && (data = {type: "album"}), $.ajaxFileUpload({
            url: "/api/posts/uploadimg",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (e) {
                url = e.data.picurl, n.hide(), $("a[name=pics]").remove(), e.code == "A00000" ? r.after('<a class="blue" name="pics" target="_blank" href="' + url + '">' + "鐐瑰嚮鏌ョ湅銆�" + "</a>") : showerrortip(PKINFO.eCode[e.code])
            },
            error: function (e, t, i) {
                url = e.data.picurl, $("a[name=pics]").remove(), n.hide(), e.responseText && (e = JSON.parse(e.responseText), e.code == "A00000" ? r.after('<a class="blue" name="pics" target="_blank" href="' + url + '">' + "鐐瑰嚮鏌ョ湅銆�" + "</a>") : showerrortip(PKINFO.eCode[e.code]))
            }
        })
    }, afterUpload: function (data) {
        data = eval("(" + data.responseText + ")");
        if (data.code != "A00000")alert(PKINFO.eCode[data.code]); else {
            var src = data.data.picurl, inner = '<a href="javascript:void(0);" class="close"></a><div class="image"><p><img src="' + src + '" /></p></div>', el = $("<li></li>").html(inner);
            $("ul.pic").append(el)
        }
    }, submit_contribute: function (e, t) {
        t.type = e, $.post("/api/contribute/add", t, function (t) {
            switch (t.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    return alert("鎶曠ǹ鎴愬姛锛岃嫢琚噰鐢ㄥ皢鍙﹁閫氱煡鎮紝璋㈣阿鎮ㄥ鐗囧埢鐨勬敮鎸侊紒"), e == "album" && (location.href = "/album/"), !0;
                default:
                    return showerrortip(t.data.msg), !1
            }
        }, "json")
    }, uploadFile: function () {
        var e = this, t = $(".add_inst img");
        t.show(), $.ajaxFileUpload({
            url: "/api/contribute/uploadfile.php",
            secureuri: !1,
            fileElementId: "uploadfile",
            dataType: "json",
            type: "post",
            success: function (n, r) {
                t.hide(), e.afterUploadMp3(n)
            },
            error: function (n, r, i) {
                t.hide(), e.afterUploadMp3(n)
            }
        })
    }, afterUploadMp3: function (e) {
        if (e.code != "A00000")alert(PKINFO.eCode[e.code]); else {
            this.URLMP3 = e.data.fileurl;
            var t = e.data.filename, n = '<a href="javascript:void(0);" class="close"></a><p>' + t + "</p>";
            $(".inst_add").hide(), $(".d_mp3").append(n).show()
        }
    }, check_album: function () {
        var e = $("#title").val(), t = $("#content").val(), n = [], r = $(".c_box_cont p .c_text"), i = !0, s = $("#album_img .image img").attr("src");
        return e.length == 0 || e.length > 30 ? (text = e.length == 0 ? "鏍囬涓嶈兘涓虹┖" : "鏍囬闀垮害涓嶈兘澶т簬30", showerrortip(text), !1) : t.length == 0 ? (showerrortip("涓撹緫浠嬬粛涓嶈兘涓虹┖"), !1) : ($.each(r, function () {
            url = $(this).val(), url.length ? n.push(url) : i = !1
        }), i ? {
            title: e,
            content: t,
            finish: $(".c_right select").val(),
            contentidlist: n.join(","),
            img: s
        } : (showerrortip("鍒嗛泦鍒楄〃杩炴帴鍦板潃涓嶈兘涓虹┖"), !1))
    }
};
Pianke.home = {
    RANDOM_CHANGE: "/api/home/getrecommend.php",
    GET_FEED_URL: "/api/home/getfeed",
    SET_FEED_URL: "/api/home/setfeedtype",
    GET_FEEDCOUNT: "/api/home/getaddednumber",
    GET_NEW_FEED: "/api/home/getaddedfeed",
    GET_INTERESTED: "/api/operations/getInterestedList.php",
    on_slide: !1,
    fall_canload: !0,
    cur_page: 1,
    active_st: null,
    init: function () {
        var e = this;
        e.bindEvent(), e.load_music_list(), e.active_st = setInterval(function () {
            e.get_new_feedcount()
        }, 3e4), e.word_slider_st = setTimeout(function () {
            e.word_slider(1)
        }, 1e4)
    },
    bindEvent: function () {
        var e = this;
        $(window).scroll(function () {
            $(document).height() <= $(window).height() + $(window).scrollTop() + 100 && e.fall_canload && e.load_more()
        }), $("#recommend_user .close").bind("click", function () {
            $("#recommend_user").hide()
        }), getCookie("nofeedtips") != "false" ? $(".moving_none .close").bind("click", function () {
            $(".moving_none").hide(), setCookie("nofeedtips", 1)
        }) : $(".moving_none").hide(), $(".moving_more .more_left .more_btn").live("click", function () {
            $(this).parents(".more_left").find(".active_info").toggle()
        }), $("#recommend_user .change_btn").bind("click", function () {
            $.getJSON("/api/home/getrecommend.php", {}, function (e) {
                console.log(e), e.code === "A00000" && $("#recommend_user .contact_box").html(e.data.data.html)
            })
        }), $(".approve_join").bind("click", function () {
        }), $(".moving_none").bind("click", function () {
            e.render_new_feed()
        }), $("#save_feed_type").bind("click", function () {
            var t = $.map($("input[name=feedtype]:checked"), function (e) {
                return e.value
            });
            t.length ? $.post(e.SET_FEED_URL, {feedtypes: t}, function (e) {
                e.code === "A00000" ? alert("淇濆瓨鎴愬姛") : showerrortip(e.data.msg)
            }, "json") : msg_modal("璇疯嚦灏戦€変竴椤�", 5e3)
        }), $(".delfav").live("click", function () {
            var e = $(this), t = "/api/fav/delfav.php", n = {contentid: e.attr("data-id")};
            PKINFO.islogin != 1 && openlogintip(), confirm("纭鍙栨秷鏀惰棌锛�", function () {
                $.post(t, n, function (t) {
                    t.code === "A00000" ? e.parents(".create_content").slideUp(function () {
                        $(this).remove()
                    }) : showerrortip(t.data.msg)
                }, "json")
            })
        }), $("#in_group").live("click", function () {
            $.getJSON(e.GET_INTERESTED, {}, function (e) {
                e.code === "A00000" && ($(".maybe_interested ul").html(e.data.data.html), $(".maybe_interested li").length || $(".maybe_interested").fadeOut(function () {
                    $(this).remove()
                }))
            })
        }), $(".empty_draft").bind("click", function (e) {
            var t = this.href;
            e.preventDefault(), confirm("纭畾瑕佹竻绌烘墍鏈夎崏绋匡紵", function () {
                location.href = t
            })
        }), $(".topnav li").mousemove(function () {
            var e = $(this), t = e.index();
            $(".c_name_idea ul").hide().filter(":eq(" + t + ")").show(), $(".topnav li a").removeClass("current"), e.find("a").addClass("current")
        }), $(".cutover li a").bind("click", function () {
            var t = $(this), n = t.parent().index();
            t.hasClass("current") || e.word_slider(n)
        }), $(".switch_but .but_ico").bind("click", function () {
            var t = $(this).hasClass("up");
            e.suggest_slider(t)
        })
    },
    suggest_slider: function (e, t, n) {
        var r = t || $(".interesting ul"), i = r.filter(":visible"), s = e ? i.prev() : i.next(), o = n && n.width() * (e ? -1 : 1) || $(".interesting").width() * (e ? -1 : 1), u = this;
        if (u.on_slide)return !1;
        u.on_slide = !0, s.length == 0 && (s = e ? r.filter(":last") : r.filter(":first")), s.css("left", o).show().animate({left: 0}, 1e3, function () {
            u.on_slide = !1
        }), i.animate({left: -o}, 1e3, function () {
            i.hide()
        })
    },
    word_slider: function (e) {
        var t = this;
        $(".cutover li a").removeClass("current").filter(":eq(" + e + ")").addClass("current"), $(".card_slider li").filter(".current").fadeOut().removeClass("current").end().filter(":eq(" + e + ")").fadeIn().addClass("current"), e == $(".cutover li").length - 1 ? e = 0 : e += 1, clearTimeout(t.word_slider_st), t.word_slider_st = setTimeout(function () {
            t.word_slider(e)
        }, 1e4)
    },
    load_more: function () {
        var e = this, t;
        if (!e.fall_canload || location.pathname.split("/")[1] != "home")return !1;
        e.fall_canload = !1, e.cur_page += 1, $(".main_left .loading").show(), $.getJSON(e.GET_FEED_URL, {
            page: e.cur_page,
            _: Math.floor(Math.random() * 999999)
        }, function (n) {
            t = n.data.data.html, $(".main_left .loading").hide(), t.length ? (e.fall_canload = !0, $(".main_cont").append($(t)), e.load_music_list()) : e.fall_canload = !1
        })
    },
    load_music_list: function () {
        var e = this, t = Pianke.player, n, r;
        $.each($(".player"), function () {
            r = $(this), r.data("on_play") || (n = r.attr("data-url"), Pianke.player.init_player(n, r))
        })
    },
    get_new_feedcount: function () {
        var e = this, t = $(".moving_none");
        $.getJSON(e.GET_FEEDCOUNT, {_: (new Date).valueOf()}, function (e) {
            e.code === "A00000" ? e.data.data.total ? t.show().find("span").html(e.data.data.total) : t.hide().html() : showerrortip(e.data.msg)
        })
    },
    render_new_feed: function () {
        var e = this, t = $(".moving_none");
        $.getJSON(e.GET_NEW_FEED, {_: (new Date).valueOf()}, function (e) {
            e.code === "A00000" ? (console.log(e), e.data.data.html && t.after(e.data.data.html), t.hide()) : showerrortip(e.data.msg)
        })
    }
};
Pianke.wordcard = {
    list_on_play: !1,
    list_play_st: null,
    CARD_MAX_LEN: 1e3,
    ITEM_SIZE: {height: 310, width: 270},
    ISLOADMORE: !0,
    scrollLoad: !0,
    UP_LOAD_IMG: !0,
    fall_canload: !0,
    cur_column: 0,
    GET_CARD_URL: "/api/card/getcard.php",
    GET_PAGE_URL: "/api/card/getPagecard.php",
    ADD_CARD_URL: "/api/card/addcard",
    cur_page: 1,
    load_page: 1,
    waterfall_pos: [],
    init: function () {
        var e = this;
        e.bindEvent(), e.recount_text(), $(".make_img").length && e.init_waterfall(), location.pathname.split("/")[1] == "wordcard" && location.pathname.split("/")[2] != "before" && location.pathname.split("/")[3] != "publish" && $("#wordcardid").val() && $(document).height() <= parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500 && e.autoLoading(), location.pathname.split("/")[1] == "card" && (Pianke.comment.getcomment($(".entry"), 1, 1, !0), $(".digest_main .pages a").live("click", function (t) {
            t.preventDefault();
            var n = $(this), r = n.attr("href"), i = n.hasClass("up") || n.hasClass("next");
            i ? e.cur_page += n.hasClass("next") ? 1 : -1 : e.cur_page = parseInt(n.text(), 10), e.load_fall_page(r)
        })), e.list_play_st = setInterval(function () {
            var t = $(".slide-list .current").index(), n = t + 1, r = $(".slide-list li").length;
            n >= r && (n = 0), e.page_change(t, n)
        }, 1e4)
    },
    bindEvent: function () {
        var e = this;
        $(window).resize(function () {
            e.reset_position(0, $(".make_img li").length)
        }), $(window).bind("scroll", function () {
            e.autoLoading()
        }), $(window).scroll(function () {
            $(document).height() <= $(window).height() + $(window).scrollTop() + 20 && e.fall_canload && e.fall_load_more()
        }), $(".slide-btns").find(".slide-prev,.slide-next").bind("click", function () {
            var t = $(this), n = t.hasClass("slide-prev"), r = $(".slide-list .current").index(), i = r + (n ? -1 : 1), s = $(".slide-list li").length;
            i < 0 ? i = s - 1 : i >= s && (i = 0), e.page_change(r, i)
        }), $(".slide-controls .dots li").bind("click", function () {
            var t = $(this), n = $(".slide-list .current").index(), r = $(this).index();
            if (t.hasClass("active"))return;
            e.page_change(n, r)
        }), $(".special_icon").hover(function () {
            $(this).find(".s_cont").show(200)
        }, function () {
            $(this).find(".s_cont").hide(200)
        }), $(".make_img li").live("click", function () {
            var e = $(this).attr("data-url");
            window.open(e)
        }), $(".d_img_layer").live("mouseenter", function () {
            $(this).find(".cover").fadeIn()
        }).live("mouseleave", function () {
            $(this).find(".cover").hide()
        }), $(".w_card .start_create").click(function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1
        }), $("#currenloadpageno").val((Number($("#currenpageno").val()) - 1) * 3 + 1), $(".write textarea").autosize && $(".write textarea").autosize(), $(".card_editor .write textarea").bind("keydown", function (e) {
            var t = $(this).val(), n = t.length;
            t.split("\n").length >= 50 && e.keyCode == 13 && e.preventDefault()
        }).bind("keyup", function () {
            var t = e.recount_text();
            t > e.CARD_MAX_LEN ? $("#contentlengthnum").parent().addClass("bold_red") : $("#contentlengthnum").parent().removeClass("bold_red")
        }), $(".hot_btn .r_icon").bind("click", function () {
            var e = $(this), t = e.hasClass("down"), n = $(".card_right .c_right_img ul"), r = n.width(), i = 86, s = $(".c_right_img li").length - 2, o = n.data("num") || 0;
            if (n.data("not_run"))return !1;
            n.data("not_run", !0), o += t ? 1 : -1, o = o < 0 ? s : o, o = o >= s ? 0 : o, n.data("num", o).animate({left: -o * i}, 200, function () {
                n.data("not_run", !1)
            })
        }), $(".send_box .invite_btn").bind("click", function () {
            $(".u_text").show()
        }), $(".submit_btn a").bind("click", function () {
            e.submit_card()
        }), $(".more_operate .fav,.icon .fav").live("click", function () {
            PKINFO.islogin != 1 && openlogintip();
            var e = $(this), t = e.hasClass("on"), n = e.parents(".icon").attr("data-id") || e.attr("data-id"), r = t ? "/api/fav/delfav.php" : "/api/fav/addfav.php", i = {contentid: n};
            $.post(r, i, function (n) {
                if (n.code != "A00000")return alert(n.data.msg), !1;
                e.toggleClass("on"), num = n.data.data.fav, num == 0 && (num = ""), num_text = t ? "<span class='number'>" + num + "</span>" : "<span class='number'>" + num + "</span>", inner = t ? "鏀惰棌" + num_text : "鍙栨秷鏀惰棌" + num_text, e.html(inner)
            }, "json")
        }), $(".detailfav").live("click", function () {
            PKINFO.islogin != 1 && openlogintip();
            var e = $(this), t = e.text(), n = e.attr("data-id"), r = t == "鏀惰棌", i = r ? "/api/fav/delfav.php" : "/api/fav/addfav.php", s = {contentid: n};
            $.post(i, s, function (t) {
                return t.code != "A00000" ? (alert(t.data.msg), !1) : (e.text(r ? "鍙栨秷鏀惰棌" : "鏀惰棌"), !1)
            }, "json")
        }), $(".delcntcard").live("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            var e = $(this).attr("data-id");
            confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゅ紶Card锛�", function () {
                var t = {contentid: e};
                $.post("/api/card/delcard.php", t, function (e) {
                    return e.code != "A00000" ? (alert(e.data.msg), !1) : (window.location.href = e.data.redirect, !1)
                }, "json")
            })
        }), $("#posts_style a").live("click", function () {
            $("#posts_style a").removeClass("on"), $(this).addClass("on")
        }), $(".index_title .mainnav a").bind("click", function () {
            e.ISLOADMORE = !0;
            var t = $(this).attr("s-key");
            t && ($(".index_title .mainnav a").removeClass("current"), $(this).addClass("current"), $("#currentstyle").val(t), e.clickCardCount("style", t), e.loadselectposts(), window.scroll(0, $(".index_title").offset().top - 50))
        }), $(".contain .cardlist").hover(function () {
            $(this).find(".ico").show()
        }, function () {
            $(this).find(".ico").hide(), $(".icon6").removeClass("curon"), $(".icon6").parents(".cont").removeAttr("style")
        }), $(".icon6").live("mouseover", function () {
            $(this).parents(".cont").css("z-index", "90"), $(this).addClass("curon").css("z-index", "99")
        }), $(".cardxq .icon6, .cardxq_1 .icon6").live("mouseout", function () {
            $(this).removeClass("curon").removeAttr("style"), $(this).parents(".cont").removeAttr("style")
        }), $(".hour").hover(function () {
            $(this).find("ul").show().parents(".newstyle").addClass("zindex")
        }, function () {
            $(this).find("ul").hide().parents(".newstyle").removeClass("zindex")
        }), $(".hour_new a").bind("click", function () {
            e.ISLOADMORE = !0, hot = $(this).attr("hotitem"), $(".hour_new a").removeClass("on"), $(this).addClass("on"), $("#currenthotitem").val(hot), e.clickCardCount("hotitem", hot), e.loadselectposts()
        }), $(".post_item .clo").live("click", function () {
            $(this).next().show()
        }), $(".post_item .cancel").live("click", function () {
            $(this).parents(".delete").hide()
        }), $(".post_item .submit_del").live("click", function () {
            var t = $(this), n = t.attr("data-id");
            e.delposts(n, t)
        }), $(".card_load").live("click", function () {
            e.loadmorewordcard($(this).attr("data-type"))
        }), $(".profile_card_load").live("click", function () {
            e.loadmoreprofileposts("new", $(this).attr("data-id"))
        }), $(".detail_list").length && $(window).unbind("scroll"), $(".content .increase .big, .content .increase img").live("click", function () {
            var e = $("a.increase img:first").attr("s_img"), t = $(".layer_pop.d_img img").attr("src", e), n = $(window).width(), r = $(window).height();
            window_per = n * (r / n), t.load(function () {
                var e = t.width();
                e > window_per && (e = window_per, t.width(e)), t.show().css({
                    "margin-top": -t.attr("height") / 2,
                    "margin-left": -e / 2
                })
            }), t.parents(".layer_pop").show()
        }), $(".layer_pop.d_img").click(function (e) {
            $(this).hide()
        }), e.multi_bind()
    },
    multi_bind: function () {
        var e = this;
        $(".add_cont .close").live("click", function () {
            $(this).parents(".add_cont").hide(), $(this).parent().find("img").attr("src", ""), $(this).parent().hasClass("a_emerge") && (e.UP_LOAD_IMG = !1)
        }), $.browser.msie ? ($(".add_images #picfile").live("click", function (t) {
            var n = $(this), r = 0, i = function () {
                n.blur(), $(".add_cont .a_image").parent().show(), e.UP_LOAD_IMG = !0, e.uploadImage()
            };
            clearInterval(n.data("st")), n.data("st", setInterval(function () {
                r >= 1e3 && clearInterval(n.data("st")), n.val().length > 0 && (i(), clearInterval(n.data("st"))), r += 1
            }, 300))
        }), $("#picfile.uploadcard").die("click").live("click", function () {
            var t = $(this), n = 0, r = function () {
                t.blur(), e.uploadCardImage()
            };
            clearInterval(t.data("st")), t.data("st", setInterval(function () {
                n >= 1e3 && clearInterval(t.data("st")), t.val().length > 0 && (r(), clearInterval(t.data("st"))), n += 1
            }, 300))
        })) : ($(".add_images #picfile").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            $(".add_cont .a_emerge").parent().show(), e.UP_LOAD_IMG = !0, e.uploadImage()
        }), $("#picfile.uploadcard").die("change").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadCardImage()
        })), $(".card_editor .essay h2").bind("click", function () {
            $(".card_editor .essay .pen").toggle()
        }), $(".card_editor .storystyle .style_more a").bind("click", function () {
            var e = $(this).attr("data-id");
            $(".card_editor .storystyle .style_more a").removeClass("on"), $(this).addClass("on"), $(".card_editor .storystyle .more_tag .m_tag_cont").hide().filter('[data-id="' + e + '"]').show().end().find("a").removeClass("on")
        }), $(".card_editor .title input").bind("focus", function () {
            var e = $(this), t = e.val();
            t == "濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�" && e.val("")
        }).bind("blur", function () {
            var e = $(this), t = $.trim(e.val());
            t == "" && $(this).val("濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�")
        }), $(".card_editor .storystyle .more_tag .m_tag_cont a").bind("click", function () {
            if ($(".m_tag_cont a.on").length > 3)return !1;
            $(this).toggleClass("on")
        })
    },
    fall_load_more: function () {
        var e = this;
        if (!e.fall_canload || location.pathname.split("/")[1] != "card")return !1;
        e.fall_canload = !1, e.load_page += 1, $.getJSON(e.GET_CARD_URL, {
            page: e.cur_page,
            load_page: e.load_page,
            sort: $(".menu_nav .on").attr("data-type"),
            _: Math.floor(Math.random() * 999999)
        }, function (t) {
            t.data.data.list == "" ? (showerrortip("宸茬粡琚綘娴忚瀹屼簡锛屼紤鎭竴涓嬪惂锝�"), e.fall_canload = !1) : (e.fall_canload = !0, t.data.data.page && ($(".digest_main").append($(t.data.data.page)), e.fall_canload = !1), t = t.data.data.list, e.add_waterfall(t))
        })
    },
    uploadCardImage: function () {
        var e = this, t = "/api/card/uploadimg", n = $(".loading_img"), r = $(".u_pic img:first");
        n.show(), $.ajaxFileUpload({
            url: t,
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (t) {
                n.hide(), console.log(t), t.code != "A00000" ? showerrortip(t.data.msg) : e.UP_LOAD_IMG && (r.attr("src", t.data.picurl), $(".u_pic").addClass("already_add"))
            },
            error: function (e, t, r) {
                n.hide()
            }
        })
    },
    uploadImage: function () {
        var e = this, t = $(".add_cont .a_emerge").parent(), n = $(".add_cont:first");
        t.show(), $.ajaxFileUpload({
            url: "/api/wordcard/uploadimg.php",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (r) {
                t.hide(), r.code != "A00000" ? alert(PKINFO.eCode[r.code]) : e.UP_LOAD_IMG && n.show().find("img").attr("src", r.data.picurl).end().find("p a").attr("href", r.data.picurl)
            },
            error: function (e, n, r) {
                t.hide(), $(".add_cont .a_image:first img").attr("src") != "" && $(".add_cont .a_image").parent().show()
            }
        })
    },
    submit_card: function () {
        var e = this;
        if (!$(".u_pic").hasClass("already_add"))return showerrortip(PKINFO.eCode.A01405), !1;
        $.post(e.ADD_CARD_URL, {
            picurl: $(".u_pic img:first").attr("src"),
            content: $(".true_enter textarea").val(),
            emaillist: $(".u_text textarea").val()
        }, function (e) {
            switch (e.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    return location.href = e.data.url, !0;
                default:
                    return showerrortip(e.data.msg), !1
            }
        }, "json")
    },
    clickCardCount: function (e, t) {
        var n = {type: e, value: t};
        $.post("/api/pdata/addpostscount.php", n, function (e) {
            return "A00000" == e.code ? !0 : !1
        }, "json")
    },
    init_waterfall: function () {
        var e = cardList;
        this.add_waterfall(e)
    },
    add_waterfall: function (e) {
        var t = "", n = $(".make_img li").length, r = 0;
        for (i in e)t += this.create_card_item(e[i]), r++;
        t = $(t), $(".make_img ul").append(t), this.reset_position(n, r)
    },
    reset_position: function (e, t) {
        var n = this.ITEM_SIZE, r = $(".make_img").width(), s = e + t, o = Math.floor(r / n.width), u = Math.floor(s / o) + (s % o ? 1 : 0), a = (r - o * n.width) / 2;
        for (i = e; i < s; i++)_top = Math.floor(i / o), $(".make_img li:eq(" + i + ")").css({
            top: _top * (n.height + 18) + 50,
            left: i % o * n.width + a
        });
        $(".make_img").height(u * (n.height + 18) + 50)
    },
    loadselectposts: function () {
        var e = this, t = $("#currenpageno").val(), n = $("#wordcardid").val(), r = $("#currentstyle").val(), i = $("#currenthotitem").val(), s = $("#currenthascard").val(), o = {
            wordcardid: n,
            page: 1,
            style: r,
            hotitem: i,
            hascard: s
        };
        return $.get("/api/wordcard/getposts.php", o, function (t) {
            if (t.code != "A00000")return !1;
            $("#currenpageno").val(1), $("#currenloadpageno").val(1);
            if (t.data.data.curtotal < 1) {
                e.ISLOADMORE = !1;
                var n = '<div class="cont"><div class="none">鏈潯鏍囩鏆傛椂杩樻病鏈夊唴瀹癸紒</div> <div class="clear"></div></div>';
                return $("#posts_showlist").html(n), $("#errormsg").hide(), !0
            }
            t.data.data.curtotal < 15 ? (e.ISLOADMORE = !1, $("#errormsg").hide()) : $("#errormsg").show(), $("#posts_showlist").html(t.data.data.html)
        }, "json"), !0
    },
    submitposts: function () {
        if (!addpostsswitch)return !1;
        var e = $("#wordcardid").val(), t = $("#contentid").val(), n = $(".card_editor .write textarea").val(), r = $(".storystyle a.on").attr("s-key"), i = $(".card_editor .title input").val() == "濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�" ? "" : $(".card_editor .title input").val(), s = $(".essay .pen textarea").val(), o = $(".a_image img:first").attr("src"), u = this, a = [], f = $(".card_editor .storystyle .more_tag .m_tag_cont a.on");
        f.each(function (e) {
            a.push($(this).attr("key"))
        });
        if ("" == e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
        if ("" == n)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
        "" == r && (r = 1);
        if (!f.length)return showerrortip("鎶辨瓑锛岃繕娌℃湁閫夋嫨浣滃搧椋庢牸锛�"), !1;
        var l = {
            wordcardid: e,
            content: n,
            style: r,
            title: i,
            remark: s,
            img: o,
            tags: a
        }, c = "/api/wordcard/addposts.php";
        location.href.split("/")[location.href.split("/").length - 1] == "update" && (c = "/api/wordcard/updateposts", l.contentid = t), addpostsswitch = !1;
        var h = $(".card_editor .write textarea").val(), p = h.length;
        if (p > u.CARD_MAX_LEN) {
            msg_modal("鍐呭涓嶈兘澶т簬1000瀛�", 2e3), addpostsswitch = !0;
            return
        }
        this.submit_wordcard(c, l)
    },
    loadmoreposts: function (e) {
        ShareClickCount("wordcard");
        var t = this, n = $("#currenloadpageno").val(), r = Number(n) + 1, i = $("#currenpageno").val(), s = $("#wordcardid").val(), o = $("#currentstyle").val(), u = $("#currenthascard").val();
        if (s) {
            if ("" == i || "undefined" == typeof i || "undefined" == typeof e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
            if (!t.ISLOADMORE)return !1;
            t.ISLOADMORE = !1, $("#submore").text("鏁版嵁鍔犺浇涓�,璇风◢鍊�...").show(), $(".wordcard_loading").show();
            var a = {wordcardid: s, page: i, load_page: r, sort: e, style: o, hascard: u};
            $.ajax({
                type: "GET",
                url: "/api/wordcard/getposts.php",
                dataType: "json",
                data: a,
                cache: !1,
                success: function (e) {
                    e ? e.code != "A00000" ? $("#submore").hide() : ($("#currenloadpageno").val(r), $(".create_content:last").after(e.data.data.html), $("#submore").hide(), t.ISLOADMORE = !0, t.scrollLoad = !0, e.data.data.curtotal < 15 ? (t.ISLOADMORE = !1, $("#errormsg").hide()) : $("#errormsg").show()) : $("#submore").unbind("click").html("鏁版嵁鍔犺浇寮傚父,<a href='javascript:'>閲嶆柊鍔犺浇</a>").click(function () {
                        $(this).unbind("click"), t.loadmoreposts("")
                    }), $(".wordcard_loading").hide()
                },
                error: function () {
                    $(".wordcard_loading").hide(), $("#submore").unbind("click").html("鏁版嵁鍔犺浇寮傚父,<a href='javascript:'>閲嶆柊鍔犺浇</a>").click(function () {
                        $(this).unbind("click"), t.loadmoreposts("")
                    })
                }
            })
        }
        return !0
    },
    loadmorewordcard: function (e) {
        ShareClickCount("historyCard");
        var t = $("#currenpageno").val(), n = Number(t) + 1;
        return $("#submore").hide(), $(".wordcard_loading").show(), $.get("/api/wordcard/getwordcards.php", {
            page: n,
            sort: e
        }, function (e) {
            $(".wordcard_loading").hide(), $("#submore").show();
            if (e.code != "A00000")return $("#submore").html("璇烽噸璇曪紝鍔犺浇鏇村"), !1;
            if (e.data.data.curtotal < 1)return $("#submore").html('<span class="gray">鎶辨瓑锛屽凡缁忔病鏈夋洿澶�</span>'), !0;
            $("#currenpageno").val(n), $("#wordcardlist li:last").after(e.data.data.list), e.data.data.curtotal < 21 ? $("#errormsg").hide() : $("#errormsg").show()
        }, "json"), !0
    },
    loadmoreprofileposts: function (e, t) {
        var n = $("#currenpageno").val(), r = Number(n) + 1;
        return "" == r || "undefined" == typeof r || "undefined" == typeof e || "" == t || "undefined" == typeof t ? (showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1) : ($("#submore").hide(), $(".wordcard_loading").show(), $.get("/api/wordcard/getuserposts.php", {
            page: r,
            sort: e,
            uid: t,
            "class": "posts"
        }, function (e) {
            if (e.code != "A00000")return $("#submore").html("璇烽噸璇曪紝鍔犺浇鏇村"), !1;
            if (e.data.data.curtotal < 1)return $("#submore").html('<span class="gray">鎶辨瓑锛屽凡缁忔病鏈夋洿澶�</span>'), !0;
            $("#currenpageno").val(r), $(".create_content::last").after(e.data.data.html), e.data.data.curtotal < 15 ? $("#errormsg").hide() : $("#errormsg").show(), $(".wordcard_loading").hide(), $("#submore").show()
        }, "json"), !0)
    },
    autoLoading: function () {
        var e = 0, t = this;
        totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500, $(document).height() <= totalheight && !$(".card_posts_pagination .pages a").length && t.scrollLoad && t.ISLOADMORE && (t.scrollLoad = !1, t.loadmoreposts(""))
    },
    recount_text: function () {
        var e = $("#contentlengthnum"), t = $(".card_editor .write textarea"), n = 0;
        return e.length && t.length && (n = t.val().length, e.text(n)), n
    },
    load_fall_page: function (e) {
        var t = this;
        $(".digest_main .pages").remove(), $(".make_img").height(0).find("ul").empty(), t.load_page = 1, $.getJSON(t.GET_PAGE_URL + e + "&load_page=" + t.load_page, {_: Math.floor(Math.random() * 999999)}, function (e) {
            if (e.code != "A00000")return alert(e.data.msg), !1;
            list = e.data.data.list, t.fall_canload = !0, t.add_waterfall(list), e.data.data.page && ($(".digest_main").append(e.data.data.page), t.fall_canload = !1)
        })
    },
    create_card_item: function (e) {
        return '<li data-url="' + e.content_url + '"><div class="img_middle"><div class="d_img_cont"><div class="d_img_layer"><img src="' + e.cardExt.picurl_s + '"><div class="cover"><div class="cover_bg"></div><div class="cover_cont"><p class="w_cont">' + e.content + '</p><p class="come">by锛�<a href="javascript:void(0);" class="blue">' + e.userinfo.uname + '</a></p><p class="d_time">' + e.addtime_f + '</p></div></div></div></div></div><div class="img_idea"><a href="javascript:void(0);" class="m_icon look">' + e.counterList.view + '</a><a href="javascript:void(0);" class="m_icon write">' + e.counterList.comment + '</a><a href="javascript:void(0);" class="m_icon like">' + e.counterList.like + "</a></div></li>"
    },
    ajax_load: function (e) {
        var t = this, n = "/api/wordcard/getNpagePosts.php", r = $("#wordcardid").val(), i = $("#currentstyle").val(), s = $("#currenthotitem").val(), o = e.text();
        e.hasClass("next") ? o = Number($(".pages .on").text()) + 1 : e.hasClass("up") && (o = Number($(".pages .on").text()) - 1), t.ISLOADMORE = !1;
        var u = {page: o, wordcardid: r, style: i, hotitem: s};
        $.post(n, u, function (e) {
            if (e.code != "A00000")return !1;
            $("#currenpageno").val(o), $(".cont, .pages").remove(), window.scroll(0, $(".index_title").offset().top - 50), $("#posts_showlist").html(e.data.data.html), $("#currenloadpageno").val(e.data.data.load_page), t.ISLOADMORE = !0
        }, "json")
    },
    page_change: function (e, t) {
        var n = e > t, r = 700, i = $(".slide-list li"), s = i.filter(":eq(" + e + ")"), o = i.filter(":eq(" + t + ")"), u = this;
        if (u.list_on_play)return;
        u.list_on_play = !0, s.removeClass("current"), o.addClass("current"), $(".slide-controls .dots li").removeClass("active").filter(":eq(" + t + ")").addClass("active"), s.fadeOut(r, function () {
            u.list_on_play = !1
        }), o.fadeIn(r)
    }
};
Pianke.write = {
    ADD_POST_URL: "/api/posts/add",
    DEL_POST_URL: "/api/posts/del",
    UPDATE_POST_URL: "/api/posts/update",
    EXCUTE_URL: "/api/common/getUrlResponse.php",
    SEARCH_URL: "http://www.xiami.com/web/search-songs",
    XIAMI_GETSONGS: "http://www.xiami.com/web/get-songs",
    MAX_TITLE_LENGTH: 30,
    TAG_MAX_LENGTH: 3,
    SEARCHLIST_ID: "_SEARCHLIST_ID_",
    on_writing: /writing/.test(location.pathname),
    cur_request: null,
    cur_search_st: null,
    $search_data: [],
    $search_page: 1,
    cur_song_index: null,
    can_search: !0,
    search_ended: !1,
    search_item_limit: 10,
    init: function () {
        if ($("#editor").length || this.on_writing)this.bindEvent(), Pianke.user.bindChooselog(), UE && UE.getEditor("editor", {
            initialFrameWidth: "100%",
            autoHeightEnabled: !0
        });
        window.musicConf && ($(".add_music_btn").hide(), this.render_xiamiplayer(musicConf.songid, $(".editor_music"), musicConf.isupdate))
    },
    bindEvent: function () {
        var e = this;
        $(".tag_delete").live("click", function () {
            $(this).parent().remove(), $(".tag_delete").length || $(".tag_choose").find("p,input").toggle()
        }), $(".title_input").bind("focus", function () {
            $(this).removeClass("gray")
        }), $.browser.msie ? $("#picfile").live("click", function (t) {
            var n = $(this), r = 0, i = function () {
                n.blur(), $(".add_cont .a_image").parent().show(), e.UP_LOAD_IMG = !0, e.uploadImage()
            };
            clearInterval(n.data("st")), n.data("st", setInterval(function () {
                r >= 1e3 && clearInterval(n.data("st")), n.val().length > 0 && (i(), clearInterval(n.data("st"))), r += 1
            }, 300))
        }) : $("#picfile").die("change").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadImage()
        }), $(".tag_choose").bind("click", function () {
            var e = $(this), t = e.find("input");
            e.find("p").hide(), t.length || (t = $("<input/>"), e.append(t)), t.show().focus()
        }), $(".editor_tag .tag_name").bind("click", function () {
            var t = !1;
            $.each($(".tag_choose .tag_name"), function () {
                if (t)return;
                inner_text = $(this).text(), $.each($(".editor_tag .tag_name"), function () {
                    $(this).text() == inner_text && (t = !0);
                    if (t)return
                })
            });
            if (t) {
                alert("鍙兘閫夋嫨涓€涓被鍨嬫爣绛�!");
                return
            }
            var n = $(".tag_choose"), r = $(this).text(), i = $(e.create_tag(r)), s = n.find("input");
            s.length || (s = $("<input/>"), n.append(s)), s.before(i), n.find("p").hide()
        }), $(".tag_choose input").live("keyup", function (t) {
            var n = $(this);
            if (t.keyCode == 13) {
                text = $.trim(n.val()), tag_el = $(e.create_tag(text)), len = text.length;
                if (len) {
                    if (len > 8)return alert("鏍囩闀垮害涓嶈兘瓒呰繃鍏釜瀛�"), !1
                } else alert("鏍囩闀垮害涓嶈兘涓虹┖");
                n.before(tag_el), n.val("").focus()
            }
        }), $(".send").bind("click", function () {
            if (!$("#isupdate").val())e.show_vcode(); else {
                var t = e.get_submit_param();
                t && e.submit_post(t)
            }
        }), $("#copyright_desc").focus(function () {
            $(this).hasClass("gray") && $(this).val("").removeClass("gray")
        }), $(".layer_vcode").find(".close").bind("click", function () {
            $(".layer_vcode").hide()
        }).end().find(".the_code a").bind("click", function () {
            $(".the_code img").attr("src", "/api/posts/getvcode.php")
        }).end().end().find(".submit_code a").bind("click", function () {
            var t = e.get_submit_param();
            t.vcode = $(".valid_code input").val(), t && e.submit_post(t)
        }), $("input[name=copyright]").bind("click", function () {
            this.value == 2 ? $("#copyright_desc,.vesting .red").show() : $("#copyright_desc,.vesting .red").hide()
        }), e.xiamiEvent()
    },
    show_vcode: function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $(".layer_vcode").show().find(".the_code img").attr("src", "/api/posts/getvcode.php")
    },
    xiamiEvent: function () {
        var e = this, t = "璇风敤姝屽悕銆佷笓杈戙€佽壓鏈鎼滅储", n = "#" + e.SEARCHLIST_ID, r = n + " li";
        $(".add_music_btn").bind("click", function () {
            $(this).hide(), $(".music_text").show()
        }), $(r).live("mousemove", function () {
            $(r).removeClass("current"), $(this).addClass("current")
        }).live("click", function () {
            e.song_select()
        }), $(".editor_music_box .stop,.editor_music_box .play").live("click", function () {
            e.music_control($(this).hasClass("stop"))
        }), $(".music_delete").live("click", function () {
            $(".editor_music").empty(), window.musicConf = e.cur_song_index = null, $(".music_text").show(), clearInterval(e.xiami_st)
        }), $(".music_text input").bind("focus", function (t) {
            var n = $(this);
            n.data("st") && clearTimeout(n.data("st"));
            if (!e.can_search)return !1;
            n.hasClass("gray") ? n.val("").removeClass("gray") : e.search_song(n.val()), $("#" + this.SEARCHLIST_ID).length || e.add_search_list(n)
        }).bind("blur", function () {
            var n = $(this);
            $.trim(n.val()).length == 0 && n.val(t).addClass("gray"), n.data("st", setTimeout(function () {
                e.can_search = !0, e.removeSearch()
            }, 300))
        }).bind("keyup", function (t) {
            var n = $(this), r = t.keyCode, i = n.val();
            e.can_search = !0;
            switch (r) {
                case 13:
                    e.song_select();
                    break;
                case 38:
                    t.preventDefault(), e.change_cur_select(!1);
                    break;
                case 40:
                    t.preventDefault(), e.change_cur_select(!0);
                    break;
                case 27:
                    e.removeSearch();
                    break;
                default:
                    e.cur_search_st && clearTimeout(e.cur_search_st), e.cur_search_st = setTimeout(function () {
                        e.search_song(i), e.cur_search_st = null
                    }, 100)
            }
        })
    },
    search_song: function (e, t) {
        var n = this;
        t = t || 1, e = $.trim(e);
        if (e.length == 0)return !1;
        n.cur_request && n.can_search && n.cur_request.abort(), r_num = Math.floor(Math.random() * 999999), url = n.SEARCH_URL + "?key=" + e + "&page=" + t + "&_=" + r_num, url = encodeURI(url), n.cur_request = $.ajax({
            url: n.EXCUTE_URL,
            type: "get",
            dataType: "json",
            data: {url: url},
            success: function (e, t) {
                var r = "";
                if (e) {
                    list_data = n.$search_data = e;
                    for (i in list_data)r += n.render_search_item(list_data[i]);
                    n.search_ended = e.length < n.search_item_limit, console.log(e), $("#" + n.SEARCHLIST_ID).show().find(".m_total").text("").end().find("ul").html(r).find("li:first").addClass("current")
                }
            },
            error: function () {
                $("#" + n.SEARCHLIST_ID).hide()
            }
        })
    },
    song_select: function () {
        var e = this, t = $("#" + e.SEARCHLIST_ID + " li.current").index(), n = e.$search_data[t];
        e.cur_song_index = t, n.title && e.render_xiamiplayer(n.id, $(".editor_music"), !0)
    },
    change_cur_select: function (e) {
        var t = this, n = $("#" + t.SEARCHLIST_ID + " li"), r = n.length, i = n.filter(".current").index(), s = i + (e ? 1 : -1);
        if (s < 0 || s > r - 1)return !1;
        n.removeClass("current").filter(":eq(" + s + ")").addClass("current")
    },
    add_search_list: function (e) {
        var t = '<div id="' + this.SEARCHLIST_ID + '" class="find_list_end hide"><div class="find_cont"><ul></ul><div class="music_idea clearfix"><div class="music_switch"><a href="javasctipt:void(0);" class="m_switch_btn up_btn"></a><a href="javasctipt:void(0);" class="m_switch_btn next_btn"></a></div><p><span class="m_total">鍏辨湁<span class="number"></span>棣栫浉鍏虫瓕鏇�</span><span class="m_come">鏉ヨ嚜锛氳櫨绫抽煶涔�</span></p></div></div></div>', n = this;
        $("#" + n.SEARCHLIST_ID).remove(), $("body").append(t), $("#" + n.SEARCHLIST_ID).css({
            top: e.offset().top + e.height() + 2,
            left: e.offset().left - 1,
            width: e.width() + 6
        }).find(".next_btn,.up_btn").unbind("click").bind("click", function (e) {
            var t = $(".music_text input");
            n.can_search = !1, n.$search_page = n.$search_page + ($(this).hasClass("next_btn") ? 1 : -1);
            if (n.$search_page <= 0 || n.search_ended)return !1;
            n.search_song(t.val(), n.$search_page), t.focus(), e.preventDefault()
        })
    },
    music_control: function (e) {
        var t = document.getElementById("xiami_player");
        e ? (t.play(), $(".editor_music_box .stop").hide(), $(".editor_music_box .play").show()) : (t.pause(), $(".editor_music_box .stop").show(), $(".editor_music_box .play").hide())
    },
    render_xiamiplayer: function (e, t, n) {
        var r = this, i = '<embed src="http://www.xiami.com/widget/0_' + e + '/singlePlayer.swf" type="application/x-shockwave-flash" width="257" height="33" wmode="transparent">', s = !1;
        $(".editor_music_box").remove(), $(".music_text").hide().find("input").blur(), r.removeSearch(), t.html(i), n && t.append('<div class="music_box_right"><a href="javascript:void(0);" class="music_delete"></a></div>');
        if (s) {
            var o = document.getElementById("xiami_player");
            o && o.play()
        } else $(".editor_music_box .play,.editor_music_box .stop").toggle()
    },
    xiami_play: function () {
        var e = $(".music_box_right .schedule span"), t = document.getElementById("xiami_player"), n = 100 * (t.currentTime / t.duration);
        e.width(n + "%"), t.currentTime >= t.duration - 1 && t.duration && (t.load(), t.currentTime = 0, t.play())
    },
    flash_xiamiplayer: function (e, t) {
        var n = this.sub_name(e.title, 13), r = this.sub_name(e.author, 13), i = "http://pkstatic.b0.upaiyun.com/xiami_player.swf?mp3=" + e.src + "&name=" + n + " 鈥斺€� " + r + "&auto=" + t, s = 240, o = 33;
        return '<div class="editor_music_box clearfix"><object id="xiami_player" width="' + s + '" height="' + o + '" classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" type="application/x-shockwave-flash"><param name="movie" value="' + i + '"><param name="wmode" value="transparent"/><embed wmode="transparent" width="' + s + '" height="' + o + '" src="' + i + '" name="xiami_player" pluginspage="http://www.macromedia.com/go/getflashplayer"/></object></div>'
    },
    html5_xiamiplayer: function (e) {
        var t = this.sub_name(e.title, 13), n = this.sub_name(e.author, 13), r = e.src;
        return '<div class="editor_music_box clearfix"><div class="music_box_left"><a href="javascript:void(0);" class="music_broadcast play"></a><a href="javascript:void(0);" class="music_broadcast stop" style="display: none;"></a></div><div class="music_box_right"><h4>' + t + " 鈥斺€� <span>" + n + '</span></h4><div class="schedule"><span></span></div></div></div><audio id="xiami_player"  preload="auto" src="' + r + "?data=" + (new Date).valueOf() + '"></audio></div>'
    },
    render_search_item: function (e) {
        var t = this.sub_name(decodeURIComponent(e.title), 12), n = this.sub_name(decodeURIComponent(e.author), 12), r = e.src;
        return '<li><a href="javascript:void(0);"><p><span>' + t + " 鈥斺€� </span>" + n + "</p></a></li>"
    },
    sub_name: function (e, t) {
        return e.length < t ? e : e.substr(0, t - 3) + "..."
    },
    removeSearch: function () {
        $("#" + this.SEARCHLIST_ID).hide()
    },
    uploadImage: function () {
        var e = this, t = "/api/card/uploadimg";
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $.ajaxFileUpload({
            url: "/api/posts/uploadimg",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e.code == "A00000") {
                    var t = "<p><img src='" + e.data.picurl + "'/></p>";
                    $editor.execCommand("insertHtml", t)
                } else showerrortip(PKINFO.eCode[e.code])
            },
            error: function (e, t, n) {
                console.log(e)
            }
        })
    },
    create_tag: function (e) {
        var t = !0;
        $.each($(".tag_choose .tag_name"), function () {
            $(this).text() == e && (t = !1)
        });
        if ($.trim(e).length == 0 || $(".tag_choose .tag_name").length >= this.TAG_MAX_LENGTH)t = !1;
        return t ? '<div class="tag_name">' + e + '<a class="tag_delete"></a></div>' : ""
    },
    get_submit_param: function () {
        var e = this, t = {}, n = $(".title_input"), r = ["font", "align", "lang", "width", "height", "hspace", "valign"];
        return t.title = $.trim(n.val()), t.content = UE.getEditor("editor").getContent(), t.contentid = $("#contentid").val(), t.postsfrom = $("#postsfrom").val(), t.draftid = $("#draftid").val(), t.fromid = $("#fromid").val(), t.copyright = $("input[name=copyright]:checked").val(), t.copyright_desc = t.copyright == "2" ? $("#copyright_desc").val() : "", t.collectid = $("#collectid").val(), t.tags = $.map($(".tag_choose .tag_name"), function (e, t) {
            return $.trim($(e).text())
        }).join(","), e.$search_data && typeof e.cur_song_index == "number" && (t.songid = e.$search_data[e.cur_song_index]), t.albumids = $("#albumids").val(), t.songid ? t.songid = t.songid.id : window.musicConf && (t.songid = musicConf.songid), e.check_param(t) ? t : !1
    },
    check_param: function (e) {
        return e.title.length > this.MAX_TITLE_LENGTH ? (showerrortip("鏍囬闀垮害涓嶈兘澶т簬" + this.MAX_TITLE_LENGTH), !1) : $(e.content).text().length == 0 ? (showerrortip("鍐呭涓嶈兘涓虹┖"), !1) : $("input[name=copyright]").length ? !0 : (showerrortip("璇烽€夋嫨鐗堟潈褰掑睘"), !1)
    },
    submit_post: function (e) {
        var t = this, n = !!$("#isupdate").val(), r = n ? t.UPDATE_POST_URL : t.ADD_POST_URL;
        if (!$(".tag_choose .tag_name").length) {
            alert("鑷冲皯閫夋嫨涓€涓被鍨嬫爣绛俱€�");
            return
        }
        $.post(r, e, function (e) {
            e.code == "A00000" ? $("#collectid").length ? showerrortip(e.data.msg, function () {
                location.href = e.data.data.url
            }) : location.href = e.data.data.url : showerrortip(e.data.msg)
        }, "json")
    }
};
Pianke.writegposts = {
    ADD_POST_URL: "/api/gposts/add",
    UPDATE_POST_URL: "/api/gposts/update",
    EXCUTE_URL: "/api/common/getUrlResponse.php",
    SEARCH_URL: "http://www.xiami.com/web/search-songs",
    XIAMI_GETSONGS: "http://www.xiami.com/web/get-songs",
    MAX_TITLE_LENGTH: 30,
    TAG_MAX_LENGTH: 3,
    SEARCHLIST_ID: "_SEARCHLIST_ID_",
    on_writing: /writing/.test(location.pathname),
    cur_request: null,
    cur_search_st: null,
    $search_data: [],
    $search_page: 1,
    cur_song_index: null,
    can_search: !0,
    search_ended: !1,
    search_item_limit: 10,
    init: function () {
        if ($("#editor").length || this.on_writing)this.bindEvent(), Pianke.user.bindChooselog(), UE && UE.getEditor("editor", {
            initialFrameWidth: "100%",
            autoHeightEnabled: !0
        });
        window.musicConf && ($(".add_music_btn").hide(), this.render_xiamiplayer(musicConf.songid, $(".editor_music"), musicConf.isupdate))
    },
    bindEvent: function () {
        var e = this;
        $(".title_input").bind("focus", function () {
            $(this).removeClass("gray")
        }), $.browser.msie ? $("#picfile").live("click", function (t) {
            var n = $(this), r = 0, i = function () {
                n.blur(), $(".add_cont .a_image").parent().show(), e.UP_LOAD_IMG = !0, e.uploadImage()
            };
            clearInterval(n.data("st")), n.data("st", setInterval(function () {
                r >= 1e3 && clearInterval(n.data("st")), n.val().length > 0 && (i(), clearInterval(n.data("st"))), r += 1
            }, 300))
        }) : $("#picfile").die("change").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadImage()
        }), $(".gposts_send").bind("click", function () {
            if (!$("#isupdate").val())e.show_vcode(); else {
                var t = e.get_submit_param();
                t && e.submit_post(t)
            }
        }), $(".layer_vcode").find(".close").bind("click", function () {
            $(".layer_vcode").hide()
        }).end().find(".the_code a").bind("click", function () {
            $(".the_code img").attr("src", "/api/posts/getvcode.php")
        }).end().end().find(".submit_code a").bind("click", function () {
            var t = e.get_submit_param();
            t.vcode = $(".valid_code input").val(), t && e.submit_post(t)
        }), e.xiamiEvent()
    },
    show_vcode: function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $(".layer_vcode").show().find(".the_code img").attr("src", "/api/posts/getvcode.php")
    },
    xiamiEvent: function () {
        var e = this, t = "璇风敤姝屽悕銆佷笓杈戙€佽壓鏈鎼滅储", n = "#" + e.SEARCHLIST_ID, r = n + " li";
        $(".add_music_btn").bind("click", function () {
            $(this).hide(), $(".music_text").show()
        }), $(r).live("mousemove", function () {
            $(r).removeClass("current"), $(this).addClass("current")
        }).live("click", function () {
            e.song_select()
        }), $(".editor_music_box .stop,.editor_music_box .play").live("click", function () {
            e.music_control($(this).hasClass("stop"))
        }), $(".music_delete").live("click", function () {
            $(".editor_music").empty(), window.musicConf = e.cur_song_index = null, $(".music_text").show(), clearInterval(e.xiami_st)
        }), $(".music_text input").bind("focus", function (t) {
            var n = $(this);
            n.data("st") && clearTimeout(n.data("st"));
            if (!e.can_search)return !1;
            n.hasClass("gray") ? n.val("").removeClass("gray") : e.search_song(n.val()), $("#" + this.SEARCHLIST_ID).length || e.add_search_list(n)
        }).bind("blur", function () {
            var n = $(this);
            $.trim(n.val()).length == 0 && n.val(t).addClass("gray"), n.data("st", setTimeout(function () {
                e.can_search = !0, e.removeSearch()
            }, 300))
        }).bind("keyup", function (t) {
            var n = $(this), r = t.keyCode, i = n.val();
            e.can_search = !0;
            switch (r) {
                case 13:
                    e.song_select();
                    break;
                case 38:
                    t.preventDefault(), e.change_cur_select(!1);
                    break;
                case 40:
                    t.preventDefault(), e.change_cur_select(!0);
                    break;
                case 27:
                    e.removeSearch();
                    break;
                default:
                    e.cur_search_st && clearTimeout(e.cur_search_st), e.cur_search_st = setTimeout(function () {
                        e.search_song(i), e.cur_search_st = null
                    }, 100)
            }
        })
    },
    search_song: function (e, t) {
        var n = this;
        t = t || 1, e = $.trim(e);
        if (e.length == 0)return !1;
        n.cur_request && n.can_search && n.cur_request.abort(), r_num = Math.floor(Math.random() * 999999), url = n.SEARCH_URL + "?key=" + e + "&page=" + t + "&_=" + r_num, url = encodeURI(url), n.cur_request = $.ajax({
            url: n.EXCUTE_URL,
            type: "get",
            dataType: "json",
            data: {url: url},
            success: function (e, t) {
                var r = "";
                if (e) {
                    list_data = n.$search_data = e;
                    for (i in list_data)r += n.render_search_item(list_data[i]);
                    n.search_ended = e.length < n.search_item_limit, console.log(e), $("#" + n.SEARCHLIST_ID).show().find(".m_total").text("").end().find("ul").html(r).find("li:first").addClass("current")
                }
            },
            error: function () {
                $("#" + n.SEARCHLIST_ID).hide()
            }
        })
    },
    song_select: function () {
        var e = this, t = $("#" + e.SEARCHLIST_ID + " li.current").index(), n = e.$search_data[t];
        e.cur_song_index = t, n.title && e.render_xiamiplayer(n.id, $(".editor_music"), !0)
    },
    change_cur_select: function (e) {
        var t = this, n = $("#" + t.SEARCHLIST_ID + " li"), r = n.length, i = n.filter(".current").index(), s = i + (e ? 1 : -1);
        if (s < 0 || s > r - 1)return !1;
        n.removeClass("current").filter(":eq(" + s + ")").addClass("current")
    },
    add_search_list: function (e) {
        var t = '<div id="' + this.SEARCHLIST_ID + '" class="find_list_end hide"><div class="find_cont"><ul></ul><div class="music_idea clearfix"><div class="music_switch"><a href="javasctipt:void(0);" class="m_switch_btn up_btn"></a><a href="javasctipt:void(0);" class="m_switch_btn next_btn"></a></div><p><span class="m_total">鍏辨湁<span class="number"></span>棣栫浉鍏虫瓕鏇�</span><span class="m_come">鏉ヨ嚜锛氳櫨绫抽煶涔�</span></p></div></div></div>', n = this;
        $("#" + n.SEARCHLIST_ID).remove(), $("body").append(t), $("#" + n.SEARCHLIST_ID).css({
            top: e.offset().top + e.height() + 2,
            left: e.offset().left - 1,
            width: e.width() + 6
        }).find(".next_btn,.up_btn").unbind("click").bind("click", function (e) {
            var t = $(".music_text input");
            n.can_search = !1, n.$search_page = n.$search_page + ($(this).hasClass("next_btn") ? 1 : -1);
            if (n.$search_page <= 0 || n.search_ended)return !1;
            n.search_song(t.val(), n.$search_page), t.focus(), e.preventDefault()
        })
    },
    music_control: function (e) {
        var t = document.getElementById("xiami_player");
        e ? (t.play(), $(".editor_music_box .stop").hide(), $(".editor_music_box .play").show()) : (t.pause(), $(".editor_music_box .stop").show(), $(".editor_music_box .play").hide())
    },
    render_xiamiplayer: function (e, t, n) {
        var r = this, i = '<embed src="http://www.xiami.com/widget/0_' + e + '/singlePlayer.swf" type="application/x-shockwave-flash" width="257" height="33" wmode="transparent">', s = !1;
        $(".editor_music_box").remove(), $(".music_text").hide().find("input").blur(), r.removeSearch(), t.html(i), n && t.append('<div class="music_box_right"><a href="javascript:void(0);" class="music_delete"></a></div>');
        if (s) {
            var o = document.getElementById("xiami_player");
            o && o.play()
        } else $(".editor_music_box .play,.editor_music_box .stop").toggle()
    },
    xiami_play: function () {
        var e = $(".music_box_right .schedule span"), t = document.getElementById("xiami_player"), n = 100 * (t.currentTime / t.duration);
        e.width(n + "%"), t.currentTime >= t.duration - 1 && t.duration && (t.load(), t.currentTime = 0, t.play())
    },
    flash_xiamiplayer: function (e, t) {
        var n = this.sub_name(e.title, 13), r = this.sub_name(e.author, 13), i = "http://pkstatic.b0.upaiyun.com/xiami_player.swf?mp3=" + e.src + "&name=" + n + " 鈥斺€� " + r + "&auto=" + t, s = 240, o = 33;
        return '<div class="editor_music_box clearfix"><object id="xiami_player" width="' + s + '" height="' + o + '" classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" type="application/x-shockwave-flash"><param name="movie" value="' + i + '"><param name="wmode" value="transparent"/><embed wmode="transparent" width="' + s + '" height="' + o + '" src="' + i + '" name="xiami_player" pluginspage="http://www.macromedia.com/go/getflashplayer"/></object></div>'
    },
    html5_xiamiplayer: function (e) {
        var t = this.sub_name(e.title, 13), n = this.sub_name(e.author, 13), r = e.src;
        return '<div class="editor_music_box clearfix"><div class="music_box_left"><a href="javascript:void(0);" class="music_broadcast play"></a><a href="javascript:void(0);" class="music_broadcast stop" style="display: none;"></a></div><div class="music_box_right"><h4>' + t + " 鈥斺€� <span>" + n + '</span></h4><div class="schedule"><span></span></div></div></div><audio id="xiami_player"  preload="auto" src="' + r + "?data=" + (new Date).valueOf() + '"></audio></div>'
    },
    render_search_item: function (e) {
        var t = this.sub_name(decodeURIComponent(e.title), 12), n = this.sub_name(decodeURIComponent(e.author), 12), r = e.src;
        return '<li><a href="javascript:void(0);"><p><span>' + t + " 鈥斺€� </span>" + n + "</p></a></li>"
    },
    sub_name: function (e, t) {
        return e.length < t ? e : e.substr(0, t - 3) + "..."
    },
    removeSearch: function () {
        $("#" + this.SEARCHLIST_ID).hide()
    },
    uploadImage: function () {
        var e = this, t = "/api/card/uploadimg";
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $.ajaxFileUpload({
            url: "/api/posts/uploadimg",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e.code == "A00000") {
                    var t = "<p><img src='" + e.data.picurl + "'/></p>";
                    $editor.execCommand("insertHtml", t)
                } else showerrortip(PKINFO.eCode[e.code])
            },
            error: function (e, t, n) {
                console.log(e)
            }
        })
    },
    get_submit_param: function () {
        var e = this, t = {}, n = $(".groupid_select"), r = $(".title_input"), i = ["font", "align", "lang", "width", "height", "hspace", "valign"];
        return t.groupid = $.trim(n.val()), t.title = $.trim(r.val()), t.content = UE.getEditor("editor").getContent(), t.contentid = $("#contentid").val(), e.$search_data && typeof e.cur_song_index == "number" && (t.songid = e.$search_data[e.cur_song_index]), t.songid ? t.songid = t.songid.id : window.musicConf && (t.songid = musicConf.songid), e.check_param(t) ? t : !1
    },
    check_param: function (e) {
        return e.title.length > this.MAX_TITLE_LENGTH ? (showerrortip("鏍囬闀垮害涓嶈兘澶т簬" + this.MAX_TITLE_LENGTH), !1) : $(e.content).text().length == 0 ? (showerrortip("鍐呭涓嶈兘涓虹┖"), !1) : !0
    },
    submit_post: function (e) {
        var t = this, n = !!$("#isupdate").val(), r = n ? t.UPDATE_POST_URL : t.ADD_POST_URL;
        $.post(r, e, function (e) {
            e.code == "A00000" ? location.href = e.data.data.url : showerrortip(e.data.msg)
        }, "json")
    }
};
Pianke.public = {
    init: function () {
        this.bindEvent()
    }, bindEvent: function () {
        var e = [], t = $(".q_nav ul"), n = this;
        $.each($(".q_article"), function (t) {
            var n = $(this), r = n.offset().top, i = t ? r : 0, s = r + n.height() + parseInt(n.css("padding-top"), 10);
            e.push({top: i, bottom: s})
        }), n.init_copyclipboard($(".copy_link")[0], $(".links_input textarea").val()), $(window).bind("scroll", function () {
            var n = $(this).scrollTop();
            for (i in e)e[i].top < n && e[i].bottom > n && (t.find("li:eq(" + i + ")").hasClass("current") || t.find("li").removeClass("current").filter(":eq(" + i + ")").addClass("current"))
        }), $(".pic .close").live("click", function () {
            $(this).parent().remove()
        }), $.browser.msie ? $("#picfile").live("click", function (e) {
            var t = $(this), r = function () {
                t.blur(), bool = $(this).hasClass("background_add"), n.uploadImage(bool)
            };
            clearInterval(t.data("st")), t.data("st", setInterval(function () {
                i >= 1e3 && clearInterval(t.data("st")), t.val().length > 0 && (r(), clearInterval(t.data("st"))), i += 1
            }, 300))
        }) : $("#picfile").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            if ($(".pic li").length >= 5)return !1;
            bool = $(this).hasClass("background_add"), n.uploadImage(bool)
        })
    }, uploadImage: function (e) {
        var t = this, n = $(".add_inst img");
        n.show(), data = e ? {type: "background"} : {}, $.ajaxFileUpload({
            url: "/api/contribute/uploadimg.php",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (e, r) {
                n.hide(), t.afterUpload(e)
            },
            error: function (e, r, i) {
                n.hide(), t.afterUpload(e)
            }
        })
    }, afterUpload: function (data) {
        data = eval("(" + data.responseText + ")");
        if (data.code != "A00000")alert(PKINFO.eCode[data.code]); else {
            var src = data.data.picurl, inner = '<a href="javascript:void(0);" class="close"></a><div class="image"><p><img src="' + src + '" /></p></div>', el = $("<li></li>").html(inner);
            $(".case ul").append(el)
        }
    }, init_copyclipboard: function (e, t) {
        var n = "http://pkstatic.b0.upaiyun.com/zeroClipBoard.js", r = document.createElement("script"), i = "_copy_";
        r.src = n, r.id = "copy_script", document.body.appendChild(r), $("#copy_script").load(function () {
            $(e).attr({id: i}), ZeroClipboard.setMoviePath("http://davidwalsh.name/demo/ZeroClipboard.swf");
            var n = new ZeroClipboard.Client;
            n.addEventListener("mousedown", function () {
                n.setText(t)
            }), n.addEventListener("complete", function (e, t) {
                alert("澶嶅埗鎴愬姛銆�")
            }), n.glue(i)
        })
    }
};
Pianke.slider = {
    banner_st: null, init: function () {
        var e = this;
        e.bindEvent();
        if (location.pathname.split("/")[1] == "index") {
            var t = getCookie("closeBanner-mobile") != "1";
            $(".dots,.banner:first").toggle(t), t && $(".index-banner").addClass("on"), Pianke.create.create_player(!0), Pianke.create.bindPlayer(), e.banner_st = setTimeout(function () {
                t && e.change_banner()
            }, 5e3), st = setInterval(function () {
                e.change_hot()
            }, 27e3)
        }
    }, bindEvent: function () {
        var e = this;
        $(".banner-close").click(function () {
            setCookie("closeBanner-mobile", "1", 1), $(".index-banner").removeClass("on"), $(".banner,.index-banner .dots").remove(), clearTimeout(e.banner_st)
        }), $(".index-banner .dots li").bind("click", function () {
            var t = $(this).index();
            e.change_banner(t)
        }), $(".hot_caption .cutover li").bind("click", function () {
            var t = $(this), n = t.index();
            e.change_hot(n)
        }), $(".card_list_slider .down,.c_switch .imgdown").bind("click", function () {
            e.slider_move()
        }), $(".card_list_slider .up,,.c_switch .imgup").bind("click", function () {
            e.slider_move("prev")
        }), $(".card_list_slider .share").bind("click", function () {
            e.share_card($(this))
        })
    }, change_hot: function (e) {
        var t = $(".hot_caption .cutover li");
        e || (e = t.find("a.current").parent().index(), e++, e >= t.length && (e = 0)), $(".cutover a.current").removeClass("current"), t.filter(":eq(" + e + ")").find("a").addClass("current"), $(".recommend_hot ul").hide().filter(":eq(" + e + ")").show()
    }, change_banner: function (e) {
        var t = this, n = $(".index-banner .banner"), r = 500;
        clearTimeout(t.banner_st);
        if (n.length == 1)return;
        e || (e = $(".banner:visible").index(), e++, e >= n.length && (e = 0)), $(".index-banner .dots li").removeClass("active").filter(":eq(" + e + ")").addClass("active"), n.fadeOut(r), n.filter(":eq(" + e + ")").fadeIn(r), t.banner_st = setTimeout(function () {
            t.change_banner()
        }, 5e3)
    }, slider_move: function (e) {
        var t = $(".card_list_slider .area").length ? $(".card_list_slider .area") : $(".c_cont_auther"), n = t.filter(":visible"), e = e || "next";
        e == "next" ? (next = n.next(), next.length || (next = t.first())) : (next = n.prev(), next.length || (next = t.last())), n.hide(), next.fadeIn()
    }, share_card: function (e) {
        var t = {
            url: e.attr("data-url") || location.href,
            type: "3",
            count: "",
            appkey: "2069323349",
            title: e.attr("data-content"),
            pic: e.attr("data-img_url"),
            ralateUid: "",
            language: "zh_cn",
            rnd: (new Date).valueOf()
        }, n = [];
        for (var r in t)n.push(r + "=" + encodeURIComponent(t[r] || ""));
        var i = "http://service.weibo.com/share/share.php?" + n.join("&");
        return window.open(i), !1
    }
};
Pianke.ting = {
    HEADER_HEI: 100,
    ITEM_SIZE: 240,
    DETAIL_SIZE: 166,
    page: 0,
    cur_type: "list",
    ting: [],
    origin_ting: [],
    ting_hash: {},
    cur_ting: !1,
    cur_form: "all",
    pagination_count: 0,
    DEFAULT_WIDTH: 245,
    running: !1,
    p_animate: null,
    pause_counter: 0,
    cur_time: 0,
    GET_LIST_URL: "/api/ting/list",
    PLAYER_URL: "http://pkstatic.b0.upaiyun.com/ting.swf",
    tingid: location.hash.split("#")[1] || !1,
    cur_num: 0,
    for_list: /profile|nj/.test(location.href),
    init: function () {
        this.reset_layout(), this.bindEvent(), this.for_list ? window.tingList ? (this.origin_ting = this.ting = tingList, this.serialize_hash(tingList), this.render_profileList(), Pianke.comment.getcomment($(".message_box"), 1, 1, !0, !0, "nj")) : window.njList && (this.origin_ting = this.ting = njList, this.serialize_hash(njList), this.render_njList(njList)) : (this.tingid && (this.cur_type = "detail"), $("#from_uid").val() && $("#from_uid").val().length && (this.cur_form = "user"), this.fetchData())
    },
    bindEvent: function () {
        var e = this;
        $(document).bind("keyup", function (e) {
            e.keyCode == 32 && $(".h5_control .btn:visible").click()
        }), $(document).ajaxSuccess(function () {
            setTimeout(function () {
                if (e.for_list) {
                    var t = $(".list_left").height() - 50, n = $(".l_left_box").height();
                    t < n && $(".list_left").height(n + 120)
                }
            }, 333)
        }), $(window).resize(function () {
            window.HAS_AUDIO && (e.reset_layout(), e.render_ting())
        }), $("#ting_detail_list li").live("mousemove", function () {
            if ($(this).hasClass("current"))return !1;
            $(this).css({marginTop: -30}).find("img")
        }).live("mouseleave", function () {
            if ($(this).hasClass("current"))return !1;
            $(this).css({marginTop: 0}).find("img")
        }), $(".h5_control .btn").live("click", function () {
            var t = $(this).hasClass("play");
            $(".h5_control .btn").toggle(), e.h5_control(t)
        }), $(".subnav_style a").bind("click", function (t) {
            var n = $(this), r = n.attr("data-type"), i = n.attr("data-value") ? "_" + n.attr("data-value") : "", s = r + i;
            t.preventDefault(), $(".subnav_style a").removeClass("current"), n.addClass("current"), r ? (e.cur_form = "tag", e.ting = e.ting_hash[s]) : (e.cur_form = "all", e.ting = e.origin_ting), location.hash = "", e.page = 0, e.tingid = !1, /nj/.test(location.pathname) ? e.render_njList(e.ting) : e.render_list()
        }), $(".like_btn").live("click", function () {
            e.like_ting($(this))
        }), $(".msg_input,.m_cancel").bind("click", function () {
            var e = $(this);
            e.find("textarea").length || (e.hasClass("m_right") ? $(".msg_input").toggle().find("textarea").focus() : $(".msg_input").toggle().find("textarea").val(""))
        }), $(".l_icon.all,.all_btn,.s_all_btn,.s_style_btn").live("click", function (t) {
            if (!e.for_list) {
                t.preventDefault();
                if (PKINFO.islogin != 1)return openlogintip(), !1
            }
            $(".subnav_style .current").attr("data-type") ? e.cur_form = "tag" : e.cur_form = "all", e.cur_type = "list", $(".subnav_style a:first").click(), e.show_listView()
        }), $(".random_btn").live("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(function () {
                var t = Math.floor(Math.random() * e.ting.length);
                e.cur_type = "detail", e.render_detail(t)
            }), !1;
            var t = Math.floor(Math.random() * e.ting.length);
            e.cur_type = "detail", e.render_detail(t)
        }), $(".list_cont .up_btn").live("click", function () {
            if ($(this).hasClass("up_btn_no"))return !1;
            e.prev_slide()
        }), $(".list_cont .down_btn").live("click", function () {
            if ($(this).hasClass("down_btn_no"))return !1;
            e.next_slide()
        }), $(".l_right .next_btn,.l_right .up_btn").live("click", function () {
            var t = $(this).hasClass("next_btn");
            if (PKINFO.islogin != 1)return openlogintip(function () {
                e.change_ting(t)
            }), !1;
            e.change_ting(t)
        }), $(".l_footer .up_btn,.l_footer .down_btn").live("click", function () {
            var t = $(this).hasClass("down_btn");
            e.change_detail_list(t)
        }), e.for_list || $(".pics li,#ting_detail_list li").live("click", function () {
            var t = parseInt($(this).attr("data-id"), 10);
            $("#ting_detail_list li").removeClass("current"), $(this).addClass("current"), e.cur_type = "detail", e.cur_num = t, e.render_detail(t)
        }), $(".l_share li a").live("click", function () {
            var t = $(this), n = e.ting[e.cur_ting], r = t.attr("data-type"), i = location.href, s = n.cntInfo.title, o = n.cntInfo.userinfo.uname, u = n.musicUserInfo.uname, a = "鎴戞鍦ㄦ敹鍚潵鑷�" + o + "鐨勪綔鍝併€�" + s + "銆嬶紝涓绘挱锛�" + u + "銆傜敤澹伴煶浜ゆ崲涓栫晫锛屾垜鍦�#鐗囧埢路ting#", f = n.imgUrl, l = !1;
            redirect_to_sns(r, i, a, f, l, s)
        })
    },
    fetchData: function () {
        var e = this;
        if (e.tingid)var t = {tingid: e.tingid};
        $.ajax({
            url: e.GET_LIST_URL, type: "GET", data: t || {}, success: function (t) {
                t.code == "A00000" ? (e.ting = t.data.data, e.origin_ting = e.ting, e.serialize_hash(e.ting), /show_all/.test(location.href) ? (e.cur_type = "list", e.show_listView()) : (e.cur_type = "detail", e.cur_form == "user" && (e.ting = e.ting_hash["user_" + $("#from_uid").val()]), e.render_detail(0))) : msg_modal(t.data.msg, 99999)
            }, dataType: "json"
        })
    },
    render_ting: function () {
        var e = this;
        e.cur_type == "detail" ? e.render_detail(0) : e.render_list()
    },
    serialize_hash: function (e) {
        var t = this;
        for (i in e) {
            var n = e[i];
            if (n) {
                if (n.styleInfo && n.styleInfo.style) {
                    var r = n.styleInfo.style.toString().split(",");
                    for (i in r) {
                        var s = r[i];
                        s && (t.ting_hash["style_" + s] || (t.ting_hash["style_" + s] = []), t.ting_hash["style_" + s].push(n))
                    }
                }
                n.genderInfo && n.genderInfo.gender && (t.ting_hash["gender_" + n.genderInfo.gender] || (t.ting_hash["gender_" + n.genderInfo.gender] = []), t.ting_hash["gender_" + n.genderInfo.gender].push(n)), n.gender && (t.ting_hash["gender_" + n.gender] || (t.ting_hash["gender_" + n.gender] = []), t.ting_hash["gender_" + n.gender].push(n));
                if (n.musicUserInfo) {
                    var o = n.musicUserInfo.uid;
                    t.ting_hash["user_" + o] || (t.ting_hash["user_" + o] = []), t.ting_hash["user_" + o].push(n)
                }
            }
        }
        if (e[0] && e[0].hot) {
            var u = e.slice(0);
            t.ting_hash.hot = t.sort_data(u)
        }
    },
    sort_data: function (e) {
        for (var t = 0, n = e.length; t < n; t++)for (var r = 0, i = n - r; r < i; r++)e[t].hot > e[r].hot && (temp = e[r], e[r] = e[t], e[t] = temp);
        return e
    },
    change_ting: function (e) {
        var t = this.cur_num + (e ? 1 : -1), n = this;
        if (t < 0 || t >= this.ting.length)return !1;
        n.cur_type = "detail", this.render_detail(t)
    },
    prev_slide: function () {
        var e = this;
        if (e.page == 0 || e.running)return;
        e.page--, e.render_list()
    },
    next_slide: function () {
        var e = this;
        if (e.page * e.pagination_count >= e.ting.length || e.running)return;
        e.page++, e.render_list()
    },
    item_filpping: function () {
        var e = this, t = e.page * e.pagination_count, n = e.get_cur_page();
        if (e.running)return !1;
        e.running = !0, e.update_arrow_btn()
    },
    render_list: function () {
        this.reset_layout();
        var e = this, t = "", n = [], r = e.pagination_count * e.page;
        $(".list_cont .btn").show(), n = e.get_cur_page(), $.each(n, function (n) {
            this && (this.index = r + n, t += e.list_item(this))
        }), $(".from_btn").empty(), $(".pics").html(t), e.update_arrow_btn()
    },
    get_cur_page: function () {
        var e = this, t = e.pagination_count * e.page, n = [];
        if (e.ting) {
            for (var r = 0; r < e.pagination_count; r++) {
                var i = e.ting[t + r];
                i && n.push(i)
            }
            return n
        }
        return 0
    },
    update_arrow_btn: function () {
        var e = $(".list_cont,.l_footer").find(".up_btn,.up_btn_no"), t = $(".list_cont,.l_footer").find(".down_btn,.down_btn_no"), n = $(".l_right .next_btn,.l_right .next_btn_no"), r = $(".l_right .up_btn,.l_right .up_btn_no"), i = this.ting.length, s = (this.page + 1) * this.pagination_count, o = this.cur_ting > 0 ? "up_btn" : "up_btn_no", u = this.cur_ting < i - 1 ? "next_btn" : "next_btn_no", a = this.page > 0 ? "up_btn" : "up_btn_no", f = s >= i - 1 ? "down_btn_no" : "down_btn";
        n.removeClass("up_btn up_btn_no").addClass(u), r.removeClass("next_btn next_btn_no").addClass(o), e.removeClass("up_btn up_btn_no").addClass(a), t.removeClass("down_btn_no down_btn").addClass(f)
    },
    reset_layout: function () {
        var e = this.DEFAULT_WIDTH, t = $(window).width(), n = $(window).height(), r = n - this.HEADER_HEI, i = t - 95 - (this.for_list ? $(".l_left_box").width() : 0), s = Math.floor(i / this.ITEM_SIZE), o = Math.floor(r / this.ITEM_SIZE), u = t - 260, a = Math.floor(u / this.DETAIL_SIZE), u = a * this.DETAIL_SIZE, f = $(".list_left"), l = $(".message_box").length ? $(".message_box").offset().top + 300 : 0, c = {width: this.ITEM_SIZE * s};
        return f.length && f.height() < l && f.height(l), this.for_list && ($.browser.msie && parseInt($.browser.version) <= 7 && /profile/.test(location.href) ? c.marginLeft = c.marginRight = 0 : c.marginLeft = f.width()), this.for_list || $(".list_cont").height(r), $(".pics").css(c), this.for_list || $(".l_footer .foot").width(u), this.pagination_count = $(".list_main:visible").length != 0 ? s * o : a, this.pagination_count
    },
    render_detail: function (e) {
        var t = this;
        if (t.for_list)return !1;
        e = e || e == 0 ? e : t.cur_num, t.cur_ting = e;
        if (t.cur_type == "list")return !1;
        $(".from_btn").html(t.get_from()), $(".l_main").is(":visible") ? (t.update_detail(e), t.init_detail_list()) : t.init_detailView(function () {
            t.reset_layout(), t.update_detail(e), t.init_detail_list()
        })
    },
    update_detail: function (e) {
        var t = this, n = t.ting[e] || t.ting[0], r = n.cntInfo.contentid;
        $(".list_cont .btn").hide(), t.cur_num = e, t.tingid = n.tingid, t.get_curlist_page(), location.hash = t.tingid, $(".l_main").show().html(t.detail_item(n)), $("#ting_player").html(t.get_player(n)), t.update_arrow_btn(), t.send_listencount(r);
        if (window.HAS_AUDIO) {
            var i = document.getElementById("h5_player");
            i.play(), clearInterval(t.p_animate), t.p_animate = setInterval(function () {
                t.playing_animate()
            }, 50)
        }
    },
    get_curlist_page: function () {
        var e = this.cur_num, t = Math.floor(e / this.pagination_count), n = e + 1 - t * this.pagination_count > 0 ? 0 : 1;
        return this.page = t + n, t + n
    },
    show_listView: function (e) {
        var t = this;
        $(".l_main").hide(), $(".list_main").show().animate({"margin-left": 0}, 500, function () {
            location.hash = "", t.page = 0, t.tingid = !1, t.render_list(), e && e()
        }), $(".l_footer").animate({bottom: -280}, 400, function () {
            $(this).hide()
        })
    },
    init_detailView: function (e) {
        $(".list_main").animate({"margin-left": -$(window).width()}, 500, function () {
            $(this).hide(), e && e()
        }), $(".l_footer").fadeIn().animate({bottom: 0}, 800)
    },
    change_detail_list: function (e) {
        var t = this.page + (e ? 1 : -1), n = Math.floor(this.ting.length / this.pagination_count), r = this.ting.length / this.pagination_count > n ? 1 : 0;
        n += r;
        if (t < 0 || t >= n)return !1;
        this.page = t, this.init_detail_list(t)
    },
    init_detail_list: function (e) {
        var t = this, n = t.pagination_count, e = e || e == 0 ? e : t.get_curlist_page(), r = t.get_cur_page(), i = "", s = e * n;
        t.page = e, t.update_arrow_btn(), $.each(r, function (e) {
            this && (this.index = s + e, i += t.detail_list_item(this))
        }), $("#ting_detail_list").html(i).find("[data-id=" + t.cur_ting + "]").addClass("current")
    },
    detail_list_item: function (e) {
        return '<li data-id="' + e.index + '"><div class="f_img"><div class="img_top clearfix"><h3>' + this.cut_str(e.cntInfo.title, 8) + '</h3><div class="listen_btn l_icon"><span class="blue">' + e.counterInfo.musicVisit + '</span></div></div> <a href="javascript:void(0);" ><img src="' + e.imgUrl + '" /></a></div><div class="cover"></div></li>'
    },
    list_item: function (e, t, n) {
        var r = e.counterInfo ? e.counterInfo.musicVisit : 1, i = e.cntInfo ? this.cut_str(e.cntInfo.title, 7) : "鏃犻", s = t ? "href='/ting?uid=" + e.musicUserInfo.uid + "#" + e.tingid + "' target='_blank'" : "href='javascript:void(0);'";
        return '<li data-id="' + e.index + '"><a ' + s + '><div class="img"><div class="mask_inner"></div><a ' + s + ' class="listen_to"></a><img src="' + e.imgUrl + '"><div class="listen_btn l_icon"><span>鏀跺惉锛�</span><span>' + r + '</span></div></div><div class="author"><div class="mask_inner"></div><div class="mask_content"><p class="l_idea"><span>涓绘挱锛�</span><a href="/profile/' + e.musicUserInfo.uid + '">' + e.musicUserInfo.uname + '</a></p></div></div><p class="name">' + e.cntInfo.title + "</p></a></li>"
    },
    detail_item: function (e) {
        var t = e.musicUserInfo.isnj ? '<a href="/ting/profile/' + e.musicUserInfo.uid + '" class="album">[涓撹緫]</a>' : "";
        return '<div class="l_left"><h2>' + e.cntInfo.title + '</h2><p class="l_idea"><span>涓绘挱锛�</span><a href="/profile/' + e.musicUserInfo.uid + '" target="_blank">' + e.musicUserInfo.uname + "</a>" + t + '<span class="l_away">鏂囷細</span><a href="/profile/' + e.cntInfo.userinfo.uid + '" target="_blank">' + e.cntInfo.userinfo.uname + '</a></p><div class="article"><p>' + e.cntInfo.content + '<a href="' + e.cntInfo.content_url + '" target="_blank">[鍘熸枃]</a></p></p></div><div class="icon_btn clearfix" data-id="' + e.cur_num + '"><a href="javascript:void(0);" class="icon_btn like_btn"><span class="like_icon">鍠滄</span><span class="l_number">' + e.counterInfo.love + '</span></a><div class="l_share"><a href="javascript:void(0);" class="share_btn"><span class="l_icon share_icon">鍒嗕韩</span></a><ul><li><a href="javascript:void(0);" data-type="sina" class="l_icon sina"></a></li><li><a data-type="qzone" href="javascript:void(0);" class="l_icon qzone"></a></li><li><a data-type="tengxun" href="javascript:void(0);" class="l_icon tt"></a></li><li><a href="javascript:void(0);" data-type="renren" class="l_icon renren"></a></li></ul></div><div class="listen_btn l_icon"><span>鏀跺惉锛�</span><span class="blue" id="visit_count">' + e.counterInfo.musicVisit + '</span></div></div></div><div class="l_middle" id="ting_player"><p id="ting_el"></p></div><div class="l_right" data-id="' + e.cur_num + '"><a href="javascript:void(0);" class="l_icon up_btn_no"></a><a href="javascript:void(0);" class="l_icon next_btn"></a><a href="javascript:void(0);" class="l_icon random_btn"></a></div>'
    },
    h5_control: function (e) {
        var t = document.getElementById("h5_player"), n = this;
        t && (e ? (t.play(), n.p_animate = setInterval(function () {
            n.playing_animate(t)
        }, 80)) : (t.pause(), clearInterval(n.p_animate)))
    },
    playing_animate: function () {
        var e = document.getElementById("h5_player"), t = Math.floor(e.duration - e.currentTime), n = t % 60, r = Math.floor(t / 60), i = $(".h5_control img"), s = i.data("degree") || 0, o = Math.sin(s), u = Math.cos(s), a = this;
        i.data("degree", s + 1), e.duration && e.currentTime == e.duration && (clearInterval(a.p_animate), PKINFO.islogin == 1 ? a.change_ting(!0) : openlogintip(function () {
            a.change_ting(!0)
        })), e.currentTime == a.cur_time ? (a.pause_counter += 1, a.pause_counter >= 3 && (e.pause(), e.currentTime && (e.currentTime = a.cur_time), e.play(), a.pause_counter = 0)) : a.pause_counter = 0, n = n.toString().length < 2 ? "0" + n : n, isNaN(r) ? $(".timer_text").hide() : $(".timer_text").text("-" + r + ":" + n).fadeIn(), i.css({
            "-webkit-transform": "rotate(" + s + "deg)",
            "-moz-transform": "rotate(" + s + "deg)",
            "-o-transform": "rotate(" + s + "deg)",
            "-ms-transform": "rotate(" + s + "deg)",
            transform: "rotate(" + s + "deg)"
        }), e.currentTime > a.cur_time && (a.cur_time = e.currentTime)
    },
    get_player: function (e) {
        return window.HAS_AUDIO ? this.h5_player(e) : this.flash_player(e)
    },
    h5_player: function (e) {
        var t = e.musicUrl, n = e.imgUrl;
        return '<div class="h5_player"><div class="h5_control"><img src="' + n + '"/><div class="img_mask"></div><a style="display:none"  class="btn play" href="javascript:;"></a><a class="btn pause" href="javascript:;"></a></div><div class="timer_text"></div></div><audio id="h5_player"  preload="auto" src="' + t + '"></audio>'
    },
    flash_player: function (e) {
        var t = this.PLAYER_URL + "?mp3=" + e.musicUrl + "&img=" + e.imgUrl;
        return $.browser.mozilla ? '<embed width="300" height="300"  src="' + t + '" type="application/x-shockwave-flash"  wmode="transparent"/>' : '<object width="300" height="300" id="ting_el" type="application/x-shockwave-flash" style="visibility: visible;"><param name="movie" value="' + t + '"><param name="wmode" value="transparent"/><embed wmode="transparent" width="300" height="300" src="' + t + '" pluginspage="http://www.macromedia.com/go/getflashplayer"/></object>'
    },
    render_profileList: function (e) {
        var t = this, n = e || t.ting, r = '<ul class="pics clearfix">';
        $.each(n, function () {
            r += t.list_item(this, !0, !0)
        }), r += "</ul>", $(".list_cont").html(r), this.reset_layout()
    },
    render_njList: function (e) {
        var t = this, n = e || t.ting, r = '<ul class="pics clearfix pics_uesr">';
        e && $.each(n, function () {
            r += t.nj_item(this, !0)
        }), r += "</ul>", $(".list_cont").html(r), this.reset_layout()
    },
    nj_item: function (e) {
        return '<li><div class="img"><a href="/ting/profile/' + e.userinfo.uid + '"><img src="' + e.userinfo.icon + '"></a></div><div class="author"></div><div class="info_uesr"><a href="/ting/profile/' + e.userinfo.uid + '" class="name_blue">' + e.userinfo.uname + "</a><p>" + e.userinfo.desc + "</p></div></li>"
    },
    cut_str: function (e, t) {
        return e.length > t ? e.substr(0, t - 3) + "..." : e
    },
    like_ting: function (e) {
        var t = this.ting[this.cur_ting], n = t && t.cntInfo.contentid;
        n ? $.post("/api/attitude/love", {id: n}, function (t) {
            switch (t.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    var n = t.data.data.love;
                    e.addClass("on").find(".l_number").text(n);
                    break;
                default:
                    msg_modal(t.data.msg)
            }
        }, "json") : msg_modal("鍙傛暟鏈夎")
    },
    get_from: function () {
        switch (this.cur_form) {
            case"all":
                return '<p><span class="gray">From锛�</span><a href="javascript锛歷oid(0)" class="btn_icon s_all_btn">ALL</a></p>';
            case"tag":
                return '<p><span class="gray">From锛�</span><a href="javascript锛歷oid(0)" class="btn_icon s_style_btn">#' + $(".subnav_style .current").text() + "</a></p>";
            case"user":
                var e = this.ting_hash["user_" + $("#from_uid").val()][0].musicUserInfo;
                return '<p><span class="gray">From锛�</span><a href="/ting/profile/' + e.uid + '" class="btn_icon s_video_btn">' + e.uname + "</a></p>"
        }
    },
    send_listencount: function (e) {
        $.getJSON("/api/ting/count?tingid=" + e, function (e) {
            if (e.code == "A00000")return !0
        })
    }
};
Pianke.collect = {
    ADD_COLLECT: "/api/collect/addrequest.php",
    GET_COLLECT: "/api/collect/getcollect.php",
    CREATE_URL: "/api/collect/create.php",
    UPDATE_URL: "/api/collect/update.php",
    ADD_POST: "/api/collectposts/submit.php",
    GET_POST: "/api/collectposts/getposts.php",
    ADD_NOTICE: "/api/collect/addnotice.php",
    REVIEW_URL: "/api/collectposts/review.php",
    REMOVE_NOTICE: "/api/collect/delnotice.php",
    RECOMMEND_URL: "/api/collectposts/recommend.php",
    music_url: $("input[name=music_url]").val(),
    music_name: $("input[name=music_name]").val(),
    TIPS: {
        name: "鍦ㄦ杈撳叆鎮ㄧ殑涓撻鍚嶇О锛�10瀛椾互鍐咃級",
        description: "鍦ㄦ鐢ㄦ枃瀛楁弿杩版偍鐨勪笓棰樺唴瀹癸紙50瀛椾互鍐咃級",
        notice: "鍏充簬杩欎釜璇濋锛屾偍瀵瑰ぇ瀹舵湁浠€涔堟湡鏈涳紵鏈変粈涔堟兂璇寸殑锛熸垨鑰呮槸鍏憡涔堬紵锛�200瀛椾互鍐咃級"
    },
    cur_page: 1,
    isloading: !1,
    init: function () {
        this.bindEvent(), Pianke.create.music_url = this.music_url, Pianke.create.create_player(), Pianke.create.bindPlayer()
    },
    bindEvent: function () {
        var e = this;
        $(window).bind("scroll", function () {
            var t = $(window), n = t.height() + t.scrollTop() + 50;
            $(document).height() <= n && $(".main_cont,.collect_container").length && !e.isloading && e.cur_page % 3 != 0 && e.get_collect()
        }), $(".new_topic,.new_subject_layer .close,#edit-collect-post").bind("click", function () {
            $(".new_subject_layer").toggle()
        }), $(".salon_entry textarea").bind("keyup", function () {
            var e = $(this), t = e.val(), n = t.length, r = 300, i = r - n;
            i >= 0 ? $(".salon_entry .point_text").html("杩樺彲浠ヨ緭鍏�<span>" + i + "</span>瀛�</p>") : $(".salon_entry .point_text").html('宸茬粡瓒呰繃<span class="red">' + -i + "</span>瀛�</p>")
        }), $(".new_subject_layer .save_btn").bind("click", function () {
            var e = $("#collectid").val(), t = $(".new_subject_layer input").val(), n = $(".new_subject_layer textarea").val(), r = $("#contentid").val(), i = "/api/collecttopics" + (r ? "/edit.php" : "/add.php");
            if (!t.length || !n.length)return alert("鏍囬鎴栧唴瀹逛笉鑳戒负绌猴紒"), !1;
            $.post(i, {collectid: e, contentid: r, title: t, content: n}, function (e) {
                e.code == "A00000" ? location.href = e.data.data.url : showerrortip(e.data.msg)
            }, "json")
        }), $("#del-collect-post,.c_right .s_top_btn").bind("click", function () {
            var e = $(this), t = e.hasClass("s_delete"), n = t ? "/api/collecttopics/del.php" : "/api/collecttopics/recommend.php", r = $("#contentid").val(), i = e.hasClass("btn_recommend"), s = e.hasClass("s_top_btn") ? i : null, o = {
                contentid: r,
                recommend: s ? 1 : 0
            };
            t ? tips = "纭畾瑕佸垹闄よ繖涓瘽棰橈紵" : i ? tips = "纭畾瑕佺疆椤惰繖涓瘽棰橈紵" : tips = "纭畾瑕佸彇娑堢疆椤惰繖涓瘽棰橈紵", confirm(tips, function () {
                $.ajax({
                    url: n, type: "post", data: o, success: function (e) {
                        e.code == "A00000" ? location.href = e.data.data.url : showerrortip(e.data.msg)
                    }, dataType: "json"
                })
            })
        }), $(".p_box_bg .t_list_cont").hover(function () {
            $(this).find(".cover").fadeIn()
        }, function () {
            $(this).find(".cover").hide()
        }), $(".entry_address input").bind("focus", function () {
            var e = $(this);
            e.hasClass("gray") && e.val("").removeClass("gray")
        }), $(".add_admin_btn").bind("click", function () {
            $.post("/api/collect/addadmin.php", {
                id: $("#collect_id").val(),
                url: $("input[name=admin_url]").val(),
                type: 2
            }, function (e) {
                if (e.code == "A00000") {
                    var t = e.data.data;
                    $(".manager").append('<div class="d_mp3"><a href="javascript:void(0);" class="close" data-uid="' + t.uid + '"></a><p><span class="manager_name">绠＄悊鍛橈細</span>' + t.uname + "</p></div>")
                } else showerrortip(e.data.msg)
            }, "json")
        }), $(".upload_mp3 .close").bind("click", function () {
            $(".music_add .add_button,.upload_mp3").toggle(), e.music_url = null, e.music_name = null
        }), $(".manager .d_mp3 .close").live("click", function () {
            var e = $(this), t = e.attr("data-uid");
            $.post("/api/collect/deladmin.php", {id: $("#collect_id").val(), uid: t}, function (t) {
                t.code == "A00000" ? e.parent().remove() : showerrortip(t.data.msg)
            }, "json")
        }), $(".recommend_btn").bind("click", function () {
            var t = $(this), n = $("#collectid").val(), r = t.attr("data-recommend"), i = t.attr("data-id");
            $.post(e.RECOMMEND_URL, {id: n, contentid: i, recommend: r}, function (e) {
                e.code == "A00000" ? (alert("缃《鎴愬姛"), location.reload()) : showerrortip(e.data.msg)
            }, "json")
        }), $("#create_topic_btn").bind("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            $("#collect_create").show().find(".error").hide()
        }), $("#collect_create .save_btn").bind("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            $.each($("#collect_create input"), function () {
                $(this).hasClass("gray") && $(this).val("")
            });
            var t = e.get_collect_param();
            if (!t)return !1;
            if (e.submiting)return !1;
            e.submiting = !0, $.post(e.ADD_COLLECT, t, function (t) {
                e.submiting = !1, $("#collect_create").hide(), showerrortip(t.data.msg)
            }, "json")
        }), $("#collect_create .close").bind("click", function () {
            $("#collect_create").hide()
        }), $("#nopassreason").find(".cancel_btn,.close").bind("click", function () {
            $("#nopassreason").hide()
        }), $("#nopassreason .save_btn").live("click", function () {
            var t = $(this), n = t.data("param"), r = t.data("el");
            n.reason = $("#nopassreason .e_cont textarea").val(), e.submit_action(n, r)
        }), $(".s_detail_bgimg img").ready(function () {
            e.edit_bgImg()
        }), $("#add_notice_btn").bind("click", function () {
            var t = $.trim($("textarea[name=notice]").val());
            if (t.length > 200)return $(".m_summary .error").show().text("闄愬畾200瀛椾互鍐�"), !1;
            if (!t.length)return $(".m_summary .error").show().text("Editor璇翠笉鑳戒负绌�"), !1;
            $.post(e.ADD_NOTICE, {id: $("#collect_id").val(), notice: t}, function (e) {
                e.code == "A00000" ? location.reload() : showerrortip(e.data.msg)
            }, "json")
        }), $("#collectlayer .c_text,#collect_create .c_text").focus(function () {
            $(this).hasClass("gray") && $(this).val("").removeClass("gray")
        }), $("#collectlayer .save_btn").bind("click", function () {
            e.add_collectItem()
        }), $("#update_btn,#apply_btn").bind("click", function () {
            var t = $(this);
            this.id == "apply_btn" ? confirm("鎮ㄦ槸鍚︾湡鐨勫噯澶囨彁浜わ紵", function () {
                e.submit_collect(t)
            }) : e.submit_collect(t)
        }), $(".main_left").find("input[type=text],textarea").bind("focus", function () {
            var t = $(this).removeClass("gray"), n = t.attr("name");
            t.val() == e.TIPS[n] && t.val("")
        }).live("blur", function () {
            var e = $(this), t = e.attr("name");
            e.val().length || e.addClass("gray")
        }), $(".sns_more_right .draft_btn,#collectlayer .close").live("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            $("#collectlayer").toggle().find(".error").hide()
        }), $.browser.msie ? $(".setadd").live("click", function (t) {
            var n = $(this), r = 0, i = function () {
                n.blur(), e.uploadThing(n)
            };
            clearInterval(n.data("st")), n.data("st", setInterval(function () {
                r += 1, r >= 1e3 && clearInterval(n.data("st")), n.val().length > 0 && (i(), clearInterval(n.data("st")))
            }, 300))
        }) : $(".setadd").die("change").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadThing($(this))
        }), $(".no_through_btn,.through_btn,.delete_btn").bind("click", function () {
            var t = $(this);
            t.hasClass("delete_btn") ? confirm("纭瑕佸垹闄よ繖绡囨枃绔犲悧锛�", function () {
                e.collect_action(t)
            }) : e.collect_action(t)
        }), $(".pagination a").live("click", function (t) {
            t.preventDefault();
            var n = this.href, r = n.split("page=")[1];
            e.cur_page = (Number(r) - 1) * 3, $(document).scrollTop(0), e.get_collect(!0)
        })
    },
    collect_action: function (e) {
        var t = $("#collectid").val(), n = e.attr("data-status"), r = e.attr("data-id"), i = this, s = {
            id: t,
            contentid: r,
            status: n
        };
        /notice/.test(location.href) && (url = i.REMOVE_NOTICE, s = {id: r}), n == "-1" ? $("#nopassreason").show().find(".save_btn").data({
            param: s,
            el: e
        }) : i.submit_action(s, e)
    },
    submit_action: function (e, t) {
        var n = this, r = $("textarea[name=notice]").length ? n.REMOVE_NOTICE : n.REVIEW_URL;
        if (n.submiting)return !1;
        n.submiting = !0, $.post(r, e, function (e) {
            n.submiting = !1, $("#nopassreason").hide(), e.code == "A00000" ? (t.parents(".create_content").remove(), n.edit_num(status)) : showerrortip(e.data.msg)
        }, "json")
    },
    edit_num: function (e) {
        var t = $("#deftotal"), n = $("#nopasstotal"), r = $("#nortotal");
        if (e) {
            var i = -1, s = 0, o = 0, u = !0;
            switch (parseInt(e, 10)) {
                case 1:
                    s = 1;
                    break;
                case-1:
                    o = 1;
                    break;
                case 2:
                    i = 0, s = -1;
                    break;
                default:
                    u = !1
            }
            u && (t.text(parseInt(t.text(), 10) + i), n.text(parseInt(n.text(), 10) + o), r.text(parseInt(r.text(), 10) + s))
        }
    },
    get_collect: function (e) {
        var t = this, n = $(".loading"), r = !!$("#collectid").length, i = r ? t.GET_POST : t.GET_COLLECT, s = 15;
        if (!!t.isloading)return n.hide(), !1;
        n.show(), t.cur_page += 1, param = {
            page: t.cur_page,
            size: s,
            style: $("#style").val(),
            sort: $("#sort").val(),
            _: Math.floor(9999999 * Math.random())
        };
        if (r) {
            if (!$("#collectlayer").length)return !1;
            param.id = $("#collectid").val(), param.sort = $(".mainnav .current").attr("data-type")
        }
        t.isloading = !0, $.getJSON(i, param, function (i) {
            n.hide(), i.code == "A00000" ? i.data.data ? (t.isloading = !1, t.render_collect(i.data.data.html, r, e)) : t.isloading = !0 : showerrortip(i.data.msg)
        })
    },
    get_collect_param: function () {
        var e = {
            name: $("#collect_create input:first").val(),
            description: $("#collect_create textarea").val(),
            posts: $.map($(".add_link input"), function (e) {
                if (!/gray/.test(e.className))return e.value
            })
        }, t = e.name.length, n = e.description.length, r = !1, s = {};
        t ? t > 10 && (r = "涓撻鍚嶇О涓嶅緱瓒呰繃10瀛�") : r = "涓撻鍚嶇О涓嶅緱涓虹┖", n ? n > 50 && (r = "涓撻绠€浠嬩笉寰楄秴杩�50瀛�") : r = "涓撻绠€浠嬩笉寰椾负绌�", e.posts.length || (r = "鐩稿叧浣滃搧涓嶅緱涓虹┖");
        for (i in e.posts)url = e.posts[i], s[url] && (r = "鐩稿叧浣滃搧鐨勯摼鎺ヤ笉寰楅噸澶�"), s[url] = url;
        return r ? ($("#collect_create .error").show().text(r), !1) : e
    },
    uploadThing: function (e) {
        var t = this, n = !!e.parents(".music_add").length, r = n ? "/api/collect/uploadmusic.php" : "/api/posts/uploadimg", i = n ? "file" : "picfile", s = n ? null : e.parents(".manage_right").find(".u_add_img"), o = n ? null : s.find("img");
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $(".setadd").removeAttr("name"), e.attr({name: i, id: i}), $.ajaxFileUpload({
            url: r,
            secureuri: !1,
            fileElementId: i,
            dataType: "json",
            type: "post",
            success: function (e) {
                if (e.code == "A00000")if (n) {
                    var r = e.data.data;
                    $(".music_add .add_button,.upload_mp3").toggle().find(".d_mp3").find("p").text(r.name), t.music_url = r.url, t.music_name = r.name
                } else o.attr("src", e.data.picurl), s.find("a").attr("href", e.data.picurl); else showerrortip(PKINFO.eCode[e.code])
            },
            error: function (e, t, n) {
                console.log(e)
            }
        })
    },
    render_collect: function (e, t, n) {
        var r = t ? $(".main_cont") : $(".collect_container"), i = $(e);
        console.log(e, t), n && r.empty(), r.append(i), this.isloading = !1
    },
    submit_collect: function (e) {
        var t = !!$("#collect_id").length, n = t ? this.UPDATE_URL : this.CREATE_URL, r = this.get_param(e);
        if (!r)return !1;
        $.post(n, r, function (e) {
            e.code == "A00000" ? location.href = e.data.url : showerrortip(e.data.msg)
        }, "json")
    },
    get_param: function (e) {
        var t = $("input[name=name]"), n = $("textarea[name=description]"), r = $("textarea[name=rule]"), i = this, s = {
            id: $("#collect_id").val(),
            name: t.val(),
            description: n.val(),
            headerpic: $(".u_add_img img:first").attr("src"),
            coverpic: $(".u_add_img img:last").attr("src"),
            rule: r.val(),
            apply: e.attr("data-apply"),
            music_url: i.music_url,
            music_name: i.music_name
        }, o = !0;
        return s.name.length > 10 && (o = !1, text = "鏍囬闀垮害涓嶅緱瓒呰繃10涓瓧", e = t), s.description.length > 50 && (o = !1, text = "闀垮害涓嶅緱瓒呰繃50涓瓧", e = n), $(".error").hide(), o ? s : (e.parents(".manage_right").find(".error").show().text(text), !1)
    },
    add_collectItem: function () {
        var e = $("#collectlayer .c_text").val(), t = $("#collectid").val(), n = $("#collectlayer .error"), r = this;
        e.length ? $.post(r.ADD_POST, {id: t, url: e}, function (e) {
            e.code == "A00000" ? ($("#collectlayer").hide().find(".c_text").val(""), showerrortip("鎻愪氦鎴愬姛")) : showerrortip(e.data.msg)
        }, "json") : n.text("鍐呭涓嶈兘涓虹┖")
    },
    edit_bgImg: function () {
        var e = $(".s_detail_bgimg img"), t = $(".s_detail_bgimg"), n = e.width(), r = e.height(), i = t.height(), s;
        if (!e.length)return !1;
        s = -(r - i) / 2, r < i && (e.width(i * (n / r)), s = 0), e.css("top", s), jQuery.browser.msie && jQuery.browser.version <= 7 ? e.fadeIn(2500) : e.show()
    }
};
Pianke.user = {
    APPLY_URL: "/api/writer/apply",
    GET_POSTS_URL: "/api/posts/getuserposts.php",
    EDIT_LAYOUT: "/api/profile/layout.php",
    POST_RECOMMEND: "/api/posts/recommend.php",
    GET_SELECT_LIST: "/api/album/select.php",
    TAKE_SELECT_URL: "/api/album/taketo.php",
    iconurl: "",
    ready: !1,
    fall_canload: !0,
    cur_page: 1,
    op: {crop_icon_x: {}, crop_icon_y: {}, crop_icon_w: {}, crop_icon_ow: "", crop_icon_oh: ""},
    jcrop_api: "",
    init: function () {
        this.bindEvent(), this.bindChooselog()
    },
    bindEvent: function () {
        var e = this, t = $("div.contact li.current a").attr("source");
        $("div.bit.shadow div.inst_add p.fileupbox").append("<img style='display:none;' src='http://pkstatic.b0.upaiyun.com/images/loading.gif'>"), $("#picfile").bind("change", function () {
            e.initCropArea(), $("div.bit.shadow div.inst_add p.fileupbox img").show(), e.uploadImage(this)
        }), $(".edit_adress").bind("click", function () {
            var e = $("input.b_text,textarea.b_textarea").serializeArray(), t = {};
            for (i in e)t[e[i].name] = e[i].value;
            $.post("/api/user/setaddre.php", t, function (e) {
                if (e.code != "A00000") {
                    showerrortip(e.data.msg);
                    return
                }
                alert("淇濆瓨鎴愬姛"), setTimeout(function () {
                    location.reload()
                }, 3e3)
            }, "json")
        }), $(".approve_join,.approve_botton,.approve_author a,.approve_layer .close").bind("click", function () {
            $(".approve_layer").toggle()
        }), $(".approve_layer input").bind("focus", function () {
            $(this).removeClass("gray")
        }), $(".approve_layer .save_btn").bind("click", function () {
            e.submit_apply()
        }), $(".edit_avatar .login_true").bind("click", function () {
            e.saveImage(this)
        }), $(".bind_cont #password").keydown(function (t) {
            t.keyCode == 13 && e.set_email()
        }), $("#set_email").bind("click", function (t) {
            t.preventDefault(), e.set_email()
        }), $(".close").live("click", function () {
            $(".close").parents(".f_secret").hide()
        }), $(".delete-post").live("click", function () {
            var e = $(this), t = e.attr("data-id"), n = e.attr("data-type"), r = "/api/posts/del.php", i = "鍒涗綔", s = null;
            n === "talk" && (i = "纰庣墖", s = "/timeline", r = "/api/timeline/deltalk.php"), confirm("纭瑕佸垹闄よ繖鏉�" + i + "鍚楋紵", function () {
                $.post(r, {contentid: t}, function (t) {
                    if (t.code != "A00000") {
                        showerrortip(t.data.msg);
                        return
                    }
                    n != "talk" && s && (location.href = s), e.parents(".create_content").slideUp(function () {
                        $(this).remove()
                    })
                }, "json")
            })
        }), $(".f_right .close,.f_right .closed").live("click", function () {
            var t = $(this), n = t.attr("data-type"), r = t.attr("data-id"), i = "";
            switch (n) {
                case"posts":
                    i = "/api/wordcard/delposts.php", text = "璇嶅崱";
                    break;
                case"subject":
                    i = "/api/subject/subject_posts_del", text = "鍓у満";
                    break;
                case"talk":
                    i = "/api/timeline/deltalk.php", text = "鏃堕棿绾�";
                    break;
                case"topic":
                    i = "/api/topic/delposts", text = "鐭ヨ";
                    break;
                case"classic":
                    i = "/api/classic/delclassic", text = "Classic鎶曠ǹ"
            }
            e.del_profile_item(i, t, {contentid: r}, text)
        }), $(".contact").find(".icon7,.icon8").live("click", function () {
            var t = $(this), n = t.is(".icon7"), r = "/api/attention/" + (n ? "unfollow" : "follow"), i = {staruids: t.attr("data-id")}, s = $(".icon_name .icon4").next(), o = $(".icon_name .icon5").next(), u = t.parents(".info"), a = parseInt(s.text(), 10) + (n ? -1 : 1), f = n ? "鍏虫敞" : "鍙栨秷鍏虫敞", l = PKINFO.uinfo.uid == location.pathname.split("/")[2];
            e.get_attention(t, r, i, function () {
                t.toggleClass("icon8 icon7").attr("title", f), u.find(".icon6").toggle(), l == 1 && s.text(a);
                if (/fan/.test(location.pathname) && l == 1) {
                    var e = '<a href="javascript:void(0);" class="ic icon6 curon" title="宸蹭簰鐩稿叧娉�"></a>';
                    u.find(".icon6").length || u.append(e)
                }
            })
        }), $(".create_content .heading p").live("click", function () {
            var e = $(this);
            e.hasClass("gray") || (e.hide(), e.next().show().find("input").focus())
        }), $(".top_btn").live("click", function () {
            var t = $(this), n = t.is("[data-module]"), r = n ? parseInt(t.attr("data-recommend"), 10) : !t.hasClass("undo"), i = r ? 1 : 0, s = n ? e.EDIT_LAYOUT : e.POST_RECOMMEND, o = n ? null : t.parents(".create_content").attr("data-id");
            $.post(s, {contentid: o, module: t.attr("data-module"), recommend: i}, function (e) {
                e.code == "A00000" ? (t.text(i ? "鍙栨秷缃《" : "缃《").attr("data-recommend", i ? 0 : 1), n || t.toggleClass("undo")) : showerrortip(e.data.msg)
            }, "json")
        }), $(".title_edit input").blur(function () {
            var e = $(this);
            $.trim(e.val()) == "" && setTimeout(function () {
                e.parents(".title_edit").hide().prev().show()
            }, 200)
        }), $(".ok").live("click", function (e) {
            var t = $(this), n = $.trim(t.prev().val()), r = t.parents(".create_content").find(".icon").attr("data-id"), i = "/api/wordcard/updatetitle";
            location.href.split("/")[location.href.split("/").length - 1] == "feeling" && (i = "/api/topic/updatetitle"), n == "" ? alert("鏍囬涓嶈兘涓虹┖") : $.post(i, {
                contentid: r,
                title: n
            }, function (e) {
                e.code == "A00000" && (t.parents(".title_edit").hide(), t.parents(".heading").first().prepend('<h2><a href="/posts/' + r + '">' + e.data.data.title + "</a></h2>"))
            }, "json")
        }), e.msgTips("姝ｅ湪鍔犺浇,璇风◢鍊�..."), $("#friends_list .pages a.up").live("click", function () {
            return e.getFriendsList(parseInt($(".pages span.on").text()) - 1), !1
        }), $("#friends_list .pages a.next").live("click", function () {
            return e.getFriendsList(parseInt($(".pages span.on").text()) + 1), !1
        }), $("#friends_list .pages a:not(.next,.up)").live("click", function () {
            return e.getFriendsList(parseInt($(this).text())), !1
        }), $("#friends_list .invite_icon").live("click", function () {
            var t = $(this);
            e.sendInvitations(t)
        }), $(".contact ul.p_media.clearfix .nsina").click(function () {
            return $(".contact ul.p_media.clearfix li").attr("class", ""), $(this).parent().attr("class", "current"), e.getFriendsList(1), !1
        }), $(".contact ul.p_media.clearfix .ntt").click(function () {
            return $(".contact ul.p_media.clearfix li").attr("class", ""), $(this).parent().attr("class", "current"), e.getFriendsList(1), !1
        }), $(".contact ul.p_media.clearfix .nrenr").click(function () {
            return $(".contact ul.p_media.clearfix li").attr("class", ""), $(this).parent().attr("class", "current"), e.getFriendsList(1), !1
        }), $(".contact ul.p_media.clearfix .ndoub").click(function () {
            return $(".contact ul.p_media.clearfix li").attr("class", ""), $(this).parent().attr("class", "current"), e.getFriendsList(1), !1
        }), $("#friends_list .invit_bind a").live("click", function (t) {
            t.preventDefault(), e.openInviteOauth(this)
        })
    },
    bindChooselog: function () {
        var e = this;
        $(".log_cont").live("click", function () {
            var t = $(this), n = t.parents(".choose_log"), r = t.parents(".create_content").attr("data-id") || $("#contentid").val();
            n.data("log") ? n.find(".log_list").toggle() : $.getJSON(e.GET_SELECT_LIST, {contentid: r}, function (e) {
                e.code == "A00000" ? n.data("log", !0).find(".log_list").html(e.data.data.html).show() : showerrortip(e.data.msg)
            })
        }), $(".choose_log li").live("click", function () {
            var t = $(this), n = t.parents(".create_content").attr("data-id") || $("#contentid").val(), r = t.attr("data-id"), i = t.find(".selected").length ? 0 : 1;
            n ? $.post(e.TAKE_SELECT_URL, {albumid: r, contentid: n, action: i, _: (new Date).valueOf()}, function (e) {
                e.code == "A00000" ? i ? t.find("h4").after('<span class="selected"></span>') : t.find(".selected").remove() : showerrortip(e.data.msg)
            }, "json") : (i ? t.addClass("got_selected").find("h4").after('<span class="selected"></span>') : t.removeClass("got_selected").find(".selected").remove(), $("#albumids").val($.map($(".got_selected"), function (e) {
                return $(e).attr("data-id")
            }).join(",")))
        })
    },
    del_profile_item: function (e, t, n, r) {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        confirm("纭畾瑕佸垹闄よ繖鏉�" + r, function () {
            $.post(e, n, function (e) {
                switch (e.code) {
                    case"A00001":
                        return openlogintip(), !1;
                    case"A00000":
                        return t.parents(".model,.creation,.create_content").remove(), !0;
                    default:
                        return showerrortip(e.data.msg), !1
                }
            }, "json")
        }, !0, t)
    },
    get_attention: function (e, t, n, r) {
        $.post(t, n, function (t) {
            e.removeClass("gray");
            switch (t.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    return r(), !0;
                default:
                    return showerrortip(t.data.msg), !1
            }
        }, "json")
    },
    set_email: function () {
        email = $.trim($("#email").val()), pwd = $.trim($("#password").val());
        if (!email.length && !pwd.length)return msg_modal("閭鎴栧瘑鐮佷笉鑳戒负绌�"), !1;
        $.ajax({
            type: "POST",
            url: "/api/user/setemail",
            dataType: "json",
            data: {email: email, passwd: pwd},
            success: function (e) {
                e.code != "A00000" ? msg_modal(e.data.msg) : window.location = e.data.redirect
            }
        })
    },
    initCropArea: function () {
        var e = this;
        $("#crop_icon_x, #crop_icon_y, #crop_icon_w, #crop_icon_ow, #crop_icon_oh").val(0), e.ready = !1, e.jcrop_api && ($("#uploadArea").hide(), e.jcrop_api.destroy(), $("#jcrop_target").attr("style", ""))
    },
    showPreview: function (e) {
        var t = Pianke.user, n = 180 / e.w, r = 180 / e.w;
        $("#crop_icon_x").val(e.x), $("#crop_icon_y").val(e.y), $("#crop_icon_w").val(e.w), t.op.crop_icon_ow = $("#crop_icon_ow").val(), t.op.crop_icon_oh = $("#crop_icon_oh").val(), $("#preview").css({
            width: Math.round(n * t.op.crop_icon_ow) + "px",
            height: Math.round(r * t.op.crop_icon_oh) + "px",
            marginLeft: "-" + Math.round(n * e.x) + "px",
            marginTop: "-" + Math.round(n * e.y) + "px"
        })
    },
    showCoords: function (e) {
        $("#crop_icon_x").val(e.x), $("#crop_icon_y").val(e.y), $("#crop_icon_w").val(e.w)
    },
    uploadImage: function (e) {
        var t = this;
        return $.ajaxFileUpload({
            url: "/api/user/uploadicon",
            secureuri: !1,
            fileElementId: "picfile",
            dataType: "json",
            type: "post",
            success: function (e, n) {
                $("div.bit.shadow div.inst_add p.fileupbox img").hide(), e.code != "A00000" ? (alert(PKINFO.eCode[e.code]), t.ready = !1) : ($("#crop_icon_ow").val(e.data.w), $("#crop_icon_oh").val(e.data.h), $("#j-default-icon").hide(), $("#jcrop_target").attr("src", e.data.url + "?" + (new Date).getTime()), $("#preview").attr("src", e.data.rawurl + "?" + (new Date).getTime()), $("#uploadArea").show(), options = {
                    onChange: t.showPreview,
                    onSelect: t.showPreview
                }, $("#jcrop_target").Jcrop(options, function () {
                    t.jcrop_api = this, t.jcrop_api.animateTo([0, 0, 180, 180]), t.jcrop_api.setOptions({
                        allowSelect: !1,
                        allowMove: !0,
                        minSize: [50, 50],
                        maxSize: [300, 300],
                        aspectRatio: 1
                    }), t.ready = !0
                }), $("#picfile").bind("change", function () {
                    t.initCropArea(), $("div.bit.shadow div.inst_add p.fileupbox img").show(), t.uploadImage(this)
                }))
            },
            error: function (e, n, r) {
                t.ready = !1, alert(r)
            }
        }), !1
    },
    saveImage: function (e) {
        var t = this;
        t.op.crop_icon_x = $("#crop_icon_x").val(), t.op.crop_icon_y = $("#crop_icon_y").val(), t.op.crop_icon_w = $("#crop_icon_w").val(), t.op.crop_icon_ow = $("#crop_icon_ow").val(), t.op.crop_icon_oh = $("#crop_icon_oh").val();
        if (t.ready == 0)return;
        return $.ajax({
            url: "/api/user/genicon",
            type: "post",
            dataType: "json",
            data: {
                x: t.op.crop_icon_x,
                y: t.op.crop_icon_y,
                w: t.op.crop_icon_w,
                ow: t.op.crop_icon_ow,
                oh: t.op.crop_icon_oh
            },
            success: function (e) {
                e.code == "A00000" ? (alert("淇敼鎴愬姛"), t.initCropArea(), window.location.reload()) : alert(PKINFO.eCode[data.code])
            }
        }), !1
    },
    getFriendsList: function (e) {
        var t = $("div.contact li.current a"), n = t.attr("class").slice(5);
        return source = t.attr("source"), $("div.delete.radius.i_delete").show(), $.getJSON("/api/attention/getinvite", {
            page: e,
            source: source
        }, function (e) {
            e.code == "A00000" ? ($("div.delete.radius.i_delete").hide(), $("#friends_list").html(e.data.data)) : alert(PKINFO.eCode[e.code])
        }), !1
    },
    sendInvitations: function (e) {
        msg_modal("姝ｅ湪鍙戦€侀個璇�...");
        var t = e.prev().text(), n = $("div.contact li.current a").attr("source");
        $.getJSON("/api/attention/sendinvite", {uname: t, source: n}, function (e) {
            e.code == "A00000" ? setTimeout(function () {
                msg_modal("閭€璇峰彂閫佹垚鍔�")
            }, 2600) : alert(PKINFO.eCode[e.code])
        })
    },
    msgTips: function (e) {
        el = $("<div class='delete radius i_delete' style='display:none;white-space:nowrap '><div class='btn_control'><p  class='blue'>" + e + "</p></div></div>"), $("body").append(el)
    },
    openInviteOauth: function (e) {
        var t = $(e).attr("url"), n = this;
        setcookie("is_invite", null);
        var r = window.open("", "newwindow", "height=450, width=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no");
        r.location = t;
        var i = setInterval(function () {
            getSpecificCookie("is_invite").toString() == "true" && (n.getFriendsList(1), clearInterval(i))
        }, 100)
    },
    load_more: function () {
        var e = this, t;
        if (!e.fall_canload || location.pathname.split("/")[1] != "profile")return !1;
        e.cur_page += 1, e.fall_canload = !1, $.getJSON(e.GET_POSTS_URL, {
            uid: $("#uid").val(),
            page: e.cur_page,
            tag: $("input[name=tag]").val() || "",
            sort: $("input[name=sort]").val() || ""
        }, function (n) {
            n.code == "A00000" ? (t = n.data.data.html, t && ($(".create_content:last").removeClass("last").after(t), e.fall_canload = !0)) : showerrortip(n.data.msg)
        })
    },
    submit_apply: function () {
        var e = this, t = e.get_apply_data();
        t && $.post(e.APPLY_URL, t, function (e) {
            e.code == "A00000" ? ($(".approve_layer").hide().find("input:visible").val(""), showerrortip("鐢宠鎴愬姛锛佹垜浠畼鏂逛汉鍛樺皢浼氬敖蹇仈绯绘偍锛屽苟鍛婄煡鍏朵綑鐩稿叧浜嬪疁銆�")) : showerrortip(e.data.msg)
        }, "json")
    },
    get_apply_data: function () {
        var e = {}, t = {
            realname: "鐪熷疄濮撳悕",
            phone: "鎵嬫満鍙�",
            pin: "韬唤璇佸彿鐮�",
            email: "鐢靛瓙閭欢",
            address: "閫氳鍦板潃",
            card: "閾惰鍗′俊鎭�"
        };
        $.each($(".approve_layer input[name]"), function () {
            el = $(this), e[el.attr("name")] = el.attr("value")
        });
        for (i in t)if (!e[i].length)return showerrortip(t[i] + "涓嶈兘涓虹┖"), !1;
        return e
    }
};
Pianke.album = {
    ADD_ALBUM_URL: "/api/album/add.php",
    DEL_ALBUM_URL: "/api/album/del.php",
    EDIT_ALBUM_URL: "/api/album/update.php",
    ADD_PART_URL: "/api/album/addpart.php",
    SAVE_PART_URL: "/api/album/savepart.php",
    ALBUM_APPLY: "/api/album/apply",
    first_loaded: !1,
    replace_el: null,
    init: function () {
        this.bindEvent()
    },
    bindEvent: function () {
        var e = this;
        $(".editor_btn").bind("click", function () {
            $(".editor_layer").fadeIn(600)
        }), $("#delete_album,.delete_layer .save_btn,.delete_layer .close").bind("click", function () {
            $(".delete_layer").toggle()
        }), $(".delete_layer .delete_btn").bind("click", function () {
            var t = $("#albumid").val();
            $.post(e.DEL_ALBUM_URL, {albumid: t}, function (e) {
                alert("璇ユ枃闆嗗凡鍒犻櫎"), location.href = "/profile/" + PKINFO.uinfo.uid
            }, "json")
        }), $(".apply_btn,.corpus_layer .close").bind("click", function () {
            $(".corpus_layer").toggle()
        }), $(".corpus_layer .save_btn").bind("click", function () {
            $.post(e.ALBUM_APPLY, {
                albumid: $("#albumid").val(),
                reason: $(".corpus_layer textarea").val()
            }, function (e) {
                e.code == "A00000" ? (showerrortip("鎻愪氦鎴愬姛"), $(".corpus_layer").hide().find("textarea").val("")) : showerrortip(e.data.msg)
            }, "json")
        }), $(".ta_corpus li").hover(function () {
            $(this).css("zIndex", 2).find(".cover").fadeIn(200)
        }, function () {
            $(this).css("zIndex", 1).find(".cover").hide()
        }), $(".true_add").bind("click", function () {
            var t = $(".e_cont input").val(), n = $(".drag_cont li").length + 1;
            $(".e_cont input").val("").focus();
            if (!t.length)return showerrortip("鍦板潃涓嶈兘涓虹┖"), !1;
            $.post(e.ADD_PART_URL, {album: $("#albumid").val(), url: t}, function (e) {
                e.code == "A00000" ? (e = e.data.data, $(".drag_cont").append('<li data-id="' + e.contentid + '"><span class="number">' + n + '</span><a class="drag_btn">' + e.title + '</a><a href="javascript:void(0);" class="true_delete"></a></li>')) : showerrortip(e.data.msg)
            }, "json")
        }), $(".true_delete").live("click", function () {
            $(this).parent().remove(), e.refresh_num()
        }), $(".m_tag_cont a").bind("click", function () {
            var e = $(this);
            if (e.hasClass("current"))$(this).removeClass("current"); else {
                if ($(".m_tag_cont a.current").length >= 3)return !1;
                $(this).addClass("current")
            }
        }), $(".editor_layer .save_btn").bind("click", function () {
            e.submit_edit()
        }), $(".editor_layer .cancel_btn,.editor_layer .close").bind("click", function () {
            $(".editor_layer").hide()
        }), $("#submit_album").bind("click", function () {
            e.submit_ablum()
        }), $.browser.msie ? $(".album_add_img .setadd").bind("click", function () {
            var t = $(this), n = 0, r = function () {
                t.blur(), e.uploadImage(t)
            };
            clearInterval(t.data("st")), t.data("st", setInterval(function () {
                n >= 1e3 && clearInterval(t.data("st")), t.val().length > 0 && (r(), clearInterval(t.data("st"))), n += 1
            }, 300))
        }) : $(".album_add_img .setadd").bind("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadImage($(this))
        }), $(".p_nav a").bind("click", function () {
            var e = $(this).attr("data-type");
            $(".n_main_right .p_box").hide().filter('[data-type="' + e + '"]').show(), $(".p_nav a").removeClass("current"), $(this).addClass("current")
        }), $(".e_cont input").bind("focus", function () {
            $(this).val("").removeClass("gray")
        }), $(".drag_cont").length && ($(".drag_cont li").live("mousedown", function (t) {
            var n = $(this);
            t.preventDefault(), t.returnValue = !1, e.replace_el = n, n.addClass("on_drag")
        }), $(document).bind("mousemove", function (t) {
            if (!e.replace_el)return !1;
            t.preventDefault(), t.returnValue = !1;
            var n = t.clientY, r = e.replace_el, i = r.height(), s = r.offset().top, o = s + i, u = n > s, a = e.find_li(n);
            if (s < n && n < o)return !1;
            a && a != r && (u ? e.replace_el.insertAfter(a) : e.replace_el.insertBefore(a), e.refresh_num())
        }).bind("mouseup", function (t) {
            if (!e.replace_el)return !1;
            t.preventDefault(), t.returnValue = !1, e.replace_el.removeClass("on_drag"), e.replace_el = null
        })), $("#submit_sequence").bind("click", function () {
            e.submit_sequence()
        })
    },
    refresh_num: function () {
        $.each($(".drag_cont li"), function (e) {
            $(this).find(".number").text(e + 1)
        })
    },
    find_li: function (e) {
        var t = null;
        return $.each($(".drag_cont li"), function () {
            if (!t) {
                var n = $(this), r = n.offset().top, i = n.height() + r;
                r < e && e < i && (t = n)
            }
        }), t
    },
    submit_sequence: function () {
        var e = {
            albumid: $("#albumid").val(), ids: $.map($(".drag_cont li"), function (e) {
                return $(e).attr("data-id")
            }).join(",")
        }, t = this;
        $.post(t.SAVE_PART_URL, e, function (e) {
            e.code == "A00000" ? (alert("淇濆瓨鎴愬姛"), location.href = e.data.url) : showerrortip(e.data.msg)
        }, "json")
    },
    submit_edit: function () {
        var e = {
            albumid: $("#albumid").val(),
            desc: $("#desc").val(),
            remark: $("#remark").val(),
            finish: $("#finish").val(),
            tags: $.map($(".m_tag_cont a.current"), function (e, t) {
                return $(e).text()
            }).join(",")
        }, t = this;
        $.post(t.EDIT_ALBUM_URL, e, function (e) {
            e.code == "A00000" ? location.reload() : showerrortip(e.data.msg)
        }, "json")
    },
    uploadImage: function (e) {
        var t = this, n = "picfile";
        e.attr({id: n, name: n}), $.ajaxFileUpload({
            url: "/api/posts/uploadimg",
            secureuri: !1,
            fileElementId: n,
            dataType: "json",
            type: "post",
            success: function (e) {
                e.code == "A00000" ? $(".u_add_img").html('<img src="' + e.data.picurl + '"/>') : showerrortip(PKINFO.eCode[e.code])
            },
            error: function (e, t, n) {
                console.log(e)
            }
        })
    },
    submit_ablum: function () {
        var e = this, t = e.get_param(), n = !!$("#albumid").length, r = n ? e.EDIT_ALBUM_URL : e.ADD_ALBUM_URL, i = n ? "淇敼" : "鍒涘缓";
        t && $.post(r, t, function (e) {
            e.code === "A00000" ? showerrortip("鏂囬泦" + i + "鎴愬姛", function () {
                location.href = e.data.url
            }) : showerrortip(e.data.msg)
        }, "json")
    },
    get_param: function () {
        var e = {
            albumid: $("#albumid").val(),
            title: $("input[name=title]").val(),
            desc: $("textarea[name=desc]").val(),
            img: $(".u_add_img img:visible").attr("src"),
            type: $("select[name=type]").val(),
            style: $("select[name=style]").val(),
            gender: $("select[name=gender]").val()
        };
        return $.trim(e.title).length > 10 ? (showerrortip("璇疯緭鍏ユ枃闆嗘爣棰�,10瀛椾互鍐呫€�"), !1) : $.trim(e.desc).length > 200 ? (showerrortip("璇疯緭鍏ユ枃闆嗙畝浠�,200瀛椾互鍐呫€�"), !1) : e
    }
};
Pianke.detailpage = {
    LIKE_LIST: "/api/attitude/likelist",
    DEL_POST: "/api/posts/del",
    INFO_SIZE: 5,
    INFO_FULL_SIZE: 42,
    mouse_st: null,
    init: function () {
        switch (location.hash) {
            case"#comment":
                $(".detail_comment").show(), Pianke.comment.getcomment($(".entry"), 0, 1, !0, !1), $(document).scrollTop($(".detail_comment").offset().top - 100);
                break;
            case"#like":
                this.fill_info(null, $(".arrow_opend .arrow_people"));
                break;
            default:
        }
        this.bindEvent(), window.musicConf && (Pianke.write.xiamiEvent(), Pianke.write.render_xiamiplayer(musicConf.songid, $(".editor_music"), window.musicConf.isupdate))
    },
    bindEvent: function () {
        var e = this;
        $(".s_left.icon .like").mouseover(function () {
            if (!!$(".arrow_opend .arrow_people:visible").length)return;
            var e = $(this).parents(".icon").find(".arrow_people");
            e.show()
        }), $(".icon .arrow_people,.s_left .icon .like").mouseleave(function (e) {
            var t = $(e.relatedTarget);
            !t.hasClass("arrow_people") && !t.parents(".arrow_people").length && !t.hasClass("like") && $(".icon .arrow_people").hide()
        }), $(".arrow_people .hot_btn .r_icon").bind("click", function () {
            var t = $(this), n = t.hasClass("up"), r = $(".arrow_opend .arrow_people"), i = r.data("info"), s = i.page, o = i.max_page, u = s + (n ? -1 : 1);
            if (u > o || u == 0)return;
            i.page = u, r.data("info", i), e.fill_info(i, r)
        }), $(".get_more_like").bind("click", function () {
            e.open_like_list()
        }), $(".delete-post").bind("click", function () {
            var t = $(this), n = t.attr("data-id"), r = {contentid: n};
            confirm("纭瑕佸垹闄よ繖绡囨枃绔犲悧锛�", function () {
                $.post(e.DEL_POST, {contentid: n}, function (e) {
                    if (e.code != "A00000") {
                        showerrortip(e.data.msg);
                        return
                    }
                    location.href = e.data.data.url
                }, "json")
            })
        }), $(".p_nav a").bind("click", function () {
            var e = $(this), t = e.attr("data-type"), n = e.parents(".piece6");
            $(".p_nav a").removeClass("current"), e.addClass("current"), n.find(".p_box").hide().filter("[data-type=" + t + "]").show()
        }), $(".font_size").bind("click", function () {
            var e = $(this), t = e.hasClass("size_small"), n = t ? "size_16" : "size_14", r = t ? "size_14" : "size_16";
            $(".list_block .d_article .write").removeClass(n).addClass(r), $(".font_size").removeClass("current"), e.addClass("current")
        }), $(".list_block .increase_img img").live("click", function () {
            var e = $("a.increase img:first").attr("s_img"), t = $(".layer_pop.d_img img").attr("src", e), n = $(window).width(), r = $(window).height();
            window_per = n * (r / n), t.load(function () {
                var e = t.width();
                e > window_per && (e = window_per, t.width(e)), t.show().css({
                    "margin-top": -t.attr("height") / 2,
                    "margin-left": -e / 2
                })
            }), t.parents(".layer_pop").show()
        }), $(".layer_pop.d_img").bind("click", function (e) {
            $(this).hide()
        }), $("#deleteposts").bind("click", function () {
            confirm("纭瑕佸垹闄よ繖鏉″垱浣滃悧锛�", function () {
                $.post("/api/detailpage/delposts.php", {contentid: $(".entry .send").attr("data-id")}, function (e) {
                    if (e.code != "A00000") {
                        showerrortip(e.data.msg);
                        return
                    }
                    location.href = e.data.data.redirect
                }, "json")
            })
        }), $(".t_icon").bind("click", function () {
            var e = $(this), t = $(".entry .send").attr("data-id"), n = e.hasClass("love");
            if (!PKINFO.islogin)return openlogintip(), !1;
            n ? (url = "/api/fav/" + (n && e.hasClass("current") ? "del" : "add") + "fav", param = {contentid: t}) : (url = "/api/attitude/like", param = {
                id: t,
                type: 1
            }), $.post(url, param, function (t) {
                t.code == "A00000" ? (e.toggleClass("current"), t.data.data && (num = n ? t.data.data.fav : t.data.data.good, e.next().text(num))) : showerrortip(t.data.msg)
            }, "json")
        }), $(".detail_list .detail_list_toggle.close").bind("click", function () {
            var e = $(".detali_article_list");
            $.browser.msie ? e.animate({left: -e.width()}, 900, function () {
                $(this).hide()
            }) : e.css({left: -e.width()})
        }), $(".unfold").bind("click", function () {
            var e = $(".detali_article_list");
            e.css("left", -e.width()).show().animate({left: 0}, 300)
        })
    },
    open_like_list: function (e) {
        var t = $(".arrow_opend .arrow_people"), n = t.data("info"), r = this;
        t.is(":visible") ? e || t.hide() : (r.fill_info(n, t), $(".detail_comment,.entry").hide())
    },
    get_info: function (e) {
        var t = e.data.data.list, n = this.INFO_FULL_SIZE, r = t.length, i = Math.floor(r / n) + (r % n == 0 ? 0 : 1);
        return info = {data: t, page: 1, max_page: i}
    },
    create_info: function (e, t) {
        var n = this;
        $.getJSON(this.LIKE_LIST, {id: t}, function (t) {
            t.code == "A00000" ? (info = n.get_info(t), e.data("info", info), n.fill_info(info, e)) : showerrortip(t.data.msg)
        })
    },
    fill_info: function (e, t) {
        if (e) {
            var n = [], r = "", i = this.INFO_FULL_SIZE, s = e.data.length > i;
            for (var o = 0; o < i; o++) {
                var u = o + (Number(e.page) - 1) * i;
                if (!e.data[u])break;
                n.push(e.data[u])
            }
            r = this.return_fill_str(n), $(".icon .arrow_people").hide(), t.show().find(".hot_btn").toggle(s).end().find("ul").html(r)
        } else this.create_info(t, $(".icon").attr("data-id"))
    },
    return_fill_str: function (e) {
        var t = "";
        for (i in e)user_info = e[i], t += this.fill_item(user_info);
        return t
    },
    fill_item: function (e) {
        return str = e ? '<li title="' + e.uname + '"><a target="_blank" href="/profile/' + e.uid + '"><img src="' + e.icon + '"></a></li>' : "", str
    }
};
Pianke.topic = {
    ISLOADMORE: !0, scrollLoad: !0, init: function () {
        this.bindEvent()
    }, text_tips: "璇寸偣浠€涔堝惂锛�", bindEvent: function () {
        var e = this;
        $(".write textarea").length && $(".write textarea").autosize(), $(".topic_l .s_topic").click(function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1
        }), $("#submore").hide(), $("#currenloadpageno").val((Number($("#currenpageno").val()) - 1) * 3 + 1), $(".card_editor .title input").bind("focus", function () {
            var e = $(this), t = e.val();
            t == "濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�" && e.val("")
        }).bind("blur", function () {
            var e = $(this), t = $.trim(e.val());
            t == "" && $(this).val("濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�")
        }), $(".card_editor .write textarea").bind("keydown", function (e) {
            var t = $(this).val();
            t.split("\n").length >= 40 && e.keyCode == 13 && e.preventDefault()
        }), $(".card_editor .essay h2").bind("click", function () {
            $(".card_editor .essay .pen").toggle()
        }), $(".card_editor .storystyle .style_more a").bind("click", function () {
            var e = $(this).attr("data-id");
            $(".card_editor .storystyle .style_more a").removeClass("on"), $(this).addClass("on"), $(".card_editor .storystyle .more_tag .m_tag_cont").hide().filter('[data-id="' + e + '"]').show(), $(".card_editor .storystyle .more_tag .m_tag_cont a").removeClass("on")
        }), $(".card_editor .storystyle .more_tag .m_tag_cont a").bind("click", function () {
            $(this).toggleClass("on"), $(this).parent().find("a.on").length > 3 && $(this).removeClass("on")
        }), $(".true_enter textarea").bind("focus", function () {
            var t = $(this), n = t.val();
            e.text_tips == n && t.val("").removeClass("gray")
        }).bind("blur", function () {
            var t = $(this), n = t.val();
            "" == n && t.val(e.text_tips).addClass("gray")
        }), $(".say_but").bind("click", function () {
            var t = $(".true_enter textarea"), n = t.val();
            if (n.length == 0 || n == e.text_tips && t.hasClass("gray"))$(".true_enter .red").show(); else {
                var r = "/api/topic/addposts", i = {topicid: $("#topic_id").val(), content: n};
                $.post(r, i, function (e) {
                    $(".true_enter .red").hide();
                    switch (e.code) {
                        case"A00001":
                            return openlogintip(), !1;
                        case"A00000":
                            return html = e.data.data.html, $(".topic_list").prepend(html), t.val(""), !0;
                        default:
                            return showerrortip(e.data.msg), !1
                    }
                }, "json")
            }
        }), $(".del_topic").live("click", function () {
            var e = $(this), t = e.attr("data-id"), n = e.parents(".create_content"), r = n.hasClass("first") ? "first" : "";
            confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯鍐呭锛�", function () {
                var e = {contentid: t};
                $.post("/api/topic/delposts", e, function (e) {
                    e.code === "A00000" ? /fposts/.test(location.pathname) ? location.href = "/feeling/" : (n.slideUp(function () {
                        n.remove()
                    }), $(".create_content:first").addClass(r)) : showerrortip(e.data.msg)
                }, "json")
            })
        }), $(".topic_posts_pagination .pages a").live("click", function () {
            var t = $(this);
            return e.ajax_load(t, "", ""), !1
        }), $(".topic_style_list a").live("click", function () {
            var t = $(this);
            return $(".topic_style_list a").removeClass("current"), t.addClass("current"), $(".main_cont .cont").remove(), e.ajax_load(t, "", 1), !1
        }), location.pathname.split("/")[1] == "feeling" && location.pathname.split("/").length < 4 && ($("#submore").text("鏁版嵁鍔犺浇涓�,璇风◢鍊�..."), $(window).scroll(function () {
            e.autoLoading()
        }), $(document).height() <= parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500 && e.autoLoading())
    }, autoLoading: function () {
        var e = 0, t = this, n = $("#currenloadpageno").val() % 3 != 0;
        totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500, $(document).height() <= totalheight && $("#topicid").val() && n && !$(".topic_posts_pagination .pages").first().find("a")[0] && t.scrollLoad == 1 && t.ISLOADMORE == 1 && (t.scrollLoad = !1, t.loadmoreposts())
    }, loadmoreposts: function () {
        if ($(".topic_style_list").length) {
            var e = this, t = $("#currenloadpageno").val(), n = Number(t) + 1, r = $("#currenpageno").val(), i = $("#topicid").val(), s = s || 15, o = $(".topic_style_list a.current").attr("s-key");
            $("#submore").show().text("鏁版嵁鍔犺浇涓�,璇风◢鍊�..."), $("#errormsg").show();
            var u = {topicid: i, page: r, load_page: n, sort: o, size: s};
            return $.ajaxSetup({cache: !1}), $.post("/api/topic/getposts", u, function (t) {
                $("#errormsg").hide();
                if (t.code != "A00000")return !1;
                $("#currenloadpageno").val(n), $("#errormsg").before(t.data.data.html), e.scrollLoad = !0;
                if (t.data.data.curtotal < 1 && !$(".create_content").length) {
                    e.ISLOADMORE = !1;
                    var r = '<div class="cont"><div class="none">鏆傛椂杩樻病鏈変粈涔堝彲鎺ㄨ崘鐨勩€�</div> <div class="clear"></div></div>';
                    return $("#errormsg").hide().before(r), !0
                }
                t.data.data.curtotal < 15 && (e.ISLOADMORE = !1)
            }, "json"), !0
        }
    }, ajax_load: function (e, t, n) {
        var r = this, i = "/api/topic/getNpagePosts.php", s = $("#topicid").val(), t = t || 15, o = $(".topic_style_list .current").attr("s-key"), n = n ? n : e.text();
        switch (n) {
            case"涓婇〉":
                n = Number($(".pages .on").text()) - 1;
                break;
            case"涓嬮〉":
                n = Number($(".pages .on").text()) + 1;
                break;
            default:
                n = n
        }
        var u = {page: n, topicid: s, size: t, sort: o};
        $.post(i, u, function (e) {
            if (e.code != "A00000")return !1;
            $("#currenpageno").val(n), $(".create_content, .pages").remove(), $("#errormsg").before(e.data.data.html), window.scroll(0, $(".index_title").offset().top - 50), $("#currenloadpageno").val(e.data.data.load_page), r.ISLOADMORE = !0
        }, "json")
    }
};
Pianke.LayerLogin = {
    init: function () {
        this.checkEmpty(), this.bindEvent()
    }, checkEmpty: function () {
        var e = ".registerform", t = $(e + " input");
        for (var n = 0; n < t.length; n++)$(t[n]).val() != "" && $(".placehoder", $(t[n]).parent().parent()).hide()
    }, bindEvent: function () {
        var e = this, t = "#fixedlogin .registerform";
        $(t + " input").focus(e.getFocus()).blur(e.loseFocus()), $(".away .loginw").bind("click", function () {
            e.clickOnRegBtn()
        })
    }, clickOnRegBtn: function (e) {
        var t = this;
        e && e.preventDefault && e.preventDefault();
        if ($(this).attr("logining"))return;
        $(this).attr("logining", !0), t.login(this)
    }, getFocus: function () {
        var e = this;
        return function (e) {
            $(".placehoder", $(this).parent().parent()).hide()
        }
    }, loseFocus: function () {
        var e = this;
        return function (e) {
            $.trim($(this).val()) == "" && ($(".placehoder", $(this).parent().parent()).show(), $(this).val(""))
        }
    }, login: function (e) {
        var e = this, t = $.trim($("#layer_email").val()), n = $.trim($("#layer_pass").val()), r = $("#fixedlogin .fromurl").val();
        if (t == "" || n == "") {
            $(e).removeAttr("logining");
            return
        }
        $.ajax({
            url: "../../api/user/login",
            type: "POST",
            data: "email=" + t + "&fromurl=" + r + "&passwd=" + n,
            dataType: "json",
            success: function (t) {
                t.code != "A00000" ? ($(".registerform .ts").html(PKINFO.eCode[t.code]).show(), $(e).removeAttr("logining")) : e.updateUser(t)
            }
        })
    }, updateUser: function (e) {
        el = '<a class="name_pic" href="/profile/"><img src="' + e.data.icon + '"></a><div class="account"><a href="#" class="off">甯愬彿<span class="xia"></span></a><ul class="xl radius shadow1" style="display: none;"><li><a href="/user/setinfo.php">甯愬彿璁剧疆</a></li><li><a href="/commentbox/inbox">娑堟伅涓績</a></li><li><a href="/user/logout.php">閫€鍑�</a></li></ul></div>', $(".weibo:first").html(el).attr("id", "logininfobox"), $(".loginw,.login_point").remove(), $(".entry .texta,.add,.send,.entry textarea").show(), $(".head").append('<div class="new_idea" id="newunread" style="display: none;"><div class="box"></div></div>'), window.PKINFO = {
            islogin: 1,
            uinfo: {uid: e.data.uid, uname: e.data.uname, icon: e.data.icon}
        }, $("#fixedlogin").slideDown(200, function () {
            $(this).remove()
        }), $("#logininfobox .account").hover(function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = $("ul", $(this));
            t.show(), $("a", $(this)).get(0).className = "on"
        }, function (e) {
            $("a", $(this)).get(0).className = "off";
            var t = $("ul", $(this));
            t.hide()
        }), $("#logininfobox .account > a").click(function (e) {
            e.preventDefault()
        })
    }
};
Pianke.timeline = {
    init: function () {
        this.bindEvent(), /timeline/.test(location.pathname) && Pianke.comment.getcomment($(".entry"), 0, 1, !0)
    }, bindEvent: function () {
        var e = this;
        $(".model .cls,.model .big,.model .big1").live("click", function () {
            var e = $(this).parents(".model"), t = e.parents(".block");
            e.toggleClass("zindex").find(".item").toggleClass("layermo").end().find("p").toggle().end().find(".big,.big1").toggle(), t.toggleClass("zindex")
        }), $(".addphotos .cl").bind("click", function () {
            $(".uploading").hide().data("img_url", "")
        }), $(".model").mouseleave(function () {
            $(this).find(".delete").hide()
        }), $.browser.msie ? $("#upphoto").live("click", function (t) {
            var n = $(this), r = 0, i = function () {
                n.blur(), $(".add_cont .a_image").parent().show(), e.UP_LOAD_IMG = !0, e.uploadImage()
            };
            clearInterval(n.data("st")), n.data("st", setInterval(function () {
                r >= 1e3 && clearInterval(n.data("st")), n.val().length > 0 && (i(), clearInterval(n.data("st"))), r += 1
            }, 300))
        }) : $("#upphoto").die("change").live("change", function () {
            if (PKINFO.islogin == 0)return openlogintip(), !1;
            e.uploadImage()
        }), $(".time_m .send").bind("click", function () {
            e.submittalk()
        }), $("#content").bind("keyup", function () {
            var e = $(this).val().length;
            $("#contentnum").text(e), e > 140 ? $("#contentnum").parent().addClass("bold_red") : $("#contentnum").parent().removeClass("bold_red")
        }), $("#mood_list a.color").live("click", function () {
            $("#mood_list a.color").removeClass("current"), $(this).addClass("current")
        }), $(".timeline_loading").live("click", function () {
            e.loadmoretimeline("new")
        }), $("#my_loading").live("click", function () {
            e.loadmoremytimeline("new")
        }), $("#timelinelist .delete_item").live("click", function () {
            $(this).next().show()
        }), $("#timelinelist .submit_del").live("click", function () {
            id = $(this).attr("data-id"), e.deltalk(id, $(this))
        }), $("#timelinelist .cancel").live("click", function () {
            $(this).parents(".radius").hide()
        })
    }, submittalk: function () {
        if (!addtalkswitch)return !1;
        var e = $("#content").val(), t = $("#mood_list a.current").find("span").attr("class"), n = $("#firstid").val(), r = $("#firstday").val(), t = t || "";
        if ($.trim(e).length == 0)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
        var i = {content: e, color: t, firstid: n, firstday: r, firstimage: $(".uploading").data("img_url")};
        return addtalkswitch = !1, $.post("/api/timeline/addtalk.php", i, function (e) {
            $(".uploading").hide().data("img_url", ""), addtalkswitch = !0;
            switch (e.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    return $("#content").val(""), e.data.data.list == "" ? $("#timelinelist div.model").first().before(e.data.data.tmplist) : e.data.data.tmplist == "" && $("#timelinelist").prepend(e.data.data.list), $("#firstday").val(e.data.data.firstday), !0;
                default:
                    return showerrortip(e.data.msg), !1
            }
        }, "json"), !0
    }, loadmoretimeline: function (e) {
        ShareClickCount("timeline");
        var t = $("#currenpageno").val(), n = $("#lastid").val(), r = Number(t) + 1;
        return "" != n && "undefined" != typeof n || "" != r && "undefined" != typeof r || "undefined" != typeof e ? ($("#submore").hide(), $("#loading").show(), $.post("/api/timeline/gettalk.php", {
            lastid: n,
            page: r,
            sort: e
        }, function (e) {
            if (e.code != "A00000")return $("#submore").html("璇烽噸璇曪紝鍔犺浇鏇村"), $("#loading").hide(), $("#submore").show(), !1;
            if (e.data.data.curtotal < 1)return $("#submore").html('<span class="gray">鎶辨瓑锛屽凡缁忔病鏈夋洿澶�</span>'), $("#loading").hide(), $("#submore").show(), !0;
            $("#currenpageno").val(r), $("#lastid").val(e.data.data.lastid), e.data.data.list == "" ? $("#timelinelist div.model").last().after(e.data.data.tmplist) : e.data.data.tmplist == "" ? $("#timelinelist").append(e.data.data.list) : ($("#timelinelist div.model").last().after(e.data.data.tmplist), $("#timelinelist").append(e.data.data.list)), $("#loading").hide(), $("#submore").show(), e.data.data.curtotal < 16 ? $("#errormsg").hide() : $("#errormsg").show()
        }, "json"), !0) : (showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1)
    }, loadmoremytimeline: function (e) {
        var t = $("#currenpageno").val(), n = $("#lastid").val(), r = $("#uid").val(), i = Number(t) + 1;
        return "" == n || "undefined" == typeof n && "" == i || "undefined" == typeof i && "undefined" == typeof e ? (showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1) : ($("#submore").hide(), $("#loading").show(), $.post("/api/timeline/gettalk.php", {
            lastid: n,
            uid: r,
            page: i,
            sort: e
        }, function (e) {
            if (e.code != "A00000")return $("#submore").html("璇烽噸璇曪紝鍔犺浇鏇村"), $("#loading").hide(), $("#submore").show(), !1;
            if (e.data.data.curtotal < 1)return $("#submore").html('<span class="gray">鎶辨瓑锛屽凡缁忔病鏈夋洿澶�</span>'), $("#loading").hide(), $("#submore").show(), !0;
            $("#currenpageno").val(i), $("#lastid").val(e.data.data.lastid), e.data.data.list == "" ? $("#timelinelist div.model").last().after(e.data.data.tmplist) : e.data.data.tmplist == "" ? $("#timelinelist").append(e.data.data.list) : ($("#timelinelist div.model").last().after(e.data.data.tmplist), $("#timelinelist").append(e.data.data.list)), $("#loading").hide(), $("#submore").show(), e.data.data.curtotal < 16 ? $("#errormsg").hide() : $("#errormsg").show()
        }, "json"), !0)
    }, deltalk: function (e, t) {
        if ("" == e || "undefined" == typeof e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
        var n = t.parents(".block").find(".model").length, r = {contentid: e};
        return $.post("/api/timeline/deltalk.php", r, function (e) {
            switch (e.code) {
                case"A00001":
                    return openlogintip(), !1;
                case"A00000":
                    return n - 1 == 0 ? t.parents("div.block").remove() : t.parents(".model").remove(), !0;
                default:
                    return showerrortip(e.data.msg), !1
            }
        }, "json"), !0
    }, uploadImage: function () {
        var e = this, t = "/api/posts/uploadimg";
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        $(".uploading,.isuploading").show(), $(".current-photo").hide(), $.ajaxFileUpload({
            url: t,
            secureuri: !1,
            fileElementId: "upphoto",
            dataType: "json",
            type: "post",
            success: function (e) {
                e.code == "A00000" ? ($(".isuploading").hide(), $(".current-photo").show().find("p a").text(e.data.name.substring(0, 20)).attr("href", e.data.picurl), $(".uploading").data("img_url", e.data.picurl)) : showerrortip(e.data.msg)
            },
            error: function (e, t, n) {
                console.log(e)
            }
        })
    }
};
Pianke.create = {
    GET_POST: "/api/create/getposts",
    ADD_POST_URL: "/api/create/addposts",
    UPDATE_POST_URL: "/api/create/updateposts",
    POST_MAX_LEN: 1e4,
    music_url: $("#musicurl").val(),
    h5_player: null,
    on_count: !1,
    time: 0,
    st: null,
    el_map_data: [],
    on_check: !0,
    in_page: /create/.test(location.href),
    title_tips: "濡傛灉闇€瑕佹爣棰橈紝閭ｅ氨鍐欏湪杩欏効鍚�",
    $NAV_OFFSET: 85,
    init: function () {
        this.bindEvent(), this.create_player(), this.counter_animate(), this.auto_grow(), this.recount_text(), Pianke.wordcard.multi_bind(), Pianke.comment.getcomment($(".entry"), 1, 1, !0)
    },
    bindEvent: function () {
        var e = this;
        e.bindPlayer(), $(".vote_btn").bind("click", function () {
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            var e = $(this).attr("data-id");
            $.post("/api/attitude/vote", {id: e}, function (e) {
                showerrortip(e.data.msg)
            }, "json")
        }), e.el_map_data.length || (e.el_map_data = $.map($(".event-nav li a"), function (t, n) {
            return next_el = $(".event-nav li a:eq(" + (n + 1) + ")"), x1 = next_el.length ? $(next_el[0].hash).offset().top : $("body").height(), offset = e.$NAV_OFFSET + $(".event-nav li").height(), {
                x: $(t.hash).offset().top - offset,
                x1: x1 - offset
            }
        })), $(window).scroll(function () {
            page = window.page = window.page || 1, e.on_check && e.check_position(e.el_map_data)
        }), $(".brief_edit").bind("click", function () {
            $(".enter_brief,.cont_brief").toggle()
        }), $(".enter_brief .send").bind("click", function () {
            $.post("/api/create/adddesc.php", {
                contentid: $(".vote_btn").attr("data-id"),
                desc: $(".enter_brief textarea").val()
            }, function (e) {
                e.code == "A00000" ? location.reload() : showerrortip(e.data.msg)
            }, "json")
        }), $(".change_btn").bind("click", function () {
            var t = $(this), n = !!$(".list_tab a.current").index(), r = {
                style: n ? "list" : "thumb",
                id: $("#create_id").val(),
                stylenum: $("#stylenum").val() || 0
            };
            $.getJSON(e.GET_POST, r, function (e) {
                e.code == "A00000" && (_top = $(".list_tab_cont").offset().top - 130, $("html,body").animate({scrollTop: _top}, 300), inner = $(".list_tab_cont ul"), e = e.data.data, $("#stylenum").val(e.stylenum), inner.html(e.html))
            })
        }), $(".operating .send").bind("click", function () {
            e.submit_post()
        }), $(".event-nav li").bind("click", function (t) {
            t.preventDefault(), e.check_event_nav($(this).index(), !0)
        }), $(".card_editor .write textarea").bind("keydown", function (e) {
            var t = $(this).val(), n = t.length
        }).bind("keyup", function () {
            var t = e.recount_text();
            e.auto_grow(), t > e.POST_MAX_LEN ? $("#contentlengthnum").parent().addClass("bold_red") : $("#contentlengthnum").parent().removeClass("bold_red")
        }), $(".like_btn").bind("click", function () {
            var e = $(this), t = $("#contentid").val();
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            $.post("/api/attitude/love.php", {id: t}, function (e) {
                e.code == "A00000" ? $(".like_btn span").text(e.data.data.love) : e.code == "A00001" ? openlogintip() : showerrortip(e.data.msg)
            }, "json")
        })
    },
    recount_text: function () {
        var e = $("#contentlengthnum"), t = $(".card_editor .write textarea"), n = 0;
        return e.length && t.length && (n = t.val().length, e.text(n)), n
    },
    bindPlayer: function () {
        var e = this;
        $(".play,.pause").live("click", function () {
            var t = $(this).hasClass("pause");
            $(".play,.pause").toggle(), e.h5_player_play(t)
        })
    },
    h5_player_play: function (e) {
        var t = this;
        e ? (t.first_play && (t.send_listencount(), t.first_play = !1), t.h5_player.play()) : t.h5_player.pause()
    },
    auto_grow: function () {
        var e = $("#__grow"), t = $(".card_editor .write textarea");
        if (!t.length)return !1;
        e.length || (e = $("<div>").attr("id", "__grow"), e.css({
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "hidden",
            display: "none",
            "font-size": "14px",
            "line-height": "25px",
            width: t.width(),
            opacity: 0
        }), $("body").append(e)), e.html(t.val().replace(/\n/g, "<br>")), e.height() > 300 ? t.height(e.height()) : t.height(300)
    },
    submit_post: function () {
        var e = $("#createid").val(), t = $("#contentid").val(), n = $(".card_editor .write textarea").val(), r = $(".storystyle a.on").attr("s-key"), i = $(".card_editor .title input").val() == this.title_tips ? "" : $(".card_editor .title input").val(), s = $(".essay .pen textarea").val(), o = $(".a_image img:first").attr("src"), u = this, a = [], f = $(".more_tag .m_tag_cont a.on");
        f.each(function (e) {
            a.push($(this).attr("key"))
        });
        if ("" == n)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
        "" == r && (r = 1);
        if (!f.length)return showerrortip("鎶辨瓑锛岃繕娌℃湁閫夋嫨浣滃搧椋庢牸锛�"), !1;
        var l = {createid: e, content: n, style: r, title: i, remark: s, img: o, tags: a}, c = u.ADD_POST_URL;
        location.href.split("/")[location.href.split("/").length - 1] == "update" && (c = u.UPDATE_POST_URL, l.contentid = t);
        var h = $(".card_editor .write textarea").val(), p = h.length;
        if (p > u.POST_MAX_LEN) {
            msg_modal("鍐呭涓嶈兘澶т簬10000瀛�", 2e3);
            return
        }
        this.submit_wordcard(c, l)
    },
    submit_wordcard: function (e, t) {
        var n = this;
        $.post(e, t, function (e) {
            return "A00001" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? (location.href = e.data.data.url, !1) : (showerrortip(e.data.msg), !1)
        }, "json")
    },
    counter_animate: function () {
        var e = $(".e_minute"), t = $(".e_hour"), n = parseInt(e.text(), 10), r = parseInt(t.text(), 10), i = this;
        i.time = n + r * 60, i.st = setInterval(function () {
            i.time -= 1;
            var n = i.time, r = n % 60, s = Math.floor(n / 60);
            r == 0 && s == 0 && clearInterval(i.st), r = r >= 10 ? r : "0" + r, e.text(r), t.text(s)
        }, 6e4)
    },
    create_player: function (e) {
        var t = this, n = t.in_page ? $(".i_new_main") : $(".broadcast"), r = String(e);
        r != "undefind" && (t.on_count = !0), window.HAS_AUDIO && !$.browser.msie ? str = t.html5_player() : str = t.flash_player(e), t.h5_player && t.h5_player.pause(), $(".create_broadcast").remove(), n.append('<div class="create_broadcast">' + str + "</div>"), t.h5_player = document.getElementById("h5_player"), t.h5_player && (t.h5_player.addEventListener("ended", function () {
            t.h5_player.currentTime = 0, t.h5_player_play(!0), t.send_listencount()
        }), e ? (t.first_play = !0, t.h5_player_play(!1), n.find(".play").hide()) : (t.h5_player_play(!0), t.send_listencount(), n.find(".pause").hide()))
    },
    check_position: function (e) {
        var t = this, n = $(window).scrollTop();
        for (i in e) {
            var r = e[i];
            if (r.x <= n && r.x1 >= n) {
                t.check_event_nav(i);
                return
            }
        }
        $(".event-nav").removeClass("event-nav-top"), $(".event-nav li").removeClass("active").filter(":eq(0)").addClass("active")
    },
    check_event_nav: function (e, t) {
        var n = this;
        $(".event-nav").hasClass("event-nav-top") || $(".event-nav").addClass("event-nav-top"), $(".event-nav li").removeClass("active").filter(":eq(" + e + ")").addClass("active");
        if (t) {
            n.on_check = !1;
            var r = n.el_map_data[e].x + 1;
            $("html,body").animate({scrollTop: r}, 500, function () {
                n.on_check = !0
            })
        }
    },
    send_listencount: function () {
        var e = this, t = $(".broadcast").attr("data-tingid");
        t && e.on_count && $.getJSON("/api/ting/count?tingid=" + t, function (e) {
            if (e.code == "A00000")return !0
        })
    },
    flash_player: function (e) {
        var t = this.in_page ? "create_player" : "topic_player", n = "http://pkstatic.b0.upaiyun.com/" + t + ".swf?mp3=" + this.music_url + (e ? "&auto=0" : "");
        return $.browser.mozilla ? '<embed width="44" height="44"  src="' + n + '" type="application/x-shockwave-flash"  wmode="transparent"/>' : '<object id="create_player" width="44" height="44" classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" type="application/x-shockwave-flash"><param name="movie" value="' + n + '"><param name="wmode" value="transparent"/><embed wmode="transparent" width="44" height="44" src="' + n + '" name="create_player" pluginspage="http://www.macromedia.com/go/getflashplayer"/></object>'
    },
    html5_player: function () {
        var e = this.in_page ? "new_index" : "subject";
        return '<audio id="h5_player" preload="auto" src="' + this.music_url + '"><source src="' + this.music_url + '" type="audio/mp3"/></audio><img src="http://pkstatic.b0.upaiyun.com/images/' + e + '/broadcast.png" class="play"><img src="http://pkstatic.b0.upaiyun.com/images/' + e + '/broadcast_stop.png" class="pause">'
    }
};
Pianke.message = {
    init: function (e) {
        this.bindEvent()
    }, bindEvent: function () {
        var e = this, t, n, r, i, s = $("div.topic").find("h2 span").text(), o = $(".current").find(".num").text();
        $(".say li").bind("mouseenter", function () {
            $(this).find(".close").show()
        }), $(".say li").bind("mouseleave", function () {
            $(this).find(".close").hide()
        }), $(".close").hide(), /鍒犻櫎/.test($(".say li").find(".out").text()) && $(".say li").find(".out").hide(), /鍒犻櫎/.test($(".say li").find(".out").text()) && ($(".say li").live("mouseenter", function () {
            var e = $(this).find(".out");
            e.show()
        }), $(".say li").live("mouseleave", function () {
            var e = $(this).find(".out");
            e.hide()
        })), $(".reset").html() == "鍥炲" && $(".reset").click(function () {
            return $("textarea")[0].focus(), !1
        }), $(".send").bind("click", function () {
            var e = $(".send").attr("data-id"), t = $("textarea:not([data-id])").val(), n = 500;
            if (t.length > n)return alert("鐗囬偖姝ｆ枃闄愬埗" + n + "瀛椾互鍐�"), !1;
            $.trim(t) != "" && $.post("/api/message/send", {withuid: e, content: t}, function (e) {
                e.code == "A00000" ? ($("textarea").val(""), $("textarea")[0].focus(), s = s - 0 + 1, $("h2 span").text(s), $(".say").prepend(e.data.data.html), $(".delete").fadeIn().fadeOut(2e3)) : alert(PKINFO.eCode[e.code])
            }, "json")
        }), $(".say .reset").html() == "蹇€熷洖澶�" && $(".say .reset").bind("click", function (e) {
            var t = $(this), n = t.parent().parent().find("a.comment_user_name").attr("href").split("/")[2], r = t.parents("li").find(".name").text(), i = r.slice(1, r.length - 1);
            initMailBox(i, n)
        }), /鍒犻櫎/.test($(".say li").find(".out").text()) && $(".out").live("click", function (e) {
            var t = $(e.target), n = $(".send").attr("data-id"), r = t.parent().parent().attr("id");
            confirm("鎮ㄧ‘瀹氳鍒犻櫎璇ユ潯瀵硅瘽锛�", function () {
                $.post("/api/message/delete", {withuid: n, contentid: r}, function (e) {
                    e.code == "A00000" && (t.parent().parent().remove(), s -= 1, $("h2 span").text(s))
                }, "json")
            })
        }), $(".say li .close").click(function () {
            var e = $(this), t = e.parent().find(".comment_user_name"), n = t.attr("href").split("/")[2], r = e.parent().find(".name").text(), i = r.slice(1, r.length - 1);
            confirm("纭畾瑕佸垹闄や笌" + i + "鐨勫璇濓紵鍒犻櫎鍚庝笉鍙仮澶嶏紒", function () {
                $.post("/api/message/delcontact", {withuid: n}, function (t) {
                    t.code == "A00000" && (e.parent().remove(), o -= 1, $(".current").find(".num").text(o), $(".total").find("span").text(o))
                }, "json")
            })
        })
    }
};
Pianke.changePwd = {
    init: function () {
        /changepwd/.test(location.pathname) && this.attachEvents()
    }, checkEmpty: function () {
        var e = ".registerform", t = $(e + " input");
        for (var n = 0; n < t.length; n++)$(t[n]).val() != "" && $(".placehoder", $(t[n]).parent().parent()).hide()
    }, attachEvents: function () {
        var e = this, t = ".registerform";
        $(t + " input").focus(e.getFocus()), $(".registerform .login_true").bind("click", function (t) {
            e.clickOnRegBtn(t)
        })
    }, clickOnRegBtn: function (e) {
        var t = this;
        e.preventDefault();
        if ($("#o_pass").val() == "" || $("#n_pass").val() == "" || $("#c_pass").val() == "") {
            $(".registerform .login_true").removeAttr("logining");
            return
        }
        if ($(this).attr("logining") == 1)return;
        t.checkAll() && t.register()
    }, getFocus: function () {
        return function (e) {
            $(".placehoder", $(this).parent().parent()).hide()
        }
    }, loseFocus: function () {
        var e = this;
        return function (t) {
            $.trim($(this).val()) == "" && ($(".placehoder", $(this).parent().parent()).show(), $(this).val("")), e.check(this)
        }
    }, check: function (e) {
        var t = this;
        if (!e)return;
        var n = e.id, r = $.trim($(e).val());
        return r == "" ? (t.msg("瀵嗙爜涓嶈兘涓虹┖"), !1) : r.length < 6 || r.length > 20 ? (t.msg("瀵嗙爜闀垮害涓�6-20浣嶅瓧绗�"), $(this).val(""), !1) : (t.msg("", n, !0), !0)
    }, msg: function (e, t) {
        t = t || !1, t ? $("#err_msg").html(e).css("display", "none") : $("#err_msg").html(e).css("display", "list-item")
    }, checkAll: function () {
        var e = this, t = e.check($("#c_pass")[0]);
        if (!t)return !1;
        var n = e.check($("#n_pass")[0]);
        if (!n)return !1;
        var r = e.check($("#o_pass")[0]);
        return r ? t && n && r ? $("#c_pass").val() !== $("#n_pass").val() ? (e.msg("涓ゆ杈撳叆鐨勫瘑鐮佷笉涓€鑷达紝璇烽噸璇�"), $("#c_pass").val(""), $("#n_pass").val(""), !1) : !0 : !1 : !1
    }, register: function () {
        var e = this;
        $(".registerform .login_true").attr("logining", !0);
        var t = $.trim($("#o_pass").val()), n = $.trim($("#n_pass").val());
        $.ajax({
            url: "../api/user/changepwd",
            type: "POST",
            data: "oldpwd=" + t + "&newpwd=" + n,
            dataType: "json",
            success: function (t) {
                t.code != "A00000" ? (e.msg(PKINFO.eCode[t.code]), $(".registerform .login_true").removeAttr("logining")) : alert("瀵嗙爜淇敼鎴愬姛"), $("#o_pass").val(""), $("#n_pass").val(""), $("#c_pass").val("")
            }
        })
    }
};
Pianke.pSetting = function () {
    var e = $("#province"), t = e.attr("data"), n = $("#city"), r = n.attr("data"), i = CITYINFO;
    return {
        init: function () {
            var e = this;
            e.initList(), e.bindEvents()
        }, initList: function () {
            var r = [];
            for (var s in i.province)r.push("<li data='" + s + "'>" + i.province[s] + "</li>");
            $("ul", e.parent().parent()).html(r.join(""));
            var o = [];
            for (var s in i.city["" + t])o.push("<li data='" + s + "'>" + i.city["" + t][s] + "</li>");
            $("ul", n.parent().parent()).html(o.join(""))
        }, bindEvents: function () {
            var t = this;
            e.bind("click", t.showMenu()), n.bind("click", t.showMenu()), $("ul", e.parent().parent()).delegate("li", "click", t.clickProvince()), $("ul", n.parent().parent()).delegate("li", "click", t.clickCity()), $(".setbut a").bind("click", t.post()), $("#desc").focus(function () {
                $(this).removeClass("gray"), $("label", $(this).parent().parent()).hide()
            }).blur(function () {
                $(this).val() == "" && $("label", $(this).parent().parent()).show()
            }).keyup(function () {
                $.trim($(this).val()).replace(/[^\x00-\xff]/g, "**").length > 200 ? $("p", $(this).parent().parent()).show() : $("p", $(this).parent().parent()).hide()
            }), $("#uname").focus(function () {
                $(this).parent().next().text("4-30浣嶅瓧绗︼紝涓嫳鏂囧潎鍙�").show()
            }).blur(function (e) {
                var t = $(this), n = $(this).parent().next();
                t.parent().next().hide();
                if ($.trim(t.val()) == "") {
                    n.html("鏄电О涓嶈兘涓虹┖").show();
                    return
                }
                var r = $.trim($(this).val()).replace(/[^\x00-\xff]/g, "**").length;
                if (r < 4 || r > 30) {
                    n.html("鏄电О闀垮害涓� 4- 30 浣嶅瓧绗�").show();
                    return
                }
                $.ajax({
                    type: "post",
                    url: "/api/reg/checkuname",
                    dataType: "json",
                    data: "uname=" + $.trim($(this).val()) + "&page=setinfo",
                    success: function (e) {
                        e.code == "A00000" ? n.html("").hide() : n.html(PKINFO.eCode[e.code]).show()
                    }
                })
            })
        }, post: function () {
            return function (t) {
                t.preventDefault();
                var r = $.trim($("#uname").val()), i = $.trim($("input[name=gender]:checked").val()), s = e.attr("data"), o = n.attr("data"), u = $.trim($("#desc").val());
                if (r == "") {
                    alert("鐢ㄦ埛鍚嶄笉鑳戒负绌�");
                    return
                }
                $.ajax({
                    type: "post",
                    dataType: "json",
                    data: "uname=" + r + "&gender=" + i + "&province=" + s + "&city=" + o + "&desc=" + u,
                    url: "../api/user/setinfo",
                    success: function (e) {
                        e.code == "A00000" ? alert("淇敼鎴愬姛") : alert(PKINFO.eCode[e.code])
                    }
                })
            }
        }, showMenu: function () {
            return function (e) {
                e.stopPropagation(), $("#province").removeClass("gray"), $("#city").removeClass("gray"), $("ul", $(this).parent().parent()).toggle()
            }
        }, clickProvince: function () {
            return function (t) {
                var r = $(this).attr("data"), s = $(this).html();
                e.attr("data", r).val(s), $(this).parent().hide();
                var o = [];
                for (var u in i.city["" + r])o.push("<li data='" + u + "'>" + i.city["" + r][u] + "</li>");
                $("ul li", n.parent().parent()).remove(), $("ul", n.parent().parent()).html(o.join("")), n.attr("data", "-1").val("璇烽€夋嫨")
            }
        }, clickCity: function () {
            return function (e) {
                var t = $(this).attr("data"), r = $(this).html();
                n.attr("data", t).val(r), $(this).parent().hide()
            }
        }
    }
};
Pianke.Oauth = {
    init: function () {
        this.bindEvent()
    }, bindEvent: function () {
        var e = this, t = ".registerform";
        $(t + " input").bind("focus", function () {
            e.getFocus($(this))
        }).bind("blur", function () {
            e.loseFocus($(this))
        }), $("#bindnew").bind("keydown", function (e) {
            e.keyCode == 13 && $(".away .login_but").trigger("click")
        }), $(".away .login_but").bind("click", e.clickOnRegBtn()), $("#myTab").delegate("li", "click", function (e) {
            if ($(this).hasClass("current"))return;
            var t = $(".current", $(this).parent()), n = $(t.attr("target"));
            t.removeClass("current"), n.hide(), $(this).addClass("current"), $($(this).attr("target")).show(), e.preventDefault()
        }), $("#read").bind("click", function () {
            $(this).attr("checked") ? $("#register_btn").removeClass("login_gray") : $("#register_btn").addClass("login_gray")
        })
    }, clickOnRegBtn: function () {
        var e = this;
        return function (t) {
            t.preventDefault();
            if ($(this).hasClass("login_gray"))return;
            if (e.checkAll() && this.id == "register_btn") {
                e.register(this);
                return
            }
            if (this.id == "bind_btn" && ($("#pass2").val() == "" || $("#email2").val() == ""))return;
            if (e.checkAllExt() && this.id == "bind_btn") {
                e.bindOauth(this);
                return
            }
        }
    }, getFocus: function (e) {
        var t = this;
        e.parent().prev().hide();
        var n = e.attr("id");
        switch (n) {
            case"uname":
            case"nickname":
                t.msg("4-30浣嶅瓧绗︼紝涓嫳鏂囧潎鍙�", n);
                break;
            case"email":
                t.msg("寰堥噸瑕侊紝鐢ㄤ簬鐧诲綍鐗囧埢缃戠珯", n);
                break;
            case"password":
                t.msg("6-20浣嶅瓧绗︼紝鍖哄垎澶у皬鍐�", n);
                break;
            default:
        }
    }, loseFocus: function (e) {
        var t = this;
        if (t.id == "email2" || t.id == "pass2")return;
        $.trim(e.val()) == "" && e.parent().prev().show().val(""), setTimeout(function () {
            t.check(e)
        }, 100)
    }, check: function (e) {
        if (!e)return;
        var t = this, n = e.attr("id"), r = $.trim(e.val());
        switch (n) {
            case"uname":
                if (r == "")return t.msg("鏄电О涓嶈兘涓虹┖", n), !1;
                t.name_isuniq(e);
                if (r.replace(/[^\x00-\xff]/g, "**").length < 4 || r.replace(/[^\x00-\xff]/g, "**").length > 30)return t.msg("鏄电О闀垮害涓�4-30浣嶅瓧绗�", n), !1;
                break;
            case"email":
                var i = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
                if (r.length == 0 || r == "甯哥敤閭")return t.msg("閭涓嶈兘涓虹┖", n), !1;
                if (!i.test(r))return t.msg("閭鏍煎紡閿欒", n), !1;
                $.post("/api/reg/checkemail", {email: r}, function (e) {
                    if (e.data.msg)return t.msg(e.data.msg, n), !1
                }, "json");
                break;
            case"password":
                if (r == "")return t.msg("瀵嗙爜涓嶈兘涓虹┖", n), !1;
                if (r.length < 6 || r.length > 20)return t.msg("6-20浣嶅瓧绗︼紝鍖哄垎澶у皬鍐�", n), !1;
                t.msg("", n, !0);
                break;
            default:
                return !0
        }
        return t.msg("", n, !0), !0
    }, msg: function (e, t, n) {
        n = n || !1, n ? $("#err_" + t).slideUp(200).html(e) : $("#err_" + t).slideDown(200).html(e)
    }, checkAll: function () {
        var e = this, t = e.check($("#password")), n = e.check($("#email"));
        return t && n ? !0 : !1
    }, checkAllExt: function () {
        var e = this, t = e.check($("#pass2")), n = e.check($("#email2"));
        return t && n ? !0 : !1
    }, register: function (e) {
        var e = this;
        if (!$("#read").attr("checked")) {
            alert("璇峰厛闃呰骞跺悓鎰忎娇鐢ㄥ崗璁�");
            return
        }
        var t = $.trim($("#email").val()), n = $.trim($("#password").val()), r = $("#ouid").val(), i = $("#oauthSource").val(), s = $("#uname").val();
        $.ajax({
            url: "../../api/bind/bindnew",
            type: "POST",
            data: "email=" + t + "&uname=" + s + "&passwd=" + n + "&ouid=" + r + "&source=" + i,
            dataType: "json",
            success: function (t) {
                t.code != "A00000" ? e.msg(PKINFO.eCode[t.code], "password") : window.location = t.data.redirect
            }
        })
    }, bindOauth: function (e) {
        var e = this;
        $(e).addClass("login_gray");
        var t = $.trim($("#email2").val()), n = $.trim($("#pass2").val()), r = $("#ouid").val(), i = $("#oauthSource").val();
        if (t == "" || n == "")return;
        $.ajax({
            url: "../../api/bind/bindexists",
            type: "POST",
            data: "email=" + t + "&passwd=" + n + "&ouid=" + r + "&source=" + i,
            dataType: "json",
            success: function (t) {
                t.code != "A00000" ? (e.msg(PKINFO.eCode[t.code], "pass2"), $(e).removeClass("login_gray")) : window.location = t.data.redirect
            }
        })
    }, name_isuniq: function (e) {
        var t = $.trim(e.val()), n = this;
        $.post("/api/reg/checkuname", {uname: t}, function (e) {
            e.code == "A00202" && n.msg(e.data.msg, "uname")
        }, "json")
    }
};
Pianke.note = {
    load_page: 1,
    fall_canload: !0,
    scrollLoad: !0,
    GET_POST_URL: "/api/note/getpost.php",
    stream_content: $(".main_cont"),
    per_pagecount: 3,
    requester: null,
    init: function () {
        this.bindEvent()
    },
    bindEvent: function () {
        var e = this;
        $(window).scroll(function () {
            $(document).height() <= $(window).height() + $(window).scrollTop() + 20 && e.fall_canload && e.load_more()
        }), $(".mainnav a,.total a").bind("click", function () {
            var t = $(this), n = t.is("[s-key]"), r = n ? $("#currentsort") : $("#currentquery"), i = n ? "s-key" : "q-key", s = t.attr(i);
            e.fall_canload = !0, n && $(".time_tab").toggle(s == "2"), t.parents(".mainnav,.total").find("a").removeClass("current"), t.addClass("current"), r.val(s), e.stream_content.empty(), e.load_more(1)
        }), $(".loadpages a").live("click", function (t) {
            t.preventDefault();
            var n = $(this), r = e.load_page, i = e.per_pagecount;
            e.fall_canload = !0, n.hasClass("next") ? r += 1 : n.hasClass("up") ? r -= r % i ? r % i + i - 1 : 2 * i - 1 : r = (parseInt(n.text(), 10) - 1) * i + 1, e.stream_content.empty(), e.load_page = r, e.load_more(e.load_page)
        })
    },
    load_more: function (e) {
        var t = this, n = $("#errormsg.loading"), r = !1;
        r = e ? !1 : t.load_page % t.per_pagecount == 0, t.requester && t.requester.abort && t.requester.abort();
        if (!t.fall_canload || !/note/.test(location.pathname.split("/")[1]) || r)return !1;
        e ? t.load_page = e : t.load_page += 1, t.fall_canload = !1, n.show(), t.requester = $.getJSON(t.GET_POST_URL, {
            page: t.load_page,
            sort: $("#currentsort").val(),
            query: $("#currentquery").val(),
            _: Math.floor(Math.random() * 999999)
        }, function (e) {
            n.hide(), e.data.data.ended ? (showerrortip("宸茬粡琚綘娴忚瀹屼簡锛屼紤鎭竴涓嬪惂锝�"), t.fall_canload = !1) : (t.fall_canload = !0, e.data.data.html && t.stream_content.append($(e.data.data.html)))
        })
    }
};
Pianke.theater = {
    init: function () {
        this.bindEvent(), $(".entry").length && /theater/.test(location.pathname) && Pianke.comment.getcomment($(".entry"), 1, 1, !0, !1)
    }, none_pic: "http://pkstatic.b0.upaiyun.com/images/theater/none.jpg", bindEvent: function () {
        var e = this;
        $("#theater_title").bind("focus", function () {
            var e = $(this), t = e.val();
            t == "璇疯緭鍏ユ爣棰�" && e.val("").removeClass("gray1")
        }).bind("blur", function () {
            var e = $(this), t = e.val();
            e.removeClass("gray1"), t == "" && $(this).val("璇疯緭鍏ユ爣棰�").addClass("gray1")
        }), $(".box textarea").bind("keydown", function (e) {
            text = $(this).val(), text.split("\n").length >= 10 && e.keyCode == 13 && e.preventDefault()
        }), $(".newstyle .times a").bind("click", function () {
            $(".newstyle .times a").removeClass("on"), $(this).addClass("on"), e.renderTheater(), e.subject_posts_pdata({
                type: "tag",
                value: $(this).text()
            })
        }), $(".newstyle .hour_new a").bind("click", function () {
            $(".newstyle .hour_new a").removeClass("on"), $(this).addClass("on"), e.renderTheater(), e.subject_posts_pdata({
                type: "hotitem",
                value: $(this).text()
            })
        }), $(".theater_pagination a").live("click", function (t) {
            t.preventDefault();
            var n = $(this)[0].href.split("page=")[1];
            e.renderTheater(n)
        }), $(".send").bind("click", function () {
            if ($(this).hasClass("sub_send"))return !1;
            e.theater_submit()
        }), $(".sub_send").bind("click", function () {
            var t = $(this).attr("data-id");
            e.theater_submit(!0, t)
        }), $(".sendn").live("click", function () {
            Pianke.comment.submitcomment($(this), 0, 1)
        }), $(".talk .like,.creation .like").live("click", function () {
            var e = $(this), t = e.parents(".icon").attr("data-id") || e.attr("data-id");
            submitlike(t, e)
        }), $(".del_theater").live("click", function () {
            var e = $(this), t = e.attr("data-id");
            confirm("鎮ㄧ‘瀹氳鍒犻櫎杩欎釜鍓ф湰锛�", function () {
                var n = {contentid: t};
                $.post("/api/subject/subject_posts_del", n, function () {
                    /profile/.test(location.pathname) ? (e = e.parent(), e.slideUp(200, function () {
                        e.remove()
                    })) : location.href = "/subject/"
                }, "json")
            })
        }), $(".direction .arrow").bind("click", function () {
            var e = $(".theater_img"), t = $(this).hasClass("down") ? $(".theater .shadow ul").height() + 75 : 260;
            e.animate({height: t}, 500), $(".arrow.down").hasClass("hide") && $("html,body").animate({scrollTop: 0}, 500), $(".arrow.up,.arrow.down").toggleClass("hide")
        }), $(".theater_img li").bind("click", function () {
            var t = $(this), n = $(".theater_img li.selected").length;
            if (n >= 3 && !t.hasClass("selected"))return !1;
            $(".arrow.up").hasClass("hide") && $(".arrow.down").trigger("click"), t.toggleClass("selected"), e.change_selector(t, n, t.find("span").length)
        }), $(".essay a").bind("click", function () {
            $(".essay .pen").toggle()
        }), $(".began").bind("click", function () {
            var e = $(this), t = $(".theater_img li.selected"), n = t.length;
            if (e.hasClass("began_gray"))return !1;
            url = "/subject/publish?", $.each(t, function (e) {
                var t = $(this), r = parseInt(t.find("span").text(), 10);
                url += "img" + r + "=" + (parseInt(t.index(), 10) + 1), url += e != n - 1 ? "&" : ""
            }), PKINFO.islogin ? location.href = url : openlogintip()
        }), $(".path").bind("click", function (e) {
            e.preventDefault(), e.cancelBubble = !0, $(this).parents(".box").toggleClass("right_box").toggleClass("left_box")
        }), $(".own").hover(function () {
            $(this).addClass("zindex")
        }, function () {
            $(this).removeClass("zindex")
        }), $(".box .close").bind("click", function () {
            var t = $(this).parent(".img"), n = t.attr("data-id"), r = $(".choose li[data-id=" + n + "]");
            setTimeout(function () {
                t.addClass("none_img")
            }, 50), e.exchangeAnimate(r.find("img"), t.find("img"), function () {
                r.removeClass("selected"), t.attr("data-id", "00").fadeOut(100, function () {
                    t.find("img").attr({src: e.none_pic}).end().fadeIn(100)
                })
            })
        }), $(".storystyle a").bind("click", function () {
            var e = $(this);
            !e.hasClass("on") && $(".storystyle a.on").length < 3 ? e.addClass("on") : e.removeClass("on")
        }), $(".box .img").bind("click", function () {
            flag = $(this).hasClass("selected") ? !1 : !0, $(".box .img").removeClass("selected"), flag ? $(this).addClass("selected") : $(this).removeClass("selected")
        }), $(".choose li").bind("click", function () {
            var t = $(this), n = $(".none_img:first"), r = n.length, i = $(".img.selected"), s = i.length;
            if (t.hasClass("selected") || s == 0 && r == 0)return !1;
            var o = n, u = t.find("img").attr("src"), a = o.attr("data-id"), f = t.attr("data-id");
            s && (o = i, a = o.attr("data-id")), e.exchangeAnimate(o.find("img"), t.find("img"), function () {
                o.removeClass("selected none_img").attr("data-id", f).find("img").attr("src", u), t.addClass("selected"), $(".choose li[data-id=" + a + "]").removeClass("selected")
            })
        }), $(".times a").bind("click", function () {
        })
    }, renderTheater: function (e) {
        var t = this, n = e ? !0 : !1, r = r || {
                page: e || 1,
                hotitem: $(".hour_new a.on").attr("hotitem"),
                tag: $(".times a.on").text()
            };
        $.getJSON("/api/subject/subject_posts_get", r, function (e) {
            if (e.code == "A00000") {
                $(".theater_inner").html(e.data.data);
                var t = $(".newstyle").offset().top - 70;
                n && $("html,body").animate({scrollTop: t}, 100)
            } else alert(PKINFO.eCode[e.code])
        })
    }, subject_posts_pdata: function (e) {
        $.post("/api/subject/subject_posts_pdata", e, function () {
            return !0
        }, "json")
    }, change_selector: function (e, t, n) {
        var r = $(".began");
        if (n) {
            var i = e.find("span"), s = parseInt(i.text(), 10);
            r.hasClass("began_gray") || r.addClass("began_gray"), i.remove(), $.each($(".theater_img li span"), function () {
                var e = $(this), t = parseInt(e.text(), 10);
                t -= s < t ? 1 : 0, e.text(t)
            })
        } else {
            t += 1, i = $('<span class="counter">' + t + "</span>"), e.append(i);
            if (t == 3) {
                r.removeClass("began_gray"), r.next().hide();
                var o = r.offset().top - $(window).height() / 2;
                $("html,body").animate({scrollTop: o}, 300)
            }
        }
    }, exchangeAnimate: function (e, t, n) {
        var r = window.navigator.userAgent.toLowerCase(), i = $.browser.msie && /msie 8\.0/i.test(r), s = $.browser.msie && /msie 7\.0/i.test(r), o = !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(r);
        if (o || s || i)n(); else {
            clone = t ? t.clone() : e.clone(), $("body").append(clone.hide());
            var u = this.get_css(t), a = this.get_css(e), f = this.get_css(t);
            f.top -= 200, f.len -= 200, clone.show().css(u).animate(f, 200, function () {
                clone.animate(a, 400, function () {
                    n(), clone.remove()
                })
            })
        }
    }, get_css: function (e) {
        return {
            position: "absolute",
            top: e.offset().top,
            left: e.offset().left,
            width: e.width(),
            height: e.height(),
            "z-index": 999
        }
    }, theater_submit: function (e, t) {
        var n = "", r = $(".storystyle .on"), i = e ? "/api/subject/subject_posts_edit" : "/api/subject/subject_posts_add", t = t || "0";
        if (!this.check())return !1;
        r.each(function (e) {
            n += $(this).text(), e != r.length - 1 && (n += ",")
        }), params = {
            id: t,
            title: $.trim($("#theater_title").val()),
            type: n,
            afterword: $.trim($("#afterword").val()),
            content: {},
            subject_id: $("#subject_id").val()
        }, $.each($(".content .box"), function (e) {
            var t = $(this);
            params.content["item" + e] = {
                style: t.hasClass("left_box") ? 0 : 1,
                content: t.find("textarea").val(),
                img: t.find("img").attr("src")
            }
        }), $.post(i, params, function (e) {
            e.code != "A00000" ? alert(PKINFO.eCode[e.code]) : location.href = e.data.url
        }, "json")
    }, check: function () {
        var e = $("#theater_title").val(), t = $.trim(e).length, n = this;
        return t == 0 || e == "璇疯緭鍏ユ爣棰�" ? (n.error_text("璇疯緭鍏ユ爣棰�"), !1) : t > 30 ? (n.error_text("鏍囬闀垮害涓嶈兘瓒呰繃30涓瓧"), !1) : $(".choose .selected").length != 3 && !/edit/.test(location.pathname) ? (n.error_text("鍐呭鎴栧浘鐗囦笉瀹屾暣"), !1) : (bool = !0, $.each($(".box textarea"), function () {
            if (this) {
                var e = $.trim($(this).val()).length;
                e == 0 && (n.error_text("鍐呭鎴栧浘鐗囦笉瀹屾暣"), bool = !1), e > 300 && (n.error_text("姣忎釜鍦烘櫙鐨勫唴瀹逛笉鑳借秴杩�300瀛�"), bool = !1)
            }
        }), bool ? $("#afterword").val().length > 140 ? (n.error_text("鍚庤鍐呭涓嶈兘瓒呰繃140瀛�"), !1) : $(".storystyle .on").length == 0 ? (n.error_text("璇烽€夋嫨浣犵殑鍒涗綔绫诲瀷"), !1) : !0 : !1)
    }, error_text: function (e) {
        var t = $(".storystyle .brown");
        t.show().text(e)
    }
};
$(document).ready(function () {
    $("#logininfobox .account").hover(function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = $("ul", $(this));
        t.show(), $("a", $(this)).get(0).className = "on"
    }, function (e) {
        $("a", $(this)).get(0).className = "off";
        var t = $("ul", $(this));
        t.hide()
    }), $("#logininfobox .account > a").click(function (e) {
        e.preventDefault()
    }), $(document).click(function (e) {
        $(".d_dropmenu").hide()
    }), $(".dropmemu").parent().hover(function () {
        var e = $("ul", $(this).parent());
        e.css("display", "block"), $(".dropmemu", this).addClass("current")
    }, function () {
        var e = $("ul", $(this).parent());
        e.css("display", "none"), $(".dropmemu", this).removeClass("current")
    }), $("#user_setting") && $("#user_setting").size() == 1 && (new Pianke.pSetting).init(), $("#fixedlogin") && $("#fixedlogin").size() == 1 && Pianke.LayerLogin.init()
});
Pianke.search = {
    current_request: {}, cur_num: -1, init: function () {
        $(".f_text .f_search").bind("click", function () {
            $(this).prev().submit()
        })
    }, bindEvent: function () {
        var e = this;
        e.result_hide(), $(".f_text .f_search").bind("click", function () {
            $(this).prev().submit()
        }), $(".find_end li").live("click", function () {
            location.href = $(this).find(".current a").attr("href")
        }), location.pathname.split("/")[1].toString() == "search" && ($(".contact .icon7, .contact .icon8").live("click", function () {
            var t = $(this);
            e.toggle_attention(t)
        }), $("#suser").live("click", function () {
            location.href = "/search/user/" + encodeURIComponent($(".find_t_cont .f_text input").val())
        }), $("#scontent").live("click", function () {
            location.href = "/search/pianke/" + encodeURIComponent($(".find_t_cont .f_text input").val())
        }))
    }, fetch_search: function (e) {
        return
    }, request_search: function (e) {
        var t = this;
        t.current_request.onreadystatechange && t.current_request.abort(), t.current_request = $.ajax({
            url: "/api/search/suggest",
            data: e,
            dataType: "json",
            success: function (e) {
                t.render_list(e);
                var n = $(".f_text input:focus").siblings(".find_end");
                n.show(), n.find("li").length < 1 && n.hide(), t.current_request = {}
            }
        })
    }, render_list: function (e) {
        var t = e ? e.data.data.user : [], n = e ? e.data.data.scnt : [], r = "";
        r += this.result_html(n, "content"), r += this.result_html(t, "user"), $(".f_text input:focus").siblings(".find_end").find("ul").html(r)
    }, result_html: function (e, t) {
        var n = "", r = this.cut_text($("input:focus").val(), 4), i = this.type_detail(t);
        return $("input:focus").parents(".find_t_cont").find("li").is(".current") ? $(".f_tab li.current").attr("data-type") && $.each(e, function () {
            i.isBool(this) && (n += i.innerStr(this))
        }) : (n += "<li><a class='recommon' href=" + i.search_url + ">鎼�'<span class='orange'>" + r + "</span>'" + i.type_text + "</a></li>", $.each(e, function () {
            i.isBool(this) && (n += i.innerStr(this))
        })), n
    }, toggle_attention: function (e) {
        var e = e, t = e.is(".icon7"), n = "/api/attention/" + (t ? "unfollow" : "follow"), r = {staruids: e.attr("data-id")}, i = t ? "鍔犲叧娉�" : "鍙栨秷鍏虫敞";
        Pianke.user.get_attention(e, n, r, function () {
            e.toggleClass("icon8 icon7").attr("title", i), e.siblings(".icon6").toggle()
        })
    }, type_detail: function (e) {
        var t = {}, n = this;
        switch (e) {
            case"user":
                t.type_text = "鐩稿叧鐢ㄦ埛禄", t.search_url = "/search/user/" + encodeURIComponent($("input:focus").val()), t.innerStr = function (e) {
                    var t = e.uname;
                    return $("input:focus").parents(".find_t_cont").find("li").is(".current") || (t = n.cut_text(e.uname, 12)), "<li><a href='/profile/" + e.uid + "/'>" + "<img src='" + e.icon + "'/><p>" + t + "</p></a></li>"
                }, t.isBool = function (e) {
                    return e && e.uid
                };
                break;
            case"content":
                t.type_text = "鐩稿叧鍐呭禄", t.search_url = "/search/pianke/" + encodeURIComponent($("input:focus").val()), t.innerStr = function (e) {
                    return "<li><a href='/profile/" + e.uid + "/'>" + "<img src='" + e.icon + "'/><p>" + e.uname + "</p></a></li>"
                }, t.isBool = function (e) {
                    return e && e
                };
                break;
            default:
                t = {}
        }
        return t
    }, choose_item: function (e) {
        $(".f_text input:focus").siblings(".find_end").find("li").removeClass("current").filter(":eq(" + e + ")").addClass("current")
    }, next_item: function () {
        this.cur_num = this.cur_num == $(".f_text input:focus").siblings(".find_end").find("li").length - 1 ? 0 : this.cur_num += 1, this.choose_item(this.cur_num)
    }, prev_item: function () {
        this.cur_num = this.cur_num == -1 ? $(".f_text input:focus").siblings(".find_end").find("li").length - 1 : this.cur_num -= 1, this.choose_item(this.cur_num)
    }, result_hide: function () {
        $(".f_text .find_end").hide(), this.cur_num = -1
    }, cut_text: function (e, t) {
        var e = e, n = 0, r;
        for (r = 0; r < e.length; r++) {
            e.charCodeAt(r) > 256 ? n += 2 : n += 1;
            if (n > t)return e.substr(0, r) + "..."
        }
        return e.substr(0, r + 1)
    }
};
Pianke.classic = {
    ISLOADMORE: !0,
    scrollLoad: !0,
    cur_play: {},
    play_st: 0,
    is_play: /classic/.test(location.pathname),
    init: function () {
        this.bindEvent(), location.pathname.split("/")[1] == "cposts" && ($(".entry").hide(), Pianke.comment.getcomment($(".entry"), 0, 1, !0, !1)), Pianke.player.init_player($("#musicurl").val(), $(".mp3_mian"))
    },
    bindEvent: function () {
        var e = this;
        $(".say_but").bind("click", function () {
            var e = "/api/classic/addposts.php", t = $("#classic_id").val(), n = $(".true_enter textarea").val();
            !n || $.post(e, {classicid: t, content: n}, function (e) {
                e.code == "A00000" ? ($(".create_content.first").removeClass("first"), $(".topic_list").prepend($('<div id="domSpace" style="display:none"></div>').append(e.data.data.html)), $("#domSpace").slideDown(), $(".true_enter textarea").val("")) : showerrortip(e.data.msg)
            }, "json")
        }), $(".del_classic").live("click", function () {
            var e = $(this), t = e.attr("data-id"), n = e.parents(".create_content"), r = n.hasClass("first") ? "first" : "";
            confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯鍐呭锛�", function () {
                $.post("/api/classic/delposts.php", {contentid: t}, function (e) {
                    e.code === "A00000" ? (n.slideUp(function () {
                        n.remove()
                    }), $(".create_content:first").addClass(r)) : showerrortip(e.data.msg)
                }, "json")
            })
        }), $(".classic_posts_pagination .pages a").live("click", function () {
            var t = $(this);
            return $(".create_content, .pages").remove(), e.ajax_load(t, "", ""), !1
        }), $(".classic_style_list a").live("click", function () {
            var t = $(this);
            return $(".icon_name a").removeClass("current"), t.addClass("current"), e.ajax_load(t, "", 1), !1
        }), location.pathname.split("/")[1] == "classic" && location.pathname.split("/").length < 4 && ($("#submore").text("鏁版嵁鍔犺浇涓�,璇风◢鍊�..."), $(window).scroll(function () {
            e.autoLoading()
        }), $(document).height() <= parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500 && e.autoLoading())
    },
    ajax_load: function (e, t, n) {
        var r = this, i = "/api/classic/getNpagePosts.php", s = $("#classic_id").val(), t = t || 15, o = /new/.test($(".current").attr("href")) ? "new" : "hot", n = n ? n : e.text();
        switch (n) {
            case"涓婇〉":
                n = Number($(".pages .on").text()) - 1;
                break;
            case"涓嬮〉":
                n = Number($(".pages .on").text()) + 1;
                break;
            default:
                n = n
        }
        var u = {page: n, classicid: s, size: t, sort: o};
        $.post(i, u, function (e) {
            if (e.code != "A00000")return !1;
            $("#currenpageno").val(n), $(".create_content, .pages").remove(), $(".topic_list").prepend(e.data.data.html), window.scroll(0, $(".topic_l .s_topic").offset().top - 15), $("#currenloadpageno").val(e.data.data.load_page), r.ISLOADMORE = !0
        }, "json")
    },
    loadmoreposts: function () {
        var e = this, t = $("#currenloadpageno").val(), n = Number(t) + 1, r = $("#currenpageno").val(), i = $("#classic_id").val(), s = s || 15, o = /new/.test($(".current").attr("href")) ? "new" : "hot";
        $("#submore").show(), $("#loading").show();
        var u = {classicid: i, page: r, load_page: n, sort: o, size: s};
        return $.ajaxSetup({cache: !1}), $.post("/api/classic/getposts", u, function (t) {
            if (t.code != "A00000")return $("#loading").hide(), $("#submore").hide(), !1;
            $("#currenloadpageno").val(n), $(".create_content:last").after(t.data.data.html), $("#loading").hide(), $("#submore").hide(), e.scrollLoad = !0, t.data.data.curtotal < 15 ? (e.ISLOADMORE = !1, $("#errormsg").hide()) : $("#errormsg").show()
        }, "json"), !0
    },
    edit_player: function (e) {
        var t = "", n = "http://pkstatic.b0.upaiyun.com/swf/singlemp3player.swf", r = location.pathname.split("/")[1] == "classic" ? 220 : 145;
        if (!e)return !1;
        if (window.HAS_AUDIO) {
            var i = this.cur_play;
            i.src = e, clearInterval(this.play_st), this.is_play ? ($(".m_player .play").hide(), $(".m_player .pause").show(), this.play_music()) : ($(".m_player .play").show(), $(".m_player .pause").hide())
        } else params = n + "?file=" + e + "&repeatPlay=true&songVolume=100&frontColor=827bb4&autoStart=" + this.is_play, $(".mp3_player").empty().html('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + r + '" height="20" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="wmode" value="transparent"><param name="movie" value="' + params + '"><embed wmode="transparent" width="' + r + '" height="30" src="' + params + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>')
    },
    play_music: function (e) {
        var t = this, n = t.cur_play;
        n.play(), e.find(".play").hide(), e.find(".pause").show(), clearInterval(t.play_st), t.play_st = setInterval(function () {
            t.show_progress(n)
        }, 33)
    },
    show_progress: function (e) {
        var e = e || this.cur_play;
        $(".progress_bar").width(Math.floor(100 * (e.currentTime / e.duration)) + "%"), e.duration && e.currentTime == e.duration && (e.currentTime = 0, e.play())
    },
    autoLoading: function () {
        var e = 0, t = this, n = $("#currenloadpageno").val() % 3 != 0;
        totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()) + 500, $(document).height() <= totalheight && n && !$(".classic_posts_pagination .pages").first().find("a")[0] && t.scrollLoad == 1 && t.ISLOADMORE == 1 && (t.scrollLoad = !1, t.loadmoreposts())
    }
};
Pianke.talk = {
    LIST: window.othertalk || [], init: function () {
        this.bindEvent(), Pianke.comment.getcomment($(".entry"), 1, 1, !0)
    }, bindEvent: function () {
        var e = this;
        $(".prior_img .up,.prior_img .down").bind("click", function () {
            var t = $(this).hasClass("up");
            e.change_slide(t)
        })
    }, change_slide: function (e) {
        var t = null, n = this.LIST.length;
        n > $(".prior_cont li").length ? (this.fill_slider(), t = e ? this.LIST.length - 1 : 1) : (t = $(".prior_cont li:visible").index() + (e ? -1 : 1), t < 0 ? t = n - 1 : t == n && (t = 0)), $(".prior_cont li").hide().filter(":eq(" + t + ")").show()
    }, fill_slider: function () {
        var e = this.LIST, t = "", n = null;
        if (e.length) {
            for (i in e)data = e[i], t += '<li><p><a href="/talk/' + data.url + '"><img src="' + data.user_img + '"></a></p><p class="user_new">VoL.' + data.number + '<a href="/talk/' + data.url + '">' + data.name + "</a></p></li>";
            n = $(t), n.hide(), $(".prior_cont ul").html(n)
        }
    }
};
Pianke.player = {
    cur_player: {}, is_play: /classic/.test(location.pathname), bindEvent: function (e) {
        var t = this, n = e.find("audio")[0];
        e.find(".progress").bind("click", function (r) {
            var i = r.offsetX / ($(this).width() / 100), s = i / 100 * n.duration;
            n.currentTime = s, e.find(".progress_bar").width(i + "%"), t.play_music(e)
        }).end().find(".play").bind("click", function () {
            t.play_music(e)
        }).end().find(".pause").bind("click", function () {
            n.pause(), e.find(".play").show().end().find(".pause").hide()
        })
    }, init_player: function (e, t) {
        var n = this, r = "", i = "http://pkstatic.b0.upaiyun.com/swf/singlemp3player.swf", s = location.pathname.split("/")[1] == "classic" ? 220 : 145, o = window.HAS_AUDIO ? t.find(".mp3_player") : t.find(".m_player"), u = window.HAS_AUDIO ? t.find(".m_player") : t.find(".mp3_player"), a;
        if (!e)return !1;
        o.remove(), u.slideDown(), window.HAS_AUDIO ? (a = u.find("audio"), a.attr("src", e), n.cur_player[e] = a, n.is_play && n.play_music(u)) : (params = i + "?file=" + e + "&repeatPlay=true&songVolume=100&frontColor=827bb4&autoStart=" + n.is_play, u.empty().html(n.get_flash_obj(params, s))), t.data("on_play", !0), n.bindEvent(u)
    }, play_music: function (e) {
        var t = this, n = e[0].src, r = e.find("audio")[0], i = e.attr("data-tingid");
        i && !e.data("played") && (e.data("played", !0), Pianke.ting.send_listencount(i)), r.play(), e.find(".play").hide().end().find(".pause").show(), clearInterval(t.play_st), t.play_st = setInterval(function () {
            t.show_progress(e)
        }, 33)
    }, show_progress: function (e) {
        var t = e.find("audio")[0], n = e.attr("data-id");
        e.find(".progress_bar").width(Math.floor(100 * (t.currentTime / t.duration)) + "%"), t.duration && t.currentTime == t.duration && (n && Pianke.ting.send_listencount(n), t.currentTime = 0, t.play())
    }, get_flash_obj: function (e, t) {
        return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + t + '" height="20" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="wmode" value="transparent"><param name="movie" value="' + e + '"><embed wmode="transparent" width="' + t + '" height="30" src="' + e + '" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>'
    }
};
function backToTop() {
    var e = $("#goTopBtn"), t = $(window), n = $("html,body"), r = 260;
    setTimeout(function () {
        t.scroll(function () {
            t.scrollTop() > r ? e.show() : e.hide()
        }), e.bind("click", function () {
            n.animate({scrollTop: 0}, 500)
        })
    }, 0)
}
function deletecntcomment(e, t, n, r) {
    confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯璇勮锛�", function () {
        if ("" == e || "undefined" == typeof e && "" == t || "undefined" == typeof t && "" == n || "undefined" == typeof n)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
        var i = {contentid: e, commentid: t, type: n};
        $.post("/api/comment/delcmt.php", i, function (e) {
            return "A00001" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? (item = $(r).parents("li"), item = item.length ? item : $(r).parents(".create_content"), item.slideUp(), !0) : (showerrortip(e.data.msg), !1)
        }, "json")
    })
}
function submitfeedback() {
    if (!addfeedbackswitch)return !1;
    var e = $("#feedback").val();
    if ("" == e)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
    var t = {feedback: e};
    return addfeedbackswitch = !1, $.post("/api/feedback/addfeedback.php", t, function (e) {
        return addfeedbackswitch = !0, "A00001" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? ($("#feedback").val(""), $("#feedbackpub").hide(), $("#feedbacksucess").show(), !0) : (showerrortip(e.data.msg), !1)
    }, "json"), !0
}
function delshare(e) {
    return confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯鍐呭锛�", function () {
        if ("" == e || "undefined" == typeof e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
        var t = {id: e};
        $.post("/api/share/delshare.php", t, function (t) {
            return "A00001" == t.code ? (openlogintip(), !1) : "A00000" == t.code ? ($("#posts_" + e).remove(), !0) : (showerrortip(t.data.msg), !1)
        }, "json")
    }), !0
}
function submitshare() {
    if (!addshareswitch)return !1;
    var e = $("#id").val(), t = $("#type").val(), n = $("#content").val(), r = $("#pic").val();
    if ("" == e || "undefined" == typeof e)return alert("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    if ("" == t || "undefined" == typeof t)return alert("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    if ("" == n || "undefined" == typeof n)return alert("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    "undefined" == typeof r && (r = "");
    var i = {id: e, type: t, pic: r, content: n};
    return addshareswitch = !1, $.post("/api/share/addshare.php", i, function (e) {
        return addshareswitch = !0, "A00000" == e.code ? (window.close(), !0) : (alert(e.data.msg), !1)
    }, "json"), !0
}
function insertemotion(e) {
    return $("#content").insertAtCaret(e), closeemotion(), !0
}
function commentinsertemotion(e, t) {
    return $(e).parents(".entry").find("textarea").insertAtCaret(t), $(e).parents(".bq").hide(), !0
}
function openlogintip(e) {
    $("#fixedlogin").show();
    var t = $(document.body).height(), n = $(window).height(), r = n > t ? n : t;
    return e && $("#fixedlogin .loginw").unbind("click.other").bind("click.other", function () {
        setTimeout(function () {
            e()
        })
    }), !0
}
function closelogintip(e) {
    return e && e.preventDefault && e.preventDefault(), $("#fixedlogin .ts").hide(), $("#fixedlogin .placehoder").show(), $("#layer_email").val(""), $("#layer_pass").val(""), $("#fixedlogin").hide(), !0
}
function openloginpage() {
    var e = $(window).height(), t = $(window).width(), n = 0, r = 0;
    return 400 <= e && (n = (e - 400) / 2), 600 <= e && (r = (t - 600) / 2), closelogintip(), window.open("/user/login.php?js=yes", "", "width=600,height=400,top=" + n + ",left=" + r + ",scrollbars=yes,status =yes"), !0
}
function refreshlogininfo(e) {
    return "" == e || "undefined" == typeof e ? !1 : ($("#logininfobox").html('<a class="name" href="/profile/">' + e + '</a><a href="/user/logout.php">閫€鍑�</a>'), !0)
}
function changetag() {
    var e = $("#scoreuser").css("display");
    return "none" == e ? ($("#me").attr("class", "current"), $("#time").attr("class", "")) : ($("#time").attr("class", "current"), $("#me").attr("class", "")), !1
}
function changejob(e) {
    var t = new Array("job_php", "job_js", "job_weibo");
    for (var n = 0; n < t.length; n++)e == t[n] ? ($("#" + e).show(), $("#nav" + e).addClass("on")) : ($("#" + t[n]).hide(), $("#nav" + t[n]).removeClass("on"));
    return !1
}
function addattention(e) {
    if ("" == e || "undefined" == typeof e)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    var t = {suid: e};
    return $.post("/api/attention/addattention.php", t, function (e) {
        return "A00001" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? !0 : (showerrortip(e.data.msg), !1)
    }, "json"), !0
}
function setCookie(e, t, n) {
    var r = new Date;
    n = n || 365, r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";domain=.pianke.me;path=/;expires=" + r.toGMTString()
}
function getCookie(e) {
    cookies = document.cookie.split("; ");
    for (i = 0; i < cookies.length; i++) {
        kv = cookies[i].split("=");
        if ($.trim(kv[0]) == e)return $.trim(kv[1])
    }
}
function getlatestnews() {
    var e = $("#latestnewsid").val(), t = getCookie(e);
    return t == 1 ? $("#latestnews").hide() : $("#latestnews").show(), !1
}
function ShareClickCount(e) {
    var t = {type: e};
    $.post("/api/share/clickcount.php", t, function (e) {
        return "A00000" == e.code ? !0 : !1
    }, "json")
}
function _shareJump(e, t, n) {
    ShareClickCount(t);
    var r, i, s, o;
    if (!n) {
        var u = /subject/.test(location.pathname), a = u ? $(e).parents(".icon").prev().find(".contents:first") : $(".card_inner"), o = u ? a.parents(".content").find("img")[0].src : "http://www.pianke.me" + a.attr("data-url"), f = "...鈥�  鈥斺€斿彂鐜颁腑鏂囩殑鏇村鍙兘锛屾垜鍦ˊ鐗囧埢 ", l = "...鈥�  --鐢ㄦ枃瀛楄杩板墽鎯咃紝鐢ㄥ浘鐗囦紶閫掗暅澶达紝鎴戝湪鐗囧埢鍓у満锛屽ソ鎴忔鍦ㄤ笂鏄犮€�", s = "鈥�" + subString($.trim(a.text()), 80) + (u ? l : f), c = u ? "?r=subjectshare" : "?r=postshare", h = "http://pianke.me";
        h += u ? "/subject/" + $(e).parents(".icon").attr("data-id") : location.pathname, h += c
    } else n == "card" ? (h = "http://pianke.me" + $(e).parents(".inclode").find("a").attr("href"), s = "鎴戝湪鐗囧埢鍙戠幇浜嗕竴寮犱笉閿欑殑璇嶅崱锛屼綘涔熸潵鐪嬬湅銆�", o = $(e).parents(".inclode").find("img").attr("src").replace("/s/", "/m/")) : n == "detail" ? (h = location.href, s = "鎴戝湪鐗囧埢鍙戠幇浜嗕竴寮犱笉閿欑殑璇嶅崱锛屼綘涔熸潵鐪嬬湅銆�", o = $(e).parents(".area").find("img").attr("src")) : n == "fav" && (h = "http://pianke.me" + $(e).parents(".inclode").find("a").attr("href"), s = "鎴戝湪鐗囧埢鍙戠幇浜嗕竴寮犱笉閿欑殑璇嶅崱锛屼綘涔熸潵鐪嬬湅銆�", o = $(e).parents(".inclode").find("img").attr("src").replace("/s/", "/m/"));
    redirect_to_sns(t, h, s, o)
}
function redirect_to_sns(e, t, n, r, i, s) {
    var o = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?", u = "http://service.weibo.com/share/share.php?", a = "http://widget.renren.com/dialog/share?", f = "http://v.t.qq.com/share/share.php?title=";
    if (e == "sina") {
        var l = {
            url: t,
            type: "3",
            count: "1",
            appkey: "2069323349",
            title: n,
            pic: r,
            ralateUid: "",
            language: "zh_cn",
            rnd: (new Date).valueOf()
        };
        i && (l.title = "銆�" + s + "銆�" + l.title);
        var c = [];
        for (var h in l)c.push(h + "=" + encodeURIComponent(l[h] || ""));
        var p = u + c.join("&");
        return window.open(p, "_blank"), !1
    }
    if (e == "renren") {
        var d = {
            resourceUrl: t,
            srcUrl: t,
            pic: r,
            title: "鍙戠幇涓枃鐨勬洿澶氬彲鑳斤紝鎴戝湪@鐗囧埢  http://www.pianke.me",
            description: n
        };
        d.title = i ? s : d.title;
        var v = [];
        for (var m in d)d[m] && v.push(m + "=" + encodeURIComponent(d[m]));
        var p = a + v.join("&");
        window.open(p, "_blank")
    } else if (e == "douban")"http://shuo.douban.com/!service/share?href=" + encodeURIComponent(t) + "&name=" + encodeURIComponent(s); else if (e == "tengxun")window.open(f + encodeURIComponent((i ? "銆�" + s + "銆�" : "") + n) + "&url=" + encodeURIComponent(t) + "&source=bookmark&pic=" + r, "_blank"); else if (e == "qzone") {
        var h = {
            url: t,
            showcount: "1",
            desc: "",
            summary: n,
            title: "鍙戠幇涓枃鐨勬洿澶氬彲鑳斤紝鎴戝湪@pianker  ",
            site: "鐗囧埢缃�",
            pics: r,
            style: "101",
            width: 199,
            height: 30
        };
        h.title = i ? s : h.title;
        var v = [];
        for (var m in h)v.push(m + "=" + encodeURIComponent(h[m] || ""));
        var p = o + v.join("&");
        window.open(p, "_blank")
    }
}
function subString(e, t, n) {
    var r = 0, i = "", s = /[^\x00-\xff]/g, o = "", u = e.replace(s, "**").length;
    for (var a = 0; a < u; a++) {
        o = e.charAt(a).toString(), o.match(s) != null ? r += 2 : r++;
        if (r > t)break;
        i += o
    }
    return n && u > t && (i += "..."), i
}
function removeNotify(e) {
    confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯閫氱煡锛�", function () {
        var t = {id: e};
        $.post("/api/notify/del.php", t, function (t) {
            t.code === "A00000" ? $("#item_" + e).remove() : showerrortip(t.data.msg)
        }, "json")
    })
}
function openOauth(e) {
    var t = $(e).attr("source");
    setcookie("is_" + t, null);
    var n = window.open("", "newwindow", "height=450, width=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no"), r = "http://" + window.location.host;
    n.location = r + "/user/syncoauthurl.php?source=" + t, st = setInterval(function () {
        getSpecificCookie("is_" + t).toString() == "true" && (location.reload(), clearInterval(st))
    }, 100)
}
function delsync(e) {
    type = $(e).attr("data-type") || "", confirm("鎮ㄧ‘瀹氳鍙栨秷缁戝畾" + type + "锛�", function () {
        $.ajax({
            type: "POST", url: "/api/user/delsync.php", data: {source: $(e).attr("source")}, success: function (e) {
                e.code == "A00000" ? location.reload() : alert($res.msg)
            }, dataType: "json"
        })
    })
}
function addfeedback() {
    var e = $("#fb_email").val(), t = $("#fb_title").val(), n = $("#fb_cnt").val();
    if ("" == n || "undefined" == typeof n)return showerrortip("浜诧紝杩樻病鍐欏唴瀹瑰摝~"), !1;
    var r = {
        fb_email: e, fb_title: t, feedback: n, imgurl: $.map($(".case .image img"), function (e) {
            return e.src
        }).join(",")
    };
    return $.post("/api/feedback/addfeedback.php", r, function (e) {
        return "A00001" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? (showerrortip("闈炲父鎰熻阿鎮ㄧ殑鍙嶉鎰忚~"), $("#fb_cnt").val(""), $("#fb_title").val(""), $("#fb_email").val(""), location.reload(), !0) : (showerrortip(e.data.msg), !1)
    }, "json"), !0
}
function cancelfeedback() {
    return $("#fb_cnt").val(""), $("#fb_title").val(""), $("#fb_email").val(""), !0
}
function addcard() {
    var e = $("#postsid").val(), t = $("#cardpid").val();
    if ("" == e || "undefined" == typeof e)return showerrortip("鎿嶄綔澶辫触锛岃閲嶈瘯~"), !1;
    if ("" == t || "undefined" == typeof t)return showerrortip("鎮ㄨ繕娌℃湁涓婁紶鍗＄墖鍛"), !1;
    var n = {contentid: e, pid: t};
    $.post("/api/card/addcard.php", n, function (e) {
        e.code === "A00000" ? window.location.href = "/card/" + e.data.data.contentid : showerrortip(e.data.msg)
    }, "json")
}
function _loading(e) {
    e == 1 ? $("#_loading").show() : $("#_loading").hide()
}
function uploadImage(e) {
    if (PKINFO.islogin != 1)return openlogintip(), !1;
    var t = e.value;
    document.domain = "pianke.me", validateImage(e) && (_loading(!0), $.ajaxFileUpload({
        url: "http://img.pianke.me/uploadcard",
        secureuri: !1,
        fileElementId: "pic",
        dataType: "json",
        type: "post",
        success: function (e, t) {
            _loading(!1);
            if (e.code == "A00000") {
                var n = e.data.url + e.data.pid;
                $("#showpic").attr("src", n), $("#cardpid").val(e.data.pid)
            } else e.code == "D10088" && alert("鍥剧墖灏哄涓嶅锛岃鏍稿疄")
        },
        error: function (e, t, n) {
            $("#pic").val("")
        }
    }))
}
function validateImage(e) {
    var t = e, n = t.value;
    return /^.*?\.(gif|png|jpg|jpeg)$/.test(n.toLowerCase()) ? !0 : (alert("鍥剧墖鏍煎紡鏈夎锛�"), !1)
}
function showtime() {
    var e = new Date, t = e.getFullYear(), n = e.getMonth();
    n += 1;
    var r = e.getDate(), i = e.getHours(), s = e.getMinutes(), o = e.getSeconds();
    return $("#time_date").html(t + "-" + zeroize(n) + "-" + zeroize(r)), $("#time_hour").html(zeroize(i)), $("#time_minute").html(zeroize(s)), $("#time_second").html(zeroize(o)), !0
}
function openusercomment(e) {
    return $(e).parent().next().show(), !1
}
function delusercomment(e) {
    confirm("鎮ㄧ‘瀹氳鍒犻櫎姝ゆ潯璇勮锛�", function () {
        var t = {commentid: e};
        $.post("/api/comment/delusercmt.php", t, function (t) {
            t.code === "A00000" ? $("#item_" + e).remove() : showerrortip(t.data.msg)
        }, "json")
    })
}
function submitusercomment(e) {
    box = $(e).parents(".entry"), contentid = box.attr("data-id");
    if ("" == contentid || "undefined" == typeof contentid)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    var t = $("#id_" + contentid).val(), n = $("#type_" + contentid).val(), r = $("#content_" + contentid).val(), i = $("#reuid_" + contentid).val();
    if ("" == n || "undefined" == typeof n)return showerrortip("鎶辨瓑锛岀己灏戝繀瑕佸弬鏁帮紒"), !1;
    if ("" == r || "undefined" == typeof r)return showerrortip("鎶辨瓑锛屽唴瀹逛笉鑳戒负绌猴紒"), !1;
    var s = {contentid: t, type: n, content: r, recid: contentid, reuid: i};
    return $.post("/api/comment/add.php", s, function (e) {
        return "A00002" == e.code ? (openlogintip(), !1) : "A00000" == e.code ? (box.find("test").val(""), box.hide(), !0) : (showerrortip(e.data.msg), !1)
    }, "json"), !0
}
function toolTipDialog(e, t, n) {
    var r = $('<div class="delete radius" id="succ_pop"><div class="box"><p class="p">' + e + "</p></div></div>");
    $("#succ_pop").length && $("#succ_pop").stop().remove();
    var i;
    t ? t.top && t.left ? i = t : i = t.position() : i = {
        top: $(window).scrollTop() + $(window).height() / 2,
        left: $(window).width() / 2 - 180
    }, r.css({
        top: i.top - 10,
        left: i.left + 150
    }), r.appendTo("body").fadeOut(3e3), typeof n != "undefined" && setTimeout(n, 3e3)
}
function getSpecificCookie(e) {
    return document.cookie.length > 0 ? (start = document.cookie.indexOf(e + "="), start != -1 && (start = start + e.length + 1, end = document.cookie.indexOf(";", start), end == -1 && (end = document.cookie.length)), decodeURI(document.cookie.substring(start, end))) : ""
}
function setcookie(e, t) {
    var n = e + "=" + encodeURI(t);
    document.cookie = n
}
function Shuffle(e) {
    for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n);
    return e
}
var addtalkswitch = !0, addpostsswitch = !0, addcommentswitch = !0, addfeedbackswitch = !0, addlikeswitch = !0, addshareswitch = !0, commonpagesize = 15;
showerrortip = function (e, t) {
    if ("" == e || "undefined" == typeof e)e = "鎶辨瓑锛岀郴缁熺箒蹇欙紒";
    return $("#errortiptext").html(e), $("#errortip").show().find(".e_close").unbind("click").bind("click", function () {
        $("#errortip").hide(), t && t()
    }), !0
}, $(function () {
    PKINFO.uinfo && msg_list_init(), $("#notice_box").find("span:first>a").click(function () {
        return $("#notice_box").remove(), !1
    }), $("#notice_box").find("span:first").click(function () {
        return $("#notice_box").find("#feedbackpub").get(0).style.display === "none" ? ($("#feedbackbox").attr("class", "layer_word"), $("#notice_box").find("#feedbackpub").show(), $("#notice_box").find("#feedbacksucess").hide()) : ($("#feedbackbox").attr("class", ""), $("#notice_box").find("#feedbackpub").hide()), !1
    }), $("#latestnews span.cl").live("click", function () {
        var e = $("#latestnewsid").val();
        return setCookie(e, 1, 30), $("#latestnews").hide(), !1
    }), $("ul.cntcmtlist li").hover(function () {
        $(this).find("a.out").show()
    }, function () {
        $(this).find("a.out").hide()
    }), $(".fav_btn").live("click", function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        var e = $(this), t = e.attr("f-contentid"), n = {contentid: t}, r = e.hasClass("on"), i = "/api/fav/" + (r ? "delfav" : "addfav"), s = r ? "鏀惰棌" : "鍙栨秷鏀惰棌", o = parseInt(e.find(".number").text(), 10), o = (isNaN(o) ? 0 : o) + (r ? -1 : 1);
        if (e.hasClass("gray"))return !1;
        e.text("鏀惰棌涓�").addClass("gray"), $.post(i, n, function (t) {
            return t.code != "A00000" ? (alert(t.data.msg), !1) : (e.toggleClass("on gray").text(s), o = o < "" ? 0 : o, o != 0 && e.append('<span class="number">' + o + "</span>"), !1)
        }, "json")
    }), $(".sc,.sced").live("click", function () {
        if (PKINFO.islogin != 1)return openlogintip(), !1;
        var e = $(this), t = e.attr("f-contentid"), n = e.hasClass("sced"), r = {contentid: t}, i = "/api/fav/" + (n ? "delfav" : "addfav");
        if (e.hasClass("gray"))return !1;
        e.addClass("gray"), $.post(i, r, function (t) {
            return t.code != "A00000" ? (alert(t.data.msg), !1) : (e.toggleClass("sc sced gray"), !1)
        }, "json")
    }), $(".share .xl,.ico .xl,.icon6 .xl").live("click", function () {
        _shareJump(this, "sina", $(this).attr("ref"))
    }), $(".kj").live("click", function () {
        _shareJump(this, "qzone", $(this).attr("ref"))
    }), $(".rr").live("click", function () {
        _shareJump(this, "renren", $(this).attr("ref"))
    }), $(".tx").live("click", function () {
        _shareJump(this, "tengxun", $(this).attr("ref"))
    })
});
var msg_list_init = function () {
    if (!PKINFO.uinfo || !PKINFO.uinfo.uid || /player/.test(location.href))return;
    if (!PKINFO.msglist)if ($(".new_idea").length > 0)PKINFO.msglist = $(".new_idea:first"); else {
        var e = $(".head:first");
        e = e.length ? e : $(".header:first"), e = e.length ? e : $(".wrapper"), window.noBase && (e = $("body")), PKINFO.msglist = $('<div class="new_idea hide" id="newunread"><div class="box"></div></div> '), PKINFO.msglist.appendTo(e)
    }
    PKINFO.msglist.hide(), window.noBase && PKINFO.msglist.addClass("noBase"), msg_list_round(), PKINFO.ePublicWord.id = setInterval("msg_list_round()", 15e3)
}, uid_url = "profile/" + PKINFO.uinfo.uid + "/fans";
PKINFO.ePublicWord = {
    comment: ["鏉℃柊璇勮", "commentbox/inbox", "鏌ョ湅璇勮"],
    attitude: ["涓柊鎺ㄨ崘", "likebox/inbox", "鏌ョ湅鎺ㄨ崘"],
    notice: ["鏉℃柊閫氱煡", "notify/inbox", "鏌ョ湅閫氱煡"],
    card: ["寮犳柊鍗＄墖", "cardbox/inbox", "鏌ョ湅Card"],
    friend: ["涓柊绮変笣", uid_url, "鏌ョ湅鏂扮矇涓�"],
    fav: ["涓柊鏀惰棌", "favbox/inbox", "鏌ョ湅鏂版敹钘�"],
    message: [" 灏佹柊鐗囬偖", "message/inbox", "鏌ョ湅鐗囬偖"],
    a: "abc",
    close: !1,
    id: 0
};
var closeunread = function () {
    return $("#newunread").remove(), PKINFO.ePublicWord.close = !0, clearInterval(PKINFO.ePublicWord.id), !1
}, msg_list_show = function (e) {
    if (!e || !e.comment && !e.attitude && !e.notice && !e.card && !e.friend && !e.fav && !e.message)return $(".new_idea").hide(), !1;
    var t = [];
    for (var n in e)e[n] && t.push("<p>" + e[n] + PKINFO.ePublicWord[n][0] + '锛�<a href="/' + PKINFO.ePublicWord[n][1] + '" title="">' + PKINFO.ePublicWord[n][2] + "</a></p>");
    $(".new_idea").find("div.box").html(t.join("") + '<a href="javascript:void(0);" onclick="javascript:closeunread();" class="cl"></a>').end().show()
}, msg_list_round = function () {
    $.get("/api/common/unreadmsg.php?r=" + Math.floor(Math.random() * 999999999999), function (e) {
        if (e.code === "A00000")if (!PKINFO.public_msg)PKINFO.public_msg = e.data.list, msg_list_show(e.data.list); else {
            var t = e.data.list;
            msg_list_show(e.data.list)
        }
    }, "json")
};
$(function () {
    $("#fb_email").focus(function () {
        $(this).val() === "QQ/Email" && $(this).val("").removeClass("gray1")
    }).blur(function () {
        $(this).val() === "" && $(this).val("QQ/Email").addClass("gray1")
    }).addClass("gray1").val("QQ/Email"), $("#fb_title").focus(function () {
        $(this).val() === "(6-20瀛�)" && $(this).val("").removeClass("gray1")
    }).blur(function () {
        $(this).val() === "" && $(this).val("(6-20瀛�)").addClass("gray1")
    }).addClass("gray1").val("(6-20瀛�)")
});
var zeroize = function (e, t) {
    t || (t = 2), e = String(e);
    for (var n = 0, r = ""; n < t - e.length; n++)r += "0";
    return r + e
}, st = setInterval("showtime();", 1e3), JSON = JSON || {};
JSON.stringify = JSON.stringify || function (e) {
        var t = typeof e;
        if (t != "object" || e === null)return t == "string" && (e = '"' + e + '"'), String(e);
        var n, r, i = [], s = e && e.constructor == Array;
        for (n in e)r = e[n], t = typeof r, t == "string" ? r = '"' + r + '"' : t == "object" && r !== null && (r = JSON.stringify(r)), i.push((s ? "" : '"' + n + '":') + String(r));
        return (s ? "[" : "{") + String(i) + (s ? "]" : "}")
    };
Pianke.the100th = {
    MC: $(".main_container .inner"),
    is_post: !1,
    page_size: 28,
    page: 1,
    base_size: {width: 355, height: 220},
    item_length: 7,
    base_scale: {a: 1, b: .666, c: .833},
    getArr: function (e) {
        var t = this.base_scale.a, n = this.base_scale.b, r = this.base_scale.c;
        return {
            pos_arr: [[[0, 0], [0, t], [t, 0], [n, t], [2 * n, t], [2 * t, 0], [3 * n, r]], [[0, 0], [0, r], [r, 0], [r, t], [r + t, 0], [n + r, t], [r + 2 * n, t]]],
            obj_arr: [["a", "b", "a", "b", "b", "c", "c"], ["c", "c", "a", "b", "a", "b", "b"]]
        }
    },
    init: function () {
        this.listInit(), this.bind_Event()
    },
    bind_Event: function () {
        var e = this;
        $(".the_item").live("click", function () {
            var t = $(".the_item"), n = $(this), r = t.length - 1, i = parseInt(e.get_index(n), 10), i = i < 0 ? r + i : i, s = i == 0 ? r : i - 1, o = i == r ? 0 : i + 1, u = e.find_for_index(i, "cur"), a = e.find_for_index(s, "prev"), f = e.find_for_index(o, "next"), u = e.bigger_img(u);
            $(".light_box").attr("data-c_id", i), $(".light_box").fadeIn().find(".list").append(u, a, f)
        }), $(".big_close,.list .cur").live("click", function () {
            e.light_close()
        }), $(".u_but a").bind("click", function () {
            var e = {
                address: $(".box_r_idea textarea").val(),
                contact: $(".box_r_idea input:first").val(),
                posts: $(".box_r_idea input:last").val()
            };
            if (PKINFO.islogin != 1)return openlogintip(), !1;
            $.post("/api/event/hundred_posts", e, function (e) {
                return e.code != "A00000" ? (msg_modal(e.data.msg), !1) : (msg_modal(e.data.msg), setTimeout(function () {
                    window.location.reload()
                }, 2e3), !1)
            }, "json")
        }), document.oncontextmenu = function (e) {
            return !1
        }, $("body,html").mousedown(function (e) {
            if (e.which == 3)return e.preventDefault(), !1
        }), $(window).keyup(function (t) {
            var n = t.keyCode;
            $(".light_box").is(":visible") && (n == 37 ? e.light_box_slide(!1) : n == 39 && e.light_box_slide(!0))
        }), $(".next,.prev").live("click", function () {
            var t = $(this), n = $(this).hasClass("next");
            e.light_box_slide(n)
        })
    },
    get_index: function (e) {
        return index = $(e).index(), index += e.parents(".item_100th").index() * 7, index
    },
    find_for_index: function (e, t) {
        return el = $(".item_100th").eq(parseInt(e / 7, 10)).find(".the_item").eq(e % 7), el.find("img").clone().addClass(t)
    },
    light_box_slide: function (e) {
        var t = parseInt($(".light_box").attr("data-c_id"), 10) + (e ? 1 : -1), n = $(".item_100th img").map(function () {
            return this.src
        }), r = n.length - 1, t = t > r ? 0 : t < 0 ? r : t, i = t == 0 ? r : t - 1, s = t == r ? 0 : t + 1;
        $(".light_box").find(".cur").attr("src", n[t].replace("bmiddle", "large")).end().find(".next").attr("src", n[s]).end().find(".prev").attr("src", n[i]), $(".light_box").attr("data-c_id", t)
    },
    light_close: function () {
        $(".light_box").fadeOut(function () {
            $(this).find("img").remove()
        })
    },
    bigger_img: function (e) {
        return src = e.attr("src").replace("bmiddle", "large"), e.attr("src", src)
    },
    listInit: function () {
        this.MC.length && (this.fetch_data(), this.bind_scroll())
    },
    bind_scroll: function () {
        var e = this;
        $("html,body").bind("mousewheel", function (t) {
            t.preventDefault();
            var n = e.MC, r = parseInt(n.css("left"), 10), i = r - (-t.wheelDelta > 0 ? 50 : -50), s = $(".item_100th").length * 600;
            s - 400 >= i && (e.is_post || ++e.page, e.fetch_data());
            if (i >= 0 || i <= -(s - $(window).width()))return !1;
            n.css({left: i})
        })
    },
    fetch_data: function () {
        var e = this;
        if (e.page > 10 || e.is_post)return !1;
        e.is_post = !0, $.getJSON("/api/event/hundred_getpic", {page: e.page, size: e.page_size}, function (t) {
            var n = t.data.data.list;
            e.render_page(n), e.is_post = !1
        })
    },
    render_page: function (e) {
        var t = this.item_length, n = this.base_size.width, r = this.base_size.height, i = this.base_scale, s = i.c * 2 * n, o = this.MC, u = {}, a = this;
        $.each(e, function (f) {
            if (f % t == 0) {
                u = $("<div class='item_100th'></div>"), o.append(u);
                var l = u.index();
                u.css({left: s * l})
            }
            base = f < t ? 0 : 1, i_index = f % 7, pos_obj = a.getArr(base), pos_arr = pos_obj.pos_arr[base], obj_arr = pos_obj.obj_arr[base], u.append($('<div class="the_item"><img src="' + e[f] + '"></div>').css({
                top: pos_arr[i_index][0] * r,
                left: pos_arr[i_index][1] * n,
                width: i[obj_arr[i_index]] * n,
                height: i[obj_arr[i_index]] * r
            }))
        })
    }
};