let getString = require('readline-sync');

let firstNumber = Number(getString.question('Enter the first Number:'));
let secondNumber = Number(getString.question('Enter the second Number:'));

function multipliesNumbers(num1, num2) {
  let product = num1 * num2;
  return product;
}

console.log(`${firstNumber} x ${secondNumber} = ${multipliesNumbers(firstNumber, secondNumber)}`);



// BOOK SOLUTION

// function multiply(left, right) {
//   return left * right;
// }

// function getNumber(prompt) {
//   let readlineSync = require('readline-sync');
//   return parseFloat(readlineSync.question(prompt));
// }

// let left = getNumber('Enter the first number: ');
// let right = getNumber('Enter the second number: ');
// console.log(`${left} * ${right} = ${multiply(left, right)}`);
