export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};
let bmi2 = (height: number, weight: number): number =>
  weight / (height * height);

console.log(bmi(1.78, 86));
