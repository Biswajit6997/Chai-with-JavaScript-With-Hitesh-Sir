// promises in JS

// async function getAlluser(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await responce.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:" ,error);
//     }
// }
// getAlluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))