"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.starts-with.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeFileFS = getNodeFileFS;
var vscode_uri_1 = require("vscode-uri");
var fs = require("fs");
var vscode_css_languageservice_1 = require("vscode-css-languageservice");
function getNodeFileFS() {
  function ensureFileUri(location) {
    if (!location.startsWith('file:')) {
      throw new Error('fileSystemProvider can only handle file URLs');
    }
  }
  return {
    stat: function stat(location) {
      ensureFileUri(location);
      return new Promise(function (c, e) {
        var uri = vscode_uri_1.URI.parse(location);
        fs.stat(uri.fsPath, function (err, stats) {
          if (err) {
            if (err.code === 'ENOENT') {
              return c({
                type: vscode_css_languageservice_1.FileType.Unknown,
                ctime: -1,
                mtime: -1,
                size: -1
              });
            } else {
              return e(err);
            }
          }
          var type = vscode_css_languageservice_1.FileType.Unknown;
          if (stats.isFile()) {
            type = vscode_css_languageservice_1.FileType.File;
          } else if (stats.isDirectory()) {
            type = vscode_css_languageservice_1.FileType.Directory;
          } else if (stats.isSymbolicLink()) {
            type = vscode_css_languageservice_1.FileType.SymbolicLink;
          }
          c({
            type: type,
            ctime: stats.ctime.getTime(),
            mtime: stats.mtime.getTime(),
            size: stats.size
          });
        });
      });
    },
    readDirectory: function readDirectory(location) {
      ensureFileUri(location);
      return new Promise(function (c, e) {
        var path = vscode_uri_1.URI.parse(location).fsPath;
        fs.readdir(path, {
          withFileTypes: true
        }, function (err, children) {
          if (err) {
            return e(err);
          }
          c(children.map(function (stat) {
            if (stat.isSymbolicLink()) {
              return [stat.name, vscode_css_languageservice_1.FileType.SymbolicLink];
            } else if (stat.isDirectory()) {
              return [stat.name, vscode_css_languageservice_1.FileType.Directory];
            } else if (stat.isFile()) {
              return [stat.name, vscode_css_languageservice_1.FileType.File];
            } else {
              return [stat.name, vscode_css_languageservice_1.FileType.Unknown];
            }
          }));
        });
      });
    }
  };
}