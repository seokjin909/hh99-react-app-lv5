import { createContext, useContext, useEffect, useState } from "react";
import { getUser, logout } from "../api/singup";

const AuthContext = createContext();

const TOKEN = sessionStorage.getItem("token");

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const checkToken = async () => {
    const result = await getUser(TOKEN);
    return result.status;
  };

  useEffect(() => {
    if (TOKEN === null) {
      setUser(false);
    } else {
      const status = checkToken();
      if (status === 200) {
        setUser(true);
      } else {
        setUser(false);
        logout();
      }
    }
  }, []);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
