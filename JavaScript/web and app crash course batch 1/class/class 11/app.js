// Previous Class Revision
// Example 1

// function abc(){
//     alert("Hy! Naima")
// }


// Example 2

// function abc(a){
//     alert(a)
// }


// New Class
// Example 1

// function clickme(){
//     var a = document.getElementById("abc");
//     alert(a.value);
// }


// Example 2

// function clickme(){
//     var a = document.getElementById("abc");
//     document.write(a.value);
// }


// Example 3

// function clickme(){
//     var a = document.getElementById("abc");
//     alert(a.value);
//     a.value = '';
// }


// Exampel 4

// function showText(){
//     var a = document.getElementById("xyz");
//     a.innerHTML="Naima is a good girl. She is 12 year old.";
// }


// Example 5

// function more(){
//     var a = document.getElementById("readMore");
//     a.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, alias autem odit nihil corporis facilis aliquam aperiam. Doloremque sunt provident porro officiis aut, repellat expedita magni nemo quae quia. Nulla."
// }


// Example 6

// Calculator

function calc(a){
    var efg = document.getElementById('inpt');
    efg.value += a;
}

function result(){
    var h = document.getElementById("inpt");
    h.value = eval(h.value);
}

function clr(){
    var r = document.getElementById("inpt")
}