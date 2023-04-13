/** @format */

const num1 = 200;
const num2 = 5;
let val;

// Basic math with number.
val = num1 * num2;
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math objects or methods
val = Math.PI;
val = Math.E;
val = Math.round(2.9);
// to round up
Math.ceil(9.6);
Math.floor(6.4);
// To square
val = Math.sqrt(64);
// will give the absolut number
val = Math.abs(-6);
// Get power -> 3*3*3*3 => 81
val = Math.pow(3, 4);
// get the lowest number.
val = Math.min(1, 4, 63, 7, 9, 90, 73, 93, 2);
val = Math.max(9, 90, 8, 2, 9, 12, 21, 73, 93, 2);
// get random random number
val = Math.random();
val = Math.random() * 20 + 1;
val = Math.floor(Math.random() * 20 + 1);
console.log(val);
