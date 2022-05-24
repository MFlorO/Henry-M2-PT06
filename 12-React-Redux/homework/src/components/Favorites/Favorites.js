import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

import {removeMovieFavorite} from "../../actions/index"




export  class ConnectedList extends Component {


  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}

          {this.props.movies?.map(pelicula =>  // "movies" es mi prop que viene del estado moviesFavourites que es un arreglo de objetos
          <div key={pelicula.id}>
             <Link to={`/movie_detail/${pelicula.id}`}>
               {/* <p>{console.log(e)}</p> */}
                 <li>{pelicula.title}</li>
             </Link>

             <button onClick={() => this.props.removeMovieFavorite(pelicula.id)}> X </button>
          </div>
          )}
        </ul>
      </div>
    );
  }
}



function mapStateToProps (state){
  return{
    movies: state.moviesFavourites
  };
}

// export const mapDispatchProps ={
//       removeMovieFavorite:removeMovieFavorite
// }


export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);