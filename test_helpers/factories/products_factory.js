'use strict';
module.exports = function (factory, Models) {
  factory.define('products', Models.products, {
    name: 'Foo'
  });
};
