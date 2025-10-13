export {};

let bmi: (height: number, weight: number, printable: boolean) => number = (
  height: number,
  weight: number,
  printable: boolean
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log('printable');
  }
  return bmi;
};

console.log(bmi(1.78, 86, true));
