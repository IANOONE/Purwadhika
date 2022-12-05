//object constructer
var Student = new Object();


//literal
var student = {
    name : "Bobby" ,


    // we can also create a method using the property of object
    greeting() {
        console.log("Hello");
    }, 

    // another exp to declare a method or function
    greeting2 : () =>{
        console.log("Hello2");
    }
}
console.log(student);

//add property 
student.age = 20;
console.log(student);

// delete property
delete student.name
console.log(student);

// calling the method property
student.greeting();
student.greeting2();


// if you delete the property, it will not found it again in the object
console.log(student.name);

// calling the property
console.log(student.age);
// another exp to call the property
console.log(student["age"]);
// added new property
console.log(student.name = "jordan")
console.log(student);

//tidak dapat mengaccess sebuah property dari data yang undefined
console.log(student.family?.totalFamily);

// added property in property
student.family = {
    totalFamily : 100
}

console.log(student.family);
console.log(student.family .totalFamily);

//object keys = checking object's properties
//keys merupakan sebuah kumpulan properties (array)

// it show the property name in object
console.log(Object.keys(student));
// it call the index of property
console.log(Object.keys(student)[0]);


// looping to access all property of object
for(let key in student) {
    console.log(key);
    console.log(student[key]);
}



const student2 = {
    firstName : "Jordan",
    lastName : "Ong",

    greeting() { 
        return this.firstName + " " + this.lastName
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }, 

    set fullName(values) {
        const arrName = values.split(" ")
        this.firstName = arrName[0]
        this.lastName = arrName[1]
    },

}

// call method 
console.log(student2.fullName);

// call method set change values
student2.fullName =  "John D"
console.log(student2.fullName);

// call property of object
console.log(student2.firstName);
console.log(student2.lastName);


//destructuring

// property name           // object name
let {firstName,lastName} = student2
// the property becomes variable 
console.log(firstName);

// when we reassigned the variable, it not changes the object
firstName = "jordan";
// it only reassigned the variable
console.log(firstName);

// we're not destroy the object when we destructuring object
console.log(student2);


// spread object

let obj1 = { 
    name : "jordan", 
    age : 26
}

let obj2 = {
    name: "bobby"
}

const data1 = [1,2,3]
const data2 = [4,5,6]
const data3 = [data1,data2]// [ [1,2,3], [4,5,6] ]
const data4 = [...data1,...data2]
const data5 = [data1,...data2] //[ [1,2,3], 4,5,6 ]
const data6 = [...data1,student2]
const data7 = {...obj1,...obj2}


 console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);
console.log(data7);


const person = {
    firstName : "Jordan", 
    lastName : "Ong", 
    greeting() {
        console.log("Hello " + this.firstName );
    }
}

person.greeting();

//class

//
const User2 = class {
    greeting() {
        console.log("Hello")
    }
}

//declaration
class User {
    firstName = ""
    lastName = ""
    
    //private
    #email = ""

    age = 20

    constructor(firstname = "", lastname = "" , email = "" ) {
        this.firstName = firstname
        this.lastName = lastname
        this.#email = email
    }

    getEmail() {
        return this.#email
    }

    greeting() {
        console.log("Hello from class")
    }
}
let objUser = new User();
console.log(objUser.firstName);

let objUser2 = new User("Jordan", "Ong", "jordan@mail.com")
console.log(objUser2.firstName);
console.log(objUser2.lastName);
console.log(objUser2.age);
console.log(objUser2.getEmail())
console.log(objUser2);


//get,set, properties , method semua dipanggil setelah sebuah class menjadi object

//constructure dipanggil pada saat class dipanggil .


let student_1 = new User("student a", "nama belakang student a", "studenta@mail.com")
let student_2 = new User("student b", "nama belakang student b", "studentb@mail.com")


console.log(student_1);
console.log(student_2);

class Employee {
    #employeeAge = 0

    constructor(name,age) {
        this.employeeName = name
        this.#employeeAge = age
    }


    //read-only
    getEmployeeAge() { 
        return this.#employeeAge
    }

    setEmployeeAge(age) {
        this.#employeeAge = age
    }

    setEmployeeName(name) {
        if(typeof(name) != "string")
        {
            throw new Error("bukan string")
        }
        this.employeeName = name
    }


}

const em1 = new Employee("jordan",26)
em1.setEmployeeAge(20)
console.log(em1.getEmployeeAge())
em1.employeeName = "bobby"
console.log(em1.employeeName);

em1.setEmployeeName("jordan")

console.log(em1);



class Product {

    #berat
    constructor() {
        this.productName 
        this.price
    }

    getProductName() {
        return this.productName
    }

    setProductName(productName) {
        this.productName = productName
    }

    getBerat() {
        return this.#berat
    }

    setBerat(berat) {
        this.#berat = berat
    }

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }
}

class Book extends Product { 
    constructor() {
        // this.productName 
        // this.price
        super();
        this.author
    }

    getAuthor() {
        return this.author
    }

    setAuthor(author) {
        this.author = author
    }
}

const buku = new Book();
buku.setAuthor("john")
buku.setProductName("Buku Bajak Laut")
buku.setPrice(50000)
buku.setBerat(10)
console.log(buku.getBerat());


console.log(buku);

console.log(buku instanceof Book); //obj buku merupakan hasil dari template class Book
console.log(buku instanceof Product); //obj buku merupakan hasil dari template class Product
console.log(buku instanceof Employee);



class generateCode {
    #code = ""  //private  
    name = ""
    constructor (codePrefix = "", name){
        const randomNumber = Math.round(Math.random() * 1000)
        this.#code = `${codePrefix}${randomNumber.toString().padStart(6,"0")}`
        this.name = name
        }

     getCode() {
        return this.#code
     }   
}

class Student2 extends generateCode { 
    constructor(name) {
        if(typeof(name) != "string") {
            throw new Error("error")
        }
        super("STD",name);
        this.myFunc()
    }

    myFunc() {
        console.log("hello");
    }
}

const s = new Student2("jordan")
console.log(s.getCode());
console.log(s.name);

class Employee2 extends generateCode {
    constructor() {
        super("EMP")
    }
}

const e = new Employee2()
console.log(e.getCode());






