// create function to convert time

// format input 00:00:00PM to 00:00:00

const timeInput = "01:05:45PM"

function timeConversion(s) {

let getHour = s.split("").splice(0,8).join("")
let getTime = s.split("").splice(8).join("")


// check hour
getHour = getHour.split(":")
console.log(getHour);

if(getTime == "PM"){
    if(getHour[0] < 12 ){
        getHour[0] = (parseInt(getHour[0]) + 12).toString()              
    }
    return getHour.join(":")
    
} else if(getTime == "AM"){
    if(getHour[0] > 12 ){
        getHour[0] = (parseInt(getHour[0]) - 12).toString()              
        getHour[0] = "0" + getHour[0]
    }
    return getHour.join(":")
} 

}


console.log(timeConversion("07:05:45PM"));





function catAndMouse(x, y, z) {
    let dist1 = Math.abs(z - x),
        dist2 = Math.abs(y - z);

    if (dist1 === dist2) {
        return 'Mouse C';
    }

    if (dist1 < dist2) {
        return 'Cat A';
    }

    if (dist1 > dist2) {
        return 'Cat B';
    }
}

console.log(catAndMouse(3,5,4));


function beautifulDays(i, j, k) {
    // Write your code here
    let count = i;
    let result = 0;
    while (count <= j) {
      let convertNumber = parseInt(count.toString().split("").reverse().join(""));
      console.log(convertNumber);

      let beautifulDay = Math.abs(count - convertNumber);
      console.log(beautifulDay);
      
      if (beautifulDay % k === 0) {
         console.log( beautifulDay)
          result++;
          console.log(result);
        }
        
        count++;
        console.log(count);
    }
    return result;
  }

  console.log(beautifulDays(13,45,3));






















