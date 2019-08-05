import React from 'react';
import Login from './component/Login';
import Register from './component/Register';
import {HashRouter, Route, Switch} from "react-router-dom";

const App = ()=>{
  // let currentUser = localStorage.getItem('token');
  // console.log(currentUser)
  return(
    <HashRouter basename="/">
       <div className="App">
         <Switch>
           <Route exact path="/" render={() => <Login />}/>
          <Route exact path="/Register" render={() => <Register />}/>
         </Switch>
       </div>
     </HashRouter>
  )
}

export default App;
