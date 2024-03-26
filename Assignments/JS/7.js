// _____________________________QUESTION 1:________________________________
let avgArray = [10, 5, 45, 38];

const arrayAverage = (avgArray) => {
    let accum = 0;
    for (let i = 0; i < avgArray.length; i++) {
        accum += avgArray[i];
    }
    return accum/avgArray.length;
};

console.log("Answer 1: Average", arrayAverage(avgArray));


// _____________________________QUESTION 2:________________________________

const isEven = (num) => {
    if (num % 2 == 0) {
        console.log("Answer 2: Number is Even");
    } else console.log("Answer 2: Number is Odd");
};

isEven(4);


// _____________________________QUESTION 3:________________________________

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log("ANSWER 3:", this.message);
    }
};
setTimeout(object.logMessage, 1000);


// _____________________________QUESTION 4:________________________________

let length = 4;
function callback() {
    console.log("Answer 4: Length", this.length)
}
const object2 = {
    length: 5,
    method(callback) {
        callback();
    },
};
object2.method(callback, 1, 2);