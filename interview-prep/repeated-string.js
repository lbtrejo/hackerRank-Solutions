

// Complete the repeatedString function below.
// function repeatedString(s, n) {
//     let count = 0;
//     let fullString = '';
//     while(fullString.length < n) {
//         fullString += s;
//     }
//     fullString = fullString.slice(0, n);
//     for (let char of fullString) {
//         if(char === 'a') {
//             count++;
//         }
//     }
//     return count;
// }
// Above works for smaller n values, but errors due to heap memory problems.
// 


// Credit to https://github.com/gabrielgiordan/HackerRank
// Brilliant solution
function repeatedString(s, n) {
    let c = 0,
        ca = 0,
        r = n % s.length
    for (let i = s.length; i-- > 0;) {
        if (s.charAt(i) === 'a') {
            ++c
            if (i < r)
                ++ca
        } 
    }
    return ((n - r) / s.length * c) + ca
}
