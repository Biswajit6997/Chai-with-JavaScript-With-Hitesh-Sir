//This and arrow function in Js vedio 23

const user={
    username:"biswajit",
    price:49999,

    welcomeMassage:function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);

    }
}
user.welcomeMassage()
user.username="sam"
user.welcomeMassage()
/*************************************************** */

const addTwo=(num1,num2) =>{
    return num1+num2 /// here return is called explicite function 
}
console.log(addTwo(3,5));


const addThree=(num1 ,num2,num3)=>(num1+num2+num3)// here it is called implicite function ak line a likha hoi bole
console.log("sum of three num is",addThree(2,3,4));
