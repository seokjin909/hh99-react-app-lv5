import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/singup";
import { useAuthContext } from "../context/AuthContext";

export default function Signin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuthContext();

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "id" ? setId(e.target.value) : setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id.trim().length) {
      return alert("아이디를 입력하세요! 🥲");
    }
    if (!password.trim().length) {
      return alert("비밀번호를 입력하세요! 🥲");
    }
    const user = { id, password };
    const result = await login(user);
    if (result === "로그인 성공") {
      alert("로그인 성공!");
      navigate("/");
      setUser(true);
    } else {
      alert(result);
    }
  };
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            React App
          </Link>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">계정 로그인</h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900">
                    ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="아이디를 입력하세요."
                    // required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호를 입력하세요."
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    // required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between"></div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-md px-5 py-2.5 text-center"
                >
                  로그인
                </button>
                <button
                  type="button"
                  className="w-full bg-primary-50 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                  onClick={() => navigate("/signup")}
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
