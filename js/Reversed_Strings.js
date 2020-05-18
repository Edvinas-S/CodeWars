// my try

function solution(str){
    let newStr = ``;
    for (i=str.length-1; i>=0; i--) {
            newStr += str[i];
    }
    return newStr
}

// it seems there are "reverse" function :)
/*
function solution(str){
    return str.split('').reverse().join('');  
}
*/
console.log(solution('world'),`"world ==> dlrow"`);
console.log(solution('sula'),`"sula ==> alus"`);