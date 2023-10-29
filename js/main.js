let Number = 0;
let PlayBtn = document.getElementById("submit_btn");
let UserInput = document.getElementById("user_input");
let ResultArea = document.getElementById("result_area");
let ResetBtn = document.getElementById("reset_btn");
let Chances = 10;
let GameOver = false;
let ChanceArea = document. getElementById("chance_area");
let History = [];

ResetBtn.addEventListener("click", reset);
PlayBtn.addEventListener("click", play);
UserInput.addEventListener("focus",function(){UserInput.value = ""});

function RandomNumber() {
  Number = Math.floor(Math.random() * 100)+1;
  console.log(Number)
}

function play() {
  let UserValue = UserInput.value;
  if(UserValue<1 || UserValue>100) {
    ResultArea.textContent = "1~100사이로 입력해줘 우딩"
    return;
  }
  if(History.includes(UserValue)) {
    ResultArea.textContent = "정신차려 이미 입력했어 우딩"
    return;
  }
  Chances --;
  ChanceArea.textContent = `남은기회: ${Chances}`;
  if(UserValue>Number) {
    ResultArea.textContent = "돼지야 내려!";
  } else if(UserValue<Number) {
    ResultArea.textContent = "돼지야 올려!";
  } else {
    ResultArea.textContent = "고생했어 우딩!!";
    PlayBtn.disabled = true;
  }
  History.push(UserInput.value)

  if(Chances<1) {
    GameOver = true;
  }
  if(GameOver) {
    PlayBtn.disabled = true;
    ChanceArea.textContent = "멍청하네 돼지?"
  }
}

function reset() {
  UserInput.value = ""
  RandomNumber()
  ResultArea.textContent = "결과는 여기에 나올거야"
  Chances = 10;
  ChanceArea.textContent = `남은기회: ${Chances}`;
  PlayBtn.disabled = false;
  History = [];
}

RandomNumber()