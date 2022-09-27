#!/bin/bash

cd /tmp
git clone git@github.com:mdlufy/media-platform.git
test $? -ne 0 && exit 

cd media-platform/client
npm i
PUBLIC_URL=. npm run build
rm -rf /tmp/media-platform-build
cp -r build /tmp/media-platform-build

cd  /tmp/media-platform
test $? -ne 0 && exit 

git checkout gh-pages
rm -rf /tmp/media-platform/*
mv /tmp/media-platform-build/* /tmp/media-platform
git add .
git commit -m deploy
git push
cd /tmp
rm -rf media-platform
rm -rf media-platform-build
