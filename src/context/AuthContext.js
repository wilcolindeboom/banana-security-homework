import React, {useState} from 'react';
import {createContext} from 'react';


export const AuthContext = createContext({});



function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false);



    function toggleAuth() {
        toggleIsAuth(!isAuth);
    }



    const authData = {
        isAuth: isAuth,
        toggleAuth:toggleAuth
    };





    return (
        <AuthContext.Provider value= {authData}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;