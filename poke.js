console.log(window);

const GameRule = ["e", "f", "w"];
let player1Point = 0;
let player2Point = 0;

const showPoint1 = document.querySelector("#showPoint1");
const showPoint2 = document.querySelector("#showPoint2");

const showResult1 = document.querySelector("#showResult1");
const showResult2 = document.querySelector("#showResult2");

const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");

const playerName = prompt("Welcome to Pokemon Game! Enter your name:");
alert(`Hello, ${playerName}! Let's play Pokemon Game.`);

function randomElement() {
  const randomIndex = Math.floor(Math.random() * GameRule.length);
  return GameRule[randomIndex];
}

function resultGame(u, c) {
  console.log(u);
  console.log(c);
  image1.src = `./${u}.png`;
  image2.src = `/${c}.png`;

  if (u == "w" && c == "f") {
    console.log("WIN");
    player1Point += 1;
    showPoint1.innerHTML = player1Point;
    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";
    showResult1.style.color = "green";
    showResult2.style.color = "red";
  } else if (u == "f" && c == "e") {
    console.log("WIN");
    player1Point += 1;
    showPoint1.innerHTML = player1Point;
    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";
    showResult1.style.color = "green";
    showResult2.style.color = "red";
  } else if (u == "e" && c == "w") {
    console.log("WIN");
    player1Point += 1;

    showPoint1.innerHTML = player1Point;
    showResult1.innerHTML = "WIN";
    showResult2.innerHTML = "LOSE";
    showResult1.style.color = "green";
    showResult2.style.color = "red";
  } else if (u == c) {
    console.log("DRAW");

    showResult1.innerHTML = "DRAW";

    showResult2.innerHTML = "DRAW";

    showResult1.style.color = "gray";
    showResult2.style.color = "gray";
  } else {
    console.log("LOSE");
    player2Point += 1;

    showPoint2.innerHTML = player2Point;

    showResult1.style.color = "red";
    showResult2.style.color = "green";

    showResult1.innerHTML = "LOSE";
    showResult2.innerHTML = "WIN";

  }
}

window.addEventListener("keypress", function (e) {
  const userChoose = e.key;

  if (GameRule.indexOf(userChoose) != -1) {
    const compChoose = randomElement();

    resultGame(userChoose, compChoose);
  } else {
    alert("Wrong selection, please press one of these buttons: e , f or w");
  }
});