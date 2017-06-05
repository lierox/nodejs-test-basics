module.exports.sum = (a,b) => a+b;

module.exports.square = (c) => c*c;

module.exports.addNewPropValue = (obj, value) => {
  obj.newProp = value;
  return obj;
}

module.exports.asyncSquare = (d, callback) => {
  setTimeout( () => {
    callback(d*d);
  },500);
}
