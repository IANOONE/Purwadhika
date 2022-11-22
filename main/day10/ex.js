// store palindrome in variable
let palindrome = "R ace, car"
    // create array of alphabet
const arrAlpha = "abcdefghijklmnopqrstuvwxy".split("")
    // create variable to store reverse palindrome
let reversePalindrome = ""

// split palindrome letters into array
palindrome = palindrome.toLowerCase().split("")
    // filter palindrome array
palindrome = palindrome.filter((letter) => {
    // allow letter if letter is an aplphabet join palindrome arrau
    return arrAlpha.includes(letter)
})

// store reverse palindrome
reversePalindrome = palindrome.reverse()


// create string from reverse palindrome array
reversePalindrome = reversePalindrome.join("")
    // create string from palindrome array
palindrome = palindrome.join("")


// conditioning if the variable palindrome is a palindrome or not
if (palindrome == reversePalindrome) {
    console.log(`this word is a palindrome`);
} else {
    console.log(`this word not a palindrome`);
}