import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext =  createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider; the actual component that wrap around other components that needs the actual data
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  
  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubsribe;
  },[]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}