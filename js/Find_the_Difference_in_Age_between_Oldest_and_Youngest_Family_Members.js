// i try this way

function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0];
    for (i=0; i<ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
        if (ages[i] < youngest) {
            youngest = ages[i];
        }
    }
    return [youngest, oldest, oldest-youngest];
}

// there are function "Math" in JS :D, thanks CodeWars
// p.s. "..." syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
/*
function differenceInAges (ages) {
    let max = Math.max(...ages);
        min = Math.min(...ages);
    return [min, max, max-min]
}
*/
console.log(differenceInAges([82, 15, 6, 38, 35]),`==> [6, 82, 76]`);
console.log(differenceInAges([57, 99, 14, 32]),`==> [14, 99, 85]`);