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
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.repeat.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJavaScriptMode = getJavaScriptMode;
var languageModelCache_1 = require("../languageModelCache");
var languageModes_1 = require("./languageModes");
var strings_1 = require("../utils/strings");
var ts = require("typescript");
var javascriptSemanticTokens_1 = require("./javascriptSemanticTokens");
var JS_WORD_REGEX = /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g;
function getLanguageServiceHost(scriptKind) {
  var compilerOptions = {
    allowNonTsExtensions: true,
    allowJs: true,
    lib: ['lib.es2020.full.d.ts'],
    target: ts.ScriptTarget.Latest,
    moduleResolution: ts.ModuleResolutionKind.Classic,
    experimentalDecorators: false
  };
  var currentTextDocument = languageModes_1.TextDocument.create('init', 'javascript', 1, '');
  var jsLanguageService = Promise.resolve().then(function () {
    return require( /* webpackChunkName: "javascriptLibs" */'./javascriptLibs');
  }).then(function (libs) {
    var host = {
      getCompilationSettings: function getCompilationSettings() {
        return compilerOptions;
      },
      getScriptFileNames: function getScriptFileNames() {
        return [currentTextDocument.uri, 'jquery'];
      },
      getScriptKind: function getScriptKind(fileName) {
        if (fileName === currentTextDocument.uri) {
          return scriptKind;
        }
        return fileName.substr(fileName.length - 2) === 'ts' ? ts.ScriptKind.TS : ts.ScriptKind.JS;
      },
      getScriptVersion: function getScriptVersion(fileName) {
        if (fileName === currentTextDocument.uri) {
          return String(currentTextDocument.version);
        }
        return '1'; // default lib an jquery.d.ts are static
      },
      getScriptSnapshot: function getScriptSnapshot(fileName) {
        var text = '';
        if (fileName === currentTextDocument.uri) {
          text = currentTextDocument.getText();
        } else {
          text = libs.loadLibrary(fileName);
        }
        return {
          getText: function getText(start, end) {
            return text.substring(start, end);
          },
          getLength: function getLength() {
            return text.length;
          },
          getChangeRange: function getChangeRange() {
            return undefined;
          }
        };
      },
      getCurrentDirectory: function getCurrentDirectory() {
        return '';
      },
      getDefaultLibFileName: function getDefaultLibFileName(_options) {
        return 'es2020.full';
      },
      readFile: function readFile(path, _encoding) {
        if (path === currentTextDocument.uri) {
          return currentTextDocument.getText();
        } else {
          return libs.loadLibrary(path);
        }
      },
      fileExists: function fileExists(path) {
        if (path === currentTextDocument.uri) {
          return true;
        } else {
          return !!libs.loadLibrary(path);
        }
      },
      directoryExists: function directoryExists(path) {
        // typescript tries to first find libraries in node_modules/@types and node_modules/@typescript
        // there's no node_modules in our setup
        if (path.startsWith('node_modules')) {
          return false;
        }
        return true;
      }
    };
    return ts.createLanguageService(host);
  });
  return {
    getLanguageService: function getLanguageService(jsDocument) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              currentTextDocument = jsDocument;
              return _context.abrupt("return", jsLanguageService);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getCompilationSettings: function getCompilationSettings() {
      return compilerOptions;
    },
    dispose: function dispose() {
      jsLanguageService.then(function (s) {
        return s.dispose();
      });
    }
  };
}
var ignoredErrors = [1108, /* A_return_statement_can_only_be_used_within_a_function_body_1108 */
2792 /* Cannot_find_module_0_Did_you_mean_to_set_the_moduleResolution_option_to_node_or_to_add_aliases_to_the_paths_option */];
function getJavaScriptMode(documentRegions, languageId, workspace) {
  var jsDocuments = (0, languageModelCache_1.getLanguageModelCache)(10, 60, function (document) {
    return documentRegions.get(document).getEmbeddedDocument(languageId);
  });
  var host = getLanguageServiceHost(languageId === 'javascript' ? ts.ScriptKind.JS : ts.ScriptKind.TS);
  var globalSettings = {};
  function updateHostSettings(settings) {
    var _settings$jsTs, _settings$jsTs2;
    var hostSettings = host.getCompilationSettings();
    hostSettings.experimentalDecorators = settings === null || settings === void 0 || (_settings$jsTs = settings['js/ts']) === null || _settings$jsTs === void 0 || (_settings$jsTs = _settings$jsTs.implicitProjectConfig) === null || _settings$jsTs === void 0 ? void 0 : _settings$jsTs.experimentalDecorators;
    hostSettings.strictNullChecks = settings === null || settings === void 0 || (_settings$jsTs2 = settings['js/ts']) === null || _settings$jsTs2 === void 0 ? void 0 : _settings$jsTs2.implicitProjectConfig.strictNullChecks;
  }
  return {
    getId: function getId() {
      return languageId;
    },
    doValidation: function doValidation(document) {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var settings, jsDocument, languageService, syntaxDiagnostics, semanticDiagnostics;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              settings = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : workspace.settings;
              updateHostSettings(settings);
              jsDocument = jsDocuments.get(document);
              _context2.next = 5;
              return host.getLanguageService(jsDocument);
            case 5:
              languageService = _context2.sent;
              syntaxDiagnostics = languageService.getSyntacticDiagnostics(jsDocument.uri);
              semanticDiagnostics = languageService.getSemanticDiagnostics(jsDocument.uri);
              return _context2.abrupt("return", syntaxDiagnostics.concat(semanticDiagnostics).filter(function (d) {
                return !ignoredErrors.includes(d.code);
              }).map(function (diag) {
                return {
                  range: convertRange(jsDocument, diag),
                  severity: languageModes_1.DiagnosticSeverity.Error,
                  source: languageId,
                  message: ts.flattenDiagnosticMessageText(diag.messageText, '\n')
                };
              }));
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    doComplete: function doComplete(document, position, _documentContext) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var jsDocument, jsLanguageService, offset, completions, replaceRange;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context3.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context3.sent;
              offset = jsDocument.offsetAt(position);
              completions = jsLanguageService.getCompletionsAtPosition(jsDocument.uri, offset, {
                includeExternalModuleExports: false,
                includeInsertTextCompletions: false
              });
              if (completions) {
                _context3.next = 8;
                break;
              }
              return _context3.abrupt("return", {
                isIncomplete: false,
                items: []
              });
            case 8:
              replaceRange = convertRange(jsDocument, (0, strings_1.getWordAtText)(jsDocument.getText(), offset, JS_WORD_REGEX));
              return _context3.abrupt("return", {
                isIncomplete: false,
                items: completions.entries.map(function (entry) {
                  var data = {
                    languageId: languageId,
                    uri: document.uri,
                    offset: offset
                  };
                  return {
                    uri: document.uri,
                    position: position,
                    label: entry.name,
                    sortText: entry.sortText,
                    kind: convertKind(entry.kind),
                    textEdit: languageModes_1.TextEdit.replace(replaceRange, entry.name),
                    data: data
                  };
                })
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    doResolve: function doResolve(document, item) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var jsDocument, jsLanguageService, details;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(0, languageModes_1.isCompletionItemData)(item.data)) {
                _context4.next = 7;
                break;
              }
              jsDocument = jsDocuments.get(document);
              _context4.next = 4;
              return host.getLanguageService(jsDocument);
            case 4:
              jsLanguageService = _context4.sent;
              details = jsLanguageService.getCompletionEntryDetails(jsDocument.uri, item.data.offset, item.label, undefined, undefined, undefined, undefined);
              if (details) {
                item.detail = ts.displayPartsToString(details.displayParts);
                item.documentation = ts.displayPartsToString(details.documentation);
                delete item.data;
              }
            case 7:
              return _context4.abrupt("return", item);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    doHover: function doHover(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var jsDocument, jsLanguageService, info, contents;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context5.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context5.sent;
              info = jsLanguageService.getQuickInfoAtPosition(jsDocument.uri, jsDocument.offsetAt(position));
              if (!info) {
                _context5.next = 8;
                break;
              }
              contents = ts.displayPartsToString(info.displayParts);
              return _context5.abrupt("return", {
                range: convertRange(jsDocument, info.textSpan),
                contents: ['```typescript', contents, '```'].join('\n')
              });
            case 8:
              return _context5.abrupt("return", null);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    doSignatureHelp: function doSignatureHelp(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var jsDocument, jsLanguageService, signHelp, ret;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context6.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context6.sent;
              signHelp = jsLanguageService.getSignatureHelpItems(jsDocument.uri, jsDocument.offsetAt(position), undefined);
              if (!signHelp) {
                _context6.next = 9;
                break;
              }
              ret = {
                activeSignature: signHelp.selectedItemIndex,
                activeParameter: signHelp.argumentIndex,
                signatures: []
              };
              signHelp.items.forEach(function (item) {
                var signature = {
                  label: '',
                  documentation: undefined,
                  parameters: []
                };
                signature.label += ts.displayPartsToString(item.prefixDisplayParts);
                item.parameters.forEach(function (p, i, a) {
                  var label = ts.displayPartsToString(p.displayParts);
                  var parameter = {
                    label: label,
                    documentation: ts.displayPartsToString(p.documentation)
                  };
                  signature.label += label;
                  signature.parameters.push(parameter);
                  if (i < a.length - 1) {
                    signature.label += ts.displayPartsToString(item.separatorDisplayParts);
                  }
                });
                signature.label += ts.displayPartsToString(item.suffixDisplayParts);
                ret.signatures.push(signature);
              });
              return _context6.abrupt("return", ret);
            case 9:
              return _context6.abrupt("return", null);
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    doRename: function doRename(document, position, newName) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var jsDocument, jsLanguageService, jsDocumentPosition, _jsLanguageService$ge, canRename, renameInfos, edits;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context7.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context7.sent;
              jsDocumentPosition = jsDocument.offsetAt(position);
              _jsLanguageService$ge = jsLanguageService.getRenameInfo(jsDocument.uri, jsDocumentPosition), canRename = _jsLanguageService$ge.canRename;
              if (canRename) {
                _context7.next = 8;
                break;
              }
              return _context7.abrupt("return", null);
            case 8:
              renameInfos = jsLanguageService.findRenameLocations(jsDocument.uri, jsDocumentPosition, false, false);
              edits = [];
              renameInfos === null || renameInfos === void 0 || renameInfos.map(function (renameInfo) {
                edits.push({
                  range: convertRange(jsDocument, renameInfo.textSpan),
                  newText: newName
                });
              });
              return _context7.abrupt("return", {
                changes: _defineProperty({}, document.uri, edits)
              });
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    findDocumentHighlight: function findDocumentHighlight(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var jsDocument, jsLanguageService, highlights, out, _iterator, _step, entry, _iterator2, _step2, highlight;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context8.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context8.sent;
              highlights = jsLanguageService.getDocumentHighlights(jsDocument.uri, jsDocument.offsetAt(position), [jsDocument.uri]);
              out = [];
              _iterator = _createForOfIteratorHelper(highlights || []);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  entry = _step.value;
                  _iterator2 = _createForOfIteratorHelper(entry.highlightSpans);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      highlight = _step2.value;
                      out.push({
                        range: convertRange(jsDocument, highlight.textSpan),
                        kind: highlight.kind === 'writtenReference' ? languageModes_1.DocumentHighlightKind.Write : languageModes_1.DocumentHighlightKind.Text
                      });
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return _context8.abrupt("return", out);
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    findDocumentSymbols: function findDocumentSymbols(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var jsDocument, jsLanguageService, items, result, existing, collectSymbols;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context9.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context9.sent;
              items = jsLanguageService.getNavigationBarItems(jsDocument.uri);
              if (!items) {
                _context9.next = 11;
                break;
              }
              result = [];
              existing = Object.create(null);
              collectSymbols = function collectSymbols(item, containerLabel) {
                var sig = item.text + item.kind + item.spans[0].start;
                if (item.kind !== 'script' && !existing[sig]) {
                  var symbol = {
                    name: item.text,
                    kind: convertSymbolKind(item.kind),
                    location: {
                      uri: document.uri,
                      range: convertRange(jsDocument, item.spans[0])
                    },
                    containerName: containerLabel
                  };
                  existing[sig] = true;
                  result.push(symbol);
                  containerLabel = item.text;
                }
                if (item.childItems && item.childItems.length > 0) {
                  var _iterator3 = _createForOfIteratorHelper(item.childItems),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var child = _step3.value;
                      collectSymbols(child, containerLabel);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              };
              items.forEach(function (item) {
                return collectSymbols(item);
              });
              return _context9.abrupt("return", result);
            case 11:
              return _context9.abrupt("return", []);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    findDefinition: function findDefinition(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var jsDocument, jsLanguageService, definition;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context10.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context10.sent;
              definition = jsLanguageService.getDefinitionAtPosition(jsDocument.uri, jsDocument.offsetAt(position));
              if (!definition) {
                _context10.next = 7;
                break;
              }
              return _context10.abrupt("return", definition.filter(function (d) {
                return d.fileName === jsDocument.uri;
              }).map(function (d) {
                return {
                  uri: document.uri,
                  range: convertRange(jsDocument, d.textSpan)
                };
              }));
            case 7:
              return _context10.abrupt("return", null);
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    findReferences: function findReferences(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var jsDocument, jsLanguageService, references;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context11.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context11.sent;
              references = jsLanguageService.getReferencesAtPosition(jsDocument.uri, jsDocument.offsetAt(position));
              if (!references) {
                _context11.next = 7;
                break;
              }
              return _context11.abrupt("return", references.filter(function (d) {
                return d.fileName === jsDocument.uri;
              }).map(function (d) {
                return {
                  uri: document.uri,
                  range: convertRange(jsDocument, d.textSpan)
                };
              }));
            case 7:
              return _context11.abrupt("return", []);
            case 8:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    getSelectionRange: function getSelectionRange(document, position) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var jsDocument, jsLanguageService, convertSelectionRange, range;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              convertSelectionRange = function _convertSelectionRang(selectionRange) {
                var parent = selectionRange.parent ? convertSelectionRange(selectionRange.parent) : undefined;
                return languageModes_1.SelectionRange.create(convertRange(jsDocument, selectionRange.textSpan), parent);
              };
              jsDocument = jsDocuments.get(document);
              _context12.next = 4;
              return host.getLanguageService(jsDocument);
            case 4:
              jsLanguageService = _context12.sent;
              range = jsLanguageService.getSmartSelectionRange(jsDocument.uri, jsDocument.offsetAt(position));
              return _context12.abrupt("return", convertSelectionRange(range));
            case 7:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    format: function format(document, range, formatParams) {
      var _arguments2 = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var settings, jsDocument, jsLanguageService, formatterSettings, initialIndentLevel, formatSettings, start, end, lastLineRange, edits, _result, _iterator4, _step4, edit;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              settings = _arguments2.length > 3 && _arguments2[3] !== undefined ? _arguments2[3] : globalSettings;
              jsDocument = documentRegions.get(document).getEmbeddedDocument('javascript', true);
              _context13.next = 4;
              return host.getLanguageService(jsDocument);
            case 4:
              jsLanguageService = _context13.sent;
              formatterSettings = settings && settings.javascript && settings.javascript.format;
              initialIndentLevel = computeInitialIndent(document, range, formatParams);
              formatSettings = convertOptions(formatParams, formatterSettings, initialIndentLevel + 1);
              start = jsDocument.offsetAt(range.start);
              end = jsDocument.offsetAt(range.end);
              lastLineRange = null;
              if (range.end.line > range.start.line && (range.end.character === 0 || (0, strings_1.isWhitespaceOnly)(jsDocument.getText().substr(end - range.end.character, range.end.character)))) {
                end -= range.end.character;
                lastLineRange = languageModes_1.Range.create(languageModes_1.Position.create(range.end.line, 0), range.end);
              }
              edits = jsLanguageService.getFormattingEditsForRange(jsDocument.uri, start, end, formatSettings);
              if (!edits) {
                _context13.next = 19;
                break;
              }
              _result = [];
              _iterator4 = _createForOfIteratorHelper(edits);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  edit = _step4.value;
                  if (edit.span.start >= start && edit.span.start + edit.span.length <= end) {
                    _result.push({
                      range: convertRange(jsDocument, edit.span),
                      newText: edit.newText
                    });
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              if (lastLineRange) {
                _result.push({
                  range: lastLineRange,
                  newText: generateIndent(initialIndentLevel, formatParams)
                });
              }
              return _context13.abrupt("return", _result);
            case 19:
              return _context13.abrupt("return", []);
            case 20:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }))();
    },
    getFoldingRanges: function getFoldingRanges(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var jsDocument, jsLanguageService, spans, ranges, _iterator5, _step5, span, curr, startLine, endLine, foldingRange, match;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context14.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context14.sent;
              spans = jsLanguageService.getOutliningSpans(jsDocument.uri);
              ranges = [];
              _iterator5 = _createForOfIteratorHelper(spans);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  span = _step5.value;
                  curr = convertRange(jsDocument, span.textSpan);
                  startLine = curr.start.line;
                  endLine = curr.end.line;
                  if (startLine < endLine) {
                    foldingRange = {
                      startLine: startLine,
                      endLine: endLine
                    };
                    match = document.getText(curr).match(/^\s*\/(?:(\/\s*#(?:end)?region\b)|(\*|\/))/);
                    if (match) {
                      foldingRange.kind = match[1] ? languageModes_1.FoldingRangeKind.Region : languageModes_1.FoldingRangeKind.Comment;
                    }
                    ranges.push(foldingRange);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              return _context14.abrupt("return", ranges);
            case 9:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }))();
    },
    onDocumentRemoved: function onDocumentRemoved(document) {
      jsDocuments.onDocumentRemoved(document);
    },
    getSemanticTokens: function getSemanticTokens(document) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var jsDocument, jsLanguageService;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              jsDocument = jsDocuments.get(document);
              _context15.next = 3;
              return host.getLanguageService(jsDocument);
            case 3:
              jsLanguageService = _context15.sent;
              return _context15.abrupt("return", _toConsumableArray((0, javascriptSemanticTokens_1.getSemanticTokens)(jsLanguageService, jsDocument, jsDocument.uri)));
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }))();
    },
    getSemanticTokenLegend: function getSemanticTokenLegend() {
      return (0, javascriptSemanticTokens_1.getSemanticTokenLegend)();
    },
    dispose: function dispose() {
      host.dispose();
      jsDocuments.dispose();
    }
  };
}
function convertRange(document, span) {
  if (typeof span.start === 'undefined') {
    var pos = document.positionAt(0);
    return languageModes_1.Range.create(pos, pos);
  }
  var startPosition = document.positionAt(span.start);
  var endPosition = document.positionAt(span.start + (span.length || 0));
  return languageModes_1.Range.create(startPosition, endPosition);
}
function convertKind(kind) {
  switch (kind) {
    case "primitive type" /* Kind.primitiveType */:
    case "keyword" /* Kind.keyword */:
      return languageModes_1.CompletionItemKind.Keyword;
    case "const" /* Kind.const */:
    case "let" /* Kind.let */:
    case "var" /* Kind.variable */:
    case "local var" /* Kind.localVariable */:
    case "alias" /* Kind.alias */:
    case "parameter" /* Kind.parameter */:
      return languageModes_1.CompletionItemKind.Variable;
    case "property" /* Kind.memberVariable */:
    case "getter" /* Kind.memberGetAccessor */:
    case "setter" /* Kind.memberSetAccessor */:
      return languageModes_1.CompletionItemKind.Field;
    case "function" /* Kind.function */:
    case "local function" /* Kind.localFunction */:
      return languageModes_1.CompletionItemKind.Function;
    case "method" /* Kind.method */:
    case "construct" /* Kind.constructSignature */:
    case "call" /* Kind.callSignature */:
    case "index" /* Kind.indexSignature */:
      return languageModes_1.CompletionItemKind.Method;
    case "enum" /* Kind.enum */:
      return languageModes_1.CompletionItemKind.Enum;
    case "enum member" /* Kind.enumMember */:
      return languageModes_1.CompletionItemKind.EnumMember;
    case "module" /* Kind.module */:
    case "external module name" /* Kind.externalModuleName */:
      return languageModes_1.CompletionItemKind.Module;
    case "class" /* Kind.class */:
    case "type" /* Kind.type */:
      return languageModes_1.CompletionItemKind.Class;
    case "interface" /* Kind.interface */:
      return languageModes_1.CompletionItemKind.Interface;
    case "warning" /* Kind.warning */:
      return languageModes_1.CompletionItemKind.Text;
    case "script" /* Kind.script */:
      return languageModes_1.CompletionItemKind.File;
    case "directory" /* Kind.directory */:
      return languageModes_1.CompletionItemKind.Folder;
    case "string" /* Kind.string */:
      return languageModes_1.CompletionItemKind.Constant;
    default:
      return languageModes_1.CompletionItemKind.Property;
  }
}
function convertSymbolKind(kind) {
  switch (kind) {
    case "module" /* Kind.module */:
      return languageModes_1.SymbolKind.Module;
    case "class" /* Kind.class */:
      return languageModes_1.SymbolKind.Class;
    case "enum" /* Kind.enum */:
      return languageModes_1.SymbolKind.Enum;
    case "enum member" /* Kind.enumMember */:
      return languageModes_1.SymbolKind.EnumMember;
    case "interface" /* Kind.interface */:
      return languageModes_1.SymbolKind.Interface;
    case "index" /* Kind.indexSignature */:
      return languageModes_1.SymbolKind.Method;
    case "call" /* Kind.callSignature */:
      return languageModes_1.SymbolKind.Method;
    case "method" /* Kind.method */:
      return languageModes_1.SymbolKind.Method;
    case "property" /* Kind.memberVariable */:
      return languageModes_1.SymbolKind.Property;
    case "getter" /* Kind.memberGetAccessor */:
      return languageModes_1.SymbolKind.Property;
    case "setter" /* Kind.memberSetAccessor */:
      return languageModes_1.SymbolKind.Property;
    case "var" /* Kind.variable */:
      return languageModes_1.SymbolKind.Variable;
    case "let" /* Kind.let */:
      return languageModes_1.SymbolKind.Variable;
    case "const" /* Kind.const */:
      return languageModes_1.SymbolKind.Variable;
    case "local var" /* Kind.localVariable */:
      return languageModes_1.SymbolKind.Variable;
    case "alias" /* Kind.alias */:
      return languageModes_1.SymbolKind.Variable;
    case "function" /* Kind.function */:
      return languageModes_1.SymbolKind.Function;
    case "local function" /* Kind.localFunction */:
      return languageModes_1.SymbolKind.Function;
    case "construct" /* Kind.constructSignature */:
      return languageModes_1.SymbolKind.Constructor;
    case "constructor" /* Kind.constructorImplementation */:
      return languageModes_1.SymbolKind.Constructor;
    case "type parameter" /* Kind.typeParameter */:
      return languageModes_1.SymbolKind.TypeParameter;
    case "string" /* Kind.string */:
      return languageModes_1.SymbolKind.String;
    default:
      return languageModes_1.SymbolKind.Variable;
  }
}
function convertOptions(options, formatSettings, initialIndentLevel) {
  return {
    convertTabsToSpaces: options.insertSpaces,
    tabSize: options.tabSize,
    indentSize: options.tabSize,
    indentStyle: ts.IndentStyle.Smart,
    newLineCharacter: '\n',
    baseIndentSize: options.tabSize * initialIndentLevel,
    insertSpaceAfterCommaDelimiter: Boolean(!formatSettings || formatSettings.insertSpaceAfterCommaDelimiter),
    insertSpaceAfterConstructor: Boolean(formatSettings && formatSettings.insertSpaceAfterConstructor),
    insertSpaceAfterSemicolonInForStatements: Boolean(!formatSettings || formatSettings.insertSpaceAfterSemicolonInForStatements),
    insertSpaceBeforeAndAfterBinaryOperators: Boolean(!formatSettings || formatSettings.insertSpaceBeforeAndAfterBinaryOperators),
    insertSpaceAfterKeywordsInControlFlowStatements: Boolean(!formatSettings || formatSettings.insertSpaceAfterKeywordsInControlFlowStatements),
    insertSpaceAfterFunctionKeywordForAnonymousFunctions: Boolean(!formatSettings || formatSettings.insertSpaceAfterFunctionKeywordForAnonymousFunctions),
    insertSpaceBeforeFunctionParenthesis: Boolean(formatSettings && formatSettings.insertSpaceBeforeFunctionParenthesis),
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: Boolean(formatSettings && formatSettings.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis),
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: Boolean(formatSettings && formatSettings.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets),
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: Boolean(formatSettings && formatSettings.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces),
    insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: Boolean(!formatSettings || formatSettings.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces),
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: Boolean(formatSettings && formatSettings.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces),
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: Boolean(formatSettings && formatSettings.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces),
    insertSpaceAfterTypeAssertion: Boolean(formatSettings && formatSettings.insertSpaceAfterTypeAssertion),
    placeOpenBraceOnNewLineForControlBlocks: Boolean(formatSettings && formatSettings.placeOpenBraceOnNewLineForFunctions),
    placeOpenBraceOnNewLineForFunctions: Boolean(formatSettings && formatSettings.placeOpenBraceOnNewLineForControlBlocks),
    semicolons: formatSettings === null || formatSettings === void 0 ? void 0 : formatSettings.semicolons
  };
}
function computeInitialIndent(document, range, options) {
  var lineStart = document.offsetAt(languageModes_1.Position.create(range.start.line, 0));
  var content = document.getText();
  var i = lineStart;
  var nChars = 0;
  var tabSize = options.tabSize || 4;
  while (i < content.length) {
    var ch = content.charAt(i);
    if (ch === ' ') {
      nChars++;
    } else if (ch === '\t') {
      nChars += tabSize;
    } else {
      break;
    }
    i++;
  }
  return Math.floor(nChars / tabSize);
}
function generateIndent(level, options) {
  if (options.insertSpaces) {
    return (0, strings_1.repeat)(' ', level * options.tabSize);
  } else {
    return (0, strings_1.repeat)('\t', level);
  }
}