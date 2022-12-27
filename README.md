# web_rect

## 2022-12-26 ~ 2022-12-30 까지 Web Frontend 강의 backup

### Client(클라이언트) Request(요청) => Server(서버)

- Server(서버) Response(응답) => Client(클라이언트)

- 문서의 구조, 정보위계가 명확하게 보이는 아다운 코드를 작성하자. => semantic markup
- 검색 엔진 최적화

- 태그 : HTML에서는 웹 문서에 정보를 정의해주는 방식

### label 태그를 선택 했을 때 input 태그가 선택되는 것: for키워드

### 속성(attribute)
- 추가적인 정보를 제공한다.

#### em : 특정 문맥 강조 
#### strong : 중요, 긴급, 심각성을 알릴 때 사용 

```html
<a href = "#"> 링크 </a>
```
- href? 
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
<q> </q>
```

- form : 사용자로부터 input을 받기 위한 태그

```html
<form action = "" method = ""> </form>
```

- action : "API주소" (서버쪽:url)
- method : 

> input : 입력창, 인풋 필드, type 값 필수!!
>> text, email, password, number, tel, file 등등...

- 각 input 값의 설명을 담당하는 Label 태그

- 아이템 하나만 체크할 수 있도록 하는 Radio

- select & option 

- textarea : 줄바꿈이 되는 입력 필드

- Link : CSS 스타일시트를 첨부하는 태그 

- style : HTML 내에서 CSS 작성할 때 사용 

- Script : HTML 내에서 CSS 작성할 때 사용 / Body태그의 가장 마/지막에 위치! 

## CSS(Cascading Style Sheet)
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

## 속기형
- padding or margin : top right bottom left;

## box
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

### float
- Float -> 가로 배치
- float를 적용하게 되면, 해당 요소의 신분이 상승
- Inline
- 다만 float로 block 신분 상승한 요소는 길막을 못함
- 따로 width를 선언하지 않은 경우
width = 부모 content-box의 100%

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

### position
- 요소를 원하는 위치에 자유롭게 이동할 수 있도록 사용
- static, relative, absolute, fixed, sticky
>(sticky의 경우 지원브라어저가 적다.)

#### Postion-static
- 모든 요소의 기본 요소는 static

#### Position-relative
>- 자기가 있던 요소를 기준으로 이동
>- float와 달리, 현재 위치를 잘 알고 있으며 

#### Position-absolute

- 붕 떠서 찾을 길 없는 자식요쇼
- 블록으로 신분상승
- 자신이 원하는 요소를 기준으로 position을 변경 가능
- position:absolute는 static이 아닌 것들을 기준으로 움직인다

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
  내용입력...
}
```
