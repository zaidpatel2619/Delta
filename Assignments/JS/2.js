
//Question 01: 

let num = 20;
if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}


// QUESTION 02:

// let username = prompt("Please enter your name");

// let age = prompt("Please enter your age");

// console.log(`${username} is ${age} years old`);


//QUESTION 03:

// let quarter = prompt("Please enter quarter");
// switch(quarter) {
//     case '1': {
//         console.log("Jan");
//         console.log("Feb");
//         console.log("Mar");
//         break;
//     }
//     case '2': {
//         console.log("Apr");
//         console.log("May");
//         console.log("June");
//         break;
//     }
//     case '3': {
//         console.log("July");
//         console.log("Aug");
//         console.log("Sept");
//         break;
//     }
//     case '4': {
//         console.log("Oct");
//         console.log("Nov");
//         console.log("Dec");
//         break;
//     }
//     default: {
//         alert("Please choose between above quarters, refresh and retry!");
//     }
// }


//QUESTION 04:

// let string = prompt("Please enter string");

// if (string[0] === 'a' || string[0] === 'A' && string.length > 5) {
//     console.log(`${string} is GOLDEN STRING`);
// } else {
//     alert(`${string} is not a golden string, pls enter the string that starts with 'A' or 'a' for a golden string! Pls refresh and retry!`)
// }


//QUESTION 05:

// let firstString = prompt("Please enter first Number");
// let secondString = prompt("Please enter second Number");
// let thirdString = prompt("Please enter Third Number");
// let first = parseInt(firstString);
// let second = parseInt(secondString);
// let third = parseInt(thirdString);
// let biggest = Math.max(first, second, third);
// alert(`${biggest} is the largest number`)
// console.log(`${biggest} is the largest number`)


//                                     //QUESTION 6:
let firstString = prompt("Please enter first Number");
let secondString = prompt("Please enter second Number");

let firstLastDigit = firstString[firstString.length - 1];
let secondLastDigit = secondString[secondString.length - 1];

if (firstLastDigit === secondLastDigit) {
    alert("Same last digit!!!");
} else {
    alert("Retry");
}
        
                            //OR

let num1 = 35;
let num2 = 4785;
if ((num1 % 10) == (num2 % 10)) {
    console.log("numbershavethesamelastdigitwhichis", num1 % 10); 
} else { 
    console.log("numbersdon'thavethesamelastdigit"); 
}