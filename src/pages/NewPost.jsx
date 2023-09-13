import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import usePosts from "../hooks/usePosts";

export default function NewPost() {
  const [post, setPost] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const { addPost } = usePosts();
  const userId = sessionStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addPost.mutate(
          { post, url, userId },
          {
            onSuccess: () => {
              setSuccess("성공적으로 게시글이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setPost((post) => ({ ...post, [name]: value }));
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 게시글 등록</h2>
      {success && <p className="my-2">✅ {success}</p>}
      {file && <img className="w-96 mx-auto mb-2" src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className="flex flex-col px-12">
        <input type="file" accept="image/*" name="file" required onChange={handleChange} />
        <input type="text" name="title" value={post.title ?? ""} placeholder="제목" required onChange={handleChange} />
        <input type="text" name="content" value={post.content ?? ""} placeholder="내용" required onChange={handleChange} />
        <Button text={isUploading ? "업로드중..." : "제품 등록하기"} disabled={isUploading} />
      </form>
    </section>
  );
}
