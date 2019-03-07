import React from "react";
import { TypingMessage } from "./Messages/TypingMessage";

export const Typing = ({ mode, users }) => {
  return (
    <>
      {mode &&
        users.map((nickname, index) => (
          <TypingMessage key={index + nickname} nickname={nickname} />
        ))}
    </>
  );
};
