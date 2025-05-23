"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.keys.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguageModelCache = getLanguageModelCache;
function getLanguageModelCache(maxEntries, cleanupIntervalTimeInSec, parse) {
  var languageModels = {};
  var nModels = 0;
  var cleanupInterval = undefined;
  if (cleanupIntervalTimeInSec > 0) {
    cleanupInterval = setInterval(function () {
      var cutoffTime = Date.now() - cleanupIntervalTimeInSec * 1000;
      var uris = Object.keys(languageModels);
      for (var _i = 0, _uris = uris; _i < _uris.length; _i++) {
        var uri = _uris[_i];
        var languageModelInfo = languageModels[uri];
        if (languageModelInfo.cTime < cutoffTime) {
          delete languageModels[uri];
          nModels--;
        }
      }
    }, cleanupIntervalTimeInSec * 1000);
  }
  return {
    get: function get(document) {
      var version = document.version;
      var languageId = document.languageId;
      var languageModelInfo = languageModels[document.uri];
      if (languageModelInfo && languageModelInfo.version === version && languageModelInfo.languageId === languageId) {
        languageModelInfo.cTime = Date.now();
        return languageModelInfo.languageModel;
      }
      var languageModel = parse(document);
      languageModels[document.uri] = {
        languageModel: languageModel,
        version: version,
        languageId: languageId,
        cTime: Date.now()
      };
      if (!languageModelInfo) {
        nModels++;
      }
      if (nModels === maxEntries) {
        var oldestTime = Number.MAX_VALUE;
        var oldestUri = null;
        for (var uri in languageModels) {
          var _languageModelInfo = languageModels[uri];
          if (_languageModelInfo.cTime < oldestTime) {
            oldestUri = uri;
            oldestTime = _languageModelInfo.cTime;
          }
        }
        if (oldestUri) {
          delete languageModels[oldestUri];
          nModels--;
        }
      }
      return languageModel;
    },
    onDocumentRemoved: function onDocumentRemoved(document) {
      var uri = document.uri;
      if (languageModels[uri]) {
        delete languageModels[uri];
        nModels--;
      }
    },
    dispose: function dispose() {
      if (typeof cleanupInterval !== "undefined") {
        clearInterval(cleanupInterval);
        cleanupInterval = undefined;
        languageModels = {};
        nModels = 0;
      }
    }
  };
}