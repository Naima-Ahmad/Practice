function abc(a){
    document.getElementById("inpt").value += a
}

 function eql(){
 var a = document.getElementById("inpt");
 a.value = eval(a.value);
 }

 function clrall(){
    var a = document.getElementById("inpt").value = " ";
}

function clr(){
    var a = document.getElementById("inpt")
    a.value = a.value.slice(0,-1);
}
   

   
  