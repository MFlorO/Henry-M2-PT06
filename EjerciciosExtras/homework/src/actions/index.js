// import { get } from "@11ty/eleventy/src/TemplateCache";

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';



export function getAllPosts() {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then(json => dispatch({
        type: "GET_ALL_POSTS",
        payload: json
        //el payload sera el listado de todos los posts que existen en nuestro blog.
      }))
  }
}

export function getAllUserPosts(id) {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then(json => dispatch({
        type: "GET_ALL_USERS_POST",
        payload: json
        //nuestro payload seran los posts del usuario cuya id recibimos como parámetro
      }))
  };
}


//REVISAR

export function getAllCommentsPost() {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then(json => dispatch({
    type: "GET_ALL_COMMENTS_POST",
    payload: json
    // nuestro payload seran los comentarios del post que recibamos de nuestra request,
    // el cual buscamos por su id (recibido como parámetro).

  }))
}}


export function getAllUsers() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => dispatch({
        type: "GET_ALL_USERS",
        payload: json
        //el payload que pasaremos cuando hagamos un dispatch de esa action sera el listado de usuarios del Blog
      }))
  };
}


