import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/singup";

export default function Signup() {
  const [joinForm, setJoinForm] = useState({ id: "", password: "" });
  const navigate = useNavigate();

  const handleChange = useCallback(
    (e) => {
      const joinObj = {
        ...joinForm,
        [e.target.name]: e.target.value,
      };
      setJoinForm(joinObj);
    },
    [joinForm]
  );
  const hanledSubmit = async (e) => {
    e.preventDefault();
    if (!joinForm.id.trim().length) {
      return alert("아이디를 입력하세요! 🥲");
    }
    if (!joinForm.password.trim().length) {
      return alert("비밀번호를 입력하세요! 🥲");
    }
    const newUser = { id: joinForm.id, password: joinForm.password };
    const result = await register(newUser);
    alert(result);
    if (result === "회원가입 성공") {
      navigate("/signin");
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          React App
        </Link>
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-2xl text-center">회원가입</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="id"
            placeholder="아이디"
            onChange={handleChange}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <button
            onClick={hanledSubmit}
            className="w-full text-center py-3 rounded bg-primary-500 text-white my-1 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            회원가입
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          계정이 있으신가요?{" "}
          <Link to="/signin" className="text-primary-500">
            로그인 하러가기
          </Link>
        </div>
      </div>
    </div>
  );
}
