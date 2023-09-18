//how does javascript execute code + call stack


function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}

one()
two()
three()