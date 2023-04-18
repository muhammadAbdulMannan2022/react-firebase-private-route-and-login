import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //   const user = { displayName: "gokds" };
  // aulternative of normal state for firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      currentUser && setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // const setLoginUserInfo = (userinfo) => {
  //   setUser(userinfo);
  // };
  const authInfo = {
    user,
    // setLoginUserInfo,
  };
  console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
