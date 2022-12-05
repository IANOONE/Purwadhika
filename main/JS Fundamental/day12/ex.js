

// tampung value changes
const values = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
  /*....*/
]);


// console.log(values);
// create function
function romanToInt(string) {
    // property
  let result = 0,
    current, 
    previous = 0;


for (const char of string.split("").reverse()) {
    
// console.log(char);

current = values.get(char);

// console.log(current);
    
    if (current >= previous) {
        result += current;
    } else {
      result -= current;
    }
    previous = current;
    console.log(previous);
  }
  return result;
}
console.log(romanToInt('MCMXCIV'));

var arr = [7,6,4,3,1]

var res = 0
for(var i = 0; i < arr.length; i++ ){

  
}

function maxProfit (price){
  let max = 0,
  temp = 0

  for(let i = 0; i < price.length ; i++){


    for(let j = 0 ; j < price.length ; j++ ){


      if(!max){
        res =  temp[j] + price[i]
        console.log(res);
    } else {
      res =  temp[j] - price[i]        
      }

      max = temp
    }
  }
  return res
}
console.log(maxProfit([7,1,5,3,6,4])
);


