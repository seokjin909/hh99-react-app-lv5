import React from "react";
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

const ICON_CLASS = "transition-all cursor-pointer hover:text-primary-300 hover:scale-105 mx-1";
const FLEX_BOX = "flex items-center border border-gray-300 gap-2 p-2";
export default function PostBox({ userId, title, content, image, id }) {
  const navigate = useNavigate();
  const { deletePost } = usePosts();

  const handlerDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deletePost.mutate(id, {
        onSuccess: () => {
          alert("삭제 되었습니다!");
          navigate("/");
        },
      });
    } else {
      alert("취소 되었습니다!");
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <AiFillHome className={ICON_CLASS} onClick={() => navigate("/")} />
        {userId === sessionStorage.getItem("userId") ? (
          <section className="flex gap-4">
            <AiFillDelete className={ICON_CLASS} onClick={handlerDelete} />
            <Link to={`/update/post/${id}`}>
              <BiSolidPencil className={ICON_CLASS} onClick={() => navigate(`/update/post/${id}`)} />
            </Link>
          </section>
        ) : (
          <></>
        )}
      </div>
      <div className={FLEX_BOX}>
        <p className="font-semibold">작성자 :</p>
        <p>{userId} </p>
      </div>
      <div className={FLEX_BOX}>
        <p className="font-semibold">제목 :</p>
        <p>{title} </p>
      </div>
      <div className={FLEX_BOX}>
        <p className="font-semibold">내용 :</p>
        <p>{content} </p>
      </div>
      <img className="w-100" src={image} alt={title} />
    </div>
  );
}
