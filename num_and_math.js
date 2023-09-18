//number and maths in javascript vedio number 12


const score=400
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));//100.0


const hundred=100000000
console.log(hundred.toLocaleString("en-IN"));// use to separate 00 with ,

/* ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++*/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.66)); //5
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9)); //4 hobe jotoi thake . por
console.log(Math.min(4,3,5,1,4,0));
console.log(Math.max(4,3,5,1,4,0));
//random change the value


console.log(Math.random());
console.log((Math.random()*10 )+1);
console.log((Math.random()*10 )+1);
console.log(Math.random());

const min =10
const max=20
console.log(Math.floor(Math.random() * (max -min +1)) +min  );



