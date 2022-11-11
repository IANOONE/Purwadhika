// convert celsius to fahrenheit

let c = 20
let f = (9 / 5 * c + 32)

console.log(f + " Fahrenheit");


// check whether the number is odd or even
let whether = 2;

if (whether % 2 == 0) {
    console.log("whether the number is odd")
} else {
    console.log("whether the number is even")
}

// check whether the number is prime number or not

let number = 5

let prime = true

if (number == 0 || number == 1) prime = false

for (let i = 2; i <= number / 2; ++i) {
    if (number % i == 0) {
        prime = false
        break
    }
}

prime ? console.log(number + " is a prime number") :
    console.log(number + " is not a prime number")


// find sum of the number 1 to N
// exp: 5 -> 1 + 2 + 3 + 4 + 5 = 15

let sum = 0
let text = `${number} -> `

for (let i = 1; i <= number; i++) {
    i == 1 ? text += `${i}` :
        text += ` + ${i}`

    sum += i
}
console.log(text + " = " + sum);


// find factorial number

let factorial = 1
text = `${number} -> `

for (let i = 1; i <= number; i++) {
    i == 1 ? text += `${i}` :
        text += ` * ${i}`

    factorial = factorial * i
}

console.log("the Factorial from " + `${text} = ${factorial}`);

// print the first N fibonacci numbers
// problem : give a number 'n', find the first 'n' elements of the fibonacci sequence


// in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two precending ones
// the first of two numbers in the sequence are 0 and 1

let temp1 = 0,
    temp2 = 1,
    temp3 = 0

number = 3

text = `${number} number(s) of fibonnaci : ${temp1}, ${temp2}`


for (let i = 2; i < number; i++) {
    temp3 = temp1 + temp2
    text += `, ${temp3}`
    temp1 = temp2
    temp2 = temp3
}

console.log(text);


// input total loop
text = ""
number = 10
for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        text += ` FuzzBuzz `
    } else if (i % 5 === 0) {
        text += ` Fuzz `
    } else if (i % 3 === 0) {
        text += ` Buzz `
    } else {
        text += `${i} `
            // console.log(i);
    }
}
console.log(text);


// find bmi
let gender = "men";
let height = 175
let weight = 70;

let bmi = 0;

if (gender == "men") {
    bmi = (height - 100) - ((height - 100) * 10 / 100)
    if (weight > bmi) {
        console.log("you're overweight");
    } else if (weight > bmi) {
        console.log("you're underweight");
    } else {
        console.log("you're have ideal weight");
    }
    if (weight != bmi) {
        console.log("you're men with height " + height + "cm, your ideal weight is " + bmi + " kg");
    }
} else if (gender == "women") {
    bmi = (height - 100) - ((height - 100) * 15 / 100)
    if (weight > bmi) {
        console.log("you're overweight");
    } else if (weight > bmi) {
        console.log("you're underweight");
    } else {
        console.log("you're have ideal weight");
    }
    if (weight != bmi) {
        console.log("you're women with height " + height + "cm, your ideal weight is " + bmi + " kg");
    }
} else {
    console.log("not found");
}