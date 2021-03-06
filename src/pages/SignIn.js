import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';


function SignIn() {
    const history = useHistory();
    const {logIn} = useContext(AuthContext);


    function handleLogIn() {
        logIn();
        history.push('/profile');
    }



  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <p>*invoervelden*</p>
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