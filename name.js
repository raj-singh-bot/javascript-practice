let nameSymbol = document.getElementById('symbol');
let nameSymbolA = document.getElementById('symbolA');
let nameSymbolJ = document.getElementById('symbolJ');

let count ;
let letter = [7,[1,10,1],[1,10,1],7,[1,2,1],[1,4,1],[1,6,1],[1,8,1]];
let letterA = [5,[1,10,1],[1,10,1],5,[1,10,1],[1,10,1],[1,10,1],[1,10,1]];
let letterJ = [9,[9,1,8],[9,1,8],[9,1,8],[1,7,1],[1,7,1],[1,7,1],[2,1,2,1]];

letter.forEach(function (data) {
    if(data.length > 1){
        data.forEach(function (letter ) {
        if(letter == 1){
            nameSymbol.innerHTML += '$';
        }
        else{
            for(let j=0; j<letter; j++) {
                nameSymbol.innerHTML +=  '&nbsp';
            }
        }
    })
        nameSymbol.innerHTML = nameSymbol.innerHTML + "<br />"
    }
    else {
        for(let i = 0; i < data; i++) {
            nameSymbol.innerHTML += '$';
        }
    nameSymbol.innerHTML = nameSymbol.innerHTML + "<br />"
    }
})

letterA.forEach(function (data) {
    if(data.length > 1){
        data.forEach(function (letter ) {
        if(letter == 1){
            nameSymbolA.innerHTML += '@';
        }
        else{
            for(let j=0; j<letter; j++) {
                nameSymbolA.innerHTML +=  '&nbsp';
            }
        }
    })
        nameSymbolA.innerHTML = nameSymbolA.innerHTML + "<br />"
    }
    else {
        for(let i = 0; i < data; i++) {
            nameSymbolA.innerHTML += '@';
        }
    nameSymbolA.innerHTML = nameSymbolA.innerHTML + "<br />"
    }
})

letterJ.forEach(function (data) {
    if(data.length > 1){
        data.forEach(function (letter ) {
        if(letter == 1){
            nameSymbolJ.innerHTML += '#';
        }
        else{
            for(let j=0; j<letter; j++) {
                nameSymbolJ.innerHTML +=  '&nbsp';
            }
        }
    })
        nameSymbolJ.innerHTML = nameSymbolJ.innerHTML + "<br />"
    }
    else {
        for(let i = 0; i < data; i++) {
            nameSymbolJ.innerHTML += '#';
        }
    nameSymbolJ.innerHTML = nameSymbolJ.innerHTML + "<br />"
    }
})