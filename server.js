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
  const { nickname } = socket.handshake.query;
  let isTyping = false;

  socket.broadcast.emit("user message", `User ${nickname} joined chat`);

  socket.on("chat message", function(message) {
    io.emit("chat message", nickname, message);
  });

  socket.on("disconnect", function() {
    io.emit("user message", `User ${nickname} left chat`);
  });

  socket.on("typing", () => {
    if (!isTyping) {
      socket.broadcast.emit("typing", nickname);
      isTyping = true;

      setTimeout(() => {
        socket.broadcast.emit("stop typing", nickname);
        isTyping = false;
      }, 1000);
    }
  });
});

http.listen(process.env.REACT_PORT, function() {
  console.log("Server working @" + process.env.REACT_PORT);
});
