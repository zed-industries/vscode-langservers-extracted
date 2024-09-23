"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;
exports.runSafe = runSafe;
var vscode_languageserver_1 = require("@zed-industries/vscode-languageserver");
function formatError(message, err) {
  if (err instanceof Error) {
    var error = err;
    return "".concat(message, ": ").concat(error.message, "\n").concat(error.stack);
  } else if (typeof err === 'string') {
    return "".concat(message, ": ").concat(err);
  } else if (err) {
    return "".concat(message, ": ").concat(err.toString());
  }
  return message;
}
function runSafe(runtime, func, errorVal, errorMessage, token) {
  return new Promise(function (resolve) {
    runtime.timer.setImmediate(function () {
      if (token.isCancellationRequested) {
        resolve(cancelValue());
        return;
      }
      return func().then(function (result) {
        if (token.isCancellationRequested) {
          resolve(cancelValue());
          return;
        } else {
          resolve(result);
        }
      }, function (e) {
        console.error(formatError(errorMessage, e));
        resolve(errorVal);
      });
    });
  });
}
function cancelValue() {
  return new vscode_languageserver_1.ResponseError(vscode_languageserver_1.LSPErrorCodes.RequestCancelled, 'Request cancelled');
}