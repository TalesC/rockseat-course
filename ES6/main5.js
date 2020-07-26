const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
        return "teste";
}
const teste2 = () => [1, 2, 3];
const teste3 = () => ({nome: 'teste'});

console.log(teste());
console.log(teste2());
console.log(teste3());

function soma(a= 3, b = 6) {
        return a + b;
}

const soma2 = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());
console.log(soma2(1));
console.log(soma2());