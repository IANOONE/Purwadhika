// created object

// Object literal
var mhs1 = {
    nama: 'udinese asasas',
    nrp: '074383923',
    email: 'udinesder@gmail.com',
    jurusan: 'teknik informatika'
}

// function declaration object
function mahasiswa (nama, nrp, email, jurusan)
{
    // should have declaration
    var mhs = {}    

    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email
    mhs.jurusan = jurusan
// should have return
    return mhs
}


var mhs = mahasiswa('alexander', '032213208', 'alexander@gmail.com','teknik informatika')

console.log(mhs);


// constructor

function Mahasiswa (nama, nrp, email, jurusan){

    this.nama = nama
    this.nrp = nrp
    this.email = email
    this.jurusan = jurusan

}

// should using new 
mhs3 = new Mahasiswa('sebats', '6969696969' , 'sebats.gmail.com', 'teknik informatika')

console.log(mhs3);

// this 

function halo(){
    console.log(this);
}

halo()

// function declaration using this
var obj = {a: 10, nama : 'Brilian'}
obj.halo = function(){
    console.log(this);
    console.log('halo');
}


obj.halo()


// constructor
function Halo(){
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo()





// 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies: ['music', 'movies','sports'],
    address: {
        street : '50 main st',
        city:'Boston',
        state: 'MA'
    }
}

console.log(person.firstName);


// destructuring // new in js es6 
const { firstName, hobbies, address: {city} } = person

console.log(city);


// object literals
const todos = [{
    id: 1,
    text : 'test 1',
    isComplete: true 
},
{
    id: 2,
    text : 'test 2',
    isComplete: true 
},
{
    id: 3,
    text : 'test 3',
    isComplete: false  
}
]


console.log(todos);
console.log(todos[1].text);

// json convert
const todoJson = JSON.stringify(todos)
console.log(todoJson);