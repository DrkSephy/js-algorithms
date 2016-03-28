/**
 * Determine the Equilibrium index of an array.
*/

'use strict';

function computeIndex(arr) {
  let sum = 0;
  // Track total sum
  let totalSum = arr.reduce((prev, curr) => {
    return prev + curr;
  });

  // Sum up from left to right
  for (var index = 0; index < arr.length; index++) {
    totalSum -= arr[index];
    if (sum == totalSum) {
      return index;
    }
    // If we haven't found the equilibrium point, sum up from left to right
    sum += arr[index];
  }

  // Didn't find the equilibrium point, return undefined
  return undefined;
}