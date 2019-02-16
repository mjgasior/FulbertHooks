import React from "react";
import { useChat } from "./socketHooks";
import { SendMessage } from "./SendMessage";

export const Conversation = ({ nickname }) => {
  const { messages, publish, typingUsers, startTyping } = useChat(nickname);
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      {typingUsers.map((nickname, index) => (
        <div key={index}>{nickname} is typing...</div>
      ))}
      <SendMessage publish={publish} startTyping={startTyping} />
    </div>
  );
};
