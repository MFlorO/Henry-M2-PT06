import React, { useState } from 'react';


function DinamicInputs() {  


  const modeloFamiliar = { nombre: '' };

  
  const [familiar, setFamiliar] = useState([
    { ...modeloFamiliar },
  ]);


  const [persona, setPersona] = useState({
    nombre: '',
  });


  const agregaFamiliar = () => {
      setFamiliar([...familiar, { ...modeloFamiliar }]);
  };


//Creo una funcion donde me agrupe todos los estados. NO CONTROLO LO QUE EL USUARIO ESCRIBE!!! 
//SOLO GUARDA EL VALOR
  const handlePersonaChange = (e) => 
    setPersona({ 
    ...persona,
    [e.target.name]: e.target.value,
  }); //Utilizo bracket notation para guardar el name del input = guardo el valor de ese input


  
  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };



  const handleSubmit = e => {
    e.preventDefault()
    console.log(familiar)
  }




  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;