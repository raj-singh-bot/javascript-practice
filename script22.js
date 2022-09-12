let num1 = prompt("enter the first number");
let num2 = prompt("enter the second number");
let hcf;

for(let i=1; i<= num1 && i<= num2; i++){
    if(num1 % i == 0 && num2 % i == 0){
        hcf = i;
    }
}
console.log(hcf);