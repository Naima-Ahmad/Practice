// Example 1

// function apcss(){
//     var a = document.getElementById('divmain').getElementsByTagName('p');
//     for(var i = 0; i<a.length; i++){
//         a[i].style.backgroundColor='gold'
//         a[i].style.color='yellow'
//         a[i].style.padding='5px'
//     }
// }


// Example 2

// setInterval(function(){
//     document.write("Naima Ahmad <br>")
// }, 1000)





// function foo(){
//     document.write("Naima ")
// }

// setInterval(foo, 1000)




// var a = 0;
// var interval ; 
// interval = setInterval(function(){
//     a++
//     console.log(a)
// },1000)

// clearInterval(interval)




// setTimeout(function(){
//     console.log("Naima")
// },2000)




// var a = 0;
// var interval;
// interval = setInterval(function(){
//     a++;
//     document.write(a+"<br>");
// },1000);

// setTimeout(function(){
//     clearInterval(interval);
// },5000)



var min = 0;
var sec = 0;
var msec = 0;
var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')
var interval;

function start(){
   interval = setInterval(function(){
        msec++;
        a.innerHTML = msec;
        if(msec >= 100){
            sec++;
            b.innerHTML = sec;
            msec = 0;
        }
        else if(sec >= 60){
            min++
            c.innerHTML = min;
            sec = 0;
        }
    }, 10)
    document.getElementById('first').disabled = true
}

function stop(){
    clearInterval(interval);
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    a.innerHTML = min
    b.innerHTML = sec
    c.innerHTML = msec
}