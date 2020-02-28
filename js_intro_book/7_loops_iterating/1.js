let getString = require('readline-sync');
let age = Number(getString.question('How old are you? '));

console.log(`You are ${age} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}

