let num = prompt("Enter a positive number to find factors");

for (let i=1; i<=num; i++) {
    if(num % i == 0) {
        console.log(i);
    }
}