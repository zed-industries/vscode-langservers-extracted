"use strict";

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
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("mocha");
var path = require("path");
var fs = require("fs");
var assert = require("assert");
var languageModes_1 = require("../modes/languageModes");
var formatting_1 = require("../modes/formatting");
var nodeFs_1 = require("../node/nodeFs");
suite('HTML Embedded Formatting', function () {
  function assertFormat(_x, _x2, _x3, _x4, _x5) {
    return _assertFormat.apply(this, arguments);
  }
  function _assertFormat() {
    _assertFormat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(value, expected, options, formatOptions, message) {
      var workspace, languageModes, rangeStartOffset, rangeEndOffset, document, range, result, actual;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            workspace = {
              settings: options,
              folders: [{
                name: 'foo',
                uri: 'test://foo'
              }]
            };
            languageModes = (0, languageModes_1.getLanguageModes)({
              css: true,
              javascript: true
            }, workspace, languageModes_1.ClientCapabilities.LATEST, (0, nodeFs_1.getNodeFileFS)());
            rangeStartOffset = value.indexOf('|');
            if (rangeStartOffset !== -1) {
              value = value.substr(0, rangeStartOffset) + value.substr(rangeStartOffset + 1);
              rangeEndOffset = value.indexOf('|');
              value = value.substr(0, rangeEndOffset) + value.substr(rangeEndOffset + 1);
            } else {
              rangeStartOffset = 0;
              rangeEndOffset = value.length;
            }
            document = languageModes_1.TextDocument.create('test://test/test.html', 'html', 0, value);
            range = languageModes_1.Range.create(document.positionAt(rangeStartOffset), document.positionAt(rangeEndOffset));
            if (!formatOptions) {
              formatOptions = languageModes_1.FormattingOptions.create(2, true);
            }
            _context13.next = 9;
            return (0, formatting_1.format)(languageModes, document, range, formatOptions, undefined, {
              css: true,
              javascript: true
            });
          case 9:
            result = _context13.sent;
            actual = languageModes_1.TextDocument.applyEdits(document, result);
            assert.strictEqual(actual, expected, message);
          case 12:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _assertFormat.apply(this, arguments);
  }
  function assertFormatWithFixture(_x6, _x7, _x8, _x9) {
    return _assertFormatWithFixture.apply(this, arguments);
  }
  function _assertFormatWithFixture() {
    _assertFormatWithFixture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(fixtureName, expectedPath, options, formatOptions) {
      var input, expected;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            input = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'test', 'fixtures', 'inputs', fixtureName)).toString().replace(/\r\n/mg, '\n');
            expected = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'test', 'fixtures', 'expected', expectedPath)).toString().replace(/\r\n/mg, '\n');
            _context14.next = 4;
            return assertFormat(input, expected, options, formatOptions, expectedPath);
          case 4:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _assertFormatWithFixture.apply(this, arguments);
  }
  test('HTML only', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return assertFormat('<html><body><p>Hello</p></body></html>', '<html>\n\n<body>\n  <p>Hello</p>\n</body>\n\n</html>');
        case 2:
          _context.next = 4;
          return assertFormat('|<html><body><p>Hello</p></body></html>|', '<html>\n\n<body>\n  <p>Hello</p>\n</body>\n\n</html>');
        case 4:
          _context.next = 6;
          return assertFormat('<html>|<body><p>Hello</p></body>|</html>', '<html><body>\n  <p>Hello</p>\n</body></html>');
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('HTML & Scripts', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return assertFormat('<html><head><script></script></head></html>', '<html>\n\n<head>\n  <script></script>\n</head>\n\n</html>');
        case 2:
          _context2.next = 4;
          return assertFormat('<html><head><script>var x=1;</script></head></html>', '<html>\n\n<head>\n  <script>var x = 1;</script>\n</head>\n\n</html>');
        case 4:
          _context2.next = 6;
          return assertFormat('<html><head><script>\nvar x=2;\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    var x = 2;\n  </script>\n</head>\n\n</html>');
        case 6:
          _context2.next = 8;
          return assertFormat('<html><head>\n  <script>\nvar x=3;\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    var x = 3;\n  </script>\n</head>\n\n</html>');
        case 8:
          _context2.next = 10;
          return assertFormat('<html><head>\n  <script>\nvar x=4;\nconsole.log("Hi");\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    var x = 4;\n    console.log("Hi");\n  </script>\n</head>\n\n</html>');
        case 10:
          _context2.next = 12;
          return assertFormat('<html><head>\n  |<script>\nvar x=5;\n</script>|</head></html>', '<html><head>\n  <script>\n    var x = 5;\n  </script></head></html>');
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('HTLM & Scripts - Fixtures', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          assertFormatWithFixture('19813.html', '19813.html');
          assertFormatWithFixture('19813.html', '19813-4spaces.html', undefined, languageModes_1.FormattingOptions.create(4, true));
          assertFormatWithFixture('19813.html', '19813-tab.html', undefined, languageModes_1.FormattingOptions.create(1, false));
          assertFormatWithFixture('21634.html', '21634.html');
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('Script end tag', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return assertFormat('<html>\n<head>\n  <script>\nvar x  =  0;\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    var x = 0;\n  </script>\n</head>\n\n</html>');
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('HTML & Multiple Scripts', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return assertFormat('<html><head>\n<script>\nif(x){\nbar(); }\n</script><script>\nfunction(x){    }\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    if (x) {\n      bar();\n    }\n  </script>\n  <script>\n    function(x) { }\n  </script>\n</head>\n\n</html>');
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  test('HTML & Styles', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return assertFormat('<html><head>\n<style>\n.foo{display:none;}\n</style></head></html>', '<html>\n\n<head>\n  <style>\n    .foo {\n      display: none;\n    }\n  </style>\n</head>\n\n</html>');
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  test('EndWithNewline', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var options;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          options = languageModes_1.FormattingOptions.create(2, true);
          options.insertFinalNewline = true;
          _context7.next = 4;
          return assertFormat('<html><body><p>Hello</p></body></html>', '<html>\n\n<body>\n  <p>Hello</p>\n</body>\n\n</html>\n', {}, options);
        case 4:
          _context7.next = 6;
          return assertFormat('<html>|<body><p>Hello</p></body>|</html>', '<html><body>\n  <p>Hello</p>\n</body></html>', {}, options);
        case 6:
          _context7.next = 8;
          return assertFormat('<html>|<body><p>Hello</p></body></html>|', '<html><body>\n  <p>Hello</p>\n</body>\n\n</html>\n', {}, options);
        case 8:
          _context7.next = 10;
          return assertFormat('<html><head><script>\nvar x=1;\n</script></head></html>', '<html>\n\n<head>\n  <script>\n    var x = 1;\n  </script>\n</head>\n\n</html>\n', {}, options);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  test('Inside script', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return assertFormat('<html><head>\n  <script>\n|var x=6;|\n</script></head></html>', '<html><head>\n  <script>\n  var x = 6;\n</script></head></html>');
        case 2:
          _context8.next = 4;
          return assertFormat('<html><head>\n  <script>\n|var x=6;\nvar y=  9;|\n</script></head></html>', '<html><head>\n  <script>\n  var x = 6;\n  var y = 9;\n</script></head></html>');
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  test('Range after new line', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return assertFormat('<html><head>\n  |<script>\nvar x=6;\n</script>\n|</head></html>', '<html><head>\n  <script>\n    var x = 6;\n  </script>\n</head></html>');
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));
  test('bug 36574', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return assertFormat('<script src="/js/main.js"> </script>', '<script src="/js/main.js"> </script>');
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  test('bug 48049', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return assertFormat(['<html>', '<head>', '</head>', '', '<body>', '', '    <script>', '        function f(x) { }', '        f(function () {', '        // ', '', '        console.log(" vsc crashes on formatting")', '        });', '    </script>', '', '', '', '        </body>', '', '</html>'].join('\n'), ['<html>', '', '<head>', '</head>', '', '<body>', '', '  <script>', '    function f(x) { }', '    f(function () {', '      // ', '', '      console.log(" vsc crashes on formatting")', '    });', '  </script>', '', '', '', '</body>', '', '</html>'].join('\n'));
        case 2:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));
  test('#58435', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var options, content, expected;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          options = {
            html: {
              format: {
                contentUnformatted: 'textarea'
              }
            }
          };
          content = ['<html>', '', '<body>', '  <textarea name= "" id ="" cols="30" rows="10">', '  </textarea>', '</body>', '', '</html>'].join('\n');
          expected = ['<html>', '', '<body>', '  <textarea name="" id="" cols="30" rows="10">', '  </textarea>', '</body>', '', '</html>'].join('\n');
          _context12.next = 5;
          return assertFormat(content, expected, options);
        case 5:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  })));
}); /*
    content_unformatted: Array(4)["pre", "code", "textarea", …]
    end_with_newline: false
    eol: "\n"
    extra_liners: Array(3)["head", "body", "/html"]
    indent_char: "\t"
    indent_handlebars: false
    indent_inner_html: false
    indent_size: 1
    max_preserve_newlines: 32786
    preserve_newlines: true
    unformatted: Array(1)["wbr"]
    wrap_attributes: "auto"
    wrap_attributes_indent_size: undefined
    wrap_line_length: 120*/