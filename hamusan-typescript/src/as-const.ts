export {};

let name = 'atsushi';

name = 'hum';

let nickname = 'ham' as const; //let nickname: "ham"

// nickname = 'hama'; //Type '"hama"' is not assignable to type '"ham"'.ts(2322)

// as const を書くだけでreadonlyなプロパティに勝手になる！！便利！！　ちまちまreadonly書くよりめっちゃスマート！
let profile = {
  name: 'kenya',
  height: 178,
} as const;

// profile.name = 'ham';
