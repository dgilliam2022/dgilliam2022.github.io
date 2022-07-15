$(document).ready(() => {

const animelist = [
  "30 fire",
  "25 water",
  "20 earth",
  "15 fire",
  "17 water",
  "21 earth",
  "28 water",
  "5 earth",
  "12 fire",
  "14 water"
];
let holder =[];


$('.click').click(function() {
 let counterOne = 1;
 while (counterOne < 6) {
    let randomAnswer = animelist[Math.floor(Math.random() * animelist.length)];
    holder.push(randomAnswer);
    counterOne++;
  }
    alert(holder);
    holder = [];

  });
});