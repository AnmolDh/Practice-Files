var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keydown", function () {
    if (gameStarted === false) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    playSoundEffect(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickPattern.length - 1);
});

function nextSequence() {
    userClickPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    playSoundEffect(randomChosenColor);

}

function playSoundEffect(name) {
    var soundEffect = new Audio("./sounds/" + name + ".mp3");
    soundEffect.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("success")
        if (gamePattern.length === userClickPattern.length) {
            console.log(gamePattern);
            console.log(userClickPattern);
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        playSoundEffect("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}