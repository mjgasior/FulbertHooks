import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { getDate } from "./dates";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
`;

const Content = styled(Message)`
  background: #fff;
  color: #282c34;
  max-width: 70%;
`;

const Nickname = styled.div`
  color: #ccc;
`;

export const UserMessage = ({ message, nickname, date }) => {
  return (
    <>
      <Nickname>{nickname}</Nickname>
      <Container>
        <Content data-date={getDate(date)} left={true}>
          {message}
        </Content>
      </Container>
    </>
  );
};
