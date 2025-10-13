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
