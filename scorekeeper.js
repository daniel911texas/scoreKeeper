/*Code Along while watching https://www.udemy.com/the-web-developer-bootcamp*/
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});