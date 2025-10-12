export {};

function returnNothing(): void {
  console.log('i dont return anything');
}

returnNothing();

console.log(returnNothing());
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));
