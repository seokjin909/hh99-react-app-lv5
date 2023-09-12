import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { logout } from "../api/singup";

const BUTTON_CLASS = "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function Navbar() {
  const { user, setUser } = useAuthContext();
  const LogoutHandler = () => {
    setUser(false);
    logout();
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand gap-1">
        <AiFillAliwangwang />
        <h1>React App</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/todos">
          <p className={BUTTON_CLASS}>투두 리스트</p>
        </Link>
        <p className={BUTTON_CLASS}>게시글 보기</p>
        {user && <Button text={"로그아웃"} onClick={LogoutHandler} />}
        {!user && (
          <>
            <Link to="/signin">
              <button className={BUTTON_CLASS}>로그인</button>
            </Link>
            <Link to="/signup">
              <button className={BUTTON_CLASS}>회원가입</button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
