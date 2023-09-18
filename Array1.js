//Array in Js

 const myArr=[0,1,2,3,4,5,6]
 const myHeros =["shaktiman","nagraj"]

 const myArr2 =new Array(10,2,3,4)
 console.log(myArr2[1]);// 2

 //array methods 

 myArr.push(8)
 console.log(`Push into an array : `,myArr); //push into the array
 
 myArr.pop()
 console.log(myArr); //pop the lst elemment from the array

 myArr.unshift(9)
 console.log("unshift operation", myArr); //push the element into the first 


 myArr.shift(0)
 console.log(myArr);

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9));  //-1

const newArr = myArr.join()
console.log(newArr); //it join the array and return the string 

//slice ,splice

console.log("A" , myArr);

//slice 
const myArr1 =myArr.slice(1,5)  //index 1 theke suru kore last index-1 obdi print hobe
console.log(myArr1);

console.log("B",myArr);

const myArr11 =myArr.splice(1,5) //1,3 baad diye baki elemnt gulo print hobe
console.log("C",myArr); 
console.log(myArr11);







