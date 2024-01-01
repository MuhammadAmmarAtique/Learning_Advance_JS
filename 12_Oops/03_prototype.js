//1)Added a function inside String prototype

let myName = "Ammar     ";
let myBrother ="M.Rafeh     ";
// console.log(myName.trim().length);
// console.log(myName.truelength);  //want to do this

String.prototype.truelength = function(){
    console.log(this);
    console.log(this.trim().length);
}

// myName.truelength();
// myBrother.truelength();

//2)Added a function inside Array Prototype

let myArray = [21,21,23];

Array.prototype.ammar = function() {
    console.log("Hello from array");
}

// myArray.ammar();

//3)Added a function inside Object Prototype
let myObj = [21,43,53];

Object.prototype.Papa = function () {
    console.log("Hello from obj");
}

myObj.Papa()
myArray.Papa()
myName.Papa()

