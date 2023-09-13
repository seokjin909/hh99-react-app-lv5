import React from "react";
import { Link } from "react-router-dom";
import useTodos from "../../hooks/useTodos";

export default function TodoCard({ todo, todo: { id, title, contents, isDone } }) {
  const { updateTodo } = useTodos();
  const handlerClick = () => {
    const data = { id, isDone };
    updateTodo.mutate(data);
  };
  return (
    <div className="w-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{contents}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={handlerClick}
      >
        {isDone ? "취소하기" : "완료하기"}
      </button>
      <Link to={`/todos/${id}`} state={todo}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          상세보기
        </button>
      </Link>
    </div>
  );
}
