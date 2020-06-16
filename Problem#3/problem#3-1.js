// Project Euler: Problem 3: Largest prime factor
// Big O notatio = O(n)


function largestPrimeFactor(n) {

    let biggestPrime = 0;
    let factor = 3;
    let count = 0;

    for(let i = n; i >= 2;){

        if(i % 2 === 0){
            i /= factor - 1;
        }
        else if(i % factor === 0){
            biggestPrime = factor;
            i /= factor;
        }
        else {
            factor += 2;
        }
        count++;
    }

    console.log("Biggest prime: ", biggestPrime);
    console.log("Iterations: ", count);
  }

largestPrimeFactor(13195);