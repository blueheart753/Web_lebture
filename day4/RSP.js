const rock = document.getElementById('rock'); 
const scissors = document.getElementById('scissors'); 
const paper = document.getElementById('paper'); 
const Result = document.getElementById('Result');
const user = document.getElementById('UserPic');
const AiPic = document.querySelector('#AiPic');
function RandomRCP() {
  if(Random === 1) {
    Random = '바위'
  }else if(Random === 2) {
    Random = '보'
  }else {
    Random = '가위'
  }
}

rock.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 4);
  const Rock = 0;
  user.innerText = `바위`;
  console.log(Rock);
  console.log(Random)
  if(2 < Random) {
    Result.innerText = "패배";
    AiPic.innerText = "보";
  }else if(Rock === Random) {
    Result.innerText = "무승부";
    AiPic.innerText = "바위";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "가위";
  }
})

paper.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 4);
  const paper = 1;
  console.log(paper);
  user.innerText = `보`;
  if(Random > 2) {
    Result.innerText = "패배";
    AiPic.innerText = "가위";
  }else if(Random === 1) {
    Result.innerText = "무승부";
    AiPic.innerText = "보";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "바위";
  }
})

scissors.addEventListener('click', () => {
  let Random = Math.floor(Math.random() * 4);
  const scissors = 2;
  console.log(scissors);
  console.log(Random)
  user.innerText = `가위`;
  if(Random === 1) {
    Result.innerText = "패배";
    AiPic.innerText = "보";
  }else if(scissors === Random) {
    Result.innerText = "무승부";
    AiPic.innerText = "가위";
  }else {
    Result.innerText = "승리";
    AiPic.innerText = "바위";
  }
})