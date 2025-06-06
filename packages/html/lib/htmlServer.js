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
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.for-each.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = startServer;
var vscode_languageserver_1 = require("@zed-industries/vscode-languageserver");
var languageModes_1 = require("./modes/languageModes");
var formatting_1 = require("./modes/formatting");
var arrays_1 = require("./utils/arrays");
var documentContext_1 = require("./utils/documentContext");
var vscode_uri_1 = require("vscode-uri");
var runner_1 = require("./utils/runner");
var validation_1 = require("./utils/validation");
var htmlFolding_1 = require("./modes/htmlFolding");
var customData_1 = require("./customData");
var selectionRanges_1 = require("./modes/selectionRanges");
var semanticTokens_1 = require("./modes/semanticTokens");
var requests_1 = require("./requests");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var CustomDataChangedNotification;
(function (CustomDataChangedNotification) {
  CustomDataChangedNotification.type = new vscode_languageserver_1.NotificationType('html/customDataChanged');
})(CustomDataChangedNotification || (CustomDataChangedNotification = {}));
var CustomDataContent;
(function (CustomDataContent) {
  CustomDataContent.type = new vscode_languageserver_1.RequestType('html/customDataContent');
})(CustomDataContent || (CustomDataContent = {}));
var AutoInsertRequest;
(function (AutoInsertRequest) {
  AutoInsertRequest.type = new vscode_languageserver_1.RequestType('html/autoInsert');
})(AutoInsertRequest || (AutoInsertRequest = {}));
var SemanticTokenRequest;
(function (SemanticTokenRequest) {
  SemanticTokenRequest.type = new vscode_languageserver_1.RequestType('html/semanticTokens');
})(SemanticTokenRequest || (SemanticTokenRequest = {}));
var SemanticTokenLegendRequest;
(function (SemanticTokenLegendRequest) {
  SemanticTokenLegendRequest.type = new vscode_languageserver_1.RequestType0('html/semanticTokenLegend');
})(SemanticTokenLegendRequest || (SemanticTokenLegendRequest = {}));
function startServer(connection, runtime) {
  // Create a text document manager.
  var documents = new vscode_languageserver_1.TextDocuments(languageModes_1.TextDocument);
  // Make the text document manager listen on the connection
  // for open, change and close text document events
  documents.listen(connection);
  var workspaceFolders = [];
  var languageModes;
  var diagnosticsSupport;
  var clientSnippetSupport = false;
  var dynamicFormatterRegistration = false;
  var scopedSettingsSupport = false;
  var workspaceFoldersSupport = false;
  var foldingRangeLimit = Number.MAX_VALUE;
  var formatterMaxNumberOfEdits = Number.MAX_VALUE;
  var snippetEditSupport = false;
  var customDataRequestService = {
    getContent: function getContent(uri) {
      return connection.sendRequest(CustomDataContent.type, uri);
    }
  };
  var globalSettings = {};
  var documentSettings = {};
  // remove document settings on close
  documents.onDidClose(function (e) {
    delete documentSettings[e.document.uri];
  });
  function getDocumentSettings(textDocument, needsDocumentSettings) {
    if (scopedSettingsSupport && needsDocumentSettings()) {
      var promise = documentSettings[textDocument.uri];
      if (!promise) {
        var scopeUri = textDocument.uri;
        var sections = ['css', 'html', 'javascript', 'js/ts'];
        var configRequestParam = {
          items: sections.map(function (section) {
            return {
              scopeUri: scopeUri,
              section: section
            };
          })
        };
        promise = connection.sendRequest(vscode_languageserver_1.ConfigurationRequest.type, configRequestParam).then(function (s) {
          return {
            css: s[0],
            html: s[1],
            javascript: s[2],
            'js/ts': s[3]
          };
        });
        documentSettings[textDocument.uri] = promise;
      }
      return promise;
    }
    return Promise.resolve(undefined);
  }
  // After the server has started the client sends an initialize request. The server receives
  // in the passed params the rootPath of the workspace plus the client capabilities
  connection.onInitialize(function (params) {
    var _initializationOption, _initializationOption2;
    var initializationOptions = params.initializationOptions || {};
    workspaceFolders = params.workspaceFolders;
    if (!Array.isArray(workspaceFolders)) {
      workspaceFolders = [];
      if (params.rootPath) {
        workspaceFolders.push({
          name: '',
          uri: vscode_uri_1.URI.file(params.rootPath).toString()
        });
      }
    }
    var handledSchemas = (_initializationOption = initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.handledSchemas) !== null && _initializationOption !== void 0 ? _initializationOption : ['file'];
    var fileSystemProvider = (0, requests_1.getFileSystemProvider)(handledSchemas, connection, runtime);
    var workspace = {
      get settings() {
        return globalSettings;
      },
      get folders() {
        return workspaceFolders;
      }
    };
    languageModes = (0, languageModes_1.getLanguageModes)((initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.embeddedLanguages) || {
      css: true,
      javascript: true
    }, workspace, params.capabilities, fileSystemProvider);
    var dataPaths = (initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.dataPaths) || [];
    (0, customData_1.fetchHTMLDataProviders)(dataPaths, customDataRequestService).then(function (dataProviders) {
      languageModes.updateDataProviders(dataProviders);
    });
    documents.onDidClose(function (e) {
      languageModes.onDocumentRemoved(e.document);
    });
    connection.onShutdown(function () {
      languageModes.dispose();
    });
    function getClientCapability(name, def) {
      var keys = name.split('.');
      var c = params.capabilities;
      for (var i = 0; c && i < keys.length; i++) {
        if (!c.hasOwnProperty(keys[i])) {
          return def;
        }
        c = c[keys[i]];
      }
      return c;
    }
    clientSnippetSupport = getClientCapability('textDocument.completion.completionItem.snippetSupport', false);
    dynamicFormatterRegistration = getClientCapability('textDocument.rangeFormatting.dynamicRegistration', false) && typeof (initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.provideFormatter) !== 'boolean';
    scopedSettingsSupport = getClientCapability('workspace.configuration', false);
    workspaceFoldersSupport = getClientCapability('workspace.workspaceFolders', false);
    foldingRangeLimit = getClientCapability('textDocument.foldingRange.rangeLimit', Number.MAX_VALUE);
    formatterMaxNumberOfEdits = (initializationOptions === null || initializationOptions === void 0 || (_initializationOption2 = initializationOptions.customCapabilities) === null || _initializationOption2 === void 0 || (_initializationOption2 = _initializationOption2.rangeFormatting) === null || _initializationOption2 === void 0 ? void 0 : _initializationOption2.editLimit) || Number.MAX_VALUE;
    snippetEditSupport = getClientCapability('workspace.workspaceEdit.snippetEditSupport', false);
    var supportsDiagnosticPull = getClientCapability('textDocument.diagnostic', undefined);
    if (supportsDiagnosticPull === undefined) {
      diagnosticsSupport = (0, validation_1.registerDiagnosticsPushSupport)(documents, connection, runtime, validateTextDocument);
    } else {
      diagnosticsSupport = (0, validation_1.registerDiagnosticsPullSupport)(documents, connection, runtime, validateTextDocument);
    }
    var capabilities = {
      textDocumentSync: vscode_languageserver_1.TextDocumentSyncKind.Incremental,
      completionProvider: clientSnippetSupport ? {
        resolveProvider: true,
        triggerCharacters: ['.', ':', '<', '"', '=', '/']
      } : undefined,
      hoverProvider: true,
      documentHighlightProvider: true,
      documentRangeFormattingProvider: (initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.provideFormatter) === true,
      documentFormattingProvider: (initializationOptions === null || initializationOptions === void 0 ? void 0 : initializationOptions.provideFormatter) === true,
      documentLinkProvider: {
        resolveProvider: false
      },
      documentSymbolProvider: true,
      definitionProvider: true,
      signatureHelpProvider: {
        triggerCharacters: ['(']
      },
      referencesProvider: true,
      colorProvider: {},
      foldingRangeProvider: true,
      selectionRangeProvider: true,
      renameProvider: true,
      linkedEditingRangeProvider: true,
      diagnosticProvider: {
        documentSelector: null,
        interFileDependencies: false,
        workspaceDiagnostics: false
      }
    };
    return {
      capabilities: capabilities
    };
  });
  connection.onInitialized(function () {
    if (workspaceFoldersSupport) {
      connection.client.register(vscode_languageserver_1.DidChangeWorkspaceFoldersNotification.type);
      connection.onNotification(vscode_languageserver_1.DidChangeWorkspaceFoldersNotification.type, function (e) {
        var _diagnosticsSupport;
        var toAdd = e.event.added;
        var toRemove = e.event.removed;
        var updatedFolders = [];
        if (workspaceFolders) {
          var _iterator = _createForOfIteratorHelper(workspaceFolders),
            _step;
          try {
            var _loop = function _loop() {
              var folder = _step.value;
              if (!toRemove.some(function (r) {
                return r.uri === folder.uri;
              }) && !toAdd.some(function (r) {
                return r.uri === folder.uri;
              })) {
                updatedFolders.push(folder);
              }
            };
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        workspaceFolders = updatedFolders.concat(toAdd);
        (_diagnosticsSupport = diagnosticsSupport) === null || _diagnosticsSupport === void 0 || _diagnosticsSupport.requestRefresh();
      });
    }
    if (snippetEditSupport) {
      documents.onDidChangeContent( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(documentChange) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var document, _iterator2, _step2, edit, pos, mode, modeId, typ, o;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        document = documentChange.document;
                        if (!(documentChange.changes && documentChange.changes.length == 1)) {
                          _context.next = 42;
                          break;
                        }
                        _iterator2 = _createForOfIteratorHelper(documentChange.changes);
                        _context.prev = 3;
                        _iterator2.s();
                      case 5:
                        if ((_step2 = _iterator2.n()).done) {
                          _context.next = 34;
                          break;
                        }
                        edit = _step2.value;
                        if (!vscode_languageserver_1.TextDocumentContentChangeEvent.isIncremental(edit)) {
                          _context.next = 32;
                          break;
                        }
                        pos = {
                          line: edit.range.start.line,
                          character: edit.range.start.character + 1
                        };
                        if (!(pos.character > 0)) {
                          _context.next = 32;
                          break;
                        }
                        mode = languageModes.getModeAtPosition(document, languageModes_1.Position.create(pos.line, pos.character - 1));
                        if (!(!mode || !mode.doAutoInsert)) {
                          _context.next = 13;
                          break;
                        }
                        return _context.abrupt("continue", 32);
                      case 13:
                        modeId = mode.getId();
                        if (!(modeId != "css" && modeId != "html" && modeId != "javascript" && modeId != "js/ts")) {
                          _context.next = 16;
                          break;
                        }
                        return _context.abrupt("continue", 32);
                      case 16:
                        if (!(globalSettings !== null && globalSettings !== undefined && modeId in globalSettings && 'tagAutoclosing' in globalSettings[modeId] && globalSettings[modeId].tagAutoclosing !== true)) {
                          _context.next = 18;
                          break;
                        }
                        return _context.abrupt("continue", 32);
                      case 18:
                        typ = 'autoClose';
                        if (!(edit.text === '=')) {
                          _context.next = 23;
                          break;
                        }
                        typ = 'autoQuote';
                        _context.next = 25;
                        break;
                      case 23:
                        if (!(edit.text !== '>' && edit.text !== '/')) {
                          _context.next = 25;
                          break;
                        }
                        return _context.abrupt("continue", 32);
                      case 25:
                        _context.next = 27;
                        return mode.doAutoInsert(document, pos, typ);
                      case 27:
                        o = _context.sent;
                        if (!(typeof o !== "string")) {
                          _context.next = 30;
                          break;
                        }
                        return _context.abrupt("continue", 32);
                      case 30:
                        _context.next = 32;
                        return connection.sendRequest(vscode_languageserver_1.ApplyWorkspaceEditRequest.type, {
                          edit: {
                            documentChanges: [vscode_languageserver_1.TextDocumentEdit.create(vscode_languageserver_types_1.OptionalVersionedTextDocumentIdentifier.create(document.uri, document.version), [{
                              snippet: vscode_languageserver_1.StringValue.createSnippet(o),
                              range: languageModes_1.Range.create(pos, pos)
                            }])]
                          }
                        });
                      case 32:
                        _context.next = 5;
                        break;
                      case 34:
                        _context.next = 39;
                        break;
                      case 36:
                        _context.prev = 36;
                        _context.t0 = _context["catch"](3);
                        _iterator2.e(_context.t0);
                      case 39:
                        _context.prev = 39;
                        _iterator2.f();
                        return _context.finish(39);
                      case 42:
                        return _context.abrupt("return");
                      case 43:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[3, 36, 39, 42]]);
                })), undefined, "Error while handling notification", vscode_languageserver_1.CancellationToken.None);
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  });
  var formatterRegistrations = null;
  // The settings have changed. Is send on server activation as well.
  connection.onDidChangeConfiguration(function (change) {
    var _diagnosticsSupport2;
    globalSettings = change.settings;
    documentSettings = {}; // reset all document settings
    (_diagnosticsSupport2 = diagnosticsSupport) === null || _diagnosticsSupport2 === void 0 || _diagnosticsSupport2.requestRefresh();
    // dynamically enable & disable the formatter
    if (dynamicFormatterRegistration) {
      var enableFormatter = globalSettings && globalSettings.html && globalSettings.html.format && globalSettings.html.format.enable;
      if (enableFormatter) {
        if (!formatterRegistrations) {
          var documentSelector = [{
            language: 'html'
          }, {
            language: 'handlebars'
          }];
          formatterRegistrations = [connection.client.register(vscode_languageserver_1.DocumentRangeFormattingRequest.type, {
            documentSelector: documentSelector
          }), connection.client.register(vscode_languageserver_1.DocumentFormattingRequest.type, {
            documentSelector: documentSelector
          })];
        }
      } else if (formatterRegistrations) {
        formatterRegistrations.forEach(function (p) {
          return p.then(function (r) {
            return r.dispose();
          });
        });
        formatterRegistrations = null;
      }
    }
  });
  function isValidationEnabled(languageId) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalSettings;
    var validationSettings = settings && settings.html && settings.html.validate;
    if (validationSettings) {
      return languageId === 'css' && validationSettings.styles !== false || languageId === 'javascript' && validationSettings.scripts !== false;
    }
    return true;
  }
  function validateTextDocument(_x2) {
    return _validateTextDocument.apply(this, arguments);
  }
  function _validateTextDocument() {
    _validateTextDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(textDocument) {
      var version, diagnostics, modes, settings, latestTextDocument, _iterator6, _step6, mode;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            version = textDocument.version;
            diagnostics = [];
            if (!(textDocument.languageId === 'html')) {
              _context22.next = 33;
              break;
            }
            modes = languageModes.getAllModesInDocument(textDocument);
            _context22.next = 7;
            return getDocumentSettings(textDocument, function () {
              return modes.some(function (m) {
                return !!m.doValidation;
              });
            });
          case 7:
            settings = _context22.sent;
            latestTextDocument = documents.get(textDocument.uri);
            if (!(latestTextDocument && latestTextDocument.version === version)) {
              _context22.next = 33;
              break;
            }
            // check no new version has come in after in after the async op
            _iterator6 = _createForOfIteratorHelper(modes);
            _context22.prev = 11;
            _iterator6.s();
          case 13:
            if ((_step6 = _iterator6.n()).done) {
              _context22.next = 24;
              break;
            }
            mode = _step6.value;
            if (!(mode.doValidation && isValidationEnabled(mode.getId(), settings))) {
              _context22.next = 22;
              break;
            }
            _context22.t0 = (0, arrays_1.pushAll);
            _context22.t1 = diagnostics;
            _context22.next = 20;
            return mode.doValidation(latestTextDocument, settings);
          case 20:
            _context22.t2 = _context22.sent;
            (0, _context22.t0)(_context22.t1, _context22.t2);
          case 22:
            _context22.next = 13;
            break;
          case 24:
            _context22.next = 29;
            break;
          case 26:
            _context22.prev = 26;
            _context22.t3 = _context22["catch"](11);
            _iterator6.e(_context22.t3);
          case 29:
            _context22.prev = 29;
            _iterator6.f();
            return _context22.finish(29);
          case 32:
            return _context22.abrupt("return", diagnostics);
          case 33:
            _context22.next = 38;
            break;
          case 35:
            _context22.prev = 35;
            _context22.t4 = _context22["catch"](0);
            connection.console.error((0, runner_1.formatError)("Error while validating ".concat(textDocument.uri), _context22.t4));
          case 38:
            return _context22.abrupt("return", []);
          case 39:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 35], [11, 26, 29, 32]]);
    }));
    return _validateTextDocument.apply(this, arguments);
  }
  connection.onCompletion( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(textDocumentPosition, token) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var document, mode, doComplete, settings, documentContext;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    document = documents.get(textDocumentPosition.textDocument.uri);
                    if (document) {
                      _context3.next = 3;
                      break;
                    }
                    return _context3.abrupt("return", null);
                  case 3:
                    mode = languageModes.getModeAtPosition(document, textDocumentPosition.position);
                    if (!(!mode || !mode.doComplete)) {
                      _context3.next = 6;
                      break;
                    }
                    return _context3.abrupt("return", {
                      isIncomplete: true,
                      items: []
                    });
                  case 6:
                    doComplete = mode.doComplete;
                    _context3.next = 9;
                    return getDocumentSettings(document, function () {
                      return doComplete.length > 2;
                    });
                  case 9:
                    settings = _context3.sent;
                    documentContext = (0, documentContext_1.getDocumentContext)(document.uri, workspaceFolders);
                    return _context3.abrupt("return", doComplete(document, textDocumentPosition.position, documentContext, settings));
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            })), null, "Error while computing completions for ".concat(textDocumentPosition.textDocument.uri), token));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  connection.onCompletionResolve(function (item, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var data, mode, document;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            data = item.data;
            if (!(0, languageModes_1.isCompletionItemData)(data)) {
              _context5.next = 6;
              break;
            }
            mode = languageModes.getMode(data.languageId);
            document = documents.get(data.uri);
            if (!(mode && mode.doResolve && document)) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", mode.doResolve(document, item));
          case 6:
            return _context5.abrupt("return", item);
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })), item, "Error while resolving completion proposal", token);
  });
  connection.onHover(function (textDocumentPosition, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var document, mode, doHover, settings;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            document = documents.get(textDocumentPosition.textDocument.uri);
            if (!document) {
              _context6.next = 9;
              break;
            }
            mode = languageModes.getModeAtPosition(document, textDocumentPosition.position);
            doHover = mode === null || mode === void 0 ? void 0 : mode.doHover;
            if (!doHover) {
              _context6.next = 9;
              break;
            }
            _context6.next = 7;
            return getDocumentSettings(document, function () {
              return doHover.length > 2;
            });
          case 7:
            settings = _context6.sent;
            return _context6.abrupt("return", doHover(document, textDocumentPosition.position, settings));
          case 9:
            return _context6.abrupt("return", null);
          case 10:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    })), null, "Error while computing hover for ".concat(textDocumentPosition.textDocument.uri), token);
  });
  connection.onDocumentHighlight(function (documentHighlightParams, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var document, mode;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            document = documents.get(documentHighlightParams.textDocument.uri);
            if (!document) {
              _context7.next = 5;
              break;
            }
            mode = languageModes.getModeAtPosition(document, documentHighlightParams.position);
            if (!(mode && mode.findDocumentHighlight)) {
              _context7.next = 5;
              break;
            }
            return _context7.abrupt("return", mode.findDocumentHighlight(document, documentHighlightParams.position));
          case 5:
            return _context7.abrupt("return", []);
          case 6:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    })), [], "Error while computing document highlights for ".concat(documentHighlightParams.textDocument.uri), token);
  });
  connection.onDefinition(function (definitionParams, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var document, mode;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            document = documents.get(definitionParams.textDocument.uri);
            if (!document) {
              _context8.next = 5;
              break;
            }
            mode = languageModes.getModeAtPosition(document, definitionParams.position);
            if (!(mode && mode.findDefinition)) {
              _context8.next = 5;
              break;
            }
            return _context8.abrupt("return", mode.findDefinition(document, definitionParams.position));
          case 5:
            return _context8.abrupt("return", []);
          case 6:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })), null, "Error while computing definitions for ".concat(definitionParams.textDocument.uri), token);
  });
  connection.onReferences(function (referenceParams, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var document, mode;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            document = documents.get(referenceParams.textDocument.uri);
            if (!document) {
              _context9.next = 5;
              break;
            }
            mode = languageModes.getModeAtPosition(document, referenceParams.position);
            if (!(mode && mode.findReferences)) {
              _context9.next = 5;
              break;
            }
            return _context9.abrupt("return", mode.findReferences(document, referenceParams.position));
          case 5:
            return _context9.abrupt("return", []);
          case 6:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    })), [], "Error while computing references for ".concat(referenceParams.textDocument.uri), token);
  });
  connection.onSignatureHelp(function (signatureHelpParms, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var document, mode;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            document = documents.get(signatureHelpParms.textDocument.uri);
            if (!document) {
              _context10.next = 5;
              break;
            }
            mode = languageModes.getModeAtPosition(document, signatureHelpParms.position);
            if (!(mode && mode.doSignatureHelp)) {
              _context10.next = 5;
              break;
            }
            return _context10.abrupt("return", mode.doSignatureHelp(document, signatureHelpParms.position));
          case 5:
            return _context10.abrupt("return", null);
          case 6:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    })), null, "Error while computing signature help for ".concat(signatureHelpParms.textDocument.uri), token);
  });
  function onFormat(_x5, _x6, _x7) {
    return _onFormat.apply(this, arguments);
  }
  function _onFormat() {
    _onFormat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(textDocument, range, options) {
      var document, settings, unformattedTags, enabledModes, edits, newText;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            document = documents.get(textDocument.uri);
            if (!document) {
              _context23.next = 15;
              break;
            }
            _context23.next = 4;
            return getDocumentSettings(document, function () {
              return true;
            });
          case 4:
            settings = _context23.sent;
            if (!settings) {
              settings = globalSettings;
            }
            unformattedTags = settings && settings.html && settings.html.format && settings.html.format.unformatted || '';
            enabledModes = {
              css: !unformattedTags.match(/\bstyle\b/),
              javascript: !unformattedTags.match(/\bscript\b/)
            };
            _context23.next = 10;
            return (0, formatting_1.format)(languageModes, document, range !== null && range !== void 0 ? range : getFullRange(document), options, settings, enabledModes);
          case 10:
            edits = _context23.sent;
            if (!(edits.length > formatterMaxNumberOfEdits)) {
              _context23.next = 14;
              break;
            }
            newText = languageModes_1.TextDocument.applyEdits(document, edits);
            return _context23.abrupt("return", [vscode_languageserver_1.TextEdit.replace(getFullRange(document), newText)]);
          case 14:
            return _context23.abrupt("return", edits);
          case 15:
            return _context23.abrupt("return", []);
          case 16:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    return _onFormat.apply(this, arguments);
  }
  connection.onDocumentRangeFormatting(function (formatParams, token) {
    return (0, runner_1.runSafe)(runtime, function () {
      return onFormat(formatParams.textDocument, formatParams.range, formatParams.options);
    }, [], "Error while formatting range for ".concat(formatParams.textDocument.uri), token);
  });
  connection.onDocumentFormatting(function (formatParams, token) {
    return (0, runner_1.runSafe)(runtime, function () {
      return onFormat(formatParams.textDocument, undefined, formatParams.options);
    }, [], "Error while formatting ".concat(formatParams.textDocument.uri), token);
  });
  connection.onDocumentLinks(function (documentLinkParam, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var document, links, documentContext, _iterator3, _step3, m;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            document = documents.get(documentLinkParam.textDocument.uri);
            links = [];
            if (!document) {
              _context11.next = 26;
              break;
            }
            documentContext = (0, documentContext_1.getDocumentContext)(document.uri, workspaceFolders);
            _iterator3 = _createForOfIteratorHelper(languageModes.getAllModesInDocument(document));
            _context11.prev = 5;
            _iterator3.s();
          case 7:
            if ((_step3 = _iterator3.n()).done) {
              _context11.next = 18;
              break;
            }
            m = _step3.value;
            if (!m.findDocumentLinks) {
              _context11.next = 16;
              break;
            }
            _context11.t0 = (0, arrays_1.pushAll);
            _context11.t1 = links;
            _context11.next = 14;
            return m.findDocumentLinks(document, documentContext);
          case 14:
            _context11.t2 = _context11.sent;
            (0, _context11.t0)(_context11.t1, _context11.t2);
          case 16:
            _context11.next = 7;
            break;
          case 18:
            _context11.next = 23;
            break;
          case 20:
            _context11.prev = 20;
            _context11.t3 = _context11["catch"](5);
            _iterator3.e(_context11.t3);
          case 23:
            _context11.prev = 23;
            _iterator3.f();
            return _context11.finish(23);
          case 26:
            return _context11.abrupt("return", links);
          case 27:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[5, 20, 23, 26]]);
    })), [], "Error while document links for ".concat(documentLinkParam.textDocument.uri), token);
  });
  connection.onDocumentSymbol(function (documentSymbolParms, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var document, symbols, _iterator4, _step4, m;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            document = documents.get(documentSymbolParms.textDocument.uri);
            symbols = [];
            if (!document) {
              _context12.next = 25;
              break;
            }
            _iterator4 = _createForOfIteratorHelper(languageModes.getAllModesInDocument(document));
            _context12.prev = 4;
            _iterator4.s();
          case 6:
            if ((_step4 = _iterator4.n()).done) {
              _context12.next = 17;
              break;
            }
            m = _step4.value;
            if (!m.findDocumentSymbols) {
              _context12.next = 15;
              break;
            }
            _context12.t0 = (0, arrays_1.pushAll);
            _context12.t1 = symbols;
            _context12.next = 13;
            return m.findDocumentSymbols(document);
          case 13:
            _context12.t2 = _context12.sent;
            (0, _context12.t0)(_context12.t1, _context12.t2);
          case 15:
            _context12.next = 6;
            break;
          case 17:
            _context12.next = 22;
            break;
          case 19:
            _context12.prev = 19;
            _context12.t3 = _context12["catch"](4);
            _iterator4.e(_context12.t3);
          case 22:
            _context12.prev = 22;
            _iterator4.f();
            return _context12.finish(22);
          case 25:
            return _context12.abrupt("return", symbols);
          case 26:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[4, 19, 22, 25]]);
    })), [], "Error while computing document symbols for ".concat(documentSymbolParms.textDocument.uri), token);
  });
  connection.onRequest(vscode_languageserver_1.DocumentColorRequest.type, function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var infos, document, _iterator5, _step5, m;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            infos = [];
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context13.next = 25;
              break;
            }
            _iterator5 = _createForOfIteratorHelper(languageModes.getAllModesInDocument(document));
            _context13.prev = 4;
            _iterator5.s();
          case 6:
            if ((_step5 = _iterator5.n()).done) {
              _context13.next = 17;
              break;
            }
            m = _step5.value;
            if (!m.findDocumentColors) {
              _context13.next = 15;
              break;
            }
            _context13.t0 = (0, arrays_1.pushAll);
            _context13.t1 = infos;
            _context13.next = 13;
            return m.findDocumentColors(document);
          case 13:
            _context13.t2 = _context13.sent;
            (0, _context13.t0)(_context13.t1, _context13.t2);
          case 15:
            _context13.next = 6;
            break;
          case 17:
            _context13.next = 22;
            break;
          case 19:
            _context13.prev = 19;
            _context13.t3 = _context13["catch"](4);
            _iterator5.e(_context13.t3);
          case 22:
            _context13.prev = 22;
            _iterator5.f();
            return _context13.finish(22);
          case 25:
            return _context13.abrupt("return", infos);
          case 26:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[4, 19, 22, 25]]);
    })), [], "Error while computing document colors for ".concat(params.textDocument.uri), token);
  });
  connection.onRequest(vscode_languageserver_1.ColorPresentationRequest.type, function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var document, mode;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context14.next = 5;
              break;
            }
            mode = languageModes.getModeAtPosition(document, params.range.start);
            if (!(mode && mode.getColorPresentations)) {
              _context14.next = 5;
              break;
            }
            return _context14.abrupt("return", mode.getColorPresentations(document, params.color, params.range));
          case 5:
            return _context14.abrupt("return", []);
          case 6:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    })), [], "Error while computing color presentations for ".concat(params.textDocument.uri), token);
  });
  connection.onRequest(AutoInsertRequest.type, function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var document, pos, mode;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context15.next = 7;
              break;
            }
            pos = params.position;
            if (!(pos.character > 0)) {
              _context15.next = 7;
              break;
            }
            mode = languageModes.getModeAtPosition(document, languageModes_1.Position.create(pos.line, pos.character - 1));
            if (!(mode && mode.doAutoInsert)) {
              _context15.next = 7;
              break;
            }
            return _context15.abrupt("return", mode.doAutoInsert(document, pos, params.kind));
          case 7:
            return _context15.abrupt("return", null);
          case 8:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    })), null, "Error while computing auto insert actions for ".concat(params.textDocument.uri), token);
  });
  connection.onFoldingRanges(function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var document;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context16.next = 3;
              break;
            }
            return _context16.abrupt("return", (0, htmlFolding_1.getFoldingRanges)(languageModes, document, foldingRangeLimit, token));
          case 3:
            return _context16.abrupt("return", null);
          case 4:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    })), null, "Error while computing folding regions for ".concat(params.textDocument.uri), token);
  });
  connection.onSelectionRanges(function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var document;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context17.next = 3;
              break;
            }
            return _context17.abrupt("return", (0, selectionRanges_1.getSelectionRanges)(languageModes, document, params.positions));
          case 3:
            return _context17.abrupt("return", []);
          case 4:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    })), [], "Error while computing selection ranges for ".concat(params.textDocument.uri), token);
  });
  connection.onRenameRequest(function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var document, position, mode;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            position = params.position;
            if (!document) {
              _context18.next = 6;
              break;
            }
            mode = languageModes.getModeAtPosition(document, params.position);
            if (!(mode && mode.doRename)) {
              _context18.next = 6;
              break;
            }
            return _context18.abrupt("return", mode.doRename(document, position, params.newName));
          case 6:
            return _context18.abrupt("return", null);
          case 7:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    })), null, "Error while computing rename for ".concat(params.textDocument.uri), token);
  });
  connection.languages.onLinkedEditingRange(function (params, token) {
    return /* todo remove when microsoft/vscode-languageserver-node#700 fixed */(0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var document, pos, mode, ranges;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context19.next = 11;
              break;
            }
            pos = params.position;
            if (!(pos.character > 0)) {
              _context19.next = 11;
              break;
            }
            mode = languageModes.getModeAtPosition(document, languageModes_1.Position.create(pos.line, pos.character - 1));
            if (!(mode && mode.doLinkedEditing)) {
              _context19.next = 11;
              break;
            }
            _context19.next = 8;
            return mode.doLinkedEditing(document, pos);
          case 8:
            ranges = _context19.sent;
            if (!ranges) {
              _context19.next = 11;
              break;
            }
            return _context19.abrupt("return", {
              ranges: ranges
            });
          case 11:
            return _context19.abrupt("return", null);
          case 12:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    })), null, "Error while computing synced regions for ".concat(params.textDocument.uri), token);
  });
  var semanticTokensProvider;
  function getSemanticTokenProvider() {
    if (!semanticTokensProvider) {
      semanticTokensProvider = (0, semanticTokens_1.newSemanticTokenProvider)(languageModes);
    }
    return semanticTokensProvider;
  }
  connection.onRequest(SemanticTokenRequest.type, function (params, token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var document;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            document = documents.get(params.textDocument.uri);
            if (!document) {
              _context20.next = 3;
              break;
            }
            return _context20.abrupt("return", getSemanticTokenProvider().getSemanticTokens(document, params.ranges));
          case 3:
            return _context20.abrupt("return", null);
          case 4:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    })), null, "Error while computing semantic tokens for ".concat(params.textDocument.uri), token);
  });
  connection.onRequest(SemanticTokenLegendRequest.type, function (token) {
    return (0, runner_1.runSafe)(runtime, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            return _context21.abrupt("return", getSemanticTokenProvider().legend);
          case 1:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    })), null, "Error while computing semantic tokens legend", token);
  });
  connection.onNotification(CustomDataChangedNotification.type, function (dataPaths) {
    (0, customData_1.fetchHTMLDataProviders)(dataPaths, customDataRequestService).then(function (dataProviders) {
      languageModes.updateDataProviders(dataProviders);
    });
  });
  // Listen on the connection
  connection.listen();
}
function getFullRange(document) {
  return languageModes_1.Range.create(languageModes_1.Position.create(0, 0), document.positionAt(document.getText().length));
}