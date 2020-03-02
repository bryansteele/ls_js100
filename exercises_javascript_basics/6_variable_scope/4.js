function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// 1
// a is declared inside the function. The if statement will always be true, therefor the code will execute below it, which is logging a. which is still inside the function and accessible in the if statement.