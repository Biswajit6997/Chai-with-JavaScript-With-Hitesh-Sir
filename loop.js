//loop/iteration  in js

for(let i=0;i<=10;i++){
    const element =i;
    if(element==5){
        // console.log("5 is the best number");
        
    }
        // console.log(element);
}


for(let i=1;i<=10;i++){
    console.log(`Table of ${i} is:`);
    for(let j=1;j<=10;j++){
       console.log(`${i} "*" ${j} =" `, i*j);
    }
}


for (let index = 0; index <=20; index++) {

    if(index==5){
    console.log("Detected 5");
    break
    }
    console.log("value of i is" ,index);
    
}