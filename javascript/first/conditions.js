// Write a program that checks if a given number is positive, negative, or zero.

const num = 0;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Create a program that takes a day of the week as input and logs whether it's a weekday or a weekend.
let dayOfWeek = "Wednesday";
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday");
    break;
  case "Saturday":
    console.log("It's a weekend");
    break;
  case "Sunday":
    console.log("It's a weekend");
    break;
  default:
    console.log("Invalid day");
}
