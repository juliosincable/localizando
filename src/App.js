import React from 'react';
import './App.css';
import Navigation from './components/navigation'

import Entrando from './components/entrando'
import Home from './components/home'
import Servicio from './components/servicio'
import Searching from './components/searching'
import Buscar from './components/buscar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/servicio" component={Servicio} />
        <Route path="/entrando" exact component={Entrando} />
        <Route path="/searching" exact component={Searching} />
        <Route path="/buscar" exact component={Buscar} />
        
        
      </div>
      
    </Router>
  );
}

export default App;