//IIFE (Immediately Invoked Function Expression)

//1)Normal function
(function greeting()
{
 console.log("Greeting Sir!");   
}) ();

// 2)Fat Arrow Function
//a
( ()=>{
    console.log("hi");
} ) ();

//b Passing parameters
((num1,num2)=> { console.log( num1-num2) }) (2,1);


// Note: Named iife wo iife hain jinka name hota hai
// for example yahan par greeting aik named iife hai, aur baqi dono begair named ka iife hain





