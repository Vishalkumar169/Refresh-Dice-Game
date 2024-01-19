// var n = math.random();
// n = n * 6;
// n = math.floor(n) + 1;
// console.log(n);

// var x = math.floor(math.random() * x) + 1;

var x = Math.floor(Math.random() * 6) + 1

var randomDiceImage = "dice" + x + ".png"
var randomImageSource = "images/" + randomDiceImage

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource)

var y = Math.floor(Math.random() * 6) + 1
var randomDiceImage2 = "dice" + y + ".png";
var randomImageSource2 = "images/" + randomDiceImage2

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


if (x > y) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Win"
}
else if (x < y) {
    document.querySelector("h1").innerHTML = "🚩 Player2 Win"
}
else {
    document.querySelector("h1").innerHTML = "🚩 Draw"
}