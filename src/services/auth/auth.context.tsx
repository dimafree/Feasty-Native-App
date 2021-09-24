import React, { createContext, useState, useEffect } from "react";
import { loginRequest } from "./auth.service";
import { UserInfo } from "@firebase/auth-types";
import * as firebase from "firebase";

interface AuthContextProps {
    isLoading?: boolean;
    user?: UserInfo | {};
    isAuthenticated?: boolean;
    error: string;
    onLogout: () => any;
    onLogin: (email: string, password: string) => void;
    onRegister: (
        email: string,
        password: string,
        repeatPassword: string
    ) => void;
}

// @ts-ignore
export const AuthContext = createContext<AuthContextProps>({});

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<UserInfo | {}>({});
    const [error, setError] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    // @ts-ignore
    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
            setIsAuth(true);
        } else {
            setIsAuth(false);
            setIsLoading(false);
        }
    });

    const onLogout = () => {
        setUser({});
        // @ts-ignore
        firebase.auth().signOut();
    };

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        setError("");

        loginRequest(email, password)
            .then((u: any) => {
                setIsAuth(true);
                setUser(u);
                setIsLoading(false);
            })
            .catch((e: any) => {
                setIsAuth(false);
                setError(e.toString());
                setIsLoading(false);
            });
    };

    const onRegister = (
        email: string,
        password: string,
        repeatPassword: string
    ) => {
        if (password !== repeatPassword) {
            setError("Error: Passwords do not match");
            return;
        }

        setIsLoading(true);
        setError("");

        firebase
            // @ts-ignore
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u: any) => {
                setIsAuth(true);
                setUser(u);
                setIsLoading(false);
            })
            .catch((e: any) => {
                setIsAuth(false);
                setError(e.toString());
                setIsLoading(false);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: isAuth,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
