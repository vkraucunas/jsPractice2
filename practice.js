// Section 1

// For the first set of questions, use the given methods to modify the top array so that it reads the same as the one underneath. console log the array to make sure it has been changed.

// Using .pop() :

var nums = ['one', 'two', 'three', 'four', 'ten'];
nums.pop();
console.log(nums);

//   ans => ['one', 'two', 'three', 'four']
// Using .push() :

var letters = ['a', 'b', 'c', 'd'];
letters.push('e');
console.log(letters);

//   ans => ['a', 'b', 'c', 'd', 'e']
// Using .shift() :

var vehicles = ['lollipop', 'car', 'truck', 'tank'];
vehicles.shift();
console.log(vehicles);

//   ans => ['car', 'truck', 'tank']
// Using .unshift() :

var sports = ['football', 'baseball', 'hockey'];
sports.unshift('rugby');
console.log(sports);

//   ans => ['rugby', 'football', 'baseball', 'hockey']
// Using .splice() :

var years = [1990, 2015, 1066, 43, 90, 1607];
years.splice(2, 3);
console.log(years);

//   ans => [1990, 2015, 1607]

var movies = ['The Great Escape', 'Love Actually', 'Blade Runner', 'Indiana Jones and the Last Crusade'];
movies.splice(1, 1);
console.log(movies);

//   ans => ['The Great Escape', 'Blade Runner', 'Indiana Jones and the Last Crusade']

// Using .slice()

var animals = ['dog', 'cat', 'eagle', 'cow'];
var newAnimals = animals.slice(0, 1);
console.log(animals);

//   ans => ['cat']

var names = ['jeff', 'tony', 'tabitha', 'annie', 'edward', 'james'];
var newNames = names.slice(3, 3);
console.log(newNames);

//   ans => ['annie', 'edward', 'james']

// Using .sort() :

var greekLetters = ['beta', 'gamma', 'alpha', 'epsilon', 'delta']
greekLetters.sort();
console.log(greekLetters);

//   ans => ['alpha', 'beta', 'delta', 'epsilon', 'gamma']

console.log("!!!!!!!Section 2!!!!!!");
// Section 2

// For the next set of questions, simply return the answer. The original array/arrays should not be modified.

// Using .concat() :

  var firstNums = [1, 2, 3];

  var secondNums = [4, 5, 6];

var finalNums = firstNums.concat(secondNums);
console.log(finalNums);
//   ans => [1, 2, 3, 4, 5, 6]

// Using .join() :

  var arr = ['Bradley', 'is', 'super', 'amazing'];
var newArr = arr.join(' ');
console.log(newArr);

//   ans => 'Bradley is super amazing'

// Section 3
console.log("%%%%%%%Section 3%%%%%%");

// Next, use the string methods given to return the ans underneath

// Using .concat() :

  var str1 = 'Javascript is really '

  var str2 = 'really really great!'

var newStr = str1.concat(str2);
console.log(newStr);

//   ans => 'Javascript is really really really great'
// Using .toUpperCase()

  var talk = 'Now I\'m Shouting';

  var shout = talk.toUpperCase();
  console.log(shout);

//   ans => 'NOW I\'M SHOUTING'
// Using .toLowerCase() :

  var shout = 'EVERYONE BE QUIET';
  var whisper = shout.toLowerCase();
  console.log(whisper);

//   ans => 'everyone be quiet'
// Using .charAt() :

  var string = 'Super Amazing Stuff';
  var uberString = string.charAt(9);
  console.log(uberString);

//   ans => 'z'
// Using .slice() :

  var fullTitle = 'Lord Edward Swivington the 3rd';
  var partTitle = fullTitle.slice(5, 22);
  console.log(partTitle);

//   ans => 'Edward Swivington'
// Using .split() :

  var year = '1990';
  var notYear = year.split('');
  console.log(notYear);

//   ans => ['1', '9', '9', '0']

  var quote = 'Why did it have to be snakes?';
  var indiana = quote.split(' ');
  console.log(indiana);

//   ans => ['Why', 'did', 'it', 'have', 'to', 'be', 'snakes?']
// Using .trim() :

  var lyric = '    Here I am. ROCK you like a hurricane.      '
  var nowSing = lyric.trim();
  console.log(nowSing);

//   ans => 'Here I am. ROCK you like a hurricane.'
// Section 4
console.log('**@#(*)(*@)#(@*Section 4)(*)#*$@');

// Write a function that will find the index of all the "o"s in "Oy! I am a normal string!" regardless of case.
var special = "Oy! I am a normal string!";

function oHunt(string) {
  
  var array = string.split('');
  
  for (var i = 0; i < array.length; i++) {
    var value = array[i].toLowerCase();
    if (value === "o") {
      console.log(i);
    };
  };
};

oHunt(special)

// Write a function which accepts a number as input and inserts dashes (-) between every two numbers. For example if you accept 025468 the output should be 02-54-68

// Write a function to remove every item in an array that is not a number.
var whale = ['blue', 23, true, 'sheep', 3, 9, 335];

function beluga (array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result.push(array[i]);
    }
  }
  console.log(result);
};

beluga(whale);
// Write a JavaScript function to get a random item from an array.
var dream = [true, "blue", "bbq", 2, "moo", "kungfu"];

function american (array) {
  var result;
  var i = Math.round(Math.random()*array.length);
  result = array[i];
  console.log(result);
}

american(dream);
// Write a function that will take in a string and returns that same string in reverse.
var penguin = "bippity, boppity, boo"

function emperor(string) { 
  var result = string.split('').reverse().join('');
  console.log(result);
};

emperor(penguin);
// Write a JavaScript function that reverse a number e.g.

// Example x = 32243;
// Expected Output : 34223
var gum = 23425667
function chewing(number) { 
  var result = Number(number.toString().split('').reverse().join(''));
  console.log(result);
};

chewing(gum);
// Write a JavaScript function that takes in a string and returns it with letters in alphabetical order
var shark = "to bed i go"; 

function greatWhite(string) {
  var result = string.split('').sort().join('').trim();
  console.log(result);
}

greatWhite(shark);
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

var blossom = "french fries juniper do";

function cherry (string) {
  var result
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    } else {
      
    }
    }
  }
  console.log(result);
}

// Example string = 'Web Development Tutorial'
// Expected Output => 'Development'
// Write a function to add up all the numbers in any given year. The year will be given as a string, the output should be a number. For example the input '1470' should give 12

// Write a function that will take in an array of full names, and only return the first name of each person. For example ['Bradley Bouley', 'Robert Hajek'] should return ['Bradley', 'Robert']

// Write a JavaScript program which accepts a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// Write a JavaScript function to merge two arrays and removes all duplicates elements. e.g.

// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
[3, 2, 30, 1]