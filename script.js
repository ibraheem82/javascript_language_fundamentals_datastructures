'use strict';

// function caller(){
    // console.log('My name is ibraheem');
// }
// Invoking, Calling, Running, 
// caller();

// ** Function declaration
// function calMyBirthYear(birthYear){
//     const age = 2040 - birthYear;
//     return age;
// }
// const firstBirthYear  = calMyBirthYear(2001);
// console.log(firstBirthYear);


// ** Function expression
// const age2 = function (birthYear){
//     return 2022 - birthYear;
// }
// const resultOfAge2 = age2(1976);
// console.log(firstBirthYear, resultOfAge2);



// ** Arrow function
// const calcAge3  = birthYear => 2009 - birthYear;
// const age3 =  calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = birthYear => {
//     const age  = 2029 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(2001));




// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age  = 2029 - birthYear;
//     const retirement = 65 - age;
    // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(2001, 'Ibraheem'));
// console.log(yearsUntilRetirement(1997, 'Jonas'));


// ** Using function to call another function

// function cutFruitPieces(fruit){
//    return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
    // * Called a function inside of another function
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);


//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(4, 2));


// const calcAge = function(birthYear) {
//     return 2047 - birthYear;
// }

// Converted to function expression
// ** yearsUntilRetirement calls the [calcAge]. with the argument of 2001
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age  = calcAge(birthYear); // 46
//     const retirement = 65 - age; // 19

    // if(retirement > 0) {
    //     console.log(`${firstName} retires in ${retirement} years.`);

    //     return retirement;
    // } else{
    //     console.log(`${firstName} has already retired 😁.`);
    //     return -1;

    // }



    // return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(2001, 'Ibraheem'));
// console.log(yearsUntilRetirement(1997, 'Jonas'));
// console.log(yearsUntilRetirement(1929, 'Adam'));




// Coding Challenge #1
// Back to the two basketball teams, the Lakers and the Andrew There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!


// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgLakers' and 'avgAndrew'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Andrew win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Lakers score 44, 23 and 71. Andrew score 65, 54 and 49
// § Data 2: Andrew score 85, 54 and 41. Andrew score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores.



//  ** Solution to the test **.

// ? Testing 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// ! Test 1
// let scoreLakers = calcAverage(44, 80, 71);
// let scoreAndrew = calcAverage(72, 23, 10);
// const scoreLakers = calcAverage(44, 80, 71);
// const scoreAndrew = calcAverage(72, 23, 10);

// console.log(scoreLakers + ", " + scoreAndrew);




// const checkWinner  = function(avgLakers, avgAndrew) {
//     if(avgLakers >= 2 * avgAndrew) {
//         console.log(`Lakers wins 🏆 (${avgLakers} vs ${avgAndrew})`);
//     } else if(avgLakers >= 2 * avgAndrew) {
//         console.log(`Andrew wins 🏆 (${avgAndrew} vs ${avgLakers})`);
//     } else {
//         console.log('No body win....');
//     }
// }


// checkWinner(scoreLakers, scoreAndrew);
// checkWinner(8393, 373);



// ? Testing 2
// scoreLakers = calcAverage(29, 45, 20).toFixed();
// scoreAndrew = calcAverage(102, 56, 44).toFixed();

// checkWinner(scoreLakers, scoreAndrew);
// console.log(scoreLakers, scoreAndrew);




// Arrays
// const states = ["Lagos", "Texas", "Los-Angeles"];

// function calYears(year){
//     const age = 2080 - year;
//     return age;
// }
// const years = Array(1978, 1923, 1984, 1990, 1911, 2023, 2000, 1997, 2001, 2014, 2020, 2022, 2016, 2017);
// console.log(years);

// get the index of the last element on the array.
// console.log(states[states.length - 1]);


// const firstName = "Ibraheem";
// const ibraheem = [firstName, 'Omikunle', 2047 - 2001, "Software-Engineer", states];

// console.log(ibraheem.length);
// const year1 = calYears(years[0]);
// const year2 = calYears(years[1]);
// const year3 = calYears(years[2]);
// const year4 = calYears(years[3]);
// const year5 = calYears(years[4]);
// const year6 = calYears(years[5]);
// const year7 = calYears(years[6]);
// console.log(year1);
// console.log(year2);
// console.log(year3);
// console.log(year4);
// console.log(year5);
// console.log(year6);
// const calAll = calYears(years[0], years[1], years[2], years[3], years[4], years[5], years[6]);
// calYears(years[years.length - 1]);
// console.log('Display :' +  " "  + calAll);



// ** Array methods **
const friends = ['AbuCho', 'ChoBoy', "AbuMrOla", 'AbuTahuZee'];
// will add to the end of an array.
friends.push('AbuZulu');
console.log(friends);


// Add element to the beginning of an array
friends.unshift('AbuFilm');
console.log(friends);

// Remove last element from the array.
friends.pop()
console.log(friends);
const removedElement = friends.pop();
console.log(removedElement);
console.log(friends);

// Remove the first element from the array.
friends.shift();
console.log(friends);


// Get a partucular position of a particular element in an array.
const getIndex = friends.indexOf('ChoBoy')
console.log(getIndex);
// if you do that for the element that is not there you will get [-1].

// Check wether the element is in the array or not.
console.log(friends.includes('AbuFilm'));
console.log(friends.includes('ChoBoy'));
// it also checks for equality types [ string or number]
friends.push(80);
// console.log(friends.includes('80'));
console.log(friends.includes(80));


// The includes can be use to wriet conditionals
const singleFriend = 'ChoBoy'

if(friends.includes(singleFriend)) {
    console.log(`You have a friend  called "${singleFriend}" `);
}