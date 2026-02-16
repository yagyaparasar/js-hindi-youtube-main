//DECLARATION
//2 ways to declare : 1)as a literal & 2)as a constructor
//concept of singleton  : IT BECOMES IN SINGLETON ONLY IN 2ND METHOD

//OBJECT LITERALS
const JUser = {}
//Object as constructor
Object.create  //study later

//back to literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Yagya",                 //here key:value pair ka chakkr hota hai and we can define both key and values here and by default here it assumes name as string
    age: 21,
    location: "Patna",
    isLoggedIn: false,
    lastLoginDays: "Mon , Tues , Sun",
    "Fullname": "Yash babu",
    [mySym]: "mykey1",        //using mykey as symbol  --->CORRECT SYNTAX
    mySym: "mykey2"            //WRONG SYNTAX SINCE HERE MYsYM IS USED AS STRING
}


//how to access
//m1
console.log(JsUser.age)   //21
console.log(JsUser["age"]) //21
console.log(JsUser["lastLoginDays"])  //Mon , Tues , Sun
//console.log(JsUser."fullname");  //error
console.log(JsUser["Fullname"])
console.log(JsUser[mySym])   //mykey1
console.log(JsUser.mySym)    //mykey2
console.log(typeof JsUser.mySym)   //string
console.log(typeof JsUser[mySym])   //string  here we checking values isliye string
console.log(typeof mySym)   //symbol



//CHANGE VALUE
JsUser.name = " Yash chopra"

/*//To lock values 
Object.freeze(JsUser)  //so chnages.overwriting after this wont propagate (no error however)
*/
console.log(JsUser);


//FUNCTION IN OBJECT
JsUser.greeting = function () {
    console.log("hello boi")

}

console.log(JsUser.greeting);   //[Function (anonymous)]  ---->function execute nhi hua bss function ka reference wapis aya hai
console.log(JsUser.greeting())

//introduction to this 
JsUser.greetingTwo = function () {
    console.log(`This is your name:${this.name}`)

}
console.log(JsUser.greetingTwo())










