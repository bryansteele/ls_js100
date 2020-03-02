const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// { firstName: 'Jane', lastName: 'Doe' }
// the function is re-assigning the value inside the object, not the object itself. 