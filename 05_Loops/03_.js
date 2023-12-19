//1) For-of loop

// Ya loop arrays aur strings par run hota hai, lakin jab haam iski suggestions letaay hain tooh kuch isaah dekhta hai
// for (const iterator of object) { }
//  is kaay andaar object mention hai ya object js wala object nahi hai, yahan par object ka matlb cheez hai maslaan
//  arrays ya strings aur "iterator" ki jagah element ya value kuch bhi likh sakhty hain


//a- Running For-of loop for array

let myHereos = ["Quaid-e-Azam","Allama Iqbal","Imran Khan"];

for (const elements of myHereos) {
    // console.log(elements);
}

//b- Running For-of loop for String

let LearningDeveloper = "Muhammad Ammar Atique";
for (const substring of LearningDeveloper) {
    // console.log(substring)
}


//2)Maps in JS  
// similar to js object here values are also stored as key value pairs

let myMap =new Map ();

//a) Setting key value pair for map object
myMap.set("Name","Muhammad Ammmar Atique");
myMap.set("Age",22);
myMap.set("Gender","Male");

//b) Getting values from map
// console.log(myMap.get("Age"));

// console.log(myMap[1]);

//c) Iterating over map using for-of loop


for (const [key,value] of myMap) {
    
    // console.log(key,value);
}

//3) For-in loop

let userDetails = {
    "name":"Don",
    "age":56,
    "RealName": "SRK"
}

//a) Iterating over js object using for-in loop

for (const key in userDetails) {
//    console.log(key);
//    console.log(userDetails[key]);
}

//b) Iterating over js array using for-in loop

let opNumbers = [5,10,15,20];

for (const key in opNumbers) {
//    console.log(opNumbers[key]);
}

//4) For-each loop

// a
let myArray = [1,2,3,4];

myArray.forEach((element,index,array) => {

    // console.log(element, index, array);
    
});

// b
let ArrayofObjects = [
    {
        "name":"Rafeh",
        "age":24
    },
    {
        "name":"Ammar",
         "age":22
    },
    {
        "name":"Moiz",
        "age":16
    }
];

ArrayofObjects.forEach(element => {
    console.log(`Hi my name is ${element.name} and my age is ${element.age}`);
});