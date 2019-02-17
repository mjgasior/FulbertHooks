import React from "react";
import styled from "styled-components";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(({ type, message, nickname }, index) => {
        switch (type) {
          case "SELF":
            return <div key={index}>You wrote {message}</div>;
          case "USER_LOG":
            return <div key={index}>{message}</div>;
          case "USER_MESSAGE":
            return <div key={index}>{nickname}: {message}</div>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Messages;
