
export class Person { //similar to how you define clsss in c++

    FirstName : string;
    LastName : string;
    random; //can be any type

};


var aPerson = new Person; //Implicity sets aPerson to type Person
aPerson.FirstName = "Tai";
aPerson.LastName = "Rennie";
aPerson.random = 10;
aPerson.random = "TEST";
aPerson.random = true;

//console.log(`${aPerson.FirstName} ${aPerson.LastName}`);


var aPerson2 : Person = new Person; //Explicity sets aPerson2 to type Person
