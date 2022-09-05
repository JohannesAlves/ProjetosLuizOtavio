/* eslint-disable */
let arrayDeBumeros: number[] = [1, 2, 3];
let arrayDeString: string[] = ['1', '2', '3'];

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Johannes',
  idade: 21,
};

function sum(x: number, y: number) {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
