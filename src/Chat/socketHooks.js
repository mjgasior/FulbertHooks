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

const defaultMessage = [
  { type: "SELF", message: "This is first" },
  { type: "USER_LOG", message: "User benis logged" },
  { type: "SELF", message: "This is second" },
  { type: "USER_MESSAGE", message: "Hey you!", nickname: "benis" },
  { type: "USER_MESSAGE", message: "It's me", nickname: "benis" },
  { type: "SELF", message: "This is third" }
];

export function useChat(socket) {
  const [state, setState] = useState({
    publish: null,
    messages: defaultMessage
  });

  useEffect(() => {
    if (!socket) {
      return;
    }
    const publish = message => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [{ type: "SELF", message }] }
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
          messages: { $push: [{ type: "USER_LOG", message }] }
        })
      );
    });

    socket.on("chat message", (nickname, message) => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [{ type: "USER_MESSAGE", message, nickname }] }
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
