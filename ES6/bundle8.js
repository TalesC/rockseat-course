"use strict";

//Template Literals
var nome = "Diego";
var idade = 23; // console.log('Meu nome é ' + nome + 'e tenho ' + idade + ' anos');

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); //Object Short Syntax

var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rockseat'
};
console.log(usuario);
