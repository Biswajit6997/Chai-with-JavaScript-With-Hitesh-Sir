//higher -order array loops in java 
  

//for-of loop in js

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}


const greting ="Hello Baccho"
for(const greet of greting)
  {
    console.log(`Each Cahr is ${greet}`);
  }

  /************** Map ********/
  const map =new Map()
  map.set('In',"India")
  map.set('USA',"United State Of America")
  map.set('FR',"France")
  map.set('In',"India")
  console.log(map);//'In' => 'India',
                     //'USA' => 'United State Of America',
                    //'FR' => 'France'
                    //map() function does not returns duplicate value

                    
  for(const [key,value] of map){
    console.log(key ,':-', value);
  }