// https://chatgpt.com/c/69c7e54a-59bc-8333-b0cf-b23686f1e408

// console.log('apple');

// setTimeout(() => console.log('pear'), 0);

// Promise.resolve('melon').then((res) => console.log(res));

// new Promise((resolve, reject) => {
//   console.log('orange');
//   resolve('pineapple');
// }).then((res) => console.log(res));

// console.log('lime');

// ответил
// apple, lime, melon, pear, orange, pineapple

// но правильно будет

// 'apple'
// 'orange'
// 'lime'
// melon
// pineapple
// pear

// потому что console.log('orange'); сразу вторым в callstack попадает, ведь он на поверхности, а не в then
// pear в конце потому что мы регаем этот лог и идем дальше выполнять, а pear выполнится в самом конце, когда
// закончаться микротаски, вызовется settimeout почти сразу но вызов попадет в макротаски и будет ждать до конца промисов

// ________________________

// console.log(1);

// setTimeout(() => console.log(2), 0);

// console.log(3);

// Promise.resolve()
//   .then(() => console.log(4))
//   .then(() => console.log(5))
//   .then(() => console.log(6))
//   .then(() => setTimeout(() => console.log(7), 0))
//   .then(() => {
//     console.log(8);

//     return 9;
//   })
//   .then(console.log);

// _________________________________

// console.log(1)

// setTimeout(() => console.log(2))

// Promise.resolve().then(() => console.log(3))

// let p = new Promise(function (resolve, reject) {
//   console.log(4);
//   resolve();
//   console.log(10);
// })

// p.then(function() {
//   console.log(5);
// });

// Promise.resolve().then(() => setTimeout(() => console.log(6)));

// Promise.resolve().then(() => console.log(7))

// setTimeout(() => console.log(8))

// console.log(9);


// _________________________
// **Вывод:**
// ```
// 2
// undefined
// 1
// ```

// **Краткое объяснение:**
// 1. `Promise.resolve(1)` → 1.
// 2. `.then(x => x + 1)` → 2.
// 3. `.then(x => { throw x })` выбрасывает ошибку (2).
// 4. `.then(x => console.log(x))` пропускается из-за ошибки.
// 5. `.catch(err => console.log(err))` выводит 2.
// 6. `.then(x => Promise.resolve(1))` ничего не возвращает, поэтому `x` — undefined.
// 7. `.catch(err => console.log(err))` пропускается, ошибки нет.
// 8. `.then(x => console.log(x))` выводит 1 из Promise.resolve(1).


// Promise.resolve(1)
//   .then(x => x + 1)
//   .then(x => { throw x })
//   .then(x => console.log(x))
//   .catch(err => console.log(err))
//   .then(x => Promise.resolve(1))
//   .catch(err => console.log(err))
//   .then(x => console.log(x))


// __________________________
// abd
// Потому что второй catch не вызывается после первого пропускаем
// в finally мы не можем передаваь и использовать аргумент поэтому не прибавится

// Promise
//   .reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))



// __________________
// здесь then = resolve, reject, так как сверху начиналось с reject
// попадаем во второй колбэк p => p + '2'
// так fullfiled пропускаем два catch
// добавляем d1
// d2 пропускаем так как мы не пишем функцию и ничего не прокидывается дальше
// добавляем d3 и finally не работает с аругментами поэтому не добавит
// дальше вывод

// Promise.reject('a')
//   .then(p => p + '1', p => p + '2')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd1')
//   .then('d2')
//   .then(p => p + 'd3')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))

// _________________________________

  // Promise.resolve().then(() => {
  //   console.log(1)
  // });

  // (async () => {
  //   console.log(2);
  //   const x = await Promise.resolve(3)
  //   console.log(x);
  //   const y = await Promise.resolve(4)
  //   console.log(y);

  //   console.log(6);
  // })();

  // Promise.resolve().then(() => {
  //   console.log(5)
  // })



// _____________________________


// const run = () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   console.log(1);

//   new Promise((resolve) => {
//     console.log('Promise');
//     resolve(() => {
//       console.log('???');
//       resolve();
//     });
//   }).then(() => {
//     console.log('then1');
//   })
//   .then(() => {
//     console.log('then2');
//   })

//   console.log('4');

//   setTimeout(() => {
//     console.log('timeout2');
//   }, 0);
// }


// run();

// 1 Promise 4 then1 then2  timeout timeout2


// https://chatgpt.com/c/69e11cac-7fd4-8333-b295-0882e2cdd824

// setTimeout(() => {
//   console.log('timeout');
// }, 0);
// console.log(1);

// new Promise((resolve) => {
//   console.log('Promise');
//   setTimeout(() => {
//     console.log('777');
//     resolve();
//   }, 0);
// }).then(() => {
//   setTimeout(() => {
//      console.log('then1');
//   }, 0);
// })
// .then(() => {
//   console.log('then2');
// })

// console.log('4');

// setTimeout(() => {
//   console.log('titmeOut2');
// }, 0);


// _______________________________________

// console.log('A');

// setTimeout(() => {
//   console.log('B');

//   Promise.resolve().then(() => {
//     console.log('C');
//   });

//   setTimeout(() => {
//     console.log('D');
//   }, 0);
// }, 0);

// Promise.resolve().then(() => {
//   console.log('E');

//   setTimeout(() => {
//     console.log('F');
//   }, 0);
// });

// console.log('G');

// setTimeout(() => {
//   console.log('H');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('I');
// });

// A G E I B C H F D


// console.log('1. start');

// setTimeout(() => {
//   console.log('2. Timeout 1');
//   Promise.resolve().then(() => console.log('3. Promise inside Timeout 1'));
// }, 0);

// Promise.resolve().then(() => {
//   console.log('4. Promise 1');
//   setTimeout(() => console.log('5. Timeout inside Promise 1'), 0);
// });

// queueMicrotask(() => console.log('6. Queue Microtask 1'));

// setTimeout(() => {
//   console.log('7. Timeout 2');
//   queueMicrotask(() => console.log('8. Queue Microtask inside Timeout 2'));
// }, 0);

// console.log('9. end'); // hello

// 1 9 4 PROMIS 1  6 QUUEUE MICRO 1  2 TIMEOUT 1 3 PROMISE INSIDE TIMEOUT 1  7 TIMEOUT 2 8 QUEUE MICROTASK  ISNIDE TIEMOUT 2   5 TIMEOUT INSTIDE PROMISE 1 

async function f() {
  console.log(1);
  const promise = new Promise((resolve) => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      resolve('done');
      console.log(4);
    });
  });
  console.log(5);

  const result = await promise;
  console.log(6);
  console.log(result);
  return 'RESULT';
}

f();
console.log(7); // зарегалась в колстек но выполнится после 1,2,5
// потому что после 5-ки начинается асинхронный код и дожидаемся ответа
// но промис выполнится, только после setTimeout, поэтому мы переключимся на колстек

// 1 2 5 7 3 4 6 готово


// тут в then второй параметр onrejected
// и там так мы обработали реджект мы уже не попадаем в catch
// но попадаем в then и там уже обрабатываем результат реджекта
// внутри finally операции игнорируются и мы просто 
// возвращаем результат реджекта дальше по цепочке 
// a2d1d3

// Promise.reject('a')
//   .then(p => p + '1', p => p + '2')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd1')
//   .then('d2')
//   .then(p => p + 'd3')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))