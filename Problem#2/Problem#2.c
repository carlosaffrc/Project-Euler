#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

void fiboEvenSun(unsigned long long n);

int main(){
    int t; 
    scanf("%d",&t);
    for(int a0 = 0; a0 < t; a0++){
        unsigned long long n; 
        scanf("%llu",&n);

        fiboEvenSun(n);
    }
    return 0;
}

void fiboEvenSun(unsigned long long n)
{
    unsigned long long fn0 = 0;
    unsigned long long fn1= 2;
    unsigned long long fn2 = 8;
    unsigned long long fiboSum = 2;


    while(fn2 < n) {


        fiboSum += fn2;
        fn0 = fn1;
        fn1 = fn2;
        fn2 = 4 * fn1 + fn0;
        //printf("%llu\n", fn2);
    }


    printf("%llu\n", fiboSum);
}