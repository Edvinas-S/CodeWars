
function areaOrPerimeter(l , w) {
    if ( l === w) {
        return l*w;
    }
    return (l+w)*2;
}

// another way to write it
// const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);
console.log(areaOrPerimeter(4 , 4),`==> 16`);
console.log(areaOrPerimeter(6 , 10),`==> 32`);