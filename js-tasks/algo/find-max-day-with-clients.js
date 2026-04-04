// https://chatgpt.com/c/69c93ebc-a398-8396-a771-d2a609cd245e

function findMaxDayWithClients(clients) {
  const clientsMap = new Map();

  clients.forEach(([checkIn, checkOut]) => {
    let day = checkIn;

    while (day <= checkOut) {
      const count = clientsMap.get(day) || 0;

      clientsMap.set(day, count + 1);

      day++;
    }
  });

  let maxClients = 0;
  let maxDay = 0;

  for ([key, val] of clientsMap) {
    if (val > maxClients) {
      maxClients = val;
      maxDay = key;
    }
  }

  return maxDay;
}

console.log(findMaxDayWithClients([[1, 5], [2, 4], [3, 6]]));

// за о1 быстрее по скорости

// function findMaxDayWithClients(clients) {
//   const clientsMap = new Map();

//   let maxClients = 0;
//   let maxDay = 0;

//   clients.forEach(([checkIn, checkOut]) => {
//     let day = checkIn;

//     while (day <= checkOut) {
//       const clientsInDay = clientsMap.get(day);
//       const count = clientsInDay ? clientsInDay + 1 : 1;

//       if (count > maxClients) {
//         maxClients = count;
//         maxDay = day;
//       }

//       clientsMap.set(day, count);

//       day++;
//     }
//   });

//   return maxDay;
// }

