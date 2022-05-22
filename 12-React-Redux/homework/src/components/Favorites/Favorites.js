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

          {this.props.movies?.map(el =>  // "movies" es mi prop que viene del estado moviesFavourites que es un arreglo de objetos
          <div key={el.id}>
             <Link to={`/movie/${el.id}`}>
               {/* <p>{console.log(e)}</p> */}
                 <li>{el.title}</li>
             </Link>

             <button onClick={() => this.props.removeMovieFavorite(el.id)}> X </button>
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