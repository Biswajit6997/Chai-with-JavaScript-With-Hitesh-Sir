const tinderUser = new Object() // singeltone object

const tinderUser1={} //non singeltone user

tinderUser1.id="1123abs"
tinderUser1.name="biswajit"
tinderUser1.isLogggedIn=false



// console.log(tinderUser);
console.log(tinderUser1);



const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"biswajit"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);///biswjit


/*********************************************************** */

const obj1={1:"a",2:"b"}
const obj2={3:"d",4:"e"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} 
console.log(obj3);


/*//////************************************ */

console.log(Object.keys(tinderUser1));//[ 'id', 'name', 'isLogggedIn' ]
console.log(Object.values(tinderUser1));// [ 'name', 'biswajit' ]
console.log(Object.entries(tinderUser1));//  [ 'isLogggedIn', false ]


console.log(tinderUser1.hasOwnProperty("isLogggedIn"));//true
console.log(tinderUser1.hasOwnProperty("isLoggged"));//false