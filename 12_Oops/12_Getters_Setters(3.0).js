//Its also an old syntax (we will find it very rarely)

const User ={

    _email : "ammar@uoh.com",
    _password : "123",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

}

// console.log(User);

const user1 = Object.create(User);  //Object.create() is a factory function,in object we will use it instead of new kw.
user1._email = "danish@haripur.com" ;
user1._password = "abc" ;

console.log(user1);

console.log(user1.email);
                                    