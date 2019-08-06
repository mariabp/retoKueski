import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DisplayGoals from './displayGoals';


const Home = props => {

    const LogOut = () => {
        localStorage.clear();
        console.log("sesion cerrada");
    }

    return (
      <div>
        <Link to='/'>
            <Button onClick={LogOut}>Cerrar sesión</Button>
        </Link>
        <DisplayGoals/>
        </div>
    )

}

export default Home;
