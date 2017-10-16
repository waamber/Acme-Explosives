'use strict';
const dom = require('./dom');
let category = [];
let type = [];
let product = [];
let fireworks = [];
let explosives = [];
let firecrackers = [];
let poppers = [];
let fountains = [];
let low = [];
let high = [];
let nuclear = [];

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
      if (typesData.id === 0) {

        fireworks.push(typesData);
        typesData.id = category.id;
      } else {
        explosives.push(typesData);
      }
    });
    return productsJSON();
  }).then((productResults) => {
    productResults.forEach((productsData) => {
      for (let key in productsData) {
        let products = productsData[key];
        if (products.type === 0) {
          firecrackers.push(products);
        } else if (products.type === 1) {
          poppers.push(products);
        } else if (products.type === 2) {
          fountains.push(products);
        } else if (products.type === 3) {
          low.push(products);
        } else if (products.type === 4) {
          high.push(products);
        } else if (products.type === 5) {
          nuclear.push(products);
        }
      }
    });
  });
};

$('#fireworks').click(() => {
  dom.domString(fireworks);
});

$('#explosives').click(() => {
  dom.domString(explosives);
});

$('#fountains').click(() => {
  dom.domString(fountains);
});

$('#firecrackers').click(() => {
  dom.domString(firecrackers);
});

$('#poppers').click(() => {
  dom.domString(poppers);
});

$('#low').click(() => {
  dom.domString(low);
});

$('#high').click(() => {
  dom.domString(high);
});

$('#nuclear').click(() => {
  dom.domString(nuclear);
});

module.exports = { initializer, explosiveGetter };

