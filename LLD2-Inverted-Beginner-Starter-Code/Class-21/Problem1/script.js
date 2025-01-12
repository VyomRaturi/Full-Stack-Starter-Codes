// Problem Statement: Flatten Nested Array

// You are given a nested array containing array elements. Your task is to write a JavaScript function to flatten this nested array into a single-dimensional array, where all the nested arrays' elements are moved to the top-level array.

// For example, given the following nested array:

// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// The flattened array should be:

// [1, 2, 3, 4, 5, 6]

// Your task is to implement a function flattenArray that takes the nested array as input and returns the flattened array.

// Input:

//     A nested array arr containing integers.

// Output:

//     A single-dimensional array containing all the elements of the nested array.

function flattenArray(arr) {
}

// Example nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flatten the nested array
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]