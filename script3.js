// var base = parseInt(prompt("Enter the base of the triangle"));
// var hieght = parseInt(prompt("Enter the height of the triangle"));

// var area =  (base * hieght) / 2;
// alert(area);

var side1 = parseInt(prompt("Enter the side1 of the triangle"));
var side2 = parseInt(prompt("Enter the side2 of the triangle"));
var side3 = parseInt(prompt("Enter the side3 of the triangle"));

var s = (side1 + side2 + side3) / 2;

var area = Math.sqrt(s * (s- side1) * (s -side2) * (s - side3));
alert(area);