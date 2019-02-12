var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
require("dotenv").config();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from public api"
  });
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/socketFile.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

http.listen(process.env.REACT_PORT, function() {
  console.log("Server working @" + process.env.REACT_PORT);
});
