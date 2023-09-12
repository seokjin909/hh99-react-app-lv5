<h3>항해99 React Lv.4 - 지금까지 배운 내용을 활용하여 나만의 React App 을 만들어보기 🔥</h3>

# React 과제 Lv. 4

<aside>
💡 **Goal : 로그인/회원가입 기능 추가하기**

</aside>

- 지금까지 배운 내용을 활용하여 나만의 React App 을 만들어봅시다.
  - 레벨 4에서는 로그인, 회원가입 기능을 만들고 5에서 원하는 추가기능을 붙여 볼 거에요!

<aside>
⚙ **features : 구현해야 할 기능이에요.**

</aside>

- 로그인, 회원가입 페이지를 각각 구현합니다.
- 아이디와 비밀번호가 모두 입력되지 않으면, API 요청을 보내지 않도록 합니다.
- 서버의 에러를 `alert` 또는 직접 만든 모달 등을 통해 유저에게 표시합니다.
  - id가 중복된 경우
  - 존재하지 않는 아이디를 입력한 경우
  - 비밀번호가 잘못된 경우
- JWT의 유효시간이 만료된 경우, 유저에게 재로그인을 할 것을 표시합니다.
- 로그인을 하지 않은 경우에는 `로그인/회원가입` 페이지만 접근 가능합니다.
- 로그인을 이미 한 경우 `로그인/회원가입` 페이지는 접근 할 수 없습니다.
- 로그아웃 기능을 구현합니다.

### 참고사항

- mock 서버에서 발급된 JWT의 유효시간은 60분입니다.
- mock 서버 URL : http://3.38.191.164/
- mock 서버 API 명세
  | 기능 | method | url | request | response | error |
  | ------------- | ------ | -------- | ------- | -------- | ----- |
  | 유저 회원가입 | post | register | body |
  id: string
  password: string | 201
  없음 | 401
  이미 존재하는 유저 id 입니다.
  (validation)
  401
  id 또는 password가 존재하지 않습니다.
  401
  id 또는 password가 string이 아닙니다. |
  | 유저 로그인 | post | login | body
  id: string
  password: string | 201
  token: string
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvYjIxMDAiLCJpYXQiOjE2NzI3NTUyMjMsImV4cCI6MTY3Mjc1NTI4M30.aVVgNMb69m4HQ_OxkJ9Rpd5or98OnEMU8SajJZvNnkk"
  } | 401
  존재하지 않는 유저입니다.
  401
  비밀번호가 일치하지 않습니다.
  (validation)
  401
  id 또는 password가 존재하지 않습니다.
  401
  id 또는 password가 string이 아닙니다.
  |
  | 유저 인증 확인 | get | user | header
  authorization: string
  ex) authorization : Bearer asdffsfsdfafljeope
  | 200
  message: string
  {message: “인증에 성공한 요청입니다.”} | 401
  토큰이 만료되었습니다. 토큰은 60분간 유지됩니다.
  401
  위조되었거나 잘못된 형식의 token입니다.(${err.message})
  (validation)
  401
  header에 authorization 정보가 존재하지 않습니다.
  401
  tokenType이 올바르지 않습니다.(보낸 type은 "${tokenType}" 입니다.)
  401
  token value가 존재하지 않습니다. |

  - 새벽 5시 마다, 모든 데이터 초기화

  ### 코드 컨벤션

  데이터베이스는 json-server를 활용하고, React-Query를 사용하여 작업한다.
