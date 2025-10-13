export {};

enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.March);
enum Months2 {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months2.January);
console.log(Months2.February);
console.log(Months2.March);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

console.log(COLORS.RED);
console.log(COLORS.BLUE);
console.log(COLORS.GREEN);
