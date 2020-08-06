import mult, { sub as subFuncion } from './funcoes';
import * as funcoes from './funcoes2';
import soma from './soma';

console.log(funcoes);
console.log(funcoes.default(3, 2));
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(4, 2));

console.log(mult(3, 2));
console.log(soma(1, 2));
console.log(subFuncion(4, 2));