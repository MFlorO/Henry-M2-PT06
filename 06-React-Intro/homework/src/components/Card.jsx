import React from 'react';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return (
  <div>
    <h4>{name}</h4>
    <div>
      <p> Min </p>
      <p>{min}</p>
    </div>
    <div>
      <p> Max </p>
      <p>{max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png `} alt={img}/> 
    <button onClick={onClose}>X</button>
  </div>)
};