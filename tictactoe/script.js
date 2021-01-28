var currentPlayer = 1; // current player 1 or 2
var plays = 0;   //counts the number of plays or turns taken

var board = document.querySelector("#board");

board.z0.addEventListener("click",takeTurn);
board.z1.addEventListener("click",takeTurn);
board.z2.addEventListener("click",takeTurn);
board.z3.addEventListener("click",takeTurn);
board.z4.addEventListener("click",takeTurn);
board.z5.addEventListener("click",takeTurn);
board.z6.addEventListener("click",takeTurn);
board.z7.addEventListener("click",takeTurn);
board.z8.addEventListener("click",takeTurn);


function takeTurn() {
	if(currentPlayer == 1 && this.value == ""){
	this.value = "X";
	this.style.color = "DarkViolet";
	currentPlayer = 2;
	plays++;
	if(plays >= 5){
		checkWin();
	}
	}//if
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O";
		this.style.color = "DarkOrange";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
		checkWin();
	}
	}//else if
	console.log("plays = " + plays);
	
}//end takeTurn function

function checkWin(){
	if(board.z0.value == board.z1.value && board.z1.value == board.z2.value && board.z0.value != ""){
	announceWin(board.z0.value);
	}
	
	else if(board.z3.value == board.z4.value && board.z4.value == board.z5.value && board.z3.value != ""){
	announceWin(board.z3.value);
	}
	
	else if(board.z6.value == board.z7.value && board.z7.value == board.z8.value && board.z6.value != ""){
	announceWin(board.z6.value);
	}
	
	else if(board.z0.value == board.z3.value && board.z3.value == board.z6.value && board.z0.value != ""){
	announceWin(board.z0.value);
	}
	
	else if(board.z1.value == board.z4.value && board.z4.value == board.z7.value && board.z1.value != ""){
	announceWin(board.z1.value);
	}
	
	else if(board.z2.value == board.z5.value && board.z5.value == board.z8.value && board.z2.value != ""){
	announceWin(board.z2.value);
	}
	
	else if(board.z0.value == board.z4.value && board.z4.value == board.z8.value && board.z0.value != ""){
	announceWin(board.z0.value);
	}
	
	else if(board.z2.value == board.z4.value && board.z4.value == board.z6.value && board.z2.value != ""){
	announceWin(board.z2.value);
	}
	else if(plays == 9){
		announceCatsGame();
	}
}//end of checkWin

function announceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="x button" id="x"><h2>' + winner + ' Wins!</h2>';
	
	document.querySelector("#x").addEventListener("click",hidePopup);
	
	document.querySelector("#container").style.display = "flex";
}//end of announceWin

function announceCatsGame() {
	document.querySelector("#container").style.display = "flex";
}

document.querySelector("#x").addEventListener("click",hidePopup);
	

function hidePopup(){	
		document.querySelector("#container").style.display = "none";
}






