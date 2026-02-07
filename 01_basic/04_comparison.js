console.log(2 > 1) //true

//issue arise when we compare different datatypes
console.log("2" > 1) //true : js converts string to number automatically

console.log(null > 0)   //false
console.log(null == 0)   //false
console.log(null >= 0)   //true 
/*null > 0 → false
converts null to 0 → 0 > 0 is false

null == 0 → false
== does not convert null to number
null only equals undefined

null >= 0 → true
= converts null to 0 → 0 >= 0 is true

Key rule:
Relational operators convert null to 0, equality (==) does not */
//SAME LOGIC WITH UNDEFINED



//=== is used for strict comparison with no conversion in datatypes

console.log("2" === 2)






