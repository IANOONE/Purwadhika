// 2 strings s & t

// build a method

// return if t is an anagram of s, and false otherwise


let t = "anagram"
let s = "nagaram"


let arrString1 = t.split("")
let arrString2 = s.split("")

let result = arrString1.length == arrString2.length ? true : false

console.log(result)
;
let resultComp = ""

if(result){
resultComp = arrString1.filter((val)=>{
return arrString2.includes(val)})

if(resultComp.length > 0){
    result = true
} else {
    result = false
}
} 
console.log(result);


let temp1 = 1,
    temp2 = 1,
    temp3 = 0

number = 5

// 
text = `${number} number(s) of fibonnaci : ${temp1}, ${temp2}`


for (let i = 2; i < number + 1; i++) {
    temp3 = temp1 + temp2
    text += `, ${temp3}`
    temp1 = temp2
    temp2 = temp3
}

console.log(text);




let num = 3,
num1 = 1,
num2= 1,
num3 

result = `explanation are ${num} ways to climb to the top \n # ${num1}step + ${num2}step
`


for(let i = 2; i < num + 1; i++){
    num3 = num1 + num2
    num1 = num2
    num2 = num3  
    result += `\n# ${num3}step`
}

console.log(result);



