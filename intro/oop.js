// before ecmaScript6


// constructor function harus diawali huruf kapital like this
// you can add parameter, or not [Optional]
// function Person(firstName, lastName) {


// added property using 'this'
//     this.firstName = firstName
//     this.lastName = lastName

//     // method in constructor function
//     this.sayHello = function(name) {
//         console.info(`Hello ${name}, my name is ${this.firstName}`);
//     }
// }

// make an object
// const eko = new Person("Eko", "Nomi")
// eko.sayHello("Joko")


// const budi = new Person("Budi", "Budian")
// budi.sayHello("Joko")

// console.log(eko);
// console.log(budi);




// CONSTRUCTOR INHERITANCE


// inheritance means the property from another constructor will be copied to one constructor

// function Employee(firstName) {
//     this.firstName = firstName
//     this.sayHello = function(name) {
//         console.info(`Hi ${name}, my name is ${this.firstName}`)
//     }
// }

// too call another constructor, we can user NamaConstructor.call(this,parameter)

// function Manager(firstName, lastName) {
//     Employee.call(this, firstName)
//     this.lastName = lastName
// }


// const eko = new Manager("Eko", "Nomi")

// console.info(eko)




// PROTOTYPE INHERITANCE
//  when we created constructor function, that will automatically have the prototype
// when we created object instance, the object will be inheritance from constructor.prototype

// too access prototype some instance , we can use __proto__

// function Person(firstName, lastName) {


//     this.firstName = firstName
//     this.lastName = lastName

//     // method in constructor function
//     this.sayHello = function(name) {
//         console.info(`Hello ${name}, my name is ${this.firstName}`);
//     }
// }


// added new property with prototype 
// it will automatically added new property too prototype in instance object

// Person.prototype.sayBye = function() {
//     console.info("Good Bye")
// }

// Person.prototype.run = function() {
//     console.info(`${this.firstName} is running`)
// }

// access prototype from instance object
// when we accessing property in instance object, first it will check if the object have or not the property that we call, if have not, it will be checking at __proto__ (prototype), if have not, it will be checking at prototype yg lebih tinggi, dan begitu seterusnya, sampai berakhir di object prototype


// const eko = new Person("Eko", "Nomi")

// if we created this property
// this property will be call first because the property calling first is property in instance object after that property in prototype
// eko.sayBye = function() {
//     console.info("Sampai Jumpa")
// }


// const budi = new Person("Budi", "Budian")

// console.info(eko);
// console.info(budi);


// eko.sayBye()
// eko.run()

// PROTOTYPE INHERIT   

// function Employee(name) {
//     this.name = name
// }

// function Manager(name) {
//     this.name = name
// }

// Manager.prototype = Employee.prototype // salah

// Manager.prototype = Object.create(Employee.prototype)

// Manager.prototype.sayHello = function(name) {
//     console.info(`Hello ${name}, my name is Manager ${this.name}`)
// }
// Employee.prototype.sayHello = function(name) {
//     console.info(`Hello ${name}, my name is Employee ${this.name}`)
// }


// const employee = new Employee("Budi")
// employee.sayHello("Joko")

// const manager = new Manager("Eko")
// manager.sayHello("Nomi")


// console.info(employee)
// console.info(manager)


// not recommend create oop using prototype


// BEHIND OOP JS -> PROTOTYPE CONCEPT

// after es6
// class same like constructor function at es5


// class Person {


// constructor in class
// constructor(name) {

// property
// this.name = name

// if we do this the method will be added to instance object
// this.sayHello = function(name) {
//     console.info(`Hi ${name}, my name is ${this.name}`)
// }
// }

// creating method in class
// it will be added to prototype
// bcs in class better to add method to prototype than instance object 


//     sayHello(name) {
//         console.info(`Hi ${name}, my name is ${this.name}`)
//     }
// }
// const budi = new Person("Budi")
// console.info(budi)





// CLASS INHERITANCE
// only can have 1 class parent

// class Employee {

//     sayHello(name) {
//         console.info(`Hi ${name}, my name is employee ${this.name}`)
//     }
// }

// class Manager extends Employee {
// // sayHello(name) {
// //     console.info(`Hi ${name}, my name is manager ${this.name}`)
// // }
// }


// const lexa = new Employee()
// lexa.name = "lexa"
// lexa.sayHello("lexa")

// const alex = new Manager()
// alex.name = "alex"

// even if we not declare sayHello method in class manager, it still calling to the sayHello method in class employee
// alex.sayHello("alex")


// console.info(lexa)
// console.info(alex)



// SUPER CONSTRUCTOR 
// CONSTRUCTOR INHERITANCE ONLY MENGEKSEKUSI CONTRUSTOR LAIN DENGAN PURPOSE TO PROPERTY IN ANOTHER CONSTRUCTOR BISA DI TAMBAHKAN TO INSTANCE OBJECT INI 





// class Employee {

//     constructor(firstName) {
//         this.firstName = firstName
//     }

//     sayHello(name) {
//         console.info(`Hi ${name}, my name is employee ${this.firstName}`)
//     }
// }

// child class automatically have constructor, bcs its following the parent class

// class Manager extends Employee {

// if in child class we created constructor; we still must call constructor parent class, even in there cant have constructor
// constructor(firstName, lastName) {
// with using keyword super we can call super constructor class
//         super(firstName)
//         this.lastName = lastName

//     }
//     sayHello(name) {
//         console.info(`Hi ${name}, my name is manager ${this.firstName} ${this.lastName} `)
//     }
// }


// const lexa = new Employee("lexa")
// lexa.sayHello("Joko")

// const alex = new Manager("alex", "ander")
// alex.sayHello("Joko")



// SUPER METHOD

// We can use keyword super to create super method
// exp: super.themethod

// class Shape {
//     brush() {
//         console.info("Brush Shape")
//     }
// }

// class Circle extends Shape {
// paint() {

// call super method from the parent class
// super.brush() //calling paint() / method parent class
// console.info("Paint Circle")
//     }
// }

// const circle = new Circle()
// circle.paint()



// GETTER AND SETTER

// class supporting to created getter and setter
// getter and setter will be at prototype not at object instance

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

// get fullName() {
//     return `${this.firstName} ${this.lastName}`
// }

// set fullName(value) {
//     const result = value.split(" ")
//     this.firstName = result[0]
//     this.lastName = result[1]
// }
// }

// let alex = new Person("alex", "ander")
// alex.fullName = "Sebas ander"
// console.info(alex)



// PUBLIC CLASS FIELD 
// public can you access outside class

// class Customer {
// public field


// public property
//     firstName
//     lastName
//     balance = 0


//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     sayHello() {}

// }

// const tes = new Customer

// console.info(tes)


// PRIVATE CLASS FIELD
//  too create private function we should add "#" before field name 


// class Counter {

// we cant change the value of property outside class, if that public
//     #counter = 0

//     increment() {
//         this.#counter++
//     }

//     decrement() {
//         this.#counter--
//     }
//     get() {
//         return this.#counter
//     }
// }

// const counter = new Counter()
// counter.#counter = 100      // this property cant accessible
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()

// console.info(counter.get())
// counter.decrement()
// counter.decrement()
// console.info(counter.get())

// console.info(counter)

// PRIVATE METHOD

// class Person{
//     say(name){
//         name ? this.#sayWithName(name) : this.#sayWithoutName()
//     }
//     #sayWithoutName(){
//         console.info("Hello")
//     }
//     #sayWithName(name){
//         console.info(`Hello ${name}`)
//     }
// }

// const tes = new Person()


// tes.say()

// tes.#sayWithName           // this property cant accessible





// OPERATOR INSTANCEOF
// too check if the object is part of class instance or not

// if we check with typeof operator, bcs object is part of class, when use it, the result will be "OBJECT"

// instanceof operator will give a boolean result, true if the object is object instance or not



// class Employee{
    
// }
// class Manager extends Employee{}


// const alex = new Employee()
// const ander = new Manager()

// console.info(alex instanceof Employee)   //true
// console.info(ander instanceof Employee)  //false

// instanceof support too check inheritance class, it means it can check the object is instance of some class, or inheritance of some class

 


// STATIC CLASS FIELD
// static is the key that we can add before field or method, when we created method, the field automatically will be property in object instance and method will be a function in prototype
// when we add static, that willn't happen

// static we use when we want to create utility field or function
// we called static class field not often from object, but from class

// we can call static field have global nature 

// class Configuration {
//     static name = "Belajar Javascript Dasar"
//     static version = 1.0
//     static author = "Echo Kurniawan"    
// }


// if we add static in class field, the field automatically not belong object instance, but owned by class
// const config = new Configuration()
// console.info(config.name)


// like this
// console.info(Configuration.name) 

// change the value
// Configuration.author = "Echo Nomi"
// console.info(Configuration.author)

// STATIC METHOD

// class langsung calling method

// class MathUtil{

// static sum(...numbers){
//     let total = 0
//     for(const number of numbers){
//         total += number
//     }
//     return total
//     }
// }

// const result = MathUtil.sum(1,1,1,1,1)
// console.info(result)

// ERROR
// class ERROR is superclass for any type error in js

// throw error
// class MathUtil {
//     static sum(...numbers){
//         if(numbers.length === 0){
//             throw new Error(`Total Parameter Harus Lebih Dari 0`)
//         }

//         let result = 0
//         for(const number of numbers){
//             result += number
//         }

//         return result
//     }
// }

// if this statement give a result error, baris code berikutnya tidak akan di eksekusi lagi
// console.info(MathUtil.sum())
// console.info(MathUtil.sum(1,1,1,1,1))


// ERROR HANDLING

// on the block try, we try to run program code that will give an error, dan if error happens, block try will stop and then automatically run to block catch

// if error happens, block catch willn't run

// class MathUtil {
//     static sum(...numbers){
//         if(numbers.length === 0){
//             throw new Error(`Total Parameter Harus Lebih Dari 0`)
//         }
        
//         let result = 0
//         for(const number of numbers){
//             result += number
//         }
        
//         return result
//     }
// }

// when error happens only block try that stop running
// try{
//     console.info(MathUtil.sum())
//     console.info("Block Try Code Will Stop")
    
//     catch the error with class error
//     block catch only running when block try error
// } catch (error){
//     console.error(`Terjadi error : ${error.message}`)
// } finally{
//     block finally will execute after try and catch is done, even if error happens or not, block finally will always execute    
    
//     console.info(`Program Selesai`)
    
// }

// console.info(`Program Not Stop`)


// TRY FINALLY 

// class Counter{
//     #counter = 0

//     next(){
//     try{
//         return this.#counter
//     } finally{
//       this.#counter++
//     }
//     }
// }

// const tes =new Counter()
// console.info(tes.next())
// console.info(tes.next())
// console.info(tes.next())
// console.info(tes.next())

// CREATE MANUAL ERROR CLASS


// too create this, we just should inheritance class from error class
// class ValidationError extends Error{

// dont forget to add message parameter, so that it can be sent to parameter in constructor error class
//     constructor(message, field){
//         sent to message in error class
//         super(message)
//         this.field = field
//     }
// }


// class MathUtil {
//     static sum(...numbers){
//         if(numbers.length === 0){
//             if we create manual error class we can added another information
//             exp in bottom we added field information
//             throw new ValidationError(`Total Parameter Harus Lebih Dari 0`,`numbers`)
//         }

//         let result = 0
//         for(const number of numbers){
//             result += number
//         }

//         return result
//     }
// }

// try{
//     console.info(MathUtil.sum())
//     console.info("Block Try Code Will Stop")

// } catch (error){

// if the error is validation error
//     if(error instanceof ValidationError){
// console.error(`Terjadi Error di Field ${error.field} dengan Error ${error.message}`)
// }else{
//    console.error(`Terjadi error : ${error.message}`)
// }
// } finally{ b
// console.info(`Program Selesai`)

// }
 
// console.info(`Program Not Stop`)

// ITERABLE AND ITERATOR

// iterable is object special that have standarisasi
