//Creating Classes in JS

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password =password ;
    }

    CapitilaizeName(){
        return `Capitialed Name of user is ${this.name.toUpperCase()}`;
    }

    EncryptPassword(){
        return `Encrypted password is ${this.password}%45#67`;
    }
}

let User1 = new User ("Ammar", "ammar875@yahoo.pk", 123098);
console.log(User1);
console.log(User1.CapitilaizeName());
console.log(User1.EncryptPassword());


//What is happening in behind the scene

function user(name, email, password) {
    this.name = name;
    this.email = email;
    this.password =password ;
}

user.prototype.CapitilaizeName = function() {
    return `Capitialed Name of user is ${this.name.toUpperCase()}`;
}

let user3 = new user ("hamid","hamid123@gmail.com",9812);
console.log(user3);
console.log(user3.CapitilaizeName());