import React from "react";
import { MyMessage } from "./MyMessage";
import { UserMessage } from "./UserMessage";
import { Notification } from "./Notification";
import styled from "styled-components";

const Nickname = styled.div`
  color: #ccc;
`;

const Messages = ({ messages }) => {
  return (
    <>
      {messages.map(({ type, message, nickname, date }, index) => {
        switch (type) {
          case "SELF":
            return (
              <MyMessage
                key={index}
                message={message}
                date={date}
                isFirst={index === 0}
                isLast={index === messages.length - 1}
              />
            );
          case "USER_LOG":
            return <Notification key={index}>{message}</Notification>;
          case "USER_MESSAGE":
            return (
              <React.Fragment key={index}>
                {index === 0 && <Nickname>{nickname}</Nickname>}
                <UserMessage
                  message={message}
                  date={date}
                  isFirst={index === 0}
                  isLast={index === messages.length - 1}
                />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Messages;
