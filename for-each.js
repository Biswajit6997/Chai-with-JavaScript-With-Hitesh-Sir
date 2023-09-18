//for-each loop in js
const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (val1){//1st one
    console.log(val1);// js ruby java python cpp
})
 
coding.forEach((item) =>{//2nd one
    console.log(item); // js ruby java python cpp
})

//1st one and 2nd one syntax are same 

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);/*js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                  ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                  java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                  python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                  cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/
})

const myCoding =[{
    languagenaME:"JavaSript",
    languageFileName :"js"
},
{
    languagenaME:"Java",
    languageFileName :"java"
},
{
    languagenaME:"python",
    languageFileName :"py"
}

]

myCoding.forEach((item) =>
{
    console.log(item. languagenaME);
    // console.log(item.languageFileName);
})
