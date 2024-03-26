// ___________QUES 01: _______________
console.log("*****************QUES 01******************");

// let array = [92, 86, 99, 21, 64, 55];
let array = [21, 34, 64, 83, 24, 95, 43, 62, 67];
let number = 25;
function largestNum(array, number) {
    let accum = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > number) {
            accum.push(array[i]);
        }
    }
    return accum;
}

const largestNumber = largestNum(array, number);
console.log("Largest Number", largestNumber);


// // ____________________________________________________________________________________________________________
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// //elementslargerthananumbernum
// function getElements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// } 
// getElements(arr, num);


// ___________QUES 02: _______________
console.log("*****************QUES 02******************");

let stringOne = "abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}

console.log("Unique String", getUnique(stringOne));
// ___________QUES 03: _______________
console.log("*****************QUES 03******************");

let arrayOfCountry = ["India", "Aus", "Eng", "NZ", "South Africa"];

function findCountry(arrayOfCountry) {
    let largestCount = {
        name: arrayOfCountry[0],
        count: arrayOfCountry[0].length
    };
    for (let i = 1; i < arrayOfCountry.length; i++) {
        if (largestCount.count < arrayOfCountry[i].length) {
            largestCount = {
                name: arrayOfCountry[i],
                count: arrayOfCountry[i].length
            };
        }
    }
    return largestCount;
}

const country = findCountry(arrayOfCountry);

console.log("country", country);

// ___________QUES 04: _______________
console.log("*****************QUES 04******************");

function vowelCounter(arg) {
    let counter = 0;
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] == "a" || arg[i] == "e" || arg[i] == "i" || arg[i] == "o" || arg[i] == "u") {
            counter++;
        }
    }
    return counter;
}
let phrase = "There are 11 vowels in this sentence";
console.log("count", vowelCounter(phrase));

// ___________QUES 05: _______________
console.log("*****************QUES 05******************");

function numberGenerator(start, end) {
    // Math.floor(( * start) + 1);
    return Math.floor((Math.random() * (end - start)) + start + 1);
}

console.log(numberGenerator(21, 30));