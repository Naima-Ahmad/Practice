var a = 2;
var b = 3;
var c = 4;

var d = a++ + a++ + ++a + b-- - b-- + c++ + c + a++ + a + c-- + ++c;
                                 

var e = a++ + ++a + ++b +b + ++a - a++ - c-- - c-- - c++ + ++c + a++;


var f = a++ - --c - c-- - b-- + --a + a++ - a++ - b++ + b++ - a++ + a++ + a;


document.write(d+"<br>")
document.write(e+"<br>")
document.write(f+"<br>")