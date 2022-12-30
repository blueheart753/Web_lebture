const rock = document.getElementById('rock'); 
const scissors = document.getElementById('scissors'); 
const paper = document.getElementById('paper'); 
const Result = document.getElementById('Result');
const user = document.getElementById('UserPic');
const AiPic = document.querySelector('#AiPic');
const userScore = document.querySelector('#userScore');
const AiScore = document.querySelector('#AiScore');
let Aiscore = 0;
let userscore = 0;

function score() {
  if(Result.innerText === "승리") {
    userscore +=1;
    userScore.innerText = `나: ${userscore}`;
  }else if(Result.innerText === "패배"){
    Aiscore +=1;
    AiScore.innerText =`COM: ${Aiscore}`;
  }
}

scissors.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 4);
  const scissors = 2;
  console.log(Random)
  user.innerText = `가위`;
  if(Random === 0) {
    Result.innerText = "패배";
    AiPic.innerText = "바위";
  }else if(scissors === Random) {
    Result.innerText = "무승부";
    AiPic.innerText = "가위";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "보";
  }
  score();
})


rock.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 3);
  const Rock = 0;
  user.innerText = `바위`;
  console.log(Random)
  if(1 === Random) {
    Result.innerText = "패배";
    AiPic.innerText = "보";
  }else if(Rock === Random) {
    Result.innerText = "무승부";
    AiPic.innerText = "바위";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "가위";
  }
  score();
})

paper.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 4);
  const paper = 1;
  console.log(paper);
  user.innerText = `보`;
  if(Random === 2) {
    Result.innerText = "패배";
    AiPic.innerText = "가위";
  }else if(Random === paper) {
    Result.innerText = "무승부";
    AiPic.innerText = "보";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "바위";
  }
  score();
})
