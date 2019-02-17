import React from "react";
import { MyMessage } from "./MyMessage";
import { UserMessage } from "./UserMessage";
import { Notification } from "./Notification";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(({ type, message, nickname }, index) => {
        switch (type) {
          case "SELF":
            return <MyMessage key={index} message={message} />;
          case "USER_LOG":
            return <Notification key={index}>{message}</Notification>;
          case "USER_MESSAGE":
            return (
              <UserMessage key={index} nickname={nickname} message={message} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Messages;
