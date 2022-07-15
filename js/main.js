$(document).ready(() => {

 let answers=[];
 let selectionOne=[];
 let selectionTwo=[];
 let pointsOne=[];
 let pointsTwo=[]; 


 //saves user input to the various arrays 
 let getPlayerOne = function() {
    answers.push($('.username').val());   
 } 
 let getPlayerTwo = function() {
    answers.push($('.usernametwo').val());   
 } 
 let getPointsOne = function () {
    pointsOne.push($('.points').val());  
 }
 let getPointsTwo = function () {
    pointsTwo.push($('.pointstwo').val());
 }

//Keeps track of the button functions
    $('.submit').click(function() {
    	 getPlayerOne();
       $('#one').html(answers);
       $('#one').addClass('name');
        answers = [];
       $('.first').addClass('show'); 
    });

    $('.submittwo').click(function() {
    	 getPlayerTwo();
       $('#two').html(answers);
       $('#two').addClass('name');
        answers = [];
       $('.second').addClass('show'); 
    });

    $('.enter').click(function() {
       getPointsOne();
       $('.score-one').html('Score: ' + pointsOne);
       if (pointsOne == 3) {
         $('.begin-text').html('Player 1 Wins!!!<br><img src="https://i.pinimg.com/originals/06/22/9a/06229a2aea357a3164b08c04ced3952f.gif">');
       }
       pointsOne = [];
    });

    $('.entertwo').click(function() {
       getPointsTwo();
       $('.score-two').html('Score: ' + pointsTwo);
       if (pointsTwo == 3) {
         $('.begin-text').html('Player 2 Wins!!!<br><img src="https://media3.giphy.com/media/ZL2iRxhnDwtSE/200.gif">');
       }
       pointsTwo = [];
    });

    $('.toggle-one').click(function() {
       $('#number').toggle();
    });

    $('.toggle-two').click(function() {
       $('#number-two').toggle();
    });

 // When Draw Numbers is clicked for player 1...
$('.first').click(function() {
  // assign each named variable a random number 0-40
  let numberOne = Math.floor(Math.random() * 41);
  let numberTwo = Math.floor(Math.random() * 41);
  let numberThree = Math.floor(Math.random() * 41);
  let numberFour = Math.floor(Math.random() * 41);
  let numberFive = Math.floor(Math.random() * 41);
  $('#uno').html('<select name="number" id="number"> <option>Choose Number</option><option value="Choice one" id="numberOne">'+numberOne+
   '</option><option value="Choice two" id="numberTwo">'+numberTwo+'</option><option value="Choice three" id="numberThree">'
   +numberThree+'</option><option value="Choice four" id="numberFour">'+numberFour+'</option><option value="Choice five" id="numberFive">'
   +numberFive+'</option></select>');
  $('.first').removeClass('show');


//What happens when you click a number for player 1
  $('#number').change(function(event) {
   selectionOne = [];
  $('#zone-one').html($(event.currentTarget).val());
  $('.begin-text').addClass('show');
  if ($(event.currentTarget).val() === "Choice one") {
   selectionOne.push(numberOne);
   $('#numberOne').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice two") {
   selectionOne.push(numberTwo);
   $('#numberTwo').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice three") {
   selectionOne.push(numberThree);
   $('#numberThree').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice four") {
   selectionOne.push(numberFour);
   $('#numberFour').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice five") {
   selectionOne.push(numberFive);
   $('#numberFive').remove();
  } 

    });
}); 


//When Draw Numbers is clicked for player 2...
$('.second').click(function() {
  // assign each named variable a random number 0-40
  let numberSix = Math.floor(Math.random() * 41);
  let numberSeven = Math.floor(Math.random() * 41);
  let numberEight = Math.floor(Math.random() * 41);
  let numberNine = Math.floor(Math.random() * 41);
  let numberTen = Math.floor(Math.random() * 41);
  $('#dos').html('<select name="number-two" id="number-two"> <option>Choose Number</option><option value="Choice one" id="numberSix">'+numberSix+
   '</option><option value="Choice two" id="numberSeven">'+numberSeven+'</option><option value="Choice three" id="numberEight">'
   +numberEight+'</option><option value="Choice four" id="numberNine">'+numberNine+'</option><option value="Choice five" id="numberTen">'
   +numberTen+'</option></select>');
  $('.second').removeClass('show');

//What happens when you click a number for player 2
  $('#number-two').change(function(event) {
   selectionTwo = [];
  $('#zone-two').html($(event.currentTarget).val());
  $('.begin-text').addClass('show'); 
   if ($(event.currentTarget).val() === "Choice one") {
   selectionTwo.push(numberSix);
   $('#numberSix').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice two") {
   selectionTwo.push(numberSeven);
   $('#numberSeven').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice three") {
   selectionTwo.push(numberEight);
   $('#numberEight').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice four") {
   selectionTwo.push(numberNine);
   $('#numberNine').remove();
  } 
  else if ($(event.currentTarget).val() === "Choice five") {
   selectionTwo.push(numberTen);
   $('#numberTen').remove();
  } 

    });
}); 

//Below is what happens when you click the challenge button
$('.challenge').click(function() {
if (selectionOne > selectionTwo) {
   alert(selectionOne + ' is greater than ' + selectionTwo + '. Player 1 wins!');
   selectionOne = [];
   selectionTwo = [];
}
else if (selectionOne < selectionTwo) {
   alert(selectionTwo + ' is greater than ' + selectionOne + '. Player 2 wins!');
   selectionOne = [];
   selectionTwo = [];
}
else {
   alert(selectionOne + ' is equal to ' + selectionTwo + '. It is a tie!');
   selectionOne = [];
   selectionTwo = [];
}

          });
       });
    
