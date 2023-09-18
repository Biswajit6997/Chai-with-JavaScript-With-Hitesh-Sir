//singeltone


// object liteerals

const mySym =Symbol("biswa")
const JsUser ={
    name:"biswajit",
    [mySym]:"mykey1",
    "full name":"Biswajit Dey",
    age:20,
    location:"kolkata",
    email:"tecb.biswajit@gmail.com",
    isLoggedIn:false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);


console.log(JsUser[mySym]);

/****************************************************************************************** */

JsUser.email="biswajit@google.com"
// Object.freeze(JsUser)// freeze function are used to dont change the value 
JsUser.email="biswajit@microsoft.com"
console.log(JsUser);

///function

JsUser.greeting =function(){
    console.log("Hello Javascript ");
}
JsUser.greetingTwo =function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
