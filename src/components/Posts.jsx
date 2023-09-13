import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import PostCard from "./Post/PostCard";

export default function Posts() {
  const { isLoading, data, error } = useQuery(["posts"], getPosts);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <p className="text-4xl text-center font-semibold mt-10">전체 게시글</p>
      <div className="flex flex-col items-center gap-4 my-5">
        {data &&
          data.map((item) => {
            return <PostCard key={item.id} post={item} />;
          })}
      </div>
    </div>
  );
}
