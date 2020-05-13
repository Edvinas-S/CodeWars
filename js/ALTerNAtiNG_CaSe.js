// my try

String.prototype.toAlternatingCase = function () {
    console.log(this);
    let alternatedWord = ``;
    for (i=0; i<this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            alternatedWord += this[i].toUpperCase();
        } else {
            alternatedWord += this[i].toLowerCase();
        }
    }
    return alternatedWord
  }

// this one from CodeWars
/*
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
*/
console.log("hello world".toAlternatingCase(),`==> "HELLO WORLD"`);
console.log("HELLO WORLD".toAlternatingCase(),`==> "hello world"`);
console.log("hello WORLD".toAlternatingCase(),`==> "HELLO world"`);
console.log("HeLLo WoRLD".toAlternatingCase(),`==> "hEllO wOrld"`);
console.log("12345".toAlternatingCase(),`==> "12345"`);
console.log("1a2b3c4d5e".toAlternatingCase(),`==> "1A2B3C4D5E"`);
console.log("String.prototype.toAlternatingCase".toAlternatingCase(),`==> "sTRING.PROTOTYPE.TOaLTERNATINGcASE"`);
console.log("Hello World".toAlternatingCase().toAlternatingCase(),`==> "Hello World"`);
