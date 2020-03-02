function oddLengths(array) {
  lengths = array.map(i => i.length);
  return lengths.filter(i => i % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));