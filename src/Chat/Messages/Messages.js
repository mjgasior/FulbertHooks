import React from "react";
import { MyMessage } from "./MyMessage";
import { UserMessage } from "./UserMessage";
import { Notification } from "./Notification";

const Messages = ({ messages }) => {
  return (
    <>
      {messages.map(({ type, message, nickname, date }, index) => {
        switch (type) {
          case "SELF":
            return <MyMessage key={index} message={message} date={date} />;
          case "USER_LOG":
            return <Notification key={index}>{message}</Notification>;
          case "USER_MESSAGE":
            return (
              <UserMessage
                key={index}
                nickname={nickname}
                message={message}
                date={date}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Messages;
