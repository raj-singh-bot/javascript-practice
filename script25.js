function sum(num){
    if(num > 0){
        return num + sum(num-1);
    }
    else{
        return num;
    }
}

let number = parseInt(prompt("please enter a positive number"));

let result = sum(number);

console.log(result);
