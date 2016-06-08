#!/bin/bash -e
npm update
browserify main.js -o bundle.js
INSTALL=/var/web/192.168.1.10/editor/
mkdir -p $INSTALL
cp index.html $INSTALL 
cp bundle.js $INSTALL
