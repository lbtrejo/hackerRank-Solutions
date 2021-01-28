// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// valleys happen whenever level = -1, count the -1 occurences and return that value

function countingValleys(steps, path) {
    // Write your code here
    let valleys = 0;
    let level = 0;
    const intPath = path.split('').map((inc) => {
        return (inc === 'D') ? -1 : 1;
    })
    intPath.reduce((total, currStep) => {
        (total === 0 && currStep === -1) ? valleys++ : null;
        total += currStep;
        return total;
    }, level);
    return valleys;
}