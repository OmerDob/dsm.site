'use strict';

const path = require('path');

const express = require('express');

var devServer = express();

devServer.use(express.static(path.join(__dirname, 'bin')));
devServer.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

devServer.listen(3000, function () {
    console.log('local dev server is up and running on port 3000');
});