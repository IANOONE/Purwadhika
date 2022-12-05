

// exp recursion function


function tampilAngka(n){
    
    // this is base case
    // to stop recursion function from looping
    if(n===0){
        // return berfungsi untuk stopping the function 
        return
    }
    
    console.log(n);
    tampilAngka(n-1)
}
tampilAngka(10)


function faktorial(n){
    if(n=== 0) return 1
    
    return n * faktorial(n-1); 
    
}
console.log(faktorial(3))


// semua looping bisa dibuat rekursif tapi tidak sebaliknya






function fibonacci(num){
    if(num < 2){
        return num
    }

    else{
        return fibonacci(num -1) + fibonacci(num -2)
    }
}

var tes = 5

if( 5 <= 0){
    console.log('Enter a positif integer');
} else{
    for(let i = 0 ; i < tes ; i++){
        console.log(fibonacci(i));
    }
}

