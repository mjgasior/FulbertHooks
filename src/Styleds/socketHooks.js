import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useChat() {
  const [state, setState] = useState({
    socket: openSocket("http://localhost:3003"),
    messages: []
  });

  useEffect(() => {
    state.socket.on("chat message", msg => {
      const newState = update(state, {
        messages: { $push: [msg] }
      });
      setState(newState);
    });
  }, []);

  return {
    messages: state.messages,
    send: msg => state.socket.emit("chat message", msg)
  };
}
