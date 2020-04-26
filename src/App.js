import React from 'react';
import './App.css';
import Navigation from './components/navigation'

import Inicio from './components/Inicio'
import Entrando from './components/entrando'
import Exit from './components/Exit'
import Servicio from './components/servicio'
import Searching from './components/searching'
import Buscar from './components/buscar'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Route path="/Home" component={Exit} />
        <Route path="/Servicio" component={Servicio} />
        <Route path="/entrando" component={Entrando} />
        <Route path="/searching" component={Searching} />
        <Route path="/buscar" component={Buscar} />

        <Route path="/" exact component={Inicio} />
      
        
        
        
      </div>
      
    </Router>
  );
}

export default App;