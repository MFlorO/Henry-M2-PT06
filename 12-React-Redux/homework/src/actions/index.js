 
const apikey = "1bc6c554"


 export function addMovieFavorite(payload) {
    return {
         type: addMovie, 
         payload 
         //El playload va a ser el nombre de la pelicula (objeto de esa pelicula)
        };
  }
  
  
  export function removeMovieFavorite(id){
    return {
        type: removeMovie, 
        payload: id,
        //El playload va a ser la pelicula a eliminar 
       };
  }

  export function getMovies(titulo) {
    return function(dispatch) { //LLAMADA ASINCRONICA --> NO SE CUANDO VA A SUCEDER
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ 
              type: getMovie,
              payload: json, //Objeto que recibo en mi request
            });
        });
    };
  }
  

  export function getMovieDetail(idMovie){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
         .then(resp => resp.json())  // A esa respuesta convertila en json(objeto javascript)
         .then(json => { // Me promete que va a hacerlo... entonces, cuando lo hagas.. a ese objeto json:
           dispatch({  //Aplicale un despatch de una accion
            type: getMovieD, 
            payload: json,
            // El playload va a ser el {} con los detalles 
            // de la pelicula que seleccionamos
           })
         })
       };
  }


  export const addMovie = "ADD_MOVIE_FAVORITE";
  export const removeMovie = "REMOVE_MOVIE_FAVORITE";
  export const getMovie = "GET_MOVIES";
  export const getMovieD = "GET_MOVIE_DETAIL";