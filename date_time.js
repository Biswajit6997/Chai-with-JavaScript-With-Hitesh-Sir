let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());


let myCreatedDate =new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDateTime =new Date(2023,0,23,5,3)
console.log(myCreatedDateTime.toLocaleString());

let myCreateDate =new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);

//date in secound

console.log(Math.floor(Date.now()/1000))



let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());// august --> 7
console.log(newDate.getFullYear());//  2023


