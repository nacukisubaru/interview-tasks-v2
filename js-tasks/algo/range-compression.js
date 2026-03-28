// список интов нужно преобразовать множество в строку, сворачивая соседние по числовому ряду числа в диапазоны
// https://chatgpt.com/c/69c7c61c-15fc-832d-8b26-9c8cc14c9a79

const foo = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  let start = sortedArr[0];

  const array = [];

  for (let i = 0; i < sortedArr.length; i++) {
    const value = sortedArr[i];

    if (sortedArr[i + 1] != value + 1) {
      if (start === value) {
         array.push(start);
      } else {
        array.push([start, value]);
      }

      start = sortedArr[i + 1];
    }
  }

  // const res = array.reduce((acc, val, index) => {
  //   if (Array.isArray(val)) {
  //     acc = acc + `${val[0]}-${val[1]}`; 
      
  //     if (array.length -1 !== index) {
  //       acc += ',';
  //     }
      
  //     return acc;
  //   } else {
  //     if (array.length === 2) {
  //       acc =  acc + `${val}`;
  //       if (index === 0) {
  //         acc += ','
  //       }
      
  //       return acc;
  //     }

  //     return acc + val;
  //   }
  // }, '');

  return array.map(val =>
    Array.isArray(val)
      ? `${val[0]}-${val[1]}`
      : val
  ).join(', ');

  return res;
}

console.log(foo([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0-5, 8-9, 11"
console.log(foo([1, 4, 3, 2])); // 1-4
console.log(foo([1, 4])); // 1,4
