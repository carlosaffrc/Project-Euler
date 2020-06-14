const BigNumber = require('../node_modules/bignumber.js');

const fiboEvenSum = n => {
    
    let fn0 = new BigNumber(0);
    let fn1 = new BigNumber(2);
    let fn2 = new BigNumber(8);
    let fiboSum = new BigNumber(2);

    while(fn2.isLessThan(n)) {
        
        fiboSum = fiboSum.plus(fn2);
        fn0 = fn1;
        fn1 = fn2;
        fn2 = fn1.multipliedBy(4).plus(fn0);
        //console.log(fn2.toString());
    }
   

    //return fiboSum - fibo;
    console.log(fiboSum.toString());

}

fiboEvenSum(new BigNumber(1000000000000000));