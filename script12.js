let number = prompt("enter a positive number");
let isPrime = true;

if (number === 1){
    alert("1 is niether prime or composite number");
}

else if (number> 1){
    for (let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        alert(`${number} is prime number`);
    }
    else{
        alert(`${number} is not prime number`);
    }
}
else{
    alert('entered  number is not a prime number');
}