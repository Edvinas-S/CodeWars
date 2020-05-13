// my try

function removeEveryOther(arr){
    let newarr = [];
    for (var i=0; i<arr.length; i=i+2) {
            newarr.push(arr[i]);
    }
    return newarr
}
  
// best practice way
/*
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}
*/
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),`==> ['Hello', 'Hello Again']`);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),`==> [1, 3, 5, 7, 9]`);
console.log(removeEveryOther([[1, 2]]),`==> [[1, 2]]`);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),`==> [['Goodbye']]`);