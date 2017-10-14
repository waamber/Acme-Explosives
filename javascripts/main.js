'use strict';
const data = require('./data');
const dom = require('./dom');

$(document).ready(() => {//document.ready doesn't run code until page is loaded.
  data.initializer();
});

