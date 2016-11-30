var randomLoc = Math.floor(Math.random() * 5);
var location1=randomLoc;
var location2=randomLoc+1;
var location3=randomLoc+2;
var guess;
var hit=0;
var guesses=0;
var isSunk=false;


while(isSunk==false) {
	guess = prompt("Enter number 0-6:");
	if(guess<0 || guess>6)
		alert("Please enter a valid number!");
	else guesses++;
	if(guess==location1 || guess==location2 || guess==location3) {
		hit++;
		alert("Hit!!!");
		if(hit==3) {
			isSunk=true;
			alert("Hey! You sank my battleship!");
		}
	}
	else alert("Miss!!!");
}
var stat = "You took " + hit +" hits to sink the ship, "
+"the rate was " + (3/guesses);
alert(stat);

