// 1)Global scope
var num=0;  //here use var or let no difference as both variable have global scope

function hello() {
//  console.log(num);
}
hello();


if (true) {
    // console.log("func",num);
}

for (let i = 0; i < 1; i++) {
    // console.log(`loop: ${num}`);
}

// 2)Function Scope

function exampleFunction() {
    var RandomVariable = 20; //yahan par "var" aur "let" ka "function scope" hai ya dno function ka bahir access nahi hotaay
    // console.log(RandomVariable); 
}
// exampleFunction();
// console.log(RandomVariable); 


//3)Block scope
for (var i = 0; i < 5; i++) {
    // console.log(i);
    var j=21;                   //var vs let
}
// console.log(`outside: ${j}`);

// 4) Nested Scope

function outer() 
{

    let a=5;

    function inner() 
    {
        let b = 10;
        console.log(a);
    }
    
    // console.log(b);
    inner();
    
}

outer();