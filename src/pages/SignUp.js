import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from 'axios';

function SignUp() {

    const { handleSubmit, register } = useForm();

    // const [email,setEmail] = useState();
    // const [password,setPassword] = useState();
    // const [username,setUsername] = useState();


 function handleRegister(data) {
        // console.log(email,password,username);
    }

   const onSubmit = async (data) => {
        // alert(JSON.stringify(data));
        console.log(data);
            try {

                const result = await axios.post('http://localhost:3000/register',
                    {data},
                    { 'Content-Type': 'application/json' }
                    );

                console.log(result);
            }

            catch (e) {
                console.error(e);
            }
        };




  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>


      <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="details-username">
              username
              <input
                  type="text"
                  id="details-username"
                  {...register("username", {required: true})}
              />
          </label>

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

          <button
              type="submit"
          >
              Registreren
          </button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;