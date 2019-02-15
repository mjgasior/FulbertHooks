import { useState, useEffect } from "react";
import update from "immutability-helper";
import openSocket from "socket.io-client";

export function useChat() {
  const [state, setState] = useState({
    publish: null,
    messages: []
  });

  useEffect(() => {
    const socket = openSocket("http://localhost:3003");

    const publish = (nickname, message) =>
      socket.emit("chat message", nickname, message);

    setState(previousState =>
      update(previousState, {
        publish: { $set: publish }
      })
    );

    socket.on("chat message", (nickname, message) => {
      setState(previousState =>
        update(previousState, {
          messages: { $push: [`${nickname}: ${message}`] }
        })
      );
    });
  }, []);

  return state;
}
