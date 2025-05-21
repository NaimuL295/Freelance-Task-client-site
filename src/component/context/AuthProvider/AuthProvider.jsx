import { createUserWithEmailAndPassword, GoogleAuthProvider,
     onAuthStateChanged,
     signInWithEmailAndPassword, signInWithPopup, signOut, 
     updateProfile} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../Auth/Firebase';
import { AuthContext } from '../AuthContext/AuthContext';

const providerGoogle = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [Loading ,setLoading]=useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
const signinUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const signGoogle=()=>{
   return signInWithPopup(auth, providerGoogle)
}



const logout=()=>{
    return signOut(auth)
}
useEffect(()=>{
 const unSubscribe =  onAuthStateChanged(auth,currentUser => {
 setUser(currentUser)
 setLoading(!Loading)
});
  return()=>{
    unSubscribe()
}
},[])
const updataUser=(updata)=>{
return   updateProfile(auth.currentUser,updata)
}

    const UserInfo={
createUser,
signinUser,
logout,
signGoogle,
user,
Loading,
updataUser
    }
    return (
     <AuthContext value={UserInfo}>
        {children}
     </AuthContext>
    );
};

export default AuthProvider;