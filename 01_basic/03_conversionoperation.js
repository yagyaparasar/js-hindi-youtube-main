
let score = "33"
/*
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
"yagya"==> 1 and empty string ==> 0 */
/*
//STRING
let someNumber = 72
let someBool = true

let someString = String(someNumber)
let someBoolString = String(someBool)
console.log(someString)   //72 and typeof-->string
console.log(someBoolString)  //true and typeof ---> string
*/


//******************OPERAtions********************* */
let value = 7
let negValue = -value
console.log(negValue)
console.log(28 + 23)
console.log(3 ** 7);   // 3^7
console.log(2 / 3)  // quotient with decimals
console.log(45 % 7)  // remainder

let str1 = "Yagya"
let str2 = " Parasar"
let str3 = str1 + str2
console.log(str3)   // Yagya Parasar
console.log(str1 + str2);   // Yagya Parasar

console.log("1" + 2 + 2)  //122
console.log(1 + "2" + 2)  //122
console.log(1 + 2 + "2");   //32

console.log(true)  //true
console.log(+true)  //1  & log(true+) gives error
console.log(+"");  //0  since empty string is false :)




let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //correct but NOT GOOD WAY

let numbo = 100
numbo++
++numbo
console.log(numbo)  //102
















