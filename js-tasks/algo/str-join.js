// https://chatgpt.com/c/69c8d4a4-2924-8397-a8fc-8e81cebd4bb8

// function strjoin(...args) {
//   const concatenator = args[0];
  
//   args.shift();

//   return args.map((arg) => arg).join(concatenator);
// }

function strjoin( concatenator, ...args) {
   return args.join(concatenator);
}

console.log(strjoin('.', 'a', 'b', 'c')); // a.b.c
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')); // a-b-c-d-e-f