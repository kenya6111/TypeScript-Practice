export {};
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'kenya', underTwenty: false };

profile.name = 'kenya'; //Property 'name' does not exist on type '{}'.ts(2339)
profile.age = 45;
profile.nationality = 'Japan';
profile.test = 'test';

// インデックスシグネチャって？
// TypeScriptで「任意のキー（index）に、この型の値を入れていい」と表明する仕組み。
// 辞書・連想配列っぽい形を型で許可します。

interface Dict {
  [key: string]: number; // ← インデックスシグネチャ
}

const d: Dict = { apples: 3, oranges: 5 };
d.bananas = 2; // OK
// d.apples = 'three'; // NG: number じゃない

// ルールは1つ重要で、明示プロパティ（name/underTwenty）の型も、インデックスシグネチャの値型に代入可能でないといけない。
// 今回は string と boolean が string | number | boolean の一部なので問題なし。
// profile.age = 45; → OK（number）
// profile.nationality = 'Japan'; → OK（string）
// profile.test = 'test'; → OK
