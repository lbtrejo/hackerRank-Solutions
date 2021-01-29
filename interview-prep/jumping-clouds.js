// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

//For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let curIdx = 0;
    let solPath = [];
    let lastIdx = (c.length - 1);
    while (curIdx < lastIdx){
        let p0 = c[curIdx];
        let p1 = c[curIdx + 1] ?? null;
        let p2 = c[curIdx + 2] ?? null;
        if (p0 === p2) {
            solPath.push(p2);
            curIdx += 2;
        }
        else {
            solPath.push(p1);
            curIdx++;
        }
    }
    return solPath.length;
}