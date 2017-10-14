'use strict';
const data = ('./data');

let output = $('#dinosaur-container');

const domString = (products) => {
  products.forEach((product) => {
    var domString = '';
    domString += `<div>`;
    domString += `<h1>${product.name}</h1>`;
    domString += `<div>${product.description}</div>`;
    domString += `</div>`;
    printToDom(domString);
  });
};



const printToDom = (productsString) => {
  $('#boom').append(productsString);
};

module.exports = { domString };