const express = require("express");

//const mongoose = require("mongoose");
PORT = 4000
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);


//dotenv file use for hiding sensitive data
//require("dotenv").config();

//const app = express();
//app.use(cookieParser());

// this is used for data reading and posting
//app.use(express.json());

connections = [];




//checking api work properly or not
app.get("/api/check", (req, res) => {
  res.json("get the api");
});




//listening port
server.listen(process.env.PORT || 4000)
console.log("server is running..")


io.sockets.on("connection", function(socket){
  connections.push(socket)
  console.log("socket is on", connections.length)

  socket.on("disconnected", function(data){
    connections.splice(connections.indexOf(socket), 1)
    console.log("socket disconnected", connections.length)
  })
  socket.on("nodejs server port", function(data){
    console.log(data)
    io.sockets.emit("IOS client port", {msg:"hii IOS client"})
  })
})
// io.on('connection', socket => {
//   socket.emit('request', /* … */);                      // emit an event to the socket
//   io.emit('broadcast', /* … */);                           // emit an event to all connected sockets
//   socket.on('reply', () => { /* … */ });                     // listen to the event
// });