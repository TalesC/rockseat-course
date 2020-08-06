"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return "teste";
};

var teste2 = function teste2() {
  return [1, 2, 3];
};

var teste3 = function teste3() {
  return {
    nome: 'teste'
  };
};

console.log(teste());
console.log(teste2());
console.log(teste3());

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma());
console.log(soma2(1));
console.log(soma2());
