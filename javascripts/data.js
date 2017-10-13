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

