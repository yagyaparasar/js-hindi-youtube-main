/*the way data is stored and accessed on that basis data is of 2 types here : 
1)primitive datatype  2) non-primitive datatype

1)Primitive datatype(call by value hota isme...that is copy is generated)
these are : string , number(both decimal nd whole) , boolean , null, undefined, symbol, big int
*/
const isLoggedIn = true
const temprature = null
let userName  //rn it is undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)  //false

const bigNumber = 11111111222n   //big int  : add n at end of it to represent it as big int




/*
2)non primitive(call by reference allocate kiya ja skta hai)
these are : array , objects(vvi), functions
*/
const heros = ["iron man", "captain america", "hawkeye"]  //array

let obj = {                     //objects          
    name: "Yagya",
    age: 22,

}


//functions ka many tarika hai but rn only variable approach...i.e. treating function in as a variable
const myFunction = function () {
    console.log("Hello World")

}




//vvi read this: https://262.ecma-international.org/5.1/#sec-11.4.3 

/*DYNAMIC TYPING IN JS
JS is a dynamically typed language, i.e. the type of a variable is decided at runtime. We dont need to declare a variable’s type,
and the same variable can store values of different types during execution.
JavaScript doesn’t remember the history of x.
It only cares about the latest value assigned 

In Java / C++ / TypeScript, the variable must have a label/type first.and only that type of values can be put in it
*/




