// Example 1

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// document.write(a,b,c,d)


// Example 2

// for(var i = 0; i <= 10; i++){
//     document.write(i+"<br>")
// }


// Example 3

// for(var i = 0; i <= 5000; i++){
//     document.write(i+"<br>")
// }


// Example 4

// for(var i = 1; i <= 20; i++){
//     document.write(i+") Naima Ahmad"+"<br>")
// }


// Example 5

// document.write("2"+" "+"x"+" "+"1"+" "+"="+" "+2*1+"<br>")
// document.write("2"+" "+"x"+" "+"2"+" "+"="+" "+2*2+"<br>")
// document.write("2"+" "+"x"+" "+"3"+" "+"="+" "+2*3+"<br>")
// document.write("2"+" "+"x"+" "+"4"+" "+"="+" "+2*4+"<br>")
// document.write("2"+" "+"x"+" "+"5"+" "+"="+" "+2*5+"<br>")
// document.write("2"+" "+"x"+" "+"6"+" "+"="+" "+2*6+"<br>")
// document.write("2"+" "+"x"+" "+"7"+" "+"="+" "+2*7+"<br>")
// document.write("2"+" "+"x"+" "+"8"+" "+"="+" "+2*8+"<br>")
// document.write("2"+" "+"x"+" "+"9"+" "+"="+" "+2*9+"<br>")
// document.write("2"+" "+"x"+" "+"10"+" "+"="+" "+2*10+"<br>")


// Example 6

// for(var i=1; i<=10; i++){
//     document.write(2+" x "+i+" = "+2*i+"<br>")
// }


// Example 7

// for(var i=1; i<=20; i++){
//     document.write(2+" x "+i+" = "+2*i+"<br>")
// }


// Example 8

// for(var i=1; i<=10; i++){
//     document.write(896+" x "+i+" = "+896*i+"<br>")
// }


// Example 9

// var user = +prompt("Enter your Number")
// for (var i=1; i<=10; i++){
//     document.write(user+" x "+i+" = "+user*i+"<br>")
// }


// Example 10

var a = +prompt("Enter first Number :")
var b = +prompt("Enter second Number :")
var c = prompt("Enter Operator")

if(c === "+"){
    document.write(a+b)
}
else if (c === "-"){
    document.write(a-b)
}
else if (c === "/"){
    document.write(a/b)
}
else if (c === "*"){
    document.write(a*b)
}