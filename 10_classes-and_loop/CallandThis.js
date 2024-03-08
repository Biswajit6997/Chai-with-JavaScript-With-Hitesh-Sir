function Setusername(username){
    this.username=username
}

function CreateUser(username,password,email){
    // .call and this 
    Setusername.call(this,username)

    this.password=password
    this.email=email
}
const chai=new  CreateUser("biswajit","123","biswajit@gmail.com")
console.log(chai);
