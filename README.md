# 2022-12-26 ~ 2022-12-30 까지 Web Frontend 강의 backup

## HTML (Hyper Text Markup Language)

#### Client(클라이언트) Request(요청) => Server(서버)

- Server(서버) Response(응답) => Client(클라이언트)

- 문서의 구조, 정보위계가 명확하게 보이는 아다운 코드를 작성하자. =>
semantic markup
- 검색 엔진 최적화

- 태그 : HTML에서는 웹 문서에 정보를 정의해주는 방식

- Label 태그를 선택 했을 때 input 태그가 선택되는 것: for키워드

### 속성(attribute)
- 추가적인 정보를 제공한다.

- em : 특정 문맥 강조 
- strong : 중요, 긴급, 심각성을 알릴 때 사용 

```html
<a href = "#"> 링크 </a>
```
- href 란?
- Hypertext REFerence 
- href에 전달 가능한 값들 

1. 웹 url / 상대 경로 
```html
<a href = "주소"> </a>
```
2. 페이지 내 이동
```html
<a href = "#id"> </a>
```
3. 메일 쓰기
```html
<a href = "mailto:메일 주소">
```
4. 전화 걸기
```html
<a href = "tel:전화번호">
```

<img src = "" alt="">

- src : sorce의 약지 

> ol (ordered list)  /  ul(unordered list)
>>ol, ul의 자식 요소는 무조건 li로 와야 합니다. 

```html
<q> 일부분 인용 </q>
```

- form : 사용자로부터 input을 받기 위한 태그

```html
<form action = ""API주소" (서버쪽:url)" method = ""GET" | "POST""> </form>
```

> input : 입력창, 인풋 필드, type 값 필수!!
>> text, email, password, number, tel, file 등등...

- 각 input 값의 설명을 담당하는 Label 태그

- 아이템 하나만 체크할 수 있도록 하는 Radio

- select & option 

- textarea : 줄바꿈이 되는 입력 필드

- Link : CSS 스타일시트를 첨부하는 태그 

- style : HTML 내에서 CSS 작성할 때 사용 

- Script : HTML 내에서 CSS 작성할 때 사용 / Body태그의 가장 마/지막에 위치! 

# CSS(Cascading Style Sheet)
Document + Style
' ; ' CSS 한 문장 끝날 때마다 필수로 작성

## CSS 사용하는 방법 3가지
1. link 태그 사용
```html
<link rel = "stylesheet" href = "./style.css">
```
2. head 태그 내에 style 태그 사용
```css 
<style> 
selecter {
  propertive;
}
</style>
```
3. inline 태그 사용
```html
<h5 style ="propertive"> 이렇게 사용하지 말아요 </h5> 
```

### 속기형
- padding or margin : top right bottom left;

## Box
1. box type => box model 이 바뀐다.
2. box type : block, inline요소
- F12를 눌러 display를 검색해서 실제 사이트에서 각각의 요소가 어떤 요소인지 알수 있음 

### Block
- Block -> 길막?
- 만약 1000px 블록 안에 400px 블록을 집어 넣는 다면 남은 600px은  자동으로 margin이 들어간다.
- width,height,margin,padding 이 들어간다.

### Block 성질
- 따로 width를 설정하지 않은 경우 해당 블럭은 부모의 블럭요소의 width 100%를 만든다.
- marig  : 0 auto; -> 블럭요소를 중앙 정렬을 시킬 수 있다 (단 Block 요소 일때만 가능) 
- address , article, asdie, audio, blockquote, canvas, dd, div, dl, fieldset, figcation, figure, footer, form, h1 ~ h6, header, hgroup, hr, noscipt, ol, output, p, pre, section, table, ul, video

### Inline
- Inline -> 흐름

### Block vs Inline
- Block = 면
- Inline = 선
- 면(영역) VS 선(흐름)

### Inline-block
- block 요소와 inline요소 각각의 좋은 점을 모두 갖고 있는 요소

- Inline 처럼 가로로 흐르는 동시에 block처럼 영역을 잡을 수 있다
(원래 사용불가능 했던 CSS요소도 사용가능!)

- display: inline-block으로 강제 할 수도 있으며
대표적으로 
```html
<button></button> / <input type =""> / <select option="">
```

### Float
- Float -> 가로 배치
- float를 적용하게 되면, 해당 요소의 신분이 상승
- Inline
- 다만 float로 block 신분 상승한 요소는 길막을 못함
- 따로 width를 선언하지 않은 경우, width = 부모 content-box의 100%

### Float, how to fix - 달달 방법
- overflow : hidden; 사용
> Clearfix
>> float로 인해 망가진 레이아웃을 고치기 위해 탄생한 속성
>>> clear : left | right | both
>>> clear : left => float : left에게 영향 받지 않는다
>>> clear : right -> float : right 에게 영향 받지 않는다
>>> clear : both -> float : left, right에게 영향 받지 않는다.
- 의미없는 html 코드를 추가하기보다는 CSS로 가상의 요소를 삽입하는 방식을 조금 더 권장

```css
.parent::after {
  content: '';
  display: block;
  clear: left:
}
```

### Position
- 요소를 원하는 위치에 자유롭게 이동할 수 있도록 사용
- static, relative, absolute, fixed, sticky
>(sticky의 경우 지원브라어저가 적다.)

#### Position-static
>- 모든 요소의 기본 요소는 static

#### Position-relative
>- 자기가 있던 요소를 기준으로 이동
>- float와 달리, 현재 위치를 잘 알고 있으며 

#### Position-absolute

>- 붕 떠서 찾을 길 없는 자식요쇼
>- 블록으로 신분상승
>- 자신이 원하는 요소를 기준으로 position을 변경 가능
>- position:absolute는 static이 아닌 것들을 기준으로 움직인다

#### Position-fixed
- absolute와 동일한 현상이 발생
- fixed <--> absulte 차이점
> fixed 기준점 : viewport

#### Position-z-index
- 요소가 붕 떠 있을때, 해당 요소의 수직 레벨이 생성됩니다.
- 붕 뜬 요소들을 겹치고 싶을 때, z-index값을 사용합니다.

#### Flexbox
- 정렬의 끝판왕! float, position 대신 flexbox 쓰시면 된다.
##### 사용방법
> 1. flexbox 쓰겠다고 선언
> 2. 가로 정렬 / 세로 정렬 선택
> 3. 무조건 한 줄 안에 다 정렬할지 / 여러 줄을 사용할지
> 4. 1 ~ 3번 과정을 이용해서 flexbox 파티에 이용

#### 가로 정렬 / 세로 정렬 선택
- flex-direction : row | column; 
> (row-reverse, column-reverse)
- flex를 사용하게 되면 보이지 않는 두 개의 축(Axis)가 생성된다.
>가로 방향으로 정렬하면 가로 방향이 기본 축, 세로방향으로 정렬하면 세로 방향이 기본 축이 되며, 기본적으로는 가로 방향 정렬이다.

#### 무조건 한 줄 안에 다 정렬할지
- flex-wrap : nowrap 요소 사용
> 감싸지(wrap) 않고 자식의 사이즈를 줄여서라더 한줄로 정리 하는 옵션
- align-items : flex-start;
- flex-wrap : wrap인 경우, 축이 2개가 생겨서 정렬이 예상과 다르게 되는 경우가 발생함

### Media Query 
- 반응형 웹을 만들기 위해 필수적인 요소!
- 접속한 브라우저에게 띠 밎게 알아서 보이도록 합니다.

#### 필수 요소
- viewport meta (HTML)
``` html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```css
@media screen and (min-width:768px) {
  내용입력....
}
```
### Typography
- font-size
#### px
>절대 단위
#### em
> 실제 적용된 폰트 사이즈(내가 font-size를 24px로 설정하고, width=20em 해주게 되면 width는 480px)

#### Letter-spacing
- 글자와 글자 사이 자간
- px, em 중 현재 폰트 사이즈에 비례해서 변할 수 있도록 em 많이 사용

#### font-weight
- 두깨
#### color 
> 글자 색상
>> #0066ff(Hex), #fff(RGB), #9a8f5e(0.005)(Alpa)

#### text-decoration
-  텍스트에 줄 넣는 속성

#### webfont
- 사용자의 컴퓨터에 CSS에 사용한 폰트가 없는 경우 Web에서 받아올 수 있음

### Grid
- 페이지 전체를 설꼐할 때 디자인 적 방법론이 존재, 디자인을 할 때, 전체 화면을 특정 간경으로 쪼개서 비례적으로 설계를 함
>- 격자무늬(grid)에 따라서 설계를 한다.
>- grid system에 때라서 디자이너가 설계를 해주면, 우라도 맞춰서 구현을 해야한다. (grid 칸 수는 통상적으로 12)

#### flex와 grid 차이점
- Flex : 한 방향 레이아웃 시스템(1차원)
- Grid : 가로, 세로 레이아웃 시스템(2차원)
>- 정렬하고자 하는 요소가 자식으로 존재하는 부모 태그에게 display:grid 속성을 부여한다.
>> 
```css
.parent {
  display : grid;
}

.parent {
  display : inline-grid;
  /* Inline 방식의 grid */
}
```
- 전체를 어떤 비율로 쪼갤지 먼저 생각하기
>- gird-template-rows : 행
>- gird-template-columns : 열
>- fr : 숫자 비율대로 크기를 나눈다
>- 1fr 1fr 1fr : 1:1:1 비율인 3개의 rows를 만듦

### repeat
- repeat(반복횟수ㅡ 반복값)


- 최솟값, 최댓값을 지정할 수 있는 minmax 함수를 사용하여 해당공간의 최소 크기, 최대 크기를 지정 할 수 있다.
- 보통 최소 높이 값을 설정하고, 안의 요소가 더 큰 경우 해당 요소의 높이에 따라 자동으로 늘어나는 auto 값을 사용하여 다음과 같이 CSS를 작성 할 수 있다.
> 
```css
.parent {
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(4,minmax(100px, auto));
  grid-template-columns: repeat(4,minmax(100px,auto));
}
```

- 부모 div를 어떤 비율로 나눌지 다 설계했다면, 이제 그 안에 들어가는 요소에게 영역을 지정해준다.

# 자바스크립트
### - 배워야 하는 이유 -
- 프로그래밍적으로 웹 브라우정를 제어하기 위해 만들어진 언어
- 웹사이트를 보다 인터렉티브하게 만들수 있음
- 웹 전체를 아우르는(사실상) 유일한 언어
- 브라우저에 내장되어, 설치할 필요조차 없는 언어
- 포른트엔드 개발을 희망하는 경우, 특히 필수적인 언어!

#### Set자료형
- 중복된 값은 모두 제거 해준다.
> 반복되는 모든 변수의 사용가능 하다. 
```js
const setArr = new Set();
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
setArr.add(1);
console.log(setArr);
```
#### 객체
1. 키값으로 문자, Symbol 이라는 일부 자료형만 허용
2. 정렬과 관여 X
3. 안의 데이터를 살펴보려면, 키 값을 통해 배열을 얻어서 배열을 순회


#### map(맵)
1. 키값으로 모든 데이터 타입을 허용
2. 삽입된 순서대로 정렬
3. map.size로 크기를 바로 알 수 있음
4. map 자체로 순회 할 수 있음

#### 연산자
- 산술, 증감, 대입, 비교, 논리,(비트,Nullish)

#### 증감( ++ , --)
 ```js
let age = 10;
age += 1;
age++;
```

#### 비교 연사자
- == (단순 값 비교) VS === (자료형까지 비교)
```js
let age = "10";
if(age === 10) {
  console.log("어라?");
}
```

#### 대입연산자
- &&=
- //=

#### ...문법
```js
console.log(sum(nums[0],nums[1]));
console.log(sum(...nums));
console.log(...arr);
```
#### if문 
```js
if(arr[0] === 60) {
  // 참일 때 실행;
}else if(arr[0] === 1) {
  // 두번째 조건이 참일때 실행;
}
else {
  // 거짓일 때 실행;
}
```
- If문이 있다고 반드시 else가 필요하지 않다
```js
function getHelloCustomer(user) {
  if(user.age < 20) {
    report(user)
  }else {
    return '안녕하세요';
  }

  ============================================

  if(user.age < 20) {
    report(user)
  }
    return '안녕하세요';
}
```

#### 배열
##### Array.isArray()
- 배열인지 아닌지 구별 해주는 문법
##### Array.form()
- 유사배열
>- 배열 행새를 하는 객체
- Array.form()
>- 해당 유사 배열을 새로운 배열로 만들어주는 문법
```js
const objLikeArr = {0:'hello',1:'javascript',length:2}; // <-- 유사 배열
const converted = Array.from(objLikeArr);
console.log(converted);
```
##### Array.prototype.find()
-주어진 판별 함수를 만족하는 첫번째 요소의 인덱스를 반환, 요소가 없으면 undifind를 반환

##### Arrays.prototype.map()
- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출 한 결과를 모아 새로운 배열을 반환함

### Function(함수)
- 재사용 할 수 있는 코드를 묶어 두는 것
```js
  function 함수이름(매개변수,...) {
     수행할 코드;
      ...;
        ...;
          ...;
  }

  함수이름(호출값,호출값2);
```

##### Arow function (화살표 함수)
- 코드가 엄청나게 간결해진다.
> 함수 내에 콜백함수로 건네줄 때 많이 사용
```js
  (매개변수) => {실행할 문장...}

  const sum2 = function(a,b) {
  return a+b;
};

===================================================

const sum3 = (a,b) => a+b;
```

#### arrow function의 단점
- 기본적으로 this 함수는 window 객체를 호출 / 자기 자신 참조 불가
- arguments 사용불가 (찾을 수 없음)
- 유사객체로 저장
> Array form(argument) --> 새롭게 배열을 만듦

#### Array.sort()
- 배열을 오름차순 정렬시킨다
```js
배열이름.sort(a,b);
```
> a-b < 0 = (a,b) | a-b > 0 = (b,a) | a-b == 0 =(a,b)
