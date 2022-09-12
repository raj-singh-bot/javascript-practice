let num1 = parseInt(prompt("Enter a low number"));
let num2 = parseInt(prompt("Enter a high number"));

for (let i = num1; i < num2; i++) {
    let digit = i.toString().length;

    let sum = 0;
    let temp = i;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** digit;

        temp = parseInt(temp / 10);
    }
    if(sum == i){
        console.log(i);
    }
}