// VAR LET CONST


// * you can reassign variables if you use var or let.
// var name = "Ibraheem Omikunle";
// console.log(name);
// name = "Adisa Tolu";
// console.log(name);


// Initializing a variables

// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);


// * LET  similar to VAR
// let name;
// name = "Ibraheem Omikunle";
// console.log(name);
// name = "Adisa Tolu";
// console.log(name)


// * CONST -> CONSTANTS -> they can not be reassigned

// const name = "Ibraheem";
// console.log(name)

// ! cannot reassign.
// name = "Adisa";
// * you must assign a value to the variable you are declearing.
// const greeting;

// find confusing
// const myCountry = {
//     country: "Nigeria",
//     states: 36
// }
// but we cannot reassign myCountry.
// we can change it.
// myCountry.country = "America";
// console.log(myCountry);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// nums.push(9);
// cannot be reassigned here
// nums = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(nums);



// * OBJECT LITERALS


const person = {
    firstName: 'Adegoke',
    lastName: 'Alade',
    age: 40,
    email: 'adegokealade@hume.com',
    status: 'married',

    hobbies: ['music', 'sports', 'football', 'tennis'],
    address: {
        city: 'Ibadan',
        state: 'Oyo'
    },
    // * method
    getBirthYear: function () {
        // return 1980;
        // return 1980 - age; // ! wrong
        // when you are inside the object you need to use the [this] -> keyword.
        return 2022 - this.age;
    }
}

let val;

val = person;
// get a spcific value.
val = person.firstName;
val = person['lastName'];
val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];

// val = person.getBirthYear();
// console.log(val);



// * Arrays of objects

// const people = [
//     { name: "Rasheed", age: 28 },
//     { name: "Bolaji", age: 45 },
//     { name: "Idowu", age: 23 },
//     { name: "Taiwo", age: 17 }
// ];

// for (let index = 0; index < people.length; index++) {
//     console.log(people[index].name);

// }
