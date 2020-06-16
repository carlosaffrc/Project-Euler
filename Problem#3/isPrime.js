function isPrime(n) {

    let count = 0;
    let iLimit = parseInt(Math.sqrt(n));

    if(n % 2 === 0)
        return false;
    
    for(let i = 3; i <= iLimit; i+= 2) {
        count++;
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(10));