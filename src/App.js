import './App.css';
import {DrawerAppBar} from './components/Props';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import {Features} from './components/Features';
import {Pricing} from './components/Pricing';
import {Privacy} from './components/Privacy';
import { Register } from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';


import Home from './components/Home';
import config from './components/config';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (oktaAuth, originalUri) => {
   history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  
  };

  return (

    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
    <Router>
    <div className="App">
    <DrawerAppBar/>
     <div className='content'>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route> 
        <Route  path="/Privacy">
        <Privacy/>
        </Route>
        <Route  path="/Features">
        <Features/>
        </Route>
        <Route  path="/Pricing">
        <Pricing/>
        </Route>
      
        <Route path="/login/callback" component={LoginCallback}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/Login">
        <Login/>
        </Route>
        
        <Route  path="/Register">
        <Register/>
        </Route>
       
      </Switch>

      </div>
    
    </div>
    </Router> 
    </Security>
  );
  };


export default App;
