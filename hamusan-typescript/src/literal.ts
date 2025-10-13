export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';

let test: '日' | '月' | '火';
test = '日';
test = '月';
// test = 'あ';//Type '"あ"' is not assignable to type '"日" | "月" | "火"'.ts(2322)
// ある特定の値に制限するのがリテラル型
