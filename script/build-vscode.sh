#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# prepare
mkdir -p $DIR/../tmp
mkdir -p $DIR/../dist

# clone
cd $DIR/../tmp
git clone --depth=1 --single-branch -b html-tags-as-workspace-edits git@github.com:zed-industries/vscode vscode

# pull
cd $DIR/../tmp/vscode
git clean -fd
git checkout .
git pull --rebase

# npm install
cd $DIR/../tmp/vscode
yarn
cd ./extensions/html-language-features/server
yarn
yarn compile

# copy to dist
cd $DIR/..

npm install

mkdir -p ./dist/html-language-server
cp -r ./tmp/vscode/extensions/html-language-features/server/out/* ./dist/html-language-server/
npx babel ./dist/html-language-server --out-dir ./lib/html-language-server/

