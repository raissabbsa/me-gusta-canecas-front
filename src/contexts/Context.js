import { useState, createContext } from "react";

export const Context = createContext();

export default function UserProvider({ children }) {
  const [token, setToken] = useState();
  const [adminUserInfo, setAdminUserInfo] = useState({});
  const [adminConfig, setAdminConfig] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [config, setConfig] = useState({});
  const [products, setProducts] = useState([]);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        adminUserInfo,
        setAdminUserInfo,
        adminConfig,
        setAdminConfig,
        userInfo,
        setUserInfo,
        config,
        setConfig,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
