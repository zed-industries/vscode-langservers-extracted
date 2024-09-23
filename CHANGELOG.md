# Changelog

## Unreleased

- Create npm packages for individual language servers (css, eslint, html, json)
- Main package is now a meta package that includes all language servers
- Switch to @zed-industries/* namespace for all packages
- Remove broken code for `markdown` and `anycode`
- Templatize entrypoint (templates/cli.js)
  - Script shared by all four language servers
  - Add `--help`: `[--stdio|--node-ipc|--socket=<number>]`
  - Add `--version`: pulls version number from package.json
  - Show help if run without argument instead of traceback
- Upstream versions of `vscode`, `vscode-eslint` are now pegged to commits.
- Remove unnecessary code (dist/{tests,browser} and *.map) from package
- Remove unncessary dependencies (e.g. no more mocoa, etc)
  - Shrunk full install from 91MiB to <4.5MiB
- Switch from `yarn` to `npm` (upstream vscode switched away from `yarn`)
- Update scripts/depcheck.js: Checks new packages match upstream versions.
- New npm scripts:
  - `npm run depcheck`: `syncpack list-mismatches`, `npx depcheck` and `depcheck.js`
  - `npm run check`: `npx prettier --check` and `npm run depcheck`
  - `npm run fix`: `npx prettier --write`, `syncpack fix-mismatches`  and `syncpack format`


## [v4.10.3] - 2024-09-23 (unreleased)

- Capture `vscode-html-language-server` generated artifact in-repo.

## [v4.10.2] - 2024-05-16

- Cleanup packages. Released version.

## [v4.10.1] - 2024-05-16

- Customizations for html language server on a [vscode-languageserver fork](https://github.com/zed-industries/vscode-languageserver).

## [v4.10.0] - 2024-05-07

- No changes
- Upstream release (fork point)

##

[v4.10.3](https://github.com/zed-industries/vscode-langservers-extracted/compare/v4.10.2...v4.10.3)
[v4.10.2](https://github.com/zed-industries/vscode-langservers-extracted/compare/v4.10.1...v4.10.2)
[v4.10.1](https://github.com/zed-industries/vscode-langservers-extracted/compare/v4.10.0...v4.10.1)
[v4.10.0](https://github.com/zed-industries/vscode-langservers-extracted/commit/0a7a86dd080ec1adfb61732c17ba59492719c001)
