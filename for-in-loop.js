// /for-in-loop in js?


const myobj ={
    JS:"javascript",
    CPP:"C++",
    PY:"python",
    RB:"RUby"

}
for(const key in myobj){
    console.log(`${key} is shortcut is for ${myobj[key]}`);
}


/******************************* */
const programing=["js","rb","py","java","cpp"]
for(const key in programing){
    console.log(key);//0 1 2 3 4 
    console.log(programing[key]);}
                                     //   0
                                    //   js
                                    //   1
                                    //   rb
                                    //   2
                                    //   py
                                    //   3
                                    //   java
                                    //   4
                                    //   cpp

 