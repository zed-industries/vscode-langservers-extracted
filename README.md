# vscode-langservers-extracted

HTML/CSS/JSON/ESLint language servers extracted from [vscode](https://github.com/Microsoft/vscode).

## Fork

This is a [Zed Industries](https://zed.dev) fork of [hrsh7th/vscode-langservers-extracted](https://github.com/hrsh7th/vscode-langservers-extracted). Please see [CHANGELOG.md](CHANGELOG.md) for more.

# Usage

Install npm packages for the server(s) you need:

- `npm install -g @zed-industries/vscode-css-language-server`
- `npm install -g @zed-industries/vscode-eslint-language-server`
- `npm install -g @zed-industries/vscode-html-language-server`
- `npm install -g @zed-industries/vscode-json-language-server`

Or you can install all four with `npm i -g @zed-industries/vscode-langservers-extracted`.

# Why?

- Microsoft provided awesome Language Servers for the community but it didn't update for a long time.
- Currently, the latest css-language-server is improved a bit than `vscode-css-langserver-bin`.

# Usage

After that, you get the following commands.

Ready

- `vscode-html-language-server`
- `vscode-css-language-server`
- `vscode-json-language-server`
- `vscode-eslint-language-server`

# Build

> [!NOTE]
> This package was previously built with yarn (because VSCode was built using yarn).
> VSCode has switched to vanilla npm so similarly we no longer use yarn to build.

## Install locally:

```
npm install
```

## Update

Change what you need and then:

```
./update.sh
```

### Release

```bash
npm run depcheck
npm run fix
# npm run release
```

# LICENSE

- [Package License](./LICENSE) (MIT)
- [VSCode License](https://github.com/microsoft/vscode/blob/main/LICENSE.txt) (MIT)
- [VSCode Eslint License](https://github.com/microsoft/vscode-eslint/blob/master/License.txt) (MIT)
