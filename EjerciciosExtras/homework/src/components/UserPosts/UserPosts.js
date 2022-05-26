import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from "../../actions/index.js"
import CommentsPost from "../CommentsPost/CommentsPost.js"


//crearemos un componente en donde mostraremos los posts creados por un usuario en particular.
//Accedemos a este componente haciendo click en el link post, desde el listado de usuarios.

export class UserPosts extends React.Component {



  componentDidMount() { //ESTE METODO ES CUANDO EL COMPONENTE SE MONTÓ
    this.props.getAllUserPosts(this.props.match.params.id)

    console.log(this.props)
  }

  render() {

    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.userid}</h4>
        <h2> {this.props.title}</h2>
        <h2> {this.props.body}</h2>
        <CommentsPost />
      </div>
    )
  }
}


export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  };
}


export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: (e) => dispatch(getAllUserPosts(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);