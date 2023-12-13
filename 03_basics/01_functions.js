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

   console.log(username);
   console.log(typeof username);

     if (typeof username === 'string' && username.trim() !== '') 
      {
        console.log(`${username} just logged in`); 
        return;
      } 
  else
    {
        console.log("Invalid input.");
        return;
    }
}

// loginUserMessage("Ammar");




