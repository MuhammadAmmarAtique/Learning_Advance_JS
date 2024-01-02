//.Call() in JS

function SetUserName(Username) {
    this.name = Username;
    // console.log("SetUserName function called");

    return this;
}


function UserInformation(Username,email,password) {

    // SetUserName(Username);

    // Waisaay bhi function (UserName) call tooh ho raha hai lakin wo values apnay "this" mai store kar raha hai 
    // aur execute ho kar khatam ho raha hai tooh is case mai haam .call() use karengaay aur kaheengaay kaay values
    // UserInformation ka this mai store karoo

    //Using call and passing this
    SetUserName.call(this,Username); //yahan "this" UserInfromation ka "this" hai
    this.email = email;
    this.password = password;

    return this;
}



let ammar = new UserInformation("Ammar","ammar123@gmail.com",123)
console.log(ammar);

let danish =  new UserInformation("Danish","danish123@gmail.com",123)
console.log(danish);

