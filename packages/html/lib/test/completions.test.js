"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertCompletion = assertCompletion;
exports.testCompletionFor = testCompletionFor;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("mocha");
var assert = require("assert");
var path = require("path");
var vscode_uri_1 = require("vscode-uri");
var languageModes_1 = require("../modes/languageModes");
var nodeFs_1 = require("../node/nodeFs");
var documentContext_1 = require("../utils/documentContext");
function assertCompletion(completions, expected, document) {
  var matches = completions.items.filter(function (completion) {
    return completion.label === expected.label;
  });
  if (expected.notAvailable) {
    assert.strictEqual(matches.length, 0, "".concat(expected.label, " should not existing is results"));
    return;
  }
  assert.strictEqual(matches.length, 1, "".concat(expected.label, " should only existing once: Actual: ").concat(completions.items.map(function (c) {
    return c.label;
  }).join(', ')));
  var match = matches[0];
  if (expected.documentation) {
    assert.strictEqual(match.documentation, expected.documentation);
  }
  if (expected.kind) {
    assert.strictEqual(match.kind, expected.kind);
  }
  if (expected.resultText && match.textEdit) {
    var edit = languageModes_1.TextEdit.is(match.textEdit) ? match.textEdit : languageModes_1.TextEdit.replace(match.textEdit.replace, match.textEdit.newText);
    assert.strictEqual(languageModes_1.TextDocument.applyEdits(document, [edit]), expected.resultText);
  }
  if (expected.command) {
    assert.deepStrictEqual(match.command, expected.command);
  }
}
var testUri = 'test://test/test.html';
function testCompletionFor(_x, _x2) {
  return _testCompletionFor.apply(this, arguments);
}
function _testCompletionFor() {
  _testCompletionFor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(value, expected) {
    var uri,
      workspaceFolders,
      offset,
      workspace,
      document,
      position,
      context,
      languageModes,
      mode,
      list,
      _iterator,
      _step,
      item,
      _args14 = arguments;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          uri = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : testUri;
          workspaceFolders = _args14.length > 3 ? _args14[3] : undefined;
          offset = value.indexOf('|');
          value = value.substr(0, offset) + value.substr(offset + 1);
          workspace = {
            settings: {},
            folders: workspaceFolders || [{
              name: 'x',
              uri: uri.substr(0, uri.lastIndexOf('/'))
            }]
          };
          document = languageModes_1.TextDocument.create(uri, 'html', 0, value);
          position = document.positionAt(offset);
          context = (0, documentContext_1.getDocumentContext)(uri, workspace.folders);
          languageModes = (0, languageModes_1.getLanguageModes)({
            css: true,
            javascript: true
          }, workspace, languageModes_1.ClientCapabilities.LATEST, (0, nodeFs_1.getNodeFileFS)());
          mode = languageModes.getModeAtPosition(document, position);
          _context14.next = 12;
          return mode.doComplete(document, position, context);
        case 12:
          list = _context14.sent;
          if (expected.count) {
            assert.strictEqual(list.items.length, expected.count);
          }
          if (expected.items) {
            _iterator = _createForOfIteratorHelper(expected.items);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                item = _step.value;
                assertCompletion(list, item, document);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _testCompletionFor.apply(this, arguments);
}
suite('HTML Completion', function () {
  test('HTML JavaScript Completions', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return testCompletionFor('<html><script>window.|</script></html>', {
            items: [{
              label: 'location',
              resultText: '<html><script>window.location</script></html>'
            }]
          });
        case 2:
          _context.next = 4;
          return testCompletionFor('<html><script>$.|</script></html>', {
            items: [{
              label: 'getJSON',
              resultText: '<html><script>$.getJSON</script></html>'
            }]
          });
        case 4:
          _context.next = 6;
          return testCompletionFor('<html><script>const x = { a: 1 };</script><script>x.|</script></html>', {
            items: [{
              label: 'a',
              resultText: '<html><script>const x = { a: 1 };</script><script>x.a</script></html>'
            }]
          }, 'test://test/test2.html');
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
suite('HTML Path Completion', function () {
  var triggerSuggestCommand = {
    title: 'Suggest',
    command: 'editor.action.triggerSuggest'
  };
  var fixtureRoot = path.resolve(__dirname, '../../src/test/pathCompletionFixtures');
  var fixtureWorkspace = {
    name: 'fixture',
    uri: vscode_uri_1.URI.file(fixtureRoot).toString()
  };
  var indexHtmlUri = vscode_uri_1.URI.file(path.resolve(fixtureRoot, 'index.html')).toString();
  var aboutHtmlUri = vscode_uri_1.URI.file(path.resolve(fixtureRoot, 'about/about.html')).toString();
  test('Basics - Correct label/kind/result/command', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return testCompletionFor('<script src="./|">', {
            items: [{
              label: 'about/',
              kind: languageModes_1.CompletionItemKind.Folder,
              resultText: '<script src="./about/">',
              command: triggerSuggestCommand
            }, {
              label: 'index.html',
              kind: languageModes_1.CompletionItemKind.File,
              resultText: '<script src="./index.html">'
            }, {
              label: 'src/',
              kind: languageModes_1.CompletionItemKind.Folder,
              resultText: '<script src="./src/">',
              command: triggerSuggestCommand
            }]
          }, indexHtmlUri);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  test('Basics - Single Quote', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return testCompletionFor("<script src='./|'>", {
            items: [{
              label: 'about/',
              kind: languageModes_1.CompletionItemKind.Folder,
              resultText: "<script src='./about/'>",
              command: triggerSuggestCommand
            }, {
              label: 'index.html',
              kind: languageModes_1.CompletionItemKind.File,
              resultText: "<script src='./index.html'>"
            }, {
              label: 'src/',
              kind: languageModes_1.CompletionItemKind.Folder,
              resultText: "<script src='./src/'>",
              command: triggerSuggestCommand
            }]
          }, indexHtmlUri);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  test('No completion for remote paths', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return testCompletionFor('<script src="http:">', {
            items: []
          });
        case 2:
          _context4.next = 4;
          return testCompletionFor('<script src="http:/|">', {
            items: []
          });
        case 4:
          _context4.next = 6;
          return testCompletionFor('<script src="http://|">', {
            items: []
          });
        case 6:
          _context4.next = 8;
          return testCompletionFor('<script src="https:|">', {
            items: []
          });
        case 8:
          _context4.next = 10;
          return testCompletionFor('<script src="https:/|">', {
            items: []
          });
        case 10:
          _context4.next = 12;
          return testCompletionFor('<script src="https://|">', {
            items: []
          });
        case 12:
          _context4.next = 14;
          return testCompletionFor('<script src="//|">', {
            items: []
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  test('Relative Path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return testCompletionFor('<script src="../|">', {
            items: [{
              label: 'about/',
              resultText: '<script src="../about/">'
            }, {
              label: 'index.html',
              resultText: '<script src="../index.html">'
            }, {
              label: 'src/',
              resultText: '<script src="../src/">'
            }]
          }, aboutHtmlUri);
        case 2:
          _context5.next = 4;
          return testCompletionFor('<script src="../src/|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="../src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="../src/test.js">'
            }]
          }, aboutHtmlUri);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  test('Absolute Path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return testCompletionFor('<script src="/|">', {
            items: [{
              label: 'about/',
              resultText: '<script src="/about/">'
            }, {
              label: 'index.html',
              resultText: '<script src="/index.html">'
            }, {
              label: 'src/',
              resultText: '<script src="/src/">'
            }]
          }, indexHtmlUri);
        case 2:
          _context6.next = 4;
          return testCompletionFor('<script src="/src/|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="/src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="/src/test.js">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  test('Empty Path Value', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return testCompletionFor('<script src="|">', {
            items: [{
              label: 'about/',
              resultText: '<script src="about/">'
            }, {
              label: 'index.html',
              resultText: '<script src="index.html">'
            }, {
              label: 'src/',
              resultText: '<script src="src/">'
            }]
          }, indexHtmlUri);
        case 2:
          _context7.next = 4;
          return testCompletionFor('<script src="|">', {
            items: [{
              label: 'about.css',
              resultText: '<script src="about.css">'
            }, {
              label: 'about.html',
              resultText: '<script src="about.html">'
            }, {
              label: 'media/',
              resultText: '<script src="media/">'
            }]
          }, aboutHtmlUri);
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  test('Incomplete Path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return testCompletionFor('<script src="/src/f|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="/src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="/src/test.js">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 2:
          _context8.next = 4;
          return testCompletionFor('<script src="../src/f|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="../src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="../src/test.js">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  test('No leading dot or slash', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return testCompletionFor('<script src="s|">', {
            items: [{
              label: 'about/',
              resultText: '<script src="about/">'
            }, {
              label: 'index.html',
              resultText: '<script src="index.html">'
            }, {
              label: 'src/',
              resultText: '<script src="src/">'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 2:
          _context9.next = 4;
          return testCompletionFor('<script src="src/|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="src/test.js">'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 4:
          _context9.next = 6;
          return testCompletionFor('<script src="src/f|">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="src/test.js">'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 6:
          _context9.next = 8;
          return testCompletionFor('<script src="s|">', {
            items: [{
              label: 'about.css',
              resultText: '<script src="about.css">'
            }, {
              label: 'about.html',
              resultText: '<script src="about.html">'
            }, {
              label: 'media/',
              resultText: '<script src="media/">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 8:
          _context9.next = 10;
          return testCompletionFor('<script src="media/|">', {
            items: [{
              label: 'icon.pic',
              resultText: '<script src="media/icon.pic">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 10:
          _context9.next = 12;
          return testCompletionFor('<script src="media/f|">', {
            items: [{
              label: 'icon.pic',
              resultText: '<script src="media/icon.pic">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 12:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));
  test('Trigger completion in middle of path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return testCompletionFor('<script src="src/f|eature.js">', {
            items: [{
              label: 'feature.js',
              resultText: '<script src="src/feature.js">'
            }, {
              label: 'test.js',
              resultText: '<script src="src/test.js">'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 2:
          _context10.next = 4;
          return testCompletionFor('<script src="s|rc/feature.js">', {
            items: [{
              label: 'about/',
              resultText: '<script src="about/">'
            }, {
              label: 'index.html',
              resultText: '<script src="index.html">'
            }, {
              label: 'src/',
              resultText: '<script src="src/">'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 4:
          _context10.next = 6;
          return testCompletionFor('<script src="media/f|eature.js">', {
            items: [{
              label: 'icon.pic',
              resultText: '<script src="media/icon.pic">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 6:
          _context10.next = 8;
          return testCompletionFor('<script src="m|edia/feature.js">', {
            items: [{
              label: 'about.css',
              resultText: '<script src="about.css">'
            }, {
              label: 'about.html',
              resultText: '<script src="about.html">'
            }, {
              label: 'media/',
              resultText: '<script src="media/">'
            }]
          }, aboutHtmlUri, [fixtureWorkspace]);
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  test('Trigger completion in middle of path and with whitespaces', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return testCompletionFor('<script src="./| about/about.html>', {
            items: [{
              label: 'about/',
              resultText: '<script src="./about/ about/about.html>'
            }, {
              label: 'index.html',
              resultText: '<script src="./index.html about/about.html>'
            }, {
              label: 'src/',
              resultText: '<script src="./src/ about/about.html>'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 2:
          _context11.next = 4;
          return testCompletionFor('<script src="./a|bout /about.html>', {
            items: [{
              label: 'about/',
              resultText: '<script src="./about/ /about.html>'
            }, {
              label: 'index.html',
              resultText: '<script src="./index.html /about.html>'
            }, {
              label: 'src/',
              resultText: '<script src="./src/ /about.html>'
            }]
          }, indexHtmlUri, [fixtureWorkspace]);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));
  test('Completion should ignore files/folders starting with dot', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return testCompletionFor('<script src="./|"', {
            count: 3
          }, indexHtmlUri, [fixtureWorkspace]);
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  })));
  test('Unquoted Path', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  })));
});