import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostDetail } from "../api/posts";
import usePosts from "../hooks/usePosts";

const FLEX_BOX = "flex items-center border border-gray-300 gap-2 p-2";

export default function UpdatePost() {
  const { id } = useParams();
  const { updateFetchPost } = usePosts();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const getData = async () => {
    const data = await getPostDetail(id);
    if (sessionStorage.getItem("userId") !== data.userId) {
      alert("잘못된 접근입니다!");
      navigate("/");
    } else {
      setPost(data);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((post) => ({ ...post, [name]: value }));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFetchPost.mutate(post, {
      onSuccess: () => {
        alert("수정 완료!");
        navigate(`/posts/${id}`, { state: { ...post } });
      },
    });
  };

  return (
    <div>
      <button onClick={handleSubmit}>수정하기</button>
      <div className={FLEX_BOX}>
        <p className="font-semibold">작성자 :</p>
        <p>{post.userId} </p>
      </div>
      <div className={FLEX_BOX}>
        <p className="font-semibold">제목 :</p>
        <input type="text" value={post.title || ""} name="title" onChange={handleChange} />
      </div>
      <div className={FLEX_BOX}>
        <p className="font-semibold">내용 :</p>
        <input type="text" value={post.content || ""} name="content" onChange={handleChange} />
      </div>
      <img className="w-100" src={post.image} alt={post.title} />
    </div>
  );
}
