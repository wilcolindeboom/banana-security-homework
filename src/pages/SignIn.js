import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {AuthContext} from '../context/AuthContext';
import axios from "axios";


function SignIn() {

    const {logIn} = useContext(AuthContext);
    const { handleSubmit, register } = useForm();


    async  function postData(data) {

           try {
               const result = await axios.post('http://localhost:3000/login',data,
                   {headers: {'Content-Type':'application/json'}
                   });
               console.log(result.data);
               logIn(result.data.accessToken);

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

    function onSubmit(data) {
        console.log(data);
        console.log("submitted");
        postData(data);
    }


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="details-email">
                    email
                    <input
                        type="email"
                        id="details-email"
                        {...register("email", {required: true})}
                    />
                </label>

                <label htmlFor="details-password">
                    password
                    <input
                        type="password"
                        id="details-password"
                        {...register("password", {required: true})}
                    />
                </label>

            <button type="submit"
            >
                Inloggen
            </button>
        </form>
        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;