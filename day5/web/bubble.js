// 이벤트 버블링

const grandma = document.querySelector('.grandma');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

const clickHandler = (e) => {
  alert(e.currentTarget.className);
  e.stopPropagation();
}

grandma.addEventListener("click",clickHandler)
parent.addEventListener("click",clickHandler)
child.addEventListener("click",clickHandler)