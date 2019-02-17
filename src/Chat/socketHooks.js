import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useSocket(nickname) {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const newSocket = openSocket("http://localhost:3003", {
      query: `nickname=${nickname}`
    });
    setSocket(newSocket);
  }, []);

  return socket;
}

export function useChat(socket) {
  const [state, setState] = useState({
    publish: null,
    startTyping: null,
    messages: [],
    typingUsers: []
  });

  useEffect(() => {
    if (!socket) {
      return;
    }
    const publish = message => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [`You wrote: ${message}`] }
        })
      );
      socket.emit("chat message", message);
    };

    setState(previousState =>
      update(previousState, {
        publish: { $set: publish }
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
  }, [socket]);

  return state;
}

export function useTyping(socket) {
  const [state, setState] = useState({
    startTyping: null,
    typingUsers: []
  });

  useEffect(() => {
    if (!socket) {
      return;
    }

    const startTyping = () => socket.emit("typing");

    setState(previousState =>
      update(previousState, {
        startTyping: { $set: startTyping }
      })
    );

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
  }, [socket]);

  return state;
}