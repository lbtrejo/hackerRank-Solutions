// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const hgs = [];
    const size = arr.length;
    for (let i = 0; i <= size - 3; i++) {  // loop over the rows
        for (let j = 0; j <= size - 3; j++) {  // loop over the columns
            const hg = [
                arr[i][j],
                arr[i][j+1],
                arr[i][j+2],
                arr[i+1][j+1],
                arr[i+2][j],
                arr[i+2][j+1],
                arr[i+2][j+2]
            ];
            const hgSum = hg.reduce((acc, curVal) => {  // calculate the hg sum
                return acc += curVal;
            }, 0);
            hgs.push(hgSum);
        }
    }
    const hgsMax = hgs.reduce((max, curVal) => { // find and return the max
        return Math.max(max, curVal);
    })
    return hgsMax;
}