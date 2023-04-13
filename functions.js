// * FUNCTION DECLEARATIONS

// function greet() {
// function scope
// console.log('greetings');

//     return 'Hello';
// }
// calling the function
// greet();
// console.log(greet());


// in es6
// function greet(firstName = 'Wasiu', lastName = 'Rasak') {
// in es5
//     if (typeof firstName === 'undefined') { firstName = 'Muhammed' };
//     if (typeof lastName === 'undefined') { lastName = 'Sodeek' };
//     return 'Hello ' + firstName + ' ' + lastName;
// }
// calling the function
// greet();
// console.log(greet('Ibraheem', 'Omikunle'));
// console.log(greet());
// console.log(greet('Adam', 'Issa'));




// * FUNCTION EXPRESSIONS
// it is putting a function as a variable assignment.
// they are anonymous by default.
// you can also set the default parameters
// const square = function (p) {
//     return p * p;
// };

// console.log(square(9));





// * IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS [IIFE's]
// it a function that you declear and run at the same time.

// anoymous function

// (function () {
//     console.log('Function Ran...🏃‍♂️🏃‍♀️');
// terminate the function with the parenthesis before it runs.
// })();




// can also take in parameters
// they are useful when it comes to design patterns like module pattern
// (function (name) {
//     console.log('Good Morning ' + name);

// })('Ibraheem');



// * PROPERTY METHODS
// we can put functions inside of object as if in global scope
const todo = {
    add: function () {
        console.log('Add todos.....')
    },

    edit: function (id) {
        console.log('Edit ' + id);

    }
}

// you can also define function of the object outside.
todo.delete = function () {
    console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

console.log('9' - '6');

