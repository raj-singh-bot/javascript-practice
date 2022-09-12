var num1 = parseInt(prompt("Enter first number "));
var num2 = parseInt(prompt("Enter second number "));


let temp;
temp = num1;
num1 = num2;
num2 = temp;

alert(`this is first number after swap ${num1} and this is second number ${num2}`);