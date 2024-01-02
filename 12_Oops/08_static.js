//Static kw

class Animal{

   constructor(name){
    this.name = name;
   }
  
  static AnimalCrying()
   {
       console.log(`${this.name} is crying`);
   }
}

const loin = new Animal("loin");
// loin.AnimalCrying(); (#1) here loin object cannot access AnimalCrying()


//creating animal child

class zebra extends Animal {

constructor(name,color){
    super(name)
    this.color = color;
}
}

let blackZebra = new zebra ("black zebra",'red');
console.log(blackZebra);

// blackZebra.AnimalCrying();  (#2) here blackzebra object which is instance of zebra class
// and zebra class is child of animal class also cannot access AnimalCrying() blc of "static" kw