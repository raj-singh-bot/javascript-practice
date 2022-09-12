function characOccu(str, element){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == element) {
            count += 1;
        }
    }
    return count;
}

let charc = prompt("Enter a word");
let userInput = prompt("Enter a character");

let result = characOccu(charc, userInput);
console.log(result);