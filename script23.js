let num1 = prompt("enter first positive number");
let num2 = prompt("enter second positive number");

let min = (num1> num2) ? num1 : num2;

while (true){
    if(min % num1 == 0 && min % num2 == 0){
        console.log(min);
        break;
    }
    min++;
}