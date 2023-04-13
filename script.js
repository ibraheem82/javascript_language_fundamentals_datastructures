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
// const friends = ['AbuCho', 'ChoBoy', "AbuMrOla", 'AbuTahuZee'];
// will add to the end of an array.
// friends.push('AbuZulu');
// console.log(friends);


// Add element to the beginning of an array
// friends.unshift('AbuFilm');
// console.log(friends);

// Remove last element from the array.
// friends.pop()
// console.log(friends);
// const removedElement = friends.pop();
// console.log(removedElement);
// console.log(friends);

// Remove the first element from the array.
// friends.shift();
// console.log(friends);


// Get a partucular position of a particular element in an array.
// const getIndex = friends.indexOf('ChoBoy')
// console.log(getIndex);
// if you do that for the element that is not there you will get [-1].

// Check wether the element is in the array or not.
// console.log(friends.includes('AbuFilm'));
// console.log(friends.includes('ChoBoy'));
// it also checks for equality types [ string or number]
// friends.push(80);
// console.log(friends.includes('80'));
// console.log(friends.includes(80));


// The includes can be use to wriet conditionals
// const singleFriend = 'ChoBoy'

// if(friends.includes(singleFriend)) {
//     console.log(`You have a friend  called "${singleFriend}" `);
// }

// ** Coding challenge.
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 
// GOOD LUCK 

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// Arrow function method
// const calcTip = bill =>  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;



// const bills  = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);




// *** Object ***
//  objects are used for more unstructured data.
// const ibraheem  = {
//     firstName : 'Ibraheem',
//     lastName : "Omikunle",
//     age: 2043 - 2020,
//     job : 'Software Engineer',
//     hobies: ['Coding', 'Reading', 'Meditating'],
//     friends : ['Toheeb', 'Adam', "Hazzan"]
// };

// console.log(ibraheem);

// Dot VS Bracket Notations

// console.log(ibraheem.lastName);
// console.log(ibraheem['firstName']);



// Bracket notaton can also be used like this.
// const nameKey = 'Name';
// console.log(ibraheem['first' + nameKey]);
// console.log(ibraheem['last' + nameKey]);

// const yourAim = prompt(`What do you want to know about ${ibraheem.firstName}, Choose between firstName, lastName, age, job, and friends `);

// Undefine is what we get when we try to access a property on an object that does not exist.

// console.log(ibraheem[yourAim]);

// if(ibraheem[yourAim] ){
//     console.log(ibraheem[yourAim]);
// } else {
//     console.log('Wrong input!');
// }

// ibraheem.location = 'Nigeria';
// ibraheem['facebook'] = 'ibraheem82';
// console.log(ibraheem);


// * Coding Challenge
//  "Ibraheem has 3 friends, and his best friend is called micheal"


// console.log(`"${ibraheem.firstName} has ${ibraheem.friends.length} friends, and his best friends is called ${ibraheem.friends[0]}`);




// ** Object methods.

// const ibraheem  = {
//     firstName : 'Ibraheem',
//     lastName : "Omikunle",
    // age: 2043 - 2020,
//     birthYear: 1982,
//     job : 'Software Engineer',
//     hobies: ['Coding', 'Reading', 'Meditating'],
//     friends : ['Toheeb', 'Adam', "Hazzan"],
//     hasHouse: false,

// Function expression.
//     calcAge:  function(birthYearParam) {
//         return 2048 -  birthYearParam;
//     }
// };


// The [this] keyword id equal to the object on which the method is called
// so ibraheem is calling the calcAge method in the function.
//  [this] -> points to [ibraheem] 
// calcAge:  function () {
//     console.log(this);
//     return 2048 -  this.birthYear;
// }


// ! the [this] keyword can also be used to store a new property.
    // calcAge:  function() {
    // A new property is created or the ibraheem object.
    // Automatically age is already part of the ibraheem object property.
        // this.age = 2013 - this.birthYear;
        //  ! if we like we may not return anything.
//         return this.age;
// },


// getBio: function() {
//     return `${this.firstName} is a ${this.calcAge()} -years old ${this.job}, and he has ${this.hasHouse ? 'a' : 'no'} house.`;
// }

// };



// const age =  ibraheem.calcAge(2020);
// const age =  ibraheem['calcAge'](2020);
// const ibraheemAge =  ibraheem['calcAge'];
// console.log(age);
// console.log(ibraheem.calcAge());
// console.log(ibraheem.age);
// console.log(ibraheem.getBio());




// * Coding challenge

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John Adam's BMI (28.3) is higher than Mark Louis's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.




// const mark = {
//     fullName : 'Mark Louis',
//     mass: 78,
//     height: 1.69,

//     calcBmi: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };




// const john = {
//     fullName : 'John Adam',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };


// mark.calcBmi();
// console.log(mark.bmi);
// john.calcBmi();
// console.log(john.bmi);


// console.log(john.bmi, mark.bmi);

// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s  (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s  (${mark.bmi})`);

// }


// ** Loops in javascript
// const cars = ['Volvo', 'Bmw', 'Toyota', 'Lexus', 'Chevrolet', 'Benz', 'Jeep', 'Bently', 'Audi', 'Land-Rover', 'Tesla', 'Jaguar'];
// for (let index = 1; index < cars.length; index++) {
//     const element = cars[index];
//     console.log(`${element} is moving 🏎.`);
//     console.log(element);   
// }


// const ibraheem  = [
//      'Ibraheem',
//         "Omikunle",
//         2043 - 2020,
//         1982,
//     'Software Engineer',
//     ['Coding', 'Reading', 'Meditating'],
//     ['Toheeb', 'Adam', "Hazzan"],
//     false,
// ]

// const types = [];
// for(let i = 0; i < ibraheem.length; i++) {

    // Reading from ibraheem array
    // console.log(`the type of "${ibraheem[i]}" is -----> ${typeof ibraheem[i]}`);
    // there indexes will be equal to each other.
    // * Filling types arrays
    // types[i] = typeof ibraheem[i];


    // The push method can also be use to add to an array.
    // * Push add an element to the end of an array.
//     types.push(typeof ibraheem[i]);
// }
// console.log(types);


// *@Remember that arrays are zero based.
// You can get the lenght of an array.
// for(let i = 0; i < 7; i++) {
//     console.log(ibraheem[i]);
// }


// const years = [2001, 2003, 1990, 1956, 1952, 2005, 2000, 2004, 1993, 1997, 2007];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//       const calculateAge = 2022 - years[i];
//         ages.push(calculateAge)
// console.log(`You are ${ages[i]} years old.`);
 
// }
// console.log(`You are ${ages[i]} years old.`);
// console.log(ages);


// **Break and **Continue
// console.log('-------STRINGS-------');
// for(let i = 0; i < ibraheem.length; i++) {
    // if the type of the current element is not a string it will continue.
    // the continue will exit the current iteration.
//     if(typeof ibraheem[i] !== 'string') continue;

//     console.log(ibraheem[i], typeof ibraheem[i]);
// }
// * Break is use to completely teminate the loop.
// console.log('-------BREAK WHEN YOU SEE A NUMBER-------');
// for(let i = 0; i < ibraheem.length; i++) {
    
//     if(typeof ibraheem[i] === 'number') break;

//     console.log(ibraheem[i], typeof ibraheem[i]);
// }




// *Looping through an array backwardly.
// const ibraheem  = [
//     'Ibraheem',
//        "Omikunle",
//        2043 - 2020,
//        1982,
//    'Software Engineer',
//    ['Coding', 'Reading', 'Meditating'],
//    ['Toheeb', 'Adam', "Hazzan"],
//    false,
// ];

// it is counting the elements in the array and removing 1 from it.
// decreament
// for(let i = ibraheem.length - 1; i >= 0;  i--) {
//     console.log([i], ibraheem[i]);
// }



// * Loop in a Loop.
// for(let exercise = 1; exercise < 4; exercise++) {
    // console.log(`-------->>>>>>>>>EXERCISE STARING ${exercise} `); 


    // for(let repetition = 1; repetition < 6; repetition++) {
        // can get the variable inside it.
    //     console.log(`Exercise ${exercise} Lifting weight ${repetition} 🏋️‍♂️`);
    // }

    // for(let k = 1; k < 6; k++) {
    //     console.log(`K Testing${k} 🏋️‍♂️`);
    // }
// }


// **While loops
// can oly specify the condition in the while loop

// let i = 1;
// while(i <= 20) {
//     console.log(`go and do it... ${i}`);
    // it does not really need the counter
//     i++;
// }

// trunc() get rid of the decimal number.
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('loop is about to end');
// }



// * Coding challenge 4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array


const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(tip + bills[i]);
}

console.log(`

Bills -> ${bills}, 

Tips -> ${tips}, 

Totals -> ${totals}

`);


const calcAverage = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        // sum  = sum + arr[i];
    }
    console.log(sum);


    return sum / arr.length;

}

// console.log(calcAverage([78, 73, 78]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

