let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);


// bar

// the consol.log() sees line 1. Line 3 is inside the block declaring a different variable foo