import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

// NavBar.js sera nuestro Header que nos permitira navegar a nuestra ruta principal(Debe verse en todas las páginas) 

export default function NavBar() {
    return (
        <header className="navbar">
           <div>
          <NavLink exact to="/" >
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </NavLink>    
            </div>
            <nav>
                <ul className="list">
                    <NavLink to="/"><li className="list-item">Home</li></NavLink>
                    <NavLink to="/filter/posts"><li className="list-item">Posts</li></NavLink>
                </ul>
          </nav>
        </header>
    )
}