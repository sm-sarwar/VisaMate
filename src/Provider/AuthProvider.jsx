import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase/firebase-init';


export const AuthContext = createContext(null)
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }


    const signInWithGoogle = ()=>{
        return signInWithPopup(auth , googleProvider)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            unsubscribe()
        }
       },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        signInWithGoogle,
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;