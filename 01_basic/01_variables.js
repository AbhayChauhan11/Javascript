const account_id=101001
let accountEmail="abychauhan12@gamil.com"
var accountPasswd="12345"
accountCity="Dehradun"
let accountState=null;
/*
prefer not to use because
of issue of block scope and issue scope
*/
// account_id=2 //not allowed
accountEmail="asf123@google.com"
accountPasswd="123213"
accountCity="Bageshwar"
console.log(account_id)
console.table([account_id,accountEmail,accountPasswd,accountCity,accountState])