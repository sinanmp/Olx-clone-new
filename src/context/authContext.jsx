import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, setDoc, doc, addDoc } from 'firebase/firestore';
import { auth, db ,storage } from '../services/firebase.config';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});   
 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user,storage}}>
            {children}
        </AuthContext.Provider>
    );
}

export async function SignOut(){
    try {
        await signOut(auth)
        console.log('user signOuted')
    } catch (error) {
        console.log(error)
    }
}


export async function addAd({productName,productPrice,productImage,productDescription,catogery,email}) {
    try {
        await addDoc(collection(db, 'products'),{
            productName,
            catogery,
            productPrice,
            productImage,
            productDescription,
            email
        });
    } catch (error) {
        console.error('Error adding ad: ', error);
    }
}

export async function signUp(username, email, password, phone) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', email), {
            username: username,
            phone: phone
        });
        console.log('User signed up successfully!');
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error; 
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user; 
    } catch (error) {
        console.error('Error signing in:', error.message);
        throw error; 
    }
}

export function useAuth() {
    return useContext(AuthContext);
}
