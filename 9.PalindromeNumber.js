/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.


Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.


Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// ------------------------------ SOLUTION 1 ------------------------------

// Example 1:
// x = 121;

// Example 2:
// x = -121;

// Example 3:
//var x = 10;

/*
number % 10 = 0 is not a palindrome
reverse = 0
while (x > reverse)
separate last digit in x remaind = x % 10 (also first digit in reverse number)
assign new value for x /= 10
capture digit in reverse number = reverse * 10 + remaind
if x = reverse (even x) or x = reverse/10 (odd x), return true
esle return false
*/

/*
var reverse = 0;
while (x > reverse) {
  var digit = x % 10;
  x /= 10;
  reverse = reverse * 10 + digit;
*/

// ------------------------------ SOLUTION 2 ------------------------------

var isPalindrome = function (x) {
  //Case when x is a negative number
  if (x < 0) {
    return false;
  }
  // Case when x % 10 = 0
  if (x % 10 == 0 && x !== 0) {
    return false;
  }
  // Other cases
  let xString = x.toString(); // convert number to string
  let xIndex = xString.length;
  let reverse = "";
  while (xIndex > 0) {
    reverse += xString[xIndex - 1];
    xIndex--;
  }
  let reverseNum = parseInt(reverse); //convert string back to number
  if (x == reverseNum) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(x));
