// const arr = [2, 23, 32, 3, 2, 42, 42, 4, 44, 45];
// const findLargestNumber = (arr) => {
//   const sortedArray = arr?.sort((a, b) => a - b);
//   let max = 0;
//   for (let i = 0; i < sortedArray.length; i++) {
//     console.log(arr[i]);
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   console.log(max, "max");
// };

// findLargestNumber(arr);

// const arr = [2, 23, 32, 3, 2, 42, 42, 4, 44, 45];
// const findLargestNumber = (arr) => {
//   let max = null;
//   for (const num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   console.log(max, "max");
// };

// findLargestNumber(arr);

// const arr = [2, 23, 32, 3, 2, 42, 42, 4, 44, 45];
// const findMinimumNumber = (arr) => {
//   let min = arr[0];
//   for (const num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   console.log(min, "min");
// };
// findMinimumNumber(arr);

// const arr = [2, 23, 32, 3, 2, 42, 42, 4, 44, 45];
// const findLargestNumber = (arr) => {
//   const max = arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
//   console.log(max, "max");
// };

// findLargestNumber(arr);

// const addArray = (val) => {
//   let total = 0;
//   for (let i = 0; i <val?.length; i++) {
//     total += val[i];
//   }
//   console.log(total);
// };
// const Arr = [1, 3, 5, 5, 3, 4, 4];
// addArray(Arr);

// Find Even or odd Number with from an Array using Function
// const findEvenOdd = (arr) => {
//   const result = {
//     evenNumber: [],
//     oddNumber: [],
//   };
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       result.evenNumber.push(element);
//     } else {
//       result.oddNumber.push(element);
//     }
//   });
//   return result;
// };

// const arr = [2, 3, 4, 8, 6, 77, 34];
// console.log(findEvenOdd(arr));

// Another way
// const arr = [2, 3, 4, 8, 6, 77, 34];

// function findEvenOddNumbers(arr) {
//   const result = {
//     even: [],
//     odd: [],
//   };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.even.push(arr[i]);
//     } else {
//       result.odd.push(arr[i]);
//     }
//   }
//   return result;
// }

// const evenOddNumbers = findEvenOddNumbers(arr);
// console.log("Even numbers:", evenOddNumbers.even);
// console.log("Odd numbers:", evenOddNumbers.odd);

// const findPrimeNumber = (n) => {
//   if (n < 2) return `${n} is Not Prime number`;
//   for (let i = 0; i < n; i++) {
//     if (n % i === 0) {
//       return `${n} Not a Prime number`;
//     } else {
//      return `${n} is Prime Number`;
//     }
//   }
// };

// console.log(findPrimeNumber(23));

const findPrimeNumber = (n) => {
  if (n < 2) {
    return console.log(`${n} is Not a Prime Number`);
  }
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      return console.log(`${n} is not a Prime Number`);
    } else {
      return console.log(`${n} is Prime Number`);
    }
  }
};

findPrimeNumber(1);
