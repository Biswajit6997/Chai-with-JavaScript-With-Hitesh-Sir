//string in JavaSript

const name ="biswajit"
const repocount=50
console.log(name+repocount+"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String ('biswajit dey')
console.log(gameName[1]);
console.log(gameName.__proto__); //return object {}
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase()); //convert all the symbol to uppercase
console.log(gameName.charAt(2)); //s
console.log(gameName.indexOf('s')); //2

//substring and slice

const newString =gameName.substring(0,4); //0-4 index obdi jabe
console.log(newString);

const anotherString =gameName.slice(1,4) //index 1 theke suru hobe 4 obdi jabe tar middle jei elemnt ache sei guli print hobe 
console.log(anotherString);
/*********************trim********************* */
const newStringOne = "  Biswajit    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim function is used to traim extra space and create it proper format

const url="https://biswajitdey.com//biswajit%20dey"
console.log(url.replace('%20','-'));// replace => "%20" with => "-"

console.log(url.includes("biswajit")); //it return true

console.log(gameName.split('-'));





