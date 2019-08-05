import React from 'react';
import Login from './component/Login';
import Register from './component/Register';
import {HashRouter, Route, Switch} from "react-router-dom";

const App = ()=>{

  return(
    <HashRouter basename="/">
       <div className="App">
         <Switch>
          <Route exact path="/Register" render={() => <Register />}/>
           <Route exact path="/" render={() => <Login />}/>
         </Switch>
       </div>
     </HashRouter>
  )
}

export default App;
