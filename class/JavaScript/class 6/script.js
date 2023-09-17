// Example 1

//function show() {
//    document.getElementById("p").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, perspiciatis. Earum, nam quibusdam. Expedita";
//}

// Example 2

// function showData(){
//     document.getElementById("abc").innerHTML = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, natus similique ipsa odit beatae blanditiis"
//     document.getElementById("read").style.display = "none"
//}

// Example 3

// function abcd(){
//   var a = document.getElementById("inp");
//   alert (a.value)
//   a.value = ""
// }

// calculator //

function sum(a){
    document.getElementById("inpt").value += a
}

function eq(){
    var a = document.getElementById("inpt");
    a.value = eval(a.value);
}

function clrall(){
     document.getElementById("inpt").value = " "
}


function clr(){
   document.getElementById("inpt").value.splice()
}
