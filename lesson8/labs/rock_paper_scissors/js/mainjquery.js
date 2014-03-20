var humanScore = 0
var computerScore = 0
var botRandom = 0
var userChoice

document.getElementById("rock").onclick
= function () {userInput("Rock");}
document.getElementById("paper").onclick
= function () {userInput("Paper");}
document.getElementById("scissors").onclick 
= function () {userInput("Scissors");}

function userInput(userChoice) {
		console.log(userChoice);
		botRandom = Math.floor (Math.random( ) * 3)
		console.log(botRandom);
		if(userChoice=="Rock" && botRandom==0) {userTie()};
		if(userChoice=="Rock" && botRandom==1) {userLose()};
		if(userChoice=="Rock" && botRandom==2) {userWin();};
		if(userChoice=="Paper" && botRandom==0) {userWin();};
		if(userChoice=="Paper" && botRandom==1) {userTie();};
		if(userChoice=="Paper" && botRandom==2) {userLose();};
		if(userChoice=="Scissors" && botRandom==0) {userLose();};
		if(userChoice=="Scissors" && botRandom==1) {userWin();};
		if(userChoice=="Scissors" && botRandom==2) {userTie();};
}

function userTie() {
	console.log("tie");
}
function userWin() {
	humanScore = humanScore + 1;
	document.getElementById("humanScore").innerHTML = (humanScore);
}
function userLose() {
	computerScore = computerScore + 1;
	document.getElementById("computerScore").innerHTML = (computerScore);
}
