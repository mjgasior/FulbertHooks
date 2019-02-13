import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useChat() {
  const [count, setCount] = useState(0);
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
      setCount(count + 1);
    });
  }, []);

  console.log(count);

  return {
    messages: state.messages,
    send: msg => state.socket.emit("chat message", msg)
  };
}

export function useChatter() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = openSocket("http://localhost:3003");
    socket.on("chat message", msg => {
      const newState = update(messages, { $push: [msg] });
      setMessages(newState);
    });
  }, []);

  return { messages };
}
