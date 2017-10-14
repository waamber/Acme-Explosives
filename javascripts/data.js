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

