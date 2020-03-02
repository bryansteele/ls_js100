function sumOfSquares(num) {
  return num.reduce((accumulator, number) => {
    return accumulator + number ** 2;
  }, 0);
  return num;
}




let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));