import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup } 
    from "firebase/auth";


import { auth } from "../services/firebase";

const AuthContext = createContext()


export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context)  throw new Error("No hay provaider") 
    return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const signup = (email,password) => createUserWithEmailAndPassword(auth,email,password)

    const login = (email,password) => signInWithEmailAndPassword(auth,email,password)
    
    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <AuthContext.Provider value={{signup, login, user, logout, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext