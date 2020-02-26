function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// Book Solution
let oneFactorial = times(1, 1);
let twoFactorial = times(oneFactorial, 2);
let threeFactorial = times(twoFactorial, 3);
let fourFactorial = times(threeFactorial, 4);
let fiveFactorial = times(fourFactorial, 5);


// I like this one better, except I didn't understand it until I did it the way above first.
// times(times(times(times(times(1, 1), 2), 3), 4), 5);