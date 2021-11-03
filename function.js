/* 1. Declare a function called laugh() that returns "hahahahahahahahahaha!".
Print the value returned from the laugh() function to the console.
/*
* Programming Quiz: Laugh it Off 1
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should return the correct output
* - Your code should print `\"hahahahahahahahahaha!\"` by calling the
`laugh()` function inside `console.log()`
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


function laugh() {
  return ("hahahahahahahahahaha!");
}
console.log(laugh());







/* 2. Write a function called laugh() that takes one parameter, num that represents
the number of "ha"s to return.
TIP: You might need a loop to solve this!
Here's an example of the output and how to call the function that you will write:
console.log(laugh(3));
Prints: "hahaha!"
/*
* Programming Quiz: Laugh it Off 2
* *
Write a function called `laugh` with a parameter named `num` that
represents the number of "ha"s to return.
*
* Note:
* - make sure your the final character is an exclamation mark ("!")
* - make sure that your function produces the correct results when it
is called multiple times
*/



function laugh(num) {
    let outterance = "";
    for (let i = 0; i < num; i++) {
        outterance += "ha";
        
    }
    return outterance + "!";
}
console.log(laugh(3));






/*
* Programming Quiz: Build A Triangle
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a `buildTriangle()` function
* - Your `buildTriangle()` function should take one argument (or you
can say parameter)
* - Your `laugh()` function should build the triangle as describe above
*/
// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
  line += "* ";
  }
  return line + "\n";
}

function buildTriangle(width) {
  var triangle = "";
  for (let i = 1; i <= width; i++) {
    triangle += makeLine(i);
    
  }
  return triangle;
}
console.log(buildTriangle(20));





/*4. Write an anonymous function expression that stores a function in a variable called
"laugh" and outputs the number of "ha"s that you pass in as an argument.
laugh(3);
Returns: hahaha!
/*
* Programming Quiz: Laugh
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in
the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number
of `hahaha`\'s
*/

var laugh = function (times) {
  var haTimes = "";
  for (let i = 0; i < times; i++) {
    haTimes+= "ha";
    
  }
  return haTimes + "!";
}
console.log(laugh(10));






/* 5. Write a named function expression that stores the function in a variable called cry
and returns "boohoo!". Don't forget to call the function using the variable name, not
the function name:
cry();
Returns: boohoo!
/*
* Programming Quiz: Cry
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `cry`
* - Your code should include a named function expression stored in the
variable `cry`
* - Your code should call the function expression using the variable
name, not the function name
* - Your function expression should return the expected output
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

var cry = function tears() {
  return "boohoo!";
}
cry();



/* 6. Call the emotions() function so that it prints the output you see below, but
instead of passing the laugh() function as an argument, pass an inline function
expression instead.
emotions("happy", laugh(2)); // you can use your laugh
function from the previous quizzes
Prints: "I am happy, haha!"
/*
* Programming Quiz: Inline Functions (5-6)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function
expression passed as the second parameter
* - Your function expression should return the expected output
*/



emotions("happy", function(times) {
    var haTimes = "";
    for (let i = 0; i < times; i++) {
      haTimes+= "ha";
      
    }
    return haTimes + "!";
  

});

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
  }
