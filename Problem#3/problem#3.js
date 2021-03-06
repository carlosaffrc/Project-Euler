// Project Euler: Problem 3: Largest prime factor

function largestPrimeFactor(n) {

    let biggestPrime = 0;
    let factor = 2;
    let count = 0;

    for(let i = n; i >= 2;){

        if(i % factor === 0){
            biggestPrime = factor;
            i /= factor;
        }
        else {
            factor++;
        }
        count++;
    }

    console.log("Biggest prime: ", biggestPrime);
    console.log("Iterations: ", count);
  }

  largestPrimeFactor(600851475143);