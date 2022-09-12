let number = prompt("enter a number");
let n = number.length;
let result = 0;

for (let i=0 ; i<=n ; i++){
     j = number.charAt(i);
    result = result + (j**n);
}
if(result==number){
    console.log("number is armstrong");
}
else{
    console.log("number is not armstrong");
}