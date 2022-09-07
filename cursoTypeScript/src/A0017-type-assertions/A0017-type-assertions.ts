// condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// not recommend
// non-null assertion (!)
const body2 = document.querySelector('body')!;
if (body2) body2.style.background = 'red';

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
if (body3) body3.style.background = 'red';

// HTMLElement
HTMLElement;

// sub types
