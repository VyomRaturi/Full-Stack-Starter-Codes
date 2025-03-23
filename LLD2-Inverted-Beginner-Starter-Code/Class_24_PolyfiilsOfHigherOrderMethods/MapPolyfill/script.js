// Polyfill for Array.prototype.map 
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Step 2: Create a new empty array for the results
    var result = [];

      // Step 3: Iterate over the array
        // Check if the index exists in the array to handle sparse arrays

        // Step 4: Execute 'callback' for each element, considering 'thisArg'
          // Use a ternary operator to check if 'thisArg' is provided

      // Step 5: Push the result of the callback into the 'result' array
      
      // Step 6: Return the new array
    
    return result;
  };
}