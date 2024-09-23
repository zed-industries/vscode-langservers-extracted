"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("mocha");
var assert = require("assert");
var htmlFolding_1 = require("../modes/htmlFolding");
var languageModes_1 = require("../modes/languageModes");
var vscode_css_languageservice_1 = require("vscode-css-languageservice");
var nodeFs_1 = require("../node/nodeFs");
function assertRanges(_x, _x2, _x3, _x4) {
  return _assertRanges.apply(this, arguments);
}
function _assertRanges() {
  _assertRanges = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(lines, expected, message, nRanges) {
    var document, workspace, languageModes, actual, actualRanges, i;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          document = languageModes_1.TextDocument.create('test://foo/bar.html', 'html', 1, lines.join('\n'));
          workspace = {
            settings: {},
            folders: [{
              name: 'foo',
              uri: 'test://foo'
            }]
          };
          languageModes = (0, languageModes_1.getLanguageModes)({
            css: true,
            javascript: true
          }, workspace, vscode_css_languageservice_1.ClientCapabilities.LATEST, (0, nodeFs_1.getNodeFileFS)());
          _context9.next = 5;
          return (0, htmlFolding_1.getFoldingRanges)(languageModes, document, nRanges, null);
        case 5:
          actual = _context9.sent;
          actualRanges = [];
          for (i = 0; i < actual.length; i++) {
            actualRanges[i] = r(actual[i].startLine, actual[i].endLine, actual[i].kind);
          }
          actualRanges = actualRanges.sort(function (r1, r2) {
            return r1.startLine - r2.startLine;
          });
          assert.deepStrictEqual(actualRanges, expected, message);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _assertRanges.apply(this, arguments);
}
function r(startLine, endLine, kind) {
  return {
    startLine: startLine,
    endLine: endLine,
    kind: kind
  };
}
suite('HTML Folding', function () {
  test('Embedded JavaScript', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var input;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script>', /*3*/'function f() {', /*4*/'}', /*5*/'</script>', /*6*/'</head>', /*7*/'</html>'];
          _context.next = 3;
          return assertRanges(input, [r(0, 6), r(1, 5), r(2, 4), r(3, 4)]);
        case 3:
          _context.next = 5;
          return _context.sent;
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('Embedded JavaScript - multiple areas', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var input;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head>', /* 2*/'<script>', /* 3*/'  var x = {', /* 4*/'    foo: true,', /* 5*/'    bar: {}', /* 6*/'  };', /* 7*/'</script>', /* 8*/'<script>', /* 9*/'  test(() => { // hello', /*10*/'    f();', /*11*/'  });', /*12*/'</script>', /*13*/'</head>', /*14*/'</html>'];
          _context2.next = 3;
          return assertRanges(input, [r(0, 13), r(1, 12), r(2, 6), r(3, 6), r(8, 11), r(9, 11), r(9, 11)]);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Embedded JavaScript - incomplete', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var input;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head>', /* 2*/'<script>', /* 3*/'  var x = {', /* 4*/'</script>', /* 5*/'<script>', /* 6*/'  });', /* 7*/'</script>', /* 8*/'</head>', /* 9*/'</html>'];
          _context3.next = 3;
          return assertRanges(input, [r(0, 8), r(1, 7), r(2, 3), r(5, 6)]);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('Embedded JavaScript - regions', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var input;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head>', /* 2*/'<script>', /* 3*/'  // #region Lalala', /* 4*/'   //  #region', /* 5*/'   x = 9;', /* 6*/'  //  #endregion', /* 7*/'  // #endregion Lalala', /* 8*/'</script>', /* 9*/'</head>', /*10*/'</html>'];
          _context4.next = 3;
          return assertRanges(input, [r(0, 9), r(1, 8), r(2, 7), r(3, 7, 'region'), r(4, 6, 'region')]);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('Embedded CSS', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var input;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head>', /* 2*/'<style>', /* 3*/'  foo {', /* 4*/'   display: block;', /* 5*/'   color: black;', /* 6*/'  }', /* 7*/'</style>', /* 8*/'</head>', /* 9*/'</html>'];
          _context5.next = 3;
          return assertRanges(input, [r(0, 8), r(1, 7), r(2, 6), r(3, 5)]);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  test('Embedded CSS - multiple areas', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var input;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head style="color:red">', /* 2*/'<style>', /* 3*/'  /*', /* 4*/'    foo: true,', /* 5*/'    bar: {}', /* 6*/'  */', /* 7*/'</style>', /* 8*/'<style>', /* 9*/'  @keyframes mymove {', /*10*/'    from {top: 0px;}', /*11*/'  }', /*12*/'</style>', /*13*/'</head>', /*14*/'</html>'];
          _context6.next = 3;
          return assertRanges(input, [r(0, 13), r(1, 12), r(2, 6), r(3, 6, 'comment'), r(8, 11), r(9, 10)]);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  test('Embedded CSS - regions', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var input;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          input = [/* 0*/'<html>', /* 1*/'<head>', /* 2*/'<style>', /* 3*/'  /* #region Lalala */', /* 4*/'   /*  #region*/', /* 5*/'   x = 9;', /* 6*/'  /*  #endregion*/', /* 7*/'  /* #endregion Lalala*/', /* 8*/'</style>', /* 9*/'</head>', /*10*/'</html>'];
          _context7.next = 3;
          return assertRanges(input, [r(0, 9), r(1, 8), r(2, 7), r(3, 7, 'region'), r(4, 6, 'region')]);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  // test('Embedded JavaScript - multi line comment', async () => {
  // 	const input = [
  // 		/* 0*/'<html>',
  // 		/* 1*/'<head>',
  // 		/* 2*/'<script>',
  // 		/* 3*/'  /*',
  // 		/* 4*/'   * Hello',
  // 		/* 5*/'   */',
  // 		/* 6*/'</script>',
  // 		/* 7*/'</head>',
  // 		/* 8*/'</html>',
  // 	];
  // 	await assertRanges(input, [r(0, 7), r(1, 6), r(2, 5), r(3, 5, 'comment')]);
  // });
  test('Test limit', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var input;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          input = [/* 0*/'<div>', /* 1*/' <span>', /* 2*/'  <b>', /* 3*/'  ', /* 4*/'  </b>,', /* 5*/'  <b>', /* 6*/'   <pre>', /* 7*/'  ', /* 8*/'   </pre>,', /* 9*/'   <pre>', /*10*/'  ', /*11*/'   </pre>,', /*12*/'  </b>,', /*13*/'  <b>', /*14*/'  ', /*15*/'  </b>,', /*16*/'  <b>', /*17*/'  ', /*18*/'  </b>', /*19*/' </span>', /*20*/'</div>'];
          _context8.next = 3;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11), r(6, 7), r(9, 10), r(13, 14), r(16, 17)], 'no limit', undefined);
        case 3:
          _context8.next = 5;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11), r(6, 7), r(9, 10), r(13, 14), r(16, 17)], 'limit 8', 8);
        case 5:
          _context8.next = 7;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11), r(6, 7), r(13, 14), r(16, 17)], 'limit 7', 7);
        case 7:
          _context8.next = 9;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11), r(13, 14), r(16, 17)], 'limit 6', 6);
        case 9:
          _context8.next = 11;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11), r(13, 14)], 'limit 5', 5);
        case 11:
          _context8.next = 13;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3), r(5, 11)], 'limit 4', 4);
        case 13:
          _context8.next = 15;
          return assertRanges(input, [r(0, 19), r(1, 18), r(2, 3)], 'limit 3', 3);
        case 15:
          _context8.next = 17;
          return assertRanges(input, [r(0, 19), r(1, 18)], 'limit 2', 2);
        case 17:
          _context8.next = 19;
          return assertRanges(input, [r(0, 19)], 'limit 1', 1);
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
});