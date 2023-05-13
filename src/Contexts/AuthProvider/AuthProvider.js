import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../../Firebase/Firebase.configure';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('On auth state changed: ', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, auth,  loginWithGoogle, login, register, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;