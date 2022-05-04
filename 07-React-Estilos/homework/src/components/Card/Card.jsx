import styles from './Card.module.css';
import React from 'react';

const Card = function({max,min,name,img,onClose}) {
  // acá va tu código
  return (
  <div className={name === "Cairns" ? styles.divCains : styles.divNoCains}> 
   {/* Me sirve para poder aplicar estilos segun una condicion */}
    <button className={styles.boton} onClick={onClose}>X</button>
    <h4 className={styles.h4}>{name}</h4>
    <div className={styles.div}>
      <p className={styles.p1}> Min </p>
      <p className={styles.p2}>{min}</p>
    </div>
    <div className={styles.div}>
      <p className={styles.p1}> Max </p>
      <p className={styles.p2}>{max}</p>
    </div>
    <img className={styles.img}src={`http://openweathermap.org/img/wn/${img}@2x.png `} alt={img}/> 

  </div>)
};

export default Card; 