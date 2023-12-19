//Filter() in JS

//1)Returning values using for each loop

//a)
// let nums = [0,1,2,3,4,5,6,7,8,9];
// let numberGreaterthen3 = nums.forEach(element => {
//     if (element>3) {
//         return element;    
//     }
// });

// console.log(numberGreaterthen3); 
// Imp Note: Foreach loop doesnot returns a value

//b) How we can solve above problem if we want to use foreach loop instead of filter.
// let nums = [0,1,2,3,4,5,6,7,8,9];

// let numberGreaterthen3 = [];

// nums.forEach(element => {
//     if (element>3) {
//        numberGreaterthen3.push(element);
//     }
// });

// console.log(numberGreaterthen3);

// 2)Using filter() 
// Its better to use filter() then foreach() if we have to return a value.


let nums = [0,1,2,3,4,5,6,7,8,9];
let numberGreaterthen3 =nums.filter((element)=>{
      return element>3;
})

// console.log(numberGreaterthen3);

//3)Using flter() more

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//  let filteredBooks= books.filter( (book)=>{
//     return book.publish <= 1999;
// })
// console.log(filteredBooks);

let filteredBooks= books.filter( (book)=> (book.genre === 'Fiction') )
console.log(filteredBooks);
