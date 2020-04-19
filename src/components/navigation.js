import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import menu from './menu.svg'
import search from './search.svg'
import { Navbar } from 'react-bootstrap'





export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
                <Navbar sticky="top" />
                
                <div className="container">
                    <Link className="navbar-brand" to="/">
                         
                            <img src={logo} width="25px" height="25px" alt="logo" /> 
                    </Link>
                  
                    <div className="Navbar.ToggleNavbar.Collapse" id="navbarTogglerDemo01">
                    
                    
                    
                    </div>
                    <div>
                    <Link className="navbar-brand" to="/buscar">
                         
                         <img src={search} width="25px" height="25px" alt="logo" /> 
                 </Link>
                    <Link className="navbar-brand" to="/servicio"> 
                         
                         <img src={menu} width="25px" height="25px" alt="logo" /> 
                 </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
