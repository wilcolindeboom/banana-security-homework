import React, {useState} from 'react';
import {createContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from "axios";

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

    function logIn(JWT) {
        localStorage.setItem('token',JWT);

        const decodedToken = jwt_decode(JWT);
        const {sub} = decodedToken;
        getUserData(JWT,sub);

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


    async  function getUserData(JWT,id) {

        console.log("token:" + JWT);
        console.log("id:" + id);


        try {
          const result = await axios.get(`http://localhost:3000/600/users/${id}`,
              {headers: {'Authorization': `Bearer ${JWT}`}
            });

            console.log(result.data);
            console.log("get done");
        }
        catch (error) {
            if (error.response) {
                console.log(error.response.data);
                alert(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        }

    }






    return (
        <AuthContext.Provider value= {authData}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;