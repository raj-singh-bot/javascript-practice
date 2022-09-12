let number = prompt("enter a number to find the factorial");

let fact=1;
for (let i = 1; i <= number; i++) {
    //result = number * (number - i);
    fact *= i;
}
alert(fact);

    