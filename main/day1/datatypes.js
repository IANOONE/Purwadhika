// git
// clone => menarik source code dari online repo
// commit => changes locally (menyimpan perubahan)
// push => push terhadapat commit (mengirim hasil commit)
// fetch => refresh dari local terhadap online (mengetahui perubahan yg ada di online)
// pull => menarik hasil perubahan yg terjadi di online ke local

// fork => menyalin repository ke repository kita ; merubah repository orang lain melalui repository kita
// create pull request => repository edit melakukan request terhadap repository source
// agar terjadi perubahan di repository edit. masuk ke dalam repository source

console.log("hello world");
console.log("hello");


// 
let message;
// assign / isi
message = "HELLO";

// var
var a = "a";
var a = "b";
console.log(a);

// let
let b = "b"
b = "c"
console.log(b);


// const
const c = "c"



const world = "world";
const hello = "hello";
const hello_world = hello + world

console.log(hello_world);

// 



//template literal
let str = `string text baris 1
 string text baris 2`
console.log(str);


// embedded expression
const tes = `<h2>${hello} ${world}</h2>,
my name is Brilian`;

console.log(tes);

// expression interpolation 

a = 10;
b = 15;

console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah ${a+b}, bukan ${2*a+b}`);


// fragment html

const mhs = {
    nama: 'wardolahse',
    umur: 33,
    nrp: '3331233',
    email: 'rocketket@rocket.mail'
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`

document.body.innerHTML = el;