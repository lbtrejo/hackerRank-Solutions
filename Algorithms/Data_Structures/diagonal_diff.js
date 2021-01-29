// Problem location: https://www.hackerrank.com/challenges/diagonal-difference/problem

// Desc: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    // Calculate the diagnoals as arrays
    const   leftDiag = [],
            rightDiag = [],
            n = arr.length;
    for (let i = 0; i < n; i++) {
        leftDiag.push(arr[i][i]);
        rightDiag.push(arr[i][n-i-1]);
    }
    // Reduce the arrays to a singular value
    let ldVal = 0,
        rdVal = 0;
    ldVal = leftDiag.reduce((total, curVal) => {
        return total += curVal;
    })
    rdVal = rightDiag.reduce((total, curVal) => {
        return total += curVal;
    })
    // Calc abs() the difference
    return Math.abs(ldVal - rdVal);
}