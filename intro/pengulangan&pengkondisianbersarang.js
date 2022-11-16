var s = ""

// for (var i = 0; i < 10; i++) {

// looping for creating string in a row
// for (var j = 0; j < 5; j++) {
//     s += "*"
// }

// looping for creating new line
//     s += "\n"
// }

// for (var i = 10; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         s += "*"
//     }

//     s += "\n"
// }

// console.log(s);



let n = 5, // row or column count
    // defining an empty string
    string = ""

// for (let i = 0; i < n; i++) {

//     //external loop
//     for (let j = 0; j < n; j++) {
//         // internal loop
//         if (i === 0 || i === n - 1) {
//             string += "*"
//         } else {
//             if (j === 0 || j === n - 1) {
//                 string += "*"
//             } else {
//                 string += " "
//             }
//         }
//     }
//     // new line after each row
//     string += "\n"
// }



for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            string += "*"
        } else {
            if (j === 0 || j === n - 1) {
                string += "*"
            } else {
                string += " "
            }
        }
    }

    string += "\n"
}
console.log(string);