// old fashioned (my :))

function correctPolishLetters (string) {

    let correct = '';
    for (let i=0; i<string.length; i++) {
        if (string[i] === 'ą') {
            correct = correct + 'a';
        }  
        else if (string[i] === 'ć' ) {
            correct += 'c';
        }
        else if (string[i] === 'ę' ) {
            correct += 'e';
        }
        else if (string[i] === 'ł' ) {
            correct += 'l';
        }
        else if (string[i] === 'ń' ) {
            correct += 'n';
        }
        else if (string[i] === 'ó' ) {
            correct += 'o';
        }
        else if (string[i] === 'ś' ) {
            correct += 's';
        }
        else if (string[i] === 'ź' ||
            string[i] ===  'ż') {
            correct += 'z';
        }
        else {
            correct = correct + string[i];
        }
    } 
    return correct;
}

//  i like this one 
/*
function correctPolishLetters (string) {
    return string
    .replace(/ł/g, 'l')
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
  }
*/
// and after studying above, i understand this one below
/*
function correctPolishLetters (string) {
    const dictionary = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dictionary[match]);
}
*/
console.log(correctPolishLetters("Jędrzej Błądziński"),`==> "Jedrzej Bladzinski"`);
console.log(correctPolishLetters("Lech Wałęsa"),`==> "Lech Walesa"`);
console.log(correctPolishLetters("Maria Skłodowska-Curie"),`==> "Maria Sklodowska-Curie"`);
