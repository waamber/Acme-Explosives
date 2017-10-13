'use strict';
const data = require('./data');

$(document).ready(() => {//document.ready doesn't run code until page is loaded.
  data.initializer();
});

// $('#fireworks').click((e) => {
//   console.log(e);
//   data.categories();
//   data.types();
//   data.products();
// });