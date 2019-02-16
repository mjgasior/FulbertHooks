import React from "react";
import { useChat } from "./socketHooks";
import { SendMessage } from "./SendMessage";

export const Conversation = ({ nickname }) => {
  const { messages, publish } = useChat(nickname);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <SendMessage publish={publish} />
    </div>
  );
};
