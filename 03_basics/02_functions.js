//Functions with objects and array in JS

//1) Using Rest operator inside function
//Agar hamaay ya na pta hookay kitnay arguments na ana hai tooh haam parameter kaay sath rest opearator use kr sakhty hain
//Note: rest operator returns an array


function CalculateCartPrices(...items) 
{
    return items;
}

let items =CalculateCartPrices(1,2,3,4,5);
// console.log(items);


//2)Passing objects inside function
let UserInfo = {
    name:"Ammar",
    age:22
}

function HandleUsers(...Users) 
{
    console.log(`User name is "${UserInfo.name}" and his age is "${UserInfo.age}".`);
}
HandleUsers(UserInfo);

//3) Passing Arrays inside function

let sum=0;

function TakingNumbers(nos) 
{
    console.log(nos);
}
TakingNumbers([1,2,3,4]);  //we can directly pass arrays orobjects as an argument during function call, as i did here.
