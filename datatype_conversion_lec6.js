// conversion of operation

let score=undefined
// "33" =>33
// "33abc" =>NaN
// true => 1; false=> 0 ;undefined =NaN



console.log(typeof score);
console.log(typeof (score));

let valueInnum=Number(score);//Number keyword is used to convert string to number
console.log(typeof valueInnum);
console.log(valueInnum);
// ***********************************************************************************

let IsLoggedIn =1

// 1 => true; 0=>false
// " " => false
// "biswajit " => true

let booleanIsLoggedin =Boolean(IsLoggedIn)
console.log(booleanIsLoggedin);


let someNum=33

let stringNum =String(someNum)/// String keyword is used to conversion number to string
console.log(stringNum);
console.log(typeof stringNum);

