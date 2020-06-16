// Project Euler: Problem 3: Largest prime factor
// Big O notatio = O(sqrt(n)
// Simpler and most elegant solution

function largestPrimeFactor(largest) {

    let div = 3;
    let count = 0;

    while (div <= parseInt(Math.sqrt(largest))) 
    {
        if(largest % 2 === 0)
        {
            largest /= 2;
        }
        if (largest % div === 0) 
        {
            largest /= div;
        }
        else {
            div += 2;
        }
        count++;
    }

    console.log("Max prime: ", largest);
    console.log("Iterations: ", count);
  }

largestPrimeFactor(13195);