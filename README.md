# web_rect

2022-12-26 ~ 2022-12-30 까지 Web Frontend 강의 backup

# Client(클라이언트) Request(요청) => Server(서버)

Server(서버) Response(응답) => Client(클라이언트)

문서의 구조, 정보위계가 명확하게 보이는 아다운 코드를 작성하자. => semantic markup
검색 엔진 최적화

태그 : HTML에서는 웹 문서에 정보를 정의해주는 방식

# */ label 태그를 선택 했을 때 input 태그가 선택되는 것: for키워드 /*

**//속성(attribute)//**를 통해 추가적인 정보를 제공한다.

*/ em : 특정 문맥 강조 /*
*/ strong : 중요, 긴급, 심각성을 알릴 때 사용 /*

<a href = "#"> 링크 </a>

href? 
**// Hypertext REFerence //**


*/ href에 전달 가능한 값들 /*

1. 웹 url / 상대 경로 
<a href = "주소"> </a>

2. 페이지 내 이동
<a href = "#id"> </a>

3. 메일 쓰기 
<a href = "mailto:메일 주소">

4. 전화 걸기 
<a href = "tel:전화번호">


<img src = "" alt="">

**// src : sorce의 약지 /**

*/ ol (ordered list) /* / */ ul(unordered list) /*

**// ol, ul의 자식 요소는 무조건 li로 와야 합니다. //**

<q> </q>

form : 사용자로부터 input을 받기 위한 태그

<form action = "" method = ""> </form>

action : "API주소" (서버쪽:url)
method : 

input : 입력창, 인풋 필드

type 값 필수!!

text, email, password, number, tel, file

*/ 각 input 값의 설명을 담당하는 Label 태그 /*

아이템 하나만 체크할 수 있도록 하는 Radio

*/ select & option /*

textarea : 줄바꿈이 되는 입력 필드

*/ Link : CSS 스타일시트를 첨부하는 태그 /*

*/ style : HTML 내에서 CSS 작성할 때 사용 /*

*/ Script : HTML 내에서 CSS 작성할 때 사용 / Body태그의 가장 마/지막에 위치! /*
