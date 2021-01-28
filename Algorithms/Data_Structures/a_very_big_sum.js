// Problem Link: https://www.hackerrank.com/challenges/a-very-big-sum/problem

//In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
    let result = 0;
    
    for (let i = 0; i < ar.length; i++) {
        result += ar[i];
    }

    return result;
}