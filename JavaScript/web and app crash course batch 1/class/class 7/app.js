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

var user = prompt("Enter your Language")
var arr = ['Saraiki','Baloch','Punjabi','Urdu','Pushto']
var a = user.slice(0,1)
var b = user.slice(1)
var c = a.toUpperCase() + b.toLowerCase()

for(var i = 0; i< arr.length; i++){
    if(arr[i] === c){
        document.write("mil gaya")
    }
    // else{
    //     document.write("")
    // }
}
