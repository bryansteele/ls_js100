let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// 1 --- Two different variable bar's. Line 3 bar is inside the scope. It can't be seen from outside.