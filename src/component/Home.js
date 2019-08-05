import React from 'react';
import { Button } from 'react-bootstrap';

const Home = props => {

    const LogOut = () => {
        localStorage.clear();
        console.log("sesion cerrada");
    }

    return (
        <Button onClick={LogOut}>Cerrar sesión</Button>
    )
}

export default Home;