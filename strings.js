/** @format */

// const firstName = "Hassan";
// const lastName = "Rokeeb";
// const age = 40;
// const str = "Hello friend my name is Ibraheem.";
// const form = "Web Development,Software Developement,Data Science,Programming";

// let val;

// val = firstName + lastName;

// * Concatenation

// val = firstName + " " + lastName;

// * Append to a variable

// val = "Ibraheem ";
// val += "Omikunle";

// val = "Hello, my name is " + firstName + " and I am " + age;

// * Escaping

// val = "That's awesome, I can't wait";

// * Length
// val = firstName.length;

// * Concat()

// val = firstName.concat("", lastName);

// * Change Case

// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// Getting the index of the string
// val = firstName[2];

// * Finding the index
// val = firstName.indexOf("a");
// val = firstName.lastIndexOf("s");

// * get the index of each characters
// val = firstName.charAt("2");

// * Simple way to get the last character
// [-1] means the last character.
// val = firstName.charAt(firstName.length - 1);

// * getting the subStrings
// val = firstName.substring(0, 4);

// * slice is mostly use with arrays to pull something out of an array, but also part of a string method.
// but the last [index] will not show along with the result.
// val = firstName.slice(0, 4);
// you can also use a negative number
// val = firstName.slice(-2);

// * split() method
// spliting a string into an array base on the seperator ()
// Turning into an array base on spaces.
// val = str.split(" ");
// val = form.split(",");

// Replace()
// val = str.replace("Ibraheem", "Omikunle");

// check if something is in the string.

// val = firstName.includes("H");

// console.log(val);

// * TEMPLATES LITERALS IN STRING
const hisName = "Rasheed";
const age = 45;
const job = "Software Developer";
const city = "Ibadan";
let html;
// * Without template strings -> (es5) way.
html =
  "<ul><li> Name: " +
  hisName +
  "</li> <li>Age: " +
  age +
  "</li> <li>Job: " +
  job +
  "</li> <li>City: " +
  city +
  "</li></ul> ";

// To put them on seperate line.

html =
  "<ul>" +
  "<li> Name: " +
  hisName +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>";
("</ul>");

function hello() {
  return "Hello";
}

// * With template strings -> (es6) way.

html = `
<ul>
<li>Name: ${hisName}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${4 + 5}</li>
<li>${hello()}</li>
<li>${age > 23 ? "Over 23" : "Under 23"}</li>
</ul>
`;

document.body.innerHTML = html;

// *  Assignment

// 1. Declare variables called 'country', 'continent' and 'population' and.
// assign their values according to your own country (population in millions).
// 2. Log their values to the console.
// ASSIGNMENT 2
// 3. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 4. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// 5. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 6. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 7. Try to change one of the changed variables now, and observe what happens
