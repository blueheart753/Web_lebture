const rock = document.getElementById('rock'); 
const scissors = document.getElementById('scissors'); 
const paper = document.getElementById('paper'); 
const Result = document.getElementById('Result');
const user = document.getElementById('UserPic');
rock.addEventListener('click', () => {
  const Random = Math.floor(Math.random() * 3);
  const Rock = Math.floor(Math.random() * 3);
  user.innerText = `바위`;
  console.log(Rock);
  Rock > Random ? Result.innerText = `승리` : Rock == Random ? Result.innerText = `무승부` : Result.innerText = `패배`;
})

paper.addEventListener('click', () => {
  const Random = Math.floor(Math.random() * 3);
  const paper = Math.floor(Math.random() * 3);
  console.log(paper);
  user.innerText = `보`;
  paper > Random ? Result.innerText = `승리` : paper == Random ? Result.innerText = `무승부` : Result.innerText = `패배`;
})
scissors.addEventListener('click', () => {
  const Random = Math.floor(Math.random() * 3);
  const scissors = Math.floor(Math.random() * 3);
  console.log(scissors);
  user.innerText = `가위`;
  scissors > Random ? Result.innerText = `승리` : scissors == Random ? Result.innerText = `무승부` : Result.innerText = `패배`;
})