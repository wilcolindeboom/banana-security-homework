import React from 'react';
import { Link } from 'react-router-dom';
import InputField from "../components/InputField";
import {useState} from "react";
import axios from "axios";

function SignUp() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');


 async function handleRegister(e) {
     e.preventDefault();
        console.log(email,password,username);

     try {

         const result = await axios.post('http://localhost:3000/register', {
             email:email,
             pasword:password,
             username:username
         }, {headers: {
                 "Content-Type": "application/json",
             }
         });



         console.log(result);
     }

     catch (e) {
         console.error(e);
         // console.log(e.request);
         console.log(e.response.data);
     }

    }



    async  function postData(data) {

        try {
            const result = await axios.post('http://localhost:3000/register',data,
                {headers: {'Content-Type':'application/json'}
                });
            console.log(result);
        }
        catch (e) {
            console.error(e);
            console.log(e.response.data);
        }
    }



  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label htmlFor="details-email">
              username
              <input
                  type="text"
                  id="details-email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
          </label>

          <label htmlFor="details-email">
             email
              <input
                  type="email"
                  id="details-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <label htmlFor="details-email">
              password
              <input
                  type="password"
                  id="details-email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </label>


          <button
              type="button"
              onClick={() => handleRegister()}
          >
              Registreren
          </button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;