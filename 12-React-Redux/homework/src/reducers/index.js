import { addMovie, removeMovie, getMovie, getMovieD} from "../actions/index"


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };




export default function rootReducer(state = initialState, action) {

 switch(action.type){
    case addMovie:
        return{
            ...state,
        //   moviesFavourites: [state.moviesFavourites.concat(action.payload)]
         moviesFavourites: [...state.moviesFavourites, action.payload]

        }

    case removeMovie:
        return{
            ...state, //Copio el estado para NO modificar el estado viejo
            moviesFavourites : state.moviesFavourites.filter( peliculas => peliculas.id !== action.payload)
           // CON EL FILTER ESTOY TOMANDO TODAS LAS PELICULAS MENOS LA QUE ME COINCIDE CON EL ID ASI LA ELIMINO
        }
     
    case getMovie:
        return {
          ...state,
          moviesLoaded: action.payload.Search // De donde saca Search? del JSON DE LA APPI. Playload: es el json-appi-
                                              // Y el Search: es la propiedad del json que recibo que me interesa 
        }

    case getMovieD:
        return {
            ...state,
            movieDetail: action.payload //Voy pisando el objeto
        }



    default: 
      return state;
  }
}
  