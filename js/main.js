document.addEventListener("DOMContentLoaded", function() {
  let playBtn = document.getElementById("submit_btn");
  let userInput = document.getElementById("user_input");
  let resultArea = document.getElementById("result_area");
  let resetBtn = document.getElementById("reset_btn");
  let chanceArea = document.getElementById("chance_area");

  let Number = 0;
  let Chances = 10;
  let gameOver = false;
  let History = [];

  resetBtn.addEventListener("click", reset);
  playBtn.addEventListener("click", play);
  userInput.addEventListener("focus", function () {
    userInput.value = ""
  });

  function randomNumber() {
    Number = Math.floor(Math.random() * 100) + 1;
    console.log(Number)
  }

  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      play();
    }
  });
  
  function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
      resultArea.textContent = "1~100사이로 입력해주세요."
      return;
    }
    
    if (History.includes(userValue)) {
      resultArea.textContent = "이미 입력한 숫자입니다."
      return;
    }

    Chances--;
    chanceArea.textContent = `남은 기회: ${Chances}`;
    if (userValue > Number) {
      resultArea.textContent = "더 작은 숫자를 입력하세요.";
    } else if (userValue < Number) {
      resultArea.textContent = "더 큰 숫자를 입력하세요.";
    } else {
      resultArea.textContent = "정답입니다!";
      playBtn.disabled = true;
    }
    History.push(userInput.value)

    if (Chances < 1) {
      gameOver = true;
    }
    if (gameOver) {
      playBtn.disabled = true;
      chanceArea.textContent = "잘못된 입력을 하셨습니다."
      resultArea.textContent = "리셋 버튼을 눌려주세요."
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

  randomNumber();
});