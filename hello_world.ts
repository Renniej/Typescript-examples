//Typescript is a tool for DEVELOPMENT TIME
//it is to be used to catch bugs BEFORE  compilation and run time
//Typescript features only exist during typescript development time
//Typescript will complain about errors but still compile 

var a : number; //Tells type script a is a ONLY a number
var b : boolean;
var c : string;
var myArr : number[]; //tells typescript myArr is an ARRAY and is an array of numbers
var myArr2 : [number, boolean]; //This is an array with 2 ELEMENTS, 1st is a number, 2nd is a boolean
//Tuples must be designated size. In this case 2

a = 12;
b = true;
c = 'hello';

function add (a : number, b : number){ //enforces that function will only accept 2 numbers
    return a+b;
}

function add2(a : number, b: number ,c?){ //c is an optional parameter. Has to be at end

}

