arr = ["hello", "this", "is", "purwadhika"]
console.log(arr);
console.log(arr.pop());
console.log(arr);



function myFunction(a, b = 2) {
    return a * b;
}

console.log(myFunction(1, 6));


function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }

}
countDown(3)