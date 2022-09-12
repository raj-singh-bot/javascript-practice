function guessNumber(){
    let random = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt("guess a number between 1 to 10"));

    while(number !== random){
        number = parseInt(prompt("guess a number between 1 to 10"));
    }
    if(number==random){
        console.log("you guesses correct number");
    }
}
guessNumber();