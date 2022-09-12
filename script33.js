let charac = prompt("enter characters to reverse");

let result = charac.split(" ").sort();

for(let reverse of result){
    console.log(reverse);
}