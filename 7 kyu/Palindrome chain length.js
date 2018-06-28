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