// https://chatgpt.com/c/69c7df01-ba70-832a-9ae0-768308833e95
var i = 10;
var array = [];

while (i--) {
  array.push(function() {
    return i + 1;
  });
}

console.log([
  array[0](),
  array[1]()
]);

// let array = [];

// for (let i = 10; i > 0; i--) {
//   array.push(function() {
//     return i;
//   });
// }

// console.log(array[0]()); // 10
// console.log(array[1]()); // 9