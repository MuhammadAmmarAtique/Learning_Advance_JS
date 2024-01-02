//Inheritance in JS

//Parent
class user{
    constructor(username){
       this.username = username;
    }

    showUserName(){
        console.log(`User is: ${this.username}`);
    }
}

//Child
class Teacher extends user{
    constructor(username,email,password)
    {
        //Using "superkeyword" here instead of call() and passing "this" inside call, b/c class and "super" are part
        // of new syntax.
        super(username);
        this.email =email;
        this.password = password;
    }
}

const teacher1 = new Teacher ("Mudassir Sahb", "mudassir234@gmail.com", 123);
console.log(teacher1);