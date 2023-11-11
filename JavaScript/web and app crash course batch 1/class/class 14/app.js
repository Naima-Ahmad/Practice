// Example 1

// console.log(document.childNodes[1].childNodes[0].childNodes[0]);


// Exmaple 2

// function abc(){
//     var a = document.getElementById('hello')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }


// Exmaple 3

// function abc(){
//     var a = document.getElementById('hello')
//     var b = a.hasAttribute('class')
//     console.log(b)
// }


// Example 4

// function abc(){
//     var a = document.getElementById('hello')
//     var b = a.getAttribute('class')
//     console.log(b)
// }


// Example 5

// function abc(){
//     var a = document.getElementById('hello')
//     var b = a.setAttribute('class','chng')
// }


// Example 6

// var CE = document.createElement('p')
// var b = document.createTextNode('hello world')
// CE.appendChild(b)
// console.log(CE)


// Example 7

// function send(){
//     var a = document.getElementById('int');
//     var r = document.getElementById('bbb')
//     var c = document.createTextNode(a.value);
//     r.appendChild(c)
// }


// Example 8

var a = document.getElementById('abc')

function add(){
    var add = document.getElementById('addtodo')
    var li = document.createElement('li')
    var textinsert = document.createTextNode(add.value)
    li.appendChild(textinsert)
    console.log(li)
    a.appendChild(li)
    add.value = null
    var del = document.createElement('button')
    var cd = document.createTextNode("Delete")
    del.appendChild(cd)
    li.appendChild(del)
    del.setAttribute('onclick','delitem()')
}