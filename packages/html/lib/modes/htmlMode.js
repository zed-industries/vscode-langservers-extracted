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
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHTMLMode = getHTMLMode;
var languageModelCache_1 = require("../languageModelCache");
function getHTMLMode(htmlLanguageService, workspace) {
  var htmlDocuments = (0, languageModelCache_1.getLanguageModelCache)(10, 60, function (document) {
    return htmlLanguageService.parseHTMLDocument(document);
  });
  return {
    getId: function getId() {
      return 'html';
    },
    getSelectionRange: function getSelectionRange(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", htmlLanguageService.getSelectionRanges(document, [position])[0]);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    doComplete: function doComplete(document, position, documentContext) {
      var _htmlSettings$complet, _htmlSettings$complet2;
      var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : workspace.settings;
      var htmlSettings = settings === null || settings === void 0 ? void 0 : settings.html;
      var options = merge(htmlSettings === null || htmlSettings === void 0 ? void 0 : htmlSettings.suggest, {});
      options.hideAutoCompleteProposals = (htmlSettings === null || htmlSettings === void 0 ? void 0 : htmlSettings.autoClosingTags) === true;
      options.attributeDefaultValue = (_htmlSettings$complet = htmlSettings === null || htmlSettings === void 0 || (_htmlSettings$complet2 = htmlSettings.completion) === null || _htmlSettings$complet2 === void 0 ? void 0 : _htmlSettings$complet2.attributeDefaultValue) !== null && _htmlSettings$complet !== void 0 ? _htmlSettings$complet : 'doublequotes';
      var htmlDocument = htmlDocuments.get(document);
      var completionList = htmlLanguageService.doComplete2(document, position, htmlDocument, documentContext, options);
      return completionList;
    },
    doHover: function doHover(document, position, settings) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _settings$html;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", htmlLanguageService.doHover(document, position, htmlDocuments.get(document), settings === null || settings === void 0 || (_settings$html = settings.html) === null || _settings$html === void 0 ? void 0 : _settings$html.hover));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    findDocumentHighlight: function findDocumentHighlight(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", htmlLanguageService.findDocumentHighlights(document, position, htmlDocuments.get(document)));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    findDocumentLinks: function findDocumentLinks(document, documentContext) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", htmlLanguageService.findDocumentLinks(document, documentContext));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    findDocumentSymbols: function findDocumentSymbols(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", htmlLanguageService.findDocumentSymbols(document, htmlDocuments.get(document)));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    format: function format(document, range, formatParams) {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _settings$html2;
        var settings, formatSettings;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              settings = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : workspace.settings;
              formatSettings = merge(settings === null || settings === void 0 || (_settings$html2 = settings.html) === null || _settings$html2 === void 0 ? void 0 : _settings$html2.format, {});
              if (formatSettings.contentUnformatted) {
                formatSettings.contentUnformatted = formatSettings.contentUnformatted + ',script';
              } else {
                formatSettings.contentUnformatted = 'script';
              }
              merge(formatParams, formatSettings);
              return _context6.abrupt("return", htmlLanguageService.format(document, range, formatSettings));
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    getFoldingRanges: function getFoldingRanges(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", htmlLanguageService.getFoldingRanges(document));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    doAutoInsert: function doAutoInsert(document, position, kind) {
      var _arguments2 = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var settings, offset, text, _htmlSettings$complet3, _htmlSettings$complet4, htmlSettings, options;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              settings = _arguments2.length > 3 && _arguments2[3] !== undefined ? _arguments2[3] : workspace.settings;
              offset = document.offsetAt(position);
              text = document.getText();
              if (!(kind === 'autoQuote')) {
                _context8.next = 11;
                break;
              }
              if (!(offset > 0 && text.charAt(offset - 1) === '=')) {
                _context8.next = 9;
                break;
              }
              htmlSettings = settings === null || settings === void 0 ? void 0 : settings.html;
              options = merge(htmlSettings === null || htmlSettings === void 0 ? void 0 : htmlSettings.suggest, {});
              options.attributeDefaultValue = (_htmlSettings$complet3 = htmlSettings === null || htmlSettings === void 0 || (_htmlSettings$complet4 = htmlSettings.completion) === null || _htmlSettings$complet4 === void 0 ? void 0 : _htmlSettings$complet4.attributeDefaultValue) !== null && _htmlSettings$complet3 !== void 0 ? _htmlSettings$complet3 : 'doublequotes';
              return _context8.abrupt("return", htmlLanguageService.doQuoteComplete(document, position, htmlDocuments.get(document), options));
            case 9:
              _context8.next = 14;
              break;
            case 11:
              if (!(kind === 'autoClose')) {
                _context8.next = 14;
                break;
              }
              if (!(offset > 0 && text.charAt(offset - 1).match(/[>\/]/g))) {
                _context8.next = 14;
                break;
              }
              return _context8.abrupt("return", htmlLanguageService.doTagComplete(document, position, htmlDocuments.get(document)));
            case 14:
              return _context8.abrupt("return", null);
            case 15:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    doRename: function doRename(document, position, newName) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var htmlDocument;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              htmlDocument = htmlDocuments.get(document);
              return _context9.abrupt("return", htmlLanguageService.doRename(document, position, newName, htmlDocument));
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    onDocumentRemoved: function onDocumentRemoved(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              htmlDocuments.onDocumentRemoved(document);
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    findMatchingTagPosition: function findMatchingTagPosition(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var htmlDocument;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              htmlDocument = htmlDocuments.get(document);
              return _context11.abrupt("return", htmlLanguageService.findMatchingTagPosition(document, position, htmlDocument));
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    doLinkedEditing: function doLinkedEditing(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var htmlDocument;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              htmlDocument = htmlDocuments.get(document);
              return _context12.abrupt("return", htmlLanguageService.findLinkedEditingRanges(document, position, htmlDocument));
            case 2:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    dispose: function dispose() {
      htmlDocuments.dispose();
    }
  };
}
function merge(src, dst) {
  if (src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}