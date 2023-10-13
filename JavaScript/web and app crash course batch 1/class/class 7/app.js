// Example 1

// var words = "Naima Ahmad";
// document.write(words.toUpperCase())


// Example 2

// var abc = "ABCDEFGH";
// document.write(abc.toLowerCase())


// Example 3
 
// var abc = "nAIMA";
// var a = abc.slice(0,1)
// document.write(a.toUpperCase())
// var b = abc.slice(1)
// var c = b.toLowerCase()
// document.write(c)


// Example 4

// var user = prompt("Enter your Language")
// var arr = ['Saraiki','Baloch','Punjabi','Urdu','Pushto']
// var a = user.slice(0,1)
// var b = user.slice(1)
// var c = a.toUpperCase() + b.toLowerCase()

// for(var i = 0; i< arr.length; i++){
//     if(arr[i] === c){
//         document.write("mil gaya")
//     }
//      else{
//          document.write("nahi mila")
//      }
// }


// Example 5

// Head Tail game

// var head = prompt("Enter head name");
// var tail = prompt("Enter tail name");
// var toss = Math.random()*2;
// var ksi = Math.floor(toss);

// if(ksi == 0){
//     document.write("head "+head+" wins")
// }
// else{
//     document.write("tail "+tail+" wins")
// }


// Example 6

// var a = "Mahnor"
// document.write(a.charAt(5))


// Example 7

// var abc = "ayesha agai first position pe";
// var b = abc.replace("ayesha","Naima");

// document.write(b)


// Example 8

// var a = "Hello world world";
// var c = a.replace("world","Universe")
// document.write(c)


// Example 9

var a = "Hello world world";
var c = a.replace(/world/g,"Universe")
document.write(c)