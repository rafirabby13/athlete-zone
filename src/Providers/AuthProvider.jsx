/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init.js";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
 


  const GoogleProvider = new GoogleAuthProvider()


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

  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
  }

  const logoutUser  = ()=>{
    setLoading(true)
    return signOut(auth)
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
    loginUser,
    googleLogin,
    logoutUser,
    setLoading,
    dataLoading,
    setDataLoading,
    theme,
    setTheme

   
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
