import React from 'react';
import Login from './component/Login';
import Register from './component/Register';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './component/Home';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: false
    }
  }
  
  componentWillUpdate(){
    const token = localStorage.getItem('token');
    this.authListener(token);
  }
  
  authListener = (token) => {
    console.log(token)
      if(token){
        this.setState({user: true});
        console.log('user', token)
      }else{
        this.setState({user: false});
      }

  }

  render(){
    console.log(this.state.user)
    return(
      <BrowserRouter basename="/">
         <div className="App">
           <Switch>
             <Route exact path="/" render={() => <Login />}/>
            <Route exact path="/Register" render={() => <Register />}/>
            <Route exact path="/Home" render={() => <Home />}/>
           </Switch>
         </div>
       </BrowserRouter>
    )

  }
}

export default App;
