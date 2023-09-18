//scope in js vedio 22


function one(){
    const username="biswajit"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);// here error beasue here outside the function

    two()

}
one()


/*************************************************** */
if(true){
    const username="biswajit"
   if (username==="biswajit") {
    const website=" youtibe"
    console.log(username +website);
   } 
}