// const handleGetIds = (dataIds, callack) => {
//   setTimeout(() => {
//     console.log("dataId:", dataIds);
//     if (callack) {
//       callack();
//     }
//   }, 1000);
// };

// handleGetIds(3, () => {
//   handleGetIds(2, () => {
//     handleGetIds(5, () => {
//       handleGetIds(10);
//     });
//   });
// });

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 1000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise");
  }, 1000);
});

const allPromise = [firstPromise, secondPromise];

