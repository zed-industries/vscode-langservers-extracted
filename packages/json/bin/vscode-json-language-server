#!/usr/bin/env node
const MIN_NODE = "v20.0.0";
if (process.version < MIN_NODE) {
  console.error(`Node >={MIN_NODE} required`);
  process.exit(1);
}

const path = require("path");
const fs = require("fs");

const packageDir = path.dirname(fs.realpathSync(process.argv[1]));
const packageJson = path.join(packageDir, "..", "package.json");
const { name, version, main } = JSON.parse(
  fs.readFileSync(packageJson, "utf8"),
);
const ver = `${name} ${version} (node ${process.version}, ${process.execPath})`;
const command = process.argv.slice(2)[0];

switch (command) {
  case undefined:
  case "-h":
  case "--help":
    console.log(`Usage: ${name} [--stdio|--node-ipc|--socket=<number>]`);
    break;
  case "-version":
  case "--version":
    console.log(ver);
    break;
  default:
    // console.error(`Starting ${ver} with ${command}`);
    require(path.join("..", main));
    break;
}
