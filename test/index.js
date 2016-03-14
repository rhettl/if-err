'use strict';

var assert = require('assert');
var error  = require('../index');

describe('Error Package', function () {

  describe('if', function () {
    it('should throw error when given as first argument', function () {
      assert.throws(function () {
        error.if(new Error());
      }, Error);
    });
    it('should throw error when first argument true', function () {
      assert.throws(function () {
        error.if(true);
      }, Error);
    });
    it('should throw error when first argument truthy', function () {
      assert.throws(function () {
        error.if('testing');
      }, Error);
    });
    it('should not throw error when first argument false', function () {
      assert.doesNotThrow(function () {
        error.if(false);
      });
    });
    it('should throw error when first argument falsey', function () {
      assert.doesNotThrow(function () {
        error.if(null);
      });
    });
    it('puts message in error when first argument truthy and second string', function () {
      assert.throws(function () {
        error.if(true, 'testing');
      }, /testing/);
    });
    it('puts message in error.message when first argument Error and second string', function () {
      assert.throws(function () {
        error.if(new Error('123'), 'testing');
      }, /(testing.*123|123.*testing)/m);
    });
    it('calls second argument if first is true and second argument is a function with value or error as argument', function () {
      assert.doesNotThrow(function () {
        error.if(true, function (check) {
          assert(check instanceof Error);
        });
      });
    });
    it('doesn\'t call second argument if first is falsey and second argument is a function', function () {
      assert.doesNotThrow(function () {
        error.if(false, function () {
          assert.fail('called', 'not to be called', 'this should not have been called.');
        });
      });
    });
  });


  describe('ifNot', function () {
    it('should throw error when given as first argument', function () {
      assert.throws(function () {
        error.ifNot(new Error());
      }, Error);
    });
    it('should throw error when first argument false', function () {
      assert.throws(function () {
        error.ifNot(false);
      }, Error);
    });
    it('should not throw error when first argument true', function () {
      assert.doesNotThrow(function () {
        error.ifNot(true);
      });
    });
    it('should throw error when first argument falsey', function () {
      assert.throws(function () {
        error.ifNot(null);
      }, Error);
    });
    it('should not throw error when first argument truthy', function () {
      assert.doesNotThrow(function () {
        error.ifNot('test');
      });
    });
    it('puts message in error when first argument falsey and second string', function () {
      assert.throws(function () {
        error.ifNot(false, 'testing');
      }, /testing/);
    });
  });

});
