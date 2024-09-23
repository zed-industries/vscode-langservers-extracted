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
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("mocha");
var assert = require("assert");
var languageModes_1 = require("../modes/languageModes");
var semanticTokens_1 = require("../modes/semanticTokens");
var nodeFs_1 = require("../node/nodeFs");
function assertTokens(_x, _x2, _x3, _x4) {
  return _assertTokens.apply(this, arguments);
}
function _assertTokens() {
  _assertTokens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(lines, expected, ranges, message) {
    var document, workspace, languageModes, semanticTokensProvider, legend, actual, actualRanges, lastLine, lastCharacter, _loop, i;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
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
          }, workspace, languageModes_1.ClientCapabilities.LATEST, (0, nodeFs_1.getNodeFileFS)());
          semanticTokensProvider = (0, semanticTokens_1.newSemanticTokenProvider)(languageModes);
          legend = semanticTokensProvider.legend;
          _context10.next = 7;
          return semanticTokensProvider.getSemanticTokens(document, ranges);
        case 7:
          actual = _context10.sent;
          actualRanges = [];
          lastLine = 0;
          lastCharacter = 0;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var lineDelta, charDelta, len, typeIdx, modSet, line, character, tokenClassifiction;
            return _regeneratorRuntime().wrap(function _loop$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  lineDelta = actual[i], charDelta = actual[i + 1], len = actual[i + 2], typeIdx = actual[i + 3], modSet = actual[i + 4];
                  line = lastLine + lineDelta;
                  character = lineDelta === 0 ? lastCharacter + charDelta : charDelta;
                  tokenClassifiction = [legend.types[typeIdx]].concat(_toConsumableArray(legend.modifiers.filter(function (_, i) {
                    return modSet & 1 << i;
                  }))).join('.');
                  actualRanges.push(t(line, character, len, tokenClassifiction));
                  lastLine = line;
                  lastCharacter = character;
                case 7:
                case "end":
                  return _context9.stop();
              }
            }, _loop);
          });
          i = 0;
        case 13:
          if (!(i < actual.length)) {
            _context10.next = 18;
            break;
          }
          return _context10.delegateYield(_loop(), "t0", 15);
        case 15:
          i += 5;
          _context10.next = 13;
          break;
        case 18:
          assert.deepStrictEqual(actualRanges, expected, message);
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee9);
  }));
  return _assertTokens.apply(this, arguments);
}
function t(startLine, character, length, tokenClassifiction) {
  return {
    startLine: startLine,
    character: character,
    length: length,
    tokenClassifiction: tokenClassifiction
  };
}
suite('HTML Semantic Tokens', function () {
  test('Variables', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var input;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script>', /*3*/'  var x = 9, y1 = [x];', /*4*/'  try {', /*5*/'    for (const s of y1) { x = s }', /*6*/'  } catch (e) {', /*7*/'    throw y1;', /*8*/'  }', /*9*/'</script>', /*10*/'</head>', /*11*/'</html>'];
          _context.next = 3;
          return assertTokens(input, [t(3, 6, 1, 'variable.declaration'), t(3, 13, 2, 'variable.declaration'), t(3, 19, 1, 'variable'), t(5, 15, 1, 'variable.declaration.readonly.local'), t(5, 20, 2, 'variable'), t(5, 26, 1, 'variable'), t(5, 30, 1, 'variable.readonly.local'), t(6, 11, 1, 'variable.declaration.local'), t(7, 10, 2, 'variable')]);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('Functions', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var input;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script>', /*3*/'  function foo(p1) {', /*4*/'    return foo(Math.abs(p1))', /*5*/'  }', /*6*/'  `/${window.location}`.split("/").forEach(s => foo(s));', /*7*/'</script>', /*8*/'</head>', /*9*/'</html>'];
          _context2.next = 3;
          return assertTokens(input, [t(3, 11, 3, 'function.declaration'), t(3, 15, 2, 'parameter.declaration'), t(4, 11, 3, 'function'), t(4, 15, 4, 'variable.defaultLibrary'), t(4, 20, 3, 'method.defaultLibrary'), t(4, 24, 2, 'parameter'), t(6, 6, 6, 'variable.defaultLibrary'), t(6, 13, 8, 'property.defaultLibrary'), t(6, 24, 5, 'method.defaultLibrary'), t(6, 35, 7, 'method.defaultLibrary'), t(6, 43, 1, 'parameter.declaration'), t(6, 48, 3, 'function'), t(6, 52, 1, 'parameter')]);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Members', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var input;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script>', /*3*/'  class A {', /*4*/'    static x = 9;', /*5*/'    f = 9;', /*6*/'    async m() { return A.x + await this.m(); };', /*7*/'    get s() { return this.f; ', /*8*/'    static t() { return new A().f; };', /*9*/'    constructor() {}', /*10*/'  }', /*11*/'</script>', /*12*/'</head>', /*13*/'</html>'];
          _context3.next = 3;
          return assertTokens(input, [t(3, 8, 1, 'class.declaration'), t(4, 11, 1, 'property.declaration.static'), t(5, 4, 1, 'property.declaration'), t(6, 10, 1, 'method.declaration.async'), t(6, 23, 1, 'class'), t(6, 25, 1, 'property.static'), t(6, 40, 1, 'method.async'), t(7, 8, 1, 'property.declaration'), t(7, 26, 1, 'property'), t(8, 11, 1, 'method.declaration.static'), t(8, 28, 1, 'class'), t(8, 32, 1, 'property')]);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('Interfaces', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var input;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script type="text/typescript">', /*3*/'  interface Position { x: number, y: number };', /*4*/'  const p = { x: 1, y: 2 } as Position;', /*5*/'  const foo = (o: Position) => o.x + o.y;', /*6*/'</script>', /*7*/'</head>', /*8*/'</html>'];
          _context4.next = 3;
          return assertTokens(input, [t(3, 12, 8, 'interface.declaration'), t(3, 23, 1, 'property.declaration'), t(3, 34, 1, 'property.declaration'), t(4, 8, 1, 'variable.declaration.readonly'), t(4, 14, 1, 'property.declaration'), t(4, 20, 1, 'property.declaration'), t(4, 30, 8, 'interface'), t(5, 8, 3, 'function.declaration.readonly'), t(5, 15, 1, 'parameter.declaration'), t(5, 18, 8, 'interface'), t(5, 31, 1, 'parameter'), t(5, 33, 1, 'property'), t(5, 37, 1, 'parameter'), t(5, 39, 1, 'property')]);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('Readonly', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var input;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script type="text/typescript">', /*3*/'  const f = 9;', /*4*/'  class A { static readonly t = 9; static url: URL; }', /*5*/'  const enum E { A = 9, B = A + 1 }', /*6*/'  console.log(f + A.t + A.url.origin);', /*7*/'</script>', /*8*/'</head>', /*9*/'</html>'];
          _context5.next = 3;
          return assertTokens(input, [t(3, 8, 1, 'variable.declaration.readonly'), t(4, 8, 1, 'class.declaration'), t(4, 28, 1, 'property.declaration.static.readonly'), t(4, 42, 3, 'property.declaration.static'), t(4, 47, 3, 'interface.defaultLibrary'), t(5, 13, 1, 'enum.declaration'), t(5, 17, 1, 'enumMember.declaration.readonly'), t(5, 24, 1, 'enumMember.declaration.readonly'), t(5, 28, 1, 'enumMember.readonly'), t(6, 2, 7, 'variable.defaultLibrary'), t(6, 10, 3, 'method.defaultLibrary'), t(6, 14, 1, 'variable.readonly'), t(6, 18, 1, 'class'), t(6, 20, 1, 'property.static.readonly'), t(6, 24, 1, 'class'), t(6, 26, 3, 'property.static'), t(6, 30, 6, 'property.readonly.defaultLibrary')]);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  test('Type aliases and type parameters', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var input;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script type="text/typescript">', /*3*/'  type MyMap = Map<string, number>;', /*4*/'  function f<T extends MyMap>(t: T | number) : T { ', /*5*/'    return <T> <unknown> new Map<string, MyMap>();', /*6*/'  }', /*7*/'</script>', /*8*/'</head>', /*9*/'</html>'];
          _context6.next = 3;
          return assertTokens(input, [t(3, 7, 5, 'type.declaration'), t(3, 15, 3, 'interface.defaultLibrary') /* to investiagte */, t(4, 11, 1, 'function.declaration'), t(4, 13, 1, 'typeParameter.declaration'), t(4, 23, 5, 'type'), t(4, 30, 1, 'parameter.declaration'), t(4, 33, 1, 'typeParameter'), t(4, 47, 1, 'typeParameter'), t(5, 12, 1, 'typeParameter'), t(5, 29, 3, 'class.defaultLibrary'), t(5, 41, 5, 'type')]);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  test('TS and JS', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var input;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script type="text/typescript">', /*3*/'  function f<T>(p1: T): T[] { return [ p1 ]; }', /*4*/'</script>', /*5*/'<script>', /*6*/'  window.alert("Hello");', /*7*/'</script>', /*8*/'</head>', /*9*/'</html>'];
          _context7.next = 3;
          return assertTokens(input, [t(3, 11, 1, 'function.declaration'), t(3, 13, 1, 'typeParameter.declaration'), t(3, 16, 2, 'parameter.declaration'), t(3, 20, 1, 'typeParameter'), t(3, 24, 1, 'typeParameter'), t(3, 39, 2, 'parameter'), t(6, 2, 6, 'variable.defaultLibrary'), t(6, 9, 5, 'method.defaultLibrary')]);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  test('Ranges', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var input;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          input = [/*0*/'<html>', /*1*/'<head>', /*2*/'<script>', /*3*/'  window.alert("Hello");', /*4*/'</script>', /*5*/'<script>', /*6*/'  window.alert("World");', /*7*/'</script>', /*8*/'</head>', /*9*/'</html>'];
          _context8.next = 3;
          return assertTokens(input, [t(3, 2, 6, 'variable.defaultLibrary'), t(3, 9, 5, 'method.defaultLibrary')], [languageModes_1.Range.create(languageModes_1.Position.create(2, 0), languageModes_1.Position.create(4, 0))]);
        case 3:
          _context8.next = 5;
          return assertTokens(input, [t(6, 2, 6, 'variable.defaultLibrary')], [languageModes_1.Range.create(languageModes_1.Position.create(6, 2), languageModes_1.Position.create(6, 8))]);
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
});