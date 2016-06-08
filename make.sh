#!/bin/bash -e
npm update
browserify main.js -o bundle.js
echo "edit this make.sh file to copy the finished files: index.html and bundle.js --  to your web server"
# here is what I use to copy it to my server. 
# replace this with your own deployment code
# INSTALL=/var/web/192.168.1.10/editor/
# mkdir -p $INSTALL
# cp index.html $INSTALL 
# cp bundle.js $INSTALL
