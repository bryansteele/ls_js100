function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// Not Empty.....becuase an empty array is 0 in length, which meanse it has something.. 
// ie.     [].length is 0