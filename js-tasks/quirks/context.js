const logger = {
  mode: 'Dev',
  check() {
    console.log(`This is ${this.mode} mode`)
  }
};

logger.check();

const loggerCheck = logger.check;
loggerCheck();

function execute(fn) {
  return fn();
}

execute(logger.check);

// вопрос че мы можем сделать чтобы там где выводит undefined стало dev ?

// _____________________________

// function execute(fn) {
//   return fn.bind(this)();
// }

// execute.bind(logger)(logger.check);

// _____________________________

// function execute(fn) {
//   return fn.call(logger);
// }

// execute(logger.check);

// _____________________________

// const loggerCheck = logger.check;
// loggerCheck.call(logger);

// _____________________________