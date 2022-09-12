let operations = prompt('select single operator + - * /');

let num1 = parseInt(prompt("Enter first operand"));
let num2 = parseInt(prompt("Enter second operand"));
let result;

switch (operations) {
    case "+":   result = num1 + num2;
                console.log(`${num1} + ${num2} = ${result}`);
                break;

    case "-":   result = num1 - num2;
                console.log(`${num1} - ${num2} = ${result}`);
                break;
    
    case "*":   result = num1 * num2;
                console.log(`${num1} * ${num2} = ${result}`);
                break;

    case "/":   result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
                break;

        default: console.log("Invalid operation");
    break;
}