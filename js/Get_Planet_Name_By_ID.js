
// the first try, with some validation (i dont know why :D))

function getPlanetName(id){
    if (!isFinite(id)) {
        return console.error(`Error, ...`)
    }
    if (typeof(id) !== 'number') {
        return console.error(`Error, must be a number`);
    }
    if (id <= 0 ||
        id > 8 ) {
        return console.error(`Error, there are only 8 planet in sun system ;)`)
    }
    let name = ``;

    if (id === 1 ) {
    name = 'Mercury';
    } 
    if (id === 2 ) {
    name = 'Venus';
    }
    if (id === 3 ) {
    name = 'Earth';
    }
    if (id === 4 ) {
    name = 'Mars';
    }
    if (id === 5 ) {
    name = 'Jupiter';
    }
    if (id === 6 ) {
    name = 'Saturn';
    }
    if (id === 7 ) {
    name = 'Uranus';
    }
    if (id === 8) {
    name = 'Neptune';
    }
    return name;
}

 // i like this one more
/*
  function getPlanetName(id){  
    switch(id){
      case 1:
        return "Mercury";
      case 2:
        return "Venus";
      case 3:
        return "Earth";
      case 4:
        return "Mars";
      case 5:
        return "Jupiter";
      case 6:
        return "Saturn";
      case 7:
        return "Uranus";
      case 8:
        return "Neptune";
      default:
        return "invalid planet id in function getPlanetName()";
    }
  }
*/
  console.log(getPlanetName(3));
