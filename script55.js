let str1 = 'hello';
let str2 = 'hello';

let result= str1 == str2;
if(result) {
    console.log("done");
}
else {
    console.log("fail");
}

let result2 = str1.localeCompare(str2);

console.log(result2);
