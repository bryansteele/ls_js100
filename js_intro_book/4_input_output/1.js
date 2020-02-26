let getString = require('readline-sync');

let name = getString.question('What is your name? ');

console.log(`Hello, ${name}!`)