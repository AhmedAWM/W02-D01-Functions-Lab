// Exercise 1: Return the Maximum number of two values:
const maxNumber = function getMaximumNumber(num1, num2) {
    if(num1 > num2) {
        return `${num1} is the Maximum number`;
    } else if(num2 > num1) {
        return `${num2} is the Maximum number`;
    } else {
        return "Both numbers are equal";
    }
}

console.log(maxNumber(200, 200));


// Exercise 2: Return if the person is Adult (21 or over) or not:
function isAdult(age) {
    if(age >= 21) {
        return "This person is an Adult";
    } else {
        return "This person is not a Minor";
    }
}

console.log(isAdult(2))

// Exercise 3: 