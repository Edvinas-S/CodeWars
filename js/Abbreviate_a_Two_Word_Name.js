// my try

function abbrevName(name){
    name = name.toUpperCase();
    let firstLetter = ``;
    let secondLetter = ``;
    for (let i=0; i<=name.length; i++) {
        firstLetter = name[0];
    }
    for (let i=0; i<=name.length; i++) {
        if (name[i] === ` `) {
            secondLetter = name[i+1];
        }
    }
    return firstLetter+`.`+secondLetter
}

// from codeWars
/*
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
*/
console.log(abbrevName("Sam Harris"),`==> "S.H"`);
console.log(abbrevName("Patrick Feenan"),`==> "P.F"`);
console.log(abbrevName("Evan Cole"),`==> "E.C"`);
console.log(abbrevName("P Favuzzi"),`==> "P.F"`);
console.log(abbrevName("David Mendieta"),`==> D.M"`);