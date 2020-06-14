#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

void multiplesOf3and5(long num);

int main(){
    int t; 
    scanf("%d",&t);
    for(int a0 = 0; a0 < t; a0++){
        unsigned long long n; 
        scanf("%llu",&n);

        multiplesOf3and5(n);
    }
    return 0;
}

void multiplesOf3and5(long num) {
    unsigned long long p = floor((num - 1) / 3);
    unsigned long long sum =  (3 * p * (p + 1))/2;
    
    p = floor((num - 1) / 5);
    sum += (5 * p * (p + 1))/2;

    p = floor((num - 1) / 15);
    sum -= (15 * p * (p + 1))/2;


    printf("%llu\n", sum);



  }