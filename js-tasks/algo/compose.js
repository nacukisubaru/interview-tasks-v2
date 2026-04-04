// https://chatgpt.com/c/69c8d70a-2ba4-8389-9fac-c207f2d4bf0a

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

function compose(...args) {
  return function (...args2) { 
    let result;
    let inc = args.length;

    while (inc--) {
      if (!result) {
        result = args[inc](...args2);
      } else {
        result = args[inc](result);
      }
    }

    return result;
  };
}

// function compose(...fns) {
//   return (...args) => {
//     let result = args;
  
//     for (let i = fns.length - 1; i >= 0; i--) {
//       result = Array.isArray(result) ? fns[i](...result) : fns[i](result);
//     }
//     return result;
//   };
// };

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));

//compose(square, times2, sum)(3, 4)
