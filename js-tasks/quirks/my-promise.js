// https://chatgpt.com/g/g-p-69aaa4e779188191b14e43b9b86bd4c2-podgotovka-k-sobesam/c/69cabaf5-5a64-8326-9719-79b2024123bd

class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // pending, fulfilled, rejected
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    return new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          });
        });

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Пример использования
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

p.then(result => {
  console.log(result); // Done!
  return 'Next';
}).then(console.log);