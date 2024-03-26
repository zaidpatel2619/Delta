
let systemSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let scores = [];

let h2 = document.querySelector("h2");

let colors = ["pink", "grey", "green", "purple"];


document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn, randomCol) {
    btn.classList.add(`${randomCol}-flash`);
    setTimeout(function () {
        btn.classList.remove(`${randomCol}-flash`);
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
    let randomCol = colors[randomIndex];
    let randomBtn = document.querySelector(`.${randomCol}`);
    systemSeq.push(randomCol);
    btnFlash(randomBtn, randomCol);
}

function checkClick(idx) {
    if (systemSeq[idx] === userSeq[idx]) {
        if (systemSeq.length === userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        scores.push(level);
        let highestScore = Math.max(...scores);
        h2.innerHTML = `Game Over at ${level}! <br /> Highest Score is ${highestScore} <br/ > Press any key to restart`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnPress() {
    if (started == true) {
        let btn = this;
        btnFlash(btn, btn.id);
        userSeq.push(btn.id);
        checkClick(userSeq.length - 1);
    }
}

let boxes = document.querySelectorAll(".box");
for (box of boxes) {
    box.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    systemSeq = [];
    userSeq = [];
    level = 0;
}