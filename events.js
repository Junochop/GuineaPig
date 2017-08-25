//boilerplate is given. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
document.body.addEventListener("click", function(c) {
  if (c.target.className === "article-section") {
  	var printText = document.getElementById("output-target");
  	printText.innerHTML = `You clicked on the "${c.target.innerHTML}" section.`;
  }
 }
)

//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header"
document.body.addEventListener("mouseover", function(h){
 if (h.target.id === "page-title") {
 	var printText = document.getElementById("output-target");
 	printText.innerHTML = 'You moved your mouse over the header';
  }
 }
)

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.body.addEventListener("mouseout", function(o) {
   if (o.target.id === "page-title") {
 	var printText = document.getElementById("output-target");
 	printText.innerHTML = 'You left me!';
  }
 }
)

//When you type characters into the input field, the output element should mirror the text in the input field
document.body.addEventListener("input", function() {
    var inputBox = document.getElementById("keypress-input").value;
    var printText = document.getElementById("output-target");
    printText.innerHTML = inputBox;
 }
)

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function() {
    var printText = document.getElementById("guinea-pig");
    printText.style.color = "blue";
 	printText.innerHTML;
 }
)

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function() {
    var printText = document.getElementById("guinea-pig");
    printText.style.fontSize = "x-large";
 	printText.innerHTML;
 }
)

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function() {
    var printText = document.getElementById("guinea-pig");
    printText.style.border = "dotted";
 	printText.innerHTML;
 }
)

//When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function() {
    var printText = document.getElementById("guinea-pig");
    printText.style.borderRadius = "25%";
 	printText.innerHTML;
 }
)



// ****** Kelly's codes ******
// console.log("in the js file");

// var sections = [];

// var outputTargetDiv = document.getElementById('output-target');
// var outputTartgetH1 = document.getElementById('output-target');
// var inputBox = document.getElementById('keypress-input');


// //When any section is clicked the output target text should be "You clicked on
// //the {text of the section} section"

// document.body.addEventListener("clck", printToDiv);

// function printToDiv(e){
// 	if(e.target.className === "article-section"){
// 		console.log("e", e);
// 		outputTargetDiv.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section.</p>`
// 	}
// }

// //When the mouse is over the h1 tag, the output element should contain the
// //text "You moved your mouse over the header".

// document.body.addEventListener("mouseover", mouseOver);

// function mouseOver(e){
// 	if(e.target.id === "page-title"){
// 		console.log("e", e);
// 		outputTargetDiv.innerHTML = `<p>You moved your mouse over the header.</p>`
// 	}
// }

// //When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

// document.body.addEventListener("mouseout", mouseLeave);

// function mouseLeave(e){
// 	if(e.target.id === "page-title"){
// 		console.log("e", e);
// 		outputTargetDiv.innerHTML = `<p>You left me!</p>`
// 	}
// }

// //When you type characters into the input field, the output element should
// //mirror the text in the input field.

// inputBox.onkeyup = function(){
// 	outputTargetDiv.innerHTML = inputBox.value;
// }

// //When you click the "Add color" button, the guinea-pig element's text color
// //should change to blue.
// document.getElementById("add-color").addEventListener("click", changeColor);

// function changeColor(e){
// 	console.log("e", e);
// 	document.getElementById("guinea-pig").style.backgroundColor = "lightgray";
// }

// //When you click the "Hulkify" button, the guinea-pig element's font size
// //should become much larger.

// document.getElementById("make-large").addEventListener("click", changeTextSize);

// function changeTextSize(e){
// 	console.log("e", e);
//  	document.getElementById("guinea-pig").style.fontSize = "40px";
//  }

// //When you click the "Capture it" button, the guinea-pig element should have a
// //border added to it.

// document.getElementById("add-border").addEventListener("click", addBorder);

// function addBorder(e){
// 	document.getElementById("guinea-pig").style.border = "solid red 5px";
// }

// //When you click the "Rounded" button, the guinea-pig element's border should
// //become rounded.

// document.getElementById("add-rounding").addEventListener("click", roundBorder);

// function roundBorder(e){
// 	document.getElementById("guinea-pig").style.borderRadius = "15px";
// }
