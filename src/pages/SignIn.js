import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {AuthContext} from '../context/AuthContext';
import InputField from '../components/InputField';


function SignIn() {
    // const history = useHistory();
    const {logIn} = useContext(AuthContext);
    // const { handleSubmit, formState: { errors }, register , watch } = useForm({mode:"onTouched"});
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));


   async  function handleLogIn(e) {


       // try {
       //
       // }
       //
       // catch (e) {
       //
       //     console.error(e)
       // }
       //




           // e.preventDefault();
        logIn();
        // history.push('/profile');
    }


    function onFormSubmit(data) {
        console.log(data);
        console.log("submitted");
        handleLogIn();
    }


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        {/*<form className="form" onSubmit={handleSubmit(onSubmit)}>*/}

        {/*    <InputField id="details-login-name" label="Login:" type="email"*/}
        {/*                {...register("loginName", {required: true})}*/}
        {/*    />*/}

        {/*    <InputField id="details-password" label="Wachtwoord:" type="password"*/}
        {/*                {...register("passWord", {required: true})}*/}
        {/*    />*/}
        {/*    <button type="submit"*/}
        {/*      // onClick={() => onSubmit()}*/}
        {/*    >*/}
        {/*        Inloggen*/}
        {/*    </button>*/}

        {/*</form>*/}



      <form>
         <InputField id="details-login-name" label="email" type="email"
              />

          <InputField id="details-login-name" label="password" type="email"
          />


        <button
            type="button"
            onClick={() => handleLogIn()}
        >
            Inloggen
        </button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;