// jshint esversion:6


let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let mistakeFail = true;
let on = true;
let win;


const turnCounter = document.querySelector("#turn");
const top1 = document.querySelector("#top1");
const top2 = document.querySelector("#top2");
const top3 = document.querySelector("#top3");
const bottom1 = document.querySelector("#bottom1");
const bottom2 = document.querySelector("#bottom2");
const bottom3 = document.querySelector("#bottom3");
const bbottom1 = document.querySelector("#b-bottom1");
const bbottom2 = document.querySelector("#b-bottom2");
const bbottom3 = document.querySelector("#b-bottom3");
const startButton = document.querySelector("#start");


startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 9) + 1);

    }
    console.log(order);
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}


function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            if (order[flash] == 5) five();
            if (order[flash] == 6) six();
            if (order[flash] == 7) seven();
            if (order[flash] == 8) eight();
            if (order[flash] == 9) nine();
            flash++;
        }, 200);
    }
}



function one() {

    top1.style.backgroundColor = "lightgreen";
}

function two() {

    top2.style.backgroundColor = "tomato";

}

function three() {

    top3.style.backgroundColor = "tomato";
}

function four() {

    bottom1.style.backgroundColor = "yellow";
}

function five() {



    bottom2.style.backgroundColor = "lightskyblue";
}

function six() {



    bottom3.style.backgroundColor = "lightskyblue";
}

function seven() {

    bbottom1.style.backgroundColor = "yellow";
}

function eight() {



    bbottom2.style.backgroundColor = "lightskyblue";
}

function nine() {



    bbottom3.style.backgroundColor = "lightskyblue";
}


function clearColor() {
    top1.style.backgroundColor = "darkgreen";
    top2.style.backgroundColor = "darkred";
    top3.style.backgroundColor = "cyan";
    bottom1.style.backgroundColor = "goldenrod";
    bottom2.style.backgroundColor = "darkblue";
    bottom3.style.backgroundColor = "yellow";
    bbottom1.style.backgroundColor = "goldenrod";
    bbottom2.style.backgroundColor = "darkblue";
    bbottom3.style.backgroundColor = "yellow";

}

function flashColor() {
    top1.style.backgroundColor = "lightgreen";
    top2.style.backgroundColor = "tomato";
    top3.style.backgroundColor = "tomato";
    bottom1.style.backgroundColor = "yellow";
    bottom2.style.backgroundColor = "lightskyblue";
    bottom3.style.backgroundColor = "lightskyblue";
    bbottom1.style.backgroundColor = "yellow";
    bbottom2.style.backgroundColor = "lightskyblue";
    bbottom3.style.backgroundColor = "lightskyblue";
}


top1.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

top2.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});


top3.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});


bottom1.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottom2.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(5);
        check();
        five();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottom3.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(6);
        check();
        six();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bbottom1.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(7);
        check();
        seven();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bbottom2.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(8);
        check();
        eight();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bbottom3.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(9);
        check();
        nine();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

