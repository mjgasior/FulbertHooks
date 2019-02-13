var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
require("dotenv").config();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from public api"
  });
});

io.on("connection", function(socket) {
  io.emit("chat message", "User joined chat");
  socket.on("chat message", function(nickname, message) {
    io.emit("chat message", nickname, message);
  });
  socket.on("disconnect", function() {
    io.emit("chat message", "User left chat");
  });
});

http.listen(process.env.REACT_PORT, function() {
  console.log("Server working @" + process.env.REACT_PORT);
});
