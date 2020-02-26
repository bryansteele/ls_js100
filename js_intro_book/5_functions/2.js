function getName(prompt) {
  let getString = require('readline-sync');
  let name = getString.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);