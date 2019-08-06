import React from 'react';
import { Button } from 'react-bootstrap';
import DisplayGoals from './DisplayGoals';

const Home = props => {

    const LogOut = () => {
        localStorage.clear();
        console.log("sesion cerrada");
    }

    return (
      <div>
        <Button onClick={LogOut}>Cerrar sesión</Button>
        <DisplayGoals/>
        </div>

    )
}

export default Home;
