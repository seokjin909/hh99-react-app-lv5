import React, { useCallback, useState } from "react";
import { MdTitle } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import useTodos from "../../hooks/useTodos";

export default function TodoInput() {
  const userId = sessionStorage.getItem("userId");
  const { addTodo } = useTodos();
  const [todo, setTodo] = useState({
    id: uuidv4(),
    userId,
    title: "",
    contents: "",
    isDone: false,
  });
  const handleChange = useCallback(
    (e) => {
      const joinObj = {
        ...todo,
        [e.target.name]: e.target.value,
      };
      setTodo(joinObj);
    },
    [todo]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title.trim().length) {
      return alert("제목을 입력하세요! 🥲");
    }
    if (!todo.contents.trim().length) {
      return alert("내용을 입력하세요! 🥲");
    }
    addTodo.mutate(todo, {
      onSuccess: () => {
        alert("추가 완료!");
      },
    });
    setTodo({
      id: uuidv4(),
      userId,
      title: "",
      contents: "",
      isDone: false,
    });
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 border-b border-gray-300 p-4">
        <p className="font-semibold">✅ 투두 리스트를 추가해보세요</p>
        <div className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
          <MdTitle />
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="outline-none ml-2"
            onChange={handleChange}
            value={todo.title}
          />
        </div>
        <div className="border border-gray-300 rounded-md p-2 flex justify-between items-center">
          <AiFillFire />
          <input
            type="text"
            name="contents"
            placeholder="내용을 입력하세요"
            className="outline-none ml-2"
            onChange={handleChange}
            value={todo.contents}
          />
        </div>
        <button
          className="bg-primary-300 p-2 rounded-md text-primary-50 transition-all cursor-pointer hover:text-primary-600 hover:scale-105 font-bold"
          onClick={handleSubmit}
        >
          추가하기
        </button>
      </div>
    </>
  );
}
