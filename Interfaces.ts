interface Person3{ //Create interface

    firstname : string;
    lastname : string;
    getFullName(): string;
}



class Foo implements Person3{

     firstname : string;
    lastname : string;

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }


}


let aPerson3 : Person3 = new Foo();

let someObj = {

     firstname : "TEST",
    lastname : "TEST",
    foo : 10,
    getFullName(){
        return "TEST";
    }
}


//Concept is called duck-typing (If it looks like a duck, quacks like a duck then it is a duck!)
//However you wont be able to access the foo attribute as the Type of aPerson3 limits it.
aPerson3 = someObj;  //This only works because they have a similar structure
