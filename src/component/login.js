import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import AddGoal from './AddGoal';

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }

        console.log(email);
        console.log(password);
    };

    function login() {

		 fetch('/api/user/login',
			   {
				   method: 'POST',
				   headers: { 'Content-Type': 'application/json' },
				   body: JSON.stringify({ email, password })
			   }
		   ).then((response) => {

			 return response.json();

		   }).then((response) => {
			 console.log(response);
			 localStorage.setItem("token", JSON.stringify({token: response}));
			})

	};



  return(
<div>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control  onChange={handleChange} type="email" name="email" placeholder="Ingresa tu correo" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña" />
      </Form.Group>
      <Button onClick={login} variant="primary" type="submit">
        Ingresar
      </Button>

      <Button className="form-group text-center">
                           <Link to="/Register">
                                   No tienes una cuenta
                                   ¡Registrate!

                           </Link>
                       </Button>
    </Form>

    <AddGoal/>
    </div>



  )

}

 export default Login;
