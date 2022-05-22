import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';

import {addMovieFavorite,getMovies} from "../../actions/index.js"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  };


   handleChange (event){
    
    this.setState({ title: event.target.value });
  

  }


  handleSubmit(event) {
    event.preventDefault();
    //ACA DESPACHO LA ACCION GETMOVIE
    this.props.getMovies(this.state.title) // DONDE VA A ESTAR GUARDADO EL VALOR QUE MI USUARIO PONGA EN EL BOTON BUSCAR?
                                          // EN EL ESTADO DEL COMPONENTE. DENTRO DE LA PROPIEDAD "TITLE"
  
  }

  reset(){
    this.setState({
      title: {...this.state,title:""}
    })
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={((e) => this.handleChange(e))}
            />
          </div>
          <button type="submit">BUSCAR</button>
          <button onClick={() => this.reset()}> RESET </button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {this.props.movies?.map(e =>
                                      <div key = {e.imdbID}>
                                        <Link to={`/movie/${e.imdbID}`}>
                                          <li>{e.Title}</li>
                                        </Link>
                                        <button onClick={() => this.props.addMovieFavorite({title: e.Title, id: e.imdbID})}> FAV </button>
                                      </div> 
                                  )} 
        </ul>
      </div>
    );
  }
}


function mapStateToProps (state){
  return{
    movies: state.moviesLoaded
  };
}


export default connect(mapStateToProps,{addMovieFavorite,getMovies})(Buscador);