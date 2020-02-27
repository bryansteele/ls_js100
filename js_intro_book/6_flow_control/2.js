let getString = require('readline-sync');
let number = Number(getString.question('Enter a number: '));

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(number);