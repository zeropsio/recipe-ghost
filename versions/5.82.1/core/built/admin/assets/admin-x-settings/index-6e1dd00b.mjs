import { aG as Pr, y as Vi, aP as Yu } from "./index-e75a9553.mjs";
function Ju(r, e) {
  for (var n = 0; n < e.length; n++) {
    const t = e[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in r)) {
          const i = Object.getOwnPropertyDescriptor(t, a);
          i && Object.defineProperty(r, a, i.get ? i : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var Xu = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, Bi = Xu, Qu = Bi, Ku = typeof self == "object" && self && self.Object === Object && self, rl = Qu || Ku || Function("return this")(), Ze = rl, el = Ze, tl = el.Symbol, nn = tl;
function nl(r, e) {
  for (var n = -1, t = r == null ? 0 : r.length, a = Array(t); ++n < t; )
    a[n] = e(r[n], n, r);
  return a;
}
var zi = nl, al = Array.isArray, he = al, va = nn, Zi = Object.prototype, il = Zi.hasOwnProperty, ol = Zi.toString, re = va ? va.toStringTag : void 0;
function sl(r) {
  var e = il.call(r, re), n = r[re];
  try {
    r[re] = void 0;
    var t = !0;
  } catch {
  }
  var a = ol.call(r);
  return t && (e ? r[re] = n : delete r[re]), a;
}
var ul = sl, ll = Object.prototype, fl = ll.toString;
function cl(r) {
  return fl.call(r);
}
var vl = cl, ha = nn, hl = ul, dl = vl, ml = "[object Null]", yl = "[object Undefined]", da = ha ? ha.toStringTag : void 0;
function pl(r) {
  return r == null ? r === void 0 ? yl : ml : da && da in Object(r) ? hl(r) : dl(r);
}
var Br = pl;
function gl(r) {
  return r != null && typeof r == "object";
}
var zr = gl, bl = Br, $l = zr, wl = "[object Symbol]";
function Sl(r) {
  return typeof r == "symbol" || $l(r) && bl(r) == wl;
}
var an = Sl, ma = nn, Tl = zi, El = he, Ol = an, xl = 1 / 0, ya = ma ? ma.prototype : void 0, pa = ya ? ya.toString : void 0;
function Hi(r) {
  if (typeof r == "string")
    return r;
  if (El(r))
    return Tl(r, Hi) + "";
  if (Ol(r))
    return pa ? pa.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -xl ? "-0" : e;
}
var Il = Hi, _l = Il;
function Al(r) {
  return r == null ? "" : _l(r);
}
var Ir = Al;
function Cl(r, e, n) {
  var t = -1, a = r.length;
  e < 0 && (e = -e > a ? 0 : a + e), n = n > a ? a : n, n < 0 && (n += a), a = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var i = Array(a); ++t < a; )
    i[t] = r[t + e];
  return i;
}
var Nl = Cl, Fl = Nl;
function Ml(r, e, n) {
  var t = r.length;
  return n = n === void 0 ? t : n, !e && n >= t ? r : Fl(r, e, n);
}
var kl = Ml, Dl = "\\ud800-\\udfff", Ll = "\\u0300-\\u036f", Pl = "\\ufe20-\\ufe2f", Ul = "\\u20d0-\\u20ff", Rl = Ll + Pl + Ul, jl = "\\ufe0e\\ufe0f", Vl = "\\u200d", Bl = RegExp("[" + Vl + Dl + Rl + jl + "]");
function zl(r) {
  return Bl.test(r);
}
var Gi = zl;
function Zl(r) {
  return r.split("");
}
var Hl = Zl, Wi = "\\ud800-\\udfff", Gl = "\\u0300-\\u036f", Wl = "\\ufe20-\\ufe2f", ql = "\\u20d0-\\u20ff", Yl = Gl + Wl + ql, Jl = "\\ufe0e\\ufe0f", Xl = "[" + Wi + "]", _t = "[" + Yl + "]", At = "\\ud83c[\\udffb-\\udfff]", Ql = "(?:" + _t + "|" + At + ")", qi = "[^" + Wi + "]", Yi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ji = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kl = "\\u200d", Xi = Ql + "?", Qi = "[" + Jl + "]?", rf = "(?:" + Kl + "(?:" + [qi, Yi, Ji].join("|") + ")" + Qi + Xi + ")*", ef = Qi + Xi + rf, tf = "(?:" + [qi + _t + "?", _t, Yi, Ji, Xl].join("|") + ")", nf = RegExp(At + "(?=" + At + ")|" + tf + ef, "g");
function af(r) {
  return r.match(nf) || [];
}
var of = af, sf = Hl, uf = Gi, lf = of;
function ff(r) {
  return uf(r) ? lf(r) : sf(r);
}
var cf = ff, vf = kl, hf = Gi, df = cf, mf = Ir;
function yf(r) {
  return function(e) {
    e = mf(e);
    var n = hf(e) ? df(e) : void 0, t = n ? n[0] : e.charAt(0), a = n ? vf(n, 1).join("") : e.slice(1);
    return t[r]() + a;
  };
}
var pf = yf, gf = pf, bf = gf("toUpperCase"), $f = bf, wf = Ir, Sf = $f;
function Tf(r) {
  return Sf(wf(r).toLowerCase());
}
var Ef = Tf;
function Of(r, e, n, t) {
  var a = -1, i = r == null ? 0 : r.length;
  for (t && i && (n = r[++a]); ++a < i; )
    n = e(n, r[a], a, r);
  return n;
}
var xf = Of;
function If(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var Ki = If, _f = Ki, Af = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Cf = _f(Af), Nf = Cf, Ff = Nf, Mf = Ir, kf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Df = "\\u0300-\\u036f", Lf = "\\ufe20-\\ufe2f", Pf = "\\u20d0-\\u20ff", Uf = Df + Lf + Pf, Rf = "[" + Uf + "]", jf = RegExp(Rf, "g");
function Vf(r) {
  return r = Mf(r), r && r.replace(kf, Ff).replace(jf, "");
}
var Bf = Vf, zf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Zf(r) {
  return r.match(zf) || [];
}
var Hf = Zf, Gf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Wf(r) {
  return Gf.test(r);
}
var qf = Wf, ro = "\\ud800-\\udfff", Yf = "\\u0300-\\u036f", Jf = "\\ufe20-\\ufe2f", Xf = "\\u20d0-\\u20ff", Qf = Yf + Jf + Xf, eo = "\\u2700-\\u27bf", to = "a-z\\xdf-\\xf6\\xf8-\\xff", Kf = "\\xac\\xb1\\xd7\\xf7", rc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ec = "\\u2000-\\u206f", tc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", no = "A-Z\\xc0-\\xd6\\xd8-\\xde", nc = "\\ufe0e\\ufe0f", ao = Kf + rc + ec + tc, io = "['’]", ga = "[" + ao + "]", ac = "[" + Qf + "]", oo = "\\d+", ic = "[" + eo + "]", so = "[" + to + "]", uo = "[^" + ro + ao + oo + eo + to + no + "]", oc = "\\ud83c[\\udffb-\\udfff]", sc = "(?:" + ac + "|" + oc + ")", uc = "[^" + ro + "]", lo = "(?:\\ud83c[\\udde6-\\uddff]){2}", fo = "[\\ud800-\\udbff][\\udc00-\\udfff]", kr = "[" + no + "]", lc = "\\u200d", ba = "(?:" + so + "|" + uo + ")", fc = "(?:" + kr + "|" + uo + ")", $a = "(?:" + io + "(?:d|ll|m|re|s|t|ve))?", wa = "(?:" + io + "(?:D|LL|M|RE|S|T|VE))?", co = sc + "?", vo = "[" + nc + "]?", cc = "(?:" + lc + "(?:" + [uc, lo, fo].join("|") + ")" + vo + co + ")*", vc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", hc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", dc = vo + co + cc, mc = "(?:" + [ic, lo, fo].join("|") + ")" + dc, yc = RegExp([
  kr + "?" + so + "+" + $a + "(?=" + [ga, kr, "$"].join("|") + ")",
  fc + "+" + wa + "(?=" + [ga, kr + ba, "$"].join("|") + ")",
  kr + "?" + ba + "+" + $a,
  kr + "+" + wa,
  hc,
  vc,
  oo,
  mc
].join("|"), "g");
function pc(r) {
  return r.match(yc) || [];
}
var gc = pc, bc = Hf, $c = qf, wc = Ir, Sc = gc;
function Tc(r, e, n) {
  return r = wc(r), e = n ? void 0 : e, e === void 0 ? $c(r) ? Sc(r) : bc(r) : r.match(e) || [];
}
var Ec = Tc, Oc = xf, xc = Bf, Ic = Ec, _c = "['’]", Ac = RegExp(_c, "g");
function Cc(r) {
  return function(e) {
    return Oc(Ic(xc(e).replace(Ac, "")), r, "");
  };
}
var ho = Cc, Nc = Ef, Fc = ho, Mc = Fc(function(r, e, n) {
  return e = e.toLowerCase(), r + (n ? Nc(e) : e);
}), kc = Mc, Dc = Object.prototype, Lc = Dc.hasOwnProperty;
function Pc(r, e) {
  return r != null && Lc.call(r, e);
}
var Uc = Pc, Rc = he, jc = an, Vc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bc = /^\w*$/;
function zc(r, e) {
  if (Rc(r))
    return !1;
  var n = typeof r;
  return n == "number" || n == "symbol" || n == "boolean" || r == null || jc(r) ? !0 : Bc.test(r) || !Vc.test(r) || e != null && r in Object(e);
}
var Zc = zc;
function Hc(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var He = Hc, Gc = Br, Wc = He, qc = "[object AsyncFunction]", Yc = "[object Function]", Jc = "[object GeneratorFunction]", Xc = "[object Proxy]";
function Qc(r) {
  if (!Wc(r))
    return !1;
  var e = Gc(r);
  return e == Yc || e == Jc || e == qc || e == Xc;
}
var mo = Qc, Kc = Ze, rv = Kc["__core-js_shared__"], ev = rv, ft = ev, Sa = function() {
  var r = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function tv(r) {
  return !!Sa && Sa in r;
}
var nv = tv, av = Function.prototype, iv = av.toString;
function ov(r) {
  if (r != null) {
    try {
      return iv.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var sv = ov, uv = mo, lv = nv, fv = He, cv = sv, vv = /[\\^$.*+?()[\]{}|]/g, hv = /^\[object .+?Constructor\]$/, dv = Function.prototype, mv = Object.prototype, yv = dv.toString, pv = mv.hasOwnProperty, gv = RegExp(
  "^" + yv.call(pv).replace(vv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bv(r) {
  if (!fv(r) || lv(r))
    return !1;
  var e = uv(r) ? gv : hv;
  return e.test(cv(r));
}
var $v = bv;
function wv(r, e) {
  return r == null ? void 0 : r[e];
}
var Sv = wv, Tv = $v, Ev = Sv;
function Ov(r, e) {
  var n = Ev(r, e);
  return Tv(n) ? n : void 0;
}
var on = Ov, xv = on, Iv = xv(Object, "create"), Ge = Iv, Ta = Ge;
function _v() {
  this.__data__ = Ta ? Ta(null) : {}, this.size = 0;
}
var Av = _v;
function Cv(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Nv = Cv, Fv = Ge, Mv = "__lodash_hash_undefined__", kv = Object.prototype, Dv = kv.hasOwnProperty;
function Lv(r) {
  var e = this.__data__;
  if (Fv) {
    var n = e[r];
    return n === Mv ? void 0 : n;
  }
  return Dv.call(e, r) ? e[r] : void 0;
}
var Pv = Lv, Uv = Ge, Rv = Object.prototype, jv = Rv.hasOwnProperty;
function Vv(r) {
  var e = this.__data__;
  return Uv ? e[r] !== void 0 : jv.call(e, r);
}
var Bv = Vv, zv = Ge, Zv = "__lodash_hash_undefined__";
function Hv(r, e) {
  var n = this.__data__;
  return this.size += this.has(r) ? 0 : 1, n[r] = zv && e === void 0 ? Zv : e, this;
}
var Gv = Hv, Wv = Av, qv = Nv, Yv = Pv, Jv = Bv, Xv = Gv;
function Zr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
Zr.prototype.clear = Wv;
Zr.prototype.delete = qv;
Zr.prototype.get = Yv;
Zr.prototype.has = Jv;
Zr.prototype.set = Xv;
var Qv = Zr;
function Kv() {
  this.__data__ = [], this.size = 0;
}
var rh = Kv;
function eh(r, e) {
  return r === e || r !== r && e !== e;
}
var We = eh, th = We;
function nh(r, e) {
  for (var n = r.length; n--; )
    if (th(r[n][0], e))
      return n;
  return -1;
}
var qe = nh, ah = qe, ih = Array.prototype, oh = ih.splice;
function sh(r) {
  var e = this.__data__, n = ah(e, r);
  if (n < 0)
    return !1;
  var t = e.length - 1;
  return n == t ? e.pop() : oh.call(e, n, 1), --this.size, !0;
}
var uh = sh, lh = qe;
function fh(r) {
  var e = this.__data__, n = lh(e, r);
  return n < 0 ? void 0 : e[n][1];
}
var ch = fh, vh = qe;
function hh(r) {
  return vh(this.__data__, r) > -1;
}
var dh = hh, mh = qe;
function yh(r, e) {
  var n = this.__data__, t = mh(n, r);
  return t < 0 ? (++this.size, n.push([r, e])) : n[t][1] = e, this;
}
var ph = yh, gh = rh, bh = uh, $h = ch, wh = dh, Sh = ph;
function Hr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
Hr.prototype.clear = gh;
Hr.prototype.delete = bh;
Hr.prototype.get = $h;
Hr.prototype.has = wh;
Hr.prototype.set = Sh;
var Th = Hr, Eh = on, Oh = Ze, xh = Eh(Oh, "Map"), Ih = xh, Ea = Qv, _h = Th, Ah = Ih;
function Ch() {
  this.size = 0, this.__data__ = {
    hash: new Ea(),
    map: new (Ah || _h)(),
    string: new Ea()
  };
}
var Nh = Ch;
function Fh(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Mh = Fh, kh = Mh;
function Dh(r, e) {
  var n = r.__data__;
  return kh(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
var Ye = Dh, Lh = Ye;
function Ph(r) {
  var e = Lh(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var Uh = Ph, Rh = Ye;
function jh(r) {
  return Rh(this, r).get(r);
}
var Vh = jh, Bh = Ye;
function zh(r) {
  return Bh(this, r).has(r);
}
var Zh = zh, Hh = Ye;
function Gh(r, e) {
  var n = Hh(this, r), t = n.size;
  return n.set(r, e), this.size += n.size == t ? 0 : 1, this;
}
var Wh = Gh, qh = Nh, Yh = Uh, Jh = Vh, Xh = Zh, Qh = Wh;
function Gr(r) {
  var e = -1, n = r == null ? 0 : r.length;
  for (this.clear(); ++e < n; ) {
    var t = r[e];
    this.set(t[0], t[1]);
  }
}
Gr.prototype.clear = qh;
Gr.prototype.delete = Yh;
Gr.prototype.get = Jh;
Gr.prototype.has = Xh;
Gr.prototype.set = Qh;
var Kh = Gr, yo = Kh, rd = "Expected a function";
function sn(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(rd);
  var n = function() {
    var t = arguments, a = e ? e.apply(this, t) : t[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var l = r.apply(this, t);
    return n.cache = i.set(a, l) || i, l;
  };
  return n.cache = new (sn.Cache || yo)(), n;
}
sn.Cache = yo;
var ed = sn, td = ed, nd = 500;
function ad(r) {
  var e = td(r, function(t) {
    return n.size === nd && n.clear(), t;
  }), n = e.cache;
  return e;
}
var id = ad, od = id, sd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ud = /\\(\\)?/g, ld = od(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(sd, function(n, t, a, i) {
    e.push(a ? i.replace(ud, "$1") : t || n);
  }), e;
}), fd = ld, cd = he, vd = Zc, hd = fd, dd = Ir;
function md(r, e) {
  return cd(r) ? r : vd(r, e) ? [r] : hd(dd(r));
}
var yd = md, pd = Br, gd = zr, bd = "[object Arguments]";
function $d(r) {
  return gd(r) && pd(r) == bd;
}
var wd = $d, Oa = wd, Sd = zr, po = Object.prototype, Td = po.hasOwnProperty, Ed = po.propertyIsEnumerable, Od = Oa(function() {
  return arguments;
}()) ? Oa : function(r) {
  return Sd(r) && Td.call(r, "callee") && !Ed.call(r, "callee");
}, go = Od, xd = 9007199254740991, Id = /^(?:0|[1-9]\d*)$/;
function _d(r, e) {
  var n = typeof r;
  return e = e ?? xd, !!e && (n == "number" || n != "symbol" && Id.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var un = _d, Ad = 9007199254740991;
function Cd(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Ad;
}
var ln = Cd, Nd = an, Fd = 1 / 0;
function Md(r) {
  if (typeof r == "string" || Nd(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -Fd ? "-0" : e;
}
var kd = Md, Dd = yd, Ld = go, Pd = he, Ud = un, Rd = ln, jd = kd;
function Vd(r, e, n) {
  e = Dd(e, r);
  for (var t = -1, a = e.length, i = !1; ++t < a; ) {
    var l = jd(e[t]);
    if (!(i = r != null && n(r, l)))
      break;
    r = r[l];
  }
  return i || ++t != a ? i : (a = r == null ? 0 : r.length, !!a && Rd(a) && Ud(l, a) && (Pd(r) || Ld(r)));
}
var Bd = Vd, zd = Uc, Zd = Bd;
function Hd(r, e) {
  return r != null && Zd(r, e, zd);
}
var Gd = Hd;
let Te;
const Wd = new Uint8Array(16);
function qd() {
  if (!Te && (Te = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Te))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Te(Wd);
}
const V = [];
for (let r = 0; r < 256; ++r)
  V.push((r + 256).toString(16).slice(1));
function Yd(r, e = 0) {
  return V[r[e + 0]] + V[r[e + 1]] + V[r[e + 2]] + V[r[e + 3]] + "-" + V[r[e + 4]] + V[r[e + 5]] + "-" + V[r[e + 6]] + V[r[e + 7]] + "-" + V[r[e + 8]] + V[r[e + 9]] + "-" + V[r[e + 10]] + V[r[e + 11]] + V[r[e + 12]] + V[r[e + 13]] + V[r[e + 14]] + V[r[e + 15]];
}
let xa, ct, vt = 0, ht = 0;
function Jd(r, e, n) {
  let t = e && n || 0;
  const a = e || new Array(16);
  r = r || {};
  let i = r.node || xa, l = r.clockseq !== void 0 ? r.clockseq : ct;
  if (i == null || l == null) {
    const p = r.random || (r.rng || qd)();
    i == null && (i = xa = [p[0] | 1, p[1], p[2], p[3], p[4], p[5]]), l == null && (l = ct = (p[6] << 8 | p[7]) & 16383);
  }
  let o = r.msecs !== void 0 ? r.msecs : Date.now(), c = r.nsecs !== void 0 ? r.nsecs : ht + 1;
  const h = o - vt + (c - ht) / 1e4;
  if (h < 0 && r.clockseq === void 0 && (l = l + 1 & 16383), (h < 0 || o > vt) && r.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  vt = o, ht = c, ct = l, o += 122192928e5;
  const y = ((o & 268435455) * 1e4 + c) % 4294967296;
  a[t++] = y >>> 24 & 255, a[t++] = y >>> 16 & 255, a[t++] = y >>> 8 & 255, a[t++] = y & 255;
  const m = o / 4294967296 * 1e4 & 268435455;
  a[t++] = m >>> 8 & 255, a[t++] = m & 255, a[t++] = m >>> 24 & 15 | 16, a[t++] = m >>> 16 & 255, a[t++] = l >>> 8 | 128, a[t++] = l & 255;
  for (let p = 0; p < 6; ++p)
    a[t + p] = i[p];
  return e || Yd(a);
}
function Xd(r, e) {
  var i, l;
  const n = (((i = r.stack) == null ? void 0 : i.split(/\n/g)) || [])[1], [t, ...a] = ((l = e.stack) == null ? void 0 : l.split(/\n/g)) || [];
  return [t, n, ...a].join(`
`);
}
var Qd = Object.defineProperty, Kd = (r, e, n) => e in r ? Qd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n, tr = (r, e, n) => (Kd(r, typeof e != "symbol" ? e + "" : e, n), n);
class _ extends Error {
  constructor(e = {}) {
    super(), tr(this, "statusCode"), tr(this, "errorType"), tr(this, "level"), tr(this, "id"), tr(this, "context"), tr(this, "help"), tr(this, "errorDetails"), tr(this, "code"), tr(this, "property"), tr(this, "redirect"), tr(this, "hideStack"), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = Jd(), this.id = e.id || this.id, this.statusCode = e.statusCode || this.statusCode, this.level = e.level || this.level, this.context = e.context, this.help = e.help, this.errorType = this.name = e.errorType || this.errorType, this.errorDetails = e.errorDetails, this.code = e.code || null, this.property = e.property || null, this.redirect = e.redirect || null, this.message = e.message || this.message, this.hideStack = e.hideStack || !1, e.err && (typeof e.err == "string" && (e.err = new Error(e.err)), Object.getOwnPropertyNames(e.err).forEach((n) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(n) === -1) {
        if (n === "code") {
          this[n] = this[n] || e.err[n];
          return;
        }
        if (n === "stack" && !this.hideStack) {
          this[n] = Xd(this, e.err);
          return;
        }
        this[n] = e.err[n] || this[n];
      }
    }));
  }
}
const C = (r, e) => {
  const n = { ...e };
  return Object.keys(r).forEach((t) => {
    r[t] !== void 0 && (n[t] = r[t]);
  }), n;
};
class Ur extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      level: "critical",
      errorType: "InternalServerError",
      message: "The server has encountered an error."
    }));
  }
}
let bo = class extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      level: "critical",
      errorType: "IncorrectUsageError",
      message: "We detected a misuse. Please read the stack trace."
    }));
  }
};
class $o extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 404,
      errorType: "NotFoundError",
      message: "Resource could not be found.",
      hideStack: !0
    }));
  }
}
class fn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      errorType: "BadRequestError",
      message: "The request could not be understood."
    }));
  }
}
class wo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 401,
      errorType: "UnauthorizedError",
      message: "You are not authorised to make this request."
    }));
  }
}
class cn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 403,
      errorType: "NoPermissionError",
      message: "You do not have permission to perform this request."
    }));
  }
}
class vn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 422,
      errorType: "ValidationError",
      message: "The request failed validation."
    }));
  }
}
class So extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 415,
      errorType: "UnsupportedMediaTypeError",
      message: "The media in the request is not supported by the server."
    }));
  }
}
class To extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 429,
      errorType: "TooManyRequestsError",
      message: "Server has received too many similar requests in a short space of time."
    }));
  }
}
class hn extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 503,
      errorType: "MaintenanceError",
      message: "The server is temporarily down for maintenance."
    }));
  }
}
class Eo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 405,
      errorType: "MethodNotAllowedError",
      message: "Method not allowed for resource."
    }));
  }
}
class Oo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 406,
      errorType: "RequestNotAcceptableError",
      message: "Request not acceptable for provided Accept-Version header.",
      hideStack: !0
    }));
  }
}
class xo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 416,
      errorType: "RangeNotSatisfiableError",
      message: "Range not satisfiable for provided Range header.",
      hideStack: !0
    }));
  }
}
class Io extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 413,
      errorType: "RequestEntityTooLargeError",
      message: "Request was too big for the server to handle."
    }));
  }
}
class _o extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 503,
      errorType: "TokenRevocationError",
      message: "Token is no longer available."
    }));
  }
}
class Ao extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 400,
      errorType: "VersionMismatchError",
      message: "Requested version does not match server version."
    }));
  }
}
class Co extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "DataExportError",
      message: "The server encountered an error whilst exporting data."
    }));
  }
}
class No extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "DataImportError",
      message: "The server encountered an error whilst importing data."
    }));
  }
}
class Fo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 500,
      errorType: "EmailError",
      message: "The server encountered an error whilst sending email."
    }));
  }
}
class Mo extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 422,
      errorType: "ThemeValidationError",
      message: "The theme has a validation error.",
      errorDetails: {}
    }));
  }
}
class ko extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 409,
      errorType: "DisabledFeatureError",
      message: "Unable to complete the request, this feature is disabled."
    }));
  }
}
class Do extends _ {
  constructor(e = {}) {
    super(C(e, {
      statusCode: 409,
      errorType: "UpdateCollisionError",
      message: "Unable to complete the request, there was a conflict."
    }));
  }
}
class Lo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "HostLimitError",
      hideStack: !0,
      statusCode: 403,
      message: "Unable to complete the request, this resource is limited."
    }));
  }
}
class Po extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "HelperWarning",
      hideStack: !0,
      statusCode: 400,
      message: "A theme helper has done something unexpected."
    }));
  }
}
class Uo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "PasswordResetRequiredError",
      statusCode: 401,
      message: "For security, you need to create a new password. An email has been sent to you with instructions!"
    }));
  }
}
class Ro extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "UnhandledJobError",
      message: "Processed job threw an unhandled error",
      level: "critical"
    }));
  }
}
class jo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "NoContentError",
      statusCode: 204,
      hideStack: !0
    }));
  }
}
class Vo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "ConflictError",
      statusCode: 409,
      message: "The server has encountered an conflict."
    }));
  }
}
class Bo extends _ {
  constructor(e = {}) {
    super(C(e, {
      errorType: "MigrationError",
      message: "An error has occurred applying a database migration.",
      level: "critical"
    }));
  }
}
const zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: fn,
  ConflictError: Vo,
  DataExportError: Co,
  DataImportError: No,
  DisabledFeatureError: ko,
  EmailError: Fo,
  HelperWarning: Po,
  HostLimitError: Lo,
  IncorrectUsageError: bo,
  InternalServerError: Ur,
  MaintenanceError: hn,
  MethodNotAllowedError: Eo,
  MigrationError: Bo,
  NoContentError: jo,
  NoPermissionError: cn,
  NotFoundError: $o,
  PasswordResetRequiredError: Uo,
  RangeNotSatisfiableError: xo,
  RequestEntityTooLargeError: Io,
  RequestNotAcceptableError: Oo,
  ThemeValidationError: Mo,
  TokenRevocationError: _o,
  TooManyRequestsError: To,
  UnauthorizedError: wo,
  UnhandledJobError: Ro,
  UnsupportedMediaTypeError: So,
  UpdateCollisionError: Do,
  ValidationError: vn,
  VersionMismatchError: Ao
}, Symbol.toStringTag, { value: "Module" }));
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function rm() {
  return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
}
var em = rm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tm = em, nm = tm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var am = nm, im = am();
function om() {
  return im && typeof Symbol.toStringTag == "symbol";
}
var sm = om;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var um = sm, Je = um;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lm = Object.prototype.toString, Zo = lm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fm = Zo;
function cm(r) {
  return fm.call(r);
}
var vm = cm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hm = Object.prototype.hasOwnProperty;
function dm(r, e) {
  return r == null ? !1 : hm.call(r, e);
}
var mm = dm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ym = mm, Wr = ym;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pm = typeof Symbol == "function" ? Symbol.toStringTag : "", gm = pm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bm = Wr, ee = gm, dt = Zo;
function $m(r) {
  var e, n, t;
  if (r == null)
    return dt.call(r);
  n = r[ee], e = bm(r, ee);
  try {
    r[ee] = void 0;
  } catch {
    return dt.call(r);
  }
  return t = dt.call(r), e ? r[ee] = n : delete r[ee], t;
}
var wm = $m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sm = Je, Tm = vm, Em = wm, Ct;
Sm() ? Ct = Em : Ct = Tm;
var B = Ct;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Om = B, Nt;
function xm(r) {
  return Om(r) === "[object Array]";
}
Array.isArray ? Nt = Array.isArray : Nt = xm;
var Im = Nt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _m = Im, Xe = _m;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Am = typeof Object.defineProperty == "function" ? Object.defineProperty : null, Cm = Am;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nm = Cm;
function Fm() {
  try {
    return Nm({}, "x", {}), !0;
  } catch {
    return !1;
  }
}
var Mm = Fm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var km = Object.defineProperty, Dm = km;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qr = Object.prototype, Ia = qr.toString, _a = qr.__defineGetter__, Aa = qr.__defineSetter__, Lm = qr.__lookupGetter__, Pm = qr.__lookupSetter__;
function Um(r, e, n) {
  var t, a, i, l;
  if (typeof r != "object" || r === null || Ia.call(r) === "[object Array]")
    throw new TypeError("invalid argument. First argument must be an object. Value: `" + r + "`.");
  if (typeof n != "object" || n === null || Ia.call(n) === "[object Array]")
    throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + n + "`.");
  if (a = "value" in n, a && (Lm.call(r, e) || Pm.call(r, e) ? (t = r.__proto__, r.__proto__ = qr, delete r[e], r[e] = n.value, r.__proto__ = t) : r[e] = n.value), i = "get" in n, l = "set" in n, a && (i || l))
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  return i && _a && _a.call(r, e, n.get), l && Aa && Aa.call(r, e, n.set), r;
}
var Rm = Um;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jm = Mm, Vm = Dm, Bm = Rm, Ft;
jm() ? Ft = Vm : Ft = Bm;
var Ho = Ft;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zm = Ho;
function Zm(r, e, n) {
  zm(r, e, {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: n
  });
}
var Hm = Zm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gm = Hm, yr = Gm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Wm(r) {
  return typeof r == "number";
}
var Go = Wm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qm = Number;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ym = qm, dn = Ym;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Jm = dn, Xm = Jm.prototype.toString, Qm = Xm;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Km = Qm;
function ry(r) {
  try {
    return Km.call(r), !0;
  } catch {
    return !1;
  }
}
var ey = ry;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ty = Je, ny = B, ay = dn, iy = ey, oy = ty();
function sy(r) {
  return typeof r == "object" ? r instanceof ay ? !0 : oy ? iy(r) : ny(r) === "[object Number]" : !1;
}
var Wo = sy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var uy = Go, ly = Wo;
function fy(r) {
  return uy(r) || ly(r);
}
var cy = fy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qo = yr, mn = cy, vy = Go, hy = Wo;
qo(mn, "isPrimitive", vy);
qo(mn, "isObject", hy);
var Qe = mn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dy = Number.POSITIVE_INFINITY, yn = dy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var my = dn, yy = my.NEGATIVE_INFINITY, py = yy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gy = Math.floor, by = gy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $y = by, wy = $y;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sy = wy;
function Ty(r) {
  return Sy(r) === r;
}
var Ey = Ty;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Oy = Ey, pn = Oy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xy = yn, Iy = py, _y = pn;
function Ay(r) {
  return r < xy && r > Iy && _y(r);
}
var Yo = Ay;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cy = Qe.isPrimitive, Ny = Yo;
function Fy(r) {
  return Cy(r) && Ny(r);
}
var Jo = Fy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var My = Qe.isObject, ky = Yo;
function Dy(r) {
  return My(r) && ky(r.valueOf());
}
var Xo = Dy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ly = Jo, Py = Xo;
function Uy(r) {
  return Ly(r) || Py(r);
}
var Ry = Uy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Qo = yr, gn = Ry, jy = Jo, Vy = Xo;
Qo(gn, "isPrimitive", jy);
Qo(gn, "isObject", Vy);
var Ke = gn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var By = Ke.isPrimitive;
function zy(r) {
  return By(r) && r >= 0;
}
var Ko = zy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Zy = Ke.isObject;
function Hy(r) {
  return Zy(r) && r.valueOf() >= 0;
}
var rs = Hy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gy = Ko, Wy = rs;
function qy(r) {
  return Gy(r) || Wy(r);
}
var Yy = qy;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var es = yr, bn = Yy, Jy = Ko, Xy = rs;
es(bn, "isPrimitive", Jy);
es(bn, "isObject", Xy);
var Qy = bn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ky = Xe;
function rp(r) {
  if (typeof r != "function")
    throw new TypeError("invalid argument. Must provide a function. Value: `" + r + "`.");
  return e;
  function e(n) {
    var t, a;
    if (!Ky(n) || (t = n.length, t === 0))
      return !1;
    for (a = 0; a < t; a++)
      if (r(n[a]) === !1)
        return !1;
    return !0;
  }
}
var ep = rp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tp = ep, np = tp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ap(r) {
  return r !== null && typeof r == "object";
}
var ip = ap;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var op = yr, sp = np, $n = ip, up = sp($n);
op($n, "isObjectLikeArray", up);
var ts = $n;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lp = ts;
function fp(r) {
  return lp(r) && // eslint-disable-next-line no-underscore-dangle
  (r._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  r.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r));
}
var cp = fp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vp = cp, de = vp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hp = /./, dp = hp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mp(r) {
  return typeof r == "boolean";
}
var ns = mp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yp = Boolean.prototype.toString, pp = yp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gp = pp;
function bp(r) {
  try {
    return gp.call(r), !0;
  } catch {
    return !1;
  }
}
var $p = bp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wp = Je, Sp = B, Tp = $p, Ep = wp();
function Op(r) {
  return typeof r == "object" ? r instanceof Boolean ? !0 : Ep ? Tp(r) : Sp(r) === "[object Boolean]" : !1;
}
var as = Op;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xp = ns, Ip = as;
function _p(r) {
  return xp(r) || Ip(r);
}
var Ap = _p;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var is = yr, wn = Ap, Cp = ns, Np = as;
is(wn, "isPrimitive", Cp);
is(wn, "isObject", Np);
var Fp = wn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Mp() {
  return new Function("return this;")();
}
var kp = Mp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Dp = typeof self == "object" ? self : null, Lp = Dp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Pp = typeof window == "object" ? window : null, Up = Pp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Rp = typeof Pr == "object" ? Pr : null, jp = Rp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vp = Fp.isPrimitive, Bp = kp, Ca = Lp, Na = Up, Fa = jp;
function zp(r) {
  if (arguments.length) {
    if (!Vp(r))
      throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `" + r + "`.");
    if (r)
      return Bp();
  }
  if (Ca)
    return Ca;
  if (Na)
    return Na;
  if (Fa)
    return Fa;
  throw new Error("unexpected error. Unable to resolve global object.");
}
var Zp = zp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hp = Zp, Gp = Hp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wp = Gp, Ma = Wp(), qp = Ma.document && Ma.document.childNodes, Yp = qp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Jp = Int8Array, Xp = Jp;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Qp = dp, Kp = Yp, r0 = Xp;
function e0() {
  return (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof Qp == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof r0 == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof Kp == "function"
  );
}
var t0 = e0;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function n0() {
  return /^\s*function\s*([^(]*)/i;
}
var os = n0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a0 = os, i0 = a0(), o0 = i0;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s0 = yr, ss = os, u0 = o0;
s0(ss, "REGEXP", u0);
var l0 = ss;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f0 = B, c0 = l0.REGEXP, v0 = de;
function h0(r) {
  var e, n, t;
  if (n = f0(r).slice(8, -1), (n === "Object" || n === "Error") && r.constructor) {
    if (t = r.constructor, typeof t.name == "string")
      return t.name;
    if (e = c0.exec(t.toString()), e)
      return e[1];
  }
  return v0(r) ? "Buffer" : n;
}
var d0 = h0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var m0 = d0, us = m0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y0 = us;
function p0(r) {
  var e;
  return r === null ? "null" : (e = typeof r, e === "object" ? y0(r).toLowerCase() : e);
}
var g0 = p0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b0 = us;
function $0(r) {
  return b0(r).toLowerCase();
}
var w0 = $0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var S0 = t0, T0 = g0, E0 = w0, O0 = S0() ? E0 : T0, Sn = O0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x0 = Sn;
function I0(r) {
  return x0(r) === "function";
}
var _0 = I0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A0 = _0, ls = A0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var C0 = Object.getPrototypeOf, N0 = C0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function F0(r) {
  return r.__proto__;
}
var M0 = F0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var k0 = B, D0 = M0;
function L0(r) {
  var e = D0(r);
  return e || e === null ? e : k0(r.constructor) === "[object Function]" ? r.constructor.prototype : r instanceof Object ? Object.prototype : null;
}
var P0 = L0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U0 = ls, R0 = N0, j0 = P0, Mt;
U0(Object.getPrototypeOf) ? Mt = R0 : Mt = j0;
var V0 = Mt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var B0 = V0;
function z0(r) {
  return r == null ? null : (r = Object(r), B0(r));
}
var Z0 = z0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H0 = Z0, fs = H0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var G0 = fs, W0 = B;
function q0(r) {
  if (typeof r != "object" || r === null)
    return !1;
  if (r instanceof Error)
    return !0;
  for (; r; ) {
    if (W0(r) === "[object Error]")
      return !0;
    r = G0(r);
  }
  return !1;
}
var Y0 = q0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var J0 = Y0, X0 = J0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Q0(r) {
  return typeof r == "string";
}
var cs = Q0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K0 = String.prototype.valueOf, rg = K0;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eg = rg;
function tg(r) {
  try {
    return eg.call(r), !0;
  } catch {
    return !1;
  }
}
var ng = tg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ag = Je, ig = B, og = ng, sg = ag();
function ug(r) {
  return typeof r == "object" ? r instanceof String ? !0 : sg ? og(r) : ig(r) === "[object String]" : !1;
}
var vs = ug;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lg = cs, fg = vs;
function cg(r) {
  return lg(r) || fg(r);
}
var vg = cg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hs = yr, Tn = vg, hg = cs, dg = vs;
hs(Tn, "isPrimitive", hg);
hs(Tn, "isObject", dg);
var En = Tn;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mg() {
  return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
}
var ds = mg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yg = ds, pg = yg(), gg = pg;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var bg = yr, ms = ds, $g = gg;
bg(ms, "REGEXP", $g);
var wg = ms;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Sg(r) {
  return typeof r == "number";
}
var ys = Sg;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Tg(r) {
  return r[0] === "-";
}
function ka(r) {
  var e = "", n;
  for (n = 0; n < r; n++)
    e += "0";
  return e;
}
function Eg(r, e, n) {
  var t = !1, a = e - r.length;
  return a < 0 || (Tg(r) && (t = !0, r = r.substr(1)), r = n ? r + ka(a) : ka(a) + r, t && (r = "-" + r)), r;
}
var ps = Eg;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Og = ys, Da = ps, xg = String.prototype.toLowerCase, La = String.prototype.toUpperCase;
function Ig(r) {
  var e, n, t;
  switch (r.specifier) {
    case "b":
      e = 2;
      break;
    case "o":
      e = 8;
      break;
    case "x":
    case "X":
      e = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      e = 10;
      break;
  }
  if (n = r.arg, t = parseInt(n, 10), !isFinite(t)) {
    if (!Og(n))
      throw new Error("invalid integer. Value: " + n);
    t = 0;
  }
  return t < 0 && (r.specifier === "u" || e !== 10) && (t = 4294967295 + t + 1), t < 0 ? (n = (-t).toString(e), r.precision && (n = Da(n, r.precision, r.padRight)), n = "-" + n) : (n = t.toString(e), !t && !r.precision ? n = "" : r.precision && (n = Da(n, r.precision, r.padRight)), r.sign && (n = r.sign + n)), e === 16 && (r.alternate && (n = "0x" + n), n = r.specifier === La.call(r.specifier) ? La.call(n) : xg.call(n)), e === 8 && r.alternate && n.charAt(0) !== "0" && (n = "0" + n), n;
}
var _g = Ig;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ag(r) {
  return typeof r == "string";
}
var Cg = Ag;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ng = ys, Fg = Math.abs, Mg = String.prototype.toLowerCase, Pa = String.prototype.toUpperCase, $r = String.prototype.replace, kg = /e\+(\d)$/, Dg = /e-(\d)$/, Lg = /^(\d+)$/, Pg = /^(\d+)e/, Ug = /\.0$/, Rg = /\.0*e/, jg = /(\..*[^0])0*e/;
function Vg(r) {
  var e, n, t = parseFloat(r.arg);
  if (!isFinite(t)) {
    if (!Ng(r.arg))
      throw new Error("invalid floating-point number. Value: " + n);
    t = r.arg;
  }
  switch (r.specifier) {
    case "e":
    case "E":
      n = t.toExponential(r.precision);
      break;
    case "f":
    case "F":
      n = t.toFixed(r.precision);
      break;
    case "g":
    case "G":
      Fg(t) < 1e-4 ? (e = r.precision, e > 0 && (e -= 1), n = t.toExponential(e)) : n = t.toPrecision(r.precision), r.alternate || (n = $r.call(n, jg, "$1e"), n = $r.call(n, Rg, "e"), n = $r.call(n, Ug, ""));
      break;
    default:
      throw new Error("invalid double notation. Value: " + r.specifier);
  }
  return n = $r.call(n, kg, "e+0$1"), n = $r.call(n, Dg, "e-0$1"), r.alternate && (n = $r.call(n, Lg, "$1."), n = $r.call(n, Pg, "$1.e")), t >= 0 && r.sign && (n = r.sign + n), n = r.specifier === Pa.call(r.specifier) ? Pa.call(n) : Mg.call(n), n;
}
var Bg = Vg;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Ua(r) {
  var e = "", n;
  for (n = 0; n < r; n++)
    e += " ";
  return e;
}
function zg(r, e, n) {
  var t = e - r.length;
  return t < 0 || (r = n ? r + Ua(t) : Ua(t) + r), r;
}
var Zg = zg;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hg = _g, Gg = Cg, Wg = Bg, qg = Zg, Yg = ps, Jg = String.fromCharCode, Ee = isNaN, Xg = Array.isArray;
function Qg(r) {
  var e = {};
  return e.specifier = r.specifier, e.precision = r.precision === void 0 ? 1 : r.precision, e.width = r.width, e.flags = r.flags || "", e.mapping = r.mapping, e;
}
function Kg(r) {
  var e, n, t, a, i, l, o, c, h;
  if (!Xg(r))
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + r + "`.");
  for (l = "", o = 1, c = 0; c < r.length; c++)
    if (t = r[c], Gg(t))
      l += t;
    else {
      if (e = t.precision !== void 0, t = Qg(t), !t.specifier)
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + c + "`. Value: `" + t + "`.");
      for (t.mapping && (o = t.mapping), n = t.flags, h = 0; h < n.length; h++)
        switch (a = n.charAt(h), a) {
          case " ":
            t.sign = " ";
            break;
          case "+":
            t.sign = "+";
            break;
          case "-":
            t.padRight = !0, t.padZeros = !1;
            break;
          case "0":
            t.padZeros = n.indexOf("-") < 0;
            break;
          case "#":
            t.alternate = !0;
            break;
          default:
            throw new Error("invalid flag: " + a);
        }
      if (t.width === "*") {
        if (t.width = parseInt(arguments[o], 10), o += 1, Ee(t.width))
          throw new TypeError("the argument for * width at position " + o + " is not a number. Value: `" + t.width + "`.");
        t.width < 0 && (t.padRight = !0, t.width = -t.width);
      }
      if (e && t.precision === "*") {
        if (t.precision = parseInt(arguments[o], 10), o += 1, Ee(t.precision))
          throw new TypeError("the argument for * precision at position " + o + " is not a number. Value: `" + t.precision + "`.");
        t.precision < 0 && (t.precision = 1, e = !1);
      }
      switch (t.arg = arguments[o], t.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          e && (t.padZeros = !1), t.arg = Hg(t);
          break;
        case "s":
          t.maxWidth = e ? t.precision : -1;
          break;
        case "c":
          if (!Ee(t.arg)) {
            if (i = parseInt(t.arg, 10), i < 0 || i > 127)
              throw new Error("invalid character code. Value: " + t.arg);
            t.arg = Ee(i) ? String(t.arg) : Jg(i);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          e || (t.precision = 6), t.arg = Wg(t);
          break;
        default:
          throw new Error("invalid specifier: " + t.specifier);
      }
      t.maxWidth >= 0 && t.arg.length > t.maxWidth && (t.arg = t.arg.substring(0, t.maxWidth)), t.padZeros ? t.arg = Yg(t.arg, t.width || t.precision, t.padRight) : t.width && (t.arg = qg(t.arg, t.width, t.padRight)), l += t.arg || "", o += 1;
    }
  return l;
}
var r1 = Kg;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var e1 = r1, t1 = e1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Oe = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function n1(r) {
  var e = {
    mapping: r[1] ? parseInt(r[1], 10) : void 0,
    flags: r[2],
    width: r[3],
    precision: r[5],
    specifier: r[6]
  };
  return r[4] === "." && r[5] === void 0 && (e.precision = "1"), e;
}
function a1(r) {
  var e, n, t, a;
  for (n = [], a = 0, t = Oe.exec(r); t; )
    e = r.slice(a, Oe.lastIndex - t[0].length), e.length && n.push(e), n.push(n1(t)), a = Oe.lastIndex, t = Oe.exec(r);
  return e = r.slice(a), e.length && n.push(e), n;
}
var i1 = a1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o1 = i1, s1 = o1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function u1(r) {
  return typeof r == "string";
}
var l1 = u1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f1 = t1, c1 = s1, v1 = l1;
function gs(r) {
  var e, n, t;
  if (!v1(r))
    throw new TypeError(gs("invalid argument. First argument must be a string. Value: `%s`.", r));
  for (e = c1(r), n = new Array(arguments.length), n[0] = e, t = 1; t < n.length; t++)
    n[t] = arguments[t];
  return f1.apply(null, n);
}
var h1 = gs;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d1 = h1, m1 = d1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y1 = En.isPrimitive, p1 = wg, g1 = m1;
function b1(r) {
  if (!y1(r))
    throw new TypeError(g1("invalid argument. Must provide a regular expression string. Value: `%s`.", r));
  return r = p1().exec(r), r ? new RegExp(r[1], r[2]) : null;
}
var $1 = b1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var w1 = $1, S1 = w1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function T1(r) {
  return r !== r;
}
var E1 = T1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O1 = E1, bs = O1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x1 = Qe.isPrimitive, I1 = bs;
function _1(r) {
  return x1(r) && I1(r);
}
var $s = _1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var A1 = Qe.isObject, C1 = bs;
function N1(r) {
  return A1(r) && C1(r.valueOf());
}
var ws = N1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F1 = $s, M1 = ws;
function k1(r) {
  return F1(r) || M1(r);
}
var D1 = k1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ss = yr, On = D1, L1 = $s, P1 = ws;
Ss(On, "isPrimitive", L1);
Ss(On, "isObject", P1);
var Ts = On;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U1 = 9007199254740991, R1 = U1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j1 = pn, V1 = R1;
function B1(r) {
  return typeof r == "object" && r !== null && typeof r.length == "number" && j1(r.length) && r.length >= 0 && r.length <= V1;
}
var z1 = B1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Z1 = z1, H1 = Z1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ra = Ts, G1 = H1, W1 = En.isPrimitive, q1 = Ke.isPrimitive;
function Y1(r, e, n) {
  var t, a;
  if (!G1(r) && !W1(r))
    throw new TypeError("invalid argument. First argument must be an array-like object. Value: `" + r + "`.");
  if (t = r.length, t === 0)
    return -1;
  if (arguments.length === 3) {
    if (!q1(n))
      throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `" + n + "`.");
    if (n >= 0) {
      if (n >= t)
        return -1;
      a = n;
    } else
      a = t + n, a < 0 && (a = 0);
  } else
    a = 0;
  if (Ra(e)) {
    for (; a < t; a++)
      if (Ra(r[a]))
        return a;
  } else
    for (; a < t; a++)
      if (r[a] === e)
        return a;
  return -1;
}
var J1 = Y1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var X1 = J1, Es = X1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Q1(r) {
  return Object.keys(Object(r));
}
var xn = Q1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K1 = xn;
function rb() {
  return (K1(arguments) || "").length !== 2;
}
function eb() {
  return rb(1, 2);
}
var tb = eb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nb = typeof Object.keys < "u", ab = nb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ib = B;
function ob(r) {
  return ib(r) === "[object Arguments]";
}
var Os = ob;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sb = Os, xs;
function ub() {
  return sb(arguments);
}
xs = ub();
var lb = xs;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fb = Object.prototype.propertyIsEnumerable, Is = fb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cb = Is, _s;
function vb() {
  return !cb.call("beep", "0");
}
_s = vb();
var hb = _s;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var db = En, mb = Ts.isPrimitive, yb = Ke.isPrimitive, pb = Is, gb = hb;
function bb(r, e) {
  var n;
  return r == null ? !1 : (n = pb.call(r, e), !n && gb && db(r) ? (e = +e, !mb(e) && yb(e) && e >= 0 && e < r.length) : n);
}
var $b = bb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wb = $b, In = wb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sb = 4294967295, As = Sb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Tb = Wr, Eb = In, Ob = Xe, xb = pn, Ib = As;
function _b(r) {
  return r !== null && typeof r == "object" && !Ob(r) && typeof r.length == "number" && xb(r.length) && r.length >= 0 && r.length <= Ib && Tb(r, "callee") && !Eb(r, "callee");
}
var Ab = _b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cb = lb, Nb = Os, Fb = Ab, kt;
Cb ? kt = Nb : kt = Fb;
var Cs = kt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mb = Cs, ja = xn, kb = Array.prototype.slice;
function Db(r) {
  return Mb(r) ? ja(kb.call(r)) : ja(r);
}
var Lb = Db;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Pb() {
}
var Ub = Pb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Rb = Ub, jb = Rb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Vb = In, Bb = jb, zb = Vb(Bb, "prototype"), Zb = zb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Hb = In, Gb = {
  toString: null
}, Wb = !Hb(Gb, "toString"), qb = Wb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Yb(r) {
  return r.constructor && r.constructor.prototype === r;
}
var Ns = Yb;
const Jb = [
  "console",
  "external",
  "frame",
  "frameElement",
  "frames",
  "innerHeight",
  "innerWidth",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "scrollLeft",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  "webkitIndexedDB",
  "webkitStorageInfo",
  "window"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xb = typeof window > "u" ? void 0 : window, Qb = Xb;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Kb = Wr, r$ = Es, Va = Sn, e$ = Ns, t$ = Jb, Nr = Qb, Fs;
function n$() {
  var r;
  if (Va(Nr) === "undefined")
    return !1;
  for (r in Nr)
    try {
      r$(t$, r) === -1 && Kb(Nr, r) && Nr[r] !== null && Va(Nr[r]) === "object" && e$(Nr[r]);
    } catch {
      return !0;
    }
  return !1;
}
Fs = n$();
var a$ = Fs;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var i$ = typeof window < "u", o$ = i$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s$ = a$, Ba = Ns, u$ = o$;
function l$(r) {
  if (u$ === !1 && !s$)
    return Ba(r);
  try {
    return Ba(r);
  } catch {
    return !1;
  }
}
var f$ = l$;
const c$ = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v$ = ts, mt = Wr, h$ = Cs, d$ = Zb, m$ = qb, y$ = f$, za = c$;
function p$(r) {
  var e, n, t, a, i, l, o;
  if (a = [], h$(r)) {
    for (o = 0; o < r.length; o++)
      a.push(o.toString());
    return a;
  }
  if (typeof r == "string") {
    if (r.length > 0 && !mt(r, "0"))
      for (o = 0; o < r.length; o++)
        a.push(o.toString());
  } else {
    if (t = typeof r == "function", t === !1 && !v$(r))
      return a;
    n = d$ && t;
  }
  for (i in r)
    !(n && i === "prototype") && mt(r, i) && a.push(String(i));
  if (m$)
    for (e = y$(r), o = 0; o < za.length; o++)
      l = za[o], !(e && l === "constructor") && mt(r, l) && a.push(String(l));
  return a;
}
var g$ = p$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b$ = tb, $$ = ab, w$ = xn, S$ = Lb, T$ = g$, Ne;
$$ ? b$() ? Ne = S$ : Ne = w$ : Ne = T$;
var E$ = Ne;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O$ = E$, Ms = O$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x$ = typeof Object.getOwnPropertyNames < "u", I$ = x$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _$ = Object.getOwnPropertyNames;
function A$(r) {
  return _$(Object(r));
}
var C$ = A$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N$ = Ms;
function F$(r) {
  return N$(Object(r));
}
var M$ = F$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var k$ = I$, D$ = C$, L$ = M$, Dt;
k$ ? Dt = D$ : Dt = L$;
var P$ = Dt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U$ = typeof Object.getOwnPropertyDescriptor < "u", R$ = U$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j$ = Object.getOwnPropertyDescriptor;
function V$(r, e) {
  var n;
  return r == null ? null : (n = j$(r, e), n === void 0 ? null : n);
}
var B$ = V$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var z$ = Wr;
function Z$(r, e) {
  return z$(r, e) ? {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r[e]
  } : null;
}
var H$ = Z$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var G$ = R$, W$ = B$, q$ = H$, Lt;
G$ ? Lt = W$ : Lt = q$;
var Y$ = Lt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var J$ = typeof Buffer == "function" ? Buffer : null, X$ = J$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Q$ = de, xe = X$;
function K$() {
  var r, e;
  if (typeof xe != "function")
    return !1;
  try {
    typeof xe.from == "function" ? e = xe.from([1, 2, 3, 4]) : e = new xe([1, 2, 3, 4]), r = Q$(e) && e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4;
  } catch {
    r = !1;
  }
  return r;
}
var rw = K$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ew = rw, tw = ew, ks = {}, rt = {};
rt.byteLength = iw;
rt.toByteArray = sw;
rt.fromByteArray = fw;
var fr = [], Q = [], nw = typeof Uint8Array < "u" ? Uint8Array : Array, yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Fr = 0, aw = yt.length; Fr < aw; ++Fr)
  fr[Fr] = yt[Fr], Q[yt.charCodeAt(Fr)] = Fr;
Q["-".charCodeAt(0)] = 62;
Q["_".charCodeAt(0)] = 63;
function Ds(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = e);
  var t = n === e ? 0 : 4 - n % 4;
  return [n, t];
}
function iw(r) {
  var e = Ds(r), n = e[0], t = e[1];
  return (n + t) * 3 / 4 - t;
}
function ow(r, e, n) {
  return (e + n) * 3 / 4 - n;
}
function sw(r) {
  var e, n = Ds(r), t = n[0], a = n[1], i = new nw(ow(r, t, a)), l = 0, o = a > 0 ? t - 4 : t, c;
  for (c = 0; c < o; c += 4)
    e = Q[r.charCodeAt(c)] << 18 | Q[r.charCodeAt(c + 1)] << 12 | Q[r.charCodeAt(c + 2)] << 6 | Q[r.charCodeAt(c + 3)], i[l++] = e >> 16 & 255, i[l++] = e >> 8 & 255, i[l++] = e & 255;
  return a === 2 && (e = Q[r.charCodeAt(c)] << 2 | Q[r.charCodeAt(c + 1)] >> 4, i[l++] = e & 255), a === 1 && (e = Q[r.charCodeAt(c)] << 10 | Q[r.charCodeAt(c + 1)] << 4 | Q[r.charCodeAt(c + 2)] >> 2, i[l++] = e >> 8 & 255, i[l++] = e & 255), i;
}
function uw(r) {
  return fr[r >> 18 & 63] + fr[r >> 12 & 63] + fr[r >> 6 & 63] + fr[r & 63];
}
function lw(r, e, n) {
  for (var t, a = [], i = e; i < n; i += 3)
    t = (r[i] << 16 & 16711680) + (r[i + 1] << 8 & 65280) + (r[i + 2] & 255), a.push(uw(t));
  return a.join("");
}
function fw(r) {
  for (var e, n = r.length, t = n % 3, a = [], i = 16383, l = 0, o = n - t; l < o; l += i)
    a.push(lw(r, l, l + i > o ? o : l + i));
  return t === 1 ? (e = r[n - 1], a.push(
    fr[e >> 2] + fr[e << 4 & 63] + "=="
  )) : t === 2 && (e = (r[n - 2] << 8) + r[n - 1], a.push(
    fr[e >> 10] + fr[e >> 4 & 63] + fr[e << 2 & 63] + "="
  )), a.join("");
}
var _n = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
_n.read = function(r, e, n, t, a) {
  var i, l, o = a * 8 - t - 1, c = (1 << o) - 1, h = c >> 1, y = -7, m = n ? a - 1 : 0, p = n ? -1 : 1, $ = r[e + m];
  for (m += p, i = $ & (1 << -y) - 1, $ >>= -y, y += o; y > 0; i = i * 256 + r[e + m], m += p, y -= 8)
    ;
  for (l = i & (1 << -y) - 1, i >>= -y, y += t; y > 0; l = l * 256 + r[e + m], m += p, y -= 8)
    ;
  if (i === 0)
    i = 1 - h;
  else {
    if (i === c)
      return l ? NaN : ($ ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, t), i = i - h;
  }
  return ($ ? -1 : 1) * l * Math.pow(2, i - t);
};
_n.write = function(r, e, n, t, a, i) {
  var l, o, c, h = i * 8 - a - 1, y = (1 << h) - 1, m = y >> 1, p = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, $ = t ? 0 : i - 1, S = t ? 1 : -1, E = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, l = y) : (l = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -l)) < 1 && (l--, c *= 2), l + m >= 1 ? e += p / c : e += p * Math.pow(2, 1 - m), e * c >= 2 && (l++, c /= 2), l + m >= y ? (o = 0, l = y) : l + m >= 1 ? (o = (e * c - 1) * Math.pow(2, a), l = l + m) : (o = e * Math.pow(2, m - 1) * Math.pow(2, a), l = 0)); a >= 8; r[n + $] = o & 255, $ += S, o /= 256, a -= 8)
    ;
  for (l = l << a | o, h += a; h > 0; r[n + $] = l & 255, $ += S, l /= 256, h -= 8)
    ;
  r[n + $ - S] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  var e = rt, n = _n, t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = o, r.SlowBuffer = L, r.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  r.kMaxLength = a, o.TYPED_ARRAY_SUPPORT = i(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      var f = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(f, s), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function l(f) {
    if (f > a)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    var s = new Uint8Array(f);
    return Object.setPrototypeOf(s, o.prototype), s;
  }
  function o(f, s, u) {
    if (typeof f == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return m(f);
    }
    return c(f, s, u);
  }
  o.poolSize = 8192;
  function c(f, s, u) {
    if (typeof f == "string")
      return p(f, s);
    if (ArrayBuffer.isView(f))
      return S(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (ur(f, ArrayBuffer) || f && ur(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ur(f, SharedArrayBuffer) || f && ur(f.buffer, SharedArrayBuffer)))
      return E(f, s, u);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var v = f.valueOf && f.valueOf();
    if (v != null && v !== f)
      return o.from(v, s, u);
    var d = O(f);
    if (d)
      return d;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return o.from(
        f[Symbol.toPrimitive]("string"),
        s,
        u
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
    );
  }
  o.from = function(f, s, u) {
    return c(f, s, u);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function h(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function y(f, s, u) {
    return h(f), f <= 0 ? l(f) : s !== void 0 ? typeof u == "string" ? l(f).fill(s, u) : l(f).fill(s) : l(f);
  }
  o.alloc = function(f, s, u) {
    return y(f, s, u);
  };
  function m(f) {
    return h(f), l(f < 0 ? 0 : T(f) | 0);
  }
  o.allocUnsafe = function(f) {
    return m(f);
  }, o.allocUnsafeSlow = function(f) {
    return m(f);
  };
  function p(f, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !o.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    var u = pr(f, s) | 0, v = l(u), d = v.write(f, s);
    return d !== u && (v = v.slice(0, d)), v;
  }
  function $(f) {
    for (var s = f.length < 0 ? 0 : T(f.length) | 0, u = l(s), v = 0; v < s; v += 1)
      u[v] = f[v] & 255;
    return u;
  }
  function S(f) {
    if (ur(f, Uint8Array)) {
      var s = new Uint8Array(f);
      return E(s.buffer, s.byteOffset, s.byteLength);
    }
    return $(f);
  }
  function E(f, s, u) {
    if (s < 0 || f.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < s + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var v;
    return s === void 0 && u === void 0 ? v = new Uint8Array(f) : u === void 0 ? v = new Uint8Array(f, s) : v = new Uint8Array(f, s, u), Object.setPrototypeOf(v, o.prototype), v;
  }
  function O(f) {
    if (o.isBuffer(f)) {
      var s = T(f.length) | 0, u = l(s);
      return u.length === 0 || f.copy(u, 0, 0, s), u;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || lt(f.length) ? l(0) : $(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return $(f.data);
  }
  function T(f) {
    if (f >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return f | 0;
  }
  function L(f) {
    return +f != f && (f = 0), o.alloc(+f);
  }
  o.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== o.prototype;
  }, o.compare = function(s, u) {
    if (ur(s, Uint8Array) && (s = o.from(s, s.offset, s.byteLength)), ur(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), !o.isBuffer(s) || !o.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === u)
      return 0;
    for (var v = s.length, d = u.length, g = 0, b = Math.min(v, d); g < b; ++g)
      if (s[g] !== u[g]) {
        v = s[g], d = u[g];
        break;
      }
    return v < d ? -1 : d < v ? 1 : 0;
  }, o.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(s, u) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return o.alloc(0);
    var v;
    if (u === void 0)
      for (u = 0, v = 0; v < s.length; ++v)
        u += s[v].length;
    var d = o.allocUnsafe(u), g = 0;
    for (v = 0; v < s.length; ++v) {
      var b = s[v];
      if (ur(b, Uint8Array))
        g + b.length > d.length ? o.from(b).copy(d, g) : Uint8Array.prototype.set.call(
          d,
          b,
          g
        );
      else if (o.isBuffer(b))
        b.copy(d, g);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      g += b.length;
    }
    return d;
  };
  function pr(f, s) {
    if (o.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || ur(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    var u = f.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && u === 0)
      return 0;
    for (var d = !1; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return ut(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return la(f).length;
        default:
          if (d)
            return v ? -1 : ut(f).length;
          s = ("" + s).toLowerCase(), d = !0;
      }
  }
  o.byteLength = pr;
  function dr(f, s, u) {
    var v = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, s >>>= 0, u <= s))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return Bu(this, s, u);
        case "utf8":
        case "utf-8":
          return aa(this, s, u);
        case "ascii":
          return ju(this, s, u);
        case "latin1":
        case "binary":
          return Vu(this, s, u);
        case "base64":
          return Kr(this, s, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return zu(this, s, u);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), v = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function z(f, s, u) {
    var v = f[s];
    f[s] = f[u], f[u] = v;
  }
  o.prototype.swap16 = function() {
    var s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < s; u += 2)
      z(this, u, u + 1);
    return this;
  }, o.prototype.swap32 = function() {
    var s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < s; u += 4)
      z(this, u, u + 3), z(this, u + 1, u + 2);
    return this;
  }, o.prototype.swap64 = function() {
    var s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < s; u += 8)
      z(this, u, u + 7), z(this, u + 1, u + 6), z(this, u + 2, u + 5), z(this, u + 3, u + 4);
    return this;
  }, o.prototype.toString = function() {
    var s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? aa(this, 0, s) : dr.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(s) {
    if (!o.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : o.compare(this, s) === 0;
  }, o.prototype.inspect = function() {
    var s = "", u = r.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (s += " ... "), "<Buffer " + s + ">";
  }, t && (o.prototype[t] = o.prototype.inspect), o.prototype.compare = function(s, u, v, d, g) {
    if (ur(s, Uint8Array) && (s = o.from(s, s.offset, s.byteLength)), !o.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (u === void 0 && (u = 0), v === void 0 && (v = s ? s.length : 0), d === void 0 && (d = 0), g === void 0 && (g = this.length), u < 0 || v > s.length || d < 0 || g > this.length)
      throw new RangeError("out of range index");
    if (d >= g && u >= v)
      return 0;
    if (d >= g)
      return -1;
    if (u >= v)
      return 1;
    if (u >>>= 0, v >>>= 0, d >>>= 0, g >>>= 0, this === s)
      return 0;
    for (var b = g - d, x = v - u, N = Math.min(b, x), M = this.slice(d, g), Z = s.slice(u, v), D = 0; D < N; ++D)
      if (M[D] !== Z[D]) {
        b = M[D], x = Z[D];
        break;
      }
    return b < x ? -1 : x < b ? 1 : 0;
  };
  function pe(f, s, u, v, d) {
    if (f.length === 0)
      return -1;
    if (typeof u == "string" ? (v = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, lt(u) && (u = d ? 0 : f.length - 1), u < 0 && (u = f.length + u), u >= f.length) {
      if (d)
        return -1;
      u = f.length - 1;
    } else if (u < 0)
      if (d)
        u = 0;
      else
        return -1;
    if (typeof s == "string" && (s = o.from(s, v)), o.isBuffer(s))
      return s.length === 0 ? -1 : ge(f, s, u, v, d);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? d ? Uint8Array.prototype.indexOf.call(f, s, u) : Uint8Array.prototype.lastIndexOf.call(f, s, u) : ge(f, [s], u, v, d);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ge(f, s, u, v, d) {
    var g = 1, b = f.length, x = s.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (f.length < 2 || s.length < 2)
        return -1;
      g = 2, b /= 2, x /= 2, u /= 2;
    }
    function N(fa, ca) {
      return g === 1 ? fa[ca] : fa.readUInt16BE(ca * g);
    }
    var M;
    if (d) {
      var Z = -1;
      for (M = u; M < b; M++)
        if (N(f, M) === N(s, Z === -1 ? 0 : M - Z)) {
          if (Z === -1 && (Z = M), M - Z + 1 === x)
            return Z * g;
        } else
          Z !== -1 && (M -= M - Z), Z = -1;
    } else
      for (u + x > b && (u = b - x), M = u; M >= 0; M--) {
        for (var D = !0, Se = 0; Se < x; Se++)
          if (N(f, M + Se) !== N(s, Se)) {
            D = !1;
            break;
          }
        if (D)
          return M;
      }
    return -1;
  }
  o.prototype.includes = function(s, u, v) {
    return this.indexOf(s, u, v) !== -1;
  }, o.prototype.indexOf = function(s, u, v) {
    return pe(this, s, u, v, !0);
  }, o.prototype.lastIndexOf = function(s, u, v) {
    return pe(this, s, u, v, !1);
  };
  function be(f, s, u, v) {
    u = Number(u) || 0;
    var d = f.length - u;
    v ? (v = Number(v), v > d && (v = d)) : v = d;
    var g = s.length;
    v > g / 2 && (v = g / 2);
    for (var b = 0; b < v; ++b) {
      var x = parseInt(s.substr(b * 2, 2), 16);
      if (lt(x))
        return b;
      f[u + b] = x;
    }
    return b;
  }
  function it(f, s, u, v) {
    return we(ut(s, f.length - u), f, u, v);
  }
  function $e(f, s, u, v) {
    return we(Gu(s), f, u, v);
  }
  function ot(f, s, u, v) {
    return we(la(s), f, u, v);
  }
  function st(f, s, u, v) {
    return we(Wu(s, f.length - u), f, u, v);
  }
  o.prototype.write = function(s, u, v, d) {
    if (u === void 0)
      d = "utf8", v = this.length, u = 0;
    else if (v === void 0 && typeof u == "string")
      d = u, v = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(v) ? (v = v >>> 0, d === void 0 && (d = "utf8")) : (d = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var g = this.length - u;
    if ((v === void 0 || v > g) && (v = g), s.length > 0 && (v < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    for (var b = !1; ; )
      switch (d) {
        case "hex":
          return be(this, s, u, v);
        case "utf8":
        case "utf-8":
          return it(this, s, u, v);
        case "ascii":
        case "latin1":
        case "binary":
          return $e(this, s, u, v);
        case "base64":
          return ot(this, s, u, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return st(this, s, u, v);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + d);
          d = ("" + d).toLowerCase(), b = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Kr(f, s, u) {
    return s === 0 && u === f.length ? e.fromByteArray(f) : e.fromByteArray(f.slice(s, u));
  }
  function aa(f, s, u) {
    u = Math.min(f.length, u);
    for (var v = [], d = s; d < u; ) {
      var g = f[d], b = null, x = g > 239 ? 4 : g > 223 ? 3 : g > 191 ? 2 : 1;
      if (d + x <= u) {
        var N, M, Z, D;
        switch (x) {
          case 1:
            g < 128 && (b = g);
            break;
          case 2:
            N = f[d + 1], (N & 192) === 128 && (D = (g & 31) << 6 | N & 63, D > 127 && (b = D));
            break;
          case 3:
            N = f[d + 1], M = f[d + 2], (N & 192) === 128 && (M & 192) === 128 && (D = (g & 15) << 12 | (N & 63) << 6 | M & 63, D > 2047 && (D < 55296 || D > 57343) && (b = D));
            break;
          case 4:
            N = f[d + 1], M = f[d + 2], Z = f[d + 3], (N & 192) === 128 && (M & 192) === 128 && (Z & 192) === 128 && (D = (g & 15) << 18 | (N & 63) << 12 | (M & 63) << 6 | Z & 63, D > 65535 && D < 1114112 && (b = D));
        }
      }
      b === null ? (b = 65533, x = 1) : b > 65535 && (b -= 65536, v.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), v.push(b), d += x;
    }
    return Ru(v);
  }
  var ia = 4096;
  function Ru(f) {
    var s = f.length;
    if (s <= ia)
      return String.fromCharCode.apply(String, f);
    for (var u = "", v = 0; v < s; )
      u += String.fromCharCode.apply(
        String,
        f.slice(v, v += ia)
      );
    return u;
  }
  function ju(f, s, u) {
    var v = "";
    u = Math.min(f.length, u);
    for (var d = s; d < u; ++d)
      v += String.fromCharCode(f[d] & 127);
    return v;
  }
  function Vu(f, s, u) {
    var v = "";
    u = Math.min(f.length, u);
    for (var d = s; d < u; ++d)
      v += String.fromCharCode(f[d]);
    return v;
  }
  function Bu(f, s, u) {
    var v = f.length;
    (!s || s < 0) && (s = 0), (!u || u < 0 || u > v) && (u = v);
    for (var d = "", g = s; g < u; ++g)
      d += qu[f[g]];
    return d;
  }
  function zu(f, s, u) {
    for (var v = f.slice(s, u), d = "", g = 0; g < v.length - 1; g += 2)
      d += String.fromCharCode(v[g] + v[g + 1] * 256);
    return d;
  }
  o.prototype.slice = function(s, u) {
    var v = this.length;
    s = ~~s, u = u === void 0 ? v : ~~u, s < 0 ? (s += v, s < 0 && (s = 0)) : s > v && (s = v), u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), u < s && (u = s);
    var d = this.subarray(s, u);
    return Object.setPrototypeOf(d, o.prototype), d;
  };
  function R(f, s, u) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + s > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(s, u, v) {
    s = s >>> 0, u = u >>> 0, v || R(s, u, this.length);
    for (var d = this[s], g = 1, b = 0; ++b < u && (g *= 256); )
      d += this[s + b] * g;
    return d;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(s, u, v) {
    s = s >>> 0, u = u >>> 0, v || R(s, u, this.length);
    for (var d = this[s + --u], g = 1; u > 0 && (g *= 256); )
      d += this[s + --u] * g;
    return d;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(s, u) {
    return s = s >>> 0, u || R(s, 1, this.length), this[s];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(s, u) {
    return s = s >>> 0, u || R(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(s, u) {
    return s = s >>> 0, u || R(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, o.prototype.readIntLE = function(s, u, v) {
    s = s >>> 0, u = u >>> 0, v || R(s, u, this.length);
    for (var d = this[s], g = 1, b = 0; ++b < u && (g *= 256); )
      d += this[s + b] * g;
    return g *= 128, d >= g && (d -= Math.pow(2, 8 * u)), d;
  }, o.prototype.readIntBE = function(s, u, v) {
    s = s >>> 0, u = u >>> 0, v || R(s, u, this.length);
    for (var d = u, g = 1, b = this[s + --d]; d > 0 && (g *= 256); )
      b += this[s + --d] * g;
    return g *= 128, b >= g && (b -= Math.pow(2, 8 * u)), b;
  }, o.prototype.readInt8 = function(s, u) {
    return s = s >>> 0, u || R(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, o.prototype.readInt16LE = function(s, u) {
    s = s >>> 0, u || R(s, 2, this.length);
    var v = this[s] | this[s + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, o.prototype.readInt16BE = function(s, u) {
    s = s >>> 0, u || R(s, 2, this.length);
    var v = this[s + 1] | this[s] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, o.prototype.readInt32LE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, o.prototype.readInt32BE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, o.prototype.readFloatLE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), n.read(this, s, !0, 23, 4);
  }, o.prototype.readFloatBE = function(s, u) {
    return s = s >>> 0, u || R(s, 4, this.length), n.read(this, s, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(s, u) {
    return s = s >>> 0, u || R(s, 8, this.length), n.read(this, s, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(s, u) {
    return s = s >>> 0, u || R(s, 8, this.length), n.read(this, s, !1, 52, 8);
  };
  function W(f, s, u, v, d, g) {
    if (!o.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > d || s < g)
      throw new RangeError('"value" argument is out of bounds');
    if (u + v > f.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(s, u, v, d) {
    if (s = +s, u = u >>> 0, v = v >>> 0, !d) {
      var g = Math.pow(2, 8 * v) - 1;
      W(this, s, u, v, g, 0);
    }
    var b = 1, x = 0;
    for (this[u] = s & 255; ++x < v && (b *= 256); )
      this[u + x] = s / b & 255;
    return u + v;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(s, u, v, d) {
    if (s = +s, u = u >>> 0, v = v >>> 0, !d) {
      var g = Math.pow(2, 8 * v) - 1;
      W(this, s, u, v, g, 0);
    }
    var b = v - 1, x = 1;
    for (this[u + b] = s & 255; --b >= 0 && (x *= 256); )
      this[u + b] = s / x & 255;
    return u + v;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 1, 255, 0), this[u] = s & 255, u + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 2, 65535, 0), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 2, 65535, 0), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 4, 4294967295, 0), this[u + 3] = s >>> 24, this[u + 2] = s >>> 16, this[u + 1] = s >>> 8, this[u] = s & 255, u + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 4, 4294967295, 0), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  }, o.prototype.writeIntLE = function(s, u, v, d) {
    if (s = +s, u = u >>> 0, !d) {
      var g = Math.pow(2, 8 * v - 1);
      W(this, s, u, v, g - 1, -g);
    }
    var b = 0, x = 1, N = 0;
    for (this[u] = s & 255; ++b < v && (x *= 256); )
      s < 0 && N === 0 && this[u + b - 1] !== 0 && (N = 1), this[u + b] = (s / x >> 0) - N & 255;
    return u + v;
  }, o.prototype.writeIntBE = function(s, u, v, d) {
    if (s = +s, u = u >>> 0, !d) {
      var g = Math.pow(2, 8 * v - 1);
      W(this, s, u, v, g - 1, -g);
    }
    var b = v - 1, x = 1, N = 0;
    for (this[u + b] = s & 255; --b >= 0 && (x *= 256); )
      s < 0 && N === 0 && this[u + b + 1] !== 0 && (N = 1), this[u + b] = (s / x >> 0) - N & 255;
    return u + v;
  }, o.prototype.writeInt8 = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[u] = s & 255, u + 1;
  }, o.prototype.writeInt16LE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 2, 32767, -32768), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, o.prototype.writeInt16BE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 2, 32767, -32768), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, o.prototype.writeInt32LE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 4, 2147483647, -2147483648), this[u] = s & 255, this[u + 1] = s >>> 8, this[u + 2] = s >>> 16, this[u + 3] = s >>> 24, u + 4;
  }, o.prototype.writeInt32BE = function(s, u, v) {
    return s = +s, u = u >>> 0, v || W(this, s, u, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  };
  function oa(f, s, u, v, d, g) {
    if (u + v > f.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function sa(f, s, u, v, d) {
    return s = +s, u = u >>> 0, d || oa(f, s, u, 4), n.write(f, s, u, v, 23, 4), u + 4;
  }
  o.prototype.writeFloatLE = function(s, u, v) {
    return sa(this, s, u, !0, v);
  }, o.prototype.writeFloatBE = function(s, u, v) {
    return sa(this, s, u, !1, v);
  };
  function ua(f, s, u, v, d) {
    return s = +s, u = u >>> 0, d || oa(f, s, u, 8), n.write(f, s, u, v, 52, 8), u + 8;
  }
  o.prototype.writeDoubleLE = function(s, u, v) {
    return ua(this, s, u, !0, v);
  }, o.prototype.writeDoubleBE = function(s, u, v) {
    return ua(this, s, u, !1, v);
  }, o.prototype.copy = function(s, u, v, d) {
    if (!o.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !d && d !== 0 && (d = this.length), u >= s.length && (u = s.length), u || (u = 0), d > 0 && d < v && (d = v), d === v || s.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length)
      throw new RangeError("Index out of range");
    if (d < 0)
      throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length), s.length - u < d - v && (d = s.length - u + v);
    var g = d - v;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, v, d) : Uint8Array.prototype.set.call(
      s,
      this.subarray(v, d),
      u
    ), g;
  }, o.prototype.fill = function(s, u, v, d) {
    if (typeof s == "string") {
      if (typeof u == "string" ? (d = u, u = 0, v = this.length) : typeof v == "string" && (d = v, v = this.length), d !== void 0 && typeof d != "string")
        throw new TypeError("encoding must be a string");
      if (typeof d == "string" && !o.isEncoding(d))
        throw new TypeError("Unknown encoding: " + d);
      if (s.length === 1) {
        var g = s.charCodeAt(0);
        (d === "utf8" && g < 128 || d === "latin1") && (s = g);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (u < 0 || this.length < u || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= u)
      return this;
    u = u >>> 0, v = v === void 0 ? this.length : v >>> 0, s || (s = 0);
    var b;
    if (typeof s == "number")
      for (b = u; b < v; ++b)
        this[b] = s;
    else {
      var x = o.isBuffer(s) ? s : o.from(s, d), N = x.length;
      if (N === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (b = 0; b < v - u; ++b)
        this[b + u] = x[b % N];
    }
    return this;
  };
  var Zu = /[^+/0-9A-Za-z-_]/g;
  function Hu(f) {
    if (f = f.split("=")[0], f = f.trim().replace(Zu, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function ut(f, s) {
    s = s || 1 / 0;
    for (var u, v = f.length, d = null, g = [], b = 0; b < v; ++b) {
      if (u = f.charCodeAt(b), u > 55295 && u < 57344) {
        if (!d) {
          if (u > 56319) {
            (s -= 3) > -1 && g.push(239, 191, 189);
            continue;
          } else if (b + 1 === v) {
            (s -= 3) > -1 && g.push(239, 191, 189);
            continue;
          }
          d = u;
          continue;
        }
        if (u < 56320) {
          (s -= 3) > -1 && g.push(239, 191, 189), d = u;
          continue;
        }
        u = (d - 55296 << 10 | u - 56320) + 65536;
      } else
        d && (s -= 3) > -1 && g.push(239, 191, 189);
      if (d = null, u < 128) {
        if ((s -= 1) < 0)
          break;
        g.push(u);
      } else if (u < 2048) {
        if ((s -= 2) < 0)
          break;
        g.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((s -= 3) < 0)
          break;
        g.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((s -= 4) < 0)
          break;
        g.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return g;
  }
  function Gu(f) {
    for (var s = [], u = 0; u < f.length; ++u)
      s.push(f.charCodeAt(u) & 255);
    return s;
  }
  function Wu(f, s) {
    for (var u, v, d, g = [], b = 0; b < f.length && !((s -= 2) < 0); ++b)
      u = f.charCodeAt(b), v = u >> 8, d = u % 256, g.push(d), g.push(v);
    return g;
  }
  function la(f) {
    return e.toByteArray(Hu(f));
  }
  function we(f, s, u, v) {
    for (var d = 0; d < v && !(d + u >= s.length || d >= f.length); ++d)
      s[d + u] = f[d];
    return d;
  }
  function ur(f, s) {
    return f instanceof s || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === s.name;
  }
  function lt(f) {
    return f !== f;
  }
  var qu = function() {
    for (var f = "0123456789abcdef", s = new Array(256), u = 0; u < 16; ++u)
      for (var v = u * 16, d = 0; d < 16; ++d)
        s[v + d] = f[u] + f[d];
    return s;
  }();
})(ks);
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cw = ks.Buffer, vw = cw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function hw() {
  throw new Error("not implemented");
}
var dw = hw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mw = tw, yw = vw, pw = dw, Pt;
mw() ? Pt = yw : Pt = pw;
var An = Pt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gw = ls, bw = An, $w = gw(bw.from), ww = $w;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sw = de, Tw = An;
function Ew(r) {
  if (!Sw(r))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + r + "`");
  return Tw.from(r);
}
var Ow = Ew;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xw = de, Iw = An;
function _w(r) {
  if (!xw(r))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + r + "`");
  return new Iw(r);
}
var Aw = _w;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Cw = ww, Nw = Ow, Fw = Aw, Ut;
Cw ? Ut = Nw : Ut = Fw;
var Mw = Ut;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kw = B, Dw = typeof Int8Array == "function";
function Lw(r) {
  return Dw && r instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  kw(r) === "[object Int8Array]";
}
var Pw = Lw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Uw = Pw, Rw = Uw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jw = 127, Vw = jw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bw = -128, zw = Bw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Zw = typeof Int8Array == "function" ? Int8Array : null, Hw = Zw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gw = Rw, Ww = Vw, qw = zw, Za = Hw;
function Yw() {
  var r, e;
  if (typeof Za != "function")
    return !1;
  try {
    e = new Za([1, 3.14, -3.14, Ww + 1]), r = Gw(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === qw;
  } catch {
    r = !1;
  }
  return r;
}
var Jw = Yw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xw = Jw, Qw = Xw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Kw = typeof Int8Array == "function" ? Int8Array : void 0, rS = Kw;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function eS() {
  throw new Error("not implemented");
}
var tS = eS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nS = Qw, aS = rS, iS = tS, Rt;
nS() ? Rt = aS : Rt = iS;
var oS = Rt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sS = B, uS = typeof Uint8Array == "function";
function lS(r) {
  return uS && r instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  sS(r) === "[object Uint8Array]";
}
var fS = lS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cS = fS, vS = cS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hS = 255, dS = hS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mS = typeof Uint8Array == "function" ? Uint8Array : null, yS = mS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pS = vS, pt = dS, Ha = yS;
function gS() {
  var r, e;
  if (typeof Ha != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, pt + 1, pt + 2], e = new Ha(e), r = pS(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === pt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var bS = gS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $S = bS, wS = $S;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SS = typeof Uint8Array == "function" ? Uint8Array : void 0, TS = SS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ES() {
  throw new Error("not implemented");
}
var OS = ES;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xS = wS, IS = TS, _S = OS, jt;
xS() ? jt = IS : jt = _S;
var AS = jt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CS = B, NS = typeof Uint8ClampedArray == "function";
function FS(r) {
  return NS && r instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  CS(r) === "[object Uint8ClampedArray]";
}
var MS = FS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kS = MS, DS = kS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LS = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null, PS = LS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var US = DS, Ga = PS;
function RS() {
  var r, e;
  if (typeof Ga != "function")
    return !1;
  try {
    e = new Ga([-1, 0, 1, 3.14, 4.99, 255, 256]), r = US(e) && e[0] === 0 && // clamped
    e[1] === 0 && e[2] === 1 && e[3] === 3 && // round to nearest
    e[4] === 5 && // round to nearest
    e[5] === 255 && e[6] === 255;
  } catch {
    r = !1;
  }
  return r;
}
var jS = RS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VS = jS, BS = VS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zS = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0, ZS = zS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function HS() {
  throw new Error("not implemented");
}
var GS = HS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WS = BS, qS = ZS, YS = GS, Vt;
WS() ? Vt = qS : Vt = YS;
var JS = Vt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XS = B, QS = typeof Int16Array == "function";
function KS(r) {
  return QS && r instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  XS(r) === "[object Int16Array]";
}
var rT = KS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eT = rT, tT = eT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nT = 32767, aT = nT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iT = -32768, oT = iT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sT = typeof Int16Array == "function" ? Int16Array : null, uT = sT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lT = tT, fT = aT, cT = oT, Wa = uT;
function vT() {
  var r, e;
  if (typeof Wa != "function")
    return !1;
  try {
    e = new Wa([1, 3.14, -3.14, fT + 1]), r = lT(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === cT;
  } catch {
    r = !1;
  }
  return r;
}
var hT = vT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dT = hT, mT = dT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yT = typeof Int16Array == "function" ? Int16Array : void 0, pT = yT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function gT() {
  throw new Error("not implemented");
}
var bT = gT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $T = mT, wT = pT, ST = bT, Bt;
$T() ? Bt = wT : Bt = ST;
var TT = Bt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ET = B, OT = typeof Uint16Array == "function";
function xT(r) {
  return OT && r instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  ET(r) === "[object Uint16Array]";
}
var IT = xT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _T = IT, AT = _T;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CT = 65535, NT = CT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FT = typeof Uint16Array == "function" ? Uint16Array : null, MT = FT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kT = AT, gt = NT, qa = MT;
function DT() {
  var r, e;
  if (typeof qa != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, gt + 1, gt + 2], e = new qa(e), r = kT(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === gt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var LT = DT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PT = LT, UT = PT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RT = typeof Uint16Array == "function" ? Uint16Array : void 0, jT = RT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function VT() {
  throw new Error("not implemented");
}
var BT = VT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zT = UT, ZT = jT, HT = BT, zt;
zT() ? zt = ZT : zt = HT;
var GT = zt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WT = B, qT = typeof Int32Array == "function";
function YT(r) {
  return qT && r instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  WT(r) === "[object Int32Array]";
}
var JT = YT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XT = JT, QT = XT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KT = 2147483647, r2 = KT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var e2 = -2147483648, t2 = e2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n2 = typeof Int32Array == "function" ? Int32Array : null, a2 = n2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var i2 = QT, o2 = r2, s2 = t2, Ya = a2;
function u2() {
  var r, e;
  if (typeof Ya != "function")
    return !1;
  try {
    e = new Ya([1, 3.14, -3.14, o2 + 1]), r = i2(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === s2;
  } catch {
    r = !1;
  }
  return r;
}
var l2 = u2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f2 = l2, c2 = f2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v2 = typeof Int32Array == "function" ? Int32Array : void 0, h2 = v2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function d2() {
  throw new Error("not implemented");
}
var m2 = d2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var y2 = c2, p2 = h2, g2 = m2, Zt;
y2() ? Zt = p2 : Zt = g2;
var b2 = Zt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $2 = B, w2 = typeof Uint32Array == "function";
function S2(r) {
  return w2 && r instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  $2(r) === "[object Uint32Array]";
}
var T2 = S2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E2 = T2, O2 = E2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x2 = typeof Uint32Array == "function" ? Uint32Array : null, I2 = x2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _2 = O2, bt = As, Ja = I2;
function A2() {
  var r, e;
  if (typeof Ja != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, bt + 1, bt + 2], e = new Ja(e), r = _2(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === bt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var C2 = A2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N2 = C2, F2 = N2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var M2 = typeof Uint32Array == "function" ? Uint32Array : void 0, k2 = M2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function D2() {
  throw new Error("not implemented");
}
var L2 = D2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P2 = F2, U2 = k2, R2 = L2, Ht;
P2() ? Ht = U2 : Ht = R2;
var j2 = Ht;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var V2 = B, B2 = typeof Float32Array == "function";
function z2(r) {
  return B2 && r instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  V2(r) === "[object Float32Array]";
}
var Z2 = z2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H2 = Z2, G2 = H2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W2 = typeof Float32Array == "function" ? Float32Array : null, q2 = W2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Y2 = G2, J2 = yn, Xa = q2;
function X2() {
  var r, e;
  if (typeof Xa != "function")
    return !1;
  try {
    e = new Xa([1, 3.14, -3.14, 5e40]), r = Y2(e) && e[0] === 1 && e[1] === 3.140000104904175 && e[2] === -3.140000104904175 && e[3] === J2;
  } catch {
    r = !1;
  }
  return r;
}
var Q2 = X2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K2 = Q2, rE = K2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eE = typeof Float32Array == "function" ? Float32Array : void 0, tE = eE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function nE() {
  throw new Error("not implemented");
}
var aE = nE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iE = rE, oE = tE, sE = aE, Gt;
iE() ? Gt = oE : Gt = sE;
var uE = Gt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lE = B, fE = typeof Float64Array == "function";
function cE(r) {
  return fE && r instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  lE(r) === "[object Float64Array]";
}
var vE = cE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hE = vE, dE = hE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mE = typeof Float64Array == "function" ? Float64Array : null, yE = mE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pE = dE, Qa = yE;
function gE() {
  var r, e;
  if (typeof Qa != "function")
    return !1;
  try {
    e = new Qa([1, 3.14, -3.14, NaN]), r = pE(e) && e[0] === 1 && e[1] === 3.14 && e[2] === -3.14 && e[3] !== e[3];
  } catch {
    r = !1;
  }
  return r;
}
var bE = gE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $E = bE, wE = $E;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SE = typeof Float64Array == "function" ? Float64Array : void 0, TE = SE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function EE() {
  throw new Error("not implemented");
}
var OE = EE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xE = wE, IE = TE, _E = OE, Wt;
xE() ? Wt = IE : Wt = _E;
var AE = Wt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CE = oS, NE = AS, FE = JS, ME = TT, kE = GT, DE = b2, LE = j2, PE = uE, UE = AE, Ls;
function RE(r) {
  return new CE(r);
}
function jE(r) {
  return new NE(r);
}
function VE(r) {
  return new FE(r);
}
function BE(r) {
  return new ME(r);
}
function zE(r) {
  return new kE(r);
}
function ZE(r) {
  return new DE(r);
}
function HE(r) {
  return new LE(r);
}
function GE(r) {
  return new PE(r);
}
function WE(r) {
  return new UE(r);
}
function qE() {
  var r = {
    int8array: RE,
    uint8array: jE,
    uint8clampedarray: VE,
    int16array: BE,
    uint16array: zE,
    int32array: ZE,
    uint32array: HE,
    float32array: GE,
    float64array: WE
  };
  return r;
}
Ls = qE();
var YE = Ls;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var De = Wr, Cn = Xe, Ka = de, JE = X0, ri = Sn, XE = S1, QE = Es, Ps = Ms, KE = P$, ue = Y$, rO = fs, le = Ho, eO = Mw, tO = YE;
function nO(r) {
  var e, n, t, a, i, l, o, c;
  for (e = [], a = [], o = Object.create(rO(r)), e.push(r), a.push(o), n = KE(r), c = 0; c < n.length; c++)
    t = n[c], i = ue(r, t), De(i, "value") && (l = Cn(r[t]) ? [] : {}, i.value = Er(r[t], l, e, a, -1)), le(o, t, i);
  return Object.isExtensible(r) || Object.preventExtensions(o), Object.isSealed(r) && Object.seal(o), Object.isFrozen(r) && Object.freeze(o), o;
}
function aO(r) {
  var e = [], n = [], t, a, i, l, o, c;
  for (o = new r.constructor(r.message), e.push(r), n.push(o), r.stack && (o.stack = r.stack), r.code && (o.code = r.code), r.errno && (o.errno = r.errno), r.syscall && (o.syscall = r.syscall), t = Ps(r), c = 0; c < t.length; c++)
    l = t[c], a = ue(r, l), De(a, "value") && (i = Cn(r[l]) ? [] : {}, a.value = Er(r[l], i, e, n, -1)), le(o, l, a);
  return o;
}
function Er(r, e, n, t, a) {
  var i, l, o, c, h, y, m, p, $, S;
  if (a -= 1, typeof r != "object" || r === null)
    return r;
  if (Ka(r))
    return eO(r);
  if (JE(r))
    return aO(r);
  if (o = ri(r), o === "date")
    return /* @__PURE__ */ new Date(+r);
  if (o === "regexp")
    return XE(r.toString());
  if (o === "set")
    return new Set(r);
  if (o === "map")
    return new Map(r);
  if (o === "string" || o === "boolean" || o === "number")
    return r.valueOf();
  if (h = tO[o], h)
    return h(r);
  if (o !== "array" && o !== "object")
    return typeof Object.freeze == "function" ? nO(r) : {};
  if (l = Ps(r), a > 0)
    for (i = o, S = 0; S < l.length; S++) {
      if (y = l[S], p = r[y], o = ri(p), typeof p != "object" || p === null || o !== "array" && o !== "object" || Ka(p)) {
        i === "object" ? (c = ue(r, y), De(c, "value") && (c.value = Er(p)), le(e, y, c)) : e[y] = Er(p);
        continue;
      }
      if ($ = QE(n, p), $ !== -1) {
        e[y] = t[$];
        continue;
      }
      m = Cn(p) ? new Array(p.length) : {}, n.push(p), t.push(m), i === "array" ? e[y] = Er(p, m, n, t, a) : (c = ue(r, y), De(c, "value") && (c.value = Er(p, m, n, t, a)), le(e, y, c));
    }
  else if (o === "array")
    for (S = 0; S < l.length; S++)
      y = l[S], e[y] = r[y];
  else
    for (S = 0; S < l.length; S++)
      y = l[S], c = ue(r, y), le(e, y, c);
  return Object.isExtensible(r) || Object.preventExtensions(e), Object.isSealed(r) && Object.seal(e), Object.isFrozen(r) && Object.freeze(e), e;
}
var iO = Er;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oO = Xe, sO = Qy.isPrimitive, uO = yn, lO = iO;
function fO(r, e) {
  var n;
  if (arguments.length > 1) {
    if (!sO(e))
      throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `" + e + "`.");
    if (e === 0)
      return r;
  } else
    e = uO;
  return n = oO(r) ? new Array(r.length) : {}, lO(r, n, [r], [n], e);
}
var cO = fO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vO = cO, hO = vO;
const dO = /* @__PURE__ */ Vi(hO), ei = { ...zo, GhostError: _ }, lr = {
  serialize(r) {
    try {
      return {
        id: r.id,
        status: r.statusCode,
        code: r.code || r.errorType,
        title: r.name,
        detail: r.message,
        meta: {
          context: r.context,
          help: r.help,
          errorDetails: r.errorDetails,
          level: r.level,
          errorType: r.errorType
        }
      };
    } catch {
      return {
        detail: "Something went wrong."
      };
    }
  },
  deserialize(r) {
    return {
      id: r.id,
      message: r.detail || r.error_description || r.message,
      statusCode: r.status,
      code: r.code || r.error,
      level: r.meta && r.meta.level,
      help: r.meta && r.meta.help,
      context: r.meta && r.meta.context
    };
  },
  /**
   * @description Serialize error instance into oauth format.
   *
   * @see https://tools.ietf.org/html/rfc6749#page-45
   *
   * To not loose any error data when sending errors between internal services, we use the suggested OAuth properties and add ours as well.
   */
  OAuthSerialize(r) {
    const e = {
      [cn.name]: "access_denied",
      [hn.name]: "temporarily_unavailable",
      [fn.name]: "invalid_request",
      [vn.name]: "invalid_request",
      default: "server_error"
    }, { detail: n, code: t, ...a } = lr.serialize(r);
    return {
      error: r.code || e[r.name] || "server_error",
      error_description: r.message,
      ...a
    };
  },
  /**
   * @description Deserialize oauth error format into GhostError instance.
   * @constructor
   */
  OAuthDeserialize(r) {
    try {
      return new ei[r.title || r.name || Ur.name](lr.deserialize(r));
    } catch {
      return new Ur({
        errorType: r.title || r.name,
        ...lr.deserialize(r)
      });
    }
  },
  /**
   * @description Serialize GhostError instance into jsonapi.org format.
   * @param err
   * @return {Object}
   */
  JSONAPISerialize(r) {
    const e = {
      errors: [lr.serialize(r)]
    };
    return e.errors[0].source = {}, r.property && (e.errors[0].source.pointer = "/data/attributes/" + r.property), e;
  },
  /**
   * @description Deserialize JSON api format into GhostError instance.
   */
  JSONAPIDeserialize(r) {
    r = r.errors && r.errors[0] || {};
    let e;
    try {
      e = new ei[r.title || r.name || Ur.name](lr.deserialize(r));
    } catch {
      e = new Ur({
        errorType: r.title || r.name,
        ...lr.deserialize(r)
      });
    }
    return r.source && r.source.pointer && (e.property = r.source.pointer.split("/")[3]), e;
  }
};
function mO(r, e) {
  e = e || { format: "jsonapi" };
  let n = {};
  try {
    e.format === "jsonapi" ? n = lr.JSONAPISerialize(r) : n = lr.OAuthSerialize(r);
  } catch {
    n.message = "Something went wrong.";
  }
  return n;
}
function yO(r) {
  let e = {};
  return r.errors ? e = lr.JSONAPIDeserialize(r) : e = lr.OAuthDeserialize(r), e;
}
function pO(r) {
  var a;
  const e = ((a = r.stack) == null ? void 0 : a.split(/\n/)) || [];
  "hideStack" in r && r.hideStack ? e.splice(1, e.length - 1) : e.splice(1, 0, "Stack Trace:"), "help" in r && r.help && e.splice(1, 0, `${r.help}`), "context" in r && r.context && e.splice(1, 0, `${r.context}`);
  const t = dO(r);
  return t.stack = e.join(`
`), t;
}
function gO(r) {
  const e = _.name, n = "IgnitionError";
  return function a(i) {
    return !i || !i.name ? !1 : i.name === e || i.name === n ? !0 : a(Object.getPrototypeOf(i));
  }(r.constructor);
}
var bO = zo;
const $O = {
  serialize: mO,
  deserialize: yO,
  isGhostError: gO,
  prepareStackForUser: pO
}, wO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: fn,
  ConflictError: Vo,
  DataExportError: Co,
  DataImportError: No,
  DisabledFeatureError: ko,
  EmailError: Fo,
  HelperWarning: Po,
  HostLimitError: Lo,
  IncorrectUsageError: bo,
  InternalServerError: Ur,
  MaintenanceError: hn,
  MethodNotAllowedError: Eo,
  MigrationError: Bo,
  NoContentError: jo,
  NoPermissionError: cn,
  NotFoundError: $o,
  PasswordResetRequiredError: Uo,
  RangeNotSatisfiableError: xo,
  RequestEntityTooLargeError: Io,
  RequestNotAcceptableError: Oo,
  ThemeValidationError: Mo,
  TokenRevocationError: _o,
  TooManyRequestsError: To,
  UnauthorizedError: wo,
  UnhandledJobError: Ro,
  UnsupportedMediaTypeError: So,
  UpdateCollisionError: Do,
  ValidationError: vn,
  VersionMismatchError: Ao,
  default: bO,
  utils: $O
}, Symbol.toStringTag, { value: "Module" })), Us = /* @__PURE__ */ Yu(wO);
var SO = ho, TO = SO(function(r, e, n) {
  return r + (n ? " " : "") + e.toLowerCase();
}), EO = TO, OO = on, xO = function() {
  try {
    var r = OO(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Rs = xO, ti = Rs;
function IO(r, e, n) {
  e == "__proto__" && ti ? ti(r, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : r[e] = n;
}
var js = IO, _O = js, AO = We, CO = Object.prototype, NO = CO.hasOwnProperty;
function FO(r, e, n) {
  var t = r[e];
  (!(NO.call(r, e) && AO(t, n)) || n === void 0 && !(e in r)) && _O(r, e, n);
}
var MO = FO, kO = MO, DO = js;
function LO(r, e, n, t) {
  var a = !n;
  n || (n = {});
  for (var i = -1, l = e.length; ++i < l; ) {
    var o = e[i], c = t ? t(n[o], r[o], o, n, r) : void 0;
    c === void 0 && (c = r[o]), a ? DO(n, o, c) : kO(n, o, c);
  }
  return n;
}
var PO = LO;
function UO(r) {
  return r;
}
var Vs = UO;
function RO(r, e, n) {
  switch (n.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, n[0]);
    case 2:
      return r.call(e, n[0], n[1]);
    case 3:
      return r.call(e, n[0], n[1], n[2]);
  }
  return r.apply(e, n);
}
var Bs = RO, jO = Bs, ni = Math.max;
function VO(r, e, n) {
  return e = ni(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var t = arguments, a = -1, i = ni(t.length - e, 0), l = Array(i); ++a < i; )
      l[a] = t[e + a];
    a = -1;
    for (var o = Array(e + 1); ++a < e; )
      o[a] = t[a];
    return o[e] = n(l), jO(r, this, o);
  };
}
var BO = VO;
function zO(r) {
  return function() {
    return r;
  };
}
var ZO = zO, HO = ZO, ai = Rs, GO = Vs, WO = ai ? function(r, e) {
  return ai(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: HO(e),
    writable: !0
  });
} : GO, qO = WO, YO = 800, JO = 16, XO = Date.now;
function QO(r) {
  var e = 0, n = 0;
  return function() {
    var t = XO(), a = JO - (t - n);
    if (n = t, a > 0) {
      if (++e >= YO)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var KO = QO, rx = qO, ex = KO, tx = ex(rx), nx = tx, ax = Vs, ix = BO, ox = nx;
function sx(r, e) {
  return ox(ix(r, e, ax), r + "");
}
var zs = sx, ux = mo, lx = ln;
function fx(r) {
  return r != null && lx(r.length) && !ux(r);
}
var Nn = fx, cx = We, vx = Nn, hx = un, dx = He;
function mx(r, e, n) {
  if (!dx(n))
    return !1;
  var t = typeof e;
  return (t == "number" ? vx(n) && hx(e, n.length) : t == "string" && e in n) ? cx(n[e], r) : !1;
}
var Zs = mx, yx = zs, px = Zs;
function gx(r) {
  return yx(function(e, n) {
    var t = -1, a = n.length, i = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (i = r.length > 3 && typeof i == "function" ? (a--, i) : void 0, l && px(n[0], n[1], l) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++t < a; ) {
      var o = n[t];
      o && r(e, o, t, i);
    }
    return e;
  });
}
var bx = gx;
function $x(r, e) {
  for (var n = -1, t = Array(r); ++n < r; )
    t[n] = e(n);
  return t;
}
var wx = $x, Le = { exports: {} };
function Sx() {
  return !1;
}
var Tx = Sx;
Le.exports;
(function(r, e) {
  var n = Ze, t = Tx, a = e && !e.nodeType && e, i = a && !0 && r && !r.nodeType && r, l = i && i.exports === a, o = l ? n.Buffer : void 0, c = o ? o.isBuffer : void 0, h = c || t;
  r.exports = h;
})(Le, Le.exports);
var Ex = Le.exports, Ox = Br, xx = ln, Ix = zr, _x = "[object Arguments]", Ax = "[object Array]", Cx = "[object Boolean]", Nx = "[object Date]", Fx = "[object Error]", Mx = "[object Function]", kx = "[object Map]", Dx = "[object Number]", Lx = "[object Object]", Px = "[object RegExp]", Ux = "[object Set]", Rx = "[object String]", jx = "[object WeakMap]", Vx = "[object ArrayBuffer]", Bx = "[object DataView]", zx = "[object Float32Array]", Zx = "[object Float64Array]", Hx = "[object Int8Array]", Gx = "[object Int16Array]", Wx = "[object Int32Array]", qx = "[object Uint8Array]", Yx = "[object Uint8ClampedArray]", Jx = "[object Uint16Array]", Xx = "[object Uint32Array]", F = {};
F[zx] = F[Zx] = F[Hx] = F[Gx] = F[Wx] = F[qx] = F[Yx] = F[Jx] = F[Xx] = !0;
F[_x] = F[Ax] = F[Vx] = F[Cx] = F[Bx] = F[Nx] = F[Fx] = F[Mx] = F[kx] = F[Dx] = F[Lx] = F[Px] = F[Ux] = F[Rx] = F[jx] = !1;
function Qx(r) {
  return Ix(r) && xx(r.length) && !!F[Ox(r)];
}
var Kx = Qx;
function rI(r) {
  return function(e) {
    return r(e);
  };
}
var eI = rI, Pe = { exports: {} };
Pe.exports;
(function(r, e) {
  var n = Bi, t = e && !e.nodeType && e, a = t && !0 && r && !r.nodeType && r, i = a && a.exports === t, l = i && n.process, o = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(Pe, Pe.exports);
var tI = Pe.exports, nI = Kx, aI = eI, ii = tI, oi = ii && ii.isTypedArray, iI = oi ? aI(oi) : nI, oI = iI, sI = wx, uI = go, lI = he, fI = Ex, cI = un, vI = oI, hI = Object.prototype, dI = hI.hasOwnProperty;
function mI(r, e) {
  var n = lI(r), t = !n && uI(r), a = !n && !t && fI(r), i = !n && !t && !a && vI(r), l = n || t || a || i, o = l ? sI(r.length, String) : [], c = o.length;
  for (var h in r)
    (e || dI.call(r, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    cI(h, c))) && o.push(h);
  return o;
}
var Hs = mI, yI = Object.prototype;
function pI(r) {
  var e = r && r.constructor, n = typeof e == "function" && e.prototype || yI;
  return r === n;
}
var Gs = pI;
function gI(r) {
  var e = [];
  if (r != null)
    for (var n in Object(r))
      e.push(n);
  return e;
}
var bI = gI, $I = He, wI = Gs, SI = bI, TI = Object.prototype, EI = TI.hasOwnProperty;
function OI(r) {
  if (!$I(r))
    return SI(r);
  var e = wI(r), n = [];
  for (var t in r)
    t == "constructor" && (e || !EI.call(r, t)) || n.push(t);
  return n;
}
var xI = OI, II = Hs, _I = xI, AI = Nn;
function CI(r) {
  return AI(r) ? II(r, !0) : _I(r);
}
var NI = CI, FI = PO, MI = bx, kI = NI, DI = MI(function(r, e, n, t) {
  FI(e, kI(e), r, t);
}), LI = DI;
function PI(r, e) {
  return function(n) {
    return r(e(n));
  };
}
var Ws = PI, UI = Ws, RI = UI(Object.getPrototypeOf, Object), jI = RI, VI = Br, BI = jI, zI = zr, ZI = "[object Object]", HI = Function.prototype, GI = Object.prototype, qs = HI.toString, WI = GI.hasOwnProperty, qI = qs.call(Object);
function YI(r) {
  if (!zI(r) || VI(r) != ZI)
    return !1;
  var e = BI(r);
  if (e === null)
    return !0;
  var n = WI.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && qs.call(n) == qI;
}
var JI = YI, XI = Br, QI = zr, KI = JI, r_ = "[object DOMException]", e_ = "[object Error]";
function t_(r) {
  if (!QI(r))
    return !1;
  var e = XI(r);
  return e == e_ || e == r_ || typeof r.message == "string" && typeof r.name == "string" && !KI(r);
}
var Ys = t_, n_ = Bs, a_ = zs, i_ = Ys, o_ = a_(function(r, e) {
  try {
    return n_(r, void 0, e);
  } catch (n) {
    return i_(n) ? n : new Error(n);
  }
}), s_ = o_, u_ = zi;
function l_(r, e) {
  return u_(e, function(n) {
    return r[n];
  });
}
var f_ = l_, c_ = We, Js = Object.prototype, v_ = Js.hasOwnProperty;
function h_(r, e, n, t) {
  return r === void 0 || c_(r, Js[n]) && !v_.call(t, n) ? e : r;
}
var d_ = h_, m_ = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function y_(r) {
  return "\\" + m_[r];
}
var p_ = y_, g_ = Ws, b_ = g_(Object.keys, Object), $_ = b_, w_ = Gs, S_ = $_, T_ = Object.prototype, E_ = T_.hasOwnProperty;
function O_(r) {
  if (!w_(r))
    return S_(r);
  var e = [];
  for (var n in Object(r))
    E_.call(r, n) && n != "constructor" && e.push(n);
  return e;
}
var x_ = O_, I_ = Hs, __ = x_, A_ = Nn;
function C_(r) {
  return A_(r) ? I_(r) : __(r);
}
var N_ = C_, F_ = /<%=([\s\S]+?)%>/g, Xs = F_, M_ = Ki, k_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, D_ = M_(k_), L_ = D_, P_ = L_, U_ = Ir, Qs = /[&<>"']/g, R_ = RegExp(Qs.source);
function j_(r) {
  return r = U_(r), r && R_.test(r) ? r.replace(Qs, P_) : r;
}
var V_ = j_, B_ = /<%-([\s\S]+?)%>/g, z_ = B_, Z_ = /<%([\s\S]+?)%>/g, H_ = Z_, G_ = V_, W_ = z_, q_ = H_, Y_ = Xs, J_ = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: W_,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: q_,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: Y_,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: G_ }
  }
}, X_ = J_, si = LI, Q_ = s_, K_ = f_, ui = d_, rA = p_, eA = Ys, tA = Zs, nA = N_, aA = Xs, li = X_, iA = Ir, oA = "Invalid `variable` option passed into `_.template`", sA = /\b__p \+= '';/g, uA = /\b(__p \+=) '' \+/g, lA = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fA = /[()=,{}\[\]\/\s]/, cA = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /($^)/, vA = /['\n\r\u2028\u2029\\]/g, hA = Object.prototype, fi = hA.hasOwnProperty;
function dA(r, e, n) {
  var t = li.imports._.templateSettings || li;
  n && tA(r, e, n) && (e = void 0), r = iA(r), e = si({}, e, t, ui);
  var a = si({}, e.imports, t.imports, ui), i = nA(a), l = K_(a, i), o, c, h = 0, y = e.interpolate || Ie, m = "__p += '", p = RegExp(
    (e.escape || Ie).source + "|" + y.source + "|" + (y === aA ? cA : Ie).source + "|" + (e.evaluate || Ie).source + "|$",
    "g"
  ), $ = fi.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  r.replace(p, function(O, T, L, pr, dr, z) {
    return L || (L = pr), m += r.slice(h, z).replace(vA, rA), T && (o = !0, m += `' +
__e(` + T + `) +
'`), dr && (c = !0, m += `';
` + dr + `;
__p += '`), L && (m += `' +
((__t = (` + L + `)) == null ? '' : __t) +
'`), h = z + O.length, O;
  }), m += `';
`;
  var S = fi.call(e, "variable") && e.variable;
  if (!S)
    m = `with (obj) {
` + m + `
}
`;
  else if (fA.test(S))
    throw new Error(oA);
  m = (c ? m.replace(sA, "") : m).replace(uA, "$1").replace(lA, "$1;"), m = "function(" + (S || "obj") + `) {
` + (S ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
  var E = Q_(function() {
    return Function(i, $ + "return " + m).apply(void 0, l);
  });
  if (E.source = m, eA(E))
    throw E;
  return E;
}
var mA = dA, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
function ci(r, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function or(r, e, n) {
  return e && ci(r.prototype, e), n && ci(r, n), r;
}
function er(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
function qt(r) {
  return qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qt(r);
}
function Ue(r, e) {
  return Ue = Object.setPrototypeOf || function(t, a) {
    return t.__proto__ = a, t;
  }, Ue(r, e);
}
function yA() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fe(r, e, n) {
  return yA() ? Fe = Reflect.construct : Fe = function(a, i, l) {
    var o = [null];
    o.push.apply(o, i);
    var c = Function.bind.apply(a, o), h = new c();
    return l && Ue(h, l.prototype), h;
  }, Fe.apply(null, arguments);
}
function pA(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function Yt(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Yt = function(t) {
    if (t === null || !pA(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, a);
    }
    function a() {
      return Fe(t, arguments, qt(this).constructor);
    }
    return a.prototype = Object.create(t.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ue(a, t);
  }, Yt(r);
}
function gA(r, e) {
  if (r == null)
    return {};
  var n = {}, t = Object.keys(r), a, i;
  for (i = 0; i < t.length; i++)
    a = t[i], !(e.indexOf(a) >= 0) && (n[a] = r[a]);
  return n;
}
function bA(r, e) {
  if (r) {
    if (typeof r == "string")
      return vi(r, e);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    if (n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set")
      return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vi(r, e);
  }
}
function vi(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var n = 0, t = new Array(e); n < e; n++)
    t[n] = r[n];
  return t;
}
function br(r) {
  var e = 0;
  if (typeof Symbol > "u" || r[Symbol.iterator] == null) {
    if (Array.isArray(r) || (r = bA(r)))
      return function() {
        return e >= r.length ? {
          done: !0
        } : {
          done: !1,
          value: r[e++]
        };
      };
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return e = r[Symbol.iterator](), e.next.bind(e);
}
var _r = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(/* @__PURE__ */ Yt(Error)), $A = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid DateTime: " + n.toMessage()) || this;
  }
  return e;
}(_r), wA = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid Interval: " + n.toMessage()) || this;
  }
  return e;
}(_r), SA = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid Duration: " + n.toMessage()) || this;
  }
  return e;
}(_r), oe = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(_r), Ks = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(n) {
    return r.call(this, "Invalid unit " + n) || this;
  }
  return e;
}(_r), K = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  return e;
}(_r), gr = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.call(this, "Zone is an abstract class") || this;
  }
  return e;
}(_r), w = "numeric", sr = "short", Y = "long", Re = {
  year: w,
  month: w,
  day: w
}, Fn = {
  year: w,
  month: sr,
  day: w
}, ru = {
  year: w,
  month: sr,
  day: w,
  weekday: sr
}, Mn = {
  year: w,
  month: Y,
  day: w
}, kn = {
  year: w,
  month: Y,
  day: w,
  weekday: Y
}, Dn = {
  hour: w,
  minute: w
}, Ln = {
  hour: w,
  minute: w,
  second: w
}, Pn = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: sr
}, Un = {
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Y
}, Rn = {
  hour: w,
  minute: w,
  hour12: !1
}, jn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1
}, Vn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1,
  timeZoneName: sr
}, Bn = {
  hour: w,
  minute: w,
  second: w,
  hour12: !1,
  timeZoneName: Y
}, zn = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w
}, Zn = {
  year: w,
  month: w,
  day: w,
  hour: w,
  minute: w,
  second: w
}, Hn = {
  year: w,
  month: sr,
  day: w,
  hour: w,
  minute: w
}, Gn = {
  year: w,
  month: sr,
  day: w,
  hour: w,
  minute: w,
  second: w
}, eu = {
  year: w,
  month: sr,
  day: w,
  weekday: sr,
  hour: w,
  minute: w
}, Wn = {
  year: w,
  month: Y,
  day: w,
  hour: w,
  minute: w,
  timeZoneName: sr
}, qn = {
  year: w,
  month: Y,
  day: w,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: sr
}, Yn = {
  year: w,
  month: Y,
  day: w,
  weekday: Y,
  hour: w,
  minute: w,
  timeZoneName: Y
}, Jn = {
  year: w,
  month: Y,
  day: w,
  weekday: Y,
  hour: w,
  minute: w,
  second: w,
  timeZoneName: Y
};
function I(r) {
  return typeof r > "u";
}
function xr(r) {
  return typeof r == "number";
}
function et(r) {
  return typeof r == "number" && r % 1 === 0;
}
function TA(r) {
  return typeof r == "string";
}
function EA(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function hr() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function me() {
  return !I(Intl.DateTimeFormat.prototype.formatToParts);
}
function tu() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function OA(r) {
  return Array.isArray(r) ? r : [r];
}
function hi(r, e, n) {
  if (r.length !== 0)
    return r.reduce(function(t, a) {
      var i = [e(a), a];
      return t && n(t[0], i[0]) === t[0] ? t : i;
    }, null)[1];
}
function nu(r, e) {
  return e.reduce(function(n, t) {
    return n[t] = r[t], n;
  }, {});
}
function Vr(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function mr(r, e, n) {
  return et(r) && r >= e && r <= n;
}
function xA(r, e) {
  return r - e * Math.floor(r / e);
}
function Rr(r, e) {
  e === void 0 && (e = 2);
  var n = r < 0 ? "-" : "", t = n ? r * -1 : r, a;
  return t.toString().length < e ? a = ("0".repeat(e) + t).slice(-e) : a = t.toString(), "" + n + a;
}
function H(r) {
  if (!(I(r) || r === null || r === ""))
    return parseInt(r, 10);
}
function Xn(r) {
  if (!(I(r) || r === null || r === "")) {
    var e = parseFloat("0." + r) * 1e3;
    return Math.floor(e);
  }
}
function Qn(r, e, n) {
  n === void 0 && (n = !1);
  var t = Math.pow(10, e), a = n ? Math.trunc : Math.round;
  return a(r * t) / t;
}
function ye(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function fe(r) {
  return ye(r) ? 366 : 365;
}
function je(r, e) {
  var n = xA(e - 1, 12) + 1, t = r + (e - n) / 12;
  return n === 2 ? ye(t) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Kn(r) {
  var e = Date.UTC(r.year, r.month - 1, r.day, r.hour, r.minute, r.second, r.millisecond);
  return r.year < 100 && r.year >= 0 && (e = new Date(e), e.setUTCFullYear(e.getUTCFullYear() - 1900)), +e;
}
function Ve(r) {
  var e = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7, n = r - 1, t = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return e === 4 || t === 3 ? 53 : 52;
}
function Jt(r) {
  return r > 99 ? r : r > 60 ? 1900 + r : 2e3 + r;
}
function au(r, e, n, t) {
  t === void 0 && (t = null);
  var a = new Date(r), i = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  t && (i.timeZone = t);
  var l = Object.assign({
    timeZoneName: e
  }, i), o = hr();
  if (o && me()) {
    var c = new Intl.DateTimeFormat(n, l).formatToParts(a).find(function($) {
      return $.type.toLowerCase() === "timezonename";
    });
    return c ? c.value : null;
  } else if (o) {
    var h = new Intl.DateTimeFormat(n, i).format(a), y = new Intl.DateTimeFormat(n, l).format(a), m = y.substring(h.length), p = m.replace(/^[, \u200e]+/, "");
    return p;
  } else
    return null;
}
function tt(r, e) {
  var n = parseInt(r, 10);
  Number.isNaN(n) && (n = 0);
  var t = parseInt(e, 10) || 0, a = n < 0 || Object.is(n, -0) ? -t : t;
  return n * 60 + a;
}
function iu(r) {
  var e = Number(r);
  if (typeof r == "boolean" || r === "" || Number.isNaN(e))
    throw new K("Invalid unit value " + r);
  return e;
}
function Be(r, e, n) {
  var t = {};
  for (var a in r)
    if (Vr(r, a)) {
      if (n.indexOf(a) >= 0)
        continue;
      var i = r[a];
      if (i == null)
        continue;
      t[e(a)] = iu(i);
    }
  return t;
}
function ze(r, e) {
  var n = Math.trunc(Math.abs(r / 60)), t = Math.trunc(Math.abs(r % 60)), a = r >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return "" + a + Rr(n, 2) + ":" + Rr(t, 2);
    case "narrow":
      return "" + a + n + (t > 0 ? ":" + t : "");
    case "techie":
      return "" + a + Rr(n, 2) + Rr(t, 2);
    default:
      throw new RangeError("Value format " + e + " is out of range for property format");
  }
}
function nt(r) {
  return nu(r, ["hour", "minute", "second", "millisecond"]);
}
var ou = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function k(r) {
  return JSON.stringify(r, Object.keys(r).sort());
}
var IA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], su = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], _A = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function uu(r) {
  switch (r) {
    case "narrow":
      return [].concat(_A);
    case "short":
      return [].concat(su);
    case "long":
      return [].concat(IA);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var lu = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], fu = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], AA = ["M", "T", "W", "T", "F", "S", "S"];
function cu(r) {
  switch (r) {
    case "narrow":
      return [].concat(AA);
    case "short":
      return [].concat(fu);
    case "long":
      return [].concat(lu);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var vu = ["AM", "PM"], CA = ["Before Christ", "Anno Domini"], NA = ["BC", "AD"], FA = ["B", "A"];
function hu(r) {
  switch (r) {
    case "narrow":
      return [].concat(FA);
    case "short":
      return [].concat(NA);
    case "long":
      return [].concat(CA);
    default:
      return null;
  }
}
function MA(r) {
  return vu[r.hour < 12 ? 0 : 1];
}
function kA(r, e) {
  return cu(e)[r.weekday - 1];
}
function DA(r, e) {
  return uu(e)[r.month - 1];
}
function LA(r, e) {
  return hu(e)[r.year < 0 ? 0 : 1];
}
function PA(r, e, n, t) {
  n === void 0 && (n = "always"), t === void 0 && (t = !1);
  var a = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(r) === -1;
  if (n === "auto" && i) {
    var l = r === "days";
    switch (e) {
      case 1:
        return l ? "tomorrow" : "next " + a[r][0];
      case -1:
        return l ? "yesterday" : "last " + a[r][0];
      case 0:
        return l ? "today" : "this " + a[r][0];
    }
  }
  var o = Object.is(e, -0) || e < 0, c = Math.abs(e), h = c === 1, y = a[r], m = t ? h ? y[1] : y[2] || y[1] : h ? a[r][0] : r;
  return o ? c + " " + m + " ago" : "in " + c + " " + m;
}
function UA(r) {
  var e = nu(r, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]), n = k(e), t = "EEEE, LLLL d, yyyy, h:mm a";
  switch (n) {
    case k(Re):
      return "M/d/yyyy";
    case k(Fn):
      return "LLL d, yyyy";
    case k(ru):
      return "EEE, LLL d, yyyy";
    case k(Mn):
      return "LLLL d, yyyy";
    case k(kn):
      return "EEEE, LLLL d, yyyy";
    case k(Dn):
      return "h:mm a";
    case k(Ln):
      return "h:mm:ss a";
    case k(Pn):
      return "h:mm a";
    case k(Un):
      return "h:mm a";
    case k(Rn):
      return "HH:mm";
    case k(jn):
      return "HH:mm:ss";
    case k(Vn):
      return "HH:mm";
    case k(Bn):
      return "HH:mm";
    case k(zn):
      return "M/d/yyyy, h:mm a";
    case k(Hn):
      return "LLL d, yyyy, h:mm a";
    case k(Wn):
      return "LLLL d, yyyy, h:mm a";
    case k(Yn):
      return t;
    case k(Zn):
      return "M/d/yyyy, h:mm:ss a";
    case k(Gn):
      return "LLL d, yyyy, h:mm:ss a";
    case k(eu):
      return "EEE, d LLL yyyy, h:mm a";
    case k(qn):
      return "LLLL d, yyyy, h:mm:ss a";
    case k(Jn):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return t;
  }
}
function di(r, e) {
  for (var n = "", t = br(r), a; !(a = t()).done; ) {
    var i = a.value;
    i.literal ? n += i.val : n += e(i.val);
  }
  return n;
}
var RA = {
  D: Re,
  DD: Fn,
  DDD: Mn,
  DDDD: kn,
  t: Dn,
  tt: Ln,
  ttt: Pn,
  tttt: Un,
  T: Rn,
  TT: jn,
  TTT: Vn,
  TTTT: Bn,
  f: zn,
  ff: Hn,
  fff: Wn,
  ffff: Yn,
  F: Zn,
  FF: Gn,
  FFF: qn,
  FFFF: Jn
}, cr = /* @__PURE__ */ function() {
  r.create = function(t, a) {
    return a === void 0 && (a = {}), new r(t, a);
  }, r.parseFormat = function(t) {
    for (var a = null, i = "", l = !1, o = [], c = 0; c < t.length; c++) {
      var h = t.charAt(c);
      h === "'" ? (i.length > 0 && o.push({
        literal: l,
        val: i
      }), a = null, i = "", l = !l) : l || h === a ? i += h : (i.length > 0 && o.push({
        literal: !1,
        val: i
      }), i = h, a = h);
    }
    return i.length > 0 && o.push({
      literal: l,
      val: i
    }), o;
  }, r.macroTokenToFormatOpts = function(t) {
    return RA[t];
  };
  function r(n, t) {
    this.opts = t, this.loc = n, this.systemLoc = null;
  }
  var e = r.prototype;
  return e.formatWithSystemDefault = function(t, a) {
    this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem());
    var i = this.systemLoc.dtFormatter(t, Object.assign({}, this.opts, a));
    return i.format();
  }, e.formatDateTime = function(t, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(t, Object.assign({}, this.opts, a));
    return i.format();
  }, e.formatDateTimeParts = function(t, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(t, Object.assign({}, this.opts, a));
    return i.formatToParts();
  }, e.resolvedOptions = function(t, a) {
    a === void 0 && (a = {});
    var i = this.loc.dtFormatter(t, Object.assign({}, this.opts, a));
    return i.resolvedOptions();
  }, e.num = function(t, a) {
    if (a === void 0 && (a = 0), this.opts.forceSimple)
      return Rr(t, a);
    var i = Object.assign({}, this.opts);
    return a > 0 && (i.padTo = a), this.loc.numberFormatter(i).format(t);
  }, e.formatDateTimeFromString = function(t, a) {
    var i = this, l = this.loc.listingMode() === "en", o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && me(), c = function(T, L) {
      return i.loc.extract(t, T, L);
    }, h = function(T) {
      return t.isOffsetFixed && t.offset === 0 && T.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, T.format) : "";
    }, y = function() {
      return l ? MA(t) : c({
        hour: "numeric",
        hour12: !0
      }, "dayperiod");
    }, m = function(T, L) {
      return l ? DA(t, T) : c(L ? {
        month: T
      } : {
        month: T,
        day: "numeric"
      }, "month");
    }, p = function(T, L) {
      return l ? kA(t, T) : c(L ? {
        weekday: T
      } : {
        weekday: T,
        month: "long",
        day: "numeric"
      }, "weekday");
    }, $ = function(T) {
      var L = r.macroTokenToFormatOpts(T);
      return L ? i.formatWithSystemDefault(t, L) : T;
    }, S = function(T) {
      return l ? LA(t, T) : c({
        era: T
      }, "era");
    }, E = function(T) {
      switch (T) {
        case "S":
          return i.num(t.millisecond);
        case "u":
        case "SSS":
          return i.num(t.millisecond, 3);
        case "s":
          return i.num(t.second);
        case "ss":
          return i.num(t.second, 2);
        case "m":
          return i.num(t.minute);
        case "mm":
          return i.num(t.minute, 2);
        case "h":
          return i.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return i.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return i.num(t.hour);
        case "HH":
          return i.num(t.hour, 2);
        case "Z":
          return h({
            format: "narrow",
            allowZ: i.opts.allowZ
          });
        case "ZZ":
          return h({
            format: "short",
            allowZ: i.opts.allowZ
          });
        case "ZZZ":
          return h({
            format: "techie",
            allowZ: i.opts.allowZ
          });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, {
            format: "short",
            locale: i.loc.locale
          });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, {
            format: "long",
            locale: i.loc.locale
          });
        case "z":
          return t.zoneName;
        case "a":
          return y();
        case "d":
          return o ? c({
            day: "numeric"
          }, "day") : i.num(t.day);
        case "dd":
          return o ? c({
            day: "2-digit"
          }, "day") : i.num(t.day, 2);
        case "c":
          return i.num(t.weekday);
        case "ccc":
          return p("short", !0);
        case "cccc":
          return p("long", !0);
        case "ccccc":
          return p("narrow", !0);
        case "E":
          return i.num(t.weekday);
        case "EEE":
          return p("short", !1);
        case "EEEE":
          return p("long", !1);
        case "EEEEE":
          return p("narrow", !1);
        case "L":
          return o ? c({
            month: "numeric",
            day: "numeric"
          }, "month") : i.num(t.month);
        case "LL":
          return o ? c({
            month: "2-digit",
            day: "numeric"
          }, "month") : i.num(t.month, 2);
        case "LLL":
          return m("short", !0);
        case "LLLL":
          return m("long", !0);
        case "LLLLL":
          return m("narrow", !0);
        case "M":
          return o ? c({
            month: "numeric"
          }, "month") : i.num(t.month);
        case "MM":
          return o ? c({
            month: "2-digit"
          }, "month") : i.num(t.month, 2);
        case "MMM":
          return m("short", !1);
        case "MMMM":
          return m("long", !1);
        case "MMMMM":
          return m("narrow", !1);
        case "y":
          return o ? c({
            year: "numeric"
          }, "year") : i.num(t.year);
        case "yy":
          return o ? c({
            year: "2-digit"
          }, "year") : i.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return o ? c({
            year: "numeric"
          }, "year") : i.num(t.year, 4);
        case "yyyyyy":
          return o ? c({
            year: "numeric"
          }, "year") : i.num(t.year, 6);
        case "G":
          return S("short");
        case "GG":
          return S("long");
        case "GGGGG":
          return S("narrow");
        case "kk":
          return i.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return i.num(t.weekYear, 4);
        case "W":
          return i.num(t.weekNumber);
        case "WW":
          return i.num(t.weekNumber, 2);
        case "o":
          return i.num(t.ordinal);
        case "ooo":
          return i.num(t.ordinal, 3);
        case "q":
          return i.num(t.quarter);
        case "qq":
          return i.num(t.quarter, 2);
        case "X":
          return i.num(Math.floor(t.ts / 1e3));
        case "x":
          return i.num(t.ts);
        default:
          return $(T);
      }
    };
    return di(r.parseFormat(a), E);
  }, e.formatDurationFromString = function(t, a) {
    var i = this, l = function(p) {
      switch (p[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, o = function(p) {
      return function($) {
        var S = l($);
        return S ? i.num(p.get(S), $.length) : $;
      };
    }, c = r.parseFormat(a), h = c.reduce(function(m, p) {
      var $ = p.literal, S = p.val;
      return $ ? m : m.concat(S);
    }, []), y = t.shiftTo.apply(t, h.map(l).filter(function(m) {
      return m;
    }));
    return di(c, o(y));
  }, r;
}(), ir = /* @__PURE__ */ function() {
  function r(n, t) {
    this.reason = n, this.explanation = t;
  }
  var e = r.prototype;
  return e.toMessage = function() {
    return this.explanation ? this.reason + ": " + this.explanation : this.reason;
  }, r;
}(), Yr = /* @__PURE__ */ function() {
  function r() {
  }
  var e = r.prototype;
  return e.offsetName = function(t, a) {
    throw new gr();
  }, e.formatOffset = function(t, a) {
    throw new gr();
  }, e.offset = function(t) {
    throw new gr();
  }, e.equals = function(t) {
    throw new gr();
  }, or(r, [{
    key: "type",
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function() {
      throw new gr();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function() {
      throw new gr();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "universal",
    get: function() {
      throw new gr();
    }
  }, {
    key: "isValid",
    get: function() {
      throw new gr();
    }
  }]), r;
}(), $t = null, du = /* @__PURE__ */ function(r) {
  er(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  var n = e.prototype;
  return n.offsetName = function(a, i) {
    var l = i.format, o = i.locale;
    return au(a, l, o);
  }, n.formatOffset = function(a, i) {
    return ze(this.offset(a), i);
  }, n.offset = function(a) {
    return -new Date(a).getTimezoneOffset();
  }, n.equals = function(a) {
    return a.type === "local";
  }, or(e, [{
    key: "type",
    /** @override **/
    get: function() {
      return "local";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return hr() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }], [{
    key: "instance",
    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function() {
      return $t === null && ($t = new e()), $t;
    }
  }]), e;
}(Yr), jA = RegExp("^" + ou.source + "$"), Me = {};
function VA(r) {
  return Me[r] || (Me[r] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: r,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), Me[r];
}
var BA = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function zA(r, e) {
  var n = r.format(e).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n), a = t[1], i = t[2], l = t[3], o = t[4], c = t[5], h = t[6];
  return [l, a, i, o, c, h];
}
function ZA(r, e) {
  for (var n = r.formatToParts(e), t = [], a = 0; a < n.length; a++) {
    var i = n[a], l = i.type, o = i.value, c = BA[l];
    I(c) || (t[c] = parseInt(o, 10));
  }
  return t;
}
var _e = {}, vr = /* @__PURE__ */ function(r) {
  er(e, r), e.create = function(a) {
    return _e[a] || (_e[a] = new e(a)), _e[a];
  }, e.resetCache = function() {
    _e = {}, Me = {};
  }, e.isValidSpecifier = function(a) {
    return !!(a && a.match(jA));
  }, e.isValidZone = function(a) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: a
      }).format(), !0;
    } catch {
      return !1;
    }
  }, e.parseGMTOffset = function(a) {
    if (a) {
      var i = a.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
      if (i)
        return -60 * parseInt(i[1]);
    }
    return null;
  };
  function e(t) {
    var a;
    return a = r.call(this) || this, a.zoneName = t, a.valid = e.isValidZone(t), a;
  }
  var n = e.prototype;
  return n.offsetName = function(a, i) {
    var l = i.format, o = i.locale;
    return au(a, l, o, this.name);
  }, n.formatOffset = function(a, i) {
    return ze(this.offset(a), i);
  }, n.offset = function(a) {
    var i = new Date(a);
    if (isNaN(i))
      return NaN;
    var l = VA(this.name), o = l.formatToParts ? ZA(l, i) : zA(l, i), c = o[0], h = o[1], y = o[2], m = o[3], p = o[4], $ = o[5], S = m === 24 ? 0 : m, E = Kn({
      year: c,
      month: h,
      day: y,
      hour: S,
      minute: p,
      second: $,
      millisecond: 0
    }), O = +i, T = O % 1e3;
    return O -= T >= 0 ? T : 1e3 + T, (E - O) / (60 * 1e3);
  }, n.equals = function(a) {
    return a.type === "iana" && a.name === this.name;
  }, or(e, [{
    key: "type",
    get: function() {
      return "iana";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return this.valid;
    }
  }]), e;
}(Yr), wt = null, q = /* @__PURE__ */ function(r) {
  er(e, r), e.instance = function(a) {
    return a === 0 ? e.utcInstance : new e(a);
  }, e.parseSpecifier = function(a) {
    if (a) {
      var i = a.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (i)
        return new e(tt(i[1], i[2]));
    }
    return null;
  }, or(e, null, [{
    key: "utcInstance",
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function() {
      return wt === null && (wt = new e(0)), wt;
    }
  }]);
  function e(t) {
    var a;
    return a = r.call(this) || this, a.fixed = t, a;
  }
  var n = e.prototype;
  return n.offsetName = function() {
    return this.name;
  }, n.formatOffset = function(a, i) {
    return ze(this.fixed, i);
  }, n.offset = function() {
    return this.fixed;
  }, n.equals = function(a) {
    return a.type === "fixed" && a.fixed === this.fixed;
  }, or(e, [{
    key: "type",
    get: function() {
      return "fixed";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.fixed === 0 ? "UTC" : "UTC" + ze(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function() {
      return !0;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }]), e;
}(Yr), Xt = /* @__PURE__ */ function(r) {
  er(e, r);
  function e(t) {
    var a;
    return a = r.call(this) || this, a.zoneName = t, a;
  }
  var n = e.prototype;
  return n.offsetName = function() {
    return null;
  }, n.formatOffset = function() {
    return "";
  }, n.offset = function() {
    return NaN;
  }, n.equals = function() {
    return !1;
  }, or(e, [{
    key: "type",
    get: function() {
      return "invalid";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !1;
    }
  }]), e;
}(Yr);
function Tr(r, e) {
  var n;
  if (I(r) || r === null)
    return e;
  if (r instanceof Yr)
    return r;
  if (TA(r)) {
    var t = r.toLowerCase();
    return t === "local" ? e : t === "utc" || t === "gmt" ? q.utcInstance : (n = vr.parseGMTOffset(r)) != null ? q.instance(n) : vr.isValidSpecifier(t) ? vr.create(r) : q.parseSpecifier(t) || new Xt(r);
  } else
    return xr(r) ? q.instance(r) : typeof r == "object" && r.offset && typeof r.offset == "number" ? r : new Xt(r);
}
var mi = function() {
  return Date.now();
}, St = null, yi = null, pi = null, gi = null, bi = !1, P = /* @__PURE__ */ function() {
  function r() {
  }
  return r.resetCaches = function() {
    j.resetCache(), vr.resetCache();
  }, or(r, null, [{
    key: "now",
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function() {
      return mi;
    },
    set: function(n) {
      mi = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */
  }, {
    key: "defaultZoneName",
    get: function() {
      return r.defaultZone.name;
    },
    set: function(n) {
      n ? St = Tr(n) : St = null;
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */
  }, {
    key: "defaultZone",
    get: function() {
      return St || du.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultLocale",
    get: function() {
      return yi;
    },
    set: function(n) {
      yi = n;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function() {
      return pi;
    },
    set: function(n) {
      pi = n;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function() {
      return gi;
    },
    set: function(n) {
      gi = n;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function() {
      return bi;
    },
    set: function(n) {
      bi = n;
    }
  }]), r;
}(), Qt = {};
function Kt(r, e) {
  e === void 0 && (e = {});
  var n = JSON.stringify([r, e]), t = Qt[n];
  return t || (t = new Intl.DateTimeFormat(r, e), Qt[n] = t), t;
}
var rn = {};
function HA(r, e) {
  e === void 0 && (e = {});
  var n = JSON.stringify([r, e]), t = rn[n];
  return t || (t = new Intl.NumberFormat(r, e), rn[n] = t), t;
}
var en = {};
function GA(r, e) {
  e === void 0 && (e = {});
  var n = e;
  n.base;
  var t = gA(n, ["base"]), a = JSON.stringify([r, t]), i = en[a];
  return i || (i = new Intl.RelativeTimeFormat(r, e), en[a] = i), i;
}
var Sr = null;
function WA() {
  if (Sr)
    return Sr;
  if (hr()) {
    var r = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Sr = !r || r === "und" ? "en-US" : r, Sr;
  } else
    return Sr = "en-US", Sr;
}
function qA(r) {
  var e = r.indexOf("-u-");
  if (e === -1)
    return [r];
  var n, t = r.substring(0, e);
  try {
    n = Kt(r).resolvedOptions();
  } catch {
    n = Kt(t).resolvedOptions();
  }
  var a = n, i = a.numberingSystem, l = a.calendar;
  return [t, i, l];
}
function YA(r, e, n) {
  return hr() ? ((n || e) && (r += "-u", n && (r += "-ca-" + n), e && (r += "-nu-" + e)), r) : [];
}
function JA(r) {
  for (var e = [], n = 1; n <= 12; n++) {
    var t = U.utc(2016, n, 1);
    e.push(r(t));
  }
  return e;
}
function XA(r) {
  for (var e = [], n = 1; n <= 7; n++) {
    var t = U.utc(2016, 11, 13 + n);
    e.push(r(t));
  }
  return e;
}
function Ae(r, e, n, t, a) {
  var i = r.listingMode(n);
  return i === "error" ? null : i === "en" ? t(e) : a(e);
}
function QA(r) {
  return r.numberingSystem && r.numberingSystem !== "latn" ? !1 : r.numberingSystem === "latn" || !r.locale || r.locale.startsWith("en") || hr() && new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem === "latn";
}
var KA = /* @__PURE__ */ function() {
  function r(n, t, a) {
    if (this.padTo = a.padTo || 0, this.floor = a.floor || !1, !t && hr()) {
      var i = {
        useGrouping: !1
      };
      a.padTo > 0 && (i.minimumIntegerDigits = a.padTo), this.inf = HA(n, i);
    }
  }
  var e = r.prototype;
  return e.format = function(t) {
    if (this.inf) {
      var a = this.floor ? Math.floor(t) : t;
      return this.inf.format(a);
    } else {
      var i = this.floor ? Math.floor(t) : Qn(t, 3);
      return Rr(i, this.padTo);
    }
  }, r;
}(), rC = /* @__PURE__ */ function() {
  function r(n, t, a) {
    this.opts = a, this.hasIntl = hr();
    var i;
    if (n.zone.universal && this.hasIntl) {
      var l = -1 * (n.offset / 60), o = l >= 0 ? "Etc/GMT+" + l : "Etc/GMT" + l, c = vr.isValidZone(o);
      n.offset !== 0 && c ? (i = o, this.dt = n) : (i = "UTC", a.timeZoneName ? this.dt = n : this.dt = n.offset === 0 ? n : U.fromMillis(n.ts + n.offset * 60 * 1e3));
    } else
      n.zone.type === "local" ? this.dt = n : (this.dt = n, i = n.zone.name);
    if (this.hasIntl) {
      var h = Object.assign({}, this.opts);
      i && (h.timeZone = i), this.dtf = Kt(t, h);
    }
  }
  var e = r.prototype;
  return e.format = function() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    var t = UA(this.opts), a = j.create("en-US");
    return cr.create(a).formatDateTimeFromString(this.dt, t);
  }, e.formatToParts = function() {
    return this.hasIntl && me() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }, e.resolvedOptions = function() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }, r;
}(), eC = /* @__PURE__ */ function() {
  function r(n, t, a) {
    this.opts = Object.assign({
      style: "long"
    }, a), !t && tu() && (this.rtf = GA(n, a));
  }
  var e = r.prototype;
  return e.format = function(t, a) {
    return this.rtf ? this.rtf.format(t, a) : PA(a, t, this.opts.numeric, this.opts.style !== "long");
  }, e.formatToParts = function(t, a) {
    return this.rtf ? this.rtf.formatToParts(t, a) : [];
  }, r;
}(), j = /* @__PURE__ */ function() {
  r.fromOpts = function(t) {
    return r.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }, r.create = function(t, a, i, l) {
    l === void 0 && (l = !1);
    var o = t || P.defaultLocale, c = o || (l ? "en-US" : WA()), h = a || P.defaultNumberingSystem, y = i || P.defaultOutputCalendar;
    return new r(c, h, y, o);
  }, r.resetCache = function() {
    Sr = null, Qt = {}, rn = {}, en = {};
  }, r.fromObject = function(t) {
    var a = t === void 0 ? {} : t, i = a.locale, l = a.numberingSystem, o = a.outputCalendar;
    return r.create(i, l, o);
  };
  function r(n, t, a, i) {
    var l = qA(n), o = l[0], c = l[1], h = l[2];
    this.locale = o, this.numberingSystem = t || c || null, this.outputCalendar = a || h || null, this.intl = YA(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  var e = r.prototype;
  return e.listingMode = function(t) {
    t === void 0 && (t = !0);
    var a = hr(), i = a && me(), l = this.isEnglish(), o = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !i && !(l && o) && !t ? "error" : !i || l && o ? "en" : "intl";
  }, e.clone = function(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : r.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1);
  }, e.redefaultToEN = function(t) {
    return t === void 0 && (t = {}), this.clone(Object.assign({}, t, {
      defaultToEN: !0
    }));
  }, e.redefaultToSystem = function(t) {
    return t === void 0 && (t = {}), this.clone(Object.assign({}, t, {
      defaultToEN: !1
    }));
  }, e.months = function(t, a, i) {
    var l = this;
    return a === void 0 && (a = !1), i === void 0 && (i = !0), Ae(this, t, i, uu, function() {
      var o = a ? {
        month: t,
        day: "numeric"
      } : {
        month: t
      }, c = a ? "format" : "standalone";
      return l.monthsCache[c][t] || (l.monthsCache[c][t] = JA(function(h) {
        return l.extract(h, o, "month");
      })), l.monthsCache[c][t];
    });
  }, e.weekdays = function(t, a, i) {
    var l = this;
    return a === void 0 && (a = !1), i === void 0 && (i = !0), Ae(this, t, i, cu, function() {
      var o = a ? {
        weekday: t,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: t
      }, c = a ? "format" : "standalone";
      return l.weekdaysCache[c][t] || (l.weekdaysCache[c][t] = XA(function(h) {
        return l.extract(h, o, "weekday");
      })), l.weekdaysCache[c][t];
    });
  }, e.meridiems = function(t) {
    var a = this;
    return t === void 0 && (t = !0), Ae(this, void 0, t, function() {
      return vu;
    }, function() {
      if (!a.meridiemCache) {
        var i = {
          hour: "numeric",
          hour12: !0
        };
        a.meridiemCache = [U.utc(2016, 11, 13, 9), U.utc(2016, 11, 13, 19)].map(function(l) {
          return a.extract(l, i, "dayperiod");
        });
      }
      return a.meridiemCache;
    });
  }, e.eras = function(t, a) {
    var i = this;
    return a === void 0 && (a = !0), Ae(this, t, a, hu, function() {
      var l = {
        era: t
      };
      return i.eraCache[t] || (i.eraCache[t] = [U.utc(-40, 1, 1), U.utc(2017, 1, 1)].map(function(o) {
        return i.extract(o, l, "era");
      })), i.eraCache[t];
    });
  }, e.extract = function(t, a, i) {
    var l = this.dtFormatter(t, a), o = l.formatToParts(), c = o.find(function(h) {
      return h.type.toLowerCase() === i;
    });
    return c ? c.value : null;
  }, e.numberFormatter = function(t) {
    return t === void 0 && (t = {}), new KA(this.intl, t.forceSimple || this.fastNumbers, t);
  }, e.dtFormatter = function(t, a) {
    return a === void 0 && (a = {}), new rC(t, this.intl, a);
  }, e.relFormatter = function(t) {
    return t === void 0 && (t = {}), new eC(this.intl, this.isEnglish(), t);
  }, e.isEnglish = function() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hr() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }, e.equals = function(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }, or(r, [{
    key: "fastNumbers",
    get: function() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = QA(this)), this.fastNumbersCached;
    }
  }]), r;
}();
function Jr() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  var t = e.reduce(function(a, i) {
    return a + i.source;
  }, "");
  return RegExp("^" + t + "$");
}
function Ar() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return function(t) {
    return e.reduce(function(a, i) {
      var l = a[0], o = a[1], c = a[2], h = i(t, c), y = h[0], m = h[1], p = h[2];
      return [Object.assign(l, y), o || m, p];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function Xr(r) {
  if (r == null)
    return [null, null];
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
    n[t - 1] = arguments[t];
  for (var a = 0, i = n; a < i.length; a++) {
    var l = i[a], o = l[0], c = l[1], h = o.exec(r);
    if (h)
      return c(h);
  }
  return [null, null];
}
function mu() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return function(t, a) {
    var i = {}, l;
    for (l = 0; l < e.length; l++)
      i[e[l]] = H(t[a + l]);
    return [i, null, a + l];
  };
}
var yu = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, ra = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, pu = RegExp("" + ra.source + yu.source + "?"), ea = RegExp("(?:T" + pu.source + ")?"), tC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, nC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, aC = /(\d{4})-?(\d{3})/, iC = mu("weekYear", "weekNumber", "weekDay"), oC = mu("year", "ordinal"), sC = /(\d{4})-(\d\d)-(\d\d)/, gu = RegExp(ra.source + " ?(?:" + yu.source + "|(" + ou.source + "))?"), uC = RegExp("(?: " + gu.source + ")?");
function jr(r, e, n) {
  var t = r[e];
  return I(t) ? n : H(t);
}
function bu(r, e) {
  var n = {
    year: jr(r, e),
    month: jr(r, e + 1, 1),
    day: jr(r, e + 2, 1)
  };
  return [n, null, e + 3];
}
function Cr(r, e) {
  var n = {
    hours: jr(r, e, 0),
    minutes: jr(r, e + 1, 0),
    seconds: jr(r, e + 2, 0),
    milliseconds: Xn(r[e + 3])
  };
  return [n, null, e + 4];
}
function Qr(r, e) {
  var n = !r[e] && !r[e + 1], t = tt(r[e + 1], r[e + 2]), a = n ? null : q.instance(t);
  return [{}, a, e + 3];
}
function $u(r, e) {
  var n = r[e] ? vr.create(r[e]) : null;
  return [{}, n, e + 1];
}
var lC = RegExp("^T?" + ra.source + "$"), fC = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function cC(r) {
  var e = r[0], n = r[1], t = r[2], a = r[3], i = r[4], l = r[5], o = r[6], c = r[7], h = r[8], y = e[0] === "-", m = c && c[0] === "-", p = function(S, E) {
    return E === void 0 && (E = !1), S !== void 0 && (E || S && y) ? -S : S;
  };
  return [{
    years: p(H(n)),
    months: p(H(t)),
    weeks: p(H(a)),
    days: p(H(i)),
    hours: p(H(l)),
    minutes: p(H(o)),
    seconds: p(H(c), c === "-0"),
    milliseconds: p(Xn(h), m)
  }];
}
var vC = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ta(r, e, n, t, a, i, l) {
  var o = {
    year: e.length === 2 ? Jt(H(e)) : H(e),
    month: su.indexOf(n) + 1,
    day: H(t),
    hour: H(a),
    minute: H(i)
  };
  return l && (o.second = H(l)), r && (o.weekday = r.length > 3 ? lu.indexOf(r) + 1 : fu.indexOf(r) + 1), o;
}
var hC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function dC(r) {
  var e = r[1], n = r[2], t = r[3], a = r[4], i = r[5], l = r[6], o = r[7], c = r[8], h = r[9], y = r[10], m = r[11], p = ta(e, a, t, n, i, l, o), $;
  return c ? $ = vC[c] : h ? $ = 0 : $ = tt(y, m), [p, new q($)];
}
function mC(r) {
  return r.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var yC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, pC = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, gC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function $i(r) {
  var e = r[1], n = r[2], t = r[3], a = r[4], i = r[5], l = r[6], o = r[7], c = ta(e, a, t, n, i, l, o);
  return [c, q.utcInstance];
}
function bC(r) {
  var e = r[1], n = r[2], t = r[3], a = r[4], i = r[5], l = r[6], o = r[7], c = ta(e, o, n, t, a, i, l);
  return [c, q.utcInstance];
}
var $C = Jr(tC, ea), wC = Jr(nC, ea), SC = Jr(aC, ea), TC = Jr(pu), EC = Ar(bu, Cr, Qr), OC = Ar(iC, Cr, Qr), xC = Ar(oC, Cr, Qr), IC = Ar(Cr, Qr);
function _C(r) {
  return Xr(r, [$C, EC], [wC, OC], [SC, xC], [TC, IC]);
}
function AC(r) {
  return Xr(mC(r), [hC, dC]);
}
function CC(r) {
  return Xr(r, [yC, $i], [pC, $i], [gC, bC]);
}
function NC(r) {
  return Xr(r, [fC, cC]);
}
var FC = Ar(Cr);
function MC(r) {
  return Xr(r, [lC, FC]);
}
var kC = Jr(sC, uC), DC = Jr(gu), LC = Ar(bu, Cr, Qr, $u), PC = Ar(Cr, Qr, $u);
function UC(r) {
  return Xr(r, [kC, LC], [DC, PC]);
}
var RC = "Invalid Duration", wu = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, jC = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, wu), X = 146097 / 400, Mr = 146097 / 4800, VC = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: X / 7,
    days: X,
    hours: X * 24,
    minutes: X * 24 * 60,
    seconds: X * 24 * 60 * 60,
    milliseconds: X * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: X / 28,
    days: X / 4,
    hours: X * 24 / 4,
    minutes: X * 24 * 60 / 4,
    seconds: X * 24 * 60 * 60 / 4,
    milliseconds: X * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Mr / 7,
    days: Mr,
    hours: Mr * 24,
    minutes: Mr * 24 * 60,
    seconds: Mr * 24 * 60 * 60,
    milliseconds: Mr * 24 * 60 * 60 * 1e3
  }
}, wu), Dr = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], BC = Dr.slice(0).reverse();
function wr(r, e, n) {
  n === void 0 && (n = !1);
  var t = {
    values: n ? e.values : Object.assign({}, r.values, e.values || {}),
    loc: r.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy
  };
  return new G(t);
}
function zC(r) {
  return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function Su(r, e, n, t, a) {
  var i = r[a][n], l = e[n] / i, o = Math.sign(l) === Math.sign(t[a]), c = !o && t[a] !== 0 && Math.abs(l) <= 1 ? zC(l) : Math.trunc(l);
  t[a] += c, e[n] -= c * i;
}
function ZC(r, e) {
  BC.reduce(function(n, t) {
    return I(e[t]) ? n : (n && Su(r, e, n, e, t), t);
  }, null);
}
var G = /* @__PURE__ */ function() {
  function r(n) {
    var t = n.conversionAccuracy === "longterm" || !1;
    this.values = n.values, this.loc = n.loc || j.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = n.invalid || null, this.matrix = t ? VC : jC, this.isLuxonDuration = !0;
  }
  r.fromMillis = function(t, a) {
    return r.fromObject(Object.assign({
      milliseconds: t
    }, a));
  }, r.fromObject = function(t) {
    if (t == null || typeof t != "object")
      throw new K("Duration.fromObject: argument expected to be an object, got " + (t === null ? "null" : typeof t));
    return new r({
      values: Be(t, r.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
        // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: j.fromObject(t),
      conversionAccuracy: t.conversionAccuracy
    });
  }, r.fromISO = function(t, a) {
    var i = NC(t), l = i[0];
    if (l) {
      var o = Object.assign(l, a);
      return r.fromObject(o);
    } else
      return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.fromISOTime = function(t, a) {
    var i = MC(t), l = i[0];
    if (l) {
      var o = Object.assign(l, a);
      return r.fromObject(o);
    } else
      return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.invalid = function(t, a) {
    if (a === void 0 && (a = null), !t)
      throw new K("need to specify a reason the Duration is invalid");
    var i = t instanceof ir ? t : new ir(t, a);
    if (P.throwOnInvalid)
      throw new SA(i);
    return new r({
      invalid: i
    });
  }, r.normalizeUnit = function(t) {
    var a = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[t && t.toLowerCase()];
    if (!a)
      throw new Ks(t);
    return a;
  }, r.isDuration = function(t) {
    return t && t.isLuxonDuration || !1;
  };
  var e = r.prototype;
  return e.toFormat = function(t, a) {
    a === void 0 && (a = {});
    var i = Object.assign({}, a, {
      floor: a.round !== !1 && a.floor !== !1
    });
    return this.isValid ? cr.create(this.loc, i).formatDurationFromString(this, t) : RC;
  }, e.toObject = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return {};
    var a = Object.assign({}, this.values);
    return t.includeConfig && (a.conversionAccuracy = this.conversionAccuracy, a.numberingSystem = this.loc.numberingSystem, a.locale = this.loc.locale), a;
  }, e.toISO = function() {
    if (!this.isValid)
      return null;
    var t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += Qn(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }, e.toISOTime = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return null;
    var a = this.toMillis();
    if (a < 0 || a >= 864e5)
      return null;
    t = Object.assign({
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended"
    }, t);
    var i = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), l = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || i.seconds !== 0 || i.milliseconds !== 0) && (l += t.format === "basic" ? "ss" : ":ss", (!t.suppressMilliseconds || i.milliseconds !== 0) && (l += ".SSS"));
    var o = i.toFormat(l);
    return t.includePrefix && (o = "T" + o), o;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toString = function() {
    return this.toISO();
  }, e.toMillis = function() {
    return this.as("milliseconds");
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.plus = function(t) {
    if (!this.isValid)
      return this;
    for (var a = Or(t), i = {}, l = br(Dr), o; !(o = l()).done; ) {
      var c = o.value;
      (Vr(a.values, c) || Vr(this.values, c)) && (i[c] = a.get(c) + this.get(c));
    }
    return wr(this, {
      values: i
    }, !0);
  }, e.minus = function(t) {
    if (!this.isValid)
      return this;
    var a = Or(t);
    return this.plus(a.negate());
  }, e.mapUnits = function(t) {
    if (!this.isValid)
      return this;
    for (var a = {}, i = 0, l = Object.keys(this.values); i < l.length; i++) {
      var o = l[i];
      a[o] = iu(t(this.values[o], o));
    }
    return wr(this, {
      values: a
    }, !0);
  }, e.get = function(t) {
    return this[r.normalizeUnit(t)];
  }, e.set = function(t) {
    if (!this.isValid)
      return this;
    var a = Object.assign(this.values, Be(t, r.normalizeUnit, []));
    return wr(this, {
      values: a
    });
  }, e.reconfigure = function(t) {
    var a = t === void 0 ? {} : t, i = a.locale, l = a.numberingSystem, o = a.conversionAccuracy, c = this.loc.clone({
      locale: i,
      numberingSystem: l
    }), h = {
      loc: c
    };
    return o && (h.conversionAccuracy = o), wr(this, h);
  }, e.as = function(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }, e.normalize = function() {
    if (!this.isValid)
      return this;
    var t = this.toObject();
    return ZC(this.matrix, t), wr(this, {
      values: t
    }, !0);
  }, e.shiftTo = function() {
    for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
      a[i] = arguments[i];
    if (!this.isValid)
      return this;
    if (a.length === 0)
      return this;
    a = a.map(function(L) {
      return r.normalizeUnit(L);
    });
    for (var l = {}, o = {}, c = this.toObject(), h, y = br(Dr), m; !(m = y()).done; ) {
      var p = m.value;
      if (a.indexOf(p) >= 0) {
        h = p;
        var $ = 0;
        for (var S in o)
          $ += this.matrix[S][p] * o[S], o[S] = 0;
        xr(c[p]) && ($ += c[p]);
        var E = Math.trunc($);
        l[p] = E, o[p] = $ - E;
        for (var O in c)
          Dr.indexOf(O) > Dr.indexOf(p) && Su(this.matrix, c, O, l, p);
      } else
        xr(c[p]) && (o[p] = c[p]);
    }
    for (var T in o)
      o[T] !== 0 && (l[h] += T === h ? o[T] : o[T] / this.matrix[h][T]);
    return wr(this, {
      values: l
    }, !0).normalize();
  }, e.negate = function() {
    if (!this.isValid)
      return this;
    for (var t = {}, a = 0, i = Object.keys(this.values); a < i.length; a++) {
      var l = i[a];
      t[l] = -this.values[l];
    }
    return wr(this, {
      values: t
    }, !0);
  }, e.equals = function(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function a(c, h) {
      return c === void 0 || c === 0 ? h === void 0 || h === 0 : c === h;
    }
    for (var i = br(Dr), l; !(l = i()).done; ) {
      var o = l.value;
      if (!a(this.values[o], t.values[o]))
        return !1;
    }
    return !0;
  }, or(r, [{
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}();
function Or(r) {
  if (xr(r))
    return G.fromMillis(r);
  if (G.isDuration(r))
    return r;
  if (typeof r == "object")
    return G.fromObject(r);
  throw new K("Unknown duration argument " + r + " of type " + typeof r);
}
var te = "Invalid Interval";
function HC(r, e) {
  return !r || !r.isValid ? ce.invalid("missing or invalid start") : !e || !e.isValid ? ce.invalid("missing or invalid end") : e < r ? ce.invalid("end before start", "The end of an interval must be after its start, but you had start=" + r.toISO() + " and end=" + e.toISO()) : null;
}
var ce = /* @__PURE__ */ function() {
  function r(n) {
    this.s = n.start, this.e = n.end, this.invalid = n.invalid || null, this.isLuxonInterval = !0;
  }
  r.invalid = function(t, a) {
    if (a === void 0 && (a = null), !t)
      throw new K("need to specify a reason the Interval is invalid");
    var i = t instanceof ir ? t : new ir(t, a);
    if (P.throwOnInvalid)
      throw new wA(i);
    return new r({
      invalid: i
    });
  }, r.fromDateTimes = function(t, a) {
    var i = ie(t), l = ie(a), o = HC(i, l);
    return o ?? new r({
      start: i,
      end: l
    });
  }, r.after = function(t, a) {
    var i = Or(a), l = ie(t);
    return r.fromDateTimes(l, l.plus(i));
  }, r.before = function(t, a) {
    var i = Or(a), l = ie(t);
    return r.fromDateTimes(l.minus(i), l);
  }, r.fromISO = function(t, a) {
    var i = (t || "").split("/", 2), l = i[0], o = i[1];
    if (l && o) {
      var c, h;
      try {
        c = U.fromISO(l, a), h = c.isValid;
      } catch {
        h = !1;
      }
      var y, m;
      try {
        y = U.fromISO(o, a), m = y.isValid;
      } catch {
        m = !1;
      }
      if (h && m)
        return r.fromDateTimes(c, y);
      if (h) {
        var p = G.fromISO(o, a);
        if (p.isValid)
          return r.after(c, p);
      } else if (m) {
        var $ = G.fromISO(l, a);
        if ($.isValid)
          return r.before(y, $);
      }
    }
    return r.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
  }, r.isInterval = function(t) {
    return t && t.isLuxonInterval || !1;
  };
  var e = r.prototype;
  return e.length = function(t) {
    return t === void 0 && (t = "milliseconds"), this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN;
  }, e.count = function(t) {
    if (t === void 0 && (t = "milliseconds"), !this.isValid)
      return NaN;
    var a = this.start.startOf(t), i = this.end.startOf(t);
    return Math.floor(i.diff(a, t).get(t)) + 1;
  }, e.hasSame = function(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }, e.isEmpty = function() {
    return this.s.valueOf() === this.e.valueOf();
  }, e.isAfter = function(t) {
    return this.isValid ? this.s > t : !1;
  }, e.isBefore = function(t) {
    return this.isValid ? this.e <= t : !1;
  }, e.contains = function(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }, e.set = function(t) {
    var a = t === void 0 ? {} : t, i = a.start, l = a.end;
    return this.isValid ? r.fromDateTimes(i || this.s, l || this.e) : this;
  }, e.splitAt = function() {
    var t = this;
    if (!this.isValid)
      return [];
    for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
      i[l] = arguments[l];
    for (var o = i.map(ie).filter(function($) {
      return t.contains($);
    }).sort(), c = [], h = this.s, y = 0; h < this.e; ) {
      var m = o[y] || this.e, p = +m > +this.e ? this.e : m;
      c.push(r.fromDateTimes(h, p)), h = p, y += 1;
    }
    return c;
  }, e.splitBy = function(t) {
    var a = Or(t);
    if (!this.isValid || !a.isValid || a.as("milliseconds") === 0)
      return [];
    for (var i = this.s, l = 1, o, c = []; i < this.e; ) {
      var h = this.start.plus(a.mapUnits(function(y) {
        return y * l;
      }));
      o = +h > +this.e ? this.e : h, c.push(r.fromDateTimes(i, o)), i = o, l += 1;
    }
    return c;
  }, e.divideEqually = function(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }, e.overlaps = function(t) {
    return this.e > t.s && this.s < t.e;
  }, e.abutsStart = function(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }, e.abutsEnd = function(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }, e.engulfs = function(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }, e.equals = function(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }, e.intersection = function(t) {
    if (!this.isValid)
      return this;
    var a = this.s > t.s ? this.s : t.s, i = this.e < t.e ? this.e : t.e;
    return a >= i ? null : r.fromDateTimes(a, i);
  }, e.union = function(t) {
    if (!this.isValid)
      return this;
    var a = this.s < t.s ? this.s : t.s, i = this.e > t.e ? this.e : t.e;
    return r.fromDateTimes(a, i);
  }, r.merge = function(t) {
    var a = t.sort(function(o, c) {
      return o.s - c.s;
    }).reduce(function(o, c) {
      var h = o[0], y = o[1];
      return y ? y.overlaps(c) || y.abutsStart(c) ? [h, y.union(c)] : [h.concat([y]), c] : [h, c];
    }, [[], null]), i = a[0], l = a[1];
    return l && i.push(l), i;
  }, r.xor = function(t) {
    for (var a, i = null, l = 0, o = [], c = t.map(function(S) {
      return [{
        time: S.s,
        type: "s"
      }, {
        time: S.e,
        type: "e"
      }];
    }), h = (a = Array.prototype).concat.apply(a, c), y = h.sort(function(S, E) {
      return S.time - E.time;
    }), m = br(y), p; !(p = m()).done; ) {
      var $ = p.value;
      l += $.type === "s" ? 1 : -1, l === 1 ? i = $.time : (i && +i != +$.time && o.push(r.fromDateTimes(i, $.time)), i = null);
    }
    return r.merge(o);
  }, e.difference = function() {
    for (var t = this, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
      i[l] = arguments[l];
    return r.xor([this].concat(i)).map(function(o) {
      return t.intersection(o);
    }).filter(function(o) {
      return o && !o.isEmpty();
    });
  }, e.toString = function() {
    return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : te;
  }, e.toISO = function(t) {
    return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : te;
  }, e.toISODate = function() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : te;
  }, e.toISOTime = function(t) {
    return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : te;
  }, e.toFormat = function(t, a) {
    var i = a === void 0 ? {} : a, l = i.separator, o = l === void 0 ? " – " : l;
    return this.isValid ? "" + this.s.toFormat(t) + o + this.e.toFormat(t) : te;
  }, e.toDuration = function(t, a) {
    return this.isValid ? this.e.diff(this.s, t, a) : G.invalid(this.invalidReason);
  }, e.mapEndpoints = function(t) {
    return r.fromDateTimes(t(this.s), t(this.e));
  }, or(r, [{
    key: "start",
    get: function() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), r;
}(), se = /* @__PURE__ */ function() {
  function r() {
  }
  return r.hasDST = function(n) {
    n === void 0 && (n = P.defaultZone);
    var t = U.now().setZone(n).set({
      month: 12
    });
    return !n.universal && t.offset !== t.set({
      month: 6
    }).offset;
  }, r.isValidIANAZone = function(n) {
    return vr.isValidSpecifier(n) && vr.isValidZone(n);
  }, r.normalizeZone = function(n) {
    return Tr(n, P.defaultZone);
  }, r.months = function(n, t) {
    n === void 0 && (n = "long");
    var a = t === void 0 ? {} : t, i = a.locale, l = i === void 0 ? null : i, o = a.numberingSystem, c = o === void 0 ? null : o, h = a.locObj, y = h === void 0 ? null : h, m = a.outputCalendar, p = m === void 0 ? "gregory" : m;
    return (y || j.create(l, c, p)).months(n);
  }, r.monthsFormat = function(n, t) {
    n === void 0 && (n = "long");
    var a = t === void 0 ? {} : t, i = a.locale, l = i === void 0 ? null : i, o = a.numberingSystem, c = o === void 0 ? null : o, h = a.locObj, y = h === void 0 ? null : h, m = a.outputCalendar, p = m === void 0 ? "gregory" : m;
    return (y || j.create(l, c, p)).months(n, !0);
  }, r.weekdays = function(n, t) {
    n === void 0 && (n = "long");
    var a = t === void 0 ? {} : t, i = a.locale, l = i === void 0 ? null : i, o = a.numberingSystem, c = o === void 0 ? null : o, h = a.locObj, y = h === void 0 ? null : h;
    return (y || j.create(l, c, null)).weekdays(n);
  }, r.weekdaysFormat = function(n, t) {
    n === void 0 && (n = "long");
    var a = t === void 0 ? {} : t, i = a.locale, l = i === void 0 ? null : i, o = a.numberingSystem, c = o === void 0 ? null : o, h = a.locObj, y = h === void 0 ? null : h;
    return (y || j.create(l, c, null)).weekdays(n, !0);
  }, r.meridiems = function(n) {
    var t = n === void 0 ? {} : n, a = t.locale, i = a === void 0 ? null : a;
    return j.create(i).meridiems();
  }, r.eras = function(n, t) {
    n === void 0 && (n = "short");
    var a = t === void 0 ? {} : t, i = a.locale, l = i === void 0 ? null : i;
    return j.create(l, null, "gregory").eras(n);
  }, r.features = function() {
    var n = !1, t = !1, a = !1, i = !1;
    if (hr()) {
      n = !0, t = me(), i = tu();
      try {
        a = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        a = !1;
      }
    }
    return {
      intl: n,
      intlTokens: t,
      zones: a,
      relative: i
    };
  }, r;
}();
function wi(r, e) {
  var n = function(i) {
    return i.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf();
  }, t = n(e) - n(r);
  return Math.floor(G.fromMillis(t).as("days"));
}
function GC(r, e, n) {
  for (var t = [["years", function(E, O) {
    return O.year - E.year;
  }], ["quarters", function(E, O) {
    return O.quarter - E.quarter;
  }], ["months", function(E, O) {
    return O.month - E.month + (O.year - E.year) * 12;
  }], ["weeks", function(E, O) {
    var T = wi(E, O);
    return (T - T % 7) / 7;
  }], ["days", wi]], a = {}, i, l, o = 0, c = t; o < c.length; o++) {
    var h = c[o], y = h[0], m = h[1];
    if (n.indexOf(y) >= 0) {
      var p;
      i = y;
      var $ = m(r, e);
      if (l = r.plus((p = {}, p[y] = $, p)), l > e) {
        var S;
        r = r.plus((S = {}, S[y] = $ - 1, S)), $ -= 1;
      } else
        r = l;
      a[y] = $;
    }
  }
  return [r, a, l, i];
}
function WC(r, e, n, t) {
  var a = GC(r, e, n), i = a[0], l = a[1], o = a[2], c = a[3], h = e - i, y = n.filter(function(S) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(S) >= 0;
  });
  if (y.length === 0) {
    if (o < e) {
      var m;
      o = i.plus((m = {}, m[c] = 1, m));
    }
    o !== i && (l[c] = (l[c] || 0) + h / (o - i));
  }
  var p = G.fromObject(Object.assign(l, t));
  if (y.length > 0) {
    var $;
    return ($ = G.fromMillis(h, t)).shiftTo.apply($, y).plus(p);
  } else
    return p;
}
var na = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Si = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, qC = na.hanidec.replace(/[\[|\]]/g, "").split("");
function YC(r) {
  var e = parseInt(r, 10);
  if (isNaN(e)) {
    e = "";
    for (var n = 0; n < r.length; n++) {
      var t = r.charCodeAt(n);
      if (r[n].search(na.hanidec) !== -1)
        e += qC.indexOf(r[n]);
      else
        for (var a in Si) {
          var i = Si[a], l = i[0], o = i[1];
          t >= l && t <= o && (e += t - l);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function nr(r, e) {
  var n = r.numberingSystem;
  return e === void 0 && (e = ""), new RegExp("" + na[n || "latn"] + e);
}
var JC = "missing Intl.DateTimeFormat.formatToParts support";
function A(r, e) {
  return e === void 0 && (e = function(t) {
    return t;
  }), {
    regex: r,
    deser: function(t) {
      var a = t[0];
      return e(YC(a));
    }
  };
}
var XC = String.fromCharCode(160), Tu = "( |" + XC + ")", Eu = new RegExp(Tu, "g");
function QC(r) {
  return r.replace(/\./g, "\\.?").replace(Eu, Tu);
}
function Ti(r) {
  return r.replace(/\./g, "").replace(Eu, " ").toLowerCase();
}
function ar(r, e) {
  return r === null ? null : {
    regex: RegExp(r.map(QC).join("|")),
    deser: function(t) {
      var a = t[0];
      return r.findIndex(function(i) {
        return Ti(a) === Ti(i);
      }) + e;
    }
  };
}
function Ei(r, e) {
  return {
    regex: r,
    deser: function(t) {
      var a = t[1], i = t[2];
      return tt(a, i);
    },
    groups: e
  };
}
function Oi(r) {
  return {
    regex: r,
    deser: function(n) {
      var t = n[0];
      return t;
    }
  };
}
function KC(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function rN(r, e) {
  var n = nr(e), t = nr(e, "{2}"), a = nr(e, "{3}"), i = nr(e, "{4}"), l = nr(e, "{6}"), o = nr(e, "{1,2}"), c = nr(e, "{1,3}"), h = nr(e, "{1,6}"), y = nr(e, "{1,9}"), m = nr(e, "{2,4}"), p = nr(e, "{4,6}"), $ = function(T) {
    return {
      regex: RegExp(KC(T.val)),
      deser: function(pr) {
        var dr = pr[0];
        return dr;
      },
      literal: !0
    };
  }, S = function(T) {
    if (r.literal)
      return $(T);
    switch (T.val) {
      case "G":
        return ar(e.eras("short", !1), 0);
      case "GG":
        return ar(e.eras("long", !1), 0);
      case "y":
        return A(h);
      case "yy":
        return A(m, Jt);
      case "yyyy":
        return A(i);
      case "yyyyy":
        return A(p);
      case "yyyyyy":
        return A(l);
      case "M":
        return A(o);
      case "MM":
        return A(t);
      case "MMM":
        return ar(e.months("short", !0, !1), 1);
      case "MMMM":
        return ar(e.months("long", !0, !1), 1);
      case "L":
        return A(o);
      case "LL":
        return A(t);
      case "LLL":
        return ar(e.months("short", !1, !1), 1);
      case "LLLL":
        return ar(e.months("long", !1, !1), 1);
      case "d":
        return A(o);
      case "dd":
        return A(t);
      case "o":
        return A(c);
      case "ooo":
        return A(a);
      case "HH":
        return A(t);
      case "H":
        return A(o);
      case "hh":
        return A(t);
      case "h":
        return A(o);
      case "mm":
        return A(t);
      case "m":
        return A(o);
      case "q":
        return A(o);
      case "qq":
        return A(t);
      case "s":
        return A(o);
      case "ss":
        return A(t);
      case "S":
        return A(c);
      case "SSS":
        return A(a);
      case "u":
        return Oi(y);
      case "a":
        return ar(e.meridiems(), 0);
      case "kkkk":
        return A(i);
      case "kk":
        return A(m, Jt);
      case "W":
        return A(o);
      case "WW":
        return A(t);
      case "E":
      case "c":
        return A(n);
      case "EEE":
        return ar(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return ar(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return ar(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return ar(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Ei(new RegExp("([+-]" + o.source + ")(?::(" + t.source + "))?"), 2);
      case "ZZZ":
        return Ei(new RegExp("([+-]" + o.source + ")(" + t.source + ")?"), 2);
      case "z":
        return Oi(/[a-z_+-/]{1,256}?/i);
      default:
        return $(T);
    }
  }, E = S(r) || {
    invalidReason: JC
  };
  return E.token = r, E;
}
var eN = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function tN(r, e, n) {
  var t = r.type, a = r.value;
  if (t === "literal")
    return {
      literal: !0,
      val: a
    };
  var i = n[t], l = eN[t];
  if (typeof l == "object" && (l = l[i]), l)
    return {
      literal: !1,
      val: l
    };
}
function nN(r) {
  var e = r.map(function(n) {
    return n.regex;
  }).reduce(function(n, t) {
    return n + "(" + t.source + ")";
  }, "");
  return ["^" + e + "$", r];
}
function aN(r, e, n) {
  var t = r.match(e);
  if (t) {
    var a = {}, i = 1;
    for (var l in n)
      if (Vr(n, l)) {
        var o = n[l], c = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (a[o.token.val[0]] = o.deser(t.slice(i, i + c))), i += c;
      }
    return [t, a];
  } else
    return [t, {}];
}
function iN(r) {
  var e = function(i) {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  }, n;
  I(r.Z) ? I(r.z) ? n = null : n = vr.create(r.z) : n = new q(r.Z), I(r.q) || (r.M = (r.q - 1) * 3 + 1), I(r.h) || (r.h < 12 && r.a === 1 ? r.h += 12 : r.h === 12 && r.a === 0 && (r.h = 0)), r.G === 0 && r.y && (r.y = -r.y), I(r.u) || (r.S = Xn(r.u));
  var t = Object.keys(r).reduce(function(a, i) {
    var l = e(i);
    return l && (a[l] = r[i]), a;
  }, {});
  return [t, n];
}
var Tt = null;
function oN() {
  return Tt || (Tt = U.fromMillis(1555555555555)), Tt;
}
function sN(r, e) {
  if (r.literal)
    return r;
  var n = cr.macroTokenToFormatOpts(r.val);
  if (!n)
    return r;
  var t = cr.create(e, n), a = t.formatDateTimeParts(oN()), i = a.map(function(l) {
    return tN(l, e, n);
  });
  return i.includes(void 0) ? r : i;
}
function uN(r, e) {
  var n;
  return (n = Array.prototype).concat.apply(n, r.map(function(t) {
    return sN(t, e);
  }));
}
function Ou(r, e, n) {
  var t = uN(cr.parseFormat(n), r), a = t.map(function(O) {
    return rN(O, r);
  }), i = a.find(function(O) {
    return O.invalidReason;
  });
  if (i)
    return {
      input: e,
      tokens: t,
      invalidReason: i.invalidReason
    };
  var l = nN(a), o = l[0], c = l[1], h = RegExp(o, "i"), y = aN(e, h, c), m = y[0], p = y[1], $ = p ? iN(p) : [null, null], S = $[0], E = $[1];
  if (Vr(p, "a") && Vr(p, "H"))
    throw new oe("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: t,
    regex: h,
    rawMatches: m,
    matches: p,
    result: S,
    zone: E
  };
}
function lN(r, e, n) {
  var t = Ou(r, e, n), a = t.result, i = t.zone, l = t.invalidReason;
  return [a, i, l];
}
var xu = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Iu = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function rr(r, e) {
  return new ir("unit out of range", "you specified " + e + " (of type " + typeof e + ") as a " + r + ", which is invalid");
}
function _u(r, e, n) {
  var t = new Date(Date.UTC(r, e - 1, n)).getUTCDay();
  return t === 0 ? 7 : t;
}
function Au(r, e, n) {
  return n + (ye(r) ? Iu : xu)[e - 1];
}
function Cu(r, e) {
  var n = ye(r) ? Iu : xu, t = n.findIndex(function(i) {
    return i < e;
  }), a = e - n[t];
  return {
    month: t + 1,
    day: a
  };
}
function tn(r) {
  var e = r.year, n = r.month, t = r.day, a = Au(e, n, t), i = _u(e, n, t), l = Math.floor((a - i + 10) / 7), o;
  return l < 1 ? (o = e - 1, l = Ve(o)) : l > Ve(e) ? (o = e + 1, l = 1) : o = e, Object.assign({
    weekYear: o,
    weekNumber: l,
    weekday: i
  }, nt(r));
}
function xi(r) {
  var e = r.weekYear, n = r.weekNumber, t = r.weekday, a = _u(e, 1, 4), i = fe(e), l = n * 7 + t - a - 3, o;
  l < 1 ? (o = e - 1, l += fe(o)) : l > i ? (o = e + 1, l -= fe(e)) : o = e;
  var c = Cu(o, l), h = c.month, y = c.day;
  return Object.assign({
    year: o,
    month: h,
    day: y
  }, nt(r));
}
function Et(r) {
  var e = r.year, n = r.month, t = r.day, a = Au(e, n, t);
  return Object.assign({
    year: e,
    ordinal: a
  }, nt(r));
}
function Ii(r) {
  var e = r.year, n = r.ordinal, t = Cu(e, n), a = t.month, i = t.day;
  return Object.assign({
    year: e,
    month: a,
    day: i
  }, nt(r));
}
function fN(r) {
  var e = et(r.weekYear), n = mr(r.weekNumber, 1, Ve(r.weekYear)), t = mr(r.weekday, 1, 7);
  return e ? n ? t ? !1 : rr("weekday", r.weekday) : rr("week", r.week) : rr("weekYear", r.weekYear);
}
function cN(r) {
  var e = et(r.year), n = mr(r.ordinal, 1, fe(r.year));
  return e ? n ? !1 : rr("ordinal", r.ordinal) : rr("year", r.year);
}
function Nu(r) {
  var e = et(r.year), n = mr(r.month, 1, 12), t = mr(r.day, 1, je(r.year, r.month));
  return e ? n ? t ? !1 : rr("day", r.day) : rr("month", r.month) : rr("year", r.year);
}
function Fu(r) {
  var e = r.hour, n = r.minute, t = r.second, a = r.millisecond, i = mr(e, 0, 23) || e === 24 && n === 0 && t === 0 && a === 0, l = mr(n, 0, 59), o = mr(t, 0, 59), c = mr(a, 0, 999);
  return i ? l ? o ? c ? !1 : rr("millisecond", a) : rr("second", t) : rr("minute", n) : rr("hour", e);
}
var Ot = "Invalid DateTime", _i = 864e13;
function Ce(r) {
  return new ir("unsupported zone", 'the zone "' + r.name + '" is not supported');
}
function xt(r) {
  return r.weekData === null && (r.weekData = tn(r.c)), r.weekData;
}
function ne(r, e) {
  var n = {
    ts: r.ts,
    zone: r.zone,
    c: r.c,
    o: r.o,
    loc: r.loc,
    invalid: r.invalid
  };
  return new U(Object.assign({}, n, e, {
    old: n
  }));
}
function Mu(r, e, n) {
  var t = r - e * 60 * 1e3, a = n.offset(t);
  if (e === a)
    return [t, e];
  t -= (a - e) * 60 * 1e3;
  var i = n.offset(t);
  return a === i ? [t, a] : [r - Math.min(a, i) * 60 * 1e3, Math.max(a, i)];
}
function Ai(r, e) {
  r += e * 60 * 1e3;
  var n = new Date(r);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function ke(r, e, n) {
  return Mu(Kn(r), e, n);
}
function Ci(r, e) {
  var n = r.o, t = r.c.year + Math.trunc(e.years), a = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = Object.assign({}, r.c, {
    year: t,
    month: a,
    day: Math.min(r.c.day, je(t, a)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }), l = G.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Kn(i), c = Mu(o, n, r.zone), h = c[0], y = c[1];
  return l !== 0 && (h += l, y = r.zone.offset(h)), {
    ts: h,
    o: y
  };
}
function ae(r, e, n, t, a) {
  var i = n.setZone, l = n.zone;
  if (r && Object.keys(r).length !== 0) {
    var o = e || l, c = U.fromObject(Object.assign(r, n, {
      zone: o,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: void 0
    }));
    return i ? c : c.setZone(l);
  } else
    return U.invalid(new ir("unparsable", 'the input "' + a + `" can't be parsed as ` + t));
}
function Lr(r, e, n) {
  return n === void 0 && (n = !0), r.isValid ? cr.create(j.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(r, e) : null;
}
function Ni(r, e) {
  var n = e.suppressSeconds, t = n === void 0 ? !1 : n, a = e.suppressMilliseconds, i = a === void 0 ? !1 : a, l = e.includeOffset, o = e.includePrefix, c = o === void 0 ? !1 : o, h = e.includeZone, y = h === void 0 ? !1 : h, m = e.spaceZone, p = m === void 0 ? !1 : m, $ = e.format, S = $ === void 0 ? "extended" : $, E = S === "basic" ? "HHmm" : "HH:mm";
  (!t || r.second !== 0 || r.millisecond !== 0) && (E += S === "basic" ? "ss" : ":ss", (!i || r.millisecond !== 0) && (E += ".SSS")), (y || l) && p && (E += " "), y ? E += "z" : l && (E += S === "basic" ? "ZZZ" : "ZZ");
  var O = Lr(r, E);
  return c && (O = "T" + O), O;
}
var ku = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, vN = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, hN = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Du = ["year", "month", "day", "hour", "minute", "second", "millisecond"], dN = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], mN = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Fi(r) {
  var e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[r.toLowerCase()];
  if (!e)
    throw new Ks(r);
  return e;
}
function Mi(r, e) {
  for (var n = br(Du), t; !(t = n()).done; ) {
    var a = t.value;
    I(r[a]) && (r[a] = ku[a]);
  }
  var i = Nu(r) || Fu(r);
  if (i)
    return U.invalid(i);
  var l = P.now(), o = e.offset(l), c = ke(r, o, e), h = c[0], y = c[1];
  return new U({
    ts: h,
    zone: e,
    o: y
  });
}
function ki(r, e, n) {
  var t = I(n.round) ? !0 : n.round, a = function(m, p) {
    m = Qn(m, t || n.calendary ? 0 : 2, !0);
    var $ = e.loc.clone(n).relFormatter(n);
    return $.format(m, p);
  }, i = function(m) {
    return n.calendary ? e.hasSame(r, m) ? 0 : e.startOf(m).diff(r.startOf(m), m).get(m) : e.diff(r, m).get(m);
  };
  if (n.unit)
    return a(i(n.unit), n.unit);
  for (var l = br(n.units), o; !(o = l()).done; ) {
    var c = o.value, h = i(c);
    if (Math.abs(h) >= 1)
      return a(h, c);
  }
  return a(r > e ? -0 : 0, n.units[n.units.length - 1]);
}
var U = /* @__PURE__ */ function() {
  function r(n) {
    var t = n.zone || P.defaultZone, a = n.invalid || (Number.isNaN(n.ts) ? new ir("invalid input") : null) || (t.isValid ? null : Ce(t));
    this.ts = I(n.ts) ? P.now() : n.ts;
    var i = null, l = null;
    if (!a) {
      var o = n.old && n.old.ts === this.ts && n.old.zone.equals(t);
      if (o) {
        var c = [n.old.c, n.old.o];
        i = c[0], l = c[1];
      } else {
        var h = t.offset(this.ts);
        i = Ai(this.ts, h), a = Number.isNaN(i.year) ? new ir("invalid input") : null, i = a ? null : i, l = a ? null : h;
      }
    }
    this._zone = t, this.loc = n.loc || j.create(), this.invalid = a, this.weekData = null, this.c = i, this.o = l, this.isLuxonDateTime = !0;
  }
  r.now = function() {
    return new r({});
  }, r.local = function(t, a, i, l, o, c, h) {
    return I(t) ? r.now() : Mi({
      year: t,
      month: a,
      day: i,
      hour: l,
      minute: o,
      second: c,
      millisecond: h
    }, P.defaultZone);
  }, r.utc = function(t, a, i, l, o, c, h) {
    return I(t) ? new r({
      ts: P.now(),
      zone: q.utcInstance
    }) : Mi({
      year: t,
      month: a,
      day: i,
      hour: l,
      minute: o,
      second: c,
      millisecond: h
    }, q.utcInstance);
  }, r.fromJSDate = function(t, a) {
    a === void 0 && (a = {});
    var i = EA(t) ? t.valueOf() : NaN;
    if (Number.isNaN(i))
      return r.invalid("invalid input");
    var l = Tr(a.zone, P.defaultZone);
    return l.isValid ? new r({
      ts: i,
      zone: l,
      loc: j.fromObject(a)
    }) : r.invalid(Ce(l));
  }, r.fromMillis = function(t, a) {
    if (a === void 0 && (a = {}), xr(t))
      return t < -_i || t > _i ? r.invalid("Timestamp out of range") : new r({
        ts: t,
        zone: Tr(a.zone, P.defaultZone),
        loc: j.fromObject(a)
      });
    throw new K("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t);
  }, r.fromSeconds = function(t, a) {
    if (a === void 0 && (a = {}), xr(t))
      return new r({
        ts: t * 1e3,
        zone: Tr(a.zone, P.defaultZone),
        loc: j.fromObject(a)
      });
    throw new K("fromSeconds requires a numerical input");
  }, r.fromObject = function(t) {
    var a = Tr(t.zone, P.defaultZone);
    if (!a.isValid)
      return r.invalid(Ce(a));
    var i = P.now(), l = a.offset(i), o = Be(t, Fi, ["zone", "locale", "outputCalendar", "numberingSystem"]), c = !I(o.ordinal), h = !I(o.year), y = !I(o.month) || !I(o.day), m = h || y, p = o.weekYear || o.weekNumber, $ = j.fromObject(t);
    if ((m || c) && p)
      throw new oe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (y && c)
      throw new oe("Can't mix ordinal dates with month/day");
    var S = p || o.weekday && !m, E, O, T = Ai(i, l);
    S ? (E = dN, O = vN, T = tn(T)) : c ? (E = mN, O = hN, T = Et(T)) : (E = Du, O = ku);
    for (var L = !1, pr = br(E), dr; !(dr = pr()).done; ) {
      var z = dr.value, pe = o[z];
      I(pe) ? L ? o[z] = O[z] : o[z] = T[z] : L = !0;
    }
    var ge = S ? fN(o) : c ? cN(o) : Nu(o), be = ge || Fu(o);
    if (be)
      return r.invalid(be);
    var it = S ? xi(o) : c ? Ii(o) : o, $e = ke(it, l, a), ot = $e[0], st = $e[1], Kr = new r({
      ts: ot,
      zone: a,
      o: st,
      loc: $
    });
    return o.weekday && m && t.weekday !== Kr.weekday ? r.invalid("mismatched weekday", "you can't specify both a weekday of " + o.weekday + " and a date of " + Kr.toISO()) : Kr;
  }, r.fromISO = function(t, a) {
    a === void 0 && (a = {});
    var i = _C(t), l = i[0], o = i[1];
    return ae(l, o, a, "ISO 8601", t);
  }, r.fromRFC2822 = function(t, a) {
    a === void 0 && (a = {});
    var i = AC(t), l = i[0], o = i[1];
    return ae(l, o, a, "RFC 2822", t);
  }, r.fromHTTP = function(t, a) {
    a === void 0 && (a = {});
    var i = CC(t), l = i[0], o = i[1];
    return ae(l, o, a, "HTTP", a);
  }, r.fromFormat = function(t, a, i) {
    if (i === void 0 && (i = {}), I(t) || I(a))
      throw new K("fromFormat requires an input string and a format");
    var l = i, o = l.locale, c = o === void 0 ? null : o, h = l.numberingSystem, y = h === void 0 ? null : h, m = j.fromOpts({
      locale: c,
      numberingSystem: y,
      defaultToEN: !0
    }), p = lN(m, t, a), $ = p[0], S = p[1], E = p[2];
    return E ? r.invalid(E) : ae($, S, i, "format " + a, t);
  }, r.fromString = function(t, a, i) {
    return i === void 0 && (i = {}), r.fromFormat(t, a, i);
  }, r.fromSQL = function(t, a) {
    a === void 0 && (a = {});
    var i = UC(t), l = i[0], o = i[1];
    return ae(l, o, a, "SQL", t);
  }, r.invalid = function(t, a) {
    if (a === void 0 && (a = null), !t)
      throw new K("need to specify a reason the DateTime is invalid");
    var i = t instanceof ir ? t : new ir(t, a);
    if (P.throwOnInvalid)
      throw new $A(i);
    return new r({
      invalid: i
    });
  }, r.isDateTime = function(t) {
    return t && t.isLuxonDateTime || !1;
  };
  var e = r.prototype;
  return e.get = function(t) {
    return this[t];
  }, e.resolvedLocaleOpts = function(t) {
    t === void 0 && (t = {});
    var a = cr.create(this.loc.clone(t), t).resolvedOptions(this), i = a.locale, l = a.numberingSystem, o = a.calendar;
    return {
      locale: i,
      numberingSystem: l,
      outputCalendar: o
    };
  }, e.toUTC = function(t, a) {
    return t === void 0 && (t = 0), a === void 0 && (a = {}), this.setZone(q.instance(t), a);
  }, e.toLocal = function() {
    return this.setZone(P.defaultZone);
  }, e.setZone = function(t, a) {
    var i = a === void 0 ? {} : a, l = i.keepLocalTime, o = l === void 0 ? !1 : l, c = i.keepCalendarTime, h = c === void 0 ? !1 : c;
    if (t = Tr(t, P.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      var y = this.ts;
      if (o || h) {
        var m = t.offset(this.ts), p = this.toObject(), $ = ke(p, m, t);
        y = $[0];
      }
      return ne(this, {
        ts: y,
        zone: t
      });
    } else
      return r.invalid(Ce(t));
  }, e.reconfigure = function(t) {
    var a = t === void 0 ? {} : t, i = a.locale, l = a.numberingSystem, o = a.outputCalendar, c = this.loc.clone({
      locale: i,
      numberingSystem: l,
      outputCalendar: o
    });
    return ne(this, {
      loc: c
    });
  }, e.setLocale = function(t) {
    return this.reconfigure({
      locale: t
    });
  }, e.set = function(t) {
    if (!this.isValid)
      return this;
    var a = Be(t, Fi, []), i = !I(a.weekYear) || !I(a.weekNumber) || !I(a.weekday), l = !I(a.ordinal), o = !I(a.year), c = !I(a.month) || !I(a.day), h = o || c, y = a.weekYear || a.weekNumber;
    if ((h || l) && y)
      throw new oe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (c && l)
      throw new oe("Can't mix ordinal dates with month/day");
    var m;
    i ? m = xi(Object.assign(tn(this.c), a)) : I(a.ordinal) ? (m = Object.assign(this.toObject(), a), I(a.day) && (m.day = Math.min(je(m.year, m.month), m.day))) : m = Ii(Object.assign(Et(this.c), a));
    var p = ke(m, this.o, this.zone), $ = p[0], S = p[1];
    return ne(this, {
      ts: $,
      o: S
    });
  }, e.plus = function(t) {
    if (!this.isValid)
      return this;
    var a = Or(t);
    return ne(this, Ci(this, a));
  }, e.minus = function(t) {
    if (!this.isValid)
      return this;
    var a = Or(t).negate();
    return ne(this, Ci(this, a));
  }, e.startOf = function(t) {
    if (!this.isValid)
      return this;
    var a = {}, i = G.normalizeUnit(t);
    switch (i) {
      case "years":
        a.month = 1;
      case "quarters":
      case "months":
        a.day = 1;
      case "weeks":
      case "days":
        a.hour = 0;
      case "hours":
        a.minute = 0;
      case "minutes":
        a.second = 0;
      case "seconds":
        a.millisecond = 0;
        break;
    }
    if (i === "weeks" && (a.weekday = 1), i === "quarters") {
      var l = Math.ceil(this.month / 3);
      a.month = (l - 1) * 3 + 1;
    }
    return this.set(a);
  }, e.endOf = function(t) {
    var a;
    return this.isValid ? this.plus((a = {}, a[t] = 1, a)).startOf(t).minus(1) : this;
  }, e.toFormat = function(t, a) {
    return a === void 0 && (a = {}), this.isValid ? cr.create(this.loc.redefaultToEN(a)).formatDateTimeFromString(this, t) : Ot;
  }, e.toLocaleString = function(t) {
    return t === void 0 && (t = Re), this.isValid ? cr.create(this.loc.clone(t), t).formatDateTime(this) : Ot;
  }, e.toLocaleParts = function(t) {
    return t === void 0 && (t = {}), this.isValid ? cr.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }, e.toISO = function(t) {
    return t === void 0 && (t = {}), this.isValid ? this.toISODate(t) + "T" + this.toISOTime(t) : null;
  }, e.toISODate = function(t) {
    var a = t === void 0 ? {} : t, i = a.format, l = i === void 0 ? "extended" : i, o = l === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (o = "+" + o), Lr(this, o);
  }, e.toISOWeekDate = function() {
    return Lr(this, "kkkk-'W'WW-c");
  }, e.toISOTime = function(t) {
    var a = t === void 0 ? {} : t, i = a.suppressMilliseconds, l = i === void 0 ? !1 : i, o = a.suppressSeconds, c = o === void 0 ? !1 : o, h = a.includeOffset, y = h === void 0 ? !0 : h, m = a.includePrefix, p = m === void 0 ? !1 : m, $ = a.format, S = $ === void 0 ? "extended" : $;
    return Ni(this, {
      suppressSeconds: c,
      suppressMilliseconds: l,
      includeOffset: y,
      includePrefix: p,
      format: S
    });
  }, e.toRFC2822 = function() {
    return Lr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }, e.toHTTP = function() {
    return Lr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }, e.toSQLDate = function() {
    return Lr(this, "yyyy-MM-dd");
  }, e.toSQLTime = function(t) {
    var a = t === void 0 ? {} : t, i = a.includeOffset, l = i === void 0 ? !0 : i, o = a.includeZone, c = o === void 0 ? !1 : o;
    return Ni(this, {
      includeOffset: l,
      includeZone: c,
      spaceZone: !0
    });
  }, e.toSQL = function(t) {
    return t === void 0 && (t = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null;
  }, e.toString = function() {
    return this.isValid ? this.toISO() : Ot;
  }, e.valueOf = function() {
    return this.toMillis();
  }, e.toMillis = function() {
    return this.isValid ? this.ts : NaN;
  }, e.toSeconds = function() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }, e.toJSON = function() {
    return this.toISO();
  }, e.toBSON = function() {
    return this.toJSDate();
  }, e.toObject = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return {};
    var a = Object.assign({}, this.c);
    return t.includeConfig && (a.outputCalendar = this.outputCalendar, a.numberingSystem = this.loc.numberingSystem, a.locale = this.loc.locale), a;
  }, e.toJSDate = function() {
    return new Date(this.isValid ? this.ts : NaN);
  }, e.diff = function(t, a, i) {
    if (a === void 0 && (a = "milliseconds"), i === void 0 && (i = {}), !this.isValid || !t.isValid)
      return G.invalid(this.invalid || t.invalid, "created by diffing an invalid DateTime");
    var l = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, i), o = OA(a).map(G.normalizeUnit), c = t.valueOf() > this.valueOf(), h = c ? this : t, y = c ? t : this, m = WC(h, y, o, l);
    return c ? m.negate() : m;
  }, e.diffNow = function(t, a) {
    return t === void 0 && (t = "milliseconds"), a === void 0 && (a = {}), this.diff(r.now(), t, a);
  }, e.until = function(t) {
    return this.isValid ? ce.fromDateTimes(this, t) : this;
  }, e.hasSame = function(t, a) {
    if (!this.isValid)
      return !1;
    var i = t.valueOf(), l = this.setZone(t.zone, {
      keepLocalTime: !0
    });
    return l.startOf(a) <= i && i <= l.endOf(a);
  }, e.equals = function(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }, e.toRelative = function(t) {
    if (t === void 0 && (t = {}), !this.isValid)
      return null;
    var a = t.base || r.fromObject({
      zone: this.zone
    }), i = t.padding ? this < a ? -t.padding : t.padding : 0, l = ["years", "months", "days", "hours", "minutes", "seconds"], o = t.unit;
    return Array.isArray(t.unit) && (l = t.unit, o = void 0), ki(a, this.plus(i), Object.assign(t, {
      numeric: "always",
      units: l,
      unit: o
    }));
  }, e.toRelativeCalendar = function(t) {
    return t === void 0 && (t = {}), this.isValid ? ki(t.base || r.fromObject({
      zone: this.zone
    }), this, Object.assign(t, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    })) : null;
  }, r.min = function() {
    for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
      a[i] = arguments[i];
    if (!a.every(r.isDateTime))
      throw new K("min requires all arguments be DateTimes");
    return hi(a, function(l) {
      return l.valueOf();
    }, Math.min);
  }, r.max = function() {
    for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
      a[i] = arguments[i];
    if (!a.every(r.isDateTime))
      throw new K("max requires all arguments be DateTimes");
    return hi(a, function(l) {
      return l.valueOf();
    }, Math.max);
  }, r.fromFormatExplain = function(t, a, i) {
    i === void 0 && (i = {});
    var l = i, o = l.locale, c = o === void 0 ? null : o, h = l.numberingSystem, y = h === void 0 ? null : h, m = j.fromOpts({
      locale: c,
      numberingSystem: y,
      defaultToEN: !0
    });
    return Ou(m, t, a);
  }, r.fromStringExplain = function(t, a, i) {
    return i === void 0 && (i = {}), r.fromFormatExplain(t, a, i);
  }, or(r, [{
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function() {
      return this.isValid ? xt(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function() {
      return this.isValid ? xt(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function() {
      return this.isValid ? xt(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function() {
      return this.isValid ? Et(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function() {
      return this.isValid ? se.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function() {
      return this.isValid ? se.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function() {
      return this.isValid ? se.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function() {
      return this.isValid ? se.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function() {
      return ye(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function() {
      return je(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function() {
      return this.isValid ? fe(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function() {
      return this.isValid ? Ve(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function() {
      return Re;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function() {
      return Fn;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function() {
      return ru;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function() {
      return Mn;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function() {
      return kn;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function() {
      return Dn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function() {
      return Ln;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function() {
      return Pn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function() {
      return Un;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function() {
      return Rn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function() {
      return jn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function() {
      return Vn;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function() {
      return Bn;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function() {
      return zn;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function() {
      return Zn;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function() {
      return Hn;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function() {
      return Gn;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function() {
      return eu;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function() {
      return Wn;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function() {
      return qn;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function() {
      return Yn;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function() {
      return Jn;
    }
  }]), r;
}();
function ie(r) {
  if (U.isDateTime(r))
    return r;
  if (r && r.valueOf && xr(r.valueOf()))
    return U.fromJSDate(r);
  if (r && typeof r == "object")
    return U.fromObject(r);
  throw new K("Unknown datetime argument: " + r + ", of type " + typeof r);
}
var yN = "1.28.0";
J.DateTime = U;
J.Duration = G;
J.FixedOffsetZone = q;
J.IANAZone = vr;
J.Info = se;
J.Interval = ce;
J.InvalidZone = Xt;
J.LocalZone = du;
J.Settings = P;
J.VERSION = yN;
J.Zone = Yr;
const { DateTime: Di } = J, { IncorrectUsageError: pN } = Us, gN = {
  invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
}, bN = ["month"], $N = (r, e) => {
  if (e === "month") {
    const n = Di.fromISO(r, { zone: "UTC" }), t = Di.now().setZone("UTC"), a = Math.floor(t.diff(n, "months").months);
    return n.plus({ months: a }).toISO();
  }
  throw new pN({
    message: gN.invalidInterval
  });
};
var wN = {
  lastPeriodStart: $N,
  SUPPORTED_INTERVALS: bN
};
const ve = EO, Lu = mA, { lastPeriodStart: SN, SUPPORTED_INTERVALS: Li } = wN, Pu = /{{([\s\S]+?)}}/g;
class at {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {String} options.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, error: n, helpLink: t, db: a, errors: i }) {
    this.name = e, this.error = n, this.helpLink = t, this.db = a, this.errors = i;
  }
  generateError() {
    let e = {
      errorDetails: {
        name: this.name
      }
    };
    return this.helpLink && (e.help = this.helpLink), e;
  }
}
let TN = class extends at {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.max - maximum limit the limit would check against
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {Function} [options.config.formatter] - function to format the limit counts before they are passed to the error message
   * @param {String} [options.config.error] - error message to use when limit is reached
   * @param {String} [options.helpLink] - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: a, errors: i }) {
    if (super({ name: e, error: n.error || "", helpLink: t, db: a, errors: i }), n.max === void 0)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
    if (!n.currentCountQuery)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
    this.currentCountQueryFn = n.currentCountQuery, this.max = n.max, this.formatter = n.formatter, this.fallbackMessage = `This action would exceed the ${ve(this.name)} limit on your current plan.`;
  }
  /**
   *
   * @param {Number} count - current count that acceded the limit
   * @returns {Object} instance of HostLimitError
   */
  generateError(e) {
    let n = super.generateError();
    if (n.message = this.fallbackMessage, this.error) {
      const t = this.formatter || Intl.NumberFormat().format;
      try {
        n.message = Lu(this.error, { interpolate: Pu })(
          {
            max: t(this.max),
            count: t(e),
            name: this.name
          }
        );
      } catch {
        n.message = this.fallbackMessage;
      }
    }
    return n.errorDetails.limit = this.max, n.errorDetails.total = e, new this.errors.HostLimitError(n);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    var n;
    return await this.currentCountQueryFn(e.transacting ?? ((n = this.db) == null ? void 0 : n.knex));
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: n, addedCount: t = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + t > (n || this.max))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const n = e.currentCount || await this.currentCountQuery(e);
    if (n > (e.max || this.max))
      throw this.generateError(n);
  }
}, EN = class extends at {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.maxPeriodic - maximum limit the limit would check against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {('month')} options.config.interval - an interval to take into account when checking the limit. Currently only supports 'month' value
   * @param {String} options.config.startDate - start date in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601), used to calculate period intervals
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: a, errors: i }) {
    if (super({ name: e, error: n.error || "", helpLink: t, db: a, errors: i }), n.maxPeriodic === void 0)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
    if (!n.currentCountQuery)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
    if (!n.interval)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
    if (!Li.includes(n.interval))
      throw new i.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${Li}` });
    if (!n.startDate)
      throw new i.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
    this.currentCountQueryFn = n.currentCountQuery, this.maxPeriodic = n.maxPeriodic, this.interval = n.interval, this.startDate = n.startDate, this.fallbackMessage = `This action would exceed the ${ve(this.name)} limit on your current plan.`;
  }
  generateError(e) {
    let n = super.generateError();
    if (n.message = this.fallbackMessage, this.error)
      try {
        n.message = Lu(this.error, { interpolate: Pu })(
          {
            max: Intl.NumberFormat().format(this.maxPeriodic),
            count: Intl.NumberFormat().format(e),
            name: this.name
          }
        );
      } catch {
        n.message = this.fallbackMessage;
      }
    return n.errorDetails.limit = this.maxPeriodic, n.errorDetails.total = e, new this.errors.HostLimitError(n);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    const n = SN(this.startDate, this.interval);
    return await this.currentCountQueryFn(e.transacting ? e.transacting : this.db ? this.db.knex : void 0, n);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: n, addedCount: t = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + t > (n || this.maxPeriodic))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const { max: n } = e;
    let t = await this.currentCountQuery(e);
    if (t > (n || this.maxPeriodic))
      throw this.generateError(t);
  }
}, ON = class extends at {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.disabled - disabled/enabled flag for the limit
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, db: a, errors: i }) {
    super({ name: e, error: n.error || "", helpLink: t, db: a, errors: i }), this.disabled = n.disabled, this.fallbackMessage = `Your plan does not support ${ve(this.name)}. Please upgrade to enable ${ve(this.name)}.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  /**
   * Flag limits are on/off so using a feature is always over the limit
   */
  async errorIfWouldGoOverLimit() {
    if (this.disabled)
      throw this.generateError();
  }
  /**
   * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
   * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
   */
  async errorIfIsOverLimit() {
  }
}, xN = class extends at {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {[String]} options.config.allowlist - allowlist values that would be compared against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, config: n, helpLink: t, errors: a }) {
    if (super({ name: e, error: n.error || "", helpLink: t, errors: a }), !n.allowlist || !n.allowlist.length)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
    this.allowlist = n.allowlist, this.fallbackMessage = `This action would exceed the ${ve(this.name)} limit on your current plan.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  async errorIfWouldGoOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
  async errorIfIsOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
};
var IN = {
  MaxLimit: TN,
  MaxPeriodicLimit: EN,
  FlagLimit: ON,
  AllowlistLimit: xN
}, _N = {
  members: {
    currentCountQuery: async (r) => (await r("members").count("id", { as: "count" }).first()).count
  },
  newsletters: {
    currentCountQuery: async (r) => (await r("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
  },
  emails: {
    currentCountQuery: async (r, e) => (await r("emails").sum("email_count", { as: "count" }).where("created_at", ">=", e).first()).count
  },
  staff: {
    currentCountQuery: async (r) => (await r("users").select("users.id").leftJoin("roles_users", "users.id", "roles_users.user_id").leftJoin("roles", "roles_users.role_id", "roles.id").whereNot("roles.name", "Contributor").andWhereNot("users.status", "inactive").union([
      r("invites").select("invites.id").leftJoin("roles", "invites.role_id", "roles.id").whereNot("roles.name", "Contributor")
    ])).length
  },
  customIntegrations: {
    currentCountQuery: async (r) => (await r("integrations").count("id", { as: "count" }).whereNotIn("type", ["internal", "builtin"]).first()).count
  },
  customThemes: {},
  uploads: {
    // NOTE: this function should not ever be used as for uploads we compare the size
    //       of the uploaded file with the configured limit. Noop is here to keep the
    //       MaxLimit constructor happy
    currentCountQuery: () => {
    },
    // NOTE: the uploads limit is based on file sizes provided in Bytes
    //       a custom formatter is here for more user-friendly formatting when forming an error
    formatter: (r) => `${r / 1e6}MB`
  }
};
const Pi = kc, It = Gd, { IncorrectUsageError: Ui } = Us, { MaxLimit: AN, MaxPeriodicLimit: CN, FlagLimit: NN, AllowlistLimit: FN } = IN, Ri = _N, ji = {
  missingErrorsConfig: "Config Missing: 'errors' is required.",
  noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
};
class MN {
  constructor() {
    this.limits = {};
  }
  /**
   * Initializes the limits based on configuration
   *
   * @param {Object} options
   * @param {Object} [options.limits] - hash containing limit configurations keyed by limit name and containing
   * @param {Object} [options.subscription] - hash containing subscription configuration with interval and startDate properties
   * @param {String} options.helpLink - URL pointing to help resources for when limit is reached
   * @param {Object} options.db - knex db connection instance or other data source for the limit checks
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  loadLimits({ limits: e = {}, subscription: n, helpLink: t, db: a, errors: i }) {
    if (!i)
      throw new Ui({
        message: ji.missingErrorsConfig
      });
    this.errors = i, this.limits = {}, Object.keys(e).forEach((l) => {
      if (l = Pi(l), Ri[l]) {
        let o = Object.assign({}, Ri[l], e[l]);
        if (It(o, "allowlist"))
          this.limits[l] = new FN({ name: l, config: o, helpLink: t, errors: i });
        else if (It(o, "max"))
          this.limits[l] = new AN({ name: l, config: o, helpLink: t, db: a, errors: i });
        else if (It(o, "maxPeriodic")) {
          if (n === void 0)
            throw new Ui({
              message: ji.noSubscriptionParameter
            });
          const c = Object.assign({}, o, n);
          this.limits[l] = new CN({ name: l, config: c, helpLink: t, db: a, errors: i });
        } else
          this.limits[l] = new NN({ name: l, config: o, helpLink: t, errors: i });
      }
    });
  }
  isLimited(e) {
    return !!this.limits[Pi(e)];
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkIsOverLimit(e, n = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfIsOverLimit(n), !1;
      } catch (t) {
        if (t instanceof this.errors.HostLimitError)
          return !0;
        throw t;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkWouldGoOverLimit(e, n = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfWouldGoOverLimit(n), !1;
      } catch (t) {
        if (t instanceof this.errors.HostLimitError)
          return !0;
        throw t;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfIsOverLimit(e, n = {}) {
    this.isLimited(e) && await this.limits[e].errorIfIsOverLimit(n);
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfWouldGoOverLimit(e, n = {}) {
    this.isLimited(e) && await this.limits[e].errorIfWouldGoOverLimit(n);
  }
  /**
   * Checks if any of the configured limits acceded
   *
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
   * @returns {Promise<boolean>}
   */
  async checkIfAnyOverLimit(e = {}) {
    for (const n in this.limits)
      if (await this.checkIsOverLimit(n, e))
        return !0;
    return !1;
  }
}
var kN = MN, Uu = kN;
const DN = /* @__PURE__ */ Vi(Uu), BN = /* @__PURE__ */ Ju({
  __proto__: null,
  default: DN
}, [Uu]);
export {
  BN as i
};
//# sourceMappingURL=index-6e1dd00b.mjs.map
