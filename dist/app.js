(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const dom = require('./dom');
let category = [];
let type = [];
let product = [];
let fireworks = [];
let explosives = [];

const initializer = () => {
  explosiveGetter();
};

const categoriesJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./data/categories.json').done((data) => {
      resolve(data.categories);
    }).fail((error) => {
      reject(error);
    });
  });
};

const typesJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./data/types.json').done((data) => {
      resolve(data.types);
    }).fail((error) => {
      reject(error);
    });
  });
};

const productsJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./data/products.json').done((data) => {
      resolve(data.products);
    }).fail((error) => {
      reject(error);
    });
  });
};

const explosiveGetter = () => {
  return categoriesJSON().then((categoryResults) => {
    categoryResults.forEach((categoriesData) => {
      category.push(categoriesData);
    });
    return typesJSON();
  }).then((typeResults) => {
    typeResults.forEach((typesData) => {
      type.push(typesData);
    });
    return productsJSON();
  }).then((productResults) => {
    productResults.forEach((productsData) => {
      for (let key in productsData) {
        let products = productsData[key];
        if (products.id === 0) {
          products.categories = 'Fireworks';
          fireworks.push(products);
        } else {
          products.categories = 'Explosives';
          explosives.push(products);
        }
        product.push(products);
      }
      console.log('products with category', product);
    });
  });
};

$('#fireworks').click(() => {
  dom.domString(fireworks);
});

$('#explosives').click(() => {
  dom.domString(product);
});

module.exports = { initializer, explosiveGetter };


},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';
const data = require('./data');

$(document).ready(() => {
  data.initializer();
});


},{"./data":1}]},{},[3]);
