function oddLengths(arr) {
  return arr.reduce((filteredArray, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredArray.push(length);
    }
    return filteredArray;
  }, []);
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));