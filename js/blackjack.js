$(document).ready(() => {

let dealerSum = 0;
let oneSum = 0;
let twoSum = 0;

let dealerAceCount = 0;
let oneAceCount = 0;
let twoAceCount = 0;

let hidden;
let deck;

let oneCanHit = true; //allows player one to draw while oneSum <= 21
let twoCanHit = true; //allows player two to draw while twoSum <= 21

buildDeck();
shuffleDeck();
startGame();

function buildDeck() {
	let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //creates a deck of 52 cards
        }
    }
}

//iterates through each index and trades it with a random index
function shuffleDeck() {
     for (let i = 0; i < deck.length; i++) {
     	let j = Math.floor(Math.random() * deck.length); //gets me a number between 0-51
     	let temp = deck[i];
     	deck[i] = deck[j];
     	deck[j] = temp;  
     }
      //console.log(deck);
}

function startGame() {
	 hidden = deck.pop();
	 dealerSum = dealerSum + getValue(hidden);
	 dealerAceCount = dealerAceCount + checkAce(hidden);
	
	 while (dealerSum < 17) {
           let cardImg = document.createElement("img"); //creates an html img tag
           let card = deck.pop();
           cardImg.src = "img/cards/" + card + ".png";
           dealerSum = dealerSum + getValue(card);
           dealerAceCount = dealerAceCount + checkAce(card); 
           $('#dealer-cards').append(cardImg);
	 }
	 //console.log(dealerSum);
	 for (i = 0; i < 2; i++) {
           let cardImg = document.createElement("img"); //creates an html img tag
           let card = deck.pop();
           cardImg.src = "img/cards/" + card + ".png";
           oneSum = oneSum + getValue(card);
           oneAceCount = oneAceCount + checkAce(card); 
           $('#one-cards').append(cardImg);
	 }
     
	 for (i = 0; i < 2; i++) {
           let cardImg = document.createElement("img"); //creates an html img tag
           let card = deck.pop();
           cardImg.src = "img/cards/" + card + ".png";
           twoSum = twoSum + getValue(card);
           twoAceCount = twoAceCount + checkAce(card); 
           $('#two-cards').append(cardImg);
	 }
}

	 $('#one-hit').click(function() {
       if (!oneCanHit) {
       	   return;
       }
        let cardImg = document.createElement("img"); //creates an html img tag
           let card = deck.pop();
           cardImg.src = "img/cards/" + card + ".png";
           oneSum = oneSum + getValue(card);
           oneAceCount = oneAceCount + checkAce(card); 
           $('#one-cards').append(cardImg);
        if (reduceAce(oneSum, oneAceCount) > 21) { //stops player one from hitting past 21
        	oneCanHit = false;                     //accounts for Aces being 11 or 1
        	//console.log(oneSum);                   
        }
	 });
	  $('#two-hit').click(function() {
       if (!twoCanHit) {
       	   return;
       }
        let cardImg = document.createElement("img"); //creates an html img tag
           let card = deck.pop();
           cardImg.src = "img/cards/" + card + ".png";
           twoSum = twoSum + getValue(card);
           twoAceCount = twoAceCount + checkAce(card); 
           $('#two-cards').append(cardImg);
        if (reduceAce(twoSum, twoAceCount) > 21) { //stops player two from hitting past 21
        	twoCanHit = false;                     //accounts for Aces being 11 or 1
        	//console.log(twoSum);                    
        }
	 });

	  $('#one-stay').click(function() {
	  	dealerSum = reduceAce(dealerSum, dealerAceCount);
	  	oneSum = reduceAce(oneSum, oneAceCount);

	  	oneCanHit = false;
	  	document.getElementById("hidden").src = "img/cards/" + hidden + ".png";

	  	let message = "";
	  	if (oneSum > 21) {
	  		message = "Player one loses!";
	  	}
	  	else if (dealerSum > 21) {
	  		message = "Player one wins!";
	  	}
	  	else if (oneSum == dealerSum) {
	  		message = "Tied the dealer!";
	  	}
	  	else if (oneSum > dealerSum) {
	  		message = "Player one wins!";
	  	}
        else if (oneSum < dealerSum) {
        	message = "Player one loses!";
        }
        $('#dealer-sum').html(dealerSum);
        $('#one-sum').html(oneSum);
        $('#one-results').html(message);
	 });	

	  $('#two-stay').click(function() {
	  	dealerSum = reduceAce(dealerSum, dealerAceCount);
	  	twoSum = reduceAce(twoSum, twoAceCount);

	  	twoCanHit = false;
	  	document.getElementById("hidden").src = "img/cards/" + hidden + ".png";

	  	let message = "";
	  	if (twoSum > 21) {
	  		message = "Player two loses!";
	  	}
	  	else if (dealerSum > 21) {
	  		message = "Player two wins!";
	  	}
	  	else if (twoSum == dealerSum) {
	  		message = "Tied the dealer!";
	  	}
	  	else if (twoSum > dealerSum) {
	  		message = "Player two wins!";
	  	}
        else if (twoSum < dealerSum) {
        	message = "Player two loses!";
        }
        $('#dealer-sum').html(dealerSum);
        $('#two-sum').html(twoSum);
        $('#two-results').html(message);
	 });	



function getValue(card) {
	let data = card.split("-"); //splits the cards into value and suit
    let value = data[0]; //selects the value

    if (isNaN(value)) { //only options are A J Q K
    	if (value == "A") {
    		return 11;
    	}
    	return 10;
    }
    return parseInt(value);
}  
 
function checkAce(card) {
 	if (card[0] == "A") {
 		return 1;
 	}
 	return 0;
 }

function reduceAce(playerSum, playerAceCount) { //this function accounts for Aces having two potential values
	while(playerSum > 21 && playerAceCount > 0) {
		playerSum = playerSum - 10;
		playerAceCount = playerAceCount - 1;
	}
	return playerSum;
}

$('.toggle-one').click(function() {
    $('.first-cards').toggleClass('show');
    $('.one-hidden').toggle();
});

$('.toggle-two').click(function() {
    $('.second-cards').toggleClass('show');
    $('.two-hidden').toggle();
});



});