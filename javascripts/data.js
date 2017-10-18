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
    });
  });
};

$('#fireworks').click(() => {
  $('#boom').empty();
  dom.domString(fireworks);
  $('.heading').addClass('hidden');
});

$('#explosives').click(() => {
  $('#boom').empty();
  dom.domString(explosives);
  $('.heading').addClass('hidden');
});

module.exports = { initializer, explosiveGetter };

