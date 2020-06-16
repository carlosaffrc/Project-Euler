// Project Euler: Problem 2: Even Fibonacci Numbers

function fiboEvenSum(n) {
    
    let fibo = 0;
    let fiboSum = 0;
    let num = 0;
    const term1 = Math.sqrt(5);
    const term2 = 1 / term1;
    const term3 = (1 + term1) / 2;
    const term4 = (1 - term1) / 2;

    while(fibo < n) {
        
        fibo = Math.round(term2 * Math.pow(term3, num) - term2 * Math.pow(term4, num))
        fiboSum += fibo;
        num += 3;
    }
   

    return fiboSum - fibo;
}

console.log(fiboEvenSum(5807526976));