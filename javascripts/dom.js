'use strict';
const data = ('./data');

const domString = (products) => {
  products.forEach((product) => {
    var domString = '';
    domString += `<div class='col-md-3 card'>`;
    domString += `<div class="card-heading">`;
    domString += `<h5 class='card-title'>${product.categories}</h4>`;
    domString += `</div>`;
    domString += `<div class='card-body'>`;
    domString += `<div><h1>${product.name}</h1></div>`;
    domString += `<p>${product.description}</p> `;
    domString += `<div>`;
    domString += `</div>`;
    printToDom(domString);
  });
};

const printToDom = (productsString) => {
  $('#boom').append(productsString);
};

module.exports = { domString };