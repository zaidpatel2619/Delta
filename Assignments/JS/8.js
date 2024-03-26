console.log("----------------->Assignment 8<---------------------");

console.log("+++++++++++++++++++++Question 1+++++++++++++");
let arrayOne = [2, 9, 5, 8, 3];
const funcOne = (arrayOne) => {
    const newArray = arrayOne.map(el => (
        el * el
    ));
    
    // let accum = 0;
    const accum = newArray.reduce((acc, el) => (
        acc + el
    ));
    return accum/newArray.length;
}

console.log("Answer 1: ",funcOne(arrayOne));


console.log("++++++++++++++++++++++Question 2+++++++++++++");
const newArray = arrayOne.map(el => el + 5);
console.log("Original Array", arrayOne);
console.log("Answer 2", newArray);


console.log("++++++++++++++++++++++Question 3+++++++++++++");
const arrayOfString = ["Rohit", "Kohli", "Dhoni", "sachin"];
const newArrayOfString = arrayOfString.map(string => string.toUpperCase());
console.log("Original Array", arrayOfString);
console.log("Array with uppercase", newArrayOfString);


console.log("++++++++++++++++++++++Question 4+++++++++++++");
const doubleAndReturnArgs = (arrayOne, ...args) => {
    const newArgs = args.map(el => el * 2);
    return [ arrayOne, ...newArgs ];
}
console.log("Answer 4",doubleAndReturnArgs(arrayOne, 1, 4, 9));


console.log("++++++++++++++++++++++Question 5+++++++++++++");
const mergeObjects = (object1, object2) => {
    return { ...object1, ...object2 };
};

const object1 = {
    name: "Zaid",
    age: "23"
};

const object2 = {
    position: "Software Engineer",
    level: "T3"
};

console.log(mergeObjects(object1, object2));