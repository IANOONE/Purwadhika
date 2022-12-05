
// declare 2 object

const obj1 = {nama : "jordan", age: 25} 
const obj2 = {nama : "jordan2", age: 26,}

// create function with 2 params
const checkObj = (obj1, obj2) => {

    
    // condition where the length of property object 1 == object 2

if(Object.keys(obj1).length == Object.keys(obj2).length){

 // cek value of property object
 for(let key in obj1){
        
    console.log(key);
    console.log(obj1[key]);
}

}

} 

checkObj()

