function checkString(str){
    if(str.startsWith("R") || str.startsWith("r") && str.endsWith("J") || str.endsWith("j")){
        console.log("string starts with r and ends with j");
    }
    else{
        console.log("string does not starts with r and ends with j");
    }
}
let input = prompt("Enter a string");
checkString(input);