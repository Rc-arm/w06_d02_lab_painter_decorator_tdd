const assert = require('assert');
const Decorator = require('../decorator');

describe('Decorator', function(){

  let decorator

  beforeEach(function(){
    decorator = new Decorator();
  })

  it('should have empty paint stock', function(){
    const actual = decorator.stock;
    assert.strictEqual(actual, 0);
  })

  it('should be able to add a can of paint to stock', function(){
    decorator.addPaintCan();
    const actual = decorator.stock;
    assert.strictEqual(actual, 1);
  })

})
