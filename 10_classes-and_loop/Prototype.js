let myname="Biswajit     "
// console.log(myname.length);


let myheros=["thor","Spiderman"]

let heropower={
    thor:"hammer",
    Spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spider power is ${this.Spiderman}`);
        
    }
}
Object.prototype.biswajit=function(){
    console.log(`Biswajit is present in all objects`);
    
}
Array.prototype.heyBiswajit=function(){
    console.log("Biswajit saya hello");
    
}
// heropower.biswajit()
// myheros.biswajit()
// myheros.heyBiswajit()
// heropower.heyBiswajit()



// Inheritance

const user={
    name:"chai",
    email:'chai@google.com'
}
const Teacher={
    makevideo:true
}
const teachingSupport={
    isAvailale:true
}
const TaSuppotr={
    makeassignment:'JS assignment',
    fulltime:true,
    __proto__:teachingSupport
}

Teacher.__proto__=user


// Modern Syntax
Object.setPrototypeOf(teachingSupport,Teacher)
let anotheruser="ChaiAurCode  "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}
anotheruser.trueLength()//11
"hitesh".trueLength()//6
"Tina".trueLength()
