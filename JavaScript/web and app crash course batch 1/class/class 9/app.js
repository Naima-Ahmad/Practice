// Example 1

// for (var i = 0; i<= 10; i++){
//     document.write(i+"<br>")
// }


// Example 2

// nested loops

// var arr = ["Naima","Laiba","Hooriya"];
// var secarr = ["Ahmad","Ijaz"];

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j<secarr.length; j++){
//         document.write(arr[i]+" "+secarr[j]+"<br>")
//     }
// }


// Example 3

// for (var i = 0; i<4; i++){
//     for(var j=0; j<3; j++){
//         document.write("hello <br>")
//     }
// }


// Example 4

// for (var i = 0; i<4; i++){
//     document.write("Naima <br>")
//     for(var j=0; j<3; j++){
//         document.write("hello <br>")
//     }
// }


// Example 5


// functions

// function abc(){
//     document.write("Hello")
// }

// abc()


// Example 6

// function counting(){
//     for(var i=1; i  10; i++){
//         document.write(i + "<br>")
//     }
// }

// counting()


// Example 7

// function greet(abc){
//     alert(abc)
// }

// greet()


// Example 8

// function greet(abc){
//     alert(abc)
// }

// greet("Hello")


// Example 9

// function add(a,b){
//     alert(a+b)
// }

// add(2,3)


// Example 10

// function add(a,b){
//     alert(a+b)
// }

// add(2,3)
// add(4,5)


// Example 11

// function add(a,b){
//     alert(a+b)
// }

// add(2,3)
// add(4,5)
// add(78,30)


// Example 12

var num1 = +prompt("Enter First Number :")
var num2 = +prompt("Enter Second Number :")

function add(a="Please Enter",b=" a Number"){
    alert(a+b)
}

add(num1,num2)
