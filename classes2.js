var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    /*  constructor(){ //default constructor
  
          this.FirstName = "EMPTY FNAME";
          this.LastName = "EMPTY LNAME";
  
      }; */
    //Multiple constructors are not allowed in typescript
    function Person2(firstname, lastname) {
        this.FirstName = firstname;
        this.LastName = lastname;
    }
    Person2.prototype.getFullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    Person2.prototype.greet = function () {
        console.log(this.getFullName() + " said: HEY THERE!");
    };
    return Person2;
}());
;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log(this.getFullName() + " said: Hello_World.exe Activated!");
    };
    Programmer.prototype.greetLikeNormalPerson = function () {
        _super.prototype.greet.call(this); //Super = parent class so in this case, it calls Person.greet()
    };
    return Programmer;
}(Person2));
var aPerson = new Person2("Tai", "Person"); //Implicity sets aPerson to type Person
var aProgrammer = new Programmer("Tai", "Programmer");
var aProgrammer2 = new Programmer("Tai3", "PRORAMMER"); //still valid because programmer is a type of person
console.log(aProgrammer.greet());
console.log(aProgrammer.greetLikeNormalPerson());
