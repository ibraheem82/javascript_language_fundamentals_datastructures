/** @format */

let val;

const today = new Date();
// * change to a string
// val = today.toString();

// * Change to a different date.
// const birthday = new Date("5-28-1990");
// const birthday = new Date("5-28-1990 3:45:00");
let birthday = new Date("5-28-1990 3:45:00");
// Writing the date in strings.
birthday = new Date("May 28 2009");
birthday = new Date("5/28/2004");

// val = birthday;

// Getting the month
val = today.getMonth();

// Get date of the month
val = today.getDate();

// * Get the day
val = today.getDay();

// * get year
val = today.getFullYear();

// get the hours
val = today.getHours();

// get minutes
val = today.getMinutes();

// get seconds
val = today.getSeconds();

// get milliseconds
val = today.getMilliseconds();

// get time stamp
val = today.getTime();

// Settings -> manipulating dates and time.
birthday.setMonth(2);
birthday.setDate(10);
birthday.setFullYear(2000);
birthday.setHours(5);
birthday.setMinutes(49);
birthday.setSeconds(27);

// val = birthday;
// val = birthday.toString();
// val = today.toString();

console.log(val);
console.log(birthday);
// console.log(typeof val);
