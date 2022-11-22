// area of rectangle

// Pxl

// DECLARE VARIABLE

var p = 5;

var l = 3;

const rectangle = p * l;

console.log(rectangle);

// perimeter of rectangle
var pp = 2 * p;
var pl = 2 * l;

const perimeter = pp + pl

console.log(perimeter);


// circle
var phi = 3.14
var r = 7
var d = r * 2


// diameter of circle
const diameter = d

// circumference of circle
const circumference = 2 * phi * r

// area of circle
const area = phi * r * r


console.log(diameter);
console.log(circumference);
console.log(area);


// triangle
var totalAngles = 180;
var a = 60;
var b = 45;
let c = null;

c = totalAngles - a - b;

console.log(c);


// difference between dates in days


// declare two dates 
var a = new Date("06/11/2021");
var b = new Date("06/11/2022");


// convert date to milisecons
a = a.getTime()

b = b.getTime()


// differrent between two dates
var differenceTime = b - a;

console.log(differenceTime);
var differenceDays = differenceTime / (1000 * 3600 * 24);

console.log(differenceDays);





// convert days to years, months, and days
var modal = 500

var year = Math.floor(modal / 365)

var month = Math.floor(modal % 365 / 30)
var day = modal % 365 % 30

const result = year + " year " + month + " month " + day + " days"

console.log(result);


var modals = 15 % 365 / 30

console.log(modals);