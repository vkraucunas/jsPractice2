// Exercise 1: Why am I learning JavaScript? Because it is the only language capable of adding behavior response that web browsers natively support. This is unlikely to change soon, making it a task worthwhile of my time.

// Exercise 2: Think of your own example where it might be useful to save information. remembering your password for your email

// Exercise 3: Take a couple of minutes and create a list of 10 keywords. These are words you cannot use as a name of a variable. 
// 	for
// 	in
// 	else
// 	while
// 	if
// 	do
// 	function
// 	float
// 	null
// 	return

// Exercise 4:
var name = "Homer";
var greet = "Hello,"; 
console.log(greet + " " + name)

// Exercise 5:
// Use an `if/else if/else` statement to write code for a simplified version of 
// FizzBuzz: If a number is divisible by `3`, log the word `Fizz`; if a number is 
// divisible by `5`, log the word `Buzz`, and if a number is divisible by both `3` 
// and `5`, log the word `FizzBuzz`. If a number is not divisible by any of those 
// numbers, log the non-divisible number. Repeat this process with a `switch` 
// statement.

for (var i = 1; i <= 30; i++)
{
    if (i % 3 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}

for (var i = 1; i <= 30; i++){
    switch(i){
        case i % 3 === 0:
            console.log("Fizz");
            break;
        case i % 5 === 0:
            console.log("Buzz");
            break;
        case i % 5 === 0 && i % 3 === 0:
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
            break;
    };
};

// Exercise 6: 
// Modify the for loop print all integers from 10 to 1.

for(var i = 10; i >= 1; i--) {
  console.log(i);
}

// Exercise 7: 
//Use a while loop to print every number from 10 to 100 in increments of 10
var i = 10;
while (i < 100) {
console.log(i);
 i = i + 10;
}

// Exercise 8: 
// REVERSE!

var i = 100;
while (i > 10) {
console.log(i);
 i = i - 10;

 // Morning Warmup 1
 // Generate two random integers and print their mean, variance, 
 // and standard deviation.
 // var integer01 = {
function getRandom(min, max) {
return (Math.random() * (max - min + 1)) + min;
};
// };
console.log(getRandomIntInclusive(1, 100));

// var integer02 = {
// 	function getRandomIntInclusive(min, max) {
//   	return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// getRandomIntInclusive(1, 100); 
// };
// console.log(integer02);

//chessboard exercise

var length = 20;

for ( var i = 1; i < (length+1); i++) {
    var row = "";
    for (var j = 1; j < (length+1); i++) {
        if (!(i % 2) && !(j % 2)) {row += "*"};
        if (!(i%2) && !!(j%2)) {row += "#"};
        if (!!(i%2) && !(j%2)) {row += "#"};
        if (!!(i%2) && !!(j%2)) {row += "*"};
    };
    console.log(row);
};






