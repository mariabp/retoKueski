import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
background-color: #f1f1f1;

.welcomeImg{
  display: block;
  margin: auto;
}

p {
  margin: 2rem 1rem 1rem 1rem;
}

form {
  background-color: #FFFFFF;
  margin: 2rem 1rem 1rem 1rem;
  padding: 1rem;

  input {
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom-width: 1px;
    border-color: rgba(3, 3, 3, 0.4);

    ::placeholder{
      color: rgba(3, 3, 3, 0.4)
    }
  }

  h1 {
    background-color: #FFFFFF;
    font-style: bold;
    color: #707070;
  }

  .form-group {
    background-color: #FFFFFF;
    text-align: center;
  }
}

.registro {
  border: none;
  float: right;
  color: white;
  font-size: 2rem;
  background-color: #F72525;
  padding: 20px;
  text-align: center;
  border-radius: 3rem;
}

.space{
  margin: 5rem 1rem 1rem 1rem;
  color: #f1f1f1;
}

.login {
  border: none;
  font-size: 1.2rem;
  color: white;
  background-color: #F72525;
  padding: 20px;
  text-align: center;
  display: block;
  margin: auto;
  border-radius: 3rem;

  a {
    background-color: none;
  }
}

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
    <React.Fragment>
      <Styles>
      <img src="https://i.imgur.com/NtRT2Fy.jpg" alt="Captura tus ideas y conviértelas en metas. Weeber te ayuda a volverlas realidad" className="welcomeImg" />
      <Form>
        <h1>¡Regístrate!</h1>
        <Form.Group controlId="formBasicEmail">

          <Form.Control  onChange={handleChange} type="email" name="email" placeholder="E-mail" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">

          <Form.Control onChange={handleChange} type="password" name="password" placeholder="Contraseña" />
        </Form.Group>
        <Button onClick={register} variant="primary" type="submit" className="registro">
          <FaArrowRight />
        </Button>
      </Form>

      <p className="space">.</p>

        <Button className="login">
          <Link to="/"> 
            ¿Ya tienes una cuenta?
          </Link>
        </Button>
    </Styles>
    </React.Fragment>



  )

}


 export default Register;
