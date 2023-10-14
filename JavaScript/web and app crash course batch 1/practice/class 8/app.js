var xyz = prompt("Enter your birth date :");
var dob = new Date(xyz);
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var sub = todaymili - dobmili;
var diff = sub/(1000*60*60*24*30*12)
document.write(Math.floor(diff)); 