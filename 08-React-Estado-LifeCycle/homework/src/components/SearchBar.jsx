import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {

  const [city, setcity] = useState("");

  return (
    <form onSubmit={(e) => {  // "onSubmit" significa cuando el formulario se envie
      e.preventDefault();
      onSearch(city);
      setcity("");
      
    }}>
      <input //Lugar donde escriba el usuario
        type="text"
        placeholder="Ciudad..."


        //El objetivo es que cuando el usuario escriba en el input modifique mi estado
        //Despues ejecuto mi funcion "onsearch" pasando mi estado que fue lo que el usuario escribio
        value={city} //El valor del imput va a ser igual al estado city

        //onChange es un evento que detecta si el usuario escribe o borra. 
        //Este ejecuta una funcion. Y recibe por efecto un estado:"e"
        //Quiero que este modifique mi estado.. por esto, llamo a "setcity".
        //Quiero que modifique a setCity con el valor que el usuario escriba: con el evento accede al target
        //TARGET ES EL ELEMENTO QUE DISPARO ESE EVENTO --> Estamos parados ya en el input
        //Por ultimo quiero acceder al valor del input

        onChange={e => setcity(e.target.value)}

      />
      <input className="input" type="submit" value="Agregar" />
    </form>
  );
}
