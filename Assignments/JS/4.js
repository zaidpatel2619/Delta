console.log("Assignment Four");

// --------------------QUES 1:----------------------------
console.log("******************QUESTION 1****************");

let arr = [10,2,4,5,6,2];
let num = 2;
console.log("arr before condition", arr);
for(let i=0; i<arr.length; i++){
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log("arr after condition", arr);


//____________________________QUES 2___________________________

console.log("******************QUESTION 2****************");
let number = "287152";
let count = 0;
for(let i = 0; i <= number.length; i++) {
    count = i;
}
console.log("Count: ", count);


// OR 

let numberInt = 287152;
let counter = 0;
// let copy = numberInt;
while(numberInt > 0)
{
    counter++;
    numberInt = Math.floor(numberInt/10);
}

console.log("Count", count);


//____________________________QUES 3___________________________

console.log("******************QUESTION 3****************");

let sum = 0;
for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
}
console.log("Sum: ", sum);


// OR 
let total = 0;
let numb = 287152;
let copy = numb;
while(copy > 0) {
    digit = copy % 10;
    total += digit;
    copy = Math.floor(copy/10);
}

console.log("total", total);

//____________________________QUES 4___________________________

console.log("******************QUESTION 4****************");

let fact = 7;  
let factorial = 1;
for(let i = 1; i <= fact; i++) {
    factorial = factorial * i; 
}

console.log("Factorial: ", factorial);


//____________________________QUES 5___________________________

console.log("******************QUESTION 5****************");

let largestNum = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    } }
    
    console.log("largestNum", largestNum);


    
// ____________________________QUES 6_______________________
    
console.log("******************QUESTION 6****************");

let number2 = 287152;
let sum2 = 0;
let copy2 = number2;
while (copy2 > 0) {
    digit = copy2 % 10;
    sum2 += digit;
    copy2 = Math.floor(copy2/10);
}
console.log("sum2", sum2);