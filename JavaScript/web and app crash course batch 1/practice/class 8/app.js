var xyz = prompt("Enter your birth date :")
var abc = new Date(xyz);
var dob = abc.getTime()
var today = new Date ();
var efg = today.getTime();
var diff = efg - dob;
var age = Math.floor(diff / (1000*60*60*24*30*12));

document.write(age)