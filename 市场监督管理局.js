var _c;

!function (e) {


    var r = {}
    function c(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c),
            n.l = !0,
            n.exports
    }
    _c=c;



}({
    "10d1": function(t, i) {
        const r = 16
          , e = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]
          , n = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];
        function o(t) {
            const i = [];
            for (let r = 0, e = t.length; r < e; r += 2)
                i.push(parseInt(t.substr(r, 2), 16));
            return i
        }
        function s(t, i) {
            return t << i | t >>> 32 - i
        }
        function h(t) {
            return (255 & e[t >>> 24 & 255]) << 24 | (255 & e[t >>> 16 & 255]) << 16 | (255 & e[t >>> 8 & 255]) << 8 | 255 & e[255 & t]
        }
        function u(t) {
            return t ^ s(t, 2) ^ s(t, 10) ^ s(t, 18) ^ s(t, 24)
        }
        function f(t) {
            return t ^ s(t, 13) ^ s(t, 23)
        }
        function a(t, i, r) {
            const e = new Array(4)
              , n = new Array(4);
            for (let i = 0; i < 4; i++)
                n[0] = 255 & t[4 * i],
                n[1] = 255 & t[4 * i + 1],
                n[2] = 255 & t[4 * i + 2],
                n[3] = 255 & t[4 * i + 3],
                e[i] = n[0] << 24 | n[1] << 16 | n[2] << 8 | n[3];
            for (let t, i = 0; i < 32; i += 4)
                t = e[1] ^ e[2] ^ e[3] ^ r[i + 0],
                e[0] ^= u(h(t)),
                t = e[2] ^ e[3] ^ e[0] ^ r[i + 1],
                e[1] ^= u(h(t)),
                t = e[3] ^ e[0] ^ e[1] ^ r[i + 2],
                e[2] ^= u(h(t)),
                t = e[0] ^ e[1] ^ e[2] ^ r[i + 3],
                e[3] ^= u(h(t));
            for (let t = 0; t < 16; t += 4)
                i[t] = e[3 - t / 4] >>> 24 & 255,
                i[t + 1] = e[3 - t / 4] >>> 16 & 255,
                i[t + 2] = e[3 - t / 4] >>> 8 & 255,
                i[t + 3] = 255 & e[3 - t / 4]
        }
        function c(t, i, r) {
            const e = new Array(4)
              , o = new Array(4);
            for (let i = 0; i < 4; i++)
                o[0] = 255 & t[0 + 4 * i],
                o[1] = 255 & t[1 + 4 * i],
                o[2] = 255 & t[2 + 4 * i],
                o[3] = 255 & t[3 + 4 * i],
                e[i] = o[0] << 24 | o[1] << 16 | o[2] << 8 | o[3];
            e[0] ^= 2746333894,
            e[1] ^= 1453994832,
            e[2] ^= 1736282519,
            e[3] ^= 2993693404;
            for (let t, r = 0; r < 32; r += 4)
                t = e[1] ^ e[2] ^ e[3] ^ n[r + 0],
                i[r + 0] = e[0] ^= f(h(t)),
                t = e[2] ^ e[3] ^ e[0] ^ n[r + 1],
                i[r + 1] = e[1] ^= f(h(t)),
                t = e[3] ^ e[0] ^ e[1] ^ n[r + 2],
                i[r + 2] = e[2] ^= f(h(t)),
                t = e[0] ^ e[1] ^ e[2] ^ n[r + 3],
                i[r + 3] = e[3] ^= f(h(t));
            if (0 === r)
                for (let t, r = 0; r < 16; r++)
                    t = i[r],
                    i[r] = i[31 - r],
                    i[31 - r] = t
        }
        function l(t, i, e, {padding: n="pkcs#7", mode: s, iv: h=[], output: u="string"}={}) {
            if ("cbc" === s && ("string" == typeof h && (h = o(h)),
            16 !== h.length))
                throw new Error("iv is invalid");
            if ("string" == typeof i && (i = o(i)),
            16 !== i.length)
                throw new Error("key is invalid");
            if (t = "string" == typeof t ? 0 !== e ? function(t) {
                const i = [];
                for (let r = 0, e = t.length; r < e; r++) {
                    const e = t.codePointAt(r);
                    if (e <= 127)
                        i.push(e);
                    else if (e <= 2047)
                        i.push(192 | e >>> 6),
                        i.push(128 | 63 & e);
                    else if (e <= 55295 || e >= 57344 && e <= 65535)
                        i.push(224 | e >>> 12),
                        i.push(128 | e >>> 6 & 63),
                        i.push(128 | 63 & e);
                    else {
                        if (!(e >= 65536 && e <= 1114111))
                            throw i.push(e),
                            new Error("input is not supported");
                        r++,
                        i.push(240 | e >>> 18 & 28),
                        i.push(128 | e >>> 12 & 63),
                        i.push(128 | e >>> 6 & 63),
                        i.push(128 | 63 & e)
                    }
                }
                return i
            }(t) : o(t) : [...t],
            ("pkcs#5" === n || "pkcs#7" === n) && 0 !== e) {
                const i = r - t.length % r;
                for (let r = 0; r < i; r++)
                    t.push(i)
            }
            const f = new Array(32);
            c(i, f, e);
            const l = [];
            let p = h
              , d = t.length
              , g = 0;
            for (; d >= r; ) {
                const i = t.slice(g, g + 16)
                  , n = new Array(16);
                if ("cbc" === s)
                    for (let t = 0; t < r; t++)
                        0 !== e && (i[t] ^= p[t]);
                a(i, n, f);
                for (let t = 0; t < r; t++)
                    "cbc" === s && 0 === e && (n[t] ^= p[t]),
                    l[g + t] = n[t];
                "cbc" === s && (p = 0 !== e ? n : i),
                d -= r,
                g += r
            }
            if (("pkcs#5" === n || "pkcs#7" === n) && 0 === e) {
                const t = l[l.length - 1];
                l.splice(l.length - t, t)
            }
            return "array" !== u ? 0 !== e ? function(t) {
                return t.map(t=>1 === (t = t.toString(16)).length ? "0" + t : t).join("")
            }(l) : function(t) {
                const i = [];
                for (let r = 0, e = t.length; r < e; r++)
                    t[r] >= 240 && t[r] <= 247 ? (i.push(String.fromCodePoint(((7 & t[r]) << 18) + ((63 & t[r + 1]) << 12) + ((63 & t[r + 2]) << 6) + (63 & t[r + 3]))),
                    r += 3) : t[r] >= 224 && t[r] <= 239 ? (i.push(String.fromCodePoint(((15 & t[r]) << 12) + ((63 & t[r + 1]) << 6) + (63 & t[r + 2]))),
                    r += 2) : t[r] >= 192 && t[r] <= 223 ? (i.push(String.fromCodePoint(((31 & t[r]) << 6) + (63 & t[r + 1]))),
                    r++) : i.push(String.fromCodePoint(t[r]));
                return i.join("")
            }(l) : l
        }
        t.exports = {
            encrypt: (t,i,r)=>l(t, i, 1, r),
            decrypt: (t,i,r)=>l(t, i, 0, r)
        }
    },
    2909: function(t, i, r) {
        "use strict";
        function e(t, i) {
            (null == i || i > t.length) && (i = t.length);
            for (var r = 0, e = new Array(i); r < i; r++)
                e[r] = t[r];
            return e
        }
        function n(t) {
            return function(t) {
                if (Array.isArray(t))
                    return e(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, i) {
                if (t) {
                    if ("string" == typeof t)
                        return e(t, i);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, i) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        r.d(i, "a", (function() {
            return n
        }
        )),
        r("a4d3"),
        r("e01a"),
        r("d3b7"),
        r("d28b"),
        r("3ca3"),
        r("ddb0"),
        r("a630"),
        r("fb6a"),
        r("b0c0"),
        r("ac1f"),
        r("00b4"),
        r("d9e2")
    },
    "41d0": function(t, i) {
        function r(t, i) {
            const r = []
              , e = ~~(i / 8)
              , n = i % 8;
            for (let i = 0, o = t.length; i < o; i++)
                r[i] = (t[(i + e) % o] << n & 255) + (t[(i + e + 1) % o] >>> 8 - n & 255);
            return r
        }
        function e(t, i) {
            const r = [];
            for (let e = t.length - 1; e >= 0; e--)
                r[e] = 255 & (t[e] ^ i[e]);
            return r
        }
        function n(t, i) {
            const r = [];
            for (let e = t.length - 1; e >= 0; e--)
                r[e] = t[e] & i[e] & 255;
            return r
        }
        function o(t, i) {
            const r = [];
            for (let e = t.length - 1; e >= 0; e--)
                r[e] = 255 & (t[e] | i[e]);
            return r
        }
        function s(t, i) {
            const r = [];
            let e = 0;
            for (let n = t.length - 1; n >= 0; n--) {
                const o = t[n] + i[n] + e;
                o > 255 ? (e = 1,
                r[n] = 255 & o) : (e = 0,
                r[n] = 255 & o)
            }
            return r
        }
        function h(t) {
            return e(e(t, r(t, 9)), r(t, 17))
        }
        function u(t) {
            return e(e(t, r(t, 15)), r(t, 23))
        }
        function f(t, i, r, s) {
            return s >= 0 && s <= 15 ? e(e(t, i), r) : o(o(n(t, i), n(t, r)), n(i, r))
        }
        function a(t, i, r, s) {
            return s >= 0 && s <= 15 ? e(e(t, i), r) : o(n(t, i), n(function(t) {
                const i = [];
                for (let r = t.length - 1; r >= 0; r--)
                    i[r] = 255 & ~t[r];
                return i
            }(t), r))
        }
        function c(t, i) {
            const n = []
              , o = [];
            for (let t = 0; t < 16; t++) {
                const r = 4 * t;
                n.push(i.slice(r, r + 4))
            }
            for (let t = 16; t < 68; t++)
                n.push(e(e(u(e(e(n[t - 16], n[t - 9]), r(n[t - 3], 15))), r(n[t - 13], 7)), n[t - 6]));
            for (let t = 0; t < 64; t++)
                o.push(e(n[t], n[t + 4]));
            const c = [121, 204, 69, 25]
              , l = [122, 135, 157, 138];
            let p, d, g, m, y = t.slice(0, 4), v = t.slice(4, 8), F = t.slice(8, 12), T = t.slice(12, 16), b = t.slice(16, 20), B = t.slice(20, 24), w = t.slice(24, 28), D = t.slice(28, 32);
            for (let t = 0; t < 64; t++) {
                const i = t >= 0 && t <= 15 ? c : l;
                p = r(s(s(r(y, 12), b), r(i, t)), 7),
                d = e(p, r(y, 12)),
                g = s(s(s(f(y, v, F, t), T), d), o[t]),
                m = s(s(s(a(b, B, w, t), D), p), n[t]),
                T = F,
                F = r(v, 9),
                v = y,
                y = g,
                D = w,
                w = r(B, 19),
                B = b,
                b = h(m)
            }
            return e([].concat(y, v, F, T, b, B, w, D), t)
        }
        t.exports = function(t) {
            let i = 8 * t.length
              , r = i % 512;
            r = r >= 448 ? 512 - r % 448 - 1 : 448 - r - 1;
            const e = new Array((r - 7) / 8);
            for (let t = 0, i = e.length; t < i; t++)
                e[t] = 0;
            const n = [];
            i = i.toString(2);
            for (let t = 7; t >= 0; t--)
                if (i.length > 8) {
                    const r = i.length - 8;
                    n[t] = parseInt(i.substr(r), 2),
                    i = i.substr(0, r)
                } else
                    i.length > 0 ? (n[t] = parseInt(i, 2),
                    i = "") : n[t] = 0;
            const o = [].concat(t, [128], e, n)
              , s = o.length / 64;
            let h = [115, 128, 22, 111, 73, 20, 178, 185, 23, 36, 66, 215, 218, 138, 6, 0, 169, 111, 48, 188, 22, 49, 56, 170, 227, 141, 238, 77, 176, 251, 14, 78];
            for (let t = 0; t < s; t++) {
                const i = 64 * t;
                h = c(h, o.slice(i, i + 64))
            }
            return h
        }
    },
    4701: function(t, i, r) {
        const {BigInteger: e} = r("e0c8")
          , n = new e("3");
        class o {
            constructor(t, i) {
                this.x = i,
                this.q = t
            }
            equals(t) {
                return t === this || this.q.equals(t.q) && this.x.equals(t.x)
            }
            toBigInteger() {
                return this.x
            }
            negate() {
                return new o(this.q,this.x.negate().mod(this.q))
            }
            add(t) {
                return new o(this.q,this.x.add(t.toBigInteger()).mod(this.q))
            }
            subtract(t) {
                return new o(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))
            }
            multiply(t) {
                return new o(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))
            }
            divide(t) {
                return new o(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
            }
            square() {
                return new o(this.q,this.x.square().mod(this.q))
            }
        }
        class s {
            constructor(t, i, r, n) {
                this.curve = t,
                this.x = i,
                this.y = r,
                this.z = null == n ? e.ONE : n,
                this.zinv = null
            }
            getX() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
            getY() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }
            equals(t) {
                if (t === this)
                    return !0;
                if (this.isInfinity())
                    return t.isInfinity();
                if (t.isInfinity())
                    return this.isInfinity();
                if (!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(e.ZERO))
                    return !1;
                return t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(e.ZERO)
            }
            isInfinity() {
                return null === this.x && null === this.y || this.z.equals(e.ZERO) && !this.y.toBigInteger().equals(e.ZERO)
            }
            negate() {
                return new s(this.curve,this.x,this.y.negate(),this.z)
            }
            add(t) {
                if (this.isInfinity())
                    return t;
                if (t.isInfinity())
                    return this;
                const i = this.x.toBigInteger()
                  , r = this.y.toBigInteger()
                  , n = this.z
                  , o = t.x.toBigInteger()
                  , h = t.y.toBigInteger()
                  , u = t.z
                  , f = this.curve.q
                  , a = i.multiply(u).mod(f)
                  , c = o.multiply(n).mod(f)
                  , l = a.subtract(c)
                  , p = r.multiply(u).mod(f)
                  , d = h.multiply(n).mod(f)
                  , g = p.subtract(d);
                if (e.ZERO.equals(l))
                    return e.ZERO.equals(g) ? this.twice() : this.curve.infinity;
                const m = a.add(c)
                  , y = n.multiply(u).mod(f)
                  , v = l.square().mod(f)
                  , F = l.multiply(v).mod(f)
                  , T = y.multiply(g.square()).subtract(m.multiply(v)).mod(f)
                  , b = l.multiply(T).mod(f)
                  , B = g.multiply(v.multiply(a).subtract(T)).subtract(p.multiply(F)).mod(f)
                  , w = F.multiply(y).mod(f);
                return new s(this.curve,this.curve.fromBigInteger(b),this.curve.fromBigInteger(B),w)
            }
            twice() {
                if (this.isInfinity())
                    return this;
                if (!this.y.toBigInteger().signum())
                    return this.curve.infinity;
                const t = this.x.toBigInteger()
                  , i = this.y.toBigInteger()
                  , r = this.z
                  , e = this.curve.q
                  , o = this.curve.a.toBigInteger()
                  , h = t.square().multiply(n).add(o.multiply(r.square())).mod(e)
                  , u = i.shiftLeft(1).multiply(r).mod(e)
                  , f = i.square().mod(e)
                  , a = f.multiply(t).multiply(r).mod(e)
                  , c = u.square().mod(e)
                  , l = h.square().subtract(a.shiftLeft(3)).mod(e)
                  , p = u.multiply(l).mod(e)
                  , d = h.multiply(a.shiftLeft(2).subtract(l)).subtract(c.shiftLeft(1).multiply(f)).mod(e)
                  , g = u.multiply(c).mod(e);
                return new s(this.curve,this.curve.fromBigInteger(p),this.curve.fromBigInteger(d),g)
            }
            multiply(t) {
                if (this.isInfinity())
                    return this;
                if (!t.signum())
                    return this.curve.infinity;
                const i = t.multiply(n)
                  , r = this.negate();
                let e = this;
                for (let n = i.bitLength() - 2; n > 0; n--) {
                    e = e.twice();
                    const o = i.testBit(n);
                    o !== t.testBit(n) && (e = e.add(o ? this : r))
                }
                return e
            }
        }
        t.exports = {
            ECPointFp: s,
            ECCurveFp: class {
                constructor(t, i, r) {
                    this.q = t,
                    this.a = this.fromBigInteger(i),
                    this.b = this.fromBigInteger(r),
                    this.infinity = new s(this,null,null)
                }
                equals(t) {
                    return t === this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
                }
                fromBigInteger(t) {
                    return new o(this.q,t)
                }
                decodePointHex(t) {
                    switch (parseInt(t.substr(0, 2), 16)) {
                    case 0:
                        return this.infinity;
                    case 2:
                    case 3:
                        return null;
                    case 4:
                    case 6:
                    case 7:
                        const i = (t.length - 2) / 2
                          , r = t.substr(2, i)
                          , n = t.substr(i + 2, i);
                        return new s(this,this.fromBigInteger(new e(r,16)),this.fromBigInteger(new e(n,16)));
                    default:
                        return null
                    }
                }
            }
        }
    },
    "526b": function(t, i, r) {
        const {BigInteger: e} = r("e0c8")
          , {encodeDer: n, decodeDer: o} = r("f9dd")
          , s = r("dffd")
          , h = r("41d0")
          , {G: u, curve: f, n: a} = s.generateEcparam();
        function c(t, i, r="1234567812345678") {
            r = s.utf8ToHex(r);
            const e = s.leftPad(u.curve.a.toBigInteger().toRadix(16), 64)
              , n = s.leftPad(u.curve.b.toBigInteger().toRadix(16), 64)
              , o = s.leftPad(u.getX().toBigInteger().toRadix(16), 64)
              , f = s.leftPad(u.getY().toBigInteger().toRadix(16), 64);
            i.length > 128 && (i = i.substr(2, 128));
            const a = i.substr(0, 64)
              , c = i.substr(64, 64)
              , l = s.hexToArray(r + e + n + o + f + a + c)
              , p = 4 * r.length;
            l.unshift(255 & p),
            l.unshift(p >> 8 & 255);
            const d = h(l);
            return s.arrayToHex(h(d.concat(s.hexToArray(t))))
        }
        function l(t) {
            const i = u.multiply(new e(t,16));
            return "04" + s.leftPad(i.getX().toBigInteger().toString(16), 64) + s.leftPad(i.getY().toBigInteger().toString(16), 64)
        }
        function p() {
            const t = s.generateKeyPairHex()
              , i = f.decodePointHex(t.publicKey);
            return t.k = new e(t.privateKey,16),
            t.x1 = i.getX().toBigInteger(),
            t
        }
        t.exports = {
            generateKeyPairHex: s.generateKeyPairHex,
            doEncrypt: function(t, i, r=1) {
                t = "string" == typeof t ? s.hexToArray(s.utf8ToHex(t)) : Array.prototype.slice.call(t),
                i = s.getGlobalCurve().decodePointHex(i);
                const n = s.generateKeyPairHex()
                  , o = new e(n.privateKey,16);
                let u = n.publicKey;
                u.length > 128 && (u = u.substr(u.length - 128));
                const f = i.multiply(o)
                  , a = s.hexToArray(s.leftPad(f.getX().toBigInteger().toRadix(16), 64))
                  , c = s.hexToArray(s.leftPad(f.getY().toBigInteger().toRadix(16), 64))
                  , l = s.arrayToHex(h([].concat(a, t, c)));
                let p = 1
                  , d = 0
                  , g = [];
                const m = [].concat(a, c)
                  , y = ()=>{
                    g = h([...m, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p]),
                    p++,
                    d = 0
                }
                ;
                y();
                for (let i = 0, r = t.length; i < r; i++)
                    d === g.length && y(),
                    t[i] ^= 255 & g[d++];
                const v = s.arrayToHex(t);
                return 0 === r ? u + v + l : u + l + v
            },
            doDecrypt: function(t, i, r=1, {output: n="string"}={}) {
                i = new e(i,16);
                let o = t.substr(128, 64)
                  , u = t.substr(192);
                0 === r && (o = t.substr(t.length - 64),
                u = t.substr(128, t.length - 128 - 64));
                const f = s.hexToArray(u)
                  , a = s.getGlobalCurve().decodePointHex("04" + t.substr(0, 128)).multiply(i)
                  , c = s.hexToArray(s.leftPad(a.getX().toBigInteger().toRadix(16), 64))
                  , l = s.hexToArray(s.leftPad(a.getY().toBigInteger().toRadix(16), 64));
                let p = 1
                  , d = 0
                  , g = [];
                const m = [].concat(c, l)
                  , y = ()=>{
                    g = h([...m, p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p]),
                    p++,
                    d = 0
                }
                ;
                y();
                for (let t = 0, i = f.length; t < i; t++)
                    d === g.length && y(),
                    f[t] ^= 255 & g[d++];
                return s.arrayToHex(h([].concat(c, f, l))) === o ? "array" === n ? f : s.arrayToUtf8(f) : "array" === n ? [] : ""
            },
            doSignature: function(t, i, {pointPool: r, der: o, hash: h, publicKey: u, userId: f}={}) {
                let d = "string" == typeof t ? s.utf8ToHex(t) : s.arrayToHex(t);
                h && (d = c(d, u = u || l(i), f));
                const g = new e(i,16)
                  , m = new e(d,16);
                let y = null
                  , v = null
                  , F = null;
                do {
                    do {
                        let t;
                        t = r && r.length ? r.pop() : p(),
                        y = t.k,
                        v = m.add(t.x1).mod(a)
                    } while (v.equals(e.ZERO) || v.add(y).equals(a));
                    F = g.add(e.ONE).modInverse(a).multiply(y.subtract(v.multiply(g))).mod(a)
                } while (F.equals(e.ZERO));
                return o ? n(v, F) : s.leftPad(v.toString(16), 64) + s.leftPad(F.toString(16), 64)
            },
            doVerifySignature: function(t, i, r, {der: n, hash: h, userId: l}={}) {
                let p, d, g = "string" == typeof t ? s.utf8ToHex(t) : s.arrayToHex(t);
                if (h && (g = c(g, r, l)),
                n) {
                    const t = o(i);
                    p = t.r,
                    d = t.s
                } else
                    p = new e(i.substring(0, 64),16),
                    d = new e(i.substring(64),16);
                const m = f.decodePointHex(r)
                  , y = new e(g,16)
                  , v = p.add(d).mod(a);
                if (v.equals(e.ZERO))
                    return !1;
                const F = u.multiply(d).add(m.multiply(v))
                  , T = y.add(F.getX().toBigInteger()).mod(a);
                return p.equals(T)
            },
            getPoint: p,
            verifyPublicKey: s.verifyPublicKey
        }
    },
    "72fa": function(t, i, r) {
        const e = r("41d0");
        t.exports = function(t) {
            return t = "string" == typeof t ? function(t) {
                const i = [];
                for (let r = 0, e = t.length; r < e; r++) {
                    const e = t.codePointAt(r);
                    if (e <= 127)
                        i.push(e);
                    else if (e <= 2047)
                        i.push(192 | e >>> 6),
                        i.push(128 | 63 & e);
                    else if (e <= 55295 || e >= 57344 && e <= 65535)
                        i.push(224 | e >>> 12),
                        i.push(128 | e >>> 6 & 63),
                        i.push(128 | 63 & e);
                    else {
                        if (!(e >= 65536 && e <= 1114111))
                            throw i.push(e),
                            new Error("input is not supported");
                        r++,
                        i.push(240 | e >>> 18 & 28),
                        i.push(128 | e >>> 12 & 63),
                        i.push(128 | e >>> 6 & 63),
                        i.push(128 | 63 & e)
                    }
                }
                return i
            }(t) : Array.prototype.slice.call(t),
            function(t) {
                return t.map(t=>1 === (t = t.toString(16)).length ? "0" + t : t).join("")
            }(e(t))
        }
    },
    8060: function(t, i, r) {
        t.exports = {
            sm2: r("526b"),
            sm3: r("72fa"),
            sm4: r("10d1")
        }
    },
    dffd: function(t, i, r) {
        const {BigInteger: e, SecureRandom: n} = r("e0c8")
          , {ECCurveFp: o} = r("4701")
          , s = new n
          , {curve: h, G: u, n: f} = a();
        function a() {
            const t = new e("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16)
              , i = new e("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16)
              , r = new e("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16)
              , n = new o(t,i,r)
              , s = n.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0");
            return {
                curve: n,
                G: s,
                n: new e("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16)
            }
        }
        function c(t, i) {
            return t.length >= i ? t : new Array(i - t.length + 1).join("0") + t
        }
        t.exports = {
            getGlobalCurve: function() {
                return h
            },
            generateEcparam: a,
            generateKeyPairHex: function(t, i, r) {
                const n = (t ? new e(t,i,r) : new e(f.bitLength(),s)).mod(f.subtract(e.ONE)).add(e.ONE)
                  , o = c(n.toString(16), 64)
                  , h = u.multiply(n);
                return {
                    privateKey: o,
                    publicKey: "04" + c(h.getX().toBigInteger().toString(16), 64) + c(h.getY().toBigInteger().toString(16), 64)
                }
            },
            utf8ToHex: function(t) {
                const i = (t = unescape(encodeURIComponent(t))).length
                  , r = [];
                for (let e = 0; e < i; e++)
                    r[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
                const e = [];
                for (let t = 0; t < i; t++) {
                    const i = r[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                    e.push((i >>> 4).toString(16)),
                    e.push((15 & i).toString(16))
                }
                return e.join("")
            },
            leftPad: c,
            arrayToHex: function(t) {
                return t.map(t=>1 === (t = t.toString(16)).length ? "0" + t : t).join("")
            },
            arrayToUtf8: function(t) {
                const i = [];
                let r = 0;
                for (let e = 0; e < 2 * t.length; e += 2)
                    i[e >>> 3] |= parseInt(t[r], 10) << 24 - e % 8 * 4,
                    r++;
                try {
                    const r = [];
                    for (let e = 0; e < t.length; e++) {
                        const t = i[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        r.push(String.fromCharCode(t))
                    }
                    return decodeURIComponent(escape(r.join("")))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            hexToArray: function(t) {
                const i = [];
                let r = t.length;
                r % 2 != 0 && (t = c(t, r + 1)),
                r = t.length;
                for (let e = 0; e < r; e += 2)
                    i.push(parseInt(t.substr(e, 2), 16));
                return i
            },
            verifyPublicKey: function(t) {
                const i = h.decodePointHex(t);
                if (!i)
                    return !1;
                const r = i.getX();
                return i.getY().square().equals(r.multiply(r.square()).add(r.multiply(h.a)).add(h.b))
            }
        }
    },
    e0c8: function(t, i, r) {
        (function() {
            var i;
            function r(t, i, r) {
                null != t && ("number" == typeof t ? this.fromNumber(t, i, r) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i))
            }
            function e() {
                return new r(null)
            }
            var n = "undefined" != typeof navigator;
            n && "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = function(t, i, r, e, n, o) {
                for (var s = 32767 & i, h = i >> 15; --o >= 0; ) {
                    var u = 32767 & this[t]
                      , f = this[t++] >> 15
                      , a = h * u + f * s;
                    n = ((u = s * u + ((32767 & a) << 15) + r[e] + (1073741823 & n)) >>> 30) + (a >>> 15) + h * f + (n >>> 30),
                    r[e++] = 1073741823 & u
                }
                return n
            }
            ,
            i = 30) : n && "Netscape" != navigator.appName ? (r.prototype.am = function(t, i, r, e, n, o) {
                for (; --o >= 0; ) {
                    var s = i * this[t++] + r[e] + n;
                    n = Math.floor(s / 67108864),
                    r[e++] = 67108863 & s
                }
                return n
            }
            ,
            i = 26) : (r.prototype.am = function(t, i, r, e, n, o) {
                for (var s = 16383 & i, h = i >> 14; --o >= 0; ) {
                    var u = 16383 & this[t]
                      , f = this[t++] >> 14
                      , a = h * u + f * s;
                    n = ((u = s * u + ((16383 & a) << 14) + r[e] + n) >> 28) + (a >> 14) + h * f,
                    r[e++] = 268435455 & u
                }
                return n
            }
            ,
            i = 28),
            r.prototype.DB = i,
            r.prototype.DM = (1 << i) - 1,
            r.prototype.DV = 1 << i;
            r.prototype.FV = Math.pow(2, 52),
            r.prototype.F1 = 52 - i,
            r.prototype.F2 = 2 * i - 52;
            var o, s, h = new Array;
            for (o = "0".charCodeAt(0),
            s = 0; s <= 9; ++s)
                h[o++] = s;
            for (o = "a".charCodeAt(0),
            s = 10; s < 36; ++s)
                h[o++] = s;
            for (o = "A".charCodeAt(0),
            s = 10; s < 36; ++s)
                h[o++] = s;
            function u(t) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
            }
            function f(t, i) {
                var r = h[t.charCodeAt(i)];
                return null == r ? -1 : r
            }
            function a(t) {
                var i = e();
                return i.fromInt(t),
                i
            }
            function c(t) {
                var i, r = 1;
                return 0 != (i = t >>> 16) && (t = i,
                r += 16),
                0 != (i = t >> 8) && (t = i,
                r += 8),
                0 != (i = t >> 4) && (t = i,
                r += 4),
                0 != (i = t >> 2) && (t = i,
                r += 2),
                0 != (i = t >> 1) && (t = i,
                r += 1),
                r
            }
            function l(t) {
                this.m = t
            }
            function p(t) {
                this.m = t,
                this.mp = t.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << t.DB - 15) - 1,
                this.mt2 = 2 * t.t
            }
            function d(t, i) {
                return t & i
            }
            function g(t, i) {
                return t | i
            }
            function m(t, i) {
                return t ^ i
            }
            function y(t, i) {
                return t & ~i
            }
            function v(t) {
                if (0 == t)
                    return -1;
                var i = 0;
                return 0 == (65535 & t) && (t >>= 16,
                i += 16),
                0 == (255 & t) && (t >>= 8,
                i += 8),
                0 == (15 & t) && (t >>= 4,
                i += 4),
                0 == (3 & t) && (t >>= 2,
                i += 2),
                0 == (1 & t) && ++i,
                i
            }
            function F(t) {
                for (var i = 0; 0 != t; )
                    t &= t - 1,
                    ++i;
                return i
            }
            function T() {}
            function b(t) {
                return t
            }
            function B(t) {
                this.r2 = e(),
                this.q3 = e(),
                r.ONE.dlShiftTo(2 * t.t, this.r2),
                this.mu = this.r2.divide(t),
                this.m = t
            }
            l.prototype.convert = function(t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }
            ,
            l.prototype.revert = function(t) {
                return t
            }
            ,
            l.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }
            ,
            l.prototype.mulTo = function(t, i, r) {
                t.multiplyTo(i, r),
                this.reduce(r)
            }
            ,
            l.prototype.sqrTo = function(t, i) {
                t.squareTo(i),
                this.reduce(i)
            }
            ,
            p.prototype.convert = function(t) {
                var i = e();
                return t.abs().dlShiftTo(this.m.t, i),
                i.divRemTo(this.m, null, i),
                t.s < 0 && i.compareTo(r.ZERO) > 0 && this.m.subTo(i, i),
                i
            }
            ,
            p.prototype.revert = function(t) {
                var i = e();
                return t.copyTo(i),
                this.reduce(i),
                i
            }
            ,
            p.prototype.reduce = function(t) {
                for (; t.t <= this.mt2; )
                    t[t.t++] = 0;
                for (var i = 0; i < this.m.t; ++i) {
                    var r = 32767 & t[i]
                      , e = r * this.mpl + ((r * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[r = i + this.m.t] += this.m.am(0, e, t, i, 0, this.m.t); t[r] >= t.DV; )
                        t[r] -= t.DV,
                        t[++r]++
                }
                t.clamp(),
                t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }
            ,
            p.prototype.mulTo = function(t, i, r) {
                t.multiplyTo(i, r),
                this.reduce(r)
            }
            ,
            p.prototype.sqrTo = function(t, i) {
                t.squareTo(i),
                this.reduce(i)
            }
            ,
            r.prototype.copyTo = function(t) {
                for (var i = this.t - 1; i >= 0; --i)
                    t[i] = this[i];
                t.t = this.t,
                t.s = this.s
            }
            ,
            r.prototype.fromInt = function(t) {
                this.t = 1,
                this.s = t < 0 ? -1 : 0,
                t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }
            ,
            r.prototype.fromString = function(t, i) {
                var e;
                if (16 == i)
                    e = 4;
                else if (8 == i)
                    e = 3;
                else if (256 == i)
                    e = 8;
                else if (2 == i)
                    e = 1;
                else if (32 == i)
                    e = 5;
                else {
                    if (4 != i)
                        return void this.fromRadix(t, i);
                    e = 2
                }
                this.t = 0,
                this.s = 0;
                for (var n = t.length, o = !1, s = 0; --n >= 0; ) {
                    var h = 8 == e ? 255 & t[n] : f(t, n);
                    h < 0 ? "-" == t.charAt(n) && (o = !0) : (o = !1,
                    0 == s ? this[this.t++] = h : s + e > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - s) - 1) << s,
                    this[this.t++] = h >> this.DB - s) : this[this.t - 1] |= h << s,
                    (s += e) >= this.DB && (s -= this.DB))
                }
                8 == e && 0 != (128 & t[0]) && (this.s = -1,
                s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                this.clamp(),
                o && r.ZERO.subTo(this, this)
            }
            ,
            r.prototype.clamp = function() {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                    --this.t
            }
            ,
            r.prototype.dlShiftTo = function(t, i) {
                var r;
                for (r = this.t - 1; r >= 0; --r)
                    i[r + t] = this[r];
                for (r = t - 1; r >= 0; --r)
                    i[r] = 0;
                i.t = this.t + t,
                i.s = this.s
            }
            ,
            r.prototype.drShiftTo = function(t, i) {
                for (var r = t; r < this.t; ++r)
                    i[r - t] = this[r];
                i.t = Math.max(this.t - t, 0),
                i.s = this.s
            }
            ,
            r.prototype.lShiftTo = function(t, i) {
                var r, e = t % this.DB, n = this.DB - e, o = (1 << n) - 1, s = Math.floor(t / this.DB), h = this.s << e & this.DM;
                for (r = this.t - 1; r >= 0; --r)
                    i[r + s + 1] = this[r] >> n | h,
                    h = (this[r] & o) << e;
                for (r = s - 1; r >= 0; --r)
                    i[r] = 0;
                i[s] = h,
                i.t = this.t + s + 1,
                i.s = this.s,
                i.clamp()
            }
            ,
            r.prototype.rShiftTo = function(t, i) {
                i.s = this.s;
                var r = Math.floor(t / this.DB);
                if (r >= this.t)
                    i.t = 0;
                else {
                    var e = t % this.DB
                      , n = this.DB - e
                      , o = (1 << e) - 1;
                    i[0] = this[r] >> e;
                    for (var s = r + 1; s < this.t; ++s)
                        i[s - r - 1] |= (this[s] & o) << n,
                        i[s - r] = this[s] >> e;
                    e > 0 && (i[this.t - r - 1] |= (this.s & o) << n),
                    i.t = this.t - r,
                    i.clamp()
                }
            }
            ,
            r.prototype.subTo = function(t, i) {
                for (var r = 0, e = 0, n = Math.min(t.t, this.t); r < n; )
                    e += this[r] - t[r],
                    i[r++] = e & this.DM,
                    e >>= this.DB;
                if (t.t < this.t) {
                    for (e -= t.s; r < this.t; )
                        e += this[r],
                        i[r++] = e & this.DM,
                        e >>= this.DB;
                    e += this.s
                } else {
                    for (e += this.s; r < t.t; )
                        e -= t[r],
                        i[r++] = e & this.DM,
                        e >>= this.DB;
                    e -= t.s
                }
                i.s = e < 0 ? -1 : 0,
                e < -1 ? i[r++] = this.DV + e : e > 0 && (i[r++] = e),
                i.t = r,
                i.clamp()
            }
            ,
            r.prototype.multiplyTo = function(t, i) {
                var e = this.abs()
                  , n = t.abs()
                  , o = e.t;
                for (i.t = o + n.t; --o >= 0; )
                    i[o] = 0;
                for (o = 0; o < n.t; ++o)
                    i[o + e.t] = e.am(0, n[o], i, o, 0, e.t);
                i.s = 0,
                i.clamp(),
                this.s != t.s && r.ZERO.subTo(i, i)
            }
            ,
            r.prototype.squareTo = function(t) {
                for (var i = this.abs(), r = t.t = 2 * i.t; --r >= 0; )
                    t[r] = 0;
                for (r = 0; r < i.t - 1; ++r) {
                    var e = i.am(r, i[r], t, 2 * r, 0, 1);
                    (t[r + i.t] += i.am(r + 1, 2 * i[r], t, 2 * r + 1, e, i.t - r - 1)) >= i.DV && (t[r + i.t] -= i.DV,
                    t[r + i.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += i.am(r, i[r], t, 2 * r, 0, 1)),
                t.s = 0,
                t.clamp()
            }
            ,
            r.prototype.divRemTo = function(t, i, n) {
                var o = t.abs();
                if (!(o.t <= 0)) {
                    var s = this.abs();
                    if (s.t < o.t)
                        return null != i && i.fromInt(0),
                        void (null != n && this.copyTo(n));
                    null == n && (n = e());
                    var h = e()
                      , u = this.s
                      , f = t.s
                      , a = this.DB - c(o[o.t - 1]);
                    a > 0 ? (o.lShiftTo(a, h),
                    s.lShiftTo(a, n)) : (o.copyTo(h),
                    s.copyTo(n));
                    var l = h.t
                      , p = h[l - 1];
                    if (0 != p) {
                        var d = p * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0)
                          , g = this.FV / d
                          , m = (1 << this.F1) / d
                          , y = 1 << this.F2
                          , v = n.t
                          , F = v - l
                          , T = null == i ? e() : i;
                        for (h.dlShiftTo(F, T),
                        n.compareTo(T) >= 0 && (n[n.t++] = 1,
                        n.subTo(T, n)),
                        r.ONE.dlShiftTo(l, T),
                        T.subTo(h, h); h.t < l; )
                            h[h.t++] = 0;
                        for (; --F >= 0; ) {
                            var b = n[--v] == p ? this.DM : Math.floor(n[v] * g + (n[v - 1] + y) * m);
                            if ((n[v] += h.am(0, b, n, F, 0, l)) < b)
                                for (h.dlShiftTo(F, T),
                                n.subTo(T, n); n[v] < --b; )
                                    n.subTo(T, n)
                        }
                        null != i && (n.drShiftTo(l, i),
                        u != f && r.ZERO.subTo(i, i)),
                        n.t = l,
                        n.clamp(),
                        a > 0 && n.rShiftTo(a, n),
                        u < 0 && r.ZERO.subTo(n, n)
                    }
                }
            }
            ,
            r.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var i = 3 & t;
                return (i = (i = (i = (i = i * (2 - (15 & t) * i) & 15) * (2 - (255 & t) * i) & 255) * (2 - ((65535 & t) * i & 65535)) & 65535) * (2 - t * i % this.DV) % this.DV) > 0 ? this.DV - i : -i
            }
            ,
            r.prototype.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            r.prototype.exp = function(t, i) {
                if (t > 4294967295 || t < 1)
                    return r.ONE;
                var n = e()
                  , o = e()
                  , s = i.convert(this)
                  , h = c(t) - 1;
                for (s.copyTo(n); --h >= 0; )
                    if (i.sqrTo(n, o),
                    (t & 1 << h) > 0)
                        i.mulTo(o, s, n);
                    else {
                        var u = n;
                        n = o,
                        o = u
                    }
                return i.revert(n)
            }
            ,
            r.prototype.toString = function(t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var i;
                if (16 == t)
                    i = 4;
                else if (8 == t)
                    i = 3;
                else if (2 == t)
                    i = 1;
                else if (32 == t)
                    i = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    i = 2
                }
                var r, e = (1 << i) - 1, n = !1, o = "", s = this.t, h = this.DB - s * this.DB % i;
                if (s-- > 0)
                    for (h < this.DB && (r = this[s] >> h) > 0 && (n = !0,
                    o = u(r)); s >= 0; )
                        h < i ? (r = (this[s] & (1 << h) - 1) << i - h,
                        r |= this[--s] >> (h += this.DB - i)) : (r = this[s] >> (h -= i) & e,
                        h <= 0 && (h += this.DB,
                        --s)),
                        r > 0 && (n = !0),
                        n && (o += u(r));
                return n ? o : "0"
            }
            ,
            r.prototype.negate = function() {
                var t = e();
                return r.ZERO.subTo(this, t),
                t
            }
            ,
            r.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            r.prototype.compareTo = function(t) {
                var i = this.s - t.s;
                if (0 != i)
                    return i;
                var r = this.t;
                if (0 != (i = r - t.t))
                    return this.s < 0 ? -i : i;
                for (; --r >= 0; )
                    if (0 != (i = this[r] - t[r]))
                        return i;
                return 0
            }
            ,
            r.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + c(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            r.prototype.mod = function(t) {
                var i = e();
                return this.abs().divRemTo(t, null, i),
                this.s < 0 && i.compareTo(r.ZERO) > 0 && t.subTo(i, i),
                i
            }
            ,
            r.prototype.modPowInt = function(t, i) {
                var r;
                return r = t < 256 || i.isEven() ? new l(i) : new p(i),
                this.exp(t, r)
            }
            ,
            r.ZERO = a(0),
            r.ONE = a(1),
            T.prototype.convert = b,
            T.prototype.revert = b,
            T.prototype.mulTo = function(t, i, r) {
                t.multiplyTo(i, r)
            }
            ,
            T.prototype.sqrTo = function(t, i) {
                t.squareTo(i)
            }
            ,
            B.prototype.convert = function(t) {
                if (t.s < 0 || t.t > 2 * this.m.t)
                    return t.mod(this.m);
                if (t.compareTo(this.m) < 0)
                    return t;
                var i = e();
                return t.copyTo(i),
                this.reduce(i),
                i
            }
            ,
            B.prototype.revert = function(t) {
                return t
            }
            ,
            B.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                    t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                    t.subTo(this.m, t)
            }
            ,
            B.prototype.mulTo = function(t, i, r) {
                t.multiplyTo(i, r),
                this.reduce(r)
            }
            ,
            B.prototype.sqrTo = function(t, i) {
                t.squareTo(i),
                this.reduce(i)
            }
            ;
            var w, D, S, x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], I = (1 << 26) / x[x.length - 1];
            function q() {
                !function(t) {
                    D[S++] ^= 255 & t,
                    D[S++] ^= t >> 8 & 255,
                    D[S++] ^= t >> 16 & 255,
                    D[S++] ^= t >> 24 & 255,
                    S >= C && (S -= C)
                }((new Date).getTime())
            }
            if (r.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }
            ,
            r.prototype.toRadix = function(t) {
                if (null == t && (t = 10),
                0 == this.signum() || t < 2 || t > 36)
                    return "0";
                var i = this.chunkSize(t)
                  , r = Math.pow(t, i)
                  , n = a(r)
                  , o = e()
                  , s = e()
                  , h = "";
                for (this.divRemTo(n, o, s); o.signum() > 0; )
                    h = (r + s.intValue()).toString(t).substr(1) + h,
                    o.divRemTo(n, o, s);
                return s.intValue().toString(t) + h
            }
            ,
            r.prototype.fromRadix = function(t, i) {
                this.fromInt(0),
                null == i && (i = 10);
                for (var e = this.chunkSize(i), n = Math.pow(i, e), o = !1, s = 0, h = 0, u = 0; u < t.length; ++u) {
                    var a = f(t, u);
                    a < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (o = !0) : (h = i * h + a,
                    ++s >= e && (this.dMultiply(n),
                    this.dAddOffset(h, 0),
                    s = 0,
                    h = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(i, s)),
                this.dAddOffset(h, 0)),
                o && r.ZERO.subTo(this, this)
            }
            ,
            r.prototype.fromNumber = function(t, i, e) {
                if ("number" == typeof i)
                    if (t < 2)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(t, e),
                        this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), g, this),
                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i); )
                            this.dAddOffset(2, 0),
                            this.bitLength() > t && this.subTo(r.ONE.shiftLeft(t - 1), this);
                else {
                    var n = new Array
                      , o = 7 & t;
                    n.length = 1 + (t >> 3),
                    i.nextBytes(n),
                    o > 0 ? n[0] &= (1 << o) - 1 : n[0] = 0,
                    this.fromString(n, 256)
                }
            }
            ,
            r.prototype.bitwiseTo = function(t, i, r) {
                var e, n, o = Math.min(t.t, this.t);
                for (e = 0; e < o; ++e)
                    r[e] = i(this[e], t[e]);
                if (t.t < this.t) {
                    for (n = t.s & this.DM,
                    e = o; e < this.t; ++e)
                        r[e] = i(this[e], n);
                    r.t = this.t
                } else {
                    for (n = this.s & this.DM,
                    e = o; e < t.t; ++e)
                        r[e] = i(n, t[e]);
                    r.t = t.t
                }
                r.s = i(this.s, t.s),
                r.clamp()
            }
            ,
            r.prototype.changeBit = function(t, i) {
                var e = r.ONE.shiftLeft(t);
                return this.bitwiseTo(e, i, e),
                e
            }
            ,
            r.prototype.addTo = function(t, i) {
                for (var r = 0, e = 0, n = Math.min(t.t, this.t); r < n; )
                    e += this[r] + t[r],
                    i[r++] = e & this.DM,
                    e >>= this.DB;
                if (t.t < this.t) {
                    for (e += t.s; r < this.t; )
                        e += this[r],
                        i[r++] = e & this.DM,
                        e >>= this.DB;
                    e += this.s
                } else {
                    for (e += this.s; r < t.t; )
                        e += t[r],
                        i[r++] = e & this.DM,
                        e >>= this.DB;
                    e += t.s
                }
                i.s = e < 0 ? -1 : 0,
                e > 0 ? i[r++] = e : e < -1 && (i[r++] = this.DV + e),
                i.t = r,
                i.clamp()
            }
            ,
            r.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
            }
            ,
            r.prototype.dAddOffset = function(t, i) {
                if (0 != t) {
                    for (; this.t <= i; )
                        this[this.t++] = 0;
                    for (this[i] += t; this[i] >= this.DV; )
                        this[i] -= this.DV,
                        ++i >= this.t && (this[this.t++] = 0),
                        ++this[i]
                }
            }
            ,
            r.prototype.multiplyLowerTo = function(t, i, r) {
                var e, n = Math.min(this.t + t.t, i);
                for (r.s = 0,
                r.t = n; n > 0; )
                    r[--n] = 0;
                for (e = r.t - this.t; n < e; ++n)
                    r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
                for (e = Math.min(t.t, i); n < e; ++n)
                    this.am(0, t[n], r, n, 0, i - n);
                r.clamp()
            }
            ,
            r.prototype.multiplyUpperTo = function(t, i, r) {
                --i;
                var e = r.t = this.t + t.t - i;
                for (r.s = 0; --e >= 0; )
                    r[e] = 0;
                for (e = Math.max(i - this.t, 0); e < t.t; ++e)
                    r[this.t + e - i] = this.am(i - e, t[e], r, 0, 0, this.t + e - i);
                r.clamp(),
                r.drShiftTo(1, r)
            }
            ,
            r.prototype.modInt = function(t) {
                if (t <= 0)
                    return 0;
                var i = this.DV % t
                  , r = this.s < 0 ? t - 1 : 0;
                if (this.t > 0)
                    if (0 == i)
                        r = this[0] % t;
                    else
                        for (var e = this.t - 1; e >= 0; --e)
                            r = (i * r + this[e]) % t;
                return r
            }
            ,
            r.prototype.millerRabin = function(t) {
                var i = this.subtract(r.ONE)
                  , n = i.getLowestSetBit();
                if (n <= 0)
                    return !1;
                var o = i.shiftRight(n);
                (t = t + 1 >> 1) > x.length && (t = x.length);
                for (var s = e(), h = 0; h < t; ++h) {
                    s.fromInt(x[Math.floor(Math.random() * x.length)]);
                    var u = s.modPow(o, this);
                    if (0 != u.compareTo(r.ONE) && 0 != u.compareTo(i)) {
                        for (var f = 1; f++ < n && 0 != u.compareTo(i); )
                            if (0 == (u = u.modPowInt(2, this)).compareTo(r.ONE))
                                return !1;
                        if (0 != u.compareTo(i))
                            return !1
                    }
                }
                return !0
            }
            ,
            r.prototype.clone = function() {
                var t = e();
                return this.copyTo(t),
                t
            }
            ,
            r.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            r.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            r.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            r.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            r.prototype.toByteArray = function() {
                var t = this.t
                  , i = new Array;
                i[0] = this.s;
                var r, e = this.DB - t * this.DB % 8, n = 0;
                if (t-- > 0)
                    for (e < this.DB && (r = this[t] >> e) != (this.s & this.DM) >> e && (i[n++] = r | this.s << this.DB - e); t >= 0; )
                        e < 8 ? (r = (this[t] & (1 << e) - 1) << 8 - e,
                        r |= this[--t] >> (e += this.DB - 8)) : (r = this[t] >> (e -= 8) & 255,
                        e <= 0 && (e += this.DB,
                        --t)),
                        0 != (128 & r) && (r |= -256),
                        0 == n && (128 & this.s) != (128 & r) && ++n,
                        (n > 0 || r != this.s) && (i[n++] = r);
                return i
            }
            ,
            r.prototype.equals = function(t) {
                return 0 == this.compareTo(t)
            }
            ,
            r.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }
            ,
            r.prototype.max = function(t) {
                return this.compareTo(t) > 0 ? this : t
            }
            ,
            r.prototype.and = function(t) {
                var i = e();
                return this.bitwiseTo(t, d, i),
                i
            }
            ,
            r.prototype.or = function(t) {
                var i = e();
                return this.bitwiseTo(t, g, i),
                i
            }
            ,
            r.prototype.xor = function(t) {
                var i = e();
                return this.bitwiseTo(t, m, i),
                i
            }
            ,
            r.prototype.andNot = function(t) {
                var i = e();
                return this.bitwiseTo(t, y, i),
                i
            }
            ,
            r.prototype.not = function() {
                for (var t = e(), i = 0; i < this.t; ++i)
                    t[i] = this.DM & ~this[i];
                return t.t = this.t,
                t.s = ~this.s,
                t
            }
            ,
            r.prototype.shiftLeft = function(t) {
                var i = e();
                return t < 0 ? this.rShiftTo(-t, i) : this.lShiftTo(t, i),
                i
            }
            ,
            r.prototype.shiftRight = function(t) {
                var i = e();
                return t < 0 ? this.lShiftTo(-t, i) : this.rShiftTo(t, i),
                i
            }
            ,
            r.prototype.getLowestSetBit = function() {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t])
                        return t * this.DB + v(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            r.prototype.bitCount = function() {
                for (var t = 0, i = this.s & this.DM, r = 0; r < this.t; ++r)
                    t += F(this[r] ^ i);
                return t
            }
            ,
            r.prototype.testBit = function(t) {
                var i = Math.floor(t / this.DB);
                return i >= this.t ? 0 != this.s : 0 != (this[i] & 1 << t % this.DB)
            }
            ,
            r.prototype.setBit = function(t) {
                return this.changeBit(t, g)
            }
            ,
            r.prototype.clearBit = function(t) {
                return this.changeBit(t, y)
            }
            ,
            r.prototype.flipBit = function(t) {
                return this.changeBit(t, m)
            }
            ,
            r.prototype.add = function(t) {
                var i = e();
                return this.addTo(t, i),
                i
            }
            ,
            r.prototype.subtract = function(t) {
                var i = e();
                return this.subTo(t, i),
                i
            }
            ,
            r.prototype.multiply = function(t) {
                var i = e();
                return this.multiplyTo(t, i),
                i
            }
            ,
            r.prototype.divide = function(t) {
                var i = e();
                return this.divRemTo(t, i, null),
                i
            }
            ,
            r.prototype.remainder = function(t) {
                var i = e();
                return this.divRemTo(t, null, i),
                i
            }
            ,
            r.prototype.divideAndRemainder = function(t) {
                var i = e()
                  , r = e();
                return this.divRemTo(t, i, r),
                new Array(i,r)
            }
            ,
            r.prototype.modPow = function(t, i) {
                var r, n, o = t.bitLength(), s = a(1);
                if (o <= 0)
                    return s;
                r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
                n = o < 8 ? new l(i) : i.isEven() ? new B(i) : new p(i);
                var h = new Array
                  , u = 3
                  , f = r - 1
                  , d = (1 << r) - 1;
                if (h[1] = n.convert(this),
                r > 1) {
                    var g = e();
                    for (n.sqrTo(h[1], g); u <= d; )
                        h[u] = e(),
                        n.mulTo(g, h[u - 2], h[u]),
                        u += 2
                }
                var m, y, v = t.t - 1, F = !0, T = e();
                for (o = c(t[v]) - 1; v >= 0; ) {
                    for (o >= f ? m = t[v] >> o - f & d : (m = (t[v] & (1 << o + 1) - 1) << f - o,
                    v > 0 && (m |= t[v - 1] >> this.DB + o - f)),
                    u = r; 0 == (1 & m); )
                        m >>= 1,
                        --u;
                    if ((o -= u) < 0 && (o += this.DB,
                    --v),
                    F)
                        h[m].copyTo(s),
                        F = !1;
                    else {
                        for (; u > 1; )
                            n.sqrTo(s, T),
                            n.sqrTo(T, s),
                            u -= 2;
                        u > 0 ? n.sqrTo(s, T) : (y = s,
                        s = T,
                        T = y),
                        n.mulTo(T, h[m], s)
                    }
                    for (; v >= 0 && 0 == (t[v] & 1 << o); )
                        n.sqrTo(s, T),
                        y = s,
                        s = T,
                        T = y,
                        --o < 0 && (o = this.DB - 1,
                        --v)
                }
                return n.revert(s)
            }
            ,
            r.prototype.modInverse = function(t) {
                var i = t.isEven();
                if (this.isEven() && i || 0 == t.signum())
                    return r.ZERO;
                for (var e = t.clone(), n = this.clone(), o = a(1), s = a(0), h = a(0), u = a(1); 0 != e.signum(); ) {
                    for (; e.isEven(); )
                        e.rShiftTo(1, e),
                        i ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                        s.subTo(t, s)),
                        o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s),
                        s.rShiftTo(1, s);
                    for (; n.isEven(); )
                        n.rShiftTo(1, n),
                        i ? (h.isEven() && u.isEven() || (h.addTo(this, h),
                        u.subTo(t, u)),
                        h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u),
                        u.rShiftTo(1, u);
                    e.compareTo(n) >= 0 ? (e.subTo(n, e),
                    i && o.subTo(h, o),
                    s.subTo(u, s)) : (n.subTo(e, n),
                    i && h.subTo(o, h),
                    u.subTo(s, u))
                }
                return 0 != n.compareTo(r.ONE) ? r.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u),
                u.signum() < 0 ? u.add(t) : u) : u
            }
            ,
            r.prototype.pow = function(t) {
                return this.exp(t, new T)
            }
            ,
            r.prototype.gcd = function(t) {
                var i = this.s < 0 ? this.negate() : this.clone()
                  , r = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(r) < 0) {
                    var e = i;
                    i = r,
                    r = e
                }
                var n = i.getLowestSetBit()
                  , o = r.getLowestSetBit();
                if (o < 0)
                    return i;
                for (n < o && (o = n),
                o > 0 && (i.rShiftTo(o, i),
                r.rShiftTo(o, r)); i.signum() > 0; )
                    (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
                    (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
                    i.compareTo(r) >= 0 ? (i.subTo(r, i),
                    i.rShiftTo(1, i)) : (r.subTo(i, r),
                    r.rShiftTo(1, r));
                return o > 0 && r.lShiftTo(o, r),
                r
            }
            ,
            r.prototype.isProbablePrime = function(t) {
                var i, r = this.abs();
                if (1 == r.t && r[0] <= x[x.length - 1]) {
                    for (i = 0; i < x.length; ++i)
                        if (r[0] == x[i])
                            return !0;
                    return !1
                }
                if (r.isEven())
                    return !1;
                for (i = 1; i < x.length; ) {
                    for (var e = x[i], n = i + 1; n < x.length && e < I; )
                        e *= x[n++];
                    for (e = r.modInt(e); i < n; )
                        if (e % x[i++] == 0)
                            return !1
                }
                return r.millerRabin(t)
            }
            ,
            r.prototype.square = function() {
                var t = e();
                return this.squareTo(t),
                t
            }
            ,
            r.prototype.Barrett = B,
            null == D) {
                var E;
                if (D = new Array,
                S = 0,
                "undefined" != typeof window && window.crypto)
                    if (window.crypto.getRandomValues) {
                        var A = new Uint8Array(32);
                        for (window.crypto.getRandomValues(A),
                        E = 0; E < 32; ++E)
                            D[S++] = A[E]
                    } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                        var R = window.crypto.random(32);
                        for (E = 0; E < R.length; ++E)
                            D[S++] = 255 & R.charCodeAt(E)
                    }
                for (; S < C; )
                    E = Math.floor(65536 * Math.random()),
                    D[S++] = E >>> 8,
                    D[S++] = 255 & E;
                S = 0,
                q()
            }
            function M() {
                if (null == w) {
                    for (q(),
                    (w = new P).init(D),
                    S = 0; S < D.length; ++S)
                        D[S] = 0;
                    S = 0
                }
                return w.next()
            }
            function O() {}
            function P() {
                this.i = 0,
                this.j = 0,
                this.S = new Array
            }
            O.prototype.nextBytes = function(t) {
                var i;
                for (i = 0; i < t.length; ++i)
                    t[i] = M()
            }
            ,
            P.prototype.init = function(t) {
                var i, r, e;
                for (i = 0; i < 256; ++i)
                    this.S[i] = i;
                for (r = 0,
                i = 0; i < 256; ++i)
                    r = r + this.S[i] + t[i % t.length] & 255,
                    e = this.S[i],
                    this.S[i] = this.S[r],
                    this.S[r] = e;
                this.i = 0,
                this.j = 0
            }
            ,
            P.prototype.next = function() {
                var t;
                return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
            }
            ;
            var C = 256;
            t.exports = {
                default: r,
                BigInteger: r,
                SecureRandom: O
            }
        }
        ).call(this)
    },
    e9c4: function(t, i, r) {
        var e = r("23e7")
          , n = r("da84")
          , o = r("d066")
          , s = r("2ba4")
          , h = r("e330")
          , u = r("d039")
          , f = n.Array
          , a = o("JSON", "stringify")
          , c = h(/./.exec)
          , l = h("".charAt)
          , p = h("".charCodeAt)
          , d = h("".replace)
          , g = h(1..toString)
          , m = /[\uD800-\uDFFF]/g
          , y = /^[\uD800-\uDBFF]$/
          , v = /^[\uDC00-\uDFFF]$/
          , F = function(t, i, r) {
            var e = l(r, i - 1)
              , n = l(r, i + 1);
            return c(y, t) && !c(v, n) || c(v, t) && !c(y, e) ? "\\u" + g(p(t, 0), 16) : t
        }
          , T = u((function() {
            return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead")
        }
        ));
        a && e({
            target: "JSON",
            stat: !0,
            forced: T
        }, {
            stringify: function(t, i, r) {
                for (var e = 0, n = arguments.length, o = f(n); e < n; e++)
                    o[e] = arguments[e];
                var h = s(a, null, o);
                return "string" == typeof h ? d(h, m, F) : h
            }
        })
    },
    f9dd: function(t, i, r) {
        const {BigInteger: e} = r("e0c8");
        class n {
            constructor() {
                this.tlv = null,
                this.t = "00",
                this.l = "00",
                this.v = ""
            }
            getEncodedHex() {
                return this.tlv || (this.v = this.getValue(),
                this.l = this.getLength(),
                this.tlv = this.t + this.l + this.v),
                this.tlv
            }
            getLength() {
                const t = this.v.length / 2;
                let i = t.toString(16);
                if (i.length % 2 == 1 && (i = "0" + i),
                t < 128)
                    return i;
                return (128 + i.length / 2).toString(16) + i
            }
            getValue() {
                return ""
            }
        }
        class o extends n {
            constructor(t) {
                super(),
                this.t = "02",
                t && (this.v = function(t) {
                    let i = t.toString(16);
                    if ("-" !== i[0])
                        i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i);
                    else {
                        i = i.substr(1);
                        let r = i.length;
                        r % 2 == 1 ? r += 1 : i.match(/^[0-7]/) || (r += 2);
                        let n = "";
                        for (let t = 0; t < r; t++)
                            n += "f";
                        n = new e(n,16),
                        i = n.xor(t).add(e.ONE),
                        i = i.toString(16).replace(/^-/, "")
                    }
                    return i
                }(t))
            }
            getValue() {
                return this.v
            }
        }
        class s extends n {
            constructor(t) {
                super(),
                this.t = "30",
                this.asn1Array = t
            }
            getValue() {
                return this.v = this.asn1Array.map(t=>t.getEncodedHex()).join(""),
                this.v
            }
        }
        function h(t, i) {
            return +t[i + 2] < 8 ? 1 : 128 & +t.substr(i + 2, 2)
        }
        function u(t, i) {
            const r = h(t, i)
              , n = t.substr(i + 2, 2 * r);
            if (!n)
                return -1;
            return (+n[0] < 8 ? new e(n,16) : new e(n.substr(2),16)).intValue()
        }
        function f(t, i) {
            return i + 2 * (h(t, i) + 1)
        }
        t.exports = {
            encodeDer(t, i) {
                const r = new o(t)
                  , e = new o(i);
                return new s([r, e]).getEncodedHex()
            },
            decodeDer(t) {
                const i = f(t, 0)
                  , r = f(t, i)
                  , n = u(t, i)
                  , o = t.substr(r, 2 * n)
                  , s = r + o.length
                  , h = f(t, s)
                  , a = u(t, s)
                  , c = t.substr(h, 2 * a);
                return {
                    r: new e(o,16),
                    s: new e(c,16)
                }
            }
        }
    }

});
function xfp_samr(text){
    return "04"+_c("526b").doEncrypt(text,'04B81CF94BCC81D0410ABB35D38B4014A1127E462FAD8B008892698B9131F7E9CF1E4073BB2998350DF2C60B94943A3D9D915450837B95FF647107508F7B34FB1F',0)

}
console.log(xfp_samr("11111"))
