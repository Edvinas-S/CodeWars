// my try

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i=0; i<classPoints.length; i++) {
        sum += classPoints[i];
        if (sum/classPoints.length > yourPoints) {
            return false;
        }
    }
    return true
}

// codeWars cleverest
/*
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/
console.log(betterThanAverage([2, 3], 5),`==> true`);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75),`==> true`);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9),`==> false`);