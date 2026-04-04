// https://chatgpt.com/g/g-p-69aaa4e779188191b14e43b9b86bd4c2-podgotovka-k-sobesam/c/69cabaf5-5a64-8326-9719-79b2024123bd

class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // pending | fulfilled | rejected
    this.value = undefined; // значение для fulfilled
    this.reason = undefined; // причина для rejected
    this.onFulfilledCallbacks = []; // then callbacks
    this.onRejectedCallbacks = [];  // catch callbacks

    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;
      this.onFulfilledCallbacks.forEach(cb => queueMicrotask(() => cb(value)));
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.reason = reason;
      this.onRejectedCallbacks.forEach(cb => queueMicrotask(() => cb(reason)));
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    // если колбеки не переданы, пробрасываем значение дальше
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e; };

    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        queueMicrotask(() => {
          try {
            const result = onFulfilled(value);
            // если результат тоже промис, ждём его
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (err) {
            reject(err);
          }
        });
      };

      const handleRejected = (reason) => {
        queueMicrotask(() => {
          try {
            const result = onRejected(reason);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (err) {
            reject(err);
          }
        });
      };

      if (this.state === 'fulfilled') {
        handleFulfilled(this.value);
      } else if (this.state === 'rejected') {
        handleRejected(this.reason);
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new MyPromise(resolve => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}