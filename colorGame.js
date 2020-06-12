var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var selected = document.querySelector(".selected");
var displayColor = document.querySelector("#displayColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easyBtn");
var hardbtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();
displayColor.textContent = pickedColor;

// ------------Easy Mode--------------//

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
		
	});

// -------------Hard mode-------------//

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	numSquares = 6;
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {

			squares[i].style.background = colors[i];
			squares[i].style.display = "block";	
	}
		
	});

// -----------reset-----------//

resetButton.addEventListener("click",function(){
	message.textContent = "";
	this.textContent = "New colors";
	//generate random colors
	colors = generateRandomColor(numSquares);

	//reseet header background color

	h1.style.backgroundColor = "steelblue";

	//pick a new random color
	pickedColor = pickColor();

	//change displayColor to match new color
	displayColor.textContent = pickedColor;

	//change colors of square
	for(var i = 0; i<squares.length; i++){
	// add initial colros to squares

	squares[i].style.background = colors[i];
	}
})

// ------------------------------------------------------//


for(var i = 0; i<squares.length; i++){
	// add initial colros to squares

	squares[i].style.background = colors[i];

	// add click listeners to squares

	squares[i].addEventListener("click",function(){
		
	// grab color of selected square

	var clickedColor = this.style.backgroundColor;

	// comapare picked color to picked color
	if (clickedColor === pickedColor){

		message.textContent = "CORRECT!"
		resetButton.textContent = "Play Again";
		h1.style.background = clickedColor;
		for(var i = 0; i<squares.length; i++){
			squares[i].style.backgroundColor = clickedColor;
		}
	}

	else{
		message.textContent = "Try Again"
		
		this.style.backgroundColor = "#333333";
	}

	})


}


//------------------------------------------------------------//

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColor(num){
	var arr = [];

	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r + ", " + g + ", " + b+")";
}