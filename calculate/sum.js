export function sum(a, b) {
  var sum = a + b;
  console.log(sum);
} // variables are private to the function and cannot be accessed outside the function
var x = 500;

//console.log(module.exports);
//module.exports = { sum, x }; // we can also write module.exports.x = x
// es module syntax
// export sum(a,b)
