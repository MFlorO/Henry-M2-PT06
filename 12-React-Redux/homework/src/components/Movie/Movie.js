import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

export class Movie extends React.Component {

    

    componentDidMount(){ //ESTE METODO ES CUANDO EL COMPONENTE SE MONTÓ
        this.props.getMovieDetail(this.props.match.params.id) 

        // console.log(this.props)
        console.log(this.props.movie)
        // console.log(this.props.movie.Title)
        // ASI VEO QUE HAY EN PROPS
    }

    render() {
        return (
            <div className="movie-detail">
               <h3>{this.props.movie.Title}</h3>
               <h4>Actors:{this.props.movie.Actors}</h4>
               <i>{this.props.movie.Plot}</i>
               <br />
               <br />
               <img src={this.props.movie.Poster} alt="Imagen de la pelicula"/>

            </div>
        );
    }
}




function mapStateToProps (state){
    return{
      movie: state.movieDetail
    };
  }
  
  
  export default connect(mapStateToProps,{getMovieDetail})(Movie);