import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div className="Nav">
    
    <img className="img" src={Logo} alt="LogoHenry" />
    {/* En src se puede poner {logo} y no toda la ruta de la ubicacion del archivo porque se importo creando una variable */}
    <span>Henry - Weather App</span>
    < SearchBar className="searchBar" onSearch={onSearch}/>
    {/* Una vez pasada a "Nav" tengo que asociarle la funcion a "SearchBar" */}

    </div>

  );
};

export default Nav;
