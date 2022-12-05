// display the multiplication table of a given integer
let output = parseInt(5)
let range = parseInt(10)

for (let i = 1; i <= range; i++) {
    let result = output * i
    console.log(`${i}.` + ` ${output} * ${i} = ${result}  \n`);
}


// check whether a string is a palindrome or not

let str = "Race Car"

let reg = /[\W_]/g

let smallStr = str.toLocaleLowerCase().replace(reg, "")


reverse = smallStr.split("").reverse().join("")

console.log(reverse);


if (reverse == smallStr) {
    console.log(`${str} is a palindrome`)
} else {
    console.log(`${str} not a palindrome`)
}

// convert centimeter to kilometer
let centimeter = parseInt("5000 cm")
let kilometer = centimeter / 1000

console.log(`${kilometer} km`);


// code to format number as currency (IDR)
let modal = "1000"
let idr = ""

for (let i = modal.length - 1, j = 1; i >= 0; i--, j++) {
    idr = modal[i] + idr;
    if (j % 3 == 0 && i != 0) {
        idr = "." + idr;
    }
}
result = "Rp. " + idr + ",00"
console.log(result);


// code to remove the first occurence of a given "search string" from a string
let text = "hello world"
let search = "ell"

result = text.replace(search, "")

console.log(`search string ${search} -> ${result}`);


// code to capitalize the first letter of each word in a string
let msg = "Day Three Purwadhika Batam Indonesia"
const word = msg.split(" ");

for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1)
}

console.log(word.join(" "));


// reverse string
text = "purwadhika"
reverse = text.split("").reverse().join("")
console.log(reverse);