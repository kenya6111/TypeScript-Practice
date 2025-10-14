export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'kenya',
  age: 44,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'shigeru',
  age: 40,
};

// friend.age++;//Cannot assign to 'age' because it is a read-only property.ts(2540)

type Yomirtorisennyou<T> = { readonly [P in keyof T]: T[P] };

type YOmitorisenyoProfile = Yomirtorisennyou<Profile>;
