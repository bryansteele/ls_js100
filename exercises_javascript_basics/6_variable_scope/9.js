const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// TypeError: Assignment to constant variable.
// Can't re-assign the const.