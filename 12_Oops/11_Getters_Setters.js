//Getters, Setters

class User {

    constructor(name,email,password)
    {
        // Name is private b/c The use of an underscore prefix (_name) is a common convention in JavaScript
        // to indicate that a property is intended to be private.

      this._name = name;
      this.email = email;
      this.password = password;
    }

    //Getter
    get name ()
    {
        return this._name.toUpperCase();
    }

    //Setter
    set name(value)
    {
      this._name = value;
    }

}

let user1 = new User ("Ammar","Ammar@uoh.com","0912");
console.log(user1);
console.log(user1.name);

/*
IMP NOTE:-

The class provides a getter (get name()) and a setter (set name(value)) for the name property. 
This is a form of encapsulation because it allows controlled access to the private _name property. 

*/