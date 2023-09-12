import axios from "axios";

const getTodos = async ({ queryKey }) => {
  // 로그인 한 회원의 userId 값을 전달해서 조회하는 방식
  const userId = queryKey[1];
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos?userId=${userId}`);
  return response.data;
};

const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

export { getTodos, addTodo };
