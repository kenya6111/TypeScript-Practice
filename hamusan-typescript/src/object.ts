export {};
// objectは制限が甘い。上記のように全く予想外の値が加わってしまえてしまう。
let profile1: object = {
  name: 'kenya',
};
profile1 = { birthYear: 1234 };

// {}を型で使えば、object型よりも詳細に制限を追加できる
let profile2: { name: string; age: number } = {
  name: 'kenya',
  age: 22,
};

profile2 = { name: 'eee', age: 333 };
