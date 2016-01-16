var pixel = document.getElementsByClassName("canvas");
var currentColor = "white";
var colorBox = ['yellow', 'orange','turquoise','purple','green','red','gray'];


for (var i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener("click", function(){
    console.log(currentColor)
    this.style.backgroundColor = currentColor;
  });
};

//add palette divs to the dom
for (var i = 0; i < colorBox.length; i++) {
    newDiv = document.createElement('div');
    newDiv.style.backgroundColor = colorBox[i];
    document.getElementsByTagName('section')[0].appendChild(newDiv);
    newDiv.addEventListener('click',function() {
      currentColor = this.style.backgroundColor;
    })
}

//add one new div
var newDiv = document.createElement('div');
// newDiv.style.backgroundColor = 'yellow';
// newDiv.className = 'yellow';
// document.getElementsByTagName('section')[0].appendChild(newDiv);


//color palette 
// document.getElementsByClassName('red')[0].addEventListener('click', function() {
//   currentColor = 'turquoise';
// });


// document.getElementsByClassName('purple')[0].addEventListener('click', function() {
//   currentColor = 'purple';
// });

// document.getElementsByClassName('yellow')[0].addEventListener('click', function() {
//   currentColor = 'yellow';
// });

// for (var i=0; i<pixel.length; i++) {
//   pixel[i].addEventListener('click', function(){
//     pixel.style.backgroundColor = "red";
// });
// }



