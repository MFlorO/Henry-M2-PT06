import React, { useState } from 'react';




function Ejemplo({lang}) {
  if (lang === 'hun') { //Si el lenguaje es hungaro
    return ( //Retorna este formulario
      <form> 
        <input key="lastName" type="text" placeholder="Vezetéknév" name="lastName"/>
        <input key="firstName" type="text" placeholder="Keresztnév" name="firstName"/>
        <input key="middleInitial" type="text" placeholder="KB" style={{width: 30}} name="middleInitial"/> 
      </form>
      )
  }
  return ( // Sino... retorna este
      <form>
        <input key="firstName" type="text" placeholder="First Name" name="firstName"/> 
        <input key="middleInitial" type="text" placeholder="MI" style={{width: 30}} name="middleInitial"/> 
        <input key="lastName" type="text" placeholder="Last Name" name="lastName"/> 
      </form>
    );
}


//########### SON DOS FUNCIONES APARTES (COMPONENTES DISTINTOS) QUE SE VINCULAN ##############



export default function Lang() {
  const [lang, setLang] = useState('hun');

  return <div>
    <Ejemplo lang={lang} />
    <button onClick={(e) => setLang((old) => setLang(old === 'hun' ? 'es' : 'hun'))}>Lang</button>
     </div>
} 