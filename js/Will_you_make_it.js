// my code

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return !(distanceToPump / mpg > fuelLeft);
}

// you can write it this way - CodeWars
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
*/
console.log(zeroFuel(50, 25, 2),`==> true`);
console.log(zeroFuel(100, 50, 1),`==> false`);
