// Project Euler: Problem 1: Multiples of 3 and 5
const BigNumber = require('../node_modules/bignumber.js');

const multiplesOf3and5 = (num) => {

    const n3 = num.minus(1).dividedToIntegerBy(3);
    const n5 = num.minus(1).dividedToIntegerBy(5);
    const n15 = num.minus(1).dividedToIntegerBy(15)

    const sum3 = n3.multipliedBy(3).multipliedBy(n3.plus(1)).dividedToIntegerBy(2);
    const sum5 = n5.multipliedBy(5).multipliedBy(n5.plus(1)).dividedToIntegerBy(2);
    const sum15 = n15.multipliedBy(15).multipliedBy(n15.plus(1)).dividedToIntegerBy(2);

    const sumAll = sum3.plus(sum5).minus(sum15);

    console.log(sumAll.toString());
    
    }

multiplesOf3and5(new BigNumber(10));
multiplesOf3and5(new BigNumber(100));
multiplesOf3and5(new BigNumber(1000));
multiplesOf3and5(new BigNumber(10000));
multiplesOf3and5(new BigNumber(100000));
multiplesOf3and5(new BigNumber(1000000));
multiplesOf3and5(new BigNumber(10000000));
multiplesOf3and5(new BigNumber(100000000));
multiplesOf3and5(new BigNumber(1000000000));

