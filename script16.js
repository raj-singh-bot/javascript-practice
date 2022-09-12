let number = prompt("enter a number");

let num1=0, num2=1, next_numb;
for(let i=1 ; i<= number ; i++){
    console.log(num1);
    next_numb = num1 + num2;
    num1= num2;
    num2= next_numb;
}