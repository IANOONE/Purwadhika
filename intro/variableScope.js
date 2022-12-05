// JS menggunakan Function Scope

// this is global scope / window scope
var a = 1


// this is function scope
// variable that we declared in this function only work in the function, cannot calls in outside function



function tes (){
// if we reassigned the variable that we've been declared in the outside function we can call it from the outside
    a =2
// if we declare a new variable in the function we can't declare the variable from outside
    var b = 1
}

tes()
console.log(b);

