let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}
// easy or hard function
function setupModeButtons() {
	modeButtons.forEach(button => {
		button.addEventListener("click", function () {
			// modeButtons[0].classList.remove("selected");
			// modeButtons[1].classList.remove("selected");
			// modeButtons[2].classList.remove("selected");
			modeButtons.forEach(b => {
				b.classList.remove("selected");
			});
			button.classList.add("selected");
			// this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
			numSquares =
				button.textContent === "Easy"
					? 3
					: button.textContent === "Hard"
					? 6
					: 9;
			reset();
		});
	});
}
//setup and check if a color is right
function setupSquares() {
	squares.forEach(item => {
		//add click listeners to squares
		item.addEventListener("click", e => {
			//grab color of clicked square
			const clickedColor = e.target.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				e.target.style.background = "#232323";
				messageDisplay.textContent = "Ooops !! Try Again";
			}
		});
	});
}

function reset() {
	colors = generateRandomColors(numSquares); //colors = arr {fiha result t3 arr}
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	squares.forEach((square, i) => {
		//i jdia 3leya
		if (colors[i]) {
			square.style.visibility = "visible"; //ki tkon easy w tfot 3 wella 6 psQ squares tjR fiha 9
			square.style.background = colors[i];
			return;
		}
		squares[i].style.visibility = "hidden";
	});
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", () => reset());

function changeColors(color) {
	//loop through all squares
	squares.forEach(square => {
		// change each color to match given color
		square.style.background = color;
	});
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
	return Array.from({ length: num }, randomColor);
}

function randomColor() {
	//pick a "red" from 0 - 255
	const c = () => Math.floor(Math.random() * 256);
	return `rgb(${c()}, ${c()}, ${c()})`;
}
