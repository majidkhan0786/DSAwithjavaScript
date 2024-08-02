// Callback Function and Callback Hell
// A Callback function is function that we passed as an Arguments to another function , which is invoked at a later of
// point in time , Callback are used to handle asynchronous operation in Js.

// const getData = (dataId, callback) => {
//   setTimeout(() => {
//     console.log("dataId : ", dataId);
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// };

// getData(12, () => {
//   getData(13, () => {
//     getData(14, () => {
//       getData(15);
//     });
//   });
// });

// Promsies

// Promises in JavaScript are used to handle asynchronous operations. They represent a value that may be
// available now, or in the future, or never. A Promise is an object that represents the eventual
// completion (or failure) of an asynchronous operation and its resulting value.

// const getData = (dataId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("dataId : ", dataId);
//       resolve();
//     }, 1000);
//   });
// };

// getData(12)
//   .then(() => getData(13))
//   .then(() => getData(14))
//   .then(() => getData(15))
//   .catch((error) => console.error(error));

// const getData = (dataId) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("dataId : ", dataId);
//         if (dataId === 15) {
//           reject('Error: Invalid dataId');
//         } else {
//           resolve(dataId);
//         }
//       }, 1000);
//     });
//   };

//   getData(12)
//     .then(() => getData(13))
//     .then(() => getData(14))
//     .then(() => getData(15))
//     .catch((error) => console.error(error));

// Promise Method
const getData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dataId : ", dataId);
      if (dataId === 15) {
        reject(`Error: Invalid dataId ${dataId}`);
      } else {
        resolve(dataId);
      }
    }, 1000);
  });
};

// Creating multiple promises
const promises = [
  getData(12),
  getData(13),
  getData(14),
  getData(15), // This one will reject
  getData(16),
];

Promise.all(promises)
  .then((results) => {
    console.log("All data received:", results);
  })
  .catch((error) => {
    console.error("Error in one of the promises:", error);
  });

Promise.allSettled(promises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
    } else {
      console.log(
        `Promise ${index + 1} rejected with reason: ${result.reason}`
      );
    }
  });
});

Promise.race(promises)
  .then((result) => {
    console.log("First resolved promise:", result);
  })
  .catch((error) => {
    console.error("First rejected promise:", error);
  });
