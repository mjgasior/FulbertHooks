import React, { useContext } from "react";
import { MyMessage } from "./MyMessage";
import { UserMessage } from "./UserMessage";
import { Notification } from "./Notification";
import styled from "styled-components";
import ScrollContext from "../ScrollContext";

const Nickname = styled.div`
  color: #ccc;
`;

const Messages = ({ messages }) => {
  const { isAtBottom } = useContext(ScrollContext);
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
                canTriggerAutoScroll={isAtBottom}
                isFirst={index === 0}
                isLast={index === messages.length - 1}
              />
            );
          case "USER_LOG":
            return (
              <Notification key={index} canTriggerAutoScroll={isAtBottom}>
                {message}
              </Notification>
            );
          case "USER_MESSAGE":
            return (
              <React.Fragment key={index}>
                {index === 0 && <Nickname>{nickname}</Nickname>}
                <UserMessage
                  message={message}
                  date={date}
                  isFirst={index === 0}
                  isLast={index === messages.length - 1}
                  canTriggerAutoScroll={isAtBottom}
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
