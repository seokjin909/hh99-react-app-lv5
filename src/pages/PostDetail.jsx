import React from "react";
import { useLocation } from "react-router-dom";
import PostBox from "../components/Post/PostBox";
import CommentArea from "../components/Post/CommentArea";

export default function PostDetail() {
  const {
    state: { content, title, userId, id, image },
  } = useLocation();
  console.log(id);
  console.log(image);
  return (
    <div className="p-2 border border-gray-300 w-80">
      {/* 게시글 컴포넌트 */}
      <PostBox userId={userId} title={title} image={image} content={content} id={id} />
      {/* 댓글 컴포넌트 */}
      <CommentArea />
    </div>
  );
}
