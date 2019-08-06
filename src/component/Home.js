import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = props => {

    const LogOut = () => {
        localStorage.clear();
        console.log("sesion cerrada");
    }

    return (
        <Link to='/'>
            <Button onClick={LogOut}>Cerrar sesión</Button>
        </Link>
    )
    
}

export default Home;
