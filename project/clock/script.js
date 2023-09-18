const clock =document.getElementById('clock')
const date2=document.querySelector('#date')

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString()

},1000)

setInterval(function(){
    let date1=new Date();
   date2.innerHTML=date1.toLocaleDateString()
},1000)