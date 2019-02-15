import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useChat() {
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
