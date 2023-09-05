// singleton
// object.create--->constructor

//object literal
const mySys=Symbol("key1")
// how can we use Symbol as key in object defined below
const Jsuser={
    name:"Abhay",
    "last name":"Chauhan",
    [mySys]:"mykey1",
    age:22,
    location:"Jaipur",
    email:"abychauhan12345@gmail.com",
    isLoggedIn:false,
    lastlogindays:["Monday","Saturday"]
}   // the value can be anything bool,int,another object ,array etc.
    // the key in object is processed as string by system but we dont write in string format as it is preunderstood by compiler that key is of string type

    // to excess the element of the object use this technique 
    // console.log(Jsuser["email"]);
    // Q why we are not using simple technique like
    // console.log(Jsuser.email);
    // it will fail under condition where you have explicitly declare your key as string 
   // console.log(Jsuser.last name); insted of this use this above one.
//    console.log(Jsuser["last name"]);
//    console.log(Jsuser[mySys]);
//    console.log(Jsuser);
   
   // value overwrite
//    Jsuser["last name"]="Chauhan ji"
//    console.log(Jsuser);
   // but if like someone doesn't want his data attributes not to be changed
   // then in that case we will freeze the object
//    Object.freeze(Jsuser);
//    Jsuser["last name"]="Chauhan's ji"
//    console.log(Jsuser);


Jsuser.greetings=function(){
    console.log("Hello JS User");
}

console.log(Jsuser.greetings);// it return function reference not the value associated with it 
console.log(Jsuser.greetings());// it return the value within the function 
// if we want to reference name attribute inside function we can do this by
Jsuser.greetingsTwo=function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(Jsuser.greetingsTwo());
console.log(Jsuser);
