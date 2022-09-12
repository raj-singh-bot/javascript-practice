function factorial(num){
    if(num == 0) {
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

let number = prompt('Enter a number');

if(number >= 0){
    console.log(factorial(number));
}
else{
    console.log("please enter a positive number");
}