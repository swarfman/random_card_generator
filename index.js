var innerCNumber = Math.ceil(Math.random()*12);
var innerSuit = Math.ceil(Math.random()*4);

function pickSuit (){
    if (innerSuit === 1){
        return "&hearts;";
    }
    else if (innerSuit === 2){
        return "&#9830";
    }
    else if (innerSuit === 3){
        return "&#9824";
    }
    else if (innerSuit === 4){
        return "&#9827";
    }
}

var suit = pickSuit(innerSuit);

function pickRoyal(){
    if (innerCNumber === 10){
        return "J";
    }
    else if (innerCNumber === 11){
        return "Q";
    }
    else if (innerCNumber === 12){
        return "K";
    }
    else{
        return innerCNumber;
    }
}

var cNumber = pickRoyal(innerCNumber);

document.querySelector(".header").innerHTML = cNumber;
document.querySelector(".logo").innerHTML = suit;
document.querySelector(".bottom_logo").innerHTML = suit;