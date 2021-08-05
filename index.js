
var randomWordArr = ["chocolate", "pizza", "apple", "juice", "lemon", "martini", "vinegar", "sugar", "wattermelon"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
var underline;
var count = 10;
var answerArray = [];

function start(){
  for (var i = 0; i < randomWord.length; i++){
    answerArray[i] = "_";
  }
  underline = answerArray.join(" ");
  document.getElementById("answer").innerHTML = underline;
}
function Letter(){
  var guessed = 0;
  var letter = document.getElementById("letter").value;
  if (letter.length > 0) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === letter) {
        answerArray[i] = letter;
        guessed = 1;
      }
    }
    if (guessed == 0) {
      --count;
    }
    document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById("lives").innerHTML = "Lives:" + count;
    stickman(count);
    if (count == 0) {
      document.getElementById("status").innerHTML = "You lost!";
    }
    if (!answerArray.includes("_")) {
      document.getElementById("status").innerHTML = "You won!";
    }
  }
}

function stickman(count) {
  if (count == 9) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(86, 88);
    ctx.lineTo(85, 433);
    ctx.stroke();
  }if (count == 8) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(86, 91);
    ctx.lineTo(250, 94);
    ctx.stroke();
  }if (count == 7) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(248, 91);
    ctx.lineTo(247, 159)
    ctx.stroke();
  }if (count == 6) {
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
  }if (count == 5) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(242, 240);
    ctx.lineTo(242, 369);
    ctx.stroke();
  }if (count == 4) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(245, 263);
    ctx.lineTo(327, 228);
    ctx.stroke();
  }if (count == 3) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(245, 265);
    ctx.lineTo(167, 227);
    ctx.stroke();
  }if (count == 2) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(244, 342);
    ctx.lineTo(302, 432);
    ctx.stroke();
  }if (count == 1) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(242, 342);
    ctx.lineTo(183, 430);
    ctx.stroke();
  }
}
