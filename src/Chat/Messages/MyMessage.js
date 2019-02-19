import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { getDate } from "./dates";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`;

const Content = styled(Message)`
  background: #cc8400;
  color: white;
  max-width: 70%;
`;

export const MyMessage = ({ message, date }) => {
  return (
    <Container>
      <Content data-date={getDate(date)}>{message}</Content>
    </Container>
  );
};
