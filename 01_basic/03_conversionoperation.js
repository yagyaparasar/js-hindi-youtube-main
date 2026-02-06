let score = "33"

//manytimes we dont know what is datatype as we get it fro,m backend or etc form
console.log(typeof score)

let valueInNumber = Number(score)   //in RHS 'N' must be captal
console.log(typeof valueInNumber)

// now issue arises if score = "33abc" or string
let scoree = "33abc"
let valve = Number(scoree)
console.log(typeof valve)  //ans:---. number  ;)
console.log(valve)   // ans:---> NaN

//now if score = null then typeof due to Numberfunct. = number and value = 0
//now if score = undefined then typeof due to Numberfunct= number and value = NaN

//now if score = boolean then typeof = number and value = 0 or 1
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)   //boolean
console.log(booleanIsLoggedIn)     //true

/*so while boolean conversion if 1=>true and 0 =>false
"yagya"==> 1 and empty string ==> 0   */

//STRING
let someNumber = 72
let someBool = true

let someString = String(someNumber)
let someBoolString = String(someBool)
console.log(someString)   //72 and typeof-->string
console.log(someBoolString)  //true and typeof ---> string




