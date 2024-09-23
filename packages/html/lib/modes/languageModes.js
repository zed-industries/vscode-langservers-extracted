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
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.for-each.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDocument = exports.TokenType = exports.ClientCapabilities = exports.TextDocumentIdentifier = exports.SelectionRange = exports.DiagnosticSeverity = exports.ParameterInformation = exports.SignatureInformation = exports.WorkspaceEdit = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.TextEdit = exports.SymbolKind = exports.SymbolInformation = exports.Range = exports.Position = exports.Location = exports.Hover = exports.FormattingOptions = exports.FoldingRangeKind = exports.FoldingRange = exports.DocumentLink = exports.DocumentHighlightKind = exports.DocumentHighlight = exports.Diagnostic = exports.CompletionItemKind = exports.CompletionList = exports.CompletionItem = exports.WorkspaceFolder = void 0;
exports.isCompletionItemData = isCompletionItemData;
exports.getLanguageModes = getLanguageModes;
var vscode_css_languageservice_1 = require("vscode-css-languageservice");
var vscode_html_languageservice_1 = require("vscode-html-languageservice");
var languageModelCache_1 = require("../languageModelCache");
var cssMode_1 = require("./cssMode");
var embeddedSupport_1 = require("./embeddedSupport");
var htmlMode_1 = require("./htmlMode");
var javascriptMode_1 = require("./javascriptMode");
var vscode_languageserver_1 = require("@zed-industries/vscode-languageserver");
Object.defineProperty(exports, "WorkspaceFolder", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.WorkspaceFolder;
  }
});
Object.defineProperty(exports, "CompletionItem", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.CompletionItem;
  }
});
Object.defineProperty(exports, "CompletionList", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.CompletionList;
  }
});
Object.defineProperty(exports, "CompletionItemKind", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.CompletionItemKind;
  }
});
Object.defineProperty(exports, "Diagnostic", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Diagnostic;
  }
});
Object.defineProperty(exports, "DocumentHighlight", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.DocumentHighlight;
  }
});
Object.defineProperty(exports, "DocumentHighlightKind", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.DocumentHighlightKind;
  }
});
Object.defineProperty(exports, "DocumentLink", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.DocumentLink;
  }
});
Object.defineProperty(exports, "FoldingRange", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.FoldingRange;
  }
});
Object.defineProperty(exports, "FoldingRangeKind", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.FoldingRangeKind;
  }
});
Object.defineProperty(exports, "FormattingOptions", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.FormattingOptions;
  }
});
Object.defineProperty(exports, "Hover", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Hover;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Location;
  }
});
Object.defineProperty(exports, "Position", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Position;
  }
});
Object.defineProperty(exports, "Range", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Range;
  }
});
Object.defineProperty(exports, "SymbolInformation", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.SymbolInformation;
  }
});
Object.defineProperty(exports, "SymbolKind", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.SymbolKind;
  }
});
Object.defineProperty(exports, "TextEdit", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.TextEdit;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.Color;
  }
});
Object.defineProperty(exports, "ColorInformation", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.ColorInformation;
  }
});
Object.defineProperty(exports, "ColorPresentation", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.ColorPresentation;
  }
});
Object.defineProperty(exports, "WorkspaceEdit", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.WorkspaceEdit;
  }
});
Object.defineProperty(exports, "SignatureInformation", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.SignatureInformation;
  }
});
Object.defineProperty(exports, "ParameterInformation", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.ParameterInformation;
  }
});
Object.defineProperty(exports, "DiagnosticSeverity", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.DiagnosticSeverity;
  }
});
Object.defineProperty(exports, "SelectionRange", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.SelectionRange;
  }
});
Object.defineProperty(exports, "TextDocumentIdentifier", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_1.TextDocumentIdentifier;
  }
});
var vscode_html_languageservice_2 = require("vscode-html-languageservice");
Object.defineProperty(exports, "ClientCapabilities", {
  enumerable: true,
  get: function get() {
    return vscode_html_languageservice_2.ClientCapabilities;
  }
});
Object.defineProperty(exports, "TokenType", {
  enumerable: true,
  get: function get() {
    return vscode_html_languageservice_2.TokenType;
  }
});
var vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
Object.defineProperty(exports, "TextDocument", {
  enumerable: true,
  get: function get() {
    return vscode_languageserver_textdocument_1.TextDocument;
  }
});
function isCompletionItemData(value) {
  return value && typeof value.languageId === 'string' && typeof value.uri === 'string' && typeof value.offset === 'number';
}
function getLanguageModes(supportedLanguages, workspace, clientCapabilities, requestService) {
  var htmlLanguageService = (0, vscode_html_languageservice_1.getLanguageService)({
    clientCapabilities: clientCapabilities,
    fileSystemProvider: requestService
  });
  var cssLanguageService = (0, vscode_css_languageservice_1.getCSSLanguageService)({
    clientCapabilities: clientCapabilities,
    fileSystemProvider: requestService
  });
  var documentRegions = (0, languageModelCache_1.getLanguageModelCache)(10, 60, function (document) {
    return (0, embeddedSupport_1.getDocumentRegions)(htmlLanguageService, document);
  });
  var modelCaches = [];
  modelCaches.push(documentRegions);
  var modes = Object.create(null);
  modes['html'] = (0, htmlMode_1.getHTMLMode)(htmlLanguageService, workspace);
  if (supportedLanguages['css']) {
    modes['css'] = (0, cssMode_1.getCSSMode)(cssLanguageService, documentRegions, workspace);
  }
  if (supportedLanguages['javascript']) {
    modes['javascript'] = (0, javascriptMode_1.getJavaScriptMode)(documentRegions, 'javascript', workspace);
    modes['typescript'] = (0, javascriptMode_1.getJavaScriptMode)(documentRegions, 'typescript', workspace);
  }
  return {
    updateDataProviders: function updateDataProviders(dataProviders) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              htmlLanguageService.setDataProviders(true, dataProviders);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getModeAtPosition: function getModeAtPosition(document, position) {
      var languageId = documentRegions.get(document).getLanguageAtPosition(position);
      if (languageId) {
        return modes[languageId];
      }
      return undefined;
    },
    getModesInRange: function getModesInRange(document, range) {
      return documentRegions.get(document).getLanguageRanges(range).map(function (r) {
        return {
          start: r.start,
          end: r.end,
          mode: r.languageId && modes[r.languageId],
          attributeValue: r.attributeValue
        };
      });
    },
    getAllModesInDocument: function getAllModesInDocument(document) {
      var result = [];
      var _iterator = _createForOfIteratorHelper(documentRegions.get(document).getLanguagesInDocument()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var languageId = _step.value;
          var mode = modes[languageId];
          if (mode) {
            result.push(mode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    },
    getAllModes: function getAllModes() {
      var result = [];
      for (var languageId in modes) {
        var mode = modes[languageId];
        if (mode) {
          result.push(mode);
        }
      }
      return result;
    },
    getMode: function getMode(languageId) {
      return modes[languageId];
    },
    onDocumentRemoved: function onDocumentRemoved(document) {
      modelCaches.forEach(function (mc) {
        return mc.onDocumentRemoved(document);
      });
      for (var mode in modes) {
        modes[mode].onDocumentRemoved(document);
      }
    },
    dispose: function dispose() {
      modelCaches.forEach(function (mc) {
        return mc.dispose();
      });
      modelCaches = [];
      for (var mode in modes) {
        modes[mode].dispose();
      }
      modes = {};
    }
  };
}