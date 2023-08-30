// Practice 1

// var perc = prompt("Enter your Percentage");

// if(perc >= 90 && perc <101){
//     document.write("Your grade is A+")
// }

// else if (perc >=80 && perc <90){
//     document.write("Your grade is A")
// }

// else if (perc >=70 && perc <80){
//     document.write("Your grade is B")
// }

// else if (perc >=60 && perc <70){
//     document.write("Your grade is C")
// }
// else if (perc >=50 && perc <60){
    //     document.write("Your grade is D")
    // }
    
    // else{
        //     document.write("Your grade is F")
        // }
        
        
        // practice 2
       
        // var perc = +prompt("Enter Your Percentage");
        
        
        // if(perc >= 90 && perc < 101){
        //     document.write("A+")
        // }

        // else if(perc >= 80 && perc < 90){
        //     document.write("A")
        // }
        
        // else if(perc >= 70 && perc < 80){
        //     document.write("B")
        // }
        
        // else if(perc >= 60 && perc < 70){
        //     document.write("C")
        // }
        
        // else if(perc >= 50 && perc < 60){
        //     document.write("D")
        // }
        // else {
        //     document.write("You Are Fail")
        // }
        
        // Pracitce 3
        var naam = prompt("Enter Your Name");
        var eng = +prompt("Enter Your English Marks");
        var urdu = +prompt("Enter Your Urdu Marks");
        var math = +prompt("Enter Your Maths Marks");
        var isl = +prompt("Enter Your Islamiyat Marks");
        var sci = +prompt("Enter Your G.science Marks");

        var obtained = naam + eng + urdu + math + isl + sci;
        var perc = (obtained / 500) * 100;
        var grade;
        
        if (perc >= 90 && perc <= 100){
            grade = "A+";
        }
        
        else if (perc >= 80 && perc <= 90){
            grade = "A";
        }
        
        else if (perc >= 70 && perc <= 80){
            grade = "B";
        }
        
        else if (perc >= 60 && perc <= 70){
            grade = "C";
        }
        
        else if (perc >= 50 && perc <= 60){
            grade = "C";
        }

        else {
            grade = "F";
        }

        document.write("<table border='1'>"+
        "<tr>"+
        "<th>"+
        "Name"
        +"</th>"+
        
        "<th>"+
        "Total"
        +"</th>"+
        
        "<th>"+
        "Total Marks"
        +"</th>"+
        
        "<th>"+
        "English"
        +"</th>"+
        
        "<th>"+
        "Urdu"
        +"</th>"+
        
        "<th>"+
        "Maths"
        +"</th>"+
        
        "<th>"+
        "Islamiyat"
        +"</th>"+
        
        "<th>"+
        "G.Science"
        +"</th>"+
        
        +"</tr>"+
        
        
        
        "<tr>"+
        
        "<td>"+
        "Name"
        +"</td>"+
        
        "<th>"+
        "Total"
        +"</td>"+
        
        "<td>"+
        "Total Marks"
        +"</td>"+

        "<td>"+
        "English"
        +"</td>"+
        
        "<td>"+
        "Urdu"
        +"</td>"+
        
        "<td>"+
        "Maths"
        +"</td>"+
        
        "<td>"+
        "Islamiyat"
        +"</td>"+
        
        "<td>"+
        "G.Science"
        +"</td>"+
        
        +"</tr>"
        +"</table>")
        
        
        
        

    
        
        
        
        
        
        
        
        
        
        
        
        