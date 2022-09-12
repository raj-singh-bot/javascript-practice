let charac = prompt("Enter a word");

let result = charac.split("").reverse().join('');

if(charac == result){
    console.log("characters are palindrome");
}
else{
    console.log("charac is not palindrome");
}