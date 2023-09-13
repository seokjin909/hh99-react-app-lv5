import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post, post: { id, title, content, userId } }) {
  return (
    <Link to={`/posts/${id}`} state={post}>
      <div className="flex flex-row gap-2">
        🔴
        <p>{title}</p>
        <p>{userId}</p>
      </div>
    </Link>
  );
}
