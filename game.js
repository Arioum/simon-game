const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let gameStarted = false;
let level = 0;

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("h1").text("Level " + level);
};

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern[userClickedPattern.length -1]);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keypress(() => {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[gamePattern.length -1]) {
        console.log("success");
    } 
    console.log("wrong");
}