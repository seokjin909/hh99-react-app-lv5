import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useTodos from "../hooks/useTodos";

export default function TodoDetail() {
  const navigate = useNavigate();
  const {
    state: { contents, title, isDone, id },
  } = useLocation();
  const { deleteTodo } = useTodos();
  const DeleteBtnHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteTodo.mutate(id, {
        onSuccess: () => {
          alert("삭제되었습니다!");
          navigate("/todos");
        },
      });
    } else {
      alert("취소되었습니다!");
      return;
    }
  };
  return (
    <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-16">
      <div className="border-b-2 border-neutral-100 px-6 py-3 font-bold">{isDone ? "Done 🎉" : "Working 🔥"}</div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">{title}</h5>
        <p className="mb-4 text-base text-neutral-600">{contents}</p>
        <Link to={`/todos`}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            뒤로가기
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={DeleteBtnHandler}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}
