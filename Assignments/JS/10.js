console.log("Assignment 10");
const test = document.querySelector("#test");

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", (event) => {
    event.target.style.color = "orange";
    setTimeout(() => {
        event.target.style.color = "";
    }, 500);
}
);

const log = document.querySelector("#log");
const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    console.log("Doing Something");
    // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

const changeBgColor = () => {
    console.log("Changing bg color for btn");
    btn.style.backgroundColor = "green";
}

let btn = document.createElement("button");
btn.innerText = "Click Me!";
document.querySelector("body").append(btn);


btn.addEventListener("click", changeBgColor);

let newInput = document.createElement("input");
newInput.placeholder = "enter your name";

const logText = (event) => {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 8 || (event.keyCode >= 95 && event.keyCode <= 122)) {
        h2.textContent += ` ${event.key}`; 
    } 
}

newInput.addEventListener("keypress", logText)
let h2 = document.createElement("h2");
document.querySelector("form").append(h2);
document.querySelector("form").append(newInput);
