function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// Splits the given string at each space and puts it into an array. Then it reverses the words/values in the array. Then map is used to iterate through the words/values and get the length of each word/value returned in a new array.

console.log(doSomething('Four score and seven years ago'));
