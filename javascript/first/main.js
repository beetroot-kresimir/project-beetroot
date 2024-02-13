// let, const, var, variable declaration
// // Number, string, null, undefined data types
// // Simple operations with + - / * variables
// // String concatenation, Template strings
// // String concatenation
// // Template strings

// let
// let myCar = "Mercedes";
// console.log(myCar);
// myCar = "BMW"
// console.log(myCar);

// const
// const myCar = "Mercedes";
// console.log(myCar);
// myCar = "BMW"
// console.log(myCar);

// // Number, string, null, undefined data types
// // each value (data) has it's own type
// // string
// // const myCar = "Mercedes";
// // number
// // const myNum = 123;

// // Simple operations with + - / * variables
// const val1 = 22;
// const val2 = 24;
// const sum = val1 + val2;
// or operator      ||
// and operator     &&
// === compares does compare data types
// == compares, doesn't compare data types

// // String concatenation, Template strings
// // - used for combining strings

// // String concatenation
// let day = "22nd";
// let month = "December";
// let stringConcat = day + " " + month + " " + "2024";
// console.log(stringConcat);

// // Template strings
// let templateStr = `${day} ${month} 2024`;
// console.log(templateStr);

// // alert(), prompt(), console.log() functions -->
// alert("This is my alert")
// let storedPrompt = prompt("What is your name? ")



// 1) Request a user’s name and display the response “Hello, [name]”.
//      const userName = prompt("What is your name?");
//      alert(`Hello ${userName}`);

// 2) Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
//      const agePromt = prompt("what is your birth year?");
//      const currentYear = new Date().getFullYear();
//      if (isNaN(agePromt)) {
//        console.log(`Invalid input!`);
//      } else {
//        const userAge = currentYear - agePromt;
//        console.log(`You are ${userAge} years old`);
//      }

// 3) Request a length of a side of a square from a user and display the perimeter of the square. 
//      Tip: perimeter = side * 4

// 4) Request a radius of a circle and display the area of such a circle. 
//      Tips: 
//          const PI = Math.PI;
//          Math.pow(radius, 2);
//          someNum.toFixed(2)

// 6) Create a currency converter. A user types in USD and the program converts them to EUR. 
//    The exchange rate should be stored as a constant.

// 7) A user states a flash drive memory in GB. The program has to count how many 820MB files 
//    can be stored on this flash drive. 
//    1GB = 1024 MB

// 1. convert GB to MB and store that into cont memoryMB
// 2. calculate files that can fit into memoryMB where each file is 800 MB




// DATA TYPES
// Number
let myNum = 22;

// string
let myStr = "Kresimir"

// boolean
let isNight = true;
let isDay = false;

// null
let something = null;

// undefined
let something2

// bigint = number with the length more than 53
const bigint = 123226363636363772282828282828288282828282828282828

// conditional statement

if (condition) {
    
} else {
    
}