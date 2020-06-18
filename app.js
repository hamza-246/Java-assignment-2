//chapter 1 : alert//

//Q1
alert("hello visiter");

//Q2
alert("Error! Please enter a valid password.");

//Q3
alert('Welcome to JS Land... \n Happy Coding!');

//Q4
alert("Welcome to JS land...");

//Q5
console.log(alert("Hello... I can run JS through my web browser's console"))

//Q6
//in htmlfile

//Q7
// C.

//chapter 2 : Variable for strings

//Q1
var username;

//Q2
var myName = "Muhammad Hamza Dandia";

//Q3
var message = "hello World";
alert(message);

//Q4
var student = "Jhone Doe";
var studentAge = "16 years old"
var certified = "certified Mobile Application Development"
alert(student);
alert(studentAge)
alert(certified)

//Q5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//Q6
var email = "hamzajawwad456@gmail.com";
alert(email);

//Q7
var book = "A smarter way to learn JavaScript";
alert(book);

//Q8
var htmlview = "Yah! I can write HTML content through Javascript";
document.write(htmlview);

//Q9
var tag = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(tag);

//chapter 3 : variable for numbers

//Q1
var Age = "I am " + 15 + " years old ";
alert(Age);

//Q2
var track = "You have visited this site" + 14 + "times";
alert(track);

//Q3
var birthyear = "<br>" + "<br>" + "My birth year is " +  2004 ;
document.write(birthyear);

//Q4
var shop ="<br>" + "<br>" + "<b>" + "John Doe" + "</b>" + " ordered" + "<b>" +  5  + " T-shirt(s)" + "</b>" + " on XYZ Clothing store";
document.write(shop);

           
//chapter no 4 : Variable name :legal and illigal

//Q1
var hamza , jawwad , dandia;

//Q2 : legal
var hamza , hamzaJawwad , Hamza123  , hamza_556 , asdsa$_34;

//Q2 : illegal
// var 12adsdfgd , ddd& , hamza-jawwad , hamza jawwad , var;
// commented because of error//

//Q3a
var stating = "<br>" + "<br>" + "<b>" + "Rules for naming JS variables" + "</b>";
document.write(stating);


//Q3b
var names = "<br>" + "<br>" + "Variable names can only contain letters, numbers, underscores, or dollar signs. For example $my_1stVariable";
document.write(names);

//Q3c
var namess = "<br>" + "<br>" + "Variable names must begin with a letter, an underscore (_) or a dollar sign ($). $hamza, _hamza or hamza";
document.write(namess);

//Q3d
var namesss = "<br>" + "<br>" + "Variable names are case sensitive";
document.write(namesss);


//Q3e
var namessss = "<br>" + "<br>" + "Variable names should not be JS keywords";
document.write(namessss);

//chapter no 5 : MATH EXPRESSIONS 


//Q1
var A = 3;
var B = 5;
var sum = A+B;
document.write("<br>" + "<br>" + "Sum of 3 and 5 is " + sum);

//Q2
var A = 3;
var B = 5;
var sub = A-B;
document.write("<br>" + "<br>" + "subtraction of 3 and 5 is " + sub);

var A = 3;
var B = 5;
var mul = A*B;
document.write("<br>" + "<br>" + "multiply of 3 and 5 is " + mul);

var A = 3;
var B = 5;
var div = A/B;
document.write("<br>" + "<br>" + "divide of 3 and 5 is " + div);

var A = 3;
var B = 5;
var mod = A%B;
document.write("<br>" + "<br>" + "modulus of 3 and 5 is " + mod);


//Q3a,b
var  Mathematic = "<br>" + "<br>" + "Value after variable declaration is:" + typeof Mathematic ;
document.write(Mathematic);
//Q3c,d
var Mathematic1 ="<br>" + "<br>" + "initial value is:" + 5;
document.write(Mathematic1)
//Q3 e f
var i = 5;
var increment = ++i;
document.write("<br>" + "<br>" + "value after increment is:" + increment);

//Q3 g h
var i = 5;
var increment = ++i + 7;
document.write("<br>" + "<br>" + "Value after addition is:" + increment);

//Q3 i j
var i = 5;
var increment = --i + 8; 
document.write("<br>" + "<br>" + "Value after decrement is:" + increment);

//Q3 k l
var i = 5;
var increment = 12%3  ; 
document.write("<br>" + "<br>" + "The remainder is :" + increment);



//Q4
var movie = 600;
var multi = movie*5;
document.write("<br>" + "<br>" +  "total cost to buy 5 tickets to movie is " + multi + "PKR");

//Q5
document.write("<br>" + "<br>" + "<b>" + "<h1>" + "Table of 4" + "</h1>" + "</b>");
var table = 4;
document.write("<br>");
for (i = 1 ; i <= 10 ; i++){
document.write(table + " x " + i + "= " + table*i + "<br>");
}

//Q6
var Celsius = 25;




//Q7
var item1 = 650;
var item2 =100;
var orderQ1 = 3;
var orderQ2 = 7;
var shipping = 100;
var total = (item1 * orderQ1) + (item2 * orderQ2) + shipping;
document.write( "<br>" + "<b>" + "<h1>" + "SHOPPING CART" + "</h1>" + "</b>");
document.write( "<br>" +  "Price of item 1 is " + item1 );
document.write( "<br>" +  "Ordered quantity of item 1 is " + orderQ1 );
document.write( "<br>" +  "Price of item 2 is " + item2 );
document.write( "<br>" +  "Ordered quantity of item 2 is " + orderQ2 );
document.write( "<br>" +  " Shipping charges is " + shipping );
document.write( "<br>" + "<br>" + "  total cost of your order is " + total );


//Q8
var totalMarks = 980;
var obtMarks = 804;
var percentage = obtMarks/totalMarks * 100;
document.write( "<br>" + "<b>" + "<h1>" + "MARKSHEET" + "</h1>" + "</b>");
document.write( "<br>" + "total Marks" + totalMarks);
document.write( "<br>" +  "Obtained Marks " + obtMarks);
document.write( "<br>" +   "percentage " + percentage);


//Q9
var UsDollar = 10;
var SaudiRiyals = 25;
var us_pk = UsDollar*104.80;
var sad_pk = SaudiRiyals*28;
var tot_pk = us_pk + sad_pk;
document.write( "<br>" + "<b>" + "<h1>" + "CURRENCY IN PKR" + "</h1>" + "</b>");
document.write( " Total Currency in PKR: " + tot_pk);

//Q10 
var memory = (10 + 5 * 10 )/2;

//Q11
var current_year = 2020;
var birth_year = 2004;
var age_cal = current_year-birth_year;
document.write( "<br>" + "<b>" + "<h1>" + "AGE CALCULATOR" + "</h1>" + "</b>");
document.write("<br>" + " current year: " + current_year);
document.write("<br>" + " Birth year: " + birth_year);
document.write("<br>" + " your age is: " + age_cal);

//Q12 
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * 20 * 20;
document.write( "<br>" + "<b>" + "<h1>" + "The Geometrizer" + "</h1>" + "</b>");
document.write("<br>" + " radius of a circle is " + radius);
document.write("<br>" + " The circumference is " +  circumference);
document.write("<br>" + " The area is " + area);


