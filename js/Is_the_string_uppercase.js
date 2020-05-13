// my try

String.prototype.isUpperCase = function() {
    let Up = this.toUpperCase();
    let string = ``+this;
    if (string === Up) {
        return true;
    } else {
        return false;
    }
}

// this is the same i did just much shorter - CodeWars
/*
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
}
*/
console.log(''.isUpperCase() !== undefined,`undefined ==> 'Must define the prototype isUpperCase'`)
console.log('c'.isUpperCase(), false,`false ==> 'c is not upper case'`);
console.log('C'.isUpperCase(), true,`true ==> 'C is upper case'`);
console.log('hello I AM DONALD'.isUpperCase(), false,`false ==> 'hello I AM DONALD not is upper case'`);
console.log('HELLO I AM DONALD'.isUpperCase(), true,`true ==> 'HELLO I AM DONALD is upper case'`);
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false,`false ==> 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'`);
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true,`true ==> 'ACSKLDFJSGSKLDFJSKLDFJ is upper case'`);
console.log('Hello World'.isUpperCase(), false,`false ==> 'Hello World is not upper case'`);
console.log('hello world'.isUpperCase(), false,`false ==> 'hello world is not upper case'`);
console.log('Hello world'.isUpperCase(), false,`false ==> 'Hello world is not upper case'`);
console.log('hello World'.isUpperCase(), false,`false ==> 'hello World is not upper case'`);
console.log('HELLO WORLD'.isUpperCase(), true,`true ==> 'HELLO WORLD is upper case'`);
console.log('Bob walks his dog every day.'.isUpperCase(), false,`false ==> 'Bob walks his dog every day. is not upper case'`);
console.log('BOB walks his dog every day.'.isUpperCase(), false,`false ==> 'BOB walks his dog every day. is not upper case'`);
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true,`true ==> 'BOB WALKS HIS DOG EVERY DAY. is upper case'`);
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false,`false ==> 'BOB WALKs HIS DOG EVERY DAY. is not upper case'`);
console.log('#lovewins'.isUpperCase(), false,`false ==> '#lovewins is not upper case'`);
console.log('#Lovewins'.isUpperCase(), false,`false ==> '#Lovewins is not upper case'`);
console.log('#loveWins'.isUpperCase(), false,`false ==> '#loveWins is not upper case'`);
console.log('#LoveWins'.isUpperCase(), false,`false ==> '#LoveWins is not upper case'`);
console.log('#LOVEWins'.isUpperCase(), false,`false ==> '#LOVEWins is not upper case'`);
console.log('#LoveWINS'.isUpperCase(), false,`false ==> '#LoveWINS is not upper case'`);
console.log('#LOVEWINs'.isUpperCase(), false,`false ==> '#LOVEWINs is not upper case'`);
console.log('#lOVEWINS'.isUpperCase(), false,`false ==> '#lOVEWINS is not upper case'`);
console.log('#LOVEWINS'.isUpperCase(), true,`true ==> '#LOVEWINS is upper case'`);