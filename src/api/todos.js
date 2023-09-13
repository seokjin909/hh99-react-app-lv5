import axios from "axios";

const getTodos = async ({ queryKey }) => {
  // 로그인 한 회원의 userId 값을 전달해서 조회하는 방식
  const userId = queryKey[1];
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos?userId=${userId}`);
  return response.data;
};

const addTodos = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const updateTodos = async (data) => {
  const { id, isDone } = data;
  const obj = { isDone: !isDone };
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, obj);
};

const deleteTodos = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

export { getTodos, addTodos, updateTodos, deleteTodos };
