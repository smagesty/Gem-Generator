// var for score
var wins = 0;
var losses = 0;
var score = 0;
var maxScore = 0;
//var for gems
var purple = 0;
var green = 0;
var pink = 0;
var blue = 0;

//Random Number between Min and Max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  $(document).ready(function() {
  //max score
    maxScore = getRandomInt(19, 120);
    
    $("#scoreToMatch").text("Your goal to win: " + maxScore);
  
    function resetGame() {
      score = 0;
      $("#score").text("Score So Far: " + score);
      maxScore = getRandomInt(19, 120);
      console.log("Max Score", maxScore);
      $("#scoreToMatch").text("Your goal to win: " + maxScore);
      purple = 0;
      green = 0;
      pink = 0;
      blue = 0;
    } //reset game when over
    function checkWin() {
      if (score === maxScore) {
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
      } else if (score > maxScore) {
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
      }
    } 

    //Click Event for Gem 1
    $("#gem1").on("click", function() {
      if (purple === 0) {
        purple = getRandomInt(1, 12);
        console.log(purple);
      }
      score += purple;
      $("#score").text("Score So Far: " + score);
      checkWin();
    });
    
    //Click Event for Gem 2
    $("#gem2").on("click", function() {
      if (green === 0) {
        green = getRandomInt(1, 12);
        console.log(green);
      }
      score += green;
      $("#score").text("Score So Far: " + score);
      checkWin();
    });
  
    //Click Event for Gem 3
    $("#gem3").on("click", function() {
      if (pink === 0) {
        pink = getRandomInt(1, 12);
        console.log(pink);
      }
      score += pink;
      $("#score").text("Score So Far: " + score);
      checkWin();
    });
    //Click Event for Gem 4
    $("#gem4").on("click", function() {
      if (blue === 0) {
        blue = getRandomInt(1, 12);
        console.log(blue);
      }
      score += blue;
      $("#score").text("Score So Far: " + score);
      checkWin(blue);
    });
  
  });
  
