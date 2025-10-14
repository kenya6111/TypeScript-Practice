export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

type PartialType = Partial<Profile>; // Partialを使うと全てのプロパティをオプショナルにできる

type Profile3 = {
  name: string;
  age?: number;
  zipCode: number;
};

type RequiredType = Required<Profile>; //Requiredを使うと、全てのプロパティを必須にできる
