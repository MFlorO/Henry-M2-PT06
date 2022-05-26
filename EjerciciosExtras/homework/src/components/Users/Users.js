import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

// mostraremos la lista de usuarios que generan post en nuestro blog.(Debemos renderizarla en nuestra home page) 

export class Users extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        {this.props.users && this.props.users.map(usuario =>
          <div key={usuario.id}>
            <table>
              <thead>
                <tr className="header">
                  <th>NAME</th>
                  <th>NAMEUSER</th>
                  <th>Ver</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{this.props.name}</td>
                  <td>{this.props.username}</td>
                  <td><Link to={`/users/${this.user.id}/posts`} className="button">Posts</Link></td>
                </tr>
              </tbody>

            </table>
          </div>
        )}


      </div>
    );
  }

}


export function mapStateToProps(state) {
  return {
    users: state.users
  };
}


export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: (e) => dispatch(getAllUsers(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


// Ya tenemos lo que necesitamos para mostrar nuestros usuarios del Blog y nuestro evento para llamar
// al listado de todos los posts de dicho usuario. Como la información está en un array, 
// mapeamos nuestros usuarios( Recuerda colocar cada dato solicitado en un <td>, ya que lo mostraremos en una tabla),
// y hacemos un return con el nombre, el nombre de usuario y un boton que tendra un link para ver 
// todos los posts de cada usuario. 