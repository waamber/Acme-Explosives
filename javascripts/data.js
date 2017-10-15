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


$('#fireworks').click(() => {
  getCategories();
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
      for (let key in productsData) {
        console.log("PRODUCTS", productsData[key]);
        product.push(productsData[key]);

      }


    });
    // product.push(productsData);
  });

  // makeDinos();  // console.log(dinosaurs);

};

const getCategories = () => {
  category.forEach(() => {
    fireworks = [];
    explosives = [];
    if (category.id === 'fireworks') {
      fireworks.push();
    } else {
      explosives.push();
    }
    console.log(fireworks);
    console.log(explosives);
  });
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

