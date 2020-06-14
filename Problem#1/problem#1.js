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

  // const numArr = Array.from(Array(number), (_, idx) => idx + 1);
  //   numArr.pop();
  //   const filterArr = num => (num % 3 === 0 || num % 5 === 0);
  //   const reduceArr = (acc, cur) => acc + cur;

  //   return numArr.filter(filterArr).reduce(reduceArr);

 
  
