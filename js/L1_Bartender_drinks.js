// my try

function getDrinkByProfession(param) {
    const paramLow = param.toLowerCase();
    const paramUpFirst = paramLow[0].toUpperCase();
    const paramRight = paramLow.replace(new RegExp('^' + paramLow[0]), paramUpFirst);

    let answer = ``;
    switch (paramRight) {
        case `Jabroni`:
            answer = `Patron Tequila`;
            break;
        case `School counselor`:
            answer = `Anything with Alcohol`;
            break;
        case `Programmer`:
            answer = `Hipster Craft Beer`;
            break;
        case `Bike gang member`:
            answer =  `Moonshine`;
            break;
        case `Politician`:
            answer =  `Your tax dollars`;
            break;
        case `Rapper`:
            answer = `Cristal`;
            break;
        default: answer = `Beer`;
        break;
    }
    return answer;
}

// it seems a litle bit simplest, i didnt need to change first letter to uppercase
/*
function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return "Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
}
*/
console.log(getDrinkByProfession("jabrOni"),`==> 'Jabroni' should map to 'Patron Tequila'`);
console.log(getDrinkByProfession("scHOOl counselor"),`==> 'School counselor' should map to 'Anything with alcohol'`);
console.log(getDrinkByProfession("prOgramMer"),`==> 'Programmer' should map to 'Hipster Craft Beer'`);
console.log(getDrinkByProfession("bike ganG member"),`==> 'Bike gang member' should map to 'Moonshine'`);
console.log(getDrinkByProfession("poLiTiCian"),`==> 'Politician' should map to 'Your tax dollars'`);
console.log(getDrinkByProfession("rapper"),`==> 'Rapper' should map to 'Cristal'`);
console.log(getDrinkByProfession("pundit"),`==> 'Pundit' should map to 'Beer'`);
console.log(getDrinkByProfession("Pug"),`==> 'Pug' should map to 'Beer'`);