/** @format */

"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: [
//     "Italian🍨",
//     "Pizzeria🍕🍕🍕",
//     "Vegetarian🥒🥔🍆🍅🍠🥜🥕",
//     "Organic",
//   ],
//   starterMenu: [
//     "Focacci🍪",
//     "Bruschetta🥖",
//     "Garlic Bread🍞",
//     "Caprese Salad🥗",
//   ],
//   mainMenu: ["Pizza🍕", "Pasta🍝", "Risotto🍛"],

//   openingHours: {
//     mon: {
//       open: 12,
//       close: 22,
//     },
//     tue: {
//       open: 7,
//       close: 19,
//     },
//     wed: {
//       open: 10,
//       close: 22,
//     },
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//     sun: {
//       open: 12,
//       close: 9,
//     },
//   },

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "23.00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
//     );
//   },

//   orderFoodStuffs: function (
//     mainIngredient,
//     anotherIngredient,
//     ...otherIngredient
//   ) {
//     console.log(mainIngredient);
//     console.log(anotherIngredient);
//     console.log(otherIngredient);
//   },
// };

// *** Rest Pattern and Parameters ***
// ** (1) Destructuring in Rest patterns
// used with writing varibles names sperated by commas
// REST, left side is of assignment operator.
// const [a, b, ...others] = [7, 9, 89, 17, 6, 3, 21, 10, 11, 12, 13];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// * Rest pattens in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// ** (2)  Using Functions in or with Rest patterns -> called (Rest -> Parameters).
// unpacking.
// const addRest = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// addRest(7, 9, 89, 17, 6, 3);
// addRest(17, 6, 3);
// addRest(17, 6, 37, 9, 89, 17, 6, 3);

// restaurant.orderFoodStuffs(
//   "Yam",
//   "Onions",
//   "Rice",
//   "Beans",
//   "Pizza",
//   "Coffee",
//   "Eba",
//   "Groundnut",
//   "Cassava",
//   "Fish",
//   "Salt",
//   "Red Oil"
// );
// ##############################################
// const arrNum1 = [7, 9, 17, 6, 3, 21, 89]
// const arrNum2 = [10, 11, 12, 13]
// *** Spread Operator ***
// SPREAD IS ON THE RIGHT SIDE OF THE OPERATOR.
// const newArr = [1, 2, 3, 4, 5, 6, ...arrNum2];
// const newArr = [arrNum1, ...arrNum2];
// console.log(newArr);
// console.log(...newArr);

// writing a new array
// const newMenu = [...restaurant.mainMenu, "Sandwich🥪", "PanCakes🥞"];
// console.log(newMenu);

// Copying arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// join two array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// * Spread works on Iterables -> : arrays, maps, sets, strings. Excluding objects.
// const str = 'ibraheem';
// const letters = [...str, ' ', 'M.'];
// console.log(letters);

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
// const newResturant = { foundedIn: 1975, ...restaurant, founder: 'Omikunle' }
// console.log(newResturant);

// coping not changing.
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Resturant Astro🚀";
// console.log(restaurant.name)
// console.log(restaurantCopy.name)

// * Advanced objects destructuring.
// restaurant.orderDelivery({
//   time: '10:40',
//   address: 'Lagos ibadan express way, 90.',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Sango ota, ogun state.',
//   starterIndex: 2,
// });

// ** Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// * Changing the variable names
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// * Setting default values for objects
// const { menu = 'Empty Arrays❌❌❌❌❌💣', starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// * Mutating variables
// let yc = 90;
// let sc = 282;
// const objLMB = {yc: 29, sc: 11, kc: 21};
// ({yc, sc} = objLMB);
// console.log(yc, sc);

// * Destructuring nested objects

// const {fri: {open, close}}  = openingHours;

// ! using default
// const {fri: {open, close}}  = openingHours;
// console.log(`Opening Hour ${open}: Closing Hour ${close}`);

// * Destructuring Arrays

// const programming = ["python", "C", "Java", "Php"];
// const [w, x, y, z] = programming;
// console.log(w, x, y, z);

// const [first, second] = restaurant.categories;

// Leaving a hole to the the third on skipping
// const [first, , third] = restaurant.categories;

// console.log(first, third);

// * switching Variables
// let [main, , synv] = restaurant.categories;

//  [main, synv] = [synv, main];
//  console.log(main, synv);

// console.log(restaurant.order(2,0));

// * Destructuring.
// Recieving 2 return values from a function.
// const [start, mainI] = restaurant.order(2, 0);
// console.log(start, mainI);

// Destructuring nested array

// let nested = [2, 4, [5, 6]];
// const nested = [2, 4, [5, 6], [9, 78, 34], 30, 5, 2, 78, 12, [7, 20, 100, "ibraheem"]];
// const [two, ,others, six, , ,tati, ,r] = nested;
// console.log(two, others, six, tati);

// const [i, , u] = nested;
// const [i, , [, j], [k, , l], , , , , m,[, , , n]] = nested;
// console.log(i, j, k, l, m, n);

// * Default values in destructuring
// const [a = 98, b = 67, c] = [, 70, 11];
// console.log(a, b, c);

// ##############################################
// ** Short Circuiting (&& and)
// can use ANY data type, return ANY data type, short circuit evaluation
// console.log(3 || 'Jonas');

