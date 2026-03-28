// https://chatgpt.com/g/g-p-69aaa4e779188191b14e43b9b86bd4c2-podgotovka-k-sobesam/c/69c795e4-94ec-832a-81df-1a1801a4812c

// const getObjField = <T, K extends keyof T>(obj: T, key: K): T[K] => {
//   return obj[key];
// }

// getObjField({name: 'Alice', age: 25}, 'age');

// getObjField({name: 'Alice', age: 25, email: 'dsd@mail.ru'}, 'email');


// https://chatgpt.com/c/69c79d44-c278-8325-a5fb-816ea70ae2ad

// const _set = <T, K extends keyof T>(source: T, key: K, value: T[K]) => {
//   source[key] = value;
// };

// const user = {
//   name: 'Jonh',
//   age: 38,
//   married: true,
// }

// _set(user, 'age', 31);
// _set(user, 'agex', 31);
// _set(user, 'age', '31');



// https://chatgpt.com/c/69c79fbf-b584-8392-aee0-0827255f9292

type MakeRequired<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: T[P];
};

interface User {
  id: number,
  name?: string,
  email?: string,
  age?: number,
  address?: {
    city?: string,
    street?: string,
  }
}

type RequiredNameUser = MakeRequired<User, 'name'>;

type RequiredContactUser = MakeRequired<User, 'name' | 'email'>;

const user2: RequiredNameUser = {id: 1, name: 'sdfsd', age:2222};
const user3: RequiredContactUser = {id: 1, name: 'sdfsd', email: 'dfs', age:2222};