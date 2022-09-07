type MapStringsCallback = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);

export default 1;
