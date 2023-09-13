import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";
import TodoCard from "../components/Todo/TodoCard";
import TodoInput from "../components/Todo/TodoInput";

export default function TodoList() {
  const userId = sessionStorage.getItem("userId"); // 해당 부분을 로그인 한 회원의 정보로 수정해야 함.
  const { isLoading, data, error } = useQuery(["todos", userId], getTodos);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <TodoInput />
      <p className="text-2xl p-2 mt-4">Working 🔥</p>
      <div className="justify-center items-center gap-2 grid grid-cols-4 mb-2">
        {data &&
          data
            .filter((todo) => !todo.isDone)
            .map((item) => {
              return (
                <>
                  <TodoCard todo={item} key={item.id} />
                </>
              );
            })}
      </div>
      <p className="text-2xl p-2">Done 🎉</p>
      <div className="justify-center items-center gap-2 grid grid-cols-4">
        {data &&
          data
            .filter((todo) => todo.isDone)
            .map((item) => {
              return (
                <>
                  <TodoCard todo={item} key={item.id} />
                </>
              );
            })}
      </div>
    </div>
  );
}
