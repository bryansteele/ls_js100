function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();


// ReferenceError: Cannot access 'a' before initialization

// Line 2 a is shadowed by the line 6 variable. Line 6 a get hoisted and isn't assigned anything, therefore ReferenceError.