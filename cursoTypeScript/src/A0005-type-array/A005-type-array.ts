// Array<T> || T[]
export function multArgs(...args: number[]): number {
  return args.reduce((ac, value) => ac * value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multArgs(1, 2, 3);
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(upper);
