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
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var assert = require("assert");
var languageModes_1 = require("../modes/languageModes");
var nodeFs_1 = require("../node/nodeFs");
function testRename(_x, _x2, _x3) {
  return _testRename.apply(this, arguments);
}
function _testRename() {
  _testRename = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value, newName, expectedDocContent) {
    var offset, document, workspace, languageModes, javascriptMode, position, workspaceEdit, edits, newDocContent;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          offset = value.indexOf('|');
          value = value.substr(0, offset) + value.substr(offset + 1);
          document = languageModes_1.TextDocument.create('test://test/test.html', 'html', 0, value);
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
          javascriptMode = languageModes.getMode('javascript');
          position = document.positionAt(offset);
          if (!javascriptMode) {
            _context6.next = 18;
            break;
          }
          _context6.next = 10;
          return javascriptMode.doRename(document, position, newName);
        case 10:
          workspaceEdit = _context6.sent;
          if (!workspaceEdit || !workspaceEdit.changes) {
            assert.fail('No workspace edits');
          }
          edits = workspaceEdit.changes[document.uri.toString()];
          if (!edits) {
            assert.fail("No edits for file at ".concat(document.uri.toString()));
          }
          newDocContent = languageModes_1.TextDocument.applyEdits(document, edits);
          assert.strictEqual(newDocContent, expectedDocContent, "Expected: ".concat(expectedDocContent, "\nActual: ").concat(newDocContent));
          _context6.next = 19;
          break;
        case 18:
          assert.fail('should have javascriptMode but no');
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _testRename.apply(this, arguments);
}
function testNoRename(_x4, _x5) {
  return _testNoRename.apply(this, arguments);
}
function _testNoRename() {
  _testNoRename = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(value, newName) {
    var offset, document, workspace, languageModes, javascriptMode, position, workspaceEdit;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          offset = value.indexOf('|');
          value = value.substr(0, offset) + value.substr(offset + 1);
          document = languageModes_1.TextDocument.create('test://test/test.html', 'html', 0, value);
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
          javascriptMode = languageModes.getMode('javascript');
          position = document.positionAt(offset);
          if (!javascriptMode) {
            _context7.next = 14;
            break;
          }
          _context7.next = 10;
          return javascriptMode.doRename(document, position, newName);
        case 10:
          workspaceEdit = _context7.sent;
          assert.ok((workspaceEdit === null || workspaceEdit === void 0 ? void 0 : workspaceEdit.changes) === undefined, 'Should not rename but rename happened');
          _context7.next = 15;
          break;
        case 14:
          assert.fail('should have javascriptMode but no');
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _testNoRename.apply(this, arguments);
}
suite('HTML Javascript Rename', function () {
  test('Rename Variable', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var input, output;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          input = ['<html>', '<head>', '<script>', 'const |a = 2;', 'const b = a + 2', '</script>', '</head>', '</html>'];
          output = ['<html>', '<head>', '<script>', 'const h = 2;', 'const b = h + 2', '</script>', '</head>', '</html>'];
          _context.next = 4;
          return testRename(input.join('\n'), 'h', output.join('\n'));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('Rename Function', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var input, output;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          input = ['<html>', '<head>', '<script>', "const name = 'cjg';", 'function |sayHello(name) {', "console.log('hello', name)", '}', 'sayHello(name)', '</script>', '</head>', '</html>'];
          output = ['<html>', '<head>', '<script>', "const name = 'cjg';", 'function sayName(name) {', "console.log('hello', name)", '}', 'sayName(name)', '</script>', '</head>', '</html>'];
          _context2.next = 4;
          return testRename(input.join('\n'), 'sayName', output.join('\n'));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Rename Function Params', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var input, output;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = ['<html>', '<head>', '<script>', "const name = 'cjg';", 'function sayHello(|name) {', "console.log('hello', name)", '}', 'sayHello(name)', '</script>', '</head>', '</html>'];
          output = ['<html>', '<head>', '<script>', "const name = 'cjg';", 'function sayHello(newName) {', "console.log('hello', newName)", '}', 'sayHello(name)', '</script>', '</head>', '</html>'];
          _context3.next = 4;
          return testRename(input.join('\n'), 'newName', output.join('\n'));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('Rename Class', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var input, output;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          input = ['<html>', '<head>', '<script>', "class |Foo {}", "const foo = new Foo()", '</script>', '</head>', '</html>'];
          output = ['<html>', '<head>', '<script>', "class Bar {}", "const foo = new Bar()", '</script>', '</head>', '</html>'];
          _context4.next = 4;
          return testRename(input.join('\n'), 'Bar', output.join('\n'));
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('Cannot Rename literal', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var stringLiteralInput, numberLiteralInput;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          stringLiteralInput = ['<html>', '<head>', '<script>', "const name = |'cjg';", '</script>', '</head>', '</html>'];
          numberLiteralInput = ['<html>', '<head>', '<script>', "const num = |2;", '</script>', '</head>', '</html>'];
          _context5.next = 4;
          return testNoRename(stringLiteralInput.join('\n'), 'something');
        case 4:
          _context5.next = 6;
          return testNoRename(numberLiteralInput.join('\n'), 'hhhh');
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
});