import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  // 회원가입 관련 로직
  // 1. 회원 중복확인
  // 2. 비밀번호/비밀번호 확인 항목 비교
  // 3. POST 요청으로 서버에 회원가입 요청

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          React App
        </Link>
        <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 class="mb-8 text-2xl text-center">회원가입</h1>
          <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="id" placeholder="아이디" />
          <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="비밀번호" />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="비밀번호 확인"
          />
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-primary-500 text-white my-1 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            회원가입
          </button>
        </div>

        <div class="text-grey-dark mt-6">
          계정이 있으신가요?{" "}
          <Link to="/signin" className="text-primary-500">
            로그인 하러가기
          </Link>
        </div>
      </div>
    </div>
  );
}
