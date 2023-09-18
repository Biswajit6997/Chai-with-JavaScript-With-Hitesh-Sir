//immediately Invoked Function Expressions  (IIFE)


// function chai(){
//     console.log("DB connected");
// }
// chai()

(function chai(){
    console.log("DB connected");
} )() ;  // first () =>function defination and 2nd ()=> function execution


(   (name) => {
    console.log(`Db connected tWo ${name}`);
})("biswajit")
