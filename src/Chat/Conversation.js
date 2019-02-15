import React from "react";
import { useChatter } from "./socketHooks";

export const Conversation = () => {
  const { messages } = useChatter();
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};
