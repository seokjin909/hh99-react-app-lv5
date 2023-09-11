import React from "react";
import { useRouteError } from "react-router-dom";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container absolute top-40 left-10">
      <div className="flex justify-center">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div class="text-center m-2">
        <h1 className="font-bold text-4xl p-2">원하시는 페이지를 찾을 수 없습니다.</h1>
        <p className="text-md p-2">찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.</p>
        <Link to="/">
          <Button text={"홈으로"} />
        </Link>
      </div>
    </div>
  );
}
