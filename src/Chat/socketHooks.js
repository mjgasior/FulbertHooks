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
  { type: "SELF", message: "This is first", date: 1550315471 },
  { type: "USER_LOG", message: "User denis logged", date: 1550315471 },
  {
    type: "SELF",
    message:
      "This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second This is second",
    date: 1550401871
  },
  { type: "USER_MESSAGE", message: "Hey you!", nickname: "denis", date: 1550401871 },
  { type: "USER_MESSAGE", message: "It's me", nickname: "denis", date: 1550488271 },
  { type: "SELF", message: "This is third", date: 1550574671 }
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
      const date = Date.now();
      setState(previousState =>
        update(previousState, {
          messages: { $push: [{ type: "SELF", message, date }] }
        })
      );
      socket.emit("chat message", { message, date });
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

    socket.on("chat message", ({ message, date, nickname }) => {
      setState(previousState =>
        update(previousState, {
          messages: {
            $push: [{ type: "USER_MESSAGE", message, date, nickname }]
          }
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
