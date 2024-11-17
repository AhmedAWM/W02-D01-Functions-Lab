// Exercise 1: Return the Maximum number of two values:
const maxNumber = function getMaximumNumber(num1, num2) {
  if (num1 > num2) {
    return `${num1} is the Maximum number of the two numbers (${num1} & ${num2})`;
  } else if (num2 > num1) {
    return `${num2} is the Maximum number of the two numbers (${num1} & ${num2})`;
  } else {
    return `Both numbers are equal! (${num1})`;
  }
};

console.log("Exercise 1 restult: ", maxNumber(50, 200));
console.log("Exercise 1 restult: ", maxNumber(500, 200));
console.log("Exercise 1 restult: ", maxNumber(70, 70));

console.log("-----------------------------------------------------");

// Exercise 2: Return if the person is Adult (21 or over) or not:
function isAdult(age) {
  if (age >= 21) {
    return `This person of age ${age} is an Adult`;
  } else {
    return `This person of age ${age} is a Minor`;
  }
}

console.log("Exercise 2 restult: ", isAdult(37));
console.log("Exercise 2 restult: ", isAdult(15));

console.log("-----------------------------------------------------");

// Exercise 3: Return if the entered chatachter is a Vowel:
function isVowel(value) {
  if (
    value == `a` ||
    value == `e` ||
    value == `i` ||
    value == `o` ||
    value == `u`
  ) {
    return `The character  "${value.toUpperCase()}" is a Vowel`;
  } else {
    return `The character "${value.toUpperCase()}" is not a Vowel`;
  }
}

console.log("Exercise 3 restult: ", isVowel("x"));
console.log("Exercise 3 restult: ", isVowel("a"));

console.log("-----------------------------------------------------");

// Exercise 4: Return a generated Email
function generateEmail(name, email) {
  return (
    "My email address is: " + name.toLowerCase() + "@" + email.toLowerCase()
  );
}

console.log("Exercise 4 restult: ", generateEmail("Ahmed", "eMaiL.com"));

console.log("-----------------------------------------------------");

// Exercise 5: Return a greeting
function greetUser(name, time) {
  if (time == "morning") {
    return `Good morning, ${name}`;
  } else if (time == "afternoon") {
    return `Good afternoon, ${name}`;
  } else if (time == "evening") {
    return `Good evening, ${name}`;
  } else if (time == "night") {
    return `Good night, ${name}`;
  } else {
    return `ERROR: Invalid time`;
  }
}

console.log("Exercise 5 restult: ", greetUser("Ahmed", "morning"));
console.log("Exercise 5 restult: ", greetUser("Sara", "afternoon"));
console.log("Exercise 5 restult: ", greetUser("Salman", "evening"));
console.log("Exercise 5 restult: ", greetUser("Abdulla", "night"));
console.log("Exercise 5 restult: ", greetUser("Noora", "hello"));

console.log("-----------------------------------------------------");

// Exercise 6: Return the maximum number of 3 values:
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the maximum number of the three numbers (${num1}, ${num2} & ${num3})`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} is the maximum number of the three numbers (${num1}, ${num2} & ${num3})`;
  } else if (num3 > num1 && num3 > num2) {
    return `${num3} is the maximum number of the three numbers (${num1}, ${num2} & ${num3})`;
  } else {
    return `All numbers are equal! (${num1})`;
  }
}

console.log("Exercise 6 restult: ", maxOfThree(5, 30, 10));
console.log("Exercise 6 restult: ", maxOfThree(50, 30, 10));
console.log("Exercise 6 restult: ", maxOfThree(5, 30, 100));
console.log("Exercise 6 restult: ", maxOfThree(20, 20, 20));

console.log("-----------------------------------------------------");

// Exercise 7: Return the calculated tip
function calculateTip(bill, tipPercentage) {
  let tip = bill * (tipPercentage / 100);

  return `The ${tipPercentage}% tip from total bill of BHD${bill} is: BHD${tip}`;
}

console.log("Exercise 7 restult: ", calculateTip(23, 7));

console.log("-----------------------------------------------------");

// Exercise 8: Return a converted temprature from Celsius to Fehrenheit and vice versa
function convertTemperature(temp, unit) {
  if (unit == "c") {
    return `The temprature ${temp}C in Fehrenheit is: ${temp * 1.8 + 32}F`;
  } else if (unit == "f") {
    return `The temprature ${temp}F in Celsius is: ${((temp - 32) * 5) / 9}C`;
  } else {
    return "ERROR: Invalid unit";
  }
}

console.log("Exercise 8 restult: ", convertTemperature(40, "c"));
console.log("Exercise 8 restult: ", convertTemperature(77, "f"));
console.log("Exercise 8 restult: ", convertTemperature(35, "x"));

console.log("-----------------------------------------------------");

// Exercise 9: Return the value of basic calculation
function basicCalculator(num1, num2, operation) {
  if (operation == "add") {
    return `Sum of ${num1} & ${num2} is: ${num1 + num2}`;
  } else if (operation == "subtract") {
    return `Difference of ${num1} & ${num2} is: ${num1 - num2}`;
  } else if (operation == "multiply") {
    return `Multiplication of ${num1} & ${num2} is: ${num1 * num2}`;
  } else if (operation == "divide") {
    if (num2 != 0) {
      return `Division of ${num1} & ${num2} is: ${(num1 / num2).toFixed(3)}`;
    } else {
      return `Division of ${num1} & ${num2} is: ERROR: Division by zero is not allowed`;
    }
    return num1 / num2;
  } else {
    return "ERROR: Invalid operation";
  }
}

console.log("Exercise 8 restult: ", basicCalculator(23, 45, "add"));
console.log("Exercise 8 restult: ", basicCalculator(8, 19, "subtract"));
console.log("Exercise 8 restult: ", basicCalculator(7, 15, "multiply"));
console.log("Exercise 8 restult: ", basicCalculator(10, 3, "divide"));
console.log("Exercise 8 restult: ", basicCalculator(65, 0, "divide"));
console.log("Exercise 8 restult: ", basicCalculator(0, 41, "divide"));
console.log("Exercise 8 restult: ", basicCalculator(10, 3, "hello"));
