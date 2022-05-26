import React from 'react';
import { connect } from 'react-redux';
import { getAllCommentsPost } from '../../actions/index';

import './CommentsPost.css';

// crearemos un componente en donde mostraremos los comentarios de cada post. 
// Este componente se deberá renderizar en el componente UserPosts.js.

export class CommentsPost extends React.Component {
  
     componentDidMount() {
        const id = this.props.id
         this.props.getAllCommentsPost(id)
        .then(c =>{
          console.log("Comentarios cargados con éxito...")
        })
        .catch(err =>console.error(err))
    }

    render() {
      const idPost = this.props.id
      return (
        <div className="details">
          <h4>Comentarios del Post {idPost}</h4>
           {!this.props.commentsPost ? console.log("Espero ...") : this.props.commentsPost.map(function(comment){
               return (
                <div className= "container">
                    <p key ={comment.id}> 
                       <h4>{comment.id} - {comment.name}</h4> 
                        <p> {comment.body}</p>  
                    </p>
                </div>
              )
          
             })}
            </div>
        )
    }
}

export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAllCommentsPost: (id) => dispatch(getAllCommentsPost(id))
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CommentsPost);