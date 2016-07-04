require('babel-polyfill');

var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

var context = require.context('./src', true, /\.spec\.spec\.js$/);
context.keys().forEach(context);
