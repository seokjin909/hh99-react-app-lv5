import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  if (!user) {
    alert("로그인 후 이용 가능합니다.");
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  }
  return children;
}
