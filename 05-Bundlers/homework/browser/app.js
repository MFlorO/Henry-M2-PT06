// EL APP NO EXPORTA NADA PORQUE ES NUESTRA ENTRY POINT

  // var whiteboard = window.whiteboard; //Voy a necesitar el whiteboard.js
  // let whiteboard = require("./whiteboard"); // Esto significa que en algun lado voy a tener module.exports

  import {whiteboard} from "./whiteboard";


  // let io = require("socket.io-client");
  import io from "socket.io-client";

  let socket = io(window.location.origin); //Voy a necesitar el socket.io-client

  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

