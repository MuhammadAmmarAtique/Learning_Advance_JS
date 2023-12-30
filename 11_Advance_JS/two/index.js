//Promise in JS
// 1)Creating Promise() and consuming it.

// let PromiseOne = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // Simulating an error scenario
//         const isError = false;

//         if (isError) {
//             console.log("Error connecting to DB");
//             reject("DB connection failed"); // Calling reject in case of an error
//         } else {
//             console.log("DB connected");
//             resolve();
//         }
//     }, 2000);})
    
//     .then(()=>{
//     console.log("Congrats");})

//     .catch((error)=>{
//     console.log(error);
//     console.log("Sorry");})

//     .finally(()=>[
//         console.log("Promise is either resolved or rejected")
//     ])

// 2)Creating Promise() and consuming it using 2nd syntax (async function, await operator + try catch statement)

// let Promisetwo= new Promise((resolve,reject)=>{

//     const isError =false;
//     if (isError) {
//         reject("Error connecting DB Two");
//     } else {
//         resolve("DB2 connected successfully");
//     }

// });
    

// async function PromiseTwoHandler() {
//       try 
//       {
//         let response = await Promisetwo
//         console.log(response);
//       } 
//       catch (error) {
//         console.log(error);
//       }
// }
// PromiseTwoHandler()

//3)Consuming response using async,await

async function PromiseHandler() {

    try 
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data[0].phone);
    }
     catch (error) 
    {
        console.log(error);
    }
    
}

PromiseHandler()
