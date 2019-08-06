import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`

`
const Register = props => {
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

    const register = async () => {
       try {
           await fetch('/api/user/register',
               {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({email, password })
               }
           )
       } catch (err) {
           console.log(err);
       }
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
      <Button onClick={register} variant="primary" type="submit">
        Registrate
      </Button>

      <Button className="form-group text-center">
                           <Link to="/">

                                   Ya tienes una cuenta

                           </Link>
                       </Button>
    </Form>



  )

}


 export default Register;
