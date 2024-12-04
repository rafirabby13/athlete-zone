/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init.js";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile=(name, photo)=>{
    setLoading(true)

    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
  }
  const loginUser =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })

    return ()=>{
        unsubscribe()
    }
  },[])

  const authInfo = {
    loading,
    registerUser,
    setUser,
    user,
    updateUserProfile,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;