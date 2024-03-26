let body = document.querySelector("body");
// console.log(newInput);
let newInput = document.createElement("input");
newInput.placeholder = "username";
body.append(newInput);

let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.id = "btn";
body.append(newButton);

document.querySelector("#btn").classList.add("buttonStyle");

let newHead = document.createElement("h1");
newHead.innerText = "DOM Practice";
body.prepend(newHead);  

document.querySelector("h1").classList.add("headingStyle");


let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);  
