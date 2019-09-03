const PaintCan = function(litres){
  this.litres = litres;
  this.full = true;
}

PaintCan.prototype.use = function () {
  this.full = false;
};

module.exports = PaintCan;
