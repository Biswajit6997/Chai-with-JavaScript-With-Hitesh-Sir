//function and parameters  vedio 19

/*function sayMyname(){
    console.log("B");
    console.log("i");
    console.log("s");
    console.log("w");
    console.log("a");
    console.log("j");
    console.log("i");
    console.log("t");
}
 sayMyname()
 */

 function addTwonum(num1,num2){
    const result =num1+num2;
    return result
 }
// console.log(addTwonum(5,6)); 

 function loginUserMassage(username){
    if(!username){// !usename == (username === undefined)
        console.log("please enter your user name");
        return
    }
    return `${username} just logged in`
 }
//  console.log(loginUserMassage("biswaijt"));
console.log(loginUserMassage());