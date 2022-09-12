function fibonacci(num){
    if(num < 2){
        return num;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

let number = prompt("enter a number");

if(number <=0){
    console.log("Please enter a Positive number");
}
else{
    for(let i = 0; i < number; i++){
        console.log(fibonacci(i));
    }
}   