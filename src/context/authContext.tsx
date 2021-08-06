import { useState, createContext, ReactNode } from 'react';
import { firebase, auth } from '../services/firebase'

interface User {
    email: string;
}

type AuthContextProps = {
    children: ReactNode;
}

type AuthContextData = {
    user?: User | undefined;
    signInWithGoogle: () => Promise<void>
}


export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider(props: AuthContextProps){
    const [user, setUser] = useState<User>()

    async function signInWithGoogle(){

        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)

        if(result.user){
            const { email, displayName,  } = result.user;

            if (!email || !displayName) {
                throw new Error("Missing Information from Google Account.");
            }

            setUser({
                email: email,
            })
            
            
        }

    }
    
    return (
        <AuthContext.Provider value={ { signInWithGoogle } }>
            {props.children}
        </AuthContext.Provider>
    )
}