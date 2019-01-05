
export class Person2 { //similar to how you define clsss in c++

    FirstName : string;
    LastName : string;
  
  /*  constructor(){ //default constructor

        this.FirstName = "EMPTY FNAME";
        this.LastName = "EMPTY LNAME";

    }; */

    //Multiple constructors are not allowed in typescript

    constructor(firstname : string, lastname : string ){ 

            this.FirstName = firstname;
            this.LastName = lastname;
    }

    getFullName(){ //Method declaration
        return `${this.FirstName} ${this.LastName}`;  
    }

    greet(){
        console.log(`${this.getFullName()} said: HEY THERE!`)
    }



};

class Programmer extends Person2{ //Programmer class INHERITS from Person class

    greet(){ //overwrite Person's greet() function
        console.log(this.getFullName() + " said: Hello_World.exe Activated!")
    }

    greetLikeNormalPerson(){
        super.greet();  //Super = parent class so in this case, it calls Person.greet()
    }
}


var aPerson = new Person2("Tai", "Person"); //Implicity sets aPerson to type Person
var aProgrammer = new Programmer("Tai", "Programmer");

var aProgrammer2 : Person2 = new Programmer("Tai3", "PRORAMMER"); //still valid because programmer is a type of person

console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeNormalPerson());



