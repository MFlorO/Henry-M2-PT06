const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) { //EL REDUCER!!
  switch(action.type) {
    case INCREMENTO:
      return {
        ...state, 
        contador: state.contador + 1
      }
    case DECREMENTO:
      return {
        ...state,  // Hacemos una copia del estado antes de modificarlo, para poder guardarlo. 
                  // Sino se pisaria el estado continuamente y se perderian las demas propiedades del estado (si hubiera)
        contador: state.contador - 1 
      }
    default:
      return state; //SIEMPRE TIENE QUE ESTAR EL CASO DEFAULT
  }
}

// function contador(state = initialState, action) {
//   if(action.type === INCREMENTO){
//     return {
//       contador: state.contador + 1
//     }
//   }
//   if(action.type === DECREMENTO){
//     return {
//       contador: state.contador - 1
//     }
//   }

//   return state
// }


module.exports = contador;