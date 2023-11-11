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
    var label = document.createElement('label')
    var textinsert = document.createTextNode(add.value)
    li.appendChild(textinsert)
    console.log(li)
    a.appendChild(li)
    add.value = null
    var del = document.createElement('button')
    var cd = document.createTextNode("Delete")
    del.appendChild(cd)
    label.appendChild(del)
    del.setAttribute('onclick','delitem(this)')
    del.setAttribute('class',' aib')
    var ed = document.createElement('button')
    var ei = document.createTextNode('Edit');
    ed.appendChild(ei)
    label.appendChild(ed)
    ed.setAttribute('onclick','edi(this)')
    ed.setAttribute('class','beauty')
    label.setAttribute('class','lab')
    li.appendChild(label)
}
function delitem(e){
    e.parentNode.remove()
}

function delall(){
    a.innerHTML = ''
}


function edi(e){
    var a = prompt("Enter value which you want to edit.",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}