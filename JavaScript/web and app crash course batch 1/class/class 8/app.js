// Example 1

// var abc = new Date();
// document.write(abc);


// Example 2

// var abc = new Date();
// var b = abc.toString();
// var c = b.slice(0,3);
// document.write(c)


// Example 3

// var abc = new Date();
// var b = abc.toString();
// var c = b.slice(0,6);
// document.write(c)


// Example 4

// var abc = new Date();
// var b = abc.toString();
// var c = b.slice(0,7);
// document.write(c)


// Example 5

// var a = new Date();
// var b = a.getDay();
// document.write(b)


// Example 5

// var a = new Date();
// var b = a.getTime();
// document.write(b);


// Example 6

// Age Calculator

// var dob = new Date("6 sep, 2011");
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// document.write(diff)


// Example 7

// Age Calculator

// var dob = new Date("6 sep, 2011");
// var dobmili = dob.getFullYear()
// var today = new Date();
// var todaymili = today.getFullYear()
// var diff = todaymili - dobmili;
// document.write(diff)


// Example 8

// Age Calculator

// var dob = new Date("6 sep, 2011");
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var age = Math.floor(diff / (1000*60*60*24*30*12));
// document.write(age)


// Example 9

// Age Calculator
var xyz = prompt("Enter your birth date :")
var dob = new Date(xyz);
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var age = Math.floor(diff / (1000*60*60*24*30*12));
document.write(age);