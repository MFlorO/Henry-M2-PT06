import styles from './Cards.module.css';
import React from 'react';
import Card from '../Card/Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

  if(!cities){
    return <h1> No hay ciudades disponibles </h1>
  }

  return (
    <div className={styles.divPrincipal}>
       { cities && cities.map(city => (
          <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} img={city.weather[0].icon} onClose={() => alert(city.name)} 
          
          key={city.id} id={city.id}/> 
          //El key se agrega en react cuando trabajamos de forma reiteratiba para que pueda diferenciar los valores
         ))
       }
    </div>
    )
};

