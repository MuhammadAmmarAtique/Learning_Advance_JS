//1) Map()
const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);


//2) Chainning in JS
let Chainning= numbers
               .map((value)=> value=value+1 )
                .filter((value)=> value >=4 );

// console.log(Chainning);


// 3)Reduce () in JS

// a) Adding all values of array usinf foreach


// const array =[1,2,3,4];

// let finalValue =0;
// array.forEach((item)=>{
//     //    finalValue= finalValue + item;
//     finalValue += item;
// })

// console.log(finalValue);

// b)Now adding all values of array again but now this time by using Reduce()

// const MyArray =[1,2,3,4];


// const sumWithInitial = MyArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// yahan par "accumulator" aik variable hai jiski initial value yahan par zero hai aur
// "current value" jo kaay array saay aa rahi hai one by one kar kaay

// console.log(sumWithInitial);

// c)What if we want to increase initial value of "accumulator", we will do like this

const MyArray =[1,2,3,4];

const initialValue = 90;
// const sumWithInitial = MyArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 
//   initialValue
// );

// we can write like this too
const sumWithInitial = MyArray.reduce((accumulator, currentValue) => accumulator + currentValue,10);

// yahan par "accumulator" ki pahli value wo hogee jo haam naay initial value set ki hai, phir iski sum ho kar c
// hange hotee rahaay gee.

// console.log(sumWithInitial);


//d)Practicing reduce() onnce more

let courses =[
    {
       courseName : "python",
       price: 2100

    },
    {
        courseName : "js",
        price: 3100
 
     },
     {
        courseName : "data science",
        price: 5100
 
     }
];

let totalprice= courses.reduce((accumulator, course)=>{ return accumulator + course["price"] }, 0);
console.log(`I bought different courses and paid total of ${totalprice} rupees.`);

