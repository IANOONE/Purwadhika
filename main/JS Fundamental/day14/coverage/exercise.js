// function loop the number of times according to the input we provide
function fizzBuzz(n) {

    var text = ""

    // declare variable
    // variable smaller is equal to n
    // postfix increment
    for (let i = 1; i <= n; i++) {
        // if i habis di bagi 3 dan 5 variable text menampung FuzzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            text += ` FuzzBuzz `
                // if i habis di bagi 5 variable text menampung Fuzz
        } else if (i % 5 === 0) {
            text += ` Fuzz `
                // if i habis di bagi 3 variable text menampung Buzz
        } else if (i % 3 === 0) {
            text += ` Buzz `
        } else {
            //jika tidak semuanya maka variable text diisi oleh variable i
            text += `${i} `
            console.log(i);
        }
    }
    // mengembalikan / memanggil value text
    return text
}
var fizz = fizzBuzz(15)
console.log(typeof fizz);


// function to calculate BMI

function countBMI(weight, height) {
    // declare formula
    var formulaBMI = weight / (height ** 2)
    console.log(formulaBMI);
    // declare tampung message
    var msg = ""

    if (formulaBMI < 18.5) {
        // message diisi pesan
        msg += "less weight"
    } else if (formulaBMI >= 18.5 && formulaBMI <= 24.9) {
        msg += "ideal"
    } else if (formulaBMI >= 25.0 && formulaBMI <= 29.9) {
        msg += "overweight"
    } else if (formulaBMI >= 30.0 && formulaBMI <= 39.9) {
        msg += "very overweight"
    } else if (formulaBMI > 39.9) {
        msg += "obesity"
    } else {
        msg += "not found"
    }
    // mengembalikan function dengan pesan di dalam variable message
    return msg
}
console.log(countBMI(75, 1.75));

// function to split a string and convert it into an array of words

function toArray(string) {

    // declare variable yang berisi string yang sudah dipecah dan menjadi array
    var res = string.split(" ");

    return res
}
console.log(toArray("Hello World"));


// function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOdd(arrNumb) {

    var odds = arrNumb.filter(number => {
        return number % 2 === 0
    })

    return odds
}

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arrNumber.filter((val) => val % 2 == 0));

let res = ""
let counter = 1
let high = 4

for (let i = 1; i <= high; i++) {

    for (let j = 1; j <= i; j++) {

        if (counter <= 9) {
            res += `0${counter} `
            counter++

        } else {
            res += `${counter} `
            counter++
        }
    }
    res += "\n"
}
console.log(res);

module.exports = {fizzBuzz, toArray}