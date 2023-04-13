/** @format */

// * AN operators basically enables us to transform values or combine multiple values  and do all kinds of work with values.

// * categories of operators [Mathematical, logical, comparison, assignment]

// Mathematical or Arithmetical operators.

// const ageRasheed = 2023 - 1967;
// const ageDaniel = 2023 - 1990;

// * Math Operators
// const present = 2023;
// const ageRasheed = present - 2007;
// const ageDaniel = present - 2005;
// can also be written like this.
// console.log(ageRasheed, ageDaniel);

// example
// [**] exponetial -> raise to the power of 2 * 2 * 2.
// console.log(ageDaniel * 2, ageRasheed / 2, 2 ** 3);

// * Assignment operators
//  u is assigned 15 because the + operator executes before the assignment operator based on the rule of operator precedence
let u = 10 + 32; // 42

// reassigning the x value.
u += 10; // x = x + 10  = 52
u *= 4; // x = x * 4 = 208
u++; // u = u + 1
u--; // u = u - 1
// u++; // u = u + 1
// u++; // u = u + 1
// console.log(u);

// * Comparison Operators
// used to produce boolean values.
// console.log(ageDaniel > ageRasheed); // >, <, >=, <=
// GREATER THAN OR EQAUL TO OPERATOR.
// console.log(ageRasheed >= 18);

// const isFillAge = ageDaniel > 18;
// console.log(present - 1991 > present - 2012);



// ** Operator precedence
const present = 2023;
const ageRasheed = present - 2007;
const ageDaniel = present - 2005;
// * Math operators are excuted before the comparision operators
console.log(present - 1991 > present - 2012);
console.log(25 - 15 - 2);

// you can declear 2 variables at the same time.
let x, y;
x = y = 25 - 10 - 5;  // x = y = 10
console.log(x , y)


// const averageAge = ageRasheed + ageDaniel / 2;
const averageAge = (ageRasheed + ageDaniel) / 2;
console.log(ageRasheed, ageDaniel, averageAge);









// ** Assignment
// Ade and Bolu are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2,  = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Ade's and Bolu's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'adeHigherBMI' containing information about
// whether Mark has a higher BMI than Bolu.

// Test data:
// $ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// $ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
//  tall.
// GOOD LUCK ✌.


