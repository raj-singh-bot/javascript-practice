let num1 = prompt("Enter first number to compare");
let num2 = prompt("Enter second number to compare");

let result1 = num1.charAt(num1.length - 1);
let result2 = num2.charAt(num2.length - 1);

let finalResult;
if(result1 === result2){
    console.log("last number of both input are equal");
} 
else{
    console.log("last number of both input are not equal");
}
