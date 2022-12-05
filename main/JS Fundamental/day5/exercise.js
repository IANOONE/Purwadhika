// Write a function to get the lowest, highest and average value in the array (with and without sort
//     function).



function sortAsc(n) {
    n.sort(function(a, b) { return a - b });
    return n
}
var modal = [40, 100, 1, 5, 25, 10]
    // highest
console.log(sortAsc(modal).slice(-1));
// or
console.log(Math.max(...modal));
// lowest
console.log(sortAsc(modal).slice(0, 1));
// or
console.log(Math.min(...modal));

// average
function getAverage(modal) {
    var total = 0
    var count = 0
    modal.forEach(function(item) {
        total += item
        count++
    })
    console.log(count);
    return total / count
}
console.log(getAverage(modal));


// function to split a string and convert it into an array words
function convertArr(n) {

    var res = n.split(" ")

    return res
}
var txt = "Hello World"
console.log(convertArr(txt));



// assume both of arrays are the same length
let counter = []

function countArr(a, b) {

    if (a.length == b.length)

        for (let i = 0; i < a.length; i++) {
        counter[i] = a[i] + b[i]
    }

    return counter
}

var a = [4, 5, 6]
var b = [3, 2, 1]
console.log(countArr(a, b));

// function adds an element to the end of an array. however, the element should only be added if it is not already in the array

function addArr(element, arr) {
    if (!arr.includes(element)) {
        arr.push(element)
        var res = arr
    } else {
        res = false
    }
    return res
}
console.log(addArr("Hello", ["Hello", "World"]));


// function to remove all odd numbers in an array and return a new array that contains even numbers only
function clearOod(arrNumb) {
    var result = arrNumb.filter(number => {
        return number % 2 === 0
    })

    return result
}
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(clearOod(numb));

// function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function convertToString(array) {
    return array.join(", ").replace(/, ([^,]*)$/, ' and $1')
}
var fruits = ["apple", "mango", "banana"]
console.log(convertToString(fruits));