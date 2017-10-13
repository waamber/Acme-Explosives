(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
let category = [];
let type = [];
let product = [];

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
  return categoriesJSON().then((categoryResults) => {//.then()-happens when resolved // .catch()-happens when it rejects
    categoryResults.forEach((categoriesData) => {
      category.push(categoriesData);
      console.log('categories', category);
    });
    return typesJSON();
  }).then((typeResults) => {
    typeResults.forEach((typesData) => {
      type.push(typesData);
      console.log('types', type);
    });
    return productsJSON();
  }).then((productResults) => {
    productResults.forEach((productsData) => {
      product.push(productsData);
      console.log('products', product);
    });
    // makeDinos();  // console.log(dinosaurs);
  });
};


module.exports = { initializer, explosiveGetter };


},{}],2:[function(require,module,exports){
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
},{"./data":1}]},{},[2]);
