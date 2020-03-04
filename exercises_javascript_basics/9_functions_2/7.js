function catAge(humanYrs) {
  switch (humanYrs) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYrs - 2) * 4;
  }
}

console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));