function isBlank(str) {
  if (str.startsWith(' ')) {
    return true;
  } else {
    return str.length === 0;
  }
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));  



// lesson's solution

// return str.trim().length === 0;