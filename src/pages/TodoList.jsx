import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";

export default function TodoList() {
  const userId = "seokjin"; // 해당 부분을 로그인 한 회원의 정보로 수정해야 함.
  const { isLoading, data, error } = useQuery(["todos", userId], getTodos);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              {item.title} : {item.contents}
            </div>
          );
        })}
    </div>
  );
}
