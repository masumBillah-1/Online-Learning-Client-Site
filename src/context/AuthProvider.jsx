import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    // login function 
     const  createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

      }

      const updateUser =(updateData)=> {

        return updateProfile(auth.currentUser,updateData)

    }


    // Sign In Function 

    const signInUser = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google sign in 

    const signinWidthGoogle = ()=> {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const SignOutUser = ()=> {
            setLoading(true);
            return signOut(auth)
        }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            console.log("Current User Details", currentUser)
            setUser(currentUser);
            setLoading(false)

        })
        return ()=> {
            unsubscribe()
        }
    },[])



    // Props function 
    const authInfo =  {

        createUser ,
        signInUser,
        signinWidthGoogle,
        updateUser,
        setUser,
        SignOutUser,
         user ,
         loading ,
         

    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;