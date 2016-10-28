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

    it('should create two rows in the database', function(done) {
      Models.products.all().then(function (result) {
        result.length.should.equal(2);
        result[0].name.should.equal('Thing One');
        result[1].name.should.equal('Thing Two');
        done();
      });
    });

    it('should cleanUp without errors or warnings', function() {
      factory.cleanUp();
    });
  });
});
