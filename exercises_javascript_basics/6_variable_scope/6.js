let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// false
// console.log only sees the line 2 variable b. Line 5 variable is inside the block scope.