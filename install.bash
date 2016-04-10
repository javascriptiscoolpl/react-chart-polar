#!/bin/bash

npm install
browserify -t [ babelify --presets [ es2015 react ] ] src/app.js -o build/app.js
