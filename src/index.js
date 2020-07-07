import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './pages/app';
import * as serviceWorker from './serviceWorker';


const root = (
    <Router>
      
     
      <Switch>
        <Route type="public" path="/login" component={Login} />
        <Route type="private" path="/" component={App} />
        
       
        
      </Switch>
          
        
        
        
      
      
    </Router>
  );





ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
