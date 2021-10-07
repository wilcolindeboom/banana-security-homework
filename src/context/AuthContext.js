import React, {useState} from 'react';
import {createContext} from 'react';

export const AuthContext = createContext({});



function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false);

    function toggleAuth() {
        toggleIsAuth(!isAuth);
    }

   function logOff() {
       toggleIsAuth(false);
       console.log("user logged off!");
    }

    function logIn() {
        toggleIsAuth(true);
        console.log("user logged in!");
    }

    const authData = {
        isAuth: isAuth,
        toggleAuth:toggleAuth,
        logOff:logOff,
        logIn:logIn
    };

    return (
        <AuthContext.Provider value= {authData}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;