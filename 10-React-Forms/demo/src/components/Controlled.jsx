import React, { useState } from 'react';

export default function Form() {

  // const [state, setState] = useState({})
  
  

  // function validaciordelFormulario(vetar){
  //   let errores = {};

  //   if(!valor.name){errores.name = "No hay informacion del nombre"
  //   } if else (!valor.mail){errores.mail = "no hay informacion del mail"
  //   }else if(!/"\we(--1P\we) "().-1PAue) (. tw(2,3))+5/. test(valor.mail){
  //        errores.email = "El campo mail no es un email"
  //   }
  //   return errores
  //   }


  // function handleInputChange(e){
  //   setState({
  //     ...state,
  //     [e.target.username]:e.target.value
  //   })
  //
  //   setErrores(validaciordelFormulario ({
 //    ...state,
 //    [e.target.username]:e.target.value
  //  }) )
  // }


  // LA ANTERIOR FORMA ES OTRA MANERA DE HACER Y NO TENER QUE CREAR VARIOS ESTADOS POR CADA VARIABLE



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  return (
      <form>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" 
          onChange={(e) => validateUser(e.target.value)}/>

        {!error ? null : <span>{error}</span>}

        <input name="password" value={password} placeholder="password" 
        type="password" onChange={(e) => setPassword(e.target.value)}/>

        <input type="submit" />
      </form>
    );
}



// <input className={error && 'danger'} onChange={(e) => handleInputChange(e)}
// name="username" type="text" value={username} placeholder="username" required />
