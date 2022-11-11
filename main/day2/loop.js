// for loop statement

// step by step
// declare i = 0
// check condition in second statement i < 3
// execute third statement after condition

for (let i = 0; i < 3; i++) {
    console.log("this is " + i);
}

// while loop statement
let cond = true

while (cond) {
    console.log("this is while loop with condition " + cond);
    cond = false
}

// do while 
let number = 1
do {
    console.log("this is do while");
    number++
} while (number < 3)



// break

let value = 1

while (true) {
    if (value > 5) break;
    value++
    console.log("this is break");
}


// continue
value = 0;
while (true) {
    value++
    if (value == 2) {
        continue
    }
    if (value > 5) {
        break
    }
    console.log(value);
}