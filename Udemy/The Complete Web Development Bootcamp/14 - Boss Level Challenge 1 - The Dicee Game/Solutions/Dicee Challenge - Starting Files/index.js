var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 2 Won";
} else {
    document.querySelector(".container h1").textContent = "Draw";
}

