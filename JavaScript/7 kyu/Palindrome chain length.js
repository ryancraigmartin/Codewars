/*
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

For example, start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4
*/

var palindromeChainLength = function (n) {
  let countSteps = 0;
  n = n + '';
  console.log('n is equal to:', n, 'which is a', typeof n);
  // Split n into a number separated Array, reverse it then join the Array.
  let reversedNumber = Number(n.toString().split('').reverse().join(''));
  // Convert n back into an integer and return it.
  // reversedNumber = parseInt(reversedNumber,10)
  console.log('The reversed number is', reversedNumber, 'which is a', typeof reversedNumber);
  console.log('----------');

  if (reversedNumber == n) {
    countSteps = 0;
    return countSteps;
  } else {

    while (reversedNumber !== n) {
      n = parseInt(n, 10)
      // Add the number n to the new reversed number.
      n += reversedNumber;
      reversedNumber = Number(n.toString().split('').reverse().join(''));
      console.log('New sum is equal to:', reversedNumber, 'which is a', typeof reversedNumber);
      countSteps++;
      console.log('Step Count ->', countSteps);
    }
    return countSteps;
  };
}
palindromeChainLength(88);