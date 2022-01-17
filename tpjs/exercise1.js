"use strict";

function fibo_it(n) {
   var a = 0, b = 1;
   var sum = 0;
   for (var i = 2; i <= n; i++) {
      sum = a + b;
      a = b;
      b = sum;
   }
   return sum
}


function fiboRec(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fiboRec(n - 1) + fiboRec(n - 2);
}


function fiboArr(array) {
  var res = [];
  for (var i = 0; i < array.length; i++) {
    res.push(fiboRec(array[i]));
  }
  return res;
}


function fiboMap(array) {
  return array.map(fiboRec);
}


/* console.log(fibo_it(0));
console.log(fibo_it(3));
console.log(fibo_it(4));
console.log(fibo_it(5));
console.log(fiboArr([0,3,4,5]));
console.log(fiboMap([0,3,4,5])); */

exports.fibo_it = fibo_it;
exports.fiboRec = fiboRec;
exports.fiboArr = fiboArr;
exports.fiboMap = fiboMap;
