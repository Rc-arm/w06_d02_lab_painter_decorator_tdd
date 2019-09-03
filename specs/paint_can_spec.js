const assert = require('assert');
const PaintCan = require('../paint_can');

describe('PaintCan', function(){

  let paintCan

  beforeEach(function(){
    paintCan = new PaintCan('10');
  })

  it('should have number of litres of paint', function(){
    const actual = paintCan.litres;
    assert.strictEqual(actual, '10');
  })

  it('paint can is full', function(){
    const actual = paintCan.full;
    assert.strictEqual(actual, true);
  })

  it('paintCan can be emptied', function(){
    paintCan.use();
    const actual = paintCan.full;
    assert.strictEqual(actual, false);
  })

})
