const Decorator = function(){
  this.stock = 0;
}

Decorator.prototype.addPaintCan = function () {
  this.stock ++;
};

module.exports = Decorator;
