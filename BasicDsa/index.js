// what is Data Structure
// Data is Way to Organize data so that we can use this Data Efficiantly

// What is Alogorithm
// Steps or a Process to arrange the Whole Data

//     Data Struture

//    ||
// Primitive  => Integer , float , Character , Boolean
// Non Primitive => Arrays , List , Files

//      List
// Liner List                 Non-Linear List
//     ||                             ||
// Stack   Queue                Graphs     Trees

// In Linear  we can perform the operation only Strting Poitn and End Point
// In Non Linear  we can perform anywhere on tree or Graph

// Data Structure opeations
//  Traversing
//  Insertion
//  Deletion
//  Searching
//  Sorting
//  Merging

// Logical Programs

// const handleRemoveDiplicate = (arr) => {
//   const filtered = arr?.filter((a, index) => arr?.indexOf(a) === index);
//   console.log(filtered);
// };
// handleRemoveDiplicate([1, 2, 3, 4, 4, 5, 6]);

// const arr = [1, 2, 3, 4, 4, 5, 6];
// const filterdArr = [...new Set(arr)];

// const handleFindMaxValue = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr?.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
// };
// handleFindMaxValue([12, 4, 4, 534, 643, 5453, 3433]);

// const reverseString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   console.log(reversed)
// };
// reverseString("hello"); // Output: "olleh"

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(11)); // Output: true
