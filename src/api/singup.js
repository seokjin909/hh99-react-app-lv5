import axios from "axios";

const register = async (newUser) => {
  let resultMessage = "회원가입 처리중...";
  await axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL}register`, newUser)
    .then((response) => {
      resultMessage = "회원가입 성공";
    })
    .catch((error) => {
      console.log(error);
      const { message } = error.response.data;
      resultMessage = message;
    });
  return resultMessage;
};

const login = async (user) => {
  let resultMessage = "로그인 처리중...";
  await axios
    .post(`${process.env.REACT_APP_MOCK_SERVER_URL}login`, user)
    .then((respone) => {
      const token = respone.data.token;
      sessionStorage.setItem("token", token);
      getUser(token);
      resultMessage = "로그인 성공";
    })
    .catch((error) => {
      console.log(error);
      const { message } = error.response.data;
      resultMessage = message;
    });
  return resultMessage;
};

// 로그인이 성공하면 Token 값을 받아서 유저 인증 확인 처리
const getUser = async (Usertoken) => {
  const hearders = { authorization: `Bearer ${Usertoken}` };
  const response = await axios.get(`${process.env.REACT_APP_MOCK_SERVER_URL}user`, { headers: hearders });
  console.log(response);
  console.log(response.status);
  return response;
};

const logout = () => {
  alert("로그아웃 되었습니다~");
  sessionStorage.removeItem("token");
};

export { register, login, getUser, logout };
