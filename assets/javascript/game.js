$(document).ready(function () {

  var goal;
  var score = 0;
  var totalwins = 0;
  var totallosses = 0;
  var buttonone;
  var buttontwo;
  var buttonthree;
  var buttonfour;

  function newnumber() {
    goal = Math.floor(Math.random() * 119) + 19;
    buttonone = Math.ceil(Math.random() * 12);
    buttontwo = Math.ceil(Math.random() * 12);
    buttonthree = Math.ceil(Math.random() * 12);
    buttonfour = Math.ceil(Math.random() * 12);
  }

  function newgame() {
    newnumber();
    score = 0;
    $("#goal").text("Goal: " + goal);
    $("#score").text("Your Score: " + score);
    $("#buttonone").attr("data-value", buttonone);
    $("#buttontwo").attr("data-value", buttontwo);
    $("#buttonthree").attr("data-value", buttonthree);
    $("#buttonfour").attr("data-value", buttonfour);
    $("#totalwins").text(totalwins);
    $("#totalosses").text(totallosses);
  }

  function win() {
    totalwins++;
    $("#wins").text("Wins: " + totalwins++);
  }

  function lose() {
    totallosses++;
    $("#losses").text("Loss: " + totallosses++);
  }

  newgame();

  $("button").on("click", function () {
    if (score >= goal) {
      return;
    }

    var value = $(this).attr("data-value");
    value = parseInt(value);
    score += value;
    $("#score").text("Current Number: " + score);

    if (score === goal) {
      alert("You Win!");
      win();
      newgame();
    }

    else if (score > goal) {
      alert("You Lose!");
      lose();
      newgame();
    }

  });
});
