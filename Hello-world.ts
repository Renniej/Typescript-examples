//Typescript is a tool for DEVELOPMENT TIME
//Typescript converts directly to javascript 
//it is to be used to catch bugs BEFORE  compilation and run time
//Typescript features only exist during typescript development time
//Typescript will complain about errors but still compile 

var z : any; //Normal javascript variable that can be assigned any type
var a : number; //Tells type script a is a ONLY a number
var b : boolean; //Tells type script that b is a ONLY a boolean
var c : string; //Tells type script that c is a ONLY a string

var x : number | boolean  //Tells type script x is ONLY either a number or boolean
var y : number | boolean | string


var myArr : number[]; //tells typescript myArr is an ARRAY and is an array of numbers
var myArr2 : [number, boolean]; //This is an array with 2 ELEMENTS, 1st is a number, 2nd is a boolean
//Tuples must be designated size. In this case 2

a = 12;
b = true;
c = 'hello';

function add (a : number, b : number, c){ //enforces that function will only accept 2 numbers
    return a+b;
}


//Function will always return a number fn() : number
function add2(a : number, b: number , c: number = 0 , f? : number) : number { //d is an optional parameter. C is also optional because it has a default value. Has to be at end
        return a+b+c;
}


//Implicit typing
var d = 10; // Typescript sees:  var d : number = 10.
var e = true; //Typescript sees: var e : boolean = true
var c = "Hello";//Typescript sees: var c : string = "hello"



function greet() : string{
    return "Good Morning";
}

var greeting = greet();  //Typescript sees:  var greeting : string = greet()

var greeting2;

greeting2 = greet(); //Typescript sees:  var greeting2 : any = greet()