const user={
    _email:"b@bisw.com",
    _password:"abc",

get email(){
    return this._email.toUpperCase()
},
set email(val){
   rhis._password=val
}
}
const tea=Object.create(user)
console.log(tea.email);//B@BISW.COM
