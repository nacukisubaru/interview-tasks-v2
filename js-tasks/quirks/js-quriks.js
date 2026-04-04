let a = 1
const f = () => a
let a = 1
const f = () => {
    let a = 2
    console.log(a)
}
let a = 1
const f = () => {
    let a = 2
    console.log(a)
}
console.log(a)
function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    result.push(function () {
      return i;
    });
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?
console.log(funcs{0}()); // ?
console.log(funcs{1}()); // ?
console.log(funcs{2}()); // ?
function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    result.push(function () {
console.log(ш)
      return i;
    });
  }

  return result;
}

const funcs = createFunctions();
function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
console.log(i)
    result.push(function () {

      return i;
    });
  }

  return result;
}


function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    result.push(
      (function () {
        return function () {
          console.log(i);
          return i;
        };
      })(i)
    );
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?


function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    result.push(
      (function () {
        return function () {
          console.log(i);
          return i;
        };
      })()
    );
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?


function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    const func = (k) => () =>  k
    result.push(func(i));
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?


function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    const func = (k) => () =>  i
    result.push(func(i));
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs0); // ?
console.log(funcs1); // ?
console.log(funcs2); // ?

function createFunctions() {
  var result = [];

  for (var i = 0; i < 3; i++) {
    const func = () => {
        let k = i
        return k
    }
    result.push(func(i));
  }

  return result;
}

const funcs = createFunctions();

console.log(funcs[0]); // ?

function createLogger(config) {
  return function () {
    console.log(config.value);
  };
}

const settings = { value: 10 };

const logger = createLogger(settings);

logger(); // ?
settings.value = 50;
logger(); // ?

function createLogger(config) {
  const value = config.value;

  return function () {
    console.log(value);
  };
}

const settings = { value: 10 };

const logger = createLogger(settings);

logger(); // ?
settings.value = 50;
logger(); // ?


function createLogger(config) {
  const test = config;

  return function () {
    console.log(test.value);
  };
}

const settings = { value: 10 };

const logger = createLogger(settings);

logger(); // ?
settings.value = 50;
logger(); // ?

const a = [{id: 1}]
const b = [...a]

a[0].id = 2
console.log(b[0].id)


const a = [{ meta: { score: 10 } }];
const b = [...a];

a[0].meta.score = 99;

console.log(b[0].meta.score)

onst a = [{ meta: { score: 10 } }];
const b = [...a];

a[0] = { meta: { score: 99 } };

console.debug(b[0].meta.score)

const a = [{ meta: { score: 10 } }];
const b = a

a[0].meta = { score: 99 };

console.debug(b[0].meta.score)

const a = [{ meta: { score: 10 } }];
const b = [...a];

a[0] = { meta: { score: 99 } };

console.debug(b[0].meta.score)


fetch('https://test/test')  
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

while(true) console.log(1)


document.body.style.background = 'red';

while(true) {
  console.log(1)
}