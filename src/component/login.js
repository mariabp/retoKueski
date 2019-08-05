import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';




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



  return(

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control  onChange={handleChange} type="email" name="email" placeholder="Ingresa tu correo" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Ingresa tu contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>



  )

}


 export default Login;
