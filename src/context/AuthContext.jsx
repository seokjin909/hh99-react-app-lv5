import { createContext, useContext, useEffect, useState } from "react";
import { getUser, logout } from "../api/singup";

const AuthContext = createContext();

const TOKEN = sessionStorage.getItem("token");

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(TOKEN);

  const checkToken = async () => {
    const result = await getUser(TOKEN);
    return result.status;
  };

  // useEffect 토큰 값의 유효성을 검증하고 리턴하기 전에 setUser(false), logout()이 먼저 실행되는 문제!
  useEffect(() => {
    if (TOKEN === null) {
      return;
    }
    const status = checkToken();
    if (status !== null) {
      setUser(true);
      return;
    } else {
      setUser(false);
      logout();
    }
  }, []);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
