//LECTURE 21 : SCOPES_01
//let , var , const

//{} -----> yhi scope hai when used/associated with function or if-else

var c = 234           //this is global scope
if (true) {
    const a = 10      //this is block scope
    let b = 20
    var c = 30
}

//console.log(a)   --->error
//console.log(b)  ---->error
console.log(c)   //---> 30



let abba = 300
if (true) {
    let abba = 69
    console.log(`inner value is ${abba}`);    //69

}

console.log(`outer/global value is ${abba}`)    //300





//NOTE: IN BROWSER INSPECT OPTION THE SCOPE VS THE SCOPE IN CODE ENVIRONMENT I.E. THROUGH NODE THE SCOPE S DIFFERENT