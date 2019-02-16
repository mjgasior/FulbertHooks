import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useChat(nickname) {
  const [state, setState] = useState({
    publish: null,
    startTyping: null,
    messages: [],
    typingUsers: []
  });

  useEffect(() => {
    const socket = openSocket("http://localhost:3003", {
      query: `nickname=${nickname}`
    });

    const publish = message => socket.emit("chat message", message);
    const startTyping = () => socket.emit("typing");

    setState(previousState =>
      update(previousState, {
        publish: { $set: publish },
        startTyping: { $set: startTyping }
      })
    );

    socket.on("user message", message => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [message] }
        })
      );
    });

    socket.on("chat message", (nickname, message) => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [`${nickname}: ${message}`] }
        })
      );
    });

    socket.on("typing", nickname => {
      setState(previousState =>
        update(previousState, {
          typingUsers: { $push: [nickname] }
        })
      );
    });

    socket.on("stop typing", nickname => {
      setState(previousState =>
        update(previousState, {
          typingUsers: arr => arr.filter(item => item !== nickname)
        })
      );
    });
  }, []);

  return state;
}
