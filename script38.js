// let string = prompt("Enter a sentence");

// let result = string.split(" ");

// let word = result[0];
// let final = word.toUpperCase();
// console.log(final);



function capitalize(str) {
    let converted = str.charAt(0).toUpperCase() + str.slice(1);
    return converted;
}
let string2 = prompt("Enter a word");
let result2 = capitalize(string2);

console.log(result2);