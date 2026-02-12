
//date is object in js reprsenting a single moment in time
//"temporal" is being proposed to makde as a global object(like math)

//convention way to learn date
let myDate = new Date()
console.log(myDate)  //weird ans :  2026-02-12T13:37:57.190Z

console.log(myDate.toString())   //Thu Feb 12 2026 19:07:57 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  //Thu Feb 12 2026
console.log(myDate.toISOString())   //2026-02-12T13:37:57.190Z
console.log(myDate.toLocaleDateString())  //12/2/2026
console.log(myDate.toJSON())  //2026-02-12T13:40:55.487Z
console.log(myDate.toTimeString())  //19:10:55 GMT+0530 (India Standard Time)


console.log(typeof myDate);  //object

//to print desired date
let myCreatedDate = new Date(2023, 0, 23)  //here 2023-->year ; 0--->month denotion in order numeric  ;  23--->date
console.log(myCreatedDate.toDateString());  //Mon Feb 23 2023

let myCreatedDate2 = new Date(2023, 1, 23, 5, 3) // here 5-->hour of day and 3-->min of the hour
console.log(myCreatedDate2.toLocaleString())   //  23/2/2023, 5:03:00 am

let myCreatedDate3 = new Date("06-30-2004")
console.log(myCreatedDate3.toLocaleString())   //30/6/2004, 12:00:00 am     (also notice how time is decided by default if no input)



//TIMESTAMPS-->useful while making polls ,buzzers to find how gave quickest
let myTimeStamp = Date.now();      //Date.now() → milliseconds since Jan 1, 1970 UTC(called "UNIX EPOCH TIME")


console.log(myTimeStamp)  //1770904432323
console.log(myCreatedDate.getTime())  //1674412200000
//to convert to seconds
console.log(Math.floor(Date.now() / 1000))   //1770904959  --->seconds passed between unix epoch and myCreatedDate



let newDate = new Date()
console.log(newDate)           //2026-02-12T17:17:47.462Z
console.log(newDate.getDate())  //12
console.log(newDate.getDay())   //4  (i.e thursday)
console.log(newDate.getFullYear())   //2026
console.log(newDate.getHours())     //22
console.log(newDate.getMilliseconds())
console.log(newDate.getMinutes())//49
console.log(newDate.getMonth())   //1
console.log(newDate.getMonth() + 1)   //1

console.log(newDate.getSeconds())  //46
console.log(newDate.getTime())   //1770916786707
console.log(newDate.getTimezoneOffset())  //-330
console.log(newDate.getUTCDate())  //12
//etc many functions with .get 

//many ppl use string interpolation 

console.log(`${newDate.getDate()}`) //12



//to customize

newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})
console.log(newDate.toLocaleString())











