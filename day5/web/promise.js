// const p1 = new Promise(function(resolve,reject) {
  // 어렵고 복잡한 작업 ~~~
  // setTimeout(()=> resolve("p1 객체가 작업이 성공적으로 완료됨"),3000)
  // 성공했를 때!

  // 실패했을 때!
  // return reject(new Error("p1 처리 중 에러가 발생함"));
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(()=> resolve("p2 객체 작업이 성공적으로 완료됨"),4000);
// });

// const p3 = new Promise((reject) => {
//   setTimeout(()=> {
//     return reject(new Error("p3 객체 작업 중 에러 발생"));
//   },1000)
// });

// 작업이 완료된 후 어떻게 처리해줄지 (소비자~)

// p3.then(null,(reject)=> console.log())

console.time("test");

//모든 Promise 객체(p1,p2)가 완료되었을 때
// Promise.all([p1,p2]).then((resolve1,resolve2)=> {
//   console.log(resolve1,resolve2);
//   console.timeEnd("test")
// });


// p1.then();
// p2.then();
// p3.then();


// new Promise((resolve,reject)=> {
//   setTimeout(()=>{
//     resolve("완료!")
//   },1000)
//   // setTimeout(()=> {
//   //   reject(new Error("에러 발생!"))
//   // },2000)
// })
// .finally(()=>{alert("promise가 준비됨")})
// .then((result) => alert(result));

// new Promise (function(resolve,reject) {
//   setTimeout(()=> {resolve(1),1000});
// })
// .then(function(result) {
//   alert(result);
//   return result*2;
// })
// .then(function(result) {
//   alert(result);
//   return result*2;
// }
// ).then(function (result){
//   alert(result);
//   return result *2;
// });

// let promise = new Promise(function(resolve,reject) {
//   setTimeout(()=> {resolve(1)},1000)
// })
// promise.then(function(result) {
//   alert(result);
//   return result *2;
// })
// promise.then(function(result) {
//   alert(result);
//   return result *2;
// })
// promise.then(function(result) {
//   alert(result);
//   return result *2;
// })

// new Promise((resolve,reject)=> {
//   throw new  Error("에러발생");
// })
// .catch((err)=> {alert('에러 잘 처리했습니다. 정상적으로 ')})

async function f1() {
  //await 사용가능
  let p = new Promise((resolve,reject))
  setTimeout(() => {
    console.log('완료');
  },1000)
  let result = await p;
}

