let x = 10; // eslint-disable-line
x = 0b1010;
x = 'Luiz';
const y = 10;

const person = {
  name: 'Johannes' as const,
  lastname: 'Alves',
};

function escolhaCor(cor: 'Red' | 'Yellow' | 'Blue') {
  return cor;
}

console.log(escolhaCor('Red'));

export { x };
