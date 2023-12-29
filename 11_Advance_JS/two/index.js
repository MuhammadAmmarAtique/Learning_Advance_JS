//Promise in JS
// 1)Creating Promise()

let PromiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        // Simulating an error scenario
        const isError = false;

        if (isError) {
            console.log("Error connecting to DB");
            reject("DB connection failed"); // Calling reject in case of an error
        } else {
            console.log("DB connected");
            resolve();
        }
    }, 2000);})
    
    .then(()=>{
    console.log("Congrats");})

    .catch((error)=>{
    console.log(error);
    console.log("Sorry");})

    .finally(()=>[
        console.log("Promise is either resolved or rejected")
    ])