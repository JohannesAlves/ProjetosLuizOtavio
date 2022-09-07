type HaveName = { name: string };
type HaveLastname = { lastname: string };
type HaveAge = { age: number };

type Person = HaveName & HaveLastname & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

const person: Person = {
  age: 15,
  lastname: 'Joranes',
  name: 'Alves',
};

console.log(person);

export { person };
