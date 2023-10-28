// 랜덤번호지정
// start라는 버튼을 누르면 게임시작
// 만약 유저가 정답을 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!!!
// 랜덤번호 > 유저번호 Up!!
// Reset 버튼을 누르면 게임이 리셋
// 10번의 기회를 쓰면 게임이 끝 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 경고, 기회를 깍지 않음
// 유저가 이미 입력한 숫자를 또 입력하면 경고, 기회를 깍지 않음

let Number= 0;
let ResultArea = document.getElementById("result_area");
let UserInput = document.getElementById("user_input");
let SubmitBtn = document.getElementById("submit_btn");
let ResetBtn = document.getElementById("reset_btn");
let Chances = 10;
let GameOver = false;
let ChanceArea = document.getElementById("chance_area")
let History = [];

ChanceArea.textContent = `남은기회:${Chances}`;
SubmitBtn.addEventListener('click', submit);
ResetBtn.addEventListener('click', reset);
UserInput.addEventListener("focus",function(){UserInput.value=""})

function RandomNumber() {
  
  Number = Math.floor(Math.random() * 100) + 1;
  console.log("정답", Number);
}

function submit() {
  let UserValue = UserInput.value
  if(UserValue<1 || UserValue>100) {
    ResultArea.textContent="1~100사이 숫자를 입력해 주세요."
    return;
  }
  if(History.includes(UserValue)) {
    ResultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
    return;
  }
  Chances --;
  ChanceArea.innerHTML = `남의 기회:${Chances}`;
  History.push(UserValue);
  if(UserValue < Number) {
    ResultArea.textContent = "돼지야 올려!!"
  }else if(UserValue > Number) {
    ResultArea.textContent = "돼지야 내려!!"
  }else {
    ResultArea.textContent = "돼지야 고생했어"
    GameOver=true
  }
  console.log(History)
  if(Chances<1) {
    GameOver=true;
  }
  if(GameOver){
    SubmitBtn.disabled = true;
  }
}

function reset() {
  UserInput.value = "";
  // 새로운 번호 생성
  RandomNumber();
  ResultArea.textContent = "결과값이 여기 나와"
  GameOver = false;
  SubmitBtn.disabled = false;
  Chances = 10;
  ChanceArea.innerHTML = `남의 기회:${Chances}`;
  History = [];
}

RandomNumber();
