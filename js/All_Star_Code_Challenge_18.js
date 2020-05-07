// my code

function strCount(str, letter){
    let answer = ``;
    for (let i=0; i<str.length; i++) {
        if (str[i] === letter) {
            answer += str[i]; 
        }
    }
    return answer.length;
}

// the clever one from codewars, thanks for coders :)
/*
function strCount(str, letter){  
    return str.split(letter).length-1;
}
*/
console.log(strCount('Hello', 'o'),`==> 1`);
console.log(strCount('Hello', 'l'),`==> 2`);
console.log(strCount('', 'z'),`==> 0`);