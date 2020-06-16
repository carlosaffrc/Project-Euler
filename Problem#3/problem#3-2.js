// Project Euler: Problem 3: Largest prime factor
// Big O notatio = O(sqrt(n))


function largestPrimeFactor(n) {

    let maxPrime = 2;
    let iLimit = parseInt(Math.sqrt(n));
    let count = 0;
    //let div;
    //let mod;

    for(let i = 1; i <= iLimit; i ++) {
        let mod = n % i;
        if(mod === 0) {
            let div = n / i;
            if(div === i){
                // Perfect square number
                if(isPrime(div)) maxPrime = Math.max(maxPrime, div);
            }
            else {
                if(isPrime(div)) maxPrime = Math.max(maxPrime, div);
                else if(isPrime(i)) maxPrime = Math.max(maxPrime, i);
            }
        }
        count++;
    }

    console.log("Biggest prime: ", maxPrime);
    console.log("Iterations: ", count);
  }

  function isPrime(n) {
    if(n % 2 === 0)
        return false;
    
    for(let i = 3; i <= parseInt(Math.sqrt(n)); i+=2) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

largestPrimeFactor(13195);