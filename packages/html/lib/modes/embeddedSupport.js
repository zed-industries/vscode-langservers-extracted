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
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSS_STYLE_RULE = void 0;
exports.getDocumentRegions = getDocumentRegions;
var languageModes_1 = require("./languageModes");
exports.CSS_STYLE_RULE = '__';
function getDocumentRegions(languageService, document) {
  var regions = [];
  var scanner = languageService.createScanner(document.getText());
  var lastTagName = '';
  var lastAttributeName = null;
  var languageIdFromType = undefined;
  var importedScripts = [];
  var token = scanner.scan();
  while (token !== languageModes_1.TokenType.EOS) {
    switch (token) {
      case languageModes_1.TokenType.StartTag:
        lastTagName = scanner.getTokenText();
        lastAttributeName = null;
        languageIdFromType = 'javascript';
        break;
      case languageModes_1.TokenType.Styles:
        regions.push({
          languageId: 'css',
          start: scanner.getTokenOffset(),
          end: scanner.getTokenEnd()
        });
        break;
      case languageModes_1.TokenType.Script:
        regions.push({
          languageId: languageIdFromType,
          start: scanner.getTokenOffset(),
          end: scanner.getTokenEnd()
        });
        break;
      case languageModes_1.TokenType.AttributeName:
        lastAttributeName = scanner.getTokenText();
        break;
      case languageModes_1.TokenType.AttributeValue:
        if (lastAttributeName === 'src' && lastTagName.toLowerCase() === 'script') {
          var value = scanner.getTokenText();
          if (value[0] === '\'' || value[0] === '"') {
            value = value.substr(1, value.length - 1);
          }
          importedScripts.push(value);
        } else if (lastAttributeName === 'type' && lastTagName.toLowerCase() === 'script') {
          if (/["'](module|(text|application)\/(java|ecma)script|text\/babel)["']/.test(scanner.getTokenText())) {
            languageIdFromType = 'javascript';
          } else if (/["']text\/typescript["']/.test(scanner.getTokenText())) {
            languageIdFromType = 'typescript';
          } else {
            languageIdFromType = undefined;
          }
        } else {
          var attributeLanguageId = getAttributeLanguage(lastAttributeName);
          if (attributeLanguageId) {
            var start = scanner.getTokenOffset();
            var end = scanner.getTokenEnd();
            var firstChar = document.getText()[start];
            if (firstChar === '\'' || firstChar === '"') {
              start++;
              end--;
            }
            regions.push({
              languageId: attributeLanguageId,
              start: start,
              end: end,
              attributeValue: true
            });
          }
        }
        lastAttributeName = null;
        break;
    }
    token = scanner.scan();
  }
  return {
    getLanguageRanges: function getLanguageRanges(range) {
      return _getLanguageRanges(document, regions, range);
    },
    getEmbeddedDocument: function getEmbeddedDocument(languageId, ignoreAttributeValues) {
      return _getEmbeddedDocument(document, regions, languageId, ignoreAttributeValues);
    },
    getLanguageAtPosition: function getLanguageAtPosition(position) {
      return _getLanguageAtPosition(document, regions, position);
    },
    getLanguagesInDocument: function getLanguagesInDocument() {
      return _getLanguagesInDocument(document, regions);
    },
    getImportedScripts: function getImportedScripts() {
      return importedScripts;
    }
  };
}
function _getLanguageRanges(document, regions, range) {
  var result = [];
  var currentPos = range ? range.start : languageModes_1.Position.create(0, 0);
  var currentOffset = range ? document.offsetAt(range.start) : 0;
  var endOffset = range ? document.offsetAt(range.end) : document.getText().length;
  var _iterator = _createForOfIteratorHelper(regions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var region = _step.value;
      if (region.end > currentOffset && region.start < endOffset) {
        var start = Math.max(region.start, currentOffset);
        var startPos = document.positionAt(start);
        if (currentOffset < region.start) {
          result.push({
            start: currentPos,
            end: startPos,
            languageId: 'html'
          });
        }
        var end = Math.min(region.end, endOffset);
        var _endPos = document.positionAt(end);
        if (end > region.start) {
          result.push({
            start: startPos,
            end: _endPos,
            languageId: region.languageId,
            attributeValue: region.attributeValue
          });
        }
        currentOffset = end;
        currentPos = _endPos;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (currentOffset < endOffset) {
    var endPos = range ? range.end : document.positionAt(endOffset);
    result.push({
      start: currentPos,
      end: endPos,
      languageId: 'html'
    });
  }
  return result;
}
function _getLanguagesInDocument(_document, regions) {
  var result = [];
  var _iterator2 = _createForOfIteratorHelper(regions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var region = _step2.value;
      if (region.languageId && result.indexOf(region.languageId) === -1) {
        result.push(region.languageId);
        if (result.length === 3) {
          return result;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  result.push('html');
  return result;
}
function _getLanguageAtPosition(document, regions, position) {
  var offset = document.offsetAt(position);
  var _iterator3 = _createForOfIteratorHelper(regions),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var region = _step3.value;
      if (region.start <= offset) {
        if (offset <= region.end) {
          return region.languageId;
        }
      } else {
        break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return 'html';
}
function _getEmbeddedDocument(document, contents, languageId, ignoreAttributeValues) {
  var currentPos = 0;
  var oldContent = document.getText();
  var result = '';
  var lastSuffix = '';
  var _iterator4 = _createForOfIteratorHelper(contents),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var c = _step4.value;
      if (c.languageId === languageId && (!ignoreAttributeValues || !c.attributeValue)) {
        result = substituteWithWhitespace(result, currentPos, c.start, oldContent, lastSuffix, getPrefix(c));
        result += updateContent(c, oldContent.substring(c.start, c.end));
        currentPos = c.end;
        lastSuffix = getSuffix(c);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  result = substituteWithWhitespace(result, currentPos, oldContent.length, oldContent, lastSuffix, '');
  return languageModes_1.TextDocument.create(document.uri, languageId, document.version, result);
}
function getPrefix(c) {
  if (c.attributeValue) {
    switch (c.languageId) {
      case 'css':
        return exports.CSS_STYLE_RULE + '{';
    }
  }
  return '';
}
function getSuffix(c) {
  if (c.attributeValue) {
    switch (c.languageId) {
      case 'css':
        return '}';
      case 'javascript':
        return ';';
    }
  }
  return '';
}
function updateContent(c, content) {
  if (!c.attributeValue && c.languageId === 'javascript') {
    return content.replace("<!--", "/* ").replace("-->", " */");
  }
  return content;
}
function substituteWithWhitespace(result, start, end, oldContent, before, after) {
  result += before;
  var accumulatedWS = -before.length; // start with a negative value to account for the before string
  for (var i = start; i < end; i++) {
    var ch = oldContent[i];
    if (ch === '\n' || ch === '\r') {
      // only write new lines, skip the whitespace
      accumulatedWS = 0;
      result += ch;
    } else {
      accumulatedWS++;
    }
  }
  result = append(result, ' ', accumulatedWS - after.length);
  result += after;
  return result;
}
function append(result, str, n) {
  while (n > 0) {
    if (n & 1) {
      result += str;
    }
    n >>= 1;
    str += str;
  }
  return result;
}
function getAttributeLanguage(attributeName) {
  var match = attributeName.match(/^(style)$|^(on\w+)$/i);
  if (!match) {
    return null;
  }
  return match[1] ? 'css' : 'javascript';
}