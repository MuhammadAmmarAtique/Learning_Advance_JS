// Datatypes Summary
// node 01_basics/Datatypes_Summary.js


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// ////// /////////////////////////////// TYPE OF (primitive) /////////////////////////////////
console.log("Checking primitive datatypes of variables;-");
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); //return typeof null is "object" 
console.log(typeof userEmail);  
console.log(typeof id);  

// ////// /////////////////////////////// TYPE OF (reference) /////////////////////////////////
console.log("Checking refernce datatypes of variables:-");
console.log(typeof heros );
console.log(typeof myObj );
console.log(typeof myFunction );


