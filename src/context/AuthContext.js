import React, {useState} from 'react';
import {createContext} from 'react';
import { useHistory, Link } from 'react-router-dom';

export const AuthContext = createContext({});



function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(
        {
            isAuth:false,
            user:null,
            status:"pending",
        });

    const history = useHistory();

    function toggleAuth() {
        toggleIsAuth(!isAuth.isAuth);
    }

   function logOff() {
       toggleIsAuth({
               ...isAuth,
            isAuth: false
    });
       console.log("user logged off!");
       history.push('/');
    }

    function logIn() {
        toggleIsAuth({
            ...isAuth,
            isAuth: true
        });
        console.log("user logged in!");
        history.push('/profile');
    }

    const authData = {
        isAuth: isAuth.isAuth,
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