let getString = require('readline-sync');
let number = Number(getString.question('Enter a number: '));

function isAnInteger(int) {
  if (Number.isInteger(int)) {
    evenOrOdd(int);
  } else {
    console.log('Invalid input!')
    return;
  }
}

function evenOrOdd(num) {
  if (num % 2 ===0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

isAnInteger(number);