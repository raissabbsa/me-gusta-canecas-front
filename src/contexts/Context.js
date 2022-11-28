import { useState, createContext } from "react";

export const Context = createContext();

export function UserProvider({ children }) {
  const [adminUserInfo, setAdminUserInfo] = useState({});
  const [adminConfig, setAdminConfig] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [config, setConfig] = useState({});
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState({});
  const [changeSection, setSection] = useState("");
  const [cart, setCart] = useState();
  const [savedAdress, setSavedAdress] = useState({});

  return (
    <Context.Provider
      value={{
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
        image,
        setImage,
        changeSection,
        setSection,
        cart,
        setCart,
        savedAdress,
        setSavedAdress
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
