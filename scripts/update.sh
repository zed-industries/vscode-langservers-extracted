#!/bin/sh

set -euo pipefail
set -x

VSCODE_REPO="https://github.com/microsoft/vscode"
VSCODE_ELINT_REPO="https://github.com/microsoft/vscode-eslint"

VSCODE_COMMIT="88056f2c97d6bde7cf151bfff35b4c3e2c65b407"
VSCODE_ELINT_COMMIT="790646388696511b2665a4d119bf0fb713dd990d"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/../

if [ "$(node -v | sed 's/^v//' | cut -d. -f1)" -lt 18 ]; then
    echo "Node.js version must be 18.0.0 or greater" && exit 1
fi

# TODO: Add back html
for lang in css eslint json; do
    rm -rf packages/${lang}/lib
    mkdir -p packages/${lang}/lib
    cp templates/cli.js packages/${lang}/bin/vscode-${lang}-language-server
done

# Start with a clean tmp
rm -rf tmp/
mkdir -p tmp/{vscode,vscode-eslint}

# Extensions extracted from vscode repo
pushd tmp/vscode
    git init
    git remote add origin "${VSCODE_REPO}"
    git fetch --depth 1 origin "${VSCODE_COMMIT}"
    git checkout FETCH_HEAD
    npm install
    npm run compile
    # TODO: Add back html
    for lang in css json; do
        cp -r extensions/${lang}-language-features/server/out/* ../../packages/${lang}/lib/
    done
popd

# Eslint extension
pushd tmp/vscode-eslint
    git init
    git remote add origin "${VSCODE_ELINT_REPO}"
    git fetch --depth 1 origin "${VSCODE_ELINT_COMMIT}"
    git checkout FETCH_HEAD
    npm install
    npm run compile
    cp -r server/out/* ../../packages/eslint/lib
popd

# Cleanup excess cruft
find packages/*/lib -name "*.map" -type f -delete
rm -rf packages/*/lib/browser
rm -rf packages/*/lib/test

npm run check
npm run depcheck
