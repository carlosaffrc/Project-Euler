// Project Euler: Problem 1: Multiples of 3 and 5

function multiplesOf3and5(number) {
    
     let result = 0;

    for(let i = 0; i < number; i++) 
    {

        if(i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }

    return result;
  
  }
  
  console.log(multiplesOf3and5(1000000000));

 
  
