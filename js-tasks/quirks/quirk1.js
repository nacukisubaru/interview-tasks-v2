const user = {
  name: "Bob",
  userThis: this,
  func() {
    console.log(this);
  },
  getName(param1, param2) {
    console.log({param1, param2})
    return this.name;
  },
  arrowFunc: () => {
    console.log(this);
  }
}

const getName = user.getName;
console.log(getName.call(user,  'kek', 'lol', 'hah'));
//console.log(getName());

// function uniq(arr) {
//   const map = new Set();
//   const dubels = [];

//   arr.forEach((item) => {
//     if (map.has(item.id)) {
//       dubels.push(item.id);
//     }

//     map.add(item.id);
//   })

//   return arr.filter((item) => !dubels.includes(item.id));
// }

function uniq(arr) {
  const seen = new Set();
  return arr.filter(obj => {
    if (seen.has(obj.id)) return false;
    seen.add(obj.id);
    return true;
  });
}

const res = uniq([
  { id: 1, name: "item #1" },
  { id: 3, name: "item #2" },
  { id: 1, name: "item #3" },
  { id: 4, name: "item #4" },
  { id: 2, name: "item #5" },
  { id: 3, name: "item #6" }
]);

console.log(res);



// function uniq(arr) {
//   const uniqIds = new Set();

//   arr.forEach((item) => {
//     if (uniqIds.has(item.id)) {
//       uniqIds.delete(item.id);
//     } else {
//       uniqIds.add(item.id);
//     }
//   })

//   return arr.filter((item) => uniqIds.has(item.id));
// }

// const res = uniq([
//   { id: 1, name: "item1" },
//   { id: 1, name: "item2" },
//   { id: 1, name: "item332223311" },
//   // { id: 1, name: "item3" },
//   // { id: 7, name: "item44333444" },
//   // { id: 5, name: "item3333" },
//   // { id: 2, name: "item4" },
//   // { id: 2, name: "item5" },
//   // { id: 6, name: "item3322233" },
//   // { id: 8, name: "iteeem4" },
//   // { id: 3, name: "item6" },
//   // { id: 7, name: "item44444" },
// ]);
