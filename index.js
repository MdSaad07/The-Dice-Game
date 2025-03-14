var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var random_number_one = Math.floor(Math.random() * 6) + 1;
var random_number_two = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/" + images[random_number_one - 1]);
document.querySelector(".img2").setAttribute("src", "images/" + images[random_number_two - 1]);
if (random_number_one === random_number_two) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (random_number_one > random_number_two) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}