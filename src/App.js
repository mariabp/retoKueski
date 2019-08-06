import React from 'react';
import Login from './component/login';
import Register from './component/Register';
import {HashRouter, Route, Switch} from "react-router-dom";
<<<<<<< HEAD
import './App.css';
=======
import Home from './component/Home';
>>>>>>> c88f15030b97257d71f5c390de3d87dfaaff9e2f

const App = ()=>{
  // let currentUser = localStorage.getItem('token');
  // console.log(currentUser)
  return(
    <HashRouter basename="/">
       <div className="App">
         <Switch>
           <Route exact path="/" render={() => <Login />}/>
          <Route exact path="/Register" render={() => <Register />}/>
          <Route exact path="/Home" render={() => <Home />}/>
         </Switch>
       </div>
     </HashRouter>
  )
}

export default App;
