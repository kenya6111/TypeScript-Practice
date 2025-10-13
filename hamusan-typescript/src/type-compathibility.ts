export {};

let fooCompatible: any;
let barCompatible: string = 'typescript';

console.log(typeof fooCompatible);
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

// let fooIncompatible: string;
// let barInCompatible: number;
// fooIncompatible = barInCompatible; //Type 'number' is not assignable to type 'string'.ts(2322)

let fooString: string;
let barString: string = 'sa';
fooString = barString;
