import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  // 로그인 관련 로직
  // 1. id, pwd 작성 여부 확인
  // 2. POST 요청으로 서버에 로그인 요청
  // 3. Response에 담긴 token 값 확인
  // 4. token이 넘어왔다면 홈으로 이동

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("로그인 버튼 클릭!");
  };
  return (
    <>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            React App
          </Link>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">계정 로그인</h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label for="id" class="block mb-2 text-sm font-medium text-gray-900">
                    ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="아이디를 입력하세요."
                    required
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="비밀번호를 입력하세요."
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div class="flex items-center justify-between"></div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-md px-5 py-2.5 text-center"
                >
                  로그인
                </button>
                <button
                  type="button"
                  class="w-full bg-primary-50 font-medium rounded-lg text-md px-5 py-2.5 text-center"
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
