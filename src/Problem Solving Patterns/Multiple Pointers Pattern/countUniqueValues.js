/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted. */

// Big O (n) time complexity

function countUniqueValues(arr) {

    let left = 0;
    let right = 1;

    // Loop through the SORTED array as long as left is lower than right, and right is lower then array length.
    while (left < right && right < arr.length) {

        //If two numbers are equal, we remove the duplicate and check again. If not, move the window up.
        if (arr[left] === arr[right]) {
            arr.splice(right, 1);
        } else {
            left++;
            right++
        }

    }

    return arr.length;
}


console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2