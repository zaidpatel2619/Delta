
// --------------------------- QUESTION 1 --------------------------------------------

const arrayOne = [1, 7, 4, -5];
let n = 3;
console.log('QUES 1: ', arrayOne.splice(0, n));



// --------------------------- QUESTION 2 --------------------------------------------

const arrayTwo = [1, 7, 4, -5];
console.log('QUES 2: ', arrayTwo.splice(-3));



// --------------------------- QUESTION 3 --------------------------------------------

let stringOne = "DELTA";
console.log('QUES 3: If STRING IS EMPTY?', stringOne.length == 0);


// --------------------------- QUESTION 4 --------------------------------------------

let stringTwo = "ALPHA";
console.log('QUES 4: IF STRING IS LOWER CASE?', stringTwo.charAt(3) == stringTwo.charAt(3).toLocaleLowerCase());


// --------------------------- QUESTION 5 --------------------------------------------

let stringThree = "           ZAID    ";
console.log("QUES 5:", stringThree);
console.log("QUES 5:", stringThree.trim());


// --------------------------- QUESTION 6 --------------------------------------------
let arrayThree = ["Hema", "Rekha", "Jaya", "Sushma"];
console.log("QUES 6: IF ELEMENT EXIST  IN ARRAY?", arrayThree.includes("Jaya"));
console.log("QUES 6: IF ELEMENT EXIST  IN ARRAY?", arrayThree.indexOf("Nirma") != -1);