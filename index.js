var randomWordArr = ["chocolate", "pizza", "apple", "juice", "lemon", "martini", "vinegar", "sugar", "wattermelon"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
var hiddenwordArray;
var countLives = 10;
var answerArray = [];

function start(){
  for (var i = 0; i < randomWord.length; i++){
    answerArray[i] = "_";
  }
  hiddenwordArray = answerArray.join(" ");
  document.getElementById("answer").innerHTML = hiddenwordArray;
}

function letters(){
  var hasGuessed = 0;
  var letter = document.getElementById("letter").value;
  if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        answerArray[i] = letter;
        hasGuessed = 1;
      }
    }
    if (hasGuessed == 0) {
      --countLives;
    }
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById("lives").innerHTML = "Lives:" + countLives;
    stickman(countLives);
    if (countLives == 0) {
      document.getElementById("status").innerHTML = "You lost!";
    }
    if (!answerArray.includes("_")) {
      document.getElementById("status").innerHTML = "You won!";
    }
  }
}

function stickman(countLives) {
  if (countLives == 9) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(86, 88);
    ctx.lineTo(85, 433);
    ctx.stroke();
  }if (countLives == 8) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(86, 91);
    ctx.lineTo(250, 94);
    ctx.stroke();
  }if (countLives == 7) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(248, 91);
    ctx.lineTo(247, 159)
    ctx.stroke();
  }if (countLives == 6) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000000';
    ctx.save();
    ctx.translate(246, 195);
    ctx.scale(1, 1);
    ctx.beginPath();
    ctx.arc(0, 0, 37, 0, 6.283185307179586, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }if (countLives == 5) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(242, 240);
    ctx.lineTo(242, 369);
    ctx.stroke();
  }if (countLives == 4) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(245, 263);
    ctx.lineTo(327, 228);
    ctx.stroke();
  }if (countLives == 3) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(245, 265);
    ctx.lineTo(167, 227);
    ctx.stroke();
  }if (countLives == 2) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(244, 342);
    ctx.lineTo(302, 432);
    ctx.stroke();
  }if (countLives == 1) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(242, 342);
    ctx.lineTo(183, 430);
    ctx.stroke();
  }
}
