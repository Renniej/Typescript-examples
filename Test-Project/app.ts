import {Person} from './person';
import * as lodash from 'lodash'; //import from node_module
//type definiions help to provide  auto complete and suggestions
let foo = new Person;
foo.firstName = "TAIJ";
foo.lastName = "RENNIE";

console.log(foo);


var array = [1,2,3,4,5,6];
lodash.reverse(array);