const submit = document.getElementById('submit-btn');
submit.style.Color = "red";

const hiddenBtn = document.getElementsByClassName('hidden');

const [divA,divB,divC] = document.getElementsByTagName("div");
console.log(divA);

const animal = document.getElementsByName('animal');
console.log(animal);

const divs = document.querySelector("div");
const div = document.querySelectorAll("div");
console.log(div);

divA.innerText = "영역1";

divA.classList.toggle('color-red');

const newdiv = document.createElement("div");
newdiv.innerText = "추가된영역!"
newdiv.className = "color-red";
const form = document.querySelector('form')
form.appendChild(newdiv)


// 브라우저 -> 유저가 클릭, 마우스를 올려볼 수 있고
// Event!

// 키보드 -> 뭔가 입력됬을 때
// 마우스 -> 클릭 "click" / 마우스를 올렸을 때
// form -> 제출됬을 때 "submit"

const clickHandler = () => console.log("클릭!")
divA.addEventListener('click',clickHandler);
// divA.removeEventListener('click',clickHandler)

// 이벤트 버블링 / 캡처링


