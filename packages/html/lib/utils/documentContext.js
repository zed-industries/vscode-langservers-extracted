"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.starts-with.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentContext = getDocumentContext;
var strings_1 = require("../utils/strings");
var vscode_uri_1 = require("vscode-uri");
function getDocumentContext(documentUri, workspaceFolders) {
  function getRootFolder() {
    var _iterator = _createForOfIteratorHelper(workspaceFolders),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var folder = _step.value;
        var folderURI = folder.uri;
        if (!(0, strings_1.endsWith)(folderURI, '/')) {
          folderURI = folderURI + '/';
        }
        if ((0, strings_1.startsWith)(documentUri, folderURI)) {
          return folderURI;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return undefined;
  }
  return {
    resolveReference: function resolveReference(ref) {
      var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : documentUri;
      if (ref.match(/^\w[\w\d+.-]*:/)) {
        // starts with a schema
        return ref;
      }
      if (ref[0] === '/') {
        // resolve absolute path against the current workspace folder
        var folderUri = getRootFolder();
        if (folderUri) {
          return folderUri + ref.substr(1);
        }
      }
      var baseUri = vscode_uri_1.URI.parse(base);
      var baseUriDir = baseUri.path.endsWith('/') ? baseUri : vscode_uri_1.Utils.dirname(baseUri);
      return vscode_uri_1.Utils.resolvePath(baseUriDir, ref).toString(true);
    }
  };
}