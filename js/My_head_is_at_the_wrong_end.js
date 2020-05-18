// my try

function fixTheMeerkat(arr) {
    return arr.reverse();
}

// from codeWars
// const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

console.log(fixTheMeerkat([3, 2, 1]),`==> [1, 2, 3]`);
console.log(fixTheMeerkat(["tails", "body", "heads"]),`==> ["heads", "body", "tails"]`);
console.log(fixTheMeerkat(["bottom", "middle", "top"]),`==> ["top", "middle", "bottom"]`);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]),`==> ["upper legs", "torso", "lower legs"]`);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]),`==> ["sky", "rainbow", "ground"]`);