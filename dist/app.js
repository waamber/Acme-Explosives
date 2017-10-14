(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const dom = require('./dom');

let category = [];
let type = [];
let product = [];

const initializer = () => {
  explosiveGetter();
};


$('#fireworks').click(() => {
  dom.domString(product);
});

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
  return categoriesJSON().then((categoryResults) => {//.then()-happens when resolved // .catch()-happens when it rejects
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
      product.push(productsData);

    });
    // makeDinos();  // console.log(dinosaurs);
  });
};

const getCategories = () => {
  for (var i = 0; i < type.length; i++) {
    if (type.id === category.id) {
      console.log(type);
    }
  }
};

const getTypes = () => {
  return type;
};

const getProducts = () => {
  return product;
};

console.log('categories array', category);
console.log('types array', type);
console.log('products array', product);

module.exports = { initializer, explosiveGetter, getCategories, getTypes, getProducts };


},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';
const data = require('./data');
const dom = require('./dom');

$(document).ready(() => {//document.ready doesn't run code until page is loaded.
  data.initializer();
});


},{"./data":1,"./dom":2}]},{},[3]);
