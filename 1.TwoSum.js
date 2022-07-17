/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// ------------------------------ SOLUTION ------------------------------

// Example 1:
// nums = [2, 7, 11, 15];
// target = 9;

// Example 2:
nums = [3, 2, 4];
target = 6;

// Example 3:
// nums = [3,3]
// target = 6

var twoSum = function (nums, target) {
  // 1st for loop to iterate "nums" parameter (for the current value)
  for (let i = 0; i < nums.length; i++) {
    // 2nd for loop to iterate "nums" parameter (for the next value)
    for (let j = i + 1; j < nums.length; j++) {
      // compare if sum of the current value + the next value equals to the target
      if (nums[i] + nums[j] === target) {
        let tempArr = [];
        // push the indexes of the values into the empty array
        tempArr.push(i, j);
        return tempArr;
        // return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
