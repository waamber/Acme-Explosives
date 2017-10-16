'use strict';
const data = ('./data');

const domString = (products) => {
  products.forEach((product) => {
    var domString = '';
    domString += `<div class='panel panel-default'>`;
    domString += `<div class="panel-heading">`;
    domString += `<h1 class='panel-title'>${product.categories}</h1>`;
    domString += `</div>`;
    domString += `<div class='panel-body'>`;
    domString += `<h1>${product.name}</h1>`;
    domString += `<p>${product.description}</p>`;
    domString += `<div>`;
    domString += `</div>`;
    printToDom(domString);
  });
};

const printToDom = (productsString) => {
  $('#boom').append(productsString);
};

module.exports = { domString };