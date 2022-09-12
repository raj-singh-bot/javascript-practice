function reverse(str){
    let newString = "";
    for(let i = str.length-1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
let string = prompt("Enter a word to reverse");
let result = reverse(string);
console.log(result);