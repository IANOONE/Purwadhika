//  in js we can have different data type in array



// WITHOUT METHOD

// added array

var arr = ["a", 1, true]
var arr2 = new Array

arr2 = ["a", "b", "c"]
console.log(arr );


// call or showing the array

for(var i = 0 ; i < 3; i++){
    console.log(`Index number ${i} : ${arr[i]}`);
}


// WITH METHOD

// 1. join // make an array to string

arr2 = arr2.join("")
console.log(arr2);

// 2. push & pop // added & remove the last element of an array

arr.pop()
arr.push("123")
console.log(arr);

// 3. unshift & shift // added & remove the first element of an array

arr.shift()
arr.unshift("tes")
console.log(arr);




var arr = ["a", 1, true]
var arr2 = ["a", "b", "c"]


// 4. slice // menambahkan element di tengah array
// splice('nomorIndex', 'banyakIndexYgDihapus',elementTambahan)
arr.splice(2,0,'tesSplice', 'tesSplice2 ')
console.log(arr);

// 5. splice // cutting an array to make onother array  
// slice(indexAwal, indexAkhir)
var arr2 = arr.slice(1,3)
console.log(arr2);

// 6. forEach // memanggil setiap element yg ada di variable / tidak dapat mengembalikan array

var angka = [1,3,2,6,5,4,7]
var nama = ['udin','adin','edin','odin ']
 

angka.forEach(function(e){
    console.log(e);
})

nama.forEach(function(e,i){
    console.log(`Mahasis ke-`+ (i + 1) + ` adalah : ${e}`);
})

// 7. map // dapat mengembalikan array

var angka2 = angka.map(function(e){
    return e**2
})
console.log(angka2);

angka.sort()
console.log(angka);

// 8. filter // mengembalikan array

var filter = angka2.filter(function(x){
    return x > 10
})

console.log(filter);

// 9. find // mengembalikan hasil


var find = angka2.find(function(x){
    return x > 10
})
// it return 36 bcs that is the first found number more than 10 in array
console.log(find);

  

