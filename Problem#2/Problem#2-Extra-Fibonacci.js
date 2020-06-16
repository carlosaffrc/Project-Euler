
function fibonacci(n) {
    
    let prev = 0
    let curr = 1;
    let fibo = [];
    let temp;

    fibo[0] = 0;
    fibo[1] = 1

    for(let i = 2; i < n; i++) {
        
        fibo[i] = prev + curr;
        prev = curr;
        curr = fibo[i];
    }

    return fibo;
  }
  
  console.log(fibonacci(50));