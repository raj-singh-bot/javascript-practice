function vowel(str, compare){
    let count = 0;
    for(let i=0;i<str.length;i++){
        for(j=0 ; j<compare.length ; j++){
            if(str[i] == compare[j]){
                count += 1;
            }
        }
    }
    return count;
}
let string = prompt("enter a sentence");
let vow = ("aeiouAEIOU");
let result = vowel(string,vow);
console.log(`number of vowel in a sentence is : ${result}`);