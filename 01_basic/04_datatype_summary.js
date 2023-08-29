// Primitive 
// 7 types:boolean,string,number,bigInt,Symbol,null,undefined

//  const id=Symbol("123")
//  const newid=Symbol("123")
//    console.log(id==newid);

// const bigNumber=2389478923749732497n
// console.log(typeof bigNumber);

// NON Primitive 
// Array,Object,Function

//Array return type is object
// const heroes=["Vishnu","Brahma","Maya Devi"]
//  console.table(heroes);
//  console.log(typeof heroes);
 
 //Object return type object
//  let Myobject={
//     name:"Abhay",
//     age:21
//  }
// console.table(Myobject);
// console.log(typeof Myobject);

//Fuction return function object
// there are many ways to declare function in javascript but currently we will look into variable kind of declaration 

const myFunction=function () {
    console.log("Hello World");
}
console.table(myFunction);
console.log(typeof myFunction);