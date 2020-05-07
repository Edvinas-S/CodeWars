// my try

function tripleTrouble(one, two, three){
    let word = ``;
    for (i=0; i<one.length; i++) {
        word += one[i] + two[i] + three[i];
    }
    return word
}

// different way to write it
//const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

console.log(tripleTrouble("this","test","lock"),`==> "ttlheoiscstk"`);
console.log(tripleTrouble("aa","bb","cc"),`==> "abcabc"`);
console.log(tripleTrouble("Bm", "aa", "tn"),`==> "Batman"`);
console.log(tripleTrouble("LLh","euo","xtr"),`==> "LexLuthor"`);