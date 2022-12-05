// FUNCTION DECLARATION


// function boleh pake return atau enggak
function countCube(){
    let res =0 
    
    // arguments akan menampung seluruh parameter meskipun tidak di declare terlebih dahulu  
    for(let i = 0; i < arguments.length; i++){
        
        res += arguments[i]**3
    }
    return res
}
console.log(countCube(1,2,3));

function countTwoCube(s1,s2){    
    // arguments menampung seluruh parameter yang di declare dan yang tidak di declare secara keseluruhan
    console.log(arguments);
    
    return (s1 * s1 * s1)+(s2*s2*s2)
}
console.log(countTwoCube(5,7,9));



// FUNCTION EXPRESSION

var namaFunction = function (parameter){
    // 
    console.log('halo ' + parameter )
}

namaFunction("asas")