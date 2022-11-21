// elements variables
let cards = document.getElementsByClassName('cards');
let turnDiv = document.querySelector(".turnDiv");
let gifDiv = document.querySelector("#gif-div");
let gif = document.querySelector("#gif");
let btn = document.querySelector(".btn");
let resetBtn = document.querySelector("#resetBtn");
let line = document.querySelector(".line");
let boxtext = document.getElementsByClassName('boxtext');


// audio variables
let audiobg = new Audio('sound/music.mp3');
let ting = new Audio('sound/ting.mp3');
let gameover = new Audio('sound/gameover.mp3');

// global variables
let turn = 'X';
let isgameover = false;

// change turn function
const changeturn = () => {
    return turn === 'X' ? 'O' : 'X';
}

// game win logic
const checkwin = () => {
    let wins = [
        [0, 1, 2, 2.5, 5, 0],
        [3, 4, 5, 2.5, 15, 0],
        [6, 7, 8, 2.5, 25, 0],
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 12.5, 15, 90],
        [0, 4, 8, 2.5, 15, 225],
        [2, 4, 6, 2.5, 15, 315],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            turnDiv.innerText = boxtext[e[0]].innerText + ' won';
            isgameover = true;
            gif.style.width = '200px';
            gameover.play();
            line.style.width = '25vw';
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//game logic
Array.from(cards).forEach(elements => {
    let boxtext = elements.querySelector(".boxtext");
    elements.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn()
            ting.play();
            checkwin();
            if (!isgameover) {
                turnDiv.innerHTML = "turn for : " + turn;
            }
        }
    })
})

//reset button working
resetBtn.addEventListener('click', () => {
    Array.from(boxtext).forEach(e => {
        e.innerText = ''
    })
    turn = 'X';
    isgameover = false;
    turnDiv.innerHTML = "turn for : " + turn;
    gif.style.width = '0px';
    line.style.width = '0vw';
})