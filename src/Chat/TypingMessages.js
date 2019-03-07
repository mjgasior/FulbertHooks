import React from "react";
import { TypingMessage } from "./Messages/TypingMessage";

export const TypingMessages = ({ users }) => {
  return (
    <>
      {users.map((nickname, index) => (
        <TypingMessage key={index + nickname} nickname={nickname} />
      ))}
    </>
  );
};
