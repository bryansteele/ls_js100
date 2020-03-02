function repeat(num, str) {
  let counter = '';

  while (num > 0) {
    counter += str;
    num -= 1;
  }
  return counter;
}

console.log(repeat(3, 'ha'));
console.log(repeat(34, 'ha ha ha!'));