//Inheritance/Prototypal Inheritance
// 1)Outdated syntax

let vehicle = {
   tyres:4,
   lights:2,
   mirrors:3
   
}

let nisaan = {
    color:"white",
    model:2006,
    __proto__:vehicle //underscore underscore proto underscore underscore : vehicle 

    //by writting this line now nissan can inherit all properties from vehicle object (way#1 inside-object)
}

// console.log(nisaan.tyres);
// console.log(nisaan.lights);
// console.log(nisaan.mirrors);


let toyota ={
    color:"red",
    model:2020,
}

toyota.__proto__=vehicle;
//by writting this line now toyota can inherit all properties from vehicle object (way#2 outside-object)
// console.log(toyota.tyres);


// 2)Modern syntax
let honda ={
    color:"black",
    model:2023,
    variant:"civic"
}

Object.setPrototypeOf(honda,vehicle);
//behing the scene above same thing is happening of  honda__proto__:vehicle

// console.log(`Honda tyres ${honda.tyres}`);
// console.log(`Honda lights ${honda.lights}`);


//Example:
let UniversityStudent = {
    uni: "The University of Haripur",
    class: "BSCS (5thA)",
    semester:"5th",
    department: "It"
}

let StudentAmmar = {}
let StudentDanish = {}
let StudentHamid = {}

Object.setPrototypeOf(StudentDanish,UniversityStudent)
Object.setPrototypeOf(StudentAmmar,UniversityStudent)
Object.setPrototypeOf(StudentHamid,UniversityStudent)

console.log(StudentHamid.semester);