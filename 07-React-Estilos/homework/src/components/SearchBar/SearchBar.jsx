import React from 'react';
import styles from "./SearchBar.module.css";




export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    
    <div className={styles.divPrincipal}>
      <input className={styles.inpt} type={"text"} placeholder="Ciudad..." />
      <button className={styles.btn} onClick={function(){ onSearch("Una Ciudad")}}>AGREGAR</button>
    </div>
    )
};