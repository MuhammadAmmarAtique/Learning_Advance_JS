//  node .\03_basics\01_functions.js
// 1)
function SayMyName() 
{
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("A");
    console.log("R");
    console.log("");
}

// SayMyName();
// SayMyName();
// SayMyName();

// 2)Functions Parameters vs Arguments

function Sum(Number1, Number2) {  
        // console.log(Number1 + Number2);
        return Number1 + Number2;
}

let result = Sum(2, 21);
// console.log(result);

// 3)
function loginUserMessage(username){
   
        
        return `${username} just logged in`
  
}

console.log(loginUserMessage(1))


//here i want no one can enter number and empty value so do it