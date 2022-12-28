// 참조자료형

const arr = [1,2,3];
arr[0] = 60;
console.log(arr); // <- 오류 나지 않음

const Student = {
  name:"yeji",
  age:40,
};
console.log(Student["name"]);
console.log(Student.name);

const arr2 = [1,1,0,0,3];

const setArr = new Set();
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
console.log(setArr);

let age = "10";
if(age === 10) {
  console.log("어라?");
}

const Studentmap = new Map();
Studentmap.set("name","kibok");


const nums = [10,20];
function sum(a,b) {
  return a+b;
}

console.log(sum(nums[0],nums[1]));
console.log(sum(...nums));
console.log(...arr);

if(arr[0] === 60) {
  // 참일 때 실행;
}else if(arr[0] === 1) {
  // 두번째 조건이 참일때 실행;
}
else {
  // 거짓일 때 실행;
}

console.log(arr[0]);
switch(arr[0]) {
  case 60:
    console.log("10이 맞습니다.");
    break;
  case 10:
    console.log("1이 맞습니다.");
    break;
  default: 
    console.log("아무 것도 아닙니다.");
    break;
}

let i =0;
for(i =0; i<10; i++) {
  console.log(i);
}

let j =0;
for(; j<10;) {
  console.log(j++);
}