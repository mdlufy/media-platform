#!/bin/bash

cd /tmp
git clone git@github.com:mdlufy/media-platform.git
test $? -ne 0 && exit 

cd media-platform/frontend
npm i
ng build --output-path docs --base-href /media-platform/
rm -rf /tmp/media-platform-build
cp -r docs /tmp/media-platform-build

cd  /tmp/media-platform
test $? -ne 0 && exit 

git checkout gh-pages
rm -rf /tmp/media-platform/*
mv /tmp/media-platform-build/* /tmp/media-platform
git add .
git commit -m deploy --allow-empty
git push

cd /tmp
rm -rf media-platform
rm -rf media-platform-build