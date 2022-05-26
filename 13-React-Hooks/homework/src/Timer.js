import React, { useState, useEffect, useRef  } from 'react';
import "./Timer.css"

const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const myRef = useRef(null);

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }

    if (!useRef && tipo === 'Cuenta Regresiva') {
      reset()
    }

    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]); 
  //Siempre que el componente se monte se va a ejecutar. Pero solo va a volver a ejecutarse 
  //cuando se cambien solo los status dentro de []



  




  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value //Se guarda en una variable el valor de ese imput
    setSegundos(ref) //Modifica el estado segundos y me guarda esa varianle ref
}





  function toggle() {
    setActivo(!activo); //Me cambia el valor de mi estado al opuesto. si sta en false lo pone en true y si esta en true en false
  }



  function reset() { //Vuelve mis valores a los estados originales
    setSegundos(0); 
    setActivo(false);
  }
  

  function cambioTipo() { //Me cambia el status tipo en contador o cuenta regresiva
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}
  



  return (
    <div className="app">
      <div className="time">
        {segundos}seg
      </div>
      <div className="row">
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>
          {activo ? 'Pausa' : 'Inicio'} 
          {/* Si el status activo es igual a false: el boton va a mostrar "inicio", 
          pero si active es igual a true: el boton va a mostrar "pausa" */}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' ? <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/> : null}
      {/* El boton "cmbioTipo" va a mostrar el tipo. Puede ser "Contador" o "Cuenta Regresiva". 
      Si el status tipo es igual a cuenta regesiva muestra un imput para ingresar los segundos. */}
      {/* EL REG={MYREF} SE PONE EN EL INPUT QUE QUIERO QUE CAPTURE */}
      {/* con la funcion agregar segundos agrego el valor que capto al input */}

    </div>
  );
};

export default Timer;