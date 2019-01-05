import {Person2} from './classes2';  //Import module from classes2.ts



function echo<T>(arg : T) : T{ //generic function = template function... nuff said
    return arg;
}

//var MyStr : String = echo(1)  == Error



class Admin extends Person2{


}

class Manager extends Person2{

}


let admin = new Admin('a', 'a');
let manager = new Manager('a', 'a');

function personEcho<T extends Person2>(person : T) : T {
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(manager);