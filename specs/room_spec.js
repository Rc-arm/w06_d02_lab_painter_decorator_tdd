const assert = require('assert');
const Room = require('../room');

describe('Room', function(){

  let room

  beforeEach(function(){
    room = new Room('100');
  });

  it('should have an area in square metres', function(){
    const actual = room.area;
    assert.strictEqual(actual, '100');
  })

  it('should start not painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  })

  it('room can be painted', function(){
    room.decorate();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })

})
