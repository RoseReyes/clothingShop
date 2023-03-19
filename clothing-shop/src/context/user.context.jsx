import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext =  createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider; the actual component that wrap around other components that needs the actual data
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}