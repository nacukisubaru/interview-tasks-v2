// Тестовый объект
const data = {
  user: {
    id: 42,
    profile: {
      name: "Alice",
      address: {
        city: "Wonderland",
        zip: "12345"
      }
    },
    roles: ["admin", "editor"]
  },
  settings: {
    theme: "dark",
    notifications: true
  }
};

// через for in
function get(obj, path) {
  const pathsList = path.split('.');

  let source = obj[pathsList[0]];

  const paths = pathsList.slice(1, pathsList.length);
  
  for (let pathInc in paths) {
    const path = paths[pathInc];

   // делаем проверку регуляркой понимаем что есть такая структура [1]
   // после этого разбиваем на roles и [1]
   // проверяем что в обще роли это правда массив
   // если нет то console.error если да то берем число из возможно регуляркой возможно разбивкой []
   // делаем обращение к элементу или можно строку в массив конвертнуть чтоли...

    if (path.match(/\[\d]/)) {
      source = source[path.split('[')[0]][parseInt(path.match(/\d+/))];

      continue;
    }

    source = source[path];
  }

  return source;
}

// через for

// через reduce
  
// Примеры вызова (только вывод, не реализация)
console.log(get(data, "user.id"));                 // 42
console.log(get(data, "user.profile.name"));      // "Alice"
console.log(get(data, "user.profile.address.city")); // "Wonderland"
console.log(get(data, "user.roles[1]"));          // "editor"
console.log(get(data, "settings.theme"));         // "dark"
console.log(get(data, "settings.notifications")); // true

// аж 19 минут ушло чтобы решить это про такие user.profile.name на user.roles[1] около часа в общем все

// задумался на том как обращаться по цепочке сразу к след свойству, но сразу пришел к выводу
// что надо записывать в переменную над циклом, но не складывалось если просто записывать
// пришлось инициализировать первичнми данными с первого свойства, чтобы дальше по цепочке
// хотел + 1 делать в цикле чтобы первый в списке элемент не учитывать, но чет тупанул как
// удалил первый элемент перед перебором