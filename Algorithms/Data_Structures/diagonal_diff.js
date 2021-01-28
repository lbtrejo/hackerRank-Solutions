// Problem location: https://www.hackerrank.com/challenges/diagonal-difference/problem

// Desc: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    

    let leftToRightDiagSum = arr[0][0] + arr[1][1] + arr[2][2];
    let rightToLeftDiagSum = arr[0][2] + arr[1][1] + arr[2][0];

    let result = Math.abs(leftToRightDiagSum - rightToLeftDiagSum);

    return result;

}