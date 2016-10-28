'use strict';
var helper = require('../test_helpers');
var factory = helper.factory;
var Models = helper.Models;

describe('factory', function() {
  describe('#cleanUp', function() {
    beforeEach(function (done) {
      factory.createMany('products', 2, [
        {name: 'Thing One'},
        {name: 'Thing Two'},
      ]).then(function (result) {
        done();
      });
    });

    it('should cleanUp without errors or warnings', function() {
      factory.cleanUp();
    });
  });
});
