var num = prompt("enter a number");

// if(num % 2 == 0) {
//     alert("entered number is even");
// }
// else{
//     alert("entered number is odd");
// }

var result = (num % 2 == 0)? "even" : "odd";

alert(`entered number is ${result}`);