//accountId, account_id all r same
const accountId = 144553    //const keyword causes variable whioch cant be changed later
let accountEmail = "yagya@gmail.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"//this is also a way to declare variaaaables but NOT ENCOURAGED

let accountState //we can use; or cannot use....both ways depend on us 

//accountId = 22 ------>will give error
//console.log(accountId);

accountEmail = "iykyk@gmail.com"
accountPassword = "323451"
accountCity = "London"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//the difference in var and let? we can declare variables both ways but difference is:
//let does not face block-scope issue in js
/*thus, let is used in dedclaring variables
const is used in declaring constants
DONT USE var*/
