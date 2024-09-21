let gameSeq = [];
let userSeq = [];

let btns = ["chartreuse", "yellow", "darkGreen", "brown"];
let started = false;
let level = 0

let h4 = document.querySelector('h4');

//Adding Event listener
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelUp();
    }
});

//Button Flash
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

//User clickable Button Flash
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

//Update level value and calling function
function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    //random btn choose
    gameFlash(randBtn);
}

//Matching the colors
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h4.innerHTML = `Game Over! Your score was <b>${level}</b>  <br>press any key to start.`;
        reset();

        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 200);
    }
}

//User Press button
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btns');
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

//Reset Game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}