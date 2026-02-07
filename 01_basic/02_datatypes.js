"use strict"; //treat all js codes as per newer version
//alert(3 + 3); we are using nodejs not browser so error aayerga

//avoid semicolons as much in js

// console.log() console.log)() ----> error
//console.log(); console.log() ------> no error but VERY BAD READIBILITY

/*console.log()
console.log() -------> good readibility*/

//ecma scipt   tc39.es  && mdn documentation

let name = "Hitesh"  //string datatype
let age = 22     //number  it has a range too
let cond = false    //boolean

/*number
big int
string
boolean
null ==> standalone value or representation of empty / khali
undefined ==> abhi value assign nhi hui hai(variable & memory space declared hai but konsi type jayegi usme not decided yet)
symbol ===>used for uniqueness...mostly used in react

object==>vvimp
*/

console.log(typeof "yagya")
console.log(typeof age)

console.log(typeof null)   //----->ans: object  controversial
console.log(typeof undefined)  // -----> ans: undefined