import React from "react";
import { useChat } from "./socketHooks";

export const Conversation = ({ nickname }) => {
  const { messages, publish } = useChat(nickname);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <button onClick={() => publish(nickname, "This is the message")}>Publish</button>
    </div>
  );
};
