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

// type MakeRequired<T, K extends keyof T> = Omit<T, K> & {
//   [P in K]-?: T[P];
// };

// interface User {
//   id: number,
//   name?: string,
//   email?: string,
//   age?: number,
//   address?: {
//     city?: string,
//     street?: string,
//   }
// }

// type RequiredNameUser = MakeRequired<User, 'name'>;

// type RequiredContactUser = MakeRequired<User, 'name' | 'email'>;

// const user2: RequiredNameUser = {id: 1, name: 'sdfsd', age:2222};
// const user3: RequiredContactUser = {id: 1, name: 'sdfsd', email: 'dfs', age:2222};


// type DeepMerge<T, U> = {[K in keyof T]: T[K]} & {[K in keyof U]: U[K]};

// function merge2<T, U>(obj1: T, obj2: U): DeepMerge<T, U> {
//   return {...obj1, ...obj2};
// }

// const res = merge2({a: 5}, {b: { a: 10, mes: 'test' }});
// res


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

// type PartialExcept<T, K extends keyof T> = 
//   { [P in keyof T]+?: T[P] }  // все опциональные
//   &
//   { [P in K]: T[P] }          // K — перезаписывают как обязательные


type PartialExcept<T, K extends keyof T> = {[key in K]?: T[key]} & {[key2 in Exclude<keyof T, K>]-?: T[key2]};



type PartialProduct = PartialExcept<Product, 'id' | 'name' | 'price'>;


interface Mixed {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  title: string;
}

// type PickByValue<T, K extends keyof T> = T[K] extends string ? T[K] : never;

// type PickByValue<T, K> = {[key in keyof T]: T[key] extends K ? T[key] : never}

type PickByValue<T, V> = {[key in keyof T as T[key] extends V ? key : never]: T[key]};

type Result = PickByValue<Mixed, string>;

const res: Result = {name: 'gdfg', title: 'fsdfs'};

// { name: string; title: string }
// оставить только те ключи у которых тип значения === string


interface Form {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  age: number;
}

// {[key in keyof T as T[key] extends null  ]};

type NullableKeys<T> = keyof {[key in keyof T as null extends T[key]? key : never]: T[key]};

type Result2 = NullableKeys<Form>;

// 'email' | 'phone'
// вернуть union только тех ключей у которых в типе есть null


type KebabCaseHelper<S extends string> = S extends `${infer First}${infer Rest}`
? First extends '-' ? `${Lowercase<First>}${KebabCaseHelper<Rest>}` : First extends Uppercase<First> 
? `-${Lowercase<First>}${KebabCaseHelper<Rest>}` 
: `${Lowercase<First>}${KebabCaseHelper<Rest>}` 
: S;


type KebabCase<S extends string> = S extends `${infer First}${infer Rest}` ? `${Lowercase<First>}${KebabCaseHelper<Rest>}` : S;

type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"

type Push<Arr extends unknown [], Item> = [...Arr, Item];

type ArrayBuilder<arr extends unknown [], num> = arr['length'] extends num ? arr : ArrayBuilder<Push<arr, 1>, num>;

type Pop<Arr extends unknown[]> = Arr extends [...infer Rest, infer Last] ? Rest : never

// type BuildArray = ArrayBuilder<[], 20>;

type MinusOneHelper<num extends number> = Pop<ArrayBuilder<[], num>>;

type MinusOne<num extends number> = MinusOneHelper<num> extends unknown[] ? MinusOneHelper<num>['length'] : never;

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

//Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.

type IsNever<T> = [T] extends [never] ? 'true' : 'false';

type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false

//https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md

type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToDate = { mapFrom: string; mapTo: Date;}

type MapTypes<T, Settings extends StringToNumber | StringToDate> = {[K in keyof T]: Settings['mapFrom'] extends T[K] ? Settings['mapTo'] : T[K] }

type MappedNumbers = MapTypes<{iWillBeANumberOneDay: string, kek: Date}, StringToNumber> // gives { iWillBeANumberOneDay: number; }

type MappedNumbersAndDates = MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }

const mappedStrings: MappedNumbers = { iWillBeANumberOneDay: 5, kek: new Date() };

const mappedNumbersAndDates: MappedNumbersAndDates ={ iWillBeNumberOrDate: new Date() };