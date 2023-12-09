//1)Defining a symbol
let mysymbol =Symbol("key 1");

// 2)defining an object and adding symbol as a key in object
let JsLearner= {
    name:"Ammar",
    "Full name": "Muhammad Ammar Atique",
    age:22,
    [mysymbol]:"key 1",
    // use [] to add symbol as key inside object
    Hello:function() {
        console.log("hello 1");
    } 
    
}

console.log(JsLearner);

//3)Changing value inside object

JsLearner.name="Rafeh";
// console.log(JsLearner);

//4)Freezing object so that nothing can change inside it
// Object.freeze(JsLearner);   //must comment this if we want to change anything of the object

JsLearner.name="Moiz";
// console.log(JsLearner);   //here we will see name moiz is not appearing


//5)Calling a function which is present inside an object
// console.log(JsLearner.Hello());


// 6)Defining another function inside object but outside object
JsLearner.hello2 = function() {
    console.log("hello 2");
}

console.log(JsLearner);
