// // CHAPTER NO 21-25
// // Q1
// var user_First = prompt("Enter first name");
// var user_Second = prompt("Enter second name");
// var fullName = user_First + " " + user_Second;
// alert("Hello " + fullName);

// //Q2
// var fav_Mobile = prompt("Enter your favourite mobile phone");
// document.write( "<b>" + "My Favourite Phone is: " + "</b>" + fav_Mobile);
// document.write("<br>" + "<b>" + "length of string is " + "</b>" + fav_Mobile.length);

// //Q3
// var ind = "Pakistani";
// document.write("<b>" +"String: " + "</b>" + ind);
// document.write("<br>" +"<b>" +"Index of 'n':  " + "</b>" + ind.indexOf("n"));

// //Q4 
// var last_ind = "Hello World";
// document.write("<b>" +"String: " + "</b>" + last_ind);
// document.write("<br>" +"<b>" +"last Index of 'l':  " + "</b>" + last_ind.lastIndexOf("l"));

// //Q5
// var pak = "Pakistani";
// var pak_slice = pak.slice(3,4)
// document.write("<b>" +"String: " + "</b>" + pak);
// document.write("<br>" +"<b>" +"Character at index 3: " + "</b>" + pak_slice);


// //Q7
// var city = "Hyderabad";
// var city_replace = city.replace("Hyderabad" , "Islamabad");
// document.write("<b>" +"City: " + "</b>" + city);
// document.write("<br>" +"<b>" +"After replacment: " + "</b>" + city_replace);

// //Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g , "&"));

//Q9
// var string = "472";
// var change_num = parseInt(string);
// document.write("<b>" + "Value: " + string );
// document.write("<br>" +"<b>" + "Type: " + typeof string );
// document.write("<br>" +"<b>" + "Value: " +  change_num);
// document.write("<br>" +"<b>" + "Type: " + typeof change_num );

// //Q10
// var user_input = prompt("Enter some words");
// var upperCase = user_input.toUpperCase();
// alert(upperCase);

// //Q11
// var someWords = prompt("Enter some words");
// var first_copy = someWords.slice(0,1);
// var last = someWords.slice(1);
// console.log(last);
// var upper_First = first_copy.toUpperCase();
// var plus_both = upper_First+last;
// document.write("<b>" +"userinput: " + "</b>" + someWords);
// document.write("<br>" + "<b>" + "TitleCase: " + "</b>" + plus_both);

// //Q12
// var num = 35.36;
// var num_change = num.toString();
// var new_Num = num_change.split(".").join("");
// document.write("number: " + num);
// document.write("<br>" +"result: " + new_Num);


// //Q13 ESCAPE
// var user_Name = prompt("Enter username");
// var not_allowed = String.fromCharCode(33, 44, 46, 64);


// //Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcom to ABC bakery what do you want to order sir/ma'am ")
// var lower_case = search.toLowerCase();
// if(A.indexOf(lower_case) !== -1){
//     alert("Yes! " + search + " is " + "available " + "in " + "Index No " + A.indexOf(search) + " in our bakery ")
// }else{
//     alert("Sorry! " + search + " is not " + "available " + "in "  +  "our bakery ")
// }


//Q15
// escape

// //Q16
// var university = "University of Karachi";
// var split = university.split("");
// for( i = 0 ; i < university.length ; i++){
//     document.write( split[i] + "<br>")
// }

// //Q17
// var User_Input = prompt("Enter your country name");
// var char = User_Input.charAt(User_Input.length-1);
// document.write("User input: " + User_Input);
// document.write("<br>" +"last character of a input: " + char);

// //Q18 ESCAPE
// var mess = "The quick brown fox jumps over the lazy dog";
// var mess_index = mess.indexOf("the");
// document.write("Text: " + mess);
// document.write("<br>" +"There are " + mess_index + " occurrence(s) of word 'the'");


// //CHAPTER NO 26-30
// //Q1
// var  positive_integer = +prompt("Enter a value");
// var round_off = Math.round(positive_integer);
// var floor = Math.floor(positive_integer);
// var ceil = Math.ceil(positive_integer);
// document.write("Number: " + positive_integer);
// document.write("<br>" +"Round Off: " + round_off);
// document.write("<br>" +"floor Value: " + floor);
// document.write("<br>" +"ceil value: " + ceil);

// //Q2
// var  negative_integer = +prompt("Enter a value");
// var round_off = Math.round(negative_integer);
// var floor = Math.floor(negative_integer);
// var ceil = Math.ceil(negative_integer);
// document.write("Number: " + negative_integer);
// document.write("<br>" +"Round Off: " + round_off);
// document.write("<br>" +"floor Value: " + floor);
// document.write("<br>" +"ceil value: " + ceil);

// //Q3
// var pos_num = prompt("Enter a value");
// var abs = Math.abs(pos_num);
// document.write("<b>" +"The absolute value of " + pos_num + " is " + abs + "</b>");

// //Q4
// var random = Math.random() * 7;
// var short_float = Math.floor(random);
// if(short_float === 1){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 2){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 3){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 4){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 5){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 6){
//     alert("Random dice value: " + short_float)
// }
// else{
//     alert("Random dice value: " + 1)
// }

// //Q5
// var head_Tail = prompt("Enter head's coin name");
// var Tail_head = prompt("Enter tail's coin name");
// var random = Math.random() * 2;
// var short_float = Math.floor(random);
// console.log(short_float)
// if(short_float == 0){
//     alert(head_Tail + " won the toss")
// }
// else if(short_float == 1){
//     alert(Tail_head + " won the toss")
// }

// //Q6
// var random = Math.random() * 101;
// var short_float = Math.floor(random);
// document.write("<b>" +" Random number between 1 and 100: " + "</b>" + short_float);

// //Q8
// var value_input = +prompt("Enter a value under 0 to 10");
// var ran_Dom = Math.random() * 11 ;
// var short_float = Math.floor(ran_Dom);
// if(value_input == short_float){
//     alert("congratulation! You won");
// }
// else{
//     alert("Sorry!");
// }

//CHAPTER NO 31-34

// //Q1
// var date = new Date();
// document.write(date);

// //Q2
// var month = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "Npvember" , "December"];
// var date = new Date();
// var Num_month = date.getMonth();
// var name_month = month[Num_month];
// document.write("<b>" + "Current Month: " + "</b>" +name_month);

// //Q3
// var day = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var Num_day = date.getDay();
// var name_day = day[Num_day];
// document.write("<b>" + "Today is " + "</b>" +name_day);

// //Q4
// var day = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var Num_day = date.getDay();
// var name_day = day[Num_day];
// if(Num_day === 0 || Num_day === 6){
//     alert("It's Fun Day!");
// }else{
//     alert("It's Normal Day");
// }

// //Q5
// var date = new Date();
// var Num_month = date.getDate();
// if(Num_month <= 15){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// //Q6
// var date = new Date();
// var milli = date.getTime();
// var diff = milli / (1000*60*60);
// document.write("<b>" + "Current Date: " + "</b>" + date);
// document.write("<br>" +"<b>" + "Ellapsed miliseconds since January 1, 1970:  " + "</b>" + milli);
// document.write("<br>" +"<b>" + "Ellapsed minutes since January 1, 1970:  " + "</b>" + diff);

// //Q7
// var date = new Date();
// var hour = date.getHours();
// if(hour <= 11){
//  alert("It's AM")
// }else{
//     alert("It's PM")
// }


//Q8