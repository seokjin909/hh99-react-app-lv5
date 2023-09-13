// 게시글 관련 모듈
import axios from "axios";
import { v4 as uuid } from "uuid";

const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

const getPostDetail = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
  return response.data;
};
const addPosts = async (post, url, userId) => {
  const id = uuid();
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, {
    ...post,
    id,
    image: url,
    userId,
  });
};

const updatePosts = async (data) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${data.id}`, data);
};

const deletePosts = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

export { getPosts, addPosts, getPostDetail, updatePosts, deletePosts };
