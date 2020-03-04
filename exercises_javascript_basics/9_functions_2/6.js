function calculateBMI(heightInCm, weightInKm) {
  let heightInMt = heightInCm / 100;
  return Number(weightInKm / (heightInMt ** 2)).toFixed(2);
}

console.log(calculateBMI(180, 80));
console.log(calculateBMI(199, 86));