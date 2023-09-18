//************datatypes in Js*********************

//primitive

//7 types : string ,Number ,Boolean ,null ,undefined ,Symbol,BigInt


const score =100
const scoreValue =100.3
const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')


console.log(id == anotherid); //false
console.log(anotherid);

const bigNumber=114121544111415444n


// Reference type or (Non primitive)
//  Array ,Objects,Function

const heros=["shaktiman" ,"nagraj","doga"]  ///function
//object
let myobj ={
    name:"biswajit",
    age:20,
    gender:"M",
}
//function

const myfunction =function(){
    console.log("Hello World");
}
console.log(typeof myfunction);
console.log(typeof heros);


