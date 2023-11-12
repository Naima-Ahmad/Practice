// Example 1

// var obj = {
//     name1 : 'Naima'
// }

// document.write(obj.name1)


// Example 2

// var obj = {
//     name1 : 'Naima',
//     age : 12
// }

// document.write(obj.age)


// Example 3

// var obj = {
//     name1 : 'Naima',
//     age : 12 ,
//     arr : ['Naima','Ahmad','08437']
// }

// console.log(obj)


// Example 4

// var arr = ['Naima','Ahmad',12]
// console.log(arr)


// Example 5

//  var obj = {
//      name1 : 'Naima',
//      age : 12 ,
//      arr : ['Naima','Ahmad','08437']
//  }

// document.write(obj)


// Example 6

//  var obj = {
//      name1 : 'Naima',
//      age : 12 ,
//      arr : ['Naima','Ahmad','08437']
//  }

// for(var i = 0; i>obj.length; i++){
//     document.write(obj[i])
// }


// Example 7

//  var obj = {
//      name1 : 'Naima',
//      age : 12 ,
//      arr : ['Naima','Ahmad','08437']
//  }

// for(var key in obj){
//     document.write(key+"<br>")
// }


// Example 8

//  var obj = {
//      name1 : 'Naima',
//      age : 12 ,
//     //  arr : ['Naima','Ahmad','08437']
//  }

// for(var key in obj){
//     document.write(obj[key]+"<br>")
// }


// Example 8

//  var obj = {
//      name1 : 'Naima',
//      age : 12 ,
//      phonenum : "0123456789",
//      arr : ['Naima','Ahmad','08437']
//  }

// for(var key in obj){
//     document.write(key+": "+obj[key]+"<br>")
// }


// Example 9

// var quiz = [
//     {
//         question : 'What is your Name?',
//         answer : [
//         {
//                 ans1 : 'Naima',
//                 ans2 : 'Ahmad',
//                 ans3 : 'Hello World'
//         },
//         correctans ={
//             ans1
//         }
//         ]
//     },
//     {},
//     {}
// ]



// Exmaple 10

// var student1 = {
//     name1 : 'Naima',
//     age : 12,
//     id : p-114034,
//     department: 'Computer-Science'
// }

// var student2 = {
//     name1 : 'Laiba',
//     age : 12,
//     id : p-114054,
//     department: 'AI'
// }


// Constructor Function()

function Students(name,age,department){
    this.name = name;
    this.age = age;
    this.department = department;
}

var a = student1 = new Students('Naima',12,'AI')
var a = student2 = new Students('Laiba',12,'Computer-Science')
console.log(student1)
console.log(student2)