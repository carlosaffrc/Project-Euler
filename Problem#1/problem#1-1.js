// Project Euler: Problem 1: Multiples of 3 and 5

const multiplesOf3and5 = (num) => {

  let p = Math.floor((num - 1) / 3)
  let sum = (3 * p * (p + 1)) / 2;

  p = Math.floor((num - 1) / 5)
  sum += (5 * p * (p + 1)) / 2;

  p = Math.floor((num - 1) / 15)
  sum -= (15 * p * (p + 1)) / 2;

  
  return sum;
  
  }

  
  console.log(multiplesOf3and5(1000000000));