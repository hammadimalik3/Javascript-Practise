// Primitive

 // 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
 const scoreValue = 100.3;

 const isLoggedIn = false;
const outsideTemp = null;

 let userEmail;

const id = Symbol('123')
 const anotherId = Symbol('123')
console.log(id === anotherId);

 // Reference (Non-Primitive)

// Array, Objects, Functions

 const heros = ["Imran Khan", "Babar Azam", "Rohan Hammad"];

 let myObj = {
    name : "Rohan",
    age : 32,
 }

const myFunc = function(){
    console.log("Hello Rohan");
    
}


console.log(typeof scoreValue);


// https://262.ecma-international.org/5.1/#sec-11.4.3