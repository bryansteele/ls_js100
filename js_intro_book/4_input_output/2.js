let getString = require('readline-sync');

let firstName = getString.question('What is your first name? ');
let lastName = getString.question('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`)