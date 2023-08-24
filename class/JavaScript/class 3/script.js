// Example 1

// var num = 76;

// if(num == 56){
//     document.write("Correct")
// }
// else{
//     document.write("Incorrect")
// }


// Example 2

// var email = "naima@gmail.com";
// var pass = "1234";

// if(email == "naima@gmail.com" && pass == "1234"){
//     document.write("Correct")
// }
// else{
//     document.write("Not correct")
// }


// Example 3

// var email = prompt("Enter Email");
// var pass = prompt("Enter Password");

// if(email == "naima@gmail.com" && pass == "1234"){
//     document.write("Correct")
// }
// else{
//     document.write("Not correct")
// }


// Example 4

// var num = 5;
// if(num == 5){
//     document.write("Okay")
// }
// else{
//     document.write("Not okat")
// }


// Example 5

// var perc = prompt("Enter Percentage")

// if(perc >= 80){
//     document.write("Your Grade is A+")
// }
// else if (perc >= 70 && perc < 80){
//     document.write("Your Grade is A")
// }
// else if (perc >=60 && perc < 70){
//     document.write("Your Grade is B")
// }
// else if (perc >= 50 && perc < 60){
//     document.write("Your Grade is C")
// }
// else if (perc < 50){
//     document.write("You are Fail")
// }

// Example 6

var name = prompt("Enter your Name");
var eng = +prompt("Enter English Marks")
var urdu = +prompt("Enter Urdu Marks")
var pst = +prompt("Enter Pak.Studies Marks")
var bio = +prompt("Enter Bio Marks")
var chem = +prompt("Enter Chemistry Marks")

var total = eng + urdu + pst + bio + chem;
var perc = (total / 500) * 100;
var grade;

if (perc >= 80 && perc < 101){
    grade = "A+";  
}
else if (perc >= 70 && perc < 80){
    grade = "A";    
}
else if (perc >= 60 && perc < 70){
    grade = "B";    
}

else if (perc >= 60 && perc < 70){
    grade = "C";    
}
else {
    grade = "F";
}

document.write(perc," ",grade)
