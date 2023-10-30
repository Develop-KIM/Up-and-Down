let Number = 0;
let playBtn = document.getElementById("submit_btn");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("result_area");
let resetBtn = document.getElementById("reset_btn");
let Chances = 10;
let gameOver = false;
let chanceArea = document. getElementById("chance_area");
let History = [];

resetBtn.addEventListener("click", reset);
playBtn.addEventListener("click", play);
userInput.addEventListener("focus",function(){userInput.value = ""});

function randomNumber() {
  Number = Math.floor(Math.random() * 100)+1;
  console.log(Number)
}

function play() {
  let userValue = userInput.value;
  if(userValue<1 || userValue>100) {
    resultArea.textContent = "1~100사이로 입력해줘 우딩"
    return;
  }
  if(History.includes(userValue)) {
    resultArea.textContent = "정신차려 이미 입력했어 우딩"
    return;
  }
  Chances --;
  chanceArea.textContent = `남은 기회: ${Chances}`;
  if(userValue>Number) {
    resultArea.textContent = "돼지야 내려!";
  } else if(userValue<Number) {
    resultArea.textContent = "돼지야 올려!";
  } else {
    resultArea.textContent = "고생했어 우딩!!";
    playBtn.disabled = true;
  }
  History.push(userInput.value)

  if(Chances<1) {
    gameOver = true;
  }
  if(gameOver) {
    playBtn.disabled = true;
    chanceArea.textContent = "멍청하네 돼지?"
    resultArea.textContent = "다시시작 해"
  }
}

function reset() {
  userInput.value = ""
  randomNumber()
  resultArea.textContent = "UP-Down!!"
  Chances = 10;
  chanceArea.textContent = `남은 기회: ${Chances}`;
  playBtn.disabled = false;
  History = [];
}

randomNumber()