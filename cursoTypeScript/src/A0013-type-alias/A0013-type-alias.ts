type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  color?: string;
};

type ColorRGB = 'Red' | 'Blue' | 'Green';
type CorCMYK = 'Cian' | 'Magent' | 'Yellow' | 'Black';
type Color = ColorRGB | CorCMYK;

const person: Person = {
  age: 21,
  name: 'Johannes',
  salary: 100_000,
};

export function setColor(person: Person, color: Color): Person {
  return { ...person, color: color };
}

console.log(setColor(person, 'Red'));
