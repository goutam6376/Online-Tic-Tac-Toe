console.log("hello world");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X";

// change turn

const changeTurn = () => {
    if(turn === "X"){
        return "0";
    }
    else{
        return "X";
    }
}

// check win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e => {
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML!=="")){
            document.querySelector(".info").innerHTML = "Player "+boxtext[e[0]].innerHTML+" is "+ "Won 🚩";
            isgameover=true;
            document.querySelector(".info").style.color = "red";
        }
    });
}


// logic

// music.play();

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
        }
    })
});

// Reset game 

reset.addEventListener('click' , () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerHTML = "";
    })
    turn = "X";
    isgameover=false;
})
