import React from "react";
import styled from "styled-components";

const Message = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
`;

const MyMessage = styled(Message)`
  background: #cc8400;
  color: white;
`;

const UserMessage = styled(Message)`
  background: #fff;
  color: #282c34;
`;

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(({ type, message, nickname }, index) => {
        switch (type) {
          case "SELF":
            return <MyMessage key={index}>You wrote {message}</MyMessage>;
          case "USER_LOG":
            return <Message key={index}>{message}</Message>;
          case "USER_MESSAGE":
            return (
              <UserMessage key={index}>
                {nickname}: {message}
              </UserMessage>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Messages;
