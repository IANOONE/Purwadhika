const objUser = {
    username: "UserTest",
    password: "123",
    email : "test123@gmail.com",
    intro : function (){
        return [
            "email saya " + this.email + " password saya " + this.password, "hello bandung",
        ];
    },
};


console.log(objUser.intro()[1]);


// 

let xx ="1234567"
let yy ="12,34,56,7"
let res = 0



function compare(a,b){
    console.log(a + b);
}

do {
    compare(xx.length, yy.length) // 17 18 19
    xx += 3
    console.log(xx);
    
    
    
    console.log(xx.length);
    console.log(yy.length);
} while (xx.length < yy.length)
// 

let arr = [1,2,3,4,5,6,7,8,9,10]

let a = arr.map((el) => Math.round(el))
let b = arr.forEach((el) => { Math.ceil(el)})

let c = arr.filter((el)=> {
    el < 3
})


// console.log(a);
// console.log(b);
console.log(c);



console.log(Math.ceil([1,2,3,4,5]));
// 

let number = 89 + 43 + 65 - 23 + 93 * 23 + 8

// not change 
number - 0.5
console.log(number);
// not change
number * 300
console.log(number);
// number - 1
number--
console.log(number);

// 

let str = "1234"
let count = 1
let x = 0

while (x < str.length){
    x = parseInt(str.charAt(x))
    console.log(x)
    count++
    console.log(count)
    x++
    console.log(x)
}
console.log(count + x);

// 

let qty = "3"
if (!isNaN(parseInt(qty.match(/^-?\d+$/))))
{
//task
console.log("ini bukan number")
}

// 

arr = [
    "5",
    [["2.7",[false]]],
true,
"false",
0.5,
[[9],0.3,[NaN, undefined, "true"]],
null, "0", undefined
]

console.log(Boolean(arr[1][2]));
console.log(Boolean(arr[5][0]));
console.log(Boolean(arr[1][2]) + Boolean(arr[5][0]));

console.log(Boolean(NaN));

// 

console.log(typeof console.log());

// 

str = "apel buah manis".split("")
console.log(str); 
b = "jeruk adalah kesukaanku"

res = ""
str.forEach((a) => {
    if(a == "h")
    res += `
    ${b.split()}`
})
console.log(res);


