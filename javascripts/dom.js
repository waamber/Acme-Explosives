'use strict';
const data = ('./data');


const domString = (products) => {
  products.forEach((product) => {
    var domString = '';
    domString += `<div>`;
    domString += `<h1>${product.name}</h1>`;
    domString += `<h1>${product.category}</h1>`;
    domString += `<div>${product.type}</div>`;
    domString += `</div>`;
    printToDom(domString);
  });
};

const printToDom = (productsString) => {
  $('#boom').append(productsString);
};

module.exports = { domString };