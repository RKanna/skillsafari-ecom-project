import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
  };

  return (
    <UserContext.Provider value={{ userEmail, displayName, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
