import React from "react";
import styled from "styled-components";
import { Message } from "./Message";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Content = styled(Message)`
  background: #fff;
  color: #282c34;
  max-width: 70%;
`;

const Nickname = styled.div`
  color: #ccc;
`;

export const UserMessage = ({ message, nickname }) => {
  return (
    <>
      <Nickname>{nickname}</Nickname>
      <Container>
        <Content>{message}</Content>
      </Container>
    </>
  );
};
