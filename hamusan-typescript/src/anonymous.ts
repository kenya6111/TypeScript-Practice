export {};

let bmi = function (heihgt: number, weight: number): number {
  return weight / (heihgt * heihgt);
};

console.log(bmi(1.78, 86));
