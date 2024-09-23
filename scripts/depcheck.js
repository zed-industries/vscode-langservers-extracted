#!/usr/bin/env node

const fs = require("fs");

let packages = {
  "packages/css/package.json": [
    "upstream/vscode/package.json",
    "upstream/vscode/extensions/css-language-features/package.json",
  ],
  "packages/html/package.json": [
    "upstream/vscode/package.json",
    "upstream/vscode/extensions/html-language-features/package.json",
  ],
  "packages/json/package.json": [
    "upstream/vscode/package.json",
    "upstream/vscode/extensions/json-language-features/package.json",
  ],
  "packages/eslint/package.json": [
    "upstream/vscode-eslint/server/package.json",
  ],
};

let all_deps = {};
let ok = true;

// Check for dependencies matching upstream versions
for (const our_filename in packages) {
  let us = JSON.parse(fs.readFileSync(our_filename, "utf8")).dependencies;
  all_deps[our_filename] = us;
  for (const filename of packages[our_filename]) {
    let them = JSON.parse(fs.readFileSync(filename, "utf8")).dependencies;
    for (const [pkg, ver] of Object.entries(us)) {
      let pkg2 = pkg.startsWith("@vscode/l10n") ? pkg + "-dev" : pkg;
      if (pkg2 in them && them[pkg2] != ver) {
        console.log(`${our_filename}:`);
        console.log(`  "${pkg}": "${ver}",`);
        console.log(`  "${pkg2}": "${them[pkg2]}",`);
        console.log();
        ok = false;
      }
    }
  }
}

if (!ok) process.exit(1);
