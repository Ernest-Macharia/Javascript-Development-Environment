//this file is not transpiled,so we must use CommonJs and Es5
//register babel to  transpile before our tests run
require('babel-register')();

//disable webpack features that Mocha does not understand.
require.extensions['.css'] = function() {};