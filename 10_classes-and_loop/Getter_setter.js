class user{
    constructor(email,password){
        this._email=email;
        this._password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}bisajitdsdsds`
    }
    set password(val){
        this.password=val;
    }


}

const bis=new user("biswajit@google.com","biswa")
console.log(bis.email)