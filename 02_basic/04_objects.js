// create a singleton object
// const tinder=new Object()
// console.log(tinder);
// create a literal object
const tinder={}
 tinder.id=1;
 tinder.name='Abhay';
 tinder.isloggedin=false;
// console.log(tinder);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// here is a concept of optional chaining studing in coming vedios
// ? output1:output2;

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// not give the disered result
 //************3 ways to merge object and array***********

 const obj3=Object.assign({},obj1,obj2);// it will not add changes to any object
//  const obj4=Object.assign(obj1,obj2);// merge object data will get reflected obj4 and obj1
//  const obj5={...obj1,...obj2};//merging object using spreading technique
//  console.log(obj5);


//  // when in fetch data from database we get it in the form of array of object
//  const obj6=[
//     {
//         id:1,
//         email:"ajdkhfkj.com"
//     },
//     {
//         id:2,
//         email:"ajdkgdsgadhfkj.com"
//     },
//     {
//         id:3,
//         email:"ajddsgdskhfkj.com"
//     }
//  ]

// //  console.log(obj6[0].email)
// console.log(Object.keys(obj6));
// console.log(Object.keys(obj5));
// console.log(Object.values(obj6));
// console.log(Object.entries(obj6));


// console.log(tinder.hasOwnProperty("name"));

const course={
    coursename:"Js in hindi",
    coursefee:'555',
    courseInstructor:"Hitesh Chaudhary"
}

// one of the way to excess the value is 
// course.courseInstructor
// but let say you want to print it three time then
// in that case we use

const{courseInstructor:Instructor}=course;
// its a de-structuring concept
//console.log(courseInstructor);
console.log(Instructor);

//Api
//Most of the data that receieve is in json format.

// Most of the time we will directly get json format
// {
//     "name":"Abhay",
//     "course":"Js in hindi",
//     "fee":"free"
// }

// But sometime we can get array of object
[
    {},
    {},
    {}
]