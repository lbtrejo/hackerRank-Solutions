// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    const results = ar.reduce((tally, curSock) => {
        tally[curSock] = (tally[curSock] || 0) + 1;
        return tally;
    }, {})
    for (let sock in results) {
        pairs += Math.floor((results[sock] / 2))
    }
    return pairs;
}