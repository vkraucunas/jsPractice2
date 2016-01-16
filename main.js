
console.log("sanity check!");

var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements)

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement)

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement)

var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

var kiddo = document.body.childNodes
console.log(kiddo);

var oldest = document.body.firstChild
console.log(oldest);

var baby = document.body.lastChild
console.log(baby);

var mama = document.body.parentNode
console.log(mama);

//this returns null because there is no sibling after body
var next = document.body.nextSibling
console.log(next);

var last = document.body.previousSibling
console.log(last);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";

document.getElementsByTagName('h1')[0].style.backgroundColor = "pink";


// for (var i = 0; i < allListItems.length; i++) {
//   document.getElementsByTagName('li')[i].style.backgroundColor = "fuchsia";
// }

document.getElementsByTagName('li')[0].style.backgroundColor = "blue";

document.getElementById('main-button').style.backgroundColor = "rgba(80, 0, 150, .3)";

  var li = document.createElement('li');
  console.log(li);



  var newElement = li.innerHTML = "another list item";
  console.log(newElement);
  console.log(li);

  getSingleElement.appendChild(li);
  console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

var myElement = document.createElement('li');
myElement.innerHTML = 'asdlkfasdflk';
console.log(myElement);

var fuckingBody = document.getElementsByTagName('body')[0];
console.log(fuckingBody);

var fuckYou = document.getElementById("fuckThisOne");
console.log(fuckYou);

      var garbage = fuckingBody.removeChild(fuckYou);

